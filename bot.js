const Discord = require("discord.js");
const ytdl = require("ytdl-core");
const client = new Discord.Client();
var prefix = "+";

const connections = new Map();
let broadcast;


//TOKEN
client.login(process.env.BOT_TOKEN);

//BOT AÇILINCA
client.on("ready", () => {
  console.log("Giris Saglandi");
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot Isim:" + client.user.username);
});

//Oynuyor
client.on("ready", () => {
  client.user.setStatus("STREAMING");
  client.user.setActivity(
    "+yardım | RamazanBot | Hoş Geldin Ey Şehri Ramazan |www.enesonurata.cf",
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




client.on('message', m => {
  if (!m.guild) return;
  if (m.content.startsWith('+gir')) {
    const channel = m.guild.channels.get(m.content.split(' ')[1]) || m.member.voiceChannel;
    if (channel && channel.type === 'voice') {
      channel.join().then(conn => {
        conn.player.on('error', (...e) => console.log('player', ...e));
        if (!connections.has(m.guild.id)) connections.set(m.guild.id, { conn, queue: [] });
        m.reply('Girdim!');
      });
    } else {
      m.reply('Lütfen bir sesli kanala giriniz!');
    }
  } else if (m.content.startsWith('+çal')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      const queue = connData.queue;
      const url = m.content.split(' ').slice(1).join(' ')
        .replace(/</g, '')
        .replace(/>/g, '');
      queue.push({ url, m });
      if (queue.length > 1) {
        m.reply(`İstediğiniz müzik ${queue.length - 1} adet müzikten sonra çalacak`);
        return;
      }
      doQueue(connData);
    }
  } else if (m.content.startsWith('+geç')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      if (connData.dispatcher) {
        connData.dispatcher.end();
      }
    }
  } else if (m.content.startsWith('+kuyruk')) {
    if (connections.has(m.guild.id)) {
      const connData = connections.get(m.guild.id);
      const queue = connData.queue;
      m.reply(queue.map(q => q.url));
    }
  }
});

function doQueue(connData) {
  const conn = connData.conn;
  const queue = connData.queue;
  const item = queue[0];
  if (!item) return;
  const stream = ytdl(item.url, { filter: 'audioonly' }, { passes: 3 });
  const dispatcher = conn.playStream(stream);
  stream.on('info', info => {
    item.m.reply(`Çalınan: **${info.title}**`);
  });
  dispatcher.on('end', () => {
    queue.shift();
    doQueue(connData);
  });
  dispatcher.on('error', (...e) => console.log('dispatcher', ...e));
  connData.dispatcher = dispatcher;
}
