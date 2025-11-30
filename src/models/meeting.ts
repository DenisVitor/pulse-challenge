export interface Meeting {
  id: string;
  title: string;
  start: string;  // ISO string: "2025-11-28T09:00:00"
  end: string;    // ISO string: "2025-11-28T10:30:00"
  attendees: string[];
}
