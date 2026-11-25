import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Lightweight, dependency-free SEO Component.
 * Updates document title, meta description, Open Graph tags, and canonical link
 * reactively on route changes.
 */
export default function SEO({
  title,
  description,
  canonicalPath,
  ogType = 'website',
  ogImage = '/assets/logo/logo-full-navy.png'
}) {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title 
      ? `${title} | Shaurya Investments` 
      : 'Shaurya Investments | Your Financial Goals. Our Commitment.';
    document.title = formattedTitle;

    // 2. Helper to set or create meta tags
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard & OG Meta
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
      setMetaTag('name', 'twitter:description', description);
    }

    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('property', 'og:type', ogType);

    if (ogImage) {
      setMetaTag('property', 'og:image', ogImage);
      setMetaTag('name', 'twitter:image', ogImage);
    }

    // 4. Update Canonical Link
    const path = canonicalPath || location.pathname;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    // Using relative path or window origin
    canonical.setAttribute('href', `${window.location.origin}${path}`);

  }, [title, description, canonicalPath, ogType, ogImage, location.pathname]);

  return null;
}
