import React, {FC} from 'react';
import {BaseFlexContainer} from "../styles";
import styled, {css} from "styled-components";

interface IProps {
    currentStep: number;
    changeStep: (step: number) => void;
}

export const StepIndicator: FC<IProps> = ({currentStep, changeStep}) => {
    return (
        <BaseFlexContainer>
            <StepButton
                selected={currentStep === 1}
                onClick={() => changeStep(1)}
            >
                Куда
            </StepButton>
            <StepButton
                selected={currentStep === 2}
                onClick={() => {
                    changeStep(2);
                }}
            >
                Когда
            </StepButton>
            <StepButton
                selected={currentStep === 3}
                onClick={() => {
                    changeStep(3);
                }}
            >
                Как
            </StepButton>
        </BaseFlexContainer>
    );
};
const StepButton = styled.button<{selected: boolean}>`
  cursor: pointer;
  width: 90px;
  background: #fff;
  color: black;
  border: 1px solid black;
  padding: 10px;
  border-radius: 46%;
    ${({selected}) => selected && css`
      border: 2px solid black;
      color: #fff;
      background: #111;
    `}
`;
