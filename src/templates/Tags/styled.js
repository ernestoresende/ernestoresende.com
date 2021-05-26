import styled from 'styled-components'

import mixins from '@styles/mixins'
import media from '@styles/media'
import * as V from '@styles/variables'

export const Main = styled.div`
  padding-top: 60px;
  max-width: 1100px;
  margin: 0 auto;
  ${mixins.sidePadding}
  .tag-title {
    font-family: ${V.FontFaces.Lora};
    color: var(--color-primaryText);
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 72px;
  margin-bottom: 48px;
  ${media.tablet`
    display: block;
  `}
`
