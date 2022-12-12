import styled from "styled-components";
import {
  primaryColor,
  secondaryColorDarker,
} from "styles/colors";
  
const Container = styled.div`
    max-width: 600px;
    font-size: 0.65rem;
    padding: 0.2rem;
    margin: 34px auto;
`;
  
const PageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 24px;
`;
  
const PaginationButton =  styled.button<{ isActive?: boolean, disabled?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    width: 34px;
    height: 34px;
    padding: 0.2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid ${secondaryColorDarker};
    background-color: transparent;
    color: ${primaryColor};
    ${(props) => (props.disabled ? disabledButton : enabledButton)};
    ${(props) => (props.isActive && activeButton)};
`
;

const PaginationPrevIconButton = styled.button<{ disabled?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    width: 34px;
    height: 34px;
    padding: 0.2rem;
    align-items: center;
    justify-content: center;
    border: 1px solid ${secondaryColorDarker};
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: transparent;
    color: ${primaryColor};
    ${(props) => (props.disabled ? disabledButton : enabledButton)};
`;

const PaginationNextIconButton = styled.button<{ disabled?: boolean }>`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    width: 34px;
    height: 34px;
    padding: 0.2rem;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 1px solid ${secondaryColorDarker};
    background-color: transparent;
    color: ${primaryColor};
    ${(props) => (props.disabled ? disabledButton : enabledButton)};
`;

const activeButton = `
    border: 1px solid ${primaryColor};
    color: #fff;
    background-color: ${primaryColor};
`;

const enabledButton = `
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        border: 1px solid ${primaryColor};
        color: #fff;
        background-color: ${primaryColor};
    }

    &:active {
        border: 1px solid ${primaryColor};
        color: #fff;
        background-color: ${primaryColor};
    }
`;

const disabledButton = `
  border: 1px solid ${secondaryColorDarker};
  color: ${secondaryColorDarker};
`;

const FirstLastButton = styled.button`
    width: 110px;
    font-size: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    outline: none;
    border: 1px solid rgba(0, 0, 0, .5);
    padding: 8px 16px;
    border-radius: 50px;
    ${(props) => (props.disabled ? disabled : enabled)};
`;

const enabled = `
    cursor: pointer;
    background-color: var(--color-primary);
    transition: background-color 0.2s;
    color: ${primaryColor};

    &:hover {
        border: 1px solid ${primaryColor};
        color: #fff;
        background-color: ${primaryColor};
    }

    &:active {
        border: 1px solid ${primaryColor};
        color: #fff;
        background-color: ${primaryColor};
    }
`;

const disabled = `
  border: 1px solid ${secondaryColorDarker};
  color: ${secondaryColorDarker};
`;
  
export {
    Container,
    PageContainer,
    Wrapper,
    PaginationPrevIconButton,
    PaginationNextIconButton,
    FirstLastButton,
    PaginationButton
};