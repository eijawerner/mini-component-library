/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--height": "8px",
    "--background-radius": "4px"
  },
  medium: {
    "--height": "12px",
    "--background-radius": "4px"
  },
  large: {
    "--padding": "2px",
    "--height": "24px",
    "--background-radius": "8px"
  }
}
const ProgressBar = ({ value, size, ariaLabel }) => {
  const styles = SIZES[size];
  return <>
    <Wrapper role="progressbar"
          aria-label={ariaLabel}
          aria-valuenow={value}
          style={styles}
    >
      <Bar value={value}/>
    </Wrapper>
    </>;
};

const Wrapper = styled.div`
  width: 100%;
  
  height: var(--height);
  padding: var(--padding);
  
  border-radius: var(--background-radius);
  background: ${COLORS.transparentGray15};
  
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`

const Bar = styled.div`
    background: ${COLORS.primary};
    width: ${p => p.value}%;
    height: 100%;
    
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-top-right-radius: ${p => p.value/100 * 4}px;
    border-bottom-right-radius: ${p => p.value/100 * 4}px;
`;

export default ProgressBar;
