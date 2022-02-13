import React, {BaseSyntheticEvent, FC, useCallback} from "react";
import styled, {css} from "styled-components";

interface IProps {
    value: boolean;
    name?: string;
    label?: string;
    onChange: (value: boolean, event: BaseSyntheticEvent) => void;
}

export const Switch: FC<IProps> = ({value, label, onChange, name}) => {
    const changeValue = useCallback(
        (event) => {
            onChange(!value, event);
        },
        [value, onChange]
    );

    return (
        <Container>
            <input type="checkbox" checked={value} onChange={changeValue} name={name}/>
            <Checkbox checked={value}>
                <Circle checked={value}/>
            </Checkbox>
            {label && <Label>{label}</Label>}
        </Container>
    );
};

const Container = styled.label`
  display: flex;
  cursor: pointer;
  column-gap: 8px;

  & > input[type="checkbox"] {
    width: 0;
  }
  @keyframes checkMove {
    from {background-color: #fff;}
    to {background-color: #111;}
  }
  @keyframes unCheckMove {
    from {background-color: #111;}
    to {background-color: #fff;}
  }
`;
const Checkbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  border: 1px solid #111;
  width: 30px;
  height: 18px;
  padding: 1px;
  ${({checked}) => (checked ? css`animation: checkMove 0.5s` : css`animation: unCheckMove 0.5s`)};
  background: ${({checked}) => (checked ? "#111" : "#fff")};
  border-radius: 20px;
`;
const Circle = styled.div<{ checked: boolean }>`
  background: ${({checked}) => (checked ? "#fff" : "#111")};
  border-radius: 50%;
  height: 14px;
  width: 14px;
  ${({checked}) => (checked 
          ? css`transform: translateX(12px); transition: transform 0.5s` 
          : css`transform: translateX(0); transition: transform 0.5s`
  )};
`;
const Label = styled.div`
  color: #30333f;
  cursor: pointer;
  font-size: 12px;
  line-height: 15px;
`;
