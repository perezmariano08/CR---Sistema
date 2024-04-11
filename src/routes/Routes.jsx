import React from 'react'
import {
    BrowserRouter,
    Routes as ReactDomRoutes,
    Route
} from "react-router-dom"
import LayoutAdmin from '../components/Layout/LayoutAdmin'
import LayoutPrivate from '../components/Layout/LayoutPrivate'
import Equipos from '../pages/Administrador/Equipos/Equipos'
import Temporadas from '../pages/Administrador/Temporadas/Temporadas'
import Torneos from '../pages/Administrador/Torneos/Torneos'
import Partidos from '../pages/Administrador/Partidos/Partidos'
import Admin from '../pages/Administrador/Admin/Admin'
import Años from '../pages/Administrador/Años/Años'
import Categorias from '../pages/Administrador/Categorias/Categorias'
import Sedes from '../pages/Administrador/Sedes/Sedes'
import Usuarios from '../pages/Administrador/Usuarios/Usuarios'
import Jugadores from '../pages/Administrador/Jugadores/Jugadores'
import HomePlanillero from '../pages/Planillero/HomePlanillero/HomePlanillero'
import Layout from '../components/Layout/LayoutAdmin'
import Onboarding from '../pages/Onboarding/Onboarding'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import CreateAccount from '../pages/CreateAccount/CreateAccount'
import MyTeam from '../pages/MyTeam/MyTeam'
import Stats from '../pages/Stats/Stats'
import MatchStats from '../pages/MatchStats/MatchStats'
import News from '../pages/News/News'
import More from '../pages/More/More'
import LayoutAux from '../components/LayoutAux/LayoutAux'
import Planilla from '../pages/Planillero/Planilla/Planilla'

const Routes = () => {
    return (
        <BrowserRouter>
        <ReactDomRoutes>

                {/* Usuario */}
                <Route path='/onboarding' element={<Layout> <Onboarding/> </Layout>} />
                <Route path='/login' element={<Layout> <Login/> </Layout>  }/>
                <Route path='/create-account' element={<Layout> <CreateAccount/> </Layout>  }/>
                <Route path='/my-team' element={ <LayoutPrivate> <MyTeam/> </LayoutPrivate>  }/>
                <Route path='/stats' element={<LayoutPrivate> <Stats/> </LayoutPrivate>  }/>
                <Route path='/news' element={<LayoutPrivate> <News/> </LayoutPrivate>  }/>
                <Route path='/more' element={<LayoutAux> <More/> </LayoutAux>}/>

                {/* Rutas admin */}
                <Route path='/admin/temporadas/temporada' element={<LayoutAdmin className="page-temporadas"> <Temporadas/> </LayoutAdmin>} />
                <Route path='/admin/temporadas/categorias' element={<LayoutAdmin> <Categorias/> </LayoutAdmin>} />
                <Route path='/admin/temporadas/sedes' element={<LayoutAdmin> <Sedes/> </LayoutAdmin>} />
                <Route path='/admin/temporadas/años' element={<LayoutAdmin> <Años/> </LayoutAdmin>} />
                <Route path='/admin/temporadas/torneos' element={<LayoutAdmin> <Torneos/> </LayoutAdmin>} />
                <Route path='/admin/usuarios' element={<LayoutAdmin> <Usuarios/> </LayoutAdmin>} />
                <Route path='/admin/jugadores' element={<LayoutAdmin> <Jugadores/> </LayoutAdmin>} />
                <Route path='/admin/equipos' element={<LayoutAdmin> <Equipos/> </LayoutAdmin>} />
                <Route path='/admin/partidos' element={<LayoutAdmin> <Partidos/> </LayoutAdmin>} />
                <Route path='/admin/dashboard' element={<LayoutAdmin> <Admin/> </LayoutAdmin>} />

                {/* Rutas planillero */}
                <Route path='/planillero' element={<LayoutPrivate> <HomePlanillero/> </LayoutPrivate>  }/>
                <Route path='/planillero/planilla' element={<LayoutPrivate> <Planilla/> </LayoutPrivate>  }/>

                <Route path='/' element={<LayoutPrivate> <Home/> </LayoutPrivate>  }/>
                <Route path='/stats-match' element={<LayoutPrivate> <MatchStats/> </LayoutPrivate>  }/>
            </ReactDomRoutes>
        </BrowserRouter>
            
    )
}

export default Routes
