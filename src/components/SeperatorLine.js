import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
    max-width: 1000px;
    width: auto;
    margin: 5px auto;
    border-bottom: 3px solid #FFB800;
    border-radius: 4px;
`

const SeperatorLine = props => (
    <Line />
)

export default SeperatorLine