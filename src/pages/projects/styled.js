import styled from 'styled-components'
import media from '@styles/media'
import mixins from '@styles/mixins'

export const Main = styled.div`
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
`
export const ProjectHeader = styled.div`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
`
export const ProjectTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  ${media.bigDesktop`font-size: 26px;`};
`
export const ProjectDescription = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: var(--secondaryText);
`
export const ProjectInformation = styled.div`
  display: flex;
  font-size: 16px;

  div {
    margin-right: var(--space-lg);
  }
  li {
    font-family: var(--fontFace-iAWriterMono);
  }

  .align-center {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-weight: 700;
    margin-bottom: var(--space-xs);
  }
  svg {
    margin-top: var(--space-xs);
    width: 24px;
    height: 24px;
    color: var(--primaryText);
  }
`
export const ProjectContent = styled.div`
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
  .image-wrapper {
    width: 60%;
    margin: 0 auto;
    grid-column: 1 / 4;
    ${media.bigDesktop`width: 90%;`};
  }
  .base-image {
    border-radius: 10px;
  }
`

export const ProjectBody = styled.div `
  ${mixins.sidePadding};
  ${mixins.desktopAlignCenter};
  padding-top: 64px;
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  p {
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
    font-size: 16px;
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
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-family: var(--fontFace-Lora);
    font-size: 42px;
    color: var(--primaryText);
    font-weight: 700;
    line-height: 1.2;
    ${media.tablet`
      font-size: 32px;
    `}
  }
  h2 {
    padding-bottom: var(--space-default);
    padding-top: var(--space-default);
    font-size: 26px;
    color: var(--text);
    font-weight: 700;
  }
  h3 {
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
  strong {
    font-weight: 700;
  }
`
