import { createFileRoute } from "@tanstack/react-router";
import { DetectiveApp } from "@/components/detective/DetectiveApp";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <DetectiveApp />;
}
