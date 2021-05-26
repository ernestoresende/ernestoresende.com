import styled from "styled-components"
import media from "@styles/media"

export const CodeBlockWrapper = styled.div`
  pre {
    font-size: 15px;
    line-height: 1.2;
    font-family: var(--fontFace-iAWriterMono);

    overflow-x: scroll;

    width: unset;
    position: unset;
    right: unset;

    border-radius: 10px;
    padding: var(--space-default);
    margin-bottom: var(--space-default);

    ${media.desktop`
      width: unset;
      grid-column: unset;
      right: unset;
      grid-column: unset;
    `}

    ${media.tablet`
      border-radius: 0;
      font-size: 14px;
    `}
  }
`

export const StyledLine = styled.div `
  padding-bottom: 0.5em;
`
