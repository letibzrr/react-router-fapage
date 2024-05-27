import styled from 'styled-components';

const Cores = {
    PinkClean: 'hsl(295, 41%, 79%)',
    White: 'hsl(300, 35%, 92%)'
    }

export const FormLogin = styled.form`
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const H1Login = styled.h1`
    color: ${Cores.PinkClean};
    font-size: 60px;
`
export const LabelEmail = styled.label`
    font-size: 30px;
    color: ${Cores.PinkClean};
`
export const InputEmail = styled.input`
    height: 25px;
`
export const LabelSenha = styled.label`
    font-size: 30px;
    color: ${Cores.PinkClean};
`
export const InputSenha = styled.input`
    height: 25px;
`
export const ButtonLogin = styled.button`
`