# Changelog

# 📦 2.37-rc1

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
<summary>Updated (22)</summary>

- Advanced AE (1.2.3-1.21.1) -> (1.2.4-1.21.1)
- Balm (21.0.27) -> (21.0.30)
- L_Ender's Cataclysm (2.55-1.21.1) -> (2.56-1.21.1)
- CC: Tweaked (1.113.1) -> (1.115.0)
- Cooking for Blockheads (21.1.10) -> (21.1.11)
- Crash Assistant (1.3.7) -> (1.3.9)
- Extended Industrialization (1.14.1-1.21.1) -> (1.14.3-1.21.1)
- ExtendedAE (1.21-2.2.2-neoforge) -> (1.21-2.2.3-neoforge)
- KeyBind Bundles (1.1.0) -> (1.2.0)
- Moog's Nether Structures (1.0.7-1.21) -> (1.0.8-1.21)
- Moonlight Lib (1.21-2.17.26) -> (1.21-2.17.28)
- More Red x CC:Tweaked Compat (1.21.1-1.1.0) -> (1.21.1-1.3.0)
- NeoForge (21.1.119) -> (21.1.120)
- Occultism (1.173.4) -> (1.174.0)
- PneumaticCraft: Repressurized (8.2.8) -> (8.2.9)
- Productive Metalworks (1.21.1-1.1.0) -> (1.21.1-1.2.0)
- RAR-Compat (0.9.1) -> (0.9.2)
- Sophisticated Core (1.2.14) -> (1.2.17)
- Sophisticated Storage In Motion (0.10.4) -> (0.10.5)
- Supplementaries (1.21-3.0.35-beta) -> (1.21-3.0.36-beta)
- The Bumblezone (7.7.17+1.21.1-neoforge) -> (7.7.18+1.21.1-neoforge)
- Utilitarian (1.21.1-0.13.6) -> (1.21.1-0.13.7)

</details>

## 🍳 Recipes

<details>
<summary>Added (31)</summary>
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
+    item: "minecraft:soap"
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

<details open>
<summary>Changed (9)</summary>
<blockquote>

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
<summary>Removed (20)</summary>
<blockquote>

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
<summary>supplementaries/bubble_blower_charge</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  ingredients: [
-    {
-      item: "supplementaries:bubble_blower"
-    }
-    {
-      item: "supplementaries:soap"
-    }
-  ]
-  result: {
-    id: "supplementaries:bubble_blower"
-    count: 1
-    components: {
-      supplementaries:charges: 250
-    }
-  }
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "bubble_blower"
-    }
-    {
-      condition: "supplementaries:flag"
-      flag: "soap"
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/rope_arrow_add</summary>

```diff
-{
-  type: "supplementaries:rope_arrow_add"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "rope_arrow"
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/rope_arrow_create</summary>

```diff
-{
-  type: "supplementaries:rope_arrow_create"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "rope_arrow"
-    }
-  ]
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

<details open>
<summary>Added (8)</summary>
<blockquote>

<details>
<summary>minecraft:block/supplementaries:sacks</summary>

```diff
+[
+  "supplementaries:sack"
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
<summary>minecraft:item/c:dusts/shattered_singularity</summary>

```diff
+[
+  "advanced_ae:quantum_infused_dust"
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
<summary>minecraft:item/supplementaries:sacks</summary>

```diff
+[
+  "supplementaries:sack"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (17)</summary>
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
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (1008 entries)
+  "computercraft:lectern"
   ... (4428 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (3365 entries)
+  "computercraft:redstone_relay"
   ... (7176 entries)
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

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (5)</summary>
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
   ... (21652 entries)
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
   ... (1671 entries)
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
   ... (23100 entries)
+  "computercraft:redstone_relay"
   ... (28708 entries)
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
<summary>Added (29)</summary>
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
<summary>Changed (16)</summary>
<blockquote>

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

