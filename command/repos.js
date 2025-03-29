"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://github.com/Kidorganic08/ELLY-XMD
  const img = ''https://files.catbox.moe/rq99zg.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow Friend
this is* *Σ.И.ß-XM𝐃-𝚩𝚯T.*\n *Follow and support our channel *https://whatsapp.com/channel/0029VbAUgMN8PgsNmEEyBs1t

🗼 *REPOSITORY:* ${data.html_url}
💫 *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
🙊 *OWNER:* *Σ.И.ß-XM𝐃-𝚩𝚯T*
🍃 *THEME:* *Σ.И.ß-XM𝐃-𝚩𝚯T*
🍷 *believe in yourself don't depend on anyone*
__________________________________
            *Made With Σ.И.ß-XM𝐃-𝚩𝚯T- Team*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
