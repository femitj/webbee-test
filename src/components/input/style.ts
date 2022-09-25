import styled from 'styled-components';

interface WrapperProps {
  leftIcon?: any;
  rightIcon?: any;
}

const Wrapper = styled.div<WrapperProps>`
  width: 100%;
  .check-wrapper {
    display: flex;
    align-items: center;
    .check-input {
      margin-right: 10px;
    }
    .check-label {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #0a1f44;
    }
  }

  .input-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    .input-label {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #454d54;
      margin-bottom: 8px;
    }
    .inputBoxWrap {
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 0px 10px;
      input,
      select {
        background: transparent;
        border: 0px !important;
        box-sizing: border-box;
        padding: 10px 0px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.025em;
        color: #8f99a3;
        outline: 0;
        flex-grow: 1;
        border-radius: 8px;
        option&:checked {
          text-transform: capitalize;
        }
      }
    }
  }

  .error-msg {
    color: red;
  }
`;

export default Wrapper;
