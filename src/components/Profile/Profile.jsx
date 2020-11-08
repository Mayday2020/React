import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {

    return (
        <div className={s.content}>
            <div className={s.content_img}></div>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
}


export default Profile;