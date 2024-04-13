import { MessageDisplay } from '../components/ui/MessageDisplay'
import { Label, Button, Input } from '../components/ui'
import { LockIcon, UserIcon } from '../components/icons'
import { useState } from 'react'

export function LoginPage (): JSX.Element {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const [message] = useState('')
  const [error] = useState('')

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>): void => {
    ev.preventDefault()
    console.log('User:', user, 'Password:', password)
  }

  return (
    <section className="w-full h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-sky-800">

      <form className='w-96 mb-2 border p-12 rounded-lg bg-white/30 flex flex-col gap-4 shadow-xl'
        onSubmit={ev => { handleSubmit(ev) }}>
        <figure className='flex justify-center'>
          <img src="/gane.webp" className='w-20 xl:w-24 1xl:w-28 3xl:w-32' />
        </figure>

        <article className='w-full flex flex-col gap-2'>
          <Label>Usuario</Label>
          <div className='w-full flex items-center gap-2 justify-around'>
            <UserIcon size='w-6 xl:w-7 2xl:w-8 3xl:w-10' />
            <Input name='username' type='text' placeholder='CP1118342523' autoComplete='username' required
              onChange={ev => { setUser(ev.target.value) }} />
          </div>
        </article>

        <article className='w-full flex flex-col gap-2'>
          <Label>Contraseña</Label>
          <div className='w-full flex items-center gap-2 justify-around'>
            <LockIcon size='w-6 xl:w-7 2xl:w-8 3xl:w-10' />
            <Input name='password' type='password' placeholder='**********' autoComplete='username' required
              onChange={ev => { setPassword(ev.target.value) }} />
          </div>
        </article>

        <Button>Iniciar Sesión</Button>
      </form>

      <section className='h-10'>
        <MessageDisplay message={message} error={error} />
      </section>
    </section>
  )
}
