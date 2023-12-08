
export interface MetaData {
  title?: string;
  ignoreTitleTemplate?: boolean;

  canonical?: string;

  robots?: MetaDataRobots;

  description?: string;

  openGraph?: MetaDataOpenGraph;
  twitter?: MetaDataTwitter;
}

export interface MetaDataRobots {
  index?: boolean;
  follow?: boolean;
}

export interface MetaDataImage {
  url: string;
  width?: number;
  height?: number;
}

export interface MetaDataOpenGraph {
  url?: string;
  siteName?: string;
  images?: Array<MetaDataImage>;
  locale?: string;
  type?: string;
}

export interface MetaDataTwitter {
  handle?: string;
  site?: string;
  cardType?: string;
}

export interface AnalyticsConfig {
  vendors: {
    googleAnalytics: {
      id?: string;
      partytown?: boolean;
    };
  };
}


export interface OpenGraphMedia {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
  type?: string;
  secureUrl?: string;
}

export interface OpenGraphProfile {
  firstName?: string;
  lastName?: string;
  username?: string;
  gender?: string;
}

export interface OpenGraphBook {
  authors?: ReadonlyArray<string>;
  isbn?: string;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;

  authors?: ReadonlyArray<string>;
  section?: string;
  tags?: ReadonlyArray<string>;
}

export interface OpenGraphVideo {
  actors?: ReadonlyArray<OpenGraphVideoActors>;
  directors?: ReadonlyArray<string>;
  writers?: ReadonlyArray<string>;
  duration?: number;
  releaseDate?: string;
  tags?: ReadonlyArray<string>;
  series?: string;
}

export interface OpenGraphVideoActors {
  profile: string;
  role?: string;
}

export interface OpenGraph {
  url?: string;
  type?: string;
  title?: string;
  description?: string;
  images?: ReadonlyArray<OpenGraphMedia>;
  videos?: ReadonlyArray<OpenGraphMedia>;
  defaultImageHeight?: number;
  defaultImageWidth?: number;
  locale?: string;
  site_name?: string;
  profile?: OpenGraphProfile;
  book?: OpenGraphBook;
  article?: OpenGraphArticle;
  video?: OpenGraphVideo;
}
