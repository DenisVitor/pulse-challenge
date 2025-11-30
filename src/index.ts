import { PulseProactivityEngine } from './engine/pulseProactivityEngine';

const engine = new PulseProactivityEngine();

engine.addTask({ 
  id: '1', 
  title: 'Prepare Q4 report', 
  priority: 'high', 
  dueDate: '2025-11-28' 
});
engine.addTask({ 
  id: '2', 
  title: 'Review team feedback', 
  priority: 'medium', 
  dueDate: '2025-11-29' 
});
engine.addMeeting({ 
  id: 'm1', 
  title: 'Team sync', 
  start: '2025-11-28T09:00:00', 
  end: '2025-11-28T10:30:00', 
  attendees: ['user'] 
});
engine.addMeeting({ 
  id: 'm2', 
  title: 'Client call', 
  start: '2025-11-28T14:00:00', 
  end: '2025-11-28T15:00:00', 
  attendees: ['user', 'client'] 
});

console.log(engine.getDailyBriefing());
