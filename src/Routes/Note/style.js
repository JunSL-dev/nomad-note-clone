import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import {Link} from 'react-router-dom'

export const HeadContainer = styled.div`
    width:100%;

    display:flex;
    align-items:center;
    justify-content:space-around;
`

export const Title = styled.h1`
    width:calc(100% - 160px);
    float:left;

    border-bottom:1px solid #4F5A77;

    font-size:3rem;

    color:#4F5A77;
`

export const Button = styled(Link)`
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

export const Markdown = styled(ReactMarkdown)`
    color:#4F5A77;
    font-size:2rem;

    padding:10px;
`