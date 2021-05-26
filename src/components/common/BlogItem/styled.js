import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import media from '@styles/media'

export const PostContainer = styled(props => <GatsbyLink {...props} />)`
  font-family: var(--fontFace-Milliard);
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  padding: var(--space-md) var(--space-lg);
  transition: 300ms ease;

  ${media.desktop`
    padding: var(--space-default);
  `};

  &[data-fixed-hover='true'] {
    background: var(--secondaryBackground);
  }

  :hover {
    background: var(--secondaryBackground);
    &[data-fixed-hover='true'] {
      box-shadow: var(--boxShadow-default);
      transform: scale(1.02);
    }
  }
  :focus {
    background: var(--secondaryBackground);
  }
`
export const TimeToRead = styled.p`
  padding-bottom: var(--space-sm);
  font-size: 16px;
  color: var(--secondaryText);
  ${media.thone`
    font-size: 16px;
  `};
`
export const Title = styled.h1`
  font-family: var(--fontFace-Lora);
  font-weight: 600;
  padding-bottom: var(--space-sm);
  font-size: 28px;
  color: var(--primaryText);
  letter-spacing: -0.05rem;
`
export const Description = styled.h2`
  font-size: 18px;
  color: var(--secondaryText);
  ${media.thone`
    font-size: 16px;
  `};
`
export const IconWrapper = styled.div`
  padding-left: var(--space-lg);
  display: flex;
  align-items: center;
  color: var(--secondaryText);
  ${media.desktop`
  padding-left: var(--space-xsm);
    `};
  svg {
    width: 36px;
    height: 36px;
  }
`
