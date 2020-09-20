import React, {FC, InputHTMLAttributes} from "react";
import styles from "./Checkbox.module.scss"

interface CheckboxPropsType extends InputHTMLAttributes<HTMLInputElement> {
    label: string,
    id: string,
}

export const Checkbox: FC<CheckboxPropsType> = ({label, id, ...rest}) => {
  return (
    <div>
      <input type={"checkbox"} name={id} id={id} className={styles.cssCheckbox} {...rest}/>
      <label htmlFor={id} className={styles.cssLabel}> { label } </label>
    </div>
  )
}