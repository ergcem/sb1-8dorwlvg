"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, QrCode, Bell, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export function BottomNav() {
  const pathname = usePathname();
  
  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="h-6 w-6" />,
    },
    {
      label: "Scan",
      href: "/scan",
      icon: <QrCode className="h-6 w-6" />,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: <User className="h-6 w-6" />,
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t bg-background/95 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-md items-center px-6">
        {navItems.map((item) => {
          const isActive = 
            item.href === "/" 
              ? pathname === "/" 
              : pathname.startsWith(item.href);
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-1 flex-col items-center justify-center h-full",
                "transition-all duration-200 ease-in-out",
                "relative",
                isActive 
                  ? "text-primary scale-105" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {item.icon}
              <span className="mt-1 text-xs">{item.label}</span>
              {isActive && (
                <span className="absolute -top-2 h-1 w-8 rounded-full bg-primary animate-fade-in" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}