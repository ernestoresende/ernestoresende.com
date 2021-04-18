import { css } from 'styled-components'
import media from './media'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexLeft: css`
    display: flex;
    justify-content: left;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  desktopAlignCenter: css`
    margin: 0 auto;
    width: 100%;
    right: 0px;
    left: 0px;
    max-width: 800px;
  `,

  sidePadding: css`
    padding-left: 50px;
    padding-right: 50px;
    ${media.phablet`padding-left: 15px; padding-right: 15px;`};
  `,
}

export default mixins
