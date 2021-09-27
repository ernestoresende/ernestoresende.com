import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Spacer from '@components/common/Spacer'

const ProjectItem = ({ projectTitle, projectImage, projectImageAlt, projectDescription, projectLink }) => {
  const image = getImage(projectImage)
  return (
    <S.Main to={projectLink}>
      <GatsbyImage image={image} alt={projectImageAlt} />
      <Spacer size={32} />
      <S.ProjectTitle>{projectTitle}</S.ProjectTitle>
      <Spacer size={16} />
      <S.ProjectDescription>{projectDescription}</S.ProjectDescription>
    </S.Main>
  )
}

ProjectItem.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
}

export default ProjectItem
