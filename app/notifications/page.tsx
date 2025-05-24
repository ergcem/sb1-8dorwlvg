"use client";

import { Bell, Coffee, ShoppingBag, Gift } from "lucide-react";
import { PullToRefreshWrapper } from '@/components/PullToRefreshWrapper';

export default function NotificationsPage() {
  const handleRefresh = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  return (
    <PullToRefreshWrapper onRefresh={handleRefresh}>
      <main className="flex min-h-screen flex-col items-center pb-20">
        <div className="w-full max-w-md px-4 py-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Bell className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">Notifications</h1>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: <Coffee className="h-5 w-5" />,
                title: "Points Earned",
                description: "You earned 50 points from your coffee purchase",
                time: "2 minutes ago",
                points: "+50"
              },
              {
                icon: <ShoppingBag className="h-5 w-5" />,
                title: "Purchase Completed",
                description: "Thank you for your purchase at Store #123",
                time: "1 hour ago",
                points: "+150"
              },
              {
                icon: <Gift className="h-5 w-5" />,
                title: "Reward Claimed",
                description: "You redeemed your Free Coffee reward",
                time: "2 days ago",
                points: "-500"
              }
            ].map((notification, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-card rounded-lg border p-4"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">{notification.title}</h3>
                    <span className={`text-sm font-medium ${notification.points.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {notification.points}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {notification.description}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {notification.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </PullToRefreshWrapper>
  );
}