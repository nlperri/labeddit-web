'use server'
import { cookies } from 'next/headers'

export default async function setCookies(token: string) {
  cookies().set('token', token)
}
