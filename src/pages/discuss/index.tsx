import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  ThumbsUp, 
  Eye, 
  Clock, 
  Tag,
  Search,
  Filter,
  CheckCircle2,
  Star,
  TrendingUp
} from 'lucide-react';
import Topbar from '@/components/Topbar/Topbar';
import Head from 'next/head';

const DiscussPage = () => {
  const topics = [
    {
      title: "How to approach DP problems systematically?",
      author: "algorithmica",
      tags: ["dynamic-programming", "tutorial"],
      likes: 234,
      views: "15.2K",
      replies: 45,
      timeAgo: "2 hours ago",
      solved: true,
      trending: true
    },
    {
      title: "Weekly Contest 388 Discussion",
      author: "contestMaster",
      tags: ["contest", "weekly-contest"],
      likes: 189,
      views: "12.8K",
      replies: 156,
      timeAgo: "1 day ago",
      solved: false,
      trending: true
    },
    {
      title: "System Design: Designing a Rate Limiter",
      author: "systemDesigner",
      tags: ["system-design", "interview"],
      likes: 567,
      views: "28.4K",
      replies: 89,
      timeAgo: "2 days ago",
      solved: true,
      featured: true
    }
  ];

  const categories = [
    { name: "Algorithms", count: "12.4K" },
    { name: "Database", count: "5.2K" },
    { name: "System Design", count: "8.7K" },
    { name: "Python", count: "15.3K" },
    { name: "Java", count: "10.1K" }
  ];

  return (
    <>
    <Head>
      <title>Discuss - Algo Arena</title>
    </Head>
    <div className="min-h-screen bg-slate-50">
      <Topbar />
      <div className="max-w-6xl mx-auto mt-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-4">Discuss</h1>
          
          {/* Search and Filter Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 flex items-center gap-2 bg-white rounded-lg border p-2">
              <Search className="w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search discussions..." 
                className="flex-1 outline-none border-none bg-transparent"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-slate-50">
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>

          {/* Category Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-3 py-1 cursor-pointer hover:bg-slate-100"
              >
                {category.name} ({category.count})
              </Badge>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-4">
          {topics.map((topic, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {topic.trending && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                      {topic.featured && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg text-blue-600 hover:text-blue-700 cursor-pointer">
                      {topic.title}
                      {topic.solved && (
                        <CheckCircle2 className="inline-block w-4 h-4 ml-2 text-green-500" />
                      )}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-2 text-sm text-slate-600">
                      <span className="font-medium text-slate-700">@{topic.author}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {topic.timeAgo}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <ThumbsUp className="w-4 h-4" />
                    {topic.likes}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <MessageSquare className="w-4 h-4" />
                    {topic.replies}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Eye className="w-4 h-4" />
                    {topic.views}
                  </div>
                  <div className="flex gap-2">
                    {topic.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-2 border rounded-lg hover:bg-slate-50">
            Load More
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default DiscussPage;