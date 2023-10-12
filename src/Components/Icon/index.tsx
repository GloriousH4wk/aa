import {PiGraduationCapLight} from "react-icons/pi"
import { BsFillFileBarGraphFill } from "react-icons/bs"
import {BiTask} from "react-icons/bi"

import { IIcon } from "./types";
import { IconCirlce } from "./styles";

const icons = {
  task: BiTask,
  bar: BsFillFileBarGraphFill,
  graduation: PiGraduationCapLight,
};

const Icon = ({ iconName, size, color, isSelected }: IIcon) => {
  const IconComponent = icons[iconName as keyof typeof icons];
  return (
    <IconCirlce isSelected={isSelected}>
      <IconComponent size={size} color={color} />
    </IconCirlce>
  );
};

export default Icon;
