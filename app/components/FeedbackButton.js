'use client';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function FeedbackButton({ questionId, label, placeholder }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const send = async () => {
    if (!message.trim()) return;
    setError(false);
    const { error: dbError } = await supabase.from('feedback').insert({
      question_id: questionId || null,
      message: message,
      page: typeof window !== 'undefined' ? window.location.pathname : null,
    });
    if (dbError) {
      console.error('Feedback-Fehler:', dbError);
      setError(true);
      return;
    }
    setSent(true);
    setMessage('');
    setTimeout(() => {
      setSent(false);
      setOpen(false);
    }, 2500);
  };

  return (
    <div style={{ marginTop: 20 }}>
      {!open ? (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: 'none',
            border: '1px solid #ddd',
            borderRadius: 8,
            padding: '6px 14px',
            fontSize: 13,
            color: '#666',
            cursor: 'pointer',
          }}
        >
          {label || '💬 Feedback / Fehler melden'}
        </button>
      ) : sent ? (
        <p style={{ color: '#16a34a', fontSize: 14, fontWeight: 600 }}>
          ✅ Danke für Dein Feedback!
        </p>
      ) : (
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder || 'Was ist dir aufgefallen? Fehler, Idee, Wunsch...'}
            rows={3}
            style={{
              width: '100%',
              maxWidth: 450,
              padding: 10,
              borderRadius: 8,
              border: '1px solid #ddd',
              fontSize: 14,
              fontFamily: 'inherit',
              resize: 'vertical',
            }}
          />
          {error && (
            <p style={{ color: '#dc2626', fontSize: 13 }}>
              ⚠️ Senden fehlgeschlagen — versuch es nochmal.
            </p>
          )}
          <div style={{ marginTop: 8, display: 'flex', gap: 10 }}>
            <button
              onClick={send}
              style={{
                background: '#534AB7',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                padding: '8px 18px',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Senden
            </button>
            <button
              onClick={() => {
                setOpen(false);
                setError(false);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#999',
                fontSize: 14,
                cursor: 'pointer',
              }}
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}
    </div>
  );
}