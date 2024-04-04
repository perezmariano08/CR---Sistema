import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Content from '../../components/Content/Content';
import ActionsCrud from '../../components/ActionsCrud/ActionsCrud';
import { ActionsCrudButtons } from '../../components/ActionsCrud/ActionsCrudStyles';
import Button from '../../components/Button/Button';
import { FiPlus } from 'react-icons/fi';
import { IoTrashOutline } from 'react-icons/io5';
import { LuDownload, LuUpload } from 'react-icons/lu';
import Table from '../../components/Table/Table';
import { ContentTitle } from '../../components/Content/ContentStyles';
import ModalCreate from '../../components/Modals/ModalCreate/ModalCreate';
import { ModalFormInputContainer } from '../../components/Modals/ModalsStyles';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';
import { IoCheckmark, IoClose } from "react-icons/io5";
import ModalDelete from '../../components/Modals/ModalDelete/ModalDelete';
import { HiOutlineEllipsisVertical } from 'react-icons/hi2';
import Overlay from '../../components/Overlay/Overlay';

const Años = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openCreateModal = () => {
        setIsCreateModalOpen(true);
    };

    const closeCreateModal = () => {
        setIsCreateModalOpen(false);
    };

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('Selected file:', file);
        // Aquí puedes manejar la lógica para leer el archivo CSV
    };
    
    return (
        <Content>
            <ContentTitle>Años</ContentTitle>
            <ActionsCrud>
                <ActionsCrudButtons>
                    <Button bg="success" color="white" onClick={openCreateModal}>
                        <FiPlus />
                        <p>Nuevo</p>
                    </Button>
                    <Button bg="danger" color="white" onClick={openDeleteModal}>
                        <IoTrashOutline />
                        <p>Eliminar</p>
                    </Button>
                </ActionsCrudButtons>
                <ActionsCrudButtons>
                    <label htmlFor="importInput" style={{ display: 'none' }}>
                        <input id="importInput" type="file" accept=".csv" onChange={handleFileChange} />
                    </label>
                    <Button bg="import" color="white" as="label" htmlFor="importInput">
                        <LuUpload />
                        <p>Importar</p>
                    </Button>
                    <Button bg="export" color="white">
                        <LuDownload />
                        <p>Descargar</p>
                    </Button>
                </ActionsCrudButtons>
            </ActionsCrud>
            <Table thead={
                    <tr>
                        <th className='th-ellipsis'></th>
                        <th>
                            <input className='checkbox' type="checkbox" name="" id="" />
                        </th>
                        <th>Año</th>
                        <th>Descripcion</th>
                    </tr>
                }
                tbody={
                    <>
                        <tr>
                            <td className='th-ellipsis'>
                                <HiOutlineEllipsisVertical className='ellipsis'/>
                            </td>
                            <td>
                                <input className='checkbox' type="checkbox" name="" id="" />
                            </td>
                            <td>2024</td>
                            <td>-</td>
                        </tr>
                        <tr className=''>
                            <td>
                                <HiOutlineEllipsisVertical className='ellipsis'/>
                            </td>
                            <td>
                                <input className='checkbox' type="checkbox" name="" id="" />
                            </td>
                            <td>2023</td>
                            <td>-</td>
                        </tr>
                        <tr className=''>
                            <td>
                                <HiOutlineEllipsisVertical className='ellipsis'/>
                            </td>
                            <td>
                                <input className='checkbox' type="checkbox" name="" id="" />
                            </td>
                            <td>2022</td>
                            <td>-</td>
                        </tr>
                    </>
                }
            />
            {
                isCreateModalOpen && <>
                    <ModalCreate initial={{ opacity: 0 }}
                        animate={{ opacity: isCreateModalOpen ? 1 : 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        title="Crear año"
                        onClickClose={closeCreateModal}
                        buttons={
                            <>
                                <Button color={"danger"} onClick={closeCreateModal}>
                                    <IoClose/>
                                    Cancelar
                                </Button>
                                <Button color={"success"} onClick={closeCreateModal}>
                                    <IoCheckmark/>
                                    Guardar
                                </Button>
                            </>
                        }
                        form={
                            <>
                                <ModalFormInputContainer>
                                    Año
                                    <Input type='text' placeholder="Escriba aqui el año..." />
                                </ModalFormInputContainer>
                                <ModalFormInputContainer>
                                    Añadir descripción (Opcional)
                                    <Input type='text' placeholder="Escriba aqui..." />
                                </ModalFormInputContainer>
                            </>
                        }
                    /> 
                    <Overlay onClick={closeCreateModal}/>
                </>
            }
            {
                isDeleteModalOpen && <>
                    <ModalDelete initial={{ opacity: 0 }}
                    animate={{ opacity: isDeleteModalOpen ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    message={"los años"}
                    onClickClose={closeDeleteModal}
                    buttons={
                        <>
                            <Button color={"danger"}>
                                <IoClose/>
                                No
                            </Button>
                            <Button color={"success"}>
                                <IoCheckmark/>
                                Si
                            </Button>
                        </>
                    }
                    />
                    <Overlay onClick={closeDeleteModal}/>
                </>
            }
        </Content>
    );
};

export default Años;
