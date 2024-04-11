import React from 'react'
import Aside from '../Aside/Aside'
import { LayoutAdminContainerStyled } from './LayoutStyles'

const Layout = ({children, className}) => {
    return (
        <>
            <Aside className={className}/>
            <LayoutAdminContainerStyled>
                {children}
            </LayoutAdminContainerStyled>
        </>
        
    )
}

export default Layout