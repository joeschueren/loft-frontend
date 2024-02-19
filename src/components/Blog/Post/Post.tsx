import "./post.css";
import 'react-quill/dist/quill.snow.css';

interface postProps {
    title: any,
    body: string,
    date: String
}
const Post: React.FC<postProps> = (props) => {

    let preview = props.body.replace(/<[^>]*>/g, '').substring(0,75);

    for(let i = preview.length-1; i > 1; i--){
        if(preview[i] === " "){
            if(/[,.?;:!-_~`]/.test(preview[i - 1])){
                i--;
            }

            preview = preview.substring(0, i)+"...";
            i = -1;
        }
    }

    return(
    <a className="post-anchor" href={"post/"+encodeURIComponent(props.title)}>
        <div className="post-container">
            <p className="title">{props.title}</p>
            <p className="preview">{preview}</p>
            <p className="date">{props.date}</p>
        </div>
    </a>)
}

export default Post;