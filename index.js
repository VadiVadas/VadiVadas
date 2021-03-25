const dbd = require('dbd.js');
const bot = new dbd.Bot({
    token: 'ODAyNTEyNTY1NDA5MTUzMDI1.YAwUEQ.nqTAkh_EXVrxee3WgclG9mrzFdc',
    prefix: '$getServerVar[prefix]'
});

bot.onMessage();

bot.variables({
  lang:'EU',
  bl:'0',
  prefix:'+',
  user: '',
  me: '',
  bis: 'Нету',
  coin: '0',
  coinicon: ')(',
  por: '0',
  role1: '',
  role2: '',
  role3: '',
  role4: '',
  role5: '',
  coin1: '',
  coin2: '',
  coin3: '',
  coin4: '',
  coin5: '',
  prem: '0'
})

bot.status({
    text: '+help',
    type: 'STREAMING',
    status: '$getServerVar[prefix]help',
    time: 10 
});

bot.command({
name: "bot",
code: `$if[$getServerVar[lang]==RU]
        $title[Информация о боте👮]
         $description[🔧 • Мой кодер: $username[768002774486220830]#6714
--------------------------------
⭐ • Сервера: $serverCount
🌈 • Участники пользующиеся ботом: $allMembersCount
--------------------------------
> 😇 • Дискорд сервер бота: (https://discord.gg/uBjQUvHtdZ)
> 🏍 • Пригласить бота: (https://discord.com/oauth2/authorize?client_id=802512565409153025&scope=bot&permissions=2147483647)
> 🔧 • Дискорд сервер кодера: (https://discord.gg/vJNbaumDns)

🌀 • Дата создания: 23 января 2021 (23.01.2021)

🔯 • Язык програмирования: BDScript <:bdscript:821820268702859264>]
$color[00ff00]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$endif


$if[$getServerVar[lang]==EU]
$title[Information about the bot👮]
$description[🔧 • My coder is: $username[768002774486220830]#6714
--------------------------------
⭐ • Server: $serverCount
🌈 • All members: $allMembersCount
----------------------------

> 😇 • Discord bot server: (https://discord.gg/uBjQUvHtdZ)
> 🏍 • Invite a bot: (https://discord.com/oauth2/authorize?client_id=802512565409153025&scope=bot&permissions=2147483647)
> 🔧 • Discord encoder server: (https://discord.gg/vJNbaumDns)

🌀 • Creation date: 23 january 2021 (23.01.2021)

🔯 • Programming language: BDScript <:bdscript:821820268702859264>
]
$color[00ff00]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$endif`
})

bot.command({
name: "prefix",
code: `$setServerVar[prefix;$message]
$if[$getServerVar[lang]==RU]
$title[<a:yes:804403766707093534>Успешно]
$description[Вы поменяли префикс бота на $message]
$endif

$if[$getServerVar[lang]==EU]
$title[<a:yes:804403766707093534>Successful]
$description[You changed the bot prefix to $message]
$endif
$color[00ff00]`
})

bot.command({
name:"user",
code:`$if[$getServerVar[lang]==RU]
         $title[🤑Информация о $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]$replaceText[$getVar[user;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]];Нет; ;-1]🤑]
$thumbnail[$userAvatar[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]]
              $description[•👤Информация
> 💼 • Ник: $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
> 📄 • Тег: $discriminator[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
> 🗞 • О себе: |$getVar[me;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]|
> 🔖 • Высшая роль: <@&$highestRole[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]>
--------------------------
•💸Экономика
> 💰 • Бизнес: $getUserVar[bis;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
> 💳 • Коины: $getUserVar[coin;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]$getVar[coinicon]]
$color[00ff00]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$endif




$if[$getServerVar[lang]==EU]
$title[🤑Information about $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]$replaceText[$getVar[user;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]];Нет; ;-1]🤑]
$thumbnail[$userAvatar[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]]
$description[•👤Information
> 💼 • Nickname: $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
> 📄 • Tag: $discriminator[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
> 🗞 • About me: |$getVar[me;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]|
> 🔖 • Highest role: <@&$highestRole[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]>
--------------------------
•💸Economy
> 💰 • Business: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserVar[bis;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]];Нету;None;1];Полицейский участок🚓;Police Station🚓;1];Ферма🚜;Farm🚜;1];Строительная бригада🏗;Construction team🏗;1];Такси🚖;Taxi🚖;1];Заправка⛽;The gas station⛽;1]
> 💳 • Coins: $getUserVar[coin;$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]$getVar[coinicon]]
$color[00ff00]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$endif`
})

bot.command({
name: "shop",
code: `$if[$getServerVar[lang]==RU]

$title[Магазин ролей]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$thumbnail[$serverIcon[$guildID]]

$if[$getServerVar[por]==0]
$description[•Магазин пустой]
$endif

$if[$getServerVar[por]==1]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]]
$footer[•+buy (1)•]
$endif

$if[$getServerVar[por]==2]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]]
$footer[•+buy (1/2)•]
$endif

$if[$getServerVar[por]==3]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]]
$footer[•+buy (1/2/3)•]
$endif

$if[$getServerVar[por]==4]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]

•4) <@&$getServerVar[role4]> __**•**__ $getServerVar[coin4]$getVar[coinicon]]
$footer[•+buy (1/2/3/4)•]
$endif


$if[$getServerVar[por]==5]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]

•4) <@&$getServerVar[role4]> __**•**__ $getServerVar[coin4]$getVar[coinicon]

•5) <@&$getServerVar[role5]> __**•**__ $getServerVar[coin5]$getVar[coinicon]]
$footer[•+buy (1/2/3/4/5)•]
$endif

$color[00ff00]
$onlyIf[$getServerVar[prem]==1;•У бота на этом сервере нету Premium]



$endif

$if[$getServerVar[lang]==EU]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$title[Role Store]
$thumbnail[$serverIcon[$guildID]]

$if[$getServerVar[por]==0]
$description[•The store is empty]
$endif

$if[$getServerVar[por]==1]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]]
$footer[•+buy (1)•]
$endif

$if[$getServerVar[por]==2]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]]
$footer[•+buy (1/2)•]
$endif

$if[$getServerVar[por]==3]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]]
$footer[•+buy (1/2/3)•]
$endif

$if[$getServerVar[por]==4]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]

•4) <@&$getServerVar[role4]> __**•**__ $getServerVar[coin4]$getVar[coinicon]]
$footer[•+buy (1/2/3/4)•]
$endif


$if[$getServerVar[por]==5]
$description[•1) <@&$getServerVar[role1]> __**•**__ $getServerVar[coin1]$getVar[coinicon]

•2) <@&$getServerVar[role2]> __**•**__ $getServerVar[coin2]$getVar[coinicon]

•3) <@&$getServerVar[role3]> __**•**__ $getServerVar[coin3]$getVar[coinicon]

•4) <@&$getServerVar[role4]> __**•**__ $getServerVar[coin4]$getVar[coinicon]

•5) <@&$getServerVar[role5]> __**•**__ $getServerVar[coin5]$getVar[coinicon]]
$footer[•+buy (1/2/3/4/5)•]
$endif

$color[00ff00]
$onlyIf[$getServerVar[prem]==1;•The bot does not have Premium on this server]




$endif`
})

bot.command({
name: "premium",
code: `$setServerVar[prem;1;$message]
$onlyForIDs[768002774486220830;•Эту команду может использовать кодер]
$title[<a:yes:804403766707093534>Успешно]
$thumbnail[$serverIcon[$message]]
$description[•Вы подключили премиум функции для сервера __**$serverName[$message]**__]
$color[00ff00]`
})

bot.command({
name: "add-role",
code: `$if[$getServerVar[lang]==RU]
$title[<a:yes:804403766707093534>Успешно]
$thumbnail[$serverIcon[$guildID]]
$description[•Вы добавили роль <@&$mentionedRoles[1]> по цене $message[2]]
$onlyIf[$getServerVar[prem]==1;•У бота на этом сервере нету Premium]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]

$if[$getServerVar[por]==0]
$setServerVar[role1;$mentionedRoles[1]]
$setServerVar[coin1;$message[2]]
$setServerVar[por;1]
$endif

$if[$getServerVar[por]==1]
$setServerVar[role2;$mentionedRoles[1]]
$setServerVar[coin2;$message[2]]
$setServerVar[por;2]
$endif

$if[$getServerVar[por]==2]
$setServerVar[role3;$mentionedRoles[1]]
$setServerVar[coin3;$message[2]]
$setServerVar[por;3]
$endif

$if[$getServerVar[por]==3]
$setServerVar[role4;$mentionedRoles[1]]
$setServerVar[coin4;$message[2]]
$setServerVar[por;4]
$endif

$if[$getServerVar[por]==4]
$setServerVar[role5;$mentionedRoles[1]]
$setServerVar[coin5;$message[2]]
$setServerVar[por;5]
$endif
$color[00ff00]

$argsCheck[>1;•Вы забыли написать какуб роль хотите добавить в магазин]
$argsCheck[>2;•Вы забыли написать цену товара]
$endif

$if[$getServerVar[lang]==EU]
$title[<a:yes:804403766707093534>Successful]
$thumbnail[$serverIcon[$guildID]]
$description[•You added the role <@&$mentionedRoles[1]> at the price of  $message[2]]
$onlyIf[$getServerVar[prem]==1;•The bot does not have Premium on this server]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]

$if[$getServerVar[por]==0]
$setServerVar[role1;$mentionedRoles[1]]
$setServerVar[coin1;$message[2]]
$setServerVar[por;1]
$endif

$if[$getServerVar[por]==1]
$setServerVar[role2;$mentionedRoles[1]]
$setServerVar[coin2;$message[2]]
$setServerVar[por;2]
$endif

$if[$getServerVar[por]==2]
$setServerVar[role3;$mentionedRoles[1]]
$setServerVar[coin3;$message[2]]
$setServerVar[por;3]
$endif

$if[$getServerVar[por]==3]
$setServerVar[role4;$mentionedRoles[1]]
$setServerVar[coin4;$message[2]]
$setServerVar[por;4]
$endif

$if[$getServerVar[por]==4]
$setServerVar[role5;$mentionedRoles[1]]
$setServerVar[coin5;$message[2]]
$setServerVar[por;5]
$endif
$color[00ff00]

$argsCheck[>1;•You forgot to write what role you want to add to the store]
$argsCheck[>2;•You forgot to write the price of the product]
$endif
$onlyAdmin[]`
})

bot.command({
name: "remove-role",
code: `$if[$getServerVar[lang]==RU]
$onlyIf[$getServerVar[por]!=0;•Вы неможете больше удалить ролей, т.к. их нету в магазине]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$title[<a:yes:804403766707093534>Успешно]
$thumbnail[$serverIcon[$guildID]]
$description[•Вы убрали товар под номером $message[1]]

$if[$message[1]==1]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin1;$getServerVar[coin2]]
$setServerVar[coin2;$getServerVar[coin3]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role1;$getServerVar[role2]]
$setServerVar[role2;$getServerVar[role3]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==2]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin2;$getServerVar[coin3]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role2;$getServerVar[role3]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==3]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==4]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==5]
$resetServerVar[coin5]
$resetServerVar[role5]
$setServerVar[por;$sub[$getServerVar[por];1]]
$endif
$color[00ff00]
$onlyIf[$getServerVar[prem]==1;•У бота на этом сервере нету Premium]

$argsCheck[>1;•Вы забыли написать номер товара, который хотите удалить]
$endif

$if[$getServerVar[lang]==EU]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$title[<a:yes:804403766707093534>Successful]
$thumbnail[$serverIcon[$guildID]]
$description[•You removed the item under the number  $message[1]]

$if[$message[1]==1]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin1;$getServerVar[coin2]]
$setServerVar[coin2;$getServerVar[coin3]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role1;$getServerVar[role2]]
$setServerVar[role2;$getServerVar[role3]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==2]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin2;$getServerVar[coin3]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role2;$getServerVar[role3]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==3]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin3;$getServerVar[coin4]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role3;$getServerVar[role4]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==4]
$setServerVar[por;$sub[$getServerVar[por];1]]
$setServerVar[coin4;$getServerVar[coin5]]
$setServerVar[role4;$getServerVar[role5]]
$endif


$if[$message[1]==5]
$resetServerVar[coin5]
$resetServerVar[role5]
$setServerVar[por;$sub[$getServerVar[por];1]]
$endif
$color[00ff00]
$onlyIf[$getServerVar[prem]==1;•The bot does not have Premium on this server]

$argsCheck[>1;•You forgot to write the number of the product you want to delete]
$endif
$onlyAdmin[]`
})

bot.command({
name: "lang",
code: `$if[$authorID==567746873671024710]

$if[$message==RU]
$setServerVar[lang;$replaceText[$replaceText[$message;EN;EU;1];RU;RU;1]]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$description[•Вы поменяли язык бота на __**$replaceText[$replaceText[$message;EN;English;1];RU;Русский;1]**__ язык]
$color[00ff00]
$argsCheck[>1;•Вы забыли отправить флаг языка, на который хотите поменять 🇬🇧/🇷🇺]
$title[<a:yes:804403766707093534>Успешно]
$onlyIf[$message!=EN;•Такого языка в боте несуществует]
$endif

$if[$message==EN]
$setServerVar[lang;$replaceText[$replaceText[$message;EN;EU;1];RU;RU;1]]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$description[•You changed the bot language to __**$replaceText[$replaceText[$message;EN;English;1];RU;Русский;1]**__ language]
$color[00ff00]
$argsCheck[>1;•You forgot to send the flag of the language you want to change 🇬🇧/🇷🇺to]
$title[<a:yes:804403766707093534>Successful]
$onlyIf[$message!=RU;•There is no such language in the bot]
$endif

$endif

$if[$authorID!=567746873671024710]

$if[$message==🇷🇺]
$setServerVar[lang;$replaceText[$replaceText[$message;🇬🇧;EU;1];🇷🇺;RU;1]]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$description[•Вы поменяли язык бота на __**$replaceText[$replaceText[$message;🇬🇧;English;1];🇷🇺;Русский;1]**__ язык]
$color[00ff00]
$argsCheck[>1;•Вы забыли отправить флаг языка, на который хотите поменять 🇬🇧/🇷🇺]
$title[<a:yes:804403766707093534>Успешно]
$onlyIf[$message!=🇬🇧;•Такого языка в боте несуществует]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]$endif

$if[$message==🇬🇧]
$setServerVar[lang;$replaceText[$replaceText[$message;🇬🇧;EU;1];🇷🇺;RU;1]]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$description[•You changed the bot language to __**$replaceText[$replaceText[$message;🇬🇧;English;1];🇷🇺;Русский;1]**__ language]
$color[00ff00]
$argsCheck[>1;•You forgot to send the flag of the language you want to change 🇬🇧/🇷🇺to]
$title[<a:yes:804403766707093534>Successful]
$onlyIf[$message!=🇷🇺;•There is no such language in the bot]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]$endif

$endif`
})

bot.command({
name: "eval",
code: `$eval[$message]
$onlyForIDs[768002774486220830;]`
})

bot.command({
name: "coin",
code: `$setVar[coinicon;$message]
$addCmdReactions[👍]
$onlyForIDs[768002774486220830;]`
})

bot.command({
name: "tyr",
code: `$onlyForChannels[821807888073752596;;]

$if[$message==RU]
$giveRole[$authorID;821806019948314655]
$giveRole[$authorID;821805468774563890]
$endif

$if[$message==EN]
$giveRole[$authorID;821806065813159996]
$giveRole[$authorID;821805468774563890]
$endif

$deletecommand`
})

bot.command({
name: "coin-add",
code: `$if[$authorID!=768002774486220830]
$if[$getServerVar[lang]==RU]
$title[<a:yes:804403766707093534>Успешно]
$description[•Вы выдали $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]] коины, количеством: $message[2]]
$setUserVar[coin;$sum[$getUserVar[coin];$message[2]];$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
$onlyAdmin[]
$embedSuppressErrors[<a:no:804403788718538763>Ошибка;•Неизвестная ошибка;ff0000;;;]
$color[00ff00]
$argsCheck[>1;•Вы забыли упомянуть человека, которому хотите выдать коины]
$argsCheck[>2;•Вы забыли написать сколько хотите выдать коинов]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$endif

$if[$getServerVar[lang]==EU]
$title[<a:yes:804403766707093534> Successful]
$description[•You have issued $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]] coins, the amount: $message[2]]
$setUserVar[coin;$sum[$getUserVar[coin];$message[2]];$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
$onlyAdmin[]
$embedSuppressErrors[<a:no:804403788718538763> Error;•Unknown error;ff0000;;;]
$color[00ff00]
$argsCheck[>1;•You forgot to mention the person you want to give the coins to]
$argsCheck[>2;•You forgot to write how many coins you want to give out]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$endif
$endif

$if[$authorID==768002774486220830]
$if[$getServerVar[lang]==RU]
$title[<a:yes:804403766707093534>Успешно]
$description[•Вы выдали $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]] коины, количеством: $message[2]]
$setUserVar[coin;$sum[$getUserVar[coin];$message[2]];$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
$color[00ff00]
$argsCheck[>1;•Вы забыли упомянуть человека, которому хотите выдать коины]
$argsCheck[>2;•Вы забыли написать сколько хотите выдать коинов]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$endif

$if[$getServerVar[lang]==EU]
$title[<a:yes:804403766707093534> Successful]
$description[•You have issued $username[$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]] coins, the amount: $message[2]]
$setUserVar[coin;$sum[$getUserVar[coin];$message[2]];$replaceText[$replaceText[$userExists[$message[1]];true;$message[1];-1];false;$mentioned[1;yes];-1]]
$color[00ff00]
$argsCheck[>1;•You forgot to mention the person you want to give the coins to]
$argsCheck[>2;•You forgot to write how many coins you want to give out]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$endif
$endif`
})

bot.commands({
name: "buy",
code: `$if[$getServerVar[lang]==RU]
$onlyIf[$getVar[bl;$authorID]!=1;•Вы были заблокированы в боте]
$onlyIf[$getServerVar[prem]==1;•У бота на этом сервере нету Premium]
$title[<a:yes:804403766707093534>Успешно]

$description[•Вы купили роль <@&$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;role1;1];2;role2;1];3;role3;1];4;role4;1];5;role5;1]]> по цене $getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;coin1;1];2;coin2;1];3;coin3;1];4;coin4;1];5;coin5;1]]]

$giveRole[$authorID;$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;role1;1];2;role2;1];3;role3;1];4;role4;1];5;role5;1]]]

$onlyIf[$getUserVar[coin]>=$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;coin1;1];2;coin2;1];3;coin3;1];4;coin4;1];5;coin5;1]];•У вас недостаточно коинов]


$argsCheck[>1;•Вы забыли написать номер товара]
$endif

$if[$getServerVar[lang]==EU]
$onlyIf[$getVar[bl;$authorID]!=1;•You were blocked in the bot]
$onlyIf[$getServerVar[prem]==1;•The bot does not have Premium on this server]
$title[<a:yes:804403766707093534>Successful]

$description[•You bought the role <@&$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;role1;1];2;role2;1];3;role3;1];4;role4;1];5;role5;1]]> by price $getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;coin1;1];2;coin2;1];3;coin3;1];4;coin4;1];5;coin5;1]]]

$giveRole[$authorID;$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;role1;1];2;role2;1];3;role3;1];4;role4;1];5;role5;1]]]

$onlyIf[$getUserVar[coin]>=$getServerVar[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$message[1];1;coin1;1];2;coin2;1];3;coin3;1];4;coin4;1];5;coin5;1]];•You don't have enough coins]


$argsCheck[>1;•You forgot to write the product number]
$endif

$color[00ff00]`
})
