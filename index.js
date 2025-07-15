
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Peach Haircare</title>
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-peach-100 to-white text-peach-900 font-sans">
        <header className="bg-peach-200 shadow-md p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-wide">Peach Haircare</h1>
          <nav className="space-x-6 text-sm">
            <a href="#products" className="hover:underline">Products</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </header>
        <section className="text-center py-20 px-6 bg-peach-50">
          <h2 className="text-4xl font-bold mb-4">Silkier Hair Starts Here</h2>
          <p className="max-w-2xl mx-auto text-lg mb-6">
            Introducing our formaldehyde-free Peach Silk Keratin Treatment—designed to smooth, nourish, and enhance hair naturally with real peach extract.
          </p>
          <button className="bg-peach-600 text-white py-3 px-6 rounded-full shadow hover:bg-peach-700 transition">Shop Now</button>
        </section>
        <footer className="bg-peach-200 text-center py-6 mt-12">
          <p className="text-sm">&copy; 2025 Peach Haircare. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}
