import styled from "styled-components";
import {
  badColor,
  greenColor,
} from "styles/colors";

interface ExhibitionProps {
  $closed: boolean;
}

export const Card = styled.div<ExhibitionProps>`
    background-color: ${({ $closed }) => $closed ? badColor : greenColor};
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 10px;
`;

export const Section = styled.div`
  padding: 4px;
  width: 100%;
`;

export const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    margin-right: 8px;
`;

export const Detail = styled.div`
    padding-left: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
`;
