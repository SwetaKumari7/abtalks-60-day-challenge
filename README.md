# ABTalks — 60-Day Coding Challenge

A mobile-first redesign of **ABTalks**, a 60-day coding challenge platform designed for Indian college students.

## 🎯 Project Overview

ABTalks helps students develop consistent coding habits by challenging them to build something every day for 60 days.

Each day, students are encouraged to:

- Complete a coding task
- Build a project or feature
- Submit a GitHub commit as proof of work
- Share their progress through a LinkedIn post
- Maintain a public learning streak

The goal of this redesign is to make the experience more motivating, clear, and easy to use, especially for students using the platform on mobile devices late at night after college.

## ✨ Key Features

### Landing Page

The landing page introduces the ABTalks challenge to a new student and communicates:

- What ABTalks is
- Why the 60-day challenge matters
- The benefits of consistent building
- Public proof of work
- A clear call-to-action to start the challenge

### Student Dashboard

The dashboard gives students a quick overview of their challenge.

It includes:

- 🔥 Current streak
- 📊 Challenge progress
- 🎯 Today's task
- 🏆 Achievements
- 📅 60-day challenge tracker
- ⚡ Streak rescue
- Overall completion percentage

### Technology Stack
-React
-TypeScript
-Vite
-CSS
-Mocked data

### Project structure
```text
abtalks-60-day-challenge/
│
├── public/
│
├── src/
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

### Challenge Day

The Challenge Day screen provides the complete experience for an individual challenge.

Students can:

- Read the day's task
- Understand what needs to be built
- View requirements
- Submit their GitHub repository
- Submit their GitHub commit
- Submit their LinkedIn post
- Submit their live deployment URL
- Complete the challenge

## 💡 Thoughtful UX Improvements

The redesign introduces several student-focused improvements.

### Streak Rescue

Missing a day can be discouraging.

The dashboard provides a **Streak Rescue** concept to help students recover from a missed challenge and continue their learning journey instead of abandoning the entire 60-day challenge.

### Progress Visibility

Students can immediately see:

- Current day
- Days completed
- Remaining days
- Completion percentage
- Current streak

This makes progress tangible and encourages students to continue.

### Proof-of-Work Focus

The Challenge Day screen treats GitHub and LinkedIn proof as part of the workflow rather than an afterthought.

Students can submit:

1. Repository
2. Commit
3. LinkedIn post
4. Live deployment

This reinforces the core ABTalks idea of **building in public**.

## 📱 Mobile-First Design

The interface is designed primarily for a **390px mobile viewport**, reflecting the hackathon requirement and the expected usage pattern of college students.

Desktop layouts are treated as a secondary responsive experience.

## 🧩 Real-World Edge Cases

The prototype considers the following situations:

### First Day

A student starting the challenge with no existing streak receives a clear starting experience rather than seeing an empty dashboard.

### Missed Day

The interface provides a recovery-oriented experience instead of making the student feel that the challenge is permanently lost.

### Empty Profile

The design uses mocked/default information so that the interface remains useful even when profile information is incomplete.

## 🗺️ Route Map

The application contains the following required routes:

```text
/
/dashboard
/day/12
