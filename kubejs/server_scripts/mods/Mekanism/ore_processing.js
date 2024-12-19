// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.


ServerEvents.recipes(allthemods => {

    const overwrite = [
        'tin',
        'lead',
        'uranium',
        'osmium',
    ]

    overwrite.forEach(material => {
        dissolution(`c:storage_blocks/raw_${material}`, `alltheores:dirty_${material}`, 6000, `mekanism:processing/${material}/slurry/dirty/from_raw_block`)
        dissolution(`c:raw_materials/${material}`, `alltheores:dirty_${material}`, 2000, `mekanism:processing/${material}/slurry/dirty/from_raw_ore`)
        dissolution(`c:ores/${material}`, `alltheores:dirty_${material}`, 1000, `mekanism:processing/${material}/slurry/dirty/from_ore`)
    })

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

            if (mod === 'mekanism') {
                washing(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/clean`);
                injecting(`c:crystals/${material}`, `mekanism:shard_${material}`);
                crushing(`c:clumps/${material}`, `mekanism:dirty_dust_${material}`);
                enriching(`c:dirty_dusts/${material}`, `alltheores:${material}_dust`);
            } else {
                if (mod === 'allthemodium') {washing(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/clean`);}
                if (mod === 'alltheores') {washing(`${mod}:dirty_${material}`, `${mod}:clean_${material}`, `${mod}:processing/${material}/slurry/from_dirty`);}
                injecting(`c:crystals/${material}`, `${mod}:${material}_shard`);
                crushing(`c:clumps/${material}`, `${mod}:dirty_${material}_dust`);
                enriching(`c:dirty_dusts/${material}`, `${mod}:${material}_dust`);
            }
        });
    });

    function dissolution(input, output, amount, id) {
        allthemods.custom(
            {
                "type": "mekanism:dissolution",
                "chemical_input": {
                    "amount": 1,
                    "chemical": "mekanism:sulfuric_acid"
                },
                "item_input": {
                    "count": 1,
                    "tag": input
                },
                "output": {
                    "amount": amount,
                    "id": output
                },
                "per_tick_usage": true
            }
        ).id(id)
    }

    function washing(input, output, id) {
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

    function injecting(input, output) {
        allthemods.remove({type: 'mekanism:injecting', output: output});
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
        ).id(`allthemods:processing/${input.split('/').pop()}/shard/from_crystal`)
    }

    function crushing(input, output) {
        allthemods.remove({type: 'mekanism:crushing', output: output});
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
        ).id(`allthemods:processing/${input.split('/').pop()}/dirty_dust/from_clump`)
    }

    function enriching(input, output) {
        allthemods.remove({type: 'mekanism:enriching', output: output});
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
        ).id(`allthemods:processing/${input.split('/').pop()}/dust/from_dirty_dust`)
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.