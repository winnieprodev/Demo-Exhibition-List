import React, { useCallback, useEffect, useRef } from "react";
import { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Styled from "./searchbar.styled";

iconLibrary.add(faSearch);

interface OwnProps {
  disabled?: boolean;
  value?: string;
  onChange?: (newValue: string) => void;
  onFocus?: () => void;
  onSearch?: () => void;
  placeholder?: string;
  focus?: boolean;
}

const Searchbar: React.FC<OwnProps> = ({
  disabled = true,
  value,
  onChange,
  onSearch,
  onFocus,
  focus,
  placeholder = "Search Table...",
}) => {
  const onChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.value);
      }
    },
    [onChange]
  );

  const onKeyDownCallback = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key !== "Enter") return;
      if (event.shiftKey) return;
      if (onSearch) {
        event.preventDefault();
    
        onSearch();
      }
    },
    [onSearch]
  );

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (focus) {
      inputRef?.current?.focus();
    }
  }, [focus, inputRef]);
  
  return (
    <Styled.SearchBar>
      <Styled.Icon>
        <FontAwesomeIcon icon="search" />
      </Styled.Icon>
      <Styled.Input
        aria-label="search-input"
        ref={inputRef}
        disabled={disabled}
        value={value}
        onChange={onChangeCallback}
        onKeyDown={onKeyDownCallback}
        placeholder={placeholder}
        onFocus={onFocus}
      />
    </Styled.SearchBar>
  );
};

export default Searchbar;
