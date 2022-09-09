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
      <BarCornerTrimmer>
        <Bar value={value}/>
      </BarCornerTrimmer>
    </Wrapper>
    </>;
};

const Wrapper = styled.div`
  padding: var(--padding);
  
  border-radius: var(--background-radius);
  background: ${COLORS.transparentGray15};
  
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  
  
`;

const BarCornerTrimmer = styled.div`
 border-radius: var(--background-radius);
 /* Trim off corners when bar is near full */
 overflow: hidden;
`;

const Bar = styled.div`
    background: ${COLORS.primary};
    width: ${p => p.value}%;
    height: var(--height);
    
    border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
