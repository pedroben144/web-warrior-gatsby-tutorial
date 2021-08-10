import React from "react"
import Layout from "../components/Layout"
import * as styles from '../styles/home.module.css'
import { graphql, Link } from "gatsby"
import Img from 'gatsby-image'

// import { header } from '../styles/home.module.css';

export default function Home({data}) {

  
  
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester.</p>
          <Link className={styles.btn} to="/projects">Portfolio Projects</Link>
        </div>
        {/* <img src="banner.png" alt="#" style={{maxWidth: '100%'}}/> */}
        <Img fluid={data.file.childImageSharp.fluid}/>
      </section>
    </Layout>
  )
}   

export const query = graphql`
query MyQuery {
  file(relativePath: {eq: "banner.png"}) {
    id
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`