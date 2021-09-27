import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styled'

const BlogItem = ({ slug, timeToRead, title, description, fixedHoverStyle }) => {
  return (
    <S.PostContainer to={`${slug}`} title={title} data-fixed-hover={fixedHoverStyle}>
      <div>
        <S.TimeToRead>{timeToRead} minutes read</S.TimeToRead>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </div>
    </S.PostContainer>
  )
}

BlogItem.propTypes = {
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  fixedHoverStyle: PropTypes.bool,
}

export default BlogItem
