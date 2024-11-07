import axios from 'axios';
import config from '../../config.cjs';

const imdb = async (m, gss) => {
  try {
    const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

    const validCommands = ['hack'];

    if (!validCommands.includes(cmd)) return;

    await zk.sendMessage(dest, "```hans_md Injecting malware```");
    await sleep(30000);

    await zk.sendMessage(dest, "```hans into device \n 0%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering photos \n █ 10%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ 20%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering videos \n █ █ █ 30%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ 40%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering audio \n █ █ █ █ █ 50%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ 60%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering hidden files \n █ █ █ █ █ █ █ 70%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ 80%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfering whatsapp chat \n █ █ █ █ █ █ █ █ █ 90%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```transfer successful \n █ █ █ █ █ █ █ █ █ █ 100%```");
    await sleep(30000);

    await zk.sendMessage(dest, "```System hyjacking on process.. \n Conecting to Server ```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Divice successfully connected... \n Riciving data...```");
    await sleep(30000);

    await zk.sendMessage(dest, "```Data hyjacked from divice 100% completed \n killing all evidence killing all malwares...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` HACKING COMPLETED ```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SENDING PHONE DOCUMENTS...```");
    await sleep(30000);

    await zk.sendMessage(dest, "``` SUCCESSFULLY SENT DATA AND Connection disconnected```");
    await sleep(30000);

    return zk.sendMessage(dest, '*ALL FILES TRANSFERRED*');
  });

async function sleep(ms) {
  await new Promise(resolve => setTimeout(resolve, ms));
}

export default hack;


