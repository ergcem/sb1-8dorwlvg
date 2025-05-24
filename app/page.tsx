import { Home } from "lucide-react";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="w-full max-w-md px-4 py-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Home className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Home</h1>
        </div>

        <div className="space-y-6">
          <section className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Welcome Back</h2>
            <p className="text-muted-foreground">
              This is your personalized home screen. Here you'll find your most important content.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">Today's Highlights</h2>
            
            {[1, 2, 3].map((item) => (
              <div 
                key={item}
                className="bg-card rounded-lg border p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Highlight {item}</h3>
                    <p className="text-sm text-muted-foreground">
                      Brief description of this highlight item
                    </p>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-medium">{item}</span>
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </main>
  );
}