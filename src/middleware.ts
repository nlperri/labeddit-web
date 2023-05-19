import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
  
    if (!token) {
      return NextResponse.redirect(new URL('/', request.url), {
        headers: {
          'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
        },
      })
    }
  
    return NextResponse.next()
  }
  
  export const config = {
    matcher: '/home/:path*',
  }
  