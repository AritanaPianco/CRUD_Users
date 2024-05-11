"use client"


import { api } from "@/lib/api";
import { useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import { useEffect } from "react";
import UserInterface from "@/utils/userInterface";
import {useRouter} from "next/navigation";
import UserDataForm from "@/utils/userDataForm";

interface UserEdit{
     params: {
         id: number 
     }
}

const scheme = z.object({
    name: z.string().min(1, "O campo nome é obrigatório"),
    email: z.string().email("Digite um email válido").min(1, "O email é obrigatório"),
    profissao: z.string().min(1, "O campo profissão é obrigatório"),
    password: z.string().min(1, "O campo senha é obrigatório").max(20, "O campo senha só pode até 20 caracteres")
})

export default function UserEdit({params}: UserEdit){
    const { register, handleSubmit, formState: { errors },setValue } = useForm<UserDataForm>({resolver: zodResolver(scheme)}); 
   
    const userId = params.id;
    const navigate = useRouter();
    
    useEffect(() => {
        async function getUser(){
             const res = await api.get("/api/users");
             const users:UserInterface[] = (res.data);             
             const userTarget = users.filter((item) => item.id == userId)
             
             if(userTarget.length <= 0){
                navigate.refresh();
                navigate.replace('/');
             }
             
   
            //  const initialValues = userTarget[0]
             const  fields = ["name", "email", "profissao", "password"]; 

             fields.forEach((item: string) => {
                  setValue(item, userTarget[0][item]);
             })
            //  setValue('name', initialValues.name);
            //  setValue('email', initialValues.email);
            //  setValue('profissao', initialValues.profissao);
            //  setValue('password', initialValues.password);
                                 
        }
       getUser()

    },[])
    

   async function handleUpdate(data:UserDataForm){
        const userUpdated = await api.put(`/api/users?id=${userId}`, {
             name: data.name,
             email: data.email,
             profissao: data.profissao,
             password: data.password
        });

        if(userUpdated.status == 200){
            navigate.refresh();
            navigate.replace('/');
        }   
    }

     
    return(
    <div>

      <div className="w-full flex flex-col items-center justify-center mt-40">
                         
                <form  onSubmit={handleSubmit(handleUpdate)} className="w-full max-w-2xl flex flex-col gap-4 bg-gray-600 py-5 px-10">

                    <input 
                    type="text" 
                    placeholder="Nome"
                    {...register("name")} 
                    className="p-3"
                    /> 
                    <span className="text-red-700 font-bold">{errors.name?.message}</span>                     
                        
                    <input 
                    type="email" 
                    placeholder="Email"
                    {...register("email")}
                    className="p-3"
                    />  
                    <span className="text-red-700 font-bold">{errors.email?.message}</span>                      
                        
                    <input 
                    type="text"  
                    placeholder="Profissao"
                    {...register("profissao")}
                    className="p-3" 
                    />                      
                    <span className="text-red-700 font-bold">{errors.profissao?.message}</span>

                    <input 
                    type="text"  
                    placeholder="Senha"
                    {...register("password")}
                    className="p-3" 
                    />
                    <span className="text-red-700 font-bold">{errors.password?.message}</span>                      
                                    
                    <button type="submit" className="bg-sky-500">Atualizar</button>
              </form>
             
           
        </div> 

        </div>
    )

}