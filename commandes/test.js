"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");
zokou({ nomCom: "test", reaction: "📎", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
    console.log("Commande saisie !!!s");
    let z = 'Hello my name is  *𝔹𝕆ℕ𝕀ℙℍ𝔸ℂ𝔼 𝕄𝔻* \n\n ' + "i'm a whatsapp bot multi-device created ";
    let d = ' by *𝔹𝕆ℕ𝕀ℙℍ𝔸ℂ𝔼 𝕋𝔼ℂℍ*';
    let varmess = z + d;
    var img = 'https://telegra.ph/file/1c7db35f3445430d1bbee.jpg';
    await zk.sendMessage(dest, { image: { url: img }, caption: varmess });
    //console.log("montest")
});
console.log("mon test");
/*module.exports.commande = () => {
  var nomCom = ["test","t"]
  var reaction="☺️"
  return { nomCom, execute,reaction }
};

async function  execute  (origineMessage,zok) {
  console.log("Commande saisie !!!s")
   let z ='Salut je m\'appelle *BONIPHACE* \n\n '+'je suis un bot Whatsapp Multi-appareil '
      let d =' developpé par *Boniphace*'
      let varmess=z+d
      var img='https://telegra.ph/file/1c7db35f3445430d1bbee.jpg'
await  zok.sendMessage(origineMessage,  { image:{url:img},caption:varmess});
}  */ 
