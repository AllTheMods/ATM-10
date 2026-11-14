# Changelog

# 📦 8.6

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- Update stale-filter.yml
- NeoVitae Quest Fix (#4540)
- * NeoVitae Quest Fix
- * Updated tr_tr
- Update French quest translation for 8.5 English fixes (#4549)
- Carry over recent en_us quest fixes to fr_fr (typos, Eternal Starlight
- and Ice and Fire descriptions, placeholder lines).
- Co-authored-by: aubault83 <282684630+aubault83@users.noreply.github.com>
- Co-authored-by: Claude Opus 5.5 <noreply@anthropic.com>
- alternative to recycling book adv
- Closes #4534
- update unskippable structures
- Closes #4541
- Remove unobtainable Copper Alloy Seeds quest
- Remove conflicting steel block recipe
- Revert "Remove conflicting steel block recipe"
- This reverts commit 87e41eec428cb9fc0de143e571639a3e846bdb39.
- Remove Ad Astra steel block recipe
- Name remaining quest reward tables
- chore: bcc
- fix: block misleading Reliquary mob charms
- chore: modlist</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (47)</summary>

- Applied Energistics 2 (19.2.18) -> (19.2.19)
- AEInfinityBooster (2.1.0) -> (2.1.2)
- All The Leaks (1.1.14+1.21.1-neoforge) -> (1.1.16+1.21.1-neoforge)
- Architectury (13.0.11) -> (13.0.12)
- Ars Nouveau (5.13.4) -> (5.13.5)
- Baubley Heart Canisters (1.21.1-1.5.0) -> (1.21.1-1.6.0)
- Building Gadgets 2 (1.3.9) -> (21.1.1)
- CodecUI (1.21.1-1.4.7) -> (1.21.1-1.4.10)
- Create: Copycats+ (3.0.9+mc.1.21.1-neoforge) -> (3.0.11+mc.1.21.1-neoforge)
- ChoiceTheorem's Overhauled Village (3.6.3) -> (3.6.4)
- Ender Core (8.2.12-beta) -> (8.2.13-beta)
- Ender IO (8.2.12-beta) -> (8.2.13-beta)
- Ender IO - Modded Conduits (8.2.12-beta) -> (8.2.13-beta)
- Explorify (1.6.5) -> (1.6.6)
- FancyMenu (3.9.14) -> (3.10.0)
- FTB Chunks (2101.1.23) -> (2101.1.24)
- FTB Teams (2101.1.11) -> (2101.1.12)
- Industrialization Overdrive (1.14.0+1.21.1) -> (1.15.1+1.21.1)
- IntegratedDynamics (1.38.2) -> (1.39.0)
- IntegratedTunnels (1.13.0) -> (1.13.1)
- IntegratedTunnels-Compat (1.13.0) -> (1.13.1)
- Inventory Tweaks Refoxed (1.21.1-1.3.2) -> (1.21.1-1.4.0)
- Just Enough Stuff (1.21.1-1.3.0) -> (1.21.1-1.4.0)
- LogisticsNetworks (1.17.2) -> (1.18.0)
- MezzConfig (0.6.10) -> (0.7.1)
- MineColonies (1.1.1411-1.21.1-snapshot) -> (1.1.1420-1.21.1-snapshot)
- Moonlight Lib (1.21.1-3.8.0) -> (1.21.1-3.8.3)
- NeoForge (21.1.265) -> (21.1.266)
- Neo Vitae (1.1.51) -> (1.1.53)
- Occultism (1.225.0) -> (1.227.0)
- OctoLib (0.6.2) -> (0.6.3.2)
- Oh The Trees You'll Grow (5.3.5) -> (5.3.6)
- Oracle Index (1.4.0) -> (1.4.1)
- QuarryPlus (21.1.165) -> (21.1.170)
- Railcraft Reborn (1.2.16) -> (1.2.17)
- Reliquary Reincarnations (2.0.81) -> (2.0.85)
- RFToolsUtility (1.21-7.0.12) -> (1.21-7.0.13)
- Sophisticated Backpacks (3.26.19) -> (3.26.21)
- Sophisticated Core (1.5.25) -> (1.5.35)
- Sophisticated Storage (1.6.15) -> (1.6.18)
- Structurize (1.0.837-1.21.1-snapshot) -> (1.0.839-1.21.1)
- Stylecolonies (1.15.66-1.21.1) -> (1.15.68-1.21.1)
- SuperMartijn642's Core Lib (1.1.26) -> (1.1.26+a)
- Supplementaries (1.21.1-4.0.2) -> (1.21.1-4.1.1)
- Theurgy (1.78.0) -> (1.79.0)
- Titanium (4.0.51) -> (4.0.52)
- Universal Grid (1.21.1-0.3.2) -> (1.21.1-0.3.3)

</details>

## 🍳 Recipes

<details>
<summary>Added (49)</summary>
<blockquote>

<details>
<summary>enderio/block_detector</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    G: {
+      tag: "c:dusts/grains_of_infinity"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    S: {
+      tag: "c:stones"
+    }
+  }
+  pattern: [
+    "SSS"
+    "RGR"
+    "SSS"
+  ]
+  result: {
+    count: 1
+    id: "enderio:block_detector"
+  }
+}

```


</details>

<details>
<summary>enderio/fermenting/fluid_dew_of_the_void_still</summary>

```diff
+{
+  type: "enderio:vat_fermenting"
+  input: {
+    amount: 4000
+    fluid: "enderio:fluid_nutrient_distillation_still"
+  }
+  left_reagent: "c:dusts/grains_of_pizeallity"
+  output: {
+    amount: 1000
+    id: "enderio:fluid_dew_of_the_void_still"
+  }
+  right_reagent: "c:dusts/grains_of_the_end"
+  ticks: 400
+}

```


</details>

<details>
<summary>enderio/fermenting/fluid_vapor_of_levity_still</summary>

```diff
+{
+  type: "enderio:vat_fermenting"
+  input: {
+    amount: 1000
+    fluid: "enderio:fluid_dew_of_the_void_still"
+  }
+  left_reagent: "c:dusts/grains_of_pizeallity"
+  output: {
+    amount: 1000
+    id: "enderio:fluid_vapor_of_levity_still"
+  }
+  right_reagent: "c:dusts/grains_of_prescience"
+  ticks: 400
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_fluid_input_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    H: {
+      item: "modern_industrialization:advanced_fluid_input_hatch"
+    }
+    I: {
+      item: "ae2:interface"
+    }
+  }
+  pattern: [
+    " I "
+    "IHI"
+    " I "
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_fluid_input_hatch"
+  }
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_fluid_output_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    H: {
+      item: "modern_industrialization:advanced_fluid_output_hatch"
+    }
+    I: {
+      item: "ae2:interface"
+    }
+  }
+  pattern: [
+    " I "
+    "IHI"
+    " I "
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_fluid_output_hatch"
+  }
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_item_input_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    H: {
+      item: "modern_industrialization:advanced_item_input_hatch"
+    }
+    I: {
+      item: "ae2:interface"
+    }
+  }
+  pattern: [
+    " I "
+    "IHI"
+    " I "
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_item_input_hatch"
+  }
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_item_output_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    H: {
+      item: "modern_industrialization:advanced_item_output_hatch"
+    }
+    I: {
+      item: "ae2:interface"
+    }
+  }
+  pattern: [
+    " I "
+    "IHI"
+    " I "
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_item_output_hatch"
+  }
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_mixed_input_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "industrialization_overdrive:me_item_input_hatch"
+    }
+    {
+      item: "industrialization_overdrive:me_fluid_input_hatch"
+    }
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_mixed_input_hatch"
+  }
+}

```


</details>

<details>
<summary>industrialization_overdrive/shaped/craft/me_mixed_output_hatch</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "ae2"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "industrialization_overdrive:me_item_output_hatch"
+    }
+    {
+      item: "industrialization_overdrive:me_fluid_output_hatch"
+    }
+  ]
+  result: {
+    count: 1
+    id: "industrialization_overdrive:me_mixed_output_hatch"
+  }
+}

```


</details>

<details>
<summary>logisticsnetworks/recipe_card</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:paper"
+    }
+    {
+      tag: "c:dusts/redstone"
+    }
+    {
+      tag: "c:nuggets/iron"
+    }
+  ]
+  result: {
+    id: "logisticsnetworks:recipe_card"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>logisticsnetworks/recipe_card_copy_clear</summary>

```diff
+{
+  type: "logisticsnetworks:recipe_card_copy_clear"
+}

```


</details>

<details>
<summary>logisticsnetworks/wrench_reset</summary>

```diff
+{
+  type: "logisticsnetworks:wrench_reset"
+}

```


</details>

<details>
<summary>neovitae/alchemytable/deus_sanguinis_tome</summary>

```diff
+{
+  type: "neovitae:alchemytable"
+  input: [
+    {
+      item: "neovitae:prismatic_spiritus_gem"
+    }
+    {
+      item: "neovitae:hellforged_block"
+    }
+    {
+      item: "neovitae:tabula_aetherea"
+    }
+    {
+      item: "minecraft:nether_star"
+    }
+    {
+      tag: "c:storage_blocks/netherite"
+    }
+    {
+      item: "minecraft:totem_of_undying"
+    }
+  ]
+  output: {
+    components: {
+      neovitae:upgrade_tome_data: {
+        exp: 1
+        upgrade: "neovitae:deus_sanguinis"
+      }
+    }
+    count: 1
+    id: "neovitae:upgrade_tome"
+  }
+  syphon: 1000000
+  ticks: 200
+  upgradeLevel: 6
+}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_fortune_2</summary>

```diff
+{
+  type: "neovitae:hellfire_forge"
+  drain: 4
+  inputs: [
+    {
+      item: "neovitae:deforester_charge"
+    }
+    {
+      item: "neovitae:fortune_anointment_2"
+    }
+  ]
+  minDrain: 300
+  output: {
+    components: {
+      neovitae:anointment_holder: {
+        anointments: [
+          {
+            damage: 0
+            key: "neovitae:fortune"
+            level: 2
+            max_damage: 1
+          }
+        ]
+      }
+    }
+    count: 1
+    id: "neovitae:deforester_charge"
+  }
+}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_fortune_2</summary>

```diff
+{
+  type: "neovitae:hellfire_forge"
+  drain: 4
+  inputs: [
+    {
+      item: "neovitae:fungal_charge"
+    }
+    {
+      item: "neovitae:fortune_anointment_2"
+    }
+  ]
+  minDrain: 300
+  output: {
+    components: {
+      neovitae:anointment_holder: {
+        anointments: [
+          {
+            damage: 0
+            key: "neovitae:fortune"
+            level: 2
+            max_damage: 1
+          }
+        ]
+      }
+    }
+    count: 1
+    id: "neovitae:fungal_charge"
+  }
+}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_fortune_2</summary>

```diff
+{
+  type: "neovitae:hellfire_forge"
+  drain: 4
+  inputs: [
+    {
+      item: "neovitae:veinmine_charge"
+    }
+    {
+      item: "neovitae:fortune_anointment_2"
+    }
+  ]
+  minDrain: 300
+  output: {
+    components: {
+      neovitae:anointment_holder: {
+        anointments: [
+          {
+            damage: 0
+            key: "neovitae:fortune"
+            level: 2
+            max_damage: 1
+          }
+        ]
+      }
+    }
+    count: 1
+    id: "neovitae:veinmine_charge"
+  }
+}

```


</details>

<details>
<summary>railcraft/abandoned_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:abandoned_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:abandoned_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/abandoned_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:abandoned_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:abandoned_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/commercial_steam_engine</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:plates/iron"
+    }
+    b: {
+      tag: "c:glass_blocks/colorless"
+    }
+    c: {
+      tag: "c:gears/iron"
+    }
+    d: {
+      item: "minecraft:piston"
+    }
+  }
+  pattern: [
+    "aaa"
+    " b "
+    "cdc"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:commercial_steam_engine"
+  }
+}

```


</details>

<details>
<summary>railcraft/delayed_locking_track_kit</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "minecraft:planks"
+    }
+    {
+      item: "railcraft:track_parts"
+    }
+    {
+      item: "minecraft:stone_pressure_plate"
+    }
+    {
+      item: "minecraft:sticky_piston"
+    }
+    {
+      item: "minecraft:repeater"
+    }
+  ]
+  result: {
+    count: 4
+    id: "railcraft:delayed_locking_track_kit"
+  }
+}

```


</details>

<details>
<summary>railcraft/electric_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:electric_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:electric_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/electric_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:electric_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:electric_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/high_speed_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:high_speed_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:high_speed_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/high_speed_electric_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:high_speed_electric_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:high_speed_electric_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/high_speed_electric_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:high_speed_electric_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:high_speed_electric_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/high_speed_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:high_speed_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:high_speed_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/hobbyist_steam_engine</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:plates/brass"
+    }
+    b: {
+      tag: "c:glass_blocks/colorless"
+    }
+    c: {
+      tag: "c:gears/brass"
+    }
+    d: {
+      item: "minecraft:piston"
+    }
+  }
+  pattern: [
+    "aaa"
+    " b "
+    "cdc"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:hobbyist_steam_engine"
+  }
+}

```


</details>

<details>
<summary>railcraft/industrial_steam_engine</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:plates/steel"
+    }
+    b: {
+      tag: "c:glass_blocks/colorless"
+    }
+    c: {
+      tag: "c:gears/steel"
+    }
+    d: {
+      item: "minecraft:piston"
+    }
+  }
+  pattern: [
+    "aaa"
+    " b "
+    "cdc"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:industrial_steam_engine"
+  }
+}

```


</details>

<details>
<summary>railcraft/iron_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "minecraft:rail"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:iron_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/iron_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "minecraft:rail"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:iron_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/messenger_track_kit</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "minecraft:planks"
+    }
+    {
+      item: "railcraft:track_parts"
+    }
+    {
+      tag: "minecraft:signs"
+    }
+    {
+      tag: "c:dusts/redstone"
+    }
+  ]
+  result: {
+    count: 4
+    id: "railcraft:messenger_track_kit"
+  }
+}

```


</details>

<details>
<summary>railcraft/reinforced_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:reinforced_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:reinforced_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/reinforced_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:reinforced_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:reinforced_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/rolling/wire</summary>

```diff
+{
+  type: "railcraft:rolling"
+  key: {
+    a: {
+      tag: "c:ingots/lead"
+    }
+    b: {
+      item: "minecraft:paper"
+    }
+    c: {
+      item: "railcraft:charge_spool_large"
+    }
+  }
+  pattern: [
+    "aba"
+    "bcb"
+    "aba"
+  ]
+  result: {
+    count: 8
+    id: "railcraft:wire"
+  }
+}

```


</details>

<details>
<summary>railcraft/strap_iron_delayed_locking_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:delayed_locking_track_kit"
+    }
+    {
+      item: "railcraft:strap_iron_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:strap_iron_delayed_locking_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/strap_iron_messenger_track</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "railcraft:messenger_track_kit"
+    }
+    {
+      item: "railcraft:strap_iron_track"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:strap_iron_messenger_track"
+  }
+}

```


</details>

<details>
<summary>railcraft/tag_filter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:paper"
+    }
+    {
+      item: "minecraft:paper"
+    }
+    {
+      tag: "c:dyes/black"
+    }
+    {
+      tag: "c:ingots/copper"
+    }
+  ]
+  result: {
+    count: 1
+    id: "railcraft:tag_filter"
+  }
+}

```


</details>

<details>
<summary>railcraft/tag_filter_prototype</summary>

```diff
+{
+  type: "railcraft:tag_filter"
+  category: "misc"
+}

```


</details>

<details>
<summary>sophisticatedstorage/advanced_pump_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:advanced_pump_upgrade"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedcore:upgrade_next_tier"
+  category: "misc"
+  key: {
+    D: {
+      tag: "c:gems/diamond"
+    }
+    G: {
+      tag: "c:ingots/gold"
+    }
+    I: {
+      item: "minecraft:dispenser"
+    }
+    P: {
+      item: "sophisticatedstorage:pump_upgrade"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+  }
+  pattern: [
+    "DID"
+    "GPG"
+    "RRR"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:advanced_pump_upgrade"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/copper_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:copper_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade"
+  category: "misc"
+  key: {
+    C: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      item: "sophisticatedstorage:tank"
+    }
+  }
+  pattern: [
+    "CCC"
+    "CSC"
+    "CCC"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:copper_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/diamond_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:diamond_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade"
+  category: "misc"
+  key: {
+    D: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      item: "sophisticatedstorage:gold_tank"
+    }
+  }
+  pattern: [
+    "DDD"
+    "DSD"
+    "DDD"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:diamond_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/gold_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:gold_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade"
+  category: "misc"
+  key: {
+    G: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      item: "sophisticatedstorage:iron_tank"
+    }
+  }
+  pattern: [
+    "GGG"
+    "GSG"
+    "GGG"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:gold_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/iron_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:iron_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade"
+  category: "misc"
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      item: "sophisticatedstorage:tank"
+    }
+  }
+  pattern: [
+    "III"
+    "ISI"
+    "III"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:iron_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/iron_tank_from_copper_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:iron_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade"
+  category: "misc"
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      item: "sophisticatedstorage:copper_tank"
+    }
+  }
+  pattern: [
+    " I "
+    "ISI"
+    " I "
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:iron_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/netherite_tank</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:netherite_tank"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedstorage:storage_tier_upgrade_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "sophisticatedstorage:diamond_tank"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:netherite_tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/pump_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:pump_upgrade"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "sophisticatedstorage:upgrade_base"
+    }
+    G: {
+      tag: "c:glass_blocks"
+    }
+    P: {
+      item: "minecraft:piston"
+    }
+    S: {
+      item: "minecraft:sticky_piston"
+    }
+    U: {
+      item: "minecraft:bucket"
+    }
+  }
+  pattern: [
+    "GUG"
+    "PBS"
+    "GUG"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:pump_upgrade"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/tank</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    G: {
+      tag: "c:glass_blocks"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      tag: "c:stones"
+    }
+  }
+  pattern: [
+    "SGS"
+    "G G"
+    "IGI"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:tank"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/xp_pump_upgrade</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "sophisticatedcore:item_enabled"
+          itemRegistryName: "sophisticatedstorage:xp_pump_upgrade"
+        }
+      ]
+    }
+  ]
+  type: "sophisticatedcore:upgrade_next_tier"
+  category: "misc"
+  key: {
+    C: {
+      item: "minecraft:experience_bottle"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+    P: {
+      item: "sophisticatedstorage:advanced_pump_upgrade"
+    }
+    R: {
+      tag: "c:dusts/redstone"
+    }
+  }
+  pattern: [
+    "RER"
+    "CPC"
+    "RER"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:xp_pump_upgrade"
+  }
+}

```


</details>

<details>
<summary>supplementaries/redstone_lantern</summary>

```diff
+{
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "redstone_lantern"
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "supplementaries:flag"
+          flag: "redstone_lantern"
+        }
+      ]
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "000"
+    "010"
+    "000"
+  ]
+  key: {
+    0: {
+      tag: "c:nuggets/iron"
+    }
+    1: {
+      item: "minecraft:redstone_torch"
+    }
+  }
+  result: {
+    id: "supplementaries:redstone_lantern"
+    count: 1
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (5)</summary>
<blockquote>

<details>
<summary>almostunified/logisticsnetworks</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "logisticsnetworks"
   recipes: [
     "1$computer"
     "1$diamond_upgrade"
     "1$gold_upgrade"
     "1$iron_upgrade"
     "1$logistics_node"
     "1$netherite_upgrade"
+    "1$recipe_card"
     "1$server_rack"
   ]
 }

```


</details>

<details>
<summary>almostunified/neovitae</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "neovitae"
   recipes: [
     "1$alchemytable/advance_cutting_fluid_sigil"
     "1$alchemytable/advanced_cutting_fluid"
     "1$alchemytable/brilliance_tome"
     "1$alchemytable/curios_socket_tome"
+    "1$alchemytable/deus_sanguinis_tome"
     "1$alchemytable/dust_aluminum"
     "1$alchemytable/dust_antimony"
     "1$alchemytable/dust_cinnabar"
     "1$alchemytable/dust_coal"
     "1$alchemytable/dust_copper"
     "1$alchemytable/dust_diamond"
     "1$alchemytable/dust_emerald"
     "1$alchemytable/dust_fluorite"
     "1$alchemytable/dust_gold"
     "1$alchemytable/dust_iridium"
     "1$alchemytable/dust_iron"
     "1$alchemytable/dust_lapis"
     "1$alchemytable/dust_lead"
     "1$alchemytable/dust_lignite_coal"
     "1$alchemytable/dust_nickel"
     "1$alchemytable/dust_osmium"
     "1$alchemytable/dust_peridot"
     "1$alchemytable/dust_platinum"
     "1$alchemytable/dust_ruby"
     "1$alchemytable/dust_sapphire"
     "1$alchemytable/dust_silver"
     "1$alchemytable/dust_tin"
     "1$alchemytable/dust_uranium"
     "1$alchemytable/dust_zinc"
     "1$alchemytable/reagent_lava"
     "1$alchemytable/sulfur_from_lava"
     "1$alchemytable/sulfur_from_sigil"
     "1$athanor/hydration/oxidize/copper_block_to_exposed_copper"
     "1$athanor/resonator/nether_star_from_diamond"
     "1$athanor_block"
     "1$coal_dust_from_coal"
     "1$hellfire_forge/demon_lantern"
     "1$hellfire_forge/dungeon/forge_dungeon_stone"
     "1$hellfire_forge/dungeon/forge_dungeon_stone_c"
     "1$hellfire_forge/dungeon/forge_dungeon_stone_d"
     "1$hellfire_forge/dungeon/forge_dungeon_stone_st"
     "1$hellfire_forge/dungeon/forge_dungeon_stone_v"
     "1$hellfire_forge/lex_vitae"
     "1$materials/blasting_cinnabar_dust"
     "1$materials/blasting_cloggrum_dust"
     "1$materials/blasting_coal_dust"
     "1$materials/blasting_diamond_dust"
     "1$materials/blasting_emerald_dust"
     "1$materials/blasting_fluorite_dust"
     "1$materials/blasting_inferium_dust"
     "1$materials/blasting_lapis_dust"
     "1$materials/blasting_lignite_coal_dust"
     "1$materials/blasting_mithril_dust"
     "1$materials/blasting_peridot_dust"
     "1$materials/blasting_prosperity_dust"
     "1$materials/blasting_regalium_dust"
     "1$materials/blasting_ruby_dust"
     "1$materials/blasting_sapphire_dust"
     "1$materials/blasting_utherium_dust"
     "1$materials/smelting_cinnabar_dust"
     "1$materials/smelting_cloggrum_dust"
     "1$materials/smelting_coal_dust"
     "1$materials/smelting_diamond_dust"
     "1$materials/smelting_emerald_dust"
     "1$materials/smelting_fluorite_dust"
     "1$materials/smelting_inferium_dust"
     "1$materials/smelting_lapis_dust"
     "1$materials/smelting_lignite_coal_dust"
     "1$materials/smelting_mithril_dust"
     "1$materials/smelting_peridot_dust"
     "1$materials/smelting_prosperity_dust"
     "1$materials/smelting_regalium_dust"
     "1$materials/smelting_ruby_dust"
     "1$materials/smelting_sapphire_dust"
     "1$materials/smelting_utherium_dust"
     "1$orb_filling_link"
     "3$materials/blasting_aluminum_dust"
     "3$materials/blasting_antimony_dust"
     "3$materials/blasting_copper_dust"
     "3$materials/blasting_gold_dust"
     "3$materials/blasting_iridium_dust"
     "3$materials/blasting_iron_dust"
     "3$materials/blasting_lead_dust"
     "3$materials/blasting_nickel_dust"
     "3$materials/blasting_osmium_dust"
     "3$materials/blasting_platinum_dust"
     "3$materials/blasting_silver_dust"
     "3$materials/blasting_tin_dust"
     "3$materials/blasting_uranium_dust"
     "3$materials/blasting_zinc_dust"
     "3$materials/smelting_aluminum_dust"
     "3$materials/smelting_antimony_dust"
     "3$materials/smelting_copper_dust"
     "3$materials/smelting_gold_dust"
     "3$materials/smelting_iridium_dust"
     "3$materials/smelting_iron_dust"
     "3$materials/smelting_lead_dust"
     "3$materials/smelting_nickel_dust"
     "3$materials/smelting_osmium_dust"
     "3$materials/smelting_platinum_dust"
     "3$materials/smelting_silver_dust"
     "3$materials/smelting_tin_dust"
     "3$materials/smelting_uranium_dust"
     "3$materials/smelting_zinc_dust"
   ]
 }

```


</details>

<details>
<summary>almostunified/railcraft</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "railcraft"
   recipes: [
     "1$advanced_item_loader"
     "1$advanced_item_unloader"
     "1$analog_signal_controller_box"
     "1$blast_furnace/blasting_bucket"
     "1$blast_furnace/blasting_iron_axe"
     "1$blast_furnace/blasting_iron_boots"
     "1$blast_furnace/blasting_iron_chestplate"
     "1$blast_furnace/blasting_iron_crowbar"
     "1$blast_furnace/blasting_iron_door"
     "1$blast_furnace/blasting_iron_helmet"
     "1$blast_furnace/blasting_iron_hoe"
     "1$blast_furnace/blasting_iron_horse_armor"
     "1$blast_furnace/blasting_iron_ingot"
     "1$blast_furnace/blasting_iron_leggings"
     "1$blast_furnace/blasting_iron_pickaxe"
     "1$blast_furnace/blasting_iron_shovel"
     "1$blast_furnace/blasting_iron_sword"
     "1$blast_furnace/blasting_iron_trapdoor"
     "1$blast_furnace/blasting_shears"
     "1$blast_furnace/blasting_steel_axe"
     "1$blast_furnace/blasting_steel_block"
     "1$blast_furnace/blasting_steel_boots"
     "1$blast_furnace/blasting_steel_chestplate"
     "1$blast_furnace/blasting_steel_helmet"
     "1$blast_furnace/blasting_steel_hoe"
     "1$blast_furnace/blasting_steel_leggings"
     "1$blast_furnace/blasting_steel_pickaxe"
     "1$blast_furnace/blasting_steel_shears"
     "1$blast_furnace/blasting_steel_sword"
     "1$block_signal"
     "1$brass_gear"
     "1$brass_ingot_crafted_with_ingots"
     "1$bronze_gear"
     "1$bronze_ingot_crafted_with_ingots"
     "1$coke_oven/coal_coke_block"
     "1$copper_gear"
     "1$crusher"
     "1$crusher/crushing_coal_block"
     "1$crusher/crushing_lapis_lazuli"
     "1$crusher/crushing_netherite_ingot"
     "1$crusher/crushing_raw_gold_block"
     "1$crusher/crushing_raw_iron_block"
     "1$distant_signal"
     "1$dual_block_signal"
     "1$dual_distant_signal"
     "1$dual_token_signal"
     "1$elevator_track"
     "1$energy_minecart"
     "1$firestone_cracked_fixing"
     "1$firestone_lava_refinement"
     "1$gold_gear"
     "1$invar_gear"
     "1$invar_ingot_crafted_with_ingots"
     "1$iron_gear"
     "1$lead_gear"
     "1$logbook"
     "1$nickel_gear"
     "1$rolling/brass_plate"
     "1$rolling/bronze_plate"
     "1$rolling/copper_plate"
     "1$rolling/gold_plate"
     "1$rolling/invar_plate"
     "1$rolling/iron_plate"
     "1$rolling/lead_plate"
     "1$rolling/nickel_plate"
     "1$rolling/silver_plate"
     "1$rolling/steel_plate"
     "1$rolling/tin_plate"
     "1$rolling/zinc_plate"
     "1$signal_block_relay_box"
     "1$signal_capacitor_box"
     "1$signal_controller_box"
     "1$signal_interlock_box"
     "1$signal_lamp"
     "1$signal_receiver_box"
     "1$signal_sequencer_box"
     "1$silver_gear"
     "1$steel_gear"
-    "1$strengthened_glass_brass"
-    "1$strengthened_glass_invar"
-    "1$strengthened_glass_iron"
-    "1$strengthened_glass_nickel"
-    "1$strengthened_glass_tin"
     "1$switch_track_lever"
     "1$switch_track_motor"
     "1$tin_gear"
     "1$token_signal"
     "1$token_signal_box"
     "1$train_dispenser"
     "1$zinc_gear"
     "3$brass_block_from_brass_ingot"
     "3$brass_ingot"
     "3$brass_ingot_from_brass_nugget"
     "3$brass_nugget"
     "3$bronze_block_from_bronze_ingot"
     "3$bronze_ingot"
     "3$bronze_ingot_from_bronze_nugget"
     "3$bronze_nugget"
     "3$invar_block_from_invar_ingot"
     "3$invar_ingot"
     "3$invar_ingot_from_invar_nugget"
     "3$invar_nugget"
     "3$lead_block_from_lead_ingot"
     "3$lead_ingot"
     "3$lead_ingot_from_lead_nugget"
     "3$lead_nugget"
     "3$nickel_block_from_nickel_ingot"
     "3$nickel_ingot"
     "3$nickel_ingot_from_nickel_nugget"
     "3$nickel_nugget"
     "3$silver_block_from_silver_ingot"
     "3$silver_ingot"
     "3$silver_ingot_from_silver_nugget"
     "3$silver_nugget"
     "3$steel_block_from_steel_ingot"
     "3$steel_ingot"
     "3$steel_ingot_from_steel_nugget"
     "3$steel_nugget"
     "3$tin_block_from_tin_ingot"
     "3$tin_ingot"
     "3$tin_ingot_from_tin_nugget"
     "3$tin_nugget"
     "3$zinc_block_from_zinc_ingot"
     "3$zinc_ingot"
     "3$zinc_ingot_from_zinc_nugget"
     "3$zinc_nugget"
   ]
 }

```


</details>

<details>
<summary>almostunified/supplementaries</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "supplementaries"
   recipes: [
     "1$altimeter"
     "1$blast_armor_trim_smithing_template"
     "1$cannon_2"
     "1$cog_block"
     "1$grouper"
     "1$lapis_bricks"
     "1$lock_block"
     "1$redstone_illuminator"
+    "1$redstone_lantern"
     "1$relayer"
     "1$sconce_lever"
     "1$speaker_block"
     "1$turn_table"
     "1$wind_vane"
   ]
 }

```


</details>

<details>
<summary>supplementaries/deepslate_lamp</summary>

```diff
 {
   fabric:load_conditions: [
     {
       flag: "deepslate_lamp"
       condition: "supplementaries:flag"
     }
+    {
+      condition: "fabric:not"
+      value: {
+        condition: "fabric:mod_loaded"
+        modid: "vanillabackport"
+      }
+    }
   ]
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "supplementaries:flag"
           flag: "deepslate_lamp"
         }
+        {
+          type: "neoforge:not"
+          value: {
+            type: "neoforge:mod_loaded"
+            modid: "vanillabackport"
+          }
+        }
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
       item: "minecraft:deepslate"
     }
     1: {
       item: "minecraft:torch"
     }
   }
   result: {
     id: "supplementaries:deepslate_lamp"
     count: 1
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (25)</summary>
<blockquote>

<details>
<summary>ad_astra/steel_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    #: {
-      tag: "ad_astra:steel_ingots"
-    }
-  }
-  pattern: [
-    "###"
-    "###"
-    "###"
-  ]
-  result: {
-    count: 1
-    id: "alltheores:steel_block"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 2.5
-  inputs: [
-    {
-      tag: "c:storage_blocks/copper"
-    }
-    {
-      item: "minecraft:charcoal"
-    }
-    {
-      tag: "minecraft:logs"
-    }
-    {
-      tag: "minecraft:planks"
-    }
-  ]
-  minDrain: 80
-  output: {
-    count: 4
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2_fortune_1_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:deforester_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2_fortune_2_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:deforester_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_2"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 2
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2_silk_touch_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:deforester_charge_2"
-    }
-    {
-      item: "neovitae:silk_touch_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:silk_touch"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2_smelting_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:deforester_charge_2"
-    }
-    {
-      item: "neovitae:smelting_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:smelting"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/deforester_charge_2_voiding</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:deforester_charge_2"
-    }
-    {
-      item: "neovitae:voiding_anointment"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:voiding"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:deforester_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 2.5
-  inputs: [
-    {
-      tag: "c:storage_blocks/copper"
-    }
-    {
-      item: "minecraft:charcoal"
-    }
-    {
-      tag: "minecraft:crimson_stems"
-    }
-    {
-      tag: "c:mushrooms"
-    }
-  ]
-  minDrain: 80
-  output: {
-    count: 4
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2_fortune_1_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:fungal_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2_fortune_2_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:fungal_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_2"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 2
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2_silk_touch_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:fungal_charge_2"
-    }
-    {
-      item: "neovitae:silk_touch_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:silk_touch"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2_smelting_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:fungal_charge_2"
-    }
-    {
-      item: "neovitae:smelting_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:smelting"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/fungal_charge_2_voiding</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:fungal_charge_2"
-    }
-    {
-      item: "neovitae:voiding_anointment"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:voiding"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:fungal_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 2.5
-  inputs: [
-    {
-      tag: "c:storage_blocks/copper"
-    }
-    {
-      item: "minecraft:charcoal"
-    }
-    {
-      tag: "c:sands"
-    }
-    {
-      tag: "neovitae:vitae_stone"
-    }
-  ]
-  minDrain: 80
-  output: {
-    count: 4
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep_fortune_1_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:shaped_charge_deep"
-    }
-    {
-      item: "neovitae:fortune_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep_fortune_2_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:shaped_charge_deep"
-    }
-    {
-      item: "neovitae:fortune_anointment_2"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 2
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep_silk_touch_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:shaped_charge_deep"
-    }
-    {
-      item: "neovitae:silk_touch_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:silk_touch"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep_smelting_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:shaped_charge_deep"
-    }
-    {
-      item: "neovitae:smelting_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:smelting"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/shaped_charge_deep_voiding</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:shaped_charge_deep"
-    }
-    {
-      item: "neovitae:voiding_anointment"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:voiding"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:shaped_charge_deep"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 2.5
-  inputs: [
-    {
-      tag: "c:storage_blocks/copper"
-    }
-    {
-      item: "minecraft:charcoal"
-    }
-    {
-      tag: "c:sandstone/blocks"
-    }
-    {
-      tag: "c:sands"
-    }
-  ]
-  minDrain: 80
-  output: {
-    count: 4
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2_fortune_1_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:veinmine_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2_fortune_2_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:veinmine_charge_2"
-    }
-    {
-      item: "neovitae:fortune_anointment_2"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:fortune"
-            level: 2
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2_silk_touch_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:veinmine_charge_2"
-    }
-    {
-      item: "neovitae:silk_touch_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:silk_touch"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2_smelting_l</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:veinmine_charge_2"
-    }
-    {
-      item: "neovitae:smelting_anointment_l"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:smelting"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

<details>
<summary>neovitae/hellfire_forge/veinmine_charge_2_voiding</summary>

```diff
-{
-  type: "neovitae:hellfire_forge"
-  drain: 4
-  inputs: [
-    {
-      item: "neovitae:veinmine_charge_2"
-    }
-    {
-      item: "neovitae:voiding_anointment"
-    }
-  ]
-  minDrain: 300
-  output: {
-    components: {
-      neovitae:anointment_holder: {
-        anointments: [
-          {
-            damage: 0
-            key: "neovitae:voiding"
-            level: 1
-            max_damage: 1
-          }
-        ]
-      }
-    }
-    count: 1
-    id: "neovitae:veinmine_charge_2"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (11)</summary>
<blockquote>

<details>
<summary>minecraft:enchantment/supplementaries:selectable_container_exclusive_set</summary>

```diff
+[
+  "supplementaries:carousel?"
+  "supplementaries:whimsy?"
+]

```


</details>

<details>
<summary>minecraft:entity_type/bhc:no_hearts</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:item/curios:logistics_wrench</summary>

```diff
+[
+  "logisticsnetworks:wrench"
+]

```


</details>

<details>
<summary>minecraft:item/industrialization_overdrive:me_output_hatch_cell_blacklist</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:item/neovitae:hellforgeable</summary>

```diff
+[
+  "#neovitae:sentient_upgrade_set/sentient"
+  "neovitae:lex_vitae"
+  "neovitae:sentient_axe"
+  "neovitae:sentient_pickaxe"
+  "neovitae:sentient_scythe"
+  "neovitae:sentient_shovel"
+  "neovitae:sentient_sword"
+]

```


</details>

<details>
<summary>minecraft:item/neovitae:hellforging/gem</summary>

```diff
+[
+  "neovitae:prismatic_spiritus_gem"
+]

```


</details>

<details>
<summary>minecraft:item/neovitae:hellforging/metal</summary>

```diff
+[
+  "#c:ingots/hellforged"
+]

```


</details>

<details>
<summary>minecraft:item/quark:enchanting_tooltip_items</summary>

```diff
+[
+  "supplementaries:bubble_blower"
+  "supplementaries:lunch_basket"
+  "supplementaries:quiver"
+  "supplementaries:slingshot"
+]

```


</details>

<details>
<summary>minecraft:item/supplementaries:enchantable/selectable_container</summary>

```diff
+[
+  "supplementaries:lunch_basket"
+  "supplementaries:quiver"
+]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:requires_hellforged</summary>

```diff
+[
+  "neovitae:deus_sanguinis"
+]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:trainable</summary>

```diff
+[
+  "neovitae:aquatic_agility"
+  "neovitae:arrow_protect"
+  "neovitae:deus_sanguinis"
+  "neovitae:digging"
+  "neovitae:experienced"
+  "neovitae:fall_protect"
+  "neovitae:fire_resist"
+  "neovitae:gills"
+  "neovitae:health"
+  "neovitae:jump"
+  "neovitae:knockback_resist"
+  "neovitae:lava_strider"
+  "neovitae:melee_damage"
+  "neovitae:physical_protect"
+  "neovitae:poison_resist"
+  "neovitae:repair"
+  "neovitae:self_sacrifice"
+  "neovitae:speed"
+  "neovitae:sprint_attack"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (69)</summary>
<blockquote>

<details>
<summary>minecraft:block/amendments:wall_lanterns</summary>

```diff
 [
   ... (65 entries)
+  "amendments:supplementaries/wall_redstone_lantern"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/buildinggadgets2:deny</summary>

```diff
 [
   ... (8 entries)
+  "logisticsnetworks:computer"
+  "logisticsnetworks:server_rack"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:ropes</summary>

```diff
 [
   ... (1 entries)
-  "supplementaries:rope?"
+  "supplementaries:rope"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks</summary>

```diff
 [
   ... (419 entries)
-  "supplementaries:flint_block"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/flint</summary>

```diff
 [
-  "supplementaries:flint_block"
 ]

```


</details>

<details>
<summary>minecraft:block/c:suspicious</summary>

```diff
 [
   ... (2 entries)
-  "supplementaries:suspicious_gravel_bricks?"
+  "supplementaries:suspicious_gravel_bricks"
 ]

```


</details>

<details>
<summary>minecraft:block/create:brittle</summary>

```diff
 [
   ... (76 entries)
-  "supplementaries:ash?"
-  "supplementaries:barnacles?"
-  "supplementaries:crank?"
-  "supplementaries:doormat?"
-  "supplementaries:item_shelf?"
-  "supplementaries:pancake?"
-  "supplementaries:sconce_lever?"
+  "supplementaries:ash"
+  "supplementaries:barnacles"
+  "supplementaries:crank"
+  "supplementaries:doormat"
+  "supplementaries:gunpowder?"
+  "supplementaries:item_shelf"
+  "supplementaries:pancake"
+  "supplementaries:sconce_lever"
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_processing_catalysts/smoking</summary>

```diff
 [
   ... (8 entries)
-  "supplementaries:fire_pit?"
+  "supplementaries:fire_pit"
 ]

```


</details>

<details>
<summary>minecraft:block/create:fan_transparent</summary>

```diff
 [
   ... (30 entries)
-  "supplementaries:gold_gate?"
-  "supplementaries:iron_gate?"
+  "supplementaries:globe"
+  "supplementaries:globe_sepia"
+  "supplementaries:gold_bars"
+  "supplementaries:gold_gate"
+  "supplementaries:iron_gate"
+  "supplementaries:wind_vane"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/create:safe_nbt</summary>

```diff
 [
   ... (31 entries)
-  "supplementaries:blackboard?"
-  "supplementaries:lock_block?"
-  "supplementaries:netherite_door?"
-  "supplementaries:netherite_trapdoor?"
-  "supplementaries:speaker_block?"
+  "supplementaries:blackboard"
+  "supplementaries:lock_block"
+  "supplementaries:netherite_door"
+  "supplementaries:netherite_trapdoor"
+  "supplementaries:speaker_block"
 ]

```


</details>

<details>
<summary>minecraft:block/farmersdelight:ropes</summary>

```diff
 [
   ... (2 entries)
+  "supplementaries:rope"
   ... (1 entries)
-  "supplementaries:rope?"
 ]

```


</details>

<details>
<summary>minecraft:block/farmersdelight:tray_heat_sources</summary>

```diff
 [
   ... (4 entries)
-  "supplementaries:fire_pit?"
+  "supplementaries:fire_pit"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:doors</summary>

```diff
 [
   ... (7 entries)
+  "copycats:copycat_door"
   ... (1 entries)
+  "copycats:copycat_iron_door"
   ... (111 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (6693 entries)
+  "industrialization_overdrive:me_fluid_input_hatch"
+  "industrialization_overdrive:me_fluid_output_hatch"
+  "industrialization_overdrive:me_item_input_hatch"
+  "industrialization_overdrive:me_item_output_hatch"
+  "industrialization_overdrive:me_mixed_input_hatch"
+  "industrialization_overdrive:me_mixed_output_hatch"
   ... (2869 entries)
-  "neovitae:deforester_charge_2"
   ... (137 entries)
-  "neovitae:fungal_charge_2"
   ... (45 entries)
-  "neovitae:shaped_charge_deep"
   ... (14 entries)
-  "neovitae:veinmine_charge_2"
   ... (569 entries)
+  "railcraft:commercial_steam_engine"
   ... (16 entries)
+  "railcraft:hobbyist_steam_engine"
+  "railcraft:industrial_steam_engine"
   ... (29 entries)
+  "railcraft:wire"
   ... (3680 entries)
+  "sophisticatedstorage:copper_tank"
   ... (1 entries)
+  "sophisticatedstorage:diamond_tank"
   ... (1 entries)
+  "sophisticatedstorage:gold_tank"
   ... (1 entries)
+  "sophisticatedstorage:iron_tank"
   ... (1 entries)
+  "sophisticatedstorage:netherite_tank"
   ... (5 entries)
+  "sophisticatedstorage:tank"
   ... (110 entries)
-  "supplementaries:flint_block"
   ... (22 entries)
+  "supplementaries:redstone_lantern"
   ... (1258 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (567 entries)
+  "industrialization_overdrive:me_fluid_input_hatch"
+  "industrialization_overdrive:me_fluid_output_hatch"
+  "industrialization_overdrive:me_item_input_hatch"
+  "industrialization_overdrive:me_item_output_hatch"
+  "industrialization_overdrive:me_mixed_input_hatch"
+  "industrialization_overdrive:me_mixed_output_hatch"
   ... (627 entries)
-  "neovitae:deforester_charge_2"
   ... (131 entries)
-  "neovitae:fungal_charge_2"
   ... (28 entries)
-  "neovitae:shaped_charge_deep"
   ... (10 entries)
-  "neovitae:veinmine_charge_2"
   ... (6 entries)
+  "railcraft:commercial_steam_engine"
   ... (10 entries)
+  "railcraft:hobbyist_steam_engine"
+  "railcraft:industrial_steam_engine"
   ... (925 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_doors</summary>

```diff
 [
   ... (237 entries)
+  "copycats:copycat_door"
   ... (516 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/quark:non_double_door</summary>

```diff
 [
   ... (7 entries)
-  "supplementaries:gold_gate?"
+  "supplementaries:gold_gate"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:abandoned_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:abandoned_delayed_locking_track"
   ... (9 entries)
+  "railcraft:abandoned_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:electric_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:electric_delayed_locking_track"
   ... (9 entries)
+  "railcraft:electric_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:high_speed_electric_track</summary>

```diff
 [
   ... (2 entries)
+  "railcraft:high_speed_electric_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_electric_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:high_speed_track</summary>

```diff
 [
   ... (2 entries)
+  "railcraft:high_speed_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:iron_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:iron_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:reinforced_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:reinforced_delayed_locking_track"
   ... (9 entries)
+  "railcraft:reinforced_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/railcraft:strap_iron_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:strap_iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:strap_iron_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/sable:super_light</summary>

```diff
 [
   ... (29 entries)
-  "supplementaries:gold_gate?"
-  "supplementaries:iron_gate?"
-  "supplementaries:rope?"
+  "supplementaries:gold_gate"
+  "supplementaries:iron_gate"
+  "supplementaries:rope"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:brick_breakable</summary>

```diff
 [
   ... (1 entries)
-  "supplementaries:jar?"
-  "supplementaries:urn?"
+  "supplementaries:jar"
+  "supplementaries:urn"
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:flint_metals</summary>

```diff
 [
   ... (25 entries)
-  "supplementaries:netherite_door?"
-  "supplementaries:netherite_trapdoor?"
+  "supplementaries:netherite_door"
+  "supplementaries:netherite_trapdoor"
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:hang_from_ropes</summary>

```diff
 [
   ... (4 entries)
-  "#supplementaries:sack?"
+  "#supplementaries:sacks?"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:presents</summary>

```diff
 [
-  "supplementaries:present?"
-  "supplementaries:present_black?"
-  "supplementaries:present_blue?"
-  "supplementaries:present_brown?"
-  "supplementaries:present_cyan?"
-  "supplementaries:present_gray?"
-  "supplementaries:present_green?"
-  "supplementaries:present_light_blue?"
-  "supplementaries:present_light_gray?"
-  "supplementaries:present_lime?"
-  "supplementaries:present_magenta?"
-  "supplementaries:present_orange?"
-  "supplementaries:present_pink?"
-  "supplementaries:present_purple?"
-  "supplementaries:present_red?"
-  "supplementaries:present_white?"
-  "supplementaries:present_yellow?"
+  "supplementaries:present"
+  "supplementaries:present_black"
+  "supplementaries:present_blue"
+  "supplementaries:present_brown"
+  "supplementaries:present_cyan"
+  "supplementaries:present_gray"
+  "supplementaries:present_green"
+  "supplementaries:present_light_blue"
+  "supplementaries:present_light_gray"
+  "supplementaries:present_lime"
+  "supplementaries:present_magenta"
+  "supplementaries:present_orange"
+  "supplementaries:present_pink"
+  "supplementaries:present_purple"
+  "supplementaries:present_red"
+  "supplementaries:present_white"
+  "supplementaries:present_yellow"
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:sconces</summary>

```diff
 [
-  "supplementaries:sconce?"
+  "supplementaries:copper_sconce?"
+  "supplementaries:copper_wall_sconce?"
+  "supplementaries:exposed_copper_sconce?"
+  "supplementaries:exposed_copper_wall_sconce?"
+  "supplementaries:oxidized_copper_sconce?"
+  "supplementaries:oxidized_copper_wall_sconce?"
+  "supplementaries:sconce"
   ... (2 entries)
-  "supplementaries:sconce_green?"
-  "supplementaries:sconce_lever?"
+  "supplementaries:sconce_green"
+  "supplementaries:sconce_lever"
   ... (1 entries)
-  "supplementaries:sconce_soul?"
-  "supplementaries:sconce_wall?"
+  "supplementaries:sconce_soul"
+  "supplementaries:sconce_wall"
   ... (2 entries)
-  "supplementaries:sconce_wall_green?"
+  "supplementaries:sconce_wall_green"
   ... (1 entries)
-  "supplementaries:sconce_wall_soul?"
+  "supplementaries:sconce_wall_soul"
+  "supplementaries:waxed_copper_sconce?"
+  "supplementaries:waxed_copper_wall_sconce?"
+  "supplementaries:waxed_exposed_copper_sconce?"
+  "supplementaries:waxed_exposed_copper_wall_sconce?"
+  "supplementaries:waxed_oxidized_copper_sconce?"
+  "supplementaries:waxed_oxidized_copper_wall_sconce?"
+  "supplementaries:waxed_weathered_copper_sconce?"
+  "supplementaries:waxed_weathered_copper_wall_sconce?"
+  "supplementaries:weathered_copper_sconce?"
+  "supplementaries:weathered_copper_wall_sconce?"
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:trapped_presents</summary>

```diff
 [
-  "supplementaries:trapped_present?"
-  "supplementaries:trapped_present_black?"
-  "supplementaries:trapped_present_blue?"
-  "supplementaries:trapped_present_brown?"
-  "supplementaries:trapped_present_cyan?"
-  "supplementaries:trapped_present_gray?"
-  "supplementaries:trapped_present_green?"
-  "supplementaries:trapped_present_light_blue?"
-  "supplementaries:trapped_present_light_gray?"
-  "supplementaries:trapped_present_lime?"
-  "supplementaries:trapped_present_magenta?"
-  "supplementaries:trapped_present_orange?"
-  "supplementaries:trapped_present_pink?"
-  "supplementaries:trapped_present_purple?"
-  "supplementaries:trapped_present_red?"
-  "supplementaries:trapped_present_white?"
-  "supplementaries:trapped_present_yellow?"
+  "supplementaries:trapped_present"
+  "supplementaries:trapped_present_black"
+  "supplementaries:trapped_present_blue"
+  "supplementaries:trapped_present_brown"
+  "supplementaries:trapped_present_cyan"
+  "supplementaries:trapped_present_gray"
+  "supplementaries:trapped_present_green"
+  "supplementaries:trapped_present_light_blue"
+  "supplementaries:trapped_present_light_gray"
+  "supplementaries:trapped_present_lime"
+  "supplementaries:trapped_present_magenta"
+  "supplementaries:trapped_present_orange"
+  "supplementaries:trapped_present_pink"
+  "supplementaries:trapped_present_purple"
+  "supplementaries:trapped_present_red"
+  "supplementaries:trapped_present_white"
+  "supplementaries:trapped_present_yellow"
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:water_holder</summary>

```diff
 [
   ... (1 entries)
+  "farmersdelight:bamboo_basket?"
   ... (1 entries)
+  "farmersdelight:wooden_basket?"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:enchantment/minecraft:treasure</summary>

```diff
 [
   ... (15 entries)
+  "supplementaries:carousel?"
   ... (1 entries)
+  "supplementaries:whimsy?"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
   ... (471 entries)
-  "supplementaries:flint_block"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/flint</summary>

```diff
 [
-  "supplementaries:flint_block"
 ]

```


</details>

<details>
<summary>minecraft:item/create:contraption_controlled</summary>

```diff
 [
   ... (2 entries)
+  "copycats:copycat_iron_door"
   ... (24 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/create:deployable_drink</summary>

```diff
 [
   ... (2 entries)
-  "supplementaries:lumisene_bottle?"
+  "supplementaries:lumisene_bottle"
 ]

```


</details>

<details>
<summary>minecraft:item/create:upright_on_belt</summary>

```diff
 [
   ... (56 entries)
-  "supplementaries:antique_ink?"
-  "supplementaries:lumisene_bottle?"
-  "supplementaries:lumisene_bucket?"
+  "supplementaries:antique_ink"
+  "supplementaries:lumisene_bottle"
+  "supplementaries:lumisene_bucket"
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:doors</summary>

```diff
 [
   ... (10 entries)
+  "copycats:copycat_iron_door"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:trapdoors</summary>

```diff
 [
   ... (246 entries)
+  "copycats:copycat_iron_trapdoor"
+  "copycats:copycat_trapdoor"
   ... (44 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_trapdoors</summary>

```diff
 [
   ... (278 entries)
+  "copycats:copycat_trapdoor"
   ... (412 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/neovitae:charges</summary>

```diff
 [
   ... (2 entries)
-  "neovitae:deforester_charge_2"
   ... (1 entries)
-  "neovitae:fungal_charge_2"
   ... (1 entries)
-  "neovitae:shaped_charge_deep"
   ... (1 entries)
-  "neovitae:veinmine_charge_2"
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:abandoned_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:abandoned_delayed_locking_track"
   ... (9 entries)
+  "railcraft:abandoned_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:electric_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:electric_delayed_locking_track"
   ... (9 entries)
+  "railcraft:electric_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:high_speed_electric_track</summary>

```diff
 [
   ... (2 entries)
+  "railcraft:high_speed_electric_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_electric_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:high_speed_track</summary>

```diff
 [
   ... (2 entries)
+  "railcraft:high_speed_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:iron_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:iron_messenger_track"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:reinforced_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:reinforced_delayed_locking_track"
   ... (9 entries)
+  "railcraft:reinforced_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:strap_iron_track</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:strap_iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:strap_iron_messenger_track"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/railcraft:track_kit</summary>

```diff
 [
   ... (5 entries)
+  "railcraft:delayed_locking_track_kit"
   ... (8 entries)
+  "railcraft:messenger_track_kit"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedstorage:all_storage</summary>

```diff
 [
   ... (5 entries)
+  "sophisticatedstorage:copper_tank"
   ... (3 entries)
+  "sophisticatedstorage:diamond_tank"
   ... (3 entries)
+  "sophisticatedstorage:gold_tank"
   ... (3 entries)
+  "sophisticatedstorage:iron_tank"
   ... (27 entries)
+  "sophisticatedstorage:netherite_tank"
   ... (1 entries)
+  "sophisticatedstorage:tank"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:flags</summary>

```diff
 [
-  "supplementaries:flag_black?"
-  "supplementaries:flag_blue?"
-  "supplementaries:flag_brown?"
-  "supplementaries:flag_cyan?"
-  "supplementaries:flag_gray?"
-  "supplementaries:flag_green?"
-  "supplementaries:flag_light_blue?"
-  "supplementaries:flag_light_gray?"
-  "supplementaries:flag_lime?"
-  "supplementaries:flag_magenta?"
-  "supplementaries:flag_orange?"
-  "supplementaries:flag_pink?"
-  "supplementaries:flag_purple?"
-  "supplementaries:flag_red?"
-  "supplementaries:flag_white?"
-  "supplementaries:flag_yellow?"
+  "supplementaries:flag_black"
+  "supplementaries:flag_blue"
+  "supplementaries:flag_brown"
+  "supplementaries:flag_cyan"
+  "supplementaries:flag_gray"
+  "supplementaries:flag_green"
+  "supplementaries:flag_light_blue"
+  "supplementaries:flag_light_gray"
+  "supplementaries:flag_lime"
+  "supplementaries:flag_magenta"
+  "supplementaries:flag_orange"
+  "supplementaries:flag_pink"
+  "supplementaries:flag_purple"
+  "supplementaries:flag_red"
+  "supplementaries:flag_white"
+  "supplementaries:flag_yellow"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:flower_box_plantable</summary>

```diff
 [
   ... (388 entries)
-  "supplementaries:flax_seeds?"
+  "supplementaries:flax_seeds"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:hourglass_dusts</summary>

```diff
 [
   ... (69 entries)
-  "supplementaries:ash?"
+  "supplementaries:ash"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:jar_cookies</summary>

```diff
 [
   ... (78 entries)
-  "supplementaries:candy?"
+  "supplementaries:candy"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:keys</summary>

```diff
 [
-  "supplementaries:key?"
+  "supplementaries:key"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:lunch_basket_blacklist</summary>

```diff
 [
   ... (6 entries)
-  "supplementaries:lunch_basket?"
+  "supplementaries:lunch_basket"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:presents</summary>

```diff
 [
-  "supplementaries:present?"
-  "supplementaries:present_black?"
-  "supplementaries:present_blue?"
-  "supplementaries:present_brown?"
-  "supplementaries:present_cyan?"
-  "supplementaries:present_gray?"
-  "supplementaries:present_green?"
-  "supplementaries:present_light_blue?"
-  "supplementaries:present_light_gray?"
-  "supplementaries:present_lime?"
-  "supplementaries:present_magenta?"
-  "supplementaries:present_orange?"
-  "supplementaries:present_pink?"
-  "supplementaries:present_purple?"
-  "supplementaries:present_red?"
-  "supplementaries:present_white?"
-  "supplementaries:present_yellow?"
+  "supplementaries:present"
+  "supplementaries:present_black"
+  "supplementaries:present_blue"
+  "supplementaries:present_brown"
+  "supplementaries:present_cyan"
+  "supplementaries:present_gray"
+  "supplementaries:present_green"
+  "supplementaries:present_light_blue"
+  "supplementaries:present_light_gray"
+  "supplementaries:present_lime"
+  "supplementaries:present_magenta"
+  "supplementaries:present_orange"
+  "supplementaries:present_pink"
+  "supplementaries:present_purple"
+  "supplementaries:present_red"
+  "supplementaries:present_white"
+  "supplementaries:present_yellow"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:sconces</summary>

```diff
 [
-  "supplementaries:sconce?"
+  "supplementaries:copper_sconce?"
+  "supplementaries:exposed_copper_sconce?"
+  "supplementaries:oxidized_copper_sconce?"
+  "supplementaries:sconce"
   ... (2 entries)
-  "supplementaries:sconce_green?"
+  "supplementaries:sconce_green"
   ... (1 entries)
-  "supplementaries:sconce_soul?"
-  "supplementaries:sconce_soul?"
+  "supplementaries:sconce_soul"
+  "supplementaries:sconce_soul"
+  "supplementaries:waxed_copper_sconce?"
+  "supplementaries:waxed_exposed_copper_sconce?"
+  "supplementaries:waxed_oxidized_copper_sconce?"
+  "supplementaries:waxed_weathered_copper_sconce?"
+  "supplementaries:weathered_copper_sconce?"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:shulker_blacklist</summary>

```diff
 [
   ... (2 entries)
-  "supplementaries:safe?"
+  "supplementaries:safe"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:statue_tools</summary>

```diff
 [
   ... (1 entries)
-  "supplementaries:wrench?"
+  "supplementaries:wrench"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:straw</summary>

```diff
 [
   ... (3 entries)
-  "supplementaries:flax?"
+  "supplementaries:flax"
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:throwable_bricks</summary>

```diff
 [
   ... (28 entries)
-  "supplementaries:ash_brick?"
+  "supplementaries:ash_brick"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:trapped_presents</summary>

```diff
 [
-  "supplementaries:trapped_present?"
-  "supplementaries:trapped_present_black?"
-  "supplementaries:trapped_present_blue?"
-  "supplementaries:trapped_present_brown?"
-  "supplementaries:trapped_present_cyan?"
-  "supplementaries:trapped_present_gray?"
-  "supplementaries:trapped_present_green?"
-  "supplementaries:trapped_present_light_blue?"
-  "supplementaries:trapped_present_light_gray?"
-  "supplementaries:trapped_present_lime?"
-  "supplementaries:trapped_present_magenta?"
-  "supplementaries:trapped_present_orange?"
-  "supplementaries:trapped_present_pink?"
-  "supplementaries:trapped_present_purple?"
-  "supplementaries:trapped_present_red?"
-  "supplementaries:trapped_present_white?"
-  "supplementaries:trapped_present_yellow?"
+  "supplementaries:trapped_present"
+  "supplementaries:trapped_present_black"
+  "supplementaries:trapped_present_blue"
+  "supplementaries:trapped_present_brown"
+  "supplementaries:trapped_present_cyan"
+  "supplementaries:trapped_present_gray"
+  "supplementaries:trapped_present_green"
+  "supplementaries:trapped_present_light_blue"
+  "supplementaries:trapped_present_light_gray"
+  "supplementaries:trapped_present_lime"
+  "supplementaries:trapped_present_magenta"
+  "supplementaries:trapped_present_orange"
+  "supplementaries:trapped_present_pink"
+  "supplementaries:trapped_present_purple"
+  "supplementaries:trapped_present_red"
+  "supplementaries:trapped_present_white"
+  "supplementaries:trapped_present_yellow"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure/ctov:large_village</summary>

```diff
 [
   ... (21 entries)
+  "ctov:large/village_underground"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure/ctov:medium_village</summary>

```diff
 [
   ... (21 entries)
+  "ctov:medium/village_underground"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure/ctov:small_village</summary>

```diff
 [
   ... (21 entries)
+  "ctov:small/village_underground"
 ]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:is_scrappable</summary>

```diff
 [
   ... (2 entries)
+  "neovitae:deus_sanguinis"
   ... (21 entries)
 ]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:tooltip_order</summary>

```diff
 [
   ... (4 entries)
+  "neovitae:deus_sanguinis"
   ... (30 entries)
 ]

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
   ... (3048 entries)
+  "amendments:supplementaries/wall_redstone_lantern"
   ... (24058 entries)
+  "industrialization_overdrive:me_fluid_input_hatch"
+  "industrialization_overdrive:me_fluid_output_hatch"
+  "industrialization_overdrive:me_item_input_hatch"
+  "industrialization_overdrive:me_item_output_hatch"
+  "industrialization_overdrive:me_mixed_input_hatch"
+  "industrialization_overdrive:me_mixed_output_hatch"
   ... (6514 entries)
-  "neovitae:deforester_charge_2"
   ... (142 entries)
-  "neovitae:fungal_charge_2"
   ... (51 entries)
-  "neovitae:shaped_charge_deep"
   ... (20 entries)
-  "neovitae:veinmine_charge_2"
   ... (5167 entries)
+  "railcraft:abandoned_delayed_locking_track"
   ... (9 entries)
+  "railcraft:abandoned_messenger_track"
   ... (57 entries)
+  "railcraft:commercial_steam_engine"
   ... (27 entries)
+  "railcraft:electric_delayed_locking_track"
   ... (9 entries)
+  "railcraft:electric_messenger_track"
   ... (38 entries)
+  "railcraft:high_speed_delayed_locking_track"
   ... (3 entries)
+  "railcraft:high_speed_electric_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_electric_messenger_track"
   ... (9 entries)
+  "railcraft:high_speed_messenger_track"
   ... (6 entries)
+  "railcraft:hobbyist_steam_engine"
+  "railcraft:industrial_steam_engine"
   ... (6 entries)
+  "railcraft:iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:iron_messenger_track"
   ... (102 entries)
+  "railcraft:reinforced_delayed_locking_track"
   ... (9 entries)
+  "railcraft:reinforced_messenger_track"
   ... (29 entries)
+  "railcraft:strap_iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:strap_iron_messenger_track"
   ... (29 entries)
+  "railcraft:wire"
   ... (7085 entries)
+  "sophisticatedstorage:copper_tank"
   ... (6 entries)
+  "sophisticatedstorage:diamond_tank"
   ... (3 entries)
+  "sophisticatedstorage:gold_tank"
   ... (3 entries)
+  "sophisticatedstorage:iron_tank"
   ... (29 entries)
+  "sophisticatedstorage:netherite_tank"
   ... (7 entries)
+  "sophisticatedstorage:tank"
   ... (433 entries)
+  "supplementaries:redstone_lantern"
   ... (2153 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (1267 entries)
+  "industrialization_overdrive:me_fluid_input_hatch"
+  "industrialization_overdrive:me_fluid_output_hatch"
+  "industrialization_overdrive:me_item_input_hatch"
+  "industrialization_overdrive:me_item_output_hatch"
+  "industrialization_overdrive:me_mixed_input_hatch"
+  "industrialization_overdrive:me_mixed_output_hatch"
   ... (1011 entries)
+  "railcraft:delayed_locking_track"
   ... (12 entries)
+  "railcraft:hobbyist_steam_engine"
   ... (9 entries)
+  "railcraft:messenger_track"
   ... (16 entries)
+  "railcraft:steam_engine"
   ... (307 entries)
+  "sophisticatedstorage:tank"
   ... (202 entries)
 ]

```


</details>

<details>
<summary>enchantment</summary>

```diff
 [
   ... (116 entries)
+  "supplementaries:carousel"
   ... (1 entries)
+  "supplementaries:whimsy"
   ... (23 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (35351 entries)
+  "industrialization_overdrive:me_fluid_input_hatch"
+  "industrialization_overdrive:me_fluid_output_hatch"
+  "industrialization_overdrive:me_item_input_hatch"
+  "industrialization_overdrive:me_item_output_hatch"
+  "industrialization_overdrive:me_mixed_input_hatch"
+  "industrialization_overdrive:me_mixed_output_hatch"
   ... (889 entries)
+  "logisticsnetworks:recipe_card"
   ... (8547 entries)
-  "neovitae:deforester_charge_2"
   ... (181 entries)
-  "neovitae:fungal_charge_2"
   ... (231 entries)
-  "neovitae:shaped_charge_deep"
   ... (129 entries)
-  "neovitae:veinmine_charge_2"
   ... (6769 entries)
+  "railcraft:abandoned_delayed_locking_track"
   ... (9 entries)
+  "railcraft:abandoned_messenger_track"
   ... (87 entries)
+  "railcraft:commercial_steam_engine"
   ... (27 entries)
+  "railcraft:delayed_locking_track_kit"
   ... (15 entries)
+  "railcraft:electric_delayed_locking_track"
   ... (10 entries)
+  "railcraft:electric_messenger_track"
   ... (47 entries)
+  "railcraft:high_speed_delayed_locking_track"
   ... (3 entries)
+  "railcraft:high_speed_electric_delayed_locking_track"
   ... (4 entries)
+  "railcraft:high_speed_electric_messenger_track"
   ... (9 entries)
+  "railcraft:high_speed_messenger_track"
   ... (7 entries)
+  "railcraft:hobbyist_steam_engine"
+  "railcraft:industrial_steam_engine"
   ... (12 entries)
+  "railcraft:iron_delayed_locking_track"
   ... (11 entries)
+  "railcraft:iron_messenger_track"
   ... (59 entries)
+  "railcraft:messenger_track_kit"
   ... (70 entries)
+  "railcraft:reinforced_delayed_locking_track"
   ... (9 entries)
+  "railcraft:reinforced_messenger_track"
   ... (67 entries)
+  "railcraft:strap_iron_delayed_locking_track"
   ... (9 entries)
+  "railcraft:strap_iron_messenger_track"
   ... (12 entries)
+  "railcraft:tag_filter"
   ... (41 entries)
+  "railcraft:wire"
   ... (7753 entries)
+  "sophisticatedstorage:copper_tank"
   ... (12 entries)
+  "sophisticatedstorage:diamond_tank"
   ... (6 entries)
+  "sophisticatedstorage:gold_tank"
   ... (8 entries)
+  "sophisticatedstorage:iron_tank"
   ... (34 entries)
+  "sophisticatedstorage:netherite_tank"
   ... (43 entries)
+  "sophisticatedstorage:tank"
   ... (886 entries)
+  "supplementaries:redstone_lantern"
   ... (3140 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (200 entries)
+  "neovitae:anima_severance"
   ... (114 entries)
 ]

```


</details>

<details>
<summary>worldgen/structure</summary>

```diff
 [
   ... (142 entries)
-  "ctov:pillager_outpost_mesa"
   ... (762 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (83)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_fluid_input_hatch</summary>

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
+          name: "industrialization_overdrive:me_fluid_input_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_fluid_input_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_fluid_output_hatch</summary>

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
+          name: "industrialization_overdrive:me_fluid_output_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_fluid_output_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_item_input_hatch</summary>

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
+          name: "industrialization_overdrive:me_item_input_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_item_input_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_item_output_hatch</summary>

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
+          name: "industrialization_overdrive:me_item_output_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_item_output_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_mixed_input_hatch</summary>

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
+          name: "industrialization_overdrive:me_mixed_input_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_mixed_input_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/industrialization_overdrive/blocks/me_mixed_output_hatch</summary>

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
+          name: "industrialization_overdrive:me_mixed_output_hatch"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "industrialization_overdrive:blocks/me_mixed_output_hatch"
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/badlands</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/beach</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+          name: "minecraft:emerald_block"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+          name: "minecraft:gold_nugget"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+          name: "minecraft:gold_ingot"
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+          name: "minecraft:gold_block"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:exploration_map"
+              destination: "minecraft:ocean_ruin"
+              decoration: "red_x"
+              zoom: 1
+              skip_existing_chunks: false
+            }
+            {
+              function: "minecraft:set_name"
+              name: {
+                translate: "monobank.filled_map.ruined_portal"
+              }
+            }
+          ]
+          name: "minecraft:map"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/dark_forest</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/jungle</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/mountain</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/mushroom</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/monobank/monobank/village/swamp</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 4
+                max: 17
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:emerald_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 4
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_nugget"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 15
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_ingot"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 9
+              }
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:item"
+          weight: 4
+          name: "minecraft:gold_block"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/abandoned_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/abandoned_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/abandoned_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/abandoned_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/commercial_steam_engine</summary>

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
+          name: "railcraft:commercial_steam_engine"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/commercial_steam_engine"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/electric_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/electric_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/electric_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/electric_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/high_speed_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/high_speed_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/high_speed_electric_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/high_speed_electric_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/high_speed_electric_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/high_speed_electric_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/high_speed_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/high_speed_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/hobbyist_steam_engine</summary>

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
+          name: "railcraft:hobbyist_steam_engine"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/hobbyist_steam_engine"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/industrial_steam_engine</summary>

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
+          name: "railcraft:industrial_steam_engine"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/industrial_steam_engine"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/iron_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/iron_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/iron_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/iron_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/reinforced_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/reinforced_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/reinforced_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/reinforced_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/strap_iron_delayed_locking_track</summary>

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
+          name: "railcraft:delayed_locking_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/strap_iron_delayed_locking_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/strap_iron_messenger_track</summary>

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
+          name: "railcraft:messenger_track_kit"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/strap_iron_messenger_track"
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/wire</summary>

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
+          name: "railcraft:wire"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/wire"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/copper_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/copper_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/diamond_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/diamond_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/gold_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/gold_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/iron_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/iron_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/netherite_tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/netherite_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/sophisticatedstorage/blocks/tank</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "sophisticatedstorage:blocks/tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/supplementaries/blocks/copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/exposed_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:exposed_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/oxidized_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:oxidized_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/redstone_lantern</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "supplementaries:redstone_lantern"
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
<summary>minecraft/loot_table/supplementaries/blocks/waxed_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:waxed_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/waxed_exposed_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:waxed_exposed_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/waxed_oxidized_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:waxed_oxidized_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/waxed_weathered_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:waxed_weathered_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/blocks/weathered_copper_sconce</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "moonlight:optional_item"
+          name: "supplementaries:weathered_copper_sconce"
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
<summary>minecraft/loot_table/supplementaries/inject/dungeon_whimsy</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      conditions: [
+        {
+          condition: "random_chance"
+          chance: 0.03
+        }
+      ]
+      entries: [
+        {
+          type: "item"
+          weight: 1
+          name: "minecraft:book"
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "supplementaries:whimsy"
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/supplementaries/inject/pillager_carousel</summary>

```diff
+{
+  pools: [
+    {
+      rolls: 1
+      conditions: [
+        {
+          condition: "random_chance"
+          chance: 0.03
+        }
+      ]
+      entries: [
+        {
+          type: "item"
+          weight: 1
+          name: "minecraft:book"
+          functions: [
+            {
+              function: "minecraft:enchant_randomly"
+              options: "supplementaries:carousel"
+            }
+          ]
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/badlands_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cactus"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rabbit_hide"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay_ball"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dead_bush"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+          weight: 10
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/badlands_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/badlands_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/badlands_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/badlands_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/badlands_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/badlands_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:cactus"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:green_dye"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay_ball"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sandstone"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:red_sandstone"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:terracotta"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:black_terracotta"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:white_terracotta"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rabbit_hide"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/badlands_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/beach_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sugar_cane"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rabbit_hide"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay_ball"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dead_bush"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+          weight: 10
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/beach_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/beach_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/beach_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/beach_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/beach_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/beach_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sugar_cane"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:rabbit_hide"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:clay_ball"
+          weight: 8
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dead_bush"
+          weight: 6
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 12
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+          weight: 10
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/beach_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/dark_forest_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sunflower"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/dark_forest_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/dark_forest_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/dark_forest_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/dark_forest_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/dark_forest_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/dark_forest_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/dark_forest_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/jungle_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sunflower"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/jungle_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/jungle_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/jungle_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/jungle_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/jungle_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/jungle_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/jungle_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mountain_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sunflower"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/dark_forest_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mountain_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mountain_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mountain_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mountain_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mountain_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mountain_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mushroom_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sunflower"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mushroom_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mushroom_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mushroom_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mushroom_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mushroom_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/mushroom_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/mushroom_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/swamp_payment_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 6
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:dandelion"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:sunflower"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/swamp_payment_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/swamp_payment_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/swamp_payment_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/swamp_requested_buy</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 8
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/swamp_requested_buy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/agreement/village/swamp_requested_sell</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:wheat"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 14
+                min: 8
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:potato"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:leather"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 16
+                min: 10
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:paper"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:beef"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:porkchop"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:chicken"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 6
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:bread"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "wares:agreement/village/swamp_requested_sell"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/badlands_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/badlands_payment_sell\",requested:\"wares:agreement/village/badlands_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/badlands_payment_buy\",requested:\"wares:agreement/village/badlands_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/badlands_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/beach_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/beach_payment_sell\",requested:\"wares:agreement/village/beach_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/beach_payment_buy\",requested:\"wares:agreement/village/beach_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/beach_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/dark_forest_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/dark_forest_payment_sell\",requested:\"wares:agreement/village/dark_forest_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/dark_forest_payment_buy\",requested:\"wares:agreement/village/dark_forest_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/dark_forest_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/jungle_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/jungle_payment_sell\",requested:\"wares:agreement/village/jungle_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/jungle_payment_buy\",requested:\"wares:agreement/village/jungle_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/jungle_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/mountain_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/mountain_payment_sell\",requested:\"wares:agreement/village/mountain_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/mountain_payment_buy\",requested:\"wares:agreement/village/mountain_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/mountain_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/mushroom_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/mushroom_payment_sell\",requested:\"wares:agreement/village/mushroom_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/mushroom_payment_buy\",requested:\"wares:agreement/village/mushroom_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/mushroom_warehouse"
+}

```


</details>

<details>
<summary>minecraft/loot_table/wares/chests/village/swamp_warehouse</summary>

```diff
+{
+  type: "minecraft:chest"
+  pools: [
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 2
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:paper"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: {
+                type: "minecraft:uniform"
+                min: 1
+                max: 3
+              }
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: {
+        type: "minecraft:uniform"
+        min: 1
+        max: 6
+      }
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:tag"
+          name: "ctov:wares/cardboard_box"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+      ]
+    }
+    {
+      rolls: 1
+      bonus_rolls: 0
+      entries: [
+        {
+          weight: 6
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/swamp_payment_sell\",requested:\"wares:agreement/village/swamp_requested_sell\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          weight: 3
+          type: "minecraft:tag"
+          name: "ctov:wares/sealed_delivery_agreement"
+          expand: false
+          functions: [
+            {
+              function: "minecraft:set_nbt"
+              tag: "{experience:{max:32,min:12,step:4},ordered:{max:256,min:64,step:8},payment:\"wares:agreement/village/swamp_payment_buy\",requested:\"wares:agreement/village/swamp_requested_buy\"}"
+            }
+            {
+              function: "minecraft:set_count"
+              count: 1
+              add: false
+            }
+          ]
+        }
+        {
+          type: "minecraft:empty"
+        }
+      ]
+    }
+  ]
+  random_sequence: "wares:chests/village/swamp_warehouse"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (4)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/neovitae/chests/mines/decent_loot</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
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
                 max: 20
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 16
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 14
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:netherite_scrap"
           quality: 4
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:corrupted_dust"
           quality: 4
           weight: 8
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 18
                 min: 12
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           quality: -2
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:fortune_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hidden_knowledge_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:silk_touch_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:fortune_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 17
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:amethyst_shard"
           quality: 1
           weight: 12
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hidden_knowledge_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:silk_touch_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_pickaxe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_shovel"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_axe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 17
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:quartz"
           quality: 1
           weight: 15
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_sword"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_hoe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_helmet"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_chestplate"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_leggings"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_boots"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_parts"
           quality: 10
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_resonator"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:advanced_cutting_fluid"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
               function: "neovitae:set_sentient_upgrade"
               upgrades: [
                 "neovitae:luck"
               ]
               points: {
                 type: "minecraft:uniform"
                 min: 50
                 max: 150
               }
             }
           ]
           name: "neovitae:upgrade_tome"
           quality: 6
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 20
                 min: 14
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:redstone"
           quality: 1
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 20
                 min: 14
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:lapis_lazuli"
           quality: 1
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:diamond"
           quality: 4
           weight: 5
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:emerald"
           quality: 5
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 6
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:strong_tau"
           quality: 3
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_3"
           weight: 2
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 5
         min: 3
       }
     }
     {
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "neovitae:standard_key"
         }
       ]
       conditions: [
         {
           condition: "minecraft:random_chance"
           chance: 0.04
         }
       ]
     }
   ]
   random_sequence: "neovitae:chests/mines/decent_loot"
 }

```


</details>

<details>
<summary>minecraft/loot_table/neovitae/chests/mines/mine_key_loot</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
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
                 max: 80
                 min: 32
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 32
                 min: 16
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 16
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 28
                 min: 12
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 14
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 20
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:netherite_scrap"
           quality: 4
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 20
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:corrupted_dust"
           quality: 4
           weight: 8
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 5
         min: 3
       }
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
                 max: 36
                 min: 24
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           quality: -2
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:fortune_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hidden_knowledge_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_3"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:silk_touch_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 34
                 min: 20
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:amethyst_shard"
           quality: 1
           weight: 12
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:fortune_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hidden_knowledge_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:silk_touch_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_xl"
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_pickaxe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_shovel"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 34
                 min: 20
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:quartz"
           quality: 1
           weight: 15
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_axe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_sword"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_hoe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_helmet"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_chestplate"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_leggings"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_boots"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_parts"
           quality: 10
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_resonator"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:advanced_cutting_fluid"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 28
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:redstone"
           quality: 1
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 28
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:lapis_lazuli"
           quality: 1
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 14
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:diamond"
           quality: 4
           weight: 7
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:emerald"
           quality: 5
           weight: 5
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 12
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:ender_pearl"
           quality: 4
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 6
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:strong_tau"
           quality: 3
           weight: 6
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 6
         min: 4
       }
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:elytra"
           quality: 15
           weight: 1
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 30
                 min: 20
               }
             }
           ]
           name: "minecraft:book"
           quality: 6
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:totem_of_undying"
           quality: 9
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 6
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:shulker_shell"
           quality: 8
           weight: 5
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 10
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:end_rod"
           quality: 4
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 12
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:popped_chorus_fruit"
           quality: 3
           weight: 8
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:chorus_fruit"
           quality: 2
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:ender_eye"
           quality: 5
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:experience_bottle"
           quality: 4
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 2
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:enchanted_golden_apple"
           quality: 8
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 4
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:golden_apple"
           quality: 5
           weight: 6
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 4
         min: 2
       }
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
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:mine_key"
         }
       ]
       rolls: 1
     }
     {
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "neovitae:standard_key"
         }
       ]
       conditions: [
         {
           condition: "minecraft:random_chance"
           chance: 0.04
         }
       ]
     }
   ]
   random_sequence: "neovitae:chests/mines/mine_key_loot"
 }

```


</details>

<details>
<summary>minecraft/loot_table/neovitae/chests/mines/ore_loot</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
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
                 max: 18
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 22
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 12
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 10
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 15
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:raw_demonite"
           quality: 3
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 4
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:ingot_hellforged"
           quality: 4
           weight: 5
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:netherite_scrap"
           quality: 5
           weight: 3
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 26
                 min: 12
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 15
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:strong_tau"
           quality: 3
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_dust"
           quality: 3
           weight: 12
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 20
               }
             }
           ]
           name: "minecraft:iron_pickaxe"
           quality: 1
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 20
               }
             }
           ]
           name: "minecraft:iron_shovel"
           quality: 1
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_pickaxe"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_shovel"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_pickaxe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_shovel"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_axe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               function: "neovitae:set_sentient_upgrade"
               points: {
                 type: "minecraft:uniform"
                 max: 300
                 min: 200
               }
               upgrades: [
                 "neovitae:digging"
               ]
             }
           ]
           name: "neovitae:upgrade_tome"
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 15
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_l"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_velocity_anointment_2"
           quality: 2
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_parts"
           quality: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 14
                 min: 7
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 16
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           quality: 2
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:diamond"
           quality: 4
           weight: 7
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 10
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:emerald"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 15
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:redstone"
           quality: 2
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 11
                 min: 6
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:gunpowder"
           quality: 2
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 15
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:lapis_lazuli"
           quality: 2
           weight: 10
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 5
         min: 3
       }
     }
     {
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "neovitae:standard_key"
         }
       ]
       conditions: [
         {
           condition: "minecraft:random_chance"
           chance: 0.04
         }
       ]
     }
   ]
   random_sequence: "neovitae:chests/mines/ore_loot"
 }

```


</details>

<details>
<summary>minecraft/loot_table/neovitae/chests/mines/smithy_loot</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
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
                 max: 22
                 min: 15
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 25
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 15
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 20
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 13
                 min: 8
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 15
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:netherite_scrap"
           quality: 4
           weight: 3
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 26
                 min: 12
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_copper"
           quality: -4
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_pickaxe"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_shovel"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_axe"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_hoe"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:diamond_sword"
           quality: 3
           weight: 3
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_pickaxe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_shovel"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_axe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_sword"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 40
                 min: 30
               }
             }
           ]
           name: "minecraft:netherite_hoe"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 15
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_iron"
           quality: 1
           weight: 16
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 25
               }
             }
           ]
           name: "minecraft:netherite_helmet"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 25
               }
             }
           ]
           name: "minecraft:netherite_chestplate"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 25
               }
             }
           ]
           name: "minecraft:netherite_leggings"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 25
               }
             }
           ]
           name: "minecraft:netherite_boots"
           quality: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               function: "neovitae:set_sentient_upgrade"
               points: {
                 type: "minecraft:uniform"
                 max: 300
                 min: 200
               }
               upgrades: [
                 "neovitae:arrow_protect"
               ]
             }
           ]
           name: "neovitae:upgrade_tome"
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               function: "neovitae:set_sentient_upgrade"
               points: {
                 type: "minecraft:uniform"
                 max: 300
                 min: 200
               }
               upgrades: [
                 "neovitae:physical_protect"
               ]
             }
           ]
           name: "neovitae:upgrade_tome"
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_power_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:holy_water_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:looting_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:melee_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 14
                 min: 7
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:raw_gold"
           quality: 2
           weight: 14
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:quick_draw_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:smelting_anointment_xl"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:bow_velocity_anointment_3"
           quality: 3
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
-              treasure: true
+              options: "#minecraft:on_random_loot"
               function: "minecraft:enchant_with_levels"
               levels: {
                 type: "minecraft:uniform"
                 max: 35
                 min: 25
               }
             }
           ]
           name: "minecraft:book"
           quality: 3
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_parts"
           quality: 10
           weight: 2
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:primitive_crystalline_resonator"
           quality: 3
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:intermediate_cutting_fluid"
           quality: 3
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
               add: false
               damage: {
                 type: "minecraft:uniform"
                 max: 0.7
                 min: 0.3
               }
               function: "minecraft:set_damage"
             }
           ]
           name: "neovitae:hellforged_resonator"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: 1
               function: "minecraft:set_count"
             }
             {
               add: false
               damage: {
                 type: "minecraft:uniform"
                 max: 0.7
                 min: 0.3
               }
               function: "minecraft:set_damage"
             }
           ]
           name: "neovitae:advanced_cutting_fluid"
           quality: 5
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 16
                 min: 10
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           quality: 2
           weight: 10
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:diamond"
           quality: 4
           weight: 6
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 5
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:ancient_debris"
           quality: 5
           weight: 5
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:strong_tau"
           quality: 3
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:hellforged_dust"
           quality: 3
           weight: 12
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 7
                 min: 4
               }
               function: "minecraft:set_count"
             }
           ]
           name: "neovitae:dungeon_ore"
           quality: 3
           weight: 8
         }
       ]
       rolls: {
         type: "minecraft:uniform"
         max: 5
         min: 3
       }
     }
     {
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "neovitae:standard_key"
         }
       ]
       conditions: [
         {
           condition: "minecraft:random_chance"
           chance: 0.04
         }
       ]
     }
   ]
   random_sequence: "neovitae:chests/mines/smithy_loot"
 }

```


</details>

</blockquote>

</details>

