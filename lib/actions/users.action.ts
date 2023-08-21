"use server"

import PocketBase from 'pocketbase';
import { currentUser } from "@clerk/nextjs";


const pb = new PocketBase('https://34d9-202-94-70-51.ngrok-free.app');

export const getAllUsers = async () => {
    console.log('trying')
    try{
        const allUsers = await pb.collection('users').getFullList()
        console.log('allUsers server: ', allUsers)
        return allUsers
    } catch (error) {
        console.log(error)
    }
}

export const printCurrentUser = async () => {
    const curUser = await currentUser()
    console.log('curUser: ', curUser)
    return curUser
}
