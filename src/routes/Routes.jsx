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

const Routes = () => {
    return (
        <BrowserRouter>
            <ReactDomRoutes>
                <Route path='/admin/temporadas' element={<Layout> <Temporadas/> </Layout>} />
                <Route path='/admin/equipos' element={<Layout> <Equipos/> </Layout>} />
                <Route path='/admin/partidos' element={<Layout> <Partidos/> </Layout>} />
                <Route path='/admin/torneos' element={<Layout> <Torneos/> </Layout>} />
                <Route path='/admin/dashboard' element={<Layout> <Admin/> </Layout>} />
            </ReactDomRoutes>
        </BrowserRouter>
    )
}

export default Routes
