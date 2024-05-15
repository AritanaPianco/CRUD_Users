"use client"

import { api } from "@/lib/api";
import UserInterface from "@/utils/userInterface";
import Link from "next/link";
import Button from "@/components/button";
import { useEffect, useState } from "react";
import {useRouter} from "next/navigation"


export default function Home() {
    const [users, setUsers] = useState<UserInterface[]>([])
    const navigate = useRouter()   
   

   useEffect(() => {
         async function getUsers(){
            const res = await api.get("/api/users")
            setUsers(res.data);
         }

         getUsers()
         
   },[users])


   async function handleDelete(userId: Number){
      const res = await api.delete(`/api/users/?id=${userId}`); 
      
      if(res.status == 200){
         navigate.refresh();
         navigate.replace('/', { scroll: true }); 
      }
          
   }

   return (
    <div className="w-full flex flex-col items-center justify-center mt-40 p-5">
        <table className="w-full max-w-4xl outline">
             <thead className="w-full p-8">
              <tr className="bg-blue-500">
                    <th className="py-3">Nome</th>  
                    <th>Email</th>  
                    <th>Cargo</th> 
                    <th>Ações</th> 
              </tr>
             </thead>

             <tbody>
                {users.length > 0 && users.map((user) => (
                   <tr className="text-center" key={user.id.toString()}>
                      <td className="py-4">{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.profissao}</td>
                      
                      <td>
                         <Link href={`/UserEdit/${user.id}`} className="bg-blue-500 text-white font-bold py-1 px-3 rounded-md">Editar</Link>
                         <button className="bg-red-500 text-white font-bold py-1 px-3 rounded-md ml-2" onClick={() => handleDelete(user.id)}>
                           Remover
                          </button>
                         {/* <Button id={user.id}/> */}
                      </td>
                   </tr>
                ))}
             </tbody> 
        </table>         
    </div>         

  );
}
  