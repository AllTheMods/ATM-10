// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function squeezer(input, output) {
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
        )
    }

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
    squeezer('#c:ores/uraninite', 'powah:uraninite_raw');
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.