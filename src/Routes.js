import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import BrotherTec from './componentes/BrotherTec';

export default function Routes(props) {
    return (
        <HashRouter>
            <Switch>
                    <Route path="/" exact component = {BrotherTec}/>
            </Switch>
        </HashRouter>
    );
}
