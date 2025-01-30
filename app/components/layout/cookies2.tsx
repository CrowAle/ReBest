'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true, // Cookie necessari sono sempre attivi
    measurement: false,
    marketing: false,
  });

  // Controlla se l'utente ha già fatto una scelta
  useEffect(() => {
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (!savedPreferences) {
      setShowBanner(true); // Mostra il banner solo se non ci sono preferenze salvate
    } else {
      setPreferences(JSON.parse(savedPreferences));
    }
  }, []);

  // Salva le preferenze e nasconde il banner
  const handleSave = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowBanner(false);
    applyCookiePreferences(preferences); // Applica le preferenze
  };

  // Rifiuta tutti i cookie non necessari
  const handleRejectAll = () => {
    const newPreferences = { necessary: true, measurement: false, marketing: false };
    localStorage.setItem('cookiePreferences', JSON.stringify(newPreferences));
    setShowBanner(false);
    applyCookiePreferences(newPreferences); // Applica le preferenze
  };

  // Applica le preferenze dei cookie
  const applyCookiePreferences = (prefs: {
    necessary: boolean;
    measurement: boolean;
    marketing: boolean;
  }) => {
    if (prefs.measurement) {
      // Attiva i cookie di misurazione (es. Google Analytics)
      console.log('Cookie di misurazione attivati');
    } else {
      // Disattiva i cookie di misurazione
      console.log('Cookie di misurazione disattivati');
    }

    if (prefs.marketing) {
      // Attiva i cookie di marketing
      console.log('Cookie di marketing attivati');
    } else {
      // Disattiva i cookie di marketing
      console.log('Cookie di marketing disattivati');
    }
  };

  if (!showBanner) return null;

  return (
    <div style={{ position: 'fixed', bottom: 0, background: '#2B373B', color: '#fff', padding: '20px', width: '100%', textAlign: 'center' }}>
      <p>
        Questo sito utilizza cookie per migliorare l'esperienza dell'utente.{" "}
        <a href="/cookie-policy" style={{ color: "#fff" }}>
          Scopri di più
        </a>
      </p>

      <div style={{ marginTop: '10px' }}>
        <label>
          <input
            type="checkbox"
            checked={preferences.necessary}
            disabled
          />
          Necessari
        </label>

        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={preferences.measurement}
            onChange={(e) => setPreferences({ ...preferences, measurement: e.target.checked })}
          />
          Misurazione
        </label>

        <label style={{ marginLeft: '20px' }}>
          <input
            type="checkbox"
            checked={preferences.marketing}
            onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
          />
          Marketing
        </label>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button
          onClick={handleSave}
          style={{ marginRight: '10px', padding: '5px 10px', background: '#4e993b', color: '#fff', border: 'none' }}
        >
          Salva e continua
        </button>
        <button
          onClick={handleRejectAll}
          style={{ padding: '5px 10px', background: '#ff4d4d', color: '#fff', border: 'none' }}
        >
          Rifiuta tutto
        </button>
      </div>
      <div> <a href="/privacy-policy" style={{ color: "#fff" }}>Privacy Policy</a></div>
      <div> <a href="/cookie-policy" style={{ color: "#fff" }}>Cookie Policy</a></div>
    </div>
  );
}