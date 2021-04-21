import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link as GatsbyLink } from 'gatsby'
import { BiRightArrowAlt } from 'react-icons/bi'

import * as V from '../../styles/variables'

const PostContainer = styled(props => <GatsbyLink {...props} />)`
  font-family: ${V.FontFaces.Milliard};
  display: flex;
  text-decoration: none;
  border-radius: 10px;
  padding: ${V.Space.md} ${V.Space.lg};
  transition: 300ms ease;

  :hover {
    background: var(--color-secondaryBackground);
  }
  :focus {
    background: var(--color-secondaryBackground);
  }
`

const TimeToRead = styled.p`
  padding-bottom: ${V.Space.sm};
  font-size: 16px;
  color: var(--color-secondaryText);
`

const Title = styled.h1`
  font-family: ${V.FontFaces.Lora};
  font-weight: 600;
  padding-bottom:${V.Space.sm};
  font-size: 28px;
  color: var(--color-primaryText);
  letter-spacing: -0.05rem;
`

const Description = styled.h2 `
  font-size: 18px;
  color: var(--color-secondaryText);
`

const IconWrapper = styled.div `
  padding-left: ${V.Space.lg};
  display: flex;
  align-items: center;
  color: var(--color-secondaryText);
  svg {
    width: 36px;
    height: 36px;
  }
`

const BlogItem = ({ slug, timeToRead, title, description}) => {
  return (
    <PostContainer to={`blog/${slug}`} title={title}>
      <div>
        <TimeToRead>{timeToRead} minutes read</TimeToRead>
        <Title>{title}</Title>
        <Description>{description}</Description> 
      </div> 
      <IconWrapper>
        <BiRightArrowAlt />
      </IconWrapper> 
    </PostContainer>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
}

export default BlogItem
