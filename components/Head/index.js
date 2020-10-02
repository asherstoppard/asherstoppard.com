import React from 'react'
import { Helmet } from 'react-helmet'

export default ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:200,300,600,700"
      rel="stylesheet"
    />
  </Helmet>
)
