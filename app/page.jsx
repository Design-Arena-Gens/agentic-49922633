"use client";

import { useMemo, useState } from "react";

const storyline = `HOOK (0-3s): "If your past self could send you one message... would you listen?"\n\nSCENE 1 (3-10s): A student misses a bus as the driver shuts the door. Phone buzzes with a notification from an unknown app: "From: You (One Year Ago)."\n\nSCENE 2 (10-18s): Message reads: "Don't take the 7:40. Wait for the 7:45. And say yes to the stranger in the blue jacket." The student laughs it off?too weird.\n\nSCENE 3 (18-25s): The 7:40 bus speeds by splashing water. Student steps back, annoyed?then sees the 7:40 bus break down at the next intersection. Heart skips.\n\nSCENE 4 (25-33s): The 7:45 arrives. A stranger in a blue jacket sits nearby, clutching a folder. The app buzzes again: "Ask about the folder."\n\nSCENE 5 (33-42s): Student hesitates, then asks. The stranger smiles, opens the folder?an internship flyer for a dream company. One spot left. Deadline: today.\n\nSCENE 6 (42-53s): They talk. The stranger turns out to be the recruiter headed to a campus event. "Come by. Say I sent you." Another buzz: "You?ll want the last question."\n\nCLOSING BEAT (53-60s): At the event, the student asks the final question. The recruiter nods, impressed. Phone buzzes one last time: "Thank you. I almost missed this last year. ?You."\n\nOUTRO CTA: "If your future self sent this, would you follow it? Save this and shoot your version."`;

export default function Page() {
  const [copied, setCopied] = useState(false);

  const lines = useMemo(() => storyline.split("\n\n"), []);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(storyline);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = storyline;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  const downloadTxt = () => {
    const blob = new Blob([storyline], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'youtube-shorts-storyline.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="story">
      <div className="actions">
        <button className="primary" onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy Script'}</button>
        <button onClick={downloadTxt}>Download .txt</button>
      </div>

      <article className="script">
        {lines.map((block, i) => (
          <p key={i} className="block">{block}</p>
        ))}
      </article>

      <aside className="notes">
        <h2>Beat Sheet (Quick Guide)</h2>
        <ul>
          <li><strong>0-3s</strong>: Hook, big "what if" question</li>
          <li><strong>3-10s</strong>: Inciting incident (mysterious app)</li>
          <li><strong>10-25s</strong>: Suspicion and small proof</li>
          <li><strong>25-42s</strong>: Choice and reveal</li>
          <li><strong>42-53s</strong>: Stakes and path forward</li>
          <li><strong>53-60s</strong>: Payoff and memorable button</li>
        </ul>
      </aside>
    </section>
  );
}
