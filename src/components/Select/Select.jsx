import React from 'react';
import { SelectContainerStyled, SelectWrapper } from './SelectStyles';
import { VscTriangleDown } from "react-icons/vsc";

const Select = ({ children, data, placeholder, column = "nombre", onChange, id_ }) => {
    return (
        <SelectContainerStyled>
            {children}
            <SelectWrapper onChange={onChange}>
                <option value="0" disabled selected>{placeholder}</option>
                {data.map((item) => (
                    <option key={item[id_]} value={item[id_]}>{item[column]}</option>
                ))}
            </SelectWrapper>
            <VscTriangleDown />
        </SelectContainerStyled>
    );
};

export default Select;
