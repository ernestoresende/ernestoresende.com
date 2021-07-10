import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

export const Main = styled(props => <GatsbyLink {...props} />)`
  background: var(--secondaryBackground);
  font-family: var(--fontFace-Milliard);
  text-decoration: none;
  border-radius: 5px;
  padding: var(--space-default) var(--space-default);
  transition: 300ms ease;
  color: var(--primaryText);

  :hover {
    box-shadow: var(--boxShadow-default);
    transform: scale(1.02);
  }
  :focus {
    background: var(--secondaryBackground);
  }
`

export const IconWrapper = styled.div`
  svg {
    width: 28px;
    height: 28px;
  }
`

export const ProjectTitle = styled.h1`
  font-family: var(--fontFace-Lora);
  font-size: 22px;
  font-weight: 600;
`
export const ProjectDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
`
