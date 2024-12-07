// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    function addBook (input, output, lapis, lvl) {
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * lvl, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * lvl), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem(Item.of(input), 31, 8)
            .requireItem('1x minecraft:writable_book', 31, 27)
            .requireItem(Item.of('minecraft:lapis_lazuli', lapis), 31, 46)
            .produceItem(Item.of(output), 107, 27)
            
    }

    //Impaling
        addBook('8x minecraft:iron_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:impaling":1}}]', 3, 4)
        addBook('16x minecraft:iron_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:impaling":2}}]', 6, 9)
        addBook('24x minecraft:iron_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:impaling":3}}]', 9, 15)
        addBook('32x minecraft:iron_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:impaling":4}}]', 12, 21)
        addBook('40x minecraft:iron_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:impaling":5}}]', 15, 27)
    
    //Protection
        addBook('16x enderio:dark_steel_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:protection":1}}]', 3, 5)
        addBook('32x enderio:dark_steel_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:protection":2}}]', 6, 11)
        addBook('48x enderio:dark_steel_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:protection":3}}]', 9, 19)
        addBook('64x enderio:dark_steel_ingot', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:protection":4}}]', 12, 28)
    
    //Projectile Protection
        addBook('16x minecraft:leather', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:projectile_protection":1}}]', 3, 4)
        addBook('32x minecraft:leather', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:projectile_protection":2}}]', 6, 9)
        addBook('48x minecraft:leather', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:projectile_protection":3}}]', 9, 13)
        addBook('64x minecraft:leather', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:projectile_protection":4}}]', 12, 18)
    
    //Quick Charge
        addBook('16x minecraft:sugar', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:quick_charge":1}}]', 3, 13)
        addBook('32x minecraft:sugar', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:quick_charge":2}}]', 6, 26)
        addBook('48x minecraft:sugar', '1x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:quick_charge":3}}]', 9, 41)
    
    //Bane of Arthropods
        addBook('12x minecraft:spider_eye', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:bane_of_arthropods":1}}]', 3, 6)
        addBook('24x minecraft:spider_eye', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:bane_of_arthropods":2}}]', 6, 12)
        addBook('36x minecraft:spider_eye', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:bane_of_arthropods":3}}]', 9, 18)
        addBook('48x minecraft:spider_eye', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:bane_of_arthropods":4}}]', 12, 24)
        addBook('60x minecraft:spider_eye', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:bane_of_arthropods":5}}]', 15, 30)

    //Sweeping Edge
        addBook('8x minecraft:iron_ingot', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sweeping_edge":1}}]', 3, 6)
        addBook('16x minecraft:iron_ingot', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sweeping_edge":2}}]', 6, 13)
        addBook('24x minecraft:iron_ingot', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sweeping_edge":3}}]', 9, 19)
    
    //Respiration
        addBook('1x minecraft:glass_bottle', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:respiration":1}}]', 3, 10)
        addBook('2x minecraft:glass_bottle', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:respiration":2}}]', 6, 17)
        addBook('3x minecraft:glass_bottle', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:respiration":3}}]', 9, 25)

    //Punch
        addBook('1x minecraft:string', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:punch":1}}]', 3, 13)
        addBook('2x minecraft:string', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:punch":2}}]', 6, 26)
    
    //Unbreaking
        addBook('1x minecraft:obsidian', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:unbreaking":1}}]', 3, 6)
        addBook('2x minecraft:obsidian', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:unbreaking":2}}]', 6, 12)
        addBook('3x minecraft:obsidian', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:unbreaking":3}}]', 9, 18)

    //Piercing
        addBook('8x minecraft:prismarine_crystals', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:piercing":1}}]', 3, 5)
        addBook('16x minecraft:prismarine_crystals', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:piercing":2}}]', 6, 10)
        addBook('24x minecraft:prismarine_crystals', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:piercing":3}}]', 9, 18)
        addBook('32x minecraft:prismarine_crystals', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:piercing":4}}]', 12, 25)

    //Efficiency
        addBook('12x minecraft:redstone', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":1}}]', 3, 5)
        addBook('24x minecraft:redstone', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":2}}]', 6, 10)
        addBook('36x minecraft:redstone', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":3}}]', 9, 18)
        addBook('48x minecraft:redstone', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":4}}]', 12, 25)
        addBook('60x minecraft:redstone', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:efficiency":5}}]', 15, 33)

    //Aqua Affinity
        addBook('1x minecraft:lily_pad', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:aqua_affinity":1}}]', 15, 3)

    //Depth Strider
        addBook('1x minecraft:prismarine_shard', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:depth_strider":1}}]', 3, 10)
        addBook('2x minecraft:prismarine_shard', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:depth_strider":2}}]', 6, 17)
        addBook('3x minecraft:prismarine_shard', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:depth_strider":3}}]', 9, 25)

    //Fortune
        addBook('1x minecraft:emerald', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":1}}]', 3, 13)
        addBook('1x minecraft:emerald', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":2}}]', 6, 20)
        addBook('3x minecraft:emerald', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fortune":3}}]', 9, 27)

    //Loyalty
        addBook('1x minecraft:lead', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:loyalty":1}}]', 3, 11)
        addBook('2x minecraft:lead', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:loyalty":2}}]', 6, 16)
        addBook('3x minecraft:lead', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:loyalty":3}}]', 9, 22)

    //Fire Protection
        addBook('16x minecraft:magma_cream', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_protection":1}}]', 3, 10)
        addBook('32x minecraft:magma_cream', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_protection":2}}]', 6, 16)
        addBook('48x minecraft:magma_cream', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_protection":3}}]', 9, 10)
        addBook('64x minecraft:magma_cream', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_protection":4}}]', 12, 28)

    //Power
        addBook('12x minecraft:flint', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:power":1}}]', 3, 5)
        addBook('24x minecraft:flint', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:power":2}}]', 6, 10)
        addBook('36x minecraft:flint', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:power":3}}]', 9, 18)
        addBook('48x minecraft:flint', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:power":4}}]', 12, 25)
        addBook('60x minecraft:flint', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:power":5}}]', 15, 33)

    //Riptide
        addBook('8x minecraft:firework_rocket', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:riptide":1}}]', 3, 15)
        addBook('16x minecraft:firework_rocket', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:riptide":2}}]', 6, 20)
        addBook('24x minecraft:firework_rocket', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:riptide":3}}]', 9, 25)

    //Mending
        addBook('1x enderio:experience_rod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:mending":1}}]', 15, 21)

    //Infinity
        addBook('1x enderio:grains_of_infinity', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:infinity":1}}]', 15, 17)

    //Lure
        addBook('1x minecraft:cod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:lure":1}}]', 3, 13)
        addBook('2x minecraft:cod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:lure":2}}]', 6, 20)
        addBook('3x minecraft:cod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:lure":3}}]', 9, 27)

    //Knockback
        addBook('1x minecraft:piston', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:knockback":1}}]', 3, 10)
        addBook('2x minecraft:piston', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:knockback":2}}]', 6, 21)

    //Multishot
        addBook('16x minecraft:arrow', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:multishot":1}}]', 15, 17)

    //Frost Walker
        addBook('16x minecraft:ice', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:frost_walker":1}}]', 3, 10)
        addBook('32x minecraft:ice', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:frost_walker":2}}]', 3, 17)

    //Channeling
        addBook('11x minecraft:lightning_rod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:channeling":1}}]', 15, 21)

    //Looting
        addBook('1x minecraft:skeleton_skull', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":1}}]', 3, 13)
        addBook('2x minecraft:skeleton_skull', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":2}}]', 6, 20)
        addBook('3x minecraft:skeleton_skull', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:looting":3}}]', 9, 27)

    //Fire Aspect
        addBook('8x minecraft:blaze_rod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_aspect":1}}]', 3, 12)
        addBook('16x minecraft:blaze_rod', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:fire_aspect":2}}]', 6, 25)

    //Blast Protection
        addBook('16x minecraft:gunpowder', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:blast_protection":1}}]', 3, 6)
        addBook('32x minecraft:gunpowder', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:blast_protection":2}}]', 6, 12)
        addBook('48x minecraft:gunpowder', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:blast_protection":3}}]', 9, 18)
        addBook('64x minecraft:gunpowder', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:blast_protection":4}}]', 12, 24)

    //Flame
        addBook('1x minecraft:netherrack', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:flame":1}}]', 15, 17)

    //Luck of the Sea
        addBook('1x minecraft:lapis_lazuli', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:luck_of_the_sea":1}}]', 3, 13)
        addBook('2x minecraft:lapis_lazuli', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:luck_of_the_sea":2}}]', 6, 20)
        addBook('3x minecraft:lapis_lazuli', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:luck_of_the_sea":3}}]', 9, 27)

    //Thorns
        addBook('4x minecraft:rose_bush', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:thorns":1}}]', 3, 12)
        addBook('8x minecraft:rose_bush', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:thorns":2}}]', 6, 25)
        addBook('12x minecraft:rose_bush', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:thorns":3}}]', 6, 40)

    //Sharpness
        addBook('12x minecraft:quartz', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sharpness":1}}]', 3, 5)
        addBook('24x minecraft:quartz', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sharpness":2}}]', 6, 11)
        addBook('36x minecraft:quartz', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sharpness":3}}]', 9, 19)
        addBook('48x minecraft:quartz', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sharpness":4}}]', 12, 28)
        addBook('60x minecraft:quartz', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:sharpness":5}}]', 15, 36)

    //Silk Touch
        addBook('1x minecraft:slime_ball', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:silk_touch":1}}]', 15, 13)

    //Soul Speed
        addBook('16x minecraft:soul_soil', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:soul_speed":1}}]', 3, 10)
        addBook('32x minecraft:soul_soil', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:soul_speed":2}}]', 6, 17)
        addBook('48x minecraft:soul_soil', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:soul_speed":3}}]', 9, 25)

    //Feather Falling
        addBook('1x minecraft:feather', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:feather_falling":1}}]', 3, 6)
        addBook('2x minecraft:feather', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:feather_falling":1}}]', 6, 10)
        addBook('3x minecraft:feather', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:feather_falling":1}}]', 9, 15)
        addBook('4x minecraft:feather', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:feather_falling":1}}]', 12, 19)

    //Smite
        addBook('12x minecraft:rotten_flesh', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:smite":1}}]', 3, 6)
        addBook('24x minecraft:rotten_flesh', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:smite":2}}]', 6, 12)
        addBook('36x minecraft:rotten_flesh', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:smite":3}}]', 9, 18)
        addBook('48x minecraft:rotten_flesh', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:smite":4}}]', 12, 24)
        addBook('60x minecraft:rotten_flesh', 'minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:smite":5}}]', 15, 30)

    //Infusing
        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 45, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 45), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:scrap_tome', 31, 27)
            .produceItem('4x apothic_enchanting:improved_scrap_tome', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:improved_scrap_tome', 31, 27)
            .produceItem('4x apothic_enchanting:extraction_tome', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 70, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 70), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:echo_shard', 31, 27)
            .produceItem('4x minecraft:echo_shard', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 100, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 100), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:honey_bottle', 31, 27)
            .produceItem('32x minecraft:experience_bottle', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:amethyst_block', 31, 27)
            .produceItem('minecraft:budding_amethyst', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 60, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 60), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('apothic_enchanting:dormant_deepshelf', 31, 27)
            .produceItem('apothic_enchanting:deepshelf', 107, 27)

        allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_enchanter', 100)
            .requireSource(500 * 80, 8, 17)
            .requireFluid(Fluid.of('justdirethings:xp_fluid_source', 140 * 80), 8, 37)
            .progressX(67)
            .progressY(28)
            .height(87)
            .width(133)
            .requireItem('minecraft:dragon_breath', 31, 27)
            .produceItem('3x apothic_enchanting:infused_breath', 107, 27)
           
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.