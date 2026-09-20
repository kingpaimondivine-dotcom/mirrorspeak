/* Reconstructive lexicons — Classical Attic Greek + Middle Egyptian (Egyptological).
   These are teaching approximations, not native speaker recordings. */
(function (global) {
  const GREEK = {
    id: "grc",
    title: "Ancient Greek",
    subtitle: "5th-century Attic, reconstructed",
    listenHint: "el-GR",
    ttsLang: "el-GR",
    note:
      "No ancient recording exists. This uses reconstructed Classical Attic: consonants as stops (β = b, not v; θ φ χ = aspirated t/p/k), υ like French u, αι = eye, ει ≈ close ē, rough breathing = h. Later Koine and modern Greek sound different. Live captions, if any, use modern Greek as the nearest engine.",
    key: [
      ["αι", "ai", "aisle / eye"],
      ["ει", "ē / ei", "they, later ee"],
      ["οι", "oi", "coin"],
      ["αυ", "au", "out"],
      ["ευ", "eu", "eh-oo, later ev/ef"],
      ["η", "ē", "long open eh"],
      ["ω", "ō", "long aw / oh"],
      ["υ", "ü", "French lune, German über"],
      ["β γ δ", "b g d", "stops, not v / y / dh"],
      ["θ φ χ", "tʰ pʰ kʰ", "t + puff of air, not th/f/kh"],
      ["ζ", "zd", "as in Mazda"],
      ["῾ rough", "h-", "ὅρος = HOR-os"]
    ],
    words: [
      { w: "θεός", say: "theh-OS", ipa: "tʰeós", en: "god", speak: "θεός" },
      { w: "λόγος", say: "LOG-os", ipa: "lógos", en: "word, account, reason", speak: "λόγος" },
      { w: "ψυχή", say: "psü-KHĒ", ipa: "psykʰɛ́ː", en: "breath, soul", speak: "ψυχή" },
      { w: "ἀλήθεια", say: "a-LĒ-thei-a", ipa: "alɛ́ːtʰeia", en: "truth, unconcealment", speak: "αλήθεια" },
      { w: "γνῶσις", say: "GNŌ-sis", ipa: "gnɔ̂ːsis", en: "knowing", speak: "γνώσις" },
      { w: "κόσμος", say: "KOS-mos", ipa: "kósmos", en: "order, world", speak: "κόσμος" },
      { w: "ἄνθρωπος", say: "AN-thrō-pos", ipa: "ántʰrɔːpos", en: "human", speak: "άνθρωπος" },
      { w: "φωνή", say: "phō-NĒ", ipa: "pʰɔːnɛ́ː", en: "voice", speak: "φωνή" },
      { w: "ἔρως", say: "ER-ōs", ipa: "érɔːs", en: "desire", speak: "έρως" },
      { w: "θάνατος", say: "THA-na-tos", ipa: "tʰánatos", en: "death", speak: "θάνατος" },
      { w: "βίος", say: "BEE-os", ipa: "bíos", en: "life", speak: "βίος" },
      { w: "ὕδωρ", say: "HÜ-dōr", ipa: "hýdɔːr", en: "water", speak: "ύδωρ" },
      { w: "φῶς", say: "PHŌS", ipa: "pʰɔ̂ːs", en: "light", speak: "φως" },
      { w: "νοῦς", say: "NOOS", ipa: "nûːs", en: "mind", speak: "νους" },
      { w: "καιρός", say: "kai-ROS", ipa: "kairós", en: "the fitting time", speak: "καιρός" },
      { w: "εἰρήνη", say: "ei-RĒ-nē", ipa: "eirɛ́ːnɛː", en: "peace", speak: "ειρήνη" },
      { w: "ἀγάπη", say: "a-GA-pē", ipa: "agápɛː", en: "love (later sense)", speak: "αγάπη" },
      { w: "μυστήριον", say: "mü-STĒ-ri-on", ipa: "mystɛ́ːrion", en: "closed rite, secret", speak: "μυστήριον" },
      { w: "χαῖρε", say: "KHAI-re", ipa: "kʰaîre", en: "hail / rejoice", speak: "χαίρε" },
      { w: "λέγε", say: "LE-ge", ipa: "lége", en: "speak! (imperative)", speak: "λέγε" }
    ]
  };
  global.Ancients = { GREEK: GREEK };
})(window);
