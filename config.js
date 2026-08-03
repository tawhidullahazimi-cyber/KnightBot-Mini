/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['93798649722'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rFmFZAESM6Yrko0lzECyJu7EM1FFDcLQoRJ/z3Dbqnp+dhd7b3rSgq8uTJzHO+g7LCDTJQDxbfQU3wFVI0HGlfI7AAchtFiIARCCGFYAEMCW32uc+XW/GUGPKTXb3mzGZ+XR9f2nO5k1KDGmaNBcuNn8FjBOr2NcfBbwDZU6d3HOGK8dFiuTJZVVRtomgf69zdiw0nrJ3j0lD4vrCewWNAhJjgMl7WCSoQgbmBegdi8jX6c3278sT2UGdVRiLXd7NQbG6pUuDCaJi0K4/TyW01SVa59DX67p1GMpEm9TTYF1mioXmc28xxHM3JoZGZsnktJq61VbRD9k6/wXGJQj1EJcW0/7LulsSYMe8I2rgynDSw7PGraYbCQRT3e/sQxTynCqreFcLS/xrxKha2RZwwF0a9l5s4bBThfhcS5qqpd7JbWnF1u3g5f9Dz7lfiDvnISvZ/dIf6ybh1UBYr/7pvzrLjpBk5FHvsvVhqAKv2dJI8IQgE1v0afb5TVsfQ2lXdkjMyfb8Xjyvff1LlpZ2Nz/HcP29ac60aN3f8SR/SlvyOZUfNMBGe7P099hnIipImThS5Ym5sX/BVlRgnXsrONgd7tuiV1nXNYsoxx2ZyWO05WxfqyyneyY3j3wXBOtzHyj1kcPf81lGGej0Ei8ljBAiKcUMJpLgq3+7EEYDhdY8CguibumDuLPlps+7JBV7SfCXOZYNqbH30zEur0BMTmeeOuPZL6knPYARqUgWoaVC4xg2tSG+hpoExasDiz79GoEQ3+u7bUI2bjECESUPdsq3zCoYfpn78hEFQtSXd92WgDAdEwGL8eY0oxWXcDDK2JSRBgq9ISSBtwCKCeYN+NogICsGCkhb9HFqlCgfdPV7TzPNOBSNQvPmBQ7AAIieI8xkvCiy7mPB/NN+6ARXW9bcSUTAC+fsrfsbz07nAspOxOB8eDvePn/wGuBBRiPMGLICyWV+e+E5bGofgKlqaJlmxpMQS+OznIxfvwtvBtbfjhN3UQmGuScpesJkq8vkUxtYW8ooa+qqJD1sr5Z//AWQIlaJPYH6uVTyfLV+fNMfnd9AzUu++m4YzUStuMNN3OvR5fL9qZ53NIlG3eaHYXnceIc5mm0aOakZVIrvj7TlR3LEkDyEagRBdcYB+LXbPTJu/0R0XVJdL5HB6E83IE2pRS/KNnm64aDdpy12oxUIhrZfZzF6/pKXueOLMY2BpFoXbT2lGU2O72a6Sa/GyXaY/Evs2MfmPTYXfwjQ4NXxGGL0NfgkH//7TuXfeQ77Gj9EvED82yb9Mo3w4mfPU18P0gqb4NuPFS4X5LvaOnK8utVaKOU/q+Wys6gx4PP4agTqHNKpIMSycMiQVDsEIkKodAquXUfWbYoqU6eo2Xg2N57Ch0ucQHHCBGgqLGiwmwnwqsGNuxj7+BgSwQ4U5BwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot',
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      antibotAction: 'warn', // 'warn' | 'kick'
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      antigroupstatus: false, // Block group status posts
      antigroupstatusAction: 'delete', // 'delete', 'kick'
      antisticker: false, // Stickers not allowed in group
      antistickerAction: 'delete', // 'delete', 'kick'
      antibadword: false, // Block bad words in group
      antibadwordAction: 'delete', // 'delete', 'kick', 'warn'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
