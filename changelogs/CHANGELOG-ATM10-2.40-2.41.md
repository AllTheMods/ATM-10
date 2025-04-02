# Changelog

# 📦 2.41

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (12)</summary>

- Ars Nouveau (5.6.0) -> (5.5.1)
- ImmediatelyFast (1.6.1+1.21.1) -> (1.6.2+1.21.1)
- Iron's Spells 'n Spellbooks (1.21.1-3.10.0) -> (1.21.1-3.10.1)
- Let Me Despawn (1.4.4) -> (1.5.0)
- McJtyLib (1.21-9.0.5) -> (1.21-9.0.6)
- MineColonies (1.1.899-1.21.1-snapshot) -> (1.1.905-1.21.1-snapshot)
- RFToolsBase (1.21-6.0.5) -> (1.21-6.0.6)
- RFToolsBuilder (1.21-7.0.1) -> (1.21-7.0.2)
- RFToolsPower (1.21-7.0.1) -> (1.21-7.0.3)
- Structurize (1.0.764-1.21.1-snapshot) -> (1.0.765-1.21.1-snapshot)
- Utilitarian (1.21.1-0.13.9) -> (1.21.1-0.13.10)
- XNet (1.21-7.0.3) -> (1.21-7.0.4)

</details>

## 🍳 Recipes

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>utilitarian/sound_muffler</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "minecraft:wool"
+    }
+    {
+      item: "minecraft:note_block"
+    }
+  ]
+  result: {
+    count: 1
+    id: "utilitarian:sound_muffler"
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (3)</summary>
<blockquote>

<details>
<summary>kubejs/dissolution_chamber/pink_slime_block</summary>

```diff
 {
+  _kubejs_changed_marker: true
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
       tag: "c:glass_blocks/colorless"
     }
   ]
   inputFluid: {
-    id: "industrialforegoing:pink_slime"
+    fluid: "industrialforegoing:pink_slime"
     amount: 2700
   }
   output: {
     count: 1
     id: "industrialforegoing:pink_slime_block"
   }
   processingTime: 200
 }

```


</details>

<details>
<summary>kubejs/dissolution_chamber/unobtainium_vibranium_alloy_block</summary>

```diff
 {
+  _kubejs_changed_marker: true
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
       item: "industrialforegoing:pink_slime_block"
     }
     {
       tag: "c:storage_blocks/vibranium"
     }
     {
       item: "industrialforegoing:pink_slime_block"
     }
     {
       item: "allthemodium:piglich_heart_block"
     }
     {
       item: "allthemodium:piglich_heart_block"
     }
     {
       item: "industrialforegoing:pink_slime_block"
     }
     {
       tag: "c:storage_blocks/unobtainium"
     }
     {
       item: "industrialforegoing:pink_slime_block"
     }
   ]
   inputFluid: {
-    id: "allthemodium:soul_lava"
+    fluid: "allthemodium:soul_lava"
     amount: 900
   }
   output: {
     count: 1
     id: "allthemodium:unobtainium_vibranium_alloy_block"
   }
   processingTime: 200
 }

```


</details>

<details>
<summary>kubejs/dissolution_chamber/unobtainium_vibranium_alloy_ingot</summary>

```diff
 {
+  _kubejs_changed_marker: true
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
       item: "industrialforegoing:pink_slime"
     }
     {
       tag: "c:ingots/vibranium"
     }
     {
       item: "industrialforegoing:pink_slime"
     }
     {
       item: "allthemodium:piglich_heart"
     }
     {
       item: "allthemodium:piglich_heart"
     }
     {
       item: "industrialforegoing:pink_slime"
     }
     {
       tag: "c:ingots/unobtainium"
     }
     {
       item: "industrialforegoing:pink_slime"
     }
   ]
   inputFluid: {
-    id: "allthemodium:soul_lava"
+    fluid: "allthemodium:soul_lava"
     amount: 100
   }
   output: {
     count: 1
     id: "allthemodium:unobtainium_vibranium_alloy_ingot"
   }
   processingTime: 200
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (5)</summary>
<blockquote>

<details>
<summary>ars_nouveau/bastion_to_purple</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "ars_nouveau:bastion_pod"
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
<summary>ars_nouveau/bombegranate_to_orange</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "ars_nouveau:bombegranate_pod"
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
<summary>ars_nouveau/frostaya_to_light_blue</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "ars_nouveau:frostaya_pod"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:light_blue_dye"
-  }
-}

```


</details>

<details>
<summary>ars_nouveau/mendosteen_to_lime</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "ars_nouveau:mendosteen_pod"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:lime_dye"
-  }
-}

```


</details>

<details>
<summary>ars_nouveau/tomes/riftderp_tome</summary>

```diff
-{
-  type: "ars_nouveau:caster_tome"
-  color: {
-    b: 255
-    g: 25
-    id: "ars_nouveau:constant"
-    r: 120
-  }
-  flavour_text: "Just like that one guy, from that one thing! This spell will put you right in the enemy's face, so be ready for some swordplay!"
-  name: "Rift's Blink Strike"
-  sound: {
-  }
-  spell: [
-    "ars_nouveau:glyph_projectile"
-    "ars_nouveau:glyph_accelerate"
-    "ars_nouveau:glyph_accelerate"
-    "ars_nouveau:glyph_harm"
-    "ars_nouveau:glyph_blink"
-  ]
-  tome_type: "ars_nouveau:caster_tome"
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft:point_of_interest_type/utilitarian:sound_muffler</summary>

```diff
+[
+  "utilitarian:sound_muffler"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (7)</summary>
<blockquote>

<details>
<summary>minecraft:block/ars_nouveau:an_decorative</summary>

```diff
 [
   ... (25 entries)
-  "ars_nouveau:sky_block"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/buildinggadgets2:deny</summary>

```diff
 [
   ... (3 entries)
+  "enderstorage:ender_chest"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:armors</summary>

```diff
 [
-  "#ars_nouveau:magic_armor"
   ... (9 entries)
+  "ars_nouveau:arcanist_boots"
+  "ars_nouveau:arcanist_hood"
+  "ars_nouveau:arcanist_leggings"
+  "ars_nouveau:arcanist_robes"
+  "ars_nouveau:battlemage_boots"
+  "ars_nouveau:battlemage_hood"
+  "ars_nouveau:battlemage_leggings"
+  "ars_nouveau:battlemage_robes"
+  "ars_nouveau:sorcerer_boots"
+  "ars_nouveau:sorcerer_hood"
+  "ars_nouveau:sorcerer_leggings"
+  "ars_nouveau:sorcerer_robes"
   ... (57 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_armor</summary>

```diff
 [
-  "#ars_nouveau:magic_robe"
   ... (18 entries)
+  "ars_nouveau:arcanist_robes"
+  "ars_nouveau:battlemage_robes"
+  "ars_nouveau:sorcerer_robes"
   ... (67 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:foot_armor</summary>

```diff
 [
-  "#ars_nouveau:magic_boots"
   ... (18 entries)
+  "ars_nouveau:arcanist_boots"
+  "ars_nouveau:battlemage_boots"
+  "ars_nouveau:sorcerer_boots"
   ... (60 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:head_armor</summary>

```diff
 [
-  "#ars_nouveau:magic_hood"
   ... (18 entries)
+  "ars_nouveau:arcanist_hood"
+  "ars_nouveau:battlemage_hood"
+  "ars_nouveau:sorcerer_hood"
   ... (71 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:leg_armor</summary>

```diff
 [
-  "#ars_nouveau:magic_legs"
   ... (18 entries)
+  "ars_nouveau:arcanist_leggings"
+  "ars_nouveau:battlemage_leggings"
+  "ars_nouveau:sorcerer_leggings"
   ... (59 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (6)</summary>
<blockquote>

<details>
<summary>minecraft:block/ars_nouveau:an_false_occlusion</summary>

```diff
-[
-  "ars_nouveau:falseweave"
-  "ars_nouveau:ghostweave"
-  "ars_nouveau:mirrorweave"
-  "ars_nouveau:sky_block"
-]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:magic_armor</summary>

```diff
-[
-  "#ars_nouveau:magic_boots"
-  "#ars_nouveau:magic_hood"
-  "#ars_nouveau:magic_legs"
-  "#ars_nouveau:magic_robe"
-]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:magic_boots</summary>

```diff
-[
-  "ars_nouveau:arcanist_boots"
-  "ars_nouveau:battlemage_boots"
-  "ars_nouveau:sorcerer_boots"
-]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:magic_hood</summary>

```diff
-[
-  "ars_nouveau:arcanist_hood"
-  "ars_nouveau:battlemage_hood"
-  "ars_nouveau:sorcerer_hood"
-]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:magic_legs</summary>

```diff
-[
-  "ars_nouveau:arcanist_leggings"
-  "ars_nouveau:battlemage_leggings"
-  "ars_nouveau:sorcerer_leggings"
-]

```


</details>

<details>
<summary>minecraft:item/ars_nouveau:magic_robe</summary>

```diff
-[
-  "ars_nouveau:arcanist_robes"
-  "ars_nouveau:battlemage_robes"
-  "ars_nouveau:sorcerer_robes"
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
   ... (39581 entries)
+  "utilitarian:sound_muffler"
   ... (1088 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (51894 entries)
+  "utilitarian:sound_muffler"
   ... (1187 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/utilitarian/blocks/sound_muffler</summary>

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
+          name: "utilitarian:sound_muffler"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "utilitarian:blocks/sound_muffler"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/irons_spellbooks/entities/fire_boss</summary>

```diff
 {
   type: "minecraft:entity"
   pools: [
     {
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "irons_spellbooks:divine_soulshard"
           conditions: [
             {
               condition: "minecraft:killed_by_player"
             }
           ]
         }
       ]
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "irons_spellbooks:decrepit_scythe"
         }
         {
           type: "minecraft:item"
           name: "irons_spellbooks:betrayer_signet"
         }
       ]
       conditions: [
         {
           condition: "minecraft:killed_by_player"
         }
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           enchantment: "minecraft:looting"
           unenchanted_chance: 0.5
           enchanted_chance: {
             type: "minecraft:linear"
-            base: 0.1
+            base: 0.55
             per_level_above_first: 0.05
           }
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 45
                 min: 28
               }
               function: "minecraft:set_count"
             }
             {
               count: {
                 type: "minecraft:uniform"
                 max: 6
                 min: 2
               }
               function: "minecraft:enchanted_count_increase"
               enchantment: "minecraft:looting"
             }
           ]
           name: "irons_spellbooks:arcane_essence"
         }
       ]
       rolls: 2
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "irons_spellbooks:cinder_essence"
         }
       ]
       rolls: 1
     }
   ]
 }

```


</details>

</blockquote>

</details>

