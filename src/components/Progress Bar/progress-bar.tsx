import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const ProgressSidebar = ({ totalProblems = 100, solvedProblems = 9 }) => {
  const [date, setDate] = React.useState(new Date());
  const progressPercentage = Math.round((solvedProblems / totalProblems) * 100);

  return (
    <div className=" right-0 top-16 h-screen p-4 border-l border-dark-layer-2 w-full">
      <div className="space-y-6">
        <Card
          className="bg-dark-2
        "
        >
          <CardHeader>
            <CardTitle className="text-lg font-medium text-gray-200">
              Your Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Progress value={progressPercentage} className="h-2 bg-muted" />
              <div className="flex justify-between text-sm text-gray-400">
                <span>{solvedProblems} solved</span>
                <span>{progressPercentage}%</span>
                <span>{totalProblems} total</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Calendar Section */}
        <Card className="bg-transparent">
          <CardHeader>
            <CardTitle className="text-lg font-medium text-muted-foreground">
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border border-dark-layer-2 w-full bg-dark-layer-2"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressSidebar;
