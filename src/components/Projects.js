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

const ProjectGroup = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 30px auto;

    display: grid;
    grid-template-columns: repeat(3, 1fr);

    /* background-color: aqua; */

    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`

const ProjectCard = styled.div`
    /* align-self: center; */
    margin-left: 15px;
    margin-right: 15px;
    border-radius: 24px;

    display: grid;
    grid-template-rows: repeat(2, auto);

    background-color: #F9FCFF;

    & h3 {
        text-align: center;
        margin: 20px 10px 0 10px;
    }

    & p {
        text-align: center;
        margin: 20px;
    }


    /* transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);

    & :hover {
        background: white;
        color: black;
        box-shadow: 0 10px 20px rgba(0,0,0, 0.25); 
        transform: translateY(-3px);
    } */
`


const Projects = props => (
    <Container>
        <Content>
            <h2>Projects</h2>
            <SeperatorLine />
            <p>Here's a look at a few of our current and upcoming projects.<br />More details about these projects coming soon.</p>
        </Content>

        <ProjectGroup>

            <ProjectCard>
                <h3>Water</h3>
                <p>JV allows us access to land</p>
            </ProjectCard>
            <ProjectCard>
                <h3>CBD Extraction</h3>
                <p>As part of the JV...</p>
            </ProjectCard>
            <ProjectCard>
                <h3>Great Rate Freight</h3>
                <p>Trucking and logistics company based out of [LOCATION]</p>
            </ProjectCard>

        </ProjectGroup>

    </Container>
)

export default Projects