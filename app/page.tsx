import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Trophy, Users, Sword, Shield, Crown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10" />
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Honor of Kings Arena"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-6">
            <Crown className="h-12 w-12 text-yellow-400 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              HOK SUKABUMI
            </h1>
            <Crown className="h-12 w-12 text-yellow-400 ml-4" />
          </div>
          <p className="text-xl md:text-2xl mb-8 text-blue-200">Komunitas Honor of Kings Terbesar di Sukabumi</p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
            Bergabunglah dengan para warrior terbaik Sukabumi. Ikuti turnamen, dapatkan teman baru, dan raih kejayaan di
            Land of Dawn!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
            >
              <Link href="/tournament">
                <Trophy className="mr-2 h-5 w-5" />
                Daftar Turnamen
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
            >
              <Link href="/forum">
                <Users className="mr-2 h-5 w-5" />
                Join Forum
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-black/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-blue-200">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-blue-200">Turnamen Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
              <div className="text-blue-200">Tim Terdaftar</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10M+</div>
              <div className="text-blue-200">Total Prize Pool</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Turnamen Terbaru</h2>
            <p className="text-blue-200 text-lg">Ikuti kompetisi seru dan raih hadiah fantastis!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 hover:border-yellow-400/50 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-red-600 text-white">LIVE</Badge>
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <CardTitle className="text-yellow-400">Sukabumi Championship</CardTitle>
                <CardDescription className="text-blue-200">
                  Turnamen bulanan dengan hadiah total 5 juta rupiah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    25-27 Januari 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    32 Tim Terdaftar
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Prize Pool: Rp 5.000.000
                  </div>
                </div>
                <Button asChild className="w-full mt-4 bg-yellow-600 hover:bg-yellow-700 text-black">
                  <Link href="/tournament">Lihat Detail</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 hover:border-blue-400/50 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-600 text-white">UPCOMING</Badge>
                  <Sword className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-blue-400">Rookie Tournament</CardTitle>
                <CardDescription className="text-blue-200">
                  Khusus untuk pemain baru dan rank Epic ke bawah
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    1-3 Februari 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    16 Tim Tersedia
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Prize Pool: Rp 2.000.000
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                >
                  <Link href="/tournament">Daftar Sekarang</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-purple-600/30 hover:border-purple-400/50 transition-all">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-600 text-white">SPECIAL</Badge>
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <CardTitle className="text-purple-400">Anniversary Cup</CardTitle>
                <CardDescription className="text-blue-200">Perayaan 2 tahun komunitas HOK Sukabumi</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    15-17 Februari 2025
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    64 Tim Max
                  </div>
                  <div className="flex items-center">
                    <Trophy className="h-4 w-4 mr-2" />
                    Prize Pool: Rp 10.000.000
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black bg-transparent"
                >
                  <Link href="/tournament">Coming Soon</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">Berita Terbaru</h2>
            <p className="text-blue-200 text-lg">Update terkini dari komunitas dan game</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="New Hero"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-yellow-400">Hero Baru: Zhao Yun Rework</CardTitle>
                <CardDescription className="text-blue-200">
                  Update terbaru menghadirkan rework lengkap untuk hero Zhao Yun dengan skill dan visual baru
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                >
                  <Link href="/news">Baca Selengkapnya</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30">
              <CardHeader>
                <Image
                  src="/placeholder.svg?height=200&width=400"
                  alt="Tournament Results"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-blue-400">Hasil Turnamen Januari</CardTitle>
                <CardDescription className="text-blue-200">
                  Tim "Sukabumi Warriors" berhasil meraih juara 1 pada turnamen bulanan dengan permainan yang luar biasa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  variant="outline"
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                >
                  <Link href="/news">Lihat Hasil</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-8">Bergabung dengan Komunitas</h2>
          <p className="text-blue-200 text-lg mb-12 max-w-3xl mx-auto">
            Jadilah bagian dari keluarga besar HOK Sukabumi. Dapatkan teman baru, tips bermain, dan informasi turnamen
            terbaru!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="https://wa.me/6281234567890" target="_blank">
                <Users className="mr-2 h-5 w-5" />
                Join WhatsApp Group
              </Link>
            </Button>
            <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              <Link href="https://discord.gg/hoksukabumi" target="_blank">
                <Users className="mr-2 h-5 w-5" />
                Join Discord Server
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
            >
              <Link href="/about">Tentang Kami</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
