import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'
import Aside from '../Aside/Aside'

const Layout = ({children, className}) => {
    return (
        <>
            <Aside className={className}/>
            <LayoutContainerStyled>
                {children}
            </LayoutContainerStyled>
        </>
        
    )
}

export default Layout