import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const AppRouter = () => {
    return (
        <>
            <Switch>
                <Route exact path="/fuerza" component={ FuerzaScreen } />
                <Route exact path="/agilidad" component={ AgilidadScreen } />
                <Route exact path="/inteligencia" component={ InteligenciaScreen } />
                <Route exact path="/hero/:heroeId" component={ HeroScreen } />
                <Route exact path="/search" component={ SearchScreen } />
                <Redirect to="/fuerza" />
            </Switch>
        </>
    )
}
