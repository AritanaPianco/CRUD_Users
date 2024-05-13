import Link from 'next/link'
 

export default function NotFound() {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-40 p-5'>
      <h2 className='text-2xl font-bold'>404</h2>
      <p>Página não encontrada</p>
      <Link href="/" className='mt-10 bg-blue-500 text-white font-bold py-1 px-3 rounded-md'>Retornar a usuários</Link>
    </div>
  )
}