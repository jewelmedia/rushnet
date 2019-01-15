import React from "react"
import styled from "styled-components"

import SeperatorLine from '../components/SeperatorLine';

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 60px auto;

    display: grid;
    grid-template-columns: repeat(2, 1fr);

    /* background-color: #C4C4C4; */

    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`

const Content = styled.div`
    align-self: center;
    margin-left: 15px;
    margin-right: 15px;

    /* background-color: red; */

    @media (max-width: 480px) {
        grid-row: 1;
    }
`

const ImageContainer = styled.div`
    align-self: center;
    margin-left: 15px;
    margin-right: 15px;

    /* background-color: red; */
`

const Image = styled.div`
    content: url(${props => props.image});
    max-width: 100%;
    max-height: 275px;
    height: auto;
    width: 100%;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 24px;

    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);

    & :hover {
        background: white;
        color: black;
        box-shadow: 0 10px 20px rgba(0,0,0, 0.25);
        transform: translateY(-3px);
    }
`

const ImageContent = props => (
    <Container>

        <ImageContainer>
            <Image image={props.image} />
        </ImageContainer>

        <Content>
            <h2>{props.title}</h2>
            <SeperatorLine />
            <p>{props.description}</p>
        </Content>

    </Container>
)

export default ImageContent