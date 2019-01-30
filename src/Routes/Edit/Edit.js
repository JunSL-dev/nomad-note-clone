import React from 'react'
import {Query, Mutation} from 'react-apollo'
import { GET_NOTE, EDIT_NOTE } from '../../query';
import Editor from '../../Components/Editor/Editor';

export default class Edit extends React.Component{
    _onSave = (title, content, id) => {
        const {history:{push}} = this.props

        if(title != '' && content != ``){
            this.editNote({variables:{title,content,id}})
            push(`/note/${id}`)
        }
    }

    render(){
        const {match:{params:{id}}} = this.props

        return (
            <Query query={GET_NOTE} variables={{id:parseInt(id)}}>
                {
                    ({loading, error, data:{note}}) => {
                        if (loading) return null
                        return (
                            <Mutation mutation={EDIT_NOTE}>
                                {
                                    editNote => {
                                        this.editNote = editNote
                                        return <Editor 
                                          id={note.id}
                                          title={note.title}
                                          content={note.content}
                                          onSave={this._onSave} 
                                        />
                                    }
                                }
                            </Mutation>
                        )
                    }
                }
            </Query>
        )
    }
}