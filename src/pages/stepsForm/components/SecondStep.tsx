import {FC} from "react";
import {ButtonContainer, StyledForm} from "../styles";
import {Input} from "../../../ui/input/Input";

interface IProps {
    goNext: () => void;
    goBack: () => void;
}

export const SecondStep: FC<IProps> = ({goNext,goBack}) => {
    return (
        <StyledForm
            action="#"
            style={{display: "flex", flexDirection: "column", rowGap: "12px"}}
        >
            <Input
                textError={"required"}
                inputType={"date"}
                label={"Дата отправления"}
                id={"from"}
                name={"from"}
            />
            <Input
                inputType={"date"}
                label={"Дата возвращения"}
                id={"to"}
                name={"to"}
            />
            <ButtonContainer>
                <button onClick={goBack}>Назад</button>
                <button type="submit" onClick={goNext}>Дальше</button>
            </ButtonContainer>
        </StyledForm>
    );
};