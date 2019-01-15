import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router';

const Content = styled.div`
  position: fixed;
  width: 100%;
  padding: 16px 0;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
`

const ContentGroup = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  justify-items: center;

  & a {
    color: white;
    font-size: 1.125em;
    font-weight: 400;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, auto);

    a:not(:first-child) {
      display: none;
    }
  }

  @media (min-width: 481px) and (max-width: 767px) {
    grid-template-columns: repeat(3, auto);

    a:nth-child(3) {
      display: none;
    }
  }
`

const Header = () => (
  <Content>
    <ContentGroup>
      <Link to="/">Home</Link>
      <Link to="#contact">Contact</Link>
      <Link to="#beverages">Beverages</Link>
      {/* <Link to="/announcements">Announcements</Link> */}
    </ContentGroup>
  </Content>
)

export default Header
