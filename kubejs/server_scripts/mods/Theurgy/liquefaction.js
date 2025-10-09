// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    let materials = {
        'stellarite_sulfur': {
            'ore': '#c:ores/stellarite',
            'ingot': 'forbidden_arcanus:stellarite_piece',
            'raw': null,
            'amount': 100
        },
        'arcane_sulfur': {
            'ore': '#c:ores/arcane_crystal',
            'ingot': '#c:gems/arcane_crystal',
            'raw': null,
            'amount': 20
        },
        'runic_sulfur': {
            'ore': '#c:ores/runic',
            'ingot': 'forbidden_arcanus:rune',
            'raw': null,
            'amount': 15
        },
        'salt_sulfur': {
            'ore': '#c:ores/salt',
            'ingot': '#c:dusts/salt',
            'raw': null,
            'amount': 10
        },
        'sulfur_sulfur': {
            'ore': '#c:ores/sulfur',
            'ingot': '#c:dusts/sulfur',
            'raw': null,
            'amount': 15
        },
        'prosperity_sulfur': {
            'ore': '#c:ores/prosperity',
            'ingot': 'mysticalagriculture:prosperity_shard',
            'raw': null,
            'amount': 15
        },
        'iesnium_sulfur': {
            'ore': '#c:ores/iesnium',
            'ingot': '#c:ingots/iesnium',
            'raw': '#c:raw_materials/iesnium',
            'amount': 100
        },
        'mithril_sulfur': {
            'ore': '#c:ores/mithril',
            'ingot': '#c:ingots/mithril',
            'raw': '#c:raw_materials/mithril',
            'amount': 20
        },
        'bort_sulfur': {
            'ore': '#c:ores/bort',
            'ingot': '#c:gems/bort',
            'raw': null,
            'amount': 100
        }
    }

    Object.entries(materials).forEach(([key, values]) => {
        if (values.ore) {
            allthemods.recipes.theurgy.liquefaction(
                `5x kubejs:${key}`,
                values.ore,
                `${values.amount}x theurgy:sal_ammoniac`,
                100
            );
        }
        if (values.raw) {
            allthemods.recipes.theurgy.liquefaction(
                `3x kubejs:${key}`,
                values.raw,
                `${values.amount}x theurgy:sal_ammoniac`,
                100
            );
        }
        if (values.ingot) {
            allthemods.recipes.theurgy.liquefaction(
                `1x kubejs:${key}`,
                values.ingot,
                `${values.amount}x theurgy:sal_ammoniac`,
                100
            );
        }
    });

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
