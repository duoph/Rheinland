"use client"

import { useParams } from "next/navigation"


const UserProfile = () => {

    const { userId } = useParams()

    return (
        <div className="pt-[80px]">THis is Profile id{userId}</div>
    )
}

export default UserProfile 