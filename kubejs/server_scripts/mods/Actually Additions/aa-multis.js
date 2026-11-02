// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes((event) => {
  event.recipes.modern_industrialization.auto_fermenting_press(4, 40)
        .itemIn('actuallyadditions:canola')
        .fluidOut('actuallyadditions:refined_canola_oil', 80)

    event.recipes.modern_industrialization.auto_empowerer(16, 100)
        .itemIn('actuallyadditions:canola_seeds')
        .itemIn('actuallyadditions:canola_seeds')
        .itemIn('actuallyadditions:crystallized_canola_seed')
        .itemIn('actuallyadditions:canola_seeds')
        .itemIn('actuallyadditions:canola_seeds')
        .itemOut('actuallyadditions:empowered_canola_seed')

    event.recipes.modern_industrialization.auto_empowerer(16, 200)
        .itemIn('actuallyadditions:empowerer')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:black_quartz_block')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:iron_casing')
        .itemOut('modern_industrialization:auto_empowerer')

    event.recipes.modern_industrialization.auto_empowerer(16, 200)
        .itemIn('actuallyadditions:atomic_reconstructor')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:black_quartz_block')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:iron_casing')
        .itemOut('modern_industrialization:auto_reconstructor')

    event.recipes.modern_industrialization.auto_empowerer(16, 200)
        .itemIn('actuallyadditions:fermenting_barrel')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:black_quartz_block')
        .itemIn('modern_industrialization:analog_circuit')
        .itemIn('actuallyadditions:canola_press')
        .itemOut('modern_industrialization:auto_fermenting_press')

    event.recipes.actuallyadditions.empowering(
        'modern_industrialization:auto_empowerer',
        'actuallyadditions:black_quartz_block',
        [
            'modern_industrialization:analog_circuit',
            'actuallyadditions:empowerer',
            'modern_industrialization:analog_circuit',
            'actuallyadditions:iron_casing'
        ], 3355443, 32000, 200
    )

    event.recipes.actuallyadditions.empowering(
        'modern_industrialization:auto_reconstructor',
        'actuallyadditions:black_quartz_block',
        [
            'modern_industrialization:analog_circuit',
            'actuallyadditions:atomic_reconstructor',
            'modern_industrialization:analog_circuit',
            'actuallyadditions:iron_casing'
        ], 3355443, 32000, 200
    )

    event.recipes.actuallyadditions.empowering(
        'modern_industrialization:auto_fermenting_press',
        'actuallyadditions:black_quartz_block',
        [
            'modern_industrialization:analog_circuit',
            'actuallyadditions:fermenting_barrel',
            'modern_industrialization:analog_circuit',
            'actuallyadditions:canola_press'
        ], 3355443, 32000, 200
    )

    let empMap = [
        {
            itemI: 'actuallyadditions:enori_crystal',
            itemO: 'actuallyadditions:empowered_enori_crystal',
            mod1: 'minecraft:gray_dye',
            mod2: 'minecraft:snowball',
            mod3: 'minecraft:stone_button',
            mod4: '#c:cobblestones'
        },
        {
            itemI: 'actuallyadditions:void_crystal',
            itemO: 'actuallyadditions:empowered_void_crystal',
            mod1: 'minecraft:black_dye',
            mod2: '#minecraft:coals',
            mod3: 'minecraft:flint',
            mod4: '#c:stones'
        },
        {
            itemI: 'actuallyadditions:restonia_crystal',
            itemO: 'actuallyadditions:empowered_restonia_crystal',
            mod1: '#c:dyes/red',
            mod2: 'minecraft:nether_brick',
            mod3: 'minecraft:redstone',
            mod4: 'minecraft:brick'
        },
        {
            itemI: 'actuallyadditions:palis_crystal',
            itemO: 'actuallyadditions:empowered_palis_crystal',
            mod1: 'minecraft:cyan_dye',
            mod2: 'minecraft:prismarine_shard',
            mod3: 'minecraft:prismarine_shard',
            mod4: 'minecraft:prismarine_shard'
        },
        {
            itemI: 'actuallyadditions:diamatine_crystal',
            itemO: 'actuallyadditions:empowered_diamatine_crystal',
            mod1: 'minecraft:light_blue_dye',
            mod2: 'minecraft:clay_ball',
            mod3: 'minecraft:clay_ball',
            mod4: 'minecraft:clay'
        },
        {
            itemI: 'actuallyadditions:emeradic_crystal',
            itemO: 'actuallyadditions:empowered_emeradic_crystal',
            mod1: 'minecraft:lime_dye',
            mod2: 'minecraft:short_grass',
            mod3: '#minecraft:saplings',
            mod4: '#c:slimeballs'
        }
    ];

    for (let item of empMap) {
        event.recipes.modern_industrialization.auto_empowerer(64, 400)
            .itemIn(item.mod1)
            .itemIn(item.mod2)
            .itemIn(item.itemI)
            .itemIn(item.mod3)
            .itemIn(item.mod4)
            .itemOut(item.itemO)

        event.recipes.modern_industrialization.auto_empowerer(32, 200)
            .itemIn(item.mod1)
            .itemIn(item.mod2)
            .itemIn(`${item.itemI}_block`)
            .itemIn(item.mod3)
            .itemIn(item.mod4)
            .itemOut(`${item.itemO}_block`)
    }

    let atomicMap1 = [
        {
            in: 'minecraft:redstone',
            out: 'actuallyadditions:restonia_crystal'
        },
        {
            in: 'minecraft:diamond',
            out: 'actuallyadditions:diamatine_crystal'
        },
        {
            in: 'minecraft:emerald',
            out: 'actuallyadditions:emeradic_crystal'
        }
    ]

    for (let item of atomicMap1) {
        event.recipes.modern_industrialization.auto_reconstructor(64, 100)
            .itemIn(item.in)
            .itemOut(item.out);

        event.recipes.modern_industrialization.auto_reconstructor(64, 100)
            .itemIn(`${item.in}_block`)
            .itemOut(`${item.out}_block`)
    }

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn('minecraft:iron_ingot')
        .itemOut('actuallyadditions:enori_crystal');

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn(`minecraft:iron_block`)
        .itemOut('actuallyadditions:enori_crystal_block')

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn('#minecraft:coals')
        .itemOut('actuallyadditions:void_crystal');

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn(`minecraft:coal_block`)
        .itemOut(`actuallyadditions:void_crystal_block`)

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn('minecraft:lapis_lazuli')
        .itemOut('actuallyadditions:palis_crystal');

    event.recipes.modern_industrialization.auto_reconstructor(64, 100)
        .itemIn(`minecraft:lapis_block`)
        .itemOut(`actuallyadditions:palis_crystal_block`)

    let atomicMap2 = [
        {
            in: 'actuallyadditions:canola_seeds',
            out: 'actuallyadditions:crystallized_canola_seed'
        }
    ]

    for (let item of atomicMap2) {
        event.recipes.modern_industrialization.auto_reconstructor(32, 100)
            .itemIn(item.in)
            .itemOut(item.out);
    }

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`#c:sands`)
        .itemOut(`minecraft:soul_sand`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_1x`)
        .itemOut(`allthecompressed:soul_sand_1x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_2x`)
        .itemOut(`allthecompressed:soul_sand_2x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_3x`)
        .itemOut(`allthecompressed:soul_sand_3x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_4x`)
        .itemOut(`allthecompressed:soul_sand_4x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_5x`)
        .itemOut(`allthecompressed:soul_sand_5x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_6x`)
        .itemOut(`allthecompressed:soul_sand_6x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_7x`)
        .itemOut(`allthecompressed:soul_sand_7x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_8x`)
        .itemOut(`allthecompressed:soul_sand_8x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn(`allthecompressed:sand_9x`)
        .itemOut(`allthecompressed:soul_sand_9x`)

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('minecraft:chiseled_quartz_block')
        .itemOut('actuallyadditions:ethetic_green_block')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('minecraft:red_mushroom')
        .itemOut('minecraft:nether_wart')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:lens_of_detonation')
        .itemOut('actuallyadditions:lens_of_certain_death')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:lens_of_certain_death')
        .itemOut('actuallyadditions:lens')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:lens')
        .itemOut('actuallyadditions:lens_of_color')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:lens_of_color')
        .itemOut('actuallyadditions:lens_of_detonation')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:laser_relay')
        .itemOut('actuallyadditions:laser_relay_fluids')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:laser_relay_fluids')
        .itemOut('actuallyadditions:laser_relay_item')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('actuallyadditions:laser_relay_item')
        .itemOut('actuallyadditions:laser_relay')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('minecraft:quartz_block')
        .itemOut('actuallyadditions:ethetic_white_block')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('minecraft:rotten_flesh')
        .itemOut('minecraft:leather')

    event.recipes.modern_industrialization.auto_reconstructor(32, 100)
        .itemIn('minecraft:quartz')
        .itemOut('minecraft:prismarine_shard')

    event.custom(
        {
            type: "mekmm:planting",
            item_input: {
                count: 1,
                item: 'actuallyadditions:canola_seeds'
            },
            chemical_input: {
                amount: 1,
                chemical: 'mekmm:nutrient_solution'
            },
            main_output: {
                count: 5,
                id: 'actuallyadditions:canola'
            },
            secondary_output: {
                count: 1,
                id: 'actuallyadditions:canola_seeds'
            },
            secondary_chance: 1.0,
            per_tick_usage: true
        }
    )

    event.shapeless('modern_industrialization:atomic_energy_input_hatch', ['actuallyadditions:laser_relay', 'actuallyadditions:iron_casing', 'actuallyadditions:black_quartz_block'])

    event.shapeless('modern_industrialization:atomic_energy_input_hatch', 'modern_industrialization:atomic_energy_output_hatch')

    event.shapeless('modern_industrialization:atomic_energy_output_hatch', 'modern_industrialization:atomic_energy_input_hatch')

    event.shapeless('modern_industrialization:atomic_item_input_hatch', ['actuallyadditions:laser_relay_item', 'actuallyadditions:iron_casing', 'actuallyadditions:black_quartz_block'])

    event.shapeless('modern_industrialization:atomic_item_input_hatch', 'modern_industrialization:atomic_item_output_hatch')

    event.shapeless('modern_industrialization:atomic_item_output_hatch', 'modern_industrialization:atomic_item_input_hatch')

    event.shapeless('modern_industrialization:atomic_fluid_input_hatch', ['actuallyadditions:laser_relay_fluids', 'actuallyadditions:iron_casing', 'actuallyadditions:black_quartz_block'])

    event.shapeless('modern_industrialization:atomic_fluid_input_hatch', 'modern_industrialization:atomic_fluid_output_hatch')

    event.shapeless('modern_industrialization:atomic_fluid_output_hatch', 'modern_industrialization:atomic_fluid_input_hatch')
})

ServerEvents.tags('block', event => {
    event.add('minecraft:mineable/pickaxe', [
        'modern_industrialization:atomic_energy_input_hatch',
        'modern_industrialization:atomic_energy_output_hatch',
        'modern_industrialization:atomic_item_input_hatch',
        'modern_industrialization:atomic_item_output_hatch',
        'modern_industrialization:atomic_fluid_input_hatch', 
        'modern_industrialization:atomic_fluid_output_hatch',
        'modern_industrialization:auto_reconstructor',
        'modern_industrialization:auto_empowerer',
        'modern_industrialization:auto_fermenting_press'
    ])
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
