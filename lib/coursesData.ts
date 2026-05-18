// lib/coursesData.ts
// All course data — edit here, both pages auto-update

export interface CourseModule {
    title: string;
    topics: string[];
}

export interface CourseFAQ {
    question: string;
    answer: string;
}

export interface CourseDetail {
    slug: string;
    category: "media" | "tech";
    badge: string;
    name: string;
    tagline: string;
    description: string;
    seoTitle: string;
    seoDescription: string;
    seoKeywords: string[];
    duration: string;
    mode: string;
    level: string;
    language: string;
    fee: string;
    feeNumeric: number;
    icon: string;
    accentHex: string;
    highlights: string[];
    whoIsItFor: string[];
    tools: string[];
    curriculum: CourseModule[];
    careers: { role: string; salary: string }[];
    projects: string[];
    faqs: CourseFAQ[];
}

export const SITE_URL = "https://avacademy.co.in";

export const COURSES: CourseDetail[] = [
    // ============ MEDIA COURSES ============
    {
        slug: "graphic-design",
        category: "media",
        badge: "GRAPHIC",
        name: "Graphic Design Master Course",
        tagline: "Master Adobe Suite & Build a Pro Portfolio",
        description: "Become a professional graphic designer through hands-on training in Photoshop, Illustrator, InDesign, and CorelDRAW. Work on real client projects from EditLab agency and build a portfolio that gets you hired.",
        seoTitle: "Graphic Design Course in Lucknow | Adobe Photoshop & Illustrator Training",
        seoDescription: "Best graphic design course in Lucknow at AV Academy. Learn Adobe Photoshop, Illustrator, InDesign with hands-on training, real projects & 100% placement support. 3-month program with industry certification.",
        seoKeywords: ["graphic design course lucknow", "adobe photoshop training", "illustrator course", "graphic design institute lucknow", "best graphic design classes", "logo design course", "branding course", "graphic designer training", "av academy lucknow", "creative design course"],
        duration: "3 Months",
        mode: "Online & Offline",
        level: "Beginner to Advanced",
        language: "Hindi + English",
        fee: "₹25,000",
        feeNumeric: 25000,
        icon: "Palette",
        accentHex: "#22d3ee",
        highlights: ["100+ hands-on assignments", "Real client projects from EditLab", "Portfolio building included", "Industry-recognized certificate", "Placement assistance after course", "AI tools integrated (Midjourney, Firefly)"],
        whoIsItFor: ["Students pursuing creative careers", "Working professionals upgrading skills", "Freelancers expanding service offerings", "Entrepreneurs building their brand in-house"],
        tools: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "CorelDRAW", "Figma", "Canva Pro", "Midjourney AI"],
        curriculum: [
            { title: "Module 1: Design Fundamentals", topics: ["Color theory & psychology", "Typography essentials", "Layout & composition", "Visual hierarchy", "Design principles"] },
            { title: "Module 2: Adobe Photoshop", topics: ["Photo manipulation", "Photo retouching", "Compositing & masking", "Digital painting", "Web graphics"] },
            { title: "Module 3: Adobe Illustrator", topics: ["Vector illustration", "Logo design", "Icon design", "Pattern creation", "Infographics"] },
            { title: "Module 4: Branding & Identity", topics: ["Brand strategy basics", "Logo design process", "Brand guidelines", "Stationery design", "Brand book"] },
            { title: "Module 5: Print & Packaging", topics: ["InDesign for layouts", "Brochure & flyer design", "Magazine layouts", "Packaging design", "Print production"] },
            { title: "Module 6: AI-Powered Design", topics: ["Midjourney for concepts", "Adobe Firefly integration", "AI image generation", "Prompt engineering", "Modern workflow"] },
        ],
        careers: [
            { role: "Graphic Designer", salary: "₹3-6 LPA" },
            { role: "Brand Designer", salary: "₹4-8 LPA" },
            { role: "UI Designer", salary: "₹5-12 LPA" },
            { role: "Freelance Designer", salary: "₹30K-1L/mo" },
        ],
        projects: ["Complete brand identity for a real startup", "Magazine layout (16 pages)", "Product packaging design", "Social media campaign (10+ posts)", "Annual portfolio of 50+ pieces"],
        faqs: [
            { question: "Do I need prior design experience to join this course?", answer: "No prior experience needed. We start from absolute basics and gradually move to advanced topics. Anyone with passion for design can enroll." },
            { question: "What software will I learn?", answer: "You'll master Adobe Photoshop, Illustrator, InDesign, CorelDRAW, Figma, Canva Pro, and AI tools like Midjourney and Adobe Firefly." },
            { question: "Is the certificate valid?", answer: "Yes, our certification is industry-recognized and accepted across India. Students have been hired by top agencies, startups, and corporations." },
            { question: "Will I get placement assistance?", answer: "Yes, we provide dedicated placement assistance including resume building, portfolio review, mock interviews, and direct connections with hiring companies." },
        ],
    },
    {
        slug: "video-editing",
        category: "media",
        badge: "VIDEO",
        name: "Video Editing Pro Course",
        tagline: "Master Premiere Pro, DaVinci & Storytelling",
        description: "Learn professional video editing for YouTube, films, ads, and social media. Master industry-standard tools and storytelling techniques to create viral content that engages audiences.",
        seoTitle: "Video Editing Course in Lucknow | Premiere Pro & DaVinci Resolve Training",
        seoDescription: "Professional video editing course in Lucknow at AV Academy. Master Adobe Premiere Pro, DaVinci Resolve, color grading & storytelling. 2-3 months with hands-on projects.",
        seoKeywords: ["video editing course lucknow", "premiere pro training", "davinci resolve course", "youtube video editing", "video editor training", "wedding video editing", "film editing classes", "best video editing institute"],
        duration: "2–3 Months",
        mode: "Online & Offline",
        level: "Beginner to Advanced",
        language: "Hindi + English",
        fee: "₹20,000",
        feeNumeric: 20000,
        icon: "Video",
        accentHex: "#22d3ee",
        highlights: ["Hands-on with Premiere Pro & DaVinci", "Color grading mastery", "Sound design fundamentals", "YouTube optimization training", "Live editing projects", "AI editing tools integration"],
        whoIsItFor: ["YouTubers & content creators", "Aspiring film editors", "Social media managers", "Wedding & event videographers"],
        tools: ["Adobe Premiere Pro", "DaVinci Resolve", "Final Cut Pro", "CapCut", "Adobe Audition", "Runway ML"],
        curriculum: [
            { title: "Module 1: Editing Fundamentals", topics: ["Editing theory", "Storytelling basics", "Cuts & transitions", "Rhythm & pacing", "Timeline mastery"] },
            { title: "Module 2: Adobe Premiere Pro", topics: ["Interface & workflow", "Advanced cutting techniques", "Multi-cam editing", "Effects & transitions", "Export settings"] },
            { title: "Module 3: Color Grading", topics: ["DaVinci Resolve basics", "Color correction", "Color grading styles", "LUT creation", "Cinematic looks"] },
            { title: "Module 4: Sound Design", topics: ["Audio mixing", "Music integration", "Sound effects", "Voice-over editing", "Audio cleanup"] },
            { title: "Module 5: Content Creation", topics: ["YouTube editing style", "Reels & Shorts", "Wedding films", "Corporate videos", "Ad creation"] },
            { title: "Module 6: AI in Editing", topics: ["Auto-cut tools", "AI transcription", "Runway ML basics", "Speed up workflow", "Future of editing"] },
        ],
        careers: [
            { role: "Video Editor", salary: "₹2.5-6 LPA" },
            { role: "YouTube Content Editor", salary: "₹3-8 LPA" },
            { role: "Film Editor (Assistant)", salary: "₹3-10 LPA" },
            { role: "Freelance Editor", salary: "₹25K-1L/mo" },
        ],
        projects: ["5 YouTube videos (full editing)", "1 wedding highlight reel", "3 ad commercials", "1 short film (5 min)", "10 Instagram Reels"],
        faqs: [
            { question: "Which video editing software will I learn?", answer: "You'll master Adobe Premiere Pro (industry standard), DaVinci Resolve (color grading), CapCut, Final Cut Pro basics, and AI tools like Runway ML." },
            { question: "Is this course good for YouTube creators?", answer: "Absolutely. Module 5 is specifically focused on YouTube editing style, Reels, Shorts, and viral content creation." },
            { question: "Can I start freelancing after this course?", answer: "Yes, our students typically start freelancing within 2-3 months of completion, earning ₹25K-1L per month." },
        ],
    },
    {
        slug: "motion-graphics",
        category: "media",
        badge: "MOTION",
        name: "Motion Graphics Master Course",
        tagline: "After Effects, Animation & Title Design",
        description: "Create stunning motion graphics, animated logos, title sequences, and explainer videos. Master After Effects and modern animation principles used by top studios.",
        seoTitle: "Motion Graphics Course in Lucknow | After Effects Animation Training",
        seoDescription: "Learn motion graphics & animation at AV Academy Lucknow. Master Adobe After Effects, logo animation, title design & explainer videos. 3-month course.",
        seoKeywords: ["motion graphics course lucknow", "after effects training", "animation course", "logo animation course", "title design training", "explainer video course"],
        duration: "3 Months",
        mode: "Online & Offline",
        level: "Intermediate to Advanced",
        language: "Hindi + English",
        fee: "₹28,000",
        feeNumeric: 28000,
        icon: "Zap",
        accentHex: "#f472b6",
        highlights: ["Master Adobe After Effects", "Animation principles & timing", "Logo & title animation", "Explainer video creation", "Character rigging basics", "Compositing techniques"],
        whoIsItFor: ["Video editors leveling up", "Graphic designers adding motion skills", "Aspiring animation artists", "YouTubers wanting custom intros"],
        tools: ["Adobe After Effects", "Adobe Premiere Pro", "Cinema 4D Lite", "Illustrator", "Photoshop"],
        curriculum: [
            { title: "Module 1: Motion Fundamentals", topics: ["12 principles of animation", "Timing & spacing", "Easing curves", "Composition for motion", "Visual rhythm"] },
            { title: "Module 2: After Effects Core", topics: ["Interface & shortcuts", "Layer system", "Keyframes mastery", "Expressions intro", "Project organization"] },
            { title: "Module 3: Logo Animation", topics: ["Logo build-up animations", "Reveal techniques", "Particle effects", "Sound sync", "Export for web"] },
            { title: "Module 4: Title Design", topics: ["Cinematic titles", "Kinetic typography", "Lower thirds", "End credits", "Broadcast graphics"] },
            { title: "Module 5: Explainer Videos", topics: ["Storyboarding", "Character animation", "Scene transitions", "Icon animation", "Full project workflow"] },
            { title: "Module 6: Advanced Techniques", topics: ["Compositing & green screen", "Tracking & stabilization", "3D layers", "Particle systems", "VFX integration"] },
        ],
        careers: [
            { role: "Motion Graphics Designer", salary: "₹4-10 LPA" },
            { role: "Animation Artist", salary: "₹3-8 LPA" },
            { role: "Broadcast Designer", salary: "₹5-12 LPA" },
            { role: "Freelance Motion Artist", salary: "₹40K-1.5L/mo" },
        ],
        projects: ["Animated logo for real brand", "30-second explainer video", "5 social media motion ads", "Title sequence for a film", "YouTube channel intro pack"],
        faqs: [
            { question: "What is motion graphics?", answer: "Motion graphics combines design and animation to create moving visuals — logos, titles, explainers. One of the highest-paid creative skills." },
            { question: "Do I need design knowledge first?", answer: "Basic design knowledge helps, but we start with fundamentals. We recommend either taking graphic design first or learning both together." },
        ],
    },
    {
        slug: "vfx-master-classes",
        category: "media",
        badge: "VFX",
        name: "VFX Master Classes",
        tagline: "Hollywood-Level VFX & Compositing",
        description: "Industry-grade VFX training covering green screen, compositing, particle effects, 3D integration, and matchmoving. Learn the techniques used in films and high-end commercials.",
        seoTitle: "VFX Course in Lucknow | Visual Effects & Compositing Training",
        seoDescription: "Best VFX course in Lucknow at AV Academy. Learn Hollywood-level visual effects, green screen, compositing & 3D integration. 4-6 month offline program.",
        seoKeywords: ["vfx course lucknow", "visual effects training", "compositing course", "green screen training", "vfx institute lucknow", "nuke training", "bollywood vfx course"],
        duration: "4–6 Months",
        mode: "Offline (Lucknow)",
        level: "Advanced",
        language: "Hindi + English",
        fee: "₹50,000",
        feeNumeric: 50000,
        icon: "Sparkles",
        accentHex: "#a78bfa",
        highlights: ["Hollywood-style VFX techniques", "Green screen compositing", "Particle & dynamics effects", "3D integration with live footage", "Matchmoving & tracking", "Industry mentor sessions"],
        whoIsItFor: ["Aspiring VFX artists", "Film industry hopefuls", "Motion graphics artists leveling up", "Studio professionals upgrading skills"],
        tools: ["After Effects", "Nuke", "Houdini (intro)", "Cinema 4D", "Blender", "Mocha Pro"],
        curriculum: [
            { title: "Module 1: VFX Foundations", topics: ["VFX pipeline overview", "Pre-production planning", "Shot breakdown", "Color theory in VFX", "Industry standards"] },
            { title: "Module 2: Green Screen & Keying", topics: ["Shooting green screen", "Keyer mastery", "Edge refinement", "Spill suppression", "Composite integration"] },
            { title: "Module 3: Compositing", topics: ["Multi-pass compositing", "Sky replacement", "Beauty work", "Set extensions", "Day-to-night conversion"] },
            { title: "Module 4: Particle Effects", topics: ["Particle systems", "Smoke & fire", "Explosions", "Water simulations", "Magic effects"] },
            { title: "Module 5: 3D Integration", topics: ["3D camera tracking", "Matchmoving", "3D object integration", "Lighting matching", "Shadow generation"] },
            { title: "Module 6: Final Project", topics: ["Full VFX short film", "Industry-standard deliverables", "Showreel preparation", "Portfolio review", "Career guidance"] },
        ],
        careers: [
            { role: "VFX Artist", salary: "₹4-15 LPA" },
            { role: "Compositor", salary: "₹5-18 LPA" },
            { role: "Senior VFX Supervisor", salary: "₹10-30 LPA" },
            { role: "Bollywood VFX Artist", salary: "₹5-20 LPA" },
        ],
        projects: ["Complete VFX short film", "Green screen ad composite", "Particle effects showreel", "3D integration shot", "Final showreel (3-5 mins)"],
        faqs: [
            { question: "Is this VFX course offline only?", answer: "Yes, VFX requires intensive hands-on practice with industry-grade hardware. The course is conducted offline at our Lucknow campus." },
            { question: "Can I work in Bollywood after this course?", answer: "Yes, our VFX graduates have been placed in Bollywood post-production houses, ad agencies, and international VFX studios." },
        ],
    },
    {
        slug: "2d-animation",
        category: "media",
        badge: "2D ANIM",
        name: "2D Animation Course",
        tagline: "Character Animation & Storytelling",
        description: "Master 2D animation from traditional principles to digital techniques. Create cartoon characters, explainer videos, and motion stories using industry-standard tools.",
        seoTitle: "2D Animation Course in Lucknow | Character Animation Training",
        seoDescription: "Learn 2D animation at AV Academy Lucknow. Master character design, storytelling, Toon Boom, Adobe Animate. 3-month program with portfolio building.",
        seoKeywords: ["2d animation course lucknow", "character animation training", "toon boom course", "adobe animate training", "cartoon animation course"],
        duration: "3 Months",
        mode: "Online & Offline",
        level: "Beginner to Advanced",
        language: "Hindi + English",
        fee: "₹22,000",
        feeNumeric: 22000,
        icon: "PenTool",
        accentHex: "#34d399",
        highlights: ["12 principles of animation", "Character design & rigging", "Frame-by-frame animation", "Toon Boom & After Effects", "Storyboarding techniques", "Animation portfolio building"],
        whoIsItFor: ["Aspiring animators", "Illustrators expanding skills", "Storytellers & content creators", "Children's content creators"],
        tools: ["Toon Boom Harmony", "Adobe Animate", "After Effects", "Procreate", "Photoshop"],
        curriculum: [
            { title: "Module 1: Animation Principles", topics: ["12 principles deep dive", "Timing & spacing", "Squash & stretch", "Anticipation", "Follow-through"] },
            { title: "Module 2: Character Design", topics: ["Shape language", "Character expressions", "Turnarounds", "Model sheets", "Style consistency"] },
            { title: "Module 3: Storyboarding", topics: ["Story structure", "Camera angles", "Shot composition", "Animatic creation", "Scene planning"] },
            { title: "Module 4: Rigging & Animation", topics: ["Character rigging", "Walk cycles", "Run cycles", "Action sequences", "Lip sync basics"] },
            { title: "Module 5: Backgrounds & Color", topics: ["Background painting", "Color scripts", "Mood boards", "Style frames", "Final polish"] },
            { title: "Module 6: Production", topics: ["Full short film", "Sound integration", "Final compositing", "Export & delivery", "Portfolio assembly"] },
        ],
        careers: [
            { role: "2D Animator", salary: "₹3-8 LPA" },
            { role: "Storyboard Artist", salary: "₹4-10 LPA" },
            { role: "Character Designer", salary: "₹4-12 LPA" },
            { role: "Freelance Animator", salary: "₹30K-1L/mo" },
        ],
        projects: ["30-second animated short", "Character design portfolio", "Explainer video animation", "Animated logo reel", "Walk cycle showreel"],
        faqs: [
            { question: "Do I need drawing skills for 2D animation?", answer: "Basic drawing skills help but aren't mandatory. We teach character design from scratch with shape-based approach." },
            { question: "What's the career scope?", answer: "Excellent. Streaming platforms, YouTube channels, ad agencies, and game studios all need 2D animators." },
        ],
    },
    {
        slug: "3d-animation",
        category: "media",
        badge: "3D ANIM",
        name: "3D Animation Master Course",
        tagline: "Blender, Maya & Production Pipeline",
        description: "Complete 3D animation training covering modeling, texturing, rigging, animation, and rendering. Learn industry pipelines used in films, games, and advertising.",
        seoTitle: "3D Animation Course in Lucknow | Blender & Maya Training",
        seoDescription: "Master 3D animation at AV Academy Lucknow. Learn Blender, Maya, modeling, rigging, texturing & rendering. 4-6 month industry-grade program.",
        seoKeywords: ["3d animation course lucknow", "blender training lucknow", "maya 3d course", "3d modeling course", "3d animator training", "game art training"],
        duration: "4–6 Months",
        mode: "Online & Offline",
        level: "Intermediate to Advanced",
        language: "Hindi + English",
        fee: "₹45,000",
        feeNumeric: 45000,
        icon: "Box",
        accentHex: "#fbbf24",
        highlights: ["3D modeling mastery", "Character rigging & animation", "Texturing & lighting", "Rendering with Cycles/Arnold", "Full production pipeline", "Game-ready & film assets"],
        whoIsItFor: ["Aspiring 3D artists", "Game developers", "Architectural visualizers", "Product designers"],
        tools: ["Blender", "Autodesk Maya", "ZBrush (intro)", "Substance Painter", "Marmoset Toolbag"],
        curriculum: [
            { title: "Module 1: 3D Fundamentals", topics: ["3D space & navigation", "Modeling basics", "UV unwrapping", "Materials intro", "Lighting principles"] },
            { title: "Module 2: Modeling", topics: ["Hard surface modeling", "Organic modeling", "Sculpting basics", "Topology", "Optimization"] },
            { title: "Module 3: Texturing", topics: ["UV mapping", "Substance Painter", "PBR workflow", "Material creation", "Texture baking"] },
            { title: "Module 4: Rigging & Animation", topics: ["Skeleton setup", "Skinning", "IK/FK systems", "Walk cycles", "Action sequences"] },
            { title: "Module 5: Lighting & Rendering", topics: ["Three-point lighting", "HDRI lighting", "Cycles rendering", "Compositing in Blender", "Final delivery"] },
            { title: "Module 6: Production Pipeline", topics: ["Full character project", "Environment design", "Animation showreel", "Game-ready assets", "Portfolio prep"] },
        ],
        careers: [
            { role: "3D Artist", salary: "₹4-12 LPA" },
            { role: "3D Animator", salary: "₹4-15 LPA" },
            { role: "Game Artist", salary: "₹5-20 LPA" },
            { role: "Architectural Visualizer", salary: "₹4-12 LPA" },
        ],
        projects: ["Fully rigged character model", "Animated short film (30 sec)", "Product visualization", "Game-ready asset pack", "Architectural walkthrough"],
        faqs: [
            { question: "Should I learn Blender or Maya?", answer: "Both have advantages. Blender is free and great for freelancers; Maya is industry-standard in big studios. Our course teaches both." },
            { question: "Can I work in gaming after this?", answer: "Yes, our curriculum includes game-ready asset creation and pipeline workflows used in Unity and Unreal Engine." },
        ],
    },
    {
        slug: "digital-marketing",
        category: "media",
        badge: "MARKETING",
        name: "Digital Marketing Master Course",
        tagline: "SEO, Social Media, Ads & Analytics",
        description: "Comprehensive digital marketing training covering SEO, social media marketing, paid ads, email marketing, and analytics. Get certified and start your career or grow your business.",
        seoTitle: "Digital Marketing Course in Lucknow | SEO, Google Ads & Social Media",
        seoDescription: "Best digital marketing course in Lucknow at AV Academy. Learn SEO, Google Ads, Meta Ads, social media marketing & analytics. 2-month certification course.",
        seoKeywords: ["digital marketing course lucknow", "seo training lucknow", "google ads course", "meta ads training", "social media marketing course"],
        duration: "2 Months",
        mode: "Online & Offline",
        level: "Beginner to Intermediate",
        language: "Hindi + English",
        fee: "₹18,000",
        feeNumeric: 18000,
        icon: "Megaphone",
        accentHex: "#22d3ee",
        highlights: ["Google Ads certification prep", "Meta Ads certification prep", "SEO & content marketing", "Email marketing automation", "Analytics & reporting", "Real campaign management"],
        whoIsItFor: ["Aspiring digital marketers", "Business owners self-marketing", "Bloggers & content creators", "Sales professionals upgrading"],
        tools: ["Google Ads", "Meta Business Suite", "Google Analytics", "SEMrush", "Mailchimp", "Canva", "ChatGPT"],
        curriculum: [
            { title: "Module 1: Marketing Foundations", topics: ["Marketing fundamentals", "Customer journey", "Digital channels overview", "Strategy development", "KPI setting"] },
            { title: "Module 2: SEO & Content", topics: ["Keyword research", "On-page SEO", "Off-page SEO", "Content strategy", "Link building"] },
            { title: "Module 3: Social Media Marketing", topics: ["Instagram strategy", "Facebook growth", "LinkedIn marketing", "Twitter/X tactics", "YouTube SEO"] },
            { title: "Module 4: Paid Advertising", topics: ["Google Ads (Search & Display)", "Meta Ads (FB + Instagram)", "Campaign optimization", "Budget management", "Conversion tracking"] },
            { title: "Module 5: Email & Automation", topics: ["Email list building", "Email copywriting", "Automation flows", "A/B testing", "Drip campaigns"] },
            { title: "Module 6: Analytics & AI", topics: ["Google Analytics 4", "Reporting & insights", "AI tools for marketing", "ChatGPT for content", "Future trends"] },
        ],
        careers: [
            { role: "Digital Marketing Executive", salary: "₹2.5-5 LPA" },
            { role: "SEO Specialist", salary: "₹3-7 LPA" },
            { role: "Social Media Manager", salary: "₹3-8 LPA" },
            { role: "Performance Marketer", salary: "₹5-15 LPA" },
        ],
        projects: ["Complete SEO audit for a website", "Run live Google Ads campaign", "Manage social media for 1 month", "Email marketing funnel", "Final marketing strategy"],
        faqs: [
            { question: "Will I get Google Ads & Meta certifications?", answer: "Yes, we prepare you for official Google Ads and Meta Blueprint certifications. These are globally recognized." },
            { question: "Can business owners learn here?", answer: "Absolutely. Many of our students are entrepreneurs who learn to market their own businesses, saving lakhs in agency fees." },
        ],
    },
    {
        slug: "painting-sketching",
        category: "media",
        badge: "ART",
        name: "Painting & Sketching Course",
        tagline: "Traditional Art & Digital Illustration",
        description: "Develop your artistic skills from pencil sketching to oil paintings. Learn traditional techniques and transition into digital illustration on tablets.",
        seoTitle: "Painting & Sketching Course in Lucknow | Art Classes for All Levels",
        seoDescription: "Learn painting and sketching at AV Academy Lucknow. Master pencil, charcoal, watercolor, acrylic, oil painting & digital illustration. 2-3 month classes.",
        seoKeywords: ["painting classes lucknow", "sketching course lucknow", "art classes lucknow", "watercolor course", "oil painting classes", "digital illustration course"],
        duration: "2–3 Months",
        mode: "Offline (Lucknow)",
        level: "Beginner to Intermediate",
        language: "Hindi + English",
        fee: "₹15,000",
        feeNumeric: 15000,
        icon: "PenLine",
        accentHex: "#f472b6",
        highlights: ["Pencil & charcoal sketching", "Watercolor & acrylic painting", "Oil painting basics", "Digital illustration intro", "Portfolio of artworks", "Exhibition opportunities"],
        whoIsItFor: ["Hobby artists improving skills", "Students preparing for design schools", "Working professionals as stress-relief", "Aspiring illustrators"],
        tools: ["Pencils", "Charcoal", "Watercolors", "Acrylics", "Oil paints", "Procreate (iPad)", "Photoshop"],
        curriculum: [
            { title: "Module 1: Drawing Fundamentals", topics: ["Lines & strokes", "Shapes & forms", "Light & shadow", "Perspective basics", "Proportion"] },
            { title: "Module 2: Pencil & Charcoal", topics: ["Pencil techniques", "Shading methods", "Charcoal work", "Texture rendering", "Portrait basics"] },
            { title: "Module 3: Watercolor", topics: ["Wash techniques", "Wet-on-wet", "Layering", "Landscape painting", "Color mixing"] },
            { title: "Module 4: Acrylic & Oil", topics: ["Acrylic basics", "Oil painting intro", "Color theory", "Blending techniques", "Canvas preparation"] },
            { title: "Module 5: Digital Illustration", topics: ["Procreate basics", "Digital brushes", "Layer techniques", "Style development", "Print preparation"] },
            { title: "Module 6: Final Portfolio", topics: ["10-piece portfolio", "Style consistency", "Exhibition prep", "Photo documentation", "Online presence"] },
        ],
        careers: [
            { role: "Illustrator", salary: "₹3-8 LPA" },
            { role: "Art Teacher", salary: "₹2.5-5 LPA" },
            { role: "Children's Book Illustrator", salary: "₹3-10 LPA" },
            { role: "Freelance Artist", salary: "₹20K-80K/mo" },
        ],
        projects: ["Pencil portrait series", "Watercolor landscape collection", "Acrylic painting (canvas)", "Digital illustration set", "Final portfolio exhibition"],
        faqs: [
            { question: "Are art supplies included?", answer: "Basic materials for practice are provided. Students typically invest ₹2-3K extra in their own quality supplies." },
            { question: "Suitable for absolute beginners?", answer: "Yes, we start from absolute basics like holding the pencil correctly. Our beginners often produce gallery-worthy art by the end." },
        ],
    },

    // ============ TECH COURSES ============
    {
        slug: "python-data-science",
        category: "tech",
        badge: "PYTHON",
        name: "Python & Data Science",
        tagline: "From Beginner to Data Analyst",
        description: "Complete Python programming course followed by data science applications. Learn NumPy, Pandas, Matplotlib, Machine Learning basics, and build real data projects.",
        seoTitle: "Python & Data Science Course in Lucknow | ML & Analytics Training",
        seoDescription: "Learn Python programming and data science at AV Academy Lucknow. Master NumPy, Pandas, machine learning & build real projects. 3-4 month job-ready program.",
        seoKeywords: ["python course lucknow", "data science training lucknow", "python programming classes", "machine learning course", "pandas numpy training", "data analyst course"],
        duration: "3–4 Months",
        mode: "Online & Offline",
        level: "Beginner to Intermediate",
        language: "Hindi + English",
        fee: "₹30,000",
        feeNumeric: 30000,
        icon: "Code2",
        accentHex: "#fbbf24",
        highlights: ["Python from zero to advanced", "Data analysis with Pandas", "Data visualization mastery", "Machine Learning intro", "Real datasets & projects", "Job-ready portfolio"],
        whoIsItFor: ["Programming beginners", "Career changers to tech", "Data analysts upgrading skills", "Engineering students"],
        tools: ["Python 3", "Jupyter Notebook", "VS Code", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
        curriculum: [
            { title: "Module 1: Python Fundamentals", topics: ["Variables & data types", "Control flow", "Functions", "OOP basics", "File handling"] },
            { title: "Module 2: Python Advanced", topics: ["Modules & packages", "Error handling", "Decorators", "Generators", "Regular expressions"] },
            { title: "Module 3: Data Analysis", topics: ["NumPy arrays", "Pandas DataFrames", "Data cleaning", "Data manipulation", "Aggregation"] },
            { title: "Module 4: Visualization", topics: ["Matplotlib basics", "Seaborn charts", "Plotly interactive", "Dashboard creation", "Storytelling with data"] },
            { title: "Module 5: ML Introduction", topics: ["ML concepts", "Scikit-learn basics", "Regression", "Classification", "Model evaluation"] },
            { title: "Module 6: Real Projects", topics: ["Sales analysis project", "Customer segmentation", "Predictive modeling", "Dashboard project", "Portfolio prep"] },
        ],
        careers: [
            { role: "Data Analyst", salary: "₹4-10 LPA" },
            { role: "Python Developer", salary: "₹4-12 LPA" },
            { role: "Junior Data Scientist", salary: "₹5-15 LPA" },
            { role: "Business Analyst", salary: "₹4-10 LPA" },
        ],
        projects: ["Sales analysis dashboard", "Customer churn prediction", "Stock market data analysis", "Social media sentiment analysis", "Final data science portfolio"],
        faqs: [
            { question: "Good for absolute beginners?", answer: "Yes, we start from absolute basics. Many of our successful data analysts had zero programming experience when they started." },
            { question: "Can I get a data science job after?", answer: "Yes, our curriculum is job-focused. Students typically land roles within 2-3 months of completion." },
        ],
    },
    {
        slug: "c-programming",
        category: "tech",
        badge: "C LANG",
        name: "C Programming Course",
        tagline: "Master the Foundation of Programming",
        description: "Learn C programming from basics to advanced. Strong foundation for any programming career. Perfect for engineering students and beginners entering tech.",
        seoTitle: "C Programming Course in Lucknow | Best C Language Training",
        seoDescription: "Learn C programming at AV Academy Lucknow. Master variables, pointers, data structures with 100+ coding problems. 2-month course for engineering students.",
        seoKeywords: ["c programming course lucknow", "c language training", "c programming classes", "c coding course", "embedded systems training", "gate preparation c"],
        duration: "2 Months",
        mode: "Online & Offline",
        level: "Beginner",
        language: "Hindi + English",
        fee: "₹8,000",
        feeNumeric: 8000,
        icon: "Terminal",
        accentHex: "#34d399",
        highlights: ["Strong programming foundation", "Pointers & memory mastery", "Data structures intro", "100+ coding problems", "Engineering exam prep", "Certificate of completion"],
        whoIsItFor: ["Engineering students (CSE/IT)", "Programming beginners", "Government exam aspirants (GATE)", "Students learning DSA"],
        tools: ["GCC Compiler", "VS Code", "Code::Blocks", "Online compilers", "GitHub"],
        curriculum: [
            { title: "Module 1: C Basics", topics: ["Introduction to C", "Variables & data types", "Operators", "Input/Output", "Compilation process"] },
            { title: "Module 2: Control Structures", topics: ["If-else statements", "Loops (for, while, do-while)", "Switch case", "Break & continue", "Nested loops"] },
            { title: "Module 3: Functions", topics: ["Function declaration", "Parameter passing", "Return values", "Recursion", "Scope & lifetime"] },
            { title: "Module 4: Arrays & Strings", topics: ["1D arrays", "2D arrays", "String handling", "String functions", "Array algorithms"] },
            { title: "Module 5: Pointers", topics: ["Pointer basics", "Pointer arithmetic", "Pointers & arrays", "Dynamic memory", "Pointer to functions"] },
            { title: "Module 6: Advanced Topics", topics: ["Structures & unions", "File handling", "Preprocessor directives", "Basic data structures", "Mini projects"] },
        ],
        careers: [
            { role: "Junior Developer", salary: "₹2.5-5 LPA" },
            { role: "Embedded Systems Engineer", salary: "₹3-8 LPA" },
            { role: "Software Engineer Trainee", salary: "₹3-6 LPA" },
            { role: "GATE/PSU Aspirant", salary: "₹6-15 LPA (after)" },
        ],
        projects: ["Calculator application", "Student management system", "Library management system", "Tic-tac-toe game", "Mini banking system"],
        faqs: [
            { question: "Why learn C first?", answer: "C is the foundation of modern programming. Learning C makes understanding any other language much easier." },
            { question: "Good for GATE preparation?", answer: "Yes, our curriculum covers all C concepts important for GATE, including pointers, data structures, and memory management." },
        ],
    },
    {
        slug: "cpp-programming",
        category: "tech",
        badge: "C++",
        name: "C++ Programming Course",
        tagline: "Object-Oriented Programming Mastery",
        description: "Master C++ with OOP concepts, STL, and modern C++ features. Perfect for competitive programming, game development, and system software careers.",
        seoTitle: "C++ Programming Course in Lucknow | OOP & DSA Training",
        seoDescription: "Master C++ programming at AV Academy Lucknow. Learn OOP, STL, modern C++ features for competitive coding & DSA. 2-3 month program with placement support.",
        seoKeywords: ["c++ course lucknow", "cpp programming training", "object oriented programming", "stl course", "competitive programming course", "dsa training lucknow"],
        duration: "2–3 Months",
        mode: "Online & Offline",
        level: "Beginner to Intermediate",
        language: "Hindi + English",
        fee: "₹12,000",
        feeNumeric: 12000,
        icon: "FileCode2",
        accentHex: "#a78bfa",
        highlights: ["OOP concepts deep dive", "STL (Standard Template Library)", "Modern C++ features", "Competitive programming prep", "Data Structures fundamentals", "Project-based learning"],
        whoIsItFor: ["Engineering students", "Competitive programmers", "Aspiring game developers", "Job-seekers in product companies"],
        tools: ["GCC/G++", "VS Code", "Code::Blocks", "CLion", "LeetCode", "Codeforces"],
        curriculum: [
            { title: "Module 1: C++ Fundamentals", topics: ["C to C++ transition", "References", "Function overloading", "Default arguments", "Inline functions"] },
            { title: "Module 2: OOP Concepts", topics: ["Classes & objects", "Constructors & destructors", "Encapsulation", "Inheritance", "Polymorphism"] },
            { title: "Module 3: Advanced OOP", topics: ["Virtual functions", "Abstract classes", "Friend functions", "Operator overloading", "Templates intro"] },
            { title: "Module 4: STL Mastery", topics: ["Vectors", "Lists & Deques", "Maps & Sets", "Stack & Queue", "Algorithms library"] },
            { title: "Module 5: Modern C++", topics: ["Auto keyword", "Lambda functions", "Smart pointers", "Move semantics", "C++11/14/17 features"] },
            { title: "Module 6: Projects & DSA", topics: ["Data structures implementation", "Algorithm problems", "Mini game project", "Library system", "Final project"] },
        ],
        careers: [
            { role: "Software Developer", salary: "₹4-12 LPA" },
            { role: "Game Developer", salary: "₹4-15 LPA" },
            { role: "Competitive Programmer", salary: "₹15-50 LPA" },
            { role: "Systems Engineer", salary: "₹6-18 LPA" },
        ],
        projects: ["Inventory management system", "Chess game (console)", "Bank management system", "Custom data structure library", "Mini compiler project"],
        faqs: [
            { question: "Should I learn C before C++?", answer: "It helps but isn't mandatory. Our C++ course covers the basics needed even if you haven't learned C." },
            { question: "Good for competitive programming?", answer: "C++ is the most popular language for competitive programming due to STL and fast execution." },
        ],
    },
];

// Helper functions
export function getCourseBySlug(slug: string): CourseDetail | undefined {
    return COURSES.find((c) => c.slug === slug);
}

export function getCoursesByCategory(category: "media" | "tech"): CourseDetail[] {
    return COURSES.filter((c) => c.category === category);
}

export function getAllCourseSlugs(): string[] {
    return COURSES.map((c) => c.slug);
}