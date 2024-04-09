const {Telegraf, Markup} = require('telegraf')
const {message} = require('telegraf/filters')
const token = '6727698459:AAGD4SBHW3fupGoNn96V0dbsFJ5iYiMXDTg'
const moment = require('moment')

const bot = new Telegraf(token)

// const content = 'The conditions of participation in AIRDROP have never been so simple 😱\n' +
//     'Absolutely every participant will receive $PEPE tokens 🔥\n' +
//     '\n' +
//     'To participate, you need to:\n' +
//     '1. be subscribed to the channel: @pepecoin_ton\n' +
//     '2. Invite all your friends\n' +
//     '\n' +
//     'For each friend you refer, you will receive $200 $PEPE.\n' +
//     'To double your referral balance, fulfill the additional bonus condition in the Twitter tab [BONUS]. \n' +
//     '\n' +
//     'You can invite friends via your personal referral link: https://t.me/pepetondrop_bot?start=r0900263436'
// const buttons = Markup.inlineKeyboard([Markup.button.url('Invite a friend', 'https://t.me/share/url?url=https://t.me/fastchainBot?start=' + moment().unix())])
const content = 'Hello'
const buttons = Markup.inlineKeyboard([Markup.button.webApp('Ton Dapp', 'https://tondapp.org/')])


bot.action('invite', async (ctx) => {
    console.log(ctx.update.callback_query)
    try {
        // bot2.forwardMessage(me, ctx.update.callback_query.from.username, 'https://t.me/pepetondrop_bot?start=r0900263436')
        ctx.reply('https://t.me/share/url?url=https://t.me/fastchainBot?start=r0900263436')
    } catch (error) {
        console.log(error)
    }
})

// bot.telegram.sendPhoto(
//     channel_id,
//     {source: filepath},
//     {
//         caption: description.join("\n"),
//         parse_mode: 'MarkdownV2',
//         reply_markup: buttons.reply_markup
//     }
// )
bot.command('start', (ctx) => {
    // console.log(ctx.update)
    // ctx.reply('Hello', Markup.keyboard([Markup.button.webApp('Ton Dapp', 'https://tondapp.org/')]))
    ctx.reply(content, buttons)

})

// bot.on(message('web_app_data'), async (ctx) => {
//     const data = ctx.webAppData.data.json()
//     console.log(data)
// })
bot.launch()