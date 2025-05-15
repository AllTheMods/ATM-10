ServerEvents.recipes(allthemods => {
    //Awakened Alloy Block
        allthemods.recipes.modern_industrialization.star_altar(2048, 200)
            .itemIn('allthemodium:unobtainium_vibranium_alloy_block')
            .itemIn('4x mysticalagriculture:awakened_supremium_essence')
            .itemIn('4x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:unbreaking":1}}]')
            .itemIn('4x mysticalagriculture:awakened_supremium_gemstone')
            .itemOut(`allthemodium:unobtainium_vibranium_alloy_block[enchantments={levels:{"minecraft:unbreaking":1}},custom_name='{"extra":[{"italic":false,"text":"Awakened Unobtainium-Vibranium Alloy Block"}],"text":""}']`)

    //Infused Patrick Star
        allthemods.recipes.modern_industrialization.star_altar(2048, 200)
            .itemIn('36x allthetweaks:atm_star_shard')
            .itemIn('12x apothic_enchanting:infused_breath')
            .itemIn('4x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:mending":1}}]')
            .itemIn('allthemodium:vibranium_allthemodium_alloy_ingot')
            .itemIn('allthemodium:unobtainium_allthemodium_alloy_ingot')
            .itemIn('allthemodium:unobtainium_vibranium_alloy_ingot')
            .itemIn('allthetweaks:patrick_star')
            .itemOut(`allthetweaks:patrick_star[enchantments={levels:{"minecraft:mending":1}},custom_name='{"extra":[{"italic":false,"text":"Infused Patrick Star"}],"text":""}']`)

    //Patrick Star
        allthemods.recipes.modern_industrialization.star_altar(2048, 200)
            .itemIn('13x minecraft:magenta_concrete')
            .itemIn('11x minecraft:pink_concrete')
            .itemIn('8x minecraft:green_concrete')
            .itemIn('8x minecraft:green_concrete_powder')
            .itemIn('8x minecraft:magenta_concrete_powder')
            .itemIn('5x minecraft:pink_concrete_powder')
            .itemIn('2x minecraft:lime_concrete')
            .itemOut('allthetweaks:patrick_star')

    //ATM Star
        allthemods.recipes.modern_industrialization.star_altar(2048, 200)
            .itemIn('28x allthemodium:unobtainium_allthemodium_alloy_block')
            .itemIn('15x allthecompressed:nether_star_block_3x')
            .itemIn(`2x allthemodium:unobtainium_vibranium_alloy_block[enchantments={levels:{"minecraft:unbreaking":1}},custom_name='{"extra":[{"italic":false,"text":"Awakened Unobtainium-Vibranium Alloy Block"}],"text":""}']`)
            .itemIn('allthetweaks:oblivion_shard')
            .itemIn('mysticalagradditions:creative_essence')
            .itemIn('allthetweaks:nexium_emitter')
            .itemIn('allthetweaks:withers_compass')
            .itemIn('allthetweaks:improbable_probability_device')
            .itemIn('allthetweaks:dragon_soul')
            .itemIn('allthetweaks:philosophers_fuel')
            .itemIn('allthetweaks:pulsating_black_hole')
            .itemIn('allthetweaks:dimensional_seed')
            .itemIn('allthetweaks:patrick_star')
            .itemOut('allthetweaks:atm_star')

    //ATM Star Shard
        allthemods.recipes.modern_industrialization.star_altar(2048, 200)
            .itemIn('actuallyadditions:lens_of_the_killer')
            .itemIn('kubejs:atm_star_shard_1')
            .itemIn('kubejs:atm_star_shard_2')
            .itemIn('kubejs:atm_star_shard_3')
            .itemIn('kubejs:atm_star_shard_4')
            .itemIn('kubejs:atm_star_shard_5')
            .itemIn('forbidden_arcanus:mundabitur_dust')
            .itemIn('forbidden_arcanus:corrupti_dust')
            .itemIn(`allthetweaks:patrick_star[enchantments={levels:{"minecraft:mending":1}},custom_name='{"extra":[{"italic":false,"text":"Infused Patrick Star"}],"text":""}']`)
            .itemOut('allthetweaks:atm_star')

    //ATM Fragments
        let fragment = [
            {
                fragment: 1,
                shards: 48,
                prism: 'forbidden_arcanus:soul_binding_crystal'
            },
            {
                fragment: 2,
                shards: 52,
                prism: 'forbidden_arcanus:whirlwind_prism'
            },
            {
                fragment: 3,
                shards: 52,
                prism: 'forbidden_arcanus:smelter_prism'
            },
            {
                fragment: 4,
                shards: 52,
                prism: 'forbidden_arcanus:sea_prism'
            },
            {
                fragment: 5,
                shards: 52,
                prism: 'forbidden_arcanus:terrastomp_prism'
            }
        ]

        for (let item of fragment) {
            allthemods.recipes.modern_industrialization.star_altar(2048, 200)
                .itemIn(`${item.shards}x allthetweaks:atm_star_shard`)
                .itemIn(item.prism)
                .itemOut(`kubejs:atm_star_shard_${item.fragment}`)
        }
})