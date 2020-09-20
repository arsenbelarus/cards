import React, {FC} from "react";
import styles from "./NavLinkCommom.module.scss"
import {NavLink} from "react-router-dom";

interface NavLinkPropsType {
  to: string,
  linkText: string,
}

export const NavLinkCommon: FC<NavLinkPropsType> = ({to, linkText}) => {
    return (
        <>
          <NavLink to={to} className={styles.navLink} activeClassName={styles.active}> {linkText} </NavLink>
        </>
    )
}