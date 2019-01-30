import React from 'react'
import Editor from '../../Components/Editor/Editor';
import {Mutation} from 'react-apollo'
import { ADD_NOTE } from '../../query';


export default class Add extends React.Component{
    _onSave = (title, content) => {
        const {history:{push}} = this.props

        if(title != '' && content != ''){
            this.createNote({variables:{title,content}})
            push("/")
        }
    }

    render(){
        return (
            <Mutation mutation={ADD_NOTE}>
                {
                    createNote => {
                        this.createNote = createNote
                        return <Editor onSave={this._onSave} />
                    }
                }
            </Mutation>
        )
    }
}