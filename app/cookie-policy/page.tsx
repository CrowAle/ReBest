// app/cookie-policy/page.tsx
export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
      <p className="mb-4">
        Questo sito utilizza cookie per migliorare l'esperienza dell'utente. Di seguito trovi tutte le informazioni sui cookie che utilizziamo e su come gestirli.
      </p>

      <h2 className="text-2xl font-bold mb-2">Cosa sono i cookie?</h2>
      <p className="mb-4">
        I cookie sono piccoli file di testo che i siti web salvano sul tuo dispositivo quando li visiti. Sono ampiamente utilizzati per far funzionare i siti web o migliorarne l'efficienza, oltre a fornire informazioni ai proprietari del sito.
      </p>

      <h2 className="text-2xl font-bold mb-2">Come utilizziamo i cookie?</h2>
      <p className="mb-4">
        Utilizziamo i cookie per:
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Autenticazione: per mantenere l'accesso degli utenti al sito.</li>
        <li>Preferenze: per memorizzare le preferenze dell'utente.</li>
        <li>Analisi: per raccogliere dati anonimi sull'uso del sito.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-2">Come gestire i cookie</h2>
      <p className="mb-4">
        Puoi gestire o disabilitare i cookie attraverso le impostazioni del tuo browser. Tuttavia, disabilitare i cookie potrebbe limitare alcune funzionalità del sito.
      </p>

      <h2 className="text-2xl font-bold mb-2">Cookie di Terze Parti</h2>
      <p className="mb-4">
        Utilizziamo servizi di terze parti (es. Supabase) che potrebbero impostare cookie per funzionalità come l'autenticazione. Questi cookie sono gestiti dalle rispettive terze parti e non abbiamo controllo diretto su di essi.
      </p>

      <h2 className="text-2xl font-bold mb-2">Contatti</h2>
      <p className="mb-4">
        Per ulteriori informazioni sulla nostra cookie policy, puoi contattarci all'indirizzo email: info@ilmiositoimmobiliare.it.
      </p>
    </div>
  );
}

