import { css } from 'styled-components'
import media from './media'
import * as V from './variables'

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

  styledLink: css`
    font-family: ${V.FontFaces.Milliard};
    font-size: 16px;
    font-weight: 300;
    margin: 0 16px;
    color: var(--primaryText);
    display: inline-block;
    position: relative;
    overflow: hidden;
    transition: all ease-in-out 200ms;
    text-decoration: none;

    :hover {
      color: var(--secondaryText);
    }
    ${media.desktop`margin: 0 25px 0 0;`};
    ${media.tablet`
    font-size: 26px;
    margin: 8px 0 8px 0;
  `};
  `,
}

export default mixins
