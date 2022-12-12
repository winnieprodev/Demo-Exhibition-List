import styled from "styled-components";
import {
  secondaryColorLighter,
} from "styles/colors";

export const SearchBar = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  background: #fff;
  position: relative;
  transition: background ease 0.2s;
  min-width: 300px;
  max-width: 600px;
  border: 1px solid rgba(0, 0, 0, .5);
  border-radius: 20px;
  margin: auto;
  width: 100%;
  &:hover,
  &:active {
    background: ${secondaryColorLighter};
  }
`;

export const Icon = styled.div`
  font-size: 22px;
  padding-left: 12px;
  margin-right: 12px;
`;

export const Input = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  padding-left: 60px;
  width: calc(100% - 60px);
  outline: none;
  border: none;
  background: none;
`;
