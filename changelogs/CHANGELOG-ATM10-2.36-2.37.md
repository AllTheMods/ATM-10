# Changelog

# 📦 2.37

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- Advanced Peripherals (0.7.49a)
- Load My F***ing Tags (1.0.4+1.21)

</details>

<details>
<summary>Updated (61)</summary>

- Advanced AE (1.2.3-1.21.1) -> (1.2.5-1.21.1)
- Applied Energistics 2 (19.2.3-beta) -> (19.2.5-beta)
- AEInfinityBooster (1.21-1.0.1.38) -> (1.21.1-1.0.0.49)
- All The Leaks (0.1.14-beta+1.21.1-neoforge) -> (0.1.15-beta+1.21.1-neoforge)
- AppliedFlux (1.21-2.0.4-neoforge) -> (1.21-2.0.5-neoforge)
- Ars Nouveau (5.4.1) -> (5.5.0)
- Ars Énergistique (2.1.0-beta) -> (2.1.1-beta)
- Balm (21.0.27) -> (21.0.31)
- Better Compatibility Checker (21.1.0) -> (21.1.2)
- Oh The Biomes We've Gone (2.3.5) -> (2.3.7)
- L_Ender's Cataclysm (2.55-1.21.1) -> (2.56-1.21.1)
- CC: Tweaked (1.113.1) -> (1.115.0)
- Connectivity Mod (6.9) -> (7.1)
- Cooking for Blockheads (21.1.10) -> (21.1.11)
- Crash Assistant (1.3.7) -> (1.4.3)
- Cucumber Library (8.0.9) -> (8.0.10)
- Cyclops Core (1.25.6) -> (1.25.7)
- MmmMmmMmmMmm (1.21-2.0.6) -> (1.21-2.0.7)
- Extended Industrialization (1.14.1-1.21.1) -> (1.14.4-1.21.1)
- ExtendedAE (1.21-2.2.2-neoforge) -> (1.21-2.2.3-neoforge)
- Forbidden Arcanus (2.5.12) -> (2.5.13)
- FTB Library (2101.1.9) -> (2101.1.10)
- FTB Ranks (2101.1.1) -> (2101.1.2)
- GuideME (21.1.0) -> (21.1.1)
- ImmediatelyFast (1.3.4+1.21.1) -> (1.3.5+1.21.1)
- Immersive Engineering (12.0.0-182) -> (12.1.0-185)
- IntegratedDynamics (1.25.5) -> (1.25.6)
- IntegratedScripting (1.0.16) -> (1.0.17)
- IntegratedTunnels (1.8.34) -> (1.8.35)
- IntegratedTunnels-Compat (1.8.34) -> (1.8.35)
- Iron's Gems 'n Jewelry (1.21.1-1.0.8) -> (1.21.1-1.0.9)
- JamLib (1.2.2-build.2+1.21.1) -> (1.3.2+1.21.1)
- Journeymap (1.21.1-6.0.0-beta.37) -> (1.21.1-6.0.0-beta.39)
- Just Enough Professions (JEP) (4.0.3) -> (4.0.4)
- KeyBind Bundles (1.1.0) -> (1.2.0)
- Mekanism (10.7.8) -> (10.7.9)
- Mekanism: Generators (10.7.8) -> (10.7.9)
- Mekanism: Tools (10.7.8) -> (10.7.9)
- Moog's Nether Structures (1.0.7-1.21) -> (1.0.8-1.21)
- Moonlight Lib (1.21-2.17.26) -> (1.21-2.17.30)
- More Red x CC:Tweaked Compat (1.21.1-1.1.0) -> (1.21.1-1.3.0)
- Mystical Agriculture (8.0.12) -> (8.0.13)
- NeoForge (21.1.119) -> (21.1.123)
- Occultism (1.173.4) -> (1.176.0)
- Pam's HarvestCraft 2 - Trees (1.0.1) -> (1.0.0)
- PneumaticCraft: Repressurized (8.2.8) -> (8.2.9)
- Productive Metalworks (1.21.1-1.1.0) -> (1.21.1-1.2.1)
- RAR-Compat (0.9.1) -> (0.9.4)
- Relics (0.10.5.2) -> (0.10.5.3)
- Simply Light (1.5.1) -> (1.5.3)
- Sophisticated Backpacks (3.23.5) -> (3.24.1)
- Sophisticated Core (1.2.14) -> (1.3.0)
- Sophisticated Storage (1.3.9) -> (1.4.0)
- Sophisticated Storage In Motion (0.10.4) -> (0.10.5)
- spark (1.10.109) -> (1.10.124)
- Structurize (1.0.762-1.21.1-snapshot) -> (1.0.763-1.21.1-snapshot)
- Supplementaries (1.21-3.0.35-beta) -> (1.21-3.0.37-beta)
- Sushi Go Crafting (0.6.3) -> (0.6.4)
- The Bumblezone (7.7.17+1.21.1-neoforge) -> (7.7.19+1.21.1-neoforge)
- Utilitarian (1.21.1-0.13.6) -> (1.21.1-0.13.7)
- Waystones (21.1.10) -> (21.1.11)

</details>

## 🍳 Recipes

<details>
<summary>Added (482)</summary>
<blockquote>

<details>
<summary>advancedperipherals/block_reader</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    M: {
+      item: "computercraft:wired_modem_full"
+    }
+    O: {
+      item: "minecraft:observer"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  pattern: [
+    "IRI"
+    "MAO"
+    "IRI"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:block_reader"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/chat_box</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    G: {
+      tag: "c:ingots/gold"
+    }
+    P: {
+      tag: "minecraft:logs"
+    }
+  }
+  pattern: [
+    "PPP"
+    "PAP"
+    "PGP"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:chat_box"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/chunk_controller</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "minecraft:ender_eye"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+  }
+  pattern: [
+    "IRI"
+    "RAR"
+    "IRI"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:chunk_controller"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/colony_integrator</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "minecolonies"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    B: {
+      item: "minecolonies:build_goggles"
+    }
+    O: {
+      tag: "minecraft:logs"
+    }
+    R: {
+      item: "minecolonies:blockminecoloniesrack"
+    }
+    S: {
+      item: "structurize:sceptergold"
+    }
+  }
+  pattern: [
+    "ORO"
+    "BAS"
+    "ORO"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:colony_integrator"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/computer_tool</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    B: {
+      item: "minecraft:blue_terracotta"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+  }
+  pattern: [
+    "I I"
+    "IBI"
+    " B "
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:computer_tool"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/energy_detector</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    B: {
+      tag: "c:storage_blocks/redstone"
+    }
+    C: {
+      item: "minecraft:comparator"
+    }
+    G: {
+      tag: "c:ingots/gold"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+  }
+  pattern: [
+    "BRB"
+    "CAC"
+    "BGB"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:energy_detector"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/environment_detector</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    C: {
+      tag: "c:crops"
+    }
+    L: {
+      tag: "minecraft:leaves"
+    }
+    S: {
+      tag: "minecraft:saplings"
+    }
+    W: {
+      tag: "minecraft:wool"
+    }
+  }
+  pattern: [
+    "WSW"
+    "LAL"
+    "WCW"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:environment_detector"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/geo_scanner</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    C: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    D: {
+      tag: "c:gems/diamond"
+    }
+    M: {
+      item: "computercraft:wired_modem_full"
+    }
+    O: {
+      item: "minecraft:observer"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  pattern: [
+    "DMD"
+    "DCD"
+    "ROR"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:geo_scanner"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/inventory_manager</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    C: {
+      tag: "c:chests"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+  }
+  pattern: [
+    "ICI"
+    "CAC"
+    "ICI"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:inventory_manager"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/me_bridge</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "ae2"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    F: {
+      item: "ae2:fluix_block"
+    }
+    I: {
+      item: "ae2:interface"
+    }
+  }
+  pattern: [
+    "FIF"
+    "IAI"
+    "FIF"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:me_bridge"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/memory_card</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    G: {
+      tag: "c:ingots/gold"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    O: {
+      item: "minecraft:observer"
+    }
+    W: {
+      tag: "c:glass_blocks/cheap"
+    }
+  }
+  pattern: [
+    "IWI"
+    "IOI"
+    " G "
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:memory_card"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/nbt_storage</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    C: {
+      tag: "c:chests"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  pattern: [
+    "ICI"
+    "CAC"
+    "RCR"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:nbt_storage"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/overpowered_end_automata_core</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "redstone"
+  ingredients: [
+    {
+      item: "advancedperipherals:end_automata_core"
+    }
+    {
+      item: "minecraft:nether_star"
+    }
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:overpowered_end_automata_core"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/overpowered_husbandry_automata_core</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "redstone"
+  ingredients: [
+    {
+      item: "advancedperipherals:husbandry_automata_core"
+    }
+    {
+      item: "minecraft:nether_star"
+    }
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:overpowered_husbandry_automata_core"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/overpowered_weak_automata_core</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "redstone"
+  ingredients: [
+    {
+      item: "advancedperipherals:weak_automata_core"
+    }
+    {
+      item: "minecraft:nether_star"
+    }
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:overpowered_weak_automata_core"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/peripheral_casing</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    i: {
+      item: "minecraft:iron_bars"
+    }
+  }
+  pattern: [
+    "IiI"
+    "iRi"
+    "IiI"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:peripheral_casing"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/player_detector</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    S: {
+      item: "minecraft:smooth_stone"
+    }
+  }
+  pattern: [
+    "SSS"
+    "SAS"
+    "SRS"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:player_detector"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/redstone_integrator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    C: {
+      item: "minecraft:comparator"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  pattern: [
+    "RCR"
+    "CAC"
+    "RCR"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:redstone_integrator"
+  }
+}

```


</details>

<details>
<summary>advancedperipherals/weak_automata_core</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    A: {
+      item: "advancedperipherals:peripheral_casing"
+    }
+    D: {
+      tag: "c:gems/diamond"
+    }
+    L: {
+      item: "minecraft:potion"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    S: {
+      item: "minecraft:soul_lantern"
+    }
+  }
+  pattern: [
+    "RAR"
+    "DSD"
+    "RLR"
+  ]
+  result: {
+    count: 1
+    id: "advancedperipherals:weak_automata_core"
+  }
+}

```


</details>

<details>
<summary>alltheores/processing/ore_hammer/hop_graphite_dust_from_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "immersiveengineering:dust_hop_graphite"
+    count: 1
+  }
+  ingredients: [
+    {
+      tag: "c:ingots/hop_graphite"
+    }
+    {
+      tag: "alltheores:ore_hammers"
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>ars_nouveau/ars_stencil</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "ars_nouveau:abjuration_essence"
+    }
+    {
+      item: "minecraft:paper"
+    }
+  ]
+  result: {
+    count: 1
+    id: "ars_nouveau:ars_stencil"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/glyph_wind_burst</summary>

```diff
+{
+  type: "ars_nouveau:glyph"
+  exp: 27
+  inputs: [
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "ars_nouveau:air_essence"
+    }
+  ]
+  output: {
+    count: 1
+    id: "ars_nouveau:glyph_wind_burst"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/novice_spellbook_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "ars_nouveau:worn_notebook"
+    }
+    {
+      item: "minecraft:iron_shovel"
+    }
+    {
+      item: "minecraft:iron_pickaxe"
+    }
+    {
+      item: "minecraft:iron_axe"
+    }
+    {
+      item: "minecraft:iron_sword"
+    }
+  ]
+  result: {
+    count: 1
+    id: "ars_nouveau:novice_spell_book"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/sourcestone_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  group: "wooden_slab"
+  key: {
+    #: {
+      item: "ars_nouveau:sourcestone"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "ars_nouveau:sourcestone_slab"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/sourcestone_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    #: {
+      item: "ars_nouveau:sourcestone"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "ars_nouveau:sourcestone_stairs"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/sourcestone_stone_cutterslab</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "ars_nouveau:sourcestone"
+  }
+  result: {
+    count: 2
+    id: "ars_nouveau:sourcestone_slab"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/sourcestone_stonecutter_stair</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "ars_nouveau:sourcestone"
+  }
+  result: {
+    count: 1
+    id: "ars_nouveau:sourcestone_stairs"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/lootz_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 1
+    g: 255
+    id: "ars_nouveau:constant"
+    r: 255
+  }
+  flavour_text: "Mobs meet fireworks"
+  name: "Fireworks and Mobs"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_projectile"
+    "ars_nouveau:glyph_harm"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_launch"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_firework"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_explosion"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/sloppybox_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 1
+    g: 1
+    id: "ars_nouveau:constant"
+    r: 139
+  }
+  flavour_text: "Enough heat to melt a mountain or evaporate oceans."
+  name: "Arcane Smelt"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_touch"
+    "ars_nouveau:glyph_rune"
+    "ars_nouveau:glyph_smelt"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/yuukiukami_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 105
+    g: 1
+    id: "ars_nouveau:constant"
+    r: 48
+  }
+  flavour_text: "One of YuukiUkami’s earliest creations, this spell reflects their desire for precision and mastery. Infused with the arcane finesse of its creator, it draws minerals from the earth at a distance, as if the ores themselves were eager to join the mage’s growing legacy"
+  name: "Yuuki's Mineral Assimilator"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_projectile"
+    "ars_nouveau:glyph_break"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_extract"
+    "ars_nouveau:glyph_pickup"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>computercraft/redstone_relay</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    C: {
+      item: "computercraft:wired_modem"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    S: {
+      item: "minecraft:stone"
+    }
+  }
+  pattern: [
+    "SRS"
+    "RCR"
+    "SRS"
+  ]
+  result: {
+    count: 1
+    id: "computercraft:redstone_relay"
+  }
+}

```


</details>

<details>
<summary>extended_industrialization/assembler/looting_module</summary>

```diff
+{
+  type: "modern_industrialization:assembler"
+  duration: 200
+  eu: 8
+  fluid_inputs: [
+    {
+      amount: 1000
+      fluid: "modern_industrialization:polyethylene"
+    }
+  ]
+  item_inputs: [
+    {
+      amount: 8
+      tag: "c:plates/stainless_steel"
+    }
+    {
+      amount: 2
+      item: "extended_industrialization:netherite_rotary_blade"
+    }
+    {
+      amount: 4
+      item: "modern_industrialization:robot_arm"
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 1
+      item: "extended_industrialization:looting_module"
+    }
+  ]
+}

```


</details>

<details>
<summary>immersiveengineering/cloche/pitcher_plant</summary>

```diff
+{
+  type: "immersiveengineering:cloche"
+  input: {
+    item: "minecraft:pitcher_pod"
+  }
+  render: {
+    type: "immersiveengineering:doublecrop"
+    block: "minecraft:pitcher_crop"
+    doublingAge: 3
+  }
+  results: [
+    {
+      item: "minecraft:pitcher_plant"
+    }
+  ]
+  soil: {
+    item: "minecraft:dirt"
+  }
+  time: 1200
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/aluminum_hanging_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "minecraft:chain"
+    }
+    w: {
+      tag: "c:ingots/aluminum"
+    }
+  }
+  pattern: [
+    "c c"
+    "www"
+    "www"
+  ]
+  result: {
+    count: 6
+    id: "immersiveengineering:aluminum_hanging_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/aluminum_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      tag: "c:rods/aluminum"
+    }
+    w: {
+      tag: "c:ingots/aluminum"
+    }
+  }
+  pattern: [
+    "www"
+    "www"
+    " s "
+  ]
+  result: {
+    count: 3
+    id: "immersiveengineering:aluminum_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/steel_hanging_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "minecraft:chain"
+    }
+    w: {
+      tag: "c:ingots/steel"
+    }
+  }
+  pattern: [
+    "c c"
+    "www"
+    "www"
+  ]
+  result: {
+    count: 6
+    id: "immersiveengineering:steel_hanging_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/steel_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      tag: "c:rods/steel"
+    }
+    w: {
+      tag: "c:ingots/steel"
+    }
+  }
+  pattern: [
+    "www"
+    "www"
+    " s "
+  ]
+  result: {
+    count: 3
+    id: "immersiveengineering:steel_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/treated_wood_hanging_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "minecraft:chain"
+    }
+    w: {
+      tag: "immersiveengineering:treated_wood"
+    }
+  }
+  pattern: [
+    "c c"
+    "www"
+    "www"
+  ]
+  result: {
+    count: 6
+    id: "immersiveengineering:treated_wood_hanging_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crafting/treated_wood_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    s: {
+      tag: "c:rods/wooden"
+    }
+    w: {
+      tag: "immersiveengineering:treated_wood"
+    }
+  }
+  pattern: [
+    "www"
+    "www"
+    " s "
+  ]
+  result: {
+    count: 3
+    id: "immersiveengineering:treated_wood_sign"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/crusher/coarse_dirt</summary>

```diff
+{
+  type: "immersiveengineering:crusher"
+  energy: 1600
+  input: {
+    item: "minecraft:coarse_dirt"
+  }
+  result: {
+    item: "minecraft:dirt"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/concrete_tile2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete_chiseled"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:concrete_tile"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/concrete_tile3</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete_pillar"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:concrete_tile"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/concrete_tile4</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:concrete_tile"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/hempcrete</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:hempcrete_pillar"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:hempcrete"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/hempcrete2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:hempcrete_chiseled"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:hempcrete"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/hempcrete3</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:hempcrete_brick"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:hempcrete"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/slab_concrete_brick2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete"
+  }
+  result: {
+    count: 2
+    id: "immersiveengineering:slab_concrete_brick"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/slab_concrete_tile2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete"
+  }
+  result: {
+    count: 2
+    id: "immersiveengineering:slab_concrete_tile"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/slab_hempcrete_brick2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:hempcrete"
+  }
+  result: {
+    count: 2
+    id: "immersiveengineering:slab_hempcrete_brick"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/stairs_concrete_brick2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:stairs_concrete_brick"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/stairs_concrete_tile2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:concrete"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:stairs_concrete_tile"
+  }
+}

```


</details>

<details>
<summary>immersiveengineering/stonecutting/stairs_hempcrete_brick2</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "immersiveengineering:hempcrete"
+  }
+  result: {
+    count: 1
+    id: "immersiveengineering:stairs_hempcrete_brick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/from_pillar</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_pillar"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:dacite"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/slabs_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/slabs_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/slabs_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/slabs_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/stairs_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/stairs_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/stairs_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/stairs_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/walls_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/walls_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/walls_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/dacite/walls_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/slabs_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/slabs_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/slabs_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/slabs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/stairs_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/stairs_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/stairs_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/stairs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/walls_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/walls_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/walls_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/crushing/red_rock/walls_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/black</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_black_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/blue</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_blue_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:blue_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/brown</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_brown_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:brown_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/cyan</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_cyan_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:cyan_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/gray</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_gray_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:gray_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/green</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_green_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:green_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/light_blue</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_light_blue_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:light_blue_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/light_gray</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_light_gray_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:light_gray_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/lime</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_lime_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:lime_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/magenta</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_magenta_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:magenta_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/orange</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_orange_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:orange_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/pink</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_pink_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:pink_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/purple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_purple_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:purple_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/red</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_red_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:red_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/white</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_white_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/dye/yellow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_yellow_dye"
+  }
+  output: {
+    count: 2
+    id: "minecraft:yellow_dye"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/slabs_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/slabs_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/slabs_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/slabs_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/stairs_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/stairs_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/stairs_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/stairs_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/walls_conversion_dacite</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/walls_conversion_dacite_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_tile_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/walls_conversion_dacite_cobblestone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_cobblestone_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/dacite/walls_conversion_dacite_tile</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:dacite_tile_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:dacite_cobblestone_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/mossy_stone/conversion_mossy_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_stone"
+  }
+  output: {
+    count: 1
+    id: "minecraft:stone"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/mossy_stone/slabs_conversion_mossy_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_stone_slab"
+  }
+  output: {
+    count: 1
+    id: "minecraft:stone_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/mossy_stone/stairs_conversion_mossy_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_stone_stairs"
+  }
+  output: {
+    count: 1
+    id: "minecraft:stone_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/conversion_mossy_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_bricks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/slabs_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/slabs_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/slabs_conversion_mossy_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/slabs_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/slabs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_slab"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/stairs_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/stairs_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/stairs_conversion_mossy_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/stairs_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/stairs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/walls_conversion_chiseled_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:chiseled_red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/walls_conversion_cracked_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:cracked_red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/walls_conversion_mossy_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:mossy_red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/walls_conversion_red_rock</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:cracked_red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/enriching/red_rock/walls_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:chiseled_red_rock_brick_wall"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/mossy_stone/conversion_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "minecraft:stone"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_stone"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/mossy_stone/slabs_conversion_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "minecraft:stone_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_stone_slab"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/mossy_stone/stairs_conversion_stone</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "minecraft:stone_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_stone_stairs"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/red_rock/conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "biomeswevegone:red_rock_bricks"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_red_rock_bricks"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/red_rock/slabs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_slab"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_red_rock_brick_slab"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/red_rock/stairs_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_stairs"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_red_rock_brick_stairs"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/metallurgic_infusing/red_rock/walls_conversion_red_rock_bricks</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:metallurgic_infusing"
+  chemical_input: {
+    amount: 10
+    tag: "mekanism:bio"
+  }
+  item_input: {
+    count: 1
+    item: "biomeswevegone:red_rock_brick_wall"
+  }
+  output: {
+    count: 1
+    id: "biomeswevegone:mossy_red_rock_brick_wall"
+  }
+  per_tick_usage: false
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/black</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_black_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:black"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/blue</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_blue_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:blue"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/brown</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_brown_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:brown"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/cyan</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_cyan_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:cyan"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/gray</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_gray_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:gray"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/green</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_green_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:green"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/light_blue</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_light_blue_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:light_blue"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/light_gray</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_light_gray_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:light_gray"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/lime</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_lime_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:lime"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/magenta</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_magenta_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:magenta"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/orange</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_orange_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:orange"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/pink</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_pink_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:pink"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/purple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_purple_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:purple"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/red</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_red_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:red"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/white</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_white_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:white"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/pigment_extracting/yellow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:pigment_extracting"
+  input: {
+    count: 1
+    tag: "biomeswevegone:dye/makes_yellow_dye"
+  }
+  output: {
+    amount: 768
+    id: "mekanism:yellow"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/black</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:black_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:black_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/blue</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:blue_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:blue_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/pink</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:pink_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:pink_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/purple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:purple_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:purple_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/white</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:white_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:white_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sandstone_to_sand/windswept</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:windswept_sandstone_blocks"
+  }
+  output: {
+    count: 2
+    id: "biomeswevegone:windswept_sand"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:aspen_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:baobab_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:cika_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:cypress_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:ebony_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:fir_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:florus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:holly_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:ironwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:jacaranda_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:mahogany_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:maple_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:palm_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:pine_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:redwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:sakura_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:skyris_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:spirit_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:willow_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/boat/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_boat"
+  }
+  main_output: {
+    count: 5
+    id: "biomeswevegone:zelkova_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:aspen_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:baobab_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:blue_enchanted_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:cika_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:cypress_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:ebony_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:fir_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:florus_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:green_enchanted_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:holly_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:ironwood_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:jacaranda_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:mahogany_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:maple_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:palm_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:pine_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:rainbow_eucalyptus_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:redwood_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:sakura_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:skyris_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:spirit_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:white_mangrove_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:willow_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:witch_hazel_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/chest_boat/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_chest_boat"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:zelkova_boat"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 1
+    id: "minecraft:chest"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:aspen_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:baobab_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cika_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cypress_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ebony_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:fir_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:florus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:holly_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ironwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:jacaranda_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:mahogany_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:maple_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:palm_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:pine_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:redwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:sakura_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:skyris_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:spirit_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:willow_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/door/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_door"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:zelkova_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:aspen_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:baobab_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cika_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cypress_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ebony_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:fir_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:florus_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:holly_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ironwood_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:jacaranda_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:mahogany_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:maple_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:palm_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:pine_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:redwood_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:sakura_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:skyris_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:spirit_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:willow_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/fence_gate/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_fence_gate"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:zelkova_planks"
+  }
+  secondary_chance: 1
+  secondary_output: {
+    count: 4
+    id: "minecraft:stick"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:aspen_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:baobab_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cika_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:cypress_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ebony_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:fir_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:florus_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:holly_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:ironwood_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:jacaranda_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:mahogany_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:maple_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:palm_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:pine_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:redwood_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:sakura_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:skyris_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:spirit_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:willow_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/hanging_sign/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_hanging_sign"
+  }
+  main_output: {
+    count: 2
+    id: "biomeswevegone:zelkova_planks"
+  }
+  secondary_chance: 0.5
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:aspen_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:aspen_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:baobab_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:baobab_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:blue_enchanted_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:cika_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:cika_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:cypress_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:cypress_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:ebony_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:ebony_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:fir_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:fir_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:florus_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:florus_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:green_enchanted_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:holly_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:holly_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:ironwood_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:ironwood_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:jacaranda_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:jacaranda_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:mahogany_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:mahogany_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:maple_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:maple_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:palm_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:palm_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:pine_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:pine_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:rainbow_eucalyptus_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:redwood_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:redwood_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:sakura_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:sakura_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:skyris_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:skyris_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:spirit_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:spirit_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:white_mangrove_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:willow_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:willow_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:witch_hazel_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/log/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    tag: "biomeswevegone:zelkova_logs"
+  }
+  main_output: {
+    count: 6
+    id: "biomeswevegone:zelkova_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 1
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:aspen_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:baobab_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:cika_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:cypress_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:ebony_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:fir_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:florus_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:holly_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:ironwood_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:jacaranda_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:mahogany_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:maple_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:palm_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:pine_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:redwood_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:sakura_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:skyris_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:spirit_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:willow_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/pressure_plate/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_pressure_plate"
+  }
+  main_output: {
+    count: 1
+    id: "biomeswevegone:zelkova_planks"
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    count: 2
+    id: "mekanism:sawdust"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/aspen</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:aspen_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:aspen_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/baobab</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:baobab_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:baobab_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/blue_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:blue_enchanted_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:blue_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/cika</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cika_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:cika_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/cypress</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:cypress_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:cypress_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/ebony</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ebony_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:ebony_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/fir</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:fir_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:fir_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/florus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:florus_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:florus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/green_enchanted</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:green_enchanted_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:green_enchanted_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/holly</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:holly_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:holly_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/ironwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:ironwood_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:ironwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/jacaranda</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:jacaranda_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:jacaranda_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/mahogany</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:mahogany_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:mahogany_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/maple</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:maple_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:maple_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/palm</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:palm_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:palm_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/pine</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:pine_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:pine_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/rainbow_eucalyptus</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:rainbow_eucalyptus_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:rainbow_eucalyptus_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/redwood</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:redwood_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:redwood_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/sakura</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:sakura_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:sakura_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/skyris</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:skyris_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:skyris_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/spirit</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:spirit_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:spirit_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/white_mangrove</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:white_mangrove_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:white_mangrove_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/willow</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:willow_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:willow_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/witch_hazel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:witch_hazel_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:witch_hazel_planks"
+  }
+}

```


</details>

<details>
<summary>mekanism/compat/biomeswevegone/sawing/trapdoor/zelkova</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "biomeswevegone"
+    }
+  ]
+  type: "mekanism:sawing"
+  input: {
+    count: 1
+    item: "biomeswevegone:zelkova_trapdoor"
+  }
+  main_output: {
+    count: 3
+    id: "biomeswevegone:zelkova_planks"
+  }
+}

```


</details>

<details>
<summary>minecraft/black_dye_from_california_poppy</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "black_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:california_poppy"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/black_dye_from_foxglove</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "black_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:foxglove"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/black_dye_from_orange_amaranth</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "black_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:orange_amaranth"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/black_dye_from_orange_daisy</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "black_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:orange_daisy"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:black_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/blue_dye_from_blue_glowcane_powder</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "blue_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:blue_glowcane_powder"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:blue_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/green_dye_from_green_glowcane_powder</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "green_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:green_glowcane_powder"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:green_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/red_dye_from_red_glowcane_powder</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "red_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:red_glowcane_powder"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:red_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_allium_flower_bush</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:allium_flower_bush"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_alpine_bellflower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:alpine_bellflower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_amaranth</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:amaranth"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_angelica</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:angelica"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_begonia</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:begonia"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_bistort</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:bistort"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_black_rose</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:black_rose"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_blue_rose_bush</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:blue_rose_bush"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_blue_sage</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:blue_sage"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_crocus</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:crocus"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_cyan_amaranth</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:cyan_amaranth"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_cyan_pitcher_plant</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:cyan_pitcher_plant"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_cyan_rose</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:cyan_rose"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_cyan_tulip</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:cyan_tulip"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_daffodil</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:daffodil"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_delphinium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:delphinium"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_fairy_slipper</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:fairy_slipper"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_green_tulip</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:green_tulip"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_guzmania</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:guzmania"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_horseweed</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:horseweed"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_incan_lily</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:incan_lily"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_iris</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:iris"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_japanese_orchid</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:japanese_orchid"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_kovan_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:kovan_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_lazarus_bellflower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:lazarus_bellflower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_lollipop_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:lollipop_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_magenta_amaranth</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:magenta_amaranth"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_magenta_pitcher_plant</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:magenta_pitcher_plant"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_magenta_tulip</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:magenta_tulip"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_osiria_rose</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:osiria_rose"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_peach_leather_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:peach_leather_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_pink_allium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:pink_allium"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_pink_allium_flower_bush</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:pink_allium_flower_bush"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_pink_anemone</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:pink_anemone"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_pink_daffodil</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:pink_daffodil"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_protea_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:protea_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_purple_amaranth</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:purple_amaranth"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_purple_sage</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:purple_sage"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_purple_tulip</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:purple_tulip"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_richea</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:richea"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_rose</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:rose"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_silver_vase_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:silver_vase_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_tall_allium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:tall_allium"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_tall_pink_allium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:tall_pink_allium"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_tall_white_allium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:tall_white_allium"
+    }
+  ]
+  result: {
+    count: 2
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_violet_leather_flower</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:violet_leather_flower"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_white_allium</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:white_allium"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_white_allium_flower_bush</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:white_allium_flower_bush"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_white_anemone</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:white_anemone"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_white_sage</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:white_sage"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_winter_succulent</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:winter_succulent"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_yellow_daffodil</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:yellow_daffodil"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/white_dye_from_yellow_tulip</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "white_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:yellow_tulip"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:white_dye"
+  }
+}

```


</details>

<details>
<summary>minecraft/yellow_dye_from_yellow_glowcane_powder</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "yellow_dye"
+  ingredients: [
+    {
+      item: "biomeswevegone:yellow_glowcane_powder"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:yellow_dye"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/ender_eye</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: {
+    item: "minecraft:ender_pearl"
+  }
+  consume_cast: false
+  fluid: {
+    amount: 100
+    fluid: "productivemetalworks:molten_blaze"
+  }
+  result: {
+    count: 1
+    id: "minecraft:ender_eye"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/ender_pearl</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: {
+    item: "productivemetalworks:gem_cast"
+  }
+  consume_cast: false
+  fluid: {
+    amount: 100
+    fluid: "productivemetalworks:molten_ender"
+  }
+  result: {
+    count: 1
+    id: "minecraft:ender_pearl"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/gems/amethyst_block</summary>

```diff
+{
+  type: "productivemetalworks:block_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 400
+    fluid: "productivemetalworks:molten_amethyst"
+  }
+  result: {
+    count: 1
+    id: "minecraft:amethyst_block"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/misc/glass_pane</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 375
+    fluid: "productivemetalworks:molten_glass"
+  }
+  result: {
+    count: 1
+    id: "minecraft:glass_pane"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/melting/glass_pane</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    tag: "c:glass_panes"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1400
+  result: [
+    {
+      amount: 375
+      id: "productivemetalworks:molten_glass"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/storage_blocks/charcoals</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:storage_blocks/charcoal"
+      }
+    }
+  ]
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    tag: "c:storage_blocks/charcoal"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 900
+      id: "productivemetalworks:molten_carbon"
+    }
+  ]
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_black_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_black"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_black"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_blue_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_blue"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_blue"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_brown_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_brown"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_brown"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_cyan_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_cyan"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_cyan"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_gray_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_gray"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_gray"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_green_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_green"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_green"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_light_blue_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_light_blue"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_light_blue"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_light_gray_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_light_gray"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_light_gray"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_lime_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_lime"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_lime"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_magenta_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_magenta"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_magenta"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_orange_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_orange"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_orange"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_pink_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_pink"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_pink"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_purple_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_purple"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_purple"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_red_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_red"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_red"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_panel_yellow_split</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    A: {
+      item: "simplylight:illuminant_slab_yellow"
+    }
+  }
+  pattern: [
+    "AAA"
+  ]
+  result: {
+    count: 6
+    id: "simplylight:illuminant_panel_yellow"
+  }
+  show_notification: false
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_black_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_black"
+    }
+    {
+      item: "simplylight:illuminant_panel_black"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_black"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_blue_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_blue"
+    }
+    {
+      item: "simplylight:illuminant_panel_blue"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_blue"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_brown_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_brown"
+    }
+    {
+      item: "simplylight:illuminant_panel_brown"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_brown"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel"
+    }
+    {
+      item: "simplylight:illuminant_panel"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_cyan_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_cyan"
+    }
+    {
+      item: "simplylight:illuminant_panel_cyan"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_cyan"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_gray_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_gray"
+    }
+    {
+      item: "simplylight:illuminant_panel_gray"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_gray"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_green_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_green"
+    }
+    {
+      item: "simplylight:illuminant_panel_green"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_green"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_light_blue_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_light_blue"
+    }
+    {
+      item: "simplylight:illuminant_panel_light_blue"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_light_blue"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_light_gray_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_light_gray"
+    }
+    {
+      item: "simplylight:illuminant_panel_light_gray"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_light_gray"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_lime_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_lime"
+    }
+    {
+      item: "simplylight:illuminant_panel_lime"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_lime"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_magenta_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_magenta"
+    }
+    {
+      item: "simplylight:illuminant_panel_magenta"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_magenta"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_orange_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_orange"
+    }
+    {
+      item: "simplylight:illuminant_panel_orange"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_orange"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_pink_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_pink"
+    }
+    {
+      item: "simplylight:illuminant_panel_pink"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_pink"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_purple_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_purple"
+    }
+    {
+      item: "simplylight:illuminant_panel_purple"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_purple"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_red_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_red"
+    }
+    {
+      item: "simplylight:illuminant_panel_red"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_red"
+  }
+}

```


</details>

<details>
<summary>simplylight/illuminant_slab_yellow_combine</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "simplylight:illuminant_panel_yellow"
+    }
+    {
+      item: "simplylight:illuminant_panel_yellow"
+    }
+  ]
+  result: {
+    count: 1
+    id: "simplylight:illuminant_slab_yellow"
+  }
+}

```


</details>

<details>
<summary>sophisticatedbackpacks/sawmill/sawmill_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sawmill"
+    }
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedbackpacks:sawmill/sawmill_upgrade"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "sophisticatedbackpacks:upgrade_base"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    W: {
+      item: "sawmill:sawmill"
+    }
+  }
+  pattern: [
+    " W "
+    "IBI"
+    " R "
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedbackpacks:sawmill/sawmill_upgrade"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/backpack_sawmill_sawmill_upgrade_from_storage_sawmill_sawmill_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sawmill"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sophisticatedbackpacks"
+    }
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedbackpacks:sawmill/sawmill_upgrade"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    L: {
+      tag: "c:leathers"
+    }
+    T: {
+      tag: "c:strings"
+    }
+    U: {
+      item: "sophisticatedstorage:sawmill/sawmill_upgrade"
+    }
+  }
+  pattern: [
+    "TUT"
+    " L "
+    "T T"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedbackpacks:sawmill/sawmill_upgrade"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:barrel"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+    S: {
+      tag: "minecraft:wooden_slabs"
+    }
+  }
+  pattern: [
+    "PSP"
+    "PRP"
+    "PSP"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorage:barrel"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:chest"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+  }
+  pattern: [
+    "PPP"
+    "PRP"
+    "PPP"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "oak"
+    }
+    count: 1
+    id: "sophisticatedstorage:chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:limited_barrel_1"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+    S: {
+      tag: "minecraft:wooden_slabs"
+    }
+  }
+  pattern: [
+    "PSP"
+    "PRP"
+    "PPP"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorage:limited_barrel_1"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:limited_barrel_2"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+    S: {
+      tag: "minecraft:wooden_slabs"
+    }
+  }
+  pattern: [
+    "PPP"
+    "SRS"
+    "PPP"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorage:limited_barrel_2"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:limited_barrel_3"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+    S: {
+      tag: "minecraft:wooden_slabs"
+    }
+  }
+  pattern: [
+    "PSP"
+    "PRP"
+    "SPS"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorage:limited_barrel_3"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/generic_limited_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:limited_barrel_4"
+    }
+  ]
+  type: "sophisticatedstorage:generic_wood_storage"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    R: {
+      item: "minecraft:redstone_torch"
+    }
+    S: {
+      tag: "minecraft:wooden_slabs"
+    }
+  }
+  pattern: [
+    "SPS"
+    "PRP"
+    "SPS"
+  ]
+  result: {
+    components: {
+      sophisticatedstorage:wood_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorage:limited_barrel_4"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/sawmill/sawmill_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sawmill"
+    }
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:sawmill/sawmill_upgrade"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "sophisticatedstorage:upgrade_base"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    W: {
+      item: "sawmill:sawmill"
+    }
+  }
+  pattern: [
+    " W "
+    "IBI"
+    " R "
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:sawmill/sawmill_upgrade"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/storage_sawmill_sawmill_upgrade_from_backpack_sawmill_sawmill_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sawmill"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "sophisticatedbackpacks"
+    }
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:sawmill/sawmill_upgrade"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    P: {
+      tag: "minecraft:planks"
+    }
+    U: {
+      item: "sophisticatedbackpacks:sawmill/sawmill_upgrade"
+    }
+  }
+  pattern: [
+    "PUP"
+    " P "
+    "P P"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:sawmill/sawmill_upgrade"
+  }
+}

```


</details>

<details>
<summary>supplementaries/antique_book_clean</summary>

```diff
+{
+  type: "supplementaries:antique_book"
+  set_antique: false
+  ingredient: {
+    item: "supplementaries:soap"
+  }
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "antique_ink"
+    }
+  ]
+}

```


</details>

<details>
<summary>supplementaries/antique_map</summary>

```diff
+{
+  type: "supplementaries:weathered_map"
+  ingredient: {
+    item: "supplementaries:antique_ink"
+  }
+  set_antique: true
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "antique_ink"
+    }
+  ]
+}

```


</details>

<details>
<summary>supplementaries/antique_map_clean</summary>

```diff
+{
+  type: "supplementaries:weathered_map"
+  ingredient: {
+    item: "supplementaries:soap"
+  }
+  set_antique: false
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "antique_ink"
+    }
+  ]
+}

```


</details>

<details>
<summary>supplementaries/item_lore_clear</summary>

```diff
+{
+  type: "supplementaries:item_lore"
+  ingredient: {
+    item: "supplementaries:soap"
+  }
+  set_lore: false
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "item_lore"
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (218)</summary>
<blockquote>

<details>
<summary>appflux/charged_redstone_block</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
+    x: {
+      item: "appflux:charged_redstone"
+    }
     X: {
-      item: "appflux:charged_redstone"
+      tag: "c:gems/charged_redstone"
     }
   }
   pattern: [
     "XXX"
     "XXX"
-    "XXX"
+    "XxX"
   ]
   result: {
     count: 1
     id: "appflux:charged_redstone_block"
   }
 }

```


</details>

<details>
<summary>immersiveengineering/cloche/hemp</summary>

```diff
 {
   type: "immersiveengineering:cloche"
   input: {
     item: "immersiveengineering:seed"
   }
   render: {
+    block: "immersiveengineering:hemp"
+    doublingAge: 3
-    type: "immersiveengineering:hemp"
+    type: "immersiveengineering:doublecrop"
   }
   results: [
     {
       item: "immersiveengineering:hemp_fiber"
     }
     {
       count: 2
       id: "immersiveengineering:seed"
     }
   ]
   soil: {
     item: "minecraft:dirt"
   }
   time: 800
 }

```


</details>

<details>
<summary>immersiveengineering/cokeoven/charcoal</summary>

```diff
 {
   type: "immersiveengineering:coke_oven"
   creosote: 250
   input: {
-    tag: "minecraft:logs"
+    tag: "minecraft:logs_that_burn"
   }
   result: {
     item: "minecraft:charcoal"
   }
   time: 900
 }

```


</details>

<details>
<summary>immersiveengineering/crafting/bullet_firework</summary>

```diff
 {
   type: "immersiveengineering:turn_and_copy"
   category: "misc"
   copyNBT: [
     0
-    1
-    2
-    3
-    4
-    5
-    6
   ]
   key: {
     c: {
       item: "immersiveengineering:empty_shell"
     }
     f: {
       item: "minecraft:firework_rocket"
     }
   }
   pattern: [
     "f"
     "c"
   ]
   result: {
     count: 1
     id: "immersiveengineering:bullet_firework"
   }
 }

```


</details>

<details>
<summary>immersiveengineering/crusher/ore_coal</summary>

```diff
 {
   type: "immersiveengineering:crusher"
   energy: 6000
   input: {
     tag: "c:ores/coal"
   }
   result: {
     basePredicate: {
       item: "minecraft:coal"
     }
     count: 4
   }
   secondaries: [
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/sulfur"
+          }
+        }
+      ]
       chance: 0.15
       output: {
         item: "alltheores:sulfur"
       }
     }
   ]
 }

```


</details>

<details>
<summary>immersiveengineering/crusher/ore_copper</summary>

```diff
 {
   type: "immersiveengineering:crusher"
   energy: 6000
   input: {
     tag: "c:ores/copper"
   }
   result: {
     basePredicate: {
       tag: "c:dusts/copper"
     }
     count: 2
   }
   secondaries: [
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/gold"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         item: "alltheores:gold_dust"
       }
     }
   ]
 }

```


</details>

<details>
<summary>immersiveengineering/crusher/ore_iron</summary>

```diff
 {
   type: "immersiveengineering:crusher"
   energy: 6000
   input: {
     tag: "c:ores/iron"
   }
   result: {
     basePredicate: {
       tag: "c:dusts/iron"
     }
     count: 2
   }
   secondaries: [
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/nickel"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         item: "alltheores:nickel_dust"
       }
     }
   ]
 }

```


</details>

<details>
<summary>immersiveengineering/crusher/ore_lapis</summary>

```diff
 {
   type: "immersiveengineering:crusher"
   energy: 6000
   input: {
     tag: "c:ores/lapis"
   }
   result: {
     basePredicate: {
       item: "minecraft:lapis_lazuli"
     }
     count: 9
   }
   secondaries: [
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/sulfur"
+          }
+        }
+      ]
       chance: 0.2
       output: {
         item: "alltheores:sulfur"
       }
     }
   ]
 }

```


</details>

<details>
<summary>immersiveengineering/crusher/ore_quartz</summary>

```diff
 {
   type: "immersiveengineering:crusher"
   energy: 6000
   input: {
     tag: "c:ores/quartz"
   }
   result: {
     basePredicate: {
       item: "minecraft:quartz"
     }
     count: 3
   }
   secondaries: [
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/sulfur"
+          }
+        }
+      ]
       chance: 0.25
       output: {
         item: "alltheores:sulfur"
       }
     }
   ]
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/beryl</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
     [
       "minecraft:is_mountain"
       "minecraft:is_ocean"
     ]
   ]
   fail_chance: 0.2
   ores: [
     {
       chance: 0.3
       output: {
         tag: "c:ores/emerald"
       }
     }
     {
       chance: 0.7
       output: {
         count: 1
         id: "minecraft:prismarine"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:gems/aquamarine"
+          }
+        }
+      ]
       chance: 0.3
       output: {
         tag: "c:gems/aquamarine"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 15
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/bituminous_coal</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
   ]
   fail_chance: 0.05
   ores: [
     {
       chance: 0.8
       output: {
         tag: "c:ores/coal"
       }
     }
     {
       chance: 0.2
       output: {
         tag: "c:dusts/sulfur"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:dusts/phosphorus"
+          }
+        }
+      ]
       chance: 0.2
       output: {
         tag: "c:dusts/phosphorus"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 25
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/cinnabar</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
   ]
   fail_chance: 0.1
   ores: [
     {
       chance: 0.6
       output: {
         tag: "c:ores/redstone"
       }
     }
     {
       chance: 0.4
       output: {
         tag: "c:dusts/sulfur"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/mercury"
+          }
+        }
+      ]
       chance: 0.3
       output: {
         tag: "c:ores/mercury"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 20
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/laterite</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
   ]
   fail_chance: 0.05
   ores: [
     {
       chance: 0.6
       output: {
         tag: "c:ores/aluminum"
       }
     }
     {
       chance: 0.3
       output: {
         tag: "c:ores/iron"
       }
     }
     {
       chance: 0.1
       output: {
         tag: "c:ores/nickel"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/titanium"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         tag: "c:ores/titanium"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 20
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/pentlandite</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
   ]
   fail_chance: 0.1
   ores: [
     {
       chance: 0.65
       output: {
         tag: "c:ores/nickel"
       }
     }
     {
       chance: 0.25
       output: {
         tag: "c:ores/iron"
       }
     }
     {
       chance: 0.1
       output: {
         tag: "c:dusts/sulfur"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/platinum"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         tag: "c:ores/platinum"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/osmium"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         tag: "c:ores/osmium"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 15
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/uraninite</summary>

```diff
 {
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
     [
       "minecraft:is_badlands"
       "minecraft:is_taiga"
     ]
   ]
   fail_chance: 0.15
   ores: [
     {
       chance: 0.6
       output: {
         tag: "c:ores/uranium"
       }
     }
     {
       chance: 0.4
       output: {
         tag: "c:ores/lead"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/thorium"
+          }
+        }
+      ]
       chance: 0.1
       output: {
         tag: "c:ores/thorium"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 15
 }

```


</details>

<details>
<summary>immersiveengineering/mineral/wolframite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:not"
       value: {
         type: "neoforge:tag_empty"
         tag: "c:ores/tungsten"
       }
     }
   ]
   type: "immersiveengineering:mineral_mix"
   biome_predicates: [
     [
       "minecraft:is_overworld"
     ]
   ]
   fail_chance: 0.15
   ores: [
     {
       chance: 0.7
       output: {
         tag: "c:ores/tungsten"
       }
     }
     {
       chance: 0.3
       output: {
         tag: "c:ores/iron"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/manganese"
+          }
+        }
+      ]
       chance: 0.3
       output: {
         tag: "c:ores/manganese"
       }
     }
     {
+      conditions: [
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:tag_empty"
+            tag: "c:ores/tin"
+          }
+        }
+      ]
       chance: 0.3
       output: {
         tag: "c:ores/tin"
       }
     }
   ]
   spoils: [
     {
       chance: 0.2
       output: {
         count: 1
         id: "minecraft:gravel"
       }
     }
     {
       chance: 0.5
       output: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.3
       output: {
         count: 1
         id: "minecraft:cobbled_deepslate"
       }
     }
   ]
   weight: 5
 }

```


</details>

<details>
<summary>immersiveengineering/stonecutting/concrete_tile</summary>

```diff
 {
   type: "minecraft:stonecutting"
   ingredient: {
-    item: "immersiveengineering:concrete"
+    item: "immersiveengineering:concrete_brick"
   }
   result: {
     count: 1
     id: "immersiveengineering:concrete_tile"
   }
 }

```


</details>

<details>
<summary>mekanism/crushing/obsidian_to_dust</summary>

```diff
 {
   type: "mekanism:crushing"
   input: {
     count: 1
-    tag: "c:obsidians"
+    tag: "c:obsidians/normal"
   }
   output: {
     count: 4
     id: "mekanism:dust_obsidian"
   }
 }

```


</details>

<details>
<summary>mekanism/nucleosynthesizing/crying_obsidian</summary>

```diff
 {
   type: "mekanism:nucleosynthesizing"
   chemical_input: {
     amount: 1
     chemical: "mekanism:antimatter"
   }
   duration: 200
   item_input: {
     count: 1
-    tag: "c:obsidians"
+    tag: "c:obsidians/normal"
   }
   output: {
     count: 1
     id: "minecraft:crying_obsidian"
   }
   per_tick_usage: false
 }

```


</details>

<details>
<summary>occultism/ritual/craft_miner_foliot_unspecialized</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_foliot"
   }
   duration: 60
   ingredients: [
     {
       item: "occultism:magic_lamp_empty"
     }
     {
       item: "occultism:iesnium_pickaxe"
     }
     {
-      tag: "c:raw_materials/iron"
+      tag: "c:ingots/iron"
     }
     {
       tag: "c:gravels"
     }
   ]
   pentacle_id: "occultism:craft_foliot"
   result: {
     count: 1
     id: "occultism:miner_foliot_unspecialized"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/craft_miner_foliot_unspecialized"
   }
   ritual_type: "occultism:craft_miner_spirit"
 }

```


</details>

<details>
<summary>occultism/ritual/craft_ritual_satchel_t1</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
-    item: "occultism:book_of_binding_bound_djinni"
+    item: "occultism:book_of_binding_foliot"
   }
   duration: 150
   ingredients: [
     {
       item: "minecraft:hopper"
     }
     {
       item: "minecraft:dispenser"
     }
     {
       tag: "minecraft:wool"
     }
     {
       tag: "minecraft:wool"
     }
     {
       tag: "c:leathers"
     }
     {
       tag: "c:leathers"
     }
     {
       tag: "c:strings"
     }
     {
       tag: "c:ingots/silver"
     }
   ]
-  pentacle_id: "occultism:craft_djinni"
+  pentacle_id: "occultism:craft_foliot"
   result: {
     count: 1
     id: "occultism:ritual_satchel_t1"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/craft_ritual_satchel_t1"
   }
   ritual_type: "occultism:craft_with_spirit_name"
 }

```


</details>

<details>
<summary>occultism/ritual/craft_witherite_dust</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_afrit"
   }
   duration: 150
   ingredients: [
     {
       tag: "c:dusts/netherite"
     }
     {
       tag: "c:dusts/blackstone"
     }
     {
       tag: "c:dusts/blackstone"
     }
     {
       item: "minecraft:wither_rose"
     }
-    {
-      item: "minecraft:wither_rose"
-    }
-    {
-      item: "minecraft:wither_rose"
-    }
   ]
   pentacle_id: "occultism:craft_afrit"
   result: {
     count: 3
     id: "occultism:witherite_dust"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/craft_witherite_dust"
   }
   ritual_type: "occultism:craft"
 }

```


</details>

<details>
<summary>occultism/ritual/familiar_dragon</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_djinni"
   }
   duration: 90
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.horses"
     tag: "c:horses"
   }
   entity_to_summon: "occultism:dragon_familiar"
   ingredients: [
     {
       item: "minecraft:lava_bucket"
     }
     {
       item: "minecraft:flint_and_steel"
     }
     {
-      tag: "c:storage_blocks/coal"
+      tag: "minecraft:coals"
     }
     {
       item: "minecraft:quartz_block"
     }
     {
       tag: "c:storage_blocks/gold"
     }
     {
       tag: "c:gunpowders"
     }
     {
       item: "minecraft:obsidian"
     }
     {
       item: "minecraft:obsidian"
     }
   ]
   pentacle_id: "occultism:possess_djinni"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.familiar_dragon\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.familiar_dragon.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:spawn_egg/familiar_dragon"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/familiar_dragon"
   }
   ritual_type: "occultism:summon_tamed"
 }

```


</details>

<details>
<summary>occultism/ritual/misc_budding_amethyst</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:amethyst_block"
   }
   duration: 180
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.allay"
+    display_name: "ritual.occultism.sacrifice.pigs"
-    tag: "c:allay"
+    tag: "c:pigs"
   }
   ingredients: [
-    {
-      item: "minecraft:small_amethyst_bud"
-    }
-    {
-      item: "minecraft:amethyst_cluster"
-    }
-    {
-      item: "minecraft:amethyst_shard"
-    }
-    {
-      tag: "c:dusts/amethyst"
-    }
-    {
-      item: "minecraft:medium_amethyst_bud"
-    }
-    {
-      item: "minecraft:large_amethyst_bud"
-    }
-    {
-      item: "minecraft:amethyst_cluster"
-    }
-    {
-      item: "minecraft:amethyst_shard"
-    }
+    {
+      tag: "c:dusts/amethyst"
+    }
+    {
+      tag: "c:dusts/amethyst"
+    }
+    {
+      tag: "c:dusts/amethyst"
+    }
+    {
+      tag: "c:dusts/amethyst"
+    }
+    {
+      tag: "c:dusts/amethyst"
+    }
     {
       tag: "c:dusts/amethyst"
     }
-    {
-      item: "minecraft:small_amethyst_bud"
-    }
-    {
-      item: "minecraft:medium_amethyst_bud"
-    }
-    {
-      item: "minecraft:large_amethyst_bud"
-    }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     count: 1
     id: "minecraft:budding_amethyst"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/misc_budding_amethyst"
   }
   ritual_type: "occultism:craft"
 }

```


</details>

<details>
<summary>occultism/ritual/misc_chalk_rainbow</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:brush"
   }
   duration: 780
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.parrots"
+    display_name: "ritual.occultism.sacrifice.sheep"
-    tag: "c:parrots"
+    tag: "c:sheep"
   }
   ingredients: [
     {
       item: "occultism:chalk_red"
     }
     {
       item: "occultism:chalk_brown"
     }
     {
       item: "occultism:chalk_orange"
     }
     {
       item: "occultism:chalk_gold"
     }
     {
       item: "occultism:chalk_lime"
     }
     {
       item: "occultism:chalk_green"
     }
     {
       item: "occultism:chalk_cyan"
     }
     {
       item: "occultism:chalk_blue"
     }
     {
       item: "occultism:chalk_light_blue"
     }
     {
       item: "occultism:chalk_pink"
     }
     {
       item: "occultism:chalk_magenta"
     }
     {
       item: "occultism:chalk_purple"
     }
   ]
   pentacle_id: "occultism:contact_eldritch_spirit"
   result: {
     count: 1
     id: "occultism:chalk_rainbow"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/misc_chalk_rainbow"
   }
   ritual_type: "occultism:craft"
 }

```


</details>

<details>
<summary>occultism/ritual/misc_wild_trim</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     tag: "c:storage_blocks/diamond"
   }
   duration: 180
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.ocelot"
+    display_name: "ritual.occultism.sacrifice.llamas"
-    tag: "c:ocelots"
+    tag: "c:llamas"
   }
   ingredients: [
     {
       item: "minecraft:mossy_cobblestone"
     }
     {
       item: "minecraft:jungle_sapling"
     }
     {
       item: "minecraft:bamboo"
     }
     {
       item: "minecraft:glistering_melon_slice"
     }
     {
       item: "minecraft:mossy_cobblestone"
     }
     {
       item: "minecraft:jungle_sapling"
     }
     {
       item: "minecraft:bamboo"
     }
     {
       item: "minecraft:glistering_melon_slice"
     }
     {
       item: "minecraft:mossy_cobblestone"
     }
     {
       item: "minecraft:jungle_sapling"
     }
     {
       item: "minecraft:bamboo"
     }
     {
       item: "minecraft:glistering_melon_slice"
     }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     count: 1
     id: "minecraft:wild_armor_trim_smithing_template"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/misc_wild_trim"
   }
   ritual_type: "occultism:craft"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_bee</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_djinni"
   }
   duration: 60
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.flying_passive"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "occultism:flying_passive"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:possessed_bee"
   ingredients: [
     {
       item: "minecraft:honeycomb"
     }
     {
       item: "minecraft:honey_block"
     }
     {
       item: "minecraft:honey_bottle"
     }
     {
       item: "minecraft:honeycomb_block"
     }
   ]
   pentacle_id: "occultism:possess_djinni"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_bee\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_bee.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:cursed_honey"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_bee"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_elder_guardian</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_afrit"
   }
   duration: 90
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.fish"
     tag: "c:fish"
   }
   entity_to_summon: "occultism:possessed_elder_guardian"
   ingredients: [
-    {
-      item: "minecraft:oxidized_copper"
-    }
     {
       tag: "c:gems/emerald"
     }
-    {
-      item: "minecraft:prismarine"
-    }
+    {
+      item: "minecraft:prismarine_bricks"
+    }
+    {
+      item: "minecraft:dark_prismarine"
+    }
+    {
+      item: "minecraft:sea_lantern"
+    }
+    {
+      item: "minecraft:sea_lantern"
+    }
+    {
+      item: "minecraft:sea_lantern"
+    }
     {
       item: "minecraft:prismarine_bricks"
     }
     {
       item: "minecraft:dark_prismarine"
     }
-    {
-      item: "minecraft:yellow_wool"
-    }
     {
       item: "minecraft:sea_lantern"
     }
-    {
-      item: "minecraft:water_bucket"
-    }
-    {
-      item: "minecraft:water_bucket"
-    }
-    {
-      item: "minecraft:water_bucket"
-    }
   ]
   pentacle_id: "occultism:possess_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_elder_guardian\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_elder_guardian.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:heart_of_the_sea"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_elder_guardian"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_goat</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_marid"
   }
   duration: 240
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.tadpoles"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "c:tadpoles"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:mercy_goat"
   ingredients: [
     {
       item: "minecraft:pointed_dripstone"
     }
     {
       item: "minecraft:pointed_dripstone"
     }
     {
       item: "minecraft:rabbit_foot"
     }
     {
       item: "minecraft:rabbit_foot"
     }
     {
       item: "minecraft:rabbit_foot"
     }
     {
       item: "minecraft:rabbit_foot"
     }
     {
       item: "minecraft:armadillo_scute"
     }
     {
       item: "minecraft:armadillo_scute"
     }
     {
       item: "minecraft:armadillo_scute"
     }
     {
       item: "minecraft:armadillo_scute"
     }
     {
       tag: "minecraft:wool"
     }
     {
       tag: "minecraft:wool"
     }
   ]
   pentacle_id: "occultism:possess_marid"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_goat\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_goat.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:cruelty_essence"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_goat"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_shulker</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_afrit"
   }
   duration: 90
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.cubemob"
     tag: "occultism:cubemob"
   }
   entity_to_summon: "occultism:possessed_shulker"
   ingredients: [
     {
       item: "minecraft:dragon_breath"
     }
-    {
-      tag: "c:obsidians"
-    }
     {
       tag: "c:end_stones"
     }
     {
-      item: "minecraft:purple_glazed_terracotta"
+      item: "minecraft:purple_concrete"
     }
+    {
+      item: "minecraft:purple_concrete"
+    }
   ]
   pentacle_id: "occultism:possess_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_shulker\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_shulker.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:shulker_shell"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_shulker"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_unbound_otherworld_bird</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_djinni"
   }
   duration: 60
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.parrots"
     tag: "c:parrots"
   }
   entity_to_summon: "occultism:otherworld_bird"
   ingredients: [
     {
       tag: "c:feathers"
     }
     {
       tag: "c:feathers"
     }
-    {
-      item: "minecraft:cobweb"
-    }
     {
       tag: "minecraft:leaves"
     }
     {
       item: "minecraft:egg"
     }
   ]
   pentacle_id: "occultism:possess_djinni"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_unbound_otherworld_bird\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_unbound_otherworld_bird.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:spawn_egg/otherworld_bird"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_unbound_otherworld_bird"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_warden</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_afrit"
   }
   duration: 90
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.axolotls"
+    display_name: "ritual.occultism.sacrifice.cows"
-    tag: "c:axolotls"
+    tag: "c:cows"
   }
   entity_to_summon: "occultism:possessed_warden"
   ingredients: [
-    {
-      item: "minecraft:sculk_shrieker"
-    }
-    {
-      item: "minecraft:sculk"
-    }
-    {
-      item: "minecraft:sculk_sensor"
-    }
+    {
+      item: "minecraft:sculk"
+    }
+    {
+      item: "minecraft:sculk"
+    }
+    {
+      item: "minecraft:sculk"
+    }
     {
       item: "minecraft:sculk"
     }
     {
       item: "minecraft:sculk"
     }
-    {
-      item: "minecraft:sculk_sensor"
-    }
     {
       item: "minecraft:sculk"
     }
-    {
-      item: "minecraft:sculk"
-    }
-    {
-      item: "minecraft:sculk_sensor"
-    }
-    {
-      item: "minecraft:sculk"
-    }
   ]
   pentacle_id: "occultism:possess_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_warden\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_warden.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:echo_shard"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_warden"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_weak_shulker</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_djinni"
   }
   duration: 60
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.cubemob"
     tag: "occultism:cubemob"
   }
   entity_to_summon: "occultism:possessed_weak_shulker"
   ingredients: [
     {
       tag: "c:ender_pearls"
     }
     {
       item: "minecraft:purple_concrete"
     }
     {
       tag: "c:end_stones"
     }
-    {
-      item: "minecraft:magenta_concrete"
-    }
+    {
+      item: "minecraft:purple_concrete"
+    }
   ]
   pentacle_id: "occultism:possess_djinni"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_weak_shulker\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_weak_shulker.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:chorus_fruit"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_weak_shulker"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_witch</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_foliot"
   }
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.cats"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "c:cats"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:possessed_witch"
   ingredients: [
     {
       item: "minecraft:glass_bottle"
     }
     {
       tag: "c:dusts/redstone"
     }
     {
       item: "minecraft:brown_mushroom"
     }
     {
       item: "minecraft:red_mushroom"
     }
   ]
   pentacle_id: "occultism:possess_foliot"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_witch\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_witch.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:experience_bottle"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_witch"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/possess_zombie_piglin</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_afrit"
   }
   duration: 90
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.pigs"
     tag: "c:pigs"
   }
   entity_to_summon: "occultism:possessed_zombie_piglin"
   ingredients: [
     {
-      item: "minecraft:cherry_leaves"
+      item: "minecraft:gilded_blackstone"
     }
     {
-      item: "minecraft:pink_petals"
+      item: "minecraft:warped_fungus"
     }
     {
-      item: "occultism:tallow"
+      item: "minecraft:crimson_fungus"
     }
     {
       item: "minecraft:quartz"
     }
   ]
   pentacle_id: "occultism:possess_unbound_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.possess_zombie_piglin\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.possess_zombie_piglin.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:demonic_meat"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/possess_zombie_piglin"
   }
   ritual_type: "occultism:summon"
 }

```


</details>

<details>
<summary>occultism/ritual/repair_armors</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     tag: "c:armors"
   }
   duration: 60
   ingredients: [
-    {
-      tag: "c:ingots/iesnium"
-    }
-    {
-      tag: "c:ingots/iesnium"
-    }
-    {
-      tag: "occultism:armored_items"
-    }
     {
       item: "occultism:spirit_attuned_gem"
     }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:otherworld_essence"
+    }
   ]
   pentacle_id: "occultism:craft_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.repair_armors\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.repair_armors.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:repair_icon"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/repair_armors"
   }
   ritual_type: "occultism:repair"
 }

```


</details>

<details>
<summary>occultism/ritual/repair_chalks</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     tag: "occultism:tools/chalk"
   }
   duration: 5
   ingredients: [
     {
-      tag: "c:dusts/copper"
+      item: "occultism:otherworld_essence"
     }
     {
-      tag: "c:dusts/otherworld_wood"
+      item: "occultism:otherworld_essence"
     }
     {
-      tag: "c:dusts/otherstone"
+      item: "occultism:otherworld_essence"
     }
+    {
+      item: "occultism:spirit_attuned_gem"
+    }
   ]
   pentacle_id: "occultism:craft_djinni"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.repair_chalks\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.repair_chalks.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:repair_icon"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/repair_chalks"
   }
   ritual_type: "occultism:repair"
 }

```


</details>

<details>
<summary>occultism/ritual/repair_miners</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     tag: "occultism:miners"
   }
   duration: 60
   ingredients: [
-    {
-      tag: "c:storage_blocks/iesnium"
-    }
-    {
-      item: "occultism:spirit_attuned_crystal"
-    }
     {
       item: "occultism:otherworld_essence"
     }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:spirit_attuned_gem"
+    }
   ]
   pentacle_id: "occultism:craft_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.repair_miners\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.repair_miners.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:repair_icon"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/repair_miners"
   }
   ritual_type: "occultism:repair"
 }

```


</details>

<details>
<summary>occultism/ritual/repair_tools</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     tag: "c:tools"
   }
   duration: 60
   ingredients: [
-    {
-      tag: "c:ingots/iesnium"
-    }
-    {
-      tag: "c:ingots/iesnium"
-    }
     {
       item: "occultism:spirit_attuned_gem"
     }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:otherworld_essence"
+    }
+    {
+      item: "occultism:otherworld_essence"
+    }
   ]
   pentacle_id: "occultism:craft_afrit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.repair_tools\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.repair_tools.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:repair_icon"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/repair_tools"
   }
   ritual_type: "occultism:repair"
 }

```


</details>

<details>
<summary>occultism/ritual/summon_foliot_crusher</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "occultism:book_of_binding_bound_foliot"
   }
   duration: 60
   entity_to_summon: "occultism:foliot"
   ingredients: [
     {
-      tag: "c:raw_materials/iron"
+      tag: "c:ingots/iron"
     }
     {
-      tag: "c:raw_materials/gold"
+      tag: "c:ingots/gold"
     }
     {
-      tag: "c:raw_materials/copper"
+      tag: "c:ingots/copper"
     }
     {
-      tag: "c:raw_materials/silver"
+      tag: "c:ingots/silver"
     }
   ]
   pentacle_id: "occultism:summon_foliot"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_crusher\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.summon_foliot_crusher.tooltip\"}"
       ]
     }
     count: 1
     id: "occultism:spawn_egg/foliot"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/summon_foliot_crusher"
   }
   ritual_type: "occultism:summon_spirit_with_job"
   spirit_job_type: "occultism:crush_tier1"
 }

```


</details>

<details>
<summary>occultism/ritual/wild_breeze</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:trial_key"
   }
   duration: 90
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.wolfs"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "c:wolfs"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:possessed_breeze"
   ingredients: [
-    {
-      item: "minecraft:lightning_rod"
-    }
-    {
-      item: "minecraft:copper_door"
-    }
-    {
-      item: "minecraft:copper_trapdoor"
-    }
+    {
+      item: "minecraft:tuff_bricks"
+    }
+    {
+      item: "minecraft:tuff_bricks"
+    }
+    {
+      item: "minecraft:tuff_bricks"
+    }
     {
       item: "minecraft:copper_bulb"
     }
-    {
-      item: "minecraft:polished_tuff"
-    }
     {
       item: "minecraft:tuff_bricks"
     }
+    {
+      item: "minecraft:copper_bulb"
+    }
+    {
+      item: "minecraft:copper_bulb"
+    }
+    {
+      item: "minecraft:copper_bulb"
+    }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_breeze\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_breeze.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:ominous_trial_key"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_breeze"
   }
   ritual_type: "occultism:summon_wild"
 }

```


</details>

<details>
<summary>occultism/ritual/wild_creeper</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:tnt"
   }
   duration: 90
   entity_to_sacrifice: {
     display_name: "ritual.occultism.sacrifice.pigs"
     tag: "c:pigs"
   }
   entity_to_summon: "occultism:wild_horde_creeper"
   ingredients: [
-    {
-      item: "minecraft:tnt"
-    }
-    {
-      item: "minecraft:tnt"
-    }
-    {
-      item: "minecraft:jungle_leaves"
-    }
-    {
-      item: "minecraft:moss_block"
-    }
-    {
-      item: "minecraft:oak_leaves"
-    }
+    {
+      item: "minecraft:moss_block"
+    }
+    {
+      item: "minecraft:moss_block"
+    }
+    {
+      item: "minecraft:moss_block"
+    }
     {
       item: "minecraft:moss_block"
     }
-    {
-      item: "minecraft:tnt"
-    }
     {
-      item: "minecraft:birch_leaves"
+      tag: "minecraft:leaves"
     }
     {
-      item: "minecraft:moss_block"
+      tag: "minecraft:leaves"
     }
     {
-      item: "minecraft:tnt"
+      tag: "minecraft:leaves"
     }
     {
-      item: "minecraft:spruce_leaves"
+      tag: "minecraft:leaves"
     }
-    {
-      item: "minecraft:moss_block"
-    }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_creeper\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_creeper.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:music_disc_cat"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_creeper"
   }
   ritual_type: "occultism:summon_wild"
   summon_number: 5
 }

```


</details>

<details>
<summary>occultism/ritual/wild_drowned</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
-    item: "minecraft:heart_of_the_sea"
+    item: "minecraft:fishing_rod"
   }
   duration: 90
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.dolphin"
+    display_name: "ritual.occultism.sacrifice.fish"
-    tag: "c:dolphins"
+    tag: "c:fish"
   }
   entity_to_summon: "occultism:wild_horde_drowned"
   ingredients: [
     {
-      item: "minecraft:dead_brain_coral_block"
+      item: "minecraft:pufferfish"
     }
     {
-      item: "minecraft:dead_bubble_coral_block"
+      item: "minecraft:gravel"
     }
-    {
-      item: "minecraft:dead_fire_coral_block"
-    }
     {
-      item: "minecraft:dead_horn_coral_block"
+      item: "minecraft:gravel"
     }
-    {
-      item: "minecraft:dead_tube_coral_block"
-    }
     {
       item: "minecraft:dried_kelp_block"
     }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_drowned\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_drowned.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:sniffer_egg"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_drowned"
   }
   ritual_type: "occultism:summon_wild"
   summon_number: 5
 }

```


</details>

<details>
<summary>occultism/ritual/wild_silverfish</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:brush"
   }
   duration: 90
   entity_to_summon: "occultism:wild_horde_silverfish"
   ingredients: [
     {
       item: "minecraft:sand"
     }
     {
       item: "minecraft:gravel"
     }
-    {
-      item: "minecraft:bricks"
-    }
     {
-      item: "minecraft:mud_bricks"
+      tag: "minecraft:terracotta"
     }
-    {
-      item: "minecraft:stone_bricks"
-    }
-    {
-      item: "minecraft:white_terracotta"
-    }
-    {
-      item: "minecraft:dirt"
-    }
+    {
+      tag: "minecraft:terracotta"
+    }
   ]
   item_to_use: {
     item: "minecraft:egg"
   }
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_silverfish\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_silverfish.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:music_disc_relic"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_silverfish"
   }
   ritual_type: "occultism:summon_wild"
   summon_number: 5
 }

```


</details>

<details>
<summary>occultism/ritual/wild_strong_breeze</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:ominous_trial_key"
   }
   duration: 90
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.iron_golem"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "c:golems/iron"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:possessed_strong_breeze"
   ingredients: [
     {
-      item: "minecraft:chiseled_tuff"
+      item: "minecraft:copper_bulb"
     }
     {
       item: "minecraft:breeze_rod"
     }
     {
       item: "minecraft:ominous_bottle"
     }
     {
-      item: "minecraft:chiseled_tuff"
+      item: "minecraft:copper_bulb"
     }
     {
-      item: "minecraft:chiseled_tuff"
+      item: "minecraft:copper_bulb"
     }
     {
-      item: "minecraft:chiseled_tuff"
+      item: "minecraft:copper_bulb"
     }
     {
-      item: "minecraft:chiseled_tuff_bricks"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:chiseled_tuff_bricks"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:chiseled_tuff_bricks"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:chiseled_tuff_bricks"
+      item: "minecraft:tuff_bricks"
     }
     {
       item: "minecraft:breeze_rod"
     }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_strong_breeze\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_strong_breeze.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:heavy_core"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_strong_breeze"
   }
   ritual_type: "occultism:summon_wild"
 }

```


</details>

<details>
<summary>occultism/ritual/wild_weak_breeze</summary>

```diff
 {
   type: "occultism:ritual"
   activation_item: {
     item: "minecraft:honeycomb"
   }
   duration: 90
   entity_to_sacrifice: {
-    display_name: "ritual.occultism.sacrifice.snow_golem"
+    display_name: "ritual.occultism.sacrifice.chicken"
-    tag: "c:golems/snow"
+    tag: "c:chickens"
   }
   entity_to_summon: "occultism:possessed_weak_breeze"
   ingredients: [
     {
-      item: "minecraft:oxidized_copper"
+      tag: "c:storage_blocks/copper"
     }
     {
-      item: "minecraft:weathered_chiseled_copper"
+      tag: "c:storage_blocks/copper"
     }
     {
-      item: "minecraft:exposed_copper_grate"
+      tag: "c:storage_blocks/copper"
     }
     {
-      item: "minecraft:cut_copper"
+      tag: "c:storage_blocks/copper"
     }
     {
-      item: "minecraft:tuff"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:tuff"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:tuff"
+      item: "minecraft:tuff_bricks"
     }
     {
-      item: "minecraft:tuff"
+      item: "minecraft:tuff_bricks"
     }
   ]
   pentacle_id: "occultism:contact_wild_spirit"
   result: {
     components: {
       minecraft:item_name: "{\"translate\":\"item.occultism.ritual_dummy.wild_weak_breeze\"}"
       minecraft:lore: [
         "{\"translate\":\"item.occultism.ritual_dummy.wild_weak_breeze.tooltip\"}"
       ]
     }
     count: 1
     id: "minecraft:trial_key"
   }
   ritual_dummy: {
     count: 1
     id: "occultism:ritual_dummy/wild_weak_breeze"
   }
   ritual_type: "occultism:summon_wild"
 }

```


</details>

<details>
<summary>productivemetalworks/alloying/molten_lumium</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
-        tag: "c:molten_redstone"
+        tag: "c:molten_glowstone"
       }
     }
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
         tag: "c:molten_silver"
       }
     }
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
-        tag: "c:molten_copper"
+        tag: "c:molten_tin"
       }
     }
   ]
   type: "productivemetalworks:fluid_alloying"
   fluids: [
     {
       amount: 40
-      tag: "c:molten_redstone"
+      tag: "c:molten_glowstone"
     }
     {
       amount: 9
       tag: "c:molten_silver"
     }
     {
       amount: 27
-      tag: "c:molten_copper"
+      tag: "c:molten_tin"
     }
   ]
   result: {
     amount: 36
     id: "productivemetalworks:molten_lumium"
   }
   speed: 1
 }

```


</details>

<details>
<summary>productivemetalworks/alloying/molten_signalum</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
-        tag: "c:molten_glowstone"
+        tag: "c:molten_redstone"
       }
     }
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
         tag: "c:molten_silver"
       }
     }
     {
       type: "neoforge:not"
       value: {
         type: "productivelib:fluid_tag_empty"
-        tag: "c:molten_tin"
+        tag: "c:molten_copper"
       }
     }
   ]
   type: "productivemetalworks:fluid_alloying"
   fluids: [
     {
       amount: 40
-      tag: "c:molten_glowstone"
+      tag: "c:molten_redstone"
     }
     {
       amount: 9
       tag: "c:molten_silver"
     }
     {
       amount: 27
-      tag: "c:molten_tin"
+      tag: "c:molten_copper"
     }
   ]
   result: {
     amount: 36
     id: "productivemetalworks:molten_signalum"
   }
   speed: 1
 }

```


</details>

<details>
<summary>productivemetalworks/casting/gems/amethyst</summary>

```diff
 {
   type: "productivemetalworks:item_casting"
   cast: {
     item: "productivemetalworks:gem_cast"
   }
   consume_cast: false
   fluid: {
     amount: 100
-    fluid: "productivemetalworks:molten_lapis"
+    fluid: "productivemetalworks:molten_amethyst"
   }
   result: {
     count: 1
     id: "minecraft:amethyst_shard"
   }
 }

```


</details>

<details>
<summary>productivemetalworks/melting/shulker_box</summary>

```diff
 {
   type: "productivemetalworks:item_melting"
   ingredient: {
-    item: "minecraft:shulker_box"
+    tag: "c:shulker_boxes"
   }
   maximum_temperature: 0
   minimum_temperature: 1000
   result: [
     {
       amount: 200
       id: "productivemetalworks:molten_shulker_shell"
     }
   ]
 }

```


</details>

<details>
<summary>simplylight/edge_light_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_top_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light_top"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_top_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/edge_light_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_edge_light"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:edge_light_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_black_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_black_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_black_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_black_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_blue_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_blue_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_blue_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_blue_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_brown_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_brown_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_brown_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_brown_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_cyan_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_cyan_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_cyan_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_cyan_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_gray_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_gray_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_gray_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_gray_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_green_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_green_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_green_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_green_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_light_blue_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_light_blue_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_light_blue_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_light_blue_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_light_gray_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_light_gray_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_light_gray_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_light_gray_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_lime_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_lime_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_lime_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_lime_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_magenta_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_magenta_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_magenta_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_magenta_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_orange_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_orange_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_orange_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_orange_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_panel_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_panel"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_panel_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_pink_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_pink_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_pink_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_pink_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_purple_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_purple_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_purple_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_purple_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_red_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_red_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_red_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_red_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_slab_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_slab"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_slab_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_yellow_block_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_off"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_yellow_block"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/illuminant_yellow_block_on_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_lamp_on"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:illuminant_yellow_block_on"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lamp_post_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_post"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lamp_post_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/lightbulb_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_bulb"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:lightbulb_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/rodlamp_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_rod"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:rodlamp_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_black_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:black_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_black"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_brown_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:brown_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_brown"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_cyan_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:cyan_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_cyan"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:white_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_green_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:green_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_green"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_light_blue_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:light_blue_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_light_blue"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_light_gray_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:light_gray_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_light_gray"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_lime_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:lime_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_lime"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_magenta_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:magenta_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_magenta"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_orange_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:orange_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_orange"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_pink_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:pink_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_pink"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_purple_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:purple_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_purple"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_red_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:red_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_red"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>simplylight/wall_lamp_yellow_dyed</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     A: {
       tag: "simplylight:any_fixture"
     }
     B: {
       item: "minecraft:yellow_dye"
     }
   }
   pattern: [
     "AAA"
     "ABA"
     "AAA"
   ]
   result: {
-    count: 6
+    count: 8
     id: "simplylight:wall_lamp_yellow"
   }
   show_notification: false
 }

```


</details>

<details>
<summary>supplementaries/antique_book</summary>

```diff
 {
+  set_antique: true
+  ingredient: {
+    item: "supplementaries:antique_ink"
+  }
   type: "supplementaries:antique_book"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "antique_ink"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/bubble_blower_charge</summary>

```diff
 {
-  ingredients: [
-    {
-      item: "supplementaries:bubble_blower"
-    }
-    {
-      item: "supplementaries:soap"
-    }
-  ]
+  ingredient: {
+    item: "supplementaries:bubble_blower"
+  }
+  charge: {
+    item: "supplementaries:soap"
+  }
+  charges_per_item: 250
-  type: "minecraft:crafting_shapeless"
+  type: "supplementaries:add_charges"
-  result: {
-    id: "supplementaries:bubble_blower"
-    count: 1
-    components: {
-      supplementaries:charges: 250
-    }
-  }
+  result: "supplementaries:bubble_blower"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "bubble_blower"
     }
     {
       condition: "supplementaries:flag"
       flag: "soap"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/item_lore</summary>

```diff
 {
+  ingredient: {
+    item: "minecraft:name_tag"
+  }
+  set_lore: true
   type: "supplementaries:item_lore"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "item_lore"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/rope_arrow_add</summary>

```diff
 {
+  charge: {
+    tag: "supplementaries:ropes"
+  }
+  ingredient: {
+    item: "supplementaries:rope_arrow"
+  }
+  charges_per_item: 1
+  result: "supplementaries:rope_arrow"
-  type: "supplementaries:rope_arrow_add"
+  type: "supplementaries:add_charges"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "rope_arrow"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/rope_arrow_create</summary>

```diff
 {
+  charge: {
+    tag: "supplementaries:ropes"
+  }
+  ingredient: {
+    item: "minecraft:arrow"
+  }
+  charges_per_item: 1
+  result: "supplementaries:rope_arrow"
-  type: "supplementaries:rope_arrow_create"
+  type: "supplementaries:add_charges"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "rope_arrow"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/safe</summary>

```diff
 {
+  shulker: {
+    tag: "c:shulker_boxes"
+  }
+  ingot: {
+    item: "minecraft:netherite_ingot"
+  }
   type: "supplementaries:safe"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "safe"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/soap/clear</summary>

```diff
 {
+  ingredient: {
+    item: "supplementaries:soap"
+  }
   type: "supplementaries:soap_clearing"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "soap"
     }
   ]
 }

```


</details>

<details>
<summary>supplementaries/trapped_present</summary>

```diff
 {
+  ingredient: {
+    item: "minecraft:tripwire_hook"
+  }
   type: "supplementaries:trapped_present"
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
       flag: "trapped_present"
     }
   ]
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (70)</summary>
<blockquote>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/aspen_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:aspen_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:aspen_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/baobab_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:baobab_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:baobab_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/blue_enchanted_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:blue_enchanted_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:blue_enchanted_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/cika_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:cika_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:cika_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/cypress_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:cypress_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:cypress_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/ebony_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:ebony_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:ebony_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/fir_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:fir_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:fir_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/florus_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:florus_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:florus_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/green_enchanted_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:green_enchanted_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:green_enchanted_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/holly_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:holly_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:holly_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/ironwood_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:ironwood_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:ironwood_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/jacaranda_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:jacaranda_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:jacaranda_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/mahogany_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:mahogany_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:mahogany_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/maple_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:maple_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:maple_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/palm_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:palm_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:palm_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/pine_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:pine_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:pine_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/rainbow_eucalyptus_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:rainbow_eucalyptus_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:rainbow_eucalyptus_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/redwood_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:redwood_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:redwood_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/sakura_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:sakura_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:sakura_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/skyris_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:skyris_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:skyris_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/spirit_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:spirit_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:spirit_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/white_mangrove_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:white_mangrove_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:white_mangrove_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/willow_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:willow_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:willow_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/witch_hazel_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:witch_hazel_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:witch_hazel_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/biomeswevegone/zelkova_planks</summary>

```diff
-{
-  type: "mekanism:sawing"
-  input: {
-    tag: "biomeswevegone:zelkova_logs"
-  }
-  main_output: {
-    id: "biomeswevegone:zelkova_planks"
-    count: 6
-  }
-  secondary_chance: 0.25
-  secondary_output: {
-    id: "mekanism:sawdust"
-    count: 1
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>ars_nouveau/scry_ritual/amethyst_gems</summary>

```diff
-{
-  type: "ars_nouveau:scry_ritual"
-  augment: "c:gems/amethyst"
-  highlight: "c:storage_blocks/amethyst"
-}

```


</details>

<details>
<summary>biomeswevegone/black_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "black_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_black_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:black_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/blue_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "blue_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_blue_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:blue_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/cyan_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "cyan_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_cyan_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:cyan_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/green_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "green_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_green_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:green_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/magenta_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "magenta_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_magenta_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:magenta_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/orange_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "orange_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_orange_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:orange_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/pink_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "pink_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_pink_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:pink_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/purple_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "purple_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_purple_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:purple_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/red_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "red_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_red_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:red_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/white_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "white_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_white_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:white_dye"
-  }
-}

```


</details>

<details>
<summary>biomeswevegone/yellow_dye_from_bwg_tag</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  group: "yellow_dye"
-  ingredients: [
-    {
-      tag: "biomeswevegone:dye/makes_yellow_dye"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:yellow_dye"
-  }
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_5</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:efficiency_addon_5"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      tag: "c:obsidians/crying"
-    }
-    {
-      item: "minecraft:totem_of_undying"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:efficiency_addon_4"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-  ]
-  inputFluid: {
-    amount: 5000
-    id: "industrialforegoing:sludge"
-  }
-  output: {
-    count: 1
-    id: "mifa:efficiency_addon_5"
-  }
-  processingTime: 1000
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_6</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:efficiency_addon_6"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:amethyst_block"
-    }
-    {
-      item: "minecraft:shulker_shell"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:efficiency_addon_5"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-  ]
-  inputFluid: {
-    amount: 6000
-    id: "industrialforegoing:biofuel"
-  }
-  output: {
-    count: 1
-    id: "mifa:efficiency_addon_6"
-  }
-  processingTime: 1200
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_7</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:efficiency_addon_7"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:beacon"
-    }
-    {
-      tag: "c:nether_stars"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:efficiency_addon_6"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-  ]
-  inputFluid: {
-    amount: 7000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:efficiency_addon_7"
-  }
-  processingTime: 1400
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_8</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:efficiency_addon_8"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:dragon_head"
-    }
-    {
-      item: "minecraft:dragon_breath"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:efficiency_addon_7"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-    {
-      tag: "c:rods/blaze"
-    }
-  ]
-  inputFluid: {
-    amount: 8000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:efficiency_addon_8"
-  }
-  processingTime: 1600
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_5</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:processing_addon_5"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      tag: "c:obsidians/crying"
-    }
-    {
-      item: "minecraft:totem_of_undying"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:processing_addon_4"
-    }
-    {
-      tag: "c:player_workstations/furnaces"
-    }
-    {
-      tag: "c:player_workstations/crafting_tables"
-    }
-  ]
-  inputFluid: {
-    amount: 5000
-    id: "industrialforegoing:sludge"
-  }
-  output: {
-    count: 1
-    id: "mifa:processing_addon_5"
-  }
-  processingTime: 1000
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_6</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:processing_addon_6"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:amethyst_block"
-    }
-    {
-      item: "minecraft:shulker_shell"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:processing_addon_5"
-    }
-    {
-      tag: "c:player_workstations/furnaces"
-    }
-    {
-      tag: "c:player_workstations/crafting_tables"
-    }
-  ]
-  inputFluid: {
-    amount: 6000
-    id: "industrialforegoing:biofuel"
-  }
-  output: {
-    count: 1
-    id: "mifa:processing_addon_6"
-  }
-  processingTime: 1200
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_7</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:processing_addon_7"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:beacon"
-    }
-    {
-      tag: "c:nether_stars"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:processing_addon_6"
-    }
-    {
-      tag: "c:player_workstations/furnaces"
-    }
-    {
-      tag: "c:player_workstations/crafting_tables"
-    }
-  ]
-  inputFluid: {
-    amount: 7000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:processing_addon_7"
-  }
-  processingTime: 1400
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_8</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:processing_addon_8"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:dragon_head"
-    }
-    {
-      item: "minecraft:dragon_breath"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:processing_addon_7"
-    }
-    {
-      tag: "c:player_workstations/furnaces"
-    }
-    {
-      tag: "c:player_workstations/crafting_tables"
-    }
-  ]
-  inputFluid: {
-    amount: 8000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:processing_addon_8"
-  }
-  processingTime: 1600
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_5</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_5"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      tag: "c:obsidians/crying"
-    }
-    {
-      item: "minecraft:totem_of_undying"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:speed_addon_4"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 5000
-    id: "industrialforegoing:sludge"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_5"
-  }
-  processingTime: 1000
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_6</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_6"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:amethyst_block"
-    }
-    {
-      item: "minecraft:shulker_shell"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:speed_addon_5"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 6000
-    id: "industrialforegoing:biofuel"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_6"
-  }
-  processingTime: 1200
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_7</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_7"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:beacon"
-    }
-    {
-      tag: "c:nether_stars"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:speed_addon_6"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 7000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_7"
-  }
-  processingTime: 1400
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_8</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_8"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      item: "minecraft:dragon_head"
-    }
-    {
-      item: "minecraft:dragon_breath"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "mifa:speed_addon_7"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 8000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_8"
-  }
-  processingTime: 1600
-}

```


</details>

<details>
<summary>productivemetalworks/melting/black_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:black_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/blue_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:blue_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/brown_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:brown_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/cyan_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:cyan_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/gray_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:gray_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/green_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:green_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/light_blue_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:light_blue_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/light_gray_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:light_gray_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/lime_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:lime_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/magenta_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:magenta_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/orange_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:orange_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/pink_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:pink_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/purple_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:purple_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/red_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:red_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/white_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:white_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>productivemetalworks/melting/yellow_shulker_box</summary>

```diff
-{
-  type: "productivemetalworks:item_melting"
-  ingredient: {
-    item: "minecraft:yellow_shulker_box"
-  }
-  maximum_temperature: 0
-  minimum_temperature: 1000
-  result: [
-    {
-      amount: 200
-      id: "productivemetalworks:molten_shulker_shell"
-    }
-  ]
-}

```


</details>

<details>
<summary>simplylight/illuminant_panel</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "simplylight:illuminant_slab"
-    }
-  }
-  pattern: [
-    "aaa"
-  ]
-  result: {
-    count: 6
-    id: "simplylight:illuminant_panel"
-  }
-  show_notification: false
-}

```


</details>

<details>
<summary>simplylight/illuminant_slab_from_panel</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "simplylight:illuminant_panel"
-    }
-    {
-      item: "simplylight:illuminant_panel"
-    }
-  ]
-  result: {
-    count: 1
-    id: "simplylight:illuminant_slab"
-  }
-}

```


</details>

<details>
<summary>supplementaries/sus_gravel</summary>

```diff
-{
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "sus_recipes"
-    }
-  ]
-  type: "supplementaries:sus_crafting"
-  ingredient: {
-    item: "minecraft:gravel"
-  }
-  result: {
-    id: "minecraft:suspicious_gravel"
-  }
-}

```


</details>

<details>
<summary>supplementaries/sus_sand</summary>

```diff
-{
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "sus_recipes"
-    }
-  ]
-  type: "supplementaries:sus_crafting"
-  ingredient: {
-    item: "minecraft:sand"
-  }
-  result: {
-    id: "minecraft:suspicious_sand"
-  }
-}

```


</details>

<details>
<summary>supplementaries/treasure_map_recipe</summary>

```diff
-{
-  type: "supplementaries:weathered_map"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "antique_ink"
-    }
-  ]
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (34)</summary>
<blockquote>

<details>
<summary>minecraft:banner_pattern/ars_nouveau:pattern_item/ars_stencil</summary>

```diff
+[
+  "ars_nouveau:abjuration?"
+  "ars_nouveau:air?"
+  "ars_nouveau:conjuration?"
+  "ars_nouveau:earth?"
+  "ars_nouveau:fire?"
+  "ars_nouveau:manipulation?"
+  "ars_nouveau:spirals?"
+  "ars_nouveau:water?"
+]

```


</details>

<details>
<summary>minecraft:block/biomeswevegone:saplings/birch</summary>

```diff
+[
+  "biomeswevegone:brown_birch_sapling"
+  "biomeswevegone:orange_birch_sapling"
+  "biomeswevegone:red_birch_sapling"
+  "biomeswevegone:yellow_birch_sapling"
+]

```


</details>

<details>
<summary>minecraft:block/biomeswevegone:saplings/oak</summary>

```diff
+[
+  "biomeswevegone:brown_oak_sapling"
+  "biomeswevegone:orange_oak_sapling"
+  "biomeswevegone:red_oak_sapling"
+]

```


</details>

<details>
<summary>minecraft:block/biomeswevegone:saplings/spruce</summary>

```diff
+[
+  "biomeswevegone:blue_spruce_sapling"
+  "biomeswevegone:orange_spruce_sapling"
+  "biomeswevegone:red_spruce_sapling"
+  "biomeswevegone:yellow_spruce_sapling"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/charged_redstone</summary>

```diff
+[
+  "appflux:charged_redstone_block"
+]

```


</details>

<details>
<summary>minecraft:block/forbidden_arcanus:pedestals</summary>

```diff
+[
+  "forbidden_arcanus:darkstone_pedestal"
+  "forbidden_arcanus:magnetized_darkstone_pedestal"
+]

```


</details>

<details>
<summary>minecraft:block/sereneseasons:year_round_crops</summary>

```diff
+[
+  "#biomeswevegone:saplings/oak"
+  "biomeswevegone:aspen_sapling"
+  "biomeswevegone:green_mushroom"
+  "biomeswevegone:red_maple_sapling"
+  "biomeswevegone:weeping_milkcap"
+  "biomeswevegone:wood_blewit"
+]

```


</details>

<details>
<summary>minecraft:block/supplementaries:sacks</summary>

```diff
+[
+  "supplementaries:sack"
+]

```


</details>

<details>
<summary>minecraft:block/sushigocrafting:pressing_base</summary>

```diff
+[
+  "minecraft:iron_block"
+]

```


</details>

<details>
<summary>minecraft:block/the_bumblezone:sugar_water/grows_plant_faster</summary>

```diff
+[
+  "minecraft:sugar_cane"
+]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:vitalic_death_blacklist</summary>

```diff
+[
+  "ars_nouveau:blazing_weald_walker"
+  "ars_nouveau:cascading_weald_walker"
+  "ars_nouveau:flourishing_weald_walker"
+  "ars_nouveau:vexing_weald_walker"
+]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:vitalic_growth_blacklist</summary>

```diff
+[
+  "ars_nouveau:blazing_weald_walker"
+  "ars_nouveau:cascading_weald_walker"
+  "ars_nouveau:flourishing_weald_walker"
+  "ars_nouveau:vexing_weald_walker"
+]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:saplings/birch</summary>

```diff
+[
+  "biomeswevegone:brown_birch_sapling"
+  "biomeswevegone:orange_birch_sapling"
+  "biomeswevegone:red_birch_sapling"
+  "biomeswevegone:yellow_birch_sapling"
+]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:saplings/oak</summary>

```diff
+[
+  "biomeswevegone:brown_oak_sapling"
+  "biomeswevegone:orange_oak_sapling"
+  "biomeswevegone:red_oak_sapling"
+]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:saplings/spruce</summary>

```diff
+[
+  "biomeswevegone:blue_spruce_sapling"
+  "biomeswevegone:orange_spruce_sapling"
+  "biomeswevegone:red_spruce_sapling"
+  "biomeswevegone:yellow_spruce_sapling"
+]

```


</details>

<details>
<summary>minecraft:item/c:dusts/shattered_singularity</summary>

```diff
+[
+  "advanced_ae:quantum_infused_dust"
+]

```


</details>

<details>
<summary>minecraft:item/c:gems/charged_redstone</summary>

```diff
+[
+  "appflux:charged_redstone"
+]

```


</details>

<details>
<summary>minecraft:item/c:plates/quantum_alloy</summary>

```diff
+[
+  "advanced_ae:quantum_alloy_plate"
+]

```


</details>

<details>
<summary>minecraft:item/c:potions</summary>

```diff
+[
+  "#c:potions/bottle"
+]

```


</details>

<details>
<summary>minecraft:item/c:potions/bottle</summary>

```diff
+[
+  "minecraft:lingering_potion"
+  "minecraft:potion"
+  "minecraft:splash_potion"
+]

```


</details>

<details>
<summary>minecraft:item/c:seeds/sesame</summary>

```diff
+[
+  "sushigocrafting:sesame_seeds"
+]

```


</details>

<details>
<summary>minecraft:item/c:seeds/soy</summary>

```diff
+[
+  "sushigocrafting:soy_seeds"
+]

```


</details>

<details>
<summary>minecraft:item/c:seeds/torchflower</summary>

```diff
+[
+  "minecraft:torchflower_seeds"
+]

```


</details>

<details>
<summary>minecraft:item/c:seeds/wasabi</summary>

```diff
+[
+  "sushigocrafting:wasabi_seeds"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/charged_redstone</summary>

```diff
+[
+  "appflux:charged_redstone_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/quantum_alloy</summary>

```diff
+[
+  "advanced_ae:quantum_alloy_block"
+]

```


</details>

<details>
<summary>minecraft:item/rarcompat:mimic_loot</summary>

```diff
+[
+  "artifacts:anglers_hat"
+  "artifacts:antidote_vessel"
+  "artifacts:bunny_hoppers"
+  "artifacts:charm_of_shrinking"
+  "artifacts:charm_of_sinking"
+  "artifacts:chorus_totem"
+  "artifacts:cloud_in_a_bottle"
+  "artifacts:cowboy_hat"
+  "artifacts:cross_necklace"
+  "artifacts:crystal_heart"
+  "artifacts:digging_claws"
+  "artifacts:feral_claws"
+  "artifacts:fire_gauntlet"
+  "artifacts:flame_pendant"
+  "artifacts:flippers"
+  "artifacts:golden_hook"
+  "artifacts:helium_flamingo"
+  "artifacts:kitty_slippers"
+  "artifacts:lucky_scarf"
+  "artifacts:night_vision_goggles"
+  "artifacts:novelty_drinking_hat"
+  "artifacts:obsidian_skull"
+  "artifacts:onion_ring"
+  "artifacts:panic_necklace"
+  "artifacts:pickaxe_heater"
+  "artifacts:plastic_drinking_hat"
+  "artifacts:pocket_piston"
+  "artifacts:power_glove"
+  "artifacts:rooted_boots"
+  "artifacts:running_shoes"
+  "artifacts:scarf_of_invisibility"
+  "artifacts:shock_pendant"
+  "artifacts:snorkel"
+  "artifacts:snowshoes"
+  "artifacts:steadfast_spikes"
+  "artifacts:superstitious_hat"
+  "artifacts:thorn_pendant"
+  "artifacts:umbrella"
+  "artifacts:universal_attractor"
+  "artifacts:vampiric_glove"
+  "artifacts:villager_hat"
+  "artifacts:warp_drive"
+  "artifacts:whoopee_cushion"
+  "artifacts:withered_bracelet"
+  "relics:amphibian_boot"
+  "relics:aqua_walker"
+  "relics:bastion_ring"
+  "relics:blazing_flask"
+  "relics:chorus_inhibitor"
+  "relics:drowned_belt"
+  "relics:elytra_booster"
+  "relics:enders_hand"
+  "relics:holy_locket"
+  "relics:hunter_belt"
+  "relics:ice_breaker"
+  "relics:ice_skates"
+  "relics:infinity_ham"
+  "relics:jellyfish_necklace"
+  "relics:leather_belt"
+  "relics:magic_mirror"
+  "relics:magma_walker"
+  "relics:midnight_robe"
+  "relics:phantom_boot"
+  "relics:rage_glove"
+  "relics:reflection_necklace"
+  "relics:roller_skates"
+  "relics:shadow_glaive"
+  "relics:space_dissector"
+  "relics:spore_sack"
+  "relics:springy_boot"
+  "relics:wool_mitten"
+]

```


</details>

<details>
<summary>minecraft:item/rarcompat:mimificable</summary>

```diff
+[
+  "artifacts:anglers_hat"
+  "artifacts:antidote_vessel"
+  "artifacts:bunny_hoppers"
+  "artifacts:charm_of_shrinking"
+  "artifacts:charm_of_sinking"
+  "artifacts:chorus_totem"
+  "artifacts:cloud_in_a_bottle"
+  "artifacts:cowboy_hat"
+  "artifacts:cross_necklace"
+  "artifacts:crystal_heart"
+  "artifacts:digging_claws"
+  "artifacts:feral_claws"
+  "artifacts:fire_gauntlet"
+  "artifacts:flame_pendant"
+  "artifacts:flippers"
+  "artifacts:golden_hook"
+  "artifacts:helium_flamingo"
+  "artifacts:kitty_slippers"
+  "artifacts:lucky_scarf"
+  "artifacts:night_vision_goggles"
+  "artifacts:novelty_drinking_hat"
+  "artifacts:obsidian_skull"
+  "artifacts:onion_ring"
+  "artifacts:panic_necklace"
+  "artifacts:pickaxe_heater"
+  "artifacts:plastic_drinking_hat"
+  "artifacts:pocket_piston"
+  "artifacts:power_glove"
+  "artifacts:rooted_boots"
+  "artifacts:running_shoes"
+  "artifacts:scarf_of_invisibility"
+  "artifacts:shock_pendant"
+  "artifacts:snorkel"
+  "artifacts:snowshoes"
+  "artifacts:steadfast_spikes"
+  "artifacts:superstitious_hat"
+  "artifacts:thorn_pendant"
+  "artifacts:umbrella"
+  "artifacts:universal_attractor"
+  "artifacts:vampiric_glove"
+  "artifacts:villager_hat"
+  "artifacts:warp_drive"
+  "artifacts:whoopee_cushion"
+  "artifacts:withered_bracelet"
+  "relics:amphibian_boot"
+  "relics:aqua_walker"
+  "relics:bastion_ring"
+  "relics:blazing_flask"
+  "relics:chorus_inhibitor"
+  "relics:drowned_belt"
+  "relics:elytra_booster"
+  "relics:enders_hand"
+  "relics:holy_locket"
+  "relics:hunter_belt"
+  "relics:ice_breaker"
+  "relics:ice_skates"
+  "relics:infinity_ham"
+  "relics:jellyfish_necklace"
+  "relics:leather_belt"
+  "relics:magic_mirror"
+  "relics:magma_walker"
+  "relics:midnight_robe"
+  "relics:phantom_boot"
+  "relics:rage_glove"
+  "relics:reflection_necklace"
+  "relics:roller_skates"
+  "relics:shadow_glaive"
+  "relics:space_dissector"
+  "relics:spore_sack"
+  "relics:springy_boot"
+  "relics:wool_mitten"
+]

```


</details>

<details>
<summary>minecraft:item/sereneseasons:year_round_crops</summary>

```diff
+[
+  "#biomeswevegone:saplings/oak"
+  "biomeswevegone:aspen_sapling"
+  "biomeswevegone:green_mushroom"
+  "biomeswevegone:red_maple_sapling"
+  "biomeswevegone:weeping_milkcap"
+  "biomeswevegone:wood_blewit"
+]

```


</details>

<details>
<summary>minecraft:item/supplementaries:sacks</summary>

```diff
+[
+  "supplementaries:sack"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate</summary>

```diff
+[
+  "#c:is_temperate/end"
+  "#c:is_temperate/nether"
+  "#c:is_temperate/overworld"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate/end</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate/nether</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_temperate/overworld</summary>

```diff
+[
+  "#biomeswevegone:climate/temperate"
+  "minecraft:beach"
+  "minecraft:birch_forest"
+  "minecraft:cherry_grove"
+  "minecraft:dark_forest"
+  "minecraft:deep_ocean"
+  "minecraft:flower_forest"
+  "minecraft:forest"
+  "minecraft:mangrove_swamp"
+  "minecraft:meadow"
+  "minecraft:ocean"
+  "minecraft:old_growth_birch_forest"
+  "minecraft:plains"
+  "minecraft:sunflower_plains"
+  "minecraft:swamp"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (47)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:sand_growables</summary>

```diff
 [
   ... (1 entries)
+  "minecraft:kelp"
+  "minecraft:kelp_plant"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/flint</summary>

```diff
 [
-  "supplementaries:soap_block"
+  "supplementaries:flint_block"
 ]

```


</details>

<details>
<summary>minecraft:block/computercraft:turtle_can_use</summary>

```diff
 [
-  "#minecraft:beehives"
-  "#minecraft:cauldrons"
-  "minecraft:composter"
 ]

```


</details>

<details>
<summary>minecraft:block/cookingforblockheads:kitchen_item_providers</summary>

```diff
 [
   ... (7 entries)
-  "cookingforblockheads:cabinet"
-  "cookingforblockheads:counter"
   ... (2 entries)
-  "cookingforblockheads:fruit_basket"
   ... (20 entries)
-  "cookingforblockheads:sink"
-  "cookingforblockheads:spice_rack"
   ... (140 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/entangled:invalid_targets</summary>

```diff
 [
+  "ae2:16k_crafting_storage"
+  "ae2:1k_crafting_storage"
+  "ae2:256k_crafting_storage"
+  "ae2:4k_crafting_storage"
+  "ae2:64k_crafting_storage"
+  "ae2:cable_bus"
+  "ae2:cell_workbench"
+  "ae2:charger"
+  "ae2:chest"
+  "ae2:chipped_budding_quartz"
+  "ae2:chiseled_quartz_block"
+  "ae2:chiseled_quartz_slab"
+  "ae2:chiseled_quartz_stairs"
+  "ae2:chiseled_quartz_wall"
+  "ae2:condenser"
+  "ae2:controller"
+  "ae2:crafting_accelerator"
+  "ae2:crafting_monitor"
+  "ae2:crafting_unit"
+  "ae2:crank"
+  "ae2:creative_energy_cell"
+  "ae2:crystal_resonance_generator"
+  "ae2:cut_quartz_block"
+  "ae2:cut_quartz_slab"
+  "ae2:cut_quartz_stairs"
+  "ae2:cut_quartz_wall"
+  "ae2:damaged_budding_quartz"
+  "ae2:debug_cube_gen"
+  "ae2:debug_energy_gen"
+  "ae2:debug_item_gen"
+  "ae2:debug_phantom_node"
+  "ae2:dense_energy_cell"
+  "ae2:drive"
+  "ae2:energy_acceptor"
+  "ae2:energy_cell"
+  "ae2:flawed_budding_quartz"
+  "ae2:flawless_budding_quartz"
+  "ae2:fluix_block"
+  "ae2:fluix_slab"
+  "ae2:fluix_stairs"
+  "ae2:fluix_wall"
+  "ae2:growth_accelerator"
+  "ae2:inscriber"
+  "ae2:interface"
+  "ae2:io_port"
+  "ae2:large_quartz_bud"
+  "ae2:light_detector"
+  "ae2:matrix_frame"
+  "ae2:medium_quartz_bud"
+  "ae2:molecular_assembler"
+  "ae2:mysterious_cube"
+  "ae2:not_so_mysterious_cube"
+  "ae2:paint"
+  "ae2:pattern_provider"
+  "ae2:quantum_link"
+  "ae2:quantum_ring"
+  "ae2:quartz_block"
+  "ae2:quartz_brick_slab"
+  "ae2:quartz_brick_stairs"
+  "ae2:quartz_brick_wall"
+  "ae2:quartz_bricks"
+  "ae2:quartz_cluster"
+  "ae2:quartz_fixture"
+  "ae2:quartz_glass"
+  "ae2:quartz_pillar"
+  "ae2:quartz_pillar_slab"
+  "ae2:quartz_pillar_stairs"
+  "ae2:quartz_pillar_wall"
+  "ae2:quartz_slab"
+  "ae2:quartz_stairs"
+  "ae2:quartz_vibrant_glass"
+  "ae2:quartz_wall"
+  "ae2:sky_stone_block"
+  "ae2:sky_stone_brick"
+  "ae2:sky_stone_brick_slab"
+  "ae2:sky_stone_brick_stairs"
+  "ae2:sky_stone_brick_wall"
+  "ae2:sky_stone_chest"
+  "ae2:sky_stone_slab"
+  "ae2:sky_stone_small_brick"
+  "ae2:sky_stone_small_brick_slab"
+  "ae2:sky_stone_small_brick_stairs"
+  "ae2:sky_stone_small_brick_wall"
+  "ae2:sky_stone_stairs"
+  "ae2:sky_stone_tank"
+  "ae2:sky_stone_wall"
+  "ae2:small_quartz_bud"
+  "ae2:smooth_quartz_block"
+  "ae2:smooth_quartz_slab"
+  "ae2:smooth_quartz_stairs"
+  "ae2:smooth_quartz_wall"
+  "ae2:smooth_sky_stone_block"
+  "ae2:smooth_sky_stone_chest"
+  "ae2:smooth_sky_stone_slab"
+  "ae2:smooth_sky_stone_stairs"
+  "ae2:smooth_sky_stone_wall"
+  "ae2:spatial_anchor"
+  "ae2:spatial_io_port"
+  "ae2:spatial_pylon"
+  "ae2:tiny_tnt"
+  "ae2:vibration_chamber"
+  "ae2:wireless_access_point"
+  "appflux:charged_redstone_block"
+  "appflux:flux_accessor"
+  "megacells:16m_crafting_storage"
+  "megacells:1m_crafting_storage"
+  "megacells:256m_crafting_storage"
+  "megacells:4m_crafting_storage"
+  "megacells:64m_crafting_storage"
+  "megacells:mega_crafting_accelerator"
+  "megacells:mega_crafting_monitor"
+  "megacells:mega_crafting_unit"
+  "megacells:mega_energy_cell"
+  "megacells:mega_interface"
+  "megacells:mega_pattern_provider"
+  "megacells:sky_bronze_block"
+  "megacells:sky_osmium_block"
+  "megacells:sky_steel_block"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (1008 entries)
+  "computercraft:lectern"
   ... (546 entries)
+  "immersiveengineering:treated_wood_hanging_sign"
   ... (2 entries)
+  "immersiveengineering:treated_wood_sign"
   ... (1 entries)
+  "immersiveengineering:treated_wood_wall_hanging_sign"
+  "immersiveengineering:treated_wood_wall_sign"
   ... (3879 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (195 entries)
+  "#forbidden_arcanus:pedestals"
   ... (3170 entries)
+  "computercraft:redstone_relay"
   ... (947 entries)
-  "forbidden_arcanus:darkstone_pedestal"
   ... (8 entries)
-  "forbidden_arcanus:magnetized_darkstone_pedestal"
   ... (174 entries)
+  "immersiveengineering:aluminum_hanging_sign"
+  "immersiveengineering:aluminum_sign"
+  "immersiveengineering:aluminum_wall_hanging_sign"
+  "immersiveengineering:aluminum_wall_sign"
   ... (244 entries)
+  "immersiveengineering:steel_hanging_sign"
   ... (4 entries)
+  "immersiveengineering:steel_sign"
   ... (2 entries)
+  "immersiveengineering:steel_wall_hanging_sign"
+  "immersiveengineering:steel_wall_sign"
   ... (5795 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (22 entries)
+  "#forbidden_arcanus:pedestals"
   ... (420 entries)
-  "forbidden_arcanus:darkstone_pedestal"
   ... (4 entries)
-  "forbidden_arcanus:magnetized_darkstone_pedestal"
   ... (1097 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:slabs</summary>

```diff
 [
   ... (12 entries)
+  "advanced_ae:quantum_alloy_slab"
   ... (339 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:stairs</summary>

```diff
 [
   ... (12 entries)
+  "advanced_ae:quantum_alloy_stairs"
   ... (306 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/sereneseasons:autumn_crops</summary>

```diff
 [
+  "#biomeswevegone:saplings/birch"
+  "#biomeswevegone:saplings/spruce"
   ... (3 entries)
+  "biomeswevegone:brown_zelkova_sapling"
+  "biomeswevegone:cika_sapling"
+  "biomeswevegone:cypress_sapling"
+  "biomeswevegone:ebony_sapling"
+  "biomeswevegone:fir_sapling"
+  "biomeswevegone:holly_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:ironwood_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:maple_sapling"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:pale_pumpkin_stem"
+  "biomeswevegone:pine_sapling"
+  "biomeswevegone:silver_maple_sapling"
+  "biomeswevegone:skyris_sapling"
+  "biomeswevegone:willow_sapling"
+  "biomeswevegone:witch_hazel_sapling"
+  "biomeswevegone:yucca_sapling"
+  "biomeswevegone:zelkova_sapling"
   ... (249 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/sereneseasons:spring_crops</summary>

```diff
 [
+  "#biomeswevegone:glowcane"
+  "#biomeswevegone:saplings/birch"
+  "#biomeswevegone:saplings/spruce"
   ... (3 entries)
+  "biomeswevegone:araucaria_sapling"
+  "biomeswevegone:blueberry_bush"
+  "biomeswevegone:brown_zelkova_sapling"
+  "biomeswevegone:cypress_sapling"
+  "biomeswevegone:ebony_sapling"
+  "biomeswevegone:fir_sapling"
+  "biomeswevegone:holly_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:ironwood_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:mahogany_sapling"
+  "biomeswevegone:maple_sapling"
+  "biomeswevegone:oddion_crop"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:palm_sapling"
+  "biomeswevegone:pine_sapling"
+  "biomeswevegone:rainbow_eucalyptus_sapling"
+  "biomeswevegone:redwood_sapling"
+  "biomeswevegone:silver_maple_sapling"
+  "biomeswevegone:spirit_sapling"
+  "biomeswevegone:white_mangrove_sapling"
+  "biomeswevegone:white_sakura_sapling"
+  "biomeswevegone:willow_sapling"
+  "biomeswevegone:witch_hazel_sapling"
+  "biomeswevegone:yellow_sakura_sapling"
+  "biomeswevegone:yucca_sapling"
+  "biomeswevegone:zelkova_sapling"
   ... (247 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/sereneseasons:summer_crops</summary>

```diff
 [
+  "#biomeswevegone:glowcane"
   ... (5 entries)
+  "biomeswevegone:araucaria_sapling"
+  "biomeswevegone:baobab_sapling"
+  "biomeswevegone:blue_enchanted_sapling"
+  "biomeswevegone:blueberry_bush"
+  "biomeswevegone:green_enchanted_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:mahogany_sapling"
+  "biomeswevegone:oddion_crop"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:palm_sapling"
+  "biomeswevegone:palo_verde_sapling"
+  "biomeswevegone:rainbow_eucalyptus_sapling"
+  "biomeswevegone:redwood_sapling"
+  "biomeswevegone:spirit_sapling"
+  "biomeswevegone:white_mangrove_sapling"
+  "biomeswevegone:yucca_sapling"
   ... (251 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/sereneseasons:winter_crops</summary>

```diff
 [
+  "#biomeswevegone:saplings/spruce"
   ... (3 entries)
+  "biomeswevegone:skyris_sapling"
   ... (163 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_explosion</summary>

```diff
 [
   ... (6 entries)
+  "supplementaries:bomb_explosion"
+  "supplementaries:player_bomb_explosion"
 ]

```


</details>

<details>
<summary>minecraft:item/c:crops/soybean</summary>

```diff
 [
   ... (3 entries)
+  "sushigocrafting:soy_bean"
 ]

```


</details>

<details>
<summary>minecraft:item/c:dusts</summary>

```diff
 [
   ... (173 entries)
+  "advanced_ae:quantum_infused_dust"
   ... (19 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:gems</summary>

```diff
 [
   ... (44 entries)
+  "appflux:charged_redstone"
   ... (18 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:ingots</summary>

```diff
 [
   ... (44 entries)
+  "#c:ingots/hop_graphite"
   ... (111 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:plates</summary>

```diff
 [
   ... (57 entries)
+  "#c:plates/quantum_alloy"
   ... (21 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds</summary>

```diff
 [
   ... (100 entries)
+  "#c:seeds/torchflower"
   ... (40 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds/cucumber</summary>

```diff
 [
   ... (1 entries)
+  "sushigocrafting:cucumber_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds/rice</summary>

```diff
 [
   ... (2 entries)
+  "sushigocrafting:rice_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
   ... (201 entries)
+  "#c:storage_blocks/quantum_alloy"
   ... (191 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools</summary>

```diff
 [
   ... (14 entries)
-  "#c:tools/wrench"
   ... (34 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:all</summary>

```diff
 [
+  "#artifacts:slot/all"
 ]

```


</details>

<details>
<summary>minecraft:item/curios:belt</summary>

```diff
 [
   ... (1 entries)
+  "#artifacts:slot/charm"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (57 entries)
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_spear"
   ... (119 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:slabs</summary>

```diff
 [
   ... (10 entries)
+  "advanced_ae:quantum_alloy_slab"
   ... (263 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stairs</summary>

```diff
 [
   ... (10 entries)
+  "advanced_ae:quantum_alloy_stairs"
   ... (227 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sereneseasons:autumn_crops</summary>

```diff
 [
+  "#biomeswevegone:saplings/birch"
+  "#biomeswevegone:saplings/spruce"
+  "biomeswevegone:brown_zelkova_sapling"
+  "biomeswevegone:cika_sapling"
+  "biomeswevegone:cypress_sapling"
+  "biomeswevegone:ebony_sapling"
+  "biomeswevegone:fir_sapling"
+  "biomeswevegone:holly_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:ironwood_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:maple_sapling"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:pale_pumpkin_seeds"
+  "biomeswevegone:pine_sapling"
+  "biomeswevegone:silver_maple_sapling"
+  "biomeswevegone:skyris_sapling"
+  "biomeswevegone:willow_sapling"
+  "biomeswevegone:witch_hazel_sapling"
+  "biomeswevegone:yucca_sapling"
+  "biomeswevegone:zelkova_sapling"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sereneseasons:spring_crops</summary>

```diff
 [
+  "#biomeswevegone:glowcane_shoot"
+  "#biomeswevegone:saplings/birch"
+  "#biomeswevegone:saplings/spruce"
+  "biomeswevegone:araucaria_sapling"
+  "biomeswevegone:brown_zelkova_sapling"
+  "biomeswevegone:cypress_sapling"
+  "biomeswevegone:ebony_sapling"
+  "biomeswevegone:fir_sapling"
+  "biomeswevegone:holly_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:ironwood_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:mahogany_sapling"
+  "biomeswevegone:maple_sapling"
+  "biomeswevegone:oddion_bulb"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:palm_sapling"
+  "biomeswevegone:pine_sapling"
+  "biomeswevegone:rainbow_eucalyptus_sapling"
+  "biomeswevegone:redwood_sapling"
+  "biomeswevegone:silver_maple_sapling"
+  "biomeswevegone:spirit_sapling"
+  "biomeswevegone:white_mangrove_sapling"
+  "biomeswevegone:white_sakura_sapling"
+  "biomeswevegone:willow_sapling"
+  "biomeswevegone:witch_hazel_sapling"
+  "biomeswevegone:yellow_sakura_sapling"
+  "biomeswevegone:yucca_sapling"
+  "biomeswevegone:zelkova_sapling"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sereneseasons:summer_crops</summary>

```diff
 [
+  "#biomeswevegone:glowcane_shoot"
+  "biomeswevegone:araucaria_sapling"
+  "biomeswevegone:baobab_sapling"
+  "biomeswevegone:blue_enchanted_sapling"
+  "biomeswevegone:blueberries"
+  "biomeswevegone:green_enchanted_sapling"
+  "biomeswevegone:indigo_jacaranda_sapling"
+  "biomeswevegone:jacaranda_sapling"
+  "biomeswevegone:mahogany_sapling"
+  "biomeswevegone:oddion_bulb"
+  "biomeswevegone:orchard_sapling"
+  "biomeswevegone:palm_sapling"
+  "biomeswevegone:palo_verde_sapling"
+  "biomeswevegone:rainbow_eucalyptus_sapling"
+  "biomeswevegone:redwood_sapling"
+  "biomeswevegone:spirit_sapling"
+  "biomeswevegone:white_mangrove_sapling"
+  "biomeswevegone:yucca_sapling"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sereneseasons:winter_crops</summary>

```diff
 [
+  "#biomeswevegone:saplings/spruce"
+  "biomeswevegone:skyris_sapling"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedbackpacks:upgrade</summary>

```diff
 [
   ... (39 entries)
+  "sophisticatedbackpacks:sawmill/sawmill_upgrade?"
   ... (18 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedstorage:upgrade</summary>

```diff
 [
   ... (31 entries)
+  "sophisticatedstorage:sawmill/sawmill_upgrade?"
   ... (16 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:shulker_blacklist</summary>

```diff
 [
   ... (1 entries)
-  "#suppsquared:sacks?"
-  "supplementaries:sack?"
+  "#supplementaries:sacks?"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:point_of_interest_type/minecraft:acquirable_job_site</summary>

```diff
 [
   ... (2 entries)
+  "advancedperipherals:computer_scientist"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biomeswevegone:climate/cold</summary>

```diff
 [
-  "biomeswevegone:crimson_tundra"
+  "biomeswevegone:black_forest"
+  "biomeswevegone:canadian_shield"
+  "biomeswevegone:cika_woods"
+  "biomeswevegone:coniferous_forest"
+  "biomeswevegone:dacite_ridges"
+  "biomeswevegone:dacite_shore"
   ... (1 entries)
+  "biomeswevegone:fragment_jungle"
   ... (1 entries)
+  "biomeswevegone:frosted_taiga"
+  "biomeswevegone:howling_peaks"
+  "biomeswevegone:maple_taiga"
+  "biomeswevegone:pumpkin_valley"
   ... (1 entries)
+  "biomeswevegone:skyrise_vale"
+  "biomeswevegone:weeping_witch_forest"
+  "biomeswevegone:zelkova_forest"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biomeswevegone:climate/hot</summary>

```diff
 [
+  "biomeswevegone:araucaria_savanna"
   ... (1 entries)
+  "biomeswevegone:baobab_savanna"
+  "biomeswevegone:basalt_barrera"
+  "biomeswevegone:crag_gardens"
+  "biomeswevegone:dead_sea"
+  "biomeswevegone:firecracker_chaparral"
+  "biomeswevegone:ironwood_gour"
+  "biomeswevegone:jacaranda_jungle"
+  "biomeswevegone:lush_stacks"
   ... (1 entries)
+  "biomeswevegone:rainbow_beach"
   ... (1 entries)
+  "biomeswevegone:redwood_thicket"
   ... (2 entries)
+  "biomeswevegone:tropical_rainforest"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/biomeswevegone:climate/temperate</summary>

```diff
 [
+  "biomeswevegone:allium_shrubland"
+  "biomeswevegone:amaranth_grassland"
+  "biomeswevegone:aspen_boreal"
+  "biomeswevegone:bayou"
+  "biomeswevegone:coconino_meadow"
+  "biomeswevegone:crimson_tundra"
+  "biomeswevegone:cypress_swamplands"
+  "biomeswevegone:ebony_woods"
+  "biomeswevegone:enchanted_tangle"
+  "biomeswevegone:forgotten_forest"
+  "biomeswevegone:orchard"
+  "biomeswevegone:overgrowth_woodlands"
+  "biomeswevegone:pale_bog"
   ... (1 entries)
+  "biomeswevegone:rose_fields"
+  "biomeswevegone:sakura_grove"
   ... (1 entries)
+  "biomeswevegone:white_mangrove_marshes"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_cold</summary>

```diff
 [
   ... (1 entries)
-  "#c:is_cold/nether?"
+  "#c:is_cold/nether"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_dense_vegetation</summary>

```diff
 [
-  "#c:is_dense_vegetation/end?"
-  "#c:is_dense_vegetation/nether?"
+  "#c:is_dense_vegetation/end"
+  "#c:is_dense_vegetation/nether"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_hot</summary>

```diff
 [
-  "#c:is_hot/end?"
+  "#c:is_hot/end"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_hot/overworld</summary>

```diff
 [
   ... (7 entries)
-  "minecraft:mangrove_swamp"
+  "minecraft:mushroom_fields"
   ... (4 entries)
-  "minecraft:swamp"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_sparse_vegetation</summary>

```diff
 [
-  "#c:is_sparse_vegetation/end?"
-  "#c:is_sparse_vegetation/nether?"
+  "#c:is_sparse_vegetation/end"
+  "#c:is_sparse_vegetation/nether"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/c:is_wet</summary>

```diff
 [
-  "#c:is_wet/end?"
-  "#c:is_wet/nether?"
+  "#c:is_wet/end"
+  "#c:is_wet/nether"
   ... (3 entries)
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (17)</summary>
<blockquote>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_black_dye</summary>

```diff
-[
-  "biomeswevegone:black_rose"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_blue_dye</summary>

```diff
-[
-  "biomeswevegone:blue_glowcane_powder"
-  "biomeswevegone:blue_rose_bush"
-  "biomeswevegone:blue_sage"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_cyan_dye</summary>

```diff
-[
-  "biomeswevegone:cyan_amaranth"
-  "biomeswevegone:cyan_pitcher_plant"
-  "biomeswevegone:cyan_rose"
-  "biomeswevegone:cyan_tulip"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_green_dye</summary>

```diff
-[
-  "biomeswevegone:green_glowcane_powder"
-  "biomeswevegone:green_tulip"
-  "biomeswevegone:winter_succulent"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_magenta_dye</summary>

```diff
-[
-  "biomeswevegone:allium_flower_bush"
-  "biomeswevegone:magenta_amaranth"
-  "biomeswevegone:magenta_pitcher_plant"
-  "biomeswevegone:magenta_tulip"
-  "biomeswevegone:tall_allium"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_orange_dye</summary>

```diff
-[
-  "biomeswevegone:california_poppy"
-  "biomeswevegone:foxglove"
-  "biomeswevegone:orange_amaranth"
-  "biomeswevegone:orange_daisy"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_pink_dye</summary>

```diff
-[
-  "biomeswevegone:fairy_slipper"
-  "biomeswevegone:incan_lily"
-  "biomeswevegone:peach_leather_flower"
-  "biomeswevegone:pink_allium"
-  "biomeswevegone:pink_allium_flower_bush"
-  "biomeswevegone:pink_anemone"
-  "biomeswevegone:pink_daffodil"
-  "biomeswevegone:tall_pink_allium"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_purple_dye</summary>

```diff
-[
-  "biomeswevegone:alpine_bellflower"
-  "biomeswevegone:amaranth"
-  "biomeswevegone:crocus"
-  "biomeswevegone:delphinium"
-  "biomeswevegone:iris"
-  "biomeswevegone:purple_amaranth"
-  "biomeswevegone:purple_sage"
-  "biomeswevegone:purple_tulip"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_red_dye</summary>

```diff
-[
-  "biomeswevegone:begonia"
-  "biomeswevegone:daffodil"
-  "biomeswevegone:kovan_flower"
-  "biomeswevegone:lazarus_bellflower"
-  "biomeswevegone:osiria_rose"
-  "biomeswevegone:protea_flower"
-  "biomeswevegone:red_glowcane_powder"
-  "biomeswevegone:richea"
-  "biomeswevegone:rose"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_white_dye</summary>

```diff
-[
-  "biomeswevegone:angelica"
-  "biomeswevegone:bistort"
-  "biomeswevegone:japanese_orchid"
-  "biomeswevegone:silver_vase_flower"
-  "biomeswevegone:tall_white_allium"
-  "biomeswevegone:white_allium"
-  "biomeswevegone:white_allium_flower_bush"
-  "biomeswevegone:white_anemone"
-  "biomeswevegone:white_sage"
-]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:dye/makes_yellow_dye</summary>

```diff
-[
-  "biomeswevegone:guzmania"
-  "biomeswevegone:horseweed"
-  "biomeswevegone:lollipop_flower"
-  "biomeswevegone:yellow_daffodil"
-  "biomeswevegone:yellow_glowcane_powder"
-  "biomeswevegone:yellow_tulip"
-]

```


</details>

<details>
<summary>minecraft:item/c:crops/soy_bean</summary>

```diff
-[
-  "sushigocrafting:soy_bean"
-]

```


</details>

<details>
<summary>minecraft:item/c:seeds/cucumber_seeds</summary>

```diff
-[
-  "sushigocrafting:cucumber_seeds"
-]

```


</details>

<details>
<summary>minecraft:item/c:seeds/rice_seeds</summary>

```diff
-[
-  "sushigocrafting:rice_seeds"
-]

```


</details>

<details>
<summary>minecraft:item/c:seeds/sesame_seeds</summary>

```diff
-[
-  "sushigocrafting:sesame_seeds"
-]

```


</details>

<details>
<summary>minecraft:item/c:seeds/soy_seeds</summary>

```diff
-[
-  "sushigocrafting:soy_seeds"
-]

```


</details>

<details>
<summary>minecraft:item/c:seeds/wasabi_seeds</summary>

```diff
-[
-  "sushigocrafting:wasabi_seeds"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (6)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (315 entries)
+  "advancedperipherals:block_reader"
+  "advancedperipherals:chat_box"
+  "advancedperipherals:colony_integrator"
+  "advancedperipherals:energy_detector"
+  "advancedperipherals:environment_detector"
+  "advancedperipherals:geo_scanner"
+  "advancedperipherals:inventory_manager"
+  "advancedperipherals:me_bridge"
+  "advancedperipherals:nbt_storage"
+  "advancedperipherals:peripheral_casing"
+  "advancedperipherals:player_detector"
+  "advancedperipherals:redstone_integrator"
   ... (17951 entries)
+  "computercraft:redstone_relay"
   ... (3714 entries)
+  "immersiveengineering:aluminum_hanging_sign"
+  "immersiveengineering:aluminum_sign"
+  "immersiveengineering:aluminum_wall_hanging_sign"
+  "immersiveengineering:aluminum_wall_sign"
   ... (282 entries)
+  "immersiveengineering:steel_hanging_sign"
   ... (4 entries)
+  "immersiveengineering:steel_sign"
   ... (2 entries)
+  "immersiveengineering:steel_wall_hanging_sign"
+  "immersiveengineering:steel_wall_sign"
   ... (29 entries)
+  "immersiveengineering:treated_wood_hanging_sign"
   ... (2 entries)
+  "immersiveengineering:treated_wood_sign"
   ... (1 entries)
+  "immersiveengineering:treated_wood_wall_hanging_sign"
+  "immersiveengineering:treated_wood_wall_sign"
   ... (17618 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (51 entries)
+  "advancedperipherals:block_reader"
+  "advancedperipherals:chat_box"
+  "advancedperipherals:colony_integrator"
+  "advancedperipherals:energy_detector"
+  "advancedperipherals:environment_detector"
+  "advancedperipherals:geo_scanner"
+  "advancedperipherals:inventory_manager"
+  "advancedperipherals:me_bridge"
+  "advancedperipherals:nbt_storage"
+  "advancedperipherals:player_detector"
+  "advancedperipherals:redstone_integrator"
   ... (222 entries)
+  "computercraft:redstone_relay"
   ... (389 entries)
+  "immersiveengineering:hanging_sign"
   ... (34 entries)
+  "immersiveengineering:sign"
   ... (1248 entries)
 ]

```


</details>

<details>
<summary>enchantment</summary>

```diff
 [
   ... (11 entries)
-  "apothic_enchanting:miners_fervor"
   ... (105 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (441 entries)
+  "advancedperipherals:block_reader"
+  "advancedperipherals:chat_box"
+  "advancedperipherals:chunk_controller"
+  "advancedperipherals:colony_integrator"
+  "advancedperipherals:computer_tool"
+  "advancedperipherals:end_automata_core"
+  "advancedperipherals:energy_detector"
+  "advancedperipherals:environment_detector"
+  "advancedperipherals:geo_scanner"
+  "advancedperipherals:husbandry_automata_core"
+  "advancedperipherals:inventory_manager"
+  "advancedperipherals:me_bridge"
+  "advancedperipherals:memory_card"
+  "advancedperipherals:nbt_storage"
+  "advancedperipherals:overpowered_end_automata_core"
+  "advancedperipherals:overpowered_husbandry_automata_core"
+  "advancedperipherals:overpowered_weak_automata_core"
+  "advancedperipherals:peripheral_casing"
+  "advancedperipherals:player_detector"
+  "advancedperipherals:redstone_integrator"
+  "advancedperipherals:weak_automata_core"
   ... (2973 entries)
+  "ars_nouveau:ars_stencil"
   ... (142 entries)
+  "ars_nouveau:glyph_wind_burst"
   ... (19985 entries)
+  "computercraft:redstone_relay"
   ... (4519 entries)
+  "immersiveengineering:aluminum_hanging_sign"
+  "immersiveengineering:aluminum_sign"
   ... (487 entries)
+  "immersiveengineering:steel_hanging_sign"
   ... (4 entries)
+  "immersiveengineering:steel_sign"
   ... (61 entries)
+  "immersiveengineering:treated_wood_hanging_sign"
   ... (2 entries)
+  "immersiveengineering:treated_wood_sign"
   ... (19943 entries)
+  "sophisticatedbackpacks:sawmill/sawmill_upgrade"
   ... (114 entries)
+  "sophisticatedstorage:sawmill/sawmill_upgrade"
   ... (3578 entries)
 ]

```


</details>

<details>
<summary>villager_profession</summary>

```diff
 [
   ... (1 entries)
+  "advancedperipherals:computer_scientist"
   ... (32 entries)
 ]

```


</details>

<details>
<summary>worldgen/structure</summary>

```diff
 [
   ... (344 entries)
-  "mns:large_house_1"
   ... (481 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (41)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/block_reader</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:block_reader"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/block_reader"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/chat_box</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:chat_box"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/chat_box"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/colony_integrator</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:colony_integrator"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/colony_integrator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/energy_detector</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:energy_detector"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/energy_detector"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/environment_detector</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:environment_detector"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/environment_detector"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/geo_scanner</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:geo_scanner"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/geo_scanner"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/inventory_manager</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:inventory_manager"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/inventory_manager"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/me_bridge</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:me_bridge"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/me_bridge"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/nbt_storage</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:nbt_storage"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/nbt_storage"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/peripheral_casing</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:peripheral_casing"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/peripheral_casing"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/player_detector</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:player_detector"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/player_detector"
+}

```


</details>

<details>
<summary>minecraft/loot_table/advancedperipherals/blocks/redstone_integrator</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "advancedperipherals:redstone_integrator"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "advancedperipherals:blocks/redstone_integrator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/computercraft/blocks/redstone_relay</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "computercraft:redstone_relay"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "computercraft:blocks/redstone_relay"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/aluminum_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:aluminum_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/aluminum_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/aluminum_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:aluminum_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/aluminum_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/aluminum_wall_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:aluminum_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/aluminum_wall_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/aluminum_wall_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:aluminum_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/aluminum_wall_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/steel_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:steel_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/steel_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/steel_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:steel_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/steel_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/steel_wall_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:steel_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/steel_wall_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/steel_wall_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:steel_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/steel_wall_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/treated_wood_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:treated_wood_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/treated_wood_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/treated_wood_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:treated_wood_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/treated_wood_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/treated_wood_wall_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:treated_wood_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/treated_wood_wall_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/treated_wood_wall_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "immersiveengineering:treated_wood_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/treated_wood_wall_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/black_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:black_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/black_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/blue_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:blue_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/blue_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/brown_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:brown_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/brown_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/cyan_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:cyan_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/cyan_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/gray_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:gray_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/gray_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/green_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:green_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/green_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/light_blue_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:light_blue_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/light_blue_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/light_gray_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:light_gray_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/light_gray_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/lime_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:lime_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/lime_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/magenta_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:magenta_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/magenta_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/orange_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:orange_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/orange_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/pink_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:pink_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/pink_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/purple_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:purple_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/purple_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/red_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:red_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/red_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/white_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:white_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/white_foundry_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/yellow_foundry_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              condition: "minecraft:survives_explosion"
+            }
+          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "productivemetalworks:fluid_stack"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "productivemetalworks:yellow_foundry_tank"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "productivemetalworks:blocks/yellow_foundry_tank"
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (17)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/hemp</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "immersiveengineering:seed"
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
         {
           block: "immersiveengineering:hemp"
           condition: "minecraft:block_state_property"
           properties: {
             age: "4"
           }
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "immersiveengineering:hemp_fiber"
         }
       ]
       functions: [
         {
           enchantment: "minecraft:fortune"
           formula: "minecraft:binomial_with_bonus_count"
           function: "minecraft:apply_bonus"
           parameters: {
             extra: 3
             probability: 0.5
           }
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
         {
           block: "immersiveengineering:hemp"
           condition: "minecraft:block_state_property"
           properties: {
-            top: "true"
+            half: "upper"
           }
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "immersiveengineering:hemp_fiber"
         }
       ]
       functions: [
         {
           enchantment: "minecraft:fortune"
           formula: "minecraft:binomial_with_bonus_count"
           function: "minecraft:apply_bonus"
           parameters: {
             extra: 3
             probability: 0.625
           }
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "immersiveengineering:blocks/hemp"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/black_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:black_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/black_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/blue_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:blue_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/blue_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/brown_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:brown_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/brown_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/cyan_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:cyan_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/cyan_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/gray_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:gray_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/gray_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/green_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:green_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/green_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/light_blue_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:light_blue_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/light_blue_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/light_gray_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:light_gray_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/light_gray_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/lime_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:lime_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/lime_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/magenta_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:magenta_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/magenta_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/orange_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:orange_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/orange_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/pink_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:pink_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/pink_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/purple_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:purple_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/purple_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/red_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:red_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/red_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/white_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:white_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/white_foundry_drain"
 }

```


</details>

<details>
<summary>minecraft/loot_table/productivemetalworks/blocks/yellow_foundry_drain</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
-          functions: [
-            {
-              function: "minecraft:copy_components"
-              include: [
-                "productivemetalworks:fluid_stack"
-              ]
-              source: "block_entity"
-            }
-          ]
           type: "minecraft:item"
           conditions: [
             {
               condition: "minecraft:survives_explosion"
             }
           ]
           name: "productivemetalworks:yellow_foundry_drain"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "productivemetalworks:blocks/yellow_foundry_drain"
 }

```


</details>

</blockquote>

</details>

