import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://i.ytimg.com/vi/fUWrhetZh9M/maxresdefault.jpg" alt="" />
            <p>post 1</p>
            <span>Like</span>
        </div>
    )
}

export default Post;