import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { theme } from './theme'
import * as S from "./styled"

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '') || ''

  return (
    <S.CodeBlockWrapper>
      <Highlight {...defaultProps} code={children} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <S.StyledLine key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </S.StyledLine>
            )
          })}
        </pre>
      )}
      </Highlight>
    </S.CodeBlockWrapper>
  )
}

export default CodeBlock
