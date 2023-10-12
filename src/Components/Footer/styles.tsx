import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100vw;
  background-color: #FFFFFF;
  color: white;
  position: fixed;
  bottom: 0;
`;

export const Button = styled.button`
  background-color: #F4254A;
  color: white;
  padding: 10px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #173A4A;
  }
`;