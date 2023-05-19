import { LoginData } from '@/@types/login.type'
import { api } from '@/lib/api'

export class LoginService {
  loginUrl: string = '/users/authenticate'

  async execute(data: LoginData) {
    const response = await api.post<string>(this.loginUrl, {
      ...data,
    })

    return response.data
  }
}
