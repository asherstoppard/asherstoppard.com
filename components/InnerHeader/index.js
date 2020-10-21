import React from 'react'
import T from 'prop-types'
import styled from 'styled-components'
import { rem } from 'polished'
import { Container } from '../../components'

const InnerHeaderContainer = styled.div`
  position: relative;
  background-image: linear-gradient(90deg, #231557 -1%, #44107A 10%, #FF1361 67%, #ffa631 100%);
  color: white;

  &:before {
    content: '';
    background: ${({ theme }) => theme.colors.dark};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.95;
  }
`

const Breadcrumbs = styled.nav`
  padding: ${rem('5px')};
  background: ${({ theme }) => theme.colors.brandSecondary};

  a {
    color: white;
  }

  span {
    &:before {
      content: '\f054';
      font-family: 'FontAwesome', sans-serif;
      color: ${({ theme }) => theme.colors.brandPrimary};
      margin: 0 ${rem('15px')};
    }

    &:first-of-type:before {
      content: '';
    }
  }
`

const Header = styled(Container)`
  display: block;
  padding-top: ${rem('25px')};
  padding-bottom: ${rem('25px')};

  h1 {
    font-weight: 200;
    font-size: ${rem('30px')};
    margin-bottom: ${rem('5px')};
  }

  h2 {
    font-weight: 600;
    font-size: ${rem('20px')};
    margin-top: 0;
  }
`

const InnerHeader = ({ breadcrumbs, title, subtitle }) => (
  <InnerHeaderContainer>
    <Header>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </Header>
    <Breadcrumbs>
      <Container>
        <span>
          <a href="/">Homepage</a>
        </span>
        {breadcrumbs.map(({ link, title }) => (
          <span>
            <a href={link}>{title}</a>
          </span>
        ))}
      </Container>
    </Breadcrumbs>
  </InnerHeaderContainer>
)

InnerHeader.propTypes = {
  title: T.string.isRequired,
  subtitle: T.string,
  breadcrumbs: T.array.isRequired,
}

export default InnerHeader
