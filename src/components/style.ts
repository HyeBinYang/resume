import styled from "@emotion/styled";

interface FlexProps {
  gap?: number;
  direction?: string;
  alignItems?: string;
  style?: React.CSSProperties;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;
