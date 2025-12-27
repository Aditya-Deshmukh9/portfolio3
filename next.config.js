const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/adi-de9",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/adi-de9",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://x.com/adityadesh937",
        permanent: true,
      },
      {
        source: "/contentgenie",
        destination: "https://github.com/adi-de9/ai-content-generator",
        permanent: true,
      },
      {
        source: "/contentgenie-live",
        destination: "https://contentgenie.adityapro.online/",
        permanent: true,
      },
      {
        source: "/ecom",
        destination: "https://github.com/Aditya-Deshmukh9/Ecommerce",
        permanent: true,
      },
      {
        source: "/ecom-live",
        destination: "https://ecom-colab-a.vercel.app/",
        permanent: true,
      },
      {
        source: "/resume",
        destination: process.env.NEXT_PUBLIC_RESUME_LINK,
        permanent: true,
      },
    ];
  },
}


module.exports = nextConfig
