import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Crown, Users, Trophy, Calendar, MessageCircle, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  const admins = [
    {
      name: "Rizky Pratama",
      role: "Founder & Head Admin",
      avatar: "/placeholder.svg?height=80&width=80",
      description:
        "Founder komunitas HOK Sukabumi sejak 2023. Mythical Glory player dengan pengalaman turnamen nasional.",
      contact: "wa.me/6281234567890",
    },
    {
      name: "Sari Indah",
      role: "Tournament Manager",
      avatar: "/placeholder.svg?height=80&width=80",
      description: "Mengelola semua event dan turnamen komunitas. Berpengalaman dalam organizing gaming events.",
      contact: "wa.me/6281234567891",
    },
    {
      name: "Dedi Kurniawan",
      role: "Community Manager",
      avatar: "/placeholder.svg?height=80&width=80",
      description: "Mengatur aktivitas harian komunitas dan moderasi forum. Selalu siap membantu member baru.",
      contact: "wa.me/6281234567892",
    },
    {
      name: "Maya Sari",
      role: "Content Creator",
      avatar: "/placeholder.svg?height=80&width=80",
      description: "Membuat konten edukatif dan highlight untuk komunitas. Streamer dan video editor berpengalaman.",
      contact: "wa.me/6281234567893",
    },
  ]

  const achievements = [
    {
      title: "500+ Active Members",
      description: "Komunitas terbesar di Sukabumi",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: "25+ Tournaments",
      description: "Event yang telah diselenggarakan",
      icon: Trophy,
      color: "text-yellow-400",
    },
    {
      title: "2 Years Strong",
      description: "Berdiri sejak Januari 2023",
      icon: Calendar,
      color: "text-green-400",
    },
    {
      title: "10M+ Prize Pool",
      description: "Total hadiah yang telah dibagikan",
      icon: Crown,
      color: "text-purple-400",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Tentang Kami
          </h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Mengenal lebih dekat komunitas Honor of Kings terbesar di Sukabumi
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <Crown className="h-12 w-12 text-yellow-400 mr-4" />
                  <div>
                    <h2 className="text-3xl font-bold text-yellow-400">HOK SUKABUMI</h2>
                    <p className="text-blue-200">Honor of Kings Community</p>
                  </div>
                </div>
                <p className="text-blue-200 text-lg mb-6 leading-relaxed">
                  Didirikan pada Januari 2023, HOK Sukabumi adalah komunitas gaming yang berfokus pada permainan Honor
                  of Kings. Kami berkomitmen untuk menciptakan lingkungan yang positif, kompetitif, dan menyenangkan
                  bagi semua player di wilayah Sukabumi dan sekitarnya.
                </p>
                <p className="text-blue-200 mb-8">
                  Dari pemain casual hingga pro player, semua welcome untuk bergabung dan berkembang bersama kami!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-green-600 hover:bg-green-700">
                    <Link href="https://wa.me/6281234567890" target="_blank">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Join WhatsApp
                    </Link>
                  </Button>
                  <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                    <Link href="https://discord.gg/hoksukabumi" target="_blank">
                      <Users className="mr-2 h-4 w-4" />
                      Join Discord
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="HOK Sukabumi Community"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Pencapaian Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <Card
                  key={index}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 text-center"
                >
                  <CardHeader>
                    <Icon className={`h-12 w-12 mx-auto mb-4 ${achievement.color}`} />
                    <CardTitle className="text-yellow-400">{achievement.title}</CardTitle>
                    <CardDescription className="text-blue-200">{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Tim Admin</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admins.map((admin, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 text-center"
              >
                <CardHeader>
                  <Avatar className="w-20 h-20 mx-auto mb-4">
                    <AvatarImage src={admin.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {admin.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-yellow-400">{admin.name}</CardTitle>
                  <Badge className="bg-blue-600 text-white mx-auto">{admin.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-200 text-sm mb-4">{admin.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black bg-transparent"
                  >
                    <Link href={`https://${admin.contact}`} target="_blank">
                      <MessageCircle className="mr-2 h-3 w-3" />
                      Contact
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-2xl">Visi Kami</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 leading-relaxed">
                  Menjadi komunitas gaming Honor of Kings terdepan di Sukabumi yang menghasilkan player-player
                  berkualitas dan menciptakan ekosistem gaming yang sehat, kompetitif, dan berkelanjutan.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Misi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-200">Menyelenggarakan turnamen dan event berkualitas tinggi</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-200">Memfasilitasi pembelajaran dan pengembangan skill gaming</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-200">Membangun networking yang kuat antar player</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-blue-200">Mempromosikan sportivitas dan fair play</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-3xl font-bold text-yellow-400 text-center mb-12">Hubungi Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-green-600/30 text-center">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <CardTitle className="text-green-400">WhatsApp Group</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4">Join grup WhatsApp untuk diskusi harian dan info cepat</p>
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <Link href="https://wa.me/6281234567890" target="_blank">
                    Join Group
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-indigo-600/30 text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
                <CardTitle className="text-indigo-400">Discord Server</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4">Server Discord untuk voice chat dan koordinasi tim</p>
                <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                  <Link href="https://discord.gg/hoksukabumi" target="_blank">
                    Join Server
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 text-center">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <CardTitle className="text-blue-400">Lokasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200 mb-4">Sukabumi, Jawa Barat, Indonesia</p>
                <p className="text-sm text-gray-400">Event offline biasanya di area Sukabumi Kota</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
