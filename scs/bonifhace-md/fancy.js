import config from '../../config.cjs';

const tagall = async (m, gss) => {
  try {
    const botNumber = await gss.decodeJid(gss.user.id);
    const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();
    
    const validCommands = ['fancy'];
    if (!validCommands.includes(cmd)) return;

    try {
        if (id === undefined || text === undefined) {
            return await repondre(`\nExemple : ${prefixe}fancy 10 BONIFHACE TECH\n` + String.fromCharCode(8206).repeat(4001) + fancy.list('BONIFHACE😎_MD ', fancy));
        }

        const selectedStyle = fancy[parseInt(id) - 1];
        if (selectedStyle) {
            return await repondre(fancy.apply(selectedStyle, text));
        } else {
            return await repondre('_Style introuvable :(_');
        }
    } catch (error) {
        console.error(error);
        return await repondre('_Une erreur s\'est produite :(_');
    }
});

export default fanycy;