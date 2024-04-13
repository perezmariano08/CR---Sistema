import React from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Input from '../../components/UI/Input/Input'
import { HiCalendar, HiKey, HiOutlineCreditCard, HiUser, HiPhone, HiEnvelope, HiOutlineShieldCheck } from 'react-icons/hi2'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import InputPassword from '../../components/UI/Input/InputPassword'
import Select from '../../components/Select/Select'
import { dataEquipos } from '../../Data/Equipos/DataEquipos'
import { IoShieldHalf } from "react-icons/io5";

const Step3 = () => {
    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Selecciona tu equipo favorito</h2>
                    <CreateAccountInputs>
                        <Select data={dataEquipos} placeholder={'Seleccionar equipo'} icon={<IoShieldHalf className='icon-select' />}>
                        </Select>
                    </CreateAccountInputs>
                    <Button to={'/login'}>Crear cuenta</Button>
                </CreateAccountData>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default Step3