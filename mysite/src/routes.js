import React from 'react';
import { Route } from 'react-router';

import HelloWorld from './components/HelloWorld';
import Example from './components/Example';

/*
 * TODO: Routes are present here in JS as well as Django urlconf,
 * however, react-router is also intentionally used for UI building,
 * but the redundancy should be addressed.
 * See https://git.io/vilqi and mysite/urls.py
 */

export default (
    <Route path="/" component={HelloWorld}>
        <Route path="/example" component={Example}></Route>
    </Route>
);
