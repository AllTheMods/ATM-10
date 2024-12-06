// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    const alltheores = [
        'aluminum',
        'nickel',
        'platinum',
        'silver',
        'iridium',
        'zinc'
    ]

    alltheores.forEach(material => {
        chemicalWasher(`alltheores:dirty_${material}`, `alltheores:clean_${material}`)
        chemicalInjectionChamber(`#c:crystals/${material}`, `alltheores:${material}_shard`)
        Crusher(`#c:clumps/${material}`, `alltheores:dirty_${material}_dust`)
        enrichmentChamber(`#mekanism:dirty_dusts/${material}`, `alltheores:${material}_dust`)
    })

    const allthemodium = [
        'allthemodium',
        'vibranium',
        'unobtainium'
    ]

    allthemodium.forEach(material => {
        chemicalWasher(`allthemodium:dirty_${material}`, `allthemodium:clean_${material}`)
        chemicalInjectionChamber(`#c:crystals/${material}`, `allthemodium:${material}_shard`)
        Crusher(`#c:clumps/${material}`, `allthemodium:dirty_${material}_dust`)
        enrichmentChamber(`#mekanism:dirty_dusts/${material}`, `allthemodium:${material}_dust`)
    })

    const kubejs = [
        'crimson_iron',
        'azure_silver'
    ]

    kubejs.forEach(material => {
        chemicalWasher(`#c:dirty_${material}`, `kubejs:clean_${material}`)
        chemicalInjectionChamber(`#c:crystals/${material}`, `kubejs:${material}_shard`)
        Crusher(`#c:clumps/${material}`, `kubejs:dirty_${material}_dust`)
        enrichmentChamber(`#c:dirty_dusts/${material}`, `kubejs:${material}_dust`)
    })

    const mekanism = [
        'iron',
        'gold',
        'osmium',
        'copper',
        'tin',
        'lead',
        'uranium'
    ]

    function chemicalWasher(input, output) {

        allthemods.custom(
            {
                "type": "mekanism:washing",
                "fluid_input": {
                    "amount": 25,
                    "tag": "minecraft:water"
                },
                "output": {
                    "amount": 3,
                    "id": output
                },
                "chemical_input": {
                    "amount": 5,
                    "chemical": input
                }
            }
        ).id(`allthemods:ore_processing/${output.split(':').pop()}/slurry/clean`)
    }

    function chemicalInjectionChamber(input, output) {
        allthemods.custom(
            {
                "type": "mekanism:injecting",
                "item_input": {
                    "amount": 2,
                    "item": input
                },
                "chemical_input": {
                    "amount": 200,
                    "gas": "mekanism:hydrogen_chloride"
                },
                "output": {
                    "item": output
                }
            }
        ).id(`allthemods:ore_processing/${output.split(':').pop()}/shard/from_crystal`)
    }

    function Crusher(input, output) {
        allthemods.remove({type: 'mekanism:crushing', input: input})
        allthemods.custom(
            {
                "type": "mekanism:crushing",
                "input": {
                    "amount": 1,
                    "tag": input
                },
                "output": {
                    "amount": 2,
                    "item": output
                }
            }
        )
    }

    function enrichmentChamber(input, output) {
        allthemods.remove({type: 'mekanism:enriching', input: input})
        allthemods.custom(
            {
                "type": "mekanism:enriching",
                "input": {
                    "amount": 4,
                    "tag": input
                },
                "output": {
                    "amount": 3,
                    "item": output
                }
            }
        )
    }

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.