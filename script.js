// Language Data 
const texts = {
    en: {
        title: "The Layered Sovereign",
        subtitle: "From Mortal Death to Infinite Ascension",
        powerLabel: "Divine Power Level:",
        prologueTitle: "Prologue: The Truck",
        prologueText: "Rain. Headlights. Metal roared. A truck ended your mortal life. Darkness consumed all — then a god appeared. You were granted the forbidden class: GOD.",
        forestTitle: "Forest of Death",
        forestText: "Reborn as a female elf. Infinite Storage unlocked. Spear summoned. Fire, Wind, Conjunction, and Black magic awakened. Monsters fell. Levels rose infinitely.",
        twinsTitle: "The Twin Goddesses",
        bossesTitle: "Major Bosses Defeated",
        mockTitle: "The Mock Battle",
        mockText: "You fought the Summoner God. Stars shattered. Dimensions bent. You emerged victorious. The twins married his sons. Balance sealed.",
        cloudTitle: "The Cloud Kingdom",
        cloudText: "You, the Summoner God, the twins, their husbands, and Lion Fang live above reality in a floating citadel. Peace at last."
    },
    hi: {
        title: "लेयर्ड सॉवरेन",
        subtitle: "मृत्यु के बाद से अनंत आरोहण तक",
        powerLabel: "दिव्य शक्ति स्तर:",
        prologueTitle: "प्रस्तावना: ट्रक",
        prologueText: "बारिश। हेडलाइट। धातु गरज रही थी। एक ट्रक ने आपका सांसारिक जीवन समाप्त कर दिया। अंधकार ने सब कुछ निगल लिया — फिर एक देवता प्रकट हुआ। आपको प्रतिबंधित वर्ग: देवता दिया गया।",
        forestTitle: "मृत्यु का वन",
        forestText: "एक महिला एल्फ के रूप में पुनर्जन्म। अनंत संग्रहण अनलॉक। भाला बुलाया। आग, वायु, संयोजन और काली जादू जागृत। राक्षस गिरे। स्तर अनंत रूप से बढ़े।",
        twinsTitle: "जुड़वां देवियाँ",
        bossesTitle: "मुख्य बॉस हारे गए",
        mockTitle: "मॉक युद्ध",
        mockText: "आपने समनर भगवान से लड़ाई की। तारे टूट गए। आयाम मुड़े। आप विजयी हुए। जुड़वाँ उनके पुत्रों से शादी कर ली। संतुलन स्थापित।",
        cloudTitle: "क्लाउड किंगडम",
        cloudText: "आप, समनर देवता, जुड़वाँ, उनके पति, और लायन फांग अब वास्तविकता के ऊपर एक तैरते किले में रहते हैं। आखिरकार शांति।"
    },
    mr: {
        title: "लेयर्ड सॉवरिन",
        subtitle: "मृत्यू पासून अनंत आरोहणपर्यंत",
        powerLabel: "दैवी शक्ती स्तर:",
        prologueTitle: "प्रस्तावना: ट्रक",
        prologueText: "पाऊस. हेडलाईट्स. लोह गरजत होते. एक ट्रकने तुमचे सांसारीक जीवन संपवले. अंधाराने सर्व काही व्यापले — मग एक देव प्रकट झाला. तुम्हाला प्रतिबंधित वर्ग: देव दिला गेला.",
        forestTitle: "मृत्यूचा वन",
        forestText: "एक महिला एल्फ म्हणून पुनर्जन्म. अनंत संचयन अनलॉक. भाला तयार केला. आग, वारा, संयोजन आणि काळी जादू जागृत. राक्षस पडले. स्तर अनंत वाढले.",
        twinsTitle: "जुळ्या देव्या",
        bossesTitle: "मुख्य बॉसेस पराभूत",
        mockTitle: "मॉक लढाई",
        mockText: "तुम्ही समनर देवाशी लढाई केली. तारे फाटले. आयाम वाकले. तुम्ही विजयी झाले. जुळ्या त्याच्या पुत्रांशी विवाह केल्या. संतुलन स्थापित झाले.",
        cloudTitle: "क्लाउड किंगडम",
        cloudText: "तुम्ही, समनर देव, जुळ्या, त्यांचे पती आणि लायन फांग आता वास्तविकतेच्या वर एका तरंगत्या किल्ल्यात राहता. अखेरीस शांतता."
    }
};

let lang = "en";

// Language selection
function setLanguage(l) {
    lang = l;
    document.getElementById("lang-modal").style.display = "none";
    updateLanguage();
}

function updateLanguage() {
    document.getElementById("title").textContent = texts[lang].title;
    document.getElementById("subtitle").textContent = texts[lang].subtitle;
    document.getElementById("power-label").textContent = texts[lang].powerLabel;
    document.getElementById("prologue-title").textContent = texts[lang].prologueTitle;
    document.getElementById("prologue-text").textContent = texts[lang].prologueText;
    document.getElementById("forest-title").textContent = texts[lang].forestTitle;
    document.getElementById("forest-text").textContent = texts[lang].forestText;
    document.getElementById("twins-title").textContent = texts[lang].twinsTitle;
    document.getElementById("bosses-title").textContent = texts[lang].bossesTitle;
    document.getElementById("mock-title").textContent = texts[lang].mockTitle;
    document.getElementById("mock-text").textContent = texts[lang].mockText;
    document.getElementById("cloud-title").textContent = texts[lang].cloudTitle;
    document.getElementById("cloud-text").textContent = texts[lang].cloudText;
}

// Live Divine Power Counter + Fusion Particle Effect
let power = 1;
const powerDisplay = document.getElementById("power");
setInterval(() => {
    power *= 1.05;
    powerDisplay.textContent = Math.floor(power).toLocaleString();
}, 300);

// Twin Profile
const profiles = {
    luminara: "<h3>Luminara</h3><p>Silver hair, golden eyes, calm strategist. Aura like folded light.</p>",
    velisara: "<h3>Velisara</h3><p>Silver hair, blue sigil eyes, adaptive counterattacks. Aura flickers like lightning.</p>"
};

function showProfile(name) {
    const box = document.getElementById("profile-box");
    document.getElementById("profile-content").innerHTML = profiles[name];
    box.style.display = "block";
}
function closeProfile() { document.getElementById("profile-box").style.display = "none"; }

// Boss Profiles
const bosses = {
    goblinlord: "<h3>Goblin Lord</h3><p>Gigantic goblin, green glowing eyes, chaotic battlefield commander. Defeated by Lion Fang party.</p>",
    xarthul: "<h3>Demon Lord Xarthul</h3><p>Sky Splitter. Massive abyssal armor. Defeated by twin daughters.</p>",
    kaelis: "<h3>Void Emperor Kaelis</h3><p>Dimension Bender. Controlled 3 layers. Integrated by your power.</p>",
    orion: "<h3>Celestial King Orion</h3><p>Star Devourer. Absorbed star energy. Destroyed via spatial inversion.</p>",
    prime: "<h3>Layer Guardian Prime</h3><p>Reality Anchor. Final abstract entity before summit. Integrated into your system.</p>"
};
function showBoss(name) {
    const box = document.getElementById("boss-profile");
    document.getElementById("boss-content").innerHTML = bosses[name];
    box.style.display = "block";
}
function closeBoss() { document.getElementById("boss-profile").style.display = "none"; }

// Twin Fusion Animation
document.getElementById("fusion-btn").addEventListener("click", () => {
    const anim = document.getElementById("fusion-animation");
    anim.style.display = "block";
    anim.style.boxShadow = "0 0 100px 50px gold, 0 0 150px 80px cyan, 0 0 200px 100px magenta";
    setTimeout(()=>{anim.style.display="none"; anim.style.boxShadow="";}, 5000);
});
