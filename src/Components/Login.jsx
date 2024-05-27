import { FormLogin, H1Login, LabelEmail, InputEmail,
         LabelSenha, InputSenha, ButtonLogin }  from '../Styles/Login'
import React from "react";

const Login = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState(null)

    function validaLogin(value){
        if(value.length === 0){
            setError('Campo vazio, tente novamente!')
            return false;
        }else if(!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(value) || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)){
            setError('Dados inválidos, tente novamente')
        }else{
            setError(null)
            return true;
        }
    }
    function handleBlur({target}){
        validaLogin(target.value)
    }
    return(
        <FormLogin onSubmit={validaLogin}>
            <H1Login>Login</H1Login>
            <LabelEmail htmlFor="email">Email</LabelEmail>
            <InputEmail type="text" id="email" value={email} onBlur={handleBlur}
                onChange={({target}) => setEmail(target.value)}/>

            <LabelSenha htmlFor="password">Senha</LabelSenha>    
            <InputSenha type="text" id="password" value={password} onBlur={handleBlur}
                onChange={({target}) => setPassword(target.value)}/>
                
            <ButtonLogin>Enviar</ButtonLogin>
            {error && <p>{error}</p>}
        </FormLogin>
    )
}
export default Login;