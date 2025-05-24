import { Compass } from "lucide-react";

export default function DiscoverPage() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="w-full max-w-md px-4 py-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <Compass className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Discover</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="aspect-square rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center hover:shadow-md transition-all hover:scale-[1.02] cursor-pointer border"
            >
              <p className="font-medium">Category {item}</p>
            </div>
          ))}
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Popular Now</h2>
          
          {[1, 2, 3].map((item) => (
            <div 
              key={item}
              className="flex gap-4 bg-card rounded-lg border p-4 hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 rounded bg-secondary flex items-center justify-center shrink-0">
                <span className="text-secondary-foreground">{item}</span>
              </div>
              <div>
                <h3 className="font-medium">Trending Item {item}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  This is a description of the trending item that people are discovering right now.
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}