// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  allthemods.replaceInput({ id: /^utilitarian:utility\/redying\/[a-z_]+_stained_glass$/ }, '#c:glass_blocks/cheap',
    Ingredient.of('#c:glass_blocks/cheap').except(['connectedglass:borderless_glass', 'connectedglass:clear_glass', 'connectedglass:scratched_glass']));
  allthemods.replaceInput({ id: /^utilitarian:utility\/redying\/[a-z_]+_stained_glass_pane$/ }, '#c:glass_panes',
    Ingredient.of('#c:glass_panes').except(['connectedglass:borderless_glass_pane', 'connectedglass:clear_glass_pane', 'connectedglass:scratched_glass_pane']));
  allthemods.replaceInput({ id: /^utilitarian:utility\/redying\/[a-z_]+_candle$/ }, '#minecraft:candles',
    Ingredient.of('#minecraft:candles').except('#occultism:candles'));
  allthemods.replaceInput({ id: /^minecraft:dye_[a-z_]+_carpet$/ }, '#minecraft:wool_carpets',
    Ingredient.of('#minecraft:wool_carpets').except('#securitycraft:reinforced/wool_carpets'));

  allthemods.remove({ id: 'utilitarian:tiny_fuel/coal' });
  allthemods.remove({ id: 'utilitarian:tiny_fuel/charcoal' });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
