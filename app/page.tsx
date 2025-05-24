"use client";

import { useState } from "react";
import { Gift, Ticket, Award } from "lucide-react";
import PullToRefresh from "react-pull-to-refresh";

export default function HomePage() {
  const [points, setPoints] = useState(1250);

  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setPoints(prev => prev + Math.floor(Math.random() * 100));
        resolve(true);
      }, 1000);
    });
  };

  return (
    <PullToRefresh onRefresh={handleRefresh}>
      <main className="flex min-h-screen flex-col items-center pb-20">
        <div className="w-full max-w-md px-4 py-8">
          <div className="rounded-xl bg-primary p-6 text-primary-foreground mb-8">
            <h1 className="text-2xl font-bold mb-2">Your Points</h1>
            <div className="text-4xl font-bold">{points}</div>
            <p className="text-primary-foreground/80 mt-2">Points never expire</p>
          </div>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Active Rewards</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Free Coffee", points: 500, icon: <Gift className="h-6 w-6" /> },
                { title: "10% Off", points: 1000, icon: <Ticket className="h-6 w-6" /> },
                { title: "Free Meal", points: 2000, icon: <Award className="h-6 w-6" /> },
              ].map((reward, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border p-4 flex flex-col items-center text-center"
                >
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {reward.icon}
                  </div>
                  <h3 className="font-medium">{reward.title}</h3>
                  <p className="text-sm text-muted-foreground">{reward.points} pts</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Current Campaigns</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Double Points Weekend",
                  description: "Earn 2x points on all purchases this weekend",
                  expires: "2 days left"
                },
                {
                  title: "Breakfast Special",
                  description: "Extra points on breakfast items before 11am",
                  expires: "Ongoing"
                }
              ].map((campaign, index) => (
                <div
                  key={index}
                  className="bg-card rounded-lg border p-4"
                >
                  <h3 className="font-medium">{campaign.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{campaign.description}</p>
                  <p className="text-sm font-medium text-primary mt-2">{campaign.expires}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </PullToRefresh>
  );
}