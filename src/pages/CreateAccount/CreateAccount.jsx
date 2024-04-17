import React from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Input from '../../components/UI/Input/Input'
import { NavLink } from 'react-router-dom'
import InputCalendar from '../../components/UI/Input/InputCalendar'
import { AiOutlineMail, AiOutlineMobile, AiOutlineRedEnvelope, AiOutlineUser } from 'react-icons/ai'
import { PiIdentificationCardLight } from "react-icons/pi";
import { useFormik} from 'formik'
import { ButtonSubmit } from '../../components/UI/Button/ButtonStyles'
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import { setNewUser } from '../../redux/user/userSlice'

const CreateAccount = () => {
    const dispatch = useDispatch()

    const regexDni = /\d{6}$/;
    const regexPhone = /\d{9}$/;

    const validationSchema = Yup.object({
        dni: Yup.string()
        .matches(regexDni, "Minimo de 6 caracteres")
        .trim()
        .required("Este campo es requerido"),
        nombre: Yup.string().trim().required("Este campo es requerido"),
        apellido: Yup.string().trim().required("Este campo es requerido"),
        fechaNacimiento: Yup.date().required("Este campo es requerido"),
        telefono: Yup.string()
        .matches(regexPhone, "Minimo de 9 caracteres")
        .trim().required("Este campo es requerido"),
        email: Yup.string()
        .email("Correo electronico invalido")
        .trim().required("Este campo es requerido"),
        
    })
    const { getFieldProps, handleSubmit, errors, touched} = useFormik({
        initialValues: {
            dni: '',
            nombre: '',
            apellido: '',
            fechaNacimiento: '',
            telefono: '',
            email: ''
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
            console.log(values);
            nextPage()
            resetForm()
            dispatch(setNewUser(values))
        }
    })

    const nextPage = () => {
        window.location.href = '/create-password' 
    }

    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Creá tu cuenta</h2>
                    <CreateAccountInputs>
                        <Input
                            isError={errors.dni && touched.dni}
                            icon={<PiIdentificationCardLight className='icon-input'/>} 
                            placeholder={'DNI'} 
                            name={'dni'} 
                            id={'dni'} 
                            inputMode={'numeric'}
                            {...getFieldProps('dni')}
                        />
                        <Input
                            isError={errors.nombre && touched.nombre} 
                            icon={<AiOutlineUser className='icon-input'/>} 
                            placeholder={'Nombre'} 
                            name={'nombre'} 
                            id={'nombre'}
                            {...getFieldProps('nombre')}
                        />
                        <Input
                            isError={errors.apellido && touched.apellido}
                            icon={<AiOutlineUser className='icon-input'/>} 
                            placeholder={'Apellido'} 
                            name={'apellido'} 
                            id={'apellido'}
                            {...getFieldProps('apellido')}
                        />
                        <InputCalendar
                            isError={errors.fechaNacimiento && touched.fechaNacimiento}
                            placeholder={"Fecha de nacimiento"} 
                            name={'fechaNacimiento'} 
                            id={'fechaNacimiento'}
                            {...getFieldProps('fechaNacimiento')}
                        />
                        <Input
                            isError={errors.telefono && touched.telefono} 
                            icon={<AiOutlineMobile className='icon-input'/>} 
                            placeholder={'Telefono'} 
                            name={'telefono'} 
                            id={'telefono'} 
                            inputMode={'numeric'}
                            {...getFieldProps('telefono')}
                        />
                        <Input
                            isError={errors.email && touched.email}
                            icon={<AiOutlineMail className='icon-input'/>} 
                            type="email" placeholder={'Email'} 
                            name={'email'} 
                            id={'email'}
                            {...getFieldProps('email')}
                        />
                    </CreateAccountInputs>
                        <ButtonSubmit 
                            type='submit'
                            onClick={handleSubmit}>
                            Continuar
                        </ButtonSubmit>

                </CreateAccountData>
                <p>¿Ya tienes cuenta? <NavLink to={'/login'}>Inicia Sesion</NavLink></p>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default CreateAccount