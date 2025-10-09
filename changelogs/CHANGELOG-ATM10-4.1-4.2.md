# Changelog

# 📦 4.2

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Fix typo in eternal starlight quests (#2991)
- Updated Ukrainian localization for FTB Quests (#2994)
- * feat: add Ukrainian translation for welcome chapter
- Додано українську локалізацію для розділу «Ласкаво просимо»
- * feat: add Ukrainian translation for bountry board chapter
- * feat: add Ukrainian translation for tips and tricks chapter
- * feat: add Ukrainian translation for main questline part 1 chapter
- * feat: add Ukrainian translation for main questline part 2 chapter
- * feat: update Ukrainian translations
- * feat: add Ukrainian translation for ID chapter
- * feat: add Ukrainian translation for basic logistics chapter
- * feat: add Ukrainian translation for basic power chapter
- * feat: add Ukrainian translation for storage chapter
- fix: Remove oritech things from quests, add more (#3000)
- * Oritech quest related images
- * Add files via upload
- * Add files via upload
- * Fix: Added en_us lang file missed initially
- * Update Oritech quests, no oritech things
- - Removes oritech things
- - Add quests for ore processing
- - Add quest for Nuclear Reactor
- * Did not forget the EN_US for sure
- Oritech balances (#3002)
- Added recipes.js
- - Removed alternate recipe `Improved Machine core` 
- - Made `Improved Machine core` recipe slightly more expensive by adding fluxite block to it instead of redstone dust
- - Removed `Plating block` tag from Machine extender addon recipe, now it only takes highest tier plating which is `Carbon Plating Block`
- - Recipe also affects further machine cores since those use `Improved Machine cores`
- 
- 
- This was all done since resources are easily available in the pack and `Machine Addon Extender` are extremely broken.
- fix: remove oritechthings references
- fix: auto forge item input/output conflict
- fix: some bee combs completing wrong quests</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Added (1)</summary>

- Oracle Index (0.3.0)

</details>

<details>
<summary>Updated (15)</summary>

- AE2:Crafting Tree (1.21.1-1.0.6) -> (1.21.1-1.1.0)
- All The Leaks (0.1.19-beta+1.21.1-neoforge) -> (0.1.20-beta+1.21.1-neoforge)
- Ars Nouveau (5.8.6) -> (5.9.1)
- Byzantine (34) -> (34.1)
- FTB Jei Extras (21.1.5) -> (21.1.7)
- Immersive Engineering (12.3.3-191) -> (12.4.0-192)
- Modular Machinery Reborn (2.4.0) -> (2.3.2)
- Moonlight Lib (1.21-2.19.2) -> (1.21-2.19.4)
- NeoForge (21.1.184) -> (21.1.185)
- Not Enough Glyphs (4.2.0.1) -> (4.2.1.0)
- Nuggets (1.0.7.38) -> (1.0.10.41)
- Productive Bees (1.21.1-13.7.0) -> (1.21.1-13.7.1)
- Productive Lib (1.21.0-0.1.19) -> (1.21.0-0.1.21)
- Productive Metalworks (1.21.1-1.9.2) -> (1.21.1-1.9.3)
- Storage Delight (25.03.09-1.21-neoforge) -> (25.06.24-1.21-neoforge)

</details>

<details open>
<summary>Removed (1)</summary>

- Oritech Things (0.0.22)

</details>

## 🍳 Recipes

<details>
<summary>Added (20)</summary>
<blockquote>

<details>
<summary>ars_nouveau/glyph_prestidigitation</summary>

```diff
+{
+  type: "ars_nouveau:glyph"
+  exp: 27
+  inputs: [
+    {
+      item: "ars_nouveau:conjuration_essence"
+    }
+  ]
+  output: {
+    count: 1
+    id: "ars_nouveau:glyph_prestidigitation"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/oritech_machine_core_3</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "oritech:machine_core_3"
+    count: 1
+  }
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "oritech:carbon_fibre_strands"
+    }
+    B: {
+      item: "oritech:fluxite_block"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/oritech_machine_extender</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "oritech:machine_extender"
+    count: 1
+  }
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "oritech:carbon_plating_block"
+    }
+    B: {
+      item: "oritech:machine_core_3"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/3k3wgg94toj5ztb1b4u5m0sfj</summary>

```diff
+{
+  type: "modern_industrialization:star_altar"
+  eu: 2048
+  duration: 200
+  item_outputs: [
+    {
+      item: "allthetweaks:atm_star"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthemodium:unobtainium_allthemodium_alloy_block"
+      amount: 28
+    }
+    {
+      item: "allthecompressed:nether_star_block_3x"
+      amount: 15
+    }
+    {
+      items: "allthemodium:unobtainium_vibranium_alloy_block"
+      components: {
+        minecraft:enchantments: {
+          levels: {
+            minecraft:unbreaking: 1
+          }
+        }
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
+      }
+      type: "neoforge:components"
+      amount: 2
+    }
+    {
+      item: "allthetweaks:oblivion_shard"
+      amount: 1
+    }
+    {
+      item: "mysticalagradditions:creative_essence"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:nexium_emitter"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:withers_compass"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:improbable_probability_device"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:dragon_soul"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:philosophers_fuel"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:pulsating_black_hole"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:dimensional_seed"
+      amount: 1
+    }
+    {
+      item: "allthetweaks:patrick_star"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/5xmy0zpotp3xec34pay2nzjbu</summary>

```diff
+{
+  type: "modern_industrialization:star_altar"
+  eu: 2048
+  duration: 200
+  item_outputs: [
+    {
+      item: "allthetweaks:atm_star"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:lens_of_the_killer"
+      amount: 1
+    }
+    {
+      item: "kubejs:atm_star_shard_1"
+      amount: 1
+    }
+    {
+      item: "kubejs:atm_star_shard_2"
+      amount: 1
+    }
+    {
+      item: "kubejs:atm_star_shard_3"
+      amount: 1
+    }
+    {
+      item: "kubejs:atm_star_shard_4"
+      amount: 1
+    }
+    {
+      item: "kubejs:atm_star_shard_5"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:corrupti_dust"
+      amount: 1
+    }
+    {
+      items: "allthetweaks:patrick_star"
+      components: {
+        minecraft:enchantments: {
+          levels: {
+            minecraft:mending: 1
+          }
+        }
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
+      }
+      type: "neoforge:components"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/60hv3tkvt26hmr3ho5tex3wh2</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_item_output_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:chiseled_polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_item"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/e0fx3k8dgdhqb0svsmd86c75i</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_fluid_output_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:chiseled_polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>storagedelight/small_acacia_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:acacia_slab"
+    }
+    B: {
+      item: "minecraft:acacia_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_acacia_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_bamboo_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:bamboo_slab"
+    }
+    B: {
+      item: "minecraft:bamboo_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_bamboo_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_birch_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:birch_slab"
+    }
+    B: {
+      item: "minecraft:birch_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_birch_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_cherry_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:cherry_slab"
+    }
+    B: {
+      item: "minecraft:cherry_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_cherry_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_crimson_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:crimson_slab"
+    }
+    B: {
+      item: "minecraft:crimson_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_crimson_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_dark_oak_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:dark_oak_slab"
+    }
+    B: {
+      item: "minecraft:dark_oak_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_dark_oak_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_jungle_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:dark_oak_slab"
+    }
+    B: {
+      item: "minecraft:dark_oak_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_jungle_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_mangrove_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:mangrove_slab"
+    }
+    B: {
+      item: "minecraft:mangrove_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_mangrove_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_oak_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:oak_slab"
+    }
+    B: {
+      item: "minecraft:oak_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_oak_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_spruce_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:spruce_slab"
+    }
+    B: {
+      item: "minecraft:spruce_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_spruce_drawers"
+  }
+}

```


</details>

<details>
<summary>storagedelight/small_warped_drawers</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  pattern: [
+    "AAA"
+    "ABA"
+    "AAA"
+  ]
+  key: {
+    A: {
+      item: "minecraft:warped_slab"
+    }
+    B: {
+      item: "minecraft:warped_trapdoor"
+    }
+  }
+  result: {
+    id: "storagedelight:small_warped_drawers"
+  }
+}

```


</details>

<details>
<summary>supplementaries/cannon_boat_oak/undergarden/ancient_root</summary>

```diff
+{
+  category: "misc"
+  result: {
+    id: "supplementaries:undergarden/cannon_boat_ancient_root"
+    count: 1
+  }
+  ingredients: [
+    {
+      ingredient: {
+        item: "supplementaries:cannon"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "undergarden:ancient_root"
+      type: "moonlight:block_type_swap"
+    }
+    {
+      ingredient: {
+        item: "minecraft:oak_boat"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "undergarden:ancient_root"
+      type: "moonlight:block_type_swap"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+}

```


</details>

<details>
<summary>supplementaries/way_sign_oak/undergarden/ancient_root</summary>

```diff
+{
+  category: "misc"
+  result: {
+    id: "supplementaries:undergarden/way_sign_ancient_root"
+    count: 2
+  }
+  ingredients: [
+    {
+      ingredient: {
+        item: "minecraft:oak_sign"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "undergarden:ancient_root"
+      type: "moonlight:block_type_swap"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>storagedelight/crimson_bookshelf_with_door</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   pattern: [
     "AAA"
     "BAC"
     "AAA"
   ]
   key: {
     A: {
-      item: "minecraft:cherry_slab"
+      item: "minecraft:crimson_slab"
     }
     B: {
-      item: "minecraft:cherry_trapdoor"
+      item: "minecraft:crimson_trapdoor"
     }
     C: {
       item: "minecraft:bookshelf"
     }
   }
   result: {
     id: "storagedelight:crimson_bookshelf_with_door"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (65)</summary>
<blockquote>

<details>
<summary>almostunified/oritechthings</summary>

```diff
-{
-  type: "almostunified:client_recipe_tracker"
-  namespace: "oritechthings"
-  recipes: [
-    "1$advanced_target_designator"
-  ]
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/6bz71h5faq2jex2xl31562llf</summary>

```diff
-{
-  type: "modern_industrialization:star_altar"
-  eu: 2048
-  duration: 200
-  item_outputs: [
-    {
-      item: "allthetweaks:atm_star"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "actuallyadditions:lens_of_the_killer"
-      amount: 1
-    }
-    {
-      item: "kubejs:atm_star_shard_1"
-      amount: 1
-    }
-    {
-      item: "kubejs:atm_star_shard_2"
-      amount: 1
-    }
-    {
-      item: "kubejs:atm_star_shard_3"
-      amount: 1
-    }
-    {
-      item: "kubejs:atm_star_shard_4"
-      amount: 1
-    }
-    {
-      item: "kubejs:atm_star_shard_5"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:corrupti_dust"
-      amount: 1
-    }
-    {
-      items: "allthetweaks:patrick_star"
-      components: {
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
-        minecraft:enchantments: {
-          levels: {
-            minecraft:mending: 1
-          }
-        }
-      }
-      type: "neoforge:components"
-      amount: 1
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/9ow2l7hpjv8ubedqgy0xh81k9</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_item_output_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_item"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/bmce927ft1f0vwwu8de1forsl</summary>

```diff
-{
-  type: "modern_industrialization:star_altar"
-  eu: 2048
-  duration: 200
-  item_outputs: [
-    {
-      item: "allthetweaks:atm_star"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "allthemodium:unobtainium_allthemodium_alloy_block"
-      amount: 28
-    }
-    {
-      item: "allthecompressed:nether_star_block_3x"
-      amount: 15
-    }
-    {
-      items: "allthemodium:unobtainium_vibranium_alloy_block"
-      components: {
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
-        minecraft:enchantments: {
-          levels: {
-            minecraft:unbreaking: 1
-          }
-        }
-      }
-      type: "neoforge:components"
-      amount: 2
-    }
-    {
-      item: "allthetweaks:oblivion_shard"
-      amount: 1
-    }
-    {
-      item: "mysticalagradditions:creative_essence"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:nexium_emitter"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:withers_compass"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:improbable_probability_device"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:dragon_soul"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:philosophers_fuel"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:pulsating_black_hole"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:dimensional_seed"
-      amount: 1
-    }
-    {
-      item: "allthetweaks:patrick_star"
-      amount: 1
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/ddrwpxwnwbst4t4a1hik9x30t</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_fluid_output_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_fluids"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>oritech/crafting/core3</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    c: {
-      tag: "c:dusts/redstone"
-    }
-    s: {
-      tag: "c:carbon_fibre"
-    }
-  }
-  pattern: [
-    "sss"
-    "scs"
-    "sss"
-  ]
-  result: {
-    count: 1
-    id: "oritech:machine_core_3"
-  }
-}

```


</details>

<details>
<summary>oritech/crafting/core3alt</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    c: {
-      tag: "c:dusts/redstone"
-    }
-    s: {
-      tag: "c:ingots/nickel"
-    }
-  }
-  pattern: [
-    "sss"
-    "scs"
-    "sss"
-  ]
-  result: {
-    count: 1
-    id: "oritech:machine_core_3"
-  }
-}

```


</details>

<details>
<summary>oritech/crafting/extender</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    c: {
-      item: "oritech:machine_core_2"
-    }
-    s: {
-      tag: "oritech:plating"
-    }
-  }
-  pattern: [
-    "sss"
-    "scs"
-    "sss"
-  ]
-  result: {
-    count: 1
-    id: "oritech:machine_extender"
-  }
-}

```


</details>

<details>
<summary>oritechthings/addon_block_acceptor_tier_2</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    e: {
-      item: "oritech:machine_extender"
-    }
-    a: {
-      item: "oritech:machine_acceptor_addon"
-    }
-    b: {
-      tag: "c:storage_blocks/energite"
-    }
-    p: {
-      tag: "c:plates/plastic"
-    }
-    s: {
-      tag: "c:ingots/electrum"
-    }
-  }
-  pattern: [
-    "ppp"
-    "aea"
-    "sbs"
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:addon_block_acceptor_tier_2"
-  }
-}

```


</details>

<details>
<summary>oritechthings/addon_block_capacitor_tier_2</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    e: {
-      item: "oritech:machine_extender"
-    }
-    a: {
-      item: "oritech:machine_capacitor_addon"
-    }
-    b: {
-      tag: "c:storage_blocks/energite"
-    }
-    p: {
-      tag: "c:plates/plastic"
-    }
-    s: {
-      item: "oritech:energy_pipe"
-    }
-  }
-  pattern: [
-    "ppp"
-    "aea"
-    "sbs"
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:addon_block_capacitor_tier_2"
-  }
-}

```


</details>

<details>
<summary>oritechthings/addon_block_efficiency_tier_2</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    e: {
-      item: "oritech:machine_extender"
-    }
-    a: {
-      item: "oritech:machine_efficiency_addon"
-    }
-    b: {
-      tag: "c:storage_blocks/electrum"
-    }
-    p: {
-      tag: "c:plates/plastic"
-    }
-    s: {
-      tag: "c:silicon"
-    }
-  }
-  pattern: [
-    "ppp"
-    "aea"
-    "sbs"
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:addon_block_efficiency_tier_2"
-  }
-}

```


</details>

<details>
<summary>oritechthings/addon_block_processing_tier_2</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    e: {
-      item: "oritech:machine_extender"
-    }
-    a: {
-      item: "oritech:machine_processing_addon"
-    }
-    b: {
-      tag: "c:storage_blocks/electrum"
-    }
-    p: {
-      tag: "c:plates/plastic"
-    }
-    s: {
-      item: "minecraft:comparator"
-    }
-  }
-  pattern: [
-    "ppp"
-    "aea"
-    "sbs"
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:addon_block_processing_tier_2"
-  }
-}

```


</details>

<details>
<summary>oritechthings/addon_block_speed_tier_2</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    e: {
-      item: "oritech:machine_extender"
-    }
-    a: {
-      item: "oritech:machine_speed_addon"
-    }
-    b: {
-      item: "oritech:biosteel_block"
-    }
-    p: {
-      tag: "c:plates/plastic"
-    }
-    s: {
-      tag: "c:silicon"
-    }
-  }
-  pattern: [
-    "ppp"
-    "aea"
-    "sbs"
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:addon_block_speed_tier_2"
-  }
-}

```


</details>

<details>
<summary>oritechthings/advanced_target_designator</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      tag: "c:silicon"
-    }
-    {
-      item: "oritech:target_designator"
-    }
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:advanced_target_designator"
-  }
-}

```


</details>

<details>
<summary>oritechthings/advanced_target_designator_clear</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "oritechthings:advanced_target_designator"
-    }
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:advanced_target_designator"
-  }
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_acceptor_tier_2</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      tag: "c:storage_blocks/energite"
-    }
-    {
-      item: "oritech:machine_extender"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_acceptor_tier_3</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_2"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_acceptor_tier_4</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_3"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_acceptor_tier_5</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_4"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_capacitor_tier_2</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      tag: "c:storage_blocks/energite"
-    }
-    {
-      item: "oritech:machine_extender"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_capacitor_tier_3</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_2"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_capacitor_tier_4</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_3"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_capacitor_tier_5</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_4"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      tag: "c:ingots/energite"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_efficiency_tier_2</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      tag: "c:storage_blocks/electrum"
-    }
-    {
-      item: "oritech:machine_extender"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_efficiency_tier_3</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_2"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_efficiency_tier_4</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_3"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_efficiency_tier_5</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_4"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_processing_tier_2</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      tag: "c:storage_blocks/electrum"
-    }
-    {
-      item: "oritech:machine_extender"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_processing_tier_3</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_2"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_processing_tier_4</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_3"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_processing_tier_5</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_4"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      tag: "c:ingots/electrum"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_speed_tier_2</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:biosteel_block"
-    }
-    {
-      item: "oritech:machine_extender"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_speed_tier_3</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_2"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:biosteel_ingot"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_speed_tier_4</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_3"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:biosteel_ingot"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/assembler/addon_block_speed_tier_5</summary>

```diff
-{
-  type: "oritech:assembler"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_4"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:biosteel_ingot"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/accelerator_speed_sensor</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritech:accelerator_sensor"
-    }
-    {
-      item: "oritech:duratium_ingot"
-    }
-    {
-      item: "minecraft:ender_eye"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:accelerator_speed_sensor"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_acceptor_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_5"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_acceptor_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_6"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_acceptor_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_7"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_acceptor_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_acceptor_tier_8"
-    }
-    {
-      item: "oritech:machine_acceptor_addon"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_acceptor_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_capacitor_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_5"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_capacitor_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_6"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_capacitor_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_7"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_capacitor_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_capacitor_tier_8"
-    }
-    {
-      item: "oritech:machine_capacitor_addon"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_capacitor_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficiency_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_5"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficiency_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_6"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficiency_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_7"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficiency_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_efficiency_tier_8"
-    }
-    {
-      item: "oritech:machine_efficiency_addon"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficiency_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_2</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_2"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_2"
-    }
-    {
-      tag: "c:storage_blocks/electrum"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_2"
-    }
-  ]
-  time: 100
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_3</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_3"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_3"
-    }
-    {
-      item: "oritech:magnetic_coil"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_3"
-    }
-  ]
-  time: 150
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_4</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_4"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_4"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_4"
-    }
-  ]
-  time: 200
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_5</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_5"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_5"
-    }
-    {
-      item: "oritech:flux_gate"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_5"
-    }
-  ]
-  time: 250
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_6"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_6"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_7"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_7"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_8"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_8"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_efficient_speed_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_9"
-    }
-    {
-      item: "oritechthings:addon_block_efficiency_tier_9"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_efficient_speed_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_processing_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_5"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_processing_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_6"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_processing_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_7"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_processing_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_processing_tier_8"
-    }
-    {
-      item: "oritech:machine_processing_addon"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_processing_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_speed_tier_6</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_5"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:advanced_computing_engine"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_6"
-    }
-  ]
-  time: 300
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_speed_tier_7</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_6"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:heisenberg_compensator"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_7"
-    }
-  ]
-  time: 350
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_speed_tier_8</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_7"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:prometheum_ingot"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_8"
-    }
-  ]
-  time: 400
-}

```


</details>

<details>
<summary>oritechthings/atomicforge/addon_block_speed_tier_9</summary>

```diff
-{
-  type: "oritech:atomic_forge"
-  fluidInputAmount: 0
-  fluidInputVariant: "minecraft:empty"
-  fluidOutputAmount: 0
-  fluidOutputVariant: "minecraft:empty"
-  ingredients: [
-    {
-      item: "oritechthings:addon_block_speed_tier_8"
-    }
-    {
-      item: "oritech:machine_speed_addon"
-    }
-    {
-      item: "oritech:machine_core_7"
-    }
-  ]
-  results: [
-    {
-      count: 1
-      id: "oritechthings:addon_block_speed_tier_9"
-    }
-  ]
-  time: 450
-}

```


</details>

<details>
<summary>oritechthings/frame_placer</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "oritech:machine_frame_block"
-    }
-    {
-      item: "oritech:motor"
-    }
-  ]
-  result: {
-    count: 1
-    id: "oritechthings:frame_placer"
-  }
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
<summary>minecraft:item/c:hidden_from_recipe_viewer</summary>

```diff
+[
+  "moonlight:placeable_item"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (6)</summary>
<blockquote>

<details>
<summary>minecraft:block/ars_nouveau:whirlisprig/greatly_likes</summary>

```diff
 [
   ... (14 entries)
+  "minecraft:spore_blossom"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/immersiveengineering:mineable/grinding_disk</summary>

```diff
 [
   ... (92 entries)
+  "immersiveengineering:shelf"
   ... (48 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (4864 entries)
+  "storagedelight:small_acacia_drawers"
+  "storagedelight:small_bamboo_drawers"
+  "storagedelight:small_birch_drawers"
+  "storagedelight:small_cherry_drawers"
+  "storagedelight:small_crimson_drawers"
+  "storagedelight:small_dark_oak_drawers"
+  "storagedelight:small_jungle_drawers"
+  "storagedelight:small_mangrove_drawers"
+  "storagedelight:small_oak_drawers"
+  "storagedelight:small_spruce_drawers"
+  "storagedelight:small_warped_drawers"
   ... (150 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (248 entries)
-  "#oritechthings:addons"
   ... (5501 entries)
+  "immersiveengineering:shelf"
   ... (3069 entries)
-  "oritechthings:infested_amethyst_block"
-  "oritechthings:particle_accelerator_speed_sensor"
   ... (3722 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/c:bosses</summary>

```diff
 [
   ... (1 entries)
+  "#neoforge:bosses"
   ... (31 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:cannon_boats</summary>

```diff
 [
   ... (4 entries)
+  "supplementaries:undergarden/cannon_boat_ancient_root"
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (16)</summary>
<blockquote>

<details>
<summary>minecraft:block/oritechthings:addons</summary>

```diff
-[
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:particle_accelerator</summary>

```diff
-[
-  "oritechthings:particle_accelerator_speed_sensor"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_acceptor</summary>

```diff
-[
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_capacitor</summary>

```diff
-[
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_efficiency</summary>

```diff
-[
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_efficient_speed</summary>

```diff
-[
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_processing</summary>

```diff
-[
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-]

```


</details>

<details>
<summary>minecraft:block/oritechthings:tiered_addon_speed</summary>

```diff
-[
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:addons</summary>

```diff
-[
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:particle_accelerator</summary>

```diff
-[
-  "oritechthings:particle_accelerator_speed_sensor"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_acceptor</summary>

```diff
-[
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_capacitor</summary>

```diff
-[
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_efficiency</summary>

```diff
-[
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_efficient_speed</summary>

```diff
-[
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_processing</summary>

```diff
-[
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-]

```


</details>

<details>
<summary>minecraft:item/oritechthings:tiered_addon_speed</summary>

```diff
-[
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (4)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (2439 entries)
+  "ars_nouveau:particle_block"
   ... (22603 entries)
+  "immersiveengineering:shelf"
   ... (6966 entries)
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-  "oritechthings:infested_amethyst_block"
-  "oritechthings:particle_accelerator_speed_sensor"
   ... (9705 entries)
+  "storagedelight:small_acacia_drawers"
+  "storagedelight:small_bamboo_drawers"
+  "storagedelight:small_birch_drawers"
+  "storagedelight:small_cherry_drawers"
+  "storagedelight:small_crimson_drawers"
+  "storagedelight:small_dark_oak_drawers"
+  "storagedelight:small_jungle_drawers"
+  "storagedelight:small_mangrove_drawers"
+  "storagedelight:small_oak_drawers"
+  "storagedelight:small_spruce_drawers"
+  "storagedelight:small_warped_drawers"
   ... (2270 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (155 entries)
+  "ars_nouveau:particle_block"
   ... (826 entries)
+  "immersiveengineering:shelf_dummy"
+  "immersiveengineering:shelf_master"
   ... (786 entries)
-  "oritechthings:accelerator_speed_sensor_block_entity"
-  "oritechthings:tier_addon"
   ... (463 entries)
+  "storagedelight:small_drawers"
   ... (169 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (883 entries)
-  "oritechthings:amethyst_fish"
   ... (266 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (3629 entries)
+  "ars_nouveau:glyph_prestidigitation"
   ... (28625 entries)
+  "immersiveengineering:shelf"
   ... (10147 entries)
-  "oritechthings:addon_block_acceptor_tier_2"
-  "oritechthings:addon_block_acceptor_tier_3"
-  "oritechthings:addon_block_acceptor_tier_4"
-  "oritechthings:addon_block_acceptor_tier_5"
-  "oritechthings:addon_block_acceptor_tier_6"
-  "oritechthings:addon_block_acceptor_tier_7"
-  "oritechthings:addon_block_acceptor_tier_8"
-  "oritechthings:addon_block_acceptor_tier_9"
-  "oritechthings:addon_block_capacitor_tier_2"
-  "oritechthings:addon_block_capacitor_tier_3"
-  "oritechthings:addon_block_capacitor_tier_4"
-  "oritechthings:addon_block_capacitor_tier_5"
-  "oritechthings:addon_block_capacitor_tier_6"
-  "oritechthings:addon_block_capacitor_tier_7"
-  "oritechthings:addon_block_capacitor_tier_8"
-  "oritechthings:addon_block_capacitor_tier_9"
-  "oritechthings:addon_block_efficiency_tier_2"
-  "oritechthings:addon_block_efficiency_tier_3"
-  "oritechthings:addon_block_efficiency_tier_4"
-  "oritechthings:addon_block_efficiency_tier_5"
-  "oritechthings:addon_block_efficiency_tier_6"
-  "oritechthings:addon_block_efficiency_tier_7"
-  "oritechthings:addon_block_efficiency_tier_8"
-  "oritechthings:addon_block_efficiency_tier_9"
-  "oritechthings:addon_block_efficient_speed_tier_2"
-  "oritechthings:addon_block_efficient_speed_tier_3"
-  "oritechthings:addon_block_efficient_speed_tier_4"
-  "oritechthings:addon_block_efficient_speed_tier_5"
-  "oritechthings:addon_block_efficient_speed_tier_6"
-  "oritechthings:addon_block_efficient_speed_tier_7"
-  "oritechthings:addon_block_efficient_speed_tier_8"
-  "oritechthings:addon_block_efficient_speed_tier_9"
-  "oritechthings:addon_block_processing_tier_2"
-  "oritechthings:addon_block_processing_tier_3"
-  "oritechthings:addon_block_processing_tier_4"
-  "oritechthings:addon_block_processing_tier_5"
-  "oritechthings:addon_block_processing_tier_6"
-  "oritechthings:addon_block_processing_tier_7"
-  "oritechthings:addon_block_processing_tier_8"
-  "oritechthings:addon_block_processing_tier_9"
-  "oritechthings:addon_block_speed_tier_2"
-  "oritechthings:addon_block_speed_tier_3"
-  "oritechthings:addon_block_speed_tier_4"
-  "oritechthings:addon_block_speed_tier_5"
-  "oritechthings:addon_block_speed_tier_6"
-  "oritechthings:addon_block_speed_tier_7"
-  "oritechthings:addon_block_speed_tier_8"
-  "oritechthings:addon_block_speed_tier_9"
-  "oritechthings:advanced_target_designator"
-  "oritechthings:amethyst_fish_spawn_egg"
-  "oritechthings:frame_placer"
-  "oritechthings:infested_amethyst_block"
-  "oritechthings:particle_accelerator_speed_sensor"
   ... (2240 entries)
+  "productivelib:upgrade_pollen_sieve"
   ... (9562 entries)
+  "storagedelight:small_acacia_drawers"
+  "storagedelight:small_bamboo_drawers"
+  "storagedelight:small_birch_drawers"
+  "storagedelight:small_cherry_drawers"
+  "storagedelight:small_crimson_drawers"
+  "storagedelight:small_dark_oak_drawers"
+  "storagedelight:small_jungle_drawers"
+  "storagedelight:small_mangrove_drawers"
+  "storagedelight:small_oak_drawers"
+  "storagedelight:small_spruce_drawers"
+  "storagedelight:small_warped_drawers"
   ... (466 entries)
+  "supplementaries:undergarden/cannon_boat_ancient_root"
+  "supplementaries:undergarden/way_sign_ancient_root"
   ... (2927 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (12)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/immersiveengineering/blocks/shelf</summary>

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
+          type: "immersiveengineering:drop_inv"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "immersiveengineering:multiblock"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immersiveengineering:blocks/shelf"
+}

```


</details>

<details>
<summary>minecraft/loot_table/storagedelight/blocks/small_acacia_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_acacia_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_bamboo_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_bamboo_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_birch_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_birch_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_cherry_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_cherry_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_crimson_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_crimson_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_dark_oak_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_dark_oak_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_jungle_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_jungle_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_mangrove_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_mangrove_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_oak_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_oak_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_spruce_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_spruce_drawers"
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
<summary>minecraft/loot_table/storagedelight/blocks/small_warped_drawers</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      name: "pool1"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "storagedelight:small_warped_drawers"
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

<details>
<summary>Removed (51)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_acceptor_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_acceptor_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_acceptor_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_capacitor_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_capacitor_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_capacitor_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficiency_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficiency_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficiency_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_efficient_speed_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_efficient_speed_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_efficient_speed_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_processing_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_processing_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_processing_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_2</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_2"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_2"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_3</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_3"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_3"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_4</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_4"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_4"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_5</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_5"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_5"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_6</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_6"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_6"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_7</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_7"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_7"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_8</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_8"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_8"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/addon_block_speed_tier_9</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:addon_block_speed_tier_9"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/addon_block_speed_tier_9"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/infested_amethyst_block</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "minecraft:amethyst_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/infested_amethyst_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/blocks/particle_accelerator_speed_sensor</summary>

```diff
-{
-  type: "minecraft:block"
-  pools: [
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:survives_explosion"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          name: "oritechthings:particle_accelerator_speed_sensor"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:blocks/particle_accelerator_speed_sensor"
-}

```


</details>

<details>
<summary>minecraft/loot_table/oritechthings/entities/amethyst_fish</summary>

```diff
-{
-  type: "minecraft:entity"
-  pools: [
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          conditions: [
-            {
-              chance: 0.5
-              condition: "minecraft:random_chance"
-            }
-          ]
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: 0
-              }
-              function: "minecraft:set_count"
-            }
-            {
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: 0
-              }
-              enchantment: "minecraft:looting"
-              function: "minecraft:enchanted_count_increase"
-            }
-          ]
-          name: "oritech:fluxite"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          conditions: [
-            {
-              chance: 0.5
-              condition: "minecraft:random_chance"
-            }
-          ]
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: 0
-              }
-              function: "minecraft:set_count"
-            }
-            {
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: 0
-              }
-              enchantment: "minecraft:looting"
-              function: "minecraft:enchanted_count_increase"
-            }
-          ]
-          name: "minecraft:amethyst_shard"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:killed_by_player"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          conditions: [
-            {
-              chance: 0.2
-              condition: "minecraft:random_chance"
-            }
-          ]
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: -3
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "minecraft:amethyst_block"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          condition: "minecraft:killed_by_player"
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          conditions: [
-            {
-              chance: 0.1
-              condition: "minecraft:random_chance"
-            }
-          ]
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 1
-                min: -5
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "minecraft:budding_amethyst"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "oritechthings:entities/amethyst_fish"
-}

```


</details>

</blockquote>

</details>

