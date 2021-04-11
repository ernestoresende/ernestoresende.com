import React from 'react'
import styled from 'styled-components'
import Layout from '../components/common/Layout'
import * as V from '../styles/variables'

const StyledParagraph = styled.p `
  font-family: ${V.FontFaces.Lora};
  font-weight: 700;
  font-size: 78px;
  color: var(--color-primaryText);
`

const IndexPage = () => {
  return (
    <Layout>
      <StyledParagraph>Ernesto Resende</StyledParagraph>
    </Layout>
  )
}

export default IndexPage
