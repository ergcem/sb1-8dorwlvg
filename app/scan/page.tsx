"use client";

import { useState } from "react";
import { QrCode, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ScanPage() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center pb-20">
      <div className="w-full max-w-md px-4 py-8">
        <div className="flex items-center justify-center space-x-2 mb-8">
          <QrCode className="h-6 w-6 text-primary" />
          <h1 className="text-2xl font-bold">Scan to Earn</h1>
        </div>

        <div className="bg-card rounded-xl border p-8 mb-8 flex flex-col items-center">
          <div className="w-64 h-64 bg-black rounded-lg mb-6 flex items-center justify-center">
            {showCamera ? (
              <div className="text-white text-center">
                <p>Camera View</p>
                <p className="text-sm text-gray-400">Position QR code in frame</p>
              </div>
            ) : (
              <QrCode className="h-32 w-32 text-white" />
            )}
          </div>
          
          <Button
            size="lg"
            className="w-full"
            onClick={() => setShowCamera(!showCamera)}
          >
            <Camera className="mr-2 h-5 w-5" />
            {showCamera ? "Close Camera" : "Open Camera"}
          </Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">How to Earn Points</h2>
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium">1. Make a Purchase</h3>
            <p className="text-sm text-muted-foreground">
              Show this QR code to the cashier when making a purchase
            </p>
          </div>
          <div className="bg-card rounded-lg border p-4">
            <h3 className="font-medium">2. Scan Receipt</h3>
            <p className="text-sm text-muted-foreground">
              Use the camera to scan the QR code on your receipt
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}