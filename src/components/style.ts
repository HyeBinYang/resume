import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface FlexProps {
  gap?: number;
  direction?: string;
  alignItems?: string;
  style?: React.CSSProperties;
}

interface ListTitleProps {
  mr?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = "row" }) => direction};
  align-items: ${({ alignItems = "normal" }) => alignItems};
  gap: ${({ gap = 0 }) => `${gap}px`};
`;

export const SectionTitle = styled.h2`
  color: rgba(51, 126, 169, 1);
  margin-bottom: 0.875em;
  font-size: 1.875em;
`;

export const ListTitle = styled.h3<ListTitleProps>`
  font-size: 1.3em;
  margin: ${({ mr }) => mr};
`;
