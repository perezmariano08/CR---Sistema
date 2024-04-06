import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoShieldHalf } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { LiaFutbol } from "react-icons/lia";
import { GoTrophy } from "react-icons/go";
import { TbCalendarEvent } from "react-icons/tb";
import { PiUsers } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { AsideContainerStyled, AsideHeader, AsideMenu, AsideUser, MenuItem, NavLinkAngleDown, NavLinkItem, SubMenu, SubMenuItem } from './AsideStyles';
import Divider from '../Divider/Divider';
import LogoCR from '../../assets/Logos/logoCopaRelampago.png'
import UserImg from '../../assets/user-default.png'
import { useLocation } from 'react-router-dom';
import { TbShirtSport } from "react-icons/tb";

const Aside = ({className}) => {
    const location = useLocation(); // Obtén la ruta actual
    const [showSubMenu, setShowSubMenu] = useState(false);

    // Verifica si la ruta actual pertenece al submenú de "Temporadas"
    const isActiveTemporadas = location.pathname.includes("/admin/temporadas");

    // Al cargar la página, establece el estado del submenú en función de si la ruta actual pertenece a "Temporadas"
    useEffect(() => {
        setShowSubMenu(isActiveTemporadas);
    }, [isActiveTemporadas]);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <AsideContainerStyled className={className}>
            <AsideHeader>
                <img src={LogoCR} alt="" />
            </AsideHeader>
            <Divider color="gray-300" />
            <AsideUser>
                <img src={UserImg} alt="" />
                <p>Octavio Pereyra</p>
            </AsideUser>
            <Divider color="gray-300" />
            <AsideMenu>
                <NavLinkItem to={"/admin/dashboard"}>
                    <MdOutlineDashboard />
                    <p>Dashboard</p>
                </NavLinkItem>
                <NavLinkItem to={"/admin/equipos"}>
                    <IoShieldHalf />
                    <p>Equipos</p>
                </NavLinkItem>
                <NavLinkItem to={"/admin/usuarios"}>
                    <LiaFutbol />
                    <p>Usuarios</p>
                </NavLinkItem>
                <NavLinkItem to={"/admin/jugadores"}>
                    <TbShirtSport />
                    <p>Jugadores</p>
                </NavLinkItem>
                <NavLinkItem to={"/admin/partidos"}>
                    <TbCalendarEvent />
                    <p>Partidos</p>
                </NavLinkItem>
                <MenuItem>
                    <motion.div style={{ display: 'flex', alignItems: 'center' }}>
                        <NavLinkItem onClick={toggleSubMenu} className="custom-navlink">
                            <PiUsers />
                            <p>Temporadas</p>
                            <NavLinkAngleDown
                                animate={{ rotate: showSubMenu ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                style={{ marginLeft: 'auto' }}
                            >
                                <FaAngleDown className='angle-down' />
                            </NavLinkAngleDown>
                        </NavLinkItem>
                    </motion.div>
                    <AnimatePresence>
                        {showSubMenu && (
                            <motion.div
                                initial={{ opacity: 0, maxHeight: 0}}
                                animate={{ opacity: 1, maxHeight: 1000}}
                                exit={{ opacity: 0, maxHeight: 0 }}
                                transition={{ duration: 0.45 }}
                                style={{ overflow: "hidden" }}
                                className='submenu'
                            >
                                <SubMenu>
                                    <SubMenuItem to={"/admin/temporadas/temporada"} isActive={isActiveTemporadas} >Crear temporada</SubMenuItem>
                                    <SubMenuItem to={"/admin/temporadas/categorias"} isActive={isActiveTemporadas}>Categorías</SubMenuItem>
                                    <SubMenuItem to={"/admin/temporadas/torneos"} isActive={isActiveTemporadas}>Torneos</SubMenuItem>
                                    <SubMenuItem to={"/admin/temporadas/sedes"} isActive={isActiveTemporadas}>Sedes</SubMenuItem>
                                    <SubMenuItem to={"/admin/temporadas/años"} isActive={isActiveTemporadas}>Años</SubMenuItem>
                                </SubMenu>
                            </motion.div> 
                        )}
                    </AnimatePresence>
                </MenuItem>
            </AsideMenu>
        </AsideContainerStyled>
    );
};

export default Aside;
