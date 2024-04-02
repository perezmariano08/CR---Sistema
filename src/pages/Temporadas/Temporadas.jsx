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

const Temporadas = () => {
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

    return (
        <Content>
            <ContentTitle>Temporadas</ContentTitle>
            <ActionsCrud>
                <ActionsCrudButtons>
                    <Button bg="success" color="white" onClick={openCreateModal}>
                        <FiPlus />
                        Nuevo
                    </Button>
                    <Button bg="danger" color="white" onClick={openDeleteModal}>
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
            <Table 
                thead={
                    <tr>
                        <th className='th-ellipsis'></th>
                        <th>
                            <input className='checkbox' type="checkbox" name="" id="" />
                        </th>
                        <th>Nombre</th>
                        <th>Categoria</th>
                        <th>Año</th>
                        <th>Sede</th>
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
                            <td>Torneo Apertura</td>
                            <td>Serie A</td>
                            <td>2024</td>
                            <td>Elenia</td>
                            <td>-</td>
                        </tr>
                        <tr className=''>
                            <td>
                                <HiOutlineEllipsisVertical className='ellipsis'/>
                            </td>
                            <td>
                                <input className='checkbox' type="checkbox" name="" id="" />
                            </td>
                            <td>Torneo Apertura</td>
                            <td>Serie A</td>
                            <td>2024</td>
                            <td>Elenia</td>
                            <td>-</td>
                        </tr>
                        <tr className=''>
                            <td>
                                <HiOutlineEllipsisVertical className='ellipsis'/>
                            </td>
                            <td>
                                <input className='checkbox' type="checkbox" name="" id="" />
                            </td>
                            <td>Torneo Apertura</td>
                            <td>Serie A</td>
                            <td>2024</td>
                            <td>Da Guia</td>
                            <td>-</td>
                        </tr>
                    </>
                }
            />
            {/* Modal de creación */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isCreateModalOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <ModalCreate 
                    title="Crear temporada"
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
                                Torneo
                                <Select
                                    options={
                                        <>
                                            <option value="" selected disabled>Seleccionar torneo</option>
                                            <option value="value1">Torneo Apertura</option>
                                            <option value="value2">Torneo Clausura</option>
                                        </>
                                    }
                                >
                                </Select>
                            </ModalFormInputContainer>
                            <ModalFormInputContainer>
                                Categoría
                                <Select 
                                    options={
                                        <>
                                            <option value="" selected disabled>Seleccionar categoría</option>
                                            <option value="value1">Serie A</option>
                                            <option value="value2">Serie B</option>
                                            <option value="value2">Serie C</option>
                                            <option value="value2">Sub 19</option>
                                            <option value="value2">Sub 23</option>
                                        </>
                                    }
                                >
                                </Select>
                            </ModalFormInputContainer>
                            <ModalFormInputContainer>
                                Año
                                <Select 
                                    options={
                                        <>
                                            <option value="" selected disabled>Seleccionar año</option>
                                            <option value="value1">2023</option>
                                            <option value="value2">2024</option>
                                        </>
                                    }
                                >
                                </Select>
                            </ModalFormInputContainer>
                            <ModalFormInputContainer>
                                Añadir descripción (Opcional)
                                <Input type='text' placeholder="Escriba aqui..." />
                            </ModalFormInputContainer>
                        </>
                    }
                />
            </motion.div>
            {/* Modal de eliminación */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isDeleteModalOpen ? 1 : 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <ModalDelete
                    message={"las temporadas"}
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
            </motion.div>
        </Content>
    );
};

export default Temporadas;
