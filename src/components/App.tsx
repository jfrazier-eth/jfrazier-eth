
import * as React from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard';

const App = () => (
    <HashRouter>
        <Dashboard />
    </HashRouter>
);

export default App;
