// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function squeezer(input, output) {
        if(output.bonus !== 0){
        allthemods.custom(
            {
                "type": "integrateddynamics:mechanical_squeezer",
                "input_item": Ingredient.of(input).toJson(),
                "output_items": [
                    {
                        "item": {
                            "id": output,
                            "count": 3,
                        }
                    },
                    {
                        "item": {
                            "id": output
                        },
                        "chance": 0.5
                    },
                    {
                        "item": {
                            "id": output
                        },
                        "chance": 0.5
                    }
                ],
                "duration": 40,
            }
        )}
        else{
        allthemods.custom(
            {
                "type": "integrateddynamics:mechanical_squeezer",
                "input_item": Ingredient.of(input).toJson(),
                "output_items": [
                    {
                        "item": {
                            "id": output.item,
                            "count": output.count,
                        }
                    }
                ],
                "duration": 40,
            }
        )}
    }

    //squeezer(input, output{item, count, bonus})
    squeezer('#c:ores/black_quartz', 'actuallyadditions:black_quartz');
    squeezer('#c:ores/cinnabar', 'alltheores:cinnabar');
    squeezer('#c:ores/fluorite', 'alltheores:fluorite');
    squeezer('#c:ores/peridot', 'alltheores:peridot');
    squeezer('#c:ores/ruby', 'alltheores:ruby');
    squeezer('#c:ores/sapphire', 'alltheores:sapphire');
    squeezer('#c:ores/sulfur', 'alltheores:sulfur');
    squeezer('#c:ores/arcane_crystal', 'forbidden_arcanus:arcane_crystal');
    squeezer('#c:ores/runic', 'forbidden_arcanus:rune');
    squeezer('#c:ores/inferium', 'mysticalagriculture:inferium_essence');
    squeezer('#c:ores/prosperity', 'mysticalagriculture:prosperity_shard');
    squeezer('#c:ores/bort', 'silentgear:bort');
    squeezer('#c:ores/sal_ammoniac', 'theurgy:sal_ammoniac_crystal');
    //squeezer('#c:ores/uraninite', 'powah:uraninite_raw');

    squeezer('#c:ores/uraninite_poor', {item: 'powah:uraninite_raw', count: 2, bonus: 0})
    squeezer('#c:ores/uraninite_regular', {item: 'powah:uraninite_raw', count: 4, bonus: 0})
    squeezer('#c:ores/uraninite_dense', {item: 'powah:uraninite_raw', count: 6, bonus: 0})
    allthemods.remove({output:'minecraft:lapis_lazuli', type:'integrateddynamics:mechanical_squeezer'})
    squeezer('#c:ores/lapis', {item: 'minecraft:lapis_lazuli', count: 12, bonus: 0})
    global.xycraftColours.forEach(colour => {
        squeezer(`#c:ores/xychorium_${colour}`, {item: `xycraft_world:xychorium_gem_${colour}`, count: 4, bonus: 0})
      })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.