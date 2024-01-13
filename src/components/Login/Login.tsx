import React, {useState} from "react";
import "./login.css";

const Login: React.FC = () => {

    const [message, setMessage] = useState("\u00A0");

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    async function handleSubmit(e: any){

        e.preventDefault();

        const username = e.target.email.value;
        const password = e.target.password.value;

        try{
            const res = await fetch(url+"/login", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username: username, password: password})
            })

            if(res.status === 200){
                window.location.href = "/Dashboard";
            }
            else{
                console.log("inside");
                setMessage("Username or Password Incorrect");
                setTimeout(()=>{
                    setMessage("\u00A0");
                }, 5000)
            }
        } catch (error) {
            setMessage("Server Error");
            setTimeout(()=>{
                setMessage("\u00A0");
            }, 5000)
        }
        
    }

    return(
        <div className="register-container">
            <div className="form-container">
                <span className="welcome mb-6">Welcome Back</span>
                <form className="form mt-6" onSubmit={handleSubmit}>
                    <span className="input-label">Email</span>
                    <input type="email" className="form-input" placeholder="Email" name="email"></input>
                    <span className="input-label">Password</span>
                    <input type="password" className="form-input" placeholder="Password" name="password"></input>
                    <p className="warning">{message}</p>
                    <button type="submit" className="form-button">Log In</button>
                </form>
            </div>
        </div>)
}

export default Login;