import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// redux store
import { Provider } from 'react-redux';
import { store } from './reudux/configStore';
import {
  BrowserRouter,
  Route,
  Routes,
  unstable_HistoryRouter as HistoryRouter, Navigate
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SignUp from './components/SignUp';
import Create from './components/Create';
import Create_Invitation from './components/Create_Invitation';
import Survey from './components/Survey';
import Invitation from './components/Invitation';
import CreateBoard from './components/CreateBoard';

const root = ReactDOM.createRoot(document.getElementById('root'));

export const history = createBrowserHistory();

root.render(
    <Provider store={store}>
      <HistoryRouter history={history}>
      {/* <App /> */}
      <Routes>
          <Route index element={<SignUp/>} />
          <Route path='create_account' element={<Create/>} />
          <Route path='create_invitation' element={<Create_Invitation/>}/>
          <Route path='survey' element={<Survey/>}/>
          <Route path='invitation' element={<Invitation/>}/>
          <Route path='create_board' element={<CreateBoard/>}/>
      </Routes>
      </HistoryRouter>
    </Provider>
);
