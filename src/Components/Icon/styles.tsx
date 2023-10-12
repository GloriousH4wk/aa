import styled from "styled-components";
import { IIcon } from "./types";

export const IconCirlce = styled.div<Pick<IIcon, "isSelected">>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ isSelected }) => (isSelected ? "white" : "#FEE9ED")};
  display: flex;
  align-items: center;
  justify-content: center;
`;