import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ansatz from "@/components/Ansatz";
import Offers from "@/components/Offers";
import FuerWen from "@/components/FuerWen";
import FemAiLab from "@/components/FemAiLab";
import Community from "@/components/Community";
import About from "@/components/About";
import Referenzen from "@/components/Referenzen";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const schemaOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "[kside]//openlabs",
  "url": "https://kside.de",
  "email": "info@kside.de",
  "founder": {
    "@type": "Person",
    "name": "Karin Siepmann",
    "jobTitle": "Gründerin",
    "knowsAbout": ["KI-Bildung", "Erwachsenenbildung", "Digitale Teilhabe", "Erasmus+"]
  },
  "description": "KI-Workshops, Lernlabore und 1:1 Coaching für Einzelpersonen, Organisationen und Einrichtungen, die KI praktisch verstehen und anwenden wollen."
};

const schemaFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Für wen sind die Angebote geeignet?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Die Workshops, Lernlabore und Coachings richten sich an Erwachsene ohne Tech-Hintergrund — Einzelpersonen, die KI im Alltag nutzen möchten, sowie Teams und Einrichtungen aus Bildung, Sozialwirtschaft oder kommunalen Organisationen. Technisches Vorwissen ist nicht erforderlich."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist der Unterschied zwischen einem Workshop und dem Open Learning Lab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ein Workshop hat ein festes Thema und eine klare Struktur — ideal für Organisationen, die ihr Team gezielt zu einem KI-Thema schulen möchten. Das Open Learning Lab ist ein offenes Format: keine Agenda, kein Frontalunterricht — stattdessen kollaboratives Erkunden und gemeinsames Ausprobieren in der Gruppe."
      }
    },
    {
      "@type": "Question",
      "name": "Was bringt mir das Personal AI Coaching?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Im 1:1 Coaching finden wir gemeinsam heraus, welche KI-Tools wirklich zu deinem Alltag passen. Nach dem Coaching kannst du sie eigenständig einsetzen. Es beginnt mit einem kostenlosen 30-minütigen Orientierungsgespräch."
      }
    },
    {
      "@type": "Question",
      "name": "Wie starte ich?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Schreib eine kurze E-Mail an info@kside.de und beschreibe, was dich beschäftigt oder was du dir vorstellst. Wir klären gemeinsam, welches Format zu dir oder deiner Organisation passt."
      }
    },
    {
      "@type": "Question",
      "name": "Was ist das FemAiLab?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Das FemAiLab ist ein wöchentliches offenes Lernlabor in Wiesbaden — speziell für Frauen, die KI in einem geschützten Rahmen erkunden möchten. Es findet montags statt, ist kostenlos zugänglich und folgt dem World-Café-Prinzip."
      }
    }
  ]
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />
      <Nav />
      <Hero />
      <Ansatz />
      <Offers />
      <FuerWen />
      <FemAiLab />
      <Community />
      <About />
      <Referenzen />
      <FAQ />
      <Footer />
    </main>
  );
}
