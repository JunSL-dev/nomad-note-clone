import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NoteEl = styled(Link)`
    transition:.5s;

    display: block;

    padding:10px 15px;

    color:rgba(120,129,148,0.7);
    font-size:1.2rem;
    font-weight:bold;
    text-decoration:none;

    cursor:pointer;

    :hover{
        color:rgba(120,129,148,1);
        box-shadow:2px 0px 1px -2px #4F5A77 inset;
    }
`

export const AddButton = styled(Link)`
    transition:.2s;

    position:absolute;
    bottom:25px;
    right:25px;

    width:50px;
    height:50px;

    text-align:center;
    line-height:40px;
    text-decoration:none;
    font-size:2.5rem;

    border-radius:50%;
    border:2px solid #4F5A77;

    background:#4F5A77;
    color:#F1F4F5;

    :hover{
        background:#F1F4F5;
        color:#4F5A77;
    }
`