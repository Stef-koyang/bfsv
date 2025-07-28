import { NextResponse } from "next/server";

// Données simulées (remplace par les données réelles venant d’ESP32 si besoin)
const alerts = [
  {
    site: "Site C",
    siteId: 5,
    phoneNumber: "+243 897 654 321",
    niveau: 60,
    message: "Danger détecté",
    timestamp: "2025-07-26T22:29:37.423Z",
  },
  {
    site: "Site A",
    siteId: 2,
    phoneNumber: "+243 894 123 111",
    niveau: 90,
    message: "Niveau critique",
    timestamp: "2025-07-27T10:15:22.000Z",
  },
];

export async function GET() {
  return NextResponse.json(alerts);
}
