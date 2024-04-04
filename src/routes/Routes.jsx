import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import Layout from '../components/Layout/Layout'
import Equipos from '../pages/Equipos/Equipos'
import Temporadas from '../pages/Temporadas/Temporadas'
import Torneos from '../pages/Torneos/Torneos'
import Partidos from '../pages/Partidos/Partidos'
import Admin from '../pages/Admin/Admin'
import Años from '../pages/Años/Años'
import Categorias from '../pages/Categorias/Categorias'
import Sedes from '../pages/Sedes/Sedes'
import Usuarios from '../pages/Usuarios/Usuarios'
import Jugadores from '../pages/Jugadores/Jugadores'

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/admin/temporadas/temporada' element={<Layout className="page-temporadas"> <Temporadas/> </Layout>} />
                <Route path='/admin/temporadas/categorias' element={<Layout> <Categorias/> </Layout>} />
                <Route path='/admin/temporadas/sedes' element={<Layout> <Sedes/> </Layout>} />
                <Route path='/admin/temporadas/años' element={<Layout> <Años/> </Layout>} />
                <Route path='/admin/temporadas/torneos' element={<Layout> <Torneos/> </Layout>} />
                <Route path='/admin/usuarios' element={<Layout> <Usuarios/> </Layout>} />
                <Route path='/admin/jugadores' element={<Layout> <Jugadores/> </Layout>} />
                <Route path='/admin/equipos' element={<Layout> <Equipos/> </Layout>} />
                <Route path='/admin/partidos' element={<Layout> <Partidos/> </Layout>} />
                
                <Route path='/admin/dashboard' element={<Layout> <Admin/> </Layout>} />
            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes
