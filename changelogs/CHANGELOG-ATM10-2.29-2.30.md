# Changelog

# 📦 2.30

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- Additional Entity Attributes (2.0.0+1.21.1)
- Nuggets (1.0.4.35)

</details>

<details>
<summary>Updated (24)</summary>

- All The Arcanist Gear (1.21.1-21.2.0) -> (1.21.1-21.3.0)
- Allthemodium (2.8.8) -> (2.8.9)
- Ars Nouveau (5.3.6) -> (5.4.1)
- Extreme Reactors (1.21.1-2.4.19) -> (1.21.1-2.4.20)
- Bookshelf (21.1.41) -> (21.1.45)
- Crash Assistant (1.2.20) -> (1.3.0)
- Cucumber Library (8.0.8) -> (8.0.9)
- Extended Industrialization (1.11.2-beta-1.21.1) -> (1.11.5-beta-1.21.1)
- FramedBlocks (10.2.3) -> (10.2.4)
- FTB Quests (2101.1.3) -> (2101.1.4)
- Fzzy Config (0.6.2+1.21+neoforge) -> (0.6.3+1.21+neoforge)
- GuideME (2.1.0) -> (2.3.0)
- ImmediatelyFast (1.3.3+1.21.1) -> (1.3.4+1.21.1)
- Iron's Gems 'n Jewelry (1.21.1-1.0.4) -> (1.21.1-1.0.5)
- Journeymap (1.21.1-6.0.0-beta.36) -> (1.21.1-6.0.0-beta.37)
- MEGA Cells (4.6.0) -> (4.6.1)
- ModernFix (5.20.0+mc1.21.1) -> (5.20.2+mc1.21.1)
- Modular Routers (13.2.0) -> (13.2.1)
- MonoLib (1.4.1) -> (2.0.0)
- Moonlight Lib (1.21-2.17.18) -> (1.21-2.17.20)
- Mystical Agriculture (8.0.11) -> (8.0.12)
- NeoForge (21.1.113) -> (21.1.114)
- Silent Gear (4.0.11) -> (4.0.12)
- Variants&Ventures (1.0.8) -> (1.0.9)

</details>

## 🍳 Recipes

<details>
<summary>Added (12)</summary>
<blockquote>

<details>
<summary>allthearcanistgear/apparatus/thread_flight</summary>

```diff
+{
+  type: "ars_nouveau:enchanting_apparatus"
+  keepNbtOfReagent: false
+  pedestalItems: [
+    {
+      item: "ars_nouveau:air_essence"
+    }
+    {
+      item: "minecraft:phantom_membrane"
+    }
+    {
+      item: "ars_nouveau:air_essence"
+    }
+    {
+      item: "minecraft:phantom_membrane"
+    }
+    {
+      item: "ars_nouveau:air_essence"
+    }
+    {
+      item: "minecraft:phantom_membrane"
+    }
+  ]
+  reagent: {
+    item: "ars_nouveau:blank_thread"
+  }
+  result: {
+    count: 1
+    id: "allthearcanistgear:thread_flight"
+  }
+  sourceCost: 0
+}

```


</details>

<details>
<summary>allthearcanistgear/apparatus/thread_spectral_sight</summary>

```diff
+{
+  type: "ars_nouveau:enchanting_apparatus"
+  keepNbtOfReagent: false
+  pedestalItems: [
+    {
+      item: "minecraft:spectral_arrow"
+    }
+    {
+      item: "minecraft:golden_carrot"
+    }
+    {
+      item: "minecraft:glow_ink_sac"
+    }
+  ]
+  reagent: {
+    item: "ars_nouveau:blank_thread"
+  }
+  result: {
+    count: 1
+    id: "allthearcanistgear:thread_spectral_sight"
+  }
+  sourceCost: 0
+}

```


</details>

<details>
<summary>allthearcanistgear/apparatus/thread_truesight</summary>

```diff
+{
+  type: "ars_nouveau:enchanting_apparatus"
+  keepNbtOfReagent: false
+  pedestalItems: [
+    {
+      item: "minecraft:golden_carrot"
+    }
+    {
+      item: "minecraft:golden_carrot"
+    }
+    {
+      item: "minecraft:golden_carrot"
+    }
+  ]
+  reagent: {
+    item: "ars_nouveau:blank_thread"
+  }
+  result: {
+    count: 1
+    id: "allthearcanistgear:thread_truesight"
+  }
+  sourceCost: 0
+}

```


</details>

<details>
<summary>allthearcanistgear/apparatus/thread_vitality</summary>

```diff
+{
+  type: "ars_nouveau:enchanting_apparatus"
+  keepNbtOfReagent: false
+  pedestalItems: [
+    {
+      item: "minecraft:enchanted_golden_apple"
+    }
+    {
+      item: "minecraft:glistering_melon_slice"
+    }
+    {
+      item: "minecraft:glistering_melon_slice"
+    }
+  ]
+  reagent: {
+    item: "ars_nouveau:blank_thread"
+  }
+  result: {
+    count: 1
+    id: "allthearcanistgear:thread_vitality"
+  }
+  sourceCost: 0
+}

```


</details>

<details>
<summary>alltheores/processing/ore_hammer/allthemodium_dust_from_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "allthemodium:allthemodium_dust"
+    count: 1
+  }
+  ingredients: [
+    {
+      tag: "c:ingots/allthemodium"
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
<summary>ars_nouveau/reactive_1</summary>

```diff
+{
+  type: "ars_nouveau:reactive_enchantment"
+  pedestalItems: [
+    {
+      item: "ars_nouveau:spell_parchment"
+    }
+    {
+      tag: "c:storage_blocks/lapis"
+    }
+    {
+      tag: "c:storage_blocks/source"
+    }
+  ]
+  sourceCost: 3000
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/bugcolez_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 180
+    g: 25
+    id: "ars_nouveau:constant"
+    r: 255
+  }
+  flavour_text: "Their Friends are their power!"
+  name: "Pixie Pummel"
+  sound: {
+    pitch: 1.9
+  }
+  spell: [
+    "ars_nouveau:glyph_self"
+    "ars_nouveau:glyph_summon_vex"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>framedblocks/framed_lantern</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    C: {
+      item: "framedblocks:framed_slab_corner"
+    }
+    T: {
+      item: "minecraft:torch"
+    }
+  }
+  pattern: [
+    "CCC"
+    "CTC"
+    "CCC"
+  ]
+  result: {
+    count: 1
+    id: "framedblocks:framed_lantern"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framed_soul_lantern</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    C: {
+      item: "framedblocks:framed_slab_corner"
+    }
+    T: {
+      item: "minecraft:soul_torch"
+    }
+  }
+  pattern: [
+    "CCC"
+    "CTC"
+    "CCC"
+  ]
+  result: {
+    count: 1
+    id: "framedblocks:framed_soul_lantern"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framing_saw/framed_lantern</summary>

```diff
+{
+  type: "framedblocks:frame"
+  additives: [
+    {
+      count: 1
+      ingredient: {
+        item: "minecraft:torch"
+      }
+    }
+  ]
+  material: 6144
+  result: {
+    count: 1
+    id: "framedblocks:framed_lantern"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framing_saw/framed_soul_lantern</summary>

```diff
+{
+  type: "framedblocks:frame"
+  additives: [
+    {
+      count: 1
+      ingredient: {
+        item: "minecraft:soul_torch"
+      }
+    }
+  ]
+  material: 6144
+  result: {
+    count: 1
+    id: "framedblocks:framed_soul_lantern"
+  }
+}

```


</details>

<details>
<summary>megacells/cells/mega_source_cell_housing</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "arseng"
+    }
+  ]
+  type: "ars_nouveau:enchanting_apparatus"
+  keepNbtOfReagent: false
+  pedestalItems: [
+    {
+      item: "ars_nouveau:manipulation_essence"
+    }
+    {
+      item: "ars_nouveau:manipulation_essence"
+    }
+    {
+      item: "ars_nouveau:manipulation_essence"
+    }
+    {
+      item: "ars_nouveau:source_gem_block"
+    }
+    {
+      item: "ars_nouveau:source_gem_block"
+    }
+    {
+      item: "megacells:sky_steel_ingot"
+    }
+    {
+      item: "megacells:sky_steel_ingot"
+    }
+    {
+      item: "megacells:sky_steel_ingot"
+    }
+  ]
+  reagent: {
+    item: "arseng:source_cell_housing"
+  }
+  result: {
+    count: 1
+    id: "megacells:mega_source_cell_housing"
+  }
+  sourceCost: 2000
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (14)</summary>
<blockquote>

<details>
<summary>allthemods/xycraft/extractor/black_ice</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "biomeswevegone:black_sand"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "biomeswevegone:black_sand"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "biomeswevegone:black_sand"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "biomeswevegone:black_sand"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:packed_ice"
   }
   output: {
     count: 1
     id: "biomeswevegone:black_ice"
   }
-  ticks: 80
+  ticks: 40
   catalyst: {
     predicate_type: "xycraft_core:block_rule"
     block: "biomeswevegone:black_sand"
   }
   waterlogged_fluid: "minecraft:water"
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/flux_dust</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
-    block: "minecraft:redstone_block"
+    block: "appflux:charged_redstone_block"
   }
   output: {
     count: 1
     id: "fluxnetworks:flux_dust"
   }
-  ticks: 20
+  ticks: 5
   catalyst: {
     predicate_type: "xycraft_core:block_rule"
     block: "fluxnetworks:flux_block"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/flux_dust_bedrock</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "minecraft:obsidian"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
-    block: "minecraft:redstone_block"
+    block: "appflux:charged_redstone_block"
   }
   output: {
     count: 1
     id: "fluxnetworks:flux_dust"
   }
-  ticks: 20
+  ticks: 5
   catalyst: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:bedrock"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/sculk</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:sculk"
   }
   output: {
     count: 1
     id: "minecraft:sculk"
   }
-  ticks: 200
+  ticks: 50
   catalyst: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:sculk_catalyst"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/spore_blossom</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:moss_block"
   }
   output: {
     count: 1
     id: "minecraft:spore_blossom"
   }
-  ticks: 100
+  ticks: 50
   catalyst: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:spore_blossom"
   }
   waterlogged_fluid: "minecraft:water"
   valid_directions: [
     "down"
   ]
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/xychorium_gem_blue</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_blue"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_blue"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_blue"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_blue"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:obsidian"
   }
   output: {
     count: 1
     id: "xycraft_world:xychorium_gem_blue"
   }
-  ticks: 20
+  ticks: 10
   catalyst: {
     predicate_type: "xycraft_core:fluid_type_rule"
     fluid_type: "minecraft:lava"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/xychorium_gem_dark</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_dark"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_dark"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_dark"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_dark"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:obsidian"
   }
   output: {
     count: 1
     id: "xycraft_world:xychorium_gem_dark"
   }
-  ticks: 20
+  ticks: 10
   catalyst: {
     predicate_type: "xycraft_core:fluid_type_rule"
     fluid_type: "minecraft:lava"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/xychorium_gem_green</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_green"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_green"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_green"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_green"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:obsidian"
   }
   output: {
     count: 1
     id: "xycraft_world:xychorium_gem_green"
   }
-  ticks: 20
+  ticks: 10
   catalyst: {
     predicate_type: "xycraft_core:fluid_type_rule"
     fluid_type: "minecraft:lava"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/xychorium_gem_light</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_light"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_light"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_light"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_light"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:obsidian"
   }
   output: {
     count: 1
     id: "xycraft_world:xychorium_gem_light"
   }
-  ticks: 20
+  ticks: 10
   catalyst: {
     predicate_type: "xycraft_core:fluid_type_rule"
     fluid_type: "minecraft:lava"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/xycraft/extractor/xychorium_gem_red</summary>

```diff
 {
   type: "xycraft_machines:extractor"
   adjacent: [
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_red"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_red"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_red"
     }
     {
       predicate_type: "xycraft_core:block_rule"
       block: "xycraft_world:xychorium_storage_red"
     }
   ]
   target: {
     predicate_type: "xycraft_core:block_rule"
     block: "minecraft:obsidian"
   }
   output: {
     count: 1
     id: "xycraft_world:xychorium_gem_red"
   }
-  ticks: 20
+  ticks: 10
   catalyst: {
     predicate_type: "xycraft_core:fluid_type_rule"
     fluid_type: "minecraft:lava"
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>ars_nouveau/alakarkinos/ocean_ruins_cold</summary>

```diff
 {
   type: "ars_nouveau:alakarkinos_conversion"
   input: "minecraft:gravel"
-  table: "minecraft:archaeology/ocean_ruin_warm"
+  table: "minecraft:archaeology/ocean_ruin_cold"
   weight: 25
 }

```


</details>

<details>
<summary>minecraft/crafting_table</summary>

```diff
 {
-  category: "misc"
-  group: "planks"
+  _kubejs_changed_marker: true
   type: "minecraft:crafting_shaped"
   key: {
-    #: {
-      tag: "minecraft:vanilla_planks"
-    }
+    X: {
+      tag: "minecraft:planks"
+    }
   }
   pattern: [
-    "##"
-    "##"
+    "XX"
+    "XX"
   ]
   result: {
     count: 1
     id: "minecraft:crafting_table"
   }
 }

```


</details>

<details>
<summary>mysticalagriculture/soulium_spawner/pig</summary>

```diff
 {
   type: "mysticalagriculture:soulium_spawner"
   neoforge:conditions: [
     {
       type: "mysticalagriculture:crop_enabled"
-      crop: "mysticalagriculture:slime"
+      crop: "mysticalagriculture:pig"
     }
   ]
   input: {
-    item: "mysticalagriculture:slime_essence"
+    item: "mysticalagriculture:pig_essence"
     count: 12
   }
   entities: [
     {
-      entity: "minecraft:slime"
+      entity: "minecraft:pig"
       weight: 1
     }
   ]
 }

```


</details>

<details>
<summary>mysticalagriculture/soulium_spawner/slime</summary>

```diff
 {
   type: "mysticalagriculture:soulium_spawner"
   neoforge:conditions: [
     {
       type: "mysticalagriculture:crop_enabled"
-      crop: "mysticalagriculture:pig"
+      crop: "mysticalagriculture:slime"
     }
   ]
   input: {
-    item: "mysticalagriculture:pig_essence"
+    item: "mysticalagriculture:slime_essence"
     count: 12
   }
   entities: [
     {
-      entity: "minecraft:pig"
+      entity: "minecraft:slime"
       weight: 1
     }
   ]
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (3)</summary>
<blockquote>

<details>
<summary>ars_nouveau/reactive</summary>

```diff
-{
-  type: "ars_nouveau:reactive_enchantment"
-  pedestalItems: [
-    {
-      item: "ars_nouveau:spell_parchment"
-    }
-    {
-      tag: "c:storage_blocks/lapis"
-    }
-    {
-      tag: "c:storage_blocks/source"
-    }
-  ]
-  sourceCost: 3000
-}

```


</details>

<details>
<summary>ars_nouveau/scry_ritual/amethyst_blocks</summary>

```diff
-{
-  type: "ars_nouveau:scry_ritual"
-  augment: "c:storage_blocks/amethyst"
-  highlight: "c:storage_blocks/amethyst"
-}

```


</details>

<details>
<summary>megacells/mega_source_cell_housing</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "arseng"
-    }
-  ]
-  type: "ars_nouveau:enchanting_apparatus"
-  keepNbtOfReagent: false
-  pedestalItems: [
-    {
-      item: "ars_nouveau:manipulation_essence"
-    }
-    {
-      item: "ars_nouveau:manipulation_essence"
-    }
-    {
-      item: "ars_nouveau:manipulation_essence"
-    }
-    {
-      item: "ars_nouveau:source_gem_block"
-    }
-    {
-      item: "ars_nouveau:source_gem_block"
-    }
-    {
-      item: "megacells:sky_steel_ingot"
-    }
-    {
-      item: "megacells:sky_steel_ingot"
-    }
-    {
-      item: "megacells:sky_steel_ingot"
-    }
-  ]
-  reagent: {
-    item: "arseng:source_cell_housing"
-  }
-  result: {
-    count: 1
-    id: "megacells:mega_source_cell_housing"
-  }
-  sourceCost: 2000
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>minecraft:block/modularrouters:camo_blacklist</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:damage_type/additionalentityattributes:is_magic</summary>

```diff
+[
+  "#minecraft:witch_resistant_to"
+]

```


</details>

<details>
<summary>minecraft:entity_type/additionalentityattributes:affected_by_collection_range</summary>

```diff
+[
+  "minecraft:arrow"
+  "minecraft:experience_orb"
+  "minecraft:item"
+  "minecraft:trident"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (5)</summary>
<blockquote>

<details>
<summary>minecraft:block/allthemodium:blocks/blocklist</summary>

```diff
 [
   ... (107 entries)
-  "alltheores:other_coal_ore"
-  "alltheores:other_copper_ore"
-  "alltheores:other_diamond_ore"
-  "alltheores:other_emerald_ore"
-  "alltheores:other_gold_ore"
   ... (1 entries)
-  "alltheores:other_iron_ore"
-  "alltheores:other_lapis_ore"
   ... (4 entries)
-  "alltheores:other_quartz_ore"
-  "alltheores:other_redstone_ore"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (1214 entries)
+  "framedblocks:framed_lantern"
   ... (48 entries)
+  "framedblocks:framed_soul_lantern"
   ... (4156 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/tombstone:has_structure/abandoned_grave_land</summary>

```diff
 [
-  "#minecraft:is_overworld"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/tombstone:has_structure/abandoned_grave_ocean</summary>

```diff
 [
-  "#minecraft:is_ocean"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure/tombstone:abandoned_grave</summary>

```diff
 [
+  "tombstone:abandoned_grave_land"
+  "tombstone:abandoned_grave_ocean"
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (21177 entries)
+  "framedblocks:framed_lantern"
   ... (48 entries)
+  "framedblocks:framed_soul_lantern"
   ... (18449 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (822 entries)
+  "allthearcanistgear:thread_flight"
+  "allthearcanistgear:thread_spectral_sight"
+  "allthearcanistgear:thread_truesight"
+  "allthearcanistgear:thread_vitality"
   ... (26306 entries)
+  "framedblocks:framed_lantern"
   ... (42 entries)
+  "framedblocks:framed_soul_lantern"
   ... (24788 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/framedblocks/blocks/framed_lantern</summary>

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
+              conditions: [
+                {
+                  condition: "framedblocks:non_trivial_camo"
+                }
+              ]
+              function: "minecraft:copy_components"
+              include: [
+                "framedblocks:camo_list"
+              ]
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "framedblocks:framed_lantern"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "framedblocks:blocks/framed_lantern"
+}

```


</details>

<details>
<summary>minecraft/loot_table/framedblocks/blocks/framed_soul_lantern</summary>

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
+              conditions: [
+                {
+                  condition: "framedblocks:non_trivial_camo"
+                }
+              ]
+              function: "minecraft:copy_components"
+              include: [
+                "framedblocks:camo_list"
+              ]
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "framedblocks:framed_soul_lantern"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "framedblocks:blocks/framed_soul_lantern"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/mysticalagriculture/blocks/soulstone</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       name: "mysticalagriculture:soulstone"
       rolls: 1
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               name: "mysticalagriculture:soulstone"
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    minecraft:enchantments: [
-                      {
-                        enchantments: "minecraft:silk_touch"
-                        levels: {
-                          min: 1
-                        }
-                      }
-                    ]
+                    predicates: {
+                      minecraft:enchantments: [
+                        {
+                          enchantments: "minecraft:silk_touch"
+                          levels: {
+                            min: 1
+                          }
+                        }
+                      ]
+                    }
                   }
                 }
               ]
             }
             {
               name: "mysticalagriculture:soulstone_cobble"
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:survives_explosion"
                 }
               ]
             }
           ]
         }
       ]
     }
   ]
 }

```


</details>

</blockquote>

</details>

