import Link from 'next/link'
export default function Nav(){
  return (
    <nav className="bg-white shadow">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/"><span className="font-bold text-lg">Arena Coach</span></Link>
        <div>
          <Link href="/login" className="px-4">Entrar</Link>
        </div>
      </div>
    </nav>
  )
}
