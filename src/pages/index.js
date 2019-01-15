import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'

import ContentImage from '../components/ContentImage';
import ImageContent from '../components/ImageContent';
// import Projects from '../components/Projects';
import Beverages from '../components/Beverages';
import Header from '../components/header';
import Contact from '../components/Contact';
import InfoComponent from '../components/InfoComponent';
// import Team from '../components/Team';

const IndexPage = () => (
  <Layout>

    <Header/>

    <div className="Header">
      <div className="HeaderGroup">
        <img src={require("../images/logo-rushnet.png")} alt="" />
        <h1>RushNet</h1>
        <p>We control the future</p>
      </div>
    </div>

  <div className="Spacer"/>

  <ContentImage
    title="What we do"
    description="We are developers of top quality CBD edible products, with proprietary cultivation, extraction and formulation techniques that demonstrably set us apart from other companies."
    image={require('../images/image-beverage.jpg')}
  />

  <div className="Spacer"/>

  {/* <Projects /> */}

  <div className="Spacer"/>

  <ImageContent
    title="Our Goal"
    description="With control of cultivation to customer, from growth to consumption, our unique and secure business model is poised for great things. Quality, high standards and unique products can only come from the best sources of soil, water and seed."
    image={require('../images/image-barbell.jpg')}
  />

  <div className="Spacer"/>

<div className="InfoGroup">
    <InfoComponent
      title="Water"
      subtitle="Part owners of huge aquifer reserves of pure mineral water"
    />
    <InfoComponent
      title="CBD"
      subtitle="Developers of pure, organic CBD"
    />
    <InfoComponent
      title="CBN, CGB"
      subtitle="The expensive byproducts of full spectrum hemp production is a new fronteir, and we are on the cutting edge of product deelopment with these extremely optimistic products. We have formulated an experienced team of scientists, physicians and organic growers."
    />
    <InfoComponent
      title="Products"
      subtitle="Radically new products with inflammation targeted focus orchestrated by engineers, scientists and physicians."
    />
    <InfoComponent
      title="Celebrities"
      subtitle="To be announced soon, big names, big products, Big growth and excitement."
    />
  </div>

  <div className="Spacer"/>

  <Beverages />

  <div className="Spacer"/>

  <a href="https://hemphubapp.com" target="_blank" rel="noopener noreferrer" class="hemphub">
  <ContentImage
    title="HempHUB™ App"
    description="Recently acquired by RushNet, HempHUB™ is a platform aimed at providing access for resalers, farmers, consumers, to sell or discover CBD products. Currently HempHUB™ is under going development."
    image={require('../images/image-hemphub.png')}
  />
  </a>

  <div className="Spacer"/>

  {/* <Team /> */}
  <Contact />

  <div className="Spacer"/>

  </Layout>
)

export default IndexPage
