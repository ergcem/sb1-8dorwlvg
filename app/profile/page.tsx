import { User } from "lucide-react";

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
            <User className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-muted-foreground">john.doe@example.com</p>
        </div>

        <div className="space-y-4">
          {["Account", "Notifications", "Appearance", "Privacy", "Help & Support", "About"].map((item) => (
            <div 
              key={item}
              className="flex items-center justify-between bg-card rounded-lg border p-4 hover:bg-accent/50 transition-colors cursor-pointer"
            >
              <span>{item}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-muted-foreground">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}