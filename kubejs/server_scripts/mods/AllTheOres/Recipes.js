// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    // Snow Fixes
    allthemods.remove({ id: 'allthecompressed:compress/snow_1x'})
    allthemods.remove({ id: 'allthecompressed:decompress/snow_1x'})
    allthemods.shapeless('9x minecraft:snow_block', ['allthecompressed:snow_1x'])
    allthemods.shapeless('allthecompressed:snow_1x', ['9x minecraft:snow_block'])

const blockedMods = [ 'modern_industrialization', 'mysticalagriculture', 'mysticalagradditions', 'extendedae', 'mekanism' ]
let ingots = []

Ingredient.of('#c:ingots').itemIds.forEach(id => {
    let idArr = id.split(":")
    let material = {resource: idArr[1], mod: idArr[0]}
    
    if(!blockedMods.includes(idArr[0])){
    
        material.resource = material.resource.replace('ingot_', '')
        material.resource = material.resource.replace('_ingot', '')
        
        if(Item.exists(`${material.mod}:${material.resource}_dust`) || Item.exists(`${material.mod}:dust_${material.resource}`) || Item.exists(`alltheores:${material.resource}_dust`)){ //check if dust for item exists
            if(!JSON.stringify(ingots).includes(material.resource)){   //check if material already added to array of unique ingots
                material.dust = `${material.mod}:${material.resource}_dust`
                ingots.push(material)   //add to array of sorted materials
            }
        }
    }
})
//ingots = [resource, mod, dust]
let dust = ''
ingots.forEach(id => {
    if(!allthemods.countRecipes({input: `#c:ingots/${id.resource}`, output: `#c:dusts/${id.resource}`, type: 'minecraft:crafting_shapeless'})){
        if(AlmostUnified.getTagTargetItem(`c:dusts/${id.resource}`) !== 'minecraft:air'){ dust = AlmostUnified.getTagTargetItem(`c:dusts/${id.resource}`)} else {dust = id.dust}  //prefer unified dust
        //console.log(id.resource)
        allthemods.shapeless(dust, [`#c:ingots/${id.resource}`, '#alltheores:ore_hammers']).id(`alltheores:processing/ore_hammer/${id.resource}_dust_from_ingot`)
    }
})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.