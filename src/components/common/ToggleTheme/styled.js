import styled from 'styled-components'
import media from '@styles/media'

export const ToggleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${media.tablet`
    display: block;
    justify-content: unset;
    width: fit-content;
  `};
`
export const ToggleLabel = styled.div`
  display: block;

  .toggle-checkbox {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }

  .toggle-icon {
    color: var(--primaryText);
    cursor: pointer;
  }
`
