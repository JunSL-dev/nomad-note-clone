import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background:#2A3135;
    
    height:58.5px;
    width:100%;

    padding:0 25px;

    position:fixed;
    top:0;
    left:0;
`

export const Heading = styled(Link)`
    color:${props => props.color || '#010101'};
    font-size:1.3rem;
    font-weight:lighter;

    text-decoration:none;
    line-height:58.5px;
`
export const Container = styled.div`
    position:relative;

    width:80%;
    height:calc(100% - 58.5px);

    margin:0 auto;
    padding:85px 0;
`