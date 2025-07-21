export interface Task {
  status: string;
  description: string;
  priority: string;
  lastUpdated: string;
}

export interface AgentInsightsData {
  lastUpdated: string;
  tasks: Task[];
}

const AgentInsightsService = {
  fetchAgentInsights: async (): Promise<AgentInsightsData> => {
    // Simulate an API call with sample data
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          lastUpdated: "10:30 AM",
          tasks: [
            {
              status: "Task Completed",
              description:
                "The KPRs have been calculated and updated in the widgets",
              priority: "High",
              lastUpdated: "8:30 AM",
            },
            {
              status: "Pending",
              description: "Database has been deadlocked",
              priority: "Critical",
              lastUpdated: "2:20 AM",
            },
          ],
        });
      }, 1000); // Simulate network delay
    });
  },
};

export default AgentInsightsService;
