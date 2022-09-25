import styled from 'styled-components';

const Wrapper = styled.div`
  flex-direction: column;
  .header-x {
    display: flex;
    align-items: center;
    background: #a3a3a3;
    color: #fff;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 20px;
  }
  .container {
    padding-top: 30px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
