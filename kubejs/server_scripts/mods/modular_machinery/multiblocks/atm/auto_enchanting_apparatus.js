
ServerEvents.recipes(event => {

    const mi = event.recipes.modern_industrialization


    const essences = {
        air: [
            'minecraft:feather',
            'ars_nouveau:wilden_wing',
            'minecraft:arrow'
        ],

        earth: [
            'minecraft:iron_ingot',
            'minecraft:wheat_seeds',
            'minecraft:dirt'
        ],

        fire: [
            'minecraft:flint_and_steel',
            'minecraft:torch',
            'minecraft:gunpowder'
        ],

        water: [
            'minecraft:water_bucket',
            'minecraft:snow_block',
            'minecraft:kelp'
        ],

        abjuration: [
            'minecraft:fermented_spider_eye',
            'minecraft:sugar',
            'minecraft:milk_bucket'
        ],

        conjuration: [
            'ars_nouveau:wilden_horn',
            'ars_nouveau:starbuncle_shards',
            'minecraft:book'
        ],

        manipulation: [
            'minecraft:stone_button',
            'minecraft:redstone',
            'minecraft:clock'
        ]
    }

    Object.keys(essences).forEach(element => {

        const recipe = mi.auto_enchanting_apparatus(512, 100)
        .itemIn('ars_nouveau:source_gem')
        .fluidIn('1000x sauce:source_fluid')

        essences[element].forEach(item => {
            recipe.itemIn(item, 0)
        })

        recipe
        .itemOut(`ars_nouveau:${element}_essence`)
        .id(`kubejs:auto_enchanting_apparatus/${element}_essence`)
    })


    mi.auto_enchanting_apparatus(1024, 200)

    .itemIn('ars_nouveau:fire_essence')
    .itemIn('ars_nouveau:earth_essence')
    .itemIn('ars_nouveau:air_essence')
    .itemIn('ars_nouveau:water_essence')

    .itemIn('2x allthemodium:piglich_heart')
    .itemIn('#c:ingots/allthemodium')
    .itemIn('#c:ingots/unobtainium')
    .fluidIn('10000x sauce:source_fluid')

    .itemOut('allthemodium:unobtainium_allthemodium_alloy_ingot')

    .id('kubejs:auto_enchanting_apparatus/alloy_ingot')


    mi.auto_enchanting_apparatus(1024, 200)

    .itemIn('kubejs:fire_essence_block')
    .itemIn('kubejs:earth_essence_block')
    .itemIn('kubejs:air_essence_block')
    .itemIn('kubejs:water_essence_block')

    .itemIn('2x allthemodium:piglich_heart_block')
    .itemIn('#c:storage_blocks/allthemodium')
    .itemIn('#c:storage_blocks/unobtainium')
    .fluidIn('90000x sauce:source_fluid')

    .itemOut('allthemodium:unobtainium_allthemodium_alloy_block')

    .id('kubejs:auto_enchanting_apparatus/alloy_block')

})
