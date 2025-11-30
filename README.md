# Pulse Proactivity Engine MVP

**TypeScript MVP prototype for Pulse AI interview task.** Analyzes Calendar events + Tasks to generate proactive insights (schedule gaps, conflicts, productivity tips).

## ✨ Features

- Detects free time gaps in your 8h workday
- Identifies high-priority task conflicts with meetings  
- Provides productivity recommendations
- Modular, extensible architecture [web:21][web:25]

## 📦 Requirements

- Node.js 16+
- npm/yarn

## 🚀 Quick Start

- Clone & install

```
npm install
```

- Build & run demo

```
npm run build
npm start
```

**Expected output:**
[SCHEDULE_GAP] You have 4 hours free today.
Action: Schedule high-priority tasks now.


## 🛠️ Development

- Run with TypeScript directly (dev mode)

```
npm run dev
```

## 📁 Project Structure

src/
├── models/ # TypeScript interfaces
├── engine/ # Core ProactivityEngine class
└── index.ts # Demo usage


## 🔗 Future Integration

Connect to Pulse AI via:
- Google Calendar API
- Todoist/Google Tasks API  
- Push notifications via Claire AI assistant [web:0][web:12]

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TS → JS |
| `npm start` | Run compiled demo |
| `npm run dev` | Run with ts-node |

**Zero runtime dependencies!** Pure TypeScript + Node.js [web:26].