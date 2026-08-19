/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['249111644861'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Tawhid bot'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: ',',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VVW5OiOBj9L3mFGgURwaquGqRR8U4rCmzNQ4AAkatJQHHK/75FX6bnYXe2l6fwQZ2c75zzJT9BUWKKlqgF45+gIriBDHVL1lYIjMGkjiJEAA9CyCAYA7gtan9xmO3vnjcqNpce1oRKVwR9DovLVt2Egw1VpshWptcn8OBBVfsZDv4AaNjZXVY5skh6G683jWec78uzU2qEKB+2s5t+53oO97LA1/QJPDpEiAkuYqNKUI4IzJao3UFMvkafmoY5SU24D5ptu565wcVBmT63+k3j4l7KymzfOwbnl2tufo3+gduukGWliWldrf3QysqBwE3I1CiNRRGu/PPlLkfZ4Jwl0ht9iuMChWaICoZZ+2XdlWlahOIcleRuWPnans6D5RY+J4UtqR49bWVv4whuw+xZ/DXiGpFoWTizM2pvL+HFENVsVOxqZ63cjXucS89Lk5mucylT5XfiO/KRlfT/6J6vD74mMrfZ3ZPNJVAX22UwkgzxyHHu3O8bQ32pVOEGb4vya/RvFmw2FCm7Vb5rsRkfjfjlNnFDN7Ka6m47VJrPD7rlcLb5SR+ymvyJpe80+lbKb3IWTmlsRaskFNYveyyV7ERvfkiadsJRujCXxOMkYbUrzOM6xMvzaZ3u1IEry9J2WD0fG1+dSbqUziiqJ9rTa0cpas0QjIUHDwiKMWUEMlwWXU0c8QCGzR4FBLFXdUFKVBLvR9gj9mQ/0w3Ll3pzz04nCrlmASdR4ljxPL4rl+AJ8KAiZYAoReEcU1aSdo0ohTGiYPzXDx4U6MbefOt2Gwg8iDChzC7qKith+GHqx0cYBGVdsH1bBHq3QASM+59lxBguYtrJWBeQBAlukJ5ARsE4ghlFvxpEBIVgzEiNfg2tXoad7oOVtJCWzgjwIH/1A4dgDERJFQRBliRFFsbKd/rt2qHCqvpWIAZ4kL3/JaqKJApKf9gfqtJY+d7VH7/4dXAhYhBnFIyBvskHl15sGItznqrWbKYZsabHGvjs5yMXb8LrSu1nTor6CZc49vO2Tgqh5KyhM7qtyRL3TmfVta/eRtXdp38AAWMQJ6pg+8wlpzsnMsc56VSXxDKapymsk5Nx5ox0HSihtGvM4XmX9gfiwYi8Y7Ke+y9ym588bz31gt6JVn5biquUa2W9CxEPQtTgAP2+Wds4iYjb4iT3sj7de3tNDBR0jLlbaR8cTm+Gt4jG6JpfRVeW6l6l0SS9r1LzupAuQX8/GE77ARS2XHZVCTseiWe42ntiXycmez+p8GuYOqe61wij18EvYOfffzr3xrvLV//B/wbxfpL8yzROrGaVD4/DOTOj8ihod1J6Ktyl2yOnHJZt2Qhl7zRdzw6RlYPH4wcPqgyyqCR5d08VISlxCHhAyroLrFlE5R8207W+acSx2TWeQcq0zyE44BxRBvMKjIWRMuqrI0WReZC3WlXtGWQfswO07llsffD4GwSTKZ5WBwAA',
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
  
