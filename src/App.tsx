import React from 'react';
import { Dashboard } from './features/Dashboard/Dashboard';
import { GlobalStyle } from '@i.w/trip-plan';

function App() {
    return (
        <div>
            <GlobalStyle/>
            <Dashboard/>
        </div>
    );
}

export default App;
