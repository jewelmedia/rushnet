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
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;

    & p {
        /* font-size: 18px; */
        font-weight: 300;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const ColumnOne = styled.div`
    /* background-color: red; */
`

const ColumnTwo = styled.div`
    /* background-color: blue; */
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
`

const KnockoutPunch = () => (
    <Layout>
        <Header/>
        <Container>
            <ImageContainer>
                <Image image={require('../../images/image-knockout-punch.png')}/>
            </ImageContainer>

            <Content>
                <ColumnOne>
                    <h2>Knockout Punch™</h2>
                    <p>
                    Knockout Punch™ comes in a small vial and is used before or after participating in any physical activity that may result with a blow to the head. Made from high quality organically grown CBD.  
                    </p>
                </ColumnOne>

                <ColumnTwo>
                    <h2>Knockout Punch™ Sleep Aid</h2>
                    <p>
                    The combination of CBD and melatonin in Knockout Punch™ has also been shown to aid in a deep, restful, recovery sleep. Knockout Punch™ for sleep will involve several propietary ingredients and techniques making a perfect and better alternative to what is currently on the market for sleep aid.
                    </p>
                </ColumnTwo>
            </Content>
        </Container>
    </Layout>
)

export default KnockoutPunch