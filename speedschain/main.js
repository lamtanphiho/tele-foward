const {Telegraf, Markup} = require('telegraf')
const {message} = require('telegraf/filters')
const token = '7403022081:AAF0sR_KshrOKSXw3386YRa9T-U9vuFOAZ0'
const moment = require('moment')
const fs = require('fs')
const bot = new Telegraf(token)

const content = '\n' +
    '🔥🔥🔥AIRDROP SPEEDS CHAIN COIN 🔥🔥🔥\n\n' +
    '123 $SPC \\- for each referred friend? \n\n' +
    'These are the best conditions for a large\\-scale AIRDROP\\!\n\n' +
    'Nothing could be simpler\\! Absolutely every participant will receive a DROP from SPEEDSCHAIN\\.\n\n' +
    'You can invite friends via your personal referral link: https://t\\.me/speedschainbot?start\\=' + moment().unix()
const buttons = Markup.inlineKeyboard([
    [ Markup.button.url('Join SPEEDS CHAIN', 'https://t.me/speedschainbot'),
        Markup.button.url('Discuss', 'https://t.me/speedschainbot')],
       [ Markup.button.url('Invite a friend', 'https://t.me/share/url?url=https://t.me/speedschainbot?start=' + moment().unix())]
])
const clickData = {}
bot.command('start', (ctx) => {
    bot.telegram.sendPhoto(
        ctx.update.message.chat.id,
        {source: fs.readFileSync(`${__dirname}/LOGOSpeedschain.png`)},
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

bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('click', (ctx) => {
    if(!clickData[ctx.update.message.from.username]) clickData[ctx.update.message.from.username] = 0
    clickData[ctx.update.message.from.username] += 1
    ctx.reply('clicked: ' + clickData[ctx.update.message.from.username])
})
bot.hears('click', (ctx) => {
    if(!clickData[ctx.update.message.from.username]) clickData[ctx.update.message.from.username] = 0
    clickData[ctx.update.message.from.username] += 1
    ctx.reply('clicked: ' + clickData[ctx.update.message.from.username])
})
bot.hears('hello', (ctx) => {
    ctx.reply('Hello ' + ctx.update.message.from.first_name + ' ' + ctx.update.message.from.last_name)
})
bot.hears('hi', (ctx) => {
    // console.log(ctx.update)
    ctx.reply(JSON.stringify(ctx.update))
})
console.log('https://t.me/speedschainbot', 'ready')
bot.launch()