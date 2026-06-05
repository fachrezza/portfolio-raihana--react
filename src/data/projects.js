const projects = [
  {
    category: "Graphic Design",
    
    title: "Social Media & Digital Content Intern at Telkom Indonesia",

    description:
      "Created engaging and informative content for Indibiz platform to educate digital audience and increase brand awareness.",

    tech: [
      "Content Strategy",
      "Social Media",
      "Branding",
      "Canva",
      "CapCut",
    ],

    image: "/projects/telkom/telkom-cover.webp",

    gallery: [
      "/projects/telkom/telkom1.webp",
      "/projects/telkom/telkom2.webp",
      "/projects/telkom/telkom3.webp",
      "/projects/telkom/telkom4.webp",
      "/projects/telkom/telkom5.webp",
      "/projects/telkom/telkom6.webp",
      "/projects/telkom/telkom7.webp",
      "/projects/telkom/telkom8.webp",
    ],
  },

  {
    category: "Videography",

    title: "Highlight Reels Content at Telkom Indonesia",

    description:
      "Produced engaging highlight reels focused on Indibiz products, digital business solutions, and audience education.",

    tech: [
      "Videography",
      "CapCut",
      "Reels Editing",
      "Storytelling",
    ],

    image: "/projects/reels/reels-cover.webp",

    gallery: [
      {
        image: "/projects/reels/reels1.webp",
        title: "",
        video: "https://www.tiktok.com/@indibiz.yogyakarta/video/7335772804979199237?lang=id-ID",
      },
      {
        image: "/projects/reels/reels2.webp",
        title: "",
        video: "https://www.tiktok.com/@indibiz.yogyakarta/video/7326557507483225350?lang=id-ID",
      },
      {
        image: "/projects/reels/reels3.webp",
        title: "",
        video: "https://www.tiktok.com/@indibiz.yogyakarta/video/7324635757375671558?lang=id-ID",
      },
      {
        image: "/projects/reels/reels4.webp",
        title: "",
        video: "https://www.tiktok.com/@indibiz.yogyakarta/video/7329461314080754950?lang=id-ID",
      },
    ],
  },

  {
    category: "Graphic Design",

    title: "Digital Marketing at Electrical Engineering Department of UMY",

    description:
      "Managed and designed digital content to support promotional and educational campaigns for the department.",

    tech: [
      "Digital Marketing",
      "Content Design",
      "Instagram",
      "Branding",
    ],

    image: "/projects/umy/umy-cover.webp",

    gallery: Array.from({ length: 37 }, (_, i) =>
      `/projects/umy/umy${i + 1}.webp`
    )
  },
  {
    category: "Graphic Design",

    title: "Banner Design Projects",

    description:
      "Designed modern banners for events, promotions, and digital campaigns with a strong visual identity.",

    tech: [
      "Banner Design",
      "Brand Identity",
      "Typography",
      "Canva",
    ],

    image: "/projects/banner/banner1.webp",

    gallery: [
      
      "/projects/banner/banner2.webp",
      "/projects/banner/banner3.webp",
      "/projects/banner/banner4.webp",
      "/projects/banner/banner5.webp",
      "/projects/banner/banner1.webp",
    ],
  },
  {
    category: "Videography",

    title: "Highlight Reels Content at Electrical Engineering Department of UMY",

    description:
      "Produced engaging short-form content highlighting student life, activities, and valuable insights from real experiences.",

    tech: [
      "Videography",
      "CapCut",
      "Reels Editing",
      "Storytelling",
    ],

    image: "/projects/reels/reelsumy4.webp",

    gallery: [
      {
        image: "/projects/reels/reelsumy4.webp",
        title: "",
        video: "https://www.instagram.com/reel/DOux6KGEh6N/",
      },
{
        image: "/projects/reels/reelsumy6.webp",
        title: "",
        video: "https://www.instagram.com/reel/DPCB2PsErs5/",
      },
{
        image: "/projects/reels/reelsumy7.webp",
        title: "",
        video: "https://www.instagram.com/reel/DO5GZpWkc9G/",
      },
{
        image: "/projects/reels/reelsumy8.webp",
        title: "",
        video: "https://www.instagram.com/reel/DPRJeopkU7j/",
      },
    ],
  },
  {
    category: "Videography",

    title: "Videography Projects",

    description:
      "",

    tech: [
      "Videography",
      "CapCut",
      "Reels Editing",
      "Storytelling",
    ],

    image: "/projects/reels/vid1.webp",

    gallery: [
      {
        image: "/projects/reels/vid1.webp",
        title: "Company Profile Video",
        video: "https://www.youtube.com/watch?v=KAWq9UVAySU&t=29s",
      },
      {
        image: "/projects/reels/vid2.webp",
        title: "Capstone EXPO 2026",
        video: "https://www.instagram.com/reel/DUFgqOckQgv/",
      },
      
    ],
  },
  {
    category: "Graphic Design",

    title: "Graphic Designer at Dr.Bahasa Korea",

    description:
      "Designed educational and creative visual content to improve audience engagement and strengthen brand identity.",

    tech: [
      "Graphic Design",
      "Visual Branding",
      "Social Media",
      "Canva",
    ],

    image: "/projects/dr/dr-cover.webp",

    gallery: [
      "/projects/dr/dr1.webp",
      "/projects/dr/dr2.webp",
      "/projects/dr/dr3.webp",
      "/projects/dr/dr4.webp",
      "/projects/dr/dr5.webp",
      "/projects/dr/dr6.webp",
      "/projects/dr/dr7.webp",
      "/projects/dr/dr8.webp",
      "/projects/dr/dr9.webp",
      "/projects/dr/dr10.webp",
      "/projects/dr/dr11.webp",
      "/projects/dr/dr12.jpeg",

    ],
  },

  {
    category: [
      "Graphic Design",
      "Brand Identity",
    ],
    title: "Logo Design Projects",

    description:
      "",

    tech: [
      "Brand Identity",
      "Typography",
      "Canva",
    ],

    image: "/projects/logo/logo1.webp",

    gallery: [
      "/projects/logo/logonew.jpeg",

    ],
  },
  

  

  {
    category: "Photography",

    title: "Photography Projects",

    description:
      "Documenting impactful moments through visual storytelling for educational, social, and cultural projects.",

    tech: [
      "Photography",
      "Color Grading",
      "Composition",
      "Lightroom",
    ],

    image: "/projects/phgraph/photo1.webp",

    gallery: Array.from({ length: 14 }, (_, i) =>
      `/projects/phgraph/photo${i + 1}.webp`
    )
  },

  {
    category: "Managed Account",

    title: "Managed Accounts",

    description:
      "Selected social media accounts curated for branding, promotion, and audience engagement.",

    tech: [
      "Social Media",
      "Brand Strategy",
      "Content Planning",
      "Engagement",
    ],

    image: "/projects/akun/akun5.webp",

    gallery: [
      "/projects/akun/akun1.webp",
      "/projects/akun/akun2.webp",
      "/projects/akun/akun3.webp",
      "/projects/akun/akun4.webp",
      "/projects/akun/akun5.webp",
    ],
  },
];

export default projects;