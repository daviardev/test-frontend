import { logout } from '@/app/auth'

export default function SignOut () {
  return (
    <form action={logout}>
      <button>Sign Out</button>
    </form>
  )
}
