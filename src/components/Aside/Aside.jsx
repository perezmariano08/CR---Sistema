import React, { useState } from 'react';
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

const Aside = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);

    const toggleSubMenu = () => {
        setShowSubMenu(!showSubMenu);
    };

    return (
        <AsideContainerStyled>
            <AsideHeader>
                <img src={LogoCR} alt="" />
            </AsideHeader>
            <Divider color="gray-300" />
            <AsideUser>
                <img src={UserImg} alt="" srcset="" />
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
                <NavLinkItem to={"/admin/temporadas"}>
                    <LiaFutbol />
                    <p>Temporadas</p>
                </NavLinkItem>
                
                <NavLinkItem to={"/admin/partidos"}>
                    <TbCalendarEvent />
                    <p>Partidos</p>
                </NavLinkItem>
                <MenuItem>
                    <motion.div style={{ display: 'flex', alignItems: 'center' }}>
                        <NavLinkItem onClick={toggleSubMenu} className="custom-navlink">
                            <PiUsers />
                            <p>Usuarios</p>
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
                            >
                                <SubMenu>
                                    <SubMenuItem to={"/admin/usuarios/crear"}>Listado de usuarios</SubMenuItem>
                                    <SubMenuItem to={"/admin/usuarios/listado"}>Listado de usuarios</SubMenuItem>
                                </SubMenu>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </MenuItem>
                <NavLinkItem to={"/admin/torneos"}>
                    <GoTrophy />
                    <p>Torneos</p>
                </NavLinkItem>
            </AsideMenu>
        </AsideContainerStyled>
    );
};

export default Aside;
