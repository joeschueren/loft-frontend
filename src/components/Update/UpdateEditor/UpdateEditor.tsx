import "./updateeditor.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";

const UpdateEditor: React.FC = () => {

    const [text, setText] = useState("");

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    let { title }: any = useParams();

    if(title){
        title.replace(/\?/g, '%3F');
    }

    interface Post {
        title: string,
        text: string,
        date: string,
        _id: string
    }
    
    const [post, setPost] = useState<Post>({title:"", text:"", date:"", _id: ""});

    useEffect(() => {
        async function getPosts(){
            try{
                const res = await fetch(url+"/get-post/"+encodeURIComponent(title));

                const newPost: any = await res.json();

                setPost(newPost[0]);

                console.log(newPost[0].text);
                setText(newPost[0].text);

            } catch (error) {
                alert("Server Error Please Try Again");
            }
        }

        getPosts();
    });

    const Font = ReactQuill.Quill.import('formats/font');
    Font.whitelist = ['Helvetica', 'Verdana', "Lora", "Roboto", "Montserrat", "Barlow"] ;
    ReactQuill.Quill.register(Font, true);

    function handleChange(value: any){
        setText(value);
    }

    async function handlePost(){
        try{
            const res = await fetch(url+"/update", {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title: title, text: text, _id: post._id})
            });

            if(res.status === 200){
                window.location.href = "/Blog";
            }
            else {
                alert("Server Error Please Try Again");
            }


        } catch(error) {
            alert("Server Error Please Try Again");
        }
    }

    return(<div className="compose-container">
    <p className="title">Update Your Blog Post</p>
    <form className="input-form" onSubmit={handlePost}>
        <p className="label">Enter a Title for Your Post</p>
        <input className="title-input" type="text" placeholder="Title" name="title" defaultValue={post.title}></input>
        <p className="label">Write Your Post</p>
        <ReactQuill
            className="writing-area"
            onChange={handleChange}
            value={text}
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
        <button type="submit" className="submit-button">Submit</button>
    </form>
</div>);
}

export default UpdateEditor;