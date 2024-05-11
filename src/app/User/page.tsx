"use client"


import { useForm } from "react-hook-form"
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import UserDataForm from "@/utils/userDataForm";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod"
 

const scheme = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Digite um email válido").min(1, "O email é obrigatório"),
    profissao: z.string().min(1, "O campo profissão é obrigatório"),
    password: z.string().min(1, "O campo senha é obrigatório").max(20, "O campo senha só pode até 20 caracteres")
})


export default function UserCreate(){
    const { register, handleSubmit, formState: { errors }, } = useForm<UserDataForm>({resolver: zodResolver(scheme)}); 
    const navigate = useRouter();


    const handleCreate = async (data: UserDataForm) => {
        await api.post('/api/users', {
            name: data.name,
            email: data.email,
            profissao: data.profissao,
            password: data.password
        })

        navigate.refresh();
        navigate.replace('/', { scroll: true });
    
    }


    return(
        <div className="w-full flex flex-col items-center justify-center mt-40 p-5">
               
               <form  onSubmit={handleSubmit(handleCreate)} className="w-full max-w-3xl flex flex-col gap-4 bg-blue-950 py-8 px-10 rounded-md">

                     <input 
                        type="text" 
                        placeholder="Nome"
                        {...register("name")} 
                        className="p-3 outline-0 rounded-sm"
                     /> 
                    <span className="text-red-700 font-bold">{errors.name?.message}</span>                     
                     
                     <input 
                        type="email" 
                        placeholder="Email" 
                        {...register("email")}
                        className="p-3 outline-0 rounded-sm"
                       />  
                     <span className="text-red-700 font-bold">{errors.email?.message}</span>                      
                     
                     <input 
                        type="text"  
                        placeholder="Profissao"
                        {...register("profissao")}
                        className="p-3 outline-0 rounded-sm" 
                       />                      
                     <span className="text-red-700 font-bold">{errors.profissao?.message}</span>

                      <input 
                        type="text"  
                        placeholder="Senha"
                        {...register("password")}
                        className="p-3 outline-0 rounded-sm" 
                       />
                    <span className="text-red-700 font-bold">{errors.password?.message}</span>                      
                                   
                    <button type="submit" className="bg-sky-500 py-3 rounded-sm text-white font-bold">Cadastrar</button>
               </form>
           
        </div>
    )
    
}