import { MetadataRoute } from "next";
import { serviceVerticals } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";
import { clusters } from "@/data/knowledgeCenter";
import { team } from "@/data/team";
import { blogRegistry } from "@/data/blogs/_registry";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://iprani.in";

  // 1. Static Pages
  const staticPages = [
    "",
    "about-us",
    "contact-us",
    "services",
    "industries",
    "case-studies",
    "blogs",
    "pricing",
    "faqs",
    "team",
    "careers",
    "knowledge-center",
    "privacy-policy",
    "terms",
  ].map((page) => ({
    url: page ? `${baseUrl}/${page}` : baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page === "" ? 1.0 : 0.8,
  }));

  // 2. Services Dynamic Pages
  const serviceUrls: { url: string; lastModified: Date; changeFrequency: "monthly"; priority: number }[] = [];
  serviceVerticals.forEach((vertical) => {
    serviceUrls.push({
      url: `${baseUrl}/services/${vertical.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
    vertical.hubs.forEach((hub) => {
      serviceUrls.push({
        url: `${baseUrl}/services/${vertical.slug}/${hub.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
      hub.subServices.forEach((subservice) => {
        serviceUrls.push({
          url: `${baseUrl}/services/${vertical.slug}/${hub.slug}/${subservice.slug}`,
          lastModified: new Date(),
          changeFrequency: "monthly",
          priority: 0.8,
        });
      });
    });
  });

  // 3. Industries Dynamic Pages
  const industryUrls = industries.map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // 4. Case Studies Dynamic Pages
  const caseStudyUrls = caseStudies.map((cs) => ({
    url: `${baseUrl}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // 5. Knowledge Center Dynamic Pages
  const knowledgeUrls: { url: string; lastModified: Date; changeFrequency: "monthly"; priority: number }[] = [];
  clusters.forEach((cluster) => {
    knowledgeUrls.push({
      url: `${baseUrl}/knowledge-center/${cluster.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    });
    cluster.articles.forEach((article) => {
      knowledgeUrls.push({
        url: `${baseUrl}/knowledge-center/${cluster.slug}/${article.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  // 6. Team Dynamic Pages
  const teamUrls = team.map((member) => ({
    url: `${baseUrl}/team/${member.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  // 7. Blog Categories and Articles
  // First, find unique categories
  const categories = Array.from(new Set(blogRegistry.map((b) => b.category)));
  const blogCategoryUrls = categories.map((cat) => ({
    url: `${baseUrl}/blogs/${cat}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Then add all blog articles (safely capped to prevent build time explosions, though 3,300+ is fine for Next.js)
  const blogUrls = blogRegistry.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.category}/${blog.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...serviceUrls,
    ...industryUrls,
    ...caseStudyUrls,
    ...knowledgeUrls,
    ...teamUrls,
    ...blogCategoryUrls,
    ...blogUrls,
  ];
}
