'use client'
import Image from "next/image"
import logo from '../app/icon.png'
import z from 'zod'
import { useForm } from "react-hook-form"
import Link from "next/link"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/navigation"
import { useLogin } from "@/hooks/useLogin"
import setCookies from "@/service/set-cookie.service"


export function LoginForm() {
    const router = useRouter()
    const { login } = useLogin()



    const loginFormSchema = z.object({
        email: z.string().email(),
        password: z.string().min(6)
    })

    type loginFormInputs = z.infer<typeof loginFormSchema>

    const { register, handleSubmit, formState: { isSubmitting, errors }, reset } = useForm<loginFormInputs>({
        resolver: zodResolver(loginFormSchema),
    })



    async function handleLogin(data: loginFormInputs) {
        try {
            const token = await login(data)
            setCookies(token)
            router.push('/home')

        } catch (err) {

            reset()
        }
    }

    return (
        <>
            <div className="pt-20 flex flex-col gap-1 items-center justify-center">
                <Image
                    src={logo}
                    alt="LabEddit Logo"
                />
                <h1 className="font-bold text-3xl text-gray-800">LabEddit</h1>
                <p className="text-sm">O projeto de rede social da Labenu</p>
            </div>


            <form
                onSubmit={handleSubmit(handleLogin)}
                className="w-full mt-24 flex flex-col gap-1 items-center"
            >

                <input
                    className="input"
                    type="email"
                    placeholder='E-mail'
                    required
                    {...register('email')}
                />
                <input
                    className="input"
                    type="password"
                    placeholder="Senha"
                    required
                    {...register('password')}
                />


                <button
                    className="mt-14 w-full max-w-sm h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold"
                    type='submit'
                    disabled={isSubmitting}>
                    Continuar
                </button>
            </form>

            <div className=" h-[1px] mt-4 w-full max-w-sm bg-gradient-to-r from-pink-500 to-orange-500">
            </div>
            <div className="p-[1px] mt-4 w-full max-w-sm bg-gradient-to-r from-pink-500 to-orange-500 rounded-full">
                <button
                    className="text-orange-600 bg-white w-full max-w-sm h-12 rounded-full font-semibold"
                    type='submit'
                    disabled={isSubmitting}>
                    <Link href="/register">
                        Crie uma conta!
                    </Link>
                </button>
            </div>

        </>
    )
}