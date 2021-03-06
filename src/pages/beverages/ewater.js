import React from 'react'
import Layout from '../../components/layout';
import styled from 'styled-components'

import Header from '../../components/header';

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    padding: 0 20px;
    padding-top: 60px;


    display: grid;
    grid-template-rows: repeat(3, auto);

    /* background-color: #C4C4C4; */

    @media (max-width: 480px) {
        margin: 30px auto;
        grid-template-columns: repeat(1, 1fr);
        grid-gap: 20px;
    }
`

const Content = styled.div`
    align-self: center;
    margin-bottom: 120px;

    /* background-color: green; */

    display: grid;

    & p {
        /* font-size: 18px; */
        font-weight: 300;
    }
`

const ColumnOne = styled.div`
    /* background-color: red; */
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
    max-height: 450px;
    height: auto;
    width: 100%;
    margin: 0 auto;
    object-fit: contain;
    border-radius: 24px;
    padding: 40px;
`

const EWater = () => (
    <Layout>
        <Header/>
        <Container>
            <ImageContainer>
                <Image image={require('../../images/image-ewater.png')}/>
            </ImageContainer>

            <Content>
                <ColumnOne>
                    <h2>E Water</h2>
                    <p>
                    Non-chlorinated, non-treated pure water from deep and ancient aquifers.  This is the water you want to drink.  Daily.  At all times.
                    </p>
                </ColumnOne>
            </Content>
        </Container>
    </Layout>
)

export default EWater