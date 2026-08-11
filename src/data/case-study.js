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
    }
}