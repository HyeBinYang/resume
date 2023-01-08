import styled from "@emotion/styled";

interface FlexProps {
  gap?: number;
  direction?: string;
  alignItems?: string;
  style?: React.CSSProperties;
}

type TextProps = {
  color?: string;
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  mr?: string;
};

export const color = {
  blue: "rgba(51, 126, 169)",
  black: "#000000",
  gray: "rgba(55,53,47,0.7)",
  lightGray: "rgba(55,53,47,0.5)",
};

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;

export const Link = styled.a`
  color: #37352f;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Text = styled.p<TextProps>`
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${({ lineHeight }) => lineHeight};
  margin: ${({ mr }) => mr};
`;
