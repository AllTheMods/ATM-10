// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // input[], input_fluid, processing_time, output, outputfluid
    let dissolution_chamber = allthemods.recipes.industrialforegoing.dissolution_chamber

    dissolution_chamber([
        '#c:glass_blocks/colorless'
    ],
        "2700x industrialforegoing:pink_slime", 
        200,
        "industrialforegoing:pink_slime_block"
    )

    dissolution_chamber([
        '#c:plastics',
        'minecraft:sculk_shrieker',
        '#c:plastics',
        '#industrialforegoing:machine_frame/supreme',
        '#industrialforegoing:machine_frame/supreme',
        '#c:gears/netherite',
        'minecraft:sculk_catalyst',
        '#c:gears/netherite',
    ],
        "1000x justdirethings:unstable_portal_fluid_source", 
        200,
        "industrialforegoingsouls:soul_laser_base"
    )

    dissolution_chamber([
        '#c:plastics',
        'minecraft:sculk_shrieker',
        '#c:plastics',
        'minecraft:echo_shard',
        'minecraft:echo_shard',
        '#industrialforegoing:machine_frame/simple',
        'minecraft:echo_shard',
        '#industrialforegoing:machine_frame/simple',
    ],
        "20x justdirethings:unstable_portal_fluid_source", 
        50,
        "4x industrialforegoingsouls:soul_surge"
    )

    dissolution_chamber([
        '#c:plastics',
        '#c:gears/iron',
        '#c:plastics',
        'minecraft:echo_shard',
        'minecraft:echo_shard',
        '#c:plastics',
        '#c:gears/iron',
        '#c:plastics',
    ],
        "20x industrialforegoing:pink_slime", 
        20,
        "32x industrialforegoingsouls:soul_network_pipe"
    )

    dissolution_chamber([
        'minecraft:glass_bottle'
    ],
        "250x #c:experience",
        5,
        "minecraft:experience_bottle"
    ).id("industrialforegoing:dissolution_chamber/xp_bottles")
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.