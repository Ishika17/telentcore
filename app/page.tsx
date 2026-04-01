"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const stats = [
  { value: "2,100+", label: "Job Descriptions" },
  { value: "3,200+", label: "Candidates" },
  { value: "84%", label: "Match Accuracy" },
  { value: "< 2s", label: "Ranked Results" },
];

const features = [
  {
    icon: "⚡",
    title: "Instant Match Engine",
    desc: "Skill-weighted scoring ranks your entire talent pool against any JD in real time.",
  },
  {
    icon: "🎯",
    title: "Precision Filtering",
    desc: "Slice by experience, skills, and seniority. Every filter updates the pool instantly.",
  },
  {
    icon: "🔗",
    title: "One-click Outreach",
    desc: "Initiate contact with top candidates directly from their profile. No tab-switching.",
  },
  {
    icon: "📊",
    title: "Application Tracking",
    desc: "Full history of every application, status, and match score — always in context.",
  },
];

const roles = [
  "Frontend Engineer",
  "Data Scientist",
  "DevOps Specialist",
  "UI/UX Designer",
  "AI & ML Engineer",
  "Site Reliability Engineer",
  "Full Stack Engineer",
  "Backend Developer",
  "Mobile Developer",
];

export default function HomePage() {
  const [activeRole, setActiveRole] = useState(0);
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        background: "#080B10",
        color: "#E8EDF5",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300&family=DM+Serif+Display:ital@0;1&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .hero-word.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .stat-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.03);
          border-radius: 16px;
          padding: 28px 32px;
          backdrop-filter: blur(10px);
          transition: border-color 0.3s, background 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(96, 165, 250, 0.3);
          background: rgba(96, 165, 250, 0.05);
        }
        .feature-card {
          border: 1px solid rgba(255,255,255,0.06);
          background: rgba(255,255,255,0.02);
          border-radius: 20px;
          padding: 32px;
          transition: border-color 0.3s, transform 0.3s;
        }
        .feature-card:hover {
          border-color: rgba(96, 165, 250, 0.25);
          transform: translateY(-4px);
        }
        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #2563EB;
          color: white;
          padding: 16px 36px;
          border-radius: 12px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          letter-spacing: -0.01em;
        }
        .cta-btn:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(37,99,235,0.35);
        }
        .ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #94A3B8;
          padding: 16px 28px;
          border-radius: 12px;
          font-weight: 500;
          font-size: 15px;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          transition: color 0.2s, border-color 0.2s;
        }
        .ghost-btn:hover {
          color: #E8EDF5;
          border-color: rgba(255,255,255,0.25);
        }
        .role-pill {
          display: inline-block;
          padding: 4px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.02em;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(37,99,235,0.3);
          color: #93C5FD;
          transition: all 0.4s ease;
        }
        .noise-bg {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 128px;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nav-item { animation: fadeUp 0.5s ease both; }
        .nav-item:nth-child(1) { animation-delay: 0.1s; }
        .nav-item:nth-child(2) { animation-delay: 0.15s; }
        .nav-item:nth-child(3) { animation-delay: 0.2s; }
      `}</style>

      {/* Noise texture */}
      <div className="noise-bg" />

      {/* Background orbs */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: 600,
            height: 600,
            background: "rgba(37,99,235,0.12)",
            top: -200,
            right: -100,
          }}
        />
        <div
          className="glow-orb"
          style={{
            width: 400,
            height: 400,
            background: "rgba(99,102,241,0.08)",
            bottom: 100,
            left: -100,
          }}
        />
      </div>

      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backdropFilter: "blur(20px)",
          background: "rgba(8,11,16,0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 32px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                width: 28,
                height: 28,
                background: "#2563EB",
                borderRadius: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 18,
                letterSpacing: "-0.02em",
              }}
            >
              TalentCore
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <span
              className="nav-item"
              style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}
            >
              Platform
            </span>
            <span
              className="nav-item"
              style={{ fontSize: 13, color: "#64748B", fontWeight: 500 }}
            >
              Candidates
            </span>
            <Link
              href="/dashboard"
              className="nav-item cta-btn"
              style={{ padding: "8px 20px", fontSize: 13 }}
            >
              Open Dashboard →
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section
        ref={heroRef}
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "120px 32px 80px",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 16px",
            borderRadius: 999,
            border: "1px solid rgba(37,99,235,0.3)",
            background: "rgba(37,99,235,0.08)",
            marginBottom: 48,
            animation: "fadeUp 0.6s ease both",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#22C55E",
              display: "inline-block",
            }}
          />
          <span
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#93C5FD",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Live · 3,200+ Profiles Indexed
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(48px, 8vw, 92px)",
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 32,
          }}
        >
          {["Find", "the", "right", "talent,"].map((word, i) => (
            <span
              key={i}
              className={`hero-word${visible ? " visible" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s`, marginRight: "0.25em" }}
            >
              {word}
            </span>
          ))}
          <br />
          {["not", "the", "closest", "résumé."].map((word, i) => (
            <span
              key={i}
              className={`hero-word${visible ? " visible" : ""}`}
              style={{
                transitionDelay: `${(i + 4) * 0.1}s`,
                marginRight: "0.25em",
                fontStyle: i === 3 ? "italic" : "normal",
                color: i === 3 ? "#60A5FA" : "inherit",
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Rotating role pill */}
        <div
          style={{
            marginBottom: 20,
            height: 32,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span className="role-pill">{roles[activeRole]}</span>
        </div>

        <p
          style={{
            fontSize: 18,
            color: "#64748B",
            maxWidth: 520,
            margin: "0 auto 48px",
            lineHeight: 1.7,
            fontWeight: 300,
            animation: "fadeUp 0.8s 0.5s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          TalentCore matches job descriptions against your entire candidate pool
          using skill-weighted scoring — ranked in milliseconds.
        </p>

        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            animation: "fadeUp 0.8s 0.7s ease both",
            opacity: 0,
            animationFillMode: "forwards",
          }}
        >
          <Link href="/dashboard" className="cta-btn">
            Open Dashboard →
          </Link>
          <Link href="/candidates" className="ghost-btn">
            Browse Candidates
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 40,
                  letterSpacing: "-0.03em",
                  color: "#F1F5F9",
                  marginBottom: 6,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#475569",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOCK DASHBOARD PREVIEW */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px" }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: 24,
            overflow: "hidden",
            background: "rgba(255,255,255,0.02)",
          }}
        >
          {/* Mock window bar */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              padding: "12px 20px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#EF4444",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#F59E0B",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#22C55E",
                opacity: 0.6,
              }}
            />
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 11,
                color: "#334155",
              }}
            >
              localhost:3000/dashboard
            </div>
          </div>

          {/* Mock dashboard content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "220px 1fr",
              minHeight: 360,
            }}
          >
            {/* Sidebar */}
            <div
              style={{
                borderRight: "1px solid rgba(255,255,255,0.05)",
                padding: 20,
                background: "rgba(0,0,0,0.2)",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: "#1E293B",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  marginBottom: 16,
                }}
              >
                Talent Dashboard
              </div>
              {["Dashboard", "Jobs", "Candidates"].map((item, i) => (
                <div
                  key={item}
                  style={{
                    padding: "8px 12px",
                    borderRadius: 8,
                    marginBottom: 4,
                    background:
                      i === 0 ? "rgba(37,99,235,0.15)" : "transparent",
                    color: i === 0 ? "#60A5FA" : "#334155",
                    fontSize: 13,
                    fontWeight: i === 0 ? 600 : 400,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>

            {/* Main content */}
            <div
              style={{
                padding: 24,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {/* JD List mock */}
              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#1E293B",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: 12,
                  }}
                >
                  Job Descriptions
                </div>
                {[
                  "AI & ML Engineer",
                  "Frontend Engineer",
                  "Data Scientist",
                  "DevOps Specialist",
                ].map((role, i) => (
                  <div
                    key={role}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background:
                        i === 0
                          ? "rgba(37,99,235,0.1)"
                          : "rgba(255,255,255,0.02)",
                      border: `1px solid ${i === 0 ? "rgba(37,99,235,0.3)" : "rgba(255,255,255,0.04)"}`,
                      marginBottom: 8,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: i === 0 ? "#60A5FA" : "#475569",
                      }}
                    >
                      {role}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: "#1E293B",
                        background: "rgba(255,255,255,0.05)",
                        padding: "2px 6px",
                        borderRadius: 4,
                      }}
                    >
                      11+Y
                    </span>
                  </div>
                ))}
              </div>

              {/* Candidate List mock */}
              <div>
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: "#1E293B",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    marginBottom: 12,
                  }}
                >
                  Talent Pool · 1,000 Profiles
                </div>
                {[
                  {
                    name: "Aurther Crenaka",
                    score: 84,
                    exp: "14 YRS",
                    color: "#22C55E",
                  },
                  {
                    name: "Sam Doe",
                    score: 84,
                    exp: "12 YRS",
                    color: "#22C55E",
                  },
                  {
                    name: "Sarah Chen",
                    score: 68,
                    exp: "13 YRS",
                    color: "#3B82F6",
                  },
                ].map((c) => (
                  <div
                    key={c.name}
                    style={{
                      padding: "10px 12px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.04)",
                      marginBottom: 8,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#475569",
                        }}
                      >
                        {c.name}
                      </div>
                      <div
                        style={{ fontSize: 9, color: "#1E293B", marginTop: 2 }}
                      >
                        {c.exp} EXPERIENCE
                      </div>
                    </div>
                    <span
                      style={{
                        background: c.color,
                        color: "white",
                        fontSize: 10,
                        fontWeight: 800,
                        padding: "3px 8px",
                        borderRadius: 6,
                      }}
                    >
                      {c.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 100px" }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(32px, 5vw, 52px)",
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Built for speed.
            <br />
            <span style={{ fontStyle: "italic", color: "#60A5FA" }}>
              Designed for accuracy.
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#475569", fontWeight: 300 }}>
            Every feature exists to get the right candidate in front of the
            right job, faster.
          </p>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', serif",
                  fontSize: 22,
                  letterSpacing: "-0.02em",
                  marginBottom: 10,
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  color: "#475569",
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px 120px" }}
      >
        <div
          style={{
            border: "1px solid rgba(37,99,235,0.2)",
            borderRadius: 28,
            padding: "80px 48px",
            textAlign: "center",
            background:
              "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(99,102,241,0.05) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            className="glow-orb"
            style={{
              width: 400,
              height: 400,
              background: "rgba(37,99,235,0.1)",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              letterSpacing: "-0.03em",
              marginBottom: 20,
              position: "relative",
            }}
          >
            Your next hire
            <br />
            <span style={{ fontStyle: "italic", color: "#60A5FA" }}>
              is already in the pool.
            </span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#475569",
              marginBottom: 40,
              fontWeight: 300,
              position: "relative",
            }}
          >
            Stop searching. Start matching.
          </p>
          <Link
            href="/dashboard"
            className="cta-btn"
            style={{ position: "relative" }}
          >
            Open the Dashboard →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: "#2563EB",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 10,
            }}
          >
            ⚡
          </div>
          <span
            style={{ fontFamily: "'DM Serif Display', serif", fontSize: 15 }}
          >
            TalentCore
          </span>
        </div>
        <p style={{ fontSize: 12, color: "#1E293B" }}>
          Matching talent to opportunity at scale.
        </p>
      </footer>
    </main>
  );
}
