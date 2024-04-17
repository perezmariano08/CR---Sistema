import React, { useState } from 'react'
import { CreateAccountContainerStyled, CreateAccountData, CreateAccountInputs, CreateAccountWrapper } from './CreateAccountStyles'
import Select from '../../components/Select/Select'
import { dataEquipos } from '../../Data/Equipos/DataEquipos'
import { IoShieldHalf } from "react-icons/io5";
import { ButtonSubmit } from '../../components/UI/Button/ButtonStyles'
import { useDispatch } from 'react-redux';
import { setNewUserTeamFavorite } from '../../redux/user/userSlice';

const Step3 = () => {

    const [teamSelected, setTeamSelected] = useState(0);
    const dispatch = useDispatch()

    const handleSetTeamSelected = (e) => {
        setTeamSelected(e.target.value)
    }

    const handleNext = () => {
        if (teamSelected === 0) {
            return
        }
        dispatch(setNewUserTeamFavorite(teamSelected))
        window.location.href = '/login' 
    }


    return (
        <CreateAccountContainerStyled>
            <CreateAccountWrapper>
                <CreateAccountData>
                    <h2>Selecciona tu equipo favorito</h2>
                    <CreateAccountInputs>
                        <Select
                        onChange={handleSetTeamSelected} 
                        data={dataEquipos} 
                        placeholder={'Seleccionar equipo'} 
                        icon={<IoShieldHalf className='icon-select' />}>
                        </Select>
                    </CreateAccountInputs>
                    <ButtonSubmit
                    onClick={handleNext}
                    >Crear cuenta</ButtonSubmit>
                </CreateAccountData>
            </CreateAccountWrapper>
        </CreateAccountContainerStyled>
    )
}

export default Step3