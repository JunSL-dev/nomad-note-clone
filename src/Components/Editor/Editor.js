import React, {Component, Fragment} from 'react'
import { HeaderContainer, Header, SaveButton, ContentContainer, ContentInput, MarkdowPreview } from './style';

class Editor extends Component{
    state={
        title:this.props.title || '',
        content:this.props.content || '',
        id:this.props.id || null
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    _onSave = () => {
        const { onSave } = this.props
        const { title, content, id } = this.state

        onSave(title, content, id)
    }

    render(){
        const { title, content } = this.state

        return (
            <Fragment>
                <HeaderContainer>
                    <Header
                      value={title}
                      placeholder="Title" 
                      name="title"
                      onChange={this.inputHandler}
                    />
                    <SaveButton onClick={this._onSave}>save</SaveButton>
                </HeaderContainer>
                <ContentContainer>
                    <ContentInput
                      value={content}
                      placeholder="# this support markdown!"
                      name="content"
                      onChange={this.inputHandler}
                    >

                    </ContentInput>
                    <MarkdowPreview source={content} />
                </ContentContainer>
            </Fragment>
        )
    }
}

export default Editor