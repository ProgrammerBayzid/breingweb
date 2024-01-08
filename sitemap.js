import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";

// Your React.js routes
const staticRoutes = [
  { url: "/", changefreq: "daily", priority: 0.7 },
  { url: "/in", changefreq: "daily", priority: 0.7 },
  { url: "/recruiters", changefreq: "daily", priority: 0.7 },
  { url: "/job-seekers", changefreq: "daily", priority: 0.7 },
  { url: "/about-us", changefreq: "daily", priority: 0.7 },
  { url: "/blog", changefreq: "daily", priority: 0.7 },
  { url: "/recruiters-login", changefreq: "daily", priority: 0.7 },
  { url: "/verifications", changefreq: "daily", priority: 0.7 },
  { url: "/registration-recruiters", changefreq: "daily", priority: 0.7 },
  { url: "/enterprise-hiring", changefreq: "daily", priority: 0.7 },
  { url: "/guidelines-seekers", changefreq: "daily", priority: 0.7 },
  { url: "/job-seekers-faqs", changefreq: "daily", priority: 0.7 },
  { url: "/recruiters-faqs", changefreq: "daily", priority: 0.7 },
  { url: "/privacy-policy", changefreq: "daily", priority: 0.7 },
  { url: "/terms-and-conditions", changefreq: "daily", priority: 0.7 },
  {
    url: "/cancellation-and-refund-policy",
    changefreq: "daily",
    priority: 0.7,
  },
  { url: "/contactus", changefreq: "daily", priority: 0.7 },
  { url: "/profiles-candidates", changefreq: "daily", priority: 0.7 },
];
// Generate dynamic routes based on your application's content or data
const dynamicRoutes = [
  // Add more dynamic routes as needed
];

// Combine static and dynamic routes
const routes = [...staticRoutes, ...dynamicRoutes];

// Create a writable stream for the sitemap
const stream = new SitemapStream({ hostname: "https://bringin.io" }); // Replace with your domain

// Generate the sitemap by adding each URL
// Generate the sitemap by adding each URL
routes.forEach((route) => {
  stream.write(route);
});

// End the stream
stream.end();

// Convert the stream to a promise and save it to a file
streamToPromise(stream).then((xml) => {
  const fileStream = createWriteStream("./public/sitemap.xml");
  fileStream.write(xml);
  fileStream.end();
});
