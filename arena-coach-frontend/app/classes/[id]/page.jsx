import { use } from 'react'
import api from '../../../lib/api'

export default function ClassPage({ params }){
  const cls = use(async ()=> {
    const res = await api.get(`/classes/${params.id}`)
    return res.data
  })

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-bold">{cls.title}</h1>
      <p className="mt-4">{cls.description}</p>
      <div className="mt-6">
        <a href={`/checkout?classId=${cls.id}`} className="px-6 py-3 bg-sun rounded">Agendar e Pagar</a>
      </div>
    </div>
  )
}
