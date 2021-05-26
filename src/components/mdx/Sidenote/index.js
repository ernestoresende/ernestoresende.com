import React from 'react'
import PropTypes from 'prop-types'
import * as S from './styled'

import { MdInfo, MdWarning } from "react-icons/md"
import { BiCheck } from "react-icons/bi"

const Sidenote = ({ type, title, children }) => {
  return (
    <S.BaseWrapper type={type}>
      <S.IconWrapper type={type}>
        { type === "info" ? <MdInfo /> : null }
        { type === "warning" ? <MdWarning /> : null }
        { type === "success" ? <BiCheck /> : null }
      </S.IconWrapper>
      {title ? <S.Title>{title}</S.Title> : null}
      {children}
    </S.BaseWrapper>
  )
}

Sidenote.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning']).isRequired,
  children: PropTypes.node.isRequired,
}

export default Sidenote
