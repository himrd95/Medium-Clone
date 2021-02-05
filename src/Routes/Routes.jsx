import React from 'react'
import { Route, Switch } from "react-router-dom"
import { LandingPage } from "../Components/LandingPage"
import { Blog } from "../Components/Blog"


const Routes = () => {

    return (
        <>
            <Switch>
                <Route exact path = "/">
                    <LandingPage />                
                </Route>
                <Route exact path = "/our-story">
                </Route>
                <Route exact path = "/membership">
                </Route>
                <Route exact path = "/write">
                </Route>
                <Route exact path = "/sign-in">
                </Route>
                <Route exact path = "/get-started">
                </Route>
                <Route exact path = "/blogs/:id">
                    <Blog />
                </Route>
            </Switch>
        </>
    )
}

export {Routes}
