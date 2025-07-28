import AlertTable from "../components/AlertTable";

async function getAlerts() {
  const res = await fetch("http://localhost:3000/api/alerts", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const alerts = await getAlerts();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tableau de bord des alertes</h1>
      <AlertTable alerts={alerts} />
    </main>
  );
}
