import styles from './NavMenu.module.css'
import clsx from "clsx"
import { useTranslation } from 'react-i18next';

const NavMenu = ({ variant }) => {
    const { t } = useTranslation();
    const links = ['home', 'about', 'tour', 'contact']

    const listItems = links.map(link => 
        <li key={link.id} className={clsx(
            styles["listItem"],
            styles[variant],
           )}>
            <a href="#" className={styles.itemLink}>{t(link)}</a>
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