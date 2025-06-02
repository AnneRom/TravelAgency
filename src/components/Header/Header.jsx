import styles from './Header.module.css'
import Button from '../Button'
import Logo from './Logo'
import NavMenu from './NavMenu'
import LangSelector from './LangSelector'
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white'/>
                {/* <NavMenu variant='black'/> */}
                <div className={styles.headerRight}>
                    <LangSelector />
                    <Button text={t('login')} widthBtn={77} variant="login"/>
                    <Button text={t('signup')} widthBtn={168}/>
                </div> 
            
            </div>
            
        </header>
    )
}
export default Header