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
  ShoppingCart,
  Gift,
  Star,
  Clock,
  Zap,
  Crown,
  Check,
  Timer,
} from "lucide-react";
import Topbar from "@/components/Topbar/Topbar";
import Head from "next/head";

const StorePage = () => {
  const premiumPlans = [
    {
      title: "Monthly",
      price: "$35",
      period: "per month",
      features: [
        "All Premium Problems",
        "Solutions & Explanations",
        "Premium Contest Problems",
        "Interview Toolkit",
      ],
      popular: false,
    },
    {
      title: "Annual",
      price: "$159",
      period: "per year",
      features: [
        "All Premium Problems",
        "Solutions & Explanations",
        "Premium Contest Problems",
        "Interview Toolkit",
        "Mock Interviews",
        "Company Problems",
      ],
      popular: true,
      savings: "Save 62%",
    },
  ];

  const products = [
    {
      title: "Interview Bundle",
      price: "$79",
      duration: "6 months",
      features: [
        "Company-specific Questions",
        "Mock Interviews",
        "Assessment Tests",
      ],
      category: "Interview Prep",
    },
    {
      title: "Contest Pack",
      price: "$49",
      duration: "3 months",
      features: [
        "Premium Contest Access",
        "Editorial Access",
        "Contest Statistics",
      ],
      category: "Contest",
    },
  ];

  return (
    <>
      <Head>
        <title>Store - Algo Arena</title>
      </Head>
      <div className="min-h-screen bg-slate-50">
        <Topbar />
        <div className="max-w-6xl mx-auto mt-6 p-2">
          <h1 className="text-3xl font-bold text-slate-800 mb-6">Store</h1>

          {/* Premium Plans */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Crown className="w-5 h-5 text-yellow-500" />
              Premium Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {premiumPlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-lg transition-shadow ${
                    plan.popular ? "border-2 border-blue-500" : ""
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-blue-500 text-white text-sm py-1 px-4 text-center">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {plan.price}
                        </CardTitle>
                        <CardDescription>{plan.period}</CardDescription>
                      </div>
                      {plan.savings && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700"
                        >
                          {plan.savings}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center gap-2"
                        >
                          <Check className="w-4 h-4 text-green-500" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      <button
                        className={`mt-4 py-2 px-4 rounded-lg w-full ${
                          plan.popular
                            ? "bg-blue-500 text-white hover:bg-blue-600"
                            : "border border-blue-500 text-blue-500 hover:bg-blue-50"
                        }`}
                      >
                        Subscribe Now
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Products */}
          <div>
            <h2 className="text-xl font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Gift className="w-5 h-5 text-purple-500" />
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">
                          {product.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Timer className="w-4 h-4" />
                          {product.duration} access
                        </CardDescription>
                      </div>
                      <Badge variant="outline">{product.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-4">
                      <div className="text-2xl font-bold text-slate-800">
                        {product.price}
                      </div>
                      <div className="flex flex-col gap-2">
                        {product.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="mt-2 py-2 px-4 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-50">
                        Add to Cart
                      </button>
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

export default StorePage;
