import Link from "next/link"

export default function Header(){
    return(
         <header className="w-full flex justify-around py-5 bg-blue-500">
                <h2 className="text-2xl font-bold text-white">Sistema De Usuarios</h2>

               <div className="flex gap-3 font-bold">
                   <Link href="/" className="bg-blue-200 px-4 py-2 rounded-lg">Usuarios</Link>        
                   <Link href="/User" className="bg-blue-200 px-4 py-2 rounded-lg">Cadastrar Usuário</Link>        
                </div> 
         </header>
    )
}