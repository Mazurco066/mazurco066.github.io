// Dependencies
import React from 'react'
import PropTypes from 'prop-types'
import Zoom from 'react-reveal/Zoom'
import { useStaticQuery, graphql } from 'gatsby'

// Global Styles
import GlobalStyles from '../../styles/global'

// Layout components
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({ children }) => {
  // GraphQL Queries
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // Returning portfolio layout
  return (
    <>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Zoom>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </Zoom>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
