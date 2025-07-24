import Link from "next/link"
import { Crown, Facebook, Instagram, Youtube, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-600/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Crown className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                HOK SUKABUMI
              </span>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Komunitas Honor of Kings terbesar di Sukabumi. Bergabunglah dengan para warrior terbaik dan raih kejayaan
              di Land of Dawn!
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/hoksukabumi" className="text-blue-400 hover:text-blue-300">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://instagram.com/hoksukabumi" className="text-pink-400 hover:text-pink-300">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://youtube.com/hoksukabumi" className="text-red-400 hover:text-red-300">
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="https://wa.me/6281234567890" className="text-green-400 hover:text-green-300">
                <MessageCircle className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Menu Utama</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-yellow-400">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-blue-200 hover:text-yellow-400">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="/tournament" className="text-blue-200 hover:text-yellow-400">
                  Turnamen
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-blue-200 hover:text-yellow-400">
                  Galeri
                </Link>
              </li>
              <li>
                <Link href="/forum" className="text-blue-200 hover:text-yellow-400">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">Link Resmi</h3>
            <ul className="space-y-2">
              <li>
                <Link href="https://www.honorofkings.com" className="text-blue-200 hover:text-yellow-400">
                  Honor of Kings Official
                </Link>
              </li>
              <li>
                <Link href="https://www.levelinfinite.com" className="text-blue-200 hover:text-yellow-400">
                  Level Infinite
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-200 hover:text-yellow-400">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-200 hover:text-yellow-400">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-600/30 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2025 HOK Sukabumi Community. All rights reserved. | Honor of Kings is a trademark of Level Infinite.
          </p>
        </div>
      </div>
    </footer>
  )
}
