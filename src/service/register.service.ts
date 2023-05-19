import { RegisterData } from '@/@types/register.type'
import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export class RegisterService {
  loginUrl: string = '/users/register'

  async execute(data: RegisterData) {
    const response = await api.post<string>(this.loginUrl, {
      name: data.name,
      email: data.email,
      password: data.password,
    })
    return response.data
  }
}
