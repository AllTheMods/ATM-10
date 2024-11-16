// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    // Target = block underneath
    // Adjacent = blocks around target
    // Catalyst = block underneath target
    function extractor(output, target, adjacent, catalyst, ticks, waterlogged) {
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

        if (output.components) {
            recipe.output.components = output.components;
        }

        adjacent.forEach(adj => {
           recipe.adjacent.push(rule(adj.type, adj.block));
        });

        allthemods.custom(recipe).id(`allthemods:xycraft/extractor/${output.item.split(":").pop()}`);
    }

    function rule (type, block) {

        if (type === "xycraft_core:block_tag_rule") {
            return {
                "predicate_type": "xycraft_core:block_tag_rule",
                "tag": block
            }
        } else if (type === "xycraft_core:block_rule") {
            return {
                "predicate_type": "xycraft_core:block_rule",
                "block": block
            }
        } else if (type === "xycraft_core:fluid_type_rule") {
            return {
                "predicate_type": "xycraft_core:fluid_type_rule",
                "fluid_type": block
            }
        } else if (type === "xycraft_core:fluid_tag_rule") {
            return {
                "predicate_type": "xycraft_core:fluid_tag_rule",
                "tag": block
            }
        }
    }

    extractor(
        { item:"biomeswevegone:black_ice", count: 1 },
        { type: "xycraft_core:block_rule", block: "minecraft:packed_ice" },
        [
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
            { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" }
        ],
        { type: "xycraft_core:block_rule", block: "biomeswevegone:black_sand" },
        80,
        'minecraft:water'
    )
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.