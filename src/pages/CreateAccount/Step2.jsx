import React, { useState } from 'react';
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import { AiOutlineLock } from 'react-icons/ai';
import { ButtonSubmit } from '../../components/UI/Button/ButtonStyles';
import { useDispatch } from 'react-redux';
import { setNewUser, setNewUserPassword } from '../../redux/user/userSlice';

const Step2 = () => {
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch()

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };

    const validationsPassword = (password) => {

        password = password.trim();

        if (password.length < 6) {
            return false;
        }
        const numDigits = password.split('').filter(char => !isNaN(parseInt(char))).length;
        if (numDigits < 3) {
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            return false;
        }
        return true;

    };

    const handleNextStep3 = () => {
        if (!validationsPassword(password)) {
            console.log('Corrobore su contraseña');
            return;
        }
        if (password === repeatPassword) {
            console.log('Contraseñas correctas');
            dispatch(setNewUserPassword(password))
            setPassword('')
            setRepeatPassword('')
            window.location.href = '/favorite-team' 
            return;
        }
        console.log('Contraseñas incorrectas');
    };

    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Crea tu contraseña</h2>
                    <CreateAccountInputs>
                        <Input
                            value={password}
                            onChange={handlePasswordChange}
                            type='password'
                            placeholder='Contraseña'
                            name='password'
                            id='password'
                            icon={<AiOutlineLock className='icon-input' />}
                        />
                        <Input
                            value={repeatPassword}
                            onChange={handleRepeatPasswordChange}
                            type='password'
                            placeholder='Confirmar contraseña'
                            name='confirm-password'
                            id='confirm-password'
                            icon={<AiOutlineLock className='icon-input' />}
                        />
                    </CreateAccountInputs>
                    <ButtonSubmit
                    onClick={handleNextStep3}>
                        Continuar
                    </ButtonSubmit>
                </CreateAccountData>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    );
};

export default Step2;
