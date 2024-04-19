const {Telegraf, Markup} = require('telegraf')
const {message} = require('telegraf/filters')
const token = '6996267818:AAH1VrX2lq9iZ9E3DyNUEzq8wZV6vAAQvHM'
const moment = require('moment')
const fs = require('fs')
const bot = new Telegraf(token)

const content = '\n' +
    '🔥🔥🔥AIRDROP TONDAPP COIN 🔥🔥🔥\n' +
    '$230 TDAPP \\- for each referred friend? \n' +
    'These are the best conditions for a large\\-scale AIRDROP\\!\n' +
    'Nothing could be simpler\\! Absolutely every participant will receive a DROP from TONDAPP\\.\n' +
    'You can invite friends via your personal referral link: https://t\\.me/ton_dapp_bot?start\\=' + moment().unix()
const buttons = Markup.inlineKeyboard([
   [ Markup.button.url('Join TON DAPP', 'https://t.me/tondappchannel'),
    Markup.button.url('Discuss', 'https://t.me/tondappgroup')],
   [ Markup.button.url('Buy TDAPP', 'https://tonraffles.app/jetton/fairlaunch/TDAPP'),
    Markup.button.url('Invite a friend', 'https://t.me/share/url?url=https://t.me/ton_dapp_bot?start=' + moment().unix())]
])
bot.command('start', (ctx) => {
    bot.telegram.sendPhoto(
        ctx.update.message.chat.id,
        {source: fs.readFileSync(`${__dirname}/inviteFriend.png`)},
        {
            caption: content,
            parse_mode: 'MarkdownV2',
            reply_markup: buttons.reply_markup
        }
    )
    // console.log(ctx.update)
    // ctx.reply('Hello', Markup.keyboard([Markup.button.webApp('Ton Dapp', 'https://tondapp.org/')]))
    // ctx.reply(content, buttons)

})

// bot.on(message('web_app_data'), async (ctx) => {
//     const data = ctx.webAppData.data.json()
//     console.log(data)
// })
console.log('https://t.me/ton_dapp_bot', 'ready')
bot.launch()