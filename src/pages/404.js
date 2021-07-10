import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import Layout from '@components/common/Layout'
import Seo from '@components/common/Seo'
import mixins from '@styles/mixins'

/* eslint-disable limited-exports-page-templates */

const Main = styled.div`
  ${mixins.sidePadding};
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 50vh;
  max-width: 900px;
  margin: 0 auto;
`
const Title = styled.h1`
  font-size: 128px;
  font-weight: 700;
`
const Description = styled.h2`
  font-size: 48px;
  font-weight: 600;
`
export const HomeLink = styled(props => <GatsbyLink {...props} />)`
  color: var(--warningCardHighlight);
  font-size: 22px;
  padding-top: var(--space-lg);
  cursor: pointer;
`
const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Seo title='Oops, where are we?' />
      <Layout>
        <Main>
          <Title>Not found</Title>
          <Description>Sorry, there is nothing here.</Description>
          <HomeLink to='/'>Go back home</HomeLink>
        </Main>
      </Layout>
    </React.Fragment>
  )
}

export default NotFoundPage
