/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['93773759306'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Tawhid bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VUy7KiSBT8l9pqtIC8I27EIIKiICrga6IXJRRYykuqUKHDf+/A7tu3FzM9d3bFoSJPnsw89Q3kBSZojhqgfgNlhW+Qou5ImxIBFYzqOEYV6IMIUghUQJaGAm1DH3OM4aK8OPjyCBvzrGG4BfLsgbcb72e+KMYM8waefVDWxxSHfwAUVvLQn+nIX8iLx3TVa446e7YeweG6IY7iWwijjdFMjuR8fwPPDhHiCueJUZ5QhiqYzlGzhLj6HP296ZoFvN+muu5JTQ/fnAVzxWfUK6a5GE3dzCx5Ds0WSup8jj4qr6Xm7lPE6K2hz2uJ5Iebp4TlKZrbh2MoTy0bsVtXmP6kT3CSo8iKUE4xbT6tOzdrHqPJmLeWQROaM0cLhtYBTtvZroRnTmbYKj5tiJdEQfI54nY4QrVR7HKz2QhaOWZdA9094hrpmjmx51vEzz0zX1itQX4nvqzes3L5P7pnC511LYRxcXAEx7uHPSHdZtr91raHseg9jNG2mbpChczLJ2NzbWx/wLPSRdLQknrjMmbC4FGOBHbnDjnKnwU/3WqFs95/0Ie0rv7E8nQNlJZskouUaW6bR97STxnW2exn60tTpn5VrntrP3BGgTkMHkvjENzk+LS0hxyD4025QkqrPyyuUC5+L2Y9ZNaQaqu310QX1FgRUNlnH1QowYRWkOIi72oS2wcwunkorBB9qQvseM/cZSHmudZrph6BEzuyj6OyWkNvygQuX2I9geZmMb68gT4oqyJEhKBoigktqsZBhMAEEaD+/bUPcvSgP3zrug3ZPohxRWiQ12VawOjd1PefMAyLOqdek4d6d0AVUJmPMqIU5wnpZKxzWIUnfEP6CVIC1BimBP0aEFUoAiqtavRrafUi6nSfO/v5aqGJoA+ylx84AipQhpI0lARlyIgqK/9Fvtw7VFiWX3JEQR+kr1vykFOkoSgJvMzyQnexqz9/8evgIkQhTglQgb64OtwgMIzZTsGL1WSiGYmmJxr4mOc9Fz+Eb47ruM2PkxBKhXDSuYLX+O2R8PfTmBePDbucSNZAXG2Y0+rtH0CACs5ICs+7K5cLorVyS6votceJnsYByzxaRjs7mjUX5GV1H5DVzc43SrINjRDbwdxc3ob7LRyJzZzkojy1uMd6kE5hlY3vb123CN1wiH5vZs6Rg/be+pS2p/tycbT1zZWOkuDuiCQ7Dip+OnCScdkEulw4gqSYbniwm6iNOdyb3TLPL+35YzjgTCjWu1apgjDk3xP72pj050uFX2HqnOo+Y4xei5/Dzr//dO4H7y5fzLP/G8TPl+RftnEUZsxOFrhHPqlFd7+iV1dzzUxyHWvVczOZ+o+6WfYuZmQF4Pn82gdlCmlcVBlQAcyjqsAR6IOqqLvAWnlc/KGZPrKs0SrRu8FTSKj2sQQ+zhChMCuBykqyqHCMyAjP7zpZ6nY5BwAA',
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
  
