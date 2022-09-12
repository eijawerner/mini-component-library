import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--font-size": "14px",
    "--line-height": "16px",
    "--border-width": "1px",
    "--padding": "5px 5px 2px 20px"
  },
  large: {
    "--font-size": "18px",
    "--line-height": "21px",
    "--border-width": "1px",
    "--padding": "7px 7px 4px 32px"
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeStyles = SIZES[size];
  if (sizeStyles === undefined) {
    throw Error(`Size is not supported: ${size}`);
  }
  const styles = {
    ...sizeStyles,
    "--width": width + 'px'
  }
  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledInput style={styles} type="text" placeholder={placeholder} />
      <StyledIcon
        id={icon}
        size={size === 'large' ? 24 : 12}
        strokeWidth={size === 'large' ? 2 : 1} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  isolation: isolate;
  width: max-content;
  
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledInput = styled.input`
  appearance: none;
  box-shadow: none;
  border: none;
  
  border-bottom: var(--border-width) solid black;
  
  position: relative;
  padding: var(--padding);
  
  
  font-size: var(--font-size);
  font-family: Roboto;
  font-weight: 700;
  line-height: var(--line-height);
  
  color: inherit;
  
  width: var(--width);
  
 &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${COLORS.gray500};
    opacity: 1; /* fix for Firefox */
    font-weight: 400;
  }

  &::-ms-input-placeholder { /* Microsoft Edge */
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  
  &:focus {
    outline-offset: 2px;
  }

`;

const StyledIcon = styled(Icon)`
  position: absolute;
  left: 2px;
  top: 0;
  bottom: 0;
  margin: auto;
  font-weight: 700;
`;

export default IconInput;
