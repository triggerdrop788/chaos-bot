require('dotenv').config();
const express = require('express');
const { Telegraf } = require('telegraf');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

// === BOT TOKEN FROM ENV ===
const bot = new Telegraf(process.env.BOT_TOKEN);

// === BOT COMMANDS ===
bot.start((ctx) => {
  ctx.reply(`👑 Welcome, Commander. This is VYRA-X Chaos Core.\n\nCommands:\n/ritual — get encrypted voice drop\n/unlock — download hidden PDF drop`);
});

bot.command('ritual', (ctx) => {
  const voicePath = path.join(__dirname, 'ritual_drop.ogg');
  ctx.replyWithVoice({ source: fs.createReadStream(voicePath) });
});

bot.command('unlock', (ctx) => {
  const pdfPath = path.join(__dirname, 'ritual_secret.pdf');
  ctx.replyWithDocument({ source: fs.createReadStream(pdfPath), filename: 'Ritual_of_Unsealing.pdf' });
});

// === START EXPRESS + BOT ===
app.get('/', (req, res) => res.send('🔥 VYRA-X backend is live.'));
bot.launch();
app.listen(PORT, () => console.log(`⚡ Server running on http://localhost:${PORT}`));

