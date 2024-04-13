import React from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Input from '../../components/UI/Input/Input'
import { HiCalendar, HiKey, HiOutlineCreditCard, HiUser, HiPhone, HiEnvelope, HiOutlineShieldCheck } from 'react-icons/hi2'
import Button from '../../components/UI/Button/Button'
import { NavLink } from 'react-router-dom'
import InputPassword from '../../components/UI/Input/InputPassword'
import Select from '../../components/Select/Select'
import { dataEquipos } from '../../Data/Equipos/DataEquipos'

import { Calendar } from 'primereact/calendar';
import InputCalendar from '../../components/UI/Input/InputCalendar'
import { AiOutlineMail, AiOutlineMobile, AiOutlineRedEnvelope, AiOutlineUser } from 'react-icons/ai'
import { PiIdentificationCardLight } from "react-icons/pi";
import { useFormik } from 'formik'
import { ButtonSubmit } from '../../components/UI/Button/ButtonStyles'

const CreateAccount = () => {

    const {values, handleChange, handleSubmit} = useFormik({
        initialValues: {
            dni: '',
            nombre: '',
            apellido: '',
            fechaNacimiento: '',
            telefono: '',
            email: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            resetForm()
        }
    })

    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Creá tu cuenta</h2>
                    <CreateAccountInputs>
                        <Input 
                            onChange={handleChange} 
                            value={values.dni} 
                            icon={<PiIdentificationCardLight className='icon-input'/>} 
                            placeholder={'DNI'} 
                            name={'dni'} 
                            id={'dni'} 
                            inputMode={'numeric'}
                        />
                        <Input 
                            onChange={handleChange} 
                            value={values.nombre} 
                            icon={<AiOutlineUser className='icon-input'/>} 
                            placeholder={'Nombre'} 
                            name={'nombre'} 
                            id={'nombre'}
                        />
                        <Input 
                            onChange={handleChange} 
                            value={values.apellido} 
                            icon={<AiOutlineUser className='icon-input'/>} 
                            placeholder={'Apellido'} 
                            name={'apellido'} 
                            id={'apellido'}
                        />
                        <InputCalendar 
                            onChange={handleChange} 
                            value={values.fechaNacimiento} 
                            placeholder={"Fecha de nacimiento"} 
                            name={'fechaNacimiento'} 
                            id={'fechaNacimiento'}
                        />
                        <Input 
                            onChange={handleChange} 
                            value={values.telefono} 
                            icon={<AiOutlineMobile className='icon-input'/>} 
                            placeholder={'Telefono'} 
                            name={'telefono'} id={'telefono'} 
                            inputMode={'numeric'}
                        />
                        <Input 
                            onChange={handleChange} 
                            value={values.email} 
                            icon={<AiOutlineMail className='icon-input'/>} 
                            type="email" placeholder={'Email'} 
                            name={'email'} 
                            id={'email'}
                        />
                    </CreateAccountInputs>
                    <ButtonSubmit onClick={handleSubmit}>Continuar</ButtonSubmit>
                </CreateAccountData>
                <p>¿Ya tienes cuenta? <NavLink to={'/login'}>Inicia Sesion</NavLink></p>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default CreateAccount