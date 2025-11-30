export type InsightType = 'schedule_gap' | 'task_calendar_conflict' | 'productivity_tip';

export interface Insight {
  type: InsightType;
  description: string;
  action: string;
  priority: number;
}
