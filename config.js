// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
  valentineName: "Rithika",
  pageTitle: "Hey Rithika 💌",

  // Floating emojis that appear in the background
  floatingEmojis: {
    hearts: ["💖", "🤍", "💕", "💘", "💝"],
    bears: ["🧸", "🐻"]
  },

  // Questions and answers (MUST match this structure)
  questions: {
    first: {
      text: "First things first… do you like warm hugs? 🤗",
      yesBtn: "YES obviously",
      noBtn: "Why is this even a question",
      secretAnswer: "As expected 😌"
    },
    second: {
      text: "Okay… how much do you love warm hugs? 😌",
      startText: "This much!",
      nextBtn: "Next 💖"
    },
    third: {
      text: "Will you be my Valentine? 💌",
      yesBtn: "Only if it’s you 😌",
      noBtn: "Yes but make it cute"
    }
  },

  // Love meter messages (repo expects these 3 keys)
  loveMessages: {
    extreme: "WAIT—THIS ACTUALLY WORKED 😭💖",
    high: "Okay now come get your gift… no backing out 🤗😙",
    normal: "Confirmed: Valentine material 💖"
  },

  // Celebration screen
  celebration: {
    title: "WAIT—THIS ACTUALLY WORKED 😭💖",
    message: "Okay now come get your gift… no backing out 🤗😙",
    emojis: "🎁🤍🤗💋✨"
  },

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

  // 🎵 Background Music (NOTE: copyrighted songs can get your host flagged)
  music: {
    enabled: true,
    autoplay: true,
    musicUrl:
      "https://res.cloudinary.com/dffotfj0w/video/upload/v1770529716/The_Weeknd_-_Earned_It_Fifty_Shades_Of_Grey_r8iuyh.mp3",
    startText: "🎵 Play Music",
    stopText: "🔇 Stop Music",
    volume: 0.35
  }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;
