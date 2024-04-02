import React from 'react'
import { SelectContainerStyled, SelectWrapper } from './SelectStyles'
import { VscTriangleDown } from "react-icons/vsc";

const Select = ({children, options}) => {
    return (
        <SelectContainerStyled>
            {children}
            <SelectWrapper>
                {options}
            </SelectWrapper>
            <VscTriangleDown/>
        </SelectContainerStyled>
        
    )
}

export default Select