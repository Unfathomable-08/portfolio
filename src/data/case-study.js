const node = (id, label, x, y, accent = false) => ({
    id,
    type: "pill",
    position: { x, y },
    data: { label, accent },
    draggable: false,
    selectable: false,
});

export const caseStudies = {
    fluentyx: {
        device: "mobile",
        hero: {
            right: {
                lang: "ar",
                dir: "rtl",
                text: "طلاقة",
                className: "pointer-events-none absolute right-0 top-[15%] select-none text-[clamp(9rem,20vw,25rem)] font-black leading-none tracking-tighter text-white/20! md:text-white!"
            },
            
            name: "Fluentyx",
            description: "An Arabic learning platform for complete beginners, designed to make lessons easier to understand and new vocabulary easier to remember. Learners can study in English, Urdu, or Hindi, practise through interactive exercises, and ask an AI tutor for help whenever they get stuck.",
            images: ["/case-studies/fluentyx/exercise.png", "/case-studies/fluentyx/home.png"],
        },
        about: {
            text: [
                "_Fluentyx_ is an Arabic learning platform that helps beginners learn Arabic through _English_ or _Urdu/Hindi_ . The platform is designed to take users from learning the Arabic alphabet to building vocabulary and improving reading skills through interactive lessons and practice exercises.",
                "Instead of relying on passive reading, Fluentyx includes multiple exercise types that reinforce newly learned words through repetition and active recall, making it easier to remember vocabulary over time. For complete beginners, it offers a dedicated letters section where users can learn the Arabic alphabet, practice pronunciation, and improve handwriting using a _CNN-based_ handwritten character recognition model built with PyTorch that provides instant feedback on written letters.",
                "The platform also includes an _AI_ _tutor_ that answers questions, explains concepts, and assists learners whenever they get stuck. To keep learning engaging, Fluentyx features a _weekly_ _leaderboard_ and progress tracking, encouraging users to stay consistent and compete with others while improving their Arabic skills."
            ],
            stack: "The frontend and backend of this project were built with Next.js, with MongoDB serving as the primary database. Handwritten character recognition is powered by a CNN-based model developed using PyTorch. The AI Tutor integrates Hugging Face models with LangChain to provide context-aware learning support and intelligent explanations.",
            tech: ["Next.js", "MongoDB", "Python", "PyTorch"],
            features: [
                "Arabic learning through English, Urdu, and Hindi",
                "Multiple vocabulary and memorization exercises",
                "Personalized lesson revision system",
                "Arabic alphabet lessons for complete beginners",
                "CNN-powered handwritten letter recognition",
                "AI tutor for explanations and learning support",
                "Intelligent translation marking system",
                "Weekly leaderboard and progress tracking"
            ],
        },
        screenshots: [
            {
                src: "/case-studies/fluentyx/home.png",
                alt: "Fluentyx learning dashboard",
                label: "Your next lesson",
                note: "A focused home base that turns progress into a clear next step.",
            },
            {
                src: "/case-studies/fluentyx/leaderboard.png",
                alt: "Fluentyx weekly leaderboard",
                label: "A reason to return",
                note: "Weekly progress adds momentum without distracting from learning.",
            },
            {
                src: "/case-studies/fluentyx/exercise.png",
                alt: "Fluentyx vocabulary exercise",
                label: "Practice by doing",
                note: "Short active-recall exercises make new vocabulary stick.",
            },
            {
                src: "/case-studies/fluentyx/ai.png",
                alt: "Fluentyx AI tutor",
                label: "Help in the moment",
                note: "The AI tutor stays close when a learner needs an explanation.",
            }
        ],
        workflowNote: "Every route leads back to learning: start a lesson, reinforce it through practice, or get help without leaving the flow.",
        nodes: [
            node("account", "Create Account", 20, 260, true),
            node("home", "Home", 220, 80, true),
            node("leaderboard", "Leaderboard", 220, 240, true),
            node("aiAssistant", "AI Assistant", 220, 340, true),
            node("userAccount", "Account", 220, 440, true),
            node("lessons", "Lessons", 400, 80),
            node("alphabets", "Alphabets", 580, 20),
            node("words", "Words", 580, 80),
            node("sentences", "Sentences", 580, 140),
            node("flashcards", "Flash Cards", 760, 40),
            node("practice", "Practice", 760, 120, true),
            node("rewards", "Rewards", 400, 240),
            node("settings", "Settings", 400, 410),
            node("selectLanguage", "Select Language", 400, 470),
            node("english", "English", 600, 440),
            node("urduHindi", "Urdu / Hindi", 600, 500),
        ],
        connections: [
            ["account", "home"],
            ["account", "leaderboard"],
            ["account", "aiAssistant"],
            ["account", "userAccount"],
            ["home", "lessons"],
            ["lessons", "alphabets"],
            ["lessons", "words"],
            ["lessons", "sentences"],
            ["alphabets", "flashcards"],
            ["alphabets", "practice"],
            ["words", "flashcards"],
            ["words", "practice"],
            ["sentences", "flashcards"],
            ["sentences", "practice"],
            ["practice", "leaderboard"],
            ["leaderboard", "rewards"],
            ["userAccount", "settings"],
            ["userAccount", "selectLanguage"],
            ["selectLanguage", "english"],
            ["selectLanguage", "urduHindi"],
        ]
    },
    
    awaza: {
        device: "mobile",
        hero: {
            right: {
                lang: "ar",
                dir: "rtl",
                text: "آوازہ",
                className: "pointer-events-none absolute right-0 top-[15%] select-none text-[clamp(9rem,20vw,25rem)] font-black leading-none tracking-tighter text-white/20! md:text-white!"
            },
            
            name: "Awaza",
            description: "A professional social media Progressive Web App (PWA) designed for seamless real-time interactions, post sharing, messaging, and push notifications. Built with modern web architecture to deliver a mobile-like experience.",
            images: ["/case-studies/awaza/home.png", "/case-studies/awaza/welcome.jpeg"],
        },
        about: {
            text: [
                "_Awaza_ is a feature-rich, professional social media Progressive Web App (PWA) that connects users through real-time communication, social networking features, and instant push notifications.",
                "Designed around four core hubs: _Home_ feed, _Inbox_ for direct messages, _Notifications_ , and _Account_ settings. Awaza brings essential social interactions together into a clean, installable app experience.",
                "Users can follow creators, like and comment on posts, engage in real-time direct conversations, receive instant Firebase push notifications, and customize their account settings seamlessly across mobile and desktop devices."
            ],
            stack: "The app is engineered as a PWA with React.js on the frontend and Node.js with Express.js powers the server backend. Firebase integration provides real-time data sync and cross-platform push notifications.",
            tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
            features: [
                "Progressive Web App (PWA) with installable native-like experience",
                "4 core navigation tabs: Home, Inbox, Notification, and Account",
                "Real-time direct messaging & inbox updates",
                "Firebase-powered push notifications & activity alerts",
                "Social engagement: follow users, like posts, and leave comments",
                "Comprehensive profile & account settings management",
                "Responsive feed with rich media sharing capabilities"
            ],
        },
        screenshots: [
            {
                src: "/case-studies/awaza/home.png",
                alt: "Awaza social feed screen",
                label: "Home Feed",
                note: "Explore trending posts, interact with content, and follow active users.",
            },
            {
                src: "/case-studies/awaza/inbox.png",
                alt: "Awaza real-time direct messaging",
                label: "Inbox & Chat",
                note: "Real-time direct messaging with instant status and chat history.",
            },
            {
                src: "/case-studies/awaza/notification.png",
                alt: "Awaza notification hub",
                label: "Notifications",
                note: "Instant push notification feed for likes, comments, and new followers.",
            },
            {
                src: "/case-studies/awaza/account.png",
                alt: "Awaza user profile and settings",
                label: "Account & Settings",
                note: "Manage profile customization, privacy preferences, and app options.",
            }
        ],
        workflowNote: "Central navigation keeps core features one tap away. Real-time updates and push notifications keep users coming back.",
        nodes: [
            node("auth", "Authentication", 20, 260, true),
            node("home", "Home Feed", 220, 80, true),
            node("inbox", "Inbox / DM", 220, 200, true),
            node("notifications", "Notifications", 220, 320, true),
            node("account", "Account", 220, 440, true),
            node("feed", "Posts & Feed", 400, 50),
            node("likesComments", "Like & Comment", 580, 20),
            node("follow", "Follow Users", 580, 80),
            node("chat", "Realtime Chat", 400, 200, true),
            node("pushAlerts", "Push Notifications", 400, 320, true),
            node("profileEdit", "Edit Profile", 400, 410),
            node("settings", "Account Settings", 400, 470),
        ],
        connections: [
            ["auth", "home"],
            ["auth", "inbox"],
            ["auth", "notifications"],
            ["auth", "account"],
            ["home", "feed"],
            ["feed", "likesComments"],
            ["feed", "follow"],
            ["inbox", "chat"],
            ["notifications", "pushAlerts"],
            ["account", "profileEdit"],
            ["account", "settings"],
        ]
    },
    
    sparkio: {
        device: "laptop",
        hero: {
            // right: {
            //     lang: "en",
            //     dir: "ltr",
            //     text: "Sparkio",
            //     className: "pointer-events-none absolute right-0 top-[15%] select-none text-[clamp(9rem,20vw,25rem)] font-black leading-none tracking-tighter text-white/20! md:text-white!"
            // },

            name: "Awaza",
            description: "A professional social media Progressive Web App (PWA) designed for seamless real-time interactions, post sharing, messaging, and push notifications. Built with modern web architecture to deliver a mobile-like experience.",
            images: ["/case-studies/awaza/home.png", "/case-studies/awaza/welcome.jpeg"],
        },
        about: {
            text: [
                "_Awaza_ is a feature-rich, professional social media Progressive Web App (PWA) that connects users through real-time communication, social networking features, and instant push notifications.",
                "Designed around four core hubs: _Home_ feed, _Inbox_ for direct messages, _Notifications_ , and _Account_ settings. Awaza brings essential social interactions together into a clean, installable app experience.",
                "Users can follow creators, like and comment on posts, engage in real-time direct conversations, receive instant Firebase push notifications, and customize their account settings seamlessly across mobile and desktop devices."
            ],
            stack: "The app is engineered as a PWA with React.js on the frontend and Node.js with Express.js powers the server backend. Firebase integration provides real-time data sync and cross-platform push notifications.",
            tech: ["React.js", "Node.js", "MongoDB", "Firebase"],
            features: [
                "Progressive Web App (PWA) with installable native-like experience",
                "4 core navigation tabs: Home, Inbox, Notification, and Account",
                "Real-time direct messaging & inbox updates",
                "Firebase-powered push notifications & activity alerts",
                "Social engagement: follow users, like posts, and leave comments",
                "Comprehensive profile & account settings management",
                "Responsive feed with rich media sharing capabilities"
            ],
        },
        screenshots: [
            {
                src: "/case-studies/awaza/home.png",
                alt: "Awaza social feed screen",
                label: "Home Feed",
                note: "Explore trending posts, interact with content, and follow active users.",
            },
            {
                src: "/case-studies/awaza/inbox.png",
                alt: "Awaza real-time direct messaging",
                label: "Inbox & Chat",
                note: "Real-time direct messaging with instant status and chat history.",
            },
            {
                src: "/case-studies/awaza/notification.png",
                alt: "Awaza notification hub",
                label: "Notifications",
                note: "Instant push notification feed for likes, comments, and new followers.",
            },
            {
                src: "/case-studies/awaza/account.png",
                alt: "Awaza user profile and settings",
                label: "Account & Settings",
                note: "Manage profile customization, privacy preferences, and app options.",
            }
        ],
        workflowNote: "Central navigation keeps core features one tap away. Real-time updates and push notifications keep users coming back.",
        nodes: [
            node("auth", "Authentication", 20, 260, true),
            node("home", "Home Feed", 220, 80, true),
            node("inbox", "Inbox / DM", 220, 200, true),
            node("notifications", "Notifications", 220, 320, true),
            node("account", "Account", 220, 440, true),
            node("feed", "Posts & Feed", 400, 50),
            node("likesComments", "Like & Comment", 580, 20),
            node("follow", "Follow Users", 580, 80),
            node("chat", "Realtime Chat", 400, 200, true),
            node("pushAlerts", "Push Notifications", 400, 320, true),
            node("profileEdit", "Edit Profile", 400, 410),
            node("settings", "Account Settings", 400, 470),
        ],
        connections: [
            ["auth", "home"],
            ["auth", "inbox"],
            ["auth", "notifications"],
            ["auth", "account"],
            ["home", "feed"],
            ["feed", "likesComments"],
            ["feed", "follow"],
            ["inbox", "chat"],
            ["notifications", "pushAlerts"],
            ["account", "profileEdit"],
            ["account", "settings"],
        ]
    },
}