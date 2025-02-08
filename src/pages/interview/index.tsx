import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  Building2,
  Target,
  Clock,
  CheckCircle2,
  BarChart,
  BookOpen,
  Star,
  ArrowRight,
} from "lucide-react";
import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

const InterviewPage = () => {
  const companies = [
    {
      name: "Meta",
      questions: 150,
      difficulty: "Hard",
      acceptance: "32%",
      logo: "M",
    },
    {
      name: "Google",
      questions: 200,
      difficulty: "Medium",
      acceptance: "28%",
      logo: "G",
    },
    {
      name: "Amazon",
      questions: 180,
      difficulty: "Medium",
      acceptance: "35%",
      logo: "A",
    },
  ];

  const assessments = [
    {
      title: "Data Structures & Algorithms",
      questions: 75,
      timeLimit: "90 mins",
      completions: "24.5K",
      topics: ["Arrays", "Trees", "DP"],
    },
    {
      title: "System Design",
      questions: 45,
      timeLimit: "120 mins",
      completions: "15.2K",
      topics: ["Scalability", "Database", "API"],
    },
  ];

  const mockInterviews = [
    {
      title: "Frontend Developer",
      duration: "60 mins",
      topics: ["JavaScript", "React", "CSS"],
      difficulty: "Medium",
      slots: 5,
    },
    {
      title: "Backend Engineer",
      duration: "45 mins",
      topics: ["System Design", "APIs", "Database"],
      difficulty: "Hard",
      slots: 3,
    },
  ];

  return (
    <>
      <Head>
        <title>Interview - Algo Arena</title>
      </Head>
      <div className="min-h-screen bg-slate-50">
        <Topbar />
        <div className="max-w-6xl mx-auto mt-6">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">
            Interview Preparation
          </h1>

          {/* Company-specific Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              Company-specific Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {companies.map((company, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center font-bold text-xl">
                        {company.logo}
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {company.name}
                        </CardTitle>
                        <CardDescription>
                          {company.questions} questions
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm text-slate-600">
                      <Badge
                        variant={
                          company.difficulty === "Easy"
                            ? "default"
                            : company.difficulty === "Medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {company.difficulty}
                      </Badge>
                      <span>Acceptance: {company.acceptance}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Assessments Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-500" />
              Assessment Tests
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {assessments.map((assessment, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {assessment.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {assessment.timeLimit}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm text-slate-600">
                        <span>{assessment.questions} questions</span>
                        <span>{assessment.completions} completions</span>
                      </div>
                      <div className="flex gap-2">
                        {assessment.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Mock Interviews Section */}
          <div>
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-500" />
              Mock Interviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mockInterviews.map((interview, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {interview.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {interview.duration}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className="bg-green-50">
                        {interview.slots} slots available
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-2">
                      <Badge
                        variant={
                          interview.difficulty === "Easy"
                            ? "default"
                            : interview.difficulty === "Medium"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {interview.difficulty}
                      </Badge>
                      <div className="flex gap-2">
                        {interview.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="outline">
                            {topic}
                          </Badge>
                        ))}
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

export default InterviewPage;
