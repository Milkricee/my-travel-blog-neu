import client from "./contentfulClient";
import { ContentfulEntry } from "./entry";

export async function getContent(entryId: string): Promise<ContentfulEntry | null> {
  try {
    const entry = await client.getEntry(entryId);
    return entry.fields as unknown as ContentfulEntry; // Typisiere die Rückgabe als ContentfulEntry
  } catch (error) {
    console.error("Fehler beim Abrufen des Inhalts:", error);
    return null; // Bei Fehler null zurückgeben
  }
}
