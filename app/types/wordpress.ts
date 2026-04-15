export type WPRenderedText = {
  rendered: string;
};

export type WPFeaturedMedia = {
  source_url: string;
};

export type WPPost = {
  id: number;
  date: string;
  link: string;
  slug: string;
  title: WPRenderedText;
  excerpt: WPRenderedText;
  _embedded?: {
    "wp:featuredmedia"?: WPFeaturedMedia[];
  };
};
