import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Compose from "./components/Compose/Compose";
import Blog from "./components/Blog/Blog";
import ViewPost from "./components/ViewPost/ViewPost";
import Dashboard from "./components/Dashboard/Dashboard";
import Delete from "./components/Delete/Delete";
import Update from "./components/Update/Update";
import UpdateEditor from "./components/Update/UpdateEditor/UpdateEditor";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" Component={Home}></Route>
                <Route path="/Login" Component={Login}/>
                <Route path="/Compose" Component={Compose}/>
                <Route path="/Blog" Component={Blog}/>
                <Route path="/Dashboard" Component={Dashboard}/>
                <Route path="/Delete" Component={Delete}/>
                <Route path="/Update" Component={Update}/>
                <Route path="/Update/:title" Component={UpdateEditor}/>
                <Route path="/Post/:title" Component={ViewPost}/>
            </Routes>
        </Router>
    );
}

export default App;
