import styles from './LoginForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useId, useState } from 'react'
import * as Yup from 'yup'
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5"
import { FcGoogle } from "react-icons/fc"
import Button from '../Button'


const FeedbackSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string().min(6, "Too short").max(256, "Too long").required("Required"),
})

const initialValues = {
    email: "",
    password: ""
}

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false)

    const handleSubmit = (values, actions) => {
        console.log(values)
        actions.resetForm()
    }

    const emailFieldId = useId()
    const passwordFieldId = useId()

    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
        <Form className={styles.form}>
            <label htmlFor={emailFieldId} className={styles.label}>Email Address</label>
            <div className={styles.fieldWrapper}>
                <Field id={emailFieldId} type="email" name="email" className={styles.field} placeholder="Enter your email address"></Field>
                <ErrorMessage name="email" component="span" className={styles.error}/>
            </div>
            

            <label htmlFor={passwordFieldId} className={styles.label}>Password</label>
            <div className={styles.fieldWrapper}>
                <Field id={passwordFieldId} type={showPassword ? "text" : "password"} name="password" className={`${styles.field} ${styles.fieldPassword}`} placeholder="Enter your password"></Field>
                <button type="button" onClick={() => setShowPassword(prev => !prev)} className={styles.eye}>
                {showPassword ? <IoEyeSharp size={24} color='#ADADAD'/> : <IoEyeOffSharp size={24} color='#ADADAD'/>}
                </button>
                <ErrorMessage name="password" component="span" className={styles.error}/>
            </div>

            <div className={styles.forgotLink}>
                <a href="#">Forgot your password?</a>
            </div>

            <Button text="Sign In" type="submit"/>
            <Button text="Sign In with Google" variant="google" icon={<FcGoogle size={24}/>}/>

             {/* додати тип кнопки */}
            {/* <button type="submit" className={styles.btn}>Submit</button> */}
        </Form>
      </Formik>
        
    )
}
export default LoginForm