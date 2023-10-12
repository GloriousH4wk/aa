import styled from "styled-components";
import { ICard } from "./types";

export const StyledCard = styled.div<Pick<ICard, "isSelected">>`
  width: 150px;
  height: 200px;
  border-radius: 20px;
  background-color: ${({ isSelected }) => (isSelected ? "#173A4A" : "white")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  gap: 0.4em;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const H2 = styled.h2<Pick<ICard, "isSelected">>`
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  font-size: medium;
  margin-top: 10px;
`;

export const Text = styled.p<Pick<ICard, "isSelected">>`
  text-align: center;
  margin: 10px 15px;
  font-size: small;
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
`;
