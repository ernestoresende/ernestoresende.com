import * as React from "react";
import styled from "styled-components";

const StyledHighlight = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: repeat(2, 6px);
  grid-template-rows: repeat(2, 6px);
  margin-bottom: var(--space-default);
  .round-model {
    width: 6px;
    height: 6px;
    border-radius: 9999px;
    background-color: var(--primaryText);
  }
`

const Highlight = () => {
  return (
    <StyledHighlight>
      <div className='round-model' />
      <div className='round-model' />
      <div className='round-model' />
      <div className='round-model' />
    </StyledHighlight>
  )
}

export default Highlight;
