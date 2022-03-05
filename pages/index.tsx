import type {NextPage} from 'next'
import styles from "../styles/home.module.scss"
import Image from 'next/image'
import {MainLayout} from "../components/MainLayout";
import React from "react";
import logo from '../public/logo.svg'
import Auth from "../components/Auth";

const Home: NextPage = () => {
    return (
        <MainLayout title={"Todo"}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Image height={700}  width={700} src={logo}/>
                </div>
                <div className={styles.description}>
                    Список дел поможет вам сосредоточиться на любом занятии — от работы до игры.
                </div>
                <div className={styles.auth}>
                    <Auth />
                </div>



            </div>


        </MainLayout>
    )
}

export default Home
