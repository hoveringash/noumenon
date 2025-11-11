let isEnglish = false;

const russianTexts = {
    text1: "ТП УМФС РОССИИ ПО РЕСПУБЛИКЕ КРЫМ\nВ П. ЛИВАДИЯ",
    text2: "24.02.2020",
    text3: "666-999",
    text4: "ДАВЛАТАФЗАТОВНА",
    text5: "АГАТА",
    text6: "КРИСТИАН",
    text7: "Ж",
    text8: "30.02.0001",
    text9: "Г. КРИВОЙ РОГ",
    text10: "14  87   193945",
    text11: "14  87   193945"
};

const englishTexts = {
    text1: "FEDERAL MIGRATION SERVICE OF RUSSIA,\nREPUBLIC OF CRIMEA, LIVADIA VILLAGE",
    text2: "24.02.2022",
    text3: "666-999",
    text4: "DAVLATAFZATOVNA",
    text5: "AGATA",
    text6: "CHRISTIAN",
    text7: "F",
    text8: "30.02.0001",
    text9: "C. KRIVOY ROG",
    text10: "14  87   193945",
    text11: "14  87   193945"
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
