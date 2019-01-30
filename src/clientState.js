import { NOTE_FRAGMENT } from "./fragment";
import { GET_NOTES } from "./query";

export const defaults = {
    notes:[
        {
            __typename:'Note',
            id:1,
            title:"Something Cool Stuff",
            content:"# This is really fun!\n## Isn't it?"
        }
    ]
}

export const typeDefs = [`
    type Query{
        notes:[Note!]!
        note(id:Int!):Note!
    }    

    type Mutation{
        createNote(title:String!, content:String!):Note!
        editNote(id:Int!, title:String!, content:String!):Note!
    }

    type Note{
        id:Int!
        title:String!
        content:String!
    }

    schema{
        query: Query
        mutation: Mutation
    }
`]

export const resolvers = {
    Query:{
        note: (_, variables, {cache}) => {
            const id = cache.config.dataIdFromObject({
                __typename:"Note",
                id: variables.id
            })
            const note = cache.readFragment({ fragment:NOTE_FRAGMENT, id })
            
            return note
        } 
    },
    Mutation:{
        createNote:(_, variables, {cache}) => {
            const {notes} = cache.readQuery({ query:GET_NOTES })
            const { title, content } = variables
            const newNote = {
                __typename:"Note",
                id:notes.length+1,
                title,
                content
            }
            cache.writeData({
                data:{
                    notes:[newNote, ...notes]
                }
            })
            return newNote
        },
        editNote:(_, {id, title, content}, {cache}) => {
            const noteId = cache.config.dataIdFromObject({
                __typename:"Note",
                id
            })
            const note = cache.readFragment({fragment:NOTE_FRAGMENT, noteId})
            const updatedNote = {
                ...note,
                title,
                content
            }

            cache.writeFragment({
                id:noteId,
                fragment:NOTE_FRAGMENT,
                data:updatedNote
            })

            return updatedNote
        }
    }
}