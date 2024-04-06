import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    :root {
        --red: #E30000;
        --green: #2AD174;
        --green-opacity: rgba(42, 209, 116, 0.2);;
        /* Gray Scale */
        --white: #fafafa;
        --gray-200: #65656B;
        --gray-300: #2D2F30;
        --gray-400: #1A1B1B;
        --gray-500: #101011;
        --black: #121212;
        --yellow: #E2B000;

        --success: #22C55E;
        --danger: #EF4444;
        --import: #6366F1;
        --export: #A855F7
    }

    html {
        scroll-behavior: smooth;
    }

    img {
        user-select: none;
    }

    body {
        background-color: var(--gray-400);
        color: var(--white);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style-type: none;
        font-family: 'Mulish', sans-serif;
        font-weight: 400;
        font-style: normal;
    }

    // Estilo de la barra de desplazamiento para Chrome
    ::-webkit-scrollbar {
        width: 10px; /* Ancho de la barra de desplazamiento */
        height: 100%;
    }

    /* Estilo del botón de flecha (flecha de desplazamiento) en Chrome */
    ::-webkit-scrollbar-button {
        display: none;
    }

    /* Estilo de la pista (fondo) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-track {
        background-color: transparent; /* Color de fondo de la pista */
    }

    /* Estilo del pulgar (el indicador que se arrastra) de la barra de desplazamiento en Chrome */
    ::-webkit-scrollbar-thumb {
        background-color: var(--gray-300); /* Color del pulgar */
        height: 20px;
        border-radius: 20px;
        transition: all .3s ease-in-out;
        cursor: pointer;
    }

    /* Estilo del pulgar cuando se pasa el mouse por encima en Chrome */
    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--gray-200); /* Color del pulgar al pasar el mouse por encima */
        
    }

    .no-scroll {
        overflow: hidden;
    }

    .container {
        width: 100%;
    }

    .wrapper {
        width: 100%;
        display: flex;
        padding-bottom: 140px;

        @media (min-width: 300px) {
            padding: 30px 15px 140px 15px;
        }

        @media (min-width: 400px) {
            padding: 30px 20px 140px 20px;
        }
    }

    .MuiPaper-root {
        & > div {
            background-color: var(--gray-300);

            .MuiButtonBase-root {
                color: var(--white);
            }

            .Mui-selected {
                
                td {
                    background-color: var(--green-opacity);
                    color: var(--green) !important;
                }
            }
        }   
        & th, td {
            background-color: transparent;
            color: var(--white) !important;
            padding: 10px 15px;
            height: auto;
            border-color: var(--gray-200);
        }
    }

    .p-dropdown-panel {
        background-color: var(--gray-300);
        border-radius: 10px;

        & .p-dropdown-items-wrapper .p-dropdown-items {
            padding: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
    }
`