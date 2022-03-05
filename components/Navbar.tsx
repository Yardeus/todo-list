import React from "react";

import styles from "../styles/navbar.module.scss"
import Link from "next/link";

export const Navbar: React.FC = () => {

    return <div className={styles.container}>
        <Link href={"/"}>
            <div className={styles.main}>
                главная
            </div>
        </Link>
        <Link href={"/todo"}>
            <div className={styles.list} onClick={()=>{
            }
            }>
                Список дел
            </div>
        </Link>


    </div>
};