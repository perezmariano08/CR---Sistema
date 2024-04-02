import React from 'react'
import { ButtonWrapper } from './ButtonStyles'

const Button = ({ children, bg, color, onClick }) => {
    return (
        <ButtonWrapper 
            bg={bg}
            color={color}
            onClick={onClick}
        >
            {children}
        </ButtonWrapper>
    )
}

export default Button