import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  width: 100vw;
  height: 100vh;
  background-color: var(--black-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalUpdate = styled.div`
  width: 300px;
  height: 450px;
  background: var(--gray-0);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const Subtitle = styled.span`
  font-size: 22px;
  text-transform: uppercase;
  margin: 15px 0;
  color: var(--gray-100);
`;

export const Form = styled.form`
  max-width: 300px;
  width: 95%;
  height: 390px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;

  .css-glmvsh-MuiInputBase-root-MuiOutlinedInput-root {
    height: 45px;
    vertical-align: middle;
  }

  .css-1n8hauo-MuiFormLabel-root-MuiInputLabel-root {
    font-size: 14px;
    color: var(--gray-50);
  }

  .css-1vy6t9p-MuiInputBase-root-MuiOutlinedInput-root {
    height: 45px;
  }

  .css-jxzsrg-MuiFormLabel-root-MuiInputLabel-root {
    background: #fff;
    padding: 0 10px;
    border-radius: 10px;
  }

  @media (min-width: 768px) {
    margin: auto auto;
  }
`;
