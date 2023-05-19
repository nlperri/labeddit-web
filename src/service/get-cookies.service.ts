'use server'
import { cookies } from 'next/headers'

export default async function getTokenFromCookies() {
  return cookies().get('token')?.value ?? ''
}
