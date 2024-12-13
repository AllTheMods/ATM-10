// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    const id = {
        alltheores: [
            'aluminum',
            'nickel',
            'platinum',
            'silver',
            'iridium',
            'zinc',
            'tin',
            'lead',
            'uranium',
            'osmium',
        ],
        allthemodium: [
            'allthemodium',
            'vibranium',
            'unobtainium'
        ],
        mekanism: [
            'iron',
            'gold',
            'copper'
        ]
    };

    Object.entries(id).forEach(([mod, materials]) => {
        materials.forEach(material => {

            if (mod === 'allthemodium') {
                chemicalWasher(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/clean`);
                chemicalInjectionChamber(`c:crystals/${material}`, `${mod}:${material}_shard`, `${mod}:processing/${material}/shard/from_crystal`);
                crusher(`c:clumps/${material}`, `${mod}:dirty_${material}_dust`, `${mod}:processing/${material}/dirty_dust/from_clump`);
                enrichmentChamber(`c:dirty_dusts/${material}`, `${mod}:${material}_dust`, `${mod}:processing/${material}/dust/from_dirty_dust`);
            }
            if (mod === 'mekanism') {
                chemicalWasher(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/clean`);
                chemicalInjectionChamber(`c:crystals/${material}`, `${mod}:shard_${material}`, `${mod}:processing/${material}/shard/from_crystal`);
                crusher(`c:clumps/${material}`, `${mod}:dirty_dust_${material}`, `${mod}:processing/${material}/dirty_dust/from_clump`);
                enrichmentChamber(`c:dirty_dusts/${material}`, `${mod}:dust_${material}`, `${mod}:processing/${material}/dust/from_dirty_dust`);
            }
            if (mod === 'alltheores') {
                chemicalWasher(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/from_dirty`);
                chemicalInjectionChamber(`c:crystals/${material}`, `${mod}:${material}_shard`, `${mod}:processing/${material}/shard/from_crystal`);
                crusher(`c:clumps/${material}`, `${mod}:dirty_${material}_dust`, `${mod}:processing/${material}/dirty_dust/from_clump`);
                enrichmentChamber(`c:dirty_dusts/${material}`, `${mod}:${material}_dust`, `${mod}:enriching/${material}/dust_from_dirty_dust`);
            }
        });
    });

    function chemicalWasher(input, output, id) {

        allthemods.custom(
            {
                "type": "mekanism:washing",
                "fluid_input": {
                    "amount": 25,
                    "tag": "minecraft:water"
                },
                "chemical_input": {
                    "amount": 5,
                    "chemical": input
                },
                "output": {
                    "amount": 3,
                    "id": output
                },
            }
        ).id(id)
    }

    function chemicalInjectionChamber(input, output, id) {
        allthemods.custom(
            {
                "type": "mekanism:injecting",
                "item_input": {
                    "count": 2,
                    "tag": input
                },
                "chemical_input": {
                    "amount": 1,
                    "chemical": "mekanism:hydrogen_chloride"
                },
                "output": {
                    "count": 1,
                    "id": output
                },
                "per_tick_usage": true
            }
        ).id(id)
    }

    function crusher(input, output, id) {
        allthemods.custom(
            {
                "type": "mekanism:crushing",
                "input": {
                    "count": 1,
                    "tag": input
                },
                "output": {
                    "count": 2,
                    "id": output
                }
            }
        ).id(id)
    }

    function enrichmentChamber(input, output, id) {
        allthemods.custom(
            {
                "type": "mekanism:enriching",
                "input": {
                    "count": 4,
                    "tag": input
                },
                "output": {
                    "count": 3,
                    "id": output
                }
            }
        ).id(id)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.