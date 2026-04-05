# Changelog

# 📦 6.4

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (1)</summary>

- Iron's Patreon Library (1.21.1-1.0.1)

</details>

<details>
<summary>Updated (18)</summary>

- AlmostUnified (1.21.1-1.3.0) -> (1.21.1-1.4.1)
- Cable Tiers (1.21.1-0.6.10) -> (1.21.1-0.6.11)
- Cooking for Blockheads (21.1.18) -> (21.1.19)
- ExtendedAE (1.21-2.2.30-neoforge) -> (1.21-2.2.31-neoforge)
- Mama's Herbs and Harvest (1.21.1-10) -> (1.21.1-11)
- Iron's Gems 'n Jewelry (1.21.1-1.6.0) -> (1.21.1-1.6.1)
- Iron's Spells 'n Spellbooks (1.21.1-3.15.4) -> (1.21.1-3.15.5)
- MineColonies (1.1.1294-1.21.1-snapshot) -> (1.1.1295-1.21.1-snapshot)
- Relics (0.11.10) -> (0.11.12)
- reliquified_artifacts (1.0.1) -> (1.0.3)
- Silent Gear (4.1.4) -> (4.1.5)
- Sophisticated Core (1.4.14) -> (1.4.18)
- Sophisticated Storage (1.5.33) -> (1.5.34)
- Sophisticated Storage Create Integration (0.1.13) -> (0.1.14)
- Supplementaries (1.21-3.5.29) -> (1.21-3.5.31)
- The Bumblezone (7.12.1+1.21.1-neoforge) -> (7.13.1+1.21.1-neoforge)
- Theurgy (1.70.0) -> (1.71.0)
- TrashSlot (21.1.6) -> (21.1.7)

</details>

## 🍳 Recipes

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>almostunified/irons_patreon_lib</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "irons_patreon_lib"
+  recipes: [
+    "1$transmog_table"
+  ]
+}

```


</details>

<details>
<summary>irons_patreon_lib/transmog_table</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    #: {
+      item: "minecraft:smithing_table"
+    }
+    -: {
+      tag: "c:ingots/gold"
+    }
+  }
+  pattern: [
+    "-"
+    "#"
+  ]
+  result: {
+    count: 1
+    id: "irons_patreon_lib:transmog_table"
+  }
+}

```


</details>

<details>
<summary>irons_spellbooks/tyros_statue</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "SSS"
+    " S "
+    "MPM"
+  ]
+  key: {
+    P: {
+      tag: "c:ingots/pyrium"
+    }
+    M: {
+      item: "minecraft:smooth_stone_slab"
+    }
+    S: {
+      item: "minecraft:stone"
+    }
+  }
+  result: {
+    id: "irons_spellbooks:tyros_statue"
+    count: 1
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (21)</summary>
<blockquote>

<details>
<summary>herbsandharvest/apple_muffin</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:foods/apple"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:apple_muffin"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/avocado_toast</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       tag: "c:foods/avocado"
     }
     {
       item: "herbsandharvest:pumpernickel_slice"
     }
     {
       item: "herbsandharvest:feta_wedge"
     }
     {
       tag: "c:foods/tomato"
     }
   ]
   result: {
-    count: 1
+    count: 4
     id: "herbsandharvest:avocado_toast"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/biscuits_gravy</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:foods/milk"
     }
     {
       item: "herbsandharvest:cooked_sausage"
     }
     {
       tag: "c:items/salt"
     }
   ]
   result: {
-    count: 1
+    count: 3
     id: "herbsandharvest:biscuits_gravy"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/black_forest_cupcake</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       item: "herbsandharvest:oil"
     }
     {
       item: "minecraft:cocoa_beans"
     }
     {
       tag: "c:foods/cherries"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:black_forest_cupcake"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/blueberry_muffin</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       item: "herbsandharvest:blueberry"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:blueberry_muffin"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/burrito</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       tag: "c:foods/cooked_beef"
     }
     {
       tag: "c:foods/beans"
     }
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/sour_cream"
     }
     {
       item: "herbsandharvest:guacamole"
     }
     {
       tag: "c:foods/tomato"
     }
     {
       tag: "c:foods/onion"
     }
   ]
   result: {
-    count: 1
+    count: 3
     id: "herbsandharvest:burrito"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/carrot_cupcake</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       item: "herbsandharvest:oil"
     }
     {
       tag: "c:foods/carrot"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "herbsandharvest:cream_cheese"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:carrot_cupcake"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/chips</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       tag: "c:foods/corn"
     }
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods_oil"
     }
   ]
   result: {
-    count: 1
+    count: 3
     id: "herbsandharvest:chips"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/graham_crackers</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:items/salt"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "minecraft:honey_bottle"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:graham_crackers"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/oatmeal_raisin_cookie</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:items/salt"
     }
     {
       tag: "c:foods/oats"
     }
     {
       tag: "c:foods/grapes"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:oatmeal_raisin_cookie"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/pancakes</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:items/salt"
     }
   ]
   result: {
-    count: 1
+    count: 3
     id: "herbsandharvest:pancakes"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/peanut_butter_cookie</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:items/salt"
     }
     {
       tag: "c:foods/peanut_butter"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:peanut_butter_cookie"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/pumpkin_muffin</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:foods/pumpkin"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:pumpkin_muffin"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/snickerdoodle_cookie</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:items/salt"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:snickerdoodle_cookie"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/strawberry_cupcake</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       item: "herbsandharvest:oil"
     }
     {
       item: "herbsandharvest:strawberry"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:strawberry_cupcake"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/sugar_cookie</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       tag: "c:items/salt"
     }
     {
       tag: "c:foods/lemon"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:sugar_cookie"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/sweet_berry_muffin</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       tag: "c:foods/butter"
     }
     {
       item: "minecraft:sweet_berries"
     }
     {
       item: "herbsandharvest:ground_cinnamon"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:sweet_berry_muffin"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/taco</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       tag: "c:foods/cooked_beef"
     }
     {
       tag: "c:foods/corn"
     }
     {
       tag: "c:foods/cheddar"
     }
     {
       tag: "c:foods/lettuce"
     }
     {
       tag: "c:foods/onion"
     }
     {
       tag: "c:foods/tomato"
     }
     {
       tag: "c:foods/sour_cream"
     }
   ]
   result: {
-    count: 1
+    count: 3
     id: "herbsandharvest:taco"
   }
 }

```


</details>

<details>
<summary>herbsandharvest/yellow_cupcake</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
       item: "minecraft:wheat"
     }
     {
       tag: "c:foods/egg"
     }
     {
       tag: "c:foods/milk"
     }
     {
       tag: "c:items/sugar"
     }
     {
       item: "herbsandharvest:oil"
     }
     {
       item: "minecraft:cocoa_beans"
     }
     {
       item: "minecraft:paper"
     }
   ]
   result: {
-    count: 1
+    count: 8
     id: "herbsandharvest:yellow_cupcake"
   }
 }

```


</details>

<details>
<summary>supplementaries/trapped_present_2</summary>

```diff
 {
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
-      flag: "present"
+      flag: "trapped_present"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "supplementaries:flag"
-          flag: "present"
+          flag: "trapped_present"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   pattern: [
     "000"
     "010"
     "000"
   ]
   key: {
     0: {
       item: "minecraft:paper"
     }
     1: {
       item: "minecraft:tripwire_hook"
     }
   }
   result: {
-    id: "supplementaries:present"
+    id: "supplementaries:trapped_present"
     count: 1
   }
 }

```


</details>

<details>
<summary>supplementaries/trapped_present_3</summary>

```diff
 {
   fabric:load_conditions: [
     {
       condition: "supplementaries:flag"
-      flag: "present"
+      flag: "trapped_present"
     }
     {
       condition: "fabric:mod_loaded"
       modid: "create"
     }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "supplementaries:flag"
-          flag: "present"
+          flag: "trapped_present"
         }
         {
           type: "neoforge:mod_loaded"
           modid: "create"
         }
       ]
     }
   ]
   type: "minecraft:crafting_shaped"
   pattern: [
     "000"
     "010"
     "000"
   ]
   key: {
     0: {
-      item: "minecraft:paper"
+      item: "create:cardboard"
     }
     1: {
       item: "minecraft:tripwire_hook"
     }
   }
   result: {
-    id: "supplementaries:present"
+    id: "supplementaries:trapped_present"
     count: 1
   }
 }

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft:item/c:loom_patterns</summary>

```diff
+[
+  "#the_bumblezone:banner_patterns"
+  "minecraft:creeper_banner_pattern"
+  "minecraft:flow_banner_pattern"
+  "minecraft:flower_banner_pattern"
+  "minecraft:globe_banner_pattern"
+  "minecraft:guster_banner_pattern"
+  "minecraft:mojang_banner_pattern"
+  "minecraft:piglin_banner_pattern"
+  "minecraft:skull_banner_pattern"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (11)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:ores_in_ground/end_stone</summary>

```diff
 [
   ... (18 entries)
-  "silentgear:azure_silver_block"
+  "silentgear:azure_silver_ore"
 ]

```


</details>

<details>
<summary>minecraft:block/cookingforblockheads:kitchen_item_providers</summary>

```diff
 [
   ... (201 entries)
-  "storagedrawers:fractional_drawers_3?"
-  "storagedrawers:standard_drawers_1?"
-  "storagedrawers:standard_drawers_2?"
-  "storagedrawers:standard_drawers_4?"
+  "storagedrawers:acacia_full_drawers_1?"
+  "storagedrawers:acacia_full_drawers_2?"
+  "storagedrawers:acacia_full_drawers_4?"
+  "storagedrawers:acacia_half_drawers_1?"
+  "storagedrawers:acacia_half_drawers_2?"
+  "storagedrawers:acacia_half_drawers_4?"
+  "storagedrawers:bamboo_full_drawers_1?"
+  "storagedrawers:bamboo_full_drawers_2?"
+  "storagedrawers:bamboo_full_drawers_4?"
+  "storagedrawers:bamboo_half_drawers_1?"
+  "storagedrawers:bamboo_half_drawers_2?"
+  "storagedrawers:bamboo_half_drawers_4?"
+  "storagedrawers:birch_full_drawers_1?"
+  "storagedrawers:birch_full_drawers_2?"
+  "storagedrawers:birch_full_drawers_4?"
+  "storagedrawers:birch_half_drawers_1?"
+  "storagedrawers:birch_half_drawers_2?"
+  "storagedrawers:birch_half_drawers_4?"
+  "storagedrawers:cherry_full_drawers_1?"
+  "storagedrawers:cherry_full_drawers_2?"
+  "storagedrawers:cherry_full_drawers_4?"
+  "storagedrawers:cherry_half_drawers_1?"
+  "storagedrawers:cherry_half_drawers_2?"
+  "storagedrawers:cherry_half_drawers_4?"
+  "storagedrawers:crimson_full_drawers_1?"
+  "storagedrawers:crimson_full_drawers_2?"
+  "storagedrawers:crimson_full_drawers_4?"
+  "storagedrawers:crimson_half_drawers_1?"
+  "storagedrawers:crimson_half_drawers_2?"
+  "storagedrawers:crimson_half_drawers_4?"
+  "storagedrawers:dark_oak_full_drawers_1?"
+  "storagedrawers:dark_oak_full_drawers_2?"
+  "storagedrawers:dark_oak_full_drawers_4?"
+  "storagedrawers:dark_oak_half_drawers_1?"
+  "storagedrawers:dark_oak_half_drawers_2?"
+  "storagedrawers:dark_oak_half_drawers_4?"
+  "storagedrawers:jungle_full_drawers_1?"
+  "storagedrawers:jungle_full_drawers_2?"
+  "storagedrawers:jungle_full_drawers_4?"
+  "storagedrawers:jungle_half_drawers_1?"
+  "storagedrawers:jungle_half_drawers_2?"
+  "storagedrawers:jungle_half_drawers_4?"
+  "storagedrawers:mangrove_full_drawers_1?"
+  "storagedrawers:mangrove_full_drawers_2?"
+  "storagedrawers:mangrove_full_drawers_4?"
+  "storagedrawers:mangrove_half_drawers_1?"
+  "storagedrawers:mangrove_half_drawers_2?"
+  "storagedrawers:mangrove_half_drawers_4?"
+  "storagedrawers:oak_full_drawers_1?"
+  "storagedrawers:oak_full_drawers_2?"
+  "storagedrawers:oak_full_drawers_4?"
+  "storagedrawers:oak_half_drawers_1?"
+  "storagedrawers:oak_half_drawers_2?"
+  "storagedrawers:oak_half_drawers_4?"
+  "storagedrawers:spruce_full_drawers_1?"
+  "storagedrawers:spruce_full_drawers_2?"
+  "storagedrawers:spruce_full_drawers_4?"
+  "storagedrawers:spruce_half_drawers_1?"
+  "storagedrawers:spruce_half_drawers_2?"
+  "storagedrawers:spruce_half_drawers_4?"
+  "storagedrawers:warped_full_drawers_1?"
+  "storagedrawers:warped_full_drawers_2?"
+  "storagedrawers:warped_full_drawers_4?"
+  "storagedrawers:warped_half_drawers_1?"
+  "storagedrawers:warped_half_drawers_2?"
+  "storagedrawers:warped_half_drawers_4?"
 ]

```


</details>

<details>
<summary>minecraft:block/create:brittle</summary>

```diff
 [
   ... (5 entries)
+  "#supplementaries:buntings?"
+  "#supplementaries:candle_holders?"
+  "#supplementaries:sconces?"
   ... (65 entries)
+  "supplementaries:ash?"
+  "supplementaries:barnacles?"
+  "supplementaries:crank?"
+  "supplementaries:doormat?"
+  "supplementaries:item_shelf?"
+  "supplementaries:pancake?"
+  "supplementaries:sconce_lever?"
 ]

```


</details>

<details>
<summary>minecraft:block/create:movable_empty_collider</summary>

```diff
 [
   ... (4 entries)
+  "#supplementaries:timber_frames?"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:combination_step_sound_blocks</summary>

```diff
 [
   ... (372 entries)
+  "supplementaries:doormat"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:inside_step_sound_blocks</summary>

```diff
 [
   ... (37 entries)
+  "supplementaries:bamboo_spikes"
   ... (1 entries)
+  "supplementaries:pancake"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (6343 entries)
+  "irons_patreon_lib:player_statue"
   ... (8373 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/relics:relic</summary>

```diff
 [
-  "relics:amphibian_boot"
-  "relics:aqua_walker"
-  "relics:bastion_ring"
-  "relics:chorus_inhibitor"
-  "relics:drowned_belt"
-  "relics:elytra_booster"
-  "relics:enders_hand"
-  "relics:holy_locket"
-  "relics:hunter_belt"
-  "relics:ice_breaker"
-  "relics:ice_skates"
-  "relics:infinity_ham"
+  "relics:chef_hat"
+  "relics:chorus_staff"
+  "relics:clot_of_time"
+  "relics:cut_glass_boot"
+  "relics:experience_disperser"
+  "relics:hunting_belt"
   ... (1 entries)
-  "relics:leather_belt"
-  "relics:magic_mirror"
-  "relics:magma_walker"
-  "relics:midnight_robe"
-  "relics:phantom_boot"
-  "relics:rage_glove"
-  "relics:reflection_necklace"
-  "relics:roller_skates"
-  "relics:shadow_glaive"
-  "relics:space_dissector"
-  "relics:spore_sack"
+  "relics:kinetic_belt"
+  "relics:leafy_mantle"
+  "relics:midnight_mantle"
+  "relics:piglin_mask"
+  "relics:reflective_necklace"
+  "relics:rider_flute"
+  "relics:ring_of_the_seven_deadly_sins"
+  "relics:roller_skate"
+  "relics:sphere_of_self_sacrifice"
   ... (1 entries)
-  "relics:wool_mitten"
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:anglers_hat_valuables</summary>

```diff
 [
-  "#c:gems?"
-  "#c:ingots?"
-  "#c:nuggets?"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimic_loot</summary>

```diff
 [
   ... (52 entries)
+  "relics:experience_disperser"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimificable</summary>

```diff
 [
   ... (52 entries)
+  "relics:experience_disperser"
   ... (12 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (2)</summary>
<blockquote>

<details>
<summary>minecraft:item/create:brittle</summary>

```diff
-[
-  "#supplementaries:candle_holders?"
-  "#supplementaries:sconces?"
-  "supplementaries:sconce_lever?"
-]

```


</details>

<details>
<summary>minecraft:item/create:movable_empty_collider</summary>

```diff
-[
-  "#supplementaries:candle_holders?"
-  "#supplementaries:sconces?"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (3)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (26606 entries)
+  "irons_patreon_lib:player_statue"
+  "irons_patreon_lib:transmog_table"
   ... (19 entries)
+  "irons_spellbooks:tyros_statue"
   ... (21399 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (1215 entries)
+  "irons_patreon_lib:statue"
   ... (4 entries)
+  "irons_spellbooks:tyros_statue"
   ... (1427 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (34729 entries)
+  "irons_patreon_lib:player_statue"
+  "irons_patreon_lib:transmog_table"
   ... (202 entries)
+  "irons_spellbooks:tyros_statue"
   ... (27688 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/blaze</summary>

```diff
+{
+  pools: [
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/enderman</summary>

```diff
+{
+  pools: [
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/irons_patreon_lib/blocks/player_statue</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "irons_patreon_lib:statue_item_data"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "irons_patreon_lib:player_statue"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (9)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/drowned</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/drowned"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/snorkel"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/flippers"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/husk</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/husk"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/vampiric_glove"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/thorn_pendant"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/piglin</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/piglin"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/golden_hook"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/universal_attractor"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/obsidian_skull"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/piglin_brute</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/piglin_brute"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/onion_ring"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/strider_shoes"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/skeleton</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/skeleton"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/night_vision_goggles"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/drinking_hat"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/flame_pendant"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/stray</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/stray"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/snowshoes"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/steadfast_spikes"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/wither_skeleton</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/wither_skeleton"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/fire_gauntlet"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/antidote_vessel"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/zombie</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/zombie"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/cowboy_hat"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/bunny_hoppers"
-        }
-        {
-          type: "minecraft:loot_table"
-          functions: [
-            {
-              components: {
-                artifacts:hide_when_invisible: {
-                  enabled: false
-                }
-              }
-              function: "minecraft:set_components"
-            }
-          ]
-          value: "artifacts:items/scarf_of_invisibility"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/artifacts/entity_equipment/zombified_piglin</summary>

```diff
 {
-  random_sequence: "artifacts:entity_equipment/zombified_piglin"
   pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "artifacts:config_value_chance"
-          config: "entity_equipment"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/golden_hook"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/universal_attractor"
-        }
-        {
-          type: "minecraft:loot_table"
-          value: "artifacts:items/obsidian_skull"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

</blockquote>

</details>

