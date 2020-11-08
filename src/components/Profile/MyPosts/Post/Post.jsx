import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.itemImg}></div>
            <p>{props.message}</p>
            <span>{props.likeCount} likes</span>
        </div>
    )
}

export default Post;