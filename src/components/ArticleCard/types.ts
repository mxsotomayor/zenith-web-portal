export interface ArticleCardProps {
    image: string;
    title: string;
    subtitle: string;
    author?: {
      name: string;
      avatar: string;
    };
    date?: string;
    readingTime?: string;
    category?: string;
    excerpt?: string;
    slug: string;
  }