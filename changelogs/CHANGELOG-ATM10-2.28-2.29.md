# Changelog

# 📦 2.29

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (3)</summary>

- L_Ender's Cataclysm (1.21.1-2.44)
- GuideME (2.1.0)
- lionfishapi (1.8)

</details>

<details>
<summary>Updated (27)</summary>

- Advanced AE (1.2.1-1.21.1) -> (1.2.2-1.21.1)
- AllTheCompressed (4.1.0) -> (4.2.0)
- Allthemodium (2.8.7) -> (2.8.8)
- AllTheOres (3.1.5) -> (3.1.6)
- AllTheTweaks (2.5.2) -> (2.5.3)
- Byzantine (26) -> (27)
- Cooking for Blockheads (21.1.6) -> (21.1.8)
- Crash Assistant (1.2.19) -> (1.2.20)
- Embeddium (1.0.12+mc1.21.1) -> (1.0.15+mc1.21.1)
- FTB Chunks (2101.1.5) -> (2101.1.7)
- FTB Quests (2101.1.2) -> (2101.1.3)
- FTB Teams (2101.1.1) -> (2101.1.2)
- Iceberg (1.2.9) -> (1.2.9.2)
- Iron's Spells 'n Spellbooks (1.21-3.8.8) -> (1.21-3.8.9)
- Mahou Tsukai (1.21.0-v1.35.39) -> (1.21.0-v1.35.40)
- MEGA Cells (4.5.0) -> (4.6.0)
- memorysettings mod (5.8) -> (5.9)
- Modular Machinery Reborn (2.1.1) -> (2.1.5)
- Modular Machinery Reborn Mekanism (2.0.0) -> (2.0.3)
- NeoForge (21.1.97) -> (21.1.113)
- RAR-Compat (0.8.5.1) -> (0.8.5.2)
- Relics (0.10.3) -> (0.10.3.2)
- Universal Sawmill (1.21-1.5.13) -> (1.21-1.5.14)
- Sophisticated Backpacks (3.22.5) -> (3.22.8)
- Sophisticated Core (1.1.5) -> (1.1.6)
- Sophisticated Storage (1.2.9) -> (1.2.11)
- Sophisticated Storage In Motion (0.10.1) -> (0.10.4)

</details>

## 🍳 Recipes

<details>
<summary>Added (547)</summary>
<blockquote>

<details>
<summary>allthecompressed/compress/antimatter_block</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanism"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "mekanism:pellet_antimatter"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/antimatter_block_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:antimatter_block_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:antimatter_block_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:black_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/black_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:black_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:black_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:blue_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/blue_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:blue_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:blue_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:brown_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/brown_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:brown_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:brown_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:cyan_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/cyan_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:cyan_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:cyan_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:gray_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/gray_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:gray_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:gray_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:green_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/green_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:green_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:green_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:kivi"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/kivi_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:kivi_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:kivi_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:light_blue_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_blue_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_blue_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_blue_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:light_gray_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/light_gray_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:light_gray_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:light_gray_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:lime_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/lime_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:lime_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:lime_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:magenta_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/magenta_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:magenta_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:magenta_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:mycelium"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/mycelium_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:mycelium_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:mycelium_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:orange_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/orange_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:orange_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:orange_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:pink_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/pink_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:pink_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:pink_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:purple_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/purple_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:purple_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:purple_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:red_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/red_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:red_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:red_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:white_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/white_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:white_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:white_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:xychorium_storage_blue"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_blue_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_blue_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_blue_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:xychorium_storage_dark"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_dark_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_dark_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_dark_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:xychorium_storage_green"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_green_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_green_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_green_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:xychorium_storage_light"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_light_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_light_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_light_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "xycraft_world:xychorium_storage_red"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/xychorium_storage_red_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:xychorium_storage_red_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:xychorium_storage_red_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "minecraft:yellow_concrete"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_1x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_2x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_3x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_4x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_5x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_6x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_7x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/compress/yellow_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "allthecompressed:yellow_concrete_8x"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "allthecompressed:yellow_concrete_9x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanism"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "mekanism:pellet_antimatter"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/antimatter_block_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthecompressed"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:antimatter_block_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:antimatter_block_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:black_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/black_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:black_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:black_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:blue_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/blue_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:blue_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:blue_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:brown_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/brown_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:brown_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:brown_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:cyan_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/cyan_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:cyan_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:cyan_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:gray_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/gray_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:gray_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:gray_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:green_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/green_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:green_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:green_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:kivi"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/kivi_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:kivi_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:kivi_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:light_blue_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_blue_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_blue_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_blue_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:light_gray_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/light_gray_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:light_gray_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:light_gray_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:lime_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/lime_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:lime_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:lime_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:magenta_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/magenta_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:magenta_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:magenta_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:mycelium"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/mycelium_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:mycelium_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:mycelium_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:orange_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/orange_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:orange_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:orange_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:pink_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/pink_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:pink_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:pink_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:purple_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/purple_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:purple_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:purple_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:red_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/red_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:red_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:red_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:white_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/white_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:white_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:white_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:xychorium_storage_blue"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_blue_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_blue_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_blue_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:xychorium_storage_dark"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_dark_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_dark_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_dark_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:xychorium_storage_green"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_green_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_green_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_green_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:xychorium_storage_light"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_light_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_light_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_light_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_1x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "xycraft_world:xychorium_storage_red"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_2x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_3x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_4x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_5x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_6x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_7x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_8x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/xychorium_storage_red_9x</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "xycraft_world"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:xychorium_storage_red_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:xychorium_storage_red_8x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_1x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_1x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:yellow_concrete"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_2x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_2x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_1x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_3x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_3x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_2x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_4x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_4x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_3x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_5x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_5x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_4x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_6x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_6x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_5x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_7x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_7x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_6x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_8x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_8x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_7x"
+  }
+}

```


</details>

<details>
<summary>allthecompressed/decompress/yellow_concrete_9x</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      item: "allthecompressed:yellow_concrete_9x"
+    }
+  ]
+  result: {
+    count: 9
+    id: "allthecompressed:yellow_concrete_8x"
+  }
+}

```


</details>

<details>
<summary>allthemods/mekanism/digital_miner</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "mekanism:digital_miner"
+    count: 1
+  }
+  pattern: [
+    "ACA"
+    "SRS"
+    "TXT"
+  ]
+  key: {
+    X: {
+      item: "mekanism:steel_casing"
+    }
+    A: {
+      tag: "c:ingots/vibranium"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    C: {
+      tag: "c:circuits/basic"
+    }
+    S: {
+      item: "mekanism:logistical_sorter"
+    }
+    T: {
+      item: "mekanism:teleportation_core"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/xycraft/extractor/flux_dust</summary>

```diff
+{
+  type: "xycraft_machines:extractor"
+  adjacent: [
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+  ]
+  target: {
+    predicate_type: "xycraft_core:block_rule"
+    block: "minecraft:redstone_block"
+  }
+  output: {
+    count: 1
+    id: "fluxnetworks:flux_dust"
+  }
+  ticks: 20
+  catalyst: {
+    predicate_type: "xycraft_core:block_rule"
+    block: "fluxnetworks:flux_block"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/xycraft/extractor/flux_dust_bedrock</summary>

```diff
+{
+  type: "xycraft_machines:extractor"
+  adjacent: [
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+    {
+      predicate_type: "xycraft_core:block_rule"
+      block: "minecraft:obsidian"
+    }
+  ]
+  target: {
+    predicate_type: "xycraft_core:block_rule"
+    block: "minecraft:redstone_block"
+  }
+  output: {
+    count: 1
+    id: "fluxnetworks:flux_dust"
+  }
+  ticks: 20
+  catalyst: {
+    predicate_type: "xycraft_core:block_rule"
+    block: "minecraft:bedrock"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>almostunified/cataclysm</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "cataclysm"
+  recipes: [
+    "1$abyssal_sacrifice"
+    "1$abyssal_sacrifice2"
+    "1$cursed_eye"
+    "1$cursium_upgrade_smithing_template"
+    "1$desert_eye"
+    "1$laser_gatling"
+    "1$meat_shredder"
+    "1$mech_eye"
+    "1$mechanical_fusion_anvil"
+    "1$netherite_effigy"
+    "1$wither_assault_shoulder_weapon"
+  ]
+}

```


</details>

<details>
<summary>cataclysm/abyss_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#O#"
+    "OEO"
+    "#O#"
+  ]
+  key: {
+    #: {
+      item: "minecraft:crying_obsidian"
+    }
+    O: {
+      item: "minecraft:obsidian"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+  }
+  result: {
+    id: "cataclysm:abyss_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/abyssal_sacrifice</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      item: "minecraft:nautilus_shell"
+    }
+    {
+      item: "cataclysm:athame"
+    }
+    {
+      item: "cataclysm:crystallized_coral"
+    }
+    {
+      tag: "c:storage_blocks/diamond"
+    }
+    {
+      item: "minecraft:heart_of_the_sea"
+    }
+    {
+      tag: "c:storage_blocks/emerald"
+    }
+    {
+      tag: "c:storage_blocks/iron"
+    }
+    {
+      item: "minecraft:amethyst_block"
+    }
+    {
+      tag: "c:storage_blocks/gold"
+    }
+  ]
+  result: {
+    id: "cataclysm:abyssal_sacrifice"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/abyssal_sacrifice2</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      item: "minecraft:nautilus_shell"
+    }
+    {
+      item: "cataclysm:athame"
+    }
+    {
+      item: "cataclysm:coral_chunk"
+    }
+    {
+      tag: "c:storage_blocks/diamond"
+    }
+    {
+      item: "minecraft:heart_of_the_sea"
+    }
+    {
+      tag: "c:storage_blocks/emerald"
+    }
+    {
+      tag: "c:storage_blocks/iron"
+    }
+    {
+      item: "minecraft:amethyst_block"
+    }
+    {
+      tag: "c:storage_blocks/gold"
+    }
+  ]
+  result: {
+    id: "cataclysm:abyssal_sacrifice"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/amethyst_bless/blessed_amethyst_crab_meat</summary>

```diff
+{
+  type: "cataclysm:amethyst_bless"
+  ingredients: {
+    item: "cataclysm:amethyst_crab_meat"
+  }
+  result: {
+    item: "cataclysm:blessed_amethyst_crab_meat"
+  }
+  time: 120
+}

```


</details>

<details>
<summary>cataclysm/ancient_metal_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:ancient_metal_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:ancient_metal_block"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/ancient_metal_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:ancient_metal_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:ancient_metal_ingot"
+  }
+}

```


</details>

<details>
<summary>cataclysm/ancient_metal_ingot_from_nuggets</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    #: {
+      item: "cataclysm:ancient_metal_nugget"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    id: "cataclysm:ancient_metal_ingot"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>cataclysm/ancient_metal_nugget</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:ancient_metal_ingot"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:ancient_metal_nugget"
+  }
+}

```


</details>

<details>
<summary>cataclysm/ancient_metal_nugget_from_smelting</summary>

```diff
+{
+  type: "minecraft:smelting"
+  category: "misc"
+  cookingtime: 200
+  experience: 0.1
+  ingredient: [
+    {
+      item: "cataclysm:khopesh"
+    }
+    {
+      item: "cataclysm:ancient_spear"
+    }
+  ]
+  result: {
+    id: "cataclysm:ancient_metal_nugget"
+  }
+}

```


</details>

<details>
<summary>cataclysm/ancient_spear</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    R: {
+      item: "cataclysm:ancient_metal_ingot"
+    }
+  }
+  pattern: [
+    " R "
+    " RR"
+    "R  "
+  ]
+  result: {
+    id: "cataclysm:ancient_spear"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_axe</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+  }
+  pattern: [
+    "XX"
+    "X#"
+    " #"
+  ]
+  result: {
+    id: "cataclysm:black_steel_axe"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_hoe</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+  }
+  pattern: [
+    "XX"
+    " #"
+    " #"
+  ]
+  result: {
+    id: "cataclysm:black_steel_hoe"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_ingot_from_nuggets</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    #: {
+      item: "cataclysm:black_steel_nugget"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    id: "cataclysm:black_steel_ingot"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>cataclysm/black_steel_nugget</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:black_steel_ingot"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:black_steel_nugget"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_nugget_from_smelting</summary>

```diff
+{
+  type: "minecraft:smelting"
+  category: "misc"
+  cookingtime: 200
+  experience: 0.1
+  ingredient: [
+    {
+      item: "cataclysm:black_steel_axe"
+    }
+    {
+      item: "cataclysm:black_steel_sword"
+    }
+    {
+      item: "cataclysm:black_steel_shovel"
+    }
+    {
+      item: "cataclysm:black_steel_hoe"
+    }
+    {
+      item: "cataclysm:black_steel_pickaxe"
+    }
+  ]
+  result: {
+    id: "cataclysm:black_steel_nugget"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_pickaxe</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+  }
+  pattern: [
+    "XXX"
+    " # "
+    " # "
+  ]
+  result: {
+    id: "cataclysm:black_steel_pickaxe"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_shovel</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+  }
+  pattern: [
+    "X"
+    "#"
+    "#"
+  ]
+  result: {
+    id: "cataclysm:black_steel_shovel"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_sword</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+  }
+  pattern: [
+    "X"
+    "X"
+    "#"
+  ]
+  result: {
+    id: "cataclysm:black_steel_sword"
+  }
+}

```


</details>

<details>
<summary>cataclysm/black_steel_targe</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "cataclysm:black_steel_nugget"
+    }
+    X: {
+      item: "cataclysm:black_steel_ingot"
+    }
+    Z: {
+      tag: "minecraft:planks"
+    }
+  }
+  pattern: [
+    "#Z#"
+    "ZXZ"
+    "#Z#"
+  ]
+  result: {
+    id: "cataclysm:black_steel_targe"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>cataclysm/blazing_grips</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "#E#"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "minecraft:nether_brick"
+    }
+    E: {
+      item: "cataclysm:ignitium_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:blazing_grips"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/bloom_stone_pauldrons</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    X: {
+      item: "cataclysm:amethyst_crab_shell"
+    }
+  }
+  pattern: [
+    "X X"
+    "XXX"
+    "XXX"
+  ]
+  result: {
+    id: "cataclysm:bloom_stone_pauldrons"
+  }
+}

```


</details>

<details>
<summary>cataclysm/bone_meal</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "bonemeal"
+  ingredients: [
+    {
+      item: "cataclysm:koboleton_bone"
+    }
+  ]
+  result: {
+    count: 4
+    id: "minecraft:bone_meal"
+  }
+}

```


</details>

<details>
<summary>cataclysm/bone_reptile_chestplate</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    R: {
+      item: "cataclysm:ancient_metal_ingot"
+    }
+    n: {
+      item: "cataclysm:koboleton_bone"
+    }
+  }
+  pattern: [
+    "R R"
+    "nnn"
+    "RnR"
+  ]
+  result: {
+    id: "cataclysm:bone_reptile_chestplate"
+  }
+}

```


</details>

<details>
<summary>cataclysm/bone_reptile_helmet</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    i: {
+      item: "cataclysm:kobolediator_skull"
+    }
+    R: {
+      item: "cataclysm:ancient_metal_ingot"
+    }
+    n: {
+      item: "cataclysm:koboleton_bone"
+    }
+  }
+  pattern: [
+    "R R"
+    "nin"
+    "   "
+  ]
+  result: {
+    id: "cataclysm:bone_reptile_helmet"
+  }
+}

```


</details>

<details>
<summary>cataclysm/bulwark_of_the_flame</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#Q#"
+    "/S/"
+    "#Q#"
+  ]
+  key: {
+    #: {
+      item: "minecraft:nether_brick"
+    }
+    Q: {
+      item: "cataclysm:ignitium_ingot"
+    }
+    /: {
+      item: "minecraft:blaze_rod"
+    }
+    S: {
+      item: "minecraft:shield"
+    }
+  }
+  result: {
+    id: "cataclysm:bulwark_of_the_flame"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/burning_ashes</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "##"
+    "##"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:dying_ember"
+    }
+  }
+  result: {
+    id: "cataclysm:burning_ashes"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/chiseled_end_stone_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#"
+    "#"
+  ]
+  key: {
+    #: {
+      item: "minecraft:end_stone_brick_slab"
+    }
+  }
+  result: {
+    id: "cataclysm:chiseled_end_stone_bricks"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/chiseled_obsidian_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#"
+    "#"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:obsidian_brick_slab"
+    }
+  }
+  result: {
+    id: "cataclysm:chiseled_obsidian_bricks"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/chiseled_purpur_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "##"
+    "##"
+  ]
+  key: {
+    #: {
+      item: "minecraft:purpur_block"
+    }
+  }
+  result: {
+    id: "cataclysm:chiseled_purpur_block"
+    count: 4
+  }
+}

```


</details>

<details>
<summary>cataclysm/chiseled_stone_brick_pillar</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    #: {
+      item: "minecraft:chiseled_stone_bricks"
+    }
+  }
+  pattern: [
+    "#"
+    "#"
+  ]
+  result: {
+    count: 2
+    id: "cataclysm:chiseled_stone_brick_pillar"
+  }
+}

```


</details>

<details>
<summary>cataclysm/chorus_fence</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  group: "wooden_fence"
+  pattern: [
+    "W#W"
+    "W#W"
+  ]
+  key: {
+    #: {
+      item: "minecraft:stick"
+    }
+    W: {
+      item: "cataclysm:chorus_planks"
+    }
+  }
+  result: {
+    id: "cataclysm:chorus_fence"
+    count: 3
+  }
+}

```


</details>

<details>
<summary>cataclysm/chorus_planks</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      item: "cataclysm:chorus_stem"
+    }
+  ]
+  result: {
+    id: "cataclysm:chorus_planks"
+    count: 2
+  }
+}

```


</details>

<details>
<summary>cataclysm/chorus_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:chorus_planks"
+    }
+  }
+  result: {
+    id: "cataclysm:chorus_slab"
+    count: 6
+  }
+}

```


</details>

<details>
<summary>cataclysm/chorus_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:chorus_planks"
+    }
+  }
+  result: {
+    id: "cataclysm:chorus_stairs"
+    count: 4
+  }
+}

```


</details>

<details>
<summary>cataclysm/chorus_stem</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "##"
+    "##"
+  ]
+  key: {
+    #: {
+      item: "minecraft:chorus_fruit"
+    }
+  }
+  result: {
+    id: "cataclysm:chorus_stem"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/crystallized_coral</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "##"
+    "##"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:crystallized_coral_fragments"
+    }
+  }
+  result: {
+    id: "cataclysm:crystallized_coral"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/cursed_bow</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "cataclysm:black_steel_ingot"
+    }
+    X: {
+      item: "cataclysm:cursium_ingot"
+    }
+    S: {
+      item: "minecraft:string"
+    }
+  }
+  pattern: [
+    " XS"
+    "X S"
+    " #S"
+  ]
+  result: {
+    id: "cataclysm:cursed_bow"
+  }
+}

```


</details>

<details>
<summary>cataclysm/cursed_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "gBg"
+    "PEP"
+    "gRg"
+  ]
+  key: {
+    g: {
+      tag: "c:ingots/gold"
+    }
+    B: {
+      item: "minecraft:bone"
+    }
+    P: {
+      item: "minecraft:phantom_membrane"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+    R: {
+      item: "minecraft:rotten_flesh"
+    }
+  }
+  result: {
+    id: "cataclysm:cursed_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/cursium_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:cursium_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:cursium_block"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/cursium_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:cursium_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:cursium_ingot"
+  }
+}

```


</details>

<details>
<summary>cataclysm/cursium_upgrade_smithing_template</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "NON"
+    "###"
+  ]
+  key: {
+    #: {
+      tag: "c:ingots/gold"
+    }
+    N: {
+      item: "cataclysm:black_steel_ingot"
+    }
+    O: {
+      item: "minecraft:netherite_upgrade_smithing_template"
+    }
+  }
+  result: {
+    id: "cataclysm:cursium_upgrade_smithing_template"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/desert_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "gCE"
+    "DOG"
+    "RCB"
+  ]
+  key: {
+    g: {
+      tag: "c:ingots/gold"
+    }
+    C: {
+      item: "minecraft:chiseled_sandstone"
+    }
+    E: {
+      tag: "c:gems/emerald"
+    }
+    D: {
+      item: "minecraft:dead_bush"
+    }
+    O: {
+      item: "minecraft:ender_eye"
+    }
+    G: {
+      item: "minecraft:cactus"
+    }
+    R: {
+      item: "minecraft:rotten_flesh"
+    }
+    B: {
+      item: "minecraft:bone"
+    }
+  }
+  result: {
+    id: "cataclysm:desert_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/end_stone_pillar</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#"
+    "#"
+  ]
+  key: {
+    #: {
+      item: "minecraft:end_stone_bricks"
+    }
+  }
+  result: {
+    id: "cataclysm:end_stone_pillar"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/end_stone_teleport_trap_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "#C#"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "minecraft:end_stone_bricks"
+    }
+    C: {
+      item: "cataclysm:void_stone"
+    }
+  }
+  result: {
+    id: "cataclysm:end_stone_teleport_trap_bricks"
+    count: 8
+  }
+}

```


</details>

<details>
<summary>cataclysm/flame_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "NEN"
+    "SSS"
+  ]
+  key: {
+    #: {
+      item: "minecraft:blaze_powder"
+    }
+    N: {
+      item: "minecraft:netherite_scrap"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+    S: {
+      item: "minecraft:soul_sand"
+    }
+  }
+  result: {
+    id: "cataclysm:flame_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/ignitium_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:ignitium_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:ignitium_block"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/ignitium_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:ignitium_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:ignitium_ingot"
+  }
+}

```


</details>

<details>
<summary>cataclysm/ignitium_upgrade_smithing_template</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "N#N"
+    "#O#"
+    "N#N"
+  ]
+  key: {
+    #: {
+      item: "minecraft:blaze_powder"
+    }
+    N: {
+      item: "minecraft:nether_bricks"
+    }
+    O: {
+      item: "minecraft:netherite_upgrade_smithing_template"
+    }
+  }
+  result: {
+    id: "cataclysm:ignitium_upgrade_smithing_template"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/laser_gatling</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#i "
+    "iRn"
+    " ni"
+  ]
+  key: {
+    #: {
+      tag: "c:dusts/redstone"
+    }
+    i: {
+      tag: "c:ingots/iron"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    n: {
+      item: "cataclysm:witherite_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:laser_gatling"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/meat_shredder</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    " #I"
+    " n#"
+    "n  "
+  ]
+  key: {
+    #: {
+      tag: "c:dusts/redstone"
+    }
+    I: {
+      tag: "c:storage_blocks/iron"
+    }
+    n: {
+      item: "cataclysm:witherite_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:meat_shredder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/mech_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#i#"
+    "iEi"
+    "#i#"
+  ]
+  key: {
+    #: {
+      tag: "c:storage_blocks/redstone"
+    }
+    i: {
+      tag: "c:ingots/iron"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+  }
+  result: {
+    id: "cataclysm:mech_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/mechanical_fusion_anvil</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "RAR"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:witherite_ingot"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    A: {
+      item: "minecraft:anvil"
+    }
+  }
+  result: {
+    id: "cataclysm:mechanical_fusion_anvil"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/monstrous_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#N#"
+    "GEG"
+    "#N#"
+  ]
+  key: {
+    #: {
+      item: "minecraft:lava_bucket"
+    }
+    N: {
+      item: "minecraft:netherite_scrap"
+    }
+    G: {
+      item: "minecraft:blackstone"
+    }
+    E: {
+      item: "minecraft:ender_eye"
+    }
+  }
+  result: {
+    id: "cataclysm:monstrous_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/netherite_effigy</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "n#R"
+    "#c#"
+    "i#i"
+  ]
+  key: {
+    #: {
+      item: "minecraft:nether_brick"
+    }
+    i: {
+      tag: "c:ingots/gold"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+    n: {
+      tag: "c:ingots/netherite"
+    }
+    c: {
+      item: "minecraft:totem_of_undying"
+    }
+  }
+  result: {
+    id: "cataclysm:netherite_effigy"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/obsidian_brick_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:obsidian_bricks"
+    }
+  }
+  result: {
+    id: "cataclysm:obsidian_brick_slab"
+    count: 6
+  }
+}

```


</details>

<details>
<summary>cataclysm/obsidian_brick_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:obsidian_bricks"
+    }
+  }
+  result: {
+    id: "cataclysm:obsidian_brick_stairs"
+    count: 4
+  }
+}

```


</details>

<details>
<summary>cataclysm/obsidian_brick_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:obsidian_bricks"
+    }
+  }
+  result: {
+    id: "cataclysm:obsidian_brick_wall"
+    count: 6
+  }
+}

```


</details>

<details>
<summary>cataclysm/obsidian_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "##"
+    "##"
+  ]
+  key: {
+    #: {
+      item: "minecraft:obsidian"
+    }
+  }
+  result: {
+    id: "cataclysm:obsidian_bricks"
+    count: 4
+  }
+}

```


</details>

<details>
<summary>cataclysm/obsidian_explosion_trap_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "#C#"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:obsidian_bricks"
+    }
+    C: {
+      item: "cataclysm:void_stone"
+    }
+  }
+  result: {
+    id: "cataclysm:obsidian_explosion_trap_bricks"
+    count: 8
+  }
+}

```


</details>

<details>
<summary>cataclysm/purpur_void_rune_trap_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "#C#"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "minecraft:purpur_block"
+    }
+    C: {
+      item: "cataclysm:void_stone"
+    }
+  }
+  result: {
+    id: "cataclysm:purpur_void_rune_trap_block"
+    count: 8
+  }
+}

```


</details>

<details>
<summary>cataclysm/purpur_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "minecraft:purpur_block"
+    }
+  }
+  result: {
+    id: "cataclysm:purpur_wall"
+    count: 6
+  }
+}

```


</details>

<details>
<summary>cataclysm/quartz_brick_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "minecraft:quartz_bricks"
+    }
+  }
+  result: {
+    id: "cataclysm:quartz_brick_wall"
+    count: 6
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/cursium_boots</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:cursium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_boots"
+  }
+  result: {
+    id: "cataclysm:cursium_boots"
+  }
+  template: {
+    item: "cataclysm:cursium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/cursium_chestplate</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:cursium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_chestplate"
+  }
+  result: {
+    id: "cataclysm:cursium_chestplate"
+  }
+  template: {
+    item: "cataclysm:cursium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/cursium_helmet</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:cursium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_helmet"
+  }
+  result: {
+    id: "cataclysm:cursium_helmet"
+  }
+  template: {
+    item: "cataclysm:cursium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/cursium_leggings</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:cursium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_leggings"
+  }
+  result: {
+    id: "cataclysm:cursium_leggings"
+  }
+  template: {
+    item: "cataclysm:cursium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/ignitium_boots</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:ignitium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_boots"
+  }
+  result: {
+    id: "cataclysm:ignitium_boots"
+  }
+  template: {
+    item: "cataclysm:ignitium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/ignitium_chestplate</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:ignitium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_chestplate"
+  }
+  result: {
+    id: "cataclysm:ignitium_chestplate"
+  }
+  template: {
+    item: "cataclysm:ignitium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/ignitium_helmet</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:ignitium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_helmet"
+  }
+  result: {
+    id: "cataclysm:ignitium_helmet"
+  }
+  template: {
+    item: "cataclysm:ignitium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/ignitium_leggings</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:ignitium_ingot"
+  }
+  base: {
+    item: "minecraft:netherite_leggings"
+  }
+  result: {
+    id: "cataclysm:ignitium_leggings"
+  }
+  template: {
+    item: "cataclysm:ignitium_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/smithing/monstrous_helm</summary>

```diff
+{
+  type: "minecraft:smithing_transform"
+  addition: {
+    item: "cataclysm:monstrous_horn"
+  }
+  base: {
+    item: "minecraft:netherite_helmet"
+  }
+  result: {
+    id: "cataclysm:monstrous_helm"
+  }
+  template: {
+    item: "minecraft:netherite_upgrade_smithing_template"
+  }
+}

```


</details>

<details>
<summary>cataclysm/soul_render</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "cataclysm:black_steel_ingot"
+    }
+    X: {
+      item: "cataclysm:cursium_ingot"
+    }
+  }
+  pattern: [
+    "XX"
+    "X#"
+    " #"
+  ]
+  result: {
+    id: "cataclysm:soul_render"
+  }
+}

```


</details>

<details>
<summary>cataclysm/sticky_gloves</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      item: "minecraft:string"
+    }
+    {
+      item: "minecraft:leather"
+    }
+    {
+      item: "minecraft:slime_ball"
+    }
+    {
+      item: "minecraft:rabbit_hide"
+    }
+  ]
+  result: {
+    id: "cataclysm:sticky_gloves"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/stone_pillar</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    #: {
+      item: "minecraft:stone"
+    }
+  }
+  pattern: [
+    "#"
+    "#"
+  ]
+  result: {
+    count: 2
+    id: "cataclysm:stone_pillar"
+  }
+}

```


</details>

<details>
<summary>cataclysm/stone_tiles</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  key: {
+    S: {
+      item: "minecraft:stone_bricks"
+    }
+  }
+  pattern: [
+    "SS"
+    "SS"
+  ]
+  result: {
+    count: 4
+    id: "cataclysm:stone_tiles"
+  }
+}

```


</details>

<details>
<summary>cataclysm/the_annihilator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "cataclysm:black_steel_ingot"
+    }
+    X: {
+      item: "cataclysm:cursium_ingot"
+    }
+  }
+  pattern: [
+    " X"
+    " X"
+    " #"
+  ]
+  result: {
+    id: "cataclysm:the_annihilator"
+  }
+}

```


</details>

<details>
<summary>cataclysm/the_incinerator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    " /#"
+    "/#/"
+    "N/ "
+  ]
+  key: {
+    /: {
+      item: "minecraft:blaze_rod"
+    }
+    #: {
+      item: "cataclysm:ignitium_ingot"
+    }
+    N: {
+      item: "minecraft:netherite_sword"
+    }
+  }
+  result: {
+    id: "cataclysm:the_incinerator"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/void_eye</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#S#"
+    "EVE"
+    "PSP"
+  ]
+  key: {
+    #: {
+      item: "minecraft:purpur_pillar"
+    }
+    S: {
+      item: "minecraft:shulker_shell"
+    }
+    E: {
+      item: "minecraft:end_stone_bricks"
+    }
+    V: {
+      item: "minecraft:ender_eye"
+    }
+    P: {
+      item: "minecraft:purpur_block"
+    }
+  }
+  result: {
+    id: "cataclysm:void_eye"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/void_scatter_arrow</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "#"
+    "S"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:void_jaw"
+    }
+    S: {
+      item: "minecraft:spectral_arrow"
+    }
+  }
+  result: {
+    id: "cataclysm:void_scatter_arrow"
+    count: 2
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/gauntlet_of_bulwark</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:gauntlet_of_guard"
+  }
+  addition: {
+    item: "cataclysm:bulwark_of_the_flame"
+  }
+  result: {
+    id: "cataclysm:gauntlet_of_bulwark"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/gauntlet_of_maelstrom</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:gauntlet_of_guard"
+  }
+  addition: {
+    item: "cataclysm:sandstorm_in_a_bottle"
+  }
+  result: {
+    id: "cataclysm:gauntlet_of_maelstrom"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/ignitium_elytra_chestplate</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:ignitium_chestplate"
+  }
+  addition: {
+    item: "minecraft:elytra"
+  }
+  result: {
+    id: "cataclysm:ignitium_elytra_chestplate"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/the_immolator</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:the_annihilator"
+  }
+  addition: {
+    item: "cataclysm:ignitium_ingot"
+  }
+  result: {
+    id: "cataclysm:the_immolator"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/void_assault_shoulder_weapon</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:wither_assault_shoulder_weapon"
+  }
+  addition: {
+    item: "cataclysm:void_core"
+  }
+  result: {
+    id: "cataclysm:void_assault_shoulder_weapon"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/void_forge</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:infernal_forge"
+  }
+  addition: {
+    item: "cataclysm:void_core"
+  }
+  result: {
+    id: "cataclysm:void_forge"
+  }
+}

```


</details>

<details>
<summary>cataclysm/weapon_infusion/wrath_of_the_desert</summary>

```diff
+{
+  type: "cataclysm:weapon_fusion"
+  base: {
+    item: "cataclysm:cursed_bow"
+  }
+  addition: {
+    item: "cataclysm:sandstorm_in_a_bottle"
+  }
+  result: {
+    id: "cataclysm:wrath_of_the_desert"
+  }
+}

```


</details>

<details>
<summary>cataclysm/wither_assault_shoulder_weapon</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "nG "
+    "GRG"
+    " Gn"
+  ]
+  key: {
+    n: {
+      item: "cataclysm:witherite_ingot"
+    }
+    G: {
+      item: "minecraft:gunpowder"
+    }
+    R: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  result: {
+    id: "cataclysm:wither_assault_shoulder_weapon"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/witherite_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  key: {
+    #: {
+      item: "cataclysm:witherite_ingot"
+    }
+  }
+  result: {
+    id: "cataclysm:witherite_block"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>cataclysm/witherite_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "cataclysm:witherite_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "cataclysm:witherite_ingot"
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/ancient_stone_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:ancient_stone_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "allthemodium:soul_lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:ancient_stone_5x"
+    }
+    Y: {
+      item: "minecraft:lava_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/black_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:black_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:black_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/blue_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:blue_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:blue_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/brown_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:brown_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:brown_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/cyan_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:cyan_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:cyan_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/gravel_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:gravel_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "extendedae:infinity_cobblestone_cell"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "mekanism:crusher"
+    }
+    I: {
+      item: "allthecompressed:gravel_6x"
+    }
+    Y: {
+      item: "mekanism:crusher"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/gray_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:gray_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:gray_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/green_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:green_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:green_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/kivi_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:kivi_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "allthemodium:soul_lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:kivi_5x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/light_blue_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:light_blue_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:light_blue_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/light_gray_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:light_gray_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:light_gray_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/lime_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:lime_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:lime_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/magenta_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:magenta_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:magenta_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/orange_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:orange_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:orange_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/pink_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:pink_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:pink_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/purple_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:purple_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:purple_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/red_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:red_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:red_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/white_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:white_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:white_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/yellow_cell</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  result: {
+    id: "kubejs:yellow_cell"
+    count: 1
+  }
+  pattern: [
+    "GIG"
+    "XCY"
+    "AVU"
+  ]
+  key: {
+    A: {
+      item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
+    }
+    C: {
+      item: "megacells:cell_component_256m"
+    }
+    U: {
+      item: "allthemodium:vibranium_allthemodium_alloy_ingot"
+    }
+    V: {
+      item: "allthemodium:unobtainium_vibranium_alloy_ingot"
+    }
+    G: {
+      item: "ae2:quartz_glass"
+    }
+    X: {
+      item: "minecraft:lava_bucket"
+    }
+    I: {
+      item: "allthecompressed:yellow_concrete_6x"
+    }
+    Y: {
+      item: "minecraft:water_bucket"
+    }
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>supplementaries/way_sign_oak/cataclysm/chorus</summary>

```diff
+{
+  key: {
+    A: {
+      ingredient: {
+        item: "minecraft:oak_planks"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "cataclysm:chorus"
+      type: "moonlight:block_type_swap"
+    }
+    B: {
+      ingredient: {
+        tag: "c:rods/wooden"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "cataclysm:chorus"
+      type: "moonlight:block_type_swap"
+    }
+  }
+  pattern: [
+    "AAA"
+    " B "
+  ]
+  result: {
+    id: "supplementaries:cataclysm/way_sign_chorus"
+    count: 3
+  }
+  category: "misc"
+  type: "minecraft:crafting_shaped"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (3)</summary>
<blockquote>

<details>
<summary>advanced_ae/import_export_bus</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     E: {
       item: "ae2:export_bus"
     }
     I: {
-      item: "ae2:export_bus"
+      item: "ae2:import_bus"
     }
     L: {
       item: "ae2:logic_processor"
     }
   }
   pattern: [
     "   "
     "ILE"
     "   "
   ]
   result: {
     count: 1
     id: "advanced_ae:import_export_bus_part"
   }
 }

```


</details>

<details>
<summary>allthemods/enchanting_apparatus/creative_source_jar</summary>

```diff
 {
   type: "ars_nouveau:enchanting_apparatus"
   keepNbtOfReagent: false
   pedestalItems: [
     {
       item: "ars_nouveau:source_gem_block"
     }
     {
-      items: "ars_nouveau:source_jar"
+      items: "allthemodium:allthemodium_source_jar"
       components: {
-        ars_nouveau:block_fill_contents: 10000
+        ars_nouveau:block_fill_contents: 100000
       }
       type: "neoforge:components"
     }
     {
       item: "ars_nouveau:source_gem_block"
     }
     {
-      items: "ars_nouveau:source_jar"
+      items: "allthemodium:allthemodium_source_jar"
       components: {
-        ars_nouveau:block_fill_contents: 10000
+        ars_nouveau:block_fill_contents: 100000
       }
       type: "neoforge:components"
     }
     {
       item: "ars_nouveau:source_gem_block"
     }
     {
-      items: "ars_nouveau:source_jar"
+      items: "allthemodium:allthemodium_source_jar"
       components: {
-        ars_nouveau:block_fill_contents: 10000
+        ars_nouveau:block_fill_contents: 100000
       }
       type: "neoforge:components"
     }
     {
       item: "ars_nouveau:source_gem_block"
     }
     {
-      items: "ars_nouveau:source_jar"
+      items: "allthemodium:allthemodium_source_jar"
       components: {
-        ars_nouveau:block_fill_contents: 10000
+        ars_nouveau:block_fill_contents: 100000
       }
       type: "neoforge:components"
     }
   ]
   reagent: [
     {
       item: "allthetweaks:atm_star"
     }
   ]
   result: {
     count: 1
     id: "ars_nouveau:creative_source_jar"
   }
   sourceCost: 0
   _kubejs_changed_marker: true
 }

```


</details>

<details>
<summary>minecraft/kjs/sand_cell</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     id: "kubejs:sand_cell"
     count: 1
   }
   pattern: [
     "GIG"
     "XCY"
     "AVU"
   ]
   key: {
     A: {
       item: "allthemodium:unobtainium_allthemodium_alloy_ingot"
     }
     C: {
-      item: "extendedae:infinity_cobblestone_cell"
+      item: "kubejs:gravel_cell"
     }
     U: {
       item: "allthemodium:vibranium_allthemodium_alloy_ingot"
     }
     V: {
       item: "allthemodium:unobtainium_vibranium_alloy_ingot"
     }
     G: {
       item: "ae2:quartz_glass"
     }
     X: {
       item: "mekanism:crusher"
     }
     I: {
       item: "allthecompressed:sand_6x"
     }
     Y: {
       item: "mekanism:crusher"
     }
   }
   _kubejs_changed_marker: true
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>mekanism/digital_miner</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/atomic"
-    }
-    C: {
-      tag: "c:circuits/basic"
-    }
-    R: {
-      item: "mekanism:robit"
-    }
-    S: {
-      item: "mekanism:logistical_sorter"
-    }
-    T: {
-      item: "mekanism:teleportation_core"
-    }
-    X: {
-      item: "mekanism:steel_casing"
-    }
-  }
-  pattern: [
-    "ACA"
-    "SRS"
-    "TXT"
-  ]
-  result: {
-    count: 1
-    id: "mekanism:digital_miner"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (85)</summary>
<blockquote>

<details>
<summary>minecraft:block/cataclysm:altar_destroy_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:cm_glass</summary>

```diff
+[
+  "minecraft:black_stained_glass"
+  "minecraft:black_stained_glass_pane"
+  "minecraft:blue_stained_glass"
+  "minecraft:blue_stained_glass_pane"
+  "minecraft:brown_stained_glass"
+  "minecraft:brown_stained_glass_pane"
+  "minecraft:cyan_stained_glass"
+  "minecraft:cyan_stained_glass_pane"
+  "minecraft:glass"
+  "minecraft:glass_pane"
+  "minecraft:gray_stained_glass"
+  "minecraft:gray_stained_glass_pane"
+  "minecraft:green_stained_glass"
+  "minecraft:green_stained_glass_pane"
+  "minecraft:light_blue_stained_glass"
+  "minecraft:light_blue_stained_glass_pane"
+  "minecraft:lime_stained_glass"
+  "minecraft:lime_stained_glass_pane"
+  "minecraft:magenta_stained_glass"
+  "minecraft:magenta_stained_glass_pane"
+  "minecraft:orange_stained_glass"
+  "minecraft:orange_stained_glass_pane"
+  "minecraft:pink_stained_glass"
+  "minecraft:pink_stained_glass_pane"
+  "minecraft:purple_stained_glass"
+  "minecraft:purple_stained_glass_pane"
+  "minecraft:red_stained_glass"
+  "minecraft:red_stained_glass_pane"
+  "minecraft:tinted_glass"
+  "minecraft:white_stained_glass"
+  "minecraft:white_stained_glass_pane"
+  "minecraft:yellow_stained_glass"
+  "minecraft:yellow_stained_glass_pane"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:coralssus_break</summary>

```diff
+[
+  "minecraft:iron_bars"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:ender_golem_can_destroy</summary>

```diff
+[
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:polished_end_stone_stairs"
+  "minecraft:end_stone_brick_stairs"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:ender_guardian_can_destroy</summary>

```diff
+[
+  "cataclysm:chiseled_end_stone_bricks"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:chiseled_purpur_block"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:polished_end_stone"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:void_infused_end_stone_bricks"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_stone"
+  "minecraft:crying_obsidian"
+  "minecraft:end_stone_brick_stairs"
+  "minecraft:end_stone_bricks"
+  "minecraft:purpur_block"
+  "minecraft:purpur_stairs"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:endermaptera_can_not_spawn</summary>

```diff
+[
+  "cataclysm:chiseled_end_stone_bricks"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:chiseled_purpur_block"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:polished_end_stone"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:void_infused_end_stone_bricks"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_stone"
+  "minecraft:crying_obsidian"
+  "minecraft:end_stone_brick_stairs"
+  "minecraft:end_stone_brick_wall"
+  "minecraft:end_stone_bricks"
+  "minecraft:obsidian"
+  "minecraft:purpur_block"
+  "minecraft:purpur_stairs"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:frosted_prison_chandelier</summary>

```diff
+[
+  "cataclysm:black_steel_fence"
+  "minecraft:chain"
+  "minecraft:soul_lantern"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:harbinger_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:lever"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:ignis_can_destroy_cracked_block</summary>

```diff
+[
+  "minecraft:cracked_deepslate_bricks"
+  "minecraft:cracked_deepslate_tiles"
+  "minecraft:cracked_nether_bricks"
+  "minecraft:cracked_polished_blackstone_bricks"
+  "minecraft:cracked_stone_bricks"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:ignis_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:leviathan_immune</summary>

```diff
+[
+  "cataclysm:abyssal_egg"
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:maledictus_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:netherite_monstrosity_break</summary>

```diff
+[
+  "minecraft:basalt"
+  "minecraft:blackstone"
+  "minecraft:bone_block"
+  "minecraft:netherrack"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:netherite_monstrosity_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "cataclysm:enderite_block"
+  "cataclysm:ignitium_block"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:witherite_block"
+  "minecraft:ancient_debris"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:crying_obsidian"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:netherite_block"
+  "minecraft:obsidian"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:remnant_immune</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "minecraft:barrier"
+  "minecraft:bedrock"
+  "minecraft:chain_command_block"
+  "minecraft:command_block"
+  "minecraft:end_gateway"
+  "minecraft:end_portal"
+  "minecraft:end_portal_frame"
+  "minecraft:fire"
+  "minecraft:jigsaw"
+  "minecraft:lava"
+  "minecraft:lever"
+  "minecraft:light"
+  "minecraft:moving_piston"
+  "minecraft:reinforced_deepslate"
+  "minecraft:repeating_command_block"
+  "minecraft:soul_fire"
+  "minecraft:structure_block"
+  "minecraft:structure_block"
+  "minecraft:water"
+]

```


</details>

<details>
<summary>minecraft:block/cataclysm:sunken_city_material</summary>

```diff
+[
+  "cataclysm:altar_of_abyss"
+  "cataclysm:stone_tiles"
+  "minecraft:andesite"
+  "minecraft:polished_andesite"
+  "minecraft:tuff"
+]

```


</details>

<details>
<summary>minecraft:entity_type/alexscaves:glowing_entities</summary>

```diff
+[
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/alexscaves:resists_radiation</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/alexscaves:resists_totem_of_possession</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:ancient_remnant_target</summary>

```diff
+[
+  "minecraft:sniffer"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:baby_leviathan_target</summary>

```diff
+[
+  "minecraft:cod"
+  "minecraft:drowned"
+  "minecraft:elder_guardian"
+  "minecraft:glow_squid"
+  "minecraft:guardian"
+  "minecraft:salmon"
+  "minecraft:squid"
+  "minecraft:tropical_fish"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:dimensional_lift_immune</summary>

```diff
+[
+  "cataclysm:abyss_orb"
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_spear"
+  "minecraft:trident"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:harbinger_none_targets</summary>

```diff
+[
+  "cataclysm:the_harbinger"
+  "cataclysm:the_prowler"
+  "cataclysm:the_watcher"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:ignis_cant_poke</summary>

```diff
+[
+  "minecraft:ender_dragon"
+  "minecraft:magma_cube"
+  "minecraft:slime"
+  "minecraft:wither"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:lava_monster</summary>

```diff
+[
+  "minecraft:blaze"
+  "minecraft:magma_cube"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:leviathan_target</summary>

```diff
+[
+  "minecraft:axolotl"
+  "minecraft:cod"
+  "minecraft:dolphin"
+  "minecraft:drowned"
+  "minecraft:elder_guardian"
+  "minecraft:glow_squid"
+  "minecraft:guardian"
+  "minecraft:salmon"
+  "minecraft:squid"
+  "minecraft:tropical_fish"
+  "minecraft:turtle"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:modern_remnant_target</summary>

```diff
+[
+  "minecraft:sniffer"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:sandstone_trap_not_detected</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:kobolediator"
+  "cataclysm:koboleton"
+  "cataclysm:wadjet"
+  "minecraft:husk"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_ancient_remnant</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:kobolediator"
+  "cataclysm:koboleton"
+  "cataclysm:wadjet"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_ender_guardian</summary>

```diff
+[
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:endermaptera"
+  "minecraft:shulker"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_ignis</summary>

```diff
+[
+  "cataclysm:ignis"
+  "cataclysm:ignited_berserker"
+  "cataclysm:ignited_revenant"
+  "minecraft:blaze"
+  "minecraft:magma_cube"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_maledictus</summary>

```diff
+[
+  "cataclysm:aptrgangr"
+  "cataclysm:draugr"
+  "cataclysm:elite_draugr"
+  "cataclysm:maledictus"
+  "cataclysm:royal_draugr"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_monstrosity</summary>

```diff
+[
+  "cataclysm:netherite_ministrosity"
+  "cataclysm:netherite_monstrosity"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_the_harbinger</summary>

```diff
+[
+  "cataclysm:the_harbinger"
+  "cataclysm:the_prowler"
+  "cataclysm:the_watcher"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:team_the_leviathan</summary>

```diff
+[
+  "cataclysm:coral_golem"
+  "cataclysm:coralssus"
+  "cataclysm:deepling"
+  "cataclysm:deepling_angler"
+  "cataclysm:deepling_brute"
+  "cataclysm:deepling_priest"
+  "cataclysm:deepling_warlock"
+  "cataclysm:lionfish"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/cataclysm:trap_block_not_detected</summary>

```diff
+[
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:endermaptera"
+  "minecraft:ender_dragon"
+  "minecraft:enderman"
+  "minecraft:endermite"
+]

```


</details>

<details>
<summary>minecraft:entity_type/iceandfire:blinded.json</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/iceandfire:immune_to_gorgon_stone</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:entity_type/neoforge:bosses</summary>

```diff
+[
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:item/cataclysm:bone_item</summary>

```diff
+[
+  "cataclysm:koboleton_bone"
+  "minecraft:bone"
+]

```


</details>

<details>
<summary>minecraft:item/cataclysm:explosion_immune_item</summary>

```diff
+[
+  "cataclysm:abyssal_egg"
+  "cataclysm:bulwark_of_the_flame"
+  "cataclysm:burning_ashes"
+  "cataclysm:cursed_bow"
+  "cataclysm:cursium_block"
+  "cataclysm:cursium_block"
+  "cataclysm:cursium_boots"
+  "cataclysm:cursium_chestplate"
+  "cataclysm:cursium_helmet"
+  "cataclysm:cursium_ingot"
+  "cataclysm:cursium_ingot"
+  "cataclysm:cursium_leggings"
+  "cataclysm:gauntlet_of_bulwark"
+  "cataclysm:gauntlet_of_guard"
+  "cataclysm:ignitium_block"
+  "cataclysm:ignitium_boots"
+  "cataclysm:ignitium_chestplate"
+  "cataclysm:ignitium_elytra_chestplate"
+  "cataclysm:ignitium_helmet"
+  "cataclysm:ignitium_ingot"
+  "cataclysm:ignitium_leggings"
+  "cataclysm:infernal_forge"
+  "cataclysm:lava_power_cell"
+  "cataclysm:mechanical_fusion_anvil"
+  "cataclysm:modern_remnant_bucket"
+  "cataclysm:monstrous_helm"
+  "cataclysm:monstrous_horn"
+  "cataclysm:music_disc_ender_guardian"
+  "cataclysm:music_disc_ignis"
+  "cataclysm:music_disc_maledictus"
+  "cataclysm:music_disc_netherite_monstrosity"
+  "cataclysm:music_disc_the_harbinger"
+  "cataclysm:netherite_effigy"
+  "cataclysm:netherite_ministrosity_bucket"
+  "cataclysm:remnant_skull"
+  "cataclysm:sandstorm_in_a_bottle"
+  "cataclysm:soul_render"
+  "cataclysm:the_annihilator"
+  "cataclysm:the_baby_leviathan_bucket"
+  "cataclysm:the_incinerator"
+  "cataclysm:tidal_claws"
+  "cataclysm:void_assault_shoulder_weapon"
+  "cataclysm:void_core"
+  "cataclysm:void_forge"
+  "cataclysm:wither_assault_shoulder_weapon"
+  "cataclysm:witherite_block"
+  "cataclysm:witherite_ingot"
+]

```


</details>

<details>
<summary>minecraft:item/cataclysm:ministrosity_blacklist</summary>

```diff
+[
+  "cataclysm:netherite_ministrosity_bucket"
+  "minecraft:black_shulker_box"
+  "minecraft:blue_shulker_box"
+  "minecraft:brown_shulker_box"
+  "minecraft:cyan_shulker_box"
+  "minecraft:gray_shulker_box"
+  "minecraft:green_shulker_box"
+  "minecraft:light_blue_shulker_box"
+  "minecraft:light_gray_shulker_box"
+  "minecraft:lime_shulker_box"
+  "minecraft:magenta_shulker_box"
+  "minecraft:orange_shulker_box"
+  "minecraft:pink_shulker_box"
+  "minecraft:purple_shulker_box"
+  "minecraft:red_shulker_box"
+  "minecraft:shulker_box"
+  "minecraft:white_shulker_box"
+  "minecraft:yellow_shulker_box"
+]

```


</details>

<details>
<summary>minecraft:item/cataclysm:sticky_item</summary>

```diff
+[
+  "cataclysm:sticky_gloves"
+  "minecraft:honey_block"
+  "minecraft:slime_ball"
+  "minecraft:slime_block"
+]

```


</details>

<details>
<summary>minecraft:item/minecraft:music_discs</summary>

```diff
+[
+  "cataclysm:music_disc_ancient_remnant"
+  "cataclysm:music_disc_ender_guardian"
+  "cataclysm:music_disc_ignis"
+  "cataclysm:music_disc_netherite_monstrosity"
+  "cataclysm:music_disc_the_harbinger"
+  "cataclysm:music_disc_the_leviathan"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:armor/boots</summary>

```diff
+[
+  "cataclysm:ignitium_boots"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:armor/chestplates</summary>

```diff
+[
+  "cataclysm:ignitium_chestplate"
+  "cataclysm:ignitium_elytra_chestplate"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:armor/helmets</summary>

```diff
+[
+  "cataclysm:ignitium_helmet"
+  "cataclysm:monstrous_helm"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:armor/leggings</summary>

```diff
+[
+  "cataclysm:ignitium_leggings"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:tools/axes</summary>

```diff
+[
+  "cataclysm:black_steel_axe"
+  "cataclysm:meat_shredder"
+  "cataclysm:soul_render"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:tools/bows</summary>

```diff
+[
+  "cataclysm:cursed_bow"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:tools/pickaxes</summary>

```diff
+[
+  "cataclysm:infernal_forge"
+  "cataclysm:void_forge"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:tools/swords</summary>

```diff
+[
+  "cataclysm:athame"
+  "cataclysm:the_incinerator"
+]

```


</details>

<details>
<summary>minecraft:item/neoforge:tools/tridents</summary>

```diff
+[
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_spear"
+]

```


</details>

<details>
<summary>minecraft:item/sophisticatedbackpacks:upgrade</summary>

```diff
+[
+  "sophisticatedbackpacks:advanced_compacting_upgrade"
+  "sophisticatedbackpacks:advanced_deposit_upgrade"
+  "sophisticatedbackpacks:advanced_feeding_upgrade"
+  "sophisticatedbackpacks:advanced_filter_upgrade"
+  "sophisticatedbackpacks:advanced_jukebox_upgrade"
+  "sophisticatedbackpacks:advanced_magnet_upgrade"
+  "sophisticatedbackpacks:advanced_pickup_upgrade"
+  "sophisticatedbackpacks:advanced_pump_upgrade"
+  "sophisticatedbackpacks:advanced_refill_upgrade"
+  "sophisticatedbackpacks:advanced_restock_upgrade"
+  "sophisticatedbackpacks:advanced_tool_swapper_upgrade"
+  "sophisticatedbackpacks:advanced_void_upgrade"
+  "sophisticatedbackpacks:anvil_upgrade"
+  "sophisticatedbackpacks:auto_blasting_upgrade"
+  "sophisticatedbackpacks:auto_smelting_upgrade"
+  "sophisticatedbackpacks:auto_smoking_upgrade"
+  "sophisticatedbackpacks:battery_upgrade"
+  "sophisticatedbackpacks:blasting_upgrade"
+  "sophisticatedbackpacks:chipped/alchemy_bench_upgrade?"
+  "sophisticatedbackpacks:chipped/botanist_workbench_upgrade?"
+  "sophisticatedbackpacks:chipped/carpenters_table_upgrade?"
+  "sophisticatedbackpacks:chipped/glassblower_upgrade?"
+  "sophisticatedbackpacks:chipped/loom_table_upgrade?"
+  "sophisticatedbackpacks:chipped/mason_table_upgrade?"
+  "sophisticatedbackpacks:chipped/tinkering_table_upgrade?"
+  "sophisticatedbackpacks:compacting_upgrade"
+  "sophisticatedbackpacks:crafting_upgrade"
+  "sophisticatedbackpacks:deposit_upgrade"
+  "sophisticatedbackpacks:everlasting_upgrade"
+  "sophisticatedbackpacks:feeding_upgrade"
+  "sophisticatedbackpacks:filter_upgrade"
+  "sophisticatedbackpacks:inception_upgrade"
+  "sophisticatedbackpacks:jukebox_upgrade"
+  "sophisticatedbackpacks:magnet_upgrade"
+  "sophisticatedbackpacks:pickup_upgrade"
+  "sophisticatedbackpacks:pump_upgrade"
+  "sophisticatedbackpacks:refill_upgrade"
+  "sophisticatedbackpacks:restock_upgrade"
+  "sophisticatedbackpacks:smelting_upgrade"
+  "sophisticatedbackpacks:smithing_upgrade"
+  "sophisticatedbackpacks:smoking_upgrade"
+  "sophisticatedbackpacks:stack_upgrade_starter_tier"
+  "sophisticatedbackpacks:stack_upgrade_tier_1"
+  "sophisticatedbackpacks:stack_upgrade_tier_2"
+  "sophisticatedbackpacks:stack_upgrade_tier_3"
+  "sophisticatedbackpacks:stack_upgrade_tier_4"
+  "sophisticatedbackpacks:stonecutter_upgrade"
+  "sophisticatedbackpacks:tank_upgrade"
+  "sophisticatedbackpacks:tool_swapper_upgrade"
+  "sophisticatedbackpacks:void_upgrade"
+  "sophisticatedbackpacks:xp_pump_upgrade"
+]

```


</details>

<details>
<summary>minecraft:mob_effect/cataclysm:effective_for_bosses</summary>

```diff
+[
+  "cataclysm:abyssal_burn"
+  "cataclysm:blazing_brand"
+  "cataclysm:ghost_sickness"
+  "cataclysm:monstrous"
+  "minecraft:absorption"
+  "minecraft:blindness"
+  "minecraft:conduit_power"
+  "minecraft:dolphins_grace"
+  "minecraft:fire_resistance"
+  "minecraft:glowing"
+  "minecraft:haste"
+  "minecraft:health_boost"
+  "minecraft:hunger"
+  "minecraft:instant_damage"
+  "minecraft:instant_health"
+  "minecraft:invisibility"
+  "minecraft:jump_boost"
+  "minecraft:luck"
+  "minecraft:mining_fatigue"
+  "minecraft:nausea"
+  "minecraft:night_vision"
+  "minecraft:poison"
+  "minecraft:regeneration"
+  "minecraft:resistance"
+  "minecraft:saturation"
+  "minecraft:slowness"
+  "minecraft:speed"
+  "minecraft:strength"
+  "minecraft:unluck"
+  "minecraft:water_breathing"
+  "minecraft:weakness"
+  "minecraft:wither"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:amethyst_crab_spawn</summary>

```diff
+[
+  "minecraft:lush_caves"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:deeplings_spawn</summary>

```diff
+[
+  "#minecraft:is_ocean"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/ancient_factory_biomes</summary>

```diff
+[
+  "#c:is_underground"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/burning_arena_biomes</summary>

```diff
+[
+  "minecraft:nether_wastes"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/cursed_pyramid_biomes</summary>

```diff
+[
+  "minecraft:desert"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/frosted_prison_biomes</summary>

```diff
+[
+  "minecraft:snowy_plains"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/ruined_citadel_biomes</summary>

```diff
+[
+  "minecraft:end_highlands"
+  "minecraft:end_midlands"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/soul_black_smith_biomes</summary>

```diff
+[
+  "minecraft:crimson_forest"
+  "minecraft:nether_wastes"
+  "minecraft:soul_sand_valley"
+  "minecraft:warped_forest"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:has_structure/sunken_city_biomes</summary>

```diff
+[
+  "#minecraft:is_deep_ocean"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:koboleton_spawn</summary>

```diff
+[
+  "#minecraft:is_badlands"
+  "#minecraft:is_savanna"
+  "minecraft:desert"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome/cataclysm:required_sunken_city_surrounding</summary>

```diff
+[
+  "#minecraft:is_ocean"
+  "#minecraft:is_river"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:berserker_spawn</summary>

```diff
+[
+  "minecraft:fortress"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_basalt</summary>

```diff
+[
+  "cataclysm:burning_arena"
+  "cataclysm:soul_black_smith"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_geode</summary>

```diff
+[
+  "cataclysm:ancient_factory"
+  "cataclysm:cursed_pyramid"
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_lake</summary>

```diff
+[
+  "cataclysm:ancient_factory"
+  "cataclysm:cursed_pyramid"
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_magma_block</summary>

```diff
+[
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_multiface</summary>

```diff
+[
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:blocked_ore</summary>

```diff
+[
+  "cataclysm:ancient_factory"
+  "cataclysm:cursed_pyramid"
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_abyss_located</summary>

```diff
+[
+  "cataclysm:sunken_city"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_curse_located</summary>

```diff
+[
+  "cataclysm:frosted_prison"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_desert_located</summary>

```diff
+[
+  "cataclysm:cursed_pyramid"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_flame_located</summary>

```diff
+[
+  "cataclysm:burning_arena"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_mech_located</summary>

```diff
+[
+  "cataclysm:ancient_factory"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_monstrous_located</summary>

```diff
+[
+  "cataclysm:soul_black_smith"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure/cataclysm:eye_of_ruined_located</summary>

```diff
+[
+  "cataclysm:ruined_citadel"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:burning_arena_avoid</summary>

```diff
+[
+  "cataclysm:soul_black_smith"
+  "minecraft:nether_complexes"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:cursed_pyramid_avoid</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:frosted_prison_avoid</summary>

```diff
+[
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:soul_black_smith_avoid</summary>

```diff
+[
+  "minecraft:nether_complexes"
+]

```


</details>

<details>
<summary>minecraft:worldgen/structure_set/cataclysm:sunken_city_avoid</summary>

```diff
+[
+  "minecraft:ocean_monuments"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (79)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:stripped_logs</summary>

```diff
 [
   ... (34 entries)
+  "minecraft:stripped_crimson_stem"
   ... (5 entries)
+  "minecraft:stripped_warped_stem"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:stripped_woods</summary>

```diff
 [
   ... (33 entries)
+  "minecraft:stripped_crimson_hyphae"
   ... (5 entries)
+  "minecraft:stripped_warped_hyphae"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:beacon_base_blocks</summary>

```diff
 [
   ... (4 entries)
-  "allthecompressed:aluminum_block_1x"
-  "allthecompressed:aluminum_block_2x"
-  "allthecompressed:aluminum_block_3x"
-  "allthecompressed:aluminum_block_4x"
-  "allthecompressed:aluminum_block_5x"
-  "allthecompressed:aluminum_block_6x"
-  "allthecompressed:aluminum_block_7x"
-  "allthecompressed:aluminum_block_8x"
-  "allthecompressed:aluminum_block_9x"
   ... (36 entries)
-  "allthecompressed:lead_block_1x"
-  "allthecompressed:lead_block_2x"
-  "allthecompressed:lead_block_3x"
-  "allthecompressed:lead_block_4x"
-  "allthecompressed:lead_block_5x"
-  "allthecompressed:lead_block_6x"
-  "allthecompressed:lead_block_7x"
-  "allthecompressed:lead_block_8x"
-  "allthecompressed:lead_block_9x"
   ... (9 entries)
-  "allthecompressed:nickel_block_1x"
-  "allthecompressed:nickel_block_2x"
-  "allthecompressed:nickel_block_3x"
-  "allthecompressed:nickel_block_4x"
-  "allthecompressed:nickel_block_5x"
-  "allthecompressed:nickel_block_6x"
-  "allthecompressed:nickel_block_7x"
-  "allthecompressed:nickel_block_8x"
-  "allthecompressed:nickel_block_9x"
-  "allthecompressed:osmium_block_1x"
-  "allthecompressed:osmium_block_2x"
-  "allthecompressed:osmium_block_3x"
-  "allthecompressed:osmium_block_4x"
-  "allthecompressed:osmium_block_5x"
-  "allthecompressed:osmium_block_6x"
-  "allthecompressed:osmium_block_7x"
-  "allthecompressed:osmium_block_8x"
-  "allthecompressed:osmium_block_9x"
-  "allthecompressed:platinum_block_1x"
-  "allthecompressed:platinum_block_2x"
-  "allthecompressed:platinum_block_3x"
-  "allthecompressed:platinum_block_4x"
-  "allthecompressed:platinum_block_5x"
-  "allthecompressed:platinum_block_6x"
-  "allthecompressed:platinum_block_7x"
-  "allthecompressed:platinum_block_8x"
-  "allthecompressed:platinum_block_9x"
-  "allthecompressed:silver_block_1x"
-  "allthecompressed:silver_block_2x"
-  "allthecompressed:silver_block_3x"
-  "allthecompressed:silver_block_4x"
-  "allthecompressed:silver_block_5x"
-  "allthecompressed:silver_block_6x"
-  "allthecompressed:silver_block_7x"
-  "allthecompressed:silver_block_8x"
-  "allthecompressed:silver_block_9x"
-  "allthecompressed:tin_block_1x"
-  "allthecompressed:tin_block_2x"
-  "allthecompressed:tin_block_3x"
-  "allthecompressed:tin_block_4x"
-  "allthecompressed:tin_block_5x"
-  "allthecompressed:tin_block_6x"
-  "allthecompressed:tin_block_7x"
-  "allthecompressed:tin_block_8x"
-  "allthecompressed:tin_block_9x"
-  "allthecompressed:uranium_block_1x"
-  "allthecompressed:uranium_block_2x"
-  "allthecompressed:uranium_block_3x"
-  "allthecompressed:uranium_block_4x"
-  "allthecompressed:uranium_block_5x"
-  "allthecompressed:uranium_block_6x"
-  "allthecompressed:uranium_block_7x"
-  "allthecompressed:uranium_block_8x"
-  "allthecompressed:uranium_block_9x"
-  "allthecompressed:zinc_block_1x"
-  "allthecompressed:zinc_block_2x"
-  "allthecompressed:zinc_block_3x"
-  "allthecompressed:zinc_block_4x"
-  "allthecompressed:zinc_block_5x"
-  "allthecompressed:zinc_block_6x"
-  "allthecompressed:zinc_block_7x"
-  "allthecompressed:zinc_block_8x"
-  "allthecompressed:zinc_block_9x"
+  "allthecompressed:xychorium_storage_blue_1x"
+  "allthecompressed:xychorium_storage_blue_2x"
+  "allthecompressed:xychorium_storage_blue_3x"
+  "allthecompressed:xychorium_storage_blue_4x"
+  "allthecompressed:xychorium_storage_blue_5x"
+  "allthecompressed:xychorium_storage_blue_6x"
+  "allthecompressed:xychorium_storage_blue_7x"
+  "allthecompressed:xychorium_storage_blue_8x"
+  "allthecompressed:xychorium_storage_blue_9x"
+  "allthecompressed:xychorium_storage_dark_1x"
+  "allthecompressed:xychorium_storage_dark_2x"
+  "allthecompressed:xychorium_storage_dark_3x"
+  "allthecompressed:xychorium_storage_dark_4x"
+  "allthecompressed:xychorium_storage_dark_5x"
+  "allthecompressed:xychorium_storage_dark_6x"
+  "allthecompressed:xychorium_storage_dark_7x"
+  "allthecompressed:xychorium_storage_dark_8x"
+  "allthecompressed:xychorium_storage_dark_9x"
+  "allthecompressed:xychorium_storage_green_1x"
+  "allthecompressed:xychorium_storage_green_2x"
+  "allthecompressed:xychorium_storage_green_3x"
+  "allthecompressed:xychorium_storage_green_4x"
+  "allthecompressed:xychorium_storage_green_5x"
+  "allthecompressed:xychorium_storage_green_6x"
+  "allthecompressed:xychorium_storage_green_7x"
+  "allthecompressed:xychorium_storage_green_8x"
+  "allthecompressed:xychorium_storage_green_9x"
+  "allthecompressed:xychorium_storage_light_1x"
+  "allthecompressed:xychorium_storage_light_2x"
+  "allthecompressed:xychorium_storage_light_3x"
+  "allthecompressed:xychorium_storage_light_4x"
+  "allthecompressed:xychorium_storage_light_5x"
+  "allthecompressed:xychorium_storage_light_6x"
+  "allthecompressed:xychorium_storage_light_7x"
+  "allthecompressed:xychorium_storage_light_8x"
+  "allthecompressed:xychorium_storage_light_9x"
+  "allthecompressed:xychorium_storage_red_1x"
+  "allthecompressed:xychorium_storage_red_2x"
+  "allthecompressed:xychorium_storage_red_3x"
+  "allthecompressed:xychorium_storage_red_4x"
+  "allthecompressed:xychorium_storage_red_5x"
+  "allthecompressed:xychorium_storage_red_6x"
+  "allthecompressed:xychorium_storage_red_7x"
+  "allthecompressed:xychorium_storage_red_8x"
+  "allthecompressed:xychorium_storage_red_9x"
   ... (112 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:dragon_immune</summary>

```diff
 [
   ... (3 entries)
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:cursium_block"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "cataclysm:enderite_block"
+  "cataclysm:ignitium_block"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:witherite_block"
   ... (851 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fences</summary>

```diff
 [
   ... (6 entries)
+  "cataclysm:azure_seastone_fence"
+  "cataclysm:black_steel_fence"
+  "cataclysm:prismarine_brick_fence"
   ... (180 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (895 entries)
+  "cataclysm:chorus_fence"
+  "cataclysm:chorus_planks"
+  "cataclysm:chorus_slab"
+  "cataclysm:chorus_stairs"
+  "cataclysm:chorus_stem"
   ... (4518 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (583 entries)
+  "allthecompressed:black_concrete_1x"
+  "allthecompressed:black_concrete_2x"
+  "allthecompressed:black_concrete_3x"
+  "allthecompressed:black_concrete_4x"
+  "allthecompressed:black_concrete_5x"
+  "allthecompressed:black_concrete_6x"
+  "allthecompressed:black_concrete_7x"
+  "allthecompressed:black_concrete_8x"
+  "allthecompressed:black_concrete_9x"
   ... (18 entries)
+  "allthecompressed:blue_concrete_1x"
+  "allthecompressed:blue_concrete_2x"
+  "allthecompressed:blue_concrete_3x"
+  "allthecompressed:blue_concrete_4x"
+  "allthecompressed:blue_concrete_5x"
+  "allthecompressed:blue_concrete_6x"
+  "allthecompressed:blue_concrete_7x"
+  "allthecompressed:blue_concrete_8x"
+  "allthecompressed:blue_concrete_9x"
   ... (36 entries)
+  "allthecompressed:brown_concrete_1x"
+  "allthecompressed:brown_concrete_2x"
+  "allthecompressed:brown_concrete_3x"
+  "allthecompressed:brown_concrete_4x"
+  "allthecompressed:brown_concrete_5x"
+  "allthecompressed:brown_concrete_6x"
+  "allthecompressed:brown_concrete_7x"
+  "allthecompressed:brown_concrete_8x"
+  "allthecompressed:brown_concrete_9x"
   ... (27 entries)
+  "allthecompressed:cinnabar_block_1x"
+  "allthecompressed:cinnabar_block_2x"
+  "allthecompressed:cinnabar_block_3x"
+  "allthecompressed:cinnabar_block_4x"
+  "allthecompressed:cinnabar_block_5x"
+  "allthecompressed:cinnabar_block_6x"
+  "allthecompressed:cinnabar_block_7x"
+  "allthecompressed:cinnabar_block_8x"
+  "allthecompressed:cinnabar_block_9x"
   ... (72 entries)
+  "allthecompressed:cyan_concrete_1x"
+  "allthecompressed:cyan_concrete_2x"
+  "allthecompressed:cyan_concrete_3x"
+  "allthecompressed:cyan_concrete_4x"
+  "allthecompressed:cyan_concrete_5x"
+  "allthecompressed:cyan_concrete_6x"
+  "allthecompressed:cyan_concrete_7x"
+  "allthecompressed:cyan_concrete_8x"
+  "allthecompressed:cyan_concrete_9x"
   ... (126 entries)
+  "allthecompressed:fluorite_block_1x"
+  "allthecompressed:fluorite_block_2x"
+  "allthecompressed:fluorite_block_3x"
+  "allthecompressed:fluorite_block_4x"
+  "allthecompressed:fluorite_block_5x"
+  "allthecompressed:fluorite_block_6x"
+  "allthecompressed:fluorite_block_7x"
+  "allthecompressed:fluorite_block_8x"
+  "allthecompressed:fluorite_block_9x"
   ... (18 entries)
+  "allthecompressed:gray_concrete_1x"
+  "allthecompressed:gray_concrete_2x"
+  "allthecompressed:gray_concrete_3x"
+  "allthecompressed:gray_concrete_4x"
+  "allthecompressed:gray_concrete_5x"
+  "allthecompressed:gray_concrete_6x"
+  "allthecompressed:gray_concrete_7x"
+  "allthecompressed:gray_concrete_8x"
+  "allthecompressed:gray_concrete_9x"
+  "allthecompressed:green_concrete_1x"
+  "allthecompressed:green_concrete_2x"
+  "allthecompressed:green_concrete_3x"
+  "allthecompressed:green_concrete_4x"
+  "allthecompressed:green_concrete_5x"
+  "allthecompressed:green_concrete_6x"
+  "allthecompressed:green_concrete_7x"
+  "allthecompressed:green_concrete_8x"
+  "allthecompressed:green_concrete_9x"
   ... (27 entries)
+  "allthecompressed:kivi_1x"
+  "allthecompressed:kivi_2x"
+  "allthecompressed:kivi_3x"
+  "allthecompressed:kivi_4x"
+  "allthecompressed:kivi_5x"
+  "allthecompressed:kivi_6x"
+  "allthecompressed:kivi_7x"
+  "allthecompressed:kivi_8x"
+  "allthecompressed:kivi_9x"
   ... (18 entries)
+  "allthecompressed:light_blue_concrete_1x"
+  "allthecompressed:light_blue_concrete_2x"
+  "allthecompressed:light_blue_concrete_3x"
+  "allthecompressed:light_blue_concrete_4x"
+  "allthecompressed:light_blue_concrete_5x"
+  "allthecompressed:light_blue_concrete_6x"
+  "allthecompressed:light_blue_concrete_7x"
+  "allthecompressed:light_blue_concrete_8x"
+  "allthecompressed:light_blue_concrete_9x"
+  "allthecompressed:light_gray_concrete_1x"
+  "allthecompressed:light_gray_concrete_2x"
+  "allthecompressed:light_gray_concrete_3x"
+  "allthecompressed:light_gray_concrete_4x"
+  "allthecompressed:light_gray_concrete_5x"
+  "allthecompressed:light_gray_concrete_6x"
+  "allthecompressed:light_gray_concrete_7x"
+  "allthecompressed:light_gray_concrete_8x"
+  "allthecompressed:light_gray_concrete_9x"
+  "allthecompressed:lime_concrete_1x"
+  "allthecompressed:lime_concrete_2x"
+  "allthecompressed:lime_concrete_3x"
+  "allthecompressed:lime_concrete_4x"
+  "allthecompressed:lime_concrete_5x"
+  "allthecompressed:lime_concrete_6x"
+  "allthecompressed:lime_concrete_7x"
+  "allthecompressed:lime_concrete_8x"
+  "allthecompressed:lime_concrete_9x"
   ... (9 entries)
+  "allthecompressed:magenta_concrete_1x"
+  "allthecompressed:magenta_concrete_2x"
+  "allthecompressed:magenta_concrete_3x"
+  "allthecompressed:magenta_concrete_4x"
+  "allthecompressed:magenta_concrete_5x"
+  "allthecompressed:magenta_concrete_6x"
+  "allthecompressed:magenta_concrete_7x"
+  "allthecompressed:magenta_concrete_8x"
+  "allthecompressed:magenta_concrete_9x"
   ... (63 entries)
+  "allthecompressed:orange_concrete_1x"
+  "allthecompressed:orange_concrete_2x"
+  "allthecompressed:orange_concrete_3x"
+  "allthecompressed:orange_concrete_4x"
+  "allthecompressed:orange_concrete_5x"
+  "allthecompressed:orange_concrete_6x"
+  "allthecompressed:orange_concrete_7x"
+  "allthecompressed:orange_concrete_8x"
+  "allthecompressed:orange_concrete_9x"
   ... (9 entries)
+  "allthecompressed:peridot_block_1x"
+  "allthecompressed:peridot_block_2x"
+  "allthecompressed:peridot_block_3x"
+  "allthecompressed:peridot_block_4x"
+  "allthecompressed:peridot_block_5x"
+  "allthecompressed:peridot_block_6x"
+  "allthecompressed:peridot_block_7x"
+  "allthecompressed:peridot_block_8x"
+  "allthecompressed:peridot_block_9x"
+  "allthecompressed:pink_concrete_1x"
+  "allthecompressed:pink_concrete_2x"
+  "allthecompressed:pink_concrete_3x"
+  "allthecompressed:pink_concrete_4x"
+  "allthecompressed:pink_concrete_5x"
+  "allthecompressed:pink_concrete_6x"
+  "allthecompressed:pink_concrete_7x"
+  "allthecompressed:pink_concrete_8x"
+  "allthecompressed:pink_concrete_9x"
   ... (18 entries)
+  "allthecompressed:purple_concrete_1x"
+  "allthecompressed:purple_concrete_2x"
+  "allthecompressed:purple_concrete_3x"
+  "allthecompressed:purple_concrete_4x"
+  "allthecompressed:purple_concrete_5x"
+  "allthecompressed:purple_concrete_6x"
+  "allthecompressed:purple_concrete_7x"
+  "allthecompressed:purple_concrete_8x"
+  "allthecompressed:purple_concrete_9x"
   ... (153 entries)
+  "allthecompressed:red_concrete_1x"
+  "allthecompressed:red_concrete_2x"
+  "allthecompressed:red_concrete_3x"
+  "allthecompressed:red_concrete_4x"
+  "allthecompressed:red_concrete_5x"
+  "allthecompressed:red_concrete_6x"
+  "allthecompressed:red_concrete_7x"
+  "allthecompressed:red_concrete_8x"
+  "allthecompressed:red_concrete_9x"
   ... (18 entries)
+  "allthecompressed:ruby_block_1x"
+  "allthecompressed:ruby_block_2x"
+  "allthecompressed:ruby_block_3x"
+  "allthecompressed:ruby_block_4x"
+  "allthecompressed:ruby_block_5x"
+  "allthecompressed:ruby_block_6x"
+  "allthecompressed:ruby_block_7x"
+  "allthecompressed:ruby_block_8x"
+  "allthecompressed:ruby_block_9x"
+  "allthecompressed:salt_block_1x"
+  "allthecompressed:salt_block_2x"
+  "allthecompressed:salt_block_3x"
+  "allthecompressed:salt_block_4x"
+  "allthecompressed:salt_block_5x"
+  "allthecompressed:salt_block_6x"
+  "allthecompressed:salt_block_7x"
+  "allthecompressed:salt_block_8x"
+  "allthecompressed:salt_block_9x"
+  "allthecompressed:sapphire_block_1x"
+  "allthecompressed:sapphire_block_2x"
+  "allthecompressed:sapphire_block_3x"
+  "allthecompressed:sapphire_block_4x"
+  "allthecompressed:sapphire_block_5x"
+  "allthecompressed:sapphire_block_6x"
+  "allthecompressed:sapphire_block_7x"
+  "allthecompressed:sapphire_block_8x"
+  "allthecompressed:sapphire_block_9x"
   ... (108 entries)
+  "allthecompressed:sulfur_block_1x"
+  "allthecompressed:sulfur_block_2x"
+  "allthecompressed:sulfur_block_3x"
+  "allthecompressed:sulfur_block_4x"
+  "allthecompressed:sulfur_block_5x"
+  "allthecompressed:sulfur_block_6x"
+  "allthecompressed:sulfur_block_7x"
+  "allthecompressed:sulfur_block_8x"
+  "allthecompressed:sulfur_block_9x"
   ... (99 entries)
+  "allthecompressed:white_concrete_1x"
+  "allthecompressed:white_concrete_2x"
+  "allthecompressed:white_concrete_3x"
+  "allthecompressed:white_concrete_4x"
+  "allthecompressed:white_concrete_5x"
+  "allthecompressed:white_concrete_6x"
+  "allthecompressed:white_concrete_7x"
+  "allthecompressed:white_concrete_8x"
+  "allthecompressed:white_concrete_9x"
+  "allthecompressed:xychorium_storage_blue_1x"
+  "allthecompressed:xychorium_storage_blue_2x"
+  "allthecompressed:xychorium_storage_blue_3x"
+  "allthecompressed:xychorium_storage_blue_4x"
+  "allthecompressed:xychorium_storage_blue_5x"
+  "allthecompressed:xychorium_storage_blue_6x"
+  "allthecompressed:xychorium_storage_blue_7x"
+  "allthecompressed:xychorium_storage_blue_8x"
+  "allthecompressed:xychorium_storage_blue_9x"
+  "allthecompressed:xychorium_storage_dark_1x"
+  "allthecompressed:xychorium_storage_dark_2x"
+  "allthecompressed:xychorium_storage_dark_3x"
+  "allthecompressed:xychorium_storage_dark_4x"
+  "allthecompressed:xychorium_storage_dark_5x"
+  "allthecompressed:xychorium_storage_dark_6x"
+  "allthecompressed:xychorium_storage_dark_7x"
+  "allthecompressed:xychorium_storage_dark_8x"
+  "allthecompressed:xychorium_storage_dark_9x"
+  "allthecompressed:xychorium_storage_green_1x"
+  "allthecompressed:xychorium_storage_green_2x"
+  "allthecompressed:xychorium_storage_green_3x"
+  "allthecompressed:xychorium_storage_green_4x"
+  "allthecompressed:xychorium_storage_green_5x"
+  "allthecompressed:xychorium_storage_green_6x"
+  "allthecompressed:xychorium_storage_green_7x"
+  "allthecompressed:xychorium_storage_green_8x"
+  "allthecompressed:xychorium_storage_green_9x"
+  "allthecompressed:xychorium_storage_light_1x"
+  "allthecompressed:xychorium_storage_light_2x"
+  "allthecompressed:xychorium_storage_light_3x"
+  "allthecompressed:xychorium_storage_light_4x"
+  "allthecompressed:xychorium_storage_light_5x"
+  "allthecompressed:xychorium_storage_light_6x"
+  "allthecompressed:xychorium_storage_light_7x"
+  "allthecompressed:xychorium_storage_light_8x"
+  "allthecompressed:xychorium_storage_light_9x"
+  "allthecompressed:xychorium_storage_red_1x"
+  "allthecompressed:xychorium_storage_red_2x"
+  "allthecompressed:xychorium_storage_red_3x"
+  "allthecompressed:xychorium_storage_red_4x"
+  "allthecompressed:xychorium_storage_red_5x"
+  "allthecompressed:xychorium_storage_red_6x"
+  "allthecompressed:xychorium_storage_red_7x"
+  "allthecompressed:xychorium_storage_red_8x"
+  "allthecompressed:xychorium_storage_red_9x"
+  "allthecompressed:yellow_concrete_1x"
+  "allthecompressed:yellow_concrete_2x"
+  "allthecompressed:yellow_concrete_3x"
+  "allthecompressed:yellow_concrete_4x"
+  "allthecompressed:yellow_concrete_5x"
+  "allthecompressed:yellow_concrete_6x"
+  "allthecompressed:yellow_concrete_7x"
+  "allthecompressed:yellow_concrete_8x"
+  "allthecompressed:yellow_concrete_9x"
   ... (12 entries)
-  "allthemodium:allthemodium_source_jar"
+  "allthemodium:allthemodium_source_jar?"
   ... (474 entries)
+  "cataclysm:abyssal_egg"
+  "cataclysm:ancient_metal_block"
+  "cataclysm:azure_seastone"
+  "cataclysm:azure_seastone_brick_slab"
+  "cataclysm:azure_seastone_brick_stairs"
+  "cataclysm:azure_seastone_brick_wall"
+  "cataclysm:azure_seastone_bricks"
+  "cataclysm:azure_seastone_fence"
+  "cataclysm:azure_seastone_pillar"
+  "cataclysm:azure_seastone_pillar_wall"
+  "cataclysm:azure_seastone_slab"
+  "cataclysm:azure_seastone_stairs"
+  "cataclysm:azure_seastone_tiles"
+  "cataclysm:azure_seastone_wall"
+  "cataclysm:black_steel_block"
+  "cataclysm:black_steel_fence"
+  "cataclysm:black_steel_wall"
+  "cataclysm:blackstone_pillar"
+  "cataclysm:chiseled_azure_seastone"
+  "cataclysm:chiseled_azure_seastone_pillar"
+  "cataclysm:chiseled_azure_seastone_pillar_wall"
+  "cataclysm:chiseled_end_stone_bricks"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:chiseled_purpur_block"
+  "cataclysm:chiseled_stone_brick_pillar"
+  "cataclysm:cursium_block"
+  "cataclysm:end_stone_pillar"
+  "cataclysm:end_stone_teleport_trap_bricks"
+  "cataclysm:enderite_block"
+  "cataclysm:frosted_stone_brick_slab"
+  "cataclysm:frosted_stone_brick_stairs"
+  "cataclysm:frosted_stone_brick_wall"
+  "cataclysm:frosted_stone_bricks"
+  "cataclysm:ignitium_block"
+  "cataclysm:mechanical_fusion_anvil"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:pointed_icicle"
+  "cataclysm:polished_azure_seastone"
+  "cataclysm:polished_azure_seastone_slab"
+  "cataclysm:polished_azure_seastone_stairs"
+  "cataclysm:polished_azure_seastone_wall"
+  "cataclysm:polished_end_stone"
+  "cataclysm:polished_end_stone_slab"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:polished_obsidian"
+  "cataclysm:polished_sandstone"
+  "cataclysm:prismarine_brick_fence"
+  "cataclysm:prismarine_brick_wall"
+  "cataclysm:purpur_void_rune_trap_block"
+  "cataclysm:purpur_wall"
+  "cataclysm:quartz_brick_wall"
+  "cataclysm:sandstone_falling_trap"
+  "cataclysm:sandstone_ignite_trap"
+  "cataclysm:sandstone_poison_dart_trap"
+  "cataclysm:stone_pillar"
+  "cataclysm:stone_tile_slab"
+  "cataclysm:stone_tile_stairs"
+  "cataclysm:stone_tile_wall"
+  "cataclysm:stone_tiles"
+  "cataclysm:void_crystal"
+  "cataclysm:void_infused_end_stone_bricks"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_stone"
+  "cataclysm:witherite_block"
   ... (8296 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/shovel</summary>

```diff
 [
   ... (45 entries)
+  "allthecompressed:mycelium_1x"
+  "allthecompressed:mycelium_2x"
+  "allthecompressed:mycelium_3x"
+  "allthecompressed:mycelium_4x"
+  "allthecompressed:mycelium_5x"
+  "allthecompressed:mycelium_6x"
+  "allthecompressed:mycelium_7x"
+  "allthecompressed:mycelium_8x"
+  "allthecompressed:mycelium_9x"
   ... (340 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_diamond_tool</summary>

```diff
 [
   ... (39 entries)
+  "allthecompressed:raw_osmium_block_1x"
+  "allthecompressed:raw_osmium_block_2x"
+  "allthecompressed:raw_osmium_block_3x"
+  "allthecompressed:raw_osmium_block_4x"
+  "allthecompressed:raw_osmium_block_5x"
+  "allthecompressed:raw_osmium_block_6x"
+  "allthecompressed:raw_osmium_block_7x"
+  "allthecompressed:raw_osmium_block_8x"
+  "allthecompressed:raw_osmium_block_9x"
   ... (9 entries)
-  "allthecompressed:raw_uranium_block_1x"
-  "allthecompressed:raw_uranium_block_2x"
-  "allthecompressed:raw_uranium_block_3x"
-  "allthecompressed:raw_uranium_block_4x"
-  "allthecompressed:raw_uranium_block_5x"
-  "allthecompressed:raw_uranium_block_6x"
-  "allthecompressed:raw_uranium_block_7x"
-  "allthecompressed:raw_uranium_block_8x"
-  "allthecompressed:raw_uranium_block_9x"
+  "cataclysm:ancient_metal_block"
+  "cataclysm:black_steel_block"
+  "cataclysm:black_steel_fence"
+  "cataclysm:black_steel_wall"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:cursium_block"
+  "cataclysm:enderite_block"
+  "cataclysm:ignitium_block"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:polished_obsidian"
+  "cataclysm:void_crystal"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_stone"
+  "cataclysm:witherite_block"
   ... (209 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_iron_tool</summary>

```diff
 [
   ... (86 entries)
-  "allthecompressed:raw_lead_block_1x"
-  "allthecompressed:raw_lead_block_2x"
-  "allthecompressed:raw_lead_block_3x"
-  "allthecompressed:raw_lead_block_4x"
-  "allthecompressed:raw_lead_block_5x"
-  "allthecompressed:raw_lead_block_6x"
-  "allthecompressed:raw_lead_block_7x"
-  "allthecompressed:raw_lead_block_8x"
-  "allthecompressed:raw_lead_block_9x"
-  "allthecompressed:raw_osmium_block_1x"
-  "allthecompressed:raw_osmium_block_2x"
-  "allthecompressed:raw_osmium_block_3x"
-  "allthecompressed:raw_osmium_block_4x"
-  "allthecompressed:raw_osmium_block_5x"
-  "allthecompressed:raw_osmium_block_6x"
-  "allthecompressed:raw_osmium_block_7x"
-  "allthecompressed:raw_osmium_block_8x"
-  "allthecompressed:raw_osmium_block_9x"
-  "allthecompressed:raw_silver_block_1x"
-  "allthecompressed:raw_silver_block_2x"
-  "allthecompressed:raw_silver_block_3x"
-  "allthecompressed:raw_silver_block_4x"
-  "allthecompressed:raw_silver_block_5x"
-  "allthecompressed:raw_silver_block_6x"
-  "allthecompressed:raw_silver_block_7x"
-  "allthecompressed:raw_silver_block_8x"
-  "allthecompressed:raw_silver_block_9x"
+  "allthecompressed:raw_nickel_block_1x"
+  "allthecompressed:raw_nickel_block_2x"
+  "allthecompressed:raw_nickel_block_3x"
+  "allthecompressed:raw_nickel_block_4x"
+  "allthecompressed:raw_nickel_block_5x"
+  "allthecompressed:raw_nickel_block_6x"
+  "allthecompressed:raw_nickel_block_7x"
+  "allthecompressed:raw_nickel_block_8x"
+  "allthecompressed:raw_nickel_block_9x"
+  "allthecompressed:raw_uranium_block_1x"
+  "allthecompressed:raw_uranium_block_2x"
+  "allthecompressed:raw_uranium_block_3x"
+  "allthecompressed:raw_uranium_block_4x"
+  "allthecompressed:raw_uranium_block_5x"
+  "allthecompressed:raw_uranium_block_6x"
+  "allthecompressed:raw_uranium_block_7x"
+  "allthecompressed:raw_uranium_block_8x"
+  "allthecompressed:raw_uranium_block_9x"
   ... (577 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (167 entries)
-  "allthecompressed:raw_nickel_block_1x"
-  "allthecompressed:raw_nickel_block_2x"
-  "allthecompressed:raw_nickel_block_3x"
-  "allthecompressed:raw_nickel_block_4x"
-  "allthecompressed:raw_nickel_block_5x"
-  "allthecompressed:raw_nickel_block_6x"
-  "allthecompressed:raw_nickel_block_7x"
-  "allthecompressed:raw_nickel_block_8x"
-  "allthecompressed:raw_nickel_block_9x"
+  "allthecompressed:raw_lead_block_1x"
+  "allthecompressed:raw_lead_block_2x"
+  "allthecompressed:raw_lead_block_3x"
+  "allthecompressed:raw_lead_block_4x"
+  "allthecompressed:raw_lead_block_5x"
+  "allthecompressed:raw_lead_block_6x"
+  "allthecompressed:raw_lead_block_7x"
+  "allthecompressed:raw_lead_block_8x"
+  "allthecompressed:raw_lead_block_9x"
+  "allthecompressed:raw_silver_block_1x"
+  "allthecompressed:raw_silver_block_2x"
+  "allthecompressed:raw_silver_block_3x"
+  "allthecompressed:raw_silver_block_4x"
+  "allthecompressed:raw_silver_block_5x"
+  "allthecompressed:raw_silver_block_6x"
+  "allthecompressed:raw_silver_block_7x"
+  "allthecompressed:raw_silver_block_8x"
+  "allthecompressed:raw_silver_block_9x"
   ... (1360 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:planks</summary>

```diff
 [
   ... (30 entries)
+  "cataclysm:chorus_planks"
   ... (663 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:slabs</summary>

```diff
 [
   ... (76 entries)
+  "cataclysm:azure_seastone_brick_slab"
+  "cataclysm:azure_seastone_slab"
+  "cataclysm:frosted_stone_brick_slab"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:polished_azure_seastone_slab"
+  "cataclysm:polished_end_stone_slab"
   ... (267 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:stairs</summary>

```diff
 [
   ... (70 entries)
+  "cataclysm:azure_seastone_brick_stairs"
+  "cataclysm:azure_seastone_stairs"
+  "cataclysm:frosted_stone_brick_stairs"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:polished_azure_seastone_stairs"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:stone_tile_stairs"
   ... (239 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:walls</summary>

```diff
 [
   ... (52 entries)
+  "cataclysm:azure_seastone_brick_wall"
+  "cataclysm:azure_seastone_pillar_wall"
+  "cataclysm:azure_seastone_wall"
+  "cataclysm:black_steel_wall"
+  "cataclysm:chiseled_azure_seastone_pillar_wall"
+  "cataclysm:frosted_stone_brick_wall"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:polished_azure_seastone_wall"
+  "cataclysm:prismarine_brick_wall"
+  "cataclysm:purpur_wall"
+  "cataclysm:quartz_brick_wall"
+  "cataclysm:stone_tile_wall"
   ... (510 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wither_immune</summary>

```diff
 [
   ... (3 entries)
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:cursium_block"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "cataclysm:enderite_block"
+  "cataclysm:ignitium_block"
+  "cataclysm:witherite_block"
   ... (709 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_fences</summary>

```diff
 [
   ... (36 entries)
+  "cataclysm:chorus_fence"
   ... (272 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_slabs</summary>

```diff
 [
   ... (29 entries)
+  "cataclysm:chorus_slab"
   ... (243 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_stairs</summary>

```diff
 [
   ... (29 entries)
+  "cataclysm:chorus_stairs"
   ... (244 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:always_hurts_ender_dragons</summary>

```diff
 [
   ... (10 entries)
+  "cataclysm:maledictio_sagitta"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_armor</summary>

```diff
 [
   ... (12 entries)
+  "cataclysm:abyssal_burn"
+  "cataclysm:deathlaser"
+  "cataclysm:emp"
+  "cataclysm:maledictio_magicae"
   ... (68 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_cooldown</summary>

```diff
 [
+  "cataclysm:maledictio_sagitta"
+  "cataclysm:shredder"
+  "cataclysm:sword_dance"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_shield</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:maledictio"
+  "cataclysm:maledictio_magicae"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_explosion</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:shredder"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:is_projectile</summary>

```diff
 [
+  "cataclysm:laser"
+  "cataclysm:maledictio_sagitta"
   ... (21 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:no_knockback</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:abyssal_burn"
+  "cataclysm:shredder"
   ... (38 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:abyssal_burn"
+  "cataclysm:deathlaser"
+  "cataclysm:emp"
+  "cataclysm:laser"
+  "cataclysm:maledictio"
+  "cataclysm:maledictio_magicae"
+  "cataclysm:maledictio_sagitta"
+  "cataclysm:shredder"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/alexscaves:resists_tremorsaurus_roar</summary>

```diff
 [
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:aquatic</summary>

```diff
 [
   ... (32 entries)
+  "cataclysm:coralssus"
+  "cataclysm:deepling"
+  "cataclysm:deepling_angler"
+  "cataclysm:deepling_brute"
+  "cataclysm:deepling_priest"
+  "cataclysm:deepling_warlock"
+  "cataclysm:the_baby_leviathan"
+  "cataclysm:the_leviathan"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:arthropod</summary>

```diff
 [
+  "cataclysm:amethyst_crab"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:can_breathe_under_water</summary>

```diff
 [
   ... (4 entries)
+  "cataclysm:coral_golem"
+  "cataclysm:coralssus"
+  "cataclysm:deepling"
+  "cataclysm:deepling_angler"
+  "cataclysm:deepling_brute"
+  "cataclysm:deepling_priest"
+  "cataclysm:deepling_warlock"
+  "cataclysm:the_baby_leviathan"
+  "cataclysm:the_leviathan"
   ... (31 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:fall_damage_immune</summary>

```diff
 [
+  "cataclysm:amethyst_crab"
+  "cataclysm:ancient_ancient_remnant"
+  "cataclysm:ancient_remnant"
+  "cataclysm:aptrgangr"
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:ignited_berserker"
+  "cataclysm:ignited_revenant"
+  "cataclysm:kobolediator"
+  "cataclysm:koboleton"
+  "cataclysm:maledictus"
+  "cataclysm:modern_remnant"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+  "cataclysm:the_prowler"
+  "cataclysm:the_watcher"
+  "cataclysm:wadjet"
   ... (48 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:freeze_immune_entity_types</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:ancient_ancient_remnant"
+  "cataclysm:ancient_remnant"
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
   ... (18 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:impact_projectiles</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:abyss_orb"
+  "cataclysm:amethyst_cluster_projectile"
+  "cataclysm:ancient_desert_stele"
+  "cataclysm:ignis_abyss_fireball"
+  "cataclysm:ignis_fireball"
+  "cataclysm:laser_beam"
+  "cataclysm:lava_bomb"
+  "cataclysm:lionfish_spike"
+  "cataclysm:phantom_arrow"
+  "cataclysm:tidal_hook"
+  "cataclysm:void_scatter_arrow"
+  "cataclysm:void_shard"
+  "cataclysm:wither_homing_missile"
+  "cataclysm:wither_howitzer"
+  "cataclysm:wither_missile"
   ... (35 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:powder_snow_walkable_mobs</summary>

```diff
 [
+  "cataclysm:ancient_ancient_remnant"
+  "cataclysm:ancient_remnant"
+  "cataclysm:aptrgangr"
+  "cataclysm:draugr"
+  "cataclysm:elite_draugr"
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:ignis"
+  "cataclysm:maledictus"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:royal_draugr"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
   ... (29 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:undead</summary>

```diff
 [
   ... (5 entries)
+  "cataclysm:ancient_ancient_remnant"
+  "cataclysm:ancient_remnant"
+  "cataclysm:aptrgangr"
+  "cataclysm:draugr"
+  "cataclysm:elite_draugr"
+  "cataclysm:ignited_berserker"
+  "cataclysm:ignited_revenant"
+  "cataclysm:kobolediator"
+  "cataclysm:koboleton"
+  "cataclysm:maledictus"
+  "cataclysm:modern_remnant"
+  "cataclysm:royal_draugr"
+  "cataclysm:wadjet"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/alexscaves:ferromagnetic_items</summary>

```diff
 [
   ... (3 entries)
+  "cataclysm:bulwark_of_the_flame"
+  "cataclysm:ignitium_block"
+  "cataclysm:ignitium_boots"
+  "cataclysm:ignitium_chestplate"
+  "cataclysm:ignitium_elytra_chestplate"
+  "cataclysm:ignitium_helmet"
+  "cataclysm:ignitium_ingot"
+  "cataclysm:ignitium_leggings"
+  "cataclysm:infernal_forge"
+  "cataclysm:laser_gatling"
+  "cataclysm:meat_shredder"
+  "cataclysm:monstrous_helm"
+  "cataclysm:the_incinerator"
+  "cataclysm:void_assault_shoulder_weapon"
+  "cataclysm:void_forge"
+  "cataclysm:wither_assault_shoulder_weapon"
+  "cataclysm:witherite_block"
+  "cataclysm:witherite_ingot"
   ... (46 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:1x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_1x"
   ... (4 entries)
+  "allthecompressed:black_concrete_1x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_1x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_1x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_1x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_1x"
+  "allthecompressed:green_concrete_1x"
   ... (9 entries)
+  "allthecompressed:kivi_1x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_1x"
+  "allthecompressed:light_gray_concrete_1x"
+  "allthecompressed:lime_concrete_1x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_1x"
   ... (5 entries)
+  "allthecompressed:mycelium_1x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_1x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_1x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_1x"
   ... (17 entries)
+  "allthecompressed:red_concrete_1x"
   ... (38 entries)
+  "allthecompressed:white_concrete_1x"
+  "allthecompressed:xychorium_storage_blue_1x"
+  "allthecompressed:xychorium_storage_dark_1x"
+  "allthecompressed:xychorium_storage_green_1x"
+  "allthecompressed:xychorium_storage_light_1x"
+  "allthecompressed:xychorium_storage_red_1x"
+  "allthecompressed:yellow_concrete_1x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:2x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_2x"
   ... (4 entries)
+  "allthecompressed:black_concrete_2x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_2x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_2x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_2x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_2x"
+  "allthecompressed:green_concrete_2x"
   ... (9 entries)
+  "allthecompressed:kivi_2x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_2x"
+  "allthecompressed:light_gray_concrete_2x"
+  "allthecompressed:lime_concrete_2x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_2x"
   ... (5 entries)
+  "allthecompressed:mycelium_2x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_2x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_2x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_2x"
   ... (17 entries)
+  "allthecompressed:red_concrete_2x"
   ... (38 entries)
+  "allthecompressed:white_concrete_2x"
+  "allthecompressed:xychorium_storage_blue_2x"
+  "allthecompressed:xychorium_storage_dark_2x"
+  "allthecompressed:xychorium_storage_green_2x"
+  "allthecompressed:xychorium_storage_light_2x"
+  "allthecompressed:xychorium_storage_red_2x"
+  "allthecompressed:yellow_concrete_2x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:3x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_3x"
   ... (4 entries)
+  "allthecompressed:black_concrete_3x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_3x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_3x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_3x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_3x"
+  "allthecompressed:green_concrete_3x"
   ... (9 entries)
+  "allthecompressed:kivi_3x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_3x"
+  "allthecompressed:light_gray_concrete_3x"
+  "allthecompressed:lime_concrete_3x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_3x"
   ... (5 entries)
+  "allthecompressed:mycelium_3x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_3x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_3x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_3x"
   ... (17 entries)
+  "allthecompressed:red_concrete_3x"
   ... (38 entries)
+  "allthecompressed:white_concrete_3x"
+  "allthecompressed:xychorium_storage_blue_3x"
+  "allthecompressed:xychorium_storage_dark_3x"
+  "allthecompressed:xychorium_storage_green_3x"
+  "allthecompressed:xychorium_storage_light_3x"
+  "allthecompressed:xychorium_storage_red_3x"
+  "allthecompressed:yellow_concrete_3x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:4x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_4x"
   ... (4 entries)
+  "allthecompressed:black_concrete_4x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_4x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_4x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_4x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_4x"
+  "allthecompressed:green_concrete_4x"
   ... (9 entries)
+  "allthecompressed:kivi_4x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_4x"
+  "allthecompressed:light_gray_concrete_4x"
+  "allthecompressed:lime_concrete_4x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_4x"
   ... (5 entries)
+  "allthecompressed:mycelium_4x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_4x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_4x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_4x"
   ... (17 entries)
+  "allthecompressed:red_concrete_4x"
   ... (38 entries)
+  "allthecompressed:white_concrete_4x"
+  "allthecompressed:xychorium_storage_blue_4x"
+  "allthecompressed:xychorium_storage_dark_4x"
+  "allthecompressed:xychorium_storage_green_4x"
+  "allthecompressed:xychorium_storage_light_4x"
+  "allthecompressed:xychorium_storage_red_4x"
+  "allthecompressed:yellow_concrete_4x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:5x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_5x"
   ... (4 entries)
+  "allthecompressed:black_concrete_5x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_5x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_5x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_5x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_5x"
+  "allthecompressed:green_concrete_5x"
   ... (9 entries)
+  "allthecompressed:kivi_5x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_5x"
+  "allthecompressed:light_gray_concrete_5x"
+  "allthecompressed:lime_concrete_5x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_5x"
   ... (5 entries)
+  "allthecompressed:mycelium_5x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_5x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_5x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_5x"
   ... (17 entries)
+  "allthecompressed:red_concrete_5x"
   ... (38 entries)
+  "allthecompressed:white_concrete_5x"
+  "allthecompressed:xychorium_storage_blue_5x"
+  "allthecompressed:xychorium_storage_dark_5x"
+  "allthecompressed:xychorium_storage_green_5x"
+  "allthecompressed:xychorium_storage_light_5x"
+  "allthecompressed:xychorium_storage_red_5x"
+  "allthecompressed:yellow_concrete_5x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:6x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_6x"
   ... (4 entries)
+  "allthecompressed:black_concrete_6x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_6x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_6x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_6x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_6x"
+  "allthecompressed:green_concrete_6x"
   ... (9 entries)
+  "allthecompressed:kivi_6x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_6x"
+  "allthecompressed:light_gray_concrete_6x"
+  "allthecompressed:lime_concrete_6x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_6x"
   ... (5 entries)
+  "allthecompressed:mycelium_6x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_6x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_6x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_6x"
   ... (17 entries)
+  "allthecompressed:red_concrete_6x"
   ... (38 entries)
+  "allthecompressed:white_concrete_6x"
+  "allthecompressed:xychorium_storage_blue_6x"
+  "allthecompressed:xychorium_storage_dark_6x"
+  "allthecompressed:xychorium_storage_green_6x"
+  "allthecompressed:xychorium_storage_light_6x"
+  "allthecompressed:xychorium_storage_red_6x"
+  "allthecompressed:yellow_concrete_6x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:7x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_7x"
   ... (4 entries)
+  "allthecompressed:black_concrete_7x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_7x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_7x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_7x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_7x"
+  "allthecompressed:green_concrete_7x"
   ... (9 entries)
+  "allthecompressed:kivi_7x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_7x"
+  "allthecompressed:light_gray_concrete_7x"
+  "allthecompressed:lime_concrete_7x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_7x"
   ... (5 entries)
+  "allthecompressed:mycelium_7x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_7x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_7x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_7x"
   ... (17 entries)
+  "allthecompressed:red_concrete_7x"
   ... (38 entries)
+  "allthecompressed:white_concrete_7x"
+  "allthecompressed:xychorium_storage_blue_7x"
+  "allthecompressed:xychorium_storage_dark_7x"
+  "allthecompressed:xychorium_storage_green_7x"
+  "allthecompressed:xychorium_storage_light_7x"
+  "allthecompressed:xychorium_storage_red_7x"
+  "allthecompressed:yellow_concrete_7x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:8x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_8x"
   ... (4 entries)
+  "allthecompressed:black_concrete_8x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_8x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_8x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_8x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_8x"
+  "allthecompressed:green_concrete_8x"
   ... (9 entries)
+  "allthecompressed:kivi_8x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_8x"
+  "allthecompressed:light_gray_concrete_8x"
+  "allthecompressed:lime_concrete_8x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_8x"
   ... (5 entries)
+  "allthecompressed:mycelium_8x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_8x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_8x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_8x"
   ... (17 entries)
+  "allthecompressed:red_concrete_8x"
   ... (38 entries)
+  "allthecompressed:white_concrete_8x"
+  "allthecompressed:xychorium_storage_blue_8x"
+  "allthecompressed:xychorium_storage_dark_8x"
+  "allthecompressed:xychorium_storage_green_8x"
+  "allthecompressed:xychorium_storage_light_8x"
+  "allthecompressed:xychorium_storage_red_8x"
+  "allthecompressed:yellow_concrete_8x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/allthecompressed:9x</summary>

```diff
 [
   ... (8 entries)
+  "allthecompressed:antimatter_block_9x"
   ... (4 entries)
+  "allthecompressed:black_concrete_9x"
   ... (3 entries)
+  "allthecompressed:blue_concrete_9x"
   ... (4 entries)
+  "allthecompressed:brown_concrete_9x"
   ... (13 entries)
+  "allthecompressed:cyan_concrete_9x"
   ... (27 entries)
+  "allthecompressed:gray_concrete_9x"
+  "allthecompressed:green_concrete_9x"
   ... (9 entries)
+  "allthecompressed:kivi_9x"
   ... (2 entries)
+  "allthecompressed:light_blue_concrete_9x"
+  "allthecompressed:light_gray_concrete_9x"
+  "allthecompressed:lime_concrete_9x"
   ... (1 entries)
+  "allthecompressed:magenta_concrete_9x"
   ... (5 entries)
+  "allthecompressed:mycelium_9x"
   ... (9 entries)
+  "allthecompressed:orange_concrete_9x"
   ... (3 entries)
+  "allthecompressed:pink_concrete_9x"
   ... (4 entries)
+  "allthecompressed:purple_concrete_9x"
   ... (17 entries)
+  "allthecompressed:red_concrete_9x"
   ... (38 entries)
+  "allthecompressed:white_concrete_9x"
+  "allthecompressed:xychorium_storage_blue_9x"
+  "allthecompressed:xychorium_storage_dark_9x"
+  "allthecompressed:xychorium_storage_green_9x"
+  "allthecompressed:xychorium_storage_light_9x"
+  "allthecompressed:xychorium_storage_red_9x"
+  "allthecompressed:yellow_concrete_9x"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_logs</summary>

```diff
 [
   ... (35 entries)
+  "minecraft:stripped_crimson_stem"
   ... (5 entries)
+  "minecraft:stripped_warped_stem"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_woods</summary>

```diff
 [
   ... (33 entries)
+  "minecraft:stripped_crimson_hyphae"
   ... (5 entries)
+  "minecraft:stripped_warped_hyphae"
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools</summary>

```diff
 [
   ... (14 entries)
+  "#c:tools/wrench"
   ... (34 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:hands</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:blazing_grips"
+  "cataclysm:sticky_gloves"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:head</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:aptrgangr_head"
+  "cataclysm:draugr_head"
+  "cataclysm:kobolediator_skull"
   ... (24 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:arrows</summary>

```diff
 [
+  "cataclysm:void_scatter_arrow"
   ... (12 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:axes</summary>

```diff
 [
   ... (16 entries)
+  "cataclysm:black_steel_axe"
+  "cataclysm:meat_shredder"
+  "cataclysm:soul_render"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_armor</summary>

```diff
 [
   ... (21 entries)
+  "cataclysm:bloom_stone_pauldrons"
+  "cataclysm:bone_reptile_chestplate"
+  "cataclysm:cursium_chestplate"
+  "cataclysm:ignitium_chestplate"
+  "cataclysm:ignitium_elytra_chestplate"
   ... (59 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:cluster_max_harvestables</summary>

```diff
 [
   ... (6 entries)
+  "cataclysm:infernal_forge"
+  "cataclysm:void_forge"
   ... (65 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (56 entries)
+  "cataclysm:black_steel_targe"
   ... (114 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/trident</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_spear"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:fishes</summary>

```diff
 [
   ... (28 entries)
+  "cataclysm:lionfish"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:foot_armor</summary>

```diff
 [
   ... (21 entries)
+  "cataclysm:cursium_boots"
+  "cataclysm:ignitium_boots"
   ... (55 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:head_armor</summary>

```diff
 [
   ... (21 entries)
+  "cataclysm:bone_reptile_helmet"
+  "cataclysm:cursium_helmet"
+  "cataclysm:ignitium_helmet"
+  "cataclysm:monstrous_helm"
   ... (63 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:hoes</summary>

```diff
 [
   ... (10 entries)
+  "cataclysm:black_steel_hoe"
   ... (45 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:leg_armor</summary>

```diff
 [
   ... (21 entries)
+  "cataclysm:cursium_leggings"
+  "cataclysm:ignitium_leggings"
   ... (56 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:non_flammable_wood</summary>

```diff
 [
   ... (4 entries)
+  "cataclysm:chorus_fence"
+  "cataclysm:chorus_planks"
+  "cataclysm:chorus_slab"
+  "cataclysm:chorus_stairs"
   ... (150 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:pickaxes</summary>

```diff
 [
   ... (16 entries)
+  "cataclysm:black_steel_pickaxe"
+  "cataclysm:infernal_forge"
+  "cataclysm:void_forge"
   ... (58 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:piglin_loved</summary>

```diff
 [
   ... (13 entries)
+  "cataclysm:khopesh"
   ... (74 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:planks</summary>

```diff
 [
   ... (30 entries)
+  "cataclysm:chorus_planks"
   ... (663 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:shovels</summary>

```diff
 [
   ... (16 entries)
+  "cataclysm:black_steel_shovel"
   ... (47 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:slabs</summary>

```diff
 [
   ... (42 entries)
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:polished_end_stone_slab"
   ... (227 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stairs</summary>

```diff
 [
   ... (36 entries)
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:polished_end_stone_stairs"
   ... (197 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:swords</summary>

```diff
 [
   ... (17 entries)
+  "cataclysm:ancient_spear"
+  "cataclysm:athame"
+  "cataclysm:gauntlet_of_bulwark"
+  "cataclysm:gauntlet_of_guard"
+  "cataclysm:gauntlet_of_maelstrom"
+  "cataclysm:infernal_forge"
+  "cataclysm:meat_shredder"
+  "cataclysm:soul_render"
+  "cataclysm:the_annihilator"
+  "cataclysm:the_immolator"
+  "cataclysm:the_incinerator"
+  "cataclysm:tidal_claws"
+  "cataclysm:void_forge"
   ... (75 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:trim_materials</summary>

```diff
 [
   ... (3 entries)
+  "cataclysm:ancient_metal_ingot"
+  "cataclysm:cursium_ingot"
+  "cataclysm:ignitium_ingot"
+  "cataclysm:witherite_ingot"
   ... (34 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:walls</summary>

```diff
 [
   ... (37 entries)
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:purpur_wall"
   ... (177 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_fences</summary>

```diff
 [
   ... (27 entries)
+  "cataclysm:chorus_fence"
   ... (222 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_slabs</summary>

```diff
 [
   ... (26 entries)
+  "cataclysm:chorus_slab"
   ... (241 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_stairs</summary>

```diff
 [
   ... (26 entries)
+  "cataclysm:chorus_stairs"
   ... (242 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/sophisticatedstorage:upgrade</summary>

```diff
 [
   ... (13 entries)
-  "sophisticatedstorage:chipped/alchemy_bench_upgrade"
-  "sophisticatedstorage:chipped/botanist_workbench_upgrade"
-  "sophisticatedstorage:chipped/carpenters_table_upgrade"
-  "sophisticatedstorage:chipped/glassblower_upgrade"
-  "sophisticatedstorage:chipped/loom_table_upgrade"
-  "sophisticatedstorage:chipped/mason_table_upgrade"
-  "sophisticatedstorage:chipped/tinkering_table_upgrade"
+  "sophisticatedstorage:chipped/alchemy_bench_upgrade?"
+  "sophisticatedstorage:chipped/botanist_workbench_upgrade?"
+  "sophisticatedstorage:chipped/carpenters_table_upgrade?"
+  "sophisticatedstorage:chipped/glassblower_upgrade?"
+  "sophisticatedstorage:chipped/loom_table_upgrade?"
+  "sophisticatedstorage:chipped/mason_table_upgrade?"
+  "sophisticatedstorage:chipped/tinkering_table_upgrade?"
   ... (21 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:way_signs</summary>

```diff
 [
   ... (28 entries)
+  "supplementaries:cataclysm/way_sign_chorus"
   ... (231 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/dungeons_arise:has_structure/kisegi_sanctuary_biomes</summary>

```diff
 [
-  "#dungeons_arise:collections/other_cherry?"
-  "#dungeons_arise:collections/other_plains?"
-  "#minecraft:is_hill"
-  "minecraft:plains"
+  "allthemodium:basalt_deltas"
+  "allthemodium:crimson_forest"
+  "allthemodium:desert"
+  "allthemodium:desert_hills"
+  "allthemodium:the_other"
+  "allthemodium:warped_forest"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/structure/tombstone:abandoned_grave</summary>

```diff
 [
-  "tombstone:abandoned_grave_land"
-  "tombstone:abandoned_grave_ocean"
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>minecraft:item/megacells:compression_blacklist</summary>

```diff
-[
-  "#c:seeds"
-  "#mysticalagriculture:essences?"
-  "mysticalagriculture:inferium_essence"
-]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (8)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (489 entries)
+  "allthecompressed:antimatter_block"
+  "allthecompressed:antimatter_block_1x"
+  "allthecompressed:antimatter_block_2x"
+  "allthecompressed:antimatter_block_3x"
+  "allthecompressed:antimatter_block_4x"
+  "allthecompressed:antimatter_block_5x"
+  "allthecompressed:antimatter_block_6x"
+  "allthecompressed:antimatter_block_7x"
+  "allthecompressed:antimatter_block_8x"
+  "allthecompressed:antimatter_block_9x"
   ... (36 entries)
+  "allthecompressed:black_concrete_1x"
+  "allthecompressed:black_concrete_2x"
+  "allthecompressed:black_concrete_3x"
+  "allthecompressed:black_concrete_4x"
+  "allthecompressed:black_concrete_5x"
+  "allthecompressed:black_concrete_6x"
+  "allthecompressed:black_concrete_7x"
+  "allthecompressed:black_concrete_8x"
+  "allthecompressed:black_concrete_9x"
   ... (28 entries)
+  "allthecompressed:blue_concrete_1x"
+  "allthecompressed:blue_concrete_2x"
+  "allthecompressed:blue_concrete_3x"
+  "allthecompressed:blue_concrete_4x"
+  "allthecompressed:blue_concrete_5x"
+  "allthecompressed:blue_concrete_6x"
+  "allthecompressed:blue_concrete_7x"
+  "allthecompressed:blue_concrete_8x"
+  "allthecompressed:blue_concrete_9x"
   ... (36 entries)
+  "allthecompressed:brown_concrete_1x"
+  "allthecompressed:brown_concrete_2x"
+  "allthecompressed:brown_concrete_3x"
+  "allthecompressed:brown_concrete_4x"
+  "allthecompressed:brown_concrete_5x"
+  "allthecompressed:brown_concrete_6x"
+  "allthecompressed:brown_concrete_7x"
+  "allthecompressed:brown_concrete_8x"
+  "allthecompressed:brown_concrete_9x"
   ... (117 entries)
+  "allthecompressed:cyan_concrete_1x"
+  "allthecompressed:cyan_concrete_2x"
+  "allthecompressed:cyan_concrete_3x"
+  "allthecompressed:cyan_concrete_4x"
+  "allthecompressed:cyan_concrete_5x"
+  "allthecompressed:cyan_concrete_6x"
+  "allthecompressed:cyan_concrete_7x"
+  "allthecompressed:cyan_concrete_8x"
+  "allthecompressed:cyan_concrete_9x"
   ... (244 entries)
+  "allthecompressed:gray_concrete_1x"
+  "allthecompressed:gray_concrete_2x"
+  "allthecompressed:gray_concrete_3x"
+  "allthecompressed:gray_concrete_4x"
+  "allthecompressed:gray_concrete_5x"
+  "allthecompressed:gray_concrete_6x"
+  "allthecompressed:gray_concrete_7x"
+  "allthecompressed:gray_concrete_8x"
+  "allthecompressed:gray_concrete_9x"
+  "allthecompressed:green_concrete_1x"
+  "allthecompressed:green_concrete_2x"
+  "allthecompressed:green_concrete_3x"
+  "allthecompressed:green_concrete_4x"
+  "allthecompressed:green_concrete_5x"
+  "allthecompressed:green_concrete_6x"
+  "allthecompressed:green_concrete_7x"
+  "allthecompressed:green_concrete_8x"
+  "allthecompressed:green_concrete_9x"
   ... (81 entries)
+  "allthecompressed:kivi_1x"
+  "allthecompressed:kivi_2x"
+  "allthecompressed:kivi_3x"
+  "allthecompressed:kivi_4x"
+  "allthecompressed:kivi_5x"
+  "allthecompressed:kivi_6x"
+  "allthecompressed:kivi_7x"
+  "allthecompressed:kivi_8x"
+  "allthecompressed:kivi_9x"
   ... (18 entries)
+  "allthecompressed:light_blue_concrete_1x"
+  "allthecompressed:light_blue_concrete_2x"
+  "allthecompressed:light_blue_concrete_3x"
+  "allthecompressed:light_blue_concrete_4x"
+  "allthecompressed:light_blue_concrete_5x"
+  "allthecompressed:light_blue_concrete_6x"
+  "allthecompressed:light_blue_concrete_7x"
+  "allthecompressed:light_blue_concrete_8x"
+  "allthecompressed:light_blue_concrete_9x"
+  "allthecompressed:light_gray_concrete_1x"
+  "allthecompressed:light_gray_concrete_2x"
+  "allthecompressed:light_gray_concrete_3x"
+  "allthecompressed:light_gray_concrete_4x"
+  "allthecompressed:light_gray_concrete_5x"
+  "allthecompressed:light_gray_concrete_6x"
+  "allthecompressed:light_gray_concrete_7x"
+  "allthecompressed:light_gray_concrete_8x"
+  "allthecompressed:light_gray_concrete_9x"
+  "allthecompressed:lime_concrete_1x"
+  "allthecompressed:lime_concrete_2x"
+  "allthecompressed:lime_concrete_3x"
+  "allthecompressed:lime_concrete_4x"
+  "allthecompressed:lime_concrete_5x"
+  "allthecompressed:lime_concrete_6x"
+  "allthecompressed:lime_concrete_7x"
+  "allthecompressed:lime_concrete_8x"
+  "allthecompressed:lime_concrete_9x"
   ... (9 entries)
+  "allthecompressed:magenta_concrete_1x"
+  "allthecompressed:magenta_concrete_2x"
+  "allthecompressed:magenta_concrete_3x"
+  "allthecompressed:magenta_concrete_4x"
+  "allthecompressed:magenta_concrete_5x"
+  "allthecompressed:magenta_concrete_6x"
+  "allthecompressed:magenta_concrete_7x"
+  "allthecompressed:magenta_concrete_8x"
+  "allthecompressed:magenta_concrete_9x"
   ... (45 entries)
+  "allthecompressed:mycelium_1x"
+  "allthecompressed:mycelium_2x"
+  "allthecompressed:mycelium_3x"
+  "allthecompressed:mycelium_4x"
+  "allthecompressed:mycelium_5x"
+  "allthecompressed:mycelium_6x"
+  "allthecompressed:mycelium_7x"
+  "allthecompressed:mycelium_8x"
+  "allthecompressed:mycelium_9x"
   ... (81 entries)
+  "allthecompressed:orange_concrete_1x"
+  "allthecompressed:orange_concrete_2x"
+  "allthecompressed:orange_concrete_3x"
+  "allthecompressed:orange_concrete_4x"
+  "allthecompressed:orange_concrete_5x"
+  "allthecompressed:orange_concrete_6x"
+  "allthecompressed:orange_concrete_7x"
+  "allthecompressed:orange_concrete_8x"
+  "allthecompressed:orange_concrete_9x"
   ... (27 entries)
+  "allthecompressed:pink_concrete_1x"
+  "allthecompressed:pink_concrete_2x"
+  "allthecompressed:pink_concrete_3x"
+  "allthecompressed:pink_concrete_4x"
+  "allthecompressed:pink_concrete_5x"
+  "allthecompressed:pink_concrete_6x"
+  "allthecompressed:pink_concrete_7x"
+  "allthecompressed:pink_concrete_8x"
+  "allthecompressed:pink_concrete_9x"
   ... (36 entries)
+  "allthecompressed:purple_concrete_1x"
+  "allthecompressed:purple_concrete_2x"
+  "allthecompressed:purple_concrete_3x"
+  "allthecompressed:purple_concrete_4x"
+  "allthecompressed:purple_concrete_5x"
+  "allthecompressed:purple_concrete_6x"
+  "allthecompressed:purple_concrete_7x"
+  "allthecompressed:purple_concrete_8x"
+  "allthecompressed:purple_concrete_9x"
   ... (153 entries)
+  "allthecompressed:red_concrete_1x"
+  "allthecompressed:red_concrete_2x"
+  "allthecompressed:red_concrete_3x"
+  "allthecompressed:red_concrete_4x"
+  "allthecompressed:red_concrete_5x"
+  "allthecompressed:red_concrete_6x"
+  "allthecompressed:red_concrete_7x"
+  "allthecompressed:red_concrete_8x"
+  "allthecompressed:red_concrete_9x"
   ... (342 entries)
+  "allthecompressed:white_concrete_1x"
+  "allthecompressed:white_concrete_2x"
+  "allthecompressed:white_concrete_3x"
+  "allthecompressed:white_concrete_4x"
+  "allthecompressed:white_concrete_5x"
+  "allthecompressed:white_concrete_6x"
+  "allthecompressed:white_concrete_7x"
+  "allthecompressed:white_concrete_8x"
+  "allthecompressed:white_concrete_9x"
+  "allthecompressed:xychorium_storage_blue_1x"
+  "allthecompressed:xychorium_storage_blue_2x"
+  "allthecompressed:xychorium_storage_blue_3x"
+  "allthecompressed:xychorium_storage_blue_4x"
+  "allthecompressed:xychorium_storage_blue_5x"
+  "allthecompressed:xychorium_storage_blue_6x"
+  "allthecompressed:xychorium_storage_blue_7x"
+  "allthecompressed:xychorium_storage_blue_8x"
+  "allthecompressed:xychorium_storage_blue_9x"
+  "allthecompressed:xychorium_storage_dark_1x"
+  "allthecompressed:xychorium_storage_dark_2x"
+  "allthecompressed:xychorium_storage_dark_3x"
+  "allthecompressed:xychorium_storage_dark_4x"
+  "allthecompressed:xychorium_storage_dark_5x"
+  "allthecompressed:xychorium_storage_dark_6x"
+  "allthecompressed:xychorium_storage_dark_7x"
+  "allthecompressed:xychorium_storage_dark_8x"
+  "allthecompressed:xychorium_storage_dark_9x"
+  "allthecompressed:xychorium_storage_green_1x"
+  "allthecompressed:xychorium_storage_green_2x"
+  "allthecompressed:xychorium_storage_green_3x"
+  "allthecompressed:xychorium_storage_green_4x"
+  "allthecompressed:xychorium_storage_green_5x"
+  "allthecompressed:xychorium_storage_green_6x"
+  "allthecompressed:xychorium_storage_green_7x"
+  "allthecompressed:xychorium_storage_green_8x"
+  "allthecompressed:xychorium_storage_green_9x"
+  "allthecompressed:xychorium_storage_light_1x"
+  "allthecompressed:xychorium_storage_light_2x"
+  "allthecompressed:xychorium_storage_light_3x"
+  "allthecompressed:xychorium_storage_light_4x"
+  "allthecompressed:xychorium_storage_light_5x"
+  "allthecompressed:xychorium_storage_light_6x"
+  "allthecompressed:xychorium_storage_light_7x"
+  "allthecompressed:xychorium_storage_light_8x"
+  "allthecompressed:xychorium_storage_light_9x"
+  "allthecompressed:xychorium_storage_red_1x"
+  "allthecompressed:xychorium_storage_red_2x"
+  "allthecompressed:xychorium_storage_red_3x"
+  "allthecompressed:xychorium_storage_red_4x"
+  "allthecompressed:xychorium_storage_red_5x"
+  "allthecompressed:xychorium_storage_red_6x"
+  "allthecompressed:xychorium_storage_red_7x"
+  "allthecompressed:xychorium_storage_red_8x"
+  "allthecompressed:xychorium_storage_red_9x"
+  "allthecompressed:yellow_concrete_1x"
+  "allthecompressed:yellow_concrete_2x"
+  "allthecompressed:yellow_concrete_3x"
+  "allthecompressed:yellow_concrete_4x"
+  "allthecompressed:yellow_concrete_5x"
+  "allthecompressed:yellow_concrete_6x"
+  "allthecompressed:yellow_concrete_7x"
+  "allthecompressed:yellow_concrete_8x"
+  "allthecompressed:yellow_concrete_9x"
   ... (7873 entries)
+  "cataclysm:abyssal_egg"
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:ancient_metal_block"
+  "cataclysm:aptrgangr_head"
+  "cataclysm:aptrgangr_wall_head"
+  "cataclysm:azure_seastone"
+  "cataclysm:azure_seastone_brick_slab"
+  "cataclysm:azure_seastone_brick_stairs"
+  "cataclysm:azure_seastone_brick_wall"
+  "cataclysm:azure_seastone_bricks"
+  "cataclysm:azure_seastone_fence"
+  "cataclysm:azure_seastone_pillar"
+  "cataclysm:azure_seastone_pillar_wall"
+  "cataclysm:azure_seastone_slab"
+  "cataclysm:azure_seastone_stairs"
+  "cataclysm:azure_seastone_tiles"
+  "cataclysm:azure_seastone_wall"
+  "cataclysm:black_steel_block"
+  "cataclysm:black_steel_fence"
+  "cataclysm:black_steel_wall"
+  "cataclysm:blackstone_pillar"
+  "cataclysm:chiseled_azure_seastone"
+  "cataclysm:chiseled_azure_seastone_pillar"
+  "cataclysm:chiseled_azure_seastone_pillar_wall"
+  "cataclysm:chiseled_end_stone_bricks"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:chiseled_purpur_block"
+  "cataclysm:chiseled_stone_brick_pillar"
+  "cataclysm:chorus_fence"
+  "cataclysm:chorus_planks"
+  "cataclysm:chorus_slab"
+  "cataclysm:chorus_stairs"
+  "cataclysm:chorus_stem"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:cursium_block"
+  "cataclysm:door_of_seal"
+  "cataclysm:door_of_seal_part"
+  "cataclysm:draugr_head"
+  "cataclysm:draugr_wall_head"
+  "cataclysm:dungeon_block"
+  "cataclysm:emp"
+  "cataclysm:end_stone_pillar"
+  "cataclysm:end_stone_teleport_trap_bricks"
+  "cataclysm:enderite_block"
+  "cataclysm:frosted_stone_brick_slab"
+  "cataclysm:frosted_stone_brick_stairs"
+  "cataclysm:frosted_stone_brick_wall"
+  "cataclysm:frosted_stone_bricks"
+  "cataclysm:ignitium_block"
+  "cataclysm:kobolediator_skull"
+  "cataclysm:kobolediator_wall_skull"
+  "cataclysm:mechanical_fusion_anvil"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:pointed_icicle"
+  "cataclysm:polished_azure_seastone"
+  "cataclysm:polished_azure_seastone_slab"
+  "cataclysm:polished_azure_seastone_stairs"
+  "cataclysm:polished_azure_seastone_wall"
+  "cataclysm:polished_end_stone"
+  "cataclysm:polished_end_stone_slab"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:polished_obsidian"
+  "cataclysm:polished_sandstone"
+  "cataclysm:prismarine_brick_fence"
+  "cataclysm:prismarine_brick_wall"
+  "cataclysm:purpur_void_rune_trap_block"
+  "cataclysm:purpur_wall"
+  "cataclysm:quartz_brick_wall"
+  "cataclysm:sandstone_falling_trap"
+  "cataclysm:sandstone_ignite_trap"
+  "cataclysm:sandstone_poison_dart_trap"
+  "cataclysm:stone_pillar"
+  "cataclysm:stone_tile_slab"
+  "cataclysm:stone_tile_stairs"
+  "cataclysm:stone_tile_wall"
+  "cataclysm:stone_tiles"
+  "cataclysm:void_crystal"
+  "cataclysm:void_infused_end_stone_bricks"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_stone"
+  "cataclysm:witherite_block"
   ... (29754 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (246 entries)
+  "cataclysm:abyssal_egg"
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:cataclysm_skull"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:door_of_seal"
+  "cataclysm:emp"
+  "cataclysm:mechanical_fusion_anvil"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:sadsotne_ignite_trap"
   ... (1677 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (126 entries)
+  "cataclysm:abyss_blast"
+  "cataclysm:abyss_blast_portal"
+  "cataclysm:abyss_mark"
+  "cataclysm:abyss_mine"
+  "cataclysm:abyss_orb"
+  "cataclysm:abyss_portal"
+  "cataclysm:amethyst_cluster_projectile"
+  "cataclysm:amethyst_crab"
+  "cataclysm:ancient_ancient_remnant"
+  "cataclysm:ancient_desert_stele"
+  "cataclysm:ancient_remnant"
+  "cataclysm:aptrgangr"
+  "cataclysm:ashen_breath"
+  "cataclysm:axe_blade"
+  "cataclysm:blazing_bone"
+  "cataclysm:bolt_strike"
+  "cataclysm:cm_falling_block"
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_golem"
+  "cataclysm:coral_spear"
+  "cataclysm:coralssus"
+  "cataclysm:cursed_sandstorm"
+  "cataclysm:death_laser_beam"
+  "cataclysm:deepling"
+  "cataclysm:deepling_angler"
+  "cataclysm:deepling_brute"
+  "cataclysm:deepling_priest"
+  "cataclysm:deepling_warlock"
+  "cataclysm:dimensional_rift"
+  "cataclysm:draugr"
+  "cataclysm:earthquake"
+  "cataclysm:elite_draugr"
+  "cataclysm:ender_golem"
+  "cataclysm:ender_guardian"
+  "cataclysm:ender_guardian_bullet"
+  "cataclysm:endermaptera"
+  "cataclysm:eye_of_dungeon"
+  "cataclysm:flame_jet"
+  "cataclysm:flame_strike"
+  "cataclysm:flare_bomb"
+  "cataclysm:ignis"
+  "cataclysm:ignis_abyss_fireball"
+  "cataclysm:ignis_fireball"
+  "cataclysm:ignited_berserker"
+  "cataclysm:ignited_revenant"
+  "cataclysm:kobolediator"
+  "cataclysm:koboleton"
+  "cataclysm:laser_beam"
+  "cataclysm:lava_bomb"
+  "cataclysm:lionfish"
+  "cataclysm:lionfish_spike"
+  "cataclysm:maledictus"
+  "cataclysm:mini_abyss_blast"
+  "cataclysm:modern_remnant"
+  "cataclysm:netherite_ministrosity"
+  "cataclysm:netherite_monstrosity"
+  "cataclysm:phantom_arrow"
+  "cataclysm:phantom_halberd"
+  "cataclysm:poison_dart"
+  "cataclysm:portal_abyss_blast"
+  "cataclysm:royal_draugr"
+  "cataclysm:sandstorm"
+  "cataclysm:sandstorm_projectile"
+  "cataclysm:screen_shake"
+  "cataclysm:the_baby_leviathan"
+  "cataclysm:the_harbinger"
+  "cataclysm:the_leviathan"
+  "cataclysm:the_leviathan_tongue"
+  "cataclysm:the_prowler"
+  "cataclysm:the_watcher"
+  "cataclysm:tidal_hook"
+  "cataclysm:tidal_tentacle"
+  "cataclysm:void_howitzer"
+  "cataclysm:void_rune"
+  "cataclysm:void_scatter_arrow"
+  "cataclysm:void_shard"
+  "cataclysm:void_vortex"
+  "cataclysm:wadjet"
+  "cataclysm:wall_watcher"
+  "cataclysm:wither_homing_missile"
+  "cataclysm:wither_howitzer"
+  "cataclysm:wither_missile"
+  "cataclysm:wither_smoke_effect"
   ... (808 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (904 entries)
+  "allthecompressed:antimatter_block"
+  "allthecompressed:antimatter_block_1x"
+  "allthecompressed:antimatter_block_2x"
+  "allthecompressed:antimatter_block_3x"
+  "allthecompressed:antimatter_block_4x"
+  "allthecompressed:antimatter_block_5x"
+  "allthecompressed:antimatter_block_6x"
+  "allthecompressed:antimatter_block_7x"
+  "allthecompressed:antimatter_block_8x"
+  "allthecompressed:antimatter_block_9x"
   ... (36 entries)
+  "allthecompressed:black_concrete_1x"
+  "allthecompressed:black_concrete_2x"
+  "allthecompressed:black_concrete_3x"
+  "allthecompressed:black_concrete_4x"
+  "allthecompressed:black_concrete_5x"
+  "allthecompressed:black_concrete_6x"
+  "allthecompressed:black_concrete_7x"
+  "allthecompressed:black_concrete_8x"
+  "allthecompressed:black_concrete_9x"
   ... (28 entries)
+  "allthecompressed:blue_concrete_1x"
+  "allthecompressed:blue_concrete_2x"
+  "allthecompressed:blue_concrete_3x"
+  "allthecompressed:blue_concrete_4x"
+  "allthecompressed:blue_concrete_5x"
+  "allthecompressed:blue_concrete_6x"
+  "allthecompressed:blue_concrete_7x"
+  "allthecompressed:blue_concrete_8x"
+  "allthecompressed:blue_concrete_9x"
   ... (36 entries)
+  "allthecompressed:brown_concrete_1x"
+  "allthecompressed:brown_concrete_2x"
+  "allthecompressed:brown_concrete_3x"
+  "allthecompressed:brown_concrete_4x"
+  "allthecompressed:brown_concrete_5x"
+  "allthecompressed:brown_concrete_6x"
+  "allthecompressed:brown_concrete_7x"
+  "allthecompressed:brown_concrete_8x"
+  "allthecompressed:brown_concrete_9x"
   ... (117 entries)
+  "allthecompressed:cyan_concrete_1x"
+  "allthecompressed:cyan_concrete_2x"
+  "allthecompressed:cyan_concrete_3x"
+  "allthecompressed:cyan_concrete_4x"
+  "allthecompressed:cyan_concrete_5x"
+  "allthecompressed:cyan_concrete_6x"
+  "allthecompressed:cyan_concrete_7x"
+  "allthecompressed:cyan_concrete_8x"
+  "allthecompressed:cyan_concrete_9x"
   ... (244 entries)
+  "allthecompressed:gray_concrete_1x"
+  "allthecompressed:gray_concrete_2x"
+  "allthecompressed:gray_concrete_3x"
+  "allthecompressed:gray_concrete_4x"
+  "allthecompressed:gray_concrete_5x"
+  "allthecompressed:gray_concrete_6x"
+  "allthecompressed:gray_concrete_7x"
+  "allthecompressed:gray_concrete_8x"
+  "allthecompressed:gray_concrete_9x"
+  "allthecompressed:green_concrete_1x"
+  "allthecompressed:green_concrete_2x"
+  "allthecompressed:green_concrete_3x"
+  "allthecompressed:green_concrete_4x"
+  "allthecompressed:green_concrete_5x"
+  "allthecompressed:green_concrete_6x"
+  "allthecompressed:green_concrete_7x"
+  "allthecompressed:green_concrete_8x"
+  "allthecompressed:green_concrete_9x"
   ... (81 entries)
+  "allthecompressed:kivi_1x"
+  "allthecompressed:kivi_2x"
+  "allthecompressed:kivi_3x"
+  "allthecompressed:kivi_4x"
+  "allthecompressed:kivi_5x"
+  "allthecompressed:kivi_6x"
+  "allthecompressed:kivi_7x"
+  "allthecompressed:kivi_8x"
+  "allthecompressed:kivi_9x"
   ... (18 entries)
+  "allthecompressed:light_blue_concrete_1x"
+  "allthecompressed:light_blue_concrete_2x"
+  "allthecompressed:light_blue_concrete_3x"
+  "allthecompressed:light_blue_concrete_4x"
+  "allthecompressed:light_blue_concrete_5x"
+  "allthecompressed:light_blue_concrete_6x"
+  "allthecompressed:light_blue_concrete_7x"
+  "allthecompressed:light_blue_concrete_8x"
+  "allthecompressed:light_blue_concrete_9x"
+  "allthecompressed:light_gray_concrete_1x"
+  "allthecompressed:light_gray_concrete_2x"
+  "allthecompressed:light_gray_concrete_3x"
+  "allthecompressed:light_gray_concrete_4x"
+  "allthecompressed:light_gray_concrete_5x"
+  "allthecompressed:light_gray_concrete_6x"
+  "allthecompressed:light_gray_concrete_7x"
+  "allthecompressed:light_gray_concrete_8x"
+  "allthecompressed:light_gray_concrete_9x"
+  "allthecompressed:lime_concrete_1x"
+  "allthecompressed:lime_concrete_2x"
+  "allthecompressed:lime_concrete_3x"
+  "allthecompressed:lime_concrete_4x"
+  "allthecompressed:lime_concrete_5x"
+  "allthecompressed:lime_concrete_6x"
+  "allthecompressed:lime_concrete_7x"
+  "allthecompressed:lime_concrete_8x"
+  "allthecompressed:lime_concrete_9x"
   ... (9 entries)
+  "allthecompressed:magenta_concrete_1x"
+  "allthecompressed:magenta_concrete_2x"
+  "allthecompressed:magenta_concrete_3x"
+  "allthecompressed:magenta_concrete_4x"
+  "allthecompressed:magenta_concrete_5x"
+  "allthecompressed:magenta_concrete_6x"
+  "allthecompressed:magenta_concrete_7x"
+  "allthecompressed:magenta_concrete_8x"
+  "allthecompressed:magenta_concrete_9x"
   ... (45 entries)
+  "allthecompressed:mycelium_1x"
+  "allthecompressed:mycelium_2x"
+  "allthecompressed:mycelium_3x"
+  "allthecompressed:mycelium_4x"
+  "allthecompressed:mycelium_5x"
+  "allthecompressed:mycelium_6x"
+  "allthecompressed:mycelium_7x"
+  "allthecompressed:mycelium_8x"
+  "allthecompressed:mycelium_9x"
   ... (81 entries)
+  "allthecompressed:orange_concrete_1x"
+  "allthecompressed:orange_concrete_2x"
+  "allthecompressed:orange_concrete_3x"
+  "allthecompressed:orange_concrete_4x"
+  "allthecompressed:orange_concrete_5x"
+  "allthecompressed:orange_concrete_6x"
+  "allthecompressed:orange_concrete_7x"
+  "allthecompressed:orange_concrete_8x"
+  "allthecompressed:orange_concrete_9x"
   ... (27 entries)
+  "allthecompressed:pink_concrete_1x"
+  "allthecompressed:pink_concrete_2x"
+  "allthecompressed:pink_concrete_3x"
+  "allthecompressed:pink_concrete_4x"
+  "allthecompressed:pink_concrete_5x"
+  "allthecompressed:pink_concrete_6x"
+  "allthecompressed:pink_concrete_7x"
+  "allthecompressed:pink_concrete_8x"
+  "allthecompressed:pink_concrete_9x"
   ... (36 entries)
+  "allthecompressed:purple_concrete_1x"
+  "allthecompressed:purple_concrete_2x"
+  "allthecompressed:purple_concrete_3x"
+  "allthecompressed:purple_concrete_4x"
+  "allthecompressed:purple_concrete_5x"
+  "allthecompressed:purple_concrete_6x"
+  "allthecompressed:purple_concrete_7x"
+  "allthecompressed:purple_concrete_8x"
+  "allthecompressed:purple_concrete_9x"
   ... (153 entries)
+  "allthecompressed:red_concrete_1x"
+  "allthecompressed:red_concrete_2x"
+  "allthecompressed:red_concrete_3x"
+  "allthecompressed:red_concrete_4x"
+  "allthecompressed:red_concrete_5x"
+  "allthecompressed:red_concrete_6x"
+  "allthecompressed:red_concrete_7x"
+  "allthecompressed:red_concrete_8x"
+  "allthecompressed:red_concrete_9x"
   ... (342 entries)
+  "allthecompressed:white_concrete_1x"
+  "allthecompressed:white_concrete_2x"
+  "allthecompressed:white_concrete_3x"
+  "allthecompressed:white_concrete_4x"
+  "allthecompressed:white_concrete_5x"
+  "allthecompressed:white_concrete_6x"
+  "allthecompressed:white_concrete_7x"
+  "allthecompressed:white_concrete_8x"
+  "allthecompressed:white_concrete_9x"
+  "allthecompressed:xychorium_storage_blue_1x"
+  "allthecompressed:xychorium_storage_blue_2x"
+  "allthecompressed:xychorium_storage_blue_3x"
+  "allthecompressed:xychorium_storage_blue_4x"
+  "allthecompressed:xychorium_storage_blue_5x"
+  "allthecompressed:xychorium_storage_blue_6x"
+  "allthecompressed:xychorium_storage_blue_7x"
+  "allthecompressed:xychorium_storage_blue_8x"
+  "allthecompressed:xychorium_storage_blue_9x"
+  "allthecompressed:xychorium_storage_dark_1x"
+  "allthecompressed:xychorium_storage_dark_2x"
+  "allthecompressed:xychorium_storage_dark_3x"
+  "allthecompressed:xychorium_storage_dark_4x"
+  "allthecompressed:xychorium_storage_dark_5x"
+  "allthecompressed:xychorium_storage_dark_6x"
+  "allthecompressed:xychorium_storage_dark_7x"
+  "allthecompressed:xychorium_storage_dark_8x"
+  "allthecompressed:xychorium_storage_dark_9x"
+  "allthecompressed:xychorium_storage_green_1x"
+  "allthecompressed:xychorium_storage_green_2x"
+  "allthecompressed:xychorium_storage_green_3x"
+  "allthecompressed:xychorium_storage_green_4x"
+  "allthecompressed:xychorium_storage_green_5x"
+  "allthecompressed:xychorium_storage_green_6x"
+  "allthecompressed:xychorium_storage_green_7x"
+  "allthecompressed:xychorium_storage_green_8x"
+  "allthecompressed:xychorium_storage_green_9x"
+  "allthecompressed:xychorium_storage_light_1x"
+  "allthecompressed:xychorium_storage_light_2x"
+  "allthecompressed:xychorium_storage_light_3x"
+  "allthecompressed:xychorium_storage_light_4x"
+  "allthecompressed:xychorium_storage_light_5x"
+  "allthecompressed:xychorium_storage_light_6x"
+  "allthecompressed:xychorium_storage_light_7x"
+  "allthecompressed:xychorium_storage_light_8x"
+  "allthecompressed:xychorium_storage_light_9x"
+  "allthecompressed:xychorium_storage_red_1x"
+  "allthecompressed:xychorium_storage_red_2x"
+  "allthecompressed:xychorium_storage_red_3x"
+  "allthecompressed:xychorium_storage_red_4x"
+  "allthecompressed:xychorium_storage_red_5x"
+  "allthecompressed:xychorium_storage_red_6x"
+  "allthecompressed:xychorium_storage_red_7x"
+  "allthecompressed:xychorium_storage_red_8x"
+  "allthecompressed:xychorium_storage_red_9x"
+  "allthecompressed:yellow_concrete_1x"
+  "allthecompressed:yellow_concrete_2x"
+  "allthecompressed:yellow_concrete_3x"
+  "allthecompressed:yellow_concrete_4x"
+  "allthecompressed:yellow_concrete_5x"
+  "allthecompressed:yellow_concrete_6x"
+  "allthecompressed:yellow_concrete_7x"
+  "allthecompressed:yellow_concrete_8x"
+  "allthecompressed:yellow_concrete_9x"
   ... (12606 entries)
+  "cataclysm:abyss_eye"
+  "cataclysm:abyssal_egg"
+  "cataclysm:abyssal_sacrifice"
+  "cataclysm:altar_of_abyss"
+  "cataclysm:altar_of_amethyst"
+  "cataclysm:altar_of_fire"
+  "cataclysm:altar_of_void"
+  "cataclysm:amethyst_crab_meat"
+  "cataclysm:amethyst_crab_shell"
+  "cataclysm:amethyst_crab_spawn_egg"
+  "cataclysm:ancient_metal_block"
+  "cataclysm:ancient_metal_ingot"
+  "cataclysm:ancient_metal_nugget"
+  "cataclysm:ancient_remnant_spawn_egg"
+  "cataclysm:ancient_spear"
+  "cataclysm:aptrgangr_head"
+  "cataclysm:aptrgangr_spawn_egg"
+  "cataclysm:athame"
+  "cataclysm:azure_seastone"
+  "cataclysm:azure_seastone_brick_slab"
+  "cataclysm:azure_seastone_brick_stairs"
+  "cataclysm:azure_seastone_brick_wall"
+  "cataclysm:azure_seastone_bricks"
+  "cataclysm:azure_seastone_fence"
+  "cataclysm:azure_seastone_pillar"
+  "cataclysm:azure_seastone_pillar_wall"
+  "cataclysm:azure_seastone_slab"
+  "cataclysm:azure_seastone_stairs"
+  "cataclysm:azure_seastone_tiles"
+  "cataclysm:azure_seastone_wall"
+  "cataclysm:black_steel_axe"
+  "cataclysm:black_steel_block"
+  "cataclysm:black_steel_fence"
+  "cataclysm:black_steel_hoe"
+  "cataclysm:black_steel_ingot"
+  "cataclysm:black_steel_nugget"
+  "cataclysm:black_steel_pickaxe"
+  "cataclysm:black_steel_shovel"
+  "cataclysm:black_steel_sword"
+  "cataclysm:black_steel_targe"
+  "cataclysm:black_steel_wall"
+  "cataclysm:blackstone_pillar"
+  "cataclysm:blazing_bone"
+  "cataclysm:blazing_grips"
+  "cataclysm:blessed_amethyst_crab_meat"
+  "cataclysm:bloom_stone_pauldrons"
+  "cataclysm:bone_reptile_chestplate"
+  "cataclysm:bone_reptile_helmet"
+  "cataclysm:bulwark_of_the_flame"
+  "cataclysm:burning_ashes"
+  "cataclysm:chain_of_soul_binding"
+  "cataclysm:chiseled_azure_seastone"
+  "cataclysm:chiseled_azure_seastone_pillar"
+  "cataclysm:chiseled_azure_seastone_pillar_wall"
+  "cataclysm:chiseled_end_stone_bricks"
+  "cataclysm:chiseled_obsidian_bricks"
+  "cataclysm:chiseled_purpur_block"
+  "cataclysm:chiseled_stone_brick_pillar"
+  "cataclysm:chorus_fence"
+  "cataclysm:chorus_planks"
+  "cataclysm:chorus_slab"
+  "cataclysm:chorus_stairs"
+  "cataclysm:chorus_stem"
+  "cataclysm:coral_bardiche"
+  "cataclysm:coral_chunk"
+  "cataclysm:coral_golem_spawn_egg"
+  "cataclysm:coral_spear"
+  "cataclysm:coralssus_spawn_egg"
+  "cataclysm:crystallized_coral"
+  "cataclysm:crystallized_coral_fragments"
+  "cataclysm:cursed_bow"
+  "cataclysm:cursed_eye"
+  "cataclysm:cursed_tombstone"
+  "cataclysm:cursium_block"
+  "cataclysm:cursium_boots"
+  "cataclysm:cursium_chestplate"
+  "cataclysm:cursium_helmet"
+  "cataclysm:cursium_ingot"
+  "cataclysm:cursium_leggings"
+  "cataclysm:cursium_upgrade_smithing_template"
+  "cataclysm:deepling_angler_spawn_egg"
+  "cataclysm:deepling_brute_spawn_egg"
+  "cataclysm:deepling_priest_spawn_egg"
+  "cataclysm:deepling_spawn_egg"
+  "cataclysm:deepling_warlock_spawn_egg"
+  "cataclysm:desert_eye"
+  "cataclysm:door_of_seal"
+  "cataclysm:draugr_head"
+  "cataclysm:draugr_spawn_egg"
+  "cataclysm:dungeon_block"
+  "cataclysm:dying_ember"
+  "cataclysm:elite_draugr_spawn_egg"
+  "cataclysm:emp"
+  "cataclysm:end_stone_pillar"
+  "cataclysm:end_stone_teleport_trap_bricks"
+  "cataclysm:ender_golem_spawn_egg"
+  "cataclysm:ender_guardian_spawn_egg"
+  "cataclysm:enderite_block"
+  "cataclysm:enderite_ingot"
+  "cataclysm:endermaptera_spawn_egg"
+  "cataclysm:flame_eye"
+  "cataclysm:frosted_stone_brick_slab"
+  "cataclysm:frosted_stone_brick_stairs"
+  "cataclysm:frosted_stone_brick_wall"
+  "cataclysm:frosted_stone_bricks"
+  "cataclysm:gauntlet_of_bulwark"
+  "cataclysm:gauntlet_of_guard"
+  "cataclysm:gauntlet_of_maelstrom"
+  "cataclysm:ignis_spawn_egg"
+  "cataclysm:ignited_berserker_spawn_egg"
+  "cataclysm:ignited_revenant_spawn_egg"
+  "cataclysm:ignitium_block"
+  "cataclysm:ignitium_boots"
+  "cataclysm:ignitium_chestplate"
+  "cataclysm:ignitium_elytra_chestplate"
+  "cataclysm:ignitium_helmet"
+  "cataclysm:ignitium_ingot"
+  "cataclysm:ignitium_leggings"
+  "cataclysm:ignitium_upgrade_smithing_template"
+  "cataclysm:infernal_forge"
+  "cataclysm:khopesh"
+  "cataclysm:kobolediator_skull"
+  "cataclysm:kobolediator_spawn_egg"
+  "cataclysm:koboleton_bone"
+  "cataclysm:koboleton_spawn_egg"
+  "cataclysm:laser_gatling"
+  "cataclysm:lava_power_cell"
+  "cataclysm:lionfish"
+  "cataclysm:lionfish_spawn_egg"
+  "cataclysm:lionfish_spike"
+  "cataclysm:maledictus_spawn_egg"
+  "cataclysm:meat_shredder"
+  "cataclysm:mech_eye"
+  "cataclysm:mechanical_fusion_anvil"
+  "cataclysm:modern_remnant_bucket"
+  "cataclysm:modern_remnant_spawn_egg"
+  "cataclysm:monstrous_eye"
+  "cataclysm:monstrous_helm"
+  "cataclysm:monstrous_horn"
+  "cataclysm:music_disc_ancient_remnant"
+  "cataclysm:music_disc_ender_guardian"
+  "cataclysm:music_disc_ignis"
+  "cataclysm:music_disc_maledictus"
+  "cataclysm:music_disc_netherite_monstrosity"
+  "cataclysm:music_disc_the_harbinger"
+  "cataclysm:music_disc_the_leviathan"
+  "cataclysm:necklace_of_the_desert"
+  "cataclysm:netherite_effigy"
+  "cataclysm:netherite_ministrosity_bucket"
+  "cataclysm:netherite_ministrosity_spawn_egg"
+  "cataclysm:netherite_monstrosity_spawn_egg"
+  "cataclysm:obsidian_brick_slab"
+  "cataclysm:obsidian_brick_stairs"
+  "cataclysm:obsidian_brick_wall"
+  "cataclysm:obsidian_bricks"
+  "cataclysm:obsidian_explosion_trap_bricks"
+  "cataclysm:pointed_icicle"
+  "cataclysm:polished_azure_seastone"
+  "cataclysm:polished_azure_seastone_slab"
+  "cataclysm:polished_azure_seastone_stairs"
+  "cataclysm:polished_azure_seastone_wall"
+  "cataclysm:polished_end_stone"
+  "cataclysm:polished_end_stone_slab"
+  "cataclysm:polished_end_stone_stairs"
+  "cataclysm:polished_obsidian"
+  "cataclysm:polished_sandstone"
+  "cataclysm:prismarine_brick_fence"
+  "cataclysm:prismarine_brick_wall"
+  "cataclysm:purpur_void_rune_trap_block"
+  "cataclysm:purpur_wall"
+  "cataclysm:quartz_brick_wall"
+  "cataclysm:remnant_skull"
+  "cataclysm:royal_draugr_spawn_egg"
+  "cataclysm:sandstone_falling_trap"
+  "cataclysm:sandstone_ignite_trap"
+  "cataclysm:sandstone_poison_dart_trap"
+  "cataclysm:sandstorm_in_a_bottle"
+  "cataclysm:soul_render"
+  "cataclysm:sticky_gloves"
+  "cataclysm:stone_pillar"
+  "cataclysm:stone_tile_slab"
+  "cataclysm:stone_tile_stairs"
+  "cataclysm:stone_tile_wall"
+  "cataclysm:stone_tiles"
+  "cataclysm:the_annihilator"
+  "cataclysm:the_baby_leviathan_bucket"
+  "cataclysm:the_baby_leviathan_spawn_egg"
+  "cataclysm:the_harbinger_spawn_egg"
+  "cataclysm:the_immolator"
+  "cataclysm:the_incinerator"
+  "cataclysm:the_leviathan_spawn_egg"
+  "cataclysm:the_prowler_spawn_egg"
+  "cataclysm:the_watcher_spawn_egg"
+  "cataclysm:tidal_claws"
+  "cataclysm:void_assault_shoulder_weapon"
+  "cataclysm:void_core"
+  "cataclysm:void_crystal"
+  "cataclysm:void_eye"
+  "cataclysm:void_forge"
+  "cataclysm:void_infused_end_stone_bricks"
+  "cataclysm:void_jaw"
+  "cataclysm:void_lantern_block"
+  "cataclysm:void_scatter_arrow"
+  "cataclysm:void_shard"
+  "cataclysm:void_stone"
+  "cataclysm:wadjet_spawn_egg"
+  "cataclysm:wither_assault_shoulder_weapon"
+  "cataclysm:witherite_block"
+  "cataclysm:witherite_ingot"
+  "cataclysm:wrath_of_the_desert"
   ... (12220 entries)
+  "guideme:guide"
   ... (1836 entries)
+  "kubejs:ancient_stone_cell"
   ... (12 entries)
+  "kubejs:black_cell"
   ... (2 entries)
+  "kubejs:blue_cell"
   ... (1 entries)
+  "kubejs:brown_cell"
   ... (7 entries)
+  "kubejs:cyan_cell"
   ... (6 entries)
+  "kubejs:gravel_cell"
+  "kubejs:gray_cell"
+  "kubejs:green_cell"
   ... (3 entries)
+  "kubejs:kivi_cell"
   ... (1 entries)
+  "kubejs:light_blue_cell"
+  "kubejs:light_gray_cell"
+  "kubejs:lime_cell"
   ... (2 entries)
+  "kubejs:magenta_cell"
   ... (5 entries)
+  "kubejs:orange_cell"
+  "kubejs:pink_cell"
   ... (2 entries)
+  "kubejs:purple_cell"
+  "kubejs:red_cell"
   ... (26 entries)
+  "kubejs:white_cell"
+  "kubejs:yellow_cell"
   ... (19435 entries)
+  "supplementaries:cataclysm/way_sign_chorus"
   ... (3189 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (38 entries)
+  "cataclysm:abyssal_burn"
+  "cataclysm:abyssal_curse"
+  "cataclysm:abyssal_fear"
+  "cataclysm:blazing_brand"
+  "cataclysm:blessing_of_amethyst"
+  "cataclysm:bone_fracture"
+  "cataclysm:curse_of_desert"
+  "cataclysm:ghost_form"
+  "cataclysm:ghost_sickness"
+  "cataclysm:monstrous"
+  "cataclysm:stun"
   ... (202 entries)
 ]

```


</details>

<details>
<summary>recipe_type</summary>

```diff
 [
   ... (50 entries)
+  "cataclysm:amethyst_bless"
+  "cataclysm:weapon_fusion"
   ... (235 entries)
 ]

```


</details>

<details>
<summary>worldgen/placed_feature</summary>

```diff
 [
   ... (11 entries)
+  "allthemodium:azure_silver_ore"
   ... (2 entries)
+  "allthemodium:cinnabar_ore"
+  "allthemodium:crimson_iron_ore"
   ... (2 entries)
+  "allthemodium:dimensionalshard"
+  "allthemodium:fluorite_ore"
   ... (22 entries)
+  "allthemodium:sal_ammoniac_ore"
+  "allthemodium:salt_ore"
   ... (2 entries)
+  "allthemodium:soulium_ore"
+  "allthemodium:stella_arcanum"
+  "allthemodium:sulfur_ore"
+  "allthemodium:titanium_ore"
   ... (1852 entries)
 ]

```


</details>

<details>
<summary>worldgen/structure</summary>

```diff
 [
   ... (58 entries)
+  "cataclysm:ancient_factory"
+  "cataclysm:burning_arena"
+  "cataclysm:cursed_pyramid"
+  "cataclysm:frosted_prison"
+  "cataclysm:ruined_citadel"
+  "cataclysm:soul_black_smith"
+  "cataclysm:sunken_city"
   ... (761 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (328)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block</summary>

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
+          name: "allthecompressed:antimatter_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_1x</summary>

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
+          name: "allthecompressed:antimatter_block_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_2x</summary>

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
+          name: "allthecompressed:antimatter_block_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_3x</summary>

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
+          name: "allthecompressed:antimatter_block_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_4x</summary>

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
+          name: "allthecompressed:antimatter_block_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_5x</summary>

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
+          name: "allthecompressed:antimatter_block_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_6x</summary>

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
+          name: "allthecompressed:antimatter_block_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_7x</summary>

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
+          name: "allthecompressed:antimatter_block_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_8x</summary>

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
+          name: "allthecompressed:antimatter_block_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/antimatter_block_9x</summary>

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
+          name: "allthecompressed:antimatter_block_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/antimatter_block_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_1x</summary>

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
+          name: "allthecompressed:black_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_2x</summary>

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
+          name: "allthecompressed:black_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_3x</summary>

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
+          name: "allthecompressed:black_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_4x</summary>

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
+          name: "allthecompressed:black_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_5x</summary>

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
+          name: "allthecompressed:black_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_6x</summary>

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
+          name: "allthecompressed:black_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_7x</summary>

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
+          name: "allthecompressed:black_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_8x</summary>

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
+          name: "allthecompressed:black_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/black_concrete_9x</summary>

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
+          name: "allthecompressed:black_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/black_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_1x</summary>

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
+          name: "allthecompressed:blue_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_2x</summary>

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
+          name: "allthecompressed:blue_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_3x</summary>

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
+          name: "allthecompressed:blue_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_4x</summary>

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
+          name: "allthecompressed:blue_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_5x</summary>

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
+          name: "allthecompressed:blue_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_6x</summary>

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
+          name: "allthecompressed:blue_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_7x</summary>

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
+          name: "allthecompressed:blue_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_8x</summary>

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
+          name: "allthecompressed:blue_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/blue_concrete_9x</summary>

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
+          name: "allthecompressed:blue_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/blue_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_1x</summary>

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
+          name: "allthecompressed:brown_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_2x</summary>

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
+          name: "allthecompressed:brown_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_3x</summary>

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
+          name: "allthecompressed:brown_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_4x</summary>

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
+          name: "allthecompressed:brown_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_5x</summary>

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
+          name: "allthecompressed:brown_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_6x</summary>

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
+          name: "allthecompressed:brown_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_7x</summary>

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
+          name: "allthecompressed:brown_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_8x</summary>

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
+          name: "allthecompressed:brown_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/brown_concrete_9x</summary>

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
+          name: "allthecompressed:brown_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/brown_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_1x</summary>

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
+          name: "allthecompressed:cyan_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_2x</summary>

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
+          name: "allthecompressed:cyan_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_3x</summary>

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
+          name: "allthecompressed:cyan_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_4x</summary>

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
+          name: "allthecompressed:cyan_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_5x</summary>

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
+          name: "allthecompressed:cyan_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_6x</summary>

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
+          name: "allthecompressed:cyan_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_7x</summary>

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
+          name: "allthecompressed:cyan_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_8x</summary>

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
+          name: "allthecompressed:cyan_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/cyan_concrete_9x</summary>

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
+          name: "allthecompressed:cyan_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/cyan_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_1x</summary>

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
+          name: "allthecompressed:gray_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_2x</summary>

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
+          name: "allthecompressed:gray_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_3x</summary>

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
+          name: "allthecompressed:gray_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_4x</summary>

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
+          name: "allthecompressed:gray_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_5x</summary>

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
+          name: "allthecompressed:gray_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_6x</summary>

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
+          name: "allthecompressed:gray_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_7x</summary>

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
+          name: "allthecompressed:gray_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_8x</summary>

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
+          name: "allthecompressed:gray_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/gray_concrete_9x</summary>

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
+          name: "allthecompressed:gray_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/gray_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_1x</summary>

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
+          name: "allthecompressed:green_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_2x</summary>

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
+          name: "allthecompressed:green_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_3x</summary>

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
+          name: "allthecompressed:green_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_4x</summary>

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
+          name: "allthecompressed:green_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_5x</summary>

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
+          name: "allthecompressed:green_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_6x</summary>

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
+          name: "allthecompressed:green_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_7x</summary>

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
+          name: "allthecompressed:green_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_8x</summary>

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
+          name: "allthecompressed:green_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/green_concrete_9x</summary>

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
+          name: "allthecompressed:green_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/green_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_1x</summary>

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
+          name: "allthecompressed:kivi_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_2x</summary>

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
+          name: "allthecompressed:kivi_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_3x</summary>

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
+          name: "allthecompressed:kivi_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_4x</summary>

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
+          name: "allthecompressed:kivi_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_5x</summary>

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
+          name: "allthecompressed:kivi_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_6x</summary>

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
+          name: "allthecompressed:kivi_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_7x</summary>

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
+          name: "allthecompressed:kivi_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_8x</summary>

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
+          name: "allthecompressed:kivi_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/kivi_9x</summary>

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
+          name: "allthecompressed:kivi_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/kivi_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_1x</summary>

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
+          name: "allthecompressed:light_blue_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_2x</summary>

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
+          name: "allthecompressed:light_blue_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_3x</summary>

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
+          name: "allthecompressed:light_blue_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_4x</summary>

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
+          name: "allthecompressed:light_blue_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_5x</summary>

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
+          name: "allthecompressed:light_blue_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_6x</summary>

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
+          name: "allthecompressed:light_blue_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_7x</summary>

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
+          name: "allthecompressed:light_blue_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_8x</summary>

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
+          name: "allthecompressed:light_blue_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_blue_concrete_9x</summary>

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
+          name: "allthecompressed:light_blue_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_blue_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_1x</summary>

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
+          name: "allthecompressed:light_gray_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_2x</summary>

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
+          name: "allthecompressed:light_gray_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_3x</summary>

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
+          name: "allthecompressed:light_gray_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_4x</summary>

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
+          name: "allthecompressed:light_gray_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_5x</summary>

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
+          name: "allthecompressed:light_gray_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_6x</summary>

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
+          name: "allthecompressed:light_gray_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_7x</summary>

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
+          name: "allthecompressed:light_gray_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_8x</summary>

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
+          name: "allthecompressed:light_gray_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/light_gray_concrete_9x</summary>

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
+          name: "allthecompressed:light_gray_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/light_gray_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_1x</summary>

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
+          name: "allthecompressed:lime_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_2x</summary>

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
+          name: "allthecompressed:lime_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_3x</summary>

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
+          name: "allthecompressed:lime_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_4x</summary>

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
+          name: "allthecompressed:lime_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_5x</summary>

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
+          name: "allthecompressed:lime_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_6x</summary>

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
+          name: "allthecompressed:lime_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_7x</summary>

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
+          name: "allthecompressed:lime_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_8x</summary>

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
+          name: "allthecompressed:lime_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/lime_concrete_9x</summary>

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
+          name: "allthecompressed:lime_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/lime_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_1x</summary>

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
+          name: "allthecompressed:magenta_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_2x</summary>

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
+          name: "allthecompressed:magenta_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_3x</summary>

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
+          name: "allthecompressed:magenta_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_4x</summary>

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
+          name: "allthecompressed:magenta_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_5x</summary>

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
+          name: "allthecompressed:magenta_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_6x</summary>

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
+          name: "allthecompressed:magenta_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_7x</summary>

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
+          name: "allthecompressed:magenta_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_8x</summary>

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
+          name: "allthecompressed:magenta_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/magenta_concrete_9x</summary>

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
+          name: "allthecompressed:magenta_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/magenta_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_1x</summary>

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
+          name: "allthecompressed:mycelium_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_2x</summary>

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
+          name: "allthecompressed:mycelium_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_3x</summary>

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
+          name: "allthecompressed:mycelium_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_4x</summary>

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
+          name: "allthecompressed:mycelium_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_5x</summary>

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
+          name: "allthecompressed:mycelium_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_6x</summary>

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
+          name: "allthecompressed:mycelium_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_7x</summary>

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
+          name: "allthecompressed:mycelium_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_8x</summary>

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
+          name: "allthecompressed:mycelium_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/mycelium_9x</summary>

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
+          name: "allthecompressed:mycelium_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/mycelium_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_1x</summary>

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
+          name: "allthecompressed:orange_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_2x</summary>

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
+          name: "allthecompressed:orange_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_3x</summary>

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
+          name: "allthecompressed:orange_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_4x</summary>

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
+          name: "allthecompressed:orange_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_5x</summary>

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
+          name: "allthecompressed:orange_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_6x</summary>

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
+          name: "allthecompressed:orange_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_7x</summary>

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
+          name: "allthecompressed:orange_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_8x</summary>

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
+          name: "allthecompressed:orange_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/orange_concrete_9x</summary>

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
+          name: "allthecompressed:orange_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/orange_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_1x</summary>

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
+          name: "allthecompressed:pink_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_2x</summary>

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
+          name: "allthecompressed:pink_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_3x</summary>

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
+          name: "allthecompressed:pink_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_4x</summary>

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
+          name: "allthecompressed:pink_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_5x</summary>

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
+          name: "allthecompressed:pink_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_6x</summary>

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
+          name: "allthecompressed:pink_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_7x</summary>

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
+          name: "allthecompressed:pink_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_8x</summary>

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
+          name: "allthecompressed:pink_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/pink_concrete_9x</summary>

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
+          name: "allthecompressed:pink_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/pink_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_1x</summary>

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
+          name: "allthecompressed:purple_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_2x</summary>

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
+          name: "allthecompressed:purple_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_3x</summary>

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
+          name: "allthecompressed:purple_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_4x</summary>

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
+          name: "allthecompressed:purple_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_5x</summary>

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
+          name: "allthecompressed:purple_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_6x</summary>

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
+          name: "allthecompressed:purple_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_7x</summary>

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
+          name: "allthecompressed:purple_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_8x</summary>

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
+          name: "allthecompressed:purple_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/purple_concrete_9x</summary>

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
+          name: "allthecompressed:purple_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/purple_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_1x</summary>

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
+          name: "allthecompressed:red_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_2x</summary>

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
+          name: "allthecompressed:red_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_3x</summary>

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
+          name: "allthecompressed:red_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_4x</summary>

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
+          name: "allthecompressed:red_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_5x</summary>

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
+          name: "allthecompressed:red_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_6x</summary>

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
+          name: "allthecompressed:red_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_7x</summary>

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
+          name: "allthecompressed:red_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_8x</summary>

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
+          name: "allthecompressed:red_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/red_concrete_9x</summary>

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
+          name: "allthecompressed:red_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/red_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_1x</summary>

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
+          name: "allthecompressed:white_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_2x</summary>

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
+          name: "allthecompressed:white_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_3x</summary>

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
+          name: "allthecompressed:white_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_4x</summary>

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
+          name: "allthecompressed:white_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_5x</summary>

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
+          name: "allthecompressed:white_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_6x</summary>

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
+          name: "allthecompressed:white_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_7x</summary>

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
+          name: "allthecompressed:white_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_8x</summary>

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
+          name: "allthecompressed:white_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/white_concrete_9x</summary>

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
+          name: "allthecompressed:white_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/white_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_1x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_2x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_3x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_4x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_5x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_6x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_7x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_8x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_blue_9x</summary>

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
+          name: "allthecompressed:xychorium_storage_blue_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_blue_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_1x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_2x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_3x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_4x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_5x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_6x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_7x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_8x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_dark_9x</summary>

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
+          name: "allthecompressed:xychorium_storage_dark_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_dark_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_1x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_2x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_3x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_4x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_5x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_6x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_7x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_8x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_green_9x</summary>

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
+          name: "allthecompressed:xychorium_storage_green_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_green_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_1x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_2x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_3x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_4x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_5x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_6x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_7x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_8x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_light_9x</summary>

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
+          name: "allthecompressed:xychorium_storage_light_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_light_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_1x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_2x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_3x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_4x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_5x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_6x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_7x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_8x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/xychorium_storage_red_9x</summary>

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
+          name: "allthecompressed:xychorium_storage_red_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/xychorium_storage_red_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_1x</summary>

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
+          name: "allthecompressed:yellow_concrete_1x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_1x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_2x</summary>

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
+          name: "allthecompressed:yellow_concrete_2x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_2x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_3x</summary>

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
+          name: "allthecompressed:yellow_concrete_3x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_3x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_4x</summary>

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
+          name: "allthecompressed:yellow_concrete_4x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_4x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_5x</summary>

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
+          name: "allthecompressed:yellow_concrete_5x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_5x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_6x</summary>

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
+          name: "allthecompressed:yellow_concrete_6x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_6x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_7x</summary>

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
+          name: "allthecompressed:yellow_concrete_7x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_7x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_8x</summary>

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
+          name: "allthecompressed:yellow_concrete_8x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_8x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/allthecompressed/blocks/yellow_concrete_9x</summary>

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
+          name: "allthecompressed:yellow_concrete_9x"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "allthecompressed:blocks/yellow_concrete_9x"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/archaeology/cursed_pyramid</summary>

```diff
+{
+  type: "minecraft:archaeology"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:archer_pottery_sherd"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:miner_pottery_sherd"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:prize_pottery_sherd"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:skull_pottery_sherd"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:tnt"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:gunpowder"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:emerald"
+        }
+        {
+          type: "minecraft:item"
+          name: "cataclysm:necklace_of_the_desert"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:archaeology/cursed_pyramid"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/archaeology/cursed_pyramid_necklace</summary>

```diff
+{
+  type: "minecraft:archaeology"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:necklace_of_the_desert"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:archaeology/cursed_pyramid_necklace"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/abyssal_egg</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:abyssal_egg"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/ancient_metal_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ancient_metal_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/aptrgangr_head</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:aptrgangr_head"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_brick_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:azure_seastone_brick_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:azure_seastone_brick_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_brick_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_brick_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_brick_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_fence"
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
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_pillar_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_pillar_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:azure_seastone_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:azure_seastone_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_tiles</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_tiles"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/azure_seastone_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/black_steel_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/black_steel_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_fence"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/black_steel_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/blackstone_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:blackstone_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_azure_seastone</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_azure_seastone"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_azure_seastone_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_azure_seastone_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_azure_seastone_pillar_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_azure_seastone_pillar_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_end_stone_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_end_stone_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_obsidian_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_obsidian_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_purpur_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_purpur_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chiseled_stone_brick_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chiseled_stone_brick_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chorus_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chorus_fence"
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
<summary>minecraft/loot_table/cataclysm/blocks/chorus_planks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chorus_planks"
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
<summary>minecraft/loot_table/cataclysm/blocks/chorus_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:chorus_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:chorus_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/chorus_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chorus_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/chorus_stem</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:chorus_stem"
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
<summary>minecraft/loot_table/cataclysm/blocks/cursium_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:cursium_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/draugr_head</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:draugr_head"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/end_stone_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:end_stone_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/end_stone_teleport_trap_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:end_stone_teleport_trap_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/enderite_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:enderite_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/frosted_stone_brick_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:frosted_stone_brick_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:frosted_stone_brick_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/frosted_stone_brick_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:frosted_stone_brick_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/frosted_stone_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:frosted_stone_brick_wall"
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
<summary>minecraft/loot_table/cataclysm/blocks/frosted_stone_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:frosted_stone_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/ignitium_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ignitium_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/kobolediator_skull</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:kobolediator_skull"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/mechanical_fusion_anvil</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:mechanical_fusion_anvil"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/obsidian_brick_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:obsidian_brick_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:obsidian_brick_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/obsidian_brick_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:obsidian_brick_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/obsidian_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:obsidian_brick_wall"
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
<summary>minecraft/loot_table/cataclysm/blocks/obsidian_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:obsidian_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/obsidian_explosion_trap_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:obsidian_explosion_trap_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/pointed_icicle</summary>

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
+          name: "cataclysm:pointed_icicle"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:blocks/pointed_icicle"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_azure_seastone</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:polished_azure_seastone"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_azure_seastone_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:polished_azure_seastone_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:polished_azure_seastone_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_azure_seastone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:polished_azure_seastone_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/polished_azure_seastone_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:azure_seastone_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_end_stone</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:polished_end_stone"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_end_stone_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              conditions: [
+                {
+                  condition: "minecraft:block_state_property"
+                  block: "cataclysm:polished_end_stone_slab"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "cataclysm:polished_end_stone_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/polished_end_stone_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:polished_end_stone_stairs"
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
<summary>minecraft/loot_table/cataclysm/blocks/polished_obsidian</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:polished_obsidian"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/prismarine_brick_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:prismarine_brick_fence"
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
<summary>minecraft/loot_table/cataclysm/blocks/prismarine_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:prismarine_brick_wall"
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
<summary>minecraft/loot_table/cataclysm/blocks/purpur_void_rune_trap_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:purpur_void_rune_trap_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/purpur_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:purpur_wall"
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
<summary>minecraft/loot_table/cataclysm/blocks/quartz_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:quartz_brick_wall"
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
<summary>minecraft/loot_table/cataclysm/blocks/sandstone_falling_trap</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sandstone_falling_trap"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/sandstone_ignite_trap</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sandstone_ignite_trap"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/sandstone_poison_dart_trap</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sandstone_poison_dart_trap"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/stone_pillar</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:stone_pillar"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/stone_tile_slab</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:stone_tile_slab"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/stone_tile_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:stone_tile_stairs"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/stone_tile_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:stone_tile_wall"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/stone_tiles</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:stone_tiles"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/void_crystal</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_crystal"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/void_infused_end_stone_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_infused_end_stone_bricks"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/void_lantern_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_lantern_block"
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
<summary>minecraft/loot_table/cataclysm/blocks/void_stone</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_stone"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/blocks/witherite_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:witherite_block"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/chests/frosted_prison_treasure</summary>

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
+                max: 9
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:diamond"
+          weight: 5
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
+          name: "minecraft:iron_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 9
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:black_steel_ingot"
+          weight: 10
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 7
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:gold_ingot"
+          weight: 15
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              add: false
+              count: {
+                type: "minecraft:uniform"
+                max: 9
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:emerald"
+          weight: 2
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:saddle"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:iron_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:golden_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          name: "minecraft:diamond_horse_armor"
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_sword"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_boots"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_chestplate"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_leggings"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_helmet"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_pickaxe"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:diamond_shovel"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "cataclysm:black_steel_sword"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "cataclysm:black_steel_axe"
+          weight: 3
+        }
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:enchant_with_levels"
+              levels: {
+                type: "minecraft:uniform"
+                max: 39
+                min: 20
+              }
+              options: "#minecraft:on_random_loot"
+            }
+          ]
+          name: "minecraft:iron_shovel"
+          weight: 3
+        }
+      ]
+      rolls: {
+        type: "minecraft:uniform"
+        max: 6
+        min: 2
+      }
+    }
+  ]
+  random_sequence: "cataclysm:chests/frosted_prison_treasure"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/amethyst_crab</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 10
+                min: 4
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:amethyst_crab_meat"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 5
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:amethyst_crab_shell"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ancient_remnant</summary>

```diff
+{
+  pools: [
+    {
+      name: "bottle"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:sandstorm_in_a_bottle"
+        }
+      ]
+    }
+    {
+      name: "skull"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:remnant_skull"
+        }
+      ]
+    }
+    {
+      name: "metal"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ancient_metal_block"
+        }
+      ]
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_ancient_remnant"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/aptrgangr</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:bone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 4
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:rotten_flesh"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:black_steel_nugget"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 2
+                min: 1
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:black_steel_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/draugr"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/coral_golem</summary>

```diff
+{
+  pools: [
+    {
+      name: "coral_golem"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:crystallized_coral_fragments"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/coralssus</summary>

```diff
+{
+  pools: [
+    {
+      name: "coralssus"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:coral_chunk"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/deepling</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "deepling"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:nautilus_shell"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/deepling_angler</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "deepling_angler"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:nautilus_shell"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 0.025
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/deepling_brute</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "deepling_brute"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:nautilus_shell"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 0.05
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/deepling_priest</summary>

```diff
+{
+  pools: [
+    {
+      name: "deepling_priest"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:athame"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/deepling_warlock</summary>

```diff
+{
+  pools: [
+    {
+      name: "deepling_warlock"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:athame"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/draugr</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:bone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:rotten_flesh"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:black_steel_nugget"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:killed_by_player"
+        }
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          enchanted_chance: {
+            type: "minecraft:linear"
+            base: 0.035
+            per_level_above_first: 0.01
+          }
+          enchantment: "minecraft:looting"
+          unenchanted_chance: 0.025
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/draugr"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/elite_draugr</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:bone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:rotten_flesh"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:black_steel_nugget"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:killed_by_player"
+        }
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          enchanted_chance: {
+            type: "minecraft:linear"
+            base: 0.035
+            per_level_above_first: 0.01
+          }
+          enchantment: "minecraft:looting"
+          unenchanted_chance: 0.025
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/elite_draugr"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ender_golem</summary>

```diff
+{
+  pools: [
+    {
+      name: "ender_golem"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_core"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ender_guardian</summary>

```diff
+{
+  pools: [
+    {
+      name: "ender_guardian"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:gauntlet_of_guard"
+          weight: 1
+        }
+      ]
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_ender_guardian"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/endermaptera</summary>

```diff
+{
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/endermaptera_has_jaws</summary>

```diff
+{
+  pools: [
+    {
+      name: "endermaptera"
+      rolls: {
+        min: 1
+        max: 2
+      }
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:void_jaw"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ignis</summary>

```diff
+{
+  pools: [
+    {
+      name: "ignis"
+      rolls: 3
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ignitium_ingot"
+          weight: 1
+        }
+      ]
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_ignis"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ignited_berserker</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:dying_ember"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ignited_revenant</summary>

```diff
+{
+  pools: [
+    {
+      name: "ignited_revenant"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:burning_ashes"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/kobolediator</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "skull"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:kobolediator_skull"
+          weight: 1
+        }
+      ]
+    }
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
+                max: 5
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 3
+                min: 1
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:koboleton_bone"
+        }
+      ]
+      rolls: 1
+    }
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
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:ancient_metal_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/kobolediator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/koboleton</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:koboleton_bone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:ancient_metal_nugget"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:killed_by_player"
+        }
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          enchanted_chance: {
+            type: "minecraft:linear"
+            base: 0.035
+            per_level_above_first: 0.01
+          }
+          enchantment: "minecraft:looting"
+          unenchanted_chance: 0.025
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:ancient_metal_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/koboleton"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/lionfish</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "lionfish"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          functions: [
+            {
+              function: "minecraft:set_count"
+              count: 1
+            }
+          ]
+          name: "cataclysm:lionfish"
+        }
+      ]
+    }
+    {
+      name: "lionfish_bm"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:bone_meal"
+        }
+      ]
+      conditions: [
+        {
+          condition: "minecraft:random_chance"
+          chance: 0.05
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/maledictus</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_maledictus"
+          weight: 1
+        }
+      ]
+    }
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
+                max: 4
+                min: 3
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:cursium_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/maledictus"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/modern_remnant</summary>

```diff
+{
+  pools: [
+    {
+      name: "skull"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:remnant_skull"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/netherite_ministrosity</summary>

```diff
+{
+  pools: [
+    {
+      name: "skull"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:netherite_effigy"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/netherite_monstrosity</summary>

```diff
+{
+  pools: [
+    {
+      name: "hammer"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:infernal_forge"
+        }
+      ]
+    }
+    {
+      name: "horn"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:monstrous_horn"
+        }
+      ]
+    }
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
+                max: 24
+                min: 16
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "cataclysm:lava_power_cell"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_netherite_monstrosity"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/royal_draugr</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:bone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "minecraft:rotten_flesh"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 1
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 1
+                min: 0
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:black_steel_nugget"
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:killed_by_player"
+        }
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          enchanted_chance: {
+            type: "minecraft:linear"
+            base: 0.035
+            per_level_above_first: 0.01
+          }
+          enchantment: "minecraft:looting"
+          unenchanted_chance: 0.025
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:black_steel_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/royal_draugr"
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_baby_leviathan</summary>

```diff
+{
+  pools: [
+    {
+      name: "the_baby_leviathan"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:abyssal_egg"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_harbinger</summary>

```diff
+{
+  pools: [
+    {
+      name: "block"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:witherite_block"
+          weight: 1
+        }
+      ]
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_the_harbinger"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_leviathan</summary>

```diff
+{
+  pools: [
+    {
+      name: "hammer"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:tidal_claws"
+        }
+      ]
+    }
+    {
+      name: "horn"
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:abyssal_egg"
+        }
+      ]
+    }
+    {
+      name: "disc"
+      conditions: [
+        {
+          condition: "minecraft:random_chance_with_enchanted_bonus"
+          unenchanted_chance: 0.1
+          enchanted_chance: 0.1
+          enchantment: "minecraft:looting"
+        }
+      ]
+      rolls: 1
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "cataclysm:music_disc_the_leviathan"
+          weight: 1
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_prowler</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 9
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:redstone"
+        }
+      ]
+      rolls: 1
+    }
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
+                max: 7
+                min: 5
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:iron_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_watcher</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 2
+                min: 0
+              }
+              function: "minecraft:set_count"
+            }
+          ]
+          name: "minecraft:redstone"
+        }
+      ]
+      rolls: 1
+    }
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
+          name: "minecraft:iron_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/wadjet</summary>

```diff
+{
+  type: "minecraft:entity"
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
+                max: 4
+                min: 2
+              }
+              function: "minecraft:set_count"
+            }
+            {
+              count: {
+                type: "minecraft:uniform"
+                max: 2
+                min: 1
+              }
+              enchantment: "minecraft:looting"
+              function: "minecraft:enchanted_count_increase"
+            }
+          ]
+          name: "cataclysm:ancient_metal_ingot"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "cataclysm:entities/wadjet"
+}

```


</details>

</blockquote>

</details>

