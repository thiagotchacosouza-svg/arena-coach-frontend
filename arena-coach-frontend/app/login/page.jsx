'use client'
import { useState } from 'react'
import api from '../../lib/api'
import { useRouter } from 'next/navigation'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  async function handleSubmit(e){
    e.preventDefault()
    const res = await api.post('/auth/login', { email, password })
    localStorage.setItem('token', res.data.token)
    router.push('/dashboard')
  }

  return (
    <div className="max-w-md mx-auto py-20">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold mb-4">Entrar</h3>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="email" className="w-full p-3 border rounded mb-3" />
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="senha" className="w-full p-3 border rounded mb-3" />
        <button className="w-full bg-sun py-3 rounded font-semibold">Entrar</button>
      </form>
    </div>
  )
}
