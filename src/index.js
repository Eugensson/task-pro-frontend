import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/task-pro-frontend">
        <GoogleOAuthProvider clientId="305670474175-vmep2emjp5dp8isbrqar3vv8n95j5tg7.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
// 305670474175 - vmep2emjp5dp8isbrqar3vv8n95j5tg7.apps.googleusercontent.com; - new
// 305670474175 - qgrqhq527laokt9pij62etp802t5tvar.apps.googleusercontent.com; - old
