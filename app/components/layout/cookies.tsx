'use client';
import CookieConsent from "react-cookie-consent";

 // Indica che questo è un Client Component



export default function CookieBanner() {
  return (
    <CookieConsent
    enableDeclineButton
  onDecline={() => {
    alert("nay!");
  }}
      location="bottom"
      buttonText="Accetto"
      declineButtonText="Rifiuto"
      cookieName="cookieConsent"
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={10}
    >
      Questo sito utilizza cookie per migliorare l'esperienza dell'utente.{" "}
      <a href="/cookie-policy" style={{ color: "#fff" }}>
        Scopri di più
      </a>
    </CookieConsent>
  ) ; 
}