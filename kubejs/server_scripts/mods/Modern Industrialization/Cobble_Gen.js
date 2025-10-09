// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(event => {
    event.remove(
        [
            'modern_industrialization:vanilla_recipes/mixer/cobblestone', 
            'modern_industrialization:vanilla_recipes/mixer/andesite',
            'modern_industrialization:vanilla_recipes/mixer/calcite',
            'modern_industrialization:vanilla_recipes/mixer/cobbled_deepslate',
            'modern_industrialization:vanilla_recipes/mixer/diorite',
            'modern_industrialization:vanilla_recipes/mixer/dripstone',
            'modern_industrialization:vanilla_recipes/mixer/granite',
            'modern_industrialization:vanilla_recipes/mixer/endstone'
        ]
    )

    let cobbleGen = [
        'cobblestone',
        'andesite',
        'calcite',
        'cobbled_deepslate',
        'diorite',
        'dripstone_block',
        'granite'
    ]

    for (let item of cobbleGen) {
        event.recipes.modern_industrialization.mixer(2, 100)
            .fluidIn('minecraft:water', 1000, 0)
            .fluidIn('minecraft:lava', 1000, 0)
            .itemIn(`minecraft:${item}`, 0)
            .itemOut(`minecraft:${item}`)
            .id(`atm:mixer/cobble_gen/${item}`)
    }

    event.recipes.modern_industrialization.mixer(8, 200)
        .fluidIn('1x modern_industrialization:heavy_water')
        .fluidIn('1000x minecraft:lava', 0.0)
        .itemIn('minecraft:end_stone', 0)
        .itemOut('minecraft:end_stone')
        .id('atm:mixer/cobble_gen/end_stone')
})
  
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
