import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Code, Trophy, Star, Users, Rocket } from "lucide-react";
import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

const ExplorePage = () => {
  const categories = [
    {
      title: "Arrays & Strings",
      description: "Master fundamental data structures",
      difficulty: "Easy",
      participants: "245K",
      problems: 75,
      icon: <Code className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "Dynamic Programming",
      description: "Learn optimal substructure solutions",
      difficulty: "Hard",
      participants: "180K",
      problems: 85,
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
    },
    {
      title: "Graph Theory",
      description: "Explore network algorithms",
      difficulty: "Medium",
      participants: "150K",
      problems: 60,
      icon: <Users className="w-6 h-6 text-green-500" />,
    },
  ];

  const challenges = [
    {
      title: "75 Days Challenge",
      description: "Complete 75 coding problems in 75 days",
      participants: "50K",
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    },
    {
      title: "Interview Prep",
      description: "Top interview questions from FAANG companies",
      participants: "120K",
      icon: <Star className="w-6 h-6 text-orange-500" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Explore - Algo Arena</title>
      </Head>
      <div className="min-h-screen bg-dark-layer-2">
        <Topbar />
        <div className="max-w-6xl mx-auto mt-6">
          <h1 className="text-3xl font-bold text-accent-foreground mb-6">Explore</h1>

          {/* Featured Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-accent-foreground mb-4">
              Study Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-dark-layer-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {category.icon}
                      <Badge
                        variant={
                          category.difficulty === "Easy"
                            ? "default"
                            : category.difficulty === "Medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {category.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-brand-orange-s">
                      <span>{category.problems} problems</span>
                      <span>{category.participants} users</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Challenges Section */}
          <div>
            <h2 className="text-xl font-semibold text-accent-foreground mb-4">
              Featured Challenges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow bg-dark-layer-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      {challenge.icon}
                      <Badge variant="outline">
                        {challenge.participants} enrolled
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{challenge.title}</CardTitle>
                    <CardDescription>{challenge.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
