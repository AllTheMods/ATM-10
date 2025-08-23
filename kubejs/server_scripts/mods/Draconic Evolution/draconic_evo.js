// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods =>{
    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:awakened_draconium_ingot'}],
        processingTime: 300,
        results: [
          {id: 'draconicevolution:awakened_draconium_dust'}
        ]
    }).id(`allthemods:create/crushing/awakened_draconium_dust`)

    allthemods.recipes.occultism.crushing(RecipeResult.of("draconicevolution:awakened_draconium_dust"), Ingredient.of("draconicevolution:awakened_draconium_ingot"))
	  .ignore_crushing_multiplier(true)
	  .id(`allthemods:occultism/crushing/awakened_draconium_dust`)
    
    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 3200,
        input: {item: 'draconicevolution:awakened_draconium_ingot'},
        result: {count: 1,id: 'draconicevolution:awakened_draconium_dust'},
        secondaries: []
    }).id(`allthemods:immersive/crushing/awakened_draconium_dust`)

    allthemods.custom({
        type: 'mekanism:crushing',
        input: {item: 'draconicevolution:awakened_draconium_ingot'},
        output: {id: 'draconicevolution:awakened_draconium_dust'}
    }).id(`allthemods:mekanism/crushing/awakened_draconium_dust`)

    allthemods.custom({
        type: 'create:crushing',
        ingredients: [{item: 'draconicevolution:draconium_ingot'}],
        processingTime: 300,
        results: [
          {id: 'draconicevolution:draconium_dust'}
        ]
    }).id(`allthemods:create/crushing/draconium_dust`)

    allthemods.recipes.occultism.crushing(RecipeResult.of("draconicevolution:draconium_dust"), "draconicevolution:draconium_ingot")
	  .ignore_crushing_multiplier(true)
	  .id(`allthemods:occultism/crushing/draconium_dust`)

    allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 3200,
        input: {item: 'draconicevolution:draconium_ingot'},
        result: {count: 1,id: 'draconicevolution:draconium_dust'},
        secondaries: []
    }).id(`allthemods:immersive/crushing/draconium_dust`)

    allthemods.custom({
        type: 'mekanism:crushing',
        input: {item: 'draconicevolution:draconium_ingot'},
        output: {id: 'draconicevolution:draconium_dust'}
    }).id(`allthemods:mekanism/crushing/draconium_dust`)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.