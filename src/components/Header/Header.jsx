import styles from './Header.module.css'
import Button from '../Button'
import Logo from './Logo'
import NavMenu from './NavMenu'
import LangSelector from './LangSelector'
import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import Modal from './Modal'
import LoginForm from './LoginForm'

const Header = () => {
    const { t } = useTranslation();

    const [isModelOpen, setIsModalOpen] = useState(false)
    const [modalType, setModalType] = useState(null)

    const openModal = (type) => {
        setModalType(type)
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setModalType(null)
        setIsModalOpen(false)
    }

    const getModalContent = () => {
        switch (modalType) {
            case 'login': return <LoginForm />
            case 'signup': return <SignUpForm />
            case 'fogotPassword': return <FogotPassForm />
            case 'verifyEmail': return <VerifyEmail />
            case 'newPassword': return <NewPassForm />
            case 'resetPassword': return <ResetPass />
            default: return null
        }
    }

    return (
        <header>
            <div className={styles.header__container}>
                <Logo />
                <NavMenu variant='white'/>
                {/* <NavMenu variant='black'/> */}
                <div className={styles.headerRight}>
                    <LangSelector />
                    <Button text={t('login')} widthBtn={77} variant="login" onClick={() => openModal('login')}/>
                    <Button text={t('signup')} widthBtn={168}/>
                </div> 
            </div>
            {isModelOpen && (
                <Modal onClose={closeModal} title={modalType}>
                    {getModalContent()}
                </Modal>
            )}
            
        </header>
    )
}
export default Header