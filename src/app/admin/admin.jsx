'use client'
import React from "react";
import { useAuthContext } from "@/context/authContext";
import { useRouter } from "next/navigation";
function AdminPage() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    return (<h1>Only logged in users can view this AdminPage</h1>);
}

export default AdminPage;