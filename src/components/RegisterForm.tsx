'use client'
import { useRegister } from "@/hooks/useRegister"
import { useToast } from "@/hooks/useToast"
import setCookies from "@/service/set-cookie.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Loading from '../assets/loading.svg'

export function RegisterForm() {
    const { emmitErrorToast, Toast } = useToast()
    const router = useRouter()
    const { registerUser } = useRegister()

    const registerFormSchema = z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6),
        checkbox: z.coerce.boolean()
    })

    type registerFormInputs = z.infer<typeof registerFormSchema>

    const { register, handleSubmit, formState: { isSubmitting }, reset } = useForm<registerFormInputs>({
        resolver: zodResolver(registerFormSchema),
    })

    async function handleRegister(data: registerFormInputs) {
        const { name, email, password } = data
        try {
            const token = await registerUser({ name, email, password })
            setCookies(token)
            router.push('/home')

        } catch (err) {
            emmitErrorToast('Campos inválidos', 1000)
            reset()
        }
    }

    return (
        <form
            onSubmit={handleSubmit(handleRegister)}
            className=" mt-28 flex flex-col gap-2 items-center justify-center">

            <input
                className="input"
                placeholder="Apelido"
                required
                {...register('name')}
                type="text" />
            <input
                className="input"
                placeholder="E-mail"
                required
                {...register('email')}
                autoComplete="off"
                type="email" />
            <input
                className="input"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
                title="Senha precisa conter pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula, um número e um símbolo (!@#$%^&*_=+-)"
                placeholder="Senha"
                required
                {...register('password')}
                autoComplete="off"
                type="password" />




            <p className="w-full max-w-sm mt-12 text-xs font-alt font-semibold">Ao continuar, você concorda com o nosso <a className="text-blue-400 cursor-pointer hover:text-sky-800">Contrato de usuário</a> e nossa <a className="text-blue-400 cursor-pointer hover:text-sky-800">Política de Privacidade</a></p>

            <div className="mt-2 flex items-center gap-1.5 text-xs font-alt font-semibold">
                <input
                    type="checkbox"
                    {...register('checkbox')}
                />
                <p>Eu concordo em receber emails sobre coisas legais no Labeddit</p>
            </div>
            {isSubmitting ?
                <button

                    className="mt-4 w-full max-w-sm h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold flex justify-center items-center"
                    type='submit'
                    disabled
                >
                    <Loading

                        className=" w-8 h-8 text-white animate-spin fill-orange-600"
                    />
                </button>
                :
                <button

                    className="mt-4 w-full max-w-sm h-12 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold"
                    type='submit'
                >
                    Cadastrar
                </button>
            }

            <Toast />
        </form>
    )
}