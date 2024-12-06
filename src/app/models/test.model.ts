export interface TestStep {
    description: string;
    expected?: string;
    actual?: string;
}

export interface Test {
    id: string;
    jiraId: string;
    type: string;
    description: string;
    priority: string;
    component: string;
    steps: TestStep[];
}
  