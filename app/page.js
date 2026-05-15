'use client';
import { useState } from 'react';
import { questions } from './lib/questions';

// ─── Hilfsfunktion: Zweistufige Gruppierung ───────────────────────────────
// Ergebnis: { 'Alte Prüfungen': { 'Gleichungen': [...], 'Terme': [...] }, 'Neue...': {...} }
function buildTree(subject) {
  const filtered = questions.filter(q => q.subject === subject);
  const tree = {};
  filtered.forEach(q => {
    const g = q.group || 'Sonstiges';
    const t = q.topic || 'Allgemein';
    if (!tree[g]) tree[g] = {};
    if (!tree[g][t]) tree[g][t] = [];
    tree[g][t].push(q);
  });
  return tree;
}

// ─── SIDEBAR ─────────────────────────────────────────────────────────────
function Sidebar({ subject, selectedId, onSelect, onBack }) {
  const tree = buildTree(subject);

  // Welche Gruppen und Unterthemen sind offen?
  const [openGroups, setOpenGroups] = useState(() => {
    const s = {};
    Object.keys(tree).forEach(g => { s[g] = true; });
    return s;
  });
  const [openTopics, setOpenTopics] = useState({});

  function toggleGroup(g) {
    setOpenGroups(p => ({ ...p, [g]: !p[g] }));
  }
  function toggleTopic(key) {
    setOpenTopics(p => ({ ...p, [key]: !p[key] }));
  }
  function isTopicOpen(g, t) {
    const key = g + '||' + t;
    return key in openTopics ? openTopics[key] : true;
  }

  return (
    <aside style={{
      width: '270px', minWidth: '270px',
      background: '#f8f7ff',
      borderRight: '1px solid #e5e3f0',
      display: 'flex', flexDirection: 'column',
      height: '100vh', overflowY: 'auto',
    }}>
      {/* Header */}
      <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid #e5e3f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '8px',
            background: '#534AB7', display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '17px',
          }}>
            {subject === 'Mathe' ? '📐' : '📝'}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1a1a2e' }}>{subject}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>
              {questions.filter(q => q.subject === subject).length} Aufgaben
            </p>
          </div>
        </div>
      </div>

      {/* Zweistufige Navigation */}
      <nav style={{ flex: 1, padding: '8px 0' }}>
        {Object.entries(tree).map(([groupName, topics]) => (
          <div key={groupName}>

            {/* ── Ebene 1: Gruppe (Alte / Neue) ── */}
            <button
              onClick={() => toggleGroup(groupName)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 16px',
                background: 'none', border: 'none', cursor: 'pointer',
                color: '#534AB7', fontSize: '11px', fontWeight: '800',
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>{openGroups[groupName] ? '📂' : '📁'}</span>
                {groupName}
              </span>
              <span style={{ fontSize: '9px', opacity: 0.6 }}>
                {openGroups[groupName] ? '▲' : '▼'}
              </span>
            </button>

            {openGroups[groupName] && Object.entries(topics).map(([topicName, items]) => {
              const topicKey = groupName + '||' + topicName;
              const open = isTopicOpen(groupName, topicName);
              return (
                <div key={topicKey}>

                  {/* ── Ebene 2: Thema (Gleichungen, Terme, …) ── */}
                  <button
                    onClick={() => toggleTopic(topicKey)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '8px 16px 8px 28px',
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: '#444', fontSize: '13px', fontWeight: '600',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>{open ? '▾' : '▸'}</span>
                      {topicName}
                    </span>
                    <span style={{
                      fontSize: '10px', background: '#e5e3f0', color: '#534AB7',
                      borderRadius: '10px', padding: '1px 7px', fontWeight: '700',
                    }}>
                      {items.length}
                    </span>
                  </button>

                  {/* ── Ebene 3: Einzelne Aufgaben ── */}
                  {open && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 6px 0' }}>
                      {items
                        .sort((a, b) => b.year - a.year)
                        .map(q => (
                          <li key={q.id}>
                            <button
                              onClick={() => onSelect(q.id)}
                              style={{
                                width: '100%', textAlign: 'left',
                                padding: '8px 16px 8px 40px',
                                background: selectedId === q.id ? '#ede9fc' : 'none',
                                border: 'none',
                                borderLeft: selectedId === q.id
                                  ? '3px solid #534AB7'
                                  : '3px solid transparent',
                                cursor: 'pointer',
                                color: selectedId === q.id ? '#3730a3' : '#555',
                                fontSize: '13px', lineHeight: '1.4',
                                transition: 'all 0.12s',
                              }}
                              onMouseEnter={e => {
                                if (selectedId !== q.id) e.currentTarget.style.background = '#f0eeff';
                              }}
                              onMouseLeave={e => {
                                if (selectedId !== q.id) e.currentTarget.style.background = 'none';
                              }}
                            >
                              <span style={{ display: 'block', fontSize: '11px', color: '#aaa', marginBottom: '1px' }}>
                                {q.year} · {q.exam}
                              </span>
                              {q.topic}
                            </button>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </nav>

      {/* Zurück-Button */}
      <div style={{ padding: '14px 16px', borderTop: '1px solid #e5e3f0' }}>
        <button
          onClick={onBack}
          style={{
            width: '100%', padding: '9px',
            background: 'none', border: '1px solid #d0cce8',
            borderRadius: '8px', cursor: 'pointer',
            color: '#777', fontSize: '13px',
          }}
        >
          ← Zurück zur Fächerauswahl
        </button>
      </div>
    </aside>
  );
}

// ─── AUFGABEN-DETAIL ──────────────────────────────────────────────────────
function QuestionDisplay({ question, subject }) {
  const [showSolution, setShowSolution] = useState(false);
  const [prevId, setPrevId] = useState(null);

  if (question && question.id !== prevId) {
    setShowSolution(false);
    setPrevId(question.id);
  }

  if (!question) {
    return (
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center',
        justifyContent: 'center', padding: '40px',
      }}>
        <div style={{ textAlign: 'center', maxWidth: '380px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>
            {subject === 'Mathe' ? '📐' : '📝'}
          </div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>
            Willkommen im Bereich {subject}!
          </h2>
          <p style={{ color: '#999', margin: 0, lineHeight: '1.6', fontSize: '15px' }}>
            Wähle links eine Aufgabe aus, um zu beginnen.
          </p>
        </div>
      </div>
    );
  }

  const s = question.solution;

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#fff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>

        {/* Badges */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {[
            [question.year, '#ede9fc', '#3730a3'],
            [question.exam, '#ede9fc', '#3730a3'],
            [question.group, question.group === 'Alte Prüfungen' ? '#fef3c7' : '#dcfce7',
                             question.group === 'Alte Prüfungen' ? '#92400e' : '#166534'],
          ].map(([label, bg, color]) => (
            <span key={label} style={{
              background: bg, color, padding: '4px 12px',
              borderRadius: '20px', fontSize: '12px', fontWeight: '600',
            }}>{label}</span>
          ))}
        </div>

        {/* Titel */}
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 20px' }}>
          {question.topic}
        </h1>

        {/* Fragetext */}
        <div style={{
          background: '#f9f8ff', border: '1px solid #e5e3f0',
          borderRadius: '12px', padding: '22px', marginBottom: '22px',
        }}>
          <p style={{
            margin: 0, fontSize: '15px', lineHeight: '1.8',
            color: '#333', whiteSpace: 'pre-wrap', fontFamily: 'inherit',
          }}>
            {question.questionText}
          </p>
        </div>

        {/* Lösungs-Button */}
        <button
          onClick={() => setShowSolution(v => !v)}
          style={{
            padding: '12px 28px',
            background: showSolution ? '#f0eeff' : '#534AB7',
            color: showSolution ? '#534AB7' : '#fff',
            border: showSolution ? '1px solid #c4b5fd' : 'none',
            borderRadius: '10px', fontSize: '15px', fontWeight: '600',
            cursor: 'pointer', transition: 'all 0.2s',
          }}
        >
          {showSolution ? '🙈 Lösungsweg ausblenden' : '💡 Lösungsweg anzeigen'}
        </button>

        {/* Lösungsweg */}
        {showSolution && (
          <div style={{ marginTop: '28px' }}>

            {/* Intro */}
            <div style={{
              background: '#fffbeb', border: '1px solid #fcd34d',
              borderRadius: '10px', padding: '14px 18px', marginBottom: '20px',
              fontSize: '14px', color: '#92400e', lineHeight: '1.7',
            }}>
              {s.intro}
            </div>

            {/* Schritte */}
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '28px', width: '28px', height: '28px', borderRadius: '50%',
                  background: '#534AB7', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: '700', marginTop: '2px',
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px', fontWeight: '600', fontSize: '14px', color: '#1a1a2e' }}>
                    {step.title}
                  </p>
                  <div style={{
                    background: '#f9f8ff', border: '1px solid #e5e3f0',
                    borderRadius: '8px', padding: '11px 15px',
                    fontSize: '14px', color: '#333', lineHeight: '1.7',
                    whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, monospace',
                  }}>
                    {step.content}
                  </div>
                </div>
              </div>
            ))}

            {/* Pro-Tipp */}
            <div style={{
              background: '#f0fdf4', border: '1px solid #86efac',
              borderRadius: '10px', padding: '14px 18px', margin: '20px 0',
              fontSize: '14px', color: '#166534', lineHeight: '1.7',
              whiteSpace: 'pre-wrap',
            }}>
              {s.tip}
            </div>

            {/* YouTube */}
            {s.youtube && (
              <div style={{ marginTop: '22px' }}>
                <p style={{
                  fontSize: '12px', fontWeight: '700', color: '#aaa',
                  textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px',
                }}>
                  📺 Erklärvideo zum Thema
                </p>
                <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '16/9' }}>
                  <iframe
                    width="100%" height="100%"
                    src={s.youtube}
                    title="Erklärvideo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ display: 'block' }}
                  />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

// ─── LANDING PAGE ─────────────────────────────────────────────────────────
function LandingPage({ onSelect }) {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: '#fafafe', padding: '40px 20px',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '540px' }}>
        <div style={{ fontSize: '52px', marginBottom: '14px' }}>🎓</div>
        <h1 style={{
          fontSize: '34px', fontWeight: '800', color: '#1a1a2e',
          margin: '0 0 10px', lineHeight: '1.2',
        }}>
          Willkommen in der Lern-App!
        </h1>
        <p style={{ fontSize: '16px', color: '#777', margin: '0 0 44px', lineHeight: '1.6' }}>
          Übe mit echten Kanti-Aufnahmeprüfungen.<br />
          Wähle ein Fach aus, um zu beginnen.
        </p>
        <div style={{ display: 'flex', gap: '18px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Mathe', emoji: '📐', bg: '#534AB7', desc: 'Gleichungen · Terme · Wahrscheinlichkeit' },
            { label: 'Deutsch', emoji: '📝', bg: '#0f766e', desc: 'Texte · Grammatik · Aufsatz' },
          ].map(({ label, emoji, bg, desc }) => (
            <button
              key={label}
              onClick={() => onSelect(label)}
              style={{
                padding: '28px 36px', background: bg, color: '#fff',
                border: 'none', borderRadius: '18px', cursor: 'pointer',
                textAlign: 'left', width: '210px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
              }}
            >
              <div style={{ fontSize: '34px', marginBottom: '10px' }}>{emoji}</div>
              <div style={{ fontSize: '20px', fontWeight: '700', marginBottom: '6px' }}>{label}</div>
              <div style={{ fontSize: '12px', opacity: 0.75, lineHeight: '1.5' }}>{desc}</div>
            </button>
          ))}
        </div>
        <p style={{ marginTop: '44px', fontSize: '12px', color: '#ccc' }}>
          Kanti-Aufnahmeprüfung Schweiz · PMS Kreuzlingen
        </p>
      </div>
    </main>
  );
}

// ─── HAUPT-EXPORT ─────────────────────────────────────────────────────────
export default function Home() {
  const [subject, setSubject] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  if (!subject) {
    return <LandingPage onSelect={s => { setSubject(s); setSelectedId(null); }} />;
  }

  const selectedQuestion = questions.find(q => q.id === selectedId) || null;

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      <Sidebar
        subject={subject}
        selectedId={selectedId}
        onSelect={setSelectedId}
        onBack={() => { setSubject(null); setSelectedId(null); }}
      />
      <QuestionDisplay question={selectedQuestion} subject={subject} />
    </div>
  );
}