export const config = {
  pageTitle: "Hey Rithika 💌",

  valentineName: "Rithika",

  // Landing page
  heroTitle: "Important Question Incoming 🚨",
  heroSubtitle: "Please proceed with caution (and a smile)",
  startButtonText: "Okay I’m ready 😌",

  // Questions flow
  questions: [
    {
      question: "First things first… do you like warm hugs? 🤗",
      options: ["YES obviously", "I love them", "Why is this even a question"],
      correctAnswer: "YES obviously",
      successMessage: "As expected 😌"
    },
    {
      question: "And what about soft forehead kisses? 😙",
      options: ["Maybe 👀", "Yes pls", "Depends who it’s from"],
      correctAnswer: "Depends who it’s from",
      successMessage: "Interesting… very interesting 🤭"
    },
    {
      question: "Final and most important question 💖",
      options: [
        "Yes, absolutely 💕",
        "Yes but make it cute",
        "Only if it’s you 😌"
      ],
      correctAnswer: "Only if it’s you 😌",
      successMessage: "Okay wow you just passed with flying colors 🥹"
    }
  ],

  // Love meter
  loveMeter: {
    title: "Love Meter 💘",
    messages: [
      "Hmm… potential detected 👀",
      "Okay this is getting kinda cute",
      "Dangerously adorable levels reached",
      "Yeah there’s no denying this now 😌",
      "Confirmed: Valentine material 💖"
    ]
  },

  // Celebration screen 😈
  celebration: {
    title: "WAIT—THIS ACTUALLY WORKED 😭💖",
    message: "Okay now come get your gift… no backing out 🤗😙",
    emojis: ["🎁", "🤍", "🤗", "💋", "✨"]
  },

  // Floating background emojis
  floatingEmojis: ["💖", "🧸", "✨", "😌", "🤍"],

  // 🎨 Color scheme
  colors: {
    backgroundStart: "#ffafbd",
    backgroundEnd: "#ffc3a0",
    buttonBackground: "#ff6b6b",
    buttonHover: "#ff8787",
    textColor: "#ff4757"
  },

  // ✨ Animations
  animations: {
    floatDuration: "15s",
    floatDistance: "50px",
    bounceSpeed: "0.5s",
    heartExplosionSize: 1.5
  },

  // 🎵 Background Music
  music: {
    enabled: true,
    autoplay: true,
    musicUrl:
      "https://res.cloudinary.com/dffotfj0w/video/upload/v1770529716/The_Weeknd_-_Earned_It_Fifty_Shades_Of_Grey_r8iuyh.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.5
  }
};
