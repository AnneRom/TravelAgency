import styles from './Button.module.css'
import clsx from "clsx"

const Button = ({ text, onClick, widthBtn, variant, type = "button", icon}) => {
    return (
        <button className={clsx(
                    styles["button"],
                    styles[variant],
                   )} 
                   type={type} 
                   onClick={onClick} 
                   style={{width: widthBtn}}>
                    {icon && <span className={styles.icon}>{icon}</span>}
                    {text}</button>
    )
}

export default Button;