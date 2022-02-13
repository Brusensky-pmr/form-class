import React, {FC, useCallback, useState} from "react";
import {FirstStep} from "./components/FirstStep";
import {SecondStep} from "./components/SecondStep";
import {ThirdStep} from "./components/ThirdStep";
import styled from "styled-components";
import {StepIndicator} from "./components/StepIndicator";

export const Aviasales: FC = () => {
    const [currentStep, setCurrentStep] = useState<number>(1);
    const goNext = useCallback(() => {
        setCurrentStep(currentStep => currentStep + 1);
    }, []);
    const goBack = useCallback(() => {
        setCurrentStep(currentStep => currentStep - 1);
    }, []);
    const changeCurrentStep = useCallback((stepNumber) => setCurrentStep(stepNumber), []);
    const currentForm = currentStep === 1
        ? <FirstStep goNext={goNext}/>
        : currentStep === 2
            ? <SecondStep goNext={goNext} goBack={goBack}/>
            : <ThirdStep goBack={goBack}/>;

    return (
        <PageContainer>
            <StepIndicator
                currentStep={currentStep}
                changeStep={changeCurrentStep}/>
            <div>
                {currentForm}
            </div>
        </PageContainer>
    );
};

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 15px;
`;


