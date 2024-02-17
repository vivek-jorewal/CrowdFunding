import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import { Sepolia } from "@thirdweb-dev/chains";
import {ChainId, ThirdwebProvider} from '@thirdweb-dev/react';

import { StateContextProvider } from './context';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider activeChain={ Sepolia }
    clientId="9a721ada5e5ef6b5d12ee98037a7966d">
        <Router>
        <StateContextProvider>
            <App />
        </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)