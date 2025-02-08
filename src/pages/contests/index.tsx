import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  Users,
  Trophy,
  Timer,
  ArrowRight,
} from "lucide-react";
import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

const ContestPage = () => {
  const upcomingContests = [
    {
      title: "Weekly Contest 389",
      time: "Sat, Feb 10 2024 8:00 AM",
      duration: "1.5 hours",
      participants: "12.4K",
      prizes: "$500",
      status: "Registration Open",
    },
    {
      title: "Biweekly Contest 124",
      time: "Sat, Feb 17 2024 8:00 AM",
      duration: "2 hours",
      participants: "8.2K",
      prizes: "$300",
      status: "Registration Open",
    },
  ];

  const ongoingContests = [
    {
      title: "Dynamic Programming Challenge",
      timeLeft: "2:15:45",
      participants: "5.4K",
      difficulty: "Medium",
      type: "Special Event",
    },
  ];

  const pastContests = [
    {
      title: "Weekly Contest 388",
      date: "Feb 3, 2024",
      participants: "15.2K",
      winners: ["codeMaster123", "algorithmica", "byteBender"],
    },
    {
      title: "Biweekly Contest 123",
      date: "Jan 27, 2024",
      participants: "11.8K",
      winners: ["pythonPro", "jsNinja", "dataStructurer"],
    },
  ];

  return (
    <>
      <Head>
        <title>Contests - Algo Arena</title>
      </Head>
      <div className="min-h-screen bg-slate-50">
        <Topbar />
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6 mt-6">
            <h1 className="text-3xl font-bold text-slate-800">Contests</h1>
            <div className="flex gap-4">
              <Badge variant="outline" className="text-sm">
                Global Rating
              </Badge>
              <Badge variant="outline" className="text-sm">
                Your Rating: 1523
              </Badge>
            </div>
          </div>

          {/* Ongoing Contests */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Timer className="w-5 h-5 text-green-500" />
              Live Now
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {ongoingContests.map((contest, index) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg text-green-600">
                          {contest.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Time Remaining: {contest.timeLeft}
                        </CardDescription>
                      </div>
                      <Badge className="bg-green-500">{contest.type}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {contest.participants} participating
                      </span>
                      <Badge variant="secondary">{contest.difficulty}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Contests */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-500" />
              Upcoming Contests
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {upcomingContests.map((contest, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {contest.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {contest.time}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="text-blue-500 border-blue-500"
                      >
                        {contest.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {contest.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {contest.participants} registered
                      </span>
                      <span className="flex items-center gap-1">
                        <Trophy className="w-4 h-4" />
                        {contest.prizes}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Contests */}
          <div>
            <h2 className="text-xl font-semibold text-slate-700 mb-4">
              Past Contests
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {pastContests.map((contest, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">
                          {contest.title}
                        </CardTitle>
                        <CardDescription>{contest.date}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-4 text-sm text-slate-600">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {contest.participants} participated
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Trophy className="w-4 h-4 text-yellow-500" />
                        Winners: {contest.winners.join(", ")}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestPage;
