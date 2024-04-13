import React, { useState, forwardRef } from 'react';
import { InputContainerStyled, InputWrapper } from './InputSyles';
import { AiOutlineEye, AiFillEyeInvisible } from 'react-icons/ai';

const Input = forwardRef(({ placeholder, type = "text", onChange, value, required, id, name, inputMode, icon, className, error, ...field }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputContainerStyled>
            <InputWrapper
                ref={ref}
                type={showPassword ? "text" : type}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                id={id}
                name={name}
                inputMode={inputMode}
                className={className}
                value={value}
            />
            {icon}
            {type === 'password' && (
                <div className='hi-eye' onMouseDown={togglePasswordVisibility}>
                    {showPassword ? <AiOutlineEye /> : <AiFillEyeInvisible className='eye-off'/>}
                </div>
            )}
            {error && <span>Campo requerido.</span>}
        </InputContainerStyled>
    );
});

export default Input;
