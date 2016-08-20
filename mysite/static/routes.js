import React from 'react';
import { Route } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Example from './components/Example';

export default (
    <Route path="/" component={HelloWorld}>
        <Route path="/example" component={Example}></Route>
    </Route>
);
