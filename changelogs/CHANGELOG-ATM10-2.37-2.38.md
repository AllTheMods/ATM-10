# Changelog

# 📦 2.38

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (10)</summary>

- Forbidden Arcanus (2.5.13) -> (2.5.12)
- FramedBlocks (10.2.4) -> (10.2.5)
- Macaw's Paths and Pavings (1.0.5) -> (1.1.0)
- Mekanism (10.7.9) -> (10.7.10)
- Mekanism: Generators (10.7.9) -> (10.7.10)
- Mekanism: Tools (10.7.9) -> (10.7.10)
- NeoForge (21.1.123) -> (21.1.125)
- Relics (0.10.5.3) -> (0.10.5.4)
- The Bumblezone (7.7.19+1.21.1-neoforge) -> (7.7.20+1.21.1-neoforge)
- Jonn's Trophies (1.21.1-2.2.0) -> (1.21.1-2.2.1)

</details>

## 🍳 Recipes

<details>
<summary>Added (64)</summary>
<blockquote>

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
<summary>framedblocks/framed_corner_tube</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    T: {
+      item: "framedblocks:framed_tube"
+    }
+  }
+  pattern: [
+    "TT"
+    "T "
+  ]
+  result: {
+    count: 3
+    id: "framedblocks:framed_corner_tube"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framed_double_panel</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    F: {
+      item: "framedblocks:framed_panel"
+    }
+  }
+  pattern: [
+    "FF"
+  ]
+  result: {
+    count: 1
+    id: "framedblocks:framed_double_panel"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framed_double_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    F: {
+      item: "framedblocks:framed_slab"
+    }
+  }
+  pattern: [
+    "F"
+    "F"
+  ]
+  result: {
+    count: 1
+    id: "framedblocks:framed_double_slab"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framing_saw/framed_corner_tube</summary>

```diff
+{
+  type: "framedblocks:frame"
+  material: 6144
+  result: {
+    count: 1
+    id: "framedblocks:framed_corner_tube"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framing_saw/framed_double_panel</summary>

```diff
+{
+  type: "framedblocks:frame"
+  material: 6144
+  result: {
+    count: 1
+    id: "framedblocks:framed_double_panel"
+  }
+}

```


</details>

<details>
<summary>framedblocks/framing_saw/framed_double_slab</summary>

```diff
+{
+  type: "framedblocks:frame"
+  material: 6144
+  result: {
+    count: 1
+    id: "framedblocks:framed_double_slab"
+  }
+}

```


</details>

<details>
<summary>mcwpaths/andesite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:andesite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:andesite_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/andesite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:andesite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:andesite_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/andesite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:andesite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:andesite_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/andesite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:andesite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:andesite_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/blackstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:blackstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:blackstone_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/blackstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:blackstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:blackstone_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/blackstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:blackstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:blackstone_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/blackstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:blackstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:blackstone_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/brick_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:brick_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/brick_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:brick_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/brick_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:brick_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/brick_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:brick_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:cobbled_deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:cobbled_deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:cobbled_deepslate_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:cobbled_deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:cobbled_deepslate_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:cobbled_deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:dark_prismarine"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:dark_prismarine_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:dark_prismarine"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:dark_prismarine_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:dark_prismarine"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:dark_prismarine_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:dark_prismarine"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:dark_prismarine_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/deepslate_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:deepslate_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/deepslate_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:deepslate_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/deepslate_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:deepslate_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/deepslate_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:deepslate"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:deepslate_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/diorite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:diorite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:diorite_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/diorite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:diorite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:diorite_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/diorite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:diorite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:diorite_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/diorite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:diorite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:diorite_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/dirt_path_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:dirt"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:dirt_path_block"
+  }
+  group: "blocks"
+}

```


</details>

<details>
<summary>mcwpaths/granite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:granite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:granite_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/granite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:granite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:granite_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/granite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:granite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:granite_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/granite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:granite"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:granite_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/gravel_path_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:gravel"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:gravel_path_block"
+  }
+  group: "blocks"
+}

```


</details>

<details>
<summary>mcwpaths/mossy_stone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mossy_stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mossy_stone_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mossy_stone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mossy_stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mossy_stone_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mossy_stone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mossy_stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mossy_stone_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mossy_stone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mossy_stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mossy_stone_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mud_brick_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mud_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mud_brick_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mud_brick_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mud_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mud_brick_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mud_brick_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mud_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mud_brick_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/mud_brick_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:mud_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:mud_brick_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/podzol_path_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:podzol"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:podzol_path_block"
+  }
+  group: "blocks"
+}

```


</details>

<details>
<summary>mcwpaths/red_sand_path_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:red_sand"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:red_sand_path_block"
+  }
+  group: "blocks"
+}

```


</details>

<details>
<summary>mcwpaths/red_sandstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:red_sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:red_sandstone_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/red_sandstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:red_sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:red_sandstone_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/red_sandstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:red_sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:red_sandstone_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/red_sandstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:red_sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:red_sandstone_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/sand_path_block</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:sand"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:sand_path_block"
+  }
+  group: "blocks"
+}

```


</details>

<details>
<summary>mcwpaths/sandstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:sandstone_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/sandstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:sandstone_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/sandstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:sandstone_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/sandstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:sandstone"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:sandstone_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/stone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:stone_crystal_floor_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/stone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:stone_flagstone_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/stone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:stone_running_bond_stairs"
+  }
+  group: "stairs"
+}

```


</details>

<details>
<summary>mcwpaths/stone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "minecraft:stone_bricks"
+  }
+  result: {
+    count: 1
+    id: "mcwpaths:stone_windmill_weave_stairs"
+  }
+  group: "stairs"
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (258)</summary>
<blockquote>

<details>
<summary>mcwpaths/acacia_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:acacia_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:acacia_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/andesite_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 1
     id: "mcwpaths:andesite_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 2
     id: "mcwpaths:andesite_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 1
     id: "mcwpaths:andesite_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 2
     id: "mcwpaths:andesite_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 1
     id: "mcwpaths:andesite_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 2
     id: "mcwpaths:andesite_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 1
     id: "mcwpaths:andesite_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 4
     id: "mcwpaths:andesite_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/andesite_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:andesite"
   }
   result: {
     count: 2
     id: "mcwpaths:andesite_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/bamboo_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:bamboo_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:bamboo_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/birch_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:birch_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:birch_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 1
     id: "mcwpaths:blackstone_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 2
     id: "mcwpaths:blackstone_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 1
     id: "mcwpaths:blackstone_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 2
     id: "mcwpaths:blackstone_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 1
     id: "mcwpaths:blackstone_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 2
     id: "mcwpaths:blackstone_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 1
     id: "mcwpaths:blackstone_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 4
     id: "mcwpaths:blackstone_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/blackstone_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:blackstone"
   }
   result: {
     count: 2
     id: "mcwpaths:blackstone_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/brick_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:brick_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/brick_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:brick_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/brick_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:brick_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/brick_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:brick_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/brick_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:brick_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/brick_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:brick_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/brick_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:brick_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/brick_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:brick_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/brick_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:brick_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/cherry_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:cherry_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:cherry_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:cobbled_deepslate_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:cobbled_deepslate_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:cobbled_deepslate_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:cobbled_deepslate_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:cobbled_deepslate_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:cobbled_deepslate_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:cobbled_deepslate_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:cobbled_deepslate_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobbled_deepslate_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobbled_deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:cobbled_deepslate_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/cobblestone_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:cobblestone_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/crimson_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:crimson_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:crimson_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/dark_oak_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:dark_oak_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:dark_oak_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 1
     id: "mcwpaths:dark_prismarine_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 2
     id: "mcwpaths:dark_prismarine_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 1
     id: "mcwpaths:dark_prismarine_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 2
     id: "mcwpaths:dark_prismarine_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 1
     id: "mcwpaths:dark_prismarine_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 2
     id: "mcwpaths:dark_prismarine_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 1
     id: "mcwpaths:dark_prismarine_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 4
     id: "mcwpaths:dark_prismarine_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/dark_prismarine_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:dark_prismarine"
   }
   result: {
     count: 2
     id: "mcwpaths:dark_prismarine_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:deepslate_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:deepslate_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:deepslate_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:deepslate_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:deepslate_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:deepslate_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate_tiles"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 1
     id: "mcwpaths:deepslate_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 4
     id: "mcwpaths:deepslate_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/deepslate_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:deepslate"
   }
   result: {
     count: 2
     id: "mcwpaths:deepslate_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 1
     id: "mcwpaths:diorite_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 2
     id: "mcwpaths:diorite_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 1
     id: "mcwpaths:diorite_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 2
     id: "mcwpaths:diorite_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 1
     id: "mcwpaths:diorite_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 2
     id: "mcwpaths:diorite_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 1
     id: "mcwpaths:diorite_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 4
     id: "mcwpaths:diorite_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/diorite_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:diorite"
   }
   result: {
     count: 2
     id: "mcwpaths:diorite_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/granite_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 1
     id: "mcwpaths:granite_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/granite_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 2
     id: "mcwpaths:granite_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/granite_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 1
     id: "mcwpaths:granite_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/granite_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 2
     id: "mcwpaths:granite_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/granite_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 1
     id: "mcwpaths:granite_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/granite_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 2
     id: "mcwpaths:granite_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/granite_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 1
     id: "mcwpaths:granite_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/granite_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 4
     id: "mcwpaths:granite_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/granite_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:granite"
   }
   result: {
     count: 2
     id: "mcwpaths:granite_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/jungle_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:jungle_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:jungle_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/mangrove_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:mangrove_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:mangrove_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_cobblestone_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_cobblestone"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_cobblestone_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mossy_stone_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_stone_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mossy_stone_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mossy_stone_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_stone_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mossy_stone_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mossy_stone_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_stone_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mossy_stone_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_stone_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mossy_stone_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mossy_stone_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mossy_stone_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mossy_stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mossy_stone_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mud_brick_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mud_brick_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mud_brick_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mud_brick_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mud_brick_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mud_brick_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:mud_brick_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:mud_brick_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/mud_brick_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:mud_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:mud_brick_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/oak_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:oak_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:oak_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:red_sandstone_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:red_sandstone_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:red_sandstone_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:red_sandstone_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:red_sandstone_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:red_sandstone_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:red_sandstone_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:red_sandstone_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/red_sandstone_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:red_sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:red_sandstone_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_basket_weave_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_basket_weave_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_clover_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_clover_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:sandstone_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:sandstone_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_diamond_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_diamond_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_dumble_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_dumble_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:sandstone_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:sandstone_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_honeycomb_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_honeycomb_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:sandstone_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:sandstone_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_square_paving</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_square_paving"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 1
     id: "mcwpaths:sandstone_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 4
     id: "mcwpaths:sandstone_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/sandstone_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:sandstone"
   }
   result: {
     count: 2
     id: "mcwpaths:sandstone_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/spruce_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:spruce_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:spruce_planks_path"
   }
 }

```


</details>

<details>
<summary>mcwpaths/stone_crystal_floor</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:stone_crystal_floor"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/stone_crystal_floor_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:stone_crystal_floor_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/stone_crystal_floor_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:stone_crystal_floor_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/stone_flagstone</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:stone_flagstone"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/stone_flagstone_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:stone_flagstone_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/stone_flagstone_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:stone_flagstone_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/stone_running_bond</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:stone_running_bond"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/stone_running_bond_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:stone_running_bond_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/stone_running_bond_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:stone_running_bond_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/stone_strewn_rocky_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:stone_strewn_rocky_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/stone_windmill_weave</summary>

```diff
 {
-  count: 1
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 1
     id: "mcwpaths:stone_windmill_weave"
   }
   group: "blocks"
 }

```


</details>

<details>
<summary>mcwpaths/stone_windmill_weave_path</summary>

```diff
 {
-  count: 4
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 4
     id: "mcwpaths:stone_windmill_weave_path"
   }
   group: "paths"
 }

```


</details>

<details>
<summary>mcwpaths/stone_windmill_weave_slab</summary>

```diff
 {
-  count: 2
   type: "minecraft:stonecutting"
   ingredient: {
     item: "minecraft:stone_bricks"
   }
   result: {
     count: 2
     id: "mcwpaths:stone_windmill_weave_slab"
   }
   group: "slabs"
 }

```


</details>

<details>
<summary>mcwpaths/warped_planks_path</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
-  group: "woodenpaths"
+  group: "wooden_paths"
   ingredients: [
     {
       item: "minecraft:warped_slab"
     }
   ]
   result: {
     count: 3
     id: "mcwpaths:warped_planks_path"
   }
 }

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (7)</summary>
<blockquote>

<details>
<summary>minecraft:block/mcwpaths:path_stairs</summary>

```diff
+[
+  "mcwpaths:andesite_crystal_floor_stairs"
+  "mcwpaths:andesite_flagstone_stairs"
+  "mcwpaths:andesite_running_bond_stairs"
+  "mcwpaths:andesite_windmill_weave_stairs"
+  "mcwpaths:blackstone_crystal_floor_stairs"
+  "mcwpaths:blackstone_flagstone_stairs"
+  "mcwpaths:blackstone_running_bond_stairs"
+  "mcwpaths:blackstone_windmill_weave_stairs"
+  "mcwpaths:brick_crystal_floor_stairs"
+  "mcwpaths:brick_flagstone_stairs"
+  "mcwpaths:brick_running_bond_stairs"
+  "mcwpaths:brick_windmill_weave_stairs"
+  "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
+  "mcwpaths:cobbled_deepslate_flagstone_stairs"
+  "mcwpaths:cobbled_deepslate_running_bond_stairs"
+  "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
+  "mcwpaths:dark_prismarine_crystal_floor_stairs"
+  "mcwpaths:dark_prismarine_flagstone_stairs"
+  "mcwpaths:dark_prismarine_running_bond_stairs"
+  "mcwpaths:dark_prismarine_windmill_weave_stairs"
+  "mcwpaths:deepslate_crystal_floor_stairs"
+  "mcwpaths:deepslate_flagstone_stairs"
+  "mcwpaths:deepslate_running_bond_stairs"
+  "mcwpaths:deepslate_windmill_weave_stairs"
+  "mcwpaths:diorite_crystal_floor_stairs"
+  "mcwpaths:diorite_flagstone_stairs"
+  "mcwpaths:diorite_running_bond_stairs"
+  "mcwpaths:diorite_windmill_weave_stairs"
+  "mcwpaths:granite_crystal_floor_stairs"
+  "mcwpaths:granite_flagstone_stairs"
+  "mcwpaths:granite_running_bond_stairs"
+  "mcwpaths:granite_windmill_weave_stairs"
+  "mcwpaths:mossy_stone_crystal_floor_stairs"
+  "mcwpaths:mossy_stone_flagstone_stairs"
+  "mcwpaths:mossy_stone_running_bond_stairs"
+  "mcwpaths:mossy_stone_windmill_weave_stairs"
+  "mcwpaths:mud_brick_crystal_floor_stairs"
+  "mcwpaths:mud_brick_flagstone_stairs"
+  "mcwpaths:mud_brick_running_bond_stairs"
+  "mcwpaths:mud_brick_windmill_weave_stairs"
+  "mcwpaths:red_sandstone_crystal_floor_stairs"
+  "mcwpaths:red_sandstone_flagstone_stairs"
+  "mcwpaths:red_sandstone_running_bond_stairs"
+  "mcwpaths:red_sandstone_windmill_weave_stairs"
+  "mcwpaths:sandstone_crystal_floor_stairs"
+  "mcwpaths:sandstone_flagstone_stairs"
+  "mcwpaths:sandstone_running_bond_stairs"
+  "mcwpaths:sandstone_windmill_weave_stairs"
+  "mcwpaths:stone_crystal_floor_stairs"
+  "mcwpaths:stone_flagstone_stairs"
+  "mcwpaths:stone_running_bond_stairs"
+  "mcwpaths:stone_windmill_weave_stairs"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:slab_paths</summary>

```diff
+[
+  "mcwpaths:andesite_crystal_floor_slab"
+  "mcwpaths:andesite_flagstone_slab"
+  "mcwpaths:andesite_running_bond_slab"
+  "mcwpaths:andesite_windmill_weave_slab"
+  "mcwpaths:blackstone_crystal_floor_slab"
+  "mcwpaths:blackstone_flagstone_slab"
+  "mcwpaths:blackstone_running_bond_slab"
+  "mcwpaths:blackstone_windmill_weave_slab"
+  "mcwpaths:brick_crystal_floor_slab"
+  "mcwpaths:brick_flagstone_slab"
+  "mcwpaths:brick_running_bond_slab"
+  "mcwpaths:brick_windmill_weave_slab"
+  "mcwpaths:cobbled_deepslate_crystal_floor_slab"
+  "mcwpaths:cobbled_deepslate_flagstone_slab"
+  "mcwpaths:cobbled_deepslate_running_bond_slab"
+  "mcwpaths:cobbled_deepslate_windmill_weave_slab"
+  "mcwpaths:dark_prismarine_crystal_floor_slab"
+  "mcwpaths:dark_prismarine_flagstone_slab"
+  "mcwpaths:dark_prismarine_running_bond_slab"
+  "mcwpaths:dark_prismarine_windmill_weave_slab"
+  "mcwpaths:deepslate_crystal_floor_slab"
+  "mcwpaths:deepslate_flagstone_slab"
+  "mcwpaths:deepslate_running_bond_slab"
+  "mcwpaths:deepslate_windmill_weave_slab"
+  "mcwpaths:diorite_crystal_floor_slab"
+  "mcwpaths:diorite_flagstone_slab"
+  "mcwpaths:diorite_running_bond_slab"
+  "mcwpaths:diorite_windmill_weave_slab"
+  "mcwpaths:granite_crystal_floor_slab"
+  "mcwpaths:granite_flagstone_slab"
+  "mcwpaths:granite_running_bond_slab"
+  "mcwpaths:granite_windmill_weave_slab"
+  "mcwpaths:mossy_stone_crystal_floor_slab"
+  "mcwpaths:mossy_stone_flagstone_slab"
+  "mcwpaths:mossy_stone_running_bond_slab"
+  "mcwpaths:mossy_stone_windmill_weave_slab"
+  "mcwpaths:mud_brick_crystal_floor_slab"
+  "mcwpaths:mud_brick_flagstone_slab"
+  "mcwpaths:mud_brick_running_bond_slab"
+  "mcwpaths:mud_brick_windmill_weave_slab"
+  "mcwpaths:red_sandstone_crystal_floor_slab"
+  "mcwpaths:red_sandstone_flagstone_slab"
+  "mcwpaths:red_sandstone_running_bond_slab"
+  "mcwpaths:red_sandstone_windmill_weave_slab"
+  "mcwpaths:sandstone_crystal_floor_slab"
+  "mcwpaths:sandstone_flagstone_slab"
+  "mcwpaths:sandstone_running_bond_slab"
+  "mcwpaths:sandstone_windmill_weave_slab"
+  "mcwpaths:stone_crystal_floor_slab"
+  "mcwpaths:stone_flagstone_slab"
+  "mcwpaths:stone_running_bond_slab"
+  "mcwpaths:stone_windmill_weave_slab"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:soil_paths</summary>

```diff
+[
+  "mcwpaths:dirt_path_block"
+  "mcwpaths:gravel_path_block"
+  "mcwpaths:podzol_path_block"
+  "mcwpaths:red_sand_path_block"
+  "mcwpaths:sand_path_block"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:stone_engraved_blocks</summary>

```diff
+[
+  "mcwpaths:andesite_crystal_floor"
+  "mcwpaths:andesite_flagstone"
+  "mcwpaths:andesite_running_bond"
+  "mcwpaths:andesite_windmill_weave"
+  "mcwpaths:blackstone_crystal_floor"
+  "mcwpaths:blackstone_flagstone"
+  "mcwpaths:blackstone_running_bond"
+  "mcwpaths:blackstone_windmill_weave"
+  "mcwpaths:brick_crystal_floor"
+  "mcwpaths:brick_flagstone"
+  "mcwpaths:brick_running_bond"
+  "mcwpaths:brick_windmill_weave"
+  "mcwpaths:cobbled_deepslate_crystal_floor"
+  "mcwpaths:cobbled_deepslate_flagstone"
+  "mcwpaths:cobbled_deepslate_running_bond"
+  "mcwpaths:cobbled_deepslate_windmill_weave"
+  "mcwpaths:dark_prismarine_crystal_floor"
+  "mcwpaths:dark_prismarine_flagstone"
+  "mcwpaths:dark_prismarine_running_bond"
+  "mcwpaths:dark_prismarine_windmill_weave"
+  "mcwpaths:deepslate_crystal_floor"
+  "mcwpaths:deepslate_flagstone"
+  "mcwpaths:deepslate_running_bond"
+  "mcwpaths:deepslate_windmill_weave"
+  "mcwpaths:diorite_crystal_floor"
+  "mcwpaths:diorite_flagstone"
+  "mcwpaths:diorite_running_bond"
+  "mcwpaths:diorite_windmill_weave"
+  "mcwpaths:granite_crystal_floor"
+  "mcwpaths:granite_flagstone"
+  "mcwpaths:granite_running_bond"
+  "mcwpaths:granite_windmill_weave"
+  "mcwpaths:mossy_stone_crystal_floor"
+  "mcwpaths:mossy_stone_flagstone"
+  "mcwpaths:mossy_stone_running_bond"
+  "mcwpaths:mossy_stone_windmill_weave"
+  "mcwpaths:mud_brick_crystal_floor"
+  "mcwpaths:mud_brick_flagstone"
+  "mcwpaths:mud_brick_running_bond"
+  "mcwpaths:mud_brick_windmill_weave"
+  "mcwpaths:red_sandstone_crystal_floor"
+  "mcwpaths:red_sandstone_flagstone"
+  "mcwpaths:red_sandstone_running_bond"
+  "mcwpaths:red_sandstone_windmill_weave"
+  "mcwpaths:sandstone_crystal_floor"
+  "mcwpaths:sandstone_flagstone"
+  "mcwpaths:sandstone_running_bond"
+  "mcwpaths:sandstone_windmill_weave"
+  "mcwpaths:stone_crystal_floor"
+  "mcwpaths:stone_flagstone"
+  "mcwpaths:stone_running_bond"
+  "mcwpaths:stone_windmill_weave"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:stone_paths</summary>

```diff
+[
+  "mcwpaths:andesite_crystal_floor_path"
+  "mcwpaths:andesite_flagstone_path"
+  "mcwpaths:andesite_running_bond_path"
+  "mcwpaths:andesite_windmill_weave_path"
+  "mcwpaths:blackstone_crystal_floor_path"
+  "mcwpaths:blackstone_flagstone_path"
+  "mcwpaths:blackstone_running_bond_path"
+  "mcwpaths:blackstone_windmill_weave_path"
+  "mcwpaths:brick_crystal_floor_path"
+  "mcwpaths:brick_flagstone_path"
+  "mcwpaths:brick_running_bond_path"
+  "mcwpaths:brick_windmill_weave_path"
+  "mcwpaths:cobbled_deepslate_crystal_floor_path"
+  "mcwpaths:cobbled_deepslate_flagstone_path"
+  "mcwpaths:cobbled_deepslate_running_bond_path"
+  "mcwpaths:cobbled_deepslate_windmill_weave_path"
+  "mcwpaths:dark_prismarine_crystal_floor_path"
+  "mcwpaths:dark_prismarine_flagstone_path"
+  "mcwpaths:dark_prismarine_running_bond_path"
+  "mcwpaths:dark_prismarine_windmill_weave_path"
+  "mcwpaths:deepslate_crystal_floor_path"
+  "mcwpaths:deepslate_flagstone_path"
+  "mcwpaths:deepslate_running_bond_path"
+  "mcwpaths:deepslate_windmill_weave_path"
+  "mcwpaths:diorite_crystal_floor_path"
+  "mcwpaths:diorite_flagstone_path"
+  "mcwpaths:diorite_running_bond_path"
+  "mcwpaths:diorite_windmill_weave_path"
+  "mcwpaths:granite_crystal_floor_path"
+  "mcwpaths:granite_flagstone_path"
+  "mcwpaths:granite_running_bond_path"
+  "mcwpaths:granite_windmill_weave_path"
+  "mcwpaths:mossy_stone_crystal_floor_path"
+  "mcwpaths:mossy_stone_flagstone_path"
+  "mcwpaths:mossy_stone_running_bond_path"
+  "mcwpaths:mossy_stone_windmill_weave_path"
+  "mcwpaths:mud_brick_crystal_floor_path"
+  "mcwpaths:mud_brick_flagstone_path"
+  "mcwpaths:mud_brick_running_bond_path"
+  "mcwpaths:mud_brick_windmill_weave_path"
+  "mcwpaths:red_sandstone_crystal_floor_path"
+  "mcwpaths:red_sandstone_flagstone_path"
+  "mcwpaths:red_sandstone_running_bond_path"
+  "mcwpaths:red_sandstone_windmill_weave_path"
+  "mcwpaths:sandstone_crystal_floor_path"
+  "mcwpaths:sandstone_flagstone_path"
+  "mcwpaths:sandstone_running_bond_path"
+  "mcwpaths:sandstone_windmill_weave_path"
+  "mcwpaths:stone_crystal_floor_path"
+  "mcwpaths:stone_flagstone_path"
+  "mcwpaths:stone_running_bond_path"
+  "mcwpaths:stone_windmill_weave_path"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:stone_pavings</summary>

```diff
+[
+  "mcwpaths:andesite_basket_weave_paving"
+  "mcwpaths:andesite_clover_paving"
+  "mcwpaths:andesite_diamond_paving"
+  "mcwpaths:andesite_dumble_paving"
+  "mcwpaths:andesite_honeycomb_paving"
+  "mcwpaths:andesite_square_paving"
+  "mcwpaths:andesite_strewn_rocky_path"
+  "mcwpaths:blackstone_basket_weave_paving"
+  "mcwpaths:blackstone_clover_paving"
+  "mcwpaths:blackstone_diamond_paving"
+  "mcwpaths:blackstone_dumble_paving"
+  "mcwpaths:blackstone_honeycomb_paving"
+  "mcwpaths:blackstone_square_paving"
+  "mcwpaths:blackstone_strewn_rocky_path"
+  "mcwpaths:brick_basket_weave_paving"
+  "mcwpaths:brick_clover_paving"
+  "mcwpaths:brick_diamond_paving"
+  "mcwpaths:brick_dumble_paving"
+  "mcwpaths:brick_honeycomb_paving"
+  "mcwpaths:brick_square_paving"
+  "mcwpaths:brick_strewn_rocky_path"
+  "mcwpaths:cobbled_deepslate_basket_weave_paving"
+  "mcwpaths:cobbled_deepslate_clover_paving"
+  "mcwpaths:cobbled_deepslate_diamond_paving"
+  "mcwpaths:cobbled_deepslate_dumble_paving"
+  "mcwpaths:cobbled_deepslate_honeycomb_paving"
+  "mcwpaths:cobbled_deepslate_square_paving"
+  "mcwpaths:cobbled_deepslate_strewn_rocky_path"
+  "mcwpaths:cobblestone_basket_weave_paving"
+  "mcwpaths:cobblestone_clover_paving"
+  "mcwpaths:cobblestone_diamond_paving"
+  "mcwpaths:cobblestone_dumble_paving"
+  "mcwpaths:cobblestone_honeycomb_paving"
+  "mcwpaths:cobblestone_square_paving"
+  "mcwpaths:dark_prismarine_basket_weave_paving"
+  "mcwpaths:dark_prismarine_clover_paving"
+  "mcwpaths:dark_prismarine_diamond_paving"
+  "mcwpaths:dark_prismarine_dumble_paving"
+  "mcwpaths:dark_prismarine_honeycomb_paving"
+  "mcwpaths:dark_prismarine_square_paving"
+  "mcwpaths:dark_prismarine_strewn_rocky_path"
+  "mcwpaths:deepslate_basket_weave_paving"
+  "mcwpaths:deepslate_clover_paving"
+  "mcwpaths:deepslate_diamond_paving"
+  "mcwpaths:deepslate_dumble_paving"
+  "mcwpaths:deepslate_honeycomb_paving"
+  "mcwpaths:deepslate_square_paving"
+  "mcwpaths:deepslate_strewn_rocky_path"
+  "mcwpaths:diorite_basket_weave_paving"
+  "mcwpaths:diorite_clover_paving"
+  "mcwpaths:diorite_diamond_paving"
+  "mcwpaths:diorite_dumble_paving"
+  "mcwpaths:diorite_honeycomb_paving"
+  "mcwpaths:diorite_square_paving"
+  "mcwpaths:diorite_strewn_rocky_path"
+  "mcwpaths:granite_basket_weave_paving"
+  "mcwpaths:granite_clover_paving"
+  "mcwpaths:granite_diamond_paving"
+  "mcwpaths:granite_dumble_paving"
+  "mcwpaths:granite_honeycomb_paving"
+  "mcwpaths:granite_square_paving"
+  "mcwpaths:granite_strewn_rocky_path"
+  "mcwpaths:mossy_cobblestone_basket_weave_paving"
+  "mcwpaths:mossy_cobblestone_clover_paving"
+  "mcwpaths:mossy_cobblestone_diamond_paving"
+  "mcwpaths:mossy_cobblestone_dumble_paving"
+  "mcwpaths:mossy_cobblestone_honeycomb_paving"
+  "mcwpaths:mossy_cobblestone_square_paving"
+  "mcwpaths:mossy_stone_strewn_rocky_path"
+  "mcwpaths:mud_brick_basket_weave_paving"
+  "mcwpaths:mud_brick_clover_paving"
+  "mcwpaths:mud_brick_diamond_paving"
+  "mcwpaths:mud_brick_dumble_paving"
+  "mcwpaths:mud_brick_honeycomb_paving"
+  "mcwpaths:mud_brick_square_paving"
+  "mcwpaths:mud_brick_strewn_rocky_path"
+  "mcwpaths:red_sandstone_basket_weave_paving"
+  "mcwpaths:red_sandstone_clover_paving"
+  "mcwpaths:red_sandstone_diamond_paving"
+  "mcwpaths:red_sandstone_dumble_paving"
+  "mcwpaths:red_sandstone_honeycomb_paving"
+  "mcwpaths:red_sandstone_square_paving"
+  "mcwpaths:red_sandstone_strewn_rocky_path"
+  "mcwpaths:sandstone_basket_weave_paving"
+  "mcwpaths:sandstone_clover_paving"
+  "mcwpaths:sandstone_diamond_paving"
+  "mcwpaths:sandstone_dumble_paving"
+  "mcwpaths:sandstone_honeycomb_paving"
+  "mcwpaths:sandstone_square_paving"
+  "mcwpaths:sandstone_strewn_rocky_path"
+  "mcwpaths:stone_strewn_rocky_path"
+]

```


</details>

<details>
<summary>minecraft:block/mcwpaths:wooden_paths</summary>

```diff
+[
+  "mcwpaths:acacia_planks_path"
+  "mcwpaths:bamboo_planks_path"
+  "mcwpaths:birch_planks_path"
+  "mcwpaths:cherry_planks_path"
+  "mcwpaths:crimson_planks_path"
+  "mcwpaths:dark_oak_planks_path"
+  "mcwpaths:jungle_planks_path"
+  "mcwpaths:mangrove_planks_path"
+  "mcwpaths:oak_planks_path"
+  "mcwpaths:spruce_planks_path"
+  "mcwpaths:warped_planks_path"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (5)</summary>
<blockquote>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (1126 entries)
+  "framedblocks:framed_corner_tube"
   ... (4315 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (195 entries)
-  "#forbidden_arcanus:pedestals"
   ... (4118 entries)
+  "forbidden_arcanus:darkstone_pedestal"
   ... (8 entries)
+  "forbidden_arcanus:magnetized_darkstone_pedestal"
   ... (1302 entries)
+  "mcwpaths:andesite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:andesite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:blackstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:brick_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:cobbled_deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
   ... (11 entries)
+  "mcwpaths:dark_prismarine_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:dark_prismarine_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:diorite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:granite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:granite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:granite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:granite_windmill_weave_stairs"
   ... (9 entries)
+  "mcwpaths:mossy_stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:mossy_stone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:mud_brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:red_sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_windmill_weave_stairs"
   ... (3 entries)
+  "mcwpaths:stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:stone_windmill_weave_stairs"
   ... (4683 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/shovel</summary>

```diff
 [
   ... (275 entries)
+  "mcwpaths:dirt_path_block"
+  "mcwpaths:gravel_path_block"
+  "mcwpaths:podzol_path_block"
+  "mcwpaths:red_sand_path_block"
+  "mcwpaths:sand_path_block"
   ... (119 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (22 entries)
-  "#forbidden_arcanus:pedestals"
   ... (420 entries)
+  "forbidden_arcanus:darkstone_pedestal"
   ... (4 entries)
+  "forbidden_arcanus:magnetized_darkstone_pedestal"
   ... (1097 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:bee_queen/disallowed_random_bonus_trade_items</summary>

```diff
 [
   ... (105 entries)
+  "#mekanismadditions:plastic_fence_gates/normal?"
+  "#mekanismadditions:plastic_fences/normal?"
+  "#mekanismadditions:plastic_slabs/glow?"
+  "#mekanismadditions:plastic_slabs/normal?"
+  "#mekanismadditions:plastic_slabs/transparent?"
+  "#mekanismadditions:plastic_stairs/glow?"
+  "#mekanismadditions:plastic_stairs/normal?"
+  "#mekanismadditions:plastic_stairs/transparent?"
   ... (134 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>minecraft:block/forbidden_arcanus:pedestals</summary>

```diff
-[
-  "forbidden_arcanus:darkstone_pedestal"
-  "forbidden_arcanus:magnetized_darkstone_pedestal"
-]

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
   ... (21191 entries)
+  "framedblocks:framed_corner_tube"
   ... (3543 entries)
+  "mcwpaths:andesite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:andesite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_windmill_weave_stairs"
   ... (7 entries)
+  "mcwpaths:blackstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:blackstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:brick_windmill_weave_stairs"
   ... (6 entries)
+  "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:cobbled_deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
   ... (13 entries)
+  "mcwpaths:dark_prismarine_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:dark_prismarine_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:diorite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_windmill_weave_stairs"
+  "mcwpaths:dirt_path_block"
   ... (5 entries)
+  "mcwpaths:granite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:granite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:granite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:granite_windmill_weave_stairs"
+  "mcwpaths:gravel_path_block"
   ... (11 entries)
+  "mcwpaths:mossy_stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:mossy_stone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:mud_brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_windmill_weave_stairs"
   ... (1 entries)
+  "mcwpaths:podzol_path_block"
+  "mcwpaths:red_sand_path_block"
   ... (5 entries)
+  "mcwpaths:red_sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:red_sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_windmill_weave_stairs"
+  "mcwpaths:sand_path_block"
   ... (5 entries)
+  "mcwpaths:sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_windmill_weave_stairs"
   ... (4 entries)
+  "mcwpaths:stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:stone_windmill_weave_stairs"
   ... (14958 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (27163 entries)
+  "framedblocks:framed_corner_tube"
   ... (4501 entries)
+  "mcwpaths:andesite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:andesite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:andesite_windmill_weave_stairs"
   ... (7 entries)
+  "mcwpaths:blackstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:blackstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:blackstone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:brick_windmill_weave_stairs"
   ... (6 entries)
+  "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:cobbled_deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
   ... (13 entries)
+  "mcwpaths:dark_prismarine_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:dark_prismarine_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:dark_prismarine_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:deepslate_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:deepslate_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:diorite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:diorite_windmill_weave_stairs"
+  "mcwpaths:dirt_path_block"
   ... (5 entries)
+  "mcwpaths:granite_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:granite_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:granite_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:granite_windmill_weave_stairs"
+  "mcwpaths:gravel_path_block"
   ... (11 entries)
+  "mcwpaths:mossy_stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:mossy_stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:mossy_stone_windmill_weave_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:mud_brick_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:mud_brick_windmill_weave_stairs"
   ... (1 entries)
+  "mcwpaths:podzol_path_block"
+  "mcwpaths:red_sand_path_block"
   ... (5 entries)
+  "mcwpaths:red_sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:red_sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:red_sandstone_windmill_weave_stairs"
+  "mcwpaths:sand_path_block"
   ... (5 entries)
+  "mcwpaths:sandstone_crystal_floor_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_flagstone_stairs"
   ... (4 entries)
+  "mcwpaths:sandstone_running_bond_stairs"
   ... (5 entries)
+  "mcwpaths:sandstone_windmill_weave_stairs"
   ... (4 entries)
+  "mcwpaths:stone_crystal_floor_stairs"
   ... (3 entries)
+  "mcwpaths:stone_flagstone_stairs"
   ... (3 entries)
+  "mcwpaths:stone_running_bond_stairs"
   ... (4 entries)
+  "mcwpaths:stone_windmill_weave_stairs"
   ... (20366 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (58)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/framedblocks/blocks/framed_corner_tube</summary>

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
+          name: "framedblocks:framed_corner_tube"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "framedblocks:blocks/framed_corner_tube"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/andesite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:andesite_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/andesite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:andesite_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/andesite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:andesite_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/andesite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:andesite_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/blackstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:blackstone_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/blackstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:blackstone_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/blackstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:blackstone_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/blackstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:blackstone_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/brick_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:brick_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/brick_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:brick_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/brick_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:brick_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/brick_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:brick_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/cobbled_deepslate_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:cobbled_deepslate_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/cobbled_deepslate_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:cobbled_deepslate_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/cobbled_deepslate_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:cobbled_deepslate_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/cobbled_deepslate_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:cobbled_deepslate_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/dark_prismarine_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:dark_prismarine_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/dark_prismarine_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:dark_prismarine_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/dark_prismarine_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:dark_prismarine_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/dark_prismarine_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:dark_prismarine_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/deepslate_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:deepslate_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/deepslate_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:deepslate_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/deepslate_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:deepslate_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/deepslate_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:deepslate_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/diorite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:diorite_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/diorite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:diorite_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/diorite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:diorite_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/diorite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:diorite_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/dirt_path_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:dirt_path_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/granite_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:granite_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/granite_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:granite_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/granite_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:granite_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/granite_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:granite_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/gravel_path_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:gravel_path_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mossy_stone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mossy_stone_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mossy_stone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mossy_stone_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mossy_stone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mossy_stone_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mossy_stone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mossy_stone_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mud_brick_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mud_brick_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mud_brick_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mud_brick_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mud_brick_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mud_brick_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/mud_brick_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:mud_brick_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/podzol_path_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:podzol_path_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/red_sand_path_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:red_sand_path_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/red_sandstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:red_sandstone_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/red_sandstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:red_sandstone_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/red_sandstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:red_sandstone_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/red_sandstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:red_sandstone_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/sand_path_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:sand_path_block"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/sandstone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:sandstone_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/sandstone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:sandstone_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/sandstone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:sandstone_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/sandstone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:sandstone_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/stone_crystal_floor_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:stone_crystal_floor_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/stone_flagstone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:stone_flagstone_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/stone_running_bond_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:stone_running_bond_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/mcwpaths/blocks/stone_windmill_weave_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "mcwpaths:stone_windmill_weave_stairs"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

