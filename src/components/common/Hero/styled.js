import styled from 'styled-components'
import media from '@styles/media'
import mixins from '@styles/mixins'

export const StyledHero = styled.div`
  padding-top: 80px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(100vh - 180px);
  ${media.phablet`
    height: 100vh;
  `}
  .heading-highlight {
    background-image: linear-gradient(
      transparent 0,
      transparent 55%,
      var(--primaryHighlight) 55%,
      var(--primaryHighlight) 90%,
      transparent 90%,
      transparent 100%
    );
    background-repeat: no-repeat;
    background-size: 95% 100%;
    animation: underline 0.5s 1s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    font-weight: 600;
  }
`
export const HeadingSection = styled.div`
  ${mixins.sidePadding}
  ${mixins.desktopAlignCenter}
  margin-bottom: var(--space-default);
`
export const BigHeading = styled.h1`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  font-size: 78px;
  font-weight: 600;

  ${media.desktop`font-size: 8vw`};
  ${media.phablet`font-size: 40px`};
  .name-highlight {
    font-weight: 700;
    background: var(--tealGradient);
    background-clip: text !important;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
  .hand-wave-emoji {
    font-size: 54px;
    ${media.phablet` font-size: 24px; `};
  }
`
export const MediumHeading = styled.h2`
  font-family: var(--fontFace-Milliard);
  color: var(--primaryText);
  font-size: 20px;
  line-height: 1.4;
  margin-top: var(--space-lg);
  ${media.phablet` font-size: 18px; `};
`
export const Socials = styled.div`
  display: flex;
  margin-top: var(--space-lg);

  a {
    margin-right: var(--space-default);
  }

  svg {
    fill: var(--primaryText);
    height: 24px;
    width: 24px;
  }
`
