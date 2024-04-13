import React from 'react'
import { LoginContainerStyled, LoginWrapperUp, LoginWrapperDown, LoginDataContainer, LoginDataWrapper, LoginDataInputs, LoginDataPassword } from "./LoginStyles"
import IsotipoCR from "/Logos/CR-Logo.png"
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import Input from '../../components/UI/Input/Input'
import { HiKey, HiUser } from 'react-icons/hi2'
import { AiOutlineUser, AiOutlineLock  } from "react-icons/ai";
import { PiIdentificationCardLight } from 'react-icons/pi'

const Login = () => {

    return (
        <LoginContainerStyled>
            <LoginWrapperUp>
                <img src={IsotipoCR} />
            </LoginWrapperUp>
            <LoginWrapperDown>
                <LoginDataContainer>
                    <LoginDataWrapper>
                        <h1>¡Bienvenido!</h1>
                        <LoginDataInputs>
                            <Input icon={<PiIdentificationCardLight className='icon-input error'/>} placeholder='DNI' name={'dni'} id={'dni'} inputMode={'numeric'}>
                            </Input>
                            <Input type='password' placeholder='Contraseña' name={'contraseña'} id={'contraseña'} icon={<AiOutlineLock className='icon-input'/>}>
                            </Input>
                        </LoginDataInputs>
                        <LoginDataPassword>
                            <NavLink>¿Olvidaste tu contraseña?</NavLink>
                        </LoginDataPassword>
                    </LoginDataWrapper>
                    <Button to={'/'}>Iniciar Sesion</Button>
                    <p>¿No tienes cuenta? <NavLink to={'/create-account'}>Registrate</NavLink></p>
                </LoginDataContainer> 
            </LoginWrapperDown>
        </LoginContainerStyled>
    )
}

export default Login