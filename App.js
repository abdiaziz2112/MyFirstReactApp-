import React from "react";
import Post from "./components/Post";

function App() {
   const title = "Asc"
    return(
    <> 
     <div className="container" style={{backgroundColor:"#245455",padding:"25px",borderRadius:"20px"}}>
        
         <Post/>
         <Post/>
         <Post/>
         
     </div>
    </>

    )
}

export default App;