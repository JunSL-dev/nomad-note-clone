import React,{Fragment} from 'react'
import { Query } from 'react-apollo';
import { GET_NOTES } from '../../query';
import { NoteEl, AddButton } from './style';

export default class Notes extends React.Component{
    render(){
        return <Query query={GET_NOTES}>
            {
                ({loading, error, data:{notes}}) => {
                    return (
                        <Fragment>
                            {
                                notes.map(note => {
                                    console.log(note)
                                    return (
                                        <NoteEl to={`/note/${note.id}`} key={note.id}>
                                            {note.title}
                                        </NoteEl>
                                    )
                                })
                            }
                            <AddButton to={`/add`}>+</AddButton>
                        </Fragment>
                    )
                }
            }
        </Query>
    }
}