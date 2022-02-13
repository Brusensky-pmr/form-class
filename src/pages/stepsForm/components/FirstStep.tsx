import {BaseSyntheticEvent, FC} from "react";
import {ButtonContainer, StyledForm} from "../styles";
import {Input} from "../../../ui/input/Input";

interface IProps {
    goNext: () => void;
}


export const FirstStep: FC<IProps> = ({goNext}) => {
    const handleSubmit = (event: BaseSyntheticEvent<SubmitEvent>) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Input
                textError={"required"}
                inputType={"text"}
                label={"Откуда"}
                id={"from"}
                name={"from"}
            />
            <Input
                inputType={"text"}
                label={"Куда"}
                id={"to"}
                name={"to"}
            />
            <ButtonContainer>
                <button type="submit" onClick={goNext}>Дальше</button>
            </ButtonContainer>
        </StyledForm>
    );
};

