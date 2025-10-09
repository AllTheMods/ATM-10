// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

StartupEvents.registry('item', allthemods => {
    //Forbidden Arcanus
    allthemods.create('stellarite_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('forbidden_arcanus:stellarite_piece')
        .sourceName("Stellarite Piece")
        .derivativeTier("precious")
        .sulfurType("metals")
    allthemods.create('arcane_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('forbidden_arcanus:arcane_crystal')
        .sourceName("Arcane Crystal")
        .derivativeTier("rare")
        .sulfurType("gems")
    allthemods.create('runic_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('forbidden_arcanus:rune')
        .sourceName("Rune")
        .derivativeTier("common")
        .sulfurType("metals")
    //AllTheOres
    allthemods.create('salt_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('alltheores:salt')
        .sourceName("Salt")
        .derivativeTier("abundant")
        .sulfurType("earthen_matters")
    allthemods.create('sulfur_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('alltheores:sulfur')
        .sourceName("Sulfur")
        .derivativeTier("common")
        .sulfurType("misc")
    //Mystical Agriculture
    allthemods.create('prosperity_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('mysticalagriculture:prosperity_shard')
        .sourceName("Prosperity Shard")
        .derivativeTier("common")
        .sulfurType("misc")
    //Occultism
    allthemods.create('iesnium_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('occultism:iesnium_ingot')
        .sourceName("Iesnium")
        .derivativeTier("precious")
        .sulfurType("metals")
    //Irons
    allthemods.create('mithril_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('irons_spellbooks:mithril_ingot')
        .sourceName("Mithril")
        .derivativeTier("precious")
        .sulfurType("metals")
    //Silent
    allthemods.create('bort_sulfur', 'theurgy:alchemical_sulfur')
        .sourceItem('silentgear:bort')
        .sourceName("Bort")
        .derivativeTier("rare")
        .sulfurType("earthen_matters")
        
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.