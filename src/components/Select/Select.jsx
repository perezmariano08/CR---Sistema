import React from 'react';
import { SelectContainerStyled, SelectWrapper } from './SelectStyles';
import { VscTriangleDown } from "react-icons/vsc";

const Select = ({ children, data, placeholder, column = "nombre" }) => {
    return (
        <SelectContainerStyled>
            {children}
            <SelectWrapper>
                <option value="0" disabled selected>{placeholder}</option>
                {data.map((item) => (
                    <option key={item.id} value={item.id}>{item[column]}</option>
                ))}
            </SelectWrapper>
            <VscTriangleDown />
        </SelectContainerStyled>
    );
};

export default Select;
