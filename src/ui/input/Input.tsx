import React, {FC} from "react";
import styled, {css} from "styled-components";

interface InputProps {
    inputType: "text" | "password" | "number" | "date";
    name: string;
    id: string;
    label: string;
    placeholder?: string;
    onChange?: (arg1: any) => void;
    textError?: string;
}

export const Input: FC<InputProps> = ({
                                          inputType,
                                          name,
                                          id,
                                          label,
                                          placeholder,
                                          onChange,
                                          textError
                                      }) => {
    return (
        <Container textError={textError}>
            <label htmlFor={id}>{label}</label>
            <input
                onChange={onChange}
                type={inputType}
                name={name}
                id={id}
                placeholder={placeholder || ""}/>
            {textError ? <StyledError>{textError}</StyledError> : null}
        </Container>
    );
};

const Container = styled.div<{ textError: string | undefined }>`
  display: flex;
  flex-direction: column;
  row-gap: 6px;

  & input {
    outline: none;
    ${({textError}) => textError && css`
      border: 1px solid #ff6f32;
      
    `}
  }
`;
const StyledError = styled.div`
  margin-top: -4px;
  align-self: flex-end;
  font-size: 12px;
  color: red;
`;