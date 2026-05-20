'use client';

import { useState, useEffect } from 'react';
import { questions } from './lib/questions';
import { facts } from './lib/facts';

function buildTree(subject, examType) {
  const filtered = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch';
    if (subject === 'Mathe Neu') return q.subject === 'Mathe' && q.exam === 'Neue Aufgabe';
    if (subject === 'Deutsch Neu') return q.subject === 'Deutsch' && q.group === 'Neue Übungsaufgaben';
    return false;
  });

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

function Sidebar({ subject, selectedId, onSelect, onBack }) {
  const tree = buildTree(subject);
  const [openGroups, setOpenGroups] = useState(() => {
    const s = {};
    Object.keys(tree).forEach(g => { s[g] = true; });
    return s;
  });
  const [openTopics, setOpenTopics] = useState({});

  function toggleGroup(g) { setOpenGroups(p => ({ ...p, [g]: !p[g] })); }
  function toggleTopic(key) { setOpenTopics(p => ({ ...p, [key]: !p[key] })); }

  function isTopicOpen(g, t) {
    const key = g + '||' + t;
    // HIER IST ÄNDERUNG 1: Standardmässig zugeklappt
    return key in openTopics ? openTopics[key] : false;
  }

  const subjectColors = {
    'Mathe ohne TR': '#534AB7',
    'Mathe mit TR': '#0f766e',
    'Deutsch': '#b45309',
    'Mathe Neu': '#534AB7',
    'Deutsch Neu': '#b45309',
  };
  const color = subjectColors[subject] || '#534AB7';

  const subjectEmojis = {
    'Mathe ohne TR': '📐',
    'Mathe mit TR': '🔢',
    'Deutsch': '📝',
    'Mathe Neu': '✨',
    'Deutsch Neu': '✨',
  };

  const totalCount = questions.filter(q => {
    if (subject === 'Mathe ohne TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR');
    if (subject === 'Mathe mit TR') return q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR');
    if (subject === 'Deutsch') return q.subject === 'Deutsch';
    return false;
  }).length;

  return (
    <aside style={{
      width: '270px', minWidth: '270px',
      background: '#f8f7ff',
      borderRight: '1px solid #e5e3f0',
      display: 'flex', flexDirection: 'column',
      height: '100vh', overflowY: 'auto',
    }}>
      <div style={{ padding: '20px 16px 14px', borderBottom: '1px solid #e5e3f0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '8px',
            background: color, display: 'flex', alignItems: 'center',
            justifyContent: 'center', fontSize: '17px',
          }}>
            {subjectEmojis[subject]}
          </div>
          <div>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: '#1a1a2e' }}>{subject}</p>
            <p style={{ margin: 0, fontSize: '11px', color: '#999' }}>{totalCount} Aufgaben · GMS 3</p>
          </div>
        </div>
      </div>
      <nav style={{ flex: 1, padding: '8px 0' }}>
        {Object.entries(tree).map(([groupName, topics]) => (
          <div key={groupName}>
            <button onClick={() => toggleGroup(groupName)} style={{
              width: '100%', display: 'flex', alignItems: 'center',
              justifyContent: 'space-between', padding: '10px 16px',
              background: 'none', border: 'none', cursor: 'pointer',
              color: color, fontSize: '11px', fontWeight: '800',
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontSize: '13px' }}>{openGroups[groupName] ? '📂' : '📁'}</span>
                {groupName}
              </span>
              <span style={{ fontSize: '9px', opacity: 0.6 }}>{openGroups[groupName] ? '▲' : '▼'}</span>
            </button>
            {openGroups[groupName] && Object.entries(topics).map(([topicName, items]) => {
              const topicKey = groupName + '||' + topicName;
              const open = isTopicOpen(groupName, topicName);
              return (
                <div key={topicKey}>
                  <button onClick={() => toggleTopic(topicKey)} style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: '8px 16px 8px 28px',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: '#444', fontSize: '13px', fontWeight: '600',
                  }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '12px', opacity: 0.5 }}>{open ? '▾' : '▸'}</span>
                      {topicName}
                    </span>
                    <span style={{
                      fontSize: '10px', background: '#e5e3f0', color: color,
                      borderRadius: '10px', padding: '1px 7px', fontWeight: '700',
                    }}>{items.length}</span>
                  </button>
                  {open && (
                    <ul style={{ listStyle: 'none', margin: 0, padding: '0 0 6px 0' }}>
                      {items.sort((a, b) => b.year - a.year).map(q => (
                        <li key={q.id}>
                          {/* HIER IST ÄNDERUNG 2: Sauberer Aufgaben-Titel */}
                          <button onClick={() => onSelect(q.id)} style={{
                            width: '100%', textAlign: 'left',
                            padding: '8px 16px 8px 40px',
                            background: selectedId === q.id ? '#ede9fc' : 'none',
                            border: 'none',
                            borderLeft: selectedId === q.id ? `3px solid ${color}` : '3px solid transparent',
                            cursor: 'pointer',
                            color: selectedId === q.id ? color : '#555',
                            fontSize: '13px', lineHeight: '1.4',
                            transition: 'all 0.12s',
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between'
                          }}
                            onMouseEnter={e => { if (selectedId !== q.id) e.currentTarget.style.background = '#f0eeff'; }}
                            onMouseLeave={e => { if (selectedId !== q.id) e.currentTarget.style.background = 'none'; }}
                          >
                            <span>
                              <span style={{ display: 'block', fontSize: '11px', color: '#aaa', marginBottom: '1px' }}>
                                {q.year}
                              </span>
                              {q.exam}
                            </span>
                            <span style={{ fontSize: '10px', color: '#aaa' }}>
                              #{q.id.split('_').pop()}
                            </span>
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
      <div style={{ padding: '14px 16px', borderTop: '1px solid #e5e3f0' }}>
        <button onClick={onBack} style={{
          width: '100%', padding: '9px',
          background: 'none', border: '1px solid #d0cce8',
          borderRadius: '8px', cursor: 'pointer',
          color: '#777', fontSize: '13px',
        }}>
          ← Zurück zur Übersicht
        </button>
      </div>
    </aside>
  );
}

function QuestionDisplay({ question, subject }) {
  const [showSolution, setShowSolution] = useState(false);
  const [prevId, setPrevId] = useState(null);
  if (question && question.id !== prevId) { setShowSolution(false); setPrevId(question.id); }

  const subjectColors = {
    'Mathe ohne TR': '#534AB7', 'Mathe mit TR': '#0f766e',
    'Deutsch': '#b45309', 'Mathe Neu': '#534AB7', 'Deutsch Neu': '#b45309',
  };
  const color = subjectColors[subject] || '#534AB7';

  if (!question) {
    const emojis = { 'Mathe ohne TR': '📐', 'Mathe mit TR': '🔢', 'Deutsch': '📝' };
    const tips = {
      'Mathe ohne TR': 'Kein Taschenrechner erlaubt – Kopfrechnen trainieren! 🧠',
      'Mathe mit TR': 'Taschenrechner erlaubt – aber den Rechenweg aufzeigen! ✏️',
      'Deutsch': 'Lies die Texte genau – Details sind entscheidend! 🔍',
    };
    return (
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
        <div style={{ textAlign: 'center', maxWidth: '400px' }}>
          <div style={{ fontSize: '52px', marginBottom: '16px' }}>{emojis[subject] || '📚'}</div>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 8px' }}>
            Bereit zum Üben? 💪
          </h2>
          <p style={{ color: '#999', margin: '0 0 20px', lineHeight: '1.6', fontSize: '15px' }}>
            Wähle links eine Aufgabe aus, um zu beginnen.
          </p>
          <div style={{
            background: '#f9f8ff', border: '1px solid #e5e3f0',
            borderRadius: '12px', padding: '16px', fontSize: '14px', color: '#666',
          }}>
            💡 {tips[subject] || 'Viel Erfolg!'}
          </div>
        </div>
      </div>
    );
  }

  const s = question.solution;
  const reactions = ['🔥 Hammer! Weiter so!', '⭐ Stark gemacht!', '🧠 Du bist ein Genie!', '💪 So geht das!', '🚀 Nichts kann dich stoppen!'];
  const reaction = reactions[Math.floor(Math.random() * reactions.length)];

  return (
    <main style={{ flex: 1, overflowY: 'auto', padding: '40px', background: '#fff' }}>
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        {/* ─── Badges ─── */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
          {[
            [question.year, '#ede9fc', color],
            [question.exam, '#ede9fc', color],
            [question.group === 'Alte Prüfungen' ? '📄 Alte Prüfung' : '✨ Neue Aufgabe',
            question.group === 'Alte Prüfungen' ? '#fef3c7' : '#dcfce7',
            question.group === 'Alte Prüfungen' ? '#92400e' : '#166534'],
          ].map(([label, bg, c]) => (
            <span key={label} style={{
              background: bg, color: c, padding: '4px 12px',
              borderRadius: '20px', fontSize: '12px', fontWeight: '600',
            }}>{label}</span>
          ))}
        </div>
        {/* ─── Titel ─── */}
        <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#1a1a2e', margin: '0 0 16px' }}>
          {question.topic}
        </h1>
        {/* ─── PDF Button (nur wenn pdfUrl vorhanden) ─── */}
        {question.pdfUrl && (
          <a
            href={question.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', marginBottom: '16px',
              background: '#fff7ed', border: '1px solid #fdba74',
              borderRadius: '10px', fontSize: '14px', fontWeight: '600',
              color: '#c2410c', textDecoration: 'none', cursor: 'pointer',
            }}
          >
            📄 Originale Prüfung öffnen
          </a>
        )}
        {/* ─── Fragetext ─── */}
        <div style={{
          background: '#f9f8ff', border: '1px solid #e5e3f0',
          borderRadius: '12px', padding: '22px', marginBottom: '16px',
        }}>
          {/* HIER IST ÄNDERUNG 3: Die Logik für die Unterstreichung */}
          <p style={{
            margin: 0, fontSize: '15px', lineHeight: '1.8',
            color: '#333', whiteSpace: 'pre-wrap', fontFamily: 'inherit',
          }} dangerouslySetInnerHTML={{ __html: question.questionText.replace(/__(.*?)__/g, '<u>$1</u>') }} />
        </div>
        {/* ─── Lösung Button ─── */}
        <div>
          <button onClick={() => setShowSolution(v => !v)} style={{
            padding: '12px 28px',
            background: showSolution ? '#f0eeff' : color,
            color: showSolution ? color : '#fff',
            border: showSolution ? `1px solid #c4b5fd` : 'none',
            borderRadius: '10px', fontSize: '15px', fontWeight: '600',
            cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {showSolution ? '🙈 Lösungsweg ausblenden' : '💡 Lösungsweg anzeigen'}
          </button>
        </div>
        {/* ─── Lösung ─── */}
        {showSolution && (
          <div style={{ marginTop: '28px' }}>
            <div style={{
              background: '#fffbeb', border: '1px solid #fcd34d',
              borderRadius: '10px', padding: '14px 18px', marginBottom: '8px',
              fontSize: '15px', fontWeight: '600', color: '#92400e',
            }}>
              {reaction}
            </div>
            <div style={{
              background: '#fffbeb', border: '1px solid #fcd34d',
              borderRadius: '10px', padding: '14px 18px', marginBottom: '20px',
              fontSize: '14px', color: '#92400e', lineHeight: '1.7',
            }}>{s.intro}</div>
            {s.steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', marginBottom: '14px', alignItems: 'flex-start' }}>
                <div style={{
                  minWidth: '28px', width: '28px', height: '28px', borderRadius: '50%',
                  background: color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '12px', fontWeight: '700', marginTop: '2px',
                }}>{i + 1}</div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: '0 0 5px', fontWeight: '600', fontSize: '14px', color: '#1a1a2e' }}>{step.title}</p>
                  <div style={{
                    background: '#f9f8ff', border: '1px solid #e5e3f0',
                    borderRadius: '8px', padding: '11px 15px',
                    fontSize: '14px', color: '#333', lineHeight: '1.7',
                    whiteSpace: 'pre-wrap', fontFamily: 'ui-monospace, monospace',
                  }}>{step.content}</div>
                </div>
              </div>
            ))}
            <div style={{
              background: '#f0fdf4', border: '1px solid #86efac',
              borderRadius: '10px', padding: '14px 18px', margin: '20px 0',
              fontSize: '14px', color: '#166534', lineHeight: '1.7', whiteSpace: 'pre-wrap',
            }}>{s.tip}</div>
            
            {/* HIER IST ÄNDERUNG 4: Der YouTube-Button */}
            {s.youtube && (
              <div style={{ marginTop: '22px' }}>
                <p style={{ fontSize: '12px', fontWeight: '700', color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>
                  📺 Erklärvideo zum Thema
                </p>
                <a
                  href={s.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 20px',
                    background: '#f0fdf4',
                    border: '1px solid #86efac',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#166534',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Video auf YouTube öffnen ↗
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

function LandingPage({ onSelect }) {
  const [fact, setFact] = useState(null);
  useEffect(() => { setFact(facts[Math.floor(Math.random() * facts.length)]); }, []);

  const matheOhneTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('ohne TR') && q.group === 'Alte Prüfungen').length;
  const matheMitTR = questions.filter(q => q.subject === 'Mathe' && q.exam && q.exam.includes('mit TR') && q.group === 'Alte Prüfungen').length;
  const deutsch = questions.filter(q => q.subject === 'Deutsch' && q.group === 'Alte Prüfungen').length;
  const neu = questions.filter(q => q.group === 'Neue Übungsaufgaben').length;

  return (
    <main style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'linear-gradient(135deg, #f8f7ff 0%, #fff 100%)',
      padding: '40px 20px', fontFamily: 'system-ui, sans-serif',
    }}>
      <div style={{ textAlign: 'center', maxWidth: '800px', width: '100%' }}>
        {/* Header */}
        <div style={{ fontSize: '52px', marginBottom: '12px' }}>🎓</div>
        <h1 style={{ fontSize: '36px', fontWeight: '800', color: '#1a1a2e', margin: '0 0 8px' }}>
          KantiPrep Thurgau
        </h1>
        <p style={{ fontSize: '16px', color: '#777', margin: '0 0 8px' }}>
          Echte Prüfungen · 2020–2025 · GMS 2 & GMS 3
        </p>
        {/* Mind-Blow des Tages */}
        <div style={{
          background: '#f9f8ff', border: '1px solid #e5e3f0',
          borderRadius: '16px', padding: '20px 24px', marginBottom: '40px',
          display: 'inline-block', textAlign: 'left', maxWidth: '90%',
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}>
          <p style={{ margin: 0, fontSize: '13px', fontWeight: '700', color: '#534AB7', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            🤯 Mind-Blow des Tages
          </p>
          <p style={{ margin: '8px 0 0 0', fontSize: '15px', color: '#333', fontWeight: '500', lineHeight: '1.6' }}>
            {fact ? fact.text : ""}
          </p>
        </div>
        {/* GMS 2 & GMS 3 Karten */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
          {/* GMS 2 */}
          <div style={{
            background: '#fff', border: '2px solid #e5e3f0',
            borderRadius: '20px', padding: '28px', textAlign: 'left', opacity: 0.6,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: '#e5e3f0', borderRadius: '10px', padding: '8px 16px',
                fontSize: '13px', fontWeight: '700', color: '#888',
              }}>GMS 2</div>
              <span style={{ fontSize: '13px', color: '#aaa' }}>2. Sekundarschule</span>
              <span style={{
                marginLeft: 'auto', background: '#f3f4f6', color: '#9ca3af',
                fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600',
              }}>🔒 Bald</span>
            </div>
            {[
              { emoji: '📝', label: 'Deutsch' },
              { emoji: '📐', label: 'Mathe ohne TR' },
              { emoji: '🔢', label: 'Mathe mit TR' },
            ].map(item => (
              <div key={item.label} style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '10px',
                background: '#e5e3f0', marginBottom: '8px', cursor: 'not-allowed',
              }}>
                <span style={{ fontSize: '18px' }}>{item.emoji}</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#aaa' }}>{item.label}</span>
                <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#bbb' }}>Bald verfügbar</span>
              </div>
            ))}
          </div>
          {/* GMS 3 */}
          <div style={{
            background: '#fff', border: '2px solid #534AB7',
            borderRadius: '20px', padding: '28px', textAlign: 'left',
            boxShadow: '0 4px 20px rgba(83,74,183,0.12)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                background: '#534AB7', borderRadius: '10px', padding: '8px 16px',
                fontSize: '13px', fontWeight: '700', color: '#fff',
              }}>GMS 3</div>
              <span style={{ fontSize: '13px', color: '#666' }}>3. Sekundarschule</span>
              <span style={{
                marginLeft: 'auto', background: '#dcfce7', color: '#166534',
                fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: '600',
              }}>✅ 2020–2025</span>
            </div>
            {[
              { emoji: '📝', label: 'Deutsch', key: 'Deutsch', count: deutsch, color: '#b45309', bg: '#fffbeb', border: '#fcd34d' },
              { emoji: '📐', label: 'Mathe ohne TR', key: 'Mathe ohne TR', count: matheOhneTR, color: '#534AB7', bg: '#f0eeff', border: '#c4b5fd' },
              { emoji: '🔢', label: 'Mathe mit TR', key: 'Mathe mit TR', count: matheMitTR, color: '#0f766e', bg: '#f0fdf4', border: '#86efac' },
            ].map(item => (
              <button key={item.label} onClick={() => onSelect(item.key)} style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '12px',
                padding: '12px 16px', borderRadius: '10px',
                background: item.bg, border: `1px solid ${item.border}`,
                marginBottom: '8px', cursor: 'pointer',
                transition: 'transform 0.15s, box-shadow 0.15s', textAlign: 'left',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateX(4px)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ fontSize: '18px' }}>{item.emoji}</span>
                <span style={{ fontSize: '14px', fontWeight: '600', color: item.color }}>{item.label}</span>
                <span style={{
                  marginLeft: 'auto', background: 'white', color: item.color,
                  fontSize: '11px', padding: '3px 10px', borderRadius: '20px',
                  fontWeight: '700', border: `1px solid ${item.border}`,
                }}>{item.count} Aufgaben</span>
              </button>
            ))}
          </div>
        </div>
        {/* Neue Aufgaben Banner */}
        <div style={{
          background: 'linear-gradient(135deg, #534AB7, #0f766e)',
          borderRadius: '16px', padding: '20px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px', marginBottom: '24px',
        }}>
          <div style={{ color: '#fff' }}>
            <p style={{ margin: 0, fontSize: '16px', fontWeight: '700' }}>✨ Neue Übungsaufgaben</p>
            <p style={{ margin: 0, fontSize: '13px', opacity: 0.8 }}>KI-generierte Aufgaben · Ähnlich wie echte Prüfungen</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => onSelect('Mathe Neu')} style={{
              padding: '8px 18px', background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px',
              color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            }}>📐 Mathe</button>
            <button onClick={() => onSelect('Deutsch Neu')} style={{
              padding: '8px 18px', background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.4)', borderRadius: '8px',
              color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
            }}>📝 Deutsch</button>
          </div>
        </div>
        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '24px' }}>
          {[
            { num: questions.filter(q => q.group === 'Alte Prüfungen').length, label: 'Echte Prüfungsaufgaben', emoji: '📄' },
            { num: '2020–2025', label: 'Jahrgänge verfügbar', emoji: '📅' },
            { num: neu, label: 'Neue Übungsaufgaben', emoji: '✨' },
          ].map(s => (
            <div key={s.label} style={{
              background: '#f9f8ff', border: '1px solid #e5e3f0',
              borderRadius: '12px', padding: '16px', textAlign: 'center',
            }}>
              <div style={{ fontSize: '20px', marginBottom: '4px' }}>{s.emoji}</div>
              <div style={{ fontSize: '22px', fontWeight: '800', color: '#534AB7' }}>{s.num}</div>
              <div style={{ fontSize: '11px', color: '#999' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <p style={{ fontSize: '12px', color: '#ccc' }}>
          Kanti-Aufnahmeprüfung Thurgau · PMS Kreuzlingen · GMS 2 & GMS 3
        </p>
      </div>
    </main>
  );
}

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
