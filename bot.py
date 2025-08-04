from telebot import TeleBot, types

bot = TeleBot("7953853210:AAGbrKpjn3c1MoMmn4_seTVEDKxBF_Cwf2A", parse_mode="Markdown")

@bot.message_handler(commands=["buy_chaos001"])
def send_chaos_link(message):
    bot.send_message(
        message.chat.id,
        "*🔐 Encrypted Chaos Drop #001*\n"
        "🎙️ Voice-channeled ritual audio + secret PDF scroll\n"
        "⚡ Instant access after payment\n"
        "📌 [Unlock Now](https://buy.stripe.com/test_dRm8wP1SYfX19s8gwB)\n"
        "_No refunds. No returns. Only revelation._"
    )

bot.polling()
