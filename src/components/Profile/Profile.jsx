import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_img}></div>
            <div className="avatar-img">
                avatar + description
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;