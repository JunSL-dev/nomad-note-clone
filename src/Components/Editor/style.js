import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

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
    width:100%;
    height:calc(100% - 59px);

    padding:25px 0;

    display:flex;
    justify-content:space-around;
    align-items:center;
`

export const ContentInput = styled.textarea`
    width:calc(50% - 10px);
    height:100%;

    resize:none;

    outline:none;
    border:none;
    background:transparent;

    color:#4F5A77;
    font-size:2rem;
`

export const MarkdowPreview = styled(ReactMarkdown)`
    width:calc(50% - 10px);
    height:100%;

    color:#4F5A77;
    font-size:2rem;
`