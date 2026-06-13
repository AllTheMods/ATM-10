# Changelog

# 📦 6.3

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (51)</summary>

- Advanced AE (1.6.10-1.21.1) -> (1.6.11-1.21.1)
- Advanced Peripherals (0.7.60b) -> (0.7.61b)
- AllTheOres (3.1.8) -> (3.2.0)
- AppleSkin (3.0.8+mc1.21) -> (3.0.9+mc1.21)
- Ars Elemental (0.7.8.6) -> (0.7.9_beta)
- Byzantine (47.1) -> (48)
- Cable Tiers (1.21.1-0.6.9) -> (1.21.1-0.6.10)
- L_Ender's Cataclysm 1.21.1 (3.24) -> (3.26)
- Colorwheel (1.2.2+mc1.21.1) -> (1.2.3+mc1.21.1)
- Common Networking (1.0.20-1.21.1) -> (1.0.21-1.21.1)
- Crash Assistant (1.11.3) -> (1.11.6)
- Crystalix (2.4.1) -> (3.0.0)
- Domum Ornamentum (1.0.232-snapshot) -> (1.0.233-snapshot)
- Ender Core (8.2.3-beta) -> (8.2.5-beta)
- Ender IO (8.2.3-beta) -> (8.2.5-beta)
- Ender IO - Modded Conduits (8.2.3-beta) -> (8.2.5-beta)
- EvilCraft (1.2.83) -> (1.2.84)
- Extended Industrialization (1.15.33-1.21.1) -> (1.15.34-1.21.1)
- IntegratedDynamics (1.32.2) -> (1.32.3)
- Just Enough Mekanism Multiblocks (7.13) -> (7.14)
- Journeymap (1.21.1-6.0.0-beta.56) -> (1.21.1-6.0.0-beta.60)
- Lithostitched (1.6.1) -> (1.6.5)
- ME Requester (1.21.1-1.4.1) -> (1.21.1-1.4.2)
- MineColonies (1.1.1290-1.21.1-snapshot) -> (1.1.1294-1.21.1-snapshot)
- ModularBees (1.21.1-2.10-neoforge) -> (1.21.1-2.11-neoforge)
- Moonlight Lib (1.21-2.29.20) -> (1.21-2.29.26)
- NeoForge (21.1.221) -> (21.1.222)
- NotEnoughAnimations (1.11.3) -> (1.12.0)
- Oh The Trees You'll Grow (5.2.1) -> (5.3.0)
- Pam's HarvestCraft - Trees (1.0.8) -> (1.0.9)
- PneumaticCraft: Repressurized (8.2.18) -> (8.2.19)
- Productive Bees (1.21.1-13.13.1) -> (1.21.1-13.13.2)
- Relics (0.11.9) -> (0.11.10)
- reliquified_artifacts (1.0) -> (1.0.1)
- Sauce Library (0.0.21.64) -> (0.0.28.72)
- Silent Gear (4.1.3.1) -> (4.1.4)
- Sophisticated Backpacks (3.25.34) -> (3.25.36)
- Sophisticated Core (1.4.11) -> (1.4.14)
- Sophisticated Storage (1.5.30) -> (1.5.33)
- Sophisticated Storage In Motion (0.10.26) -> (0.10.27)
- Structory (1.3.14) -> (1.3.16)
- Structory: Towers (1.0.15) -> (1.0.16)
- Structurize (1.0.818-1.21.1-snapshot) -> (1.0.820-1.21.1-snapshot)
- Stylecolonies (1.15.50-1.21.1) -> (1.15.51-1.21.1)
- The Bumblezone (7.11.10+1.21.1-neoforge) -> (7.12.1+1.21.1-neoforge)
- Theurgy (1.68.0) -> (1.70.0)
- TRansition (1.0.12) -> (1.0.14)
- TRender (1.0.10) -> (1.0.11)
- The Undergarden (0.9.5) -> (0.9.6)
- Universal Grid (1.21.1-0.2.4) -> (1.21.1-0.3.0)
- Utility vest (1.2.5) -> (1.2.6)

</details>

## 🍳 Recipes

<details>
<summary>Added (62)</summary>
<blockquote>

<details>
<summary>alltheores/alloy_smelting/brass_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 3
+      tag: "c:ingots/copper"
+    }
+    {
+      count: 1
+      tag: "c:ingots/zinc"
+    }
+  ]
+  output: {
+    count: 4
+    id: "alltheores:brass_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/bronze_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 3
+      tag: "c:ingots/copper"
+    }
+    {
+      count: 1
+      tag: "c:ingots/tin"
+    }
+  ]
+  output: {
+    count: 4
+    id: "alltheores:bronze_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/constantan_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 1
+      tag: "c:ingots/copper"
+    }
+    {
+      count: 1
+      tag: "c:ingots/nickel"
+    }
+  ]
+  output: {
+    count: 2
+    id: "alltheores:constantan_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/electrum_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 1
+      tag: "c:ingots/gold"
+    }
+    {
+      count: 1
+      tag: "c:ingots/silver"
+    }
+  ]
+  output: {
+    count: 2
+    id: "alltheores:electrum_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/enderium_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 3
+      tag: "c:ingots/lead"
+    }
+    {
+      count: 1
+      tag: "c:ingots/platinum"
+    }
+    {
+      count: 2
+      tag: "c:ender_pearls"
+    }
+  ]
+  output: {
+    count: 4
+    id: "alltheores:enderium_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/invar_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 2
+      tag: "c:ingots/iron"
+    }
+    {
+      count: 1
+      tag: "c:ingots/nickel"
+    }
+  ]
+  output: {
+    count: 3
+    id: "alltheores:invar_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/lumium_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 4
+      tag: "c:dusts/glowstone"
+    }
+    {
+      count: 1
+      tag: "c:ingots/silver"
+    }
+    {
+      count: 3
+      tag: "c:ingots/tin"
+    }
+  ]
+  output: {
+    count: 4
+    id: "alltheores:lumium_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/signalum_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 3
+      tag: "c:ingots/copper"
+    }
+    {
+      count: 1
+      tag: "c:ingots/silver"
+    }
+    {
+      count: 4
+      tag: "c:dusts/redstone"
+    }
+  ]
+  output: {
+    count: 4
+    id: "alltheores:signalum_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/alloy_smelting/steel_ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:alloy_smelting"
+  energy: 4800
+  experience: 0.3
+  inputs: [
+    {
+      count: 1
+      tag: "c:ingots/iron"
+    }
+    {
+      count: 1
+      tag: "minecraft:coals"
+    }
+  ]
+  output: {
+    count: 1
+    id: "alltheores:steel_ingot"
+  }
+}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/aluminum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:aluminum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/aluminum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_aluminum"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_aluminum"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/aluminum/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/aluminum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:aluminum_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:aluminum_dust"
+      }
+    }
+    {
+      chance: 0.05
+      item: {
+        count: 1
+        id: "alltheores:zinc_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/brass/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/brass"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:brass_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/bronze/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/bronze"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:bronze_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/cinnabar/gem</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:gems/cinnabar"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:cinnabar_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/cinnabar/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/cinnabar"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:cinnabar"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/constantan/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/constantan"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:constantan_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/electrum/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/electrum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:electrum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/enderium/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/enderium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:enderium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/fluorite/gem</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:gems/fluorite"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:fluorite_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/fluorite/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/fluorite"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:fluorite"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/invar/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/invar"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:invar_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/iridium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:iridium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/iridium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_iridium"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_iridium"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/iridium/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/iridium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:iridium_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:iridium_dust"
+      }
+    }
+    {
+      chance: 0.3
+      item: {
+        count: 1
+        id: "alltheores:osmium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/lead"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:lead_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/lead"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_lead"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_lead"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/lead/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/lead"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:lead_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:lead_dust"
+      }
+    }
+    {
+      chance: 0.45
+      item: {
+        count: 1
+        id: "alltheores:silver_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/lumium/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/lumium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:lumium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/nickel"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:nickel_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/nickel"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_nickel"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_nickel"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/nickel/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/nickel"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:nickel_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:nickel_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:platinum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/osmium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:osmium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/osmium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_osmium"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_osmium"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/osmium/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/osmium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:osmium_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:osmium_dust"
+      }
+    }
+    {
+      chance: 0.3
+      item: {
+        count: 1
+        id: "alltheores:iridium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/peridot/gem</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:gems/peridot"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:peridot_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/peridot/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/peridot"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:peridot"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/platinum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:platinum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/platinum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_platinum"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_platinum"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/platinum/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/platinum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:platinum_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:platinum_dust"
+      }
+    }
+    {
+      chance: 0.1
+      item: {
+        count: 1
+        id: "alltheores:gold_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/ruby/gem</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:gems/ruby"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:ruby_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/ruby/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/ruby"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:ruby"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/salt/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ores/salt"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:salt"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/sapphire/gem</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:gems/sapphire"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:sapphire_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/sapphire/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/sapphire"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:sapphire"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/signalum/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/signalum"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:signalum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/silver"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:silver_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/silver"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_silver"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_silver"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/silver/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/silver"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:silver_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:silver_dust"
+      }
+    }
+    {
+      chance: 0.45
+      item: {
+        count: 1
+        id: "alltheores:lead_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/steel/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/steel"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:steel_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/sulfur/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ores/sulfur"
+  }
+  outputs: [
+    {
+      item: {
+        count: 6
+        id: "alltheores:sulfur"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/tin"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:tin_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/tin"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_tin"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_tin"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/tin/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/tin"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:tin_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:tin_dust"
+      }
+    }
+    {
+      chance: 0.2
+      item: {
+        count: 1
+        id: "alltheores:iron_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/uranium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:uranium_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/uranium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_uranium"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_uranium"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/uranium/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/uranium"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:uranium_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:uranium_dust"
+      }
+    }
+    {
+      chance: 0.5
+      item: {
+        count: 1
+        id: "alltheores:lead_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/ingot</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  bonus: "none"
+  energy: 2400
+  input: {
+    tag: "c:ingots/zinc"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:zinc_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/ore</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:ores/zinc"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:raw_zinc"
+      }
+    }
+    {
+      chance: 0.33
+      item: {
+        count: 1
+        id: "alltheores:raw_zinc"
+      }
+    }
+    {
+      chance: 0.15
+      item: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>alltheores/sag_milling/zinc/raw</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "enderio"
+        }
+      ]
+    }
+  ]
+  type: "enderio:sag_milling"
+  energy: 2400
+  input: {
+    tag: "c:raw_materials/zinc"
+  }
+  outputs: [
+    {
+      item: {
+        count: 1
+        id: "alltheores:zinc_dust"
+      }
+    }
+    {
+      chance: 0.25
+      item: {
+        count: 1
+        id: "alltheores:zinc_dust"
+      }
+    }
+    {
+      chance: 0.05
+      item: {
+        count: 1
+        id: "alltheores:aluminum_dust"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>ars_elemental/glyph_cauterize</summary>

```diff
+{
+  type: "ars_nouveau:glyph"
+  exp: 160
+  inputs: [
+    {
+      item: "ars_nouveau:fire_essence"
+    }
+    {
+      item: "ars_nouveau:abjuration_essence"
+    }
+    {
+      item: "minecraft:blaze_powder"
+    }
+    {
+      item: "minecraft:ghast_tear"
+    }
+  ]
+  output: {
+    count: 1
+    id: "ars_elemental:glyph_cauterize"
+  }
+}

```


</details>

<details>
<summary>ars_elemental/glyph_rage</summary>

```diff
+{
+  type: "ars_nouveau:glyph"
+  exp: 160
+  inputs: [
+    {
+      item: "ars_nouveau:fire_essence"
+    }
+    {
+      item: "sauce:anima_essence"
+    }
+    {
+      item: "ars_nouveau:wilden_horn"
+    }
+    {
+      item: "minecraft:red_carpet"
+    }
+    {
+      item: "minecraft:fermented_spider_eye"
+    }
+  ]
+  output: {
+    count: 1
+    id: "ars_elemental:glyph_rage"
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (6)</summary>
<blockquote>

<details>
<summary>ars_elemental/glyph_charm</summary>

```diff
 {
   type: "ars_nouveau:glyph"
   exp: 55
   inputs: [
-    {
-      tag: "sauce:anima_essence"
-    }
     {
       item: "minecraft:golden_carrot"
     }
     {
       item: "ars_nouveau:source_berry_pie"
     }
     {
       item: "minecraft:cake"
     }
+    {
+      item: "sauce:anima_essence"
+    }
   ]
   output: {
     count: 1
     id: "ars_elemental:glyph_charm"
   }
 }

```


</details>

<details>
<summary>ars_elemental/glyph_life_link</summary>

```diff
 {
   type: "ars_nouveau:glyph"
   exp: 160
   inputs: [
     {
       item: "minecraft:lead"
     }
-    {
-      tag: "sauce:anima_essence"
-    }
     {
       item: "minecraft:sculk_sensor"
     }
+    {
+      item: "sauce:anima_essence"
+    }
   ]
   output: {
     count: 1
     id: "ars_elemental:glyph_life_link"
   }
 }

```


</details>

<details>
<summary>ars_elemental/glyph_phantom_grasp</summary>

```diff
 {
   type: "ars_nouveau:glyph"
   exp: 55
   inputs: [
-    {
-      tag: "sauce:anima_essence"
-    }
     {
       item: "minecraft:phantom_membrane"
     }
     {
-      item: "minecraft:phantom_membrane"
+      item: "sauce:anima_essence"
     }
+    {
+      item: "minecraft:phantom_membrane"
+    }
   ]
   output: {
     count: 1
     id: "ars_elemental:glyph_phantom_grasp"
   }
 }

```


</details>

<details>
<summary>ars_elemental/imbuement_anima_essence</summary>

```diff
 {
   type: "ars_nouveau:imbuement"
   input: {
     tag: "c:gems/source"
   }
   output: {
     count: 1
-    id: "ars_elemental:anima_essence"
+    id: "sauce:anima_essence"
   }
   pedestalItems: [
     {
       item: "minecraft:wither_skeleton_skull"
     }
     {
       item: "minecraft:bone_meal"
     }
     {
       item: "minecraft:golden_apple"
     }
   ]
   source: 3000
 }

```


</details>

<details>
<summary>ars_elemental/mark_of_mastery</summary>

```diff
 {
-  keepNbtOfReagent: false
-  reagent: {
-    item: "ars_nouveau:wilden_tribute"
-  }
-  result: {
-    count: 5
-    id: "ars_elemental:mark_of_mastery"
-  }
-  sourceCost: 10000
+  input: {
+    item: "ars_nouveau:wilden_tribute"
+  }
+  output: {
+    count: 5
+    id: "ars_elemental:mark_of_mastery"
+  }
+  source: 10000
-  type: "ars_nouveau:enchanting_apparatus"
+  type: "ars_nouveau:imbuement"
   pedestalItems: [
     {
       item: "ars_nouveau:abjuration_essence"
     }
     {
       item: "ars_nouveau:fire_essence"
     }
     {
       item: "ars_nouveau:conjuration_essence"
     }
     {
       item: "ars_nouveau:air_essence"
     }
-    {
-      tag: "sauce:anima_essence"
-    }
     {
       item: "ars_nouveau:water_essence"
     }
     {
       item: "ars_nouveau:manipulation_essence"
     }
     {
       item: "ars_nouveau:earth_essence"
     }
+    {
+      item: "sauce:anima_essence"
+    }
   ]
 }

```


</details>

<details>
<summary>create_hypertube/sequenced_assembly/tube_scanner</summary>

```diff
 {
   type: "create:sequenced_assembly"
   ingredient: {
     item: "create_hypertube:redstone_detector_tube_attachment"
   }
   loops: 1
   results: [
     {
       chance: 100
       id: "create_hypertube:tube_scanner_attachment"
     }
   ]
   sequence: [
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
-          item: "create:brass_sheet"
+          tag: "c:plates/brass"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
           item: "create:electron_tube"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
     {
       type: "create:deploying"
       ingredients: [
         {
           item: "create_hypertube:tube_scanner_unfinished"
         }
         {
-          item: "create:brass_sheet"
+          tag: "c:plates/brass"
         }
       ]
       results: [
         {
           id: "create_hypertube:tube_scanner_unfinished"
         }
       ]
     }
   ]
   transitional_item: {
     id: "create_hypertube:tube_scanner_unfinished"
   }
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (4)</summary>
<blockquote>

<details>
<summary>productivebees/bee_produce/enderio/copper_alloy_bee</summary>

```diff
-{
-  type: "productivebees:advanced_beehive"
-  ingredient: "productivebees:copper_alloy"
-  results: [
-    {
-      item: {
-        type: "productivebees:component"
-        components: {
-          productivebees:bee_type: "productivebees:copper_alloy"
-        }
-        items: "productivebees:configurable_honeycomb"
-      }
-    }
-    {
-      item: {
-        tag: "c:pollens"
-      }
-      chance: 0.05
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:copper_alloy"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>productivebees/centrifuge/enderio/honeycomb_copper_alloy</summary>

```diff
-{
-  type: "productivebees:centrifuge"
-  ingredient: {
-    type: "productivebees:component"
-    components: {
-      productivebees:bee_type: "productivebees:copper_alloy"
-    }
-    items: "productivebees:configurable_honeycomb"
-  }
-  outputs: [
-    {
-      item: {
-        item: "enderio:copper_alloy_nugget"
-      }
-      min: 6
-      max: 9
-    }
-    {
-      item: {
-        item: "productivebees:wax"
-      }
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:copper_alloy"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>productivebees/enderio/conductive_alloy_bee</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 10000
-  experience: 0.3
-  inputs: [
-    {
-      type: "productivebees:component"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:copper_alloy"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      items: "productivebees:spawn_egg_configurable_bee"
-    }
-    {
-      type: "productivebees:component"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:iron"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      items: "productivebees:spawn_egg_configurable_bee"
-    }
-    {
-      type: "productivebees:component"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:redstone"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      items: "productivebees:spawn_egg_configurable_bee"
-    }
-  ]
-  output: {
-    components: {
-      minecraft:entity_data: {
-        type: "productivebees:conductive_alloy"
-        id: "productivebees:configurable_bee"
-      }
-    }
-    count: 1
-    id: "productivebees:spawn_egg_configurable_bee"
-  }
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:copper_alloy"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:conductive_alloy"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:iron"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:redstone"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>productivebees/enderio/copper_alloy_bee</summary>

```diff
-{
-  type: "enderio:alloy_smelting"
-  energy: 10000
-  experience: 0.3
-  inputs: [
-    {
-      type: "productivebees:component"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:copper"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      items: "productivebees:spawn_egg_configurable_bee"
-    }
-    {
-      type: "productivebees:component"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:silicon"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      items: "productivebees:spawn_egg_configurable_bee"
-    }
-  ]
-  output: {
-    components: {
-      minecraft:entity_data: {
-        type: "productivebees:copper_alloy"
-        id: "productivebees:configurable_bee"
-      }
-    }
-    count: 1
-    id: "productivebees:spawn_egg_configurable_bee"
-  }
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "enderio"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:copper"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:copper_alloy"
-        }
-        {
-          type: "productivebees:bee_exists"
-          bee: "productivebees:silicon"
-        }
-      ]
-    }
-  ]
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (5)</summary>
<blockquote>

<details>
<summary>minecraft:block/ars_elemental:conjureable/cobble</summary>

```diff
+[
+  "minecraft:cobblestone"
+]

```


</details>

<details>
<summary>minecraft:block/ars_elemental:conjureable/dirt</summary>

```diff
+[
+  "minecraft:coarse_dirt"
+  "minecraft:dirt"
+  "minecraft:grass_block"
+  "minecraft:gravel"
+  "minecraft:podzol"
+]

```


</details>

<details>
<summary>minecraft:block/ars_elemental:conjureable/sand</summary>

```diff
+[
+  "minecraft:red_sand"
+  "minecraft:sand"
+]

```


</details>

<details>
<summary>minecraft:block/ars_elemental:conjureable/stone</summary>

```diff
+[
+  "minecraft:andesite"
+  "minecraft:blackstone"
+  "minecraft:calcite"
+  "minecraft:diorite"
+  "minecraft:granite"
+  "minecraft:tuff"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/structory:all_structory_structures</summary>

```diff
+[
+  "structory:abandoned_camp"
+  "structory:abandoned_chapel"
+  "structory:boat"
+  "structory:dense_forest_ruin"
+  "structory:firetower"
+  "structory:graveyard"
+  "structory:jungle_ruin"
+  "structory:northern_ruin"
+  "structory:old_manor"
+  "structory:outcast_villager_desert"
+  "structory:outcast_villager_grassy"
+  "structory:ruin_grassy"
+  "structory:swamp_ruin"
+  "structory:taiga_ruin_surface"
+  "structory:taiga_ruin_underground"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (5)</summary>
<blockquote>

<details>
<summary>minecraft:item/curios:charm</summary>

```diff
 [
   ... (15 entries)
+  "enderio:electromagnet"
+  "enderio:staff_of_travelling"
   ... (5 entries)
+  "relics:experience_disperser"
   ... (23 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:pig_food</summary>

```diff
 [
   ... (54 entries)
-  "phc2trees:almonditem"
-  "phc2trees:almonditem"
-  "phc2trees:candlenutitem"
-  "phc2trees:cashewitem"
-  "phc2trees:chestnutitem"
-  "phc2trees:coconutitem"
-  "phc2trees:durianitem"
-  "phc2trees:hazelnutitem"
-  "phc2trees:oliveitem"
-  "phc2trees:pecanitem"
-  "phc2trees:pistachioitem"
-  "phc2trees:walnutitem"
+  "pamhc2trees:almonditem"
+  "pamhc2trees:almonditem"
+  "pamhc2trees:candlenutitem"
+  "pamhc2trees:cashewitem"
+  "pamhc2trees:chestnutitem"
+  "pamhc2trees:coconutitem"
+  "pamhc2trees:durianitem"
+  "pamhc2trees:hazelnutitem"
+  "pamhc2trees:oliveitem"
+  "pamhc2trees:pecanitem"
+  "pamhc2trees:pistachioitem"
+  "pamhc2trees:walnutitem"
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:rabbit_food</summary>

```diff
 [
   ... (1 entries)
-  "minecraft:APPLE"
+  "minecraft:apple"
   ... (33 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimic_loot</summary>

```diff
 [
   ... (48 entries)
+  "relics:chef_hat"
+  "relics:chorus_staff"
+  "relics:clot_of_time"
+  "relics:cut_glass_boot"
+  "relics:hunting_belt"
+  "relics:jellyfish_necklace"
+  "relics:kinetic_belt"
+  "relics:leafy_mantle"
+  "relics:midnight_mantle"
+  "relics:piglin_mask"
+  "relics:reflective_necklace"
+  "relics:rider_flute"
+  "relics:ring_of_the_seven_deadly_sins"
+  "relics:roller_skate"
+  "relics:sphere_of_self_sacrifice"
+  "relics:springy_boot"
 ]

```


</details>

<details>
<summary>minecraft:item/reliquified_artifacts:mimificable</summary>

```diff
 [
   ... (48 entries)
+  "relics:chef_hat"
+  "relics:chorus_staff"
+  "relics:clot_of_time"
+  "relics:cut_glass_boot"
+  "relics:hunting_belt"
+  "relics:jellyfish_necklace"
+  "relics:kinetic_belt"
+  "relics:leafy_mantle"
+  "relics:midnight_mantle"
+  "relics:piglin_mask"
+  "relics:reflective_necklace"
+  "relics:rider_flute"
+  "relics:ring_of_the_seven_deadly_sins"
+  "relics:roller_skate"
+  "relics:sphere_of_self_sacrifice"
+  "relics:springy_boot"
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
   ... (21201 entries)
-  "crystalix:amber_bordered_crystalix_glass"
-  "crystalix:amber_clear_crystalix_glass"
-  "crystalix:amber_crystalix_glass"
-  "crystalix:aquamarine_bordered_crystalix_glass"
-  "crystalix:aquamarine_clear_crystalix_glass"
-  "crystalix:aquamarine_crystalix_glass"
-  "crystalix:beige_bordered_crystalix_glass"
-  "crystalix:beige_clear_crystalix_glass"
-  "crystalix:beige_crystalix_glass"
-  "crystalix:black_bordered_crystalix_glass"
-  "crystalix:black_clear_crystalix_glass"
-  "crystalix:black_crystalix_glass"
-  "crystalix:blue_bordered_crystalix_glass"
-  "crystalix:blue_clear_crystalix_glass"
-  "crystalix:blue_crystalix_glass"
   ... (1 entries)
-  "crystalix:brown_bordered_crystalix_glass"
-  "crystalix:brown_clear_crystalix_glass"
-  "crystalix:brown_crystalix_glass"
-  "crystalix:bubblegum_bordered_crystalix_glass"
-  "crystalix:bubblegum_clear_crystalix_glass"
-  "crystalix:bubblegum_crystalix_glass"
-  "crystalix:chartreuse_bordered_crystalix_glass"
-  "crystalix:chartreuse_clear_crystalix_glass"
-  "crystalix:chartreuse_crystalix_glass"
-  "crystalix:cherenkov_bordered_crystalix_glass"
-  "crystalix:cherenkov_clear_crystalix_glass"
-  "crystalix:cherenkov_crystalix_glass"
   ... (1 entries)
-  "crystalix:cobalt_bordered_crystalix_glass"
-  "crystalix:cobalt_clear_crystalix_glass"
-  "crystalix:cobalt_crystalix_glass"
-  "crystalix:conifer_bordered_crystalix_glass"
-  "crystalix:conifer_clear_crystalix_glass"
-  "crystalix:conifer_crystalix_glass"
-  "crystalix:coral_bordered_crystalix_glass"
-  "crystalix:coral_clear_crystalix_glass"
-  "crystalix:coral_crystalix_glass"
-  "crystalix:cream_bordered_crystalix_glass"
-  "crystalix:cream_clear_crystalix_glass"
-  "crystalix:cream_crystalix_glass"
-  "crystalix:crimson_bordered_crystalix_glass"
-  "crystalix:crimson_clear_crystalix_glass"
-  "crystalix:crimson_crystalix_glass"
   ... (1 entries)
-  "crystalix:cyan_bordered_crystalix_glass"
-  "crystalix:cyan_clear_crystalix_glass"
-  "crystalix:cyan_crystalix_glass"
-  "crystalix:emerald_bordered_crystalix_glass"
-  "crystalix:emerald_clear_crystalix_glass"
-  "crystalix:emerald_crystalix_glass"
-  "crystalix:fluorescent_bordered_crystalix_glass"
-  "crystalix:fluorescent_clear_crystalix_glass"
-  "crystalix:fluorescent_crystalix_glass"
-  "crystalix:forest_green_bordered_crystalix_glass"
-  "crystalix:forest_green_clear_crystalix_glass"
-  "crystalix:forest_green_crystalix_glass"
-  "crystalix:fuchsia_bordered_crystalix_glass"
-  "crystalix:fuchsia_clear_crystalix_glass"
-  "crystalix:fuchsia_crystalix_glass"
-  "crystalix:gold_bordered_crystalix_glass"
-  "crystalix:gold_clear_crystalix_glass"
-  "crystalix:gold_crystalix_glass"
-  "crystalix:gray_bordered_crystalix_glass"
-  "crystalix:gray_clear_crystalix_glass"
-  "crystalix:gray_crystalix_glass"
-  "crystalix:green_bordered_crystalix_glass"
-  "crystalix:green_clear_crystalix_glass"
-  "crystalix:green_crystalix_glass"
-  "crystalix:honey_bordered_crystalix_glass"
-  "crystalix:honey_clear_crystalix_glass"
-  "crystalix:honey_crystalix_glass"
-  "crystalix:icy_blue_bordered_crystalix_glass"
-  "crystalix:icy_blue_clear_crystalix_glass"
-  "crystalix:icy_blue_crystalix_glass"
-  "crystalix:indigo_bordered_crystalix_glass"
-  "crystalix:indigo_clear_crystalix_glass"
-  "crystalix:indigo_crystalix_glass"
-  "crystalix:lavender_bordered_crystalix_glass"
-  "crystalix:lavender_clear_crystalix_glass"
-  "crystalix:lavender_crystalix_glass"
-  "crystalix:light_blue_bordered_crystalix_glass"
-  "crystalix:light_blue_clear_crystalix_glass"
-  "crystalix:light_blue_crystalix_glass"
-  "crystalix:light_gray_bordered_crystalix_glass"
-  "crystalix:light_gray_clear_crystalix_glass"
-  "crystalix:light_gray_crystalix_glass"
-  "crystalix:lime_bordered_crystalix_glass"
-  "crystalix:lime_clear_crystalix_glass"
-  "crystalix:lime_crystalix_glass"
-  "crystalix:magenta_bordered_crystalix_glass"
-  "crystalix:magenta_clear_crystalix_glass"
-  "crystalix:magenta_crystalix_glass"
-  "crystalix:maroon_bordered_crystalix_glass"
-  "crystalix:maroon_clear_crystalix_glass"
-  "crystalix:maroon_crystalix_glass"
-  "crystalix:mint_bordered_crystalix_glass"
-  "crystalix:mint_clear_crystalix_glass"
-  "crystalix:mint_crystalix_glass"
-  "crystalix:navy_bordered_crystalix_glass"
-  "crystalix:navy_clear_crystalix_glass"
-  "crystalix:navy_crystalix_glass"
-  "crystalix:olive_bordered_crystalix_glass"
-  "crystalix:olive_clear_crystalix_glass"
-  "crystalix:olive_crystalix_glass"
-  "crystalix:orange_bordered_crystalix_glass"
-  "crystalix:orange_clear_crystalix_glass"
-  "crystalix:orange_crystalix_glass"
-  "crystalix:peach_bordered_crystalix_glass"
-  "crystalix:peach_clear_crystalix_glass"
-  "crystalix:peach_crystalix_glass"
-  "crystalix:persimmon_bordered_crystalix_glass"
-  "crystalix:persimmon_clear_crystalix_glass"
-  "crystalix:persimmon_crystalix_glass"
-  "crystalix:pink_bordered_crystalix_glass"
-  "crystalix:pink_clear_crystalix_glass"
-  "crystalix:pink_crystalix_glass"
-  "crystalix:purple_bordered_crystalix_glass"
-  "crystalix:purple_clear_crystalix_glass"
-  "crystalix:purple_crystalix_glass"
-  "crystalix:red_bordered_crystalix_glass"
-  "crystalix:red_clear_crystalix_glass"
-  "crystalix:red_crystalix_glass"
-  "crystalix:rose_bordered_crystalix_glass"
-  "crystalix:rose_clear_crystalix_glass"
-  "crystalix:rose_crystalix_glass"
-  "crystalix:salmon_bordered_crystalix_glass"
-  "crystalix:salmon_clear_crystalix_glass"
-  "crystalix:salmon_crystalix_glass"
-  "crystalix:scarlet_bordered_crystalix_glass"
-  "crystalix:scarlet_clear_crystalix_glass"
-  "crystalix:scarlet_crystalix_glass"
-  "crystalix:silver_bordered_crystalix_glass"
-  "crystalix:silver_clear_crystalix_glass"
-  "crystalix:silver_crystalix_glass"
-  "crystalix:sky_blue_bordered_crystalix_glass"
-  "crystalix:sky_blue_clear_crystalix_glass"
-  "crystalix:sky_blue_crystalix_glass"
-  "crystalix:spring_green_bordered_crystalix_glass"
-  "crystalix:spring_green_clear_crystalix_glass"
-  "crystalix:spring_green_crystalix_glass"
-  "crystalix:tan_bordered_crystalix_glass"
-  "crystalix:tan_clear_crystalix_glass"
-  "crystalix:tan_crystalix_glass"
-  "crystalix:teal_bordered_crystalix_glass"
-  "crystalix:teal_clear_crystalix_glass"
-  "crystalix:teal_crystalix_glass"
-  "crystalix:turquoise_bordered_crystalix_glass"
-  "crystalix:turquoise_clear_crystalix_glass"
-  "crystalix:turquoise_crystalix_glass"
-  "crystalix:ultramarine_bordered_crystalix_glass"
-  "crystalix:ultramarine_clear_crystalix_glass"
-  "crystalix:ultramarine_crystalix_glass"
-  "crystalix:white_bordered_crystalix_glass"
-  "crystalix:white_clear_crystalix_glass"
-  "crystalix:white_crystalix_glass"
-  "crystalix:wine_bordered_crystalix_glass"
-  "crystalix:wine_clear_crystalix_glass"
-  "crystalix:wine_crystalix_glass"
-  "crystalix:yellow_bordered_crystalix_glass"
-  "crystalix:yellow_clear_crystalix_glass"
-  "crystalix:yellow_crystalix_glass"
   ... (22906 entries)
+  "sauce:source_jar_core"
+  "sauce:source_jar_frame"
   ... (3912 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (2354 entries)
+  "sauce:big_source_jar"
   ... (291 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (3991 entries)
-  "ars_elemental:anima_essence"
   ... (64 entries)
+  "ars_elemental:glyph_cauterize"
   ... (24 entries)
+  "ars_elemental:glyph_rage"
   ... (52421 entries)
+  "relics:experience_disperser"
   ... (362 entries)
+  "sauce:anima_essence"
   ... (5753 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (237 entries)
+  "sauce:mana_cost_down"
+  "sauce:rage"
+  "sauce:spell_crit_up"
   ... (45 entries)
 ]

```


</details>

<details>
<summary>worldgen/feature</summary>

```diff
 [
   ... (85 entries)
+  "lithostitched:placed"
   ... (308 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

