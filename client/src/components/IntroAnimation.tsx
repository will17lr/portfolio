import { useEffect, useState } from "react";
import "./IntroAnimation.css";

export default function IntroAnimation() {
  const [visible, setVisible] = useState(() => {
    return sessionStorage.getItem("intro-seen") !== "true";
  });

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      sessionStorage.setItem("intro-seen", "true");
      setVisible(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  const closeIntro = () => {
    sessionStorage.setItem("intro-seen", "true");
    setVisible(false);
  };

  return (
    <div
      className="intro-screen"
      role="status"
      aria-label="Ouverture du portfolio"
    >
      <button className="intro-skip" onClick={closeIntro}>
        Passer
      </button>

      <div className="intro-content">
        <div className="intro-code">&lt;/&gt;</div>

        <img
          src={`${import.meta.env.BASE_URL}logo-w.png`}
          alt="Logo Will Vogler"
          className="intro-logo"
        />

        <div className="intro-line"></div>

        <h1 className="intro-name">Will Vogler</h1>
        <p className="intro-role">Développeur Web</p>
      </div>
    </div>
  );
}
