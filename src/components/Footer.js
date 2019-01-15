import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

const Container = styled.div`
    /* margin-top: 120px; */
    position: absolute;
    right: 0;
    bottom: -100px;
    left: 0;
    padding: 1rem;
    background-color: black;
    text-align: center;

    display: grid;
    grid-template-rows: repeat(2, auto);

    & p {
        color: rgba(255, 255, 255, 0.6);
    }

    & h4 {
        color: rgba(255, 255, 255, 0.6);
        font-size: 15px;
        margin: 0;
        font-weight: 200;
    }
`

const LinkGroup = styled.div`
    max-width: 500px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 20px;

    & a {
        padding-top: 1rem;
        font-size: 17px;
        color: white;
    }
`

const Footer = () => (
    <Container>
        <LinkGroup>
            <Link to="/">Home</Link>
            <Link to="#contact">Contact</Link>
            <Link to="#beverages">Beverages</Link>
        </LinkGroup>
        <p>© 2018 RushNet, Inc.</p>
    </Container>
)

export default Footer 