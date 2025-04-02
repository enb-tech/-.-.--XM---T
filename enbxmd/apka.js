const {
  zokou
} = require("../framework/zokou");
const {
  default: axios
} = require("axios");
zokou({
  "nomCom": "apk1",
  "aliases": ["app", "playstore"],
  "reaction": "??",
  "categorie": "Download"
}, async (_0x56b9e7, _0xc2e8ad, _0x1b17b1) => {
  const {
    repondre: _0x5c2a00,
    arg: _0x25c412,
    ms: _0x37fac7
  } = _0x1b17b1;
  try {
    const _0x52b2e1 = _0x25c412.join(" ");
    if (!_0x52b2e1) {
      return _0x5c2a00("Please provide an app name.");
    }
    const _0x411f21 = await axios.get("https://bk9.fun/search/apk?q=" + _0x52b2e1);
    const _0x1d223e = _0x411f21.data;
    if (!_0x1d223e.BK9 || _0x1d223e.BK9.length === 0x0) {
      return _0x5c2a00("No app found with that name, please try again.");
    }
    const _0x319cc0 = await axios.get("https://bk9.fun/download/apk?id=" + _0x1d223e.BK9[0x0].id);
    const _0x23e2f7 = _0x319cc0.data;
    if (!_0x23e2f7.BK9 || !_0x23e2f7.BK9.dllink) {
      return _0x5c2a00("Unable to find the download link for this app.");
    }
    await _0xc2e8ad.sendMessage(_0x56b9e7, {
      "document": {
        "url": _0x23e2f7.BK9.dllink
      },
      "fileName": _0x23e2f7.BK9.name + ".apk",
      "mimetype": "application/vnd.android.package-archive",
      "caption": "ENB-XMD-BOT"
    }, {
      "quoted": _0x37fac7
    });
  } catch (_0x340556) {
    console.error("Error during APK download process:", _0x340556);
    _0x5c2a00("APK download failed. Please try again later.");
  }
});
