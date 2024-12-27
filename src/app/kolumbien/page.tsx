"use client";

import { useEffect, useState } from "react";
import { getContent } from "@/contentfull/getContent";
import { ContentfulEntry } from "@/contentfull/entry.d";
import Image from 'next/image';

export default function Kolumbien() {
  const [content, setContent] = useState<ContentfulEntry | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getContent("6x0z9X9P2vD6T31H3clDnD"); // Verwende die Entry ID
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
      <p className="text-sm text-gray-500 mb-2">
        Veröffentlicht am {new Date(content.publishedDate).toLocaleDateString()}
      </p>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
      {content.featuredImage && (
 <Image
 src={`https:${content.featuredImage.fields.file.url}`} // Protokoll hinzufügen
 alt={content.featuredImage.fields.title}
 width={800} // specify appropriate width
 height={600} // specify appropriate height
 className="w-full mt-6 rounded-lg"
/>

      )}
    </article>
  );
}
