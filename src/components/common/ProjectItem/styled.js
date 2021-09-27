import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Main = styled(props => <GatsbyLink {...props} />)`
  font-family: var(--fontFace-Milliard);
  text-decoration: none;
  padding: var(--space-default) var(--space-md);
  color: var(--primaryText);

  .gatsby-image-wrapper {
    border-radius: 10px;
    transition: 300ms ease;

    :hover {
      border-radius: 10px;
      box-shadow: var(--projectBoxShadow);
      transform: scale(1.02);
    }
  }
`

export const ProjectTitle = styled.h1`
  font-size: 28px;
  font-family: var(--fontFace-Milliard);
  font-weight: 600;
  letter-spacing: -0.05rem;
`
export const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: var(--space-sm);
  color: var(--secondaryText);
  line-height: 1.6;
`
