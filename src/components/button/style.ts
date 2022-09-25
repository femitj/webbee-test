import styled from 'styled-components';

interface WrapperProps {
  background: any;
  color: any;
  style: any;
  padding: any;
  outline: any;
  onClick: any;
  borderWidth: any;
  disabled: any;
}

const Wrapper = styled.button<WrapperProps>`
  padding: ${(props: any) => props.padding || `15px 46px`};
  background: ${(props: any) =>
    props?.disabled ? '#eda0a4' : props.background || `#f16063`};
  cursor: ${(props: any) => (props?.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  cursor: ${(props: any) => (props.disabled ? 'not-allowed' : `pointer`)};
  color: ${(props: any) => props.color || `#ffffff`};
  border: ${(props: any) =>
    `${props.borderWidth || 1}px solid ${props.outline} !important ` ||
    `0 !important`};
`;

export default Wrapper;
