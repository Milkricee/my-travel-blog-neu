"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/contentfull/getContent";
import { ContentfulEntry } from "@/contentfull/entry.d";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";

export default function Kolumbien() {
  const [content, setContent] = useState<ContentfulEntry | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getContent("4OQDws9kHqqXuA0Tc5PFMX"); // Verwende die Entry ID
      setContent(data);
    }
    fetchData();
  }, []);

  if (!content) {
    return <p>Lade Inhalte...</p>; // Ladeanzeige während des Abrufs
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4">{content.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        Veröffentlicht am {new Date(content.publishedDate).toLocaleDateString()}
      </p>

      {/* Rich-Text-Blöcke rendern */}
      {[
        content.content1,
        content.content2,
        content.content3,
        content.content4,
        content.content5,
      ]
        .filter(Boolean) // Entferne nicht vorhandene Felder
        .map((richText, index) => (
          <div key={index} className="prose mb-6">
            {richText &&
              documentToReactComponents(richText as unknown as Document)}
          </div>
        ))}

      {/* Fotos in Galerie rendern */}
      {content.fotos && (
        <div className="grid grid-cols-2 gap-4 mt-6">
          {content.fotos.map((foto, index) => (
            <Image
              key={index}
              src={`https:${foto.fields.file.url}`}
              alt={foto.fields.title}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          ))}
        </div>
      )}
    </article>
  );
}
