// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'mysticalagriculture:essence/common/niter'})

    allthemods.remove({input: 'mysticalagriculture:rubber_essence'})
    allthemods.shaped('4x industrialforegoing:dryrubber', ['   ', 'AAA', '   '], {
        A: 'mysticalagriculture:rubber_essence'
    }).id('allthemods:essence/industrialforegoing/rubber')

    allthemods.shaped('kubejs:magical_soil', ['ABC', 'DEF', 'GHI'], {
        A: 'mysticalagradditions:insanium_block',
        B: 'allthecompressed:nether_star_block_2x',
        C: 'allthecompressed:dirt_3x',
        D: 'mysticalagriculture:awakened_supremium_growth_accelerator',
        E: 'mysticalagradditions:insanium_farmland',
        F: 'minecraft:dragon_head',
        G: 'allthemodium:piglich_heart',
        H: 'allthecompressed:ender_pearl_block_3x',
        I: 'productivetrees:moonlight_magic_crepe_myrtle_sapling'
    }).id('allthemods:kjs/magical_soil')

    allthemods.shaped('mysticalagradditions:withering_soul',
        [
            'PRP',
            'BSB',
            'PRP'
        ], {
            B: 'productivebees:configurable_comb[productivebees:bee_type="productivebees:withered"]',
            P: 'hostilenetworks:prediction[hostilenetworks:data_model="hostilenetworks:wither"]',
            R: 'reliquary:witherless_rose',
            S: 'minecraft:wither_skeleton_skull',
        }
    ).id('allthemods:mysticalagradditions/withering_soul')

    allthemods.shaped('enderio:enderman_head',
        [
            'eee',
            'ebe',
            'eee'
        ],
        {
            b: 'mysticalagriculture:blank_skull',
            e: 'mysticalagriculture:enderman_essence'
        }
    ).id('allthemods:essence/enderio/enderman_head')

    // Warped Wart Blocks
    allthemods.shaped('8x minecraft:warped_wart_block', [' A ', 'A  ', 'AAA'], {
        A: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/warped_wart_block')

    // Moss Blocks
    allthemods.shaped('8x minecraft:moss_block', ['NNN', 'NDN', 'NNN'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dirt_essence'
    }).id('allthemods:essence/minecraft/moss_block')

    // Shroomlights
    allthemods.shaped('6x minecraft:shroomlight', ['AGA', 'GAG', 'AGA'],{
        A: 'mysticalagriculture:nether_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/shroomlight')

    // Froglights
    allthemods.shaped('8x minecraft:ochre_froglight', ['NDG', 'GDN', 'NDG'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/ochre_froglight')
    allthemods.shaped('8x minecraft:pearlescent_froglight', ['DDD', 'GNG', 'NGN'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/pearlescent_froglight')
    allthemods.shaped('8x minecraft:verdant_froglight', ['NGD', 'GND', 'NGD'],{
        N: 'mysticalagriculture:nature_essence',
        D: 'mysticalagriculture:dye_essence',
        G: 'mysticalagriculture:glowstone_essence'
    }).id('allthemods:essence/minecraft/verdant_froglight')

    // Nether Vines
    allthemods.shaped('12x minecraft:twisting_vines', ['NA ', ' A ', ' AN'], {
        A: 'mysticalagriculture:nature_essence',
        N: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/twisiting_vines')
    allthemods.shaped('12x minecraft:weeping_vines', [' A ', 'NAN', ' A '], {
        A: 'mysticalagriculture:nature_essence',
        N: 'mysticalagriculture:nether_essence'
    }).id('allthemods:essence/minecraft/weeping_vines')

    // Regions Unexplored Logs
    allthemods.shaped('8x regions_unexplored:alpha_log', ['AAA', '   ', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/alpha_log')
    allthemods.shaped('8x regions_unexplored:ashen_log', ['   ', 'AAA', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/ashen_log')
    allthemods.shaped('8x regions_unexplored:bamboo_log', ['   ', '   ', 'AAA'], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/bamboo_log')
    allthemods.shaped('8x regions_unexplored:silver_birch_log', ['A  ', 'A  ', 'A  '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/silver_birch_log')
    allthemods.shaped('8x regions_unexplored:small_oak_log', [' A ', ' A ', ' A '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/small_oak_log')
    allthemods.shaped('8x regions_unexplored:baobab_log', ['  A', '  A', '  A'], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/baobab_log')
    allthemods.shaped('8x regions_unexplored:blackwood_log', ['A  ', ' A ', '  A'], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/blackwood_log')
    allthemods.shaped('8x regions_unexplored:brimwood_log', ['  A', ' A ', 'A  '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/brimwood_log')
    allthemods.shaped('8x regions_unexplored:cobalt_log', ['AA ', '  A', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/cobalt_log')
    allthemods.shaped('8x regions_unexplored:cypress_log', ['A A', ' A ', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/cypress_log')
    allthemods.shaped('8x regions_unexplored:dead_log', ['  A', 'AA ', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/dead_log')
    allthemods.shaped('8x regions_unexplored:eucalyptus_log', [' AA', 'A  ', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/eucalyptus_log')
    allthemods.shaped('8x regions_unexplored:joshua_log', ['   ', 'AA ', '  A'], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/joshua_log')
    allthemods.shaped('8x regions_unexplored:kapok_log', ['   ', 'A  ', 'AA '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/kapok_log')
    allthemods.shaped('8x regions_unexplored:larch_log', ['   ', 'A A', ' A '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/larch_log')
    allthemods.shaped('8x regions_unexplored:magnolia_log', ['   ', '  A', 'AA '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/magnolia_log')
    allthemods.shaped('8x regions_unexplored:maple_log', ['   ', ' AA', 'A  '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/maple_log')
    allthemods.shaped('8x regions_unexplored:mauve_log', ['AA ', 'A  ', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/mauve_log')
    allthemods.shaped('8x regions_unexplored:palm_log', [' AA', '  A', '   '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/palm_log')
    allthemods.shaped('8x regions_unexplored:pine_log', ['   ', 'A  ', 'AA '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/pine_log')
    allthemods.shaped('8x regions_unexplored:redwood_log', ['   ', '  A', ' AA'], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/redwood_log')
    allthemods.shaped('8x regions_unexplored:socotra_log', ['A  ', 'A  ', ' A '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/socotra_log')
    allthemods.shaped('8x regions_unexplored:willow_log', ['A  ', ' A ', ' A '], {
        A: 'mysticalagriculture:unexplored_wood_essence'
    }).id('allthemods:essence/regions_unexplored/willow_log')

    //Xychorium Gems
    allthemods.shaped('5x xycraft_world:xychorium_gem_light',
        ['XX ',
         'X  ',
         '   '],{X: 'mysticalagriculture:xychorium_gem_essence'}).id('allthemods:essence/xycraft/gem_light').noMirror()
    allthemods.shaped('5x xycraft_world:xychorium_gem_dark',
        [' XX',
         '  X',
         '   '],{X: 'mysticalagriculture:xychorium_gem_essence'}).id('allthemods:essence/xycraft/gem_dark').noMirror()
    allthemods.shaped('5x xycraft_world:xychorium_gem_red',
        ['   ',
         'X  ',
         'XX '],{X: 'mysticalagriculture:xychorium_gem_essence'}).id('allthemods:essence/xycraft/gem_red').noMirror()
    allthemods.shaped('5x xycraft_world:xychorium_gem_green',
        ['   ',
         '  X',
         ' XX'],{X: 'mysticalagriculture:xychorium_gem_essence'}).id('allthemods:essence/xycraft/gem_green').noMirror()
    allthemods.shaped('5x xycraft_world:xychorium_gem_blue',
        [' X ',
         ' X ',
         ' X '],{X: 'mysticalagriculture:xychorium_gem_essence'}).id('allthemods:essence/xycraft/gem_blue').noMirror()

    function addInfustion(seed, item, essence) {
        allthemods.custom(
            {
                type: 'mysticalagriculture:infusion',
                input: {
                    item:  'mysticalagriculture:prosperity_seed_base'
                },
                ingredients: [
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    },
                    {
                        item: item
                    },
                    {
                        item: essence
                    }
                ],
                result: {
                    id: seed
                }
            }
        ).id(seed.replace(':', ':infusion/'))
    }

    //addInfustion('mysticalagriculture:silicon_seeds', 'ae2:silicon', 'mysticalagriculture:prudentium_essence')
    //addInfustion('mysticalagriculture:steel_seeds', 'alltheores:steel_ingot', 'mysticalagriculture:imperium_essence')

    allthemods.custom(
        {
            type: "mysticalagriculture:soul_extraction",
            input: {
              tag: "c:foods/raw_fish"
            },
            result: {
              type: "mysticalagriculture:fish",
              souls: 0.5
            }
        })

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
