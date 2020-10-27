import classes from'./Navbar.module.css';

const Navbar = () => {
    return <nav className={classes.nav}>
        <ul className={classes.sidebar}>
            <li className={classes.item}><a href="#" className={classes.active}>Profile</a></li>
            <li className={classes.item}><a href="#">Messages</a></li>
            <li className={classes.item}><a href="#">Music</a></li>
            <li className={classes.item}><a href="#">News</a></li>
            <li className={classes.item}><a href="#">Settings</a></li>
        </ul>
    </nav>
}

export default Navbar;