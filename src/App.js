import React, { useContext } from "react";
import Routers from "./routers/Routers";
import { ContextData } from "./context/Context";
import Adminpanel from "./admin-panel/Admin-panel";


function App() {
  const {payment, adminlog, menu, modal, side} = useContext(ContextData);
  return (
    <div className={payment || menu || modal || side ? "wrapper noscroll" : "wrapper"}>
      { adminlog ? 
      <>
        <Adminpanel/>
      </> :
      <>
        <Routers/>
      </>
      }
      
    </div>
  );
}

export default App;
