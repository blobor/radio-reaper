import './global.css'
import './app.css'

import Link from 'next/link'

export const metadata = {
  title: 'Radio Reaper',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          <main>
            <header className='header'>
              <nav className='header__navigation'>
                <Link className='navigation__link' href='/'>Home</Link>
                <Link className='navigation__link' href='/tools/keygen'>🔐 Key generation</Link>
              </nav>
            </header>
            <section className='content'>
              {children}
            </section>
          </main>
        </body>
      </html>
    )
  }
