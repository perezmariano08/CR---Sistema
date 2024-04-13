import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({ 
    to,
    background = 'green',
    border = 'green',
    color = "black",
    children }) => {
    return (
        <ButtonWrapper
            whileTap={{scale: .95}}
            to={to}
            background={background}
            border={border}
            color={color}
        >
            {children}
        </ButtonWrapper>
    )
}

export default Button