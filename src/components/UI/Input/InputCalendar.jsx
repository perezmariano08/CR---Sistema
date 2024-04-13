
import React, { useState } from "react";
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { InputContainerStyled } from "./InputSyles";
import { AiOutlineCalendar } from "react-icons/ai";

export default function InputCalendar({placeholder, id, name}) {
    const [date, setDate] = useState(null);

    addLocale('es', { 
        firstDayOfWeek: 1,
        showMonthAfterYear: true,
        dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
        dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
        dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
        monthNames: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
        monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
        today: 'Hoy',
        clear: 'Limpiar'
    });

    return (
        <InputContainerStyled>
            <Calendar dateFormat="dd/mm/yy" value={date} onChange={(e) => setDate(e.value)} locale="es" placeholder={placeholder} id={id} name={name}></Calendar>
            <AiOutlineCalendar className='icon-input'/>
        </InputContainerStyled>
    )
}
        