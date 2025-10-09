// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    
    let enchantingBase = [
        {
            input: 'minecraft:writable_book',
            output: 'kubejs:inferium_enchanting_base',
            catalyst: '16x mysticalagriculture:prosperity_shard',
            essence: '16x mysticalagriculture:inferium_essence',
            level: 4
        },
        {
            input: 'kubejs:inferium_enchanting_base',
            output: 'kubejs:prudentium_enchanting_base',
            catalyst: '64x mysticalagriculture:experience_essence',
            essence: '16x mysticalagriculture:prudentium_essence',
            level: 8
        },
        {
            input: 'kubejs:prudentium_enchanting_base',
            output: 'kubejs:tertium_enchanting_base',
            catalyst: '64x mysticalagriculture:experience_essence',
            essence: '16x mysticalagriculture:tertium_essence',
            level: 12
        },
        {
            input: 'kubejs:tertium_enchanting_base',
            output: 'kubejs:imperium_enchanting_base',
            catalyst: '64x mysticalagriculture:experience_essence',
            essence: '16x mysticalagriculture:imperium_essence',
            level: 16
        },
        {
            input: 'kubejs:imperium_enchanting_base',
            output: 'kubejs:supremium_enchanting_base',
            catalyst: '64x mysticalagriculture:experience_essence',
            essence: '16x mysticalagriculture:supremium_essence',
            level: 20
        }
    ]

    for (let base of enchantingBase) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * base.level, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * base.level), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem(base.catalyst, 31, 8)
            .requireItem(base.input, 31, 27)
            .requireItem(base.essence, 31, 46)
            .produceItem(base.output, 107, 27)
    }

    let B1 = 'kubejs:inferium_enchanting_base'
    let B2 = 'kubejs:prudentium_enchanting_base'
    let B3 = 'kubejs:tertium_enchanting_base'
    let B4 = 'kubejs:imperium_enchanting_base'
    let B5 = 'kubejs:supremium_enchanting_base'

    let enchanting = [
        //Impaling
        {
            base: B1,
            input: '8x minecraft:iron_ingot',
            enchant: 'impaling',
            lvl: '1',
            lapis: 3,
            level: 4
        },
        {
            base: B2,
            input: '16x minecraft:iron_ingot',
            enchant: 'impaling',
            lvl: '2',
            lapis: 6,
            level: 9
        },
        {
            base: B3,
            input: '24x minecraft:iron_ingot',
            enchant: 'impaling',
            lvl: '3',
            lapis: 9,
            level: 15
        },
        {
            base: B4,
            input: '32x minecraft:iron_ingot',
            enchant: 'impaling',
            lvl: '4',
            lapis: 12,
            level: 21
        },
        {
            base: B5,
            input: '40x minecraft:iron_ingot',
            enchant: 'impaling',
            lvl: '5',
            lapis: 15,
            level: 27
        },
        //Protection
        {
            base: B1,
            input: '16x enderio:dark_steel_ingot',
            enchant: 'protection',
            lvl: '1',
            lapis: 3,
            level: 5
        },
        {
            base: B2,
            input: '32x enderio:dark_steel_ingot',
            enchant: 'protection',
            lvl: '2',
            lapis: 6,
            level: 11
        },
        {
            base: B3,
            input: '48x enderio:dark_steel_ingot',
            enchant: 'protection',
            lvl: '3',
            lapis: 9,
            level: 19
        },
        {
            base: B4,
            input: '64x enderio:dark_steel_ingot',
            enchant: 'protection',
            lvl: '4',
            lapis: 12,
            level: 28
        },
        //Projectile Protection
        {
            base: B1,
            input: '16x minecraft:leather',
            enchant: 'projectile_protection',
            lvl: '1',
            lapis: 3,
            level: 4
        },
        {
            base: B2,
            input: '32x minecraft:leather',
            enchant: 'projectile_protection',
            lvl: '2',
            lapis: 6,
            level: 9
        },
        {
            base: B3,
            input: '48x minecraft:leather',
            enchant: 'projectile_protection',
            lvl: '3',
            lapis: 9,
            level: 13
        },
        {
            base: B4,
            input: '64x minecraft:leather',
            enchant: 'projectile_protection',
            lvl: '4',
            lapis: 12,
            level: 18
        },
        //Quick Charge
        {
            base: B1,
            input: '16x minecraft:sugar',
            enchant: 'quick_charge',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '32x minecraft:sugar',
            enchant: 'quick_charge',
            lvl: '2',
            lapis: 6,
            level: 26
        },
        {
            base: B3,
            input: '48x minecraft:sugar',
            enchant: 'quick_charge',
            lvl: '3',
            lapis: 9,
            level: 41
        },
        //Bane of Arthropods
        {
            base: B1,
            input: '12x minecraft:spider_eye',
            enchant: 'bane_of_arthropods',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '24x minecraft:spider_eye',
            enchant: 'bane_of_arthropods',
            lvl: '2',
            lapis: 6,
            level: 12
        },
        {
            base: B3,
            input: '36x minecraft:spider_eye',
            enchant: 'bane_of_arthropods',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '48x minecraft:spider_eye',
            enchant: 'bane_of_arthropods',
            lvl: '4',
            lapis: 12,
            level: 24
        },
        {
            base: B5,
            input: '60x minecraft:spider_eye',
            enchant: 'bane_of_arthropods',
            lvl: '5',
            lapis: 15,
            level: 30
        },
        //Sweeping Edge
        {
            base: B1,
            input: '8x minecraft:iron_sword',
            enchant: 'sweeping_edge',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '16x minecraft:iron_sword',
            enchant: 'sweeping_edge',
            lvl: '2',
            lapis: 6,
            level: 13
        },
        {
            base: B2,
            input: '24x minecraft:iron_sword',
            enchant: 'sweeping_edge',
            lvl: '3',
            lapis: 9,
            level: 19
        },
        //Respiration
        {
            base: B1,
            input: '1x minecraft:glass_bottle',
            enchant: 'respiration',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '2x minecraft:glass_bottle',
            enchant: 'respiration',
            lvl: '2',
            lapis: 6,
            level: 17
        },
        {
            base: B3,
            input: '3x minecraft:glass_bottle',
            enchant: 'respiration',
            lvl: '3',
            lapis: 9,
            level: 25
        },
        //Punch
        {
            base: B1,
            input: 'minecraft:string',
            enchant: 'punch',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '2x minecraft:string',
            enchant: 'punch',
            lvl: '2',
            lapis: 6,
            level: 26
        },
        //Unbreaking
        {
            base: B1,
            input: '1x minecraft:obsidian',
            enchant: 'unbreaking',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '2x minecraft:obsidian',
            enchant: 'unbreaking',
            lvl: '2',
            lapis: 6,
            level: 12
        },
        {
            base: B3,
            input: '3x minecraft:obsidian',
            enchant: 'unbreaking',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        //Piercing
        {
            base: B1,
            input: '8x minecraft:prismarine_crystals',
            enchant: 'piercing',
            lvl: '1',
            lapis: 3,
            level: 5
        },
        {
            base: B2,
            input: '16x minecraft:prismarine_crystals',
            enchant: 'piercing',
            lvl: '2',
            lapis: 6,
            level: 10
        },
        {
            base: B3,
            input: '24x minecraft:prismarine_crystals',
            enchant: 'piercing',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '32x minecraft:prismarine_crystals',
            enchant: 'piercing',
            lvl: '4',
            lapis: 12,
            level: 25
        },
        //Efficiency
        {
            base: B1,
            input: '12x minecraft:redstone',
            enchant: 'efficiency',
            lvl: '1',
            lapis: 3,
            level: 5
        },
        {
            base: B2,
            input: '24x minecraft:redstone',
            enchant: 'efficiency',
            lvl: '2',
            lapis: 6,
            level: 10
        },
        {
            base: B3,
            input: '36x minecraft:redstone',
            enchant: 'efficiency',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '48x minecraft:redstone',
            enchant: 'efficiency',
            lvl: '4',
            lapis: 12,
            level: 25
        },
        {
            base: B5,
            input: '60x minecraft:redstone',
            enchant: 'efficiency',
            lvl: '5',
            lapis: 15,
            level: 33
        },
        //Aqua Affinity
        {
            base: B1,
            input: '1x minecraft:lily_pad',
            enchant: 'aqua_affinity',
            lvl: '1',
            lapis: 15,
            level: 3
        },
        //Depth Strider
        {
            base: B1,
            input: '1x minecraft:prismarine_shard',
            enchant: 'depth_strider',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '2x minecraft:prismarine_shard',
            enchant: 'depth_strider',
            lvl: '2',
            lapis: 6,
            level: 17
        },
        {
            base: B3,
            input: '3x minecraft:prismarine_shard',
            enchant: 'depth_strider',
            lvl: '3',
            lapis: 9,
            level: 25
        },
        //Fortune
        {
            base: B1,
            input: 'minecraft:emerald',
            enchant: 'fortune',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '2x minecraft:emerald',
            enchant: 'fortune',
            lvl: '2',
            lapis: 6,
            level: 20
        },
        {
            base: B3,
            input: '3x minecraft:emerald',
            enchant: 'fortune',
            lvl: '2',
            lapis: 9,
            level: 27
        },
        //Loyalty
        {
            base: B1,
            input: 'minecraft:lead',
            enchant: 'loyalty',
            lvl: '1',
            lapis: 3,
            level: 11
        },
        {
            base: B2,
            input: '2x minecraft:lead',
            enchant: 'loyalty',
            lvl: '2',
            lapis: 6,
            level: 16
        },
        {
            base: B3,
            input: '3x minecraft:lead',
            enchant: 'loyalty',
            lvl: '3',
            lapis: 9,
            level: 22
        },
        //Fire Protection
        {
            base: B1,
            input: '16x minecraft:magma_cream',
            enchant: 'fire_protection',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '32x minecraft:magma_cream',
            enchant: 'fire_protection',
            lvl: '2',
            lapis: 6,
            level: 16
        },
        {
            base: B3,
            input: '48x minecraft:magma_cream',
            enchant: 'fire_protection',
            lvl: '3',
            lapis: 9,
            level: 24
        },
        {
            base: B4,
            input: '64x minecraft:magma_cream',
            enchant: 'fire_protection',
            lvl: '4',
            lapis: 12,
            level: 28
        },
        //Power
        {
            base: B1,
            input: '12x minecraft:flint',
            enchant: 'power',
            lvl: '1',
            lapis: 3,
            level: 5
        },
        {
            base: B2,
            input: '24x minecraft:flint',
            enchant: 'power',
            lvl: '2',
            lapis: 6,
            level: 10
        },
        {
            base: B3,
            input: '36x minecraft:flint',
            enchant: 'power',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '48x minecraft:flint',
            enchant: 'power',
            lvl: '4',
            lapis: 12,
            level: 25
        },
        {
            base: B5,
            input: '60x minecraft:flint',
            enchant: 'power',
            lvl: '5',
            lapis: 15,
            level: 33
        },
        //Riptide
        {
            base: B1,
            input: '8x minecraft:firework_rocket',
            enchant: 'riptide',
            lvl: '1',
            lapis: 3,
            level: 15
        },
        {
            base: B2,
            input: '16x minecraft:firework_rocket',
            enchant: 'riptide',
            lvl: '2',
            lapis: 6,
            level: 20
        },
        {
            base: B3,
            input: '24x minecraft:firework_rocket',
            enchant: 'riptide',
            lvl: '3',
            lapis: 9,
            level: 25
        },
        //Mending
        {
            base: B5,
            input: 'enderio:experience_rod',
            enchant: 'mending',
            lvl: '1',
            lapis: 15,
            level: 21
        },
        //Infinity
        {
            base: B5,
            input: '8x enderio:grains_of_infinity',
            enchant: 'infinity',
            lvl: '1',
            lapis: 15,
            level: 17
        },
        //Lure
        {
            base: B1,
            input: 'minecraft:cod',
            enchant: 'lure',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '2x minecraft:cod',
            enchant: 'lure',
            lvl: '2',
            lapis: 6,
            level: 20
        },
        {
            base: B3,
            input: '3x minecraft:cod',
            enchant: 'lure',
            lvl: '3',
            lapis: 9,
            level: 27
        },
        //Knockback
        {
            base: B1,
            input: 'minecraft:piston',
            enchant: 'knockback',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '2x minecraft:piston',
            enchant: 'knockback',
            lvl: '2',
            lapis: 6,
            level: 21
        },
        //Multishot
        {
            base: B3,
            input: '16x minecraft:arrow',
            enchant: 'multishot',
            lvl: '1',
            lapis: 15,
            level: 17
        },
        //Frost Walker
        {
            base: B1,
            input: '16x minecraft:ice',
            enchant: 'frost_walker',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '32x minecraft:ice',
            enchant: 'frost_walker',
            lvl: '2',
            lapis: 6,
            level: 17
        },
        //Channeling
        {
            base: B2,
            input: '11x minecraft:lightning_rod',
            enchant: 'channeling',
            lvl: '1',
            lapis: 15,
            level: 21
        },
        //Looting
        {
            base: B1,
            input: 'minecraft:skeleton_skull',
            enchant: 'looting',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '2x minecraft:skeleton_skull',
            enchant: 'looting',
            lvl: '2',
            lapis: 6,
            level: 20
        },
        {
            base: B3,
            input: '3x minecraft:skeleton_skull',
            enchant: 'looting',
            lvl: '3',
            lapis: 9,
            level: 27
        },
        //Fire Aspect
        {
            base: B1,
            input: '8x minecraft:blaze_rod',
            enchant: 'fire_aspect',
            lvl: '1',
            lapis: 3,
            level: 12
        },
        {
            base: B2,
            input: '16x minecraft:blaze_rod',
            enchant: 'fire_aspect',
            lvl: '2',
            lapis: 6,
            level: 24
        },
        //Blast Protection
        {
            base: B1,
            input: '16x minecraft:gunpowder',
            enchant: 'blast_protection',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '32x minecraft:gunpowder',
            enchant: 'blast_protection',
            lvl: '2',
            lapis: 6,
            level: 12
        },
        {
            base: B3,
            input: '48x minecraft:gunpowder',
            enchant: 'blast_protection',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '64x minecraft:gunpowder',
            enchant: 'blast_protection',
            lvl: '4',
            lapis: 12,
            level: 24
        },
        //Flame
        {
            base: B2,
            input: '24x minecraft:netherrack',
            enchant: 'flame',
            lvl: '1',
            lapis: 15,
            level: 17
        },
        //Luck of the Sea
        {
            base: B1,
            input: 'minecraft:nautilus_shell',
            enchant: 'luck_of_the_sea',
            lvl: '1',
            lapis: 3,
            level: 13
        },
        {
            base: B2,
            input: '2x minecraft:nautilus_shell',
            enchant: 'luck_of_the_sea',
            lvl: '2',
            lapis: 6,
            level: 20
        },
        {
            base: B3,
            input: 'minecraft:nautilus_shell',
            enchant: 'luck_of_the_sea',
            lvl: '3',
            lapis: 9,
            level: 27
        },
        //Thorns
        {
            base: B1,
            input: '4x minecraft:rose_bush',
            enchant: 'thorns',
            lvl: '1',
            lapis: 3,
            level: 12
        },
        {
            base: B2,
            input: '8x minecraft:rose_bush',
            enchant: 'thorns',
            lvl: '2',
            lapis: 6,
            level: 25
        },
        {
            base: B3,
            input: '12x minecraft:rose_bush',
            enchant: 'thorns',
            lvl: '3',
            lapis: 9,
            level: 40
        },
        //Sharpness
        {
            base: B1,
            input: '12x minecraft:quartz',
            enchant: 'sharpness',
            lvl: '1',
            lapis: 3,
            level: 5
        },
        {
            base: B2,
            input: '24x minecraft:quartz',
            enchant: 'sharpness',
            lvl: '2',
            lapis: 6,
            level: 11
        },
        {
            base: B3,
            input: '36x minecraft:quartz',
            enchant: 'sharpness',
            lvl: '3',
            lapis: 9,
            level: 19
        },
        {
            base: B4,
            input: '48x minecraft:quartz',
            enchant: 'sharpness',
            lvl: '4',
            lapis: 12,
            level: 28
        },
        {
            base: B5,
            input: '60x minecraft:quartz',
            enchant: 'sharpness',
            lvl: '5',
            lapis: 15,
            level: 36
        },
        //Silk Touch
        {
            base: B4,
            input: '16x minecraft:slime_ball',
            enchant: 'silk_touch',
            lvl: '1',
            lapis: 15,
            level: 13
        },
        //Soul Speed
        {
            base: B1,
            input: '16x minecraft:soul_soil',
            enchant: 'soul_speed',
            lvl: '1',
            lapis: 3,
            level: 10
        },
        {
            base: B2,
            input: '32x minecraft:soul_soil',
            enchant: 'soul_speed',
            lvl: '2',
            lapis: 6,
            level: 17
        },
        {
            base: B3,
            input: '48x minecraft:soul_soil',
            enchant: 'soul_speed',
            lvl: '3',
            lapis: 9,
            level: 25
        },
        //Feather Falling
        {
            base: B1,
            input: '16x minecraft:feather',
            enchant: 'feather_falling',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '32x minecraft:feather',
            enchant: 'feather_falling',
            lvl: '2',
            lapis: 6,
            level: 10
        },
        {
            base: B3,
            input: '48x minecraft:feather',
            enchant: 'feather_falling',
            lvl: '3',
            lapis: 9,
            level: 15
        },
        {
            base: B4,
            input: '64x minecraft:feather',
            enchant: 'feather_falling',
            lvl: '4',
            lapis: 12,
            level: 19
        },
        //Smite
        {
            base: B1,
            input: '12x minecraft:rotten_flesh',
            enchant: 'smite',
            lvl: '1',
            lapis: 3,
            level: 6
        },
        {
            base: B2,
            input: '24x minecraft:rotten_flesh',
            enchant: 'smite',
            lvl: '2',
            lapis: 6,
            level: 12
        },
        {
            base: B3,
            input: '36x minecraft:rotten_flesh',
            enchant: 'smite',
            lvl: '3',
            lapis: 9,
            level: 18
        },
        {
            base: B4,
            input: '48x minecraft:rotten_flesh',
            enchant: 'smite',
            lvl: '4',
            lapis: 12,
            level: 24
        },
        {
            base: B5,
            input: '60x minecraft:rotten_flesh',
            enchant: 'smite',
            lvl: '5',
            lapis: 15,
            level: 30
        }
    ]

    for (let enchant of enchanting) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * enchant.level, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * enchant.level), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem(enchant.input, 31, 8)
            .requireItem(enchant.base, 31, 27)
            .requireItem(Item.of('minecraft:lapis_lazuli', enchant.lapis), 31, 46)
            .produceItem(`minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:${enchant.enchant}":${enchant.lvl}}}]`, 107, 27)
    }

    //Infusing
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 45, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 45), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:scrap_tome', 31, 27)
            .produceItem('4x apothic_enchanting:improved_scrap_tome', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:improved_scrap_tome', 31, 27)
            .produceItem('4x apothic_enchanting:extraction_tome', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 70, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 70), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:echo_shard', 31, 27)
            .produceItem('4x minecraft:echo_shard', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 100, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 100), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:honey_bottle', 31, 27)
            .produceItem('32x minecraft:experience_bottle', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:amethyst_block', 31, 27)
            .produceItem('minecraft:budding_amethyst', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:dormant_deepshelf', 31, 27)
            .produceItem('apothic_enchanting:deepshelf', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 80, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 80), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:dragon_breath', 31, 27)
            .produceItem('3x apothic_enchanting:infused_breath', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 45, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 45), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:hellshelf', 31, 27)
            .produceItem('apothic_enchanting:infused_hellshelf', 107, 27)
           
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.