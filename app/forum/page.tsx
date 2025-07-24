"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock, Pin, FlameIcon as Fire, Plus, Search } from "lucide-react"

export default function ForumPage() {
  const [showNewPost, setShowNewPost] = useState(false)

  const forumPosts = [
    {
      id: 1,
      title: "Tips Build Terbaik untuk Meta Terbaru",
      content:
        "Setelah update patch 1.15.2, ada beberapa perubahan signifikan dalam meta. Berikut build yang saya rekomendasikan...",
      author: "ProGamer_SKB",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Strategy",
      replies: 23,
      likes: 45,
      timeAgo: "2 jam lalu",
      isPinned: true,
      isHot: true,
    },
    {
      id: 2,
      title: "Mencari Tim untuk Turnamen Rookie",
      content: "Halo guys, saya player rank Epic 2 mencari tim untuk ikut Rookie Tournament. Main role MM/Assassin...",
      author: "RookieHunter",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Team Finding",
      replies: 12,
      likes: 18,
      timeAgo: "4 jam lalu",
      isPinned: false,
      isHot: false,
    },
    {
      id: 3,
      title: "Review Hero Baru: Zhao Yun Rework",
      content:
        "Setelah mencoba Zhao Yun yang sudah di-rework, menurut saya hero ini sekarang lebih balance dan fun to play...",
      author: "HeroAnalyst",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Hero Discussion",
      replies: 34,
      likes: 67,
      timeAgo: "6 jam lalu",
      isPinned: false,
      isHot: true,
    },
    {
      id: 4,
      title: "Jadwal Latihan Tim Bersama",
      content:
        "Untuk persiapan turnamen bulan depan, kita perlu jadwal latihan yang teratur. Bagaimana kalau setiap Selasa dan Kamis?",
      author: "TeamCaptain",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Team Discussion",
      replies: 8,
      likes: 15,
      timeAgo: "8 jam lalu",
      isPinned: false,
      isHot: false,
    },
    {
      id: 5,
      title: "Bug Report: Lag di Map Baru",
      content: "Ada yang mengalami lag di map baru? FPS saya drop drastis padahal biasanya smooth...",
      author: "TechGamer",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Bug Report",
      replies: 19,
      likes: 28,
      timeAgo: "12 jam lalu",
      isPinned: false,
      isHot: false,
    },
    {
      id: 6,
      title: "Event Cosplay: Siapa yang Ikut?",
      content: "Event cosplay bulan depan sudah dekat nih. Ada yang sudah prepare kostum? Share dong idenya!",
      author: "CosplayQueen",
      avatar: "/placeholder.svg?height=40&width=40",
      category: "Events",
      replies: 25,
      likes: 42,
      timeAgo: "1 hari lalu",
      isPinned: false,
      isHot: false,
    },
  ]

  const categories = [
    { name: "All", count: forumPosts.length },
    { name: "Strategy", count: 15 },
    { name: "Team Finding", count: 8 },
    { name: "Hero Discussion", count: 12 },
    { name: "Bug Report", count: 5 },
    { name: "Events", count: 7 },
    { name: "General", count: 20 },
  ]

  const handleNewPost = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle new post submission
    alert("Post berhasil dibuat!")
    setShowNewPost(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Forum Komunitas
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Diskusi, berbagi tips, cari tim, dan berinteraksi dengan sesama player HOK Sukabumi
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 mb-6">
              <CardHeader>
                <CardTitle className="text-yellow-400">Kategori</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="flex items-center justify-between p-2 rounded hover:bg-slate-700/50 cursor-pointer"
                  >
                    <span className="text-blue-200">{category.name}</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-400">
                      {category.count}
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30">
              <CardHeader>
                <CardTitle className="text-blue-400">Forum Rules</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-gray-300 space-y-2">
                <p>• Gunakan bahasa yang sopan</p>
                <p>• No spam atau double post</p>
                <p>• Posting di kategori yang tepat</p>
                <p>• No toxic atau flame</p>
                <p>• Respect sesama member</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and New Post */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Cari diskusi..." className="pl-10 bg-slate-700 border-gray-600 text-white" />
              </div>
              <Button
                onClick={() => setShowNewPost(!showNewPost)}
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
              >
                <Plus className="mr-2 h-4 w-4" />
                Post Baru
              </Button>
            </div>

            {/* New Post Form */}
            {showNewPost && (
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-yellow-600/30 mb-8">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Buat Post Baru</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleNewPost} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Judul diskusi..."
                        className="bg-slate-700 border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <select className="w-full p-2 bg-slate-700 border border-gray-600 rounded text-white">
                        <option value="">Pilih Kategori</option>
                        <option value="strategy">Strategy</option>
                        <option value="team-finding">Team Finding</option>
                        <option value="hero-discussion">Hero Discussion</option>
                        <option value="bug-report">Bug Report</option>
                        <option value="events">Events</option>
                        <option value="general">General</option>
                      </select>
                    </div>
                    <div>
                      <Textarea
                        placeholder="Tulis konten diskusi..."
                        className="bg-slate-700 border-gray-600 text-white min-h-[120px]"
                        required
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-black">
                        Posting
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowNewPost(false)}
                        className="border-gray-600 text-gray-300 hover:bg-gray-700"
                      >
                        Batal
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Forum Posts */}
            <div className="space-y-4">
              {forumPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 hover:border-blue-400/50 transition-all"
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarImage src={post.avatar || "/placeholder.svg"} />
                          <AvatarFallback>{post.author.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center space-x-2">
                            {post.isPinned && <Pin className="h-4 w-4 text-yellow-400" />}
                            {post.isHot && <Fire className="h-4 w-4 text-red-400" />}
                            <CardTitle className="text-yellow-400 text-lg">{post.title}</CardTitle>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span>{post.author}</span>
                            <span>•</span>
                            <Badge variant="outline" className="border-blue-400 text-blue-400 text-xs">
                              {post.category}
                            </Badge>
                            <span>•</span>
                            <div className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {post.timeAgo}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-200 mb-4 line-clamp-3">{post.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MessageSquare className="h-4 w-4 mr-1" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {post.likes} likes
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black bg-transparent"
                      >
                        Baca Selengkapnya
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
              >
                Muat Diskusi Lainnya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
