import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, Eye } from "lucide-react"
import Image from "next/image"

export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "Update Patch 1.15.2 - Hero Baru dan Balance Changes",
      excerpt:
        "Patch terbaru menghadirkan hero baru Zhao Yun rework, balance changes untuk beberapa hero, dan perbaikan bug.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Update Game",
      date: "24 Januari 2025",
      author: "Admin HOK",
      views: 1250,
      featured: true,
    },
    {
      id: 2,
      title: "Hasil Turnamen Sukabumi Championship Januari 2025",
      excerpt: "Tim Sukabumi Warriors berhasil meraih juara 1 dengan permainan yang luar biasa di grand final.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Turnamen",
      date: "22 Januari 2025",
      author: "Tournament Admin",
      views: 890,
      featured: true,
    },
    {
      id: 3,
      title: "Tips & Trik: Cara Bermain Assassin di Meta Terbaru",
      excerpt: "Panduan lengkap untuk menguasai role assassin dengan hero-hero meta terkini dan strategi positioning.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Guide",
      date: "20 Januari 2025",
      author: "Pro Player",
      views: 2100,
      featured: false,
    },
    {
      id: 4,
      title: "Pengumuman: Rookie Tournament Februari 2025",
      excerpt: "Turnamen khusus untuk pemain baru dan rank Epic ke bawah. Daftar sekarang dan raih hadiah menarik!",
      image: "/placeholder.svg?height=300&width=500",
      category: "Pengumuman",
      date: "18 Januari 2025",
      author: "Event Organizer",
      views: 1500,
      featured: false,
    },
    {
      id: 5,
      title: "Highlight: Pertandingan Terbaik Minggu Ini",
      excerpt: "Saksikan replay pertandingan paling seru dari member komunitas dengan gameplay yang menakjubkan.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Highlight",
      date: "16 Januari 2025",
      author: "Content Creator",
      views: 750,
      featured: false,
    },
    {
      id: 6,
      title: "Event Cosplay HOK Sukabumi - Februari 2025",
      excerpt: "Kompetisi cosplay dengan tema Honor of Kings. Hadiah total 3 juta rupiah untuk para pemenang!",
      image: "/placeholder.svg?height=300&width=500",
      category: "Event",
      date: "14 Januari 2025",
      author: "Event Team",
      views: 980,
      featured: false,
    },
  ]

  const featuredNews = news.filter((item) => item.featured)
  const regularNews = news.filter((item) => !item.featured)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Berita & Pengumuman
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Update terbaru dari dunia Honor of Kings dan komunitas Sukabumi
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">Berita Utama</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <Card
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 hover:border-yellow-400/50 transition-all overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">FEATURED</Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="border-yellow-400 text-yellow-400">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-400">
                      <Eye className="h-4 w-4 mr-1" />
                      {item.views}
                    </div>
                  </div>
                  <CardTitle className="text-yellow-400 text-xl">{item.title}</CardTitle>
                  <CardDescription className="text-blue-200">{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-400">
                      <Calendar className="h-4 w-4 mr-1" />
                      {item.date}
                      <User className="h-4 w-4 ml-4 mr-1" />
                      {item.author}
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
                    >
                      Baca Selengkapnya
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Regular News */}
        <section>
          <h2 className="text-2xl font-bold text-yellow-400 mb-8">Berita Lainnya</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Card
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 hover:border-blue-400/50 transition-all overflow-hidden"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover"
                  />
                  <Badge
                    variant="outline"
                    className="absolute top-2 left-2 text-xs border-blue-400 text-blue-400 bg-black/70"
                  >
                    {item.category}
                  </Badge>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-blue-400 text-lg line-clamp-2">{item.title}</CardTitle>
                  <CardDescription className="text-blue-200 text-sm line-clamp-3">{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {item.date}
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-3 w-3 mr-1" />
                      {item.views}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                  >
                    Baca Artikel
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
          >
            Muat Berita Lainnya
          </Button>
        </div>
      </div>
    </div>
  )
}
