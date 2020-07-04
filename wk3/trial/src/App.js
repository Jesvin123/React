import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/menucomponents';
import {Provider} from  'react-redux';
import {Configurestore} from './redux/configurestore';

const store=Configurestore();

class App extends Component
{
    render()
    {
        return (
        <Provider store={store} >
          <BrowserRouter>
        <div className="App">
          
            <Menu/>
        
        </div>
        </BrowserRouter>
        </Provider>
      )
    }
}

export default App;
