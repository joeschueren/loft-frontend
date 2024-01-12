import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./compose.css";


const Compose:React.FC = () => {

    const [text, setText] = useState("");

    useEffect(() => {
        async function checkAuth(){
            try{
                const res = await fetch("http://localhost:5000/check-auth", {
                    method: "GET",
                    credentials: "include",
                })

                if(res.status !== 200){
                    window.location.href="/Login";
                }
            } catch (error) {
                window.location.href="/Login";
            }
        }

        checkAuth();
    }, []);

    function handleChange(value: any){
        setText(value);
    }

    async function handlePost(e: any){
        e.preventDefault();

        const title = e.target.title.value;

        const body = {title: title, text: text}

        if(title.length && text.length){
            try{
                let res = await fetch("http://localhost:5000/add-post",{
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(body)
                })

                if(res.status === 200){
                    window.location.href = "/blog";
                }
                else{

                }
            } catch (error) {
                alert("Error Contacting the Server, Try Again");
            }
        } else {
            alert("Your Title or Post is Empty.");
        }
    }

    const Font = ReactQuill.Quill.import('formats/font');
    Font.whitelist = ['Helvetica', 'Verdana', "Lora", "Roboto", "Montserrat", "Barlow"] ;
    ReactQuill.Quill.register(Font, true);

    return(
        <div className="compose-container">
            <p className="title">Create a New Blog Post</p>
            <form className="input-form" onSubmit={handlePost}>
                <p className="label">Enter a Title for Your Post</p>
                <input className="title-input" type="text" placeholder="Title" name="title"></input>
                <p className="label">Write Your Post</p>
                <ReactQuill
                    className="writing-area"
                    onChange={handleChange}
                    modules={{
                        toolbar: [
                            [{ 'size': ['small', false, 'large', 'huge'] }],
                            [{ 'font': Font.whitelist }],
                            [{ 'color': [] }, { 'background': [] }],
                            [{ 'align': [] }],
                            ['bold', 'italic', 'underline', 'strike'],
                            ['image', 'link']
                          ],
                    }}
                />
                <button type="submit" className="submit-button">Submit Post</button>
            </form>
        </div>);
}

export default Compose;