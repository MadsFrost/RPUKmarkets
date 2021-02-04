import { Route, NavLink, BrowserRouter, Switch } from 'react-router-dom'    
import React, { Component } from 'react'
import Prices from '../Master/Category';
import NotFound from '../NotFound/NotFound';
import Frontpage from '../Frontpage/Frontpage';

export default class pageRouter extends Component {
    render() {
        return (
            <BrowserRouter>
               <div className="base">
                    <header>
                    <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mt-1 shadow-sm p-2 mb-3 bg-white rounded" id="navbarTogglerDemo01">
                            <NavLink to="/" className="navbar-brand align-middle mb-1">🏛️ Marketplace</NavLink>
                            <div className="me-auto"></div>
                            <ul className="navbar-nav mb-1 mb-lg-0">
                                    <li className="nav-item">
                                    <NavLink to="/" activeClassName="activeNavItem" className="nav-link" aria-current="page">🏠 Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink to="/prices" activeClassName="activeNavItem" className="nav-link" aria-current="page">📈 Prices</NavLink>
                                    </li>
                                    <li className="nav-item">
                                    <NavLink to="/calculator" activeClassName="activeNavItem" className="nav-link" aria-current="page">🧮 Calculator</NavLink>
                                    </li>
                                </ul>
                            <form className="ml-1 d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                    </nav>
                    </header>
                    <div className="container">
                        <Switch>
                            <Route path="/" exact component={Frontpage} />
                            <Route path="/prices" component={Prices} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter> 
        )
    }
}

