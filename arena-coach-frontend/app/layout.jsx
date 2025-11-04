import './globals.css'
import Nav from '../components/Nav'

export const metadata = {
  title: 'Arena Coach',
  description: 'Aulas e treinos para esportes de areia'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Nav />
        <main className="min-h-screen bg-sand">{children}</main>
      </body>
    </html>
  )
}
