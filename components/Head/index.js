import React from 'react'
import Head from 'next/head'

const HeadComponent = ({ title, description, isHomepage }) => (
  <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
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
