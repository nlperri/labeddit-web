'use client'
import Image from "next/image"
import logo from './icon.png'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className="px-3 flex flex-1 flex-col items-center justify-center">
      <div className="pt-20 flex flex-col gap-1 items-center justify-center">
        <Image
          src={logo}
          alt="LabEddit Logo"
        />
        <h1 className="font-bold text-3xl text-gray-800">LabEddit</h1>
        <p className="text-sm">O projeto de rede social da Labenu</p>
      </div>
      <button
        className="mt-14 w-full max-w-sm h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold"
        onClick={() => router.push('/login')}
      >

        Entrar

      </button>
      <div className=" h-[1px] mt-4 w-full max-w-sm bg-gradient-to-r from-pink-500 to-orange-500">
      </div>
      <div className="p-[1px] mt-4 w-full max-w-sm bg-gradient-to-r from-pink-500 to-orange-500 rounded-full">
        <button
          className="text-orange-600 bg-white w-full max-w-sm h-12 rounded-full font-semibold"
          onClick={() => router.push('/register')}
        >

          Crie uma conta!

        </button>
      </div>
    </main>
  )
}


