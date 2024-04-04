import styled from "styled-components";

export const TableContainerStyled = styled.table`
    background-color: var(--gray-300);
    border-radius: 10px;
    overflow: hidden;
    border-collapse: collapse;
    width: 100%;
    height: fit-content;
    font-size: 14px;
    
    td, th {
        text-align: left;
        white-space: nowrap; /* Evita el truncamiento de texto en las celdas */
        overflow: hidden; /* Oculta el contenido que desborda */
        text-overflow: ellipsis; /* Muestra puntos suspensivos si el contenido desborda */
        padding: 15px 20px; /* Espaciado interno de las celdas */
    }

    th {
        color: var(--gray-200);
        padding: 15px 20px 10px 20px;
    }

    td {
        padding: 15px 20px;
    }

    tbody tr {
        border-bottom: 1px solid var(--gray-200);
    }

    tr:nth-last-child(1) {
        border: none;
    }

    input.checkbox {
        appearance: none; /* Anular los estilos por defecto del navegador */
        width: 14px;
        height: 14px;
        background-color: transparent;
        border: 1px solid var(--white);
        border-radius: 4px;
        cursor: pointer; /* Cambia el cursor al pasar por encima */
        transition: all .2s ease-in;
        &:checked {
            background-color: var(--green);
            border-color: var(--green);
        }
    }

    tr.check {
        background-color: var(--green-opacity);
        color: var(--green);
        width: 80px;
    }

    .ellipsis {
        font-size: 20px;
        color: var(--green);
    }

    .th-ellipsis {
        width: 10px;
    }

    td img {
        height: 20px;
    }

    .team {
        display: flex;
        gap: 5px;
    }
`