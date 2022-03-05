import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {MainLayout} from "../components/MainLayout";
import List from "../components/List";
import React from "react";

const Todo: NextPage = () => {
    return (
        <MainLayout title={"Todo"}>
            <List/>
        </MainLayout>
    )
}

export default Todo
