import React from 'react'
import styled from 'styled-components'

import SeperatorLine from '../components/SeperatorLine';
import { Link } from 'gatsby'

const Container = styled.div`
    max-width: 1000px;
    width: 100%;
    height: auto;
    margin: 60px auto;
    margin-bottom: 120px;
    padding: 15px;

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

    /* background-color: green; */

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

        padding-left: 15px;
        padding-right: 15px;
    }
`

const BeverageGroup = styled.div`
    /* background-color: blue; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px; 


    @media (max-width: 480px) {
        margin: 20px auto;
    }
`

const BeverageCard = styled.div`
    /* background-color: red; */

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

    @media (max-width: 480px) {
        & img {
            max-width: 150px;
        }
    }
`

const BevImage = styled.div`
    background-color: #F9FCFF;
    padding: 10px;
    border-radius: 24px;

    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1.0);

    & :hover {
        background: white;
        color: black;
        box-shadow: 0 10px 20px rgba(0,0,0, 0.25);
        transform: translateY(-3px);
    }
`

const Info = styled.div`

    display: grid;
    grid-template-rows: repeat(2, auto);

    & h3 {
        /* margin: 10px; */
        color: black;
    }

    & p {
        color: black;
        margin-top: 0;
        /* margin-left: 10px;
        margin-right: 10px; */
        margin-bottom: 20px;
    }
`

const Beverages = props => (
    <Container id="beverages">

        <Content>
            <h2>Beverages</h2>
            <SeperatorLine />
            <p>Our beverage line is shaping up. Take a look at what's coming.</p>
        </Content>

        <BeverageGroup>

            <BeverageCard>
                <Link to="/beverages/awater">
                    <BevImage>
                        <img src={require('../images/image-awater.png')} alt="" />
                    </BevImage>
                    <Info>
                        <h3>A Water</h3>
                        <p>Fulvic acid enchanced water</p>
                    </Info>
                </Link>
            </BeverageCard>

            <BeverageCard>
                <Link to="/beverages/ewater">
                    <BevImage>
                        <img src={require('../images/image-ewater.png')} alt="" />
                    </BevImage>
                <Info>
                    <h3>E Water</h3>
                    <p>Electrolyte water</p>
                </Info>
                </Link>
            </BeverageCard>

            <BeverageCard>
                {/* <Link to="/beverages/ewater"> */}
                    <BevImage>
                        <img src={require('../images/image-coming-soon.png')} alt="" />
                    </BevImage>
                <Info>
                    <h3>C Water</h3>
                    <p>Cancer fighting cannababinoid water</p>
                </Info>
                {/* </Link> */}
            </BeverageCard>

            <BeverageCard>
                <Link to="/beverages/knockoutpunch">
                    <BevImage>
                        <img src={require('../images/image-knockout-punch.png')} alt="" />
                    </BevImage>
                    <Info>
                        <h3>Knockout Punch™</h3>
                        <p>CBD infused water</p>
                    </Info>
                </Link>
            </BeverageCard>

        </BeverageGroup>

    </Container>
)

export default Beverages