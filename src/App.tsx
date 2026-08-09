import { useState } from "react";
import "./App.css";

type Page = "home" | "dashboard" | "day";

export default function App() {
  const [page, setPage] = useState<Page>(() => {
    const path = window.location.pathname;

    if (path === "/dashboard") return "dashboard";
    if (path === "/day/12") return "day";
    return "home";
  });

  const [submitted, setSubmitted] = useState(false);

  const go = (p: Page) => {
    const path =
      p === "home" ? "/" : p === "dashboard" ? "/dashboard" : "/day/12";

    window.history.pushState({}, "", path);
    setPage(p);
    window.scrollTo(0, 0);
  };

  if (page === "home") {
    return <Landing go={go} />;
  }

  if (page === "dashboard") {
    return <Dashboard go={go} />;
  }

  return (
    <ChallengeDay
      go={go}
      submitted={submitted}
      setSubmitted={setSubmitted}
    />
  );
}

/* ================= LANDING ================= */

function Landing({ go }: { go: (p: Page) => void }) {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <span className="logo-mark">A</span>
          <span>ABTalks</span>
        </div>

        <button className="header-btn" onClick={() => go("dashboard")}>
          Start Challenge
        </button>
      </header>

      <main>
        <section className="hero">
          <div className="eyebrow">60 DAY CODING CHALLENGE</div>

          <h1>
            Build every day.
            <br />
            <span>Become impossible to ignore.</span>
          </h1>

          <p className="hero-text">
            Turn 60 days of consistent coding into real projects, public proof
            of work, and a stronger developer profile.
          </p>

          <button className="primary-btn big" onClick={() => go("dashboard")}>
            Start the Challenge →
          </button>

          <p className="small-note">
            No complicated setup. Just build, prove and repeat.
          </p>

          <div className="stats">
            <Stat number="60" label="Days" />
            <Stat number="60+" label="Builds" />
            <Stat number="2" label="Proofs / Day" />
          </div>
        </section>

        <section className="section">
          <div className="section-label">WHY ABTALKS?</div>

          <h2>Small actions. Big progress.</h2>

          <div className="feature-grid">
            <Feature
              icon="💻"
              title="Build something"
              text="Complete one practical coding task every day."
            />

            <Feature
              icon="🚀"
              title="Show your work"
              text="Push your progress to GitHub and build a public portfolio."
            />

            <Feature
              icon="📣"
              title="Share your journey"
              text="Share your learning publicly and become visible to recruiters."
            />
          </div>
        </section>

        <section className="section how-section">
          <div className="section-label">HOW IT WORKS</div>

          <h2>Build. Prove. Repeat.</h2>

          <div className="steps">
            <Step day="01" title="Choose your track" />
            <Step day="02" title="Build something" />
            <Step day="03" title="Push your work" />
            <Step day="04" title="Share your progress" />
            <Step day="05" title="Repeat" />
          </div>
        </section>

        <section className="quote-card">
          <div className="quote-icon">✦</div>

          <h2>Your consistency becomes your portfolio.</h2>

          <p>
            60 days from now, you won't just have learned more. You'll have
            proof.
          </p>
        </section>

        <section className="final-cta">
          <div className="section-label">YOUR NEXT 60 DAYS</div>

          <h2>Ready to build?</h2>

          <p>One day. One build. One step closer.</p>

          <button className="primary-btn" onClick={() => go("dashboard")}>
            Start My Journey →
          </button>
        </section>
      </main>

      <footer>
        <div className="logo">
          <span className="logo-mark">A</span>
          ABTalks
        </div>

        <p>Build. Prove. Repeat.</p>
      </footer>
    </div>
  );
}

/* ================= DASHBOARD ================= */

function Dashboard({ go }: { go: (p: Page) => void }) {
  const completedDays = Array.from({ length: 11 }, (_, i) => i + 1);

  return (
    <div className="app">
      <header className="dashboard-header">
        <button className="back-btn" onClick={() => go("home")}>
          ←
        </button>

        <div className="logo">
          <span className="logo-mark">A</span>
          ABTalks
        </div>

        <div className="avatar">S</div>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <div>
            <div className="section-label">YOUR JOURNEY</div>
            <h1>
              Hey Sweta <span>👋</span>
            </h1>
            <p>Keep the momentum going.</p>
          </div>
        </section>

        <section className="streak-card">
          <div>
            <div className="fire">🔥</div>
            <div className="card-label">CURRENT STREAK</div>
            <div className="streak-number">11 days</div>
            <div className="best">Personal best: 18 days</div>
          </div>

          <div className="streak-ring">
            <span>11</span>
            <small>DAY</small>
          </div>
        </section>

        <section className="progress-card">
          <div className="row-between">
            <div>
              <div className="card-label">YOUR 60-DAY JOURNEY</div>
              <h2>Day 12 / 60</h2>
            </div>

            <strong>18%</strong>
          </div>

          <div className="progress">
            <div className="progress-fill" style={{ width: "18%" }} />
          </div>

          <p>48 challenges left. Keep building.</p>
        </section>

        <section className="mission-card">
          <div className="mission-top">
            <span className="day-badge">DAY 12</span>
            <span className="difficulty">INTERMEDIATE</span>
          </div>

          <h2>Build a REST API</h2>

          <p>
            Create a simple REST API that allows users to create and retrieve
            tasks.
          </p>

          <div className="mission-meta">
            <span>⚡ FastAPI</span>
            <span>⏱ 60 min</span>
          </div>

          <button className="primary-btn full" onClick={() => go("day")}>
            Start Today's Mission →
          </button>
        </section>

        <section className="rescue-card">
          <div className="rescue-icon">⚡</div>

          <div>
            <h3>Streak Rescue</h3>
            <p>
              Missed a day? Your progress is safe. Complete today's challenge
              and keep moving forward.
            </p>
          </div>
        </section>

        <section className="section-small">
          <div className="row-between">
            <div>
              <div className="section-label">MILESTONES</div>
              <h2>Achievements</h2>
            </div>

            <span className="muted">3 / 4 unlocked</span>
          </div>

          <div className="achievements">
            <Achievement icon="🔥" title="7 Day Streak" unlocked />
            <Achievement icon="💻" title="10 Builds" unlocked />
            <Achievement icon="🚀" title="First Deploy" unlocked />
            <Achievement icon="🏆" title="30 Day Streak" />
          </div>
        </section>

        <section className="section-small">
          <div className="section-label">CHALLENGE TRACKER</div>

          <h2>Your 60 days</h2>

          <div className="day-grid">
            {completedDays.map((day) => (
              <div className="challenge-day completed" key={day}>
                ✓
              </div>
            ))}

            <div className="challenge-day current">12</div>

            {Array.from({ length: 48 }, (_, i) => (
              <div className="challenge-day upcoming" key={i + 13}>
                {i + 13}
              </div>
            ))}
          </div>

          <div className="legend">
            <span>
              <i className="legend-complete" /> Completed
            </span>

            <span>
              <i className="legend-current" /> Today
            </span>

            <span>
              <i className="legend-upcoming" /> Upcoming
            </span>
          </div>
        </section>
      </main>

      <nav className="bottom-nav">
        <button className="active">
          <span>⌂</span>
          Home
        </button>

        <button>
          <span>🔥</span>
          Streak
        </button>

        <button>
          <span>🏆</span>
          Wins
        </button>

        <button>
          <span>●</span>
          Profile
        </button>
      </nav>
    </div>
  );
}

/* ================= DAY PAGE ================= */

function ChallengeDay({
  go,
  submitted,
  setSubmitted,
}: {
  go: (p: Page) => void;
  submitted: boolean;
  setSubmitted: (value: boolean) => void;
}) {
  const [repo, setRepo] = useState("");
  const [commit, setCommit] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [live, setLive] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!repo || !commit || !linkedin || !live) {
      setError("Please add all four proof links before submitting.");
      return;
    }

    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="success-page">
        <div className="success-card">
          <div className="success-icon">✓</div>

          <div className="section-label">CHALLENGE COMPLETE</div>

          <h1>Day 12 complete! 🎉</h1>

          <p>
            Your proof of work has been submitted successfully.
          </p>

          <div className="success-stats">
            <div>
              <strong>12</strong>
              <span>day streak</span>
            </div>

            <div>
              <strong>20%</strong>
              <span>challenge progress</span>
            </div>
          </div>

          <div className="tomorrow">
            <span>🌅</span>
            <div>
              <strong>Tomorrow's challenge unlocks next.</strong>
              <p>Keep your momentum going.</p>
            </div>
          </div>

          <button className="primary-btn full" onClick={() => go("dashboard")}>
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="dashboard-header">
        <button className="back-btn" onClick={() => go("dashboard")}>
          ←
        </button>

        <div className="logo">
          <span className="logo-mark">A</span>
          ABTalks
        </div>

        <div className="avatar">12</div>
      </header>

      <main className="day-page">
        <button className="text-back" onClick={() => go("dashboard")}>
          ← Back to Dashboard
        </button>

        <div className="mission-top">
          <span className="day-badge">DAY 12</span>
          <span className="difficulty">INTERMEDIATE</span>
        </div>

        <h1>Build a REST API</h1>

        <p className="lead">
          Create a simple REST API that allows users to create and retrieve
          tasks.
        </p>

        <div className="mission-meta large">
          <span>⚡ FastAPI</span>
          <span>⏱ 60 min</span>
        </div>

        <section className="mission-detail">
          <div className="section-label">YOUR MISSION</div>

          <h2>Build a Task Management API</h2>

          <p>
            Create a small backend API where users can create and retrieve
            tasks. Focus on clean endpoints, readable code and useful API
            responses.
          </p>

          <h3>Requirements</h3>

          <ul className="requirements">
            <li>✓ Create GET /tasks endpoint</li>
            <li>✓ Create POST /tasks endpoint</li>
            <li>✓ Return clean JSON responses</li>
            <li>✓ Deploy your API</li>
          </ul>

          <div className="suggestion">
            <strong>Suggested stack</strong>
            <span>Python + FastAPI</span>
          </div>

          <div className="suggestion">
            <strong>Estimated time</strong>
            <span>60 minutes</span>
          </div>
        </section>

        <section className="submission">
          <div className="section-label">PROOF OF WORK</div>

          <h2>Show what you built.</h2>

          <p>
            Add your project links below. This is your proof that today's
            challenge is complete.
          </p>

          <Input
            label="GitHub Repository"
            placeholder="https://github.com/username/project"
            value={repo}
            setValue={setRepo}
          />

          <Input
            label="GitHub Commit"
            placeholder="https://github.com/username/project/commit/..."
            value={commit}
            setValue={setCommit}
          />

          <Input
            label="LinkedIn Post"
            placeholder="https://linkedin.com/posts/..."
            value={linkedin}
            setValue={setLinkedin}
          />

          <Input
            label="Live Deployment"
            placeholder="https://your-project.vercel.app"
            value={live}
            setValue={setLive}
          />

          {error && <div className="error">{error}</div>}

          <button className="primary-btn full submit-btn" onClick={submit}>
            ✓ Submit Challenge
          </button>
        </section>
      </main>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div className="stat">
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function Feature({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <div className="feature">
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function Step({ day, title }: { day: string; title: string }) {
  return (
    <div className="step">
      <span>{day}</span>
      <strong>{title}</strong>
    </div>
  );
}

function Achievement({
  icon,
  title,
  unlocked = false,
}: {
  icon: string;
  title: string;
  unlocked?: boolean;
}) {
  return (
    <div className={`achievement ${unlocked ? "unlocked" : "locked"}`}>
      <div>{icon}</div>
      <span>{title}</span>
      {!unlocked && <small>🔒</small>}
    </div>
  );
}

function Input({
  label,
  placeholder,
  value,
  setValue,
}: {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
}) {
  return (
    <label className="input-group">
      <span>{label}</span>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </label>
  );
}