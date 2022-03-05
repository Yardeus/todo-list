import Head from "next/head";
import styles from "../styles/main.module.scss";
import Image from "next/image";
import React from "react";
import {Navbar} from "./Navbar";

interface Props {
    title : string
}

export const MainLayout: React.FC<Props> = ({children, title  = 'Cars'}) => (
    <div className={styles.container}>
        <Head>
            <title>{title}</title>
            <meta name="description" content="todo list"/>
            <link rel="icon" href="/favicon.svg"/>
        </Head>
        <div className={styles.nav}>
            <Navbar/>
        </div>
        <div className={styles.main}>
            {children}
        </div>


    </div>
);