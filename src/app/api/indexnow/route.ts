import { NextResponse } from "next/server";

const INDEXNOW_API = "https://www.bing.com/indexnow";

export async function POST(req: Request) {
  try {
    const { url } = await req.json();

    if (!url) {
      return NextResponse.json({ error: "URL fehlt" }, { status: 400 });
    }

    const key = "a02263f8ced74dd199c712db2ad5751b";

    const pingUrl = `${INDEXNOW_API}?key=${key}&url=${encodeURIComponent(url)}`;

    const response = await fetch(pingUrl, { method: "GET" });

    if (!response.ok) {
      throw new Error(`IndexNow-Fehler: ${response.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
