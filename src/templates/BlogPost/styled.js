import styled from 'styled-components'

import mixins from '@styles/mixins'
import media from '@styles/media'
import * as V from '@styles/variables'

export const HeaderWrapper = styled.div`
  text-align: center;
  padding: 132px 0 32px 0;
  margin: 0 auto;
  ${mixins.sidePadding}
  ${media.tablet`
    text-align: center;
    padding-top: 100px;
    padding-bottom: 32px;
    width: 100%;
  `}
`
export const Title = styled.h1`
  font-family: ${V.FontFaces.Lora};
  font-size: 72px;
  line-height: 1.3;
  color: var(--primaryText);
  padding-top: 30px;
  ${media.tablet`
    font-size: 30px;
    line-height: 1.1;
  `}
`
export const Description = styled.h2`
  font-family: ${V.FontFaces.Lora};
  font-size: 22px;
  line-height: 32px;
  font-weight: 600;
  color: var(--secondaryText);
  padding-top: 30px;
  ${media.tablet`
    font-size: 18px;
    line-height: 24px;
  `}
`
export const Tag = styled.div`
  font-family: ${V.FontFaces.Milliard};
  font-size: 16px;
  font-weight: 600;
  color: var(--secondaryText);
  text-transform: uppercase;
`
export const ArticleWrapper = styled.article`
  padding-top: 64px;
  font-family: ${V.FontFaces.Milliard};
  color: var(--primaryText);
  
  .wrapper-grid {
    display: grid;
    grid-template-columns:
      1fr
      min(110ch, 100%)
      1fr;
    overflow-wrap: break-word;
  }

  .wrapper-grid > * {
    grid-column: 2;
  }

  .article-content-wrapper {
    ${mixins.sidePadding};
  }

  p {
    ${mixins.sidePadding};
    font-size: 16px;
    line-height: 1.8;
    padding-bottom: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }
  em {
    font-size: 18px;
    font-style: italic;
    color: var(--highlights);
    ${media.thone`
      font-size: 16px;
    `}
  }
  ul {
    padding-left: 2.5rem;
    list-style-type: disc;
    margin-bottom: 30px;
  }
  ul li {
    font-size: 18px;
    margin-bottom: 1.6rem;
    line-height: 30px;
    ${media.thone`
      font-size: 16px;
      line-height: 1.6;
    `}
  }

  a {
    ${mixins.styledLink}
    ${media.thone`
      font-size: 16px;
    `}
  }
  h1 {
    ${mixins.sidePadding};
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-family: var(--fontFace-Lora);
    font-size: 42px;
    color: var(--primaryText);
    line-height: 1.2;
    ${media.tablet`
      font-size: 32px;
    `}
  }
  h2 {
    ${mixins.sidePadding};
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-size: 26px;
    color: var(--text);
  }
  h3 {
    ${mixins.sidePadding};
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-family: var(--fontFace-Lora);
    font-size: 20px;
    color: var(--primaryText);
    font-weight: 700;
  }
  hr {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    overflow: hidden;
    border-style: solid;
    border-width: 1px;
  }
  code {
    padding: 5px;
    border-radius: 3px;
    font-family: var(--fontFace-iAWriterMono);
    font-weight: bold;
    font-size: 14px;
    background-color: var(--secondaryBackground);
    ${media.thone`
      font-size: 14px;
    `}
  }
  pre {
    grid-column: 1 / -1;
    max-height: 75vh;
    margin-bottom: var(--space-default);
    ::-webkit-scrollbar {
      width: 0.6em; 
      height: 0.6em;
    }
 
    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-corner {
      box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
 
    ::-webkit-scrollbar-thumb {
      background-color: darkgrey;
      outline: 0.5px solid slategrey;
    }
  }
  strong {
    font-weight: 700;
  }
`
