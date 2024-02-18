import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./ViewPost.css";

const ViewPost: React.FC = () => {

    let { title }: any = useParams();

    if(title){
        title.replace(/\?/g, '%3F');
    }

    const url = (process.env.NODE_ENV === "production" ?
        "https://equal-pinto-brochure.glitch.me" :
        "http://localhost:5000");

    interface Post {
        title: String,
        text: string,
        date: String,
    }
    
    const [post, setPost] = useState<Post>({title:"", text:"", date:""});

    useEffect(() => {
        async function getPosts(){
            try{
                const res = await fetch(url+"/get-post/"+encodeURIComponent(title));

                const newPost = await res.json();

                setPost(newPost[0]);

            } catch (error) {

            }
        }

        getPosts();
    },[title, url]);

    if(post.title === ""){
        return(<h1>Loading</h1>)
    }
    else return(
        <div className="view-container">
            <p className="view-title">{post.title}</p>
            <p className="date">{post.date}</p>
            <p className="text">{parse(post.text)}</p>
            <a className="read-more" href="/blog">Read More</a>
        </div>)
}

export default ViewPost;