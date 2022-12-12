import styled from "styled-components";
import {
  secondaryColorLighter,
  secondaryColorDarker,
} from "styles/colors";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SmallWrapper = styled.div`
  width: 100%;
  display: none;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 716px) {
    display: flex;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  td,
  th {
    border: 2px solid ${secondaryColorDarker};
    padding: 10px;
    text-align: center;
  }

  thead > tr {
    background-color: ${secondaryColorLighter};
    cursor: pointer;
  }
  
  display: block;
  @media (max-width: 716px) {
    display: none;
  }
`;

export const Icon = styled.div`
  padding-left: 12px;
  color: rgba(0, 0, 0, .4);
`;

export const TableSortLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;