/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current: string;
  source?: string;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type MilestoneItem = {
  _id: string;
  _type: "milestoneItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  time: string;
  milestones: Array<string>;
};

export type FaqItem = {
  _id: string;
  _type: "faqItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  question: string;
  answer: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type DeveloperPage = {
  _id: string;
  _type: "developerPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  language?: string;
  pageTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  milestoneTitle: string;
  milestones: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "milestoneItem";
  }>;
  developerLinks: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "developerLink";
  }>;
};

export type DeveloperLink = {
  _id: string;
  _type: "developerLink";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  linkTitle: string;
  linkLogo: string;
  link: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type CommunityPage = {
  _id: string;
  _type: "communityPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  language?: string;
  pageTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  socials: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "socialItem";
  }>;
  assetsTitle: string;
  brandAssets: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "assetItem";
  }>;
};

export type AssetItem = {
  _id: string;
  _type: "assetItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  type: string;
  assetUrls: Array<string>;
};

export type AboutPage = {
  _id: string;
  _type: "aboutPage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  language?: string;
  pageTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  faqTitle: string;
  faqs: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "faqItem";
  }>;
};

export type Menu = {
  _id: string;
  _type: "menu";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  language?: string;
  logo: string;
  buttonText: string;
  buttonLink: string;
  menuItems: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "menuItem";
  }>;
  socialItems: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "socialItem";
  }>;
};

export type SocialItem = {
  _id: string;
  _type: "socialItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  name: string;
  logo: string;
  description: string;
  link: string;
};

export type MenuItem = {
  _id: string;
  _type: "menuItem";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  menuTitle: string;
  external?: boolean;
  menuLink: string;
};

export type Homepage = {
  _id: string;
  _type: "homepage";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  language: string;
  sections: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "hero";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "blogs";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "marketCap";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "supports";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "partners";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "traders";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "unit";
  } | {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "youtube";
  }>;
};

export type Blogs = {
  _id: string;
  _type: "blogs";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type Traders = {
  _id: string;
  _type: "traders";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  image: string;
};

export type Youtube = {
  _id: string;
  _type: "youtube";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  videoTitle: string;
  videoUrl: string;
};

export type Unit = {
  _id: string;
  _type: "unit";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  spline: string;
};

export type Partners = {
  _id: string;
  _type: "partners";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  partners: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "partner";
  }>;
};

export type Partner = {
  _id: string;
  _type: "partner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name: string;
  logo: string;
};

export type Supports = {
  _id: string;
  _type: "supports";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type MarketCap = {
  _id: string;
  _type: "marketCap";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  unitCapTitle: string;
  unitCap: string;
  usdCapTitle: string;
  usdCap: string;
};

export type Hero = {
  _id: string;
  _type: "hero";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  sectionTitle: string;
  description: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  ctaText: string;
  ctaLink: string;
  image: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

