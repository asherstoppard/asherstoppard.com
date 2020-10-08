import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ description, title }) => (
  <Helmet>
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
  </Helmet>
)
