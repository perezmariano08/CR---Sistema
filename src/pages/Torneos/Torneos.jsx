import React from 'react'
import Content from '../../components/Content/Content'
import Table from '../../components/Table/Table'
import ActionsCrud from '../../components/ActionsCrud/ActionsCrud'
import Button from '../../components/Button/Button'

import { FiPlus } from "react-icons/fi";
import { IoTrashOutline } from "react-icons/io5";
import { LuUpload, LuDownload } from "react-icons/lu";


import { ActionsCrudButtons } from '../../components/ActionsCrud/ActionsCrudStyles'
import { ContentTitle } from '../../components/Content/ContentStyles'

const Torneos = () => {
    return (
        <Content>
            <ContentTitle>
                Torneos
            </ContentTitle>
            <ActionsCrud>
                <ActionsCrudButtons>
                    <Button bg="success" color="white">
                        <FiPlus />
                        Nuevo
                    </Button>
                    <Button bg="danger" color="white">
                        <IoTrashOutline />
                        Eliminar
                    </Button>
                </ActionsCrudButtons>
                <ActionsCrudButtons>
                    <Button bg="import" color="white">
                        <LuUpload />
                        Importar
                    </Button>
                    <Button bg="export" color="white">
                        <LuDownload />
                        Descargar
                    </Button>
                </ActionsCrudButtons>
            </ActionsCrud>
            <Table/>
        </Content>
    )
}

export default Torneos