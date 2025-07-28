import "./globals.css";

export const metadata = {
  title: "Dashboard Alerte",
  description: "Tableau de bord des alertes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
