import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux';
import { router } from './routes'
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store} >
     <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
