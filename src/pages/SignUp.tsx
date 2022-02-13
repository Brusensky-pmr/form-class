import React, {BaseSyntheticEvent} from "react";
import styled from "styled-components";
import {Input} from "../ui/input/Input";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;
const validateField = (value: string) => {
    return value.trim() !== "";
};

export const SignUp: React.FC = () => {
    const submitHandler = (event: BaseSyntheticEvent) => {
        event.preventDefault();
        const elements = event.target.elements;
        if (
            validateField(elements.login.value) &&
            validateField(elements.password.value)
        ) {
            const formData = {
                login: elements.login.value,
                pass: elements.password.value
            };
            console.log(formData);

            return formData;
        } else {
            console.error("Fill all fields");
        }
    };

    return (
        <div>
            <Form onSubmit={submitHandler}>
                <Input
                    inputType="text"
                    name="name"
                    placeholder="Enter name"
                    id="name"
                    label="Name"
                />
                <Input
                    inputType="text"
                    name="login"
                    placeholder="Enter login"
                    id="login"
                    label="Login"
                />
                <Input
                    inputType="password"
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    label="Password"
                />
                <Input
                    inputType="password"
                    name="rep_password"
                    id="rep_password"
                    placeholder="Password"
                    label="Repeat password"
                />
                <label>
                    <input type="checkbox" name="terms" id="terms" />
                    Privacy policy
                </label>

                <input type="submit" value="Log in" />
            </Form>
        </div>
    );
};

