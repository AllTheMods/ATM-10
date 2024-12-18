// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Target = block underneath
    // Adjacent = blocks around target
    // Catalyst = block underneath target
    function extractor({output, target, adjacent, catalyst, directions, ticks, waterlogged}) {
        let recipe = {
            "type": "xycraft_machines:extractor",
            "adjacent": [],
          "target": rule(target.type, target.block),
            "output": {
                "count": output.count || 1,
                "id": output.item
            },
            "ticks": ticks,
            
        };        

        if (catalyst) {
            recipe.catalyst = rule(catalyst.type, catalyst.block);
        }

        if (waterlogged) {
            recipe.waterlogged_fluid = waterlogged
        }

        if (directions) {
            recipe.valid_directions = directions;
        }

        if (output.components) {
            recipe.output.components = output.components;
        }

        if(adjacent) {
            adjacent.forEach(adj => {
                recipe.adjacent.push(rule(adj.type, adj.block));
            });
        }

        allthemods.custom(recipe).id(`allthemods:xycraft/extractor/${output.item.split(":").pop()}`);
    }

    function rule (type, block, property) {

        switch(type) {
            case "xycraft_core:block_tag_rule" :
                return {
                    "predicate_type": type,
                    "tag": block
                }
            case "xycraft_core:block_rule" :
                return {
                    "predicate_type": type,
                    "block": block
                }
            case "xycraft_core:fluid_type_rule" :
                return {
                    "predicate_type": type,
                    "fluid_type": block
                }
            case "xycraft_core:fluid_tag_rule" :
                return {
                    "predicate_type": type,
                    "tag": block
                }
            case "xycraft_core:block_state_rule" :
                return {
                    "predicate_type": type,
                    "block_state": block
                }
            case "xycraft_core:property_rule" :
                return {
                    "predicate_type": type,
                    "propery":property.propery,
                    "value": property.value
                }
            case "xycraft_core:fuzzy_block_state_rule" :
                return {
                    "predicate_type" : type,
                    "block": block.block,
                    "properties": block.properties
                }
        }
    }

    extractor({
        output: { item:"biomeswevegone:black_ice", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:packed_ice" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" }
        ],
        catalyst: { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
        ticks: 80,
        waterlogged: 'minecraft:water'
})

    extractor({
        output: { item:"minecraft:spore_blossom", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:moss_block" },
        catalyst: {type: "xycraft_core:block_rule", block: "minecraft:spore_blossom" },
        ticks: 200,
        waterlogged: 'minecraft:water',
        directions: ["up"]
    })

    extractor({
        output: { item:"minecraft:sculk", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:sculk" },
        catalyst: {type: "xycraft_core:block_rule", block: "minecraft:sculk_catalyst" },
        ticks: 200,
    })

    extractor({
        output: { item:"xycraft_world:xychorium_gem_blue", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_blue" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_blue" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_blue" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_blue" }
        ],
        catalyst: { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ticks: 80,
    })

    extractor({
        output: { item:"xycraft_world:xychorium_gem_green", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_green" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_green" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_green" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_green" }
        ],
        catalyst: { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ticks: 80,
    })

    extractor({
        output: { item:"xycraft_world:xychorium_gem_red", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_red" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_red" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_red" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_red" }
        ],
        catalyst: { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ticks: 80,
    })

    extractor({
        output: { item:"xycraft_world:xychorium_gem_dark", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_dark" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_dark" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_dark" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_dark" }
        ],
        catalyst: { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ticks: 80,
    })

    extractor({
        output: { item:"xycraft_world:xychorium_gem_light", count: 1 },
        target: { type: "xycraft_core:block_rule", block: "minecraft:obsidian" },
        adjacent: [
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_light" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_light" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_light" },
            { type: "xycraft_core:block_rule", block: "xycraft_world:xychorium_storage_light" }
        ],
        catalyst: { type: "xycraft_core:fluid_type_rule", block: "minecraft:lava" },
        ticks: 80,
    })
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.