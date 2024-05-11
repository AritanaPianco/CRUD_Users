
import { api } from "@/lib/api";
import UserInterface from "@/utils/userInterface";
import Link from "next/link";
import Button from "@/components/button";



async function getUsers(){
   const res = await api.get("/api/users")
   return res.data;
}
    
// async function handleDelete(userId: Number){
//    await api.delete(`/api/users?id=${userId}`); 
// }

export default async function Home() {
   const users: UserInterface[] = await getUsers();
             
   return (
    <div className="w-full flex flex-col items-center justify-center mt-40">

        <table className="w-full max-w-4xl outline outline-slate-800">
             <thead className="w-full">
              <tr className="bg-slate-400">
                    <th>Nome</th>  
                    <th>Email</th>  
                    <th>Cargo</th> 
                    <th>Ações</th> 

              </tr>
             </thead>

             <tbody>
                {users.length > 0 && users.map((user) => (
                   <tr className="text-center" key={user.id.toString()}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.profissao}</td>
                      
                      <td className="flex gap-4">
                        <Link href={`/UserEdit/${user.id}`} className="bg-gray-800 text-white font-bold p-3">Editar</Link>
                        <Button id={user.id}/>
                      </td>
                   </tr>
                ))}
             </tbody> 
        </table>         
    </div>         

  );
}