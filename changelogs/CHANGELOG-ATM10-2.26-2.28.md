# Changelog

# 📦 2.28

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (20)</summary>

- Ars Nouveau (5.4.0) -> (5.3.6)
- Compact Machines (7.0.14) -> (7.0.22)
- Crash Assistant (1.2.18) -> (1.2.19)
- Embeddium (1.0.11+mc1.21.1) -> (1.0.12+mc1.21.1)
- Entangled (1.3.20) -> (1.3.20+a)
- Extended Industrialization (1.11.0-beta-1.21.1) -> (1.11.2-beta-1.21.1)
- FTB Jei Extras (21.1.4) -> (21.1.5)
- Journeymap (1.21.1-6.0.0-beta.34) -> (1.21.1-6.0.0-beta.36)
- Just Dire Things (1.5.2) -> (1.5.3)
- Mahou Tsukai (1.21.0-v1.35.36) -> (1.21.0-v1.35.39)
- memorysettings mod (5.6) -> (5.8)
- Modular Force Field System (5.4.12) -> (5.4.16)
- Monocle (0.1.8) -> (0.1.9.ms)
- Moonlight Lib (1.21-2.17.17) -> (1.21-2.17.18)
- Nolijium (0.5.1) -> (0.5.2)
- RAR-Compat (0.8.5) -> (0.8.5.1)
- Sophisticated Storage (1.2.6) -> (1.2.9)
- Sophisticated Storage In Motion (0.10.0) -> (0.10.1)
- Tesseract API (1.6.6-beta-1.21.1) -> (1.6.7-beta-1.21.1)
- Corail Tombstone (9.2.3) -> (9.2.4)

</details>

<details open>
<summary>Removed (1)</summary>

- Nuggets (1.0.4.35)

</details>

## 🍳 Recipes

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>ars_nouveau/reactive</summary>

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
<summary>ars_nouveau/scry_ritual/amethyst_blocks</summary>

```diff
+{
+  type: "ars_nouveau:scry_ritual"
+  augment: "c:storage_blocks/amethyst"
+  highlight: "c:storage_blocks/amethyst"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (3)</summary>
<blockquote>

<details>
<summary>ars_nouveau/alakarkinos/ocean_ruins_cold</summary>

```diff
 {
   type: "ars_nouveau:alakarkinos_conversion"
   input: "minecraft:gravel"
-  table: "minecraft:archaeology/ocean_ruin_cold"
+  table: "minecraft:archaeology/ocean_ruin_warm"
   weight: 25
 }

```


</details>

<details>
<summary>mffs/battery</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
       tag: "c:ingots/copper"
     }
     I: {
       tag: "c:ingots/iron"
     }
     O: {
-      item: "minecraft:coal"
+      tag: "minecraft:coals"
     }
     R: {
       tag: "c:dusts/redstone"
     }
   }
   pattern: [
     " C "
     "IRI"
     "IOI"
   ]
   result: {
     count: 1
     id: "mffs:battery"
   }
 }

```


</details>

<details>
<summary>mffs/steel_compound</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     C: {
-      item: "minecraft:coal"
+      tag: "minecraft:coals"
     }
     I: {
       tag: "c:ingots/iron"
     }
   }
   pattern: [
     " C "
     "CIC"
     " C "
   ]
   result: {
     count: 1
     id: "mffs:steel_compound"
   }
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (3)</summary>
<blockquote>

<details>
<summary>alltheores/processing/ore_hammer/allthemodium_dust_from_ingot</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "allthemodium:allthemodium_dust"
-    count: 1
-  }
-  ingredients: [
-    {
-      tag: "c:ingots/allthemodium"
-    }
-    {
-      tag: "alltheores:ore_hammers"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>ars_nouveau/reactive_1</summary>

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
<summary>ars_nouveau/tomes/bugcolez_tome</summary>

```diff
-{
-  type: "ars_nouveau:caster_tome"
-  color: {
-    b: 180
-    g: 25
-    id: "ars_nouveau:constant"
-    r: 255
-  }
-  flavour_text: "Their Friends are their power!"
-  name: "Pixie Pummel"
-  sound: {
-    pitch: 1.9
-  }
-  spell: [
-    "ars_nouveau:glyph_self"
-    "ars_nouveau:glyph_summon_vex"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-    "ars_nouveau:glyph_extend_time"
-  ]
-  tome_type: "ars_nouveau:caster_tome"
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>minecraft:item/sophisticatedstorage:upgrade</summary>

```diff
+[
+  "sophisticatedstorage:advanced_compacting_upgrade"
+  "sophisticatedstorage:advanced_feeding_upgrade"
+  "sophisticatedstorage:advanced_filter_upgrade"
+  "sophisticatedstorage:advanced_hopper_upgrade"
+  "sophisticatedstorage:advanced_jukebox_upgrade"
+  "sophisticatedstorage:advanced_magnet_upgrade"
+  "sophisticatedstorage:advanced_pickup_upgrade"
+  "sophisticatedstorage:advanced_pump_upgrade"
+  "sophisticatedstorage:advanced_void_upgrade"
+  "sophisticatedstorage:auto_blasting_upgrade"
+  "sophisticatedstorage:auto_smelting_upgrade"
+  "sophisticatedstorage:auto_smoking_upgrade"
+  "sophisticatedstorage:blasting_upgrade"
+  "sophisticatedstorage:chipped/alchemy_bench_upgrade"
+  "sophisticatedstorage:chipped/botanist_workbench_upgrade"
+  "sophisticatedstorage:chipped/carpenters_table_upgrade"
+  "sophisticatedstorage:chipped/glassblower_upgrade"
+  "sophisticatedstorage:chipped/loom_table_upgrade"
+  "sophisticatedstorage:chipped/mason_table_upgrade"
+  "sophisticatedstorage:chipped/tinkering_table_upgrade"
+  "sophisticatedstorage:compacting_upgrade"
+  "sophisticatedstorage:compression_upgrade"
+  "sophisticatedstorage:crafting_upgrade"
+  "sophisticatedstorage:feeding_upgrade"
+  "sophisticatedstorage:filter_upgrade"
+  "sophisticatedstorage:hopper_upgrade"
+  "sophisticatedstorage:jukebox_upgrade"
+  "sophisticatedstorage:magnet_upgrade"
+  "sophisticatedstorage:pickup_upgrade"
+  "sophisticatedstorage:pump_upgrade"
+  "sophisticatedstorage:smelting_upgrade"
+  "sophisticatedstorage:smoking_upgrade"
+  "sophisticatedstorage:stack_upgrade_tier_1"
+  "sophisticatedstorage:stack_upgrade_tier_1_plus"
+  "sophisticatedstorage:stack_upgrade_tier_2"
+  "sophisticatedstorage:stack_upgrade_tier_3"
+  "sophisticatedstorage:stack_upgrade_tier_4"
+  "sophisticatedstorage:stack_upgrade_tier_5"
+  "sophisticatedstorage:stonecutter_upgrade"
+  "sophisticatedstorage:void_upgrade"
+  "sophisticatedstorage:xp_pump_upgrade"
+]

```


</details>

<details>
<summary>minecraft:item/tombstone:lootable/tool</summary>

```diff
+[
+  "#minecraft:enchantable/mining_loot?"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (16)</summary>
<blockquote>

<details>
<summary>minecraft:block/ae2:growth_acceleratable</summary>

```diff
 [
   ... (29 entries)
+  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/computercraft:turtle_hoe_harvestable</summary>

```diff
 [
   ... (17 entries)
+  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/cucumber:mineable/sickle</summary>

```diff
 [
   ... (39 entries)
+  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:bee_growables</summary>

```diff
 [
   ... (16 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:crops</summary>

```diff
 [
   ... (31 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:sword_efficient</summary>

```diff
 [
   ... (98 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/mysticalagriculture:crops</summary>

```diff
 [
   ... (147 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/pneumaticcraft:crop_support_growable</summary>

```diff
 [
   ... (17 entries)
+  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:block/silentgear:mineable/sickle</summary>

```diff
 [
   ... (34 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/the_bumblezone:essence/life/grow_plants</summary>

```diff
 [
   ... (20 entries)
+  "mysticalagriculture:xychorium_gem_crop"
 ]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:whirlisprig/denied_drop</summary>

```diff
 [
   ... (12 entries)
+  "mysticalagriculture:xychorium_gem_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds</summary>

```diff
 [
   ... (132 entries)
+  "mysticalagriculture:xychorium_gem_seeds"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/extended_industrialization:farmer_plantable</summary>

```diff
 [
   ... (17 entries)
+  "mysticalagriculture:xychorium_gem_seeds"
 ]

```


</details>

<details>
<summary>minecraft:item/mysticalagriculture:essences</summary>

```diff
 [
   ... (147 entries)
+  "mysticalagriculture:xychorium_gem_essence"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/mysticalagriculture:seeds</summary>

```diff
 [
   ... (147 entries)
+  "mysticalagriculture:xychorium_gem_seeds"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/tombstone:magic_scrolls</summary>

```diff
 [
   ... (3 entries)
-  "tombstone:scroll_of_knowledge"
   ... (8 entries)
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (83 entries)
-  "mahoutsukai:acting"
   ... (157 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

