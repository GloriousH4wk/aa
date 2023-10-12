import React, { useState } from "react";
import { StyledCard, Text, H2 } from "./styles";
import Icon from "../Icon";
import { ICard } from "./types";

const Card = ({ title, text, iconName }: ICard) => {
  const [isSelected, setIsSelected] = useState(false);
  console.log("isSelected: ", isSelected);

  return (
    <StyledCard
      onClick={() => setIsSelected(!isSelected)}
      isSelected={isSelected}
    >
      <Icon
        iconName={iconName}
        color={isSelected ? "gray" : "red"}
        size="24"
        isSelected={isSelected}
      />
      <H2 isSelected={isSelected}>{title}</H2>
      <Text isSelected={isSelected}>{text}</Text>
    </StyledCard>
  );
};

export default Card;
