const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
var prefix = "+";


//TOKEN
client.login(process.env.BOT_TOKEN);

//BOT AÇILINCA
client.on("ready", () => {
  console.log('[------------] Ramazan Bot [-------------]');
  console.log(`${client.guilds.size} tane sunucuya hizmet veriyor`);
  console.log(`${client.users.size} kullaniciya hizmet veriyor`);
  console.log(`${client.channels.size} kanala hizmet veriyor`);
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot Isim:" + client.user.username);
  console.log('[------------] Ramazan Bot [-------------]');
});

//Oynuyor
client.on("ready", () => {
  client.user.setStatus("STREAMING");
  client.user.setActivity(
    "Hoş Geldin Ya Şehr-i Ramazan | ",
    {type: "STREAMING"}
  );
});

//Acıktım diyince olacaklar
client.on("message", msg => {
  if (msg.content === "acıktım") {
    if (Math.floor(Math.random() * 15 + 1) === 1) {
      msg.reply("Az sabret iftara az kaldı!");
    } else if (Math.floor(Math.random() * 15 + 1) === 2) {
      msg.reply("Sabreden deviş muradına ermiş!");
    } else if (Math.floor(Math.random() * 15 + 1) === 3) {
      msg.reply("Sabret kardeşim!");
    } else if (Math.floor(Math.random() * 15 + 1) === 4) {
      msg.reply("Film izle. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 5) {
      msg.reply("Dizi izle. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 6) {
      msg.reply("Oyun oyna. Açlığını unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 7) {
      msg.reply("Ders çalış açlığını unutursun! Açlığını unutursun. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 8) {
      msg.reply(
        "Git bi gez gel. Açlığını unutursun. Güneşden gitmemeye çalış!"
      );
    } else if (Math.floor(Math.random() * 15 + 1) === 9) {
      msg.reply("Geçecek bunlar, sen neler atlattın bu ne ki? :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 10) {
      msg.reply("Büyüyünce geçer. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 11) {
      msg.reply("Ağla. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 12) {
      msg.reply("Lanet olsun dostum, hemen o elindeki çatalı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 13) {
      msg.reply("Lanet olsun dostum, hemen o elindeki kaşığı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 14) {
      msg.reply("Lanet olsun dostum, hemen o elindeki bıçağı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 15) {
      msg.reply("Başka bir şey düşünmeye çalış!");
    }
  }

  //Susadım diyince olacaklar
  if (msg.content === "susadım") {
    if (Math.floor(Math.random() * 15 + 1) === 1) {
      msg.reply("Az sabret iftara az kaldı!");
    } else if (Math.floor(Math.random() * 15 + 1) === 2) {
      msg.reply("Sabreden deviş muradına ermiş!");
    } else if (Math.floor(Math.random() * 15 + 1) === 3) {
      msg.reply("Sabret kardeşim!");
    } else if (Math.floor(Math.random() * 15 + 1) === 4) {
      msg.reply("Film izle. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 5) {
      msg.reply("Dizi izle. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 6) {
      msg.reply("Oyun oyna. Susuzluğunu unutursun. :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 7) {
      msg.reply("Ders çalış açlığını unutursun! Susuzluğunu unutursun. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 8) {
      msg.reply("Git bi gez gel. Susuzluğunu unutursun.");
    } else if (Math.floor(Math.random() * 15 + 1) === 9) {
      msg.reply("Geçecek bunlar, sen neler atlattın bu ne ki? :)");
    } else if (Math.floor(Math.random() * 15 + 1) === 10) {
      msg.reply("Büyüyünce geçer. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 11) {
      msg.reply("Ağla. :D");
    } else if (Math.floor(Math.random() * 15 + 1) === 12) {
      msg.reply("Lanet olsun dostum, hemen o elindeki şişeyi yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 13) {
      msg.reply("Lanet olsun dostum, hemen o elindeki içeceği yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 14) {
      msg.reply("Lanet olsun dostum, hemen o elindeki bardağı yere bırak!");
    } else if (Math.floor(Math.random() * 15 + 1) === 15) {
      msg.reply("Başka bir şey düşünmeye çalış!");
    }
  }
  //Sıkılmak - of ah oh püf mesajları
  if (msg.content === "of") {
    msg.reply("Oflama geçer bugünler!");
  }

  if (msg.content === "ah") {
    msg.reply("Ah deme oh de!");
  }

  if (msg.content === "oh") {
    msg.reply("Oh deme püf de!");
  }

  if (msg.content === "püf") {
    msg.reply("Püf deme of de!");
  }
  //İftar ile alakalı mesajlar
  if (msg.content === "iftara ne kadar var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç saat var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç dakika var") {
    msg.reply("Şimdi öğren -> https://iftaranekadarkaldi.com/");
  }

  if (msg.content === "iftara kaç gün var") {
    msg.reply("Yok devenin bale pabucu!?");
  }

  if (msg.content === "iftar ne zaman") {
    if (Math.floor(Math.random() * 4 + 1) === 1) {
      msg.reply("Zamanı geldiği zaman!");
    } else if (Math.floor(Math.random() * 4 + 1) === 2) {
      msg.reply("İmam uyumuş olmasın?");
    } else if (Math.floor(Math.random() * 4 + 1) === 3) {
      msg.reply("İmam bayıldı(!)");
    } else if (Math.floor(Math.random() * 4 + 1) === 4) {
      msg.reply("Biraz Google la! ;)");
    }
  }

  if (msg.content === "iftara ne kadar kaldı") {
    if (Math.floor(Math.random() * 4 + 1) === 1) {
      msg.reply("Çok değil!");
    } else if (Math.floor(Math.random() * 4 + 1) === 2) {
      msg.reply("Görende 3 gün aç kaldı sanacak!");
    } else if (Math.floor(Math.random() * 4 + 1) === 3) {
      msg.reply("Görende 3 gün susuz kaldı sanacak!");
    } else if (Math.floor(Math.random() * 4 + 1) === 4) {
      msg.reply("Sabret biraz! ;)");
    }
  }
  //Çeşitli Hal hatır sorma selam verme mesajları
  if (msg.content === "selamın aleyküm") {
    msg.reply("ve aleyküm selam");
  }

  if (msg.content === "bye bye") {
    msg.reply("su gibi git su gibi gel");
  }

  if (msg.content === "günaydın") {
    msg.reply("sana da günaydın");
  }

  if (msg.content === "herkese günaydın") {
    msg.reply("yepyeni bir güne merhaba :)");
  }

  if (msg.content === "iyi geceler") {
    msg.reply("sana da iyi geceler");
  }

  if (msg.content === "iyi akşamlar") {
    msg.reply("sana da iyi akşamlar");
  }

  if (msg.content === "güle güle") {
    msg.reply("sana da güle güle");
  }
});

//Zappara
client.on("message", msg => {
  if (msg.content === prefix + 'zappara') {
const embed = new Discord.RichEmbed()
  .setTitle("This is your title, it can hold 256 characters")
  .setAuthor("Author Name", "https://i.imgur.com/lm8s41J.png")
  .setColor(0x00AE86)
  .setDescription("This is the main body of text, it can hold 2048 characters.")
  .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png")
  .setImage("http://i.imgur.com/yVpymuV.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField("This is a field title, it can hold 256 characters",
    "This is a field value, it can hold 2048 characters.")
  .addField("Inline Field", "They can also be inline.", true)
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);
  msg.channel.send({embed})
  }});
