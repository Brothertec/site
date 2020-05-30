import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BrotherTec from './componentes/BrotherTec';

export default function Routes(props) {
    return (
        <BrowserRouter basename="/siteBrothertec">
            <Switch>
                <Route path="/" exact component = {BrotherTec}/>
            </Switch>
        </BrowserRouter>
    );
}
