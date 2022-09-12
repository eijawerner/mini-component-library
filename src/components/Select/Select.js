import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from "../VisuallyHidden";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <StyledIcon id="chevron-down" size={24} strokeWidth={2} />
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
 position: relative;
 width: max-content;
 color: ${COLORS.gray700};
 &:hover {
   color: ${COLORS.black};
 }
`;

const StyledSelect = styled.select`
 appearance: none;
 
 color: inherit;
 background-color: ${COLORS.transparentGray15};
 
 border: none;
 border-radius: 8px;
 
 padding: 12px 52px 12px 16px;
 
 font-family: Roboto;
 font-weight: 400;
 font-size: 16px;
 line-height: 18px;
 
 &:hover {
   color: inherit;
 }
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 16px;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;
  color: inherit;
  
  pointer-events: none;
`;

export default Select;
