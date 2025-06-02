// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('block', allthemods => {
    // Waystones
    allthemods.add('ftbchunks:interact_whitelist', ['@waystones'])

    // Extreme Reactors
    allthemods.add('c:storage_blocks/yellorium', 'alltheores:uranium_block')

    // Essence Blocks
    allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    allthemods.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    //Entangled
    allthemods.add('entangled:invalid_targets',
        ['@ae2', '@advancedae', '@extendedae', '@megacells', '@appflux', '@appmek']
    )

    // Just Dire Things
    allthemods.add('justdirethings:lawnmowerable', '#c:grass')
})

ServerEvents.tags('fluid', allthemods => {
    // Pneumaticcraft
    allthemods.add('c:ethanol', 'pneumaticcraft:ethanol')
})

ServerEvents.tags('item', allthemods => {
    // Extreme Reactors (using config/almostunified/tags.json)
    // allthemods.add('c:ingots/yellorium', 'alltheores:uranium_ingot')
    allthemods.add('c:storage_blocks/raw_yellorium', 'bigreactors:raw_yellorium_block')

    // Tiny Coal
    allthemods.add('atm10:tiny_coals', [
        'utilitarian:tiny_coal',
        'actuallyadditions:tiny_coal',
    ])
    allthemods.add('atm10:tiny_charcoals', [
        'utilitarian:tiny_charcoal',
        'actuallyadditions:tiny_charcoal',
    ])

    // Allthemodium Alloy Dusts
    allthemods.add('c:dusts/unobtainium_allthemodium_alloy', 'allthemodium:unobtainium_allthemodium_alloy_dust')
    allthemods.add('c:dusts/unobtainium_vibranium_alloy', 'allthemodium:unobtainium_vibranium_alloy_dust')
    allthemods.add('c:dusts/vibranium_allthemodium_alloy', 'allthemodium:vibranium_allthemodium_alloy_dust')
    allthemods.add('c:dusts', [
        '#c:dusts/unobtainium_allthemodium_alloy',
        '#c:dusts/unobtainium_vibranium_alloy',
        '#c:dusts/vibranium_allthemodium_alloy',
    ])

    allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_crimson_iron')
    allthemods.add('c:storage_blocks', '#c:storage_blocks/raw_azure_silver')

    // Essence Blocks
    allthemods.add('c:storage_blocks/air_essence', 'kubejs:air_essence_block')
    allthemods.add('c:storage_blocks/earth_essence', 'kubejs:earth_essence_block')
    allthemods.add('c:storage_blocks/fire_essence', 'kubejs:fire_essence_block')
    allthemods.add('c:storage_blocks/water_essence', 'kubejs:water_essence_block')
    allthemods.add('c:storage_blocks', [
        '#c:storage_blocks/air_essence',
        '#c:storage_blocks/earth_essence',
        '#c:storage_blocks/fire_essence',
        '#c:storage_blocks/water_essence'
    ])

    // Bibliocraft compat
    // Ars Elemental Books
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:air_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:fire_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:water_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:earth_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:anima_caster_tome')
    allthemods.add('minecraft:bookshelf_books', 'ars_elemental:manipulation_caster_tome')

    // More books
    allthemods.add('minecraft:bookshelf_books', 'patchouli:guide_book')
    allthemods.add('minecraft:bookshelf_books', 'evilcraft:origins_of_darkness')
    allthemods.add('minecraft:bookshelf_books', 'ae2:guide')
    allthemods.add('minecraft:bookshelf_books', 'powah:book')

    // Forbiden Arcanus Stellar Blacklist
    allthemods.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm')
})

ServerEvents.tags('entity_type', allthemods => {
    // Productive Bees
    allthemods.add('justdirethings:paradox_deny', /productivebees:/);
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', /productivebees:/)

    // Allthemodium
    allthemods.add('justdirethings:paradox_deny', 'allthemodium:piglich');
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', 'allthemodium:piglich')

    // Occultism
    allthemods.add('justdirethings:paradox_deny', /occultism:/);
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', /occultism:/)

    allthemods.add('c:bosses', [
        "cataclysm:ender_guardian",
        "cataclysm:ender_golem",
        "cataclysm:nether_monstrosity",
        "cataclysm:ignis",
        "cataclysm:the_harbringer",
        "cataclysm:the_leviathan",
        "cataclysm:ancient_remnant",
        "cataclysm:maledictus",
        "cataclysm:ignited_revenant",
        "cataclysm:the_prowler",
        "cataclysm:the_baby_leviathan",
        "cataclysm:coralssus",
        "cataclysm:amethyst_crab",
        "cataclysm:modern_remnant",
        "cataclysm:kobolediator",
        "cataclysm:wadjet",
        "allthemodium:piglich"
    ])

    //Industrial Foregoing
    allthemods.add('industrialforegoing:mob_crusher_blacklist', [
        "#c:bosses",
        "eternal_starlight:the_gatekeeper",
        "eternal_starlight:starlight_golem",
        "allthemodium:piglich"
    ])

    //Apothic Spawners
    allthemods.add('apothic_spawners:blacklisted_from_spawners', [
            /productivebees/,
            "artifacts:mimic",
            "twilightforest:swarm_spider",
            "twilightforest:hedge_spider",
        ]
    )
    // Create
    allthemods.add('justdirethings:paradox_deny', 'create:package');

    // Mekanism
    allthemods.add('justdirethings:paradox_deny', 'mekanism:robit');

    // Ars 
    allthemods.add('justdirethings:paradox_deny', 'ars_nouveau:animated_block');
});

ServerEvents.tags('worldgen/structure', allthemods => {
    // Cataclysm
    allthemods.add('cataclysm:berserker_spawn', "betterfortresses:fortress");
});

ServerEvents.tags('enchantment', allthemods => {
    // Apoth Enchanting
    allthemods.remove('minecraft:non_treasure', "apothic_enchanting:miners_fervor");
});

ServerEvents.tags('block_entity_type', allthemods => {
    // Apoth Enchanting
    allthemods.remove('packingtape:blacklist/problematic', ["extrastorage:block_16384k_fluid", "extrastorage:block_65536k_fluid", "extrastorage:block_262144k_fluid", "extrastorage:block_1048576k_fluid"]);
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
