const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Austin",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Data Scientist",
    bio: "I develop everything using Python.",
    email: "minkyu.han.work@gmail.com",
    linkedin: "austin0datascientisteng1neer1ng",
    github: "MangooH",
    instagram: "",
  },
  projects: [
    {
      name: `noopy`,
      href: "https://moored-avenue-2ee.notion.site/Noopy-V2-b83825ad284247bf922a4a4a6e9dc49c?pvs=4",
    },
    {
      name: `Metaverse Library`,
      href: "https://moored-avenue-2ee.notion.site/4dc12ffae841442a96f024a4c6c3c804?pvs=4"
    },
  ],
  // blog setting (required)
  blog: {
    title: "Toward Data Scientist",
    description: "Enjoy Learning!",
  },

  // CONFIG configration (required)
  link: "https://morethan-log-austin.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
