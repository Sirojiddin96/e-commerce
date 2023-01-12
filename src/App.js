import React, { useContext } from "react";
import Routers from "./routers/Routers";
import Header from "./containers/Header";
import { ContextData } from "./context/Context";
import Adminpanel from "./admin-panel/Admin-panel";


function App() {
  const {adminlog, menu, modal} = useContext(ContextData);
 
  return (
    <div className={menu || modal ? "wrapper noscroll" : "wrapper"}>
      { adminlog ? 
      <>
        <Adminpanel/>
      </> :
      <>
        <Header/>
        <Routers/>
      </>
      }
      
    </div>
  );
}

export default App;
