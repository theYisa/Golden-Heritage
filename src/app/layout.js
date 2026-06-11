// src/app/layout.js

export const metadata = {
  title: 'Golden Heritage International Model School — Bissau',
  description: 'A modern, values-based school in Bissau, Guinea-Bissau offering Crèche, Nursery, Primary, English Language School and Computer School.',
  authors: [{ name: 'Grace' }],
  openGraph: {
    title: 'Golden Heritage International Model School',
    description: 'Where bright minds and kind hearts grow together. Bissau, Guinea-Bissau.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Renderiza diretamente os filhos. O Header e o Footer agora são gerenciados dentro de cada página pública */}
        {children}
      </body>
    </html>
  );
}