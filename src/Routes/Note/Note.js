import React from 'react'
import { Query } from 'react-apollo';

import {GET_NOTE} from '../../query'
import { Title, HeadContainer, Button, Markdown } from './style';


export default class Note extends React.Component{
    render(){
        const {match:{params:{id}}} = this.props
        return (
            <Query query={GET_NOTE} variables={{id:id}}>
                {
                    ({loading, error, data:{note}}) => {
                        if(loading) return null
                        return (
                            <>
                                <HeadContainer>
                                    <Title>{note.title}</Title>
                                    <Button to={`/edit/${note.id}`}>Edit</Button>
                                </HeadContainer>
                                <Markdown source={note.content} />
                            </>
                        )
                    }
                }
            </Query>
        )
    }
}