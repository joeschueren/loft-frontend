import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./ViewPost.css";

const ViewPost: React.FC = () => {

    let { title }: any = useParams();

    if(title){
        title.replace(/\?/g, '%3F');
    }

    console.log(title);

    interface Post {
        title: String,
        text: string,
        date: String,
    }
    
    const [post, setPost] = useState<Post>({title:"", text:"", date:""});

    useEffect(() => {
        async function getPosts(){
            try{
                const res = await fetch("http://localhost:5000/get-post/"+encodeURIComponent(title));

                const newPost = await res.json();

                setPost(newPost[0]);

            } catch (error) {

            }
        }

        getPosts();
    },[title]);

    if(post.title === ""){
        return(<h1>Loading</h1>)
    }
    else return(
        <div className="view-container">
            <p className="view-title">{post.title}</p>
            <p className="date">{post.date}</p>
            <p className="text">{parse(post.text)}</p>
        </div>)
}

export default ViewPost;