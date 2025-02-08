# Changelog

# 📦 2.34

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (15)</summary>

- All The Leaks (0.1.13-beta+1.21.1-neoforge) -> (0.1.14-beta+1.21.1-neoforge)
- Balm (21.0.23) -> (21.0.25)
- L_Ender's Cataclysm (2.49-1.21.1) -> (2.52-1.21.1)
- CodeChicken Lib (4.6.0.520) -> (4.6.0.521)
- Cooking for Blockheads (21.1.8) -> (21.1.9)
- Crystalix (1.0.2) -> (1.1.0)
- Everything is Copper (1.21.1-2.4.1) -> (1.21.1-2.4.2)
- FTB Quests (2101.1.4) -> (2101.1.5)
- GuideME (2.5.1) -> (2.6.0)
- lionfishapi (1.8) -> (2.6)
- NeoForge (21.1.115) -> (21.1.116)
- Nolijium (0.5.4) -> (0.5.5)
- Patchouli (1.21-87-NEOFORGE) -> (1.21-88-NEOFORGE)
- PotionsMaster (0.6.7-packdev) -> (0.6.8-packdev)
- Sophisticated Storage (1.3.4) -> (1.3.5)

</details>

## 🍳 Recipes

<details>
<summary>Added (40)</summary>
<blockquote>

<details>
<summary>crystalix/black_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/black"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:black_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/blue"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:blue_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/brown_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/brown"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:brown_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/crystalix_wand</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    n: {
+      tag: "c:nether_stars"
+    }
+    s: {
+      item: "minecraft:stick"
+    }
+  }
+  pattern: [
+    "  n"
+    " s "
+    "s  "
+  ]
+  result: {
+    count: 1
+    id: "crystalix:crystalix_wand"
+  }
+}

```


</details>

<details>
<summary>crystalix/cyan_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/cyan"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:cyan_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/gray"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:gray_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/green_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/green"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:green_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/light_blue"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_blue_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/light_gray"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_gray_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/lime_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/lime"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:lime_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/magenta_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/magenta"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:magenta_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/orange_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/orange"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:orange_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/pink_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/pink"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:pink_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/purple_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/purple"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:purple_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/red_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/red"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:red_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_black_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/black"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:black_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/blue"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:blue_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_brown_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/brown"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:brown_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_cyan_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/cyan"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:cyan_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/gray"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:gray_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_green_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/green"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:green_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/light_blue"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:light_blue_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/light_gray"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:light_gray_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_lime_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/lime"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:lime_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_magenta_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/magenta"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:magenta_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_orange_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/orange"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:orange_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_pink_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/pink"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:pink_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_purple_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/purple"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:purple_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_red_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/red"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:red_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_white_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/white"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:white_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_yellow_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:blocks"
+    }
+    b: {
+      tag: "c:dyes/yellow"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 8
+    id: "crystalix:yellow_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/white_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/white"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:white_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/yellow_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "c:gems/amethyst"
+    }
+    c: {
+      tag: "c:dyes/yellow"
+    }
+    g: {
+      tag: "c:glass_blocks"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:yellow_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>minecraft/copper_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "copper_ingot"
+  ingredients: [
+    {
+      tag: "c:storage_blocks/copper"
+    }
+  ]
+  result: {
+    count: 9
+    id: "minecraft:copper_ingot"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_copper_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:copper_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/copper"
+    }
+    C: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      item: "sophisticatedstorage:chest"
+    }
+  }
+  pattern: [
+    "CCC"
+    "CSC"
+    "CBC"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:copper_chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_diamond_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:diamond_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/diamond"
+    }
+    D: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      item: "sophisticatedstorage:gold_chest"
+    }
+  }
+  pattern: [
+    "DDD"
+    "DSD"
+    "DBD"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:diamond_chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_gold_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:gold_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/gold"
+    }
+    G: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      item: "sophisticatedstorage:iron_chest"
+    }
+  }
+  pattern: [
+    "GGG"
+    "GSG"
+    "GBG"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:gold_chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_iron_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:iron_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/iron"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      item: "sophisticatedstorage:chest"
+    }
+  }
+  pattern: [
+    "III"
+    "ISI"
+    "IBI"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:iron_chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_iron_chest_from_copper_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:iron_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade"
+  category: "misc"
+  key: {
+    I: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      item: "sophisticatedstorage:copper_chest"
+    }
+  }
+  pattern: [
+    "III"
+    "ISI"
+    "III"
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:iron_chest"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorage/double_netherite_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorage:netherite_chest"
+    }
+  ]
+  type: "sophisticatedstorage:double_chest_tier_upgrade_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "sophisticatedstorage:diamond_chest"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    count: 1
+    id: "sophisticatedstorage:netherite_chest"
+  }
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (1)</summary>
<blockquote>

<details>
<summary>almostunified/minecraft</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "minecraft"
   recipes: [
     "1$anvil"
     "1$blue_dye"
     "1$bolt_armor_trim_smithing_template"
     "1$chiseled_copper_from_copper_block_stonecutting"
     "1$clock"
     "1$coal"
     "1$compass"
     "1$copper_block"
     "1$copper_bulb"
     "1$copper_grate"
     "1$copper_grate_from_copper_block_stonecutting"
+    "1$copper_ingot"
     "1$copper_ingot_from_blasting_raw_copper"
     "1$copper_ingot_from_smelting_raw_copper"
     "1$crafter"
     "1$cut_copper"
     "1$cut_copper_from_copper_block_stonecutting"
     "1$cut_copper_slab_from_copper_block_stonecutting"
     "1$cut_copper_stairs_from_copper_block_stonecutting"
     "1$detector_rail"
     "1$diamond"
     "1$diamond_block"
     "1$dispenser"
     "1$dropper"
     "1$emerald"
     "1$emerald_block"
     "1$exposed_copper_bulb"
     "1$gauntlet_perfected_smithing"
     "1$gold_block"
     "1$gold_ingot_from_blasting_raw_gold"
     "1$gold_ingot_from_gold_block"
     "1$gold_ingot_from_smelting_raw_gold"
     "1$gold_nugget"
     "1$iron_block"
     "1$iron_ingot_from_blasting_raw_iron"
     "1$iron_ingot_from_iron_block"
     "1$iron_ingot_from_smelting_raw_iron"
     "1$iron_nugget"
     "1$lapis_block"
     "1$lapis_lazuli"
     "1$netherite_axe_smithing"
     "1$netherite_block"
     "1$netherite_boots_smithing"
     "1$netherite_chestplate_smithing"
     "1$netherite_gear_smithing"
     "1$netherite_green_sweater_smithing"
     "1$netherite_helmet_smithing"
     "1$netherite_hoe_smithing"
     "1$netherite_ingot_from_netherite_block"
     "1$netherite_leggings_smithing"
     "1$netherite_pickaxe_smithing"
     "1$netherite_plaid_leggings_smithing"
     "1$netherite_red_sweater_smithing"
     "1$netherite_reindeer_antlers_smithing"
     "1$netherite_reindeer_slippers_smithing"
     "1$netherite_santa_hat_smithing"
     "1$netherite_santa_slippers_smithing"
     "1$netherite_shovel_smithing"
     "1$netherite_striped_leggings_smithing"
     "1$netherite_sword_smithing"
     "1$netherite_wood_cutter"
     "1$note_block"
     "1$observer"
     "1$oxidized_copper_bulb"
     "1$piston"
     "1$powered_rail"
     "1$raw_copper"
     "1$raw_copper_block"
     "1$raw_gold"
     "1$raw_gold_block"
     "1$raw_iron"
     "1$raw_iron_block"
     "1$redstone"
     "1$redstone_block"
     "1$redstone_lamp"
     "1$redstone_torch"
     "1$repeater"
     "1$target"
     "1$waxed_copper_block_from_honeycomb"
     "1$waxed_copper_bulb"
     "1$waxed_exposed_copper_bulb"
     "1$waxed_oxidized_copper_bulb"
     "1$waxed_weathered_copper_bulb"
     "1$weathered_copper_bulb"
     "1$workbench/carpenters_table"
     "1$workbench/glassblower"
     "1$workbench/mason_table"
     "1$workbench/tinkering_table"
     "3$coal_from_blasting_coal_ore"
     "3$coal_from_blasting_deepslate_coal_ore"
     "3$coal_from_smelting_coal_ore"
     "3$coal_from_smelting_deepslate_coal_ore"
     "3$copper_ingot_from_blasting_copper_ore"
     "3$copper_ingot_from_blasting_deepslate_copper_ore"
     "3$copper_ingot_from_smelting_copper_ore"
     "3$copper_ingot_from_smelting_deepslate_copper_ore"
     "3$diamond_from_blasting_deepslate_diamond_ore"
     "3$diamond_from_blasting_diamond_ore"
     "3$diamond_from_smelting_deepslate_diamond_ore"
     "3$diamond_from_smelting_diamond_ore"
     "3$emerald_from_blasting_deepslate_emerald_ore"
     "3$emerald_from_blasting_emerald_ore"
     "3$emerald_from_smelting_deepslate_emerald_ore"
     "3$emerald_from_smelting_emerald_ore"
     "3$gold_ingot_from_blasting_deepslate_gold_ore"
     "3$gold_ingot_from_blasting_gold_ore"
     "3$gold_ingot_from_blasting_nether_gold_ore"
     "3$gold_ingot_from_smelting_deepslate_gold_ore"
     "3$gold_ingot_from_smelting_gold_ore"
     "3$gold_ingot_from_smelting_nether_gold_ore"
     "3$iron_ingot_from_blasting_deepslate_iron_ore"
     "3$iron_ingot_from_blasting_iron_ore"
     "3$iron_ingot_from_smelting_deepslate_iron_ore"
     "3$iron_ingot_from_smelting_iron_ore"
     "3$lapis_lazuli_from_blasting_deepslate_lapis_ore"
     "3$lapis_lazuli_from_blasting_lapis_ore"
     "3$lapis_lazuli_from_smelting_deepslate_lapis_ore"
     "3$lapis_lazuli_from_smelting_lapis_ore"
     "3$lead_ingot_from_blasting_deepslate_lead_ore"
     "3$lead_ingot_from_blasting_lead_ore"
     "3$lead_ingot_from_blasting_lead_raw"
     "3$lead_ingot_from_smelting_deepslate_lead_ore"
     "3$lead_ingot_from_smelting_lead_ore"
     "3$lead_ingot_from_smelting_lead_raw"
     "3$nickel_ingot_from_blasting_deepslate_nickel_ore"
     "3$nickel_ingot_from_blasting_nickel_ore"
     "3$nickel_ingot_from_blasting_nickel_raw"
     "3$nickel_ingot_from_smelting_deepslate_nickel_ore"
     "3$nickel_ingot_from_smelting_nickel_ore"
     "3$nickel_ingot_from_smelting_nickel_raw"
     "3$redstone_from_blasting_deepslate_redstone_ore"
     "3$redstone_from_blasting_redstone_ore"
     "3$redstone_from_smelting_deepslate_redstone_ore"
     "3$redstone_from_smelting_redstone_ore"
     "3$silver_ingot_from_blasting_deepslate_silver_ore"
     "3$silver_ingot_from_blasting_silver_ore"
     "3$silver_ingot_from_blasting_silver_raw"
     "3$silver_ingot_from_smelting_deepslate_silver_ore"
     "3$silver_ingot_from_smelting_silver_ore"
     "3$silver_ingot_from_smelting_silver_raw"
     "3$tin_ingot_from_blasting_deepslate_tin_ore"
     "3$tin_ingot_from_blasting_tin_ore"
     "3$tin_ingot_from_blasting_tin_raw"
     "3$tin_ingot_from_smelting_deepslate_tin_ore"
     "3$tin_ingot_from_smelting_tin_ore"
     "3$tin_ingot_from_smelting_tin_raw"
     "3$zinc_ingot_from_blasting_deepslate_zinc_ore"
     "3$zinc_ingot_from_blasting_zinc_ore"
     "3$zinc_ingot_from_blasting_zinc_raw"
     "3$zinc_ingot_from_smelting_deepslate_zinc_ore"
     "3$zinc_ingot_from_smelting_zinc_ore"
     "3$zinc_ingot_from_smelting_zinc_raw"
   ]
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (1237)</summary>
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
<summary>crystalix/black_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      item: "crystalix:black_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_dark_ghost_block_from_black_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_dark_ghost_block_from_black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      item: "crystalix:black_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      item: "crystalix:black_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_light_ghost_block_from_black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_light_ghost_block_from_black_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      item: "crystalix:black_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_dark_block_from_black_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_dark_block_from_black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_dark_ghost_block_from_black_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_dark_ghost_block_from_black_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_dark_ghost_block_from_black_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_ghost_block_from_black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_ghost_block_from_black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_light_block_from_black_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_light_block_from_black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_light_ghost_block_from_black_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_light_ghost_block_from_black_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_reinforced_light_ghost_block_from_black_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/black"
-    }
-    g: {
-      item: "crystalix:black_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_dark_block_from_black_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_dark_block_from_black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_dark_ghost_block_from_black_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_dark_ghost_block_from_black_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_dark_ghost_block_from_black_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_ghost_block_from_black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_ghost_block_from_black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_light_block_from_black_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_light_block_from_black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_light_ghost_block_from_black_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_light_ghost_block_from_black_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_light_ghost_block_from_black_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_block_from_black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_block_from_black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_block_from_black_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_block_from_black_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_block_from_black_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_ghost_block_from_black_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_ghost_block_from_black_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_ghost_block_from_black_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_dark_ghost_block_from_black_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_ghost_block_from_black_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_ghost_block_from_black_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_ghost_block_from_black_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_block_from_black_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_block_from_black_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_block_from_black_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_ghost_block_from_black_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:black_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_ghost_block_from_black_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:black_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_ghost_block_from_black_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/black_shadeless_reinforced_light_ghost_block_from_black_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:black_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:black_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      item: "crystalix:blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_dark_ghost_block_from_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_dark_ghost_block_from_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      item: "crystalix:blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      item: "crystalix:blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_light_ghost_block_from_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_light_ghost_block_from_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      item: "crystalix:blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_dark_block_from_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_dark_block_from_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_dark_ghost_block_from_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_dark_ghost_block_from_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_dark_ghost_block_from_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_ghost_block_from_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_ghost_block_from_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_light_block_from_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_light_block_from_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_light_ghost_block_from_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_light_ghost_block_from_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_reinforced_light_ghost_block_from_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/blue"
-    }
-    g: {
-      item: "crystalix:blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_dark_block_from_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_dark_block_from_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_dark_ghost_block_from_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_dark_ghost_block_from_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_dark_ghost_block_from_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_ghost_block_from_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_ghost_block_from_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_light_block_from_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_light_block_from_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_light_ghost_block_from_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_light_ghost_block_from_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_light_ghost_block_from_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_block_from_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_block_from_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_block_from_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_block_from_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_block_from_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_ghost_block_from_blue_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_ghost_block_from_blue_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_ghost_block_from_blue_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_dark_ghost_block_from_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_ghost_block_from_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_ghost_block_from_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_ghost_block_from_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_block_from_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_block_from_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_block_from_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_ghost_block_from_blue_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:blue_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_ghost_block_from_blue_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_ghost_block_from_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/blue_shadeless_reinforced_light_ghost_block_from_blue_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:blue_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      item: "crystalix:brown_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_dark_ghost_block_from_brown_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_dark_ghost_block_from_brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      item: "crystalix:brown_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      item: "crystalix:brown_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_light_ghost_block_from_brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_light_ghost_block_from_brown_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      item: "crystalix:brown_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_dark_block_from_brown_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_dark_block_from_brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_dark_ghost_block_from_brown_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_dark_ghost_block_from_brown_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_dark_ghost_block_from_brown_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_ghost_block_from_brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_ghost_block_from_brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_light_block_from_brown_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_light_block_from_brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_light_ghost_block_from_brown_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_light_ghost_block_from_brown_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_reinforced_light_ghost_block_from_brown_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/brown"
-    }
-    g: {
-      item: "crystalix:brown_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_dark_block_from_brown_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_dark_block_from_brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_dark_ghost_block_from_brown_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_dark_ghost_block_from_brown_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_dark_ghost_block_from_brown_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_ghost_block_from_brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_ghost_block_from_brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_light_block_from_brown_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_light_block_from_brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_light_ghost_block_from_brown_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_light_ghost_block_from_brown_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_light_ghost_block_from_brown_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_block_from_brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_block_from_brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_block_from_brown_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_block_from_brown_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_block_from_brown_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_ghost_block_from_brown_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_ghost_block_from_brown_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_ghost_block_from_brown_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_dark_ghost_block_from_brown_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_ghost_block_from_brown_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_ghost_block_from_brown_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_ghost_block_from_brown_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_block_from_brown_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_block_from_brown_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_block_from_brown_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_ghost_block_from_brown_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:brown_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_ghost_block_from_brown_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_ghost_block_from_brown_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/brown_shadeless_reinforced_light_ghost_block_from_brown_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:brown_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      item: "crystalix:cyan_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_dark_ghost_block_from_cyan_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_dark_ghost_block_from_cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      item: "crystalix:cyan_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      item: "crystalix:cyan_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_light_ghost_block_from_cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_light_ghost_block_from_cyan_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      item: "crystalix:cyan_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_dark_block_from_cyan_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_dark_block_from_cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_dark_ghost_block_from_cyan_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_dark_ghost_block_from_cyan_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_dark_ghost_block_from_cyan_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_ghost_block_from_cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_ghost_block_from_cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_light_block_from_cyan_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_light_block_from_cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_light_ghost_block_from_cyan_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_light_ghost_block_from_cyan_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_reinforced_light_ghost_block_from_cyan_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/cyan"
-    }
-    g: {
-      item: "crystalix:cyan_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_dark_block_from_cyan_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_dark_block_from_cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_dark_ghost_block_from_cyan_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_dark_ghost_block_from_cyan_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_dark_ghost_block_from_cyan_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_ghost_block_from_cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_ghost_block_from_cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_light_block_from_cyan_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_light_block_from_cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_light_ghost_block_from_cyan_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_light_ghost_block_from_cyan_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_light_ghost_block_from_cyan_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_block_from_cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_block_from_cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_block_from_cyan_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_block_from_cyan_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_block_from_cyan_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_ghost_block_from_cyan_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_ghost_block_from_cyan_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_ghost_block_from_cyan_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_dark_ghost_block_from_cyan_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_ghost_block_from_cyan_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_ghost_block_from_cyan_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_ghost_block_from_cyan_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_block_from_cyan_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_block_from_cyan_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_block_from_cyan_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_ghost_block_from_cyan_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:cyan_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_ghost_block_from_cyan_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_ghost_block_from_cyan_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/cyan_shadeless_reinforced_light_ghost_block_from_cyan_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:cyan_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      item: "crystalix:gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_dark_ghost_block_from_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_dark_ghost_block_from_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      item: "crystalix:gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      item: "crystalix:gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_light_ghost_block_from_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_light_ghost_block_from_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      item: "crystalix:gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_dark_block_from_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_dark_block_from_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_dark_ghost_block_from_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_dark_ghost_block_from_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_dark_ghost_block_from_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_ghost_block_from_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_ghost_block_from_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_light_block_from_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_light_block_from_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_light_ghost_block_from_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_light_ghost_block_from_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_reinforced_light_ghost_block_from_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/gray"
-    }
-    g: {
-      item: "crystalix:gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_dark_block_from_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_dark_block_from_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_dark_ghost_block_from_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_dark_ghost_block_from_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_dark_ghost_block_from_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_ghost_block_from_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_ghost_block_from_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_light_block_from_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_light_block_from_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_light_ghost_block_from_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_light_ghost_block_from_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_light_ghost_block_from_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_block_from_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_block_from_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_block_from_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_block_from_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_block_from_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_ghost_block_from_gray_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_ghost_block_from_gray_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_ghost_block_from_gray_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_dark_ghost_block_from_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_ghost_block_from_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_ghost_block_from_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_ghost_block_from_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_block_from_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_block_from_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_block_from_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_ghost_block_from_gray_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:gray_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_ghost_block_from_gray_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_ghost_block_from_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/gray_shadeless_reinforced_light_ghost_block_from_gray_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:gray_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      item: "crystalix:green_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_dark_ghost_block_from_green_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_dark_ghost_block_from_green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      item: "crystalix:green_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      item: "crystalix:green_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_light_ghost_block_from_green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_light_ghost_block_from_green_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      item: "crystalix:green_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_dark_block_from_green_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_dark_block_from_green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_dark_ghost_block_from_green_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_dark_ghost_block_from_green_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_dark_ghost_block_from_green_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_ghost_block_from_green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_ghost_block_from_green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_light_block_from_green_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_light_block_from_green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_light_ghost_block_from_green_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_light_ghost_block_from_green_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_reinforced_light_ghost_block_from_green_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/green"
-    }
-    g: {
-      item: "crystalix:green_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_dark_block_from_green_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_dark_block_from_green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_dark_ghost_block_from_green_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_dark_ghost_block_from_green_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_dark_ghost_block_from_green_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_ghost_block_from_green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_ghost_block_from_green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_light_block_from_green_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_light_block_from_green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_light_ghost_block_from_green_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_light_ghost_block_from_green_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_light_ghost_block_from_green_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_block_from_green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_block_from_green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_block_from_green_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_block_from_green_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_block_from_green_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_ghost_block_from_green_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_ghost_block_from_green_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_ghost_block_from_green_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_dark_ghost_block_from_green_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_ghost_block_from_green_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_ghost_block_from_green_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_ghost_block_from_green_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_block_from_green_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_block_from_green_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_block_from_green_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_ghost_block_from_green_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:green_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_ghost_block_from_green_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:green_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_ghost_block_from_green_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/green_shadeless_reinforced_light_ghost_block_from_green_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:green_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:green_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      item: "crystalix:light_blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_dark_ghost_block_from_light_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_dark_ghost_block_from_light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      item: "crystalix:light_blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      item: "crystalix:light_blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_light_ghost_block_from_light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_light_ghost_block_from_light_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      item: "crystalix:light_blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_dark_block_from_light_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_dark_block_from_light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_dark_ghost_block_from_light_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_dark_ghost_block_from_light_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_dark_ghost_block_from_light_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_ghost_block_from_light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_ghost_block_from_light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_light_block_from_light_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_light_block_from_light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_light_ghost_block_from_light_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_light_ghost_block_from_light_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_reinforced_light_ghost_block_from_light_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/light_blue"
-    }
-    g: {
-      item: "crystalix:light_blue_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_dark_block_from_light_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_dark_block_from_light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_dark_ghost_block_from_light_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_dark_ghost_block_from_light_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_dark_ghost_block_from_light_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_ghost_block_from_light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_ghost_block_from_light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_light_block_from_light_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_light_block_from_light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_light_ghost_block_from_light_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_light_ghost_block_from_light_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_light_ghost_block_from_light_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_block_from_light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_block_from_light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_block_from_light_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_block_from_light_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_block_from_light_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_ghost_block_from_light_blue_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_ghost_block_from_light_blue_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_ghost_block_from_light_blue_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_dark_ghost_block_from_light_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_ghost_block_from_light_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_ghost_block_from_light_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_ghost_block_from_light_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_block_from_light_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_block_from_light_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_block_from_light_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_ghost_block_from_light_blue_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_blue_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_ghost_block_from_light_blue_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_ghost_block_from_light_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_blue_shadeless_reinforced_light_ghost_block_from_light_blue_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_blue_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      item: "crystalix:light_gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_dark_ghost_block_from_light_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_dark_ghost_block_from_light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      item: "crystalix:light_gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      item: "crystalix:light_gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_light_ghost_block_from_light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_light_ghost_block_from_light_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      item: "crystalix:light_gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_dark_block_from_light_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_dark_block_from_light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_dark_ghost_block_from_light_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_dark_ghost_block_from_light_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_dark_ghost_block_from_light_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_ghost_block_from_light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_ghost_block_from_light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_light_block_from_light_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_light_block_from_light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_light_ghost_block_from_light_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_light_ghost_block_from_light_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_reinforced_light_ghost_block_from_light_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/light_gray"
-    }
-    g: {
-      item: "crystalix:light_gray_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_dark_block_from_light_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_dark_block_from_light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_dark_ghost_block_from_light_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_dark_ghost_block_from_light_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_dark_ghost_block_from_light_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_ghost_block_from_light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_ghost_block_from_light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_light_block_from_light_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_light_block_from_light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_light_ghost_block_from_light_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_light_ghost_block_from_light_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_light_ghost_block_from_light_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_block_from_light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_block_from_light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_block_from_light_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_block_from_light_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_block_from_light_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_ghost_block_from_light_gray_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_ghost_block_from_light_gray_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_ghost_block_from_light_gray_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_dark_ghost_block_from_light_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_ghost_block_from_light_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_ghost_block_from_light_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_ghost_block_from_light_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_block_from_light_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_block_from_light_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_block_from_light_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_ghost_block_from_light_gray_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:light_gray_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_ghost_block_from_light_gray_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_ghost_block_from_light_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/light_gray_shadeless_reinforced_light_ghost_block_from_light_gray_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:light_gray_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      item: "crystalix:lime_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_dark_ghost_block_from_lime_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_dark_ghost_block_from_lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      item: "crystalix:lime_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      item: "crystalix:lime_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_light_ghost_block_from_lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_light_ghost_block_from_lime_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      item: "crystalix:lime_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_dark_block_from_lime_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_dark_block_from_lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_dark_ghost_block_from_lime_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_dark_ghost_block_from_lime_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_dark_ghost_block_from_lime_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_ghost_block_from_lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_ghost_block_from_lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_light_block_from_lime_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_light_block_from_lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_light_ghost_block_from_lime_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_light_ghost_block_from_lime_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_reinforced_light_ghost_block_from_lime_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/lime"
-    }
-    g: {
-      item: "crystalix:lime_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_dark_block_from_lime_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_dark_block_from_lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_dark_ghost_block_from_lime_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_dark_ghost_block_from_lime_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_dark_ghost_block_from_lime_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_ghost_block_from_lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_ghost_block_from_lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_light_block_from_lime_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_light_block_from_lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_light_ghost_block_from_lime_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_light_ghost_block_from_lime_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_light_ghost_block_from_lime_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_block_from_lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_block_from_lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_block_from_lime_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_block_from_lime_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_block_from_lime_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_ghost_block_from_lime_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_ghost_block_from_lime_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_ghost_block_from_lime_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_dark_ghost_block_from_lime_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_ghost_block_from_lime_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_ghost_block_from_lime_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_ghost_block_from_lime_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_block_from_lime_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_block_from_lime_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_block_from_lime_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_ghost_block_from_lime_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:lime_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_ghost_block_from_lime_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_ghost_block_from_lime_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/lime_shadeless_reinforced_light_ghost_block_from_lime_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:lime_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      item: "crystalix:magenta_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_dark_ghost_block_from_magenta_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_dark_ghost_block_from_magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      item: "crystalix:magenta_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      item: "crystalix:magenta_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_light_ghost_block_from_magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_light_ghost_block_from_magenta_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      item: "crystalix:magenta_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_dark_block_from_magenta_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_dark_block_from_magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_dark_ghost_block_from_magenta_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_dark_ghost_block_from_magenta_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_dark_ghost_block_from_magenta_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_ghost_block_from_magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_ghost_block_from_magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_light_block_from_magenta_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_light_block_from_magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_light_ghost_block_from_magenta_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_light_ghost_block_from_magenta_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_reinforced_light_ghost_block_from_magenta_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/magenta"
-    }
-    g: {
-      item: "crystalix:magenta_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_dark_block_from_magenta_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_dark_block_from_magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_dark_ghost_block_from_magenta_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_dark_ghost_block_from_magenta_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_dark_ghost_block_from_magenta_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_ghost_block_from_magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_ghost_block_from_magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_light_block_from_magenta_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_light_block_from_magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_light_ghost_block_from_magenta_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_light_ghost_block_from_magenta_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_light_ghost_block_from_magenta_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_block_from_magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_block_from_magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_block_from_magenta_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_block_from_magenta_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_block_from_magenta_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_ghost_block_from_magenta_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_ghost_block_from_magenta_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_ghost_block_from_magenta_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_dark_ghost_block_from_magenta_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_ghost_block_from_magenta_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_ghost_block_from_magenta_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_ghost_block_from_magenta_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_block_from_magenta_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_block_from_magenta_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_block_from_magenta_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_ghost_block_from_magenta_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:magenta_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_ghost_block_from_magenta_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_ghost_block_from_magenta_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/magenta_shadeless_reinforced_light_ghost_block_from_magenta_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:magenta_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      item: "crystalix:orange_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_dark_ghost_block_from_orange_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_dark_ghost_block_from_orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      item: "crystalix:orange_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      item: "crystalix:orange_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_light_ghost_block_from_orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_light_ghost_block_from_orange_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      item: "crystalix:orange_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_dark_block_from_orange_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_dark_block_from_orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_dark_ghost_block_from_orange_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_dark_ghost_block_from_orange_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_dark_ghost_block_from_orange_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_ghost_block_from_orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_ghost_block_from_orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_light_block_from_orange_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_light_block_from_orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_light_ghost_block_from_orange_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_light_ghost_block_from_orange_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_reinforced_light_ghost_block_from_orange_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/orange"
-    }
-    g: {
-      item: "crystalix:orange_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_dark_block_from_orange_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_dark_block_from_orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_dark_ghost_block_from_orange_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_dark_ghost_block_from_orange_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_dark_ghost_block_from_orange_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_ghost_block_from_orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_ghost_block_from_orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_light_block_from_orange_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_light_block_from_orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_light_ghost_block_from_orange_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_light_ghost_block_from_orange_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_light_ghost_block_from_orange_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_block_from_orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_block_from_orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_block_from_orange_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_block_from_orange_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_block_from_orange_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_ghost_block_from_orange_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_ghost_block_from_orange_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_ghost_block_from_orange_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_dark_ghost_block_from_orange_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_ghost_block_from_orange_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_ghost_block_from_orange_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_ghost_block_from_orange_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_block_from_orange_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_block_from_orange_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_block_from_orange_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_ghost_block_from_orange_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:orange_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_ghost_block_from_orange_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_ghost_block_from_orange_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/orange_shadeless_reinforced_light_ghost_block_from_orange_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:orange_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      item: "crystalix:pink_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_dark_ghost_block_from_pink_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_dark_ghost_block_from_pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      item: "crystalix:pink_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      item: "crystalix:pink_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_light_ghost_block_from_pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_light_ghost_block_from_pink_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      item: "crystalix:pink_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_dark_block_from_pink_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_dark_block_from_pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_dark_ghost_block_from_pink_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_dark_ghost_block_from_pink_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_dark_ghost_block_from_pink_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_ghost_block_from_pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_ghost_block_from_pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_light_block_from_pink_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_light_block_from_pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_light_ghost_block_from_pink_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_light_ghost_block_from_pink_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_reinforced_light_ghost_block_from_pink_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/pink"
-    }
-    g: {
-      item: "crystalix:pink_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_dark_block_from_pink_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_dark_block_from_pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_dark_ghost_block_from_pink_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_dark_ghost_block_from_pink_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_dark_ghost_block_from_pink_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_ghost_block_from_pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_ghost_block_from_pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_light_block_from_pink_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_light_block_from_pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_light_ghost_block_from_pink_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_light_ghost_block_from_pink_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_light_ghost_block_from_pink_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_block_from_pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_block_from_pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_block_from_pink_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_block_from_pink_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_block_from_pink_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_ghost_block_from_pink_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_ghost_block_from_pink_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_ghost_block_from_pink_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_dark_ghost_block_from_pink_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_ghost_block_from_pink_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_ghost_block_from_pink_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_ghost_block_from_pink_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_block_from_pink_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_block_from_pink_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_block_from_pink_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_ghost_block_from_pink_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:pink_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_ghost_block_from_pink_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_ghost_block_from_pink_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/pink_shadeless_reinforced_light_ghost_block_from_pink_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:pink_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      item: "crystalix:purple_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_dark_ghost_block_from_purple_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_dark_ghost_block_from_purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      item: "crystalix:purple_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      item: "crystalix:purple_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_light_ghost_block_from_purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_light_ghost_block_from_purple_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      item: "crystalix:purple_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_dark_block_from_purple_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_dark_block_from_purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_dark_ghost_block_from_purple_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_dark_ghost_block_from_purple_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_dark_ghost_block_from_purple_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_ghost_block_from_purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_ghost_block_from_purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_light_block_from_purple_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_light_block_from_purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_light_ghost_block_from_purple_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_light_ghost_block_from_purple_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_reinforced_light_ghost_block_from_purple_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/purple"
-    }
-    g: {
-      item: "crystalix:purple_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_dark_block_from_purple_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_dark_block_from_purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_dark_ghost_block_from_purple_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_dark_ghost_block_from_purple_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_dark_ghost_block_from_purple_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_ghost_block_from_purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_ghost_block_from_purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_light_block_from_purple_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_light_block_from_purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_light_ghost_block_from_purple_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_light_ghost_block_from_purple_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_light_ghost_block_from_purple_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_block_from_purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_block_from_purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_block_from_purple_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_block_from_purple_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_block_from_purple_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_ghost_block_from_purple_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_ghost_block_from_purple_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_ghost_block_from_purple_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_dark_ghost_block_from_purple_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_ghost_block_from_purple_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_ghost_block_from_purple_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_ghost_block_from_purple_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_block_from_purple_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_block_from_purple_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_block_from_purple_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_ghost_block_from_purple_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:purple_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_ghost_block_from_purple_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_ghost_block_from_purple_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/purple_shadeless_reinforced_light_ghost_block_from_purple_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:purple_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      item: "crystalix:red_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_dark_ghost_block_from_red_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_dark_ghost_block_from_red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      item: "crystalix:red_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      item: "crystalix:red_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_light_ghost_block_from_red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_light_ghost_block_from_red_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      item: "crystalix:red_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_dark_block_from_red_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_dark_block_from_red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_dark_ghost_block_from_red_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_dark_ghost_block_from_red_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_dark_ghost_block_from_red_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_ghost_block_from_red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_ghost_block_from_red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_light_block_from_red_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_light_block_from_red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_light_ghost_block_from_red_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_light_ghost_block_from_red_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_reinforced_light_ghost_block_from_red_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/red"
-    }
-    g: {
-      item: "crystalix:red_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_dark_block_from_red_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_dark_block_from_red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_dark_ghost_block_from_red_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_dark_ghost_block_from_red_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_dark_ghost_block_from_red_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_ghost_block_from_red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_ghost_block_from_red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_light_block_from_red_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_light_block_from_red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_light_ghost_block_from_red_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_light_ghost_block_from_red_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_light_ghost_block_from_red_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_block_from_red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_block_from_red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_block_from_red_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_block_from_red_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_block_from_red_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_ghost_block_from_red_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_ghost_block_from_red_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_ghost_block_from_red_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_dark_ghost_block_from_red_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_ghost_block_from_red_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_ghost_block_from_red_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_ghost_block_from_red_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_block_from_red_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_block_from_red_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_block_from_red_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_ghost_block_from_red_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:red_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_ghost_block_from_red_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:red_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_ghost_block_from_red_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/red_shadeless_reinforced_light_ghost_block_from_red_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:red_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:red_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_black_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/black"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:black_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_blue_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_brown_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/brown"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_cyan_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/cyan"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_gray_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_green_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/green"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:green_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_blue"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/light_gray"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_lime_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/lime"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_magenta_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/magenta"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_orange_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/orange"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_pink_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/pink"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_purple_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/purple"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_red_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/red"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:red_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_white_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/white"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:white_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_dark_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/tinted_yellow_shadeless_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "crystalix:shaded_reinforced_light_ghost_block"
-    }
-    b: {
-      tag: "c:dyes/yellow"
-    }
-  }
-  pattern: [
-    "aaa"
-    "aba"
-    "aaa"
-  ]
-  result: {
-    count: 8
-    id: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      item: "crystalix:white_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_dark_ghost_block_from_white_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_dark_ghost_block_from_white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      item: "crystalix:white_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      item: "crystalix:white_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_light_ghost_block_from_white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_light_ghost_block_from_white_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      item: "crystalix:white_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_dark_block_from_white_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_dark_block_from_white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_dark_ghost_block_from_white_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_dark_ghost_block_from_white_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_dark_ghost_block_from_white_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_ghost_block_from_white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_ghost_block_from_white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_light_block_from_white_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_light_block_from_white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_light_ghost_block_from_white_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_light_ghost_block_from_white_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_reinforced_light_ghost_block_from_white_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/white"
-    }
-    g: {
-      item: "crystalix:white_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_dark_block_from_white_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_dark_block_from_white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_dark_ghost_block_from_white_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_dark_ghost_block_from_white_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_dark_ghost_block_from_white_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_ghost_block_from_white_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_ghost_block_from_white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_light_block_from_white_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_light_block_from_white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_light_ghost_block_from_white_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_light_ghost_block_from_white_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_light_ghost_block_from_white_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_block_from_white_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_block_from_white_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_block_from_white_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_block_from_white_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_block_from_white_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_ghost_block_from_white_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_ghost_block_from_white_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_ghost_block_from_white_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_dark_ghost_block_from_white_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_ghost_block_from_white_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_ghost_block_from_white_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_ghost_block_from_white_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_block_from_white_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_block_from_white_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_block_from_white_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_ghost_block_from_white_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:white_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_ghost_block_from_white_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:white_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_ghost_block_from_white_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/white_shadeless_reinforced_light_ghost_block_from_white_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:white_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:white_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:wool"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      tag: "c:glass_blocks"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      item: "crystalix:yellow_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_dark_ghost_block_from_yellow_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_dark_ghost_block_from_yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      item: "crystalix:yellow_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      item: "crystalix:yellow_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_light_ghost_block_from_yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_light_ghost_block_from_yellow_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      item: "crystalix:yellow_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_dark_block_from_yellow_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_dark_block_from_yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_dark_ghost_block_from_yellow_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_dark_ghost_block_from_yellow_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_dark_ghost_block_from_yellow_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_ghost_block_from_yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_ghost_block_from_yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_light_block_from_yellow_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_light_block_from_yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_light_ghost_block_from_yellow_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_light_ghost_block_from_yellow_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_reinforced_light_ghost_block_from_yellow_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    c: {
-      tag: "c:dyes/yellow"
-    }
-    g: {
-      item: "crystalix:yellow_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "aca"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_dark_block_from_yellow_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_dark_block_from_yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_dark_ghost_block_from_yellow_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_dark_ghost_block_from_yellow_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_dark_ghost_block_from_yellow_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_ghost_block_from_yellow_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_ghost_block_from_yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_light_block_from_yellow_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_light_block_from_yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_light_ghost_block_from_yellow_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_light_ghost_block_from_yellow_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_light_ghost_block_from_yellow_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_block_from_yellow_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_block_from_yellow_shadeless_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_block_from_yellow_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_block_from_yellow_shadeless_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_block_from_yellow_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_ghost_block_from_yellow_reinforced_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_ghost_block_from_yellow_shadeless_dark_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_dark_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_ghost_block_from_yellow_shadeless_reinforced_dark_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_dark_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_dark_ghost_block_from_yellow_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:gems/amethyst"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_ghost_block_from_yellow_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_ghost_block_from_yellow_shadeless_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_ghost_block_from_yellow_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_block_from_yellow_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_block_from_yellow_shadeless_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_block_from_yellow_shadeless_reinforced_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_ghost_block_from_yellow_reinforced_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "minecraft:coals"
-    }
-    g: {
-      item: "crystalix:yellow_reinforced_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_ghost_block_from_yellow_shadeless_light_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:obsidians"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_light_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_ghost_block_from_yellow_shadeless_reinforced_ghost_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      tag: "c:dusts/glowstone"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_ghost_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>crystalix/yellow_shadeless_reinforced_light_ghost_block_from_yellow_shadeless_reinforced_light_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    a: {
-      item: "minecraft:phantom_membrane"
-    }
-    g: {
-      item: "crystalix:yellow_shadeless_reinforced_light_block"
-    }
-  }
-  pattern: [
-    "gag"
-    "a a"
-    "gag"
-  ]
-  result: {
-    count: 4
-    id: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-  }
-}

```


</details>

<details>
<summary>sophisticatedbackpacks/stack_upgrade_omega_tier</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "sophisticatedcore:item_enabled"
-      itemRegistryName: "sophisticatedbackpacks:stack_upgrade_omega_tier"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    S: {
-      item: "sophisticatedbackpacks:stack_upgrade_tier_4"
-    }
-  }
-  pattern: [
-    "SSS"
-    "SSS"
-    "SSS"
-  ]
-  result: {
-    count: 1
-    id: "sophisticatedbackpacks:stack_upgrade_omega_tier"
-  }
-}

```


</details>

<details>
<summary>sophisticatedstorage/backpack_stack_upgrade_omega_tier_from_storage_stack_upgrade_omega_tier</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "sophisticatedbackpacks"
-    }
-    {
-      type: "sophisticatedcore:item_enabled"
-      itemRegistryName: "sophisticatedbackpacks:stack_upgrade_omega_tier"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    L: {
-      tag: "c:leathers"
-    }
-    S: {
-      item: "sophisticatedstorage:stack_upgrade_omega_tier"
-    }
-    T: {
-      tag: "c:strings"
-    }
-  }
-  pattern: [
-    "TST"
-    "SLS"
-    "T T"
-  ]
-  result: {
-    count: 1
-    id: "sophisticatedbackpacks:stack_upgrade_omega_tier"
-  }
-}

```


</details>

<details>
<summary>sophisticatedstorage/stack_upgrade_omega_tier</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "sophisticatedcore:item_enabled"
-      itemRegistryName: "sophisticatedstorage:stack_upgrade_omega_tier"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    S: {
-      item: "sophisticatedstorage:stack_upgrade_tier_5"
-    }
-  }
-  pattern: [
-    "SSS"
-    "SSS"
-    "SSS"
-  ]
-  result: {
-    count: 1
-    id: "sophisticatedstorage:stack_upgrade_omega_tier"
-  }
-}

```


</details>

<details>
<summary>sophisticatedstorage/storage_stack_upgrade_omega_tier_from_backpack_stack_upgrade_omega_tier</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "sophisticatedbackpacks"
-    }
-    {
-      type: "sophisticatedcore:item_enabled"
-      itemRegistryName: "sophisticatedstorage:stack_upgrade_omega_tier"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    P: {
-      tag: "minecraft:planks"
-    }
-    S: {
-      item: "sophisticatedbackpacks:stack_upgrade_omega_tier"
-    }
-  }
-  pattern: [
-    "PSP"
-    " P "
-    "P P"
-  ]
-  result: {
-    count: 3
-    id: "sophisticatedstorage:stack_upgrade_omega_tier"
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
<summary>minecraft:damage_type/cataclysm:bypasses_hurt_time</summary>

```diff
+[
+  "#minecraft:bypasses_invulnerability"
+  "cataclysm:abyssal_burn"
+  "cataclysm:maledictio_sagitta"
+  "cataclysm:shredder"
+  "minecraft:wither"
+  "neoforge:poison"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (9)</summary>
<blockquote>

<details>
<summary>minecraft:block/crystalix:blocks</summary>

```diff
 [
-  "#crystalix:block"
-  "#crystalix:bordered"
-  "#crystalix:dark"
-  "#crystalix:dark_block"
-  "#crystalix:ghost"
-  "#crystalix:ghost_block"
-  "#crystalix:light"
-  "#crystalix:light_block"
-  "#crystalix:reinforced"
-  "#crystalix:reinforced_block"
-  "#crystalix:shaded_block"
+  "crystalix:black_crystalix_glass"
+  "crystalix:blue_crystalix_glass"
+  "crystalix:brown_crystalix_glass"
+  "crystalix:cyan_crystalix_glass"
+  "crystalix:gray_crystalix_glass"
+  "crystalix:green_crystalix_glass"
+  "crystalix:light_blue_crystalix_glass"
+  "crystalix:light_gray_crystalix_glass"
+  "crystalix:lime_crystalix_glass"
+  "crystalix:magenta_crystalix_glass"
+  "crystalix:orange_crystalix_glass"
+  "crystalix:pink_crystalix_glass"
+  "crystalix:purple_crystalix_glass"
+  "crystalix:red_crystalix_glass"
+  "crystalix:white_crystalix_glass"
+  "crystalix:yellow_crystalix_glass"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wither_immune</summary>

```diff
 [
-  "#crystalix:reinforced"
   ... (726 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_enchantments</summary>

```diff
 [
   ... (1 entries)
+  "cataclysm:maledictio_anima"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_shield</summary>

```diff
 [
   ... (2 entries)
+  "cataclysm:maledictio_anima"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (7 entries)
+  "cataclysm:maledictio_anima"
   ... (32 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/crystalix:blocks</summary>

```diff
 [
-  "#crystalix:block"
-  "#crystalix:bordered"
-  "#crystalix:dark"
-  "#crystalix:dark_block"
-  "#crystalix:ghost"
-  "#crystalix:ghost_block"
-  "#crystalix:light"
-  "#crystalix:light_block"
-  "#crystalix:reinforced"
-  "#crystalix:reinforced_block"
-  "#crystalix:shaded_block"
+  "crystalix:black_crystalix_glass"
+  "crystalix:blue_crystalix_glass"
+  "crystalix:brown_crystalix_glass"
+  "crystalix:crystalix_wand"
+  "crystalix:cyan_crystalix_glass"
+  "crystalix:gray_crystalix_glass"
+  "crystalix:green_crystalix_glass"
+  "crystalix:light_blue_crystalix_glass"
+  "crystalix:light_gray_crystalix_glass"
+  "crystalix:lime_crystalix_glass"
+  "crystalix:magenta_crystalix_glass"
+  "crystalix:orange_crystalix_glass"
+  "crystalix:pink_crystalix_glass"
+  "crystalix:purple_crystalix_glass"
+  "crystalix:red_crystalix_glass"
+  "crystalix:white_crystalix_glass"
+  "crystalix:yellow_crystalix_glass"
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:bookshelf_books</summary>

```diff
 [
   ... (61 entries)
+  "patchouli:guide_book"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:lectern_books</summary>

```diff
 [
   ... (17 entries)
+  "patchouli:guide_book"
 ]

```


</details>

<details>
<summary>minecraft:mob_effect/cataclysm:effective_for_bosses</summary>

```diff
 [
   ... (21 entries)
-  "minecraft:poison"
   ... (10 entries)
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (58)</summary>
<blockquote>

<details>
<summary>minecraft:block/crystalix:block</summary>

```diff
-[
-  "crystalix:black_block"
-  "crystalix:blue_block"
-  "crystalix:brown_block"
-  "crystalix:cyan_block"
-  "crystalix:gray_block"
-  "crystalix:green_block"
-  "crystalix:light_blue_block"
-  "crystalix:light_gray_block"
-  "crystalix:lime_block"
-  "crystalix:magenta_block"
-  "crystalix:orange_block"
-  "crystalix:pink_block"
-  "crystalix:purple_block"
-  "crystalix:red_block"
-  "crystalix:white_block"
-  "crystalix:yellow_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:bordered</summary>

```diff
-[
-  "#crystalix:shaded_block"
-  "#crystalix:shaded_dark_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_ghost_block"
-  "#crystalix:shaded_light_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:dark</summary>

```diff
-[
-  "#crystalix:dark_block"
-  "#crystalix:dark_ghost_block"
-  "#crystalix:reinforced_dark_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:shaded_dark_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:dark_block</summary>

```diff
-[
-  "crystalix:black_dark_block"
-  "crystalix:blue_dark_block"
-  "crystalix:brown_dark_block"
-  "crystalix:cyan_dark_block"
-  "crystalix:gray_dark_block"
-  "crystalix:green_dark_block"
-  "crystalix:light_blue_dark_block"
-  "crystalix:light_gray_dark_block"
-  "crystalix:lime_dark_block"
-  "crystalix:magenta_dark_block"
-  "crystalix:orange_dark_block"
-  "crystalix:pink_dark_block"
-  "crystalix:purple_dark_block"
-  "crystalix:red_dark_block"
-  "crystalix:white_dark_block"
-  "crystalix:yellow_dark_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_dark_ghost_block"
-  "crystalix:blue_dark_ghost_block"
-  "crystalix:brown_dark_ghost_block"
-  "crystalix:cyan_dark_ghost_block"
-  "crystalix:gray_dark_ghost_block"
-  "crystalix:green_dark_ghost_block"
-  "crystalix:light_blue_dark_ghost_block"
-  "crystalix:light_gray_dark_ghost_block"
-  "crystalix:lime_dark_ghost_block"
-  "crystalix:magenta_dark_ghost_block"
-  "crystalix:orange_dark_ghost_block"
-  "crystalix:pink_dark_ghost_block"
-  "crystalix:purple_dark_ghost_block"
-  "crystalix:red_dark_ghost_block"
-  "crystalix:white_dark_ghost_block"
-  "crystalix:yellow_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:ghost</summary>

```diff
-[
-  "#crystalix:dark_ghost_block"
-  "#crystalix:ghost_block"
-  "#crystalix:light_ghost_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:reinforced_ghost_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_ghost_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:ghost_block</summary>

```diff
-[
-  "crystalix:black_ghost_block"
-  "crystalix:blue_ghost_block"
-  "crystalix:brown_ghost_block"
-  "crystalix:cyan_ghost_block"
-  "crystalix:gray_ghost_block"
-  "crystalix:green_ghost_block"
-  "crystalix:light_blue_ghost_block"
-  "crystalix:light_gray_ghost_block"
-  "crystalix:lime_ghost_block"
-  "crystalix:magenta_ghost_block"
-  "crystalix:orange_ghost_block"
-  "crystalix:pink_ghost_block"
-  "crystalix:purple_ghost_block"
-  "crystalix:red_ghost_block"
-  "crystalix:white_ghost_block"
-  "crystalix:yellow_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:light</summary>

```diff
-[
-  "#crystalix:light_block"
-  "#crystalix:light_ghost_block"
-  "#crystalix:reinforced_light_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_light_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:light_block</summary>

```diff
-[
-  "crystalix:black_light_block"
-  "crystalix:blue_light_block"
-  "crystalix:brown_light_block"
-  "crystalix:cyan_light_block"
-  "crystalix:gray_light_block"
-  "crystalix:green_light_block"
-  "crystalix:light_blue_light_block"
-  "crystalix:light_gray_light_block"
-  "crystalix:lime_light_block"
-  "crystalix:magenta_light_block"
-  "crystalix:orange_light_block"
-  "crystalix:pink_light_block"
-  "crystalix:purple_light_block"
-  "crystalix:red_light_block"
-  "crystalix:white_light_block"
-  "crystalix:yellow_light_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:light_ghost_block</summary>

```diff
-[
-  "crystalix:black_light_ghost_block"
-  "crystalix:blue_light_ghost_block"
-  "crystalix:brown_light_ghost_block"
-  "crystalix:cyan_light_ghost_block"
-  "crystalix:gray_light_ghost_block"
-  "crystalix:green_light_ghost_block"
-  "crystalix:light_blue_light_ghost_block"
-  "crystalix:light_gray_light_ghost_block"
-  "crystalix:lime_light_ghost_block"
-  "crystalix:magenta_light_ghost_block"
-  "crystalix:orange_light_ghost_block"
-  "crystalix:pink_light_ghost_block"
-  "crystalix:purple_light_ghost_block"
-  "crystalix:red_light_ghost_block"
-  "crystalix:white_light_ghost_block"
-  "crystalix:yellow_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced</summary>

```diff
-[
-  "#crystalix:reinforced_block"
-  "#crystalix:reinforced_dark_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:reinforced_ghost_block"
-  "#crystalix:reinforced_light_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_reinforced_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_block</summary>

```diff
-[
-  "crystalix:black_reinforced_block"
-  "crystalix:blue_reinforced_block"
-  "crystalix:brown_reinforced_block"
-  "crystalix:cyan_reinforced_block"
-  "crystalix:gray_reinforced_block"
-  "crystalix:green_reinforced_block"
-  "crystalix:light_blue_reinforced_block"
-  "crystalix:light_gray_reinforced_block"
-  "crystalix:lime_reinforced_block"
-  "crystalix:magenta_reinforced_block"
-  "crystalix:orange_reinforced_block"
-  "crystalix:pink_reinforced_block"
-  "crystalix:purple_reinforced_block"
-  "crystalix:red_reinforced_block"
-  "crystalix:white_reinforced_block"
-  "crystalix:yellow_reinforced_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_dark_block</summary>

```diff
-[
-  "crystalix:black_reinforced_dark_block"
-  "crystalix:blue_reinforced_dark_block"
-  "crystalix:brown_reinforced_dark_block"
-  "crystalix:cyan_reinforced_dark_block"
-  "crystalix:gray_reinforced_dark_block"
-  "crystalix:green_reinforced_dark_block"
-  "crystalix:light_blue_reinforced_dark_block"
-  "crystalix:light_gray_reinforced_dark_block"
-  "crystalix:lime_reinforced_dark_block"
-  "crystalix:magenta_reinforced_dark_block"
-  "crystalix:orange_reinforced_dark_block"
-  "crystalix:pink_reinforced_dark_block"
-  "crystalix:purple_reinforced_dark_block"
-  "crystalix:red_reinforced_dark_block"
-  "crystalix:white_reinforced_dark_block"
-  "crystalix:yellow_reinforced_dark_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_dark_ghost_block"
-  "crystalix:blue_reinforced_dark_ghost_block"
-  "crystalix:brown_reinforced_dark_ghost_block"
-  "crystalix:cyan_reinforced_dark_ghost_block"
-  "crystalix:gray_reinforced_dark_ghost_block"
-  "crystalix:green_reinforced_dark_ghost_block"
-  "crystalix:light_blue_reinforced_dark_ghost_block"
-  "crystalix:light_gray_reinforced_dark_ghost_block"
-  "crystalix:lime_reinforced_dark_ghost_block"
-  "crystalix:magenta_reinforced_dark_ghost_block"
-  "crystalix:orange_reinforced_dark_ghost_block"
-  "crystalix:pink_reinforced_dark_ghost_block"
-  "crystalix:purple_reinforced_dark_ghost_block"
-  "crystalix:red_reinforced_dark_ghost_block"
-  "crystalix:white_reinforced_dark_ghost_block"
-  "crystalix:yellow_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_ghost_block"
-  "crystalix:blue_reinforced_ghost_block"
-  "crystalix:brown_reinforced_ghost_block"
-  "crystalix:cyan_reinforced_ghost_block"
-  "crystalix:gray_reinforced_ghost_block"
-  "crystalix:green_reinforced_ghost_block"
-  "crystalix:light_blue_reinforced_ghost_block"
-  "crystalix:light_gray_reinforced_ghost_block"
-  "crystalix:lime_reinforced_ghost_block"
-  "crystalix:magenta_reinforced_ghost_block"
-  "crystalix:orange_reinforced_ghost_block"
-  "crystalix:pink_reinforced_ghost_block"
-  "crystalix:purple_reinforced_ghost_block"
-  "crystalix:red_reinforced_ghost_block"
-  "crystalix:white_reinforced_ghost_block"
-  "crystalix:yellow_reinforced_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_light_block</summary>

```diff
-[
-  "crystalix:black_reinforced_light_block"
-  "crystalix:blue_reinforced_light_block"
-  "crystalix:brown_reinforced_light_block"
-  "crystalix:cyan_reinforced_light_block"
-  "crystalix:gray_reinforced_light_block"
-  "crystalix:green_reinforced_light_block"
-  "crystalix:light_blue_reinforced_light_block"
-  "crystalix:light_gray_reinforced_light_block"
-  "crystalix:lime_reinforced_light_block"
-  "crystalix:magenta_reinforced_light_block"
-  "crystalix:orange_reinforced_light_block"
-  "crystalix:pink_reinforced_light_block"
-  "crystalix:purple_reinforced_light_block"
-  "crystalix:red_reinforced_light_block"
-  "crystalix:white_reinforced_light_block"
-  "crystalix:yellow_reinforced_light_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:reinforced_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_light_ghost_block"
-  "crystalix:blue_reinforced_light_ghost_block"
-  "crystalix:brown_reinforced_light_ghost_block"
-  "crystalix:cyan_reinforced_light_ghost_block"
-  "crystalix:gray_reinforced_light_ghost_block"
-  "crystalix:green_reinforced_light_ghost_block"
-  "crystalix:light_blue_reinforced_light_ghost_block"
-  "crystalix:light_gray_reinforced_light_ghost_block"
-  "crystalix:lime_reinforced_light_ghost_block"
-  "crystalix:magenta_reinforced_light_ghost_block"
-  "crystalix:orange_reinforced_light_ghost_block"
-  "crystalix:pink_reinforced_light_ghost_block"
-  "crystalix:purple_reinforced_light_ghost_block"
-  "crystalix:red_reinforced_light_ghost_block"
-  "crystalix:white_reinforced_light_ghost_block"
-  "crystalix:yellow_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_block</summary>

```diff
-[
-  "crystalix:black_shadeless_block"
-  "crystalix:blue_shadeless_block"
-  "crystalix:brown_shadeless_block"
-  "crystalix:cyan_shadeless_block"
-  "crystalix:gray_shadeless_block"
-  "crystalix:green_shadeless_block"
-  "crystalix:light_blue_shadeless_block"
-  "crystalix:light_gray_shadeless_block"
-  "crystalix:lime_shadeless_block"
-  "crystalix:magenta_shadeless_block"
-  "crystalix:orange_shadeless_block"
-  "crystalix:pink_shadeless_block"
-  "crystalix:purple_shadeless_block"
-  "crystalix:red_shadeless_block"
-  "crystalix:white_shadeless_block"
-  "crystalix:yellow_shadeless_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_dark_block</summary>

```diff
-[
-  "crystalix:black_shadeless_dark_block"
-  "crystalix:blue_shadeless_dark_block"
-  "crystalix:brown_shadeless_dark_block"
-  "crystalix:cyan_shadeless_dark_block"
-  "crystalix:gray_shadeless_dark_block"
-  "crystalix:green_shadeless_dark_block"
-  "crystalix:light_blue_shadeless_dark_block"
-  "crystalix:light_gray_shadeless_dark_block"
-  "crystalix:lime_shadeless_dark_block"
-  "crystalix:magenta_shadeless_dark_block"
-  "crystalix:orange_shadeless_dark_block"
-  "crystalix:pink_shadeless_dark_block"
-  "crystalix:purple_shadeless_dark_block"
-  "crystalix:red_shadeless_dark_block"
-  "crystalix:white_shadeless_dark_block"
-  "crystalix:yellow_shadeless_dark_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_dark_ghost_block"
-  "crystalix:blue_shadeless_dark_ghost_block"
-  "crystalix:brown_shadeless_dark_ghost_block"
-  "crystalix:cyan_shadeless_dark_ghost_block"
-  "crystalix:gray_shadeless_dark_ghost_block"
-  "crystalix:green_shadeless_dark_ghost_block"
-  "crystalix:light_blue_shadeless_dark_ghost_block"
-  "crystalix:light_gray_shadeless_dark_ghost_block"
-  "crystalix:lime_shadeless_dark_ghost_block"
-  "crystalix:magenta_shadeless_dark_ghost_block"
-  "crystalix:orange_shadeless_dark_ghost_block"
-  "crystalix:pink_shadeless_dark_ghost_block"
-  "crystalix:purple_shadeless_dark_ghost_block"
-  "crystalix:red_shadeless_dark_ghost_block"
-  "crystalix:white_shadeless_dark_ghost_block"
-  "crystalix:yellow_shadeless_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_ghost_block"
-  "crystalix:blue_shadeless_ghost_block"
-  "crystalix:brown_shadeless_ghost_block"
-  "crystalix:cyan_shadeless_ghost_block"
-  "crystalix:gray_shadeless_ghost_block"
-  "crystalix:green_shadeless_ghost_block"
-  "crystalix:light_blue_shadeless_ghost_block"
-  "crystalix:light_gray_shadeless_ghost_block"
-  "crystalix:lime_shadeless_ghost_block"
-  "crystalix:magenta_shadeless_ghost_block"
-  "crystalix:orange_shadeless_ghost_block"
-  "crystalix:pink_shadeless_ghost_block"
-  "crystalix:purple_shadeless_ghost_block"
-  "crystalix:red_shadeless_ghost_block"
-  "crystalix:white_shadeless_ghost_block"
-  "crystalix:yellow_shadeless_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_light_block</summary>

```diff
-[
-  "crystalix:black_shadeless_light_block"
-  "crystalix:blue_shadeless_light_block"
-  "crystalix:brown_shadeless_light_block"
-  "crystalix:cyan_shadeless_light_block"
-  "crystalix:gray_shadeless_light_block"
-  "crystalix:green_shadeless_light_block"
-  "crystalix:light_blue_shadeless_light_block"
-  "crystalix:light_gray_shadeless_light_block"
-  "crystalix:lime_shadeless_light_block"
-  "crystalix:magenta_shadeless_light_block"
-  "crystalix:orange_shadeless_light_block"
-  "crystalix:pink_shadeless_light_block"
-  "crystalix:purple_shadeless_light_block"
-  "crystalix:red_shadeless_light_block"
-  "crystalix:white_shadeless_light_block"
-  "crystalix:yellow_shadeless_light_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_light_ghost_block"
-  "crystalix:blue_shadeless_light_ghost_block"
-  "crystalix:brown_shadeless_light_ghost_block"
-  "crystalix:cyan_shadeless_light_ghost_block"
-  "crystalix:gray_shadeless_light_ghost_block"
-  "crystalix:green_shadeless_light_ghost_block"
-  "crystalix:light_blue_shadeless_light_ghost_block"
-  "crystalix:light_gray_shadeless_light_ghost_block"
-  "crystalix:lime_shadeless_light_ghost_block"
-  "crystalix:magenta_shadeless_light_ghost_block"
-  "crystalix:orange_shadeless_light_ghost_block"
-  "crystalix:pink_shadeless_light_ghost_block"
-  "crystalix:purple_shadeless_light_ghost_block"
-  "crystalix:red_shadeless_light_ghost_block"
-  "crystalix:white_shadeless_light_ghost_block"
-  "crystalix:yellow_shadeless_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_block"
-  "crystalix:blue_shadeless_reinforced_block"
-  "crystalix:brown_shadeless_reinforced_block"
-  "crystalix:cyan_shadeless_reinforced_block"
-  "crystalix:gray_shadeless_reinforced_block"
-  "crystalix:green_shadeless_reinforced_block"
-  "crystalix:light_blue_shadeless_reinforced_block"
-  "crystalix:light_gray_shadeless_reinforced_block"
-  "crystalix:lime_shadeless_reinforced_block"
-  "crystalix:magenta_shadeless_reinforced_block"
-  "crystalix:orange_shadeless_reinforced_block"
-  "crystalix:pink_shadeless_reinforced_block"
-  "crystalix:purple_shadeless_reinforced_block"
-  "crystalix:red_shadeless_reinforced_block"
-  "crystalix:white_shadeless_reinforced_block"
-  "crystalix:yellow_shadeless_reinforced_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_dark_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_dark_block"
-  "crystalix:blue_shadeless_reinforced_dark_block"
-  "crystalix:brown_shadeless_reinforced_dark_block"
-  "crystalix:cyan_shadeless_reinforced_dark_block"
-  "crystalix:gray_shadeless_reinforced_dark_block"
-  "crystalix:green_shadeless_reinforced_dark_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_block"
-  "crystalix:lime_shadeless_reinforced_dark_block"
-  "crystalix:magenta_shadeless_reinforced_dark_block"
-  "crystalix:orange_shadeless_reinforced_dark_block"
-  "crystalix:pink_shadeless_reinforced_dark_block"
-  "crystalix:purple_shadeless_reinforced_dark_block"
-  "crystalix:red_shadeless_reinforced_dark_block"
-  "crystalix:white_shadeless_reinforced_dark_block"
-  "crystalix:yellow_shadeless_reinforced_dark_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_ghost_block"
-  "crystalix:blue_shadeless_reinforced_ghost_block"
-  "crystalix:brown_shadeless_reinforced_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_ghost_block"
-  "crystalix:gray_shadeless_reinforced_ghost_block"
-  "crystalix:green_shadeless_reinforced_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  "crystalix:lime_shadeless_reinforced_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_ghost_block"
-  "crystalix:orange_shadeless_reinforced_ghost_block"
-  "crystalix:pink_shadeless_reinforced_ghost_block"
-  "crystalix:purple_shadeless_reinforced_ghost_block"
-  "crystalix:red_shadeless_reinforced_ghost_block"
-  "crystalix:white_shadeless_reinforced_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_light_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_light_block"
-  "crystalix:blue_shadeless_reinforced_light_block"
-  "crystalix:brown_shadeless_reinforced_light_block"
-  "crystalix:cyan_shadeless_reinforced_light_block"
-  "crystalix:gray_shadeless_reinforced_light_block"
-  "crystalix:green_shadeless_reinforced_light_block"
-  "crystalix:light_blue_shadeless_reinforced_light_block"
-  "crystalix:light_gray_shadeless_reinforced_light_block"
-  "crystalix:lime_shadeless_reinforced_light_block"
-  "crystalix:magenta_shadeless_reinforced_light_block"
-  "crystalix:orange_shadeless_reinforced_light_block"
-  "crystalix:pink_shadeless_reinforced_light_block"
-  "crystalix:purple_shadeless_reinforced_light_block"
-  "crystalix:red_shadeless_reinforced_light_block"
-  "crystalix:white_shadeless_reinforced_light_block"
-  "crystalix:yellow_shadeless_reinforced_light_block"
-]

```


</details>

<details>
<summary>minecraft:block/crystalix:shaded_reinforced_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_light_ghost_block"
-  "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:green_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  "crystalix:red_shadeless_reinforced_light_ghost_block"
-  "crystalix:white_shadeless_reinforced_light_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:block</summary>

```diff
-[
-  "crystalix:black_block"
-  "crystalix:blue_block"
-  "crystalix:brown_block"
-  "crystalix:cyan_block"
-  "crystalix:gray_block"
-  "crystalix:green_block"
-  "crystalix:light_blue_block"
-  "crystalix:light_gray_block"
-  "crystalix:lime_block"
-  "crystalix:magenta_block"
-  "crystalix:orange_block"
-  "crystalix:pink_block"
-  "crystalix:purple_block"
-  "crystalix:red_block"
-  "crystalix:white_block"
-  "crystalix:yellow_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:bordered</summary>

```diff
-[
-  "#crystalix:shaded_block"
-  "#crystalix:shaded_dark_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_ghost_block"
-  "#crystalix:shaded_light_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:dark</summary>

```diff
-[
-  "#crystalix:dark_block"
-  "#crystalix:dark_ghost_block"
-  "#crystalix:reinforced_dark_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:shaded_dark_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:dark_block</summary>

```diff
-[
-  "crystalix:black_dark_block"
-  "crystalix:blue_dark_block"
-  "crystalix:brown_dark_block"
-  "crystalix:cyan_dark_block"
-  "crystalix:gray_dark_block"
-  "crystalix:green_dark_block"
-  "crystalix:light_blue_dark_block"
-  "crystalix:light_gray_dark_block"
-  "crystalix:lime_dark_block"
-  "crystalix:magenta_dark_block"
-  "crystalix:orange_dark_block"
-  "crystalix:pink_dark_block"
-  "crystalix:purple_dark_block"
-  "crystalix:red_dark_block"
-  "crystalix:white_dark_block"
-  "crystalix:yellow_dark_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_dark_ghost_block"
-  "crystalix:blue_dark_ghost_block"
-  "crystalix:brown_dark_ghost_block"
-  "crystalix:cyan_dark_ghost_block"
-  "crystalix:gray_dark_ghost_block"
-  "crystalix:green_dark_ghost_block"
-  "crystalix:light_blue_dark_ghost_block"
-  "crystalix:light_gray_dark_ghost_block"
-  "crystalix:lime_dark_ghost_block"
-  "crystalix:magenta_dark_ghost_block"
-  "crystalix:orange_dark_ghost_block"
-  "crystalix:pink_dark_ghost_block"
-  "crystalix:purple_dark_ghost_block"
-  "crystalix:red_dark_ghost_block"
-  "crystalix:white_dark_ghost_block"
-  "crystalix:yellow_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:ghost</summary>

```diff
-[
-  "#crystalix:dark_ghost_block"
-  "#crystalix:ghost_block"
-  "#crystalix:light_ghost_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:reinforced_ghost_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_dark_ghost_block"
-  "#crystalix:shaded_ghost_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:ghost_block</summary>

```diff
-[
-  "crystalix:black_ghost_block"
-  "crystalix:blue_ghost_block"
-  "crystalix:brown_ghost_block"
-  "crystalix:cyan_ghost_block"
-  "crystalix:gray_ghost_block"
-  "crystalix:green_ghost_block"
-  "crystalix:light_blue_ghost_block"
-  "crystalix:light_gray_ghost_block"
-  "crystalix:lime_ghost_block"
-  "crystalix:magenta_ghost_block"
-  "crystalix:orange_ghost_block"
-  "crystalix:pink_ghost_block"
-  "crystalix:purple_ghost_block"
-  "crystalix:red_ghost_block"
-  "crystalix:white_ghost_block"
-  "crystalix:yellow_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:light</summary>

```diff
-[
-  "#crystalix:light_block"
-  "#crystalix:light_ghost_block"
-  "#crystalix:reinforced_light_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_light_block"
-  "#crystalix:shaded_light_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:light_block</summary>

```diff
-[
-  "crystalix:black_light_block"
-  "crystalix:blue_light_block"
-  "crystalix:brown_light_block"
-  "crystalix:cyan_light_block"
-  "crystalix:gray_light_block"
-  "crystalix:green_light_block"
-  "crystalix:light_blue_light_block"
-  "crystalix:light_gray_light_block"
-  "crystalix:lime_light_block"
-  "crystalix:magenta_light_block"
-  "crystalix:orange_light_block"
-  "crystalix:pink_light_block"
-  "crystalix:purple_light_block"
-  "crystalix:red_light_block"
-  "crystalix:white_light_block"
-  "crystalix:yellow_light_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:light_ghost_block</summary>

```diff
-[
-  "crystalix:black_light_ghost_block"
-  "crystalix:blue_light_ghost_block"
-  "crystalix:brown_light_ghost_block"
-  "crystalix:cyan_light_ghost_block"
-  "crystalix:gray_light_ghost_block"
-  "crystalix:green_light_ghost_block"
-  "crystalix:light_blue_light_ghost_block"
-  "crystalix:light_gray_light_ghost_block"
-  "crystalix:lime_light_ghost_block"
-  "crystalix:magenta_light_ghost_block"
-  "crystalix:orange_light_ghost_block"
-  "crystalix:pink_light_ghost_block"
-  "crystalix:purple_light_ghost_block"
-  "crystalix:red_light_ghost_block"
-  "crystalix:white_light_ghost_block"
-  "crystalix:yellow_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced</summary>

```diff
-[
-  "#crystalix:reinforced_block"
-  "#crystalix:reinforced_dark_block"
-  "#crystalix:reinforced_dark_ghost_block"
-  "#crystalix:reinforced_ghost_block"
-  "#crystalix:reinforced_light_block"
-  "#crystalix:reinforced_light_ghost_block"
-  "#crystalix:shaded_reinforced_block"
-  "#crystalix:shaded_reinforced_dark_block"
-  "#crystalix:shaded_reinforced_dark_ghost_block"
-  "#crystalix:shaded_reinforced_ghost_block"
-  "#crystalix:shaded_reinforced_light_block"
-  "#crystalix:shaded_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_block</summary>

```diff
-[
-  "crystalix:black_reinforced_block"
-  "crystalix:blue_reinforced_block"
-  "crystalix:brown_reinforced_block"
-  "crystalix:cyan_reinforced_block"
-  "crystalix:gray_reinforced_block"
-  "crystalix:green_reinforced_block"
-  "crystalix:light_blue_reinforced_block"
-  "crystalix:light_gray_reinforced_block"
-  "crystalix:lime_reinforced_block"
-  "crystalix:magenta_reinforced_block"
-  "crystalix:orange_reinforced_block"
-  "crystalix:pink_reinforced_block"
-  "crystalix:purple_reinforced_block"
-  "crystalix:red_reinforced_block"
-  "crystalix:white_reinforced_block"
-  "crystalix:yellow_reinforced_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_dark_block</summary>

```diff
-[
-  "crystalix:black_reinforced_dark_block"
-  "crystalix:blue_reinforced_dark_block"
-  "crystalix:brown_reinforced_dark_block"
-  "crystalix:cyan_reinforced_dark_block"
-  "crystalix:gray_reinforced_dark_block"
-  "crystalix:green_reinforced_dark_block"
-  "crystalix:light_blue_reinforced_dark_block"
-  "crystalix:light_gray_reinforced_dark_block"
-  "crystalix:lime_reinforced_dark_block"
-  "crystalix:magenta_reinforced_dark_block"
-  "crystalix:orange_reinforced_dark_block"
-  "crystalix:pink_reinforced_dark_block"
-  "crystalix:purple_reinforced_dark_block"
-  "crystalix:red_reinforced_dark_block"
-  "crystalix:white_reinforced_dark_block"
-  "crystalix:yellow_reinforced_dark_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_dark_ghost_block"
-  "crystalix:blue_reinforced_dark_ghost_block"
-  "crystalix:brown_reinforced_dark_ghost_block"
-  "crystalix:cyan_reinforced_dark_ghost_block"
-  "crystalix:gray_reinforced_dark_ghost_block"
-  "crystalix:green_reinforced_dark_ghost_block"
-  "crystalix:light_blue_reinforced_dark_ghost_block"
-  "crystalix:light_gray_reinforced_dark_ghost_block"
-  "crystalix:lime_reinforced_dark_ghost_block"
-  "crystalix:magenta_reinforced_dark_ghost_block"
-  "crystalix:orange_reinforced_dark_ghost_block"
-  "crystalix:pink_reinforced_dark_ghost_block"
-  "crystalix:purple_reinforced_dark_ghost_block"
-  "crystalix:red_reinforced_dark_ghost_block"
-  "crystalix:white_reinforced_dark_ghost_block"
-  "crystalix:yellow_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_ghost_block"
-  "crystalix:blue_reinforced_ghost_block"
-  "crystalix:brown_reinforced_ghost_block"
-  "crystalix:cyan_reinforced_ghost_block"
-  "crystalix:gray_reinforced_ghost_block"
-  "crystalix:green_reinforced_ghost_block"
-  "crystalix:light_blue_reinforced_ghost_block"
-  "crystalix:light_gray_reinforced_ghost_block"
-  "crystalix:lime_reinforced_ghost_block"
-  "crystalix:magenta_reinforced_ghost_block"
-  "crystalix:orange_reinforced_ghost_block"
-  "crystalix:pink_reinforced_ghost_block"
-  "crystalix:purple_reinforced_ghost_block"
-  "crystalix:red_reinforced_ghost_block"
-  "crystalix:white_reinforced_ghost_block"
-  "crystalix:yellow_reinforced_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_light_block</summary>

```diff
-[
-  "crystalix:black_reinforced_light_block"
-  "crystalix:blue_reinforced_light_block"
-  "crystalix:brown_reinforced_light_block"
-  "crystalix:cyan_reinforced_light_block"
-  "crystalix:gray_reinforced_light_block"
-  "crystalix:green_reinforced_light_block"
-  "crystalix:light_blue_reinforced_light_block"
-  "crystalix:light_gray_reinforced_light_block"
-  "crystalix:lime_reinforced_light_block"
-  "crystalix:magenta_reinforced_light_block"
-  "crystalix:orange_reinforced_light_block"
-  "crystalix:pink_reinforced_light_block"
-  "crystalix:purple_reinforced_light_block"
-  "crystalix:red_reinforced_light_block"
-  "crystalix:white_reinforced_light_block"
-  "crystalix:yellow_reinforced_light_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:reinforced_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_reinforced_light_ghost_block"
-  "crystalix:blue_reinforced_light_ghost_block"
-  "crystalix:brown_reinforced_light_ghost_block"
-  "crystalix:cyan_reinforced_light_ghost_block"
-  "crystalix:gray_reinforced_light_ghost_block"
-  "crystalix:green_reinforced_light_ghost_block"
-  "crystalix:light_blue_reinforced_light_ghost_block"
-  "crystalix:light_gray_reinforced_light_ghost_block"
-  "crystalix:lime_reinforced_light_ghost_block"
-  "crystalix:magenta_reinforced_light_ghost_block"
-  "crystalix:orange_reinforced_light_ghost_block"
-  "crystalix:pink_reinforced_light_ghost_block"
-  "crystalix:purple_reinforced_light_ghost_block"
-  "crystalix:red_reinforced_light_ghost_block"
-  "crystalix:white_reinforced_light_ghost_block"
-  "crystalix:yellow_reinforced_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_block</summary>

```diff
-[
-  "crystalix:black_shadeless_block"
-  "crystalix:blue_shadeless_block"
-  "crystalix:brown_shadeless_block"
-  "crystalix:cyan_shadeless_block"
-  "crystalix:gray_shadeless_block"
-  "crystalix:green_shadeless_block"
-  "crystalix:light_blue_shadeless_block"
-  "crystalix:light_gray_shadeless_block"
-  "crystalix:lime_shadeless_block"
-  "crystalix:magenta_shadeless_block"
-  "crystalix:orange_shadeless_block"
-  "crystalix:pink_shadeless_block"
-  "crystalix:purple_shadeless_block"
-  "crystalix:red_shadeless_block"
-  "crystalix:white_shadeless_block"
-  "crystalix:yellow_shadeless_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_dark_block</summary>

```diff
-[
-  "crystalix:black_shadeless_dark_block"
-  "crystalix:blue_shadeless_dark_block"
-  "crystalix:brown_shadeless_dark_block"
-  "crystalix:cyan_shadeless_dark_block"
-  "crystalix:gray_shadeless_dark_block"
-  "crystalix:green_shadeless_dark_block"
-  "crystalix:light_blue_shadeless_dark_block"
-  "crystalix:light_gray_shadeless_dark_block"
-  "crystalix:lime_shadeless_dark_block"
-  "crystalix:magenta_shadeless_dark_block"
-  "crystalix:orange_shadeless_dark_block"
-  "crystalix:pink_shadeless_dark_block"
-  "crystalix:purple_shadeless_dark_block"
-  "crystalix:red_shadeless_dark_block"
-  "crystalix:white_shadeless_dark_block"
-  "crystalix:yellow_shadeless_dark_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_dark_ghost_block"
-  "crystalix:blue_shadeless_dark_ghost_block"
-  "crystalix:brown_shadeless_dark_ghost_block"
-  "crystalix:cyan_shadeless_dark_ghost_block"
-  "crystalix:gray_shadeless_dark_ghost_block"
-  "crystalix:green_shadeless_dark_ghost_block"
-  "crystalix:light_blue_shadeless_dark_ghost_block"
-  "crystalix:light_gray_shadeless_dark_ghost_block"
-  "crystalix:lime_shadeless_dark_ghost_block"
-  "crystalix:magenta_shadeless_dark_ghost_block"
-  "crystalix:orange_shadeless_dark_ghost_block"
-  "crystalix:pink_shadeless_dark_ghost_block"
-  "crystalix:purple_shadeless_dark_ghost_block"
-  "crystalix:red_shadeless_dark_ghost_block"
-  "crystalix:white_shadeless_dark_ghost_block"
-  "crystalix:yellow_shadeless_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_ghost_block"
-  "crystalix:blue_shadeless_ghost_block"
-  "crystalix:brown_shadeless_ghost_block"
-  "crystalix:cyan_shadeless_ghost_block"
-  "crystalix:gray_shadeless_ghost_block"
-  "crystalix:green_shadeless_ghost_block"
-  "crystalix:light_blue_shadeless_ghost_block"
-  "crystalix:light_gray_shadeless_ghost_block"
-  "crystalix:lime_shadeless_ghost_block"
-  "crystalix:magenta_shadeless_ghost_block"
-  "crystalix:orange_shadeless_ghost_block"
-  "crystalix:pink_shadeless_ghost_block"
-  "crystalix:purple_shadeless_ghost_block"
-  "crystalix:red_shadeless_ghost_block"
-  "crystalix:white_shadeless_ghost_block"
-  "crystalix:yellow_shadeless_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_light_block</summary>

```diff
-[
-  "crystalix:black_shadeless_light_block"
-  "crystalix:blue_shadeless_light_block"
-  "crystalix:brown_shadeless_light_block"
-  "crystalix:cyan_shadeless_light_block"
-  "crystalix:gray_shadeless_light_block"
-  "crystalix:green_shadeless_light_block"
-  "crystalix:light_blue_shadeless_light_block"
-  "crystalix:light_gray_shadeless_light_block"
-  "crystalix:lime_shadeless_light_block"
-  "crystalix:magenta_shadeless_light_block"
-  "crystalix:orange_shadeless_light_block"
-  "crystalix:pink_shadeless_light_block"
-  "crystalix:purple_shadeless_light_block"
-  "crystalix:red_shadeless_light_block"
-  "crystalix:white_shadeless_light_block"
-  "crystalix:yellow_shadeless_light_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_light_ghost_block"
-  "crystalix:blue_shadeless_light_ghost_block"
-  "crystalix:brown_shadeless_light_ghost_block"
-  "crystalix:cyan_shadeless_light_ghost_block"
-  "crystalix:gray_shadeless_light_ghost_block"
-  "crystalix:green_shadeless_light_ghost_block"
-  "crystalix:light_blue_shadeless_light_ghost_block"
-  "crystalix:light_gray_shadeless_light_ghost_block"
-  "crystalix:lime_shadeless_light_ghost_block"
-  "crystalix:magenta_shadeless_light_ghost_block"
-  "crystalix:orange_shadeless_light_ghost_block"
-  "crystalix:pink_shadeless_light_ghost_block"
-  "crystalix:purple_shadeless_light_ghost_block"
-  "crystalix:red_shadeless_light_ghost_block"
-  "crystalix:white_shadeless_light_ghost_block"
-  "crystalix:yellow_shadeless_light_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_block"
-  "crystalix:blue_shadeless_reinforced_block"
-  "crystalix:brown_shadeless_reinforced_block"
-  "crystalix:cyan_shadeless_reinforced_block"
-  "crystalix:gray_shadeless_reinforced_block"
-  "crystalix:green_shadeless_reinforced_block"
-  "crystalix:light_blue_shadeless_reinforced_block"
-  "crystalix:light_gray_shadeless_reinforced_block"
-  "crystalix:lime_shadeless_reinforced_block"
-  "crystalix:magenta_shadeless_reinforced_block"
-  "crystalix:orange_shadeless_reinforced_block"
-  "crystalix:pink_shadeless_reinforced_block"
-  "crystalix:purple_shadeless_reinforced_block"
-  "crystalix:red_shadeless_reinforced_block"
-  "crystalix:white_shadeless_reinforced_block"
-  "crystalix:yellow_shadeless_reinforced_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_dark_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_dark_block"
-  "crystalix:blue_shadeless_reinforced_dark_block"
-  "crystalix:brown_shadeless_reinforced_dark_block"
-  "crystalix:cyan_shadeless_reinforced_dark_block"
-  "crystalix:gray_shadeless_reinforced_dark_block"
-  "crystalix:green_shadeless_reinforced_dark_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_block"
-  "crystalix:lime_shadeless_reinforced_dark_block"
-  "crystalix:magenta_shadeless_reinforced_dark_block"
-  "crystalix:orange_shadeless_reinforced_dark_block"
-  "crystalix:pink_shadeless_reinforced_dark_block"
-  "crystalix:purple_shadeless_reinforced_dark_block"
-  "crystalix:red_shadeless_reinforced_dark_block"
-  "crystalix:white_shadeless_reinforced_dark_block"
-  "crystalix:yellow_shadeless_reinforced_dark_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_dark_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_ghost_block"
-  "crystalix:blue_shadeless_reinforced_ghost_block"
-  "crystalix:brown_shadeless_reinforced_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_ghost_block"
-  "crystalix:gray_shadeless_reinforced_ghost_block"
-  "crystalix:green_shadeless_reinforced_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  "crystalix:lime_shadeless_reinforced_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_ghost_block"
-  "crystalix:orange_shadeless_reinforced_ghost_block"
-  "crystalix:pink_shadeless_reinforced_ghost_block"
-  "crystalix:purple_shadeless_reinforced_ghost_block"
-  "crystalix:red_shadeless_reinforced_ghost_block"
-  "crystalix:white_shadeless_reinforced_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_ghost_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_light_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_light_block"
-  "crystalix:blue_shadeless_reinforced_light_block"
-  "crystalix:brown_shadeless_reinforced_light_block"
-  "crystalix:cyan_shadeless_reinforced_light_block"
-  "crystalix:gray_shadeless_reinforced_light_block"
-  "crystalix:green_shadeless_reinforced_light_block"
-  "crystalix:light_blue_shadeless_reinforced_light_block"
-  "crystalix:light_gray_shadeless_reinforced_light_block"
-  "crystalix:lime_shadeless_reinforced_light_block"
-  "crystalix:magenta_shadeless_reinforced_light_block"
-  "crystalix:orange_shadeless_reinforced_light_block"
-  "crystalix:pink_shadeless_reinforced_light_block"
-  "crystalix:purple_shadeless_reinforced_light_block"
-  "crystalix:red_shadeless_reinforced_light_block"
-  "crystalix:white_shadeless_reinforced_light_block"
-  "crystalix:yellow_shadeless_reinforced_light_block"
-]

```


</details>

<details>
<summary>minecraft:item/crystalix:shaded_reinforced_light_ghost_block</summary>

```diff
-[
-  "crystalix:black_shadeless_reinforced_light_ghost_block"
-  "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:green_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  "crystalix:red_shadeless_reinforced_light_ghost_block"
-  "crystalix:white_shadeless_reinforced_light_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_light_ghost_block"
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
   ... (18533 entries)
-  "crystalix:black_block"
-  "crystalix:black_dark_block"
-  "crystalix:black_dark_ghost_block"
-  "crystalix:black_ghost_block"
-  "crystalix:black_light_block"
-  "crystalix:black_light_ghost_block"
-  "crystalix:black_reinforced_block"
-  "crystalix:black_reinforced_dark_block"
-  "crystalix:black_reinforced_dark_ghost_block"
-  "crystalix:black_reinforced_ghost_block"
-  "crystalix:black_reinforced_light_block"
-  "crystalix:black_reinforced_light_ghost_block"
-  "crystalix:black_shadeless_block"
-  "crystalix:black_shadeless_dark_block"
-  "crystalix:black_shadeless_dark_ghost_block"
-  "crystalix:black_shadeless_ghost_block"
-  "crystalix:black_shadeless_light_block"
-  "crystalix:black_shadeless_light_ghost_block"
-  "crystalix:black_shadeless_reinforced_block"
-  "crystalix:black_shadeless_reinforced_dark_block"
-  "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  "crystalix:black_shadeless_reinforced_ghost_block"
-  "crystalix:black_shadeless_reinforced_light_block"
-  "crystalix:black_shadeless_reinforced_light_ghost_block"
-  "crystalix:blue_block"
-  "crystalix:blue_dark_block"
-  "crystalix:blue_dark_ghost_block"
-  "crystalix:blue_ghost_block"
-  "crystalix:blue_light_block"
-  "crystalix:blue_light_ghost_block"
-  "crystalix:blue_reinforced_block"
-  "crystalix:blue_reinforced_dark_block"
-  "crystalix:blue_reinforced_dark_ghost_block"
-  "crystalix:blue_reinforced_ghost_block"
-  "crystalix:blue_reinforced_light_block"
-  "crystalix:blue_reinforced_light_ghost_block"
-  "crystalix:blue_shadeless_block"
-  "crystalix:blue_shadeless_dark_block"
-  "crystalix:blue_shadeless_dark_ghost_block"
-  "crystalix:blue_shadeless_ghost_block"
-  "crystalix:blue_shadeless_light_block"
-  "crystalix:blue_shadeless_light_ghost_block"
-  "crystalix:blue_shadeless_reinforced_block"
-  "crystalix:blue_shadeless_reinforced_dark_block"
-  "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:blue_shadeless_reinforced_ghost_block"
-  "crystalix:blue_shadeless_reinforced_light_block"
-  "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:brown_block"
-  "crystalix:brown_dark_block"
-  "crystalix:brown_dark_ghost_block"
-  "crystalix:brown_ghost_block"
-  "crystalix:brown_light_block"
-  "crystalix:brown_light_ghost_block"
-  "crystalix:brown_reinforced_block"
-  "crystalix:brown_reinforced_dark_block"
-  "crystalix:brown_reinforced_dark_ghost_block"
-  "crystalix:brown_reinforced_ghost_block"
-  "crystalix:brown_reinforced_light_block"
-  "crystalix:brown_reinforced_light_ghost_block"
-  "crystalix:brown_shadeless_block"
-  "crystalix:brown_shadeless_dark_block"
-  "crystalix:brown_shadeless_dark_ghost_block"
-  "crystalix:brown_shadeless_ghost_block"
-  "crystalix:brown_shadeless_light_block"
-  "crystalix:brown_shadeless_light_ghost_block"
-  "crystalix:brown_shadeless_reinforced_block"
-  "crystalix:brown_shadeless_reinforced_dark_block"
-  "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  "crystalix:brown_shadeless_reinforced_ghost_block"
-  "crystalix:brown_shadeless_reinforced_light_block"
-  "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  "crystalix:cyan_block"
-  "crystalix:cyan_dark_block"
-  "crystalix:cyan_dark_ghost_block"
-  "crystalix:cyan_ghost_block"
-  "crystalix:cyan_light_block"
-  "crystalix:cyan_light_ghost_block"
-  "crystalix:cyan_reinforced_block"
-  "crystalix:cyan_reinforced_dark_block"
-  "crystalix:cyan_reinforced_dark_ghost_block"
-  "crystalix:cyan_reinforced_ghost_block"
-  "crystalix:cyan_reinforced_light_block"
-  "crystalix:cyan_reinforced_light_ghost_block"
-  "crystalix:cyan_shadeless_block"
-  "crystalix:cyan_shadeless_dark_block"
-  "crystalix:cyan_shadeless_dark_ghost_block"
-  "crystalix:cyan_shadeless_ghost_block"
-  "crystalix:cyan_shadeless_light_block"
-  "crystalix:cyan_shadeless_light_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_block"
-  "crystalix:cyan_shadeless_reinforced_dark_block"
-  "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_light_block"
-  "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  "crystalix:gray_block"
-  "crystalix:gray_dark_block"
-  "crystalix:gray_dark_ghost_block"
-  "crystalix:gray_ghost_block"
-  "crystalix:gray_light_block"
-  "crystalix:gray_light_ghost_block"
-  "crystalix:gray_reinforced_block"
-  "crystalix:gray_reinforced_dark_block"
-  "crystalix:gray_reinforced_dark_ghost_block"
-  "crystalix:gray_reinforced_ghost_block"
-  "crystalix:gray_reinforced_light_block"
-  "crystalix:gray_reinforced_light_ghost_block"
-  "crystalix:gray_shadeless_block"
-  "crystalix:gray_shadeless_dark_block"
-  "crystalix:gray_shadeless_dark_ghost_block"
-  "crystalix:gray_shadeless_ghost_block"
-  "crystalix:gray_shadeless_light_block"
-  "crystalix:gray_shadeless_light_ghost_block"
-  "crystalix:gray_shadeless_reinforced_block"
-  "crystalix:gray_shadeless_reinforced_dark_block"
-  "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:gray_shadeless_reinforced_ghost_block"
-  "crystalix:gray_shadeless_reinforced_light_block"
-  "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:green_block"
-  "crystalix:green_dark_block"
-  "crystalix:green_dark_ghost_block"
-  "crystalix:green_ghost_block"
-  "crystalix:green_light_block"
-  "crystalix:green_light_ghost_block"
-  "crystalix:green_reinforced_block"
-  "crystalix:green_reinforced_dark_block"
-  "crystalix:green_reinforced_dark_ghost_block"
-  "crystalix:green_reinforced_ghost_block"
-  "crystalix:green_reinforced_light_block"
-  "crystalix:green_reinforced_light_ghost_block"
-  "crystalix:green_shadeless_block"
-  "crystalix:green_shadeless_dark_block"
-  "crystalix:green_shadeless_dark_ghost_block"
-  "crystalix:green_shadeless_ghost_block"
-  "crystalix:green_shadeless_light_block"
-  "crystalix:green_shadeless_light_ghost_block"
-  "crystalix:green_shadeless_reinforced_block"
-  "crystalix:green_shadeless_reinforced_dark_block"
-  "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  "crystalix:green_shadeless_reinforced_ghost_block"
-  "crystalix:green_shadeless_reinforced_light_block"
-  "crystalix:green_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_blue_block"
-  "crystalix:light_blue_dark_block"
-  "crystalix:light_blue_dark_ghost_block"
-  "crystalix:light_blue_ghost_block"
-  "crystalix:light_blue_light_block"
-  "crystalix:light_blue_light_ghost_block"
-  "crystalix:light_blue_reinforced_block"
-  "crystalix:light_blue_reinforced_dark_block"
-  "crystalix:light_blue_reinforced_dark_ghost_block"
-  "crystalix:light_blue_reinforced_ghost_block"
-  "crystalix:light_blue_reinforced_light_block"
-  "crystalix:light_blue_reinforced_light_ghost_block"
-  "crystalix:light_blue_shadeless_block"
-  "crystalix:light_blue_shadeless_dark_block"
-  "crystalix:light_blue_shadeless_dark_ghost_block"
-  "crystalix:light_blue_shadeless_ghost_block"
-  "crystalix:light_blue_shadeless_light_block"
-  "crystalix:light_blue_shadeless_light_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_light_block"
-  "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_gray_block"
-  "crystalix:light_gray_dark_block"
-  "crystalix:light_gray_dark_ghost_block"
-  "crystalix:light_gray_ghost_block"
-  "crystalix:light_gray_light_block"
-  "crystalix:light_gray_light_ghost_block"
-  "crystalix:light_gray_reinforced_block"
-  "crystalix:light_gray_reinforced_dark_block"
-  "crystalix:light_gray_reinforced_dark_ghost_block"
-  "crystalix:light_gray_reinforced_ghost_block"
-  "crystalix:light_gray_reinforced_light_block"
-  "crystalix:light_gray_reinforced_light_ghost_block"
-  "crystalix:light_gray_shadeless_block"
-  "crystalix:light_gray_shadeless_dark_block"
-  "crystalix:light_gray_shadeless_dark_ghost_block"
-  "crystalix:light_gray_shadeless_ghost_block"
-  "crystalix:light_gray_shadeless_light_block"
-  "crystalix:light_gray_shadeless_light_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_light_block"
-  "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:lime_block"
-  "crystalix:lime_dark_block"
-  "crystalix:lime_dark_ghost_block"
-  "crystalix:lime_ghost_block"
-  "crystalix:lime_light_block"
-  "crystalix:lime_light_ghost_block"
-  "crystalix:lime_reinforced_block"
-  "crystalix:lime_reinforced_dark_block"
-  "crystalix:lime_reinforced_dark_ghost_block"
-  "crystalix:lime_reinforced_ghost_block"
-  "crystalix:lime_reinforced_light_block"
-  "crystalix:lime_reinforced_light_ghost_block"
-  "crystalix:lime_shadeless_block"
-  "crystalix:lime_shadeless_dark_block"
-  "crystalix:lime_shadeless_dark_ghost_block"
-  "crystalix:lime_shadeless_ghost_block"
-  "crystalix:lime_shadeless_light_block"
-  "crystalix:lime_shadeless_light_ghost_block"
-  "crystalix:lime_shadeless_reinforced_block"
-  "crystalix:lime_shadeless_reinforced_dark_block"
-  "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  "crystalix:lime_shadeless_reinforced_ghost_block"
-  "crystalix:lime_shadeless_reinforced_light_block"
-  "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  "crystalix:magenta_block"
-  "crystalix:magenta_dark_block"
-  "crystalix:magenta_dark_ghost_block"
-  "crystalix:magenta_ghost_block"
-  "crystalix:magenta_light_block"
-  "crystalix:magenta_light_ghost_block"
-  "crystalix:magenta_reinforced_block"
-  "crystalix:magenta_reinforced_dark_block"
-  "crystalix:magenta_reinforced_dark_ghost_block"
-  "crystalix:magenta_reinforced_ghost_block"
-  "crystalix:magenta_reinforced_light_block"
-  "crystalix:magenta_reinforced_light_ghost_block"
-  "crystalix:magenta_shadeless_block"
-  "crystalix:magenta_shadeless_dark_block"
-  "crystalix:magenta_shadeless_dark_ghost_block"
-  "crystalix:magenta_shadeless_ghost_block"
-  "crystalix:magenta_shadeless_light_block"
-  "crystalix:magenta_shadeless_light_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_block"
-  "crystalix:magenta_shadeless_reinforced_dark_block"
-  "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_light_block"
-  "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  "crystalix:orange_block"
-  "crystalix:orange_dark_block"
-  "crystalix:orange_dark_ghost_block"
-  "crystalix:orange_ghost_block"
-  "crystalix:orange_light_block"
-  "crystalix:orange_light_ghost_block"
-  "crystalix:orange_reinforced_block"
-  "crystalix:orange_reinforced_dark_block"
-  "crystalix:orange_reinforced_dark_ghost_block"
-  "crystalix:orange_reinforced_ghost_block"
-  "crystalix:orange_reinforced_light_block"
-  "crystalix:orange_reinforced_light_ghost_block"
-  "crystalix:orange_shadeless_block"
-  "crystalix:orange_shadeless_dark_block"
-  "crystalix:orange_shadeless_dark_ghost_block"
-  "crystalix:orange_shadeless_ghost_block"
-  "crystalix:orange_shadeless_light_block"
-  "crystalix:orange_shadeless_light_ghost_block"
-  "crystalix:orange_shadeless_reinforced_block"
-  "crystalix:orange_shadeless_reinforced_dark_block"
-  "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  "crystalix:orange_shadeless_reinforced_ghost_block"
-  "crystalix:orange_shadeless_reinforced_light_block"
-  "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  "crystalix:pink_block"
-  "crystalix:pink_dark_block"
-  "crystalix:pink_dark_ghost_block"
-  "crystalix:pink_ghost_block"
-  "crystalix:pink_light_block"
-  "crystalix:pink_light_ghost_block"
-  "crystalix:pink_reinforced_block"
-  "crystalix:pink_reinforced_dark_block"
-  "crystalix:pink_reinforced_dark_ghost_block"
-  "crystalix:pink_reinforced_ghost_block"
-  "crystalix:pink_reinforced_light_block"
-  "crystalix:pink_reinforced_light_ghost_block"
-  "crystalix:pink_shadeless_block"
-  "crystalix:pink_shadeless_dark_block"
-  "crystalix:pink_shadeless_dark_ghost_block"
-  "crystalix:pink_shadeless_ghost_block"
-  "crystalix:pink_shadeless_light_block"
-  "crystalix:pink_shadeless_light_ghost_block"
-  "crystalix:pink_shadeless_reinforced_block"
-  "crystalix:pink_shadeless_reinforced_dark_block"
-  "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  "crystalix:pink_shadeless_reinforced_ghost_block"
-  "crystalix:pink_shadeless_reinforced_light_block"
-  "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  "crystalix:purple_block"
-  "crystalix:purple_dark_block"
-  "crystalix:purple_dark_ghost_block"
-  "crystalix:purple_ghost_block"
-  "crystalix:purple_light_block"
-  "crystalix:purple_light_ghost_block"
-  "crystalix:purple_reinforced_block"
-  "crystalix:purple_reinforced_dark_block"
-  "crystalix:purple_reinforced_dark_ghost_block"
-  "crystalix:purple_reinforced_ghost_block"
-  "crystalix:purple_reinforced_light_block"
-  "crystalix:purple_reinforced_light_ghost_block"
-  "crystalix:purple_shadeless_block"
-  "crystalix:purple_shadeless_dark_block"
-  "crystalix:purple_shadeless_dark_ghost_block"
-  "crystalix:purple_shadeless_ghost_block"
-  "crystalix:purple_shadeless_light_block"
-  "crystalix:purple_shadeless_light_ghost_block"
-  "crystalix:purple_shadeless_reinforced_block"
-  "crystalix:purple_shadeless_reinforced_dark_block"
-  "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  "crystalix:purple_shadeless_reinforced_ghost_block"
-  "crystalix:purple_shadeless_reinforced_light_block"
-  "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  "crystalix:red_block"
-  "crystalix:red_dark_block"
-  "crystalix:red_dark_ghost_block"
-  "crystalix:red_ghost_block"
-  "crystalix:red_light_block"
-  "crystalix:red_light_ghost_block"
-  "crystalix:red_reinforced_block"
-  "crystalix:red_reinforced_dark_block"
-  "crystalix:red_reinforced_dark_ghost_block"
-  "crystalix:red_reinforced_ghost_block"
-  "crystalix:red_reinforced_light_block"
-  "crystalix:red_reinforced_light_ghost_block"
-  "crystalix:red_shadeless_block"
-  "crystalix:red_shadeless_dark_block"
-  "crystalix:red_shadeless_dark_ghost_block"
-  "crystalix:red_shadeless_ghost_block"
-  "crystalix:red_shadeless_light_block"
-  "crystalix:red_shadeless_light_ghost_block"
-  "crystalix:red_shadeless_reinforced_block"
-  "crystalix:red_shadeless_reinforced_dark_block"
-  "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  "crystalix:red_shadeless_reinforced_ghost_block"
-  "crystalix:red_shadeless_reinforced_light_block"
-  "crystalix:red_shadeless_reinforced_light_ghost_block"
-  "crystalix:white_block"
-  "crystalix:white_dark_block"
-  "crystalix:white_dark_ghost_block"
-  "crystalix:white_ghost_block"
-  "crystalix:white_light_block"
-  "crystalix:white_light_ghost_block"
-  "crystalix:white_reinforced_block"
-  "crystalix:white_reinforced_dark_block"
-  "crystalix:white_reinforced_dark_ghost_block"
-  "crystalix:white_reinforced_ghost_block"
-  "crystalix:white_reinforced_light_block"
-  "crystalix:white_reinforced_light_ghost_block"
-  "crystalix:white_shadeless_block"
-  "crystalix:white_shadeless_dark_block"
-  "crystalix:white_shadeless_dark_ghost_block"
-  "crystalix:white_shadeless_ghost_block"
-  "crystalix:white_shadeless_light_block"
-  "crystalix:white_shadeless_light_ghost_block"
-  "crystalix:white_shadeless_reinforced_block"
-  "crystalix:white_shadeless_reinforced_dark_block"
-  "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  "crystalix:white_shadeless_reinforced_ghost_block"
-  "crystalix:white_shadeless_reinforced_light_block"
-  "crystalix:white_shadeless_reinforced_light_ghost_block"
-  "crystalix:yellow_block"
-  "crystalix:yellow_dark_block"
-  "crystalix:yellow_dark_ghost_block"
-  "crystalix:yellow_ghost_block"
-  "crystalix:yellow_light_block"
-  "crystalix:yellow_light_ghost_block"
-  "crystalix:yellow_reinforced_block"
-  "crystalix:yellow_reinforced_dark_block"
-  "crystalix:yellow_reinforced_dark_ghost_block"
-  "crystalix:yellow_reinforced_ghost_block"
-  "crystalix:yellow_reinforced_light_block"
-  "crystalix:yellow_reinforced_light_ghost_block"
-  "crystalix:yellow_shadeless_block"
-  "crystalix:yellow_shadeless_dark_block"
-  "crystalix:yellow_shadeless_dark_ghost_block"
-  "crystalix:yellow_shadeless_ghost_block"
-  "crystalix:yellow_shadeless_light_block"
-  "crystalix:yellow_shadeless_light_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_block"
-  "crystalix:yellow_shadeless_reinforced_dark_block"
-  "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_light_block"
-  "crystalix:yellow_shadeless_reinforced_light_ghost_block"
+  "crystalix:black_crystalix_glass"
+  "crystalix:blue_crystalix_glass"
+  "crystalix:brown_crystalix_glass"
+  "crystalix:cyan_crystalix_glass"
+  "crystalix:gray_crystalix_glass"
+  "crystalix:green_crystalix_glass"
+  "crystalix:light_blue_crystalix_glass"
+  "crystalix:light_gray_crystalix_glass"
+  "crystalix:lime_crystalix_glass"
+  "crystalix:magenta_crystalix_glass"
+  "crystalix:orange_crystalix_glass"
+  "crystalix:pink_crystalix_glass"
+  "crystalix:purple_crystalix_glass"
+  "crystalix:red_crystalix_glass"
+  "crystalix:white_crystalix_glass"
+  "crystalix:yellow_crystalix_glass"
   ... (21284 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (23850 entries)
-  "crystalix:black_block"
-  "crystalix:black_dark_block"
-  "crystalix:black_dark_ghost_block"
-  "crystalix:black_ghost_block"
-  "crystalix:black_light_block"
-  "crystalix:black_light_ghost_block"
-  "crystalix:black_reinforced_block"
-  "crystalix:black_reinforced_dark_block"
-  "crystalix:black_reinforced_dark_ghost_block"
-  "crystalix:black_reinforced_ghost_block"
-  "crystalix:black_reinforced_light_block"
-  "crystalix:black_reinforced_light_ghost_block"
-  "crystalix:black_shadeless_block"
-  "crystalix:black_shadeless_dark_block"
-  "crystalix:black_shadeless_dark_ghost_block"
-  "crystalix:black_shadeless_ghost_block"
-  "crystalix:black_shadeless_light_block"
-  "crystalix:black_shadeless_light_ghost_block"
-  "crystalix:black_shadeless_reinforced_block"
-  "crystalix:black_shadeless_reinforced_dark_block"
-  "crystalix:black_shadeless_reinforced_dark_ghost_block"
-  "crystalix:black_shadeless_reinforced_ghost_block"
-  "crystalix:black_shadeless_reinforced_light_block"
-  "crystalix:black_shadeless_reinforced_light_ghost_block"
-  "crystalix:blue_block"
-  "crystalix:blue_dark_block"
-  "crystalix:blue_dark_ghost_block"
-  "crystalix:blue_ghost_block"
-  "crystalix:blue_light_block"
-  "crystalix:blue_light_ghost_block"
-  "crystalix:blue_reinforced_block"
-  "crystalix:blue_reinforced_dark_block"
-  "crystalix:blue_reinforced_dark_ghost_block"
-  "crystalix:blue_reinforced_ghost_block"
-  "crystalix:blue_reinforced_light_block"
-  "crystalix:blue_reinforced_light_ghost_block"
-  "crystalix:blue_shadeless_block"
-  "crystalix:blue_shadeless_dark_block"
-  "crystalix:blue_shadeless_dark_ghost_block"
-  "crystalix:blue_shadeless_ghost_block"
-  "crystalix:blue_shadeless_light_block"
-  "crystalix:blue_shadeless_light_ghost_block"
-  "crystalix:blue_shadeless_reinforced_block"
-  "crystalix:blue_shadeless_reinforced_dark_block"
-  "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:blue_shadeless_reinforced_ghost_block"
-  "crystalix:blue_shadeless_reinforced_light_block"
-  "crystalix:blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:brown_block"
-  "crystalix:brown_dark_block"
-  "crystalix:brown_dark_ghost_block"
-  "crystalix:brown_ghost_block"
-  "crystalix:brown_light_block"
-  "crystalix:brown_light_ghost_block"
-  "crystalix:brown_reinforced_block"
-  "crystalix:brown_reinforced_dark_block"
-  "crystalix:brown_reinforced_dark_ghost_block"
-  "crystalix:brown_reinforced_ghost_block"
-  "crystalix:brown_reinforced_light_block"
-  "crystalix:brown_reinforced_light_ghost_block"
-  "crystalix:brown_shadeless_block"
-  "crystalix:brown_shadeless_dark_block"
-  "crystalix:brown_shadeless_dark_ghost_block"
-  "crystalix:brown_shadeless_ghost_block"
-  "crystalix:brown_shadeless_light_block"
-  "crystalix:brown_shadeless_light_ghost_block"
-  "crystalix:brown_shadeless_reinforced_block"
-  "crystalix:brown_shadeless_reinforced_dark_block"
-  "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-  "crystalix:brown_shadeless_reinforced_ghost_block"
-  "crystalix:brown_shadeless_reinforced_light_block"
-  "crystalix:brown_shadeless_reinforced_light_ghost_block"
-  "crystalix:cyan_block"
-  "crystalix:cyan_dark_block"
-  "crystalix:cyan_dark_ghost_block"
-  "crystalix:cyan_ghost_block"
-  "crystalix:cyan_light_block"
-  "crystalix:cyan_light_ghost_block"
-  "crystalix:cyan_reinforced_block"
-  "crystalix:cyan_reinforced_dark_block"
-  "crystalix:cyan_reinforced_dark_ghost_block"
-  "crystalix:cyan_reinforced_ghost_block"
-  "crystalix:cyan_reinforced_light_block"
-  "crystalix:cyan_reinforced_light_ghost_block"
-  "crystalix:cyan_shadeless_block"
-  "crystalix:cyan_shadeless_dark_block"
-  "crystalix:cyan_shadeless_dark_ghost_block"
-  "crystalix:cyan_shadeless_ghost_block"
-  "crystalix:cyan_shadeless_light_block"
-  "crystalix:cyan_shadeless_light_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_block"
-  "crystalix:cyan_shadeless_reinforced_dark_block"
-  "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_ghost_block"
-  "crystalix:cyan_shadeless_reinforced_light_block"
-  "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-  "crystalix:gray_block"
-  "crystalix:gray_dark_block"
-  "crystalix:gray_dark_ghost_block"
-  "crystalix:gray_ghost_block"
-  "crystalix:gray_light_block"
-  "crystalix:gray_light_ghost_block"
-  "crystalix:gray_reinforced_block"
-  "crystalix:gray_reinforced_dark_block"
-  "crystalix:gray_reinforced_dark_ghost_block"
-  "crystalix:gray_reinforced_ghost_block"
-  "crystalix:gray_reinforced_light_block"
-  "crystalix:gray_reinforced_light_ghost_block"
-  "crystalix:gray_shadeless_block"
-  "crystalix:gray_shadeless_dark_block"
-  "crystalix:gray_shadeless_dark_ghost_block"
-  "crystalix:gray_shadeless_ghost_block"
-  "crystalix:gray_shadeless_light_block"
-  "crystalix:gray_shadeless_light_ghost_block"
-  "crystalix:gray_shadeless_reinforced_block"
-  "crystalix:gray_shadeless_reinforced_dark_block"
-  "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:gray_shadeless_reinforced_ghost_block"
-  "crystalix:gray_shadeless_reinforced_light_block"
-  "crystalix:gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:green_block"
-  "crystalix:green_dark_block"
-  "crystalix:green_dark_ghost_block"
-  "crystalix:green_ghost_block"
-  "crystalix:green_light_block"
-  "crystalix:green_light_ghost_block"
-  "crystalix:green_reinforced_block"
-  "crystalix:green_reinforced_dark_block"
-  "crystalix:green_reinforced_dark_ghost_block"
-  "crystalix:green_reinforced_ghost_block"
-  "crystalix:green_reinforced_light_block"
-  "crystalix:green_reinforced_light_ghost_block"
-  "crystalix:green_shadeless_block"
-  "crystalix:green_shadeless_dark_block"
-  "crystalix:green_shadeless_dark_ghost_block"
-  "crystalix:green_shadeless_ghost_block"
-  "crystalix:green_shadeless_light_block"
-  "crystalix:green_shadeless_light_ghost_block"
-  "crystalix:green_shadeless_reinforced_block"
-  "crystalix:green_shadeless_reinforced_dark_block"
-  "crystalix:green_shadeless_reinforced_dark_ghost_block"
-  "crystalix:green_shadeless_reinforced_ghost_block"
-  "crystalix:green_shadeless_reinforced_light_block"
-  "crystalix:green_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_blue_block"
-  "crystalix:light_blue_dark_block"
-  "crystalix:light_blue_dark_ghost_block"
-  "crystalix:light_blue_ghost_block"
-  "crystalix:light_blue_light_block"
-  "crystalix:light_blue_light_ghost_block"
-  "crystalix:light_blue_reinforced_block"
-  "crystalix:light_blue_reinforced_dark_block"
-  "crystalix:light_blue_reinforced_dark_ghost_block"
-  "crystalix:light_blue_reinforced_ghost_block"
-  "crystalix:light_blue_reinforced_light_block"
-  "crystalix:light_blue_reinforced_light_ghost_block"
-  "crystalix:light_blue_shadeless_block"
-  "crystalix:light_blue_shadeless_dark_block"
-  "crystalix:light_blue_shadeless_dark_ghost_block"
-  "crystalix:light_blue_shadeless_ghost_block"
-  "crystalix:light_blue_shadeless_light_block"
-  "crystalix:light_blue_shadeless_light_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_block"
-  "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_ghost_block"
-  "crystalix:light_blue_shadeless_reinforced_light_block"
-  "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-  "crystalix:light_gray_block"
-  "crystalix:light_gray_dark_block"
-  "crystalix:light_gray_dark_ghost_block"
-  "crystalix:light_gray_ghost_block"
-  "crystalix:light_gray_light_block"
-  "crystalix:light_gray_light_ghost_block"
-  "crystalix:light_gray_reinforced_block"
-  "crystalix:light_gray_reinforced_dark_block"
-  "crystalix:light_gray_reinforced_dark_ghost_block"
-  "crystalix:light_gray_reinforced_ghost_block"
-  "crystalix:light_gray_reinforced_light_block"
-  "crystalix:light_gray_reinforced_light_ghost_block"
-  "crystalix:light_gray_shadeless_block"
-  "crystalix:light_gray_shadeless_dark_block"
-  "crystalix:light_gray_shadeless_dark_ghost_block"
-  "crystalix:light_gray_shadeless_ghost_block"
-  "crystalix:light_gray_shadeless_light_block"
-  "crystalix:light_gray_shadeless_light_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_block"
-  "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_ghost_block"
-  "crystalix:light_gray_shadeless_reinforced_light_block"
-  "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-  "crystalix:lime_block"
-  "crystalix:lime_dark_block"
-  "crystalix:lime_dark_ghost_block"
-  "crystalix:lime_ghost_block"
-  "crystalix:lime_light_block"
-  "crystalix:lime_light_ghost_block"
-  "crystalix:lime_reinforced_block"
-  "crystalix:lime_reinforced_dark_block"
-  "crystalix:lime_reinforced_dark_ghost_block"
-  "crystalix:lime_reinforced_ghost_block"
-  "crystalix:lime_reinforced_light_block"
-  "crystalix:lime_reinforced_light_ghost_block"
-  "crystalix:lime_shadeless_block"
-  "crystalix:lime_shadeless_dark_block"
-  "crystalix:lime_shadeless_dark_ghost_block"
-  "crystalix:lime_shadeless_ghost_block"
-  "crystalix:lime_shadeless_light_block"
-  "crystalix:lime_shadeless_light_ghost_block"
-  "crystalix:lime_shadeless_reinforced_block"
-  "crystalix:lime_shadeless_reinforced_dark_block"
-  "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-  "crystalix:lime_shadeless_reinforced_ghost_block"
-  "crystalix:lime_shadeless_reinforced_light_block"
-  "crystalix:lime_shadeless_reinforced_light_ghost_block"
-  "crystalix:magenta_block"
-  "crystalix:magenta_dark_block"
-  "crystalix:magenta_dark_ghost_block"
-  "crystalix:magenta_ghost_block"
-  "crystalix:magenta_light_block"
-  "crystalix:magenta_light_ghost_block"
-  "crystalix:magenta_reinforced_block"
-  "crystalix:magenta_reinforced_dark_block"
-  "crystalix:magenta_reinforced_dark_ghost_block"
-  "crystalix:magenta_reinforced_ghost_block"
-  "crystalix:magenta_reinforced_light_block"
-  "crystalix:magenta_reinforced_light_ghost_block"
-  "crystalix:magenta_shadeless_block"
-  "crystalix:magenta_shadeless_dark_block"
-  "crystalix:magenta_shadeless_dark_ghost_block"
-  "crystalix:magenta_shadeless_ghost_block"
-  "crystalix:magenta_shadeless_light_block"
-  "crystalix:magenta_shadeless_light_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_block"
-  "crystalix:magenta_shadeless_reinforced_dark_block"
-  "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_ghost_block"
-  "crystalix:magenta_shadeless_reinforced_light_block"
-  "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-  "crystalix:orange_block"
-  "crystalix:orange_dark_block"
-  "crystalix:orange_dark_ghost_block"
-  "crystalix:orange_ghost_block"
-  "crystalix:orange_light_block"
-  "crystalix:orange_light_ghost_block"
-  "crystalix:orange_reinforced_block"
-  "crystalix:orange_reinforced_dark_block"
-  "crystalix:orange_reinforced_dark_ghost_block"
-  "crystalix:orange_reinforced_ghost_block"
-  "crystalix:orange_reinforced_light_block"
-  "crystalix:orange_reinforced_light_ghost_block"
-  "crystalix:orange_shadeless_block"
-  "crystalix:orange_shadeless_dark_block"
-  "crystalix:orange_shadeless_dark_ghost_block"
-  "crystalix:orange_shadeless_ghost_block"
-  "crystalix:orange_shadeless_light_block"
-  "crystalix:orange_shadeless_light_ghost_block"
-  "crystalix:orange_shadeless_reinforced_block"
-  "crystalix:orange_shadeless_reinforced_dark_block"
-  "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-  "crystalix:orange_shadeless_reinforced_ghost_block"
-  "crystalix:orange_shadeless_reinforced_light_block"
-  "crystalix:orange_shadeless_reinforced_light_ghost_block"
-  "crystalix:pink_block"
-  "crystalix:pink_dark_block"
-  "crystalix:pink_dark_ghost_block"
-  "crystalix:pink_ghost_block"
-  "crystalix:pink_light_block"
-  "crystalix:pink_light_ghost_block"
-  "crystalix:pink_reinforced_block"
-  "crystalix:pink_reinforced_dark_block"
-  "crystalix:pink_reinforced_dark_ghost_block"
-  "crystalix:pink_reinforced_ghost_block"
-  "crystalix:pink_reinforced_light_block"
-  "crystalix:pink_reinforced_light_ghost_block"
-  "crystalix:pink_shadeless_block"
-  "crystalix:pink_shadeless_dark_block"
-  "crystalix:pink_shadeless_dark_ghost_block"
-  "crystalix:pink_shadeless_ghost_block"
-  "crystalix:pink_shadeless_light_block"
-  "crystalix:pink_shadeless_light_ghost_block"
-  "crystalix:pink_shadeless_reinforced_block"
-  "crystalix:pink_shadeless_reinforced_dark_block"
-  "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-  "crystalix:pink_shadeless_reinforced_ghost_block"
-  "crystalix:pink_shadeless_reinforced_light_block"
-  "crystalix:pink_shadeless_reinforced_light_ghost_block"
-  "crystalix:purple_block"
-  "crystalix:purple_dark_block"
-  "crystalix:purple_dark_ghost_block"
-  "crystalix:purple_ghost_block"
-  "crystalix:purple_light_block"
-  "crystalix:purple_light_ghost_block"
-  "crystalix:purple_reinforced_block"
-  "crystalix:purple_reinforced_dark_block"
-  "crystalix:purple_reinforced_dark_ghost_block"
-  "crystalix:purple_reinforced_ghost_block"
-  "crystalix:purple_reinforced_light_block"
-  "crystalix:purple_reinforced_light_ghost_block"
-  "crystalix:purple_shadeless_block"
-  "crystalix:purple_shadeless_dark_block"
-  "crystalix:purple_shadeless_dark_ghost_block"
-  "crystalix:purple_shadeless_ghost_block"
-  "crystalix:purple_shadeless_light_block"
-  "crystalix:purple_shadeless_light_ghost_block"
-  "crystalix:purple_shadeless_reinforced_block"
-  "crystalix:purple_shadeless_reinforced_dark_block"
-  "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-  "crystalix:purple_shadeless_reinforced_ghost_block"
-  "crystalix:purple_shadeless_reinforced_light_block"
-  "crystalix:purple_shadeless_reinforced_light_ghost_block"
-  "crystalix:red_block"
-  "crystalix:red_dark_block"
-  "crystalix:red_dark_ghost_block"
-  "crystalix:red_ghost_block"
-  "crystalix:red_light_block"
-  "crystalix:red_light_ghost_block"
-  "crystalix:red_reinforced_block"
-  "crystalix:red_reinforced_dark_block"
-  "crystalix:red_reinforced_dark_ghost_block"
-  "crystalix:red_reinforced_ghost_block"
-  "crystalix:red_reinforced_light_block"
-  "crystalix:red_reinforced_light_ghost_block"
-  "crystalix:red_shadeless_block"
-  "crystalix:red_shadeless_dark_block"
-  "crystalix:red_shadeless_dark_ghost_block"
-  "crystalix:red_shadeless_ghost_block"
-  "crystalix:red_shadeless_light_block"
-  "crystalix:red_shadeless_light_ghost_block"
-  "crystalix:red_shadeless_reinforced_block"
-  "crystalix:red_shadeless_reinforced_dark_block"
-  "crystalix:red_shadeless_reinforced_dark_ghost_block"
-  "crystalix:red_shadeless_reinforced_ghost_block"
-  "crystalix:red_shadeless_reinforced_light_block"
-  "crystalix:red_shadeless_reinforced_light_ghost_block"
-  "crystalix:white_block"
-  "crystalix:white_dark_block"
-  "crystalix:white_dark_ghost_block"
-  "crystalix:white_ghost_block"
-  "crystalix:white_light_block"
-  "crystalix:white_light_ghost_block"
-  "crystalix:white_reinforced_block"
-  "crystalix:white_reinforced_dark_block"
-  "crystalix:white_reinforced_dark_ghost_block"
-  "crystalix:white_reinforced_ghost_block"
-  "crystalix:white_reinforced_light_block"
-  "crystalix:white_reinforced_light_ghost_block"
-  "crystalix:white_shadeless_block"
-  "crystalix:white_shadeless_dark_block"
-  "crystalix:white_shadeless_dark_ghost_block"
-  "crystalix:white_shadeless_ghost_block"
-  "crystalix:white_shadeless_light_block"
-  "crystalix:white_shadeless_light_ghost_block"
-  "crystalix:white_shadeless_reinforced_block"
-  "crystalix:white_shadeless_reinforced_dark_block"
-  "crystalix:white_shadeless_reinforced_dark_ghost_block"
-  "crystalix:white_shadeless_reinforced_ghost_block"
-  "crystalix:white_shadeless_reinforced_light_block"
-  "crystalix:white_shadeless_reinforced_light_ghost_block"
-  "crystalix:yellow_block"
-  "crystalix:yellow_dark_block"
-  "crystalix:yellow_dark_ghost_block"
-  "crystalix:yellow_ghost_block"
-  "crystalix:yellow_light_block"
-  "crystalix:yellow_light_ghost_block"
-  "crystalix:yellow_reinforced_block"
-  "crystalix:yellow_reinforced_dark_block"
-  "crystalix:yellow_reinforced_dark_ghost_block"
-  "crystalix:yellow_reinforced_ghost_block"
-  "crystalix:yellow_reinforced_light_block"
-  "crystalix:yellow_reinforced_light_ghost_block"
-  "crystalix:yellow_shadeless_block"
-  "crystalix:yellow_shadeless_dark_block"
-  "crystalix:yellow_shadeless_dark_ghost_block"
-  "crystalix:yellow_shadeless_ghost_block"
-  "crystalix:yellow_shadeless_light_block"
-  "crystalix:yellow_shadeless_light_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_block"
-  "crystalix:yellow_shadeless_reinforced_dark_block"
-  "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_ghost_block"
-  "crystalix:yellow_shadeless_reinforced_light_block"
-  "crystalix:yellow_shadeless_reinforced_light_ghost_block"
+  "crystalix:black_crystalix_glass"
+  "crystalix:blue_crystalix_glass"
+  "crystalix:brown_crystalix_glass"
+  "crystalix:crystalix_wand"
+  "crystalix:cyan_crystalix_glass"
+  "crystalix:gray_crystalix_glass"
+  "crystalix:green_crystalix_glass"
+  "crystalix:light_blue_crystalix_glass"
+  "crystalix:light_gray_crystalix_glass"
+  "crystalix:lime_crystalix_glass"
+  "crystalix:magenta_crystalix_glass"
+  "crystalix:orange_crystalix_glass"
+  "crystalix:pink_crystalix_glass"
+  "crystalix:purple_crystalix_glass"
+  "crystalix:red_crystalix_glass"
+  "crystalix:white_crystalix_glass"
+  "crystalix:yellow_crystalix_glass"
   ... (28283 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (16)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:black_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/black_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:blue_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/blue_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:brown_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/brown_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:cyan_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/cyan_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:gray_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/gray_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:green_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/green_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_blue_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_blue_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_gray_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_gray_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:lime_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/lime_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:magenta_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/magenta_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:orange_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/orange_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:pink_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/pink_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:purple_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/purple_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:red_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/red_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:white_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/white_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:yellow_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/yellow_crystalix_glass"
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (384)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_block</summary>

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
-          name: "crystalix:black_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_dark_block</summary>

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
-          name: "crystalix:black_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_dark_ghost_block</summary>

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
-          name: "crystalix:black_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_ghost_block</summary>

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
-          name: "crystalix:black_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_light_block</summary>

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
-          name: "crystalix:black_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_light_ghost_block</summary>

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
-          name: "crystalix:black_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_block</summary>

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
-          name: "crystalix:black_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_dark_block</summary>

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
-          name: "crystalix:black_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:black_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_ghost_block</summary>

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
-          name: "crystalix:black_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_light_block</summary>

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
-          name: "crystalix:black_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:black_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_block</summary>

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
-          name: "crystalix:black_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_dark_block</summary>

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
-          name: "crystalix:black_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_light_block</summary>

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
-          name: "crystalix:black_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:black_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/black_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_block</summary>

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
-          name: "crystalix:blue_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_dark_block</summary>

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
-          name: "crystalix:blue_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_dark_ghost_block</summary>

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
-          name: "crystalix:blue_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_ghost_block</summary>

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
-          name: "crystalix:blue_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_light_block</summary>

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
-          name: "crystalix:blue_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_light_ghost_block</summary>

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
-          name: "crystalix:blue_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_block</summary>

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
-          name: "crystalix:blue_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_dark_block</summary>

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
-          name: "crystalix:blue_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:blue_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_ghost_block</summary>

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
-          name: "crystalix:blue_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_light_block</summary>

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
-          name: "crystalix:blue_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:blue_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_block</summary>

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
-          name: "crystalix:blue_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_dark_block</summary>

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
-          name: "crystalix:blue_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_light_block</summary>

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
-          name: "crystalix:blue_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:blue_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/blue_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_block</summary>

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
-          name: "crystalix:brown_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_dark_block</summary>

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
-          name: "crystalix:brown_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_dark_ghost_block</summary>

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
-          name: "crystalix:brown_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_ghost_block</summary>

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
-          name: "crystalix:brown_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_light_block</summary>

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
-          name: "crystalix:brown_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_light_ghost_block</summary>

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
-          name: "crystalix:brown_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_block</summary>

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
-          name: "crystalix:brown_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_dark_block</summary>

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
-          name: "crystalix:brown_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:brown_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_ghost_block</summary>

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
-          name: "crystalix:brown_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_light_block</summary>

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
-          name: "crystalix:brown_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:brown_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_block</summary>

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
-          name: "crystalix:brown_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_dark_block</summary>

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
-          name: "crystalix:brown_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_light_block</summary>

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
-          name: "crystalix:brown_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:brown_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/brown_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_block</summary>

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
-          name: "crystalix:cyan_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_dark_block</summary>

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
-          name: "crystalix:cyan_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_dark_ghost_block</summary>

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
-          name: "crystalix:cyan_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_ghost_block</summary>

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
-          name: "crystalix:cyan_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_light_block</summary>

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
-          name: "crystalix:cyan_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_light_ghost_block</summary>

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
-          name: "crystalix:cyan_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_block</summary>

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
-          name: "crystalix:cyan_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_dark_block</summary>

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
-          name: "crystalix:cyan_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:cyan_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_ghost_block</summary>

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
-          name: "crystalix:cyan_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_light_block</summary>

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
-          name: "crystalix:cyan_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:cyan_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_block</summary>

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
-          name: "crystalix:cyan_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_dark_block</summary>

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
-          name: "crystalix:cyan_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_light_block</summary>

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
-          name: "crystalix:cyan_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:cyan_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/cyan_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_block</summary>

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
-          name: "crystalix:gray_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_dark_block</summary>

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
-          name: "crystalix:gray_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_dark_ghost_block</summary>

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
-          name: "crystalix:gray_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_ghost_block</summary>

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
-          name: "crystalix:gray_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_light_block</summary>

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
-          name: "crystalix:gray_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_light_ghost_block</summary>

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
-          name: "crystalix:gray_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_block</summary>

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
-          name: "crystalix:gray_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_dark_block</summary>

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
-          name: "crystalix:gray_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:gray_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_ghost_block</summary>

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
-          name: "crystalix:gray_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_light_block</summary>

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
-          name: "crystalix:gray_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:gray_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_block</summary>

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
-          name: "crystalix:gray_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_dark_block</summary>

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
-          name: "crystalix:gray_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_light_block</summary>

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
-          name: "crystalix:gray_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:gray_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/gray_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_block</summary>

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
-          name: "crystalix:green_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_dark_block</summary>

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
-          name: "crystalix:green_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_dark_ghost_block</summary>

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
-          name: "crystalix:green_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_ghost_block</summary>

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
-          name: "crystalix:green_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_light_block</summary>

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
-          name: "crystalix:green_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_light_ghost_block</summary>

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
-          name: "crystalix:green_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_block</summary>

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
-          name: "crystalix:green_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_dark_block</summary>

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
-          name: "crystalix:green_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:green_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_ghost_block</summary>

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
-          name: "crystalix:green_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_light_block</summary>

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
-          name: "crystalix:green_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:green_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_block</summary>

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
-          name: "crystalix:green_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_dark_block</summary>

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
-          name: "crystalix:green_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_light_block</summary>

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
-          name: "crystalix:green_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:green_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/green_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_block</summary>

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
-          name: "crystalix:light_blue_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_dark_block</summary>

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
-          name: "crystalix:light_blue_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_dark_ghost_block</summary>

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
-          name: "crystalix:light_blue_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_ghost_block</summary>

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
-          name: "crystalix:light_blue_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_light_block</summary>

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
-          name: "crystalix:light_blue_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_light_ghost_block</summary>

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
-          name: "crystalix:light_blue_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_block</summary>

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
-          name: "crystalix:light_blue_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_dark_block</summary>

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
-          name: "crystalix:light_blue_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:light_blue_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_ghost_block</summary>

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
-          name: "crystalix:light_blue_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_light_block</summary>

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
-          name: "crystalix:light_blue_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:light_blue_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_block</summary>

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
-          name: "crystalix:light_blue_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_dark_block</summary>

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
-          name: "crystalix:light_blue_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_light_block</summary>

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
-          name: "crystalix:light_blue_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:light_blue_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_blue_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_block</summary>

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
-          name: "crystalix:light_gray_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_dark_block</summary>

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
-          name: "crystalix:light_gray_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_dark_ghost_block</summary>

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
-          name: "crystalix:light_gray_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_ghost_block</summary>

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
-          name: "crystalix:light_gray_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_light_block</summary>

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
-          name: "crystalix:light_gray_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_light_ghost_block</summary>

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
-          name: "crystalix:light_gray_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_block</summary>

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
-          name: "crystalix:light_gray_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_dark_block</summary>

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
-          name: "crystalix:light_gray_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:light_gray_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_ghost_block</summary>

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
-          name: "crystalix:light_gray_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_light_block</summary>

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
-          name: "crystalix:light_gray_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:light_gray_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_block</summary>

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
-          name: "crystalix:light_gray_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_dark_block</summary>

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
-          name: "crystalix:light_gray_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_light_block</summary>

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
-          name: "crystalix:light_gray_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:light_gray_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/light_gray_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_block</summary>

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
-          name: "crystalix:lime_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_dark_block</summary>

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
-          name: "crystalix:lime_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_dark_ghost_block</summary>

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
-          name: "crystalix:lime_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_ghost_block</summary>

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
-          name: "crystalix:lime_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_light_block</summary>

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
-          name: "crystalix:lime_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_light_ghost_block</summary>

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
-          name: "crystalix:lime_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_block</summary>

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
-          name: "crystalix:lime_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_dark_block</summary>

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
-          name: "crystalix:lime_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:lime_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_ghost_block</summary>

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
-          name: "crystalix:lime_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_light_block</summary>

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
-          name: "crystalix:lime_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:lime_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_block</summary>

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
-          name: "crystalix:lime_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_dark_block</summary>

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
-          name: "crystalix:lime_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_light_block</summary>

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
-          name: "crystalix:lime_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:lime_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/lime_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_block</summary>

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
-          name: "crystalix:magenta_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_dark_block</summary>

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
-          name: "crystalix:magenta_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_dark_ghost_block</summary>

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
-          name: "crystalix:magenta_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_ghost_block</summary>

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
-          name: "crystalix:magenta_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_light_block</summary>

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
-          name: "crystalix:magenta_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_light_ghost_block</summary>

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
-          name: "crystalix:magenta_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_block</summary>

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
-          name: "crystalix:magenta_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_dark_block</summary>

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
-          name: "crystalix:magenta_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:magenta_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_ghost_block</summary>

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
-          name: "crystalix:magenta_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_light_block</summary>

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
-          name: "crystalix:magenta_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:magenta_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_block</summary>

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
-          name: "crystalix:magenta_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_dark_block</summary>

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
-          name: "crystalix:magenta_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_light_block</summary>

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
-          name: "crystalix:magenta_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:magenta_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/magenta_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_block</summary>

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
-          name: "crystalix:orange_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_dark_block</summary>

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
-          name: "crystalix:orange_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_dark_ghost_block</summary>

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
-          name: "crystalix:orange_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_ghost_block</summary>

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
-          name: "crystalix:orange_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_light_block</summary>

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
-          name: "crystalix:orange_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_light_ghost_block</summary>

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
-          name: "crystalix:orange_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_block</summary>

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
-          name: "crystalix:orange_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_dark_block</summary>

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
-          name: "crystalix:orange_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:orange_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_ghost_block</summary>

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
-          name: "crystalix:orange_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_light_block</summary>

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
-          name: "crystalix:orange_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:orange_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_block</summary>

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
-          name: "crystalix:orange_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_dark_block</summary>

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
-          name: "crystalix:orange_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_light_block</summary>

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
-          name: "crystalix:orange_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:orange_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/orange_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_block</summary>

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
-          name: "crystalix:pink_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_dark_block</summary>

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
-          name: "crystalix:pink_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_dark_ghost_block</summary>

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
-          name: "crystalix:pink_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_ghost_block</summary>

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
-          name: "crystalix:pink_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_light_block</summary>

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
-          name: "crystalix:pink_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_light_ghost_block</summary>

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
-          name: "crystalix:pink_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_block</summary>

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
-          name: "crystalix:pink_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_dark_block</summary>

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
-          name: "crystalix:pink_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:pink_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_ghost_block</summary>

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
-          name: "crystalix:pink_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_light_block</summary>

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
-          name: "crystalix:pink_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:pink_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_block</summary>

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
-          name: "crystalix:pink_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_dark_block</summary>

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
-          name: "crystalix:pink_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_light_block</summary>

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
-          name: "crystalix:pink_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:pink_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/pink_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_block</summary>

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
-          name: "crystalix:purple_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_dark_block</summary>

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
-          name: "crystalix:purple_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_dark_ghost_block</summary>

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
-          name: "crystalix:purple_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_ghost_block</summary>

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
-          name: "crystalix:purple_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_light_block</summary>

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
-          name: "crystalix:purple_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_light_ghost_block</summary>

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
-          name: "crystalix:purple_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_block</summary>

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
-          name: "crystalix:purple_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_dark_block</summary>

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
-          name: "crystalix:purple_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:purple_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_ghost_block</summary>

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
-          name: "crystalix:purple_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_light_block</summary>

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
-          name: "crystalix:purple_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:purple_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_block</summary>

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
-          name: "crystalix:purple_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_dark_block</summary>

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
-          name: "crystalix:purple_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_light_block</summary>

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
-          name: "crystalix:purple_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:purple_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/purple_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_block</summary>

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
-          name: "crystalix:red_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_dark_block</summary>

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
-          name: "crystalix:red_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_dark_ghost_block</summary>

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
-          name: "crystalix:red_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_ghost_block</summary>

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
-          name: "crystalix:red_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_light_block</summary>

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
-          name: "crystalix:red_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_light_ghost_block</summary>

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
-          name: "crystalix:red_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_block</summary>

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
-          name: "crystalix:red_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_dark_block</summary>

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
-          name: "crystalix:red_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:red_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_ghost_block</summary>

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
-          name: "crystalix:red_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_light_block</summary>

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
-          name: "crystalix:red_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:red_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_block</summary>

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
-          name: "crystalix:red_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_dark_block</summary>

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
-          name: "crystalix:red_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_light_block</summary>

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
-          name: "crystalix:red_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:red_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/red_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_block</summary>

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
-          name: "crystalix:white_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_dark_block</summary>

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
-          name: "crystalix:white_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_dark_ghost_block</summary>

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
-          name: "crystalix:white_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_ghost_block</summary>

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
-          name: "crystalix:white_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_light_block</summary>

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
-          name: "crystalix:white_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_light_ghost_block</summary>

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
-          name: "crystalix:white_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_block</summary>

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
-          name: "crystalix:white_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_dark_block</summary>

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
-          name: "crystalix:white_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:white_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_ghost_block</summary>

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
-          name: "crystalix:white_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_light_block</summary>

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
-          name: "crystalix:white_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:white_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_block</summary>

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
-          name: "crystalix:white_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_dark_block</summary>

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
-          name: "crystalix:white_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_light_block</summary>

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
-          name: "crystalix:white_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:white_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/white_shadeless_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_block</summary>

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
-          name: "crystalix:yellow_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_dark_block</summary>

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
-          name: "crystalix:yellow_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_dark_ghost_block</summary>

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
-          name: "crystalix:yellow_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_ghost_block</summary>

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
-          name: "crystalix:yellow_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_light_block</summary>

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
-          name: "crystalix:yellow_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_light_ghost_block</summary>

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
-          name: "crystalix:yellow_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_block</summary>

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
-          name: "crystalix:yellow_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_dark_block</summary>

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
-          name: "crystalix:yellow_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:yellow_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_ghost_block</summary>

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
-          name: "crystalix:yellow_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_light_block</summary>

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
-          name: "crystalix:yellow_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:yellow_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_reinforced_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_block</summary>

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
-          name: "crystalix:yellow_shadeless_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_dark_block</summary>

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
-          name: "crystalix:yellow_shadeless_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_dark_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_light_block</summary>

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
-          name: "crystalix:yellow_shadeless_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_light_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_light_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_dark_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_dark_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_dark_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_dark_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_dark_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_dark_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_ghost_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_light_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_light_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_light_block"
-}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_shadeless_reinforced_light_ghost_block</summary>

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
-          name: "crystalix:yellow_shadeless_reinforced_light_ghost_block"
-        }
-      ]
-      rolls: 1
-    }
-  ]
-  random_sequence: "crystalix:blocks/yellow_shadeless_reinforced_light_ghost_block"
-}

```


</details>

</blockquote>

</details>

