import styles from './Header.module.css'
import Button from '../Button'
import Logo from './Logo'
import NavMenu from './NavMenu'

const Header = () => {
    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white'/>
                {/* <NavMenu variant='black'/> */}
                <div className={styles.headerRight}>
                    <Button text="Login" widthBtn={77} variant="login"/>
                    <Button text="Sign Up" widthBtn={168}/>
                </div> 
            
            </div>
            
        </header>
    )
}
export default Header