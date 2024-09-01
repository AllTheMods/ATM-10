// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.shaped(
        `8x minecraft:item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )

    allthemods.shaped(
        `8x minecraft:glow_item_frame[entity_data={Invisible:1b,id:"minecraft:item_frame"},custom_name='"Invisible Glow Item Frame"']`,
        [
            'iii',
            'ipi', 
            'iii'
        ], 
        {
            i: 'minecraft:glow_item_frame', 
            p: 'minecraft:potion[potion_contents={potion:"minecraft:invisibility"}]'
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 9.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.  