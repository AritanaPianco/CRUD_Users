"use client"

import { api } from "@/lib/api"
import {useRouter} from "next/navigation"

interface ButtonProps{
    id: Number
}

export default function Button({id}: ButtonProps){
    const navigate = useRouter()    

    async function handleDelete(userId: Number){
        const res = await api.delete(`/api/users/?id=${userId}`); 
       
        if(res.status == 200){
            navigate.refresh();
            navigate.replace('/');    
        }
    }
    
    return(
        <button className="bg-gray-800 text-white font-bold p-3" onClick={() => handleDelete(id)}>
            Remover
        </button>
    )
}