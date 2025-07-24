"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Trophy, Users, Clock, MapPin, Star } from "lucide-react"
import Image from "next/image"

export default function TournamentPage() {
  const [showRegistration, setShowRegistration] = useState(false)
  const [selectedTournament, setSelectedTournament] = useState<string | null>(null)

  const tournaments = [
    {
      id: "sukabumi-championship",
      title: "Sukabumi Championship",
      description: "Turnamen bulanan dengan hadiah total 5 juta rupiah",
      image: "/placeholder.svg?height=300&width=500",
      status: "LIVE",
      statusColor: "bg-red-600",
      date: "25-27 Januari 2025",
      time: "19:00 - 22:00 WIB",
      location: "Online + Offline (Sukabumi)",
      teams: "32/32",
      prizePool: "Rp 5.000.000",
      requirements: "Rank Mythic+, Tim 5 orang",
      featured: true,
    },
    {
      id: "rookie-tournament",
      title: "Rookie Tournament",
      description: "Khusus untuk pemain baru dan rank Epic ke bawah",
      image: "/placeholder.svg?height=300&width=500",
      status: "OPEN",
      statusColor: "bg-green-600",
      date: "1-3 Februari 2025",
      time: "20:00 - 23:00 WIB",
      location: "Online",
      teams: "8/16",
      prizePool: "Rp 2.000.000",
      requirements: "Rank Epic ke bawah, Tim 5 orang",
      featured: true,
    },
    {
      id: "anniversary-cup",
      title: "Anniversary Cup",
      description: "Perayaan 2 tahun komunitas HOK Sukabumi",
      image: "/placeholder.svg?height=300&width=500",
      status: "COMING SOON",
      statusColor: "bg-purple-600",
      date: "15-17 Februari 2025",
      time: "18:00 - 23:00 WIB",
      location: "Hybrid (Online + Offline)",
      teams: "0/64",
      prizePool: "Rp 10.000.000",
      requirements: "Open untuk semua rank, Tim 5 orang",
      featured: true,
    },
    {
      id: "weekly-clash",
      title: "Weekly Clash",
      description: "Turnamen mingguan dengan format cepat",
      image: "/placeholder.svg?height=300&width=500",
      status: "OPEN",
      statusColor: "bg-blue-600",
      date: "Setiap Sabtu",
      time: "20:00 - 22:00 WIB",
      location: "Online",
      teams: "12/16",
      prizePool: "Rp 500.000",
      requirements: "Rank Legend+, Tim 5 orang",
      featured: false,
    },
  ]

  const handleRegister = (tournamentId: string) => {
    setSelectedTournament(tournamentId)
    setShowRegistration(true)
  }

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert("Pendaftaran berhasil! Tim akan menghubungi Anda dalam 24 jam.")
    setShowRegistration(false)
    setSelectedTournament(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Turnamen
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Ikuti kompetisi seru dan buktikan kemampuan tim Anda di arena Honor of Kings!
          </p>
        </div>

        {!showRegistration ? (
          <>
            {/* Featured Tournaments */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-yellow-400 mb-8 flex items-center">
                <Star className="mr-2 h-6 w-6" />
                Turnamen Unggulan
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {tournaments
                  .filter((t) => t.featured)
                  .map((tournament) => (
                    <Card
                      key={tournament.id}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 hover:border-yellow-400/50 transition-all overflow-hidden"
                    >
                      <div className="relative">
                        <Image
                          src={tournament.image || "/placeholder.svg"}
                          alt={tournament.title}
                          width={500}
                          height={300}
                          className="w-full h-48 object-cover"
                        />
                        <Badge className={`absolute top-4 left-4 ${tournament.statusColor} text-white`}>
                          {tournament.status}
                        </Badge>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-yellow-400 text-xl">{tournament.title}</CardTitle>
                        <CardDescription className="text-blue-200">{tournament.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center text-gray-300">
                            <Calendar className="h-4 w-4 mr-2" />
                            {tournament.date}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Clock className="h-4 w-4 mr-2" />
                            {tournament.time}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <MapPin className="h-4 w-4 mr-2" />
                            {tournament.location}
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Users className="h-4 w-4 mr-2" />
                            {tournament.teams}
                          </div>
                        </div>

                        <div className="border-t border-gray-700 pt-3">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">Prize Pool:</span>
                            <span className="text-yellow-400 font-bold">{tournament.prizePool}</span>
                          </div>
                          <div className="text-xs text-gray-400 mb-4">{tournament.requirements}</div>
                        </div>

                        <Button
                          onClick={() => handleRegister(tournament.id)}
                          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
                          disabled={
                            tournament.status === "COMING SOON" ||
                            tournament.teams.split("/")[0] === tournament.teams.split("/")[1]
                          }
                        >
                          {tournament.status === "COMING SOON"
                            ? "Coming Soon"
                            : tournament.teams.split("/")[0] === tournament.teams.split("/")[1]
                              ? "Penuh"
                              : "Daftar Sekarang"}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>

            {/* Regular Tournaments */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-400 mb-8">Turnamen Lainnya</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {tournaments
                  .filter((t) => !t.featured)
                  .map((tournament) => (
                    <Card
                      key={tournament.id}
                      className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 hover:border-blue-400/50 transition-all"
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <Badge className={`${tournament.statusColor} text-white`}>{tournament.status}</Badge>
                          <Trophy className="h-6 w-6 text-blue-400" />
                        </div>
                        <CardTitle className="text-blue-400">{tournament.title}</CardTitle>
                        <CardDescription className="text-blue-200">{tournament.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {tournament.date}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-2" />
                            {tournament.teams}
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-yellow-400 font-bold">{tournament.prizePool}</span>
                          <Button
                            onClick={() => handleRegister(tournament.id)}
                            variant="outline"
                            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                          >
                            Daftar
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </section>
          </>
        ) : (
          /* Registration Form */
          <section className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30">
              <CardHeader>
                <CardTitle className="text-yellow-400 text-2xl text-center">Pendaftaran Turnamen</CardTitle>
                <CardDescription className="text-blue-200 text-center">
                  {tournaments.find((t) => t.id === selectedTournament)?.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitRegistration} className="space-y-6">
                  {/* Team Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-yellow-400">Informasi Tim</h3>

                    <div>
                      <Label htmlFor="teamName" className="text-blue-200">
                        Nama Tim *
                      </Label>
                      <Input
                        id="teamName"
                        required
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="Masukkan nama tim"
                      />
                    </div>

                    <div>
                      <Label htmlFor="teamTag" className="text-blue-200">
                        Tag Tim
                      </Label>
                      <Input
                        id="teamTag"
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="Contoh: [SKB]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="captainName" className="text-blue-200">
                        Nama Kapten *
                      </Label>
                      <Input
                        id="captainName"
                        required
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="Nama lengkap kapten tim"
                      />
                    </div>

                    <div>
                      <Label htmlFor="captainPhone" className="text-blue-200">
                        No. WhatsApp Kapten *
                      </Label>
                      <Input
                        id="captainPhone"
                        required
                        type="tel"
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="08xxxxxxxxxx"
                      />
                    </div>
                  </div>

                  {/* Player Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-yellow-400">Informasi Pemain</h3>

                    {[1, 2, 3, 4, 5].map((playerNum) => (
                      <div
                        key={playerNum}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-700/50 rounded-lg"
                      >
                        <div>
                          <Label className="text-blue-200">Pemain {playerNum} - IGN *</Label>
                          <Input
                            required
                            className="bg-slate-700 border-gray-600 text-white"
                            placeholder="In-Game Name"
                          />
                        </div>
                        <div>
                          <Label className="text-blue-200">ID Game *</Label>
                          <Input required className="bg-slate-700 border-gray-600 text-white" placeholder="ID Game" />
                        </div>
                        <div>
                          <Label className="text-blue-200">Rank Tertinggi *</Label>
                          <Select required>
                            <SelectTrigger className="bg-slate-700 border-gray-600 text-white">
                              <SelectValue placeholder="Pilih rank" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="warrior">Warrior</SelectItem>
                              <SelectItem value="elite">Elite</SelectItem>
                              <SelectItem value="master">Master</SelectItem>
                              <SelectItem value="grandmaster">Grandmaster</SelectItem>
                              <SelectItem value="epic">Epic</SelectItem>
                              <SelectItem value="legend">Legend</SelectItem>
                              <SelectItem value="mythic">Mythic</SelectItem>
                              <SelectItem value="mythical-glory">Mythical Glory</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-yellow-400">Informasi Tambahan</h3>

                    <div>
                      <Label htmlFor="experience" className="text-blue-200">
                        Pengalaman Turnamen
                      </Label>
                      <Textarea
                        id="experience"
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="Ceritakan pengalaman tim dalam turnamen sebelumnya (opsional)"
                      />
                    </div>

                    <div>
                      <Label htmlFor="notes" className="text-blue-200">
                        Catatan Khusus
                      </Label>
                      <Textarea
                        id="notes"
                        className="bg-slate-700 border-gray-600 text-white"
                        placeholder="Ada hal khusus yang ingin disampaikan? (opsional)"
                      />
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <p className="text-sm text-blue-200 mb-2">Dengan mendaftar, Anda menyetujui:</p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>• Mengikuti semua aturan turnamen yang berlaku</li>
                      <li>• Hadir tepat waktu sesuai jadwal yang ditentukan</li>
                      <li>• Bermain fair play tanpa cheat atau exploit</li>
                      <li>• Menerima keputusan panitia sebagai keputusan final</li>
                    </ul>
                  </div>

                  {/* Submit Buttons */}
                  <div className="flex gap-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowRegistration(false)}
                      className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700"
                    >
                      Batal
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
                    >
                      Daftar Tim
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </section>
        )}
      </div>
    </div>
  )
}
