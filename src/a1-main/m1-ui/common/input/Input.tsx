import React, {FC, InputHTMLAttributes} from "react";
import styles from "./Input.module.scss"

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
    name?: string,
    label?: string,
}

export const Input: FC<InputPropsType> = ({name, label, ...rest}) => {
    return (
        <div className={styles.form__group}>
            <input type={"input"} className={styles.form__field} placeholder={label} name={name} id={name} {...rest}/>
            <label htmlFor={name} className={styles.form__label}>{label}</label>
        </div>
    )
}