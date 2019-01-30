import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

import Textarea from 'react-textarea-autosize'

export const HeaderContainer = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const Header = styled.input`
    width:calc(100% - 160px);
    float:left;

    background:transparent;
    outline:none;

    border:none;
    border-bottom:1px solid #4F5A77;

    font-size:3rem;

    color:#4F5A77;
`

export const SaveButton = styled.button`
    transition:.2s;
    float:right;

    width:100px;

    background:transparent;
    outline:none;
    border:2px solid #4F5A77;
    border-radius:2px;
    
    color:#4F5A77;
    font-size:1.8rem;
    text-align:center;
    text-decoration:none;

    cursor:pointer

    :hover{
        color:#F1F4F5;
        background:#4F5A77;
    }
`

export const ContentContainer = styled.div`
    position:relative;

    width:100%;
    height:calc(100% - 59px);

    padding:25px 0;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const ContentInput = styled(Textarea)`
    position:absolute;
    top:0;
    left:0;

    width:calc(50% - 10px);
    height:100%;
    padding:25px 0;

    resize:none;

    outline:none;
    border:none;
    background:transparent;

    color:#4F5A77;
    font-size:2rem;
`

export const MarkdowPreview = styled(ReactMarkdown)`
    position:absolute;
    top:0;
    right:0;

    width:calc(50% - 10px);
    height:100%;

    color:#4F5A77;
    font-size:2rem;
`