import React, {ButtonHTMLAttributes, FC} from "react";
import styles from "./Button.module.scss"

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
    name?: string,
}

export const Button: FC<ButtonPropsType> = ({name, ...rest}) => {
    return (
        <>
            <button className={styles.btn} {...rest}> {name} </button>
        </>
    )
}