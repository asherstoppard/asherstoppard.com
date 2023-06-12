import React from 'react'
import Head from 'next/head'

const HeadComponent = ({ title, description, isHomepage }) => (
  <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {isHomepage && <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Asher Stoppard",
          "url": "https://www.asherstoppard.com/",
          "logo": "https://www.asherstoppard.com/images/external-logo.jpg",
          "sameAs": [
          "https://www.asherstoppard.com/",
          "https://github.com/asherstoppard/",
          "https://www.linkedin.com/in/asherstoppard"
          ]
        }`}
      </script>}
  </Head>
)

export default HeadComponent
