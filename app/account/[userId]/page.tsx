"use client"

import { useParams } from "next/navigation"


const UserProfile = () => {

    const { userId } = useParams()

    return (
        <div>THis is Profile id{userId}</div>
    )
}

export default UserProfile