import styles from './NavMenu.module.css'
import clsx from "clsx"

const NavMenu = ({ variant }) => {
    const links = ['Home', 'About Us', 'Tour Packages', 'Contact Us']

    const listItems = links.map(link => 
        <li key={link.id} className={clsx(
            styles["listItem"],
            styles[variant],
           )}>
            <a href="#" className={styles.itemLink}>{link}</a>
        </li>
    )
    
    return (
        <>
         <nav>
            <ul className={styles.navList}>{listItems}</ul>
        </nav>
        </>   
    )
}

export default NavMenu;