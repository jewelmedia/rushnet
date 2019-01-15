import React from 'react'
import styled from 'styled-components'

import SeperatorLine from '../components/SeperatorLine';

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 60px auto;
    margin-bottom: 120px;

    display: grid;
    grid-template-rows: repeat(2, auto);

    /* background-color: #C4C4C4; */

    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`

const Content = styled.div`
    align-self: center;
    margin-top: 60px;
    margin-left: 15px;
    margin-right: 15px;    

    /* background-color: red; */

    & h2 {
        margin: 0 15px;
        text-align: center;
    }

    & p {
        margin: 0 15px;
        text-align: center;
    }


    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`

const TeamGroup = styled.div`
    /* background-color: blue; */
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px; 

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const TeamCard = styled.div`
    background-color: #F8F8F8;
    padding: 10px;

    border-radius: 24px;

    display: grid;
    grid-template-rows: 1fr auto auto;

    & img {
        max-width: 100%;
        max-height: 275px;
        height: auto;
        width: 100%;
        justify-self: center;
        align-self: center;
        margin: 10px auto;
        object-fit: contain;
        background-color: transparent;
    }

    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);

    & :hover {
        background: white;
        color: black;
        box-shadow: 0 10px 20px rgba(0,0,0, 0.25);
        transform: translateY(-3px);
    }   
`

const Info = styled.div`

    & h3 {
        margin: 10px;
    }

    & p {
        margin-top: 0;
        margin-left: 10px;
        margin-right: 10px;
        margin-bottom: 20px;
    }
`

const Team = props => (
    <Container>

        <Content>
            <h2>The Team</h2>
            <SeperatorLine />
            <p>Checkout our team.</p>
        </Content>

        <TeamGroup>

            <TeamCard>
                <img src={require('../images/logo-rushnet.png')} alt="" />
                <Info>
                    <h3>Person #1</h3>
                    <p>Person #1 Description</p>
                </Info>
            </TeamCard>

            <TeamCard>
                <img src={require('../images/logo-rushnet.png')} alt="" />
                <Info>
                    <h3>Person #2</h3>
                    <p>Person #2 Description</p>
                </Info>
            </TeamCard>

            <TeamCard>
                <img src={require('../images/logo-rushnet.png')} alt="" />
                <Info>
                    <h3>Person #3</h3>
                    <p>Person #3 Description</p>
                </Info>
            </TeamCard>

            <TeamCard>
                <img src={require('../images/logo-rushnet.png')} alt="" />
                <Info>
                    <h3>Person #4</h3>
                    <p>Person #4 Description</p>
                </Info>
            </TeamCard>

        </TeamGroup>

    </Container>
)

export default Team