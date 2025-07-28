export default function AlertTable({ alerts }: { alerts: any[] }) {
  const getStatus = (niveau: number) => {
    if (niveau >= 90) return "danger";
    if (niveau >= 70) return "warning";
    return "normal";
  };

  const statusColors = {
    danger: "text-red-600 font-bold",
    warning: "text-yellow-600 font-semibold",
    normal: "text-green-600",
  };

  return (
    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <thead>
        <tr className="bg-gray-100 text-left">
          <th className="px-4 py-2">Site</th>
          <th className="px-4 py-2">Niveau</th>
          <th className="px-4 py-2">Message</th>
          <th className="px-4 py-2">Téléphone</th>
          <th className="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {alerts.map((alert, index) => {
          const status = getStatus(alert.niveau);
          return (
            <tr key={index} className="border-t">
              <td className="px-4 py-2">{alert.site}</td>
              <td className={`px-4 py-2 ${statusColors[status]}`}>{alert.niveau}</td>
              <td className="px-4 py-2">{alert.message}</td>
              <td className="px-4 py-2">{alert.phoneNumber}</td>
              <td className="px-4 py-2">{new Date(alert.timestamp).toLocaleString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
