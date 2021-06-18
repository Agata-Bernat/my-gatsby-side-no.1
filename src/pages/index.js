// #1 import React
import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

// #2 define my component
const IndexPage = () => {
  return (
      <Layout pageTitle="Home Page"><p>I am making this side by following the Gatsby Tutorial.</p>
      <StaticImage
      alt="Clifford, a not reddish-brown pitbull,not even a dog, but a puppy,  dozing on a pillow"
      src="../images/clifford.jpeg"
      />
      </Layout>
    
  )
}

// #3 export my component
export default IndexPage
