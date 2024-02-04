import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import Container from '../Container'

const SiteFooterContainer = styled.footer`
  padding: 5rem 0;

  background: url("/images/gradient-background.jpg") top center no-repeat;
  background-size: cover;
  text-align: center;
  color: white;
  font-weight: 300;
`

const SiteFooter = () => (
  <SiteFooterContainer>
    <Container>
      <p>
        <i className="fa fa-copyright" />{' '}
        <strong>Asher Stoppard Limited</strong> {moment().year()}
      </p>
      <p>
        <small>
          <strong>Asher Stoppard Limited</strong> is a company registered in
          England and Wales. Registered number: 1033320. Registered office: 28
          Wellingtonia Crescent, Edwalton, Nottingham, NG12 4GU.
        </small>
      </p>
    </Container>
  </SiteFooterContainer>
)

export default SiteFooter
