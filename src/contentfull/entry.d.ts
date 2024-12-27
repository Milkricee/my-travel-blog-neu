export interface ContentfulEntry {
    title: string;
    publishedDate: string;
    content: string;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
  }
  