// #1 import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// #2 define my component
const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page"><p>I am making this side by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
      src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
      </Layout>
      
    </main>
  )
}

// #3 export my component
export default IndexPage
