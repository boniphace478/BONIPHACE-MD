import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['alive', 'boniuptime', 'uptime'].includes(cmd)) {

  const uptimeMessage = `*𝔹𝕆ℕ𝕀𝔽ℍ𝔸ℂ𝔼-𝕄𝔻-𝕆ℕ𝕃𝕀ℕ𝔼😎*

╔═━━━━━━━━━━━════─━━━━━━──➳
┇  𝔹𝕆ℕ𝕀𝔽ℍ𝔸ℂ𝔼-𝕄𝔻-𝕀𝕊-𝕆ℕ𝕃𝕀ℕ𝔼-🔥
┇ *${days} Day*
┇ *${hours} Hour*
┇ *${minutes} Minute*
┇ *${seconds} Second*
┇  𝗞𝗔𝗠𝗔 𝗞𝗔𝗪𝗔👊🤪 ${m.pushName}
╚══━━━━━━━━━━════─━━━━━━──➳
`;

  const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "Ping⚙️",
          id: `${prefix}ping`
        })
      }
    ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "© bonifhace tech"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '255716661569',
                  newsletterName: "𝔹𝕆ℕ𝕀𝔽ℍ𝔸ℂ𝔼-𝕄𝔻",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
