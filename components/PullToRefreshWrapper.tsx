"use client";

import PullToRefresh from "react-pull-to-refresh";

interface PullToRefreshWrapperProps {
  onRefresh: () => Promise<boolean>;
  children: React.ReactNode;
}

export function PullToRefreshWrapper({ onRefresh, children }: PullToRefreshWrapperProps) {
  return (
    <PullToRefresh onRefresh={onRefresh}>
      {children}
    </PullToRefresh>
  );
}