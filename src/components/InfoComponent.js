import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
    margin: 10px;

    & h2 {
        text-align: center;
    }

    & p {
        text-align: center;
    }
`

const InfoComponent = props => (
    <Content>
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
    </Content>
)

export default InfoComponent