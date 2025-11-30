import { Task } from '../models/task';
import { Meeting } from '../models/meeting';
import { Insight, InsightType } from '../models/insight';

export class PulseProactivityEngine {
  private tasks: Task[] = [];
  private meetings: Meeting[] = [];

  addTask(task: Task): void {
    this.tasks.push(task);
  }

  addMeeting(meeting: Meeting): void {
    this.meetings.push(meeting);
  }

  generateInsights(): Insight[] {
    const insights: Insight[] = [];
    const today = new Date().toISOString().split('T')[0];
    const dayMeetings = this.meetings.filter(m => m.start.startsWith(today));
    
    // Insight 1: Schedule gaps
    let totalFreeMinutes = 8 * 60; // 8-hour workday
    dayMeetings.forEach(m => {
      const duration = (new Date(m.end).getTime() - new Date(m.start).getTime()) / 60000;
      totalFreeMinutes -= duration;
    });

    if (totalFreeMinutes > 30) {
      insights.push({
        type: 'schedule_gap',
        description: `You have ${Math.floor(totalFreeMinutes / 60)} hours free today.`,
        action: 'Schedule high-priority tasks now.',
        priority: 8
      });
    }

    // Insight 2: Task-calendar conflicts
    this.tasks.forEach(task => {
      if (new Date(task.dueDate).toISOString().split('T')[0] === today && task.priority === 'high') {
        const conflictingMeeting = dayMeetings.find(m => 
          new Date(task.dueDate).getTime() < new Date(m.end).getTime() &&
          new Date(task.dueDate).getTime() > new Date(m.start).getTime()
        );
        if (conflictingMeeting) {
          insights.push({
            type: 'task_calendar_conflict',
            description: `${task.title} due today conflicts with ${conflictingMeeting.title}`,
            action: 'Reschedule meeting or extend deadline.',
            priority: 9
          });
        }
      }
    });

    // Insight 3: Productivity tips
    const highPriorityTasks = this.tasks.filter(t => t.priority === 'high');
    if (highPriorityTasks.length > 3) {
      insights.push({
        type: 'productivity_tip',
        description: 'You have multiple high-priority tasks.',
        action: 'Batch similar tasks or delegate.',
        priority: 7
      });
    }

    return insights.sort((a, b) => b.priority - a.priority);
  }

  getDailyBriefing(): string {
    const insights = this.generateInsights();
    if (insights.length === 0) {
      return 'Great day ahead! No urgent actions needed.';
    }
    
    return `Daily Briefing by Pulse Proactivity Engine:\n` +
           insights.slice(0, 3).map((i, idx) => 
             `${idx+1}. [${i.type.toUpperCase()}] ${i.description}\n   Action: ${i.action}`
           ).join('\n');
  }
}
