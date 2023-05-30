import React from "react";
import "./App.css";

import { RouterProvider, createBrowserRouter} from 'react-router-dom';
import router from './router'


function App() {
  //1
  return (
    <div className="App">
        <RouterProvider router={ router } />
    </div>
  );
}

export default App