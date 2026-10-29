ServerEvents.recipes(allthemods => {
    allthemods.shaped('3x minecraft:paper', ['RR', 'RR'], { R: 'actuallyadditions:rice' }).id('actuallyadditions:rice_paper')
    allthemods.replaceInput({ id: 'actuallyadditions:tagged_slime_block' }, '#c:slime_balls',
        Ingredient.of('#c:slime_balls').except(['industrialforegoing:pink_slime', 'undergarden:goo_ball']))
        
    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "actuallyadditions:canola_seeds"
            }
        }
    )

    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "actuallyadditions:flax_seeds"
            }
        }
    )

    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "actuallyadditions:rice_seeds"
            }
        }
    )

    allthemods.custom(
        {
            "type": "farmingforblockheads:market",
            "category": "farmingforblockheads:seeds",
            "preset": "minecraft:seeds",
            "result": {
                "count": 1,
                "item": "actuallyadditions:coffee_beans"
            }
        }
    )
})