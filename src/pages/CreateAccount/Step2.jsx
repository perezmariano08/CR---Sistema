import React from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Input from '../../components/UI/Input/Input'
import { HiCalendar, HiKey, HiOutlineCreditCard, HiUser, HiPhone, HiEnvelope, HiOutlineShieldCheck } from 'react-icons/hi2'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import InputPassword from '../../components/UI/Input/InputPassword'
import Select from '../../components/Select/Select'
import { dataEquipos } from '../../Data/Equipos/DataEquipos'
import { AiOutlineLock } from 'react-icons/ai'

const Step2 = () => {
    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Crea tu contraseña</h2>
                    <CreateAccountInputs>
                        <Input type='password' placeholder='Contraseña' name={'contraseña'} id={'contraseña'} icon={<AiOutlineLock className='icon-input'/>}>
                        </Input>
                        <Input type='password' placeholder='Confirmar contraseña' name={'confirmar-contraseña'} id={'confirmar-contraseña'} icon={<AiOutlineLock className='icon-input'/>}>
                        </Input>
                    </CreateAccountInputs>
                    <Button to={'/favorite-team'}>Continuar</Button>
                </CreateAccountData>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default Step2