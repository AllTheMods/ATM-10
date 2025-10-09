// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

    allthemods.remove({ id: 'modern_industrialization:materials/aluminum/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/tin/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/steel/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/invar/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/bronze/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/iron/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/copper/craft/gear'})
    allthemods.remove({ id: 'modern_industrialization:materials/gold/craft/gear'})
    allthemods.remove({ id: 'railcraft:lead_gear'})
    allthemods.remove({ id: 'railcraft:nickel_gear'})
    allthemods.remove({ id: 'railcraft:silver_gear'})
    allthemods.remove({ id: 'railcraft:tin_gear'})
    allthemods.remove({ id: 'railcraft:zinc_gear'})
    allthemods.remove({ id: 'railcraft:steel_gear'})
    allthemods.remove({ id: 'railcraft:invar_gear'})
    allthemods.remove({ id: 'railcraft:bronze_gear'})
    allthemods.remove({ id: 'railcraft:iron_gear'})
    allthemods.remove({ id: 'railcraft:gold_gear'})
    allthemods.remove({ id: 'railcraft:copper_gear'})
    allthemods.remove({ id: 'railcraft:brass_gear'})
    allthemods.remove({ id: 'industrialforegoing:iron_gear'})
    allthemods.remove({ id: 'industrialforegoing:gold_gear'})
    allthemods.remove({ id: 'industrialforegoing:diamond_gear'})
    allthemods.remove({ id: 'enderio:iron_gear'})
    allthemods.remove({ id: 'enderio:wood_gear_corner'})
    allthemods.remove({ id: 'pneumaticcraft:compressed_iron_gear'})

    allthemods.shaped('pneumaticcraft:compressed_iron_gear', [' C ', 'CNC', ' C '], {
        C: 'pneumaticcraft:ingot_iron_compressed',
        N: 'minecraft:iron_nugget'
    }).id('allthemods:pneumaticcraft/compressed_iron_gear')

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.