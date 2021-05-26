import styled, { css } from 'styled-components'
import media from "@styles/media"

export const BaseWrapper = styled.aside`
  ${props =>
    props.type === 'success' &&
    css`
      background: var(--successCardBackground);
      border-left: 3px solid var(--successCardHighlight);
    `}
  ${props =>
    props.type === 'info' &&
    css`
      background: var(--infoCardBackground);
      border-left: 3px solid var(--infoCardHighlight);
    `}
  ${props =>
    props.type === 'warning' &&
    css`
      background: var(--warningCardBackground);
      border-left: 3px solid var(--warningCardHighlight);
    `}

  position: relative;
  padding: 24px 32px;
  font-size: 15px;
  margin: 24px 28px 64px;
  border-radius: 6px 6px 6px 3px;
  ${media.phablet `
    font-size: 14px;
  `}

  .last-line {
    padding: 0px;
  }
`
export const IconWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translate(-50%, -50%);
  padding: 8px;
  border-radius: 50%;
  background-color: var(--primaryBackground);
  svg {
    ${props =>
    props.type === 'success' &&
    css`
      color: var(--successCardHighlight);
    `}
  ${props =>
    props.type === 'warning' &&
    css`
      color: var(--warningCardHighlight);
    `}
  ${props =>
    props.type === 'info' &&
    css`
      color: var(--infoCardHighlight);
    `}

    width: 32px;
    height: 32px;
  }
`
export const Title = styled.strong`
  font-size: 20px;
  font-weight: 700;
  display: block;
  margin-bottom: 8px;
`
