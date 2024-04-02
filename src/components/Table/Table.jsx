import React from 'react'
import { TableContainerStyled } from './TableStyles'
import { HiOutlineEllipsisVertical } from "react-icons/hi2";


const Table = ({thead, tbody}) => {
    return (
        <TableContainerStyled thead={thead} tbody={tbody}>
            <thead>
                {thead}
            </thead>
            <tbody>
                {tbody}
            </tbody>
        </TableContainerStyled>
    )
}

export default Table