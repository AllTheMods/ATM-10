// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ItemEvents.modifyTooltips(allthemods => {

    //AllTheModium
    allthemods.add('allthemodium:teleport_pad',[
        Text.of('Place the pad down in the specified Dimension'),
        Text.of('Sneak Right Click with both hands empty to teleport'),
        Text.of('§aOverworld TO Mining Dimension'),
        Text.of('§cThe Nether TO The Other'),
        Text.of('§bThe End TO The Beyond')
    ])

    allthemods.add(['allthemodium:allthemodium_ore', 'allthemodium:allthemodium_slate_ore'],[
        Text.of('§7Needs at least Netherite to be mined'),
        Text.of('§6Found in the Deep Dark Biome and will always spawn air exposed'),
        Text.of('§6Also found in the Deep Slate Layer of Mining Dimension')
    ])
    allthemods.add(['allthemodium:vibranium_ore', 'allthemodium:other_vibranium_ore'],[
        Text.of('§7Needs at least AllTheModium to be mined'),
        Text.of('§bFound in any Nether biome'),
        Text.of('§bAlso found in The Other')
    ])
    allthemods.add('allthemodium:unobtainium_ore',[
        Text.of('§7Needs at least Vibranium to be mined'),
        Text.of('§dFound in the End Highlands')
    ])


    allthemods.add('allthemodium:allthemodium_upgrade_smithing_template',[
        Text.of('§6Found in Suspiciouss Clay in Ancient Cities')
    ])
    allthemods.add('allthemodium:vibranium_upgrade_smithing_template',[
        Text.of('§bFound in Suspiciouss Soul Sand in Bastions')
    ])
    allthemods.add('allthemodium:unobtainium_upgrade_smithing_template',[
        Text.of('§dFound in Chests in the Library of the Dungeon within The Other')
    ])

    //Forbidden Arcanus
    allthemods.add('forbidden_arcanus:growing_edelwood',[
        Text.of("§4THESE ARE CURRENTLY CRAFTABLE BECAUSE THEY DO NOT SPAWN IN WORLD"),
        Text.of("§4EXPECT THIS RECIPE TO BE REMOVED ONCE THAT'S FIXED")
    ])
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.