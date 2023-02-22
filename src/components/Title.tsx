import React from "react";
import { Text } from "./style";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
}

const Title: React.FC<TitleProps> = ({ children, color }) => {
  return (
    <Text as="h2" color={color} mr="0 0 0.875em 0" fontSize="1.875em">
      {children}
    </Text>
  );
};

export default Title;
