export interface ContentfulEntry {
  title: string;
  publishedDate: string;
  content1?: string;
  content2?: string;
  content3?: string;
  content4?: string;
  content5?: string;
  fotos?: Array<{
    fields: {
      file: {
        url: string;
      };
      title: string;
    };
  }>;
}
