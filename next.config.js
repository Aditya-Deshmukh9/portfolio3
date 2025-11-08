const nextConfig = {
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
        source: "/resume",
        destination: process.env.NEXT_PUBLIC_RESUME_LINK,
        permanent: true,
      },
    ];
  },
}


module.exports = nextConfig