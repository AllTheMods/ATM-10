// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('fluid', allthemods => {
    allthemods.add('c:fuels/crude_oil', 'oritech:still_oil')
})

ServerEvents.tags('item', allthemods => {
    ;['copper', 'gold', 'iron', 'nickel', 'platinum', 'plutonium', 'uranium'].forEach(material => {
        allthemods.add(`c:tiny_dusts/${material}`, `oritech:small_${material}_dust`)
        allthemods.add('c:tiny_dusts', `oritech:small_${material}_dust`)
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.