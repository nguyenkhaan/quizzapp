'use client'
import { useRouter } from "next/navigation"
import usePersonal from "@/zustand/personal"
import { useEffect } from "react"
const ProtectedRoute = ({
    children 
} : { children : React.ReactNode }) => 
{ 
    const router = useRouter() 
    const name = usePersonal((state) => state.name) 
    
    useEffect(() => {
        if (!name) router.push('/login')
    } , [])
    return (
        <>
            {children}
        </>
    )
}
export default ProtectedRoute