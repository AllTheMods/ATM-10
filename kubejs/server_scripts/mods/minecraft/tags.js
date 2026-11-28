// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('item', event => {
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:snowball')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:string')
    event.add('megacells:compression_overrides', 'minecraft:string')
    event.add('megacells:compression_overrides', 'minecraft:honeycomb')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:honeycomb')
    event.add('functionalstorage:ignore_crafting_check', 'minecraft:magma_cream')
    event.add('allthemods:planks_with_bookshelf', [
        /^productivetrees:.*_planks$/,
        /^biomeswevegone:.*_planks$/,
        '#allthemodium:ancient_planks',
        '#allthemodium:demonic_planks',
        '#allthemodium:soul_planks'
    ])
    event.add('allthemods:planks_with_crafting_table', /^biomeswevegone:.*_planks$/)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
