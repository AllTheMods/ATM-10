# Changelog

# 📦 2.31

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (1)</summary>

- Immersive Energistics (1.1.0-beta)

</details>

<details>
<summary>Updated (45)</summary>

- Applied Energistics 2 (19.1.3-beta) -> (19.2.2-beta)
- Allthemodium (2.8.9) -> (2.8.10)
- Oh The Biomes We've Gone (2.3.2) -> (2.3.3)
- UI Library Mod (1.0.192-1.21.1-snapshot) -> (1.0.194-1.21.1-snapshot)
- Bookshelf (21.1.45) -> (21.1.46)
- Byzantine (27) -> (28)
- L_Ender's Cataclysm (1.21.1-2.44) -> (2.46-1.21.1)
- Crash Assistant (1.3.0) -> (1.3.2)
- Dyenamics (1.21.1-3.2.1) -> (1.21.1-3.3.0)
- Ender Core (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO Armory (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO Base (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO Conduits (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO Modded Conduits (7.1.5-alpha) -> (7.1.6-alpha)
- Ender IO Machines (7.1.5-alpha) -> (7.1.6-alpha)
- Euphoria Patcher (1.4.3-r5.3-neoforge) -> (1.5.2-r5.4-neoforge)
- Extended Industrialization (1.11.5-beta-1.21.1) -> (1.13.2-1.21.1)
- ExtendedAE (1.21-2.1.10-neoforge) -> (1.21-2.2.0-neoforge)
- FTB Library (2101.1.7) -> (2101.1.8)
- GuideME (2.3.0) -> (2.5.1)
- Luminax (1.2.1) -> (1.2.2)
- Mahou Tsukai (1.21.0-v1.35.40) -> (1.21.0-v1.35.41)
- MineColonies (1.1.857-1.21.1-snapshot) -> (1.1.864-1.21.1-snapshot)
- Modern Industrialization (2.2.32) -> (2.2.33)
- Moonlight Lib (1.21-2.17.20) -> (1.21-2.17.21)
- NeoForge (21.1.114) -> (21.1.115)
- Nolijium (0.5.2) -> (0.5.3)
- PneumaticCraft: Repressurized (8.2.6) -> (8.2.8)
- PotionsMaster (0.6.6-packdev) -> (0.6.7-packdev)
- Powah (6.1.5) -> (6.1.6)
- Productive Bees (1.21.1-13.6.9) -> (1.21.1-13.6.10)
- Productive Lib (1.21.0-0.1.9) -> (1.21.0-0.1.10)
- RAR-Compat (0.8.5.2) -> (0.9)
- Relics (0.10.3.2) -> (0.10.4)
- Resourcefulconfig (3.0.8) -> (3.0.9)
- Sophisticated Backpacks (3.22.8) -> (3.23.1)
- Sophisticated Core (1.1.6) -> (1.2.1)
- Sophisticated Storage (1.2.11) -> (1.3.0)
- Stylecolonies (1.11) -> (1.12)
- Tesseract API (1.6.7-beta-1.21.1) -> (1.7.0-1.21.1)
- The Bumblezone (7.7.15+1.21.1-neoforge) -> (7.7.17+1.21.1-neoforge)
- Corail Tombstone (9.2.4) -> (9.2.5)
- Variants&Ventures (1.0.9) -> (1.0.10)
- Waystones (21.1.5) -> (21.1.8)

</details>

## 🍳 Recipes

<details open>
<summary>Added (6)</summary>
<blockquote>

<details>
<summary>extended_industrialization/assembler/silk_touch_module</summary>

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
+      item: "modern_industrialization:invar_rotary_blade"
+    }
+    {
+      amount: 4
+      item: "modern_industrialization:robot_arm"
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 1
+      item: "extended_industrialization:silk_touch_module"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/craft/tesla_particle_generator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    C: {
+      item: "modern_industrialization:electronic_circuit"
+    }
+    T: {
+      item: "extended_industrialization:silver_tesla_top_load"
+    }
+  }
+  pattern: [
+    "T"
+    "C"
+  ]
+  result: {
+    count: 1
+    id: "extended_industrialization:tesla_particle_generator"
+  }
+}

```


</details>

<details>
<summary>immeng/connector_me</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    F: {
+      item: "ae2:fluix_block"
+    }
+    f: {
+      item: "ae2:fluix_crystal"
+    }
+  }
+  pattern: [
+    " f "
+    "FfF"
+    "FfF"
+  ]
+  result: {
+    count: 4
+    id: "immeng:connector_me"
+  }
+}

```


</details>

<details>
<summary>immeng/connector_me_relay</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    F: {
+      item: "ae2:fluix_block"
+    }
+    f: {
+      item: "ae2:fluix_crystal"
+    }
+  }
+  pattern: [
+    " f "
+    "FfF"
+  ]
+  result: {
+    count: 8
+    id: "immeng:connector_me_relay"
+  }
+}

```


</details>

<details>
<summary>immeng/wirecoil_me</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "ae2:fluix_glass_cable"
+    }
+    s: {
+      tag: "c:rods/wooden"
+    }
+  }
+  pattern: [
+    " c "
+    "csc"
+    " c "
+  ]
+  result: {
+    count: 4
+    id: "immeng:wirecoil_me"
+  }
+}

```


</details>

<details>
<summary>immeng/wirecoil_me_dense</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    c: {
+      item: "ae2:fluix_covered_dense_cable"
+    }
+    s: {
+      tag: "c:rods/wooden"
+    }
+  }
+  pattern: [
+    " c "
+    "csc"
+    " c "
+  ]
+  result: {
+    count: 4
+    id: "immeng:wirecoil_me_dense"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (33)</summary>
<blockquote>

<details>
<summary>allthemods/allthetweaks/dragon_soul</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     id: "allthetweaks:dragon_soul"
     count: 1
   }
   pattern: [
     "CDA"
     "SNI"
     "BGE"
   ]
   key: {
     A: {
       item: "occultism:spawn_egg/familiar_dragon"
     }
     B: {
       items: "productivebees:spawn_egg_configurable_bee"
       components: {
         minecraft:entity_data: {
           type: "productivebees:soul_lava"
           id: "productivebees:configurable_bee"
         }
       }
       type: "neoforge:components"
     }
     C: {
       item: "apothic_enchanting:infused_breath"
     }
     S: {
       item: "productivetrees:socotra_dragon_sapling"
     }
     D: {
       item: "occultism:soul_gem"
     }
     E: {
       item: "eternal_starlight:chain_of_souls"
     }
     G: {
-      item: "productivebees:inactive_dragon_egg"
+      item: "cataclysm:abyssal_sacrifice"
     }
     I: {
       item: "allthemodium:piglich_heart_block"
     }
     N: [
       {
         items: "hostilenetworks:data_model"
         components: {
           hostilenetworks:data: 1255
           hostilenetworks:data_model: "hostilenetworks:ender_dragon"
         }
         type: "neoforge:components"
       }
       {
         items: "hostilenetworks:data_model"
         components: {
           hostilenetworks:data: 1254
           hostilenetworks:data_model: "hostilenetworks:ender_dragon"
         }
         type: "neoforge:components"
       }
     ]
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>allthemods/allthetweaks/oblivion_shard</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     id: "allthetweaks:oblivion_shard"
     count: 1
   }
   pattern: [
     "DAB"
     "ECF"
     "BGD"
   ]
   key: {
     A: {
       item: "forbidden_arcanus:eternal_stella"
     }
     B: {
       item: "evilcraft:piercing_vengeance_focus"
     }
     C: {
       items: "evilcraft:mace_of_destruction"
       components: {
         cyclopscore:fluid_content: {
           id: "evilcraft:blood"
           amount: 4000
         }
       }
       type: "neoforge:components"
     }
     D: {
       item: "stevescarts:module_galgadorian_drill"
     }
     E: {
-      item: "twilightforest:hydra_trophy"
+      item: "cataclysm:meat_shredder"
     }
     F: {
-      item: "twilightforest:snow_queen_trophy"
+      item: "cataclysm:void_forge"
     }
     G: {
-      item: "twilightforest:ur_ghast_trophy"
+      item: "twilightforest:snow_queen_trophy"
     }
   }
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>almostunified/extended_industrialization</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "extended_industrialization"
   recipes: [
     "1$casing/assembler/steel_plated_bricks"
     "1$casing/craft/steel_plated_bricks"
     "1$machines/bending_machine/assembler/bronze"
     "1$machines/bending_machine/craft/bronze"
     "1$machines/composter/assembler/bronze"
     "1$machines/composter/craft/bronze"
+    "1$machines/lethal_tesla_coil/assembler"
+    "1$machines/lethal_tesla_coil/craft"
     "1$materials/bronze/alloy_smelter/block"
     "1$materials/bronze/alloy_smelter/dust"
     "1$materials/bronze/alloy_smelter/ingot"
     "1$materials/bronze/alloy_smelter/tiny_dust"
     "1$materials/electrum/alloy_smelter/block"
     "1$materials/electrum/alloy_smelter/dust"
     "1$materials/electrum/alloy_smelter/ingot"
     "1$materials/electrum/alloy_smelter/tiny_dust"
     "1$materials/invar/alloy_smelter/block"
     "1$materials/invar/alloy_smelter/dust"
     "1$materials/invar/alloy_smelter/ingot"
     "1$materials/invar/alloy_smelter/tiny_dust"
     "1$materials/silver/macerator/curved_plate"
     "1$tool/craft/steam_chainsaw"
     "1$vanilla_recipes/macerator/netherite_ingot_to_dust"
     "1$vanilla_recipes/mixer/waxing_with_honey/copper_block"
   ]
 }

```


</details>

<details>
<summary>biomeswevegone/aspen_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:aspen_planks"
+      item: "biomeswevegone:aspen_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:aspen_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/baobab_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:baobab_planks"
+      item: "biomeswevegone:baobab_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:baobab_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/blue_enchanted_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:blue_enchanted_planks"
+      item: "biomeswevegone:blue_enchanted_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:blue_enchanted_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/cika_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:cika_planks"
+      item: "biomeswevegone:cika_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:cika_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/cypress_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:cypress_planks"
+      item: "biomeswevegone:cypress_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:cypress_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/ebony_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:ebony_planks"
+      item: "biomeswevegone:ebony_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:ebony_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/fir_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:fir_planks"
+      item: "biomeswevegone:fir_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:fir_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/florus_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:florus_planks"
+      item: "biomeswevegone:florus_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:florus_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/green_enchanted_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:green_enchanted_planks"
+      item: "biomeswevegone:green_enchanted_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:green_enchanted_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/holly_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:holly_planks"
+      item: "biomeswevegone:holly_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:holly_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/ironwood_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:ironwood_planks"
+      item: "biomeswevegone:ironwood_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:ironwood_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/jacaranda_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:jacaranda_planks"
+      item: "biomeswevegone:jacaranda_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:jacaranda_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/mahogany_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:mahogany_planks"
+      item: "biomeswevegone:mahogany_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:mahogany_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/maple_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:maple_planks"
+      item: "biomeswevegone:maple_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:maple_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/palm_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:palm_planks"
+      item: "biomeswevegone:palm_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:palm_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/pine_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:pine_planks"
+      item: "biomeswevegone:pine_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:pine_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/rainbow_eucalyptus_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:rainbow_eucalyptus_planks"
+      item: "biomeswevegone:rainbow_eucalyptus_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:rainbow_eucalyptus_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/redwood_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:redwood_planks"
+      item: "biomeswevegone:redwood_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:redwood_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/sakura_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:sakura_planks"
+      item: "biomeswevegone:sakura_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:sakura_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/skyris_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:skyris_planks"
+      item: "biomeswevegone:skyris_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:skyris_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/spirit_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:spirit_planks"
+      item: "biomeswevegone:spirit_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:spirit_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/white_mangrove_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:white_mangrove_planks"
+      item: "biomeswevegone:white_mangrove_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:white_mangrove_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/willow_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:willow_planks"
+      item: "biomeswevegone:willow_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:willow_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/witch_hazel_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:witch_hazel_planks"
+      item: "biomeswevegone:witch_hazel_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:witch_hazel_chest_boat"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/zelkova_chest_boat</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   group: "chest_boat"
   ingredients: [
     {
       item: "minecraft:chest"
     }
     {
-      item: "biomeswevegone:zelkova_planks"
+      item: "biomeswevegone:zelkova_boat"
     }
   ]
   result: {
     count: 1
     id: "biomeswevegone:zelkova_chest_boat"
   }
 }

```


</details>

<details>
<summary>extended_industrialization/machines/lethal_tesla_coil/assembler</summary>

```diff
 {
   type: "modern_industrialization:assembler"
   duration: 200
   eu: 8
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:sodium_battery"
     }
-    {
-      amount: 4
-      item: "modern_industrialization:aluminum_cable"
-    }
     {
       amount: 2
       item: "modern_industrialization:electronic_circuit"
     }
     {
       amount: 1
       item: "modern_industrialization:advanced_machine_hull"
     }
     {
       amount: 1
       item: "extended_industrialization:silver_tesla_top_load"
     }
+    {
+      amount: 2
+      tag: "c:plates/tungsten"
+    }
+    {
+      amount: 2
+      item: "modern_industrialization:aluminum_cable"
+    }
   ]
   item_outputs: [
     {
       amount: 1
       item: "extended_industrialization:lethal_tesla_coil"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/machines/lethal_tesla_coil/craft</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
+    P: {
+      tag: "c:plates/tungsten"
+    }
     B: {
       item: "modern_industrialization:sodium_battery"
     }
     C: {
       item: "modern_industrialization:aluminum_cable"
     }
     E: {
       item: "modern_industrialization:electronic_circuit"
     }
     H: {
       item: "modern_industrialization:advanced_machine_hull"
     }
     L: {
       item: "extended_industrialization:silver_tesla_top_load"
     }
   }
   pattern: [
     "CHC"
-    "CLC"
     "EBE"
+    "PLP"
   ]
   result: {
     count: 1
     id: "extended_industrialization:lethal_tesla_coil"
   }
 }

```


</details>

<details>
<summary>modern_industrialization/quarry/allthemodium</summary>

```diff
 {
   type: "modern_industrialization:quarry"
   eu: 256
   duration: 600
   item_inputs: {
     item: "kubejs:allthemodium_drill"
     amount: 1
-    probability: 0.0001
+    probability: 0.000001
   }
   item_outputs: [
     {
       item: "minecraft:cobblestone"
       amount: 64
     }
     {
       item: "minecraft:diorite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:andesite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:granite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:dirt"
       amount: 10
       probability: 0.5
     }
     {
       item: "minecraft:gravel"
       amount: 10
       probability: 0.5
     }
     {
       item: "minecraft:cobbled_deepslate"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:tuff"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:iron_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "minecraft:coal_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "modern_industrialization:lignite_coal_ore"
       amount: 1
       probability: 0.24
     }
     {
       item: "minecraft:copper_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "alltheores:tin_ore"
       amount: 1
       probability: 0.3
     }
     {
       item: "minecraft:gold_ore"
       amount: 1
       probability: 0.15
     }
     {
       item: "minecraft:redstone_ore"
       amount: 1
       probability: 0.2
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
       item: "alltheores:osmium_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "modern_industrialization:titanium_ore"
       amount: 1
       probability: 0.15
     }
     {
       item: "modern_industrialization:tungsten_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "modern_industrialization:monazite_ore"
       amount: 1
       probability: 0.25
     }
     {
       item: "alltheores:platinum_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "modern_industrialization:antimony_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "minecraft:diamond_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "minecraft:lapis_ore"
       amount: 1
       probability: 0.1
     }
     {
       item: "alltheores:lead_ore"
       amount: 1
       probability: 0.25
     }
     {
       item: "alltheores:nickel_ore"
       amount: 1
       probability: 0.18
     }
     {
       item: "modern_industrialization:bauxite_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "modern_industrialization:salt_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "minecraft:emerald_ore"
       amount: 1
       probability: 0.1
     }
     {
       item: "modern_industrialization:quartz_ore"
       amount: 1
       probability: 0.2
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "powah"
         }
       ]
       item: "powah:uraninite_ore"
       amount: 1
       probability: 0.08
     }
     {
       item: "alltheores:uranium_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "alltheores:iridium_ore"
       amount: 1
       probability: 0.05
     }
     {
       item: "allthemodium:allthemodium_ore"
       amount: 1
       probability: 0.05
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
       item: "alltheores:fluorite_ore"
       amount: 1
       probability: 0.3
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/quarry/unobtainium</summary>

```diff
 {
   type: "modern_industrialization:quarry"
   eu: 256
   duration: 600
   item_inputs: {
     item: "kubejs:unobtainium_drill"
     amount: 1
-    probability: 0.0001
+    probability: 0.000001
   }
   item_outputs: [
     {
       item: "minecraft:netherrack"
       amount: 64
     }
     {
       item: "minecraft:blackstone"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:basalt"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:soul_soil"
       amount: 20
       probability: 0.1
     }
     {
       item: "minecraft:magma_block"
       amount: 5
       probability: 0.1
     }
     {
       item: "minecraft:soul_sand"
       amount: 20
       probability: 0.25
     }
     {
       item: "minecraft:ancient_debris"
       amount: 1
       probability: 0.05
     }
     {
       item: "minecraft:glowstone"
       amount: 4
       probability: 0.15
     }
     {
       item: "minecraft:nether_quartz_ore"
       amount: 6
       probability: 0.15
     }
     {
       item: "minecraft:nether_gold_ore"
       amount: 1
       probability: 0.25
     }
     {
       item: "minecraft:cobblestone"
       amount: 64
     }
     {
       item: "minecraft:diorite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:andesite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:granite"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:dirt"
       amount: 10
       probability: 0.5
     }
     {
       item: "minecraft:gravel"
       amount: 10
       probability: 0.5
     }
     {
       item: "minecraft:cobbled_deepslate"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:tuff"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:iron_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "minecraft:coal_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "modern_industrialization:lignite_coal_ore"
       amount: 1
       probability: 0.24
     }
     {
       item: "minecraft:copper_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "alltheores:tin_ore"
       amount: 1
       probability: 0.3
     }
     {
       item: "minecraft:gold_ore"
       amount: 1
       probability: 0.15
     }
     {
       item: "minecraft:redstone_ore"
       amount: 1
       probability: 0.2
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
       item: "alltheores:osmium_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "modern_industrialization:titanium_ore"
       amount: 1
       probability: 0.15
     }
     {
       item: "modern_industrialization:tungsten_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "modern_industrialization:monazite_ore"
       amount: 1
       probability: 0.25
     }
     {
       item: "alltheores:platinum_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "modern_industrialization:antimony_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "minecraft:diamond_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "minecraft:lapis_ore"
       amount: 1
       probability: 0.1
     }
     {
       item: "alltheores:lead_ore"
       amount: 1
       probability: 0.25
     }
     {
       item: "alltheores:nickel_ore"
       amount: 1
       probability: 0.18
     }
     {
       item: "modern_industrialization:bauxite_ore"
       amount: 1
       probability: 0.4
     }
     {
       item: "modern_industrialization:salt_ore"
       amount: 1
       probability: 0.12
     }
     {
       item: "minecraft:emerald_ore"
       amount: 1
       probability: 0.1
     }
     {
       item: "modern_industrialization:quartz_ore"
       amount: 1
       probability: 0.2
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "powah"
         }
       ]
       item: "powah:uraninite_ore"
       amount: 1
       probability: 0.08
     }
     {
       item: "alltheores:uranium_ore"
       amount: 1
       probability: 0.2
     }
     {
       item: "alltheores:iridium_ore"
       amount: 1
       probability: 0.05
     }
     {
       item: "allthemodium:allthemodium_ore"
       amount: 1
       probability: 0.05
     }
     {
       item: "allthemodium:vibranium_ore"
       amount: 1
       probability: 0.05
     }
     {
       item: "allthemodium:unobtainium_ore"
       amount: 1
       probability: 0.05
     }
     {
       neoforge:conditions: [
         {
           type: "neoforge:mod_loaded"
           modid: "mekanism"
         }
       ]
       item: "alltheores:fluorite_ore"
       amount: 1
       probability: 0.3
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/quarry/vibranium</summary>

```diff
 {
   type: "modern_industrialization:quarry"
   eu: 256
   duration: 600
   item_inputs: {
     item: "kubejs:vibranium_drill"
     amount: 1
-    probability: 0.0001
+    probability: 0.000001
   }
   item_outputs: [
     {
       item: "allthemodium:vibranium_ore"
       amount: 1
       probability: 0.05
     }
     {
       item: "minecraft:netherrack"
       amount: 64
     }
     {
       item: "minecraft:blackstone"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:basalt"
       amount: 16
       probability: 0.25
     }
     {
       item: "minecraft:soul_soil"
       amount: 20
       probability: 0.1
     }
     {
       item: "minecraft:magma_block"
       amount: 5
       probability: 0.1
     }
     {
       item: "minecraft:soul_sand"
       amount: 20
       probability: 0.25
     }
     {
       item: "minecraft:ancient_debris"
       amount: 1
       probability: 0.05
     }
     {
       item: "minecraft:glowstone"
       amount: 4
       probability: 0.15
     }
     {
       item: "minecraft:nether_quartz_ore"
       amount: 6
       probability: 0.15
     }
     {
       item: "minecraft:nether_gold_ore"
       amount: 1
       probability: 0.25
     }
   ]
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
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

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Changed (13)</summary>
<blockquote>

<details>
<summary>minecraft:block/extended_industrialization:farmer_dirt</summary>

```diff
 [
   ... (3 entries)
+  "biomeswevegone:lush_farmland?"
+  "biomeswevegone:sandy_farmland?"
+  "eternal_starlight:nightfall_farmland?"
+  "farmersdelight:rich_soil?"
+  "farmersdelight:rich_soil_farmland?"
   ... (1 entries)
+  "mysticalagriculture:imperium_farmland?"
+  "mysticalagriculture:inferium_farmland?"
+  "mysticalagriculture:prudentium_farmland?"
+  "mysticalagriculture:supremium_farmland?"
+  "mysticalagriculture:tertium_farmland?"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:dragon_immune</summary>

```diff
 [
   ... (155 entries)
+  "extended_industrialization:lethal_tesla_coil"
   ... (718 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (4460 entries)
+  "immeng:connector_me"
+  "immeng:connector_me_relay"
   ... (6054 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/shovel</summary>

```diff
 [
   ... (170 entries)
-  "biomeswevegone:poison_ivy"
   ... (15 entries)
-  "biomeswevegone:skyris_vine"
   ... (207 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wither_immune</summary>

```diff
 [
   ... (19 entries)
+  "extended_industrialization:lethal_tesla_coil"
   ... (706 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_cooldown</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:penetrate"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:no_knockback</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:penetrate"
   ... (39 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (9 entries)
+  "cataclysm:penetrate"
   ... (29 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:crops</summary>

```diff
 [
   ... (274 entries)
-  "minecraft:wheat"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:seeds</summary>

```diff
 [
   ... (121 entries)
-  "minecraft:wheat"
   ... (18 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (99 entries)
+  "modern_industrialization:diamond_hammer"
+  "modern_industrialization:iron_hammer"
+  "modern_industrialization:netherite_hammer"
+  "modern_industrialization:steel_hammer"
   ... (72 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedbackpacks:upgrade</summary>

```diff
 [
   ... (32 entries)
+  "sophisticatedbackpacks:infinity_upgrade"
   ... (19 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedstorage:upgrade</summary>

```diff
 [
   ... (26 entries)
+  "sophisticatedstorage:infinity_upgrade"
   ... (15 entries)
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>minecraft:item/minecraft:vanilla_planks</summary>

```diff
-[
-  "minecraft:acacia_planks"
-  "minecraft:bamboo_planks"
-  "minecraft:birch_planks"
-  "minecraft:cherry_planks"
-  "minecraft:crimson_planks"
-  "minecraft:crimson_planks"
-  "minecraft:dark_oak_planks"
-  "minecraft:jungle_planks"
-  "minecraft:mangrove_planks"
-  "minecraft:oak_planks"
-  "minecraft:spruce_planks"
-  "minecraft:warped_planks"
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
   ... (20680 entries)
+  "extended_industrialization:tesla_particle_generator"
   ... (1184 entries)
+  "immeng:connector_me"
+  "immeng:connector_me_relay"
   ... (17812 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (424 entries)
+  "extended_industrialization:tesla_particle_generator"
   ... (171 entries)
+  "immeng:connector_me"
+  "immeng:connector_me_relay"
   ... (1340 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (26423 entries)
+  "extended_industrialization:silk_touch_module"
   ... (20 entries)
+  "extended_industrialization:tesla_particle_generator"
   ... (1496 entries)
+  "immeng:connector_me"
+  "immeng:connector_me_relay"
+  "immeng:wirecoil_me"
+  "immeng:wirecoil_me_dense"
   ... (20338 entries)
+  "sophisticatedbackpacks:infinity_upgrade"
   ... (77 entries)
+  "sophisticatedstorage:infinity_upgrade"
   ... (3610 entries)
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
<summary>minecraft/loot_table/extended_industrialization/blocks/tesla_particle_generator</summary>

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
+          name: "extended_industrialization:tesla_particle_generator"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "extended_industrialization:blocks/tesla_particle_generator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immeng/blocks/connector_me</summary>

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
+          name: "immeng:connector_me"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immeng:blocks/connector_me"
+}

```


</details>

<details>
<summary>minecraft/loot_table/immeng/blocks/connector_me_relay</summary>

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
+          name: "immeng:connector_me_relay"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "immeng:blocks/connector_me_relay"
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (36)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/amber_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:amber_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/amber_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/amber_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:amber_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/amber_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/aquamarine_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:aquamarine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/aquamarine_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/aquamarine_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:aquamarine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/aquamarine_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/bubblegum_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:bubblegum_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/bubblegum_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/bubblegum_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:bubblegum_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/bubblegum_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/cherenkov_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:cherenkov_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/cherenkov_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/cherenkov_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:cherenkov_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/cherenkov_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/conifer_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:conifer_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/conifer_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/conifer_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:conifer_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/conifer_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/fluorescent_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:fluorescent_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/fluorescent_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/fluorescent_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:fluorescent_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/fluorescent_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/honey_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:honey_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/honey_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/honey_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:honey_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/honey_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/icy_blue_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:icy_blue_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/icy_blue_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/icy_blue_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:icy_blue_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/icy_blue_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/lavender_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:lavender_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/lavender_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/lavender_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:lavender_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/lavender_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/maroon_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:maroon_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/maroon_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/maroon_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:maroon_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/maroon_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/mint_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:mint_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/mint_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/mint_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:mint_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/mint_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/navy_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:navy_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/navy_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/navy_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:navy_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/navy_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/peach_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:peach_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/peach_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/peach_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:peach_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/peach_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/persimmon_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:persimmon_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/persimmon_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/persimmon_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:persimmon_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/persimmon_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/rose_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:rose_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/rose_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/rose_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:rose_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/rose_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/spring_green_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:spring_green_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/spring_green_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/spring_green_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:spring_green_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/spring_green_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/ultramarine_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:ultramarine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/ultramarine_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/ultramarine_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:ultramarine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/ultramarine_wall_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/wine_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:wine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/wine_banner"
 }

```


</details>

<details>
<summary>minecraft/loot_table/dyenamics/blocks/wine_wall_banner</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
       bonus_rolls: 0
       entries: [
         {
-          conditions: [
-            {
-              condition: "minecraft:survives_explosion"
-            }
-          ]
+          functions: [
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "minecraft:custom_name"
+                "minecraft:item_name"
+                "minecraft:hide_additional_tooltip"
+                "minecraft:banner_patterns"
+              ]
+              source: "block_entity"
+            }
+          ]
           type: "minecraft:item"
           name: "dyenamics:wine_banner"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "dyenamics:blocks/wine_wall_banner"
 }

```


</details>

</blockquote>

</details>

