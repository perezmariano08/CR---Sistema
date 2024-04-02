import React from 'react'
import { LayoutContainerStyled } from './LayoutStyles'
import Aside from '../Aside/Aside'

const Layout = ({children}) => {
    return (
        <>
            <Aside/>
            <LayoutContainerStyled>
                {children}
            </LayoutContainerStyled>
        </>
        
    )
}

export default Layout