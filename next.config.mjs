/** @type {import('next').NextConfig} */
const nextConfig = {
  // Embed public env vars at build time — required for Cloudflare Pages
  env: {
    NEXT_PUBLIC_SUPABASE_URL: "https://tntuqvkmohvueckdhryv.supabase.co",
    NEXT_PUBLIC_SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRudHVxdmttb2h2dWVja2Rocnl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ2MTMyODUsImV4cCI6MjEwMDE4OTI4NX0.snAxJjC6SXCsIKv18hROZMtpBbYfMosuHIRCl1f5fxw",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
