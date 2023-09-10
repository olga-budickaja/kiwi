import './global.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
export const metadata = {
  title: 'Kiwi',
  description: 'Great demo and discovery of new developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
