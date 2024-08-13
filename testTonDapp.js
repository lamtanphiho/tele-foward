const {Telegraf, Markup} = require('telegraf')
const {message} = require('telegraf/filters')
const token = '6727698459:AAGD4SBHW3fupGoNn96V0dbsFJ5iYiMXDTg'
const moment = require('moment')
const fs = require('fs')
const bot = new Telegraf(token)
bot.command('start', (ctx) => {
    const content = '\n' +
        '🔥🔥🔥AIRDROP TONDAPP COIN 🔥🔥🔥\n\n' +
        '230 $TDAPP \\- for each referred friend? \n\n' +
        'These are the best conditions for a large\\-scale AIRDROP\\!\n\n' +
        'Nothing could be simpler\\! Absolutely every participant will receive a DROP from TONDAPP\\.\n\n' +
        'You can invite friends via your personal referral link: https://t\\.me/ton_dapp_bot'
    const buttons = Markup.inlineKeyboard([
        [ Markup.button.url('Join TON DAPP', 'https://t.me/tondappchannel'),
            Markup.button.url('Discuss', 'https://t.me/tondappgroup')],
        [ Markup.button.url('Buy TDAPP', 'https://tonraffles.app/jetton/fairlaunch/TDAPP'),
            Markup.button.url('Invite a friend', 'https://t.me/share/url?url=https://t.me/fastchainBot?start=' + ctx.update.message.from.username)]
    ])
    bot.telegram.sendPhoto(
        ctx.update.message.chat.id,
        {source: fs.readFileSync(`${__dirname}/tondapp/inviteFriend.png`)},
        {
            caption: content,
            parse_mode: 'MarkdownV2',
            reply_markup: buttons.reply_markup
        }
    )
    const texts = ctx.update.message.text
    console.log(texts)
    const data = texts.split(' ')
    if(data[1]) {

    }

    // ctx.reply('Hello', Markup.keyboard([Markup.button.webApp('Ton Dapp', 'https://tondapp.org/')]))
    // ctx.reply(content, buttons)

})

// bot.on(message('web_app_data'), async (ctx) => {
//     const data = ctx.webAppData.data.json()
//     console.log(data)
// })
console.log('https://t.me/ton_dapp_bot', 'ready')
bot.launch()