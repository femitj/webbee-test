import styled from 'styled-components';

export default styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .navbar {
    background: #a3a3a3;
    box-shadow: 12px 12px 24px rgba(221, 219, 219, 0.25);
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .navbar1 {
      display: flex;
      align-items: center;
      h2 {
        cursor: pointer;
        font-weight: 400;
      }
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
        cursor: pointer;
      }
      ul {
        display: flex;
        align-items: center;
        margin-left: 30px;
        color: #fff;
        font-size: 13px;
        list-style: none;
        li {
          margin-left: 15px;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }

    .navbar2 {
      display: flex;
      align-items: center;
      justify-content: center;
      div {
        width: 50px;
        height: 50px;
        background-color: white;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 95%;
          height: 95%;
          border-radius: 50%;
        }
      }
    }
    .showNavMobile {
      width: 260px;
      height: 100vh;
      position: absolute;
      top: 63px;
      background-color: #a3a3a3;
      left: 0;
      transition: all 400ms ease;
      padding-left: 20px !important;
      overflow-y: scroll;
      ul {
        margin-bottom: 20px;
        padding-top: 20px;
        li {
          margin-bottom: 30px;
          color: white;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 600px) {
    .hideOMobile {
      display: none !important;
    }
  }

  @media (min-width: 600px) {
    .hideOnDesktop {
      display: none !important;
    }
  }

  .children {
    width: 100%;
    height: calc(100% - 65px);
    overflow-y: scroll;
    padding-bottom: 50px;
    padding-top: 20px;
  }

  .app-padding {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (max-width: 800px) {
    .app-padding {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
`;
