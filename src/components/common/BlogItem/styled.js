import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import media from '@styles/media'

export const PostContainer = styled(props => <GatsbyLink {...props} />)`
  font-family: var(--fontFace-Milliard);
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  padding: var(--space-md) var(--space-md);
  transition: 300ms ease;
  border: solid 2px var(--secondaryBackground);
  background: var(--tertiaryBackground);
  box-shadow: var(--boxShadow-default);

  ${media.desktop`
    padding: var(--space-default);
  `};

  :hover {
    box-shadow: var(--boxShadow-increased);
    transform: scale(1.03);
  }
  :focus {
    box-shadow: var(--boxShadow-increased);
    transform: scale(1.03);
  }
`
export const TimeToRead = styled.p`
  padding-bottom: var(--space-sm);
  font-size: 14px;
  color: var(--secondaryText);
  ${media.thone`
    font-size: 16px;
  `};
`
export const Title = styled.h1`
  font-family: var(--fontFace-Milliard);
  font-weight: 600;
  padding-bottom: var(--space-sm);
  font-size: 28px;
  color: var(--primaryText);
  letter-spacing: -0.05rem;
  line-height: 36px;
`
export const Description = styled.h2`
  font-size: 16px;
  color: var(--secondaryText);
  line-height: 26px;
`
