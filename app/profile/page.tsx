"use client";

import { User, Settings, CreditCard, Heart, HelpCircle, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="w-full max-w-md px-4 py-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <User className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Profile</h1>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="h-24 w-24 rounded-full bg-primary/10 mb-4 flex items-center justify-center">
            <User className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-muted-foreground">Gold Member</p>
          <Button variant="outline" className="mt-4">
            Edit Profile
          </Button>
        </div>

        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Account Settings</h3>
            <div className="space-y-2">
              {[
                { icon: <Settings className="h-5 w-5" />, label: "Preferences" },
                { icon: <CreditCard className="h-5 w-5" />, label: "Payment Methods" },
                { icon: <Heart className="h-5 w-5" />, label: "Favorite Items" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-card rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Support</h3>
            <div className="space-y-2">
              {[
                { icon: <HelpCircle className="h-5 w-5" />, label: "Help Center" },
                { icon: <LogOut className="h-5 w-5" />, label: "Sign Out" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between bg-card rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}