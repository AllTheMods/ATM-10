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
            'copper',
            'iron',
            'gold'
        ],
        allthemodium: [
            'allthemodium',
            'vibranium',
            'unobtainium'
        ]
    };

    Object.entries(id).forEach(([mod, materials]) => {
        materials.forEach(material => {

            if (mod === 'allthemodium') {
                washing(`allthemodium:dirty_${material}`, `allthemodium:clean_${material}`, `allthemodium:processing/${material}/slurry/clean`);
                injecting(`c:crystals/${material}`, `allthemodium:${material}_shard`, `allthemodium:processing/${material}/shard/from_crystal`);
                crushing(`c:clumps/${material}`, `allthemodium:dirty_${material}_dust`, `allthemodium:processing/${material}/dirty_dust/from_clump`);
                enriching(`c:dirty_dusts/${material}`, `allthemodium:${material}_dust`, `allthemodium:processing/${material}/dust/from_dirty_dust`);
            }
            if (mod === 'alltheores') {
                allthemods.remove({id: `mekanism:processing/${material}/slurry/dirty/from_raw_block`})
                allthemods.remove({id: `mekanism:processing/${material}/slurry/dirty/from_raw_ore`})
                allthemods.remove({id: `mekanism:processing/${material}/slurry/dirty/from_ore`})
                allthemods.remove({id: `mekanism:processing/${material}/crystal/from_slurry`})
                allthemods.remove({id: `mekanism:processing/${material}/shard/from_crystal`})
                allthemods.remove({id: `mekanism:processing/${material}/dirty_dust/from_clump`})
                allthemods.remove({id: `mekanism:processing/${material}/dust/from_dirty_dust`})
                
                washing(`alltheores:dirty_${material}`, `alltheores:clean_${material}`, `alltheores:processing/${material}/slurry/from_dirty`);
                injecting(`c:crystals/${material}`, `alltheores:${material}_shard`, `alltheores:processing/${material}/shard/from_crystal`);
                crushing(`c:clumps/${material}`, `alltheores:dirty_${material}_dust`, `alltheores:processing/${material}/dirty_dust/from_clump`);
                enriching(`c:dirty_dusts/${material}`, `alltheores:${material}_dust`, `alltheores:processing/${material}/dust/from_dirty_dust`);

                if (material === 'silver') {
                    silverProcessing();
                }
            }
        });
    });

    function silverProcessing() {
        const paths = [
            {
                name: 'from_ore',
                tag: 'c:ores/silver',
                dissolutionInput: 1,
                dissolutionChemical: 1,
                slurry: 1000,
                injectingInput: 1,
                injectingChemical: 1,
                shards: 4,
                purifyingInput: 1,
                purifyingChemical: 1,
                clumps: 3,
                enrichingInput: 1,
                dust: 2
            },
            {
                name: 'from_raw',
                tag: 'c:raw_materials/silver',
                dissolutionInput: 3,
                dissolutionChemical: 1,
                slurry: 2000,
                injectingInput: 3,
                injectingChemical: 1,
                shards: 8,
                purifyingInput: 1,
                purifyingChemical: 1,
                clumps: 2,
                enrichingInput: 3,
                dust: 4
            },
            {
                name: 'from_raw_block',
                tag: 'c:storage_blocks/raw_silver',
                dissolutionInput: 1,
                dissolutionChemical: 2,
                slurry: 6000,
                injectingInput: 1,
                injectingChemical: 2,
                shards: 24,
                purifyingInput: 1,
                purifyingChemical: 2,
                clumps: 18,
                enrichingInput: 1,
                dust: 12
            }
        ];

        paths.forEach(path => {
            allthemods.custom({
                type: 'mekanism:dissolution',
                chemical_input: {
                    amount: path.dissolutionChemical,
                    chemical: 'mekanism:sulfuric_acid'
                },
                item_input: {
                    count: path.dissolutionInput,
                    tag: path.tag
                },
                output: {
                    amount: path.slurry,
                    id: 'alltheores:dirty_silver'
                },
                per_tick_usage: true
            }).id(`alltheores:processing/silver/slurry/dirty/${path.name}`);

            allthemods.custom({
                type: 'mekanism:injecting',
                chemical_input: {
                    amount: path.injectingChemical,
                    chemical: 'mekanism:hydrogen_chloride'
                },
                item_input: {
                    count: path.injectingInput,
                    tag: path.tag
                },
                output: {
                    count: path.shards,
                    id: 'alltheores:silver_shard'
                },
                per_tick_usage: true
            }).id(`alltheores:processing/silver/shard/${path.name}`);

            allthemods.custom({
                type: 'mekanism:purifying',
                chemical_input: {
                    amount: path.purifyingChemical,
                    chemical: 'mekanism:oxygen'
                },
                item_input: {
                    count: path.purifyingInput,
                    tag: path.tag
                },
                output: {
                    count: path.clumps,
                    id: 'alltheores:silver_clump'
                },
                per_tick_usage: true
            }).id(`alltheores:processing/silver/clump/${path.name}`);

            allthemods.custom({
                type: 'mekanism:enriching',
                input: {
                    count: path.enrichingInput,
                    tag: path.tag
                },
                output: {
                    count: path.dust,
                    id: 'alltheores:silver_dust'
                }
            }).id(`alltheores:processing/silver/dust/${path.name}`);
        });

        allthemods.custom({
            type: 'mekanism:crystallizing',
            input: {
                amount: 200,
                chemical: 'alltheores:clean_silver'
            },
            output: {
                count: 1,
                id: 'alltheores:silver_crystal'
            }
        }).id('alltheores:processing/silver/crystal/from_slurry');

        allthemods.custom({
            type: 'mekanism:purifying',
            chemical_input: {
                amount: 1,
                chemical: 'mekanism:oxygen'
            },
            item_input: {
                count: 1,
                tag: 'c:shards/silver'
            },
            output: {
                count: 1,
                id: 'alltheores:silver_clump'
            },
            per_tick_usage: true
        }).id('alltheores:processing/silver/clump/from_shard');

        allthemods.custom({
            type: 'mekanism:crushing',
            input: {
                count: 1,
                tag: 'c:ingots/silver'
            },
            output: {
                count: 1,
                id: 'alltheores:silver_dust'
            }
        }).id('alltheores:processing/silver/dust/from_ingot');
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

    function injecting(input, output, id) {
        allthemods.custom(
            {
                "type": "mekanism:injecting",
                "item_input": {
                    "count": 1,
                    "tag": input
                },
                "chemical_input": {
                    "amount": 1,
                    "chemical": "mekanism:hydrogen_chloride"
                },
                "output": {
                    "count": 2,
                    "id": output
                },
                "per_tick_usage": true
            }
        ).id(id)
    }

    function crushing(input, output, id) {
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

    function enriching(input, output, id) {
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
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_block`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_raw_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/dirty/from_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/slurry/clean`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/crystal/from_slurry`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/clump/from_raw_block`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/clump/from_raw_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/clump/from_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/clump/from_shard`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/dirty_dust/from_clump`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/shard/from_raw_block`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/shard/from_raw_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/shard/from_ore`})
  allthemods.remove({ id: `xycraft_machines:compat/mek/processing/aluminum/shard/from_crystal`})

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
