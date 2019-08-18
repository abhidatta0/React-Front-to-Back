import React, { Fragment, useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import Searchbar from './components/layout/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModel from './components/logs/AddLogModel';
import EditLogModel from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    //Initialize Materialize CSS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <Searchbar />
        <div className='container'>
          <AddBtn />
          <AddLogModel />
          <EditLogModel />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
