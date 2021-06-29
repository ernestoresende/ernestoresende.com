import React from 'react'
import * as S from './styled'
import PropTypes from 'prop-types'

import Spacer from '@components/common/Spacer'

import { FaRegFolder } from 'react-icons/fa'

const ProjectItem = ({ projectTitle, projectDescription, projectLink }) => {
  return (
    <S.Main to={projectLink}>
      <S.IconWrapper>
        <FaRegFolder />
      </S.IconWrapper>
      <Spacer size={16} />
      <S.ProjectTitle>{projectTitle}</S.ProjectTitle>
      <Spacer size={8} />
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
