import {
  useChartActions,
  useSearchActions
} from "@/components/chat/actions";
import { Charts } from "@/components/dashboard/layout/charts";
import { PinnedMetrics } from "@/components/dashboard/layout/metrics";
import { cn } from "@/lib/utils";
import { useAgent } from "@copilotkit/react-core/v2";

export function MainLayout({ className }: { className?: string }) {
  const {agent} = useAgent({
    agentId: "my_agent",
  });
  const state = agent.state;
  const setState = agent.setState;
  // Setup tool rendering and front-end tools
  useChartActions({ state, setState });
  useSearchActions();

  return (
    <div className={cn("min-h-screen bg-background text-foreground", className)}>
      <div className="max-w-6xl mx-auto p-4 grid gap-4">
        <PinnedMetrics state={state} setState={setState} />
        <Charts state={state} setState={setState} />
      </div>
    </div>
  );
}