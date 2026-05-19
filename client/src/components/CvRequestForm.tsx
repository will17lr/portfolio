import { useState } from "react";

export default function CvRequestForm() {
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);
    setStatus("");

    const formData = new FormData(event.currentTarget);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      jobTitle: formData.get("jobTitle"),
      recruitment: formData.get("recruitment"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      consent: formData.get("consent") === "on",
    };

    try {
      const response = await fetch(
        "https://TON-SITE-NETLIFY.netlify.app/.netlify/functions/request-cv",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setStatus(data.error || "Une erreur est survenue.");
        return;
      }

      setStatus(data.message);
      event.currentTarget.reset();
    } catch {
      setStatus("Impossible d’envoyer la demande pour le moment.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">
          Nom
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium">
          Entreprise
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="jobTitle" className="block text-sm font-medium">
          Poste occupé
        </label>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          required
          placeholder="Exemple : Chargé de recrutement, RH, CEO..."
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="recruitment" className="block text-sm font-medium">
          Recrutement en cours
        </label>
        <input
          id="recruitment"
          name="recruitment"
          type="text"
          required
          placeholder="Exemple : Développeur web junior, alternance, stage..."
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">
          Email professionnel
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">
          Téléphone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Exemple : 06 36 42 30 00"
          className="mt-1 w-full rounded-md border px-3 py-2"
        />
      </div>

      <label className="flex gap-2 text-sm">
        <input name="consent" type="checkbox" required />
        <span>
          J’accepte que mes informations soient utilisées uniquement pour
          recevoir le CV demandé et permettre une prise de contact
          professionnelle.
        </span>
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="rounded-md bg-blue-700 px-4 py-2 text-white disabled:opacity-60"
      >
        {isLoading ? "Envoi en cours..." : "Recevoir mon CV"}
      </button>

      {status && <p className="text-sm">{status}</p>}
    </form>
  );
}
