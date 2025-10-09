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
    allthemods.add('justdirethings:tick_speed_deny', '@industrialforegoingsouls')
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
    allthemods.add('minecraft:bookshelf_books', 'actuallyadditions:booklet')

    // Forbiden Arcanus Stellar Blacklist
    allthemods.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm')

    // Overdrive
    allthemods.add("industrialization_overdrive:multi_processing_array_blacklist", [
      "modern_industrialization:auto_forge",
      "modern_industrialization:star_altar",
      "modern_industrialization:runic_crucible",
      "modern_industrialization:runic_enchanter"
    ])
})

ServerEvents.tags('entity_type', allthemods => {

    allthemods.add('c:bosses', [
        "allthemodium:piglich",
        "cataclysm:amethyst_crab",
        "cataclysm:ancient_remnant",
        "cataclysm:coralssus",
        "cataclysm:ender_golem",
        "cataclysm:ender_guardian",
        "cataclysm:ignis",
        "cataclysm:ignited_revenant",
        "cataclysm:kobolediator",
        "cataclysm:maledictus",
        "cataclysm:modern_remnant",
        "cataclysm:netherite_monstrosity",
        "cataclysm:the_baby_leviathan",
        "cataclysm:the_harbinger",
        "cataclysm:the_leviathan",
        "cataclysm:the_prowler",
        "cataclysm:wadjet",
        "eternal_starlight:starlight_golem",
        "eternal_starlight:the_gatekeeper",
        "#neoforge:bosses"
    ])

    allthemods.add('allthemods:jank_blacklist', [
        "@iceandfire",
        'ars_nouveau:animated_block',
        'artifacts:mimic',
        'create:package',
        'mekanism:robit',
        'twilightforest:hedge_spider',
        'twilightforest:swarm_spider',
        '#c:bosses',
        "@occultism",
        "@productivebees",
        "forbidden_arcanus:corrupt_lost_soul",
        "forbidden_arcanus:lost_soul",
        "forbidden_arcanus:enchanted_lost_soul"
    ])

    allthemods.add('apothic_spawners:blacklisted_from_spawners', '#allthemods:jank_blacklist')
    allthemods.add('enderio:soul_vial_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('industrialforegoing:mob_duplicator_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('industrialforegoing:mob_crusher_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('justdirethings:paradox_deny', '#allthemods:jank_blacklist');
    allthemods.add('tombstone:unhandled_tamable', '#allthemods:jank_blacklist')
    allthemods.add('mob_grinding_utils:no_swab', '#allthemods:jank_blacklist')
    allthemods.add('mob_grinding_utils:no_spawn', '#allthemods:jank_blacklist')
    allthemods.add('enderio:spawner_blacklist', '#allthemods:jank_blacklist')
    allthemods.add('ars_additions:source_spawner_denylist', '#allthemods:jank_blacklist')
    allthemods.add('oritech:spawner_blacklist', '#allthemods:jank_blacklist')
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

ServerEvents.tags('item', allthemods => {
    // Fix dyenamicandfriends
    
  allthemods.remove('c:crops/pumpkin', [
    "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_pumpkin"
  ])
  
  allthemods.remove('c:pumpkins/carved', [
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
  ])
  
  allthemods.remove('c:pumpkins/jack_o_lanterns', [
    "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
  ])
  
  allthemods.remove('c:pumpkins', [
    "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_pumpkin"
  ])
  
  allthemods.remove('minecraft:enchantable/equippable', [
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
  ])
  
  allthemods.remove('minecraft:enchantable/vanishing', [
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
  ])
})

ServerEvents.tags('block', allthemods => {
    // Fix dyenamicandfriends

  allthemods.remove('c:pumpkins', [
    "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_pumpkin"
  ])
    
  allthemods.remove('c:pumpkins/carved', [
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
  ])
  
  allthemods.remove('c:pumpkins/jack_o_lanterns', [
    "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
  ])
  
  allthemods.remove('minecraft:mineable/axe', [
    "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_pumpkin",
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
  ])
  
  allthemods.remove('minecraft:sword_efficient', [
    "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_pumpkin",
    "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin",
    "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern",
    "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
  ])
})

ServerEvents.tags('worldgen/biome', allthemods => {
    // JustDireThings
   allthemods.add('justdirethings:unstable_portal_fluid_viable', ["nullscape:crystal_peaks", "nullscape:shadowlands", "nullscape:void_barrens"]);
});

ServerEvents.tags('mob_effect', allthemods => {
  
  allthemods.add('irons_spellbooks:cleanse_immune', [
    "cataclysm:ghost_sickness"
  ]);

});

// cataclysm:ghost_sickness


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

