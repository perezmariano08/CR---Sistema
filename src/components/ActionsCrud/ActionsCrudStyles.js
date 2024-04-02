import styled from "styled-components";

export const ActionsCrudContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--gray-300);
    border-radius: 10px;

    @media (max-width: 668px) {
        flex-direction: column;
        justify-content: start;
        align-items: start;
        row-gap: 10px;
    }
`

export const ActionsCrudButtons = styled.div`
    display: flex;
    gap: 10px;
`