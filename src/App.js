import React from "react";
import {GlobalProvider} from "../src/global/context/useContext.jsx"
import { Router } from "./routes/Routes"
import './index.css'

function App() {
  return (
    <GlobalProvider>
      <Router/>
    </GlobalProvider>
  )
}
export default App;
