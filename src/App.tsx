import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
import Blog from "./components/Blog/Blog";
import ViewPost from "./components/ViewPost/ViewPost";
import Dashboard from "./components/Dashboard/Dashboard";
import Delete from "./components/Delete/Delete";
import Update from "./components/Update/Update";
import { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import UpdateEditor from "./components/Update/UpdateEditor/UpdateEditor";

function App() {

    const [isAuth, setIsAuth] = useState<boolean | undefined>(undefined)

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    const location = window.location.pathname;

    async function checkAuth(){
        try{
            const res = await fetch(url+"/check-auth", {
                method: "GET",
                credentials: "include"
            })
  
            if(res.status === 200){
                setIsAuth(true);
            }
            else{
                setIsAuth(false);
            }
  
        } catch(error) {
            alert("Server Error Please Try Again");
        }
      }
  
      useEffect(() => {
          checkAuth();
      })
    
    if((location !== "/" && location !== "/Blog" && location !== "/Login") && isAuth === undefined){
        return(<h1>Loading</h1>);
    }
    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/Login" Component={Login}/>
                <Route path="/Compose" Component={() => isAuth ? <Compose/> : <Navigate to="/login"/>}/>
                <Route path="/Blog" Component={Blog}/>
                <Route path="/Dashboard" Component={() => isAuth ? <Dashboard/> : <Navigate to="/login"/>}/>
                <Route path="/Delete" Component={() => isAuth ? <Delete/> : <Navigate to="/login"/>}/>
                <Route path="/Update" Component={() => isAuth ? <Update/> : <Navigate to="/login"/>}/>
                <Route path="/Update/:title" Component={() => isAuth ? <UpdateEditor/> : <Navigate to="/login"/>}/>
                <Route path="/Post/:title" Component={ViewPost}/>
            </Routes>
        </Router>
    );
}

export default App;
