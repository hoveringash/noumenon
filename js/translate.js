let isEnglish = false;

const russianTexts = {
    text1: "ТП УМФС РОССИИ ПО РЕСПУБЛИКЕ КРЫМ\nВ П. ЛИВАДИЯ",
    text2: "01.01.2020",
    text3: "666-999",
    text4: "ПОМФИЛОВНА",
    text5: "АГАТА",
    text6: "ЛЮДВИГ",
    text7: "Ж",
    text8: "01.01.0001",
    text9: "Г. ЧАЙХОНА",
    text10: "14  88   193945",
    text11: "14  88   193945"
};

const englishTexts = {
    text1: "Federal Migration Service of Russia, Republic of Crimea\nIn Livadia village",
    text2: "01.01.2020",
    text3: "666-999",
    text4: "Pomfilovna",
    text5: "Agata",
    text6: "Lyudvig",
    text7: "F",
    text8: "01.01.0001",
    text9: "City: Chayhona",
    text10: "14  88   193945",
    text11: "14  88   193945"
};

function toggleLanguage() {
    const texts = isEnglish ? russianTexts : englishTexts;

    for (const id in texts) {
        const el = document.getElementById(id);
        if (el) {
            el.innerText = texts[id];
        }
    }

    isEnglish = !isEnglish;
}
