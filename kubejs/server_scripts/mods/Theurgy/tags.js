// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item',allthemods => {

    let sulfurData = {
        stellarite_sulfur: { derivativeTier: "precious", sulfurType: "metals" },
        arcane_sulfur: { derivativeTier: "rare", sulfurType: "gems" },
        runic_sulfur: { derivativeTier: "common", sulfurType: "metals" },
        salt_sulfur: { derivativeTier: "abundant", sulfurType: "earthen_matters" },
        sulfur_sulfur: { derivativeTier: "common", sulfurType: "misc" },
        prosperity_sulfur: { derivativeTier: "common", sulfurType: "misc" },
        iesnium_sulfur: { derivativeTier: "precious", sulfurType: "metals" },
        mithril_sulfur: { derivativeTier: "precious", sulfurType: "metals" },
        bort_sulfur: { derivativeTier: "rare", sulfurType: "earthen_matters" }
    };

    for (let sulfurName in sulfurData) {
        if (sulfurData.hasOwnProperty(sulfurName)) {
            allthemods.add('theurgy:alchemical_sulfurs', `kubejs:${sulfurName}`);
            allthemods.add('theurgy:alchemical_sulfurs_and_niters', `kubejs:${sulfurName}`);
            allthemods.add(`theurgy:alchemical_sulfurs/${sulfurData[sulfurName].sulfurType}`, `kubejs:${sulfurName}`);
            allthemods.add(`theurgy:alchemical_sulfurs/${sulfurData[sulfurName].sulfurType}/${sulfurData[sulfurName].derivativeTier}`, `kubejs:${sulfurName}`);
        }
    }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.