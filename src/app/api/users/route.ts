import knex from "@/app/database/connection";

import { NextResponse } from "next/server";



export async function GET(request: Request){

    try {
        const users = await knex.select().table('users');
        return NextResponse.json(users)
    } catch (error) {
        return NextResponse.json({ error: "Erro ao pegar usuarios" }, { status: 400 })
    }

}



export async function POST(request: Request){

   const {name, email, profissao, password} = await request.json()

   try {
     const res = await knex('users').insert({
           name: name,
           email: email,
           profissao: profissao,
           password: password
       })   

     return NextResponse.json({ message: "Usuário cadastrado com sucesso!" })

   } catch (error) {
     return NextResponse.json({ error: "Erro ao criar usuario" }, { status: 400 })
   }
  
}


//http://localhost:300/api/users?id=1
export async function PUT(request: Request){
     const { searchParams } = new URL(request.url);
     const userId = searchParams.get("id")

     try {
        const { name, email, profissao, password } = await request.json();
         
         const res = await knex('users').where({ id: userId }).update(
              {
                name,
                email,
                profissao,
                password
             }
         );
      
            return NextResponse.json({message: "Usuário atualizado com sucesso"})
        }catch (error) {
            return NextResponse.json({ error: "Erro ao atualizar usuario" }, { status: 400 })
        }

}



export async function DELETE(request: Request){
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("id")
    
     try {  
        const res = await knex('users').where('id', userId).del()

        return NextResponse.json({message: "Usuário deletado com sucesso"})
        
     } catch (error) {
         return NextResponse.json({ error: "Erro ao deletar usuario" }, { status: 400 })

     }

}