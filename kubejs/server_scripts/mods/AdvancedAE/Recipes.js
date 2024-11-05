// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.replaceInput({output: 'advanced_ae:quantum_helmet'}, 'minecraft:netherite_helmet', 'allthemodium:unobtainium_helmet' )
    allthemods.replaceInput({output: 'advanced_ae:quantum_chestplate'}, 'minecraft:netherite_chestplate', 'allthemodium:unobtainium_chestplate' )
    allthemods.replaceInput({output: 'advanced_ae:quantum_leggings'}, 'minecraft:netherite_leggings', 'allthemodium:unobtainium_leggings' )
    allthemods.replaceInput({output: 'advanced_ae:quantum_boots'}, 'minecraft:netherite_boots', 'allthemodium:unobtainium_boots' )

    allthemods.replaceInput({output: 'advanced_ae:strength_card'}, 'minecraft:netherite_sword', 'allthemodium:vibranium_sword' )

    allthemods.remove('advanced_ae:magnet_card')
    allthemods.shaped(Item.of('advanced_ae:magnet_card'),
        [
            'RML',
            'ICI',
            'III'
        ],
        {
            C: 'advanced_ae:quantum_upgrade_base',
            I: 'minecraft:iron_block',
            R: 'minecraft:redstone_block',
            M: 'ae2wtlib:magnet_card',
            L: 'minecraft:lapis_block'
        }
    )
    allthemods.remove('advanced_ae:evasion_card')
    allthemods.shaped(Item.of('advanced_ae:evasion_card'),
        [
            'WPR',
            'PCP',
            'APS'
        ],
        {
            P: 'advanced_ae:quantum_alloy_plate',
            C: 'advanced_ae:quantum_upgrade_base',
            W: 'advanced_ae:walk_speed_card',
            R: 'advanced_ae:sprint_speed_card',
            A: 'advanced_ae:attack_speed_card',
            S: 'advanced_ae:swim_speed_card'
        }
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.