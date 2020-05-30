import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BrotherTec from './componentes/BrotherTec';

export default function Routes(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = {BrotherTec}/>
            </Switch>
        </BrowserRouter>
    );
}
