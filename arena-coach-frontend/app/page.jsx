import Link from 'next/link'

export default function Home(){
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Arena Coach</h1>
          <p className="mt-3 text-lg">Encontre coaches de futevôlei, beach tennis e treinos na areia perto de você.</p>
          <div className="mt-6">
            <Link href="/login" className="px-6 py-3 bg-sun rounded-md font-semibold">Comece agora</Link>
          </div>
        </div>
        <div>
          <div className="w-80 h-48 bg-wave rounded-xl" />
        </div>
      </header>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Aulas em destaque</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        </div>
      </section>
    </section>
  )
}
