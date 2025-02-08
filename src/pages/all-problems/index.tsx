"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import ProblemsTable from "@/components/ProblemsTable/ProblemsTable";
import ProgressSidebar from "@/components/Progress Bar/progress-bar";
import Topbar from "@/components/Topbar/Topbar";
import useHasMounted from "@/hooks/useHasMounted";
import Head from "next/head";
import { dsaTopics } from "@/utils/constants";

export default function Home() {
  const [loadingProblems, setLoadingProblems] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const hasMounted = useHasMounted();

  if (!hasMounted) return null;

  return (
    <>
      <Head>
        <title>{loadingProblems ? "Loading...": "Problems - Algo Arena"}</title>
      </Head>
      <main className="bg-dark-layer-2 min-h-screen">
        <Topbar />

        {/* Course Cards */}
        <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gradient-to-r from-yellow-400 to-orange-500">
            <CardHeader>
              <CardTitle className="text-white">DSA Crash Course I</CardTitle>
              <CardDescription className="text-white opacity-80">
                Master fundamental data structures and algorithms
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-r from-green-400 to-teal-500">
            <CardHeader>
              <CardTitle className="text-white">DSA Crash Course II</CardTitle>
              <CardDescription className="text-white opacity-80">
                Advanced algorithms and problem-solving
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-gradient-to-r from-blue-400 to-indigo-500">
            <CardHeader>
              <CardTitle className="text-white">JavaScript 30</CardTitle>
              <CardDescription className="text-white opacity-80">
                30 Days of JavaScript Challenges
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Topics Badges */}
        <div className="px-6 py-4">
          <h2 className="text-xl text-gray-400 mb-4">Topics</h2>
          <div className="flex flex-wrap gap-2 overflow-hidden" style={{ maxHeight: expanded ? "none" : "2.5rem" }}>
            {dsaTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1 bg-muted cursor-pointer text-gray-300 rounded-lg text-sm"
              >
                {topic}
              </span>
            ))}
          </div>
          <button
            className="mt-2 flex items-center text-gray-400 hover:text-gray-300 focus:outline-none"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Collapse" : "Expand"}
            {expanded ? <ChevronUp className="ml-1" size={16} /> : <ChevronDown className="ml-1" size={16} />}
          </button>
        </div>

        {/* Search Bar */}
        <div className="px-6 py-4">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search problems..."
              className="w-full pl-10 pr-4 py-2 bg-dark-layer-1 border border-dark-layer-2 rounded-lg text-gray-400 focus:outline-none focus:border-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Problems Table */}
        <div className="lg:flex w-full items-center">
          <div className="overflow-x-auto px-6 pb-10 w-3/4">
            {loadingProblems && (
              <div className="max-w-[1200px] mx-auto sm:w-7/12 w-full animate-pulse">
                {[...Array(10)].map((_, idx) => (
                  <LoadingSkeleton key={idx} />
                ))}
              </div>
            )}
            <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-full">
              {!loadingProblems && (
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400 border-b">
                  <tr>
                    <th scope="col" className="px-1 py-3 w-0 font-medium">Status</th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">Title</th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">Difficulty</th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">Category</th>
                    <th scope="col" className="px-6 py-3 w-0 font-medium">Solution</th>
                  </tr>
                </thead>
              )}
              <ProblemsTable setLoadingProblems={setLoadingProblems} />
            </table>
          </div>
          <div className="lg:w-1/4 w-auto">
            <ProgressSidebar />
          </div>
        </div>
      </main>
    </>
  );
}

const LoadingSkeleton = () => {
  return (
    <div className="flex items-center space-x-12 mt-4 px-6">
      <div className="w-6 h-6 shrink-0 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
      <div className="h-4 sm:w-52 w-32 rounded-full bg-dark-layer-1"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
