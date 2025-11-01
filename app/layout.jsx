import './globals.css';

export const metadata = {
  title: 'YouTube Shorts Storyline',
  description: 'Hook-first storyline ready to copy and shoot',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <header className="header">
            <h1>YouTube Shorts Storyline</h1>
            <p className="subtitle">Hook-first, 60-second script with beats</p>
          </header>
          {children}
          <footer className="footer">? {new Date().getFullYear()} Agentic Shorts</footer>
        </main>
      </body>
    </html>
  );
}
