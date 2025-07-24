"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Camera, Trophy, Users, Heart, MessageCircle, Share } from "lucide-react"
import Image from "next/image"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const screenshots = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=600",
      title: "Epic Team Fight",
      description: "Moment decisive team fight di Baron pit",
      likes: 45,
      comments: 12,
      category: "gameplay",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=600",
      title: "Pentakill Moment",
      description: "Pentakill spektakuler dari member komunitas",
      likes: 89,
      comments: 23,
      category: "gameplay",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=600",
      title: "New Hero Showcase",
      description: "Preview hero baru dengan skill yang menakjubkan",
      likes: 67,
      comments: 18,
      category: "gameplay",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=600",
      title: "Beautiful Landscape",
      description: "Screenshot pemandangan indah di map baru",
      likes: 34,
      comments: 8,
      category: "gameplay",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=600",
      title: "Legendary Skin",
      description: "Koleksi skin legendary terbaru",
      likes: 78,
      comments: 15,
      category: "gameplay",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=600",
      title: "Victory Celebration",
      description: "Moment kemenangan di ranked match",
      likes: 56,
      comments: 11,
      category: "gameplay",
    },
  ]

  const eventPhotos = [
    {
      id: 7,
      src: "/placeholder.svg?height=400&width=600",
      title: "Tournament Day",
      description: "Suasana turnamen offline di Sukabumi",
      likes: 92,
      comments: 28,
      category: "event",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=400&width=600",
      title: "Community Meetup",
      description: "Gathering bulanan komunitas HOK Sukabumi",
      likes: 156,
      comments: 45,
      category: "event",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=600",
      title: "Championship Winners",
      description: "Penyerahan trophy juara turnamen",
      likes: 134,
      comments: 37,
      category: "event",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=400&width=600",
      title: "Gaming Setup",
      description: "Setup gaming area untuk turnamen offline",
      likes: 73,
      comments: 19,
      category: "event",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=400&width=600",
      title: "Fun Moments",
      description: "Moment seru bersama member komunitas",
      likes: 88,
      comments: 22,
      category: "event",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=400&width=600",
      title: "Live Streaming",
      description: "Setup streaming untuk turnamen online",
      likes: 65,
      comments: 14,
      category: "event",
    },
  ]

  const cosplayPhotos = [
    {
      id: 13,
      src: "/placeholder.svg?height=400&width=600",
      title: "Mulan Cosplay",
      description: "Cosplay Mulan yang detail dan menakjubkan",
      likes: 245,
      comments: 67,
      category: "cosplay",
    },
    {
      id: 14,
      src: "/placeholder.svg?height=400&width=600",
      title: "Arthur Knight",
      description: "Cosplay Arthur dengan armor yang authentic",
      likes: 189,
      comments: 43,
      category: "cosplay",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=400&width=600",
      title: "Assassin Cosplay",
      description: "Cosplay hero assassin dengan detail sempurna",
      likes: 167,
      comments: 38,
      category: "cosplay",
    },
    {
      id: 16,
      src: "/placeholder.svg?height=400&width=600",
      title: "Group Cosplay",
      description: "Cosplay grup dengan berbagai hero favorit",
      likes: 298,
      comments: 89,
      category: "cosplay",
    },
    {
      id: 17,
      src: "/placeholder.svg?height=400&width=600",
      title: "Mage Cosplay",
      description: "Cosplay hero mage dengan efek magic",
      likes: 156,
      comments: 34,
      category: "cosplay",
    },
    {
      id: 18,
      src: "/placeholder.svg?height=400&width=600",
      title: "Tank Hero",
      description: "Cosplay hero tank dengan armor berat",
      likes: 123,
      comments: 27,
      category: "cosplay",
    },
  ]

  const allMedia = [...screenshots, ...eventPhotos, ...cosplayPhotos]

  const getMediaByCategory = (category: string) => {
    switch (category) {
      case "gameplay":
        return screenshots
      case "event":
        return eventPhotos
      case "cosplay":
        return cosplayPhotos
      default:
        return allMedia
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-4">
            Galeri
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Koleksi screenshot gameplay, dokumentasi event, dan cosplay terbaik dari komunitas HOK Sukabumi
          </p>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-yellow-600/30">
            <TabsTrigger value="all" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
              Semua
            </TabsTrigger>
            <TabsTrigger value="gameplay" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
              Gameplay
            </TabsTrigger>
            <TabsTrigger value="event" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
              Event
            </TabsTrigger>
            <TabsTrigger value="cosplay" className="data-[state=active]:bg-yellow-600 data-[state=active]:text-black">
              Cosplay
            </TabsTrigger>
          </TabsList>

          {["all", "gameplay", "event", "cosplay"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getMediaByCategory(category).map((item) => (
                  <Card
                    key={item.id}
                    className="bg-gradient-to-br from-slate-800 to-slate-900 border-blue-600/30 hover:border-blue-400/50 transition-all overflow-hidden cursor-pointer group"
                    onClick={() => setSelectedImage(item.src)}
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={item.title}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-black/70 text-white">
                          {item.category === "gameplay" && <Camera className="h-3 w-3 mr-1" />}
                          {item.category === "event" && <Users className="h-3 w-3 mr-1" />}
                          {item.category === "cosplay" && <Trophy className="h-3 w-3 mr-1" />}
                          {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="text-yellow-400 font-semibold mb-2">{item.title}</h3>
                      <p className="text-blue-200 text-sm mb-3 line-clamp-2">{item.description}</p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            {item.likes}
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {item.comments}
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                          <Share className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-black font-bold"
          >
            Muat Lebih Banyak
          </Button>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Selected image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
