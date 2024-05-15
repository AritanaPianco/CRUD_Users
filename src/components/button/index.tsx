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
           navigate.replace('/', { scroll: true }); 
        }
            
    }
    
    return(
        <button className="bg-red-500 text-white font-bold py-1 px-3 rounded-md ml-2" onClick={() => handleDelete(id)}>
            Remover
        </button>
    )
}