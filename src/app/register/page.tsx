import { RegisterForm } from "@/components/RegisterForm"

export default function Register() {

    return (
        <main className="px-3 flex flex-1 flex-col items-center justify-center">
            <h1 className="px-1 mt-7 max-w-xs font-bold text-2xl text-gray-800">Olá, boas vindas ao LabEddit ;)</h1>
            <RegisterForm />

        </main>
    )
}