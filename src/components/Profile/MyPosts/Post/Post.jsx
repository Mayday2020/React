import s from './Post.module.css';

const Post = (props) => {
    console.log(props.message);
    return (
        <div className={s.item}>
            <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt="" />
            <p>{props.message}</p>
            <span>{props.likeCount} likes</span>
        </div>
    )
}

export default Post;