import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 30px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  .form {
    display: flex;
    flex-direction: column;
    width: 30%;
    border-radius: 6px;
    border: 1px solid #e3e3e3;
    margin-right: 20px;
    margin-bottom: 20px;
    @media (max-width: 1127px) {
      width: 40%;
    }
    @media (max-width: 857px) {
      width: 100%;
    }
    .header {
      background: rgba(211, 211, 211, 0.55);
      padding-left: 20px;
      padding-right: 20px;
      padding-top: 10px;
      padding-bottom: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }

    .inputCont {
      padding-left: 20px;
      padding-right: 20px;
      margin-bottom: 12px;
    }

    .footer {
      padding: 10px 20px;
      margin-top: auto;
      background: rgba(211, 211, 211, 0.55);
    }
  }
  .removeBorder {
    padding-right: 0 !important;
  }
  .borderNone {
    border: none !important;
  }
  .btn {
    background: #a3a3a3;
    border-radius: 6px;
  }
  .btn:hover {
    background: green;
    border-radius: 6px;
  }
  .btnClass {
    color: #fff !important;
  }
  .delBtn {
    cursor: pointer;
    padding: 2px;
    background: #a3a3a3;
    border-radius: 3px;
    color: #fff;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .delBtn:hover {
    background: red;
  }

  .errorStyle {
    border: 1px solid red !important;
  }
`;

export default Wrapper;
