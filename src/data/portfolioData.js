import soreImg from "../assets/Sore1.png";
import soreImg2 from "../assets/Sore2.png";
import soreImg3 from "../assets/Sore3.png";
import soreImg4 from "../assets/Sore4.png";
import soreImg5 from "../assets/Sore5.png";
import lumeaImg from "../assets/Lumea1.png";
import auroraImg from "../assets/Aurora1.png";
import avatarImg from "../assets/me2.png";
import brewHavenImg from "../assets/BrewHaven1.png"
import brewHavenImg2 from "../assets/BrewHaven2.png"
import brewHavenImg3 from "../assets/BrewHaven3.png"
import brewHavenImg4 from "../assets/BrewHaven4.png"
import brewHavenImg5 from "../assets/BrewHaven5.png"
import butterWhiskImg from "../assets/ButterAndWhisk2.png"
import butterWhiskImg3 from "../assets/ButterAndWhisk3.png" 
import butterWhiskImg4 from "../assets/ButterAndWhick4.png" 
import butterWhiskImg5 from "../assets/ButterAndWhisk5.png" 
import butterWhiskImg6 from "../assets/ButterAndWhisk6.png"

export const PROFILE = {
  name: "Amole Erioluwa",
  avatar: avatarImg,
  tagline:
    "We design and build fast, modern, and mobile-friendly websites that help businesses build trust, stand out, and attract more customers.",
  email: "hello@amoleerioluwa.com",
  socials: [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
  ],
};

export const SERVICES = [
  {
    id: "business-website",
    name: "Business Website",
    description: "A modern, responsive website designed to establish your online presence, showcase your services, and help customers easily connect with your business.",
    price: "From ₦150,000",
    previewBenefits: [
      "Custom Website Design",
      "Responsive on Mobile & Desktop",
      "Up to 6 Custom Pages",
      "WhatsApp & Contact Integration"
    ],
    benefits: [
      "Custom Website Design",
      "Responsive on Mobile, Tablet & Desktop",
      "Up to 6 Custom Pages",
      "Contact Form & WhatsApp Integration",
      "Basic SEO Setup",
      "Domain & Hosting Setup",
      "SSL Security (HTTPS)",
      "1 Month Free Maintenance",
      "Linktree Setup (Optional)",
      "Google Analytics Integration"
    ]
  },
  {
    id: "professional-website",
    name: "Professional Business Website",
    description: "Ideal for businesses that need a stronger online presence with additional functionality, improved performance, and better visibility on search engines.",
    price: "From ₦180,000",
    previewBenefits: [
      "Up to 10 Custom Pages",
      "Blog or Portfolio Section",
      "Booking or Inquiry Forms",
      "Google Maps & Enhanced SEO"
    ],
    benefits: [
      "Everything in Business Website",
      "Up to 10 Custom Pages",
      "Blog or Portfolio Section",
      "Booking or Inquiry Forms",
      "Google Maps Integration",
      "Enhanced SEO Optimization",
      "Performance Optimization",
      "Social Media Integration",
      "Priority Support",
      "1 Month Free Maintenance"
    ]
  },
  {
    id: "ecommerce-store",
    name: "Custom E-commerce Store",
    description: "A complete online store built to help you sell products, accept payments securely, and manage orders with ease.",
    price: "From ₦300,000",
    previewBenefits: [
      "Shopping Cart & Secure Checkout",
      "Paystack / Flutterwave Payment",
      "Product & Category Management",
      "Inventory & Order Dashboard"
    ],
    benefits: [
      "Everything in Professional Website",
      "Shopping Cart",
      "Secure Checkout",
      "Paystack / Flutterwave Integration",
      "Product & Category Management",
      "Inventory Management",
      "Customer Accounts (Optional)",
      "Order Management Dashboard",
      "Discount Coupons (Optional)",
      "1 Month Free Maintenance"
    ]
  }
];

export const PROCESS = [
  {
    step: "01",
    title: "Plan & Consultation",
    description: "We discuss your business goals, what pages your website needs, and plan a layout that gets you more customer calls or sales."
  },
  {
    step: "02",
    title: "Visual Design Draft",
    description: "We create a custom visual draft of your homepage. You get to review the layout, request adjustments, and approve it before we start building."
  },
  {
    step: "03",
    title: "Building the Website",
    description: "We transform the approved draft into a fast, mobile-friendly website, configuring contact forms, booking buttons, and security certificates."
  },
  {
    step: "04",
    title: "Launch & Handover",
    description: "We connect your custom domain (website address), index your site on Google search so people can find you, and show you how to manage it."
  }
];

export const FAQS = [
  {
    question: "How long does a website take to build?",
    answer: "A standard Landing Page takes 1-2 weeks. A complete Professional Business Site takes 3-4 weeks, and custom E-commerce storefronts take 4-6 weeks depending on product catalog complexity."
  },
  {
    question: "Will my website work on mobile devices?",
    answer: "Absolutely. 100% of our sites are built using mobile-first responsive grid systems, meaning they fit perfectly on iPhones, Androids, tablets, and large screens."
  },
  {
    question: "Can I update the content myself later?",
    answer: "Yes. For business and E-commerce sites, we integrate a user-friendly Content Management System (CMS) like Sanity or Shopify, allowing you to edit text, swap photos, or add products without touching code."
  },
  {
    question: "What is your website audit or mockup offer?",
    answer: "If you have an existing outdated website, we can run a free audit identifying speed bottlenecks and UX flaws. If you don't have a site, you can request a free homepage sketch layout to see our design concepts before signing any contract."
  },
  {
    question: "Do you offer post-launch maintenance?",
    answer: "Yes, we offer monthly hosting, speed optimization, backup audits, and content maintenance packages starting from ₦15,000/month so you can focus entirely on running your business."
  }
];

export const PROJECTS = [
  {
    id: 1,
    name: "Sore",
    tagline: "Headless e-commerce storefront for a luxury menswear label, optimized for rapid sales conversions.",
    year: "2026",
    tags: ["Headless Retail", "Shopify Storefront", "Payment Setup"],
    image: soreImg,
    link: "https://sore-menswear.vercel.app",
    description: "Sore is a custom, high-end online shop designed for a luxury menswear label. The digital experience mirrors the brand's premium identity, focusing on a clean, lookbook-style product presentation and a seamless, distraction-free checkout flow that makes buying effortless for customers.",
    challenge: "The retail brand wanted a highly considered digital lookbook but struggled with slow loading speeds on standard storefront templates, causing users to abandon their shopping carts on mobile devices.",
    solution: "We engineered a custom headless React storefront connected directly to Shopify's APIs. Page load times were reduced to under 120ms (instant loading), increasing mobile checkout conversions by 28%.",
    stackDetails: ["React", "Shopify Storefront API", "Vite", "Vanilla CSS", "Framer Motion"],
    detailImages: [soreImg3, soreImg2, soreImg4, soreImg5, soreImg]
  },
  {
    id: 2,
    name: "Butter & Whisk",
    tagline: "E-commerce website for a luxury bakery, specializing in custom cakes and pastries.",
    year: "2026",
    tags: ["E-commerce", "NextJS", "Stripe API"],
    image: butterWhiskImg,
    link: "https://butterandwhisk.netlify.app",
    description: "Butter & Whisk is a beautiful, custom-designed e-commerce platform for a luxury boutique bakery specializing in premium cakes and gourmet pastries. The platform showcases their delicious menu, tells their unique brand story, and allows customers to easily order custom desserts online.",
    challenge: "Ordering custom cakes is complex, requiring customers to specify cake flavors, fillings, custom messages, and precise pick-up times, which previously required time-consuming phone calls and manual order management.",
    solution: "We designed and built an interactive product configurator for custom cake orders and integrated Paystack for secure instant payments, streamlining order management and reducing inquiry calls by 60%.",
    stackDetails: ["Next.js", "Sanity CMS", "Vercel", "Tailwind CSS", "Paystack API"],
    detailImages: [butterWhiskImg6, butterWhiskImg3, butterWhiskImg4, butterWhiskImg5]
  },
  {
    id: 3,
    name: "Aurora",
    tagline: "Online subscription ordering system and brand website for a small-batch coffee roastery.",
    year: "2025",
    tags: ["Subscription Commerce", "React", "Stripe API"],
    image: auroraImg,
    link: "https://aurora-roastery.vercel.app",
    description: "Aurora is a direct-to-consumer brand website and automated subscription portal for a small-batch coffee roastery. It allows coffee enthusiasts to receive freshly roasted coffee beans delivered to their doorstep on a recurring weekly or monthly schedule.",
    challenge: "The roastery needed to build recurring subscription revenue but found standard commerce checkout builders lacked grind-size customization controls, leading to customer frustration and cancellations.",
    solution: "We engineered a clean, user-friendly subscription dashboard integrated with Stripe Billing. Customers can easily customize their grind preference, pause or skip deliveries, and change schedules, growing recurring revenue by 35%.",
    stackDetails: ["React", "Stripe SDK", "Express", "Node.js", "CSS Modules"],
    detailImages: [auroraImg, auroraImg, auroraImg, auroraImg, auroraImg]
  },
  {
    id: 4,
    name: "Brew Haven",
    tagline: "Performance-focused landing site for a coffee brand.",
    year: "2026",
    tags: ["React", "Framer Motion", "Landing Page"],
    image: brewHavenImg,
    link: "https://brewhaven00.netlify.app",
    description: "Brew Haven is a premium, performance-optimized brand website and promotional landing page for a craft coffee roastery. It was designed to launch their new coffee products, tell their unique brand story, and capture the interest of wholesale partners and direct customers.",
    challenge: "The coffee brand needed to stand out in a highly competitive market, requiring a web experience that would captivate visitors, communicate their premium quality, and keep users engaged.",
    solution: "We created an interactive, scroll-driven visual experience that beautifully displays the coffee layers and branding. This premium design held users on the page longer, resulting in a 40% increase in inquiry conversions.",
    stackDetails: ["React", "Framer Motion", "HTML5 Canvas", "Vite", "Babel"],
    detailImages: [brewHavenImg2, brewHavenImg3, brewHavenImg4, brewHavenImg5, brewHavenImg]
  },
  {
    id: 5,
    name: "Lumea",
    tagline: "Reservation and menu experience for a wine bar and restaurant.",
    year: "2024",
    tags: ["Next.js", "Reservations", "CMS"],
    image: lumeaImg,
    link: "https://lumea-winebar.vercel.app",
    description: "Lumea is a sleek digital menu and online reservation website for an upscale boutique wine bar and restaurant. The site establishes a sophisticated online presence that reflects the physical ambiance of the restaurant.",
    challenge: "The restaurant changes its wine list and menu daily based on seasonal availability, making standard website updates slow and difficult for non-technical staff.",
    solution: "We integrated a simple content management dashboard that allows restaurant staff to update the menu instantly from their phones. We also integrated an automated table reservation system that keeps bookings organized.",
    stackDetails: ["Next.js", "Contentful CMS", "Twilio API", "GraphQL", "Vanilla CSS"],
    detailImages: [lumeaImg, lumeaImg, lumeaImg, lumeaImg, lumeaImg]
  },
  {
    id: 6,
    name: "Solstice Yoga",
    tagline: "Class scheduling and membership site for a boutique studio.",
    year: "2024",
    tags: ["React", "Scheduling"],
    image: "https://placehold.co/1200x800/1b1815/948c7e?text=Solstice+Yoga",
    link: "#",
    description: "A calming web application for Solstice Yoga, featuring interactive schedule builders, member dashboards, and secure checkout for monthly subscriptions.",
    challenge: "Ensuring booking confirmation emails and calendar files generated dynamically without loading delays.",
    solution: "Engineered a client-side scheduling interface using React-Context to store booking preferences. Integrates seamlessly with SendGrid and standard calendar format generators.",
    stackDetails: ["React", "SendGrid", "Context API", "CSS variables", "Node.js"],
    detailImage: "https://placehold.co/1200x800/201c18/ede8de?text=Solstice+Detail+View"
  },
  {
    id: 7,
    name: "Amber & Ash",
    tagline: "Lookbook-style site for a home fragrance brand.",
    year: "2024",
    tags: ["Shopify", "Branding"],
    image: "https://placehold.co/1200x800/1b1815/948c7e?text=Amber+%26+Ash",
    link: "#",
    description: "A storytelling-first digital catalogue for high-end home fragrance brand Amber & Ash, featuring immersive photography and custom scent guides.",
    challenge: "Transforming standard retail shopping into an experiential product path where customers are guided by mood profiles.",
    solution: "Created an interactive quiz that maps fragrance notes to user mood choices, suggesting custom candles and diffusers dynamically.",
    stackDetails: ["Shopify Liquid", "Vanilla JavaScript", "Sass", "Webpack"],
    detailImage: "https://placehold.co/1200x800/201c18/ede8de?text=Amber+Detail+View"
  },
  {
    id: 8,
    name: "Fieldnote Journal",
    tagline: "Editorial site and archive for an independent travel journal.",
    year: "2023",
    tags: ["Next.js", "CMS", "Editorial"],
    image: "https://placehold.co/1200x800/1b1815/948c7e?text=Fieldnote+Journal",
    link: "#",
    description: "A fast-loading digital reading archive for travel writers. Features dynamic layout grids and reading progress indicators.",
    challenge: "Managing extensive travel archives containing tens of thousands of images while preserving fast layout renders and text readability.",
    solution: "Deployed a decentralized CDN static generation system. Next.js static exports ensure fast loading times and optimized image sizes globally.",
    stackDetails: ["Next.js", "GraphCMS", "Tailwind CSS", "AWS S3", "CloudFront"],
    detailImage: "https://placehold.co/1200x800/201c18/ede8de?text=Fieldnote+Detail+View"
  },
  {
    id: 9,
    name: "Origin Supply Co.",
    tagline: "Wholesale catalogue and dealer portal for an outdoor gear supplier.",
    year: "2023",
    tags: ["React", "Portal", "B2B"],
    image: "https://placehold.co/1200x800/1b1815/948c7e?text=Origin+Supply+Co.",
    link: "#",
    description: "A protected, high-efficiency business portal for commercial outdoor retailers ordering custom equipment in bulk.",
    challenge: "B2B customers need spreadsheet-like speed when modifying bulk item orders, but the client wanted to keep a clean, cohesive brand aesthetic.",
    solution: "Designed a clean portal that features rapid keyboard shortcuts, inline quantity adjustment boxes, and CSV bulk importing capabilities.",
    stackDetails: ["React", "Material UI Custom", "Ruby on Rails", "PostgreSQL"],
    detailImage: "https://placehold.co/1200x800/201c18/ede8de?text=Origin+Detail+View"
  },
  {
    id: 10,
    name: "Quietwork Studio",
    tagline: "Agency site for a small design-and-build practice.",
    year: "2023",
    tags: ["React", "Agency"],
    image: "https://placehold.co/1200x800/1b1815/948c7e?text=Quietwork+Studio",
    link: "#",
    description: "The digital home of Quietwork Studio, emphasizing their architectural portfolios and construction process through dynamic typography.",
    challenge: "Presenting architectural floor plans alongside visual project photography without cluttering the screen.",
    solution: "Created custom interactive project sheets. Users can toggle between blueprint overlays and high-resolution photo views on individual projects.",
    stackDetails: ["React", "Framer Motion", "Sass", "Vite", "Vanilla JS"],
    detailImage: "https://placehold.co/1200x800/201c18/ede8de?text=Quietwork+Detail+View"
  },
];
