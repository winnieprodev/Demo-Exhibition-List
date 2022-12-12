import styled from "styled-components";
import {
  badColor,
  greenColor
} from "styles/colors";

interface TRProps {
  $closed: boolean;
}

export const TR = styled.tr<TRProps>`
  background-color: ${({ $closed }) => $closed ? badColor : greenColor};
  min-height: 60px;
  height: 60px;
`;

export const Detail = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  -webkit-box-orient: vertical;
`;
