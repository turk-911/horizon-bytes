import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Coffee,
  Heart,
  Star,
  MessageSquare,
  Users,
  Github,
  Twitter,
  Link as LinkIcon,
} from "lucide-react";
import Head from "next/head";

const BuyMeACoffee = () => {
  const [selectedAmount, setSelectedAmount] = useState(5);
  const [customAmount, setCustomAmount] = useState("");

  const predefinedAmounts = [3, 5, 10];

  const recentSupporters = [
    { name: "Alex", amount: 10, message: "Thanks for the great tutorials!" },
    { name: "Sarah", amount: 5, message: "Keep up the amazing work!" },
    {
      name: "Mike",
      amount: 15,
      message: "Your content helped me ace my interview!",
    },
  ];

  return (
    <>
      <Head>
        <title>Buy me a coffee</title>
      </Head>
      <div className="min-h-screen bg-slate-50 p-3">
        <div className="max-w-2xl mx-auto">
          {/* Profile Section */}
          <div className="text-center mb-8">
            <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white font-bold">MJ</span>
            </div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Mokshe Jain
            </h1>
            <p className="text-slate-600 mb-4">
              Building helpful tools and creating content about web development
            </p>
            <div className="flex justify-center gap-4">
              <a href="#" className="text-slate-600 hover:text-slate-900">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900">
                <LinkIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Support Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Coffee className="w-5 h-5 text-yellow-600" />
                Buy me a coffee
              </CardTitle>
              <CardDescription>
                Support my work and help me create more content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {/* Amount Selection */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`py-3 rounded-lg ${
                        selectedAmount === amount
                          ? "bg-blue-500 text-white"
                          : "bg-slate-100 hover:bg-slate-200"
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-2 pl-8 border rounded-lg"
                  />
                </div>

                {/* Message */}
                <textarea
                  placeholder="Leave a message (optional)"
                  className="w-full p-2 border rounded-lg h-24 resize-none"
                />

                {/* Support Button */}
                <button className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4" />
                  Support ${selectedAmount}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Recent Supporters */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              Recent Supporters
            </h2>
            <div className="space-y-4">
              {recentSupporters.map((supporter, index) => (
                <Card key={index}>
                  <CardContent className="pt-4">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                          {supporter.name[0]}
                        </div>
                        <div>
                          <div className="font-medium">{supporter.name}</div>
                          <div className="text-sm text-slate-500">
                            ${supporter.amount}
                          </div>
                        </div>
                      </div>
                      <Badge variant="secondary">
                        <Coffee className="w-3 h-3 mr-1" />
                        Supporter
                      </Badge>
                    </div>
                    <p className="text-slate-600 text-sm">
                      {supporter.message}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Goals Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Monthly Goals
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Server costs</span>
                    <span>$45 / $50</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>New content</span>
                    <span>$120 / $200</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default BuyMeACoffee;
