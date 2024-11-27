// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    // essence crafting for custom seeds
    function essenceCircle(result, essenceType) {
        allthemods.shaped(result, ['aaa', 'a a', 'aaa'], { a: `mysticalagriculture:${essenceType}_essence` }).id(`kubejs:mysticalagriculture/${essenceType}_essence_crafting`)
    }

    essenceCircle('allthemodium:allthemodium_nugget', 'allthemodium')
    essenceCircle('allthemodium:vibranium_nugget', 'vibranium')
    essenceCircle('allthemodium:unobtainium_nugget', 'unobtainium')
    essenceCircle('12x xycraft_world:kivi', 'kivi')
    essenceCircle('12x forbidden_arcanus:darkstone', 'darkstone')
    essenceCircle('6x silentgear:azure_silver_ingot', 'azure_silver')
    essenceCircle('6x silentgear:crimson_iron_ingot', 'crimson_iron')
    essenceCircle('3x extendedae:entro_crystal', 'entro')
    essenceCircle('2x megacells:sky_steel_ingot', 'sky_steel')

    // infusion seed crafting
    function seedCrafting(output, middle, item1, item2, item3, item4, item5, item6, item7, item8){
        allthemods.custom({
            type: 'mysticalagriculture:infusion',
            input: { item: middle },
            ingredients: [
                { item: item1 },
                { item: item2 },
                { item: item3 },
                { item: item4 },
                { item: item5 },
                { item: item6 },
                { item: item7 },
                { item: item8 }
            ],
            result: { id: output }
        }).id(`kubejs:${output.replace(':', '/')}/infusion`)
    }

    // Magical Soil
    let soilMid = 'mysticalagradditions:insanium_farmland'
    let soil1 = 'mysticalagradditions:dragon_scale'
    let soil2 = 'mysticalagradditions:insanium_block'
    seedCrafting('kubejs:magical_soil', soilMid, soil1, soil2, soil1, soil2, soil1, soil2, soil1, soil2)

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.