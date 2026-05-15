export const metadata = { title: "KantiPrep – Lern-App" };

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}