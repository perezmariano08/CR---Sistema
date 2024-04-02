import styled from "styled-components";

export const ContentContainerStyled = styled.div`
    margin-left: 18rem;
    width: 100%;
    @media (max-width: 968px) {
        width: 100%;
        margin-left: 0px;
    }
    height: fit-content;
`

export const ContentWrapper = styled.div`
    padding: 30px;
    display: flex;
    height: 5000px;
    flex-direction: column;
    gap: 35px;
`

export const ContentTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`