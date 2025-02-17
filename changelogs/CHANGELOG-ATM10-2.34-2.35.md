# Changelog

# 📦 2.35

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (1)</summary>

- KeyBind Bundles (1.1.0)

</details>

<details>
<summary>Updated (66)</summary>

- Actually Additions (1.3.14) -> (1.3.15)
- Applied Energistics 2 (19.2.2-beta) -> (19.2.3-beta)
- AllTheTweaks (2.5.3) -> (2.5.4)
- Amendments (1.21-1.2.22) -> (1.21-1.2.23)
- AppliedFlux (1.21-2.0.3-neoforge) -> (1.21-2.0.4-neoforge)
- Ars Nouveau (5.4.1) -> (5.4.2)
- Balm (21.0.25) -> (21.0.27)
- Oh The Biomes We've Gone (2.3.4) -> (2.3.5)
- Bridging Mod (2.5.0+1.21.1) -> (2.6.1+1.21.1)
- Bad Wither No Cookie Reloaded (3.20.2) -> (3.20.3)
- Byzantine (28) -> (29.2)
- L_Ender's Cataclysm (2.52-1.21.1) -> (2.55-1.21.1)
- Cobblegen Galore (1.21.1-0.1.2) -> (1.21.1-0.2.0)
- Cobweb (1.3.1) -> (1.3.2)
- Connectivity Mod (6.8) -> (6.9)
- Construction Sticks (1.1.4) -> (1.1.5)
- Cooking for Blockheads (21.1.9) -> (21.1.10)
- Crash Assistant (1.3.4) -> (1.3.7)
- Crystalix (1.1.0) -> (1.2.2)
- ElevatorMod (1.21.1-1.11.3) -> (1.21.1-1.11.4)
- Eternal Starlight (0.3.0+1.21.1+neoforge) -> (0.4.0+1.21.1+neoforge)
- Extended Industrialization (1.13.5-1.21.1) -> (1.14.1-1.21.1)
- ExtendedAE (1.21-2.2.1-neoforge) -> (1.21-2.2.2-neoforge)
- Farming for Blockheads (21.1.4) -> (21.1.7)
- Forbidden Arcanus (2.5.11) -> (2.5.12)
- FTB Essentials (2101.1.4) -> (2101.1.6)
- Functional Storage (1.21.1-1.4.1) -> (1.21.1-1.4.2)
- Fusion (1.2.3) -> (1.2.4)
- GuideME (2.6.0) -> (21.1.0)
- Industrial Foregoing (1.21-3.6.22) -> (1.21-3.6.23)
- IntegratedCrafting (1.1.13) -> (1.1.16)
- IntegratedDynamics (1.25.3) -> (1.25.5)
- IntegratedScripting (1.0.14) -> (1.0.16)
- IntegratedTerminals (1.6.7) -> (1.6.9)
- IntegratedTunnels (1.8.33) -> (1.8.34)
- IntegratedTunnels-Compat (1.8.33) -> (1.8.34)
- Inventory Essentials (21.1.1) -> (21.1.2)
- Iron Jetpacks (8.0.6) -> (8.0.7)
- Iron's Gems 'n Jewelry (1.21.1-1.0.7) -> (1.21.1-1.0.8)
- Iron's Spells 'n Spellbooks (1.21-3.8.9) -> (1.21-3.8.10)
- Jade (15.9.3+neoforge) -> (15.9.4+neoforge)
- Just Enough Mekanism Multiblocks (7.3) -> (7.5)
- KeybindsPurger (1.3.2) -> (1.3.3)
- More Industrial Foregoing Addons (1.1.1) -> (2.0.0)
- MineColonies (1.1.875-1.21.1-snapshot) -> (1.1.882-1.21.1-snapshot)
- Modonomicon (1.111.2) -> (1.112.2)
- Moonlight Lib (1.21-2.17.21) -> (1.21-2.17.26)
- NeoForge (21.1.116) -> (21.1.119)
- Occultism (1.173.2) -> (1.173.4)
- Productive Metalworks (1.21.1-1.0.3) -> (1.21.1-1.1.0)
- MrCrayfish's Furniture Mod: Refurbished (1.0.8) -> (1.0.9)
- Relics (0.10.5) -> (0.10.5.2)
- Reliquary Reincarnations (2.0.45) -> (2.0.47)
- Restrictions (1.21-7.0.2) -> (1.21-7.0.3)
- Rhino (2101.2.6-build.66) -> (2101.2.7-build.74)
- Silent Gear (4.0.12) -> (4.0.13)
- Simple Backups (1.21-4.0.7) -> (1.21-4.0.8)
- Sophisticated Backpacks (3.23.3) -> (3.23.5)
- Sophisticated Core (1.2.7) -> (1.2.14)
- Sophisticated Storage (1.3.5) -> (1.3.9)
- Structurize (1.0.758-1.21.1-snapshot) -> (1.0.762-1.21.1-snapshot)
- Tesseract API (1.7.0-1.21.1) -> (1.8.0-1.21.1)
- Theurgy (1.59.0) -> (1.60.0)
- Corail Tombstone (9.2.5) -> (9.2.6)
- Jonn's Trophies (1.21.1-2.1.9) -> (1.21.1-2.2.0)
- Utilitarian (1.21.1-0.13.5) -> (1.21.1-0.13.6)

</details>

<details open>
<summary>Removed (1)</summary>

- fastasyncworldsave mod (2.3)

</details>

## 🍳 Recipes

<details>
<summary>Added (195)</summary>
<blockquote>

<details>
<summary>ae2/matter_cannon/nuggets/meat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:nuggets/meat"
+      }
+    }
+  ]
+  type: "ae2:matter_cannon"
+  ammo: {
+    tag: "c:nuggets/meat"
+  }
+  weight: 32
+}

```


</details>

<details>
<summary>allthemods/mekanism/sawing/eternal_starlight/jinglestem_planks</summary>

```diff
+{
+  type: "mekanism:sawing"
+  input: {
+    tag: "eternal_starlight:jinglestem_logs"
+  }
+  main_output: {
+    id: "eternal_starlight:jinglestem_planks"
+    count: 6
+  }
+  secondary_chance: 0.25
+  secondary_output: {
+    id: "mekanism:sawdust"
+    count: 1
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/productivetrees/sawing/eternal_starlight/jinglestem_planks</summary>

```diff
+{
+  type: "productivetrees:sawmill"
+  input: {
+    tag: "eternal_starlight:jinglestem_logs"
+  }
+  output: {
+    id: "eternal_starlight:jinglestem_planks"
+    count: 6
+  }
+  secondary: {
+    id: "productivetrees:sawdust"
+    count: 2
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>ars_nouveau/ars_stencil</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "ars_nouveau:abjuration_essence"
+    }
+    {
+      item: "minecraft:paper"
+    }
+  ]
+  result: {
+    count: 1
+    id: "ars_nouveau:ars_stencil"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/glyph_wind_burst</summary>

```diff
+{
+  type: "ars_nouveau:glyph"
+  exp: 27
+  inputs: [
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "minecraft:wind_charge"
+    }
+    {
+      item: "ars_nouveau:air_essence"
+    }
+  ]
+  output: {
+    count: 1
+    id: "ars_nouveau:glyph_wind_burst"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/novice_spellbook_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "ars_nouveau:worn_notebook"
+    }
+    {
+      item: "minecraft:iron_shovel"
+    }
+    {
+      item: "minecraft:iron_pickaxe"
+    }
+    {
+      item: "minecraft:iron_axe"
+    }
+    {
+      item: "minecraft:iron_sword"
+    }
+  ]
+  result: {
+    count: 1
+    id: "ars_nouveau:novice_spell_book"
+  }
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/lootz_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 1
+    g: 255
+    id: "ars_nouveau:constant"
+    r: 255
+  }
+  flavour_text: "Mobs meet fireworks"
+  name: "Fireworks and Mobs"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_projectile"
+    "ars_nouveau:glyph_harm"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_launch"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_firework"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_explosion"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/sloppybox_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 1
+    g: 1
+    id: "ars_nouveau:constant"
+    r: 139
+  }
+  flavour_text: "Enough heat to melt a mountain or evaporate oceans."
+  name: "Arcane Smelt"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_touch"
+    "ars_nouveau:glyph_rune"
+    "ars_nouveau:glyph_smelt"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+    "ars_nouveau:glyph_pierce"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/yuukiukami_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 105
+    g: 1
+    id: "ars_nouveau:constant"
+    r: 48
+  }
+  flavour_text: "One of YuukiUkami’s earliest creations, this spell reflects their desire for precision and mastery. Infused with the arcane finesse of its creator, it draws minerals from the earth at a distance, as if the ores themselves were eager to join the mage’s growing legacy"
+  name: "Yuuki's Mineral Assimilator"
+  sound: {
+  }
+  spell: [
+    "ars_nouveau:glyph_projectile"
+    "ars_nouveau:glyph_break"
+    "ars_nouveau:glyph_amplify"
+    "ars_nouveau:glyph_extract"
+    "ars_nouveau:glyph_pickup"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>cobblegengalore/blockgen/andesite</summary>

```diff
+{
+  type: "cobblegengalore:blockgen"
+  result: {
+    id: "minecraft:andesite"
+    count: 1
+  }
+  speed: 2
+  left: {
+    Name: "minecraft:water"
+  }
+  right: {
+    Name: "minecraft:lava"
+  }
+  modifier: {
+    Name: "minecraft:andesite"
+  }
+}

```


</details>

<details>
<summary>cobblegengalore/blockgen/diorite</summary>

```diff
+{
+  type: "cobblegengalore:blockgen"
+  result: {
+    id: "minecraft:diorite"
+    count: 1
+  }
+  speed: 2
+  left: {
+    Name: "minecraft:water"
+  }
+  right: {
+    Name: "minecraft:lava"
+  }
+  modifier: {
+    Name: "minecraft:diorite"
+  }
+}

```


</details>

<details>
<summary>cobblegengalore/blockgen/granite</summary>

```diff
+{
+  type: "cobblegengalore:blockgen"
+  result: {
+    id: "minecraft:granite"
+    count: 1
+  }
+  speed: 2
+  left: {
+    Name: "minecraft:water"
+  }
+  right: {
+    Name: "minecraft:lava"
+  }
+  modifier: {
+    Name: "minecraft:granite"
+  }
+}

```


</details>

<details>
<summary>crystalix/black_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/black"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:black_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/black_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:black_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/blue"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:blue_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/blue_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:blue_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/brown_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/brown"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:brown_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/brown_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:brown_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/cyan_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/cyan"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:cyan_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/cyan_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:cyan_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/gray"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:gray_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/gray_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:gray_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/green_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/green"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:green_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/green_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:green_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/light_blue"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_blue_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_blue_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_blue_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/light_gray"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_gray_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/light_gray_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:light_gray_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/lime_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/lime"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:lime_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/lime_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:lime_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/magenta_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/magenta"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:magenta_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/magenta_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:magenta_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/orange_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/orange"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:orange_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/orange_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:orange_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/pink_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/pink"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:pink_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/pink_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:pink_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/purple_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/purple"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:purple_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/purple_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:purple_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/red_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/red"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:red_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/red_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:red_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_black_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:black_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_black_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:black_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:blue_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_blue_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:blue_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_brown_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:brown_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_brown_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:brown_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_cyan_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:cyan_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_cyan_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:cyan_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:gray_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_gray_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:gray_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_green_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:green_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_green_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:green_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:light_blue_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_blue_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:light_blue_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:light_gray_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_light_gray_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:light_gray_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_lime_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:lime_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_lime_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:lime_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_magenta_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:magenta_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_magenta_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:magenta_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_orange_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:orange_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_orange_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:orange_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_pink_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:pink_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_pink_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:pink_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_purple_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:purple_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_purple_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:purple_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_red_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:red_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_red_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:red_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_white_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:white_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_white_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:white_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_yellow_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:bordered"
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
+    id: "crystalix:yellow_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/tinted_yellow_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:clear"
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
+    id: "crystalix:yellow_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/white_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/white"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:white_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/white_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:white_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/yellow_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      tag: "crystalix:glass"
+    }
+    c: {
+      tag: "c:dyes/yellow"
+    }
+    g: {
+      tag: "c:gems/amethyst"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:yellow_bordered_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>crystalix/yellow_clear_crystalix_glass</summary>

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
+      tag: "crystalix:glass"
+    }
+  }
+  pattern: [
+    "gag"
+    "aca"
+    "gag"
+  ]
+  result: {
+    count: 4
+    id: "crystalix:yellow_clear_crystalix_glass"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/air_sac_mask</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    B: {
+      item: "eternal_starlight:velvetumoss_ball"
+    }
+    H: {
+      item: "eternal_starlight:amaramber_helmet"
+    }
+    L: {
+      item: "eternal_starlight:jinglestem_log"
+    }
+    S: {
+      item: "eternal_starlight:tower_squid_air_sac"
+    }
+  }
+  pattern: [
+    "LLL"
+    "LHL"
+    "SBS"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:air_sac_mask"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:amaramber_bricks"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:amaramber_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_slab_from_amaramber_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:amaramber_bricks"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:amaramber_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_slab_from_raw_amaramber_block_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:raw_amaramber_block"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:amaramber_brick_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:amaramber_bricks"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:amaramber_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_stairs_from_amaramber_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:amaramber_bricks"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:amaramber_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_stairs_from_raw_amaramber_block_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:raw_amaramber_block"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:amaramber_brick_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:amaramber_bricks"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:amaramber_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_wall_from_amaramber_bricks_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:amaramber_bricks"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:amaramber_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_brick_wall_from_raw_amaramber_block_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:raw_amaramber_block"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:amaramber_brick_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_bricks</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:raw_amaramber_block"
+    }
+  }
+  pattern: [
+    "##"
+    "##"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:amaramber_bricks"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/amaramber_bricks_from_raw_amaramber_block_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:raw_amaramber_block"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:amaramber_bricks"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/blue_crystal_moss_carpet</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "carpet"
+  key: {
+    #: {
+      item: "eternal_starlight:blue_crystal_moss_block"
+    }
+  }
+  pattern: [
+    "##"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:blue_crystal_moss_carpet"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/glacite_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:glacite_shard"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:glacite_block"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/glacite_shard_from_glacite_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "glacite_shard"
+  ingredients: [
+    {
+      item: "eternal_starlight:glacite_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "eternal_starlight:glacite_shard"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_button</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "redstone"
+  ingredients: [
+    {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:jinglestem_button"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_chest_raft</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "chest_boat"
+  ingredients: [
+    {
+      item: "eternal_starlight:jinglestem_raft"
+    }
+    {
+      item: "minecraft:chest"
+    }
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:jinglestem_chest_raft"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_door</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "##"
+    "##"
+    "##"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:jinglestem_door"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_fence</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+    S: {
+      tag: "c:rods/wooden"
+    }
+  }
+  pattern: [
+    "#S#"
+    "#S#"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:jinglestem_fence"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_fence_gate</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+    S: {
+      tag: "c:rods/wooden"
+    }
+  }
+  pattern: [
+    "S#S"
+    "S#S"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:jinglestem_fence_gate"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_hanging_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "hanging_sign"
+  key: {
+    #: {
+      item: "eternal_starlight:stripped_jinglestem_log"
+    }
+    X: {
+      item: "minecraft:chain"
+    }
+  }
+  pattern: [
+    "X X"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:jinglestem_hanging_sign"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_planks</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "building"
+  ingredients: [
+    {
+      tag: "eternal_starlight:jinglestem_logs"
+    }
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:jinglestem_planks"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_pressure_plate</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "##"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:jinglestem_pressure_plate"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_raft</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "boat"
+  key: {
+    P: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "P P"
+    "PPP"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:jinglestem_raft"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_sign</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+    S: {
+      tag: "c:rods/wooden"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    " S "
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:jinglestem_sign"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:jinglestem_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:jinglestem_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_trapdoor</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "redstone"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_planks"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 2
+    id: "eternal_starlight:jinglestem_trapdoor"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/jinglestem_wood</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:jinglestem_log"
+    }
+  }
+  pattern: [
+    "##"
+    "##"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:jinglestem_wood"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/raw_amaramber_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:raw_amaramber"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:raw_amaramber_block"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/raw_amaramber_from_raw_amaramber_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "raw_amaramber"
+  ingredients: [
+    {
+      item: "eternal_starlight:raw_amaramber_block"
+    }
+  ]
+  result: {
+    count: 9
+    id: "eternal_starlight:raw_amaramber"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/red_crystal_moss_carpet</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "carpet"
+  key: {
+    #: {
+      item: "eternal_starlight:red_crystal_moss_block"
+    }
+  }
+  pattern: [
+    "##"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:red_crystal_moss_carpet"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/shapeless/yellow_dye_from_amaramber_grass</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "eternal_starlight:amaramber_grass"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:yellow_dye"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/shapeless/yellow_dye_from_amaramber_grass_bush</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "eternal_starlight:amaramber_grass_bush"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:yellow_dye"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:springstone"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:springstone_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_slab_from_springstone_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:springstone"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:springstone_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:springstone"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:springstone_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_stairs_from_springstone_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:springstone"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:springstone_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:springstone"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:springstone_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/springstone_wall_from_springstone_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:springstone"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:springstone_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/stripped_jinglestem_wood</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:stripped_jinglestem_log"
+    }
+  }
+  pattern: [
+    "##"
+    "##"
+  ]
+  result: {
+    count: 3
+    id: "eternal_starlight:stripped_jinglestem_wood"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_slab</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:torreya_tiles"
+    }
+  }
+  pattern: [
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:torreya_tile_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_slab_from_torreya_tiles_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:torreya_tiles"
+  }
+  result: {
+    count: 2
+    id: "eternal_starlight:torreya_tile_slab"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_stairs</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:torreya_tiles"
+    }
+  }
+  pattern: [
+    "#  "
+    "## "
+    "###"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:torreya_tile_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_stairs_from_torreya_tiles_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:torreya_tiles"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:torreya_tile_stairs"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_wall</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      item: "eternal_starlight:torreya_tiles"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+  ]
+  result: {
+    count: 6
+    id: "eternal_starlight:torreya_tile_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tile_wall_from_torreya_tiles_stonecutting</summary>

```diff
+{
+  type: "minecraft:stonecutting"
+  ingredient: {
+    item: "eternal_starlight:torreya_tiles"
+  }
+  result: {
+    count: 1
+    id: "eternal_starlight:torreya_tile_wall"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/torreya_tiles</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    I: {
+      tag: "c:ingots/amaramber"
+    }
+    L: {
+      tag: "eternal_starlight:torreya_logs"
+    }
+  }
+  pattern: [
+    "IL"
+    "LI"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:torreya_tiles"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/wilted_crossbow</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      tag: "c:rods/wooden"
+    }
+    $: {
+      item: "eternal_starlight:red_velvetumoss_flower"
+    }
+    &: {
+      tag: "c:ingots/golem_steel"
+    }
+    ~: {
+      item: "eternal_starlight:tenacious_vine"
+    }
+  }
+  pattern: [
+    "#&#"
+    "~$~"
+    " # "
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:wilted_crossbow"
+  }
+}

```


</details>

<details>
<summary>extended_industrialization/materials/battery_alloy/alloy_smelter/nugget</summary>

```diff
+{
+  type: "extended_industrialization:alloy_smelter"
+  duration: 200
+  eu: 4
+  item_inputs: [
+    {
+      type: "neoforge:compound"
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/lead"
+        }
+        {
+          tag: "c:nuggets/lead"
+        }
+      ]
+    }
+    {
+      type: "neoforge:compound"
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/antimony"
+        }
+        {
+          tag: "c:nuggets/antimony"
+        }
+      ]
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 2
+      item: "modern_industrialization:battery_alloy_ingot"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/materials/bronze/alloy_smelter/nugget</summary>

```diff
+{
+  type: "extended_industrialization:alloy_smelter"
+  duration: 200
+  eu: 4
+  item_inputs: [
+    {
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/tin"
+        }
+        {
+          tag: "c:nuggets/tin"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+    {
+      amount: 27
+      children: [
+        {
+          tag: "c:tiny_dusts/copper"
+        }
+        {
+          tag: "c:nuggets/copper"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 4
+      item: "alltheores:bronze_ingot"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/materials/cupronickel/alloy_smelter/nugget</summary>

```diff
+{
+  type: "extended_industrialization:alloy_smelter"
+  duration: 200
+  eu: 4
+  item_inputs: [
+    {
+      type: "neoforge:compound"
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/copper"
+        }
+        {
+          tag: "c:nuggets/copper"
+        }
+      ]
+    }
+    {
+      type: "neoforge:compound"
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/nickel"
+        }
+        {
+          tag: "c:nuggets/nickel"
+        }
+      ]
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 2
+      item: "modern_industrialization:cupronickel_ingot"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/materials/electrum/alloy_smelter/nugget</summary>

```diff
+{
+  type: "extended_industrialization:alloy_smelter"
+  duration: 200
+  eu: 4
+  item_inputs: [
+    {
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/gold"
+        }
+        {
+          tag: "c:nuggets/gold"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+    {
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/silver"
+        }
+        {
+          tag: "c:nuggets/silver"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 2
+      item: "alltheores:electrum_ingot"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/materials/invar/alloy_smelter/nugget</summary>

```diff
+{
+  type: "extended_industrialization:alloy_smelter"
+  duration: 200
+  eu: 4
+  item_inputs: [
+    {
+      amount: 18
+      children: [
+        {
+          tag: "c:tiny_dusts/iron"
+        }
+        {
+          tag: "c:nuggets/iron"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+    {
+      amount: 9
+      children: [
+        {
+          tag: "c:tiny_dusts/nickel"
+        }
+        {
+          tag: "c:nuggets/nickel"
+        }
+      ]
+      type: "neoforge:compound"
+    }
+  ]
+  item_outputs: [
+    {
+      amount: 3
+      item: "alltheores:invar_ingot"
+    }
+  ]
+}

```


</details>

<details>
<summary>extended_industrialization/tool/craft/robot_auto_feeder</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "modern_industrialization:bronze_curved_plate"
+    }
+    C: {
+      item: "modern_industrialization:electronic_circuit"
+    }
+    M: {
+      item: "modern_industrialization:motor"
+    }
+    R: {
+      item: "modern_industrialization:robot_arm"
+    }
+    b: {
+      item: "modern_industrialization:redstone_battery"
+    }
+  }
+  pattern: [
+    "MBM"
+    "BRB"
+    "bCb"
+  ]
+  result: {
+    count: 1
+    id: "extended_industrialization:robot_auto_feeder"
+  }
+}

```


</details>

<details>
<summary>extendedae/blasting/quartz_blend</summary>

```diff
+{
+  type: "minecraft:blasting"
+  category: "misc"
+  cookingtime: 100
+  experience: 0.35
+  ingredient: {
+    item: "extendedae:quartz_blend"
+  }
+  result: {
+    count: 4
+    id: "ae2:silicon"
+  }
+}

```


</details>

<details>
<summary>extendedae/fixer/certus_flawed</summary>

```diff
+{
+  type: "extendedae:crystal_fixer"
+  chance: 500
+  fuel: {
+    ingredient: {
+      item: "ae2:charged_certus_quartz_crystal"
+    }
+  }
+  input: {
+    count: 1
+    id: "ae2:flawed_budding_quartz"
+  }
+  output: {
+    count: 1
+    id: "ae2:flawless_budding_quartz"
+  }
+}

```


</details>

<details>
<summary>extendedae/mek/entro_dust</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanism"
+    }
+  ]
+  type: "mekanism:crushing"
+  input: {
+    count: 1
+    tag: "c:gems/entro"
+  }
+  output: {
+    count: 1
+    id: "extendedae:entro_dust"
+  }
+}

```


</details>

<details>
<summary>extendedae/mek/quartz_blend</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanism"
+    }
+  ]
+  type: "mekanism:enriching"
+  input: {
+    count: 1
+    item: "extendedae:quartz_blend"
+  }
+  output: {
+    count: 6
+    id: "ae2:silicon"
+  }
+}

```


</details>

<details>
<summary>extendedae/quartz_blend</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "ae2:all_quartz_dust"
+    }
+    [
+      {
+        item: "minecraft:coal"
+      }
+      {
+        item: "minecraft:charcoal"
+      }
+    ]
+    [
+      {
+        item: "minecraft:coal"
+      }
+      {
+        item: "minecraft:charcoal"
+      }
+    ]
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+  ]
+  result: {
+    count: 6
+    id: "extendedae:quartz_blend"
+  }
+}

```


</details>

<details>
<summary>extendedae/quartz_blend_alt</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:dusts/quartz"
+      }
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "c:dusts/quartz"
+    }
+    [
+      {
+        item: "minecraft:coal"
+      }
+      {
+        item: "minecraft:charcoal"
+      }
+    ]
+    [
+      {
+        item: "minecraft:coal"
+      }
+      {
+        item: "minecraft:charcoal"
+      }
+    ]
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+    {
+      tag: "c:sands"
+    }
+  ]
+  result: {
+    count: 6
+    id: "extendedae:quartz_blend"
+  }
+}

```


</details>

<details>
<summary>extendedae/smelting/quartz_blend</summary>

```diff
+{
+  type: "minecraft:smelting"
+  category: "misc"
+  cookingtime: 200
+  experience: 0.35
+  ingredient: {
+    item: "extendedae:quartz_blend"
+  }
+  result: {
+    count: 4
+    id: "ae2:silicon"
+  }
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_5</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:efficiency_addon_5"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      tag: "c:obsidians/crying"
+    }
+    {
+      item: "minecraft:totem_of_undying"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:efficiency_addon_4"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+  ]
+  inputFluid: {
+    amount: 5000
+    id: "industrialforegoing:sludge"
+  }
+  output: {
+    count: 1
+    id: "mifa:efficiency_addon_5"
+  }
+  processingTime: 1000
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_6</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:efficiency_addon_6"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:amethyst_block"
+    }
+    {
+      item: "minecraft:shulker_shell"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:efficiency_addon_5"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+  ]
+  inputFluid: {
+    amount: 6000
+    id: "industrialforegoing:biofuel"
+  }
+  output: {
+    count: 1
+    id: "mifa:efficiency_addon_6"
+  }
+  processingTime: 1200
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_7</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:efficiency_addon_7"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:beacon"
+    }
+    {
+      tag: "c:nether_stars"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:efficiency_addon_6"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+  ]
+  inputFluid: {
+    amount: 7000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:efficiency_addon_7"
+  }
+  processingTime: 1400
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_8</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:efficiency_addon_8"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:dragon_head"
+    }
+    {
+      item: "minecraft:dragon_breath"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:efficiency_addon_7"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+    {
+      tag: "c:rods/blaze"
+    }
+  ]
+  inputFluid: {
+    amount: 8000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:efficiency_addon_8"
+  }
+  processingTime: 1600
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_5</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:processing_addon_5"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      tag: "c:obsidians/crying"
+    }
+    {
+      item: "minecraft:totem_of_undying"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:processing_addon_4"
+    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
+  ]
+  inputFluid: {
+    amount: 5000
+    id: "industrialforegoing:sludge"
+  }
+  output: {
+    count: 1
+    id: "mifa:processing_addon_5"
+  }
+  processingTime: 1000
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_6</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:processing_addon_6"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:amethyst_block"
+    }
+    {
+      item: "minecraft:shulker_shell"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:processing_addon_5"
+    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
+  ]
+  inputFluid: {
+    amount: 6000
+    id: "industrialforegoing:biofuel"
+  }
+  output: {
+    count: 1
+    id: "mifa:processing_addon_6"
+  }
+  processingTime: 1200
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_7</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:processing_addon_7"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:beacon"
+    }
+    {
+      tag: "c:nether_stars"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:processing_addon_6"
+    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
+  ]
+  inputFluid: {
+    amount: 7000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:processing_addon_7"
+  }
+  processingTime: 1400
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_8</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:processing_addon_8"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:dragon_head"
+    }
+    {
+      item: "minecraft:dragon_breath"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:processing_addon_7"
+    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
+  ]
+  inputFluid: {
+    amount: 8000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:processing_addon_8"
+  }
+  processingTime: 1600
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_3"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      tag: "c:ores/netherite_scrap"
+    }
+    {
+      item: "minecraft:netherite_scrap"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "industrialforegoing:speed_addon_tier_2"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 3000
+    id: "industrialforegoing:pink_slime"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_3"
+  }
+  processingTime: 600
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_4"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:sculk"
+    }
+    {
+      item: "minecraft:echo_shard"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:speed_addon_3"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 4000
+    id: "industrialforegoing:essence"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_4"
+  }
+  processingTime: 800
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_5</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_5"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      tag: "c:obsidians/crying"
+    }
+    {
+      item: "minecraft:totem_of_undying"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:speed_addon_4"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 5000
+    id: "industrialforegoing:sludge"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_5"
+  }
+  processingTime: 1000
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_6</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_6"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:amethyst_block"
+    }
+    {
+      item: "minecraft:shulker_shell"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:speed_addon_5"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 6000
+    id: "industrialforegoing:biofuel"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_6"
+  }
+  processingTime: 1200
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_7</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_7"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:beacon"
+    }
+    {
+      tag: "c:nether_stars"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:speed_addon_6"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 7000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_7"
+  }
+  processingTime: 1400
+}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_8</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:item_exists"
+      item: "mifa:speed_addon_8"
+    }
+  ]
+  type: "industrialforegoing:dissolution_chamber"
+  input: [
+    {
+      item: "minecraft:dragon_head"
+    }
+    {
+      item: "minecraft:dragon_breath"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:glass_panes/colorless"
+    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      item: "mifa:speed_addon_7"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+    {
+      item: "minecraft:sugar"
+    }
+  ]
+  inputFluid: {
+    amount: 8000
+    id: "industrialforegoing:ether_gas"
+  }
+  output: {
+    count: 1
+    id: "mifa:speed_addon_8"
+  }
+  processingTime: 1600
+}

```


</details>

<details>
<summary>minecraft/kjs/crafting_table</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "minecraft:crafting_table"
+    count: 1
+  }
+  ingredients: [
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>mysticalagriculture/kjs/4ocncqhew7kfoo3iiv8hu95sz</summary>

```diff
+{
+  type: "mysticalagriculture:infusion"
+  input: {
+    item: "mysticalagriculture:prosperity_seed_base"
+  }
+  ingredients: [
+    {
+      tag: "c:gems/sapphire"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/sapphire"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/sapphire"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/sapphire"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+  ]
+  result: {
+    id: "mysticalagriculture:sapphire_seeds"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>mysticalagriculture/kjs/60p57ngjcjdhsanv1l0d20es9</summary>

```diff
+{
+  type: "mysticalagriculture:infusion"
+  input: {
+    item: "mysticalagriculture:prosperity_seed_base"
+  }
+  ingredients: [
+    {
+      tag: "c:gems/ruby"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/ruby"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/ruby"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+    {
+      tag: "c:gems/ruby"
+    }
+    {
+      item: "mysticalagriculture:imperium_essence"
+    }
+  ]
+  result: {
+    id: "mysticalagriculture:ruby_seeds"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>productivemetalworks/alloying/molten_magma_cream</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "productivelib:fluid_tag_empty"
+        tag: "c:molten_blaze"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "productivelib:fluid_tag_empty"
+        tag: "c:molten_slime"
+      }
+    }
+  ]
+  type: "productivemetalworks:fluid_alloying"
+  fluids: [
+    {
+      amount: 1
+      tag: "c:molten_blaze"
+    }
+    {
+      amount: 1
+      tag: "c:molten_slime"
+    }
+  ]
+  result: {
+    amount: 1
+    id: "productivemetalworks:molten_magma_cream"
+  }
+  speed: 20
+}

```


</details>

<details>
<summary>productivemetalworks/casting/blaze_rod</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: {
+    item: "productivemetalworks:rod_cast"
+  }
+  consume_cast: false
+  fluid: {
+    amount: 400
+    fluid: "productivemetalworks:molten_blaze"
+  }
+  result: {
+    count: 1
+    id: "minecraft:blaze_rod"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/magma_cream</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 100
+    fluid: "productivemetalworks:molten_magma_cream"
+  }
+  result: {
+    count: 1
+    id: "minecraft:magma_cream"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/misc/magma_block</summary>

```diff
+{
+  type: "productivemetalworks:block_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 400
+    fluid: "productivemetalworks:molten_magma_cream"
+  }
+  result: {
+    count: 1
+    id: "minecraft:magma_block"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/misc/meat_nugget</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: {
+    item: "productivemetalworks:nugget_cast"
+  }
+  consume_cast: false
+  fluid: {
+    amount: 10
+    tag: "c:meat"
+  }
+  result: {
+    count: 1
+    id: "productivemetalworks:meat_nugget"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/misc/slime_block</summary>

```diff
+{
+  type: "productivemetalworks:block_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 900
+    fluid: "productivemetalworks:molten_slime"
+  }
+  result: {
+    count: 1
+    id: "minecraft:slime_block"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/misc/sticky_piston</summary>

```diff
+{
+  type: "productivemetalworks:block_casting"
+  cast: {
+    item: "minecraft:piston"
+  }
+  consume_cast: true
+  fluid: {
+    amount: 100
+    tag: "c:molten_slime"
+  }
+  result: {
+    count: 1
+    id: "minecraft:sticky_piston"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/pbees/allthemodium_bee</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthemodium"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "productivebees"
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:netherite"
+      }
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:allthemodium"
+      }
+    }
+  ]
+  type: "productivemetalworks:item_casting"
+  cast: {
+    type: "productivebees:component"
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:netherite"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    items: "productivebees:spawn_egg_configurable_bee"
+  }
+  consume_cast: true
+  fluid: {
+    amount: 360
+    fluid: "allthemodium:molten_allthemodium"
+  }
+  result: {
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:allthemodium"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    count: 1
+    id: "productivebees:spawn_egg_configurable_bee"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/pbees/soul_lava_bee</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthemodium"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "productivebees"
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:ghostly"
+      }
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:soul_lava"
+      }
+    }
+  ]
+  type: "productivemetalworks:item_casting"
+  cast: {
+    type: "productivebees:component"
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:ghostly"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    items: "productivebees:spawn_egg_configurable_bee"
+  }
+  consume_cast: true
+  fluid: {
+    amount: 1000
+    fluid: "allthemodium:soul_lava"
+  }
+  result: {
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:soul_lava"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    count: 1
+    id: "productivebees:spawn_egg_configurable_bee"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/pbees/unobtainium_bee</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthemodium"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "productivebees"
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:vibranium"
+      }
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:unobtainium"
+      }
+    }
+  ]
+  type: "productivemetalworks:item_casting"
+  cast: {
+    type: "productivebees:component"
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:vibranium"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    items: "productivebees:spawn_egg_configurable_bee"
+  }
+  consume_cast: true
+  fluid: {
+    amount: 360
+    fluid: "allthemodium:molten_unobtainium"
+  }
+  result: {
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:unobtainium"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    count: 1
+    id: "productivebees:spawn_egg_configurable_bee"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/pbees/vibranium_bee</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "allthemodium"
+    }
+    {
+      type: "neoforge:mod_loaded"
+      modid: "productivebees"
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:allthemodium"
+      }
+    }
+    {
+      type: "productivelib:lazy"
+      value: {
+        type: "productivebees:bee_exists"
+        bee: "productivebees:vibranium"
+      }
+    }
+  ]
+  type: "productivemetalworks:item_casting"
+  cast: {
+    type: "productivebees:component"
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:allthemodium"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    items: "productivebees:spawn_egg_configurable_bee"
+  }
+  consume_cast: true
+  fluid: {
+    amount: 360
+    fluid: "allthemodium:molten_vibranium"
+  }
+  result: {
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:vibranium"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    count: 1
+    id: "productivebees:spawn_egg_configurable_bee"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/casting/slime_ball</summary>

```diff
+{
+  type: "productivemetalworks:item_casting"
+  cast: [
+  ]
+  consume_cast: false
+  fluid: {
+    amount: 100
+    fluid: "productivemetalworks:molten_slime"
+  }
+  result: {
+    count: 1
+    id: "minecraft:slime_ball"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/crafting/meat_ingots_from_nugget</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    M: {
+      item: "productivemetalworks:meat_nugget"
+    }
+    T: {
+      tag: "c:nuggets/meat"
+    }
+  }
+  pattern: [
+    "TTT"
+    "TMT"
+    "TTT"
+  ]
+  result: {
+    count: 1
+    id: "productivemetalworks:meat_ingot"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/crafting/meat_nugget_from_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "productivemetalworks:meat_ingot"
+    }
+  ]
+  result: {
+    count: 9
+    id: "productivemetalworks:meat_nugget"
+  }
+}

```


</details>

<details>
<summary>productivemetalworks/melting/black_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:black_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/blaze_powder</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:blaze_powder"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 100
+      id: "productivemetalworks:molten_blaze"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/blaze_rod</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:blaze_rod"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 400
+      id: "productivemetalworks:molten_blaze"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/blue_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:blue_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/brown_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:brown_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/cyan_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:cyan_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/gray_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:gray_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/green_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:green_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/light_blue_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:light_blue_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/light_gray_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:light_gray_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/lime_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:lime_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/magenta_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:magenta_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/magma_block</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:magma_block"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 400
+      id: "productivemetalworks:molten_magma_cream"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/magma_cream</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:magma_cream"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 100
+      id: "productivemetalworks:molten_magma_cream"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/meat_nugget</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    tag: "c:nuggets/meat"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 10
+      id: "productivemetalworks:meat"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/orange_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:orange_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/pink_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:pink_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/purple_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:purple_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/red_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:red_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/shulker_shell</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:shulker_shell"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 100
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/slime_ball</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:slime_ball"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 100
+      id: "productivemetalworks:molten_slime"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/slime_block</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:slime_block"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 900
+      id: "productivemetalworks:molten_slime"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/white_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:white_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivemetalworks/melting/yellow_shulker_box</summary>

```diff
+{
+  type: "productivemetalworks:item_melting"
+  ingredient: {
+    item: "minecraft:yellow_shulker_box"
+  }
+  maximum_temperature: 0
+  minimum_temperature: 1000
+  result: [
+    {
+      amount: 200
+      id: "productivemetalworks:molten_shulker_shell"
+    }
+  ]
+}

```


</details>

<details>
<summary>supplementaries/way_sign_oak/eternal_starlight/jinglestem</summary>

```diff
+{
+  category: "misc"
+  result: {
+    id: "supplementaries:eternal_starlight/way_sign_jinglestem"
+    count: 2
+  }
+  ingredients: [
+    {
+      ingredient: {
+        item: "minecraft:oak_sign"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "eternal_starlight:jinglestem"
+      type: "moonlight:block_type_swap"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (48)</summary>
<blockquote>

<details>
<summary>allthemods/allthetweaks/philosophers_fuel</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     id: "allthetweaks:philosophers_fuel"
     count: 1
   }
   pattern: [
     "ABC"
     "DEF"
     "GHI"
   ]
   key: {
     A: {
       item: "generatorgalore:ender_generator"
     }
     B: {
       item: "ironfurnaces:rainbow_coal"
     }
     C: {
       item: "bigreactors:insanite_block"
     }
     D: {
       item: "modern_industrialization:uranium_fuel_rod_quad"
     }
     E: {
       item: "mysticalagradditions:insanium_coal_block"
     }
     F: {
       item: "forbidden_arcanus:smelter_prism"
     }
     G: {
       item: "mysticalagriculture:awakened_supremium_ingot_block"
     }
     H: {
       item: "generatorgalore:magmatic_generator_64x"
     }
     I: {
       items: "evilcraft:dark_tank"
       components: {
-        cyclopscore:capacity: 16000
         cyclopscore:fluid_content: {
           id: "justdirethings:refined_t4_fluid_source"
           amount: 16000
         }
       }
       type: "neoforge:components"
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
     "1$machines/lethal_tesla_coil/assembler"
     "1$machines/lethal_tesla_coil/craft"
     "1$materials/bronze/alloy_smelter/block"
-    "1$materials/bronze/alloy_smelter/dust"
     "1$materials/bronze/alloy_smelter/ingot"
-    "1$materials/bronze/alloy_smelter/tiny_dust"
+    "1$materials/bronze/alloy_smelter/nugget"
     "1$materials/electrum/alloy_smelter/block"
-    "1$materials/electrum/alloy_smelter/dust"
     "1$materials/electrum/alloy_smelter/ingot"
-    "1$materials/electrum/alloy_smelter/tiny_dust"
+    "1$materials/electrum/alloy_smelter/nugget"
     "1$materials/invar/alloy_smelter/block"
-    "1$materials/invar/alloy_smelter/dust"
     "1$materials/invar/alloy_smelter/ingot"
-    "1$materials/invar/alloy_smelter/tiny_dust"
+    "1$materials/invar/alloy_smelter/nugget"
     "1$materials/silver/macerator/curved_plate"
     "1$tool/craft/steam_chainsaw"
     "1$vanilla_recipes/macerator/netherite_ingot_to_dust"
     "1$vanilla_recipes/mixer/waxing_with_honey/copper_block"
   ]
 }

```


</details>

<details>
<summary>crafting_on_a_stick/crafting_table</summary>

```diff
 {
+  _kubejs_changed_marker: true
   type: "minecraft:crafting_shaped"
   category: "misc"
   pattern: [
     " #"
     "| "
   ]
   key: {
     |: {
       item: "minecraft:stick"
     }
     #: {
-      item: "minecraft:crafting_table"
+      tag: "c:player_workstations/crafting_tables"
     }
   }
   result: {
     id: "crafting_on_a_stick:crafting_table"
     count: 1
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_black_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/black"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:black_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_blue_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/blue"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:blue_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_brown_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/brown"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:brown_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_cyan_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/cyan"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:cyan_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_gray_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/gray"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:gray_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_green_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/green"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:green_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_light_blue_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/light_blue"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:light_blue_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_light_gray_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/light_gray"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:light_gray_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_lime_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/lime"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:lime_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_magenta_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/magenta"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:magenta_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_orange_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/orange"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:orange_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_pink_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/pink"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:pink_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_purple_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/purple"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:purple_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_red_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/red"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:red_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_white_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/white"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:white_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>crystalix/tinted_yellow_crystalix_glass</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
-      tag: "crystalix:blocks"
+      tag: "crystalix:glass"
     }
     b: {
       tag: "c:dyes/yellow"
     }
   }
   pattern: [
     "aaa"
     "aba"
     "aaa"
   ]
   result: {
     count: 8
     id: "crystalix:yellow_crystalix_glass"
   }
 }

```


</details>

<details>
<summary>extended_industrialization/materials/battery_alloy/alloy_smelter/ingot</summary>

```diff
 {
   type: "extended_industrialization:alloy_smelter"
   duration: 200
   eu: 4
   item_inputs: [
     {
-      tag: "c:ingots/lead"
+      type: "neoforge:compound"
+      children: [
+        {
+          tag: "c:dusts/lead"
+        }
+        {
+          tag: "c:ingots/lead"
+        }
+      ]
       amount: 1
     }
     {
-      tag: "c:ingots/antimony"
+      type: "neoforge:compound"
+      children: [
+        {
+          tag: "c:dusts/antimony"
+        }
+        {
+          tag: "c:ingots/antimony"
+        }
+      ]
       amount: 1
     }
   ]
   item_outputs: [
     {
       amount: 2
       item: "modern_industrialization:battery_alloy_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/materials/bronze/alloy_smelter/ingot</summary>

```diff
 {
   type: "extended_industrialization:alloy_smelter"
   duration: 200
   eu: 4
   item_inputs: [
     {
-      tag: "c:ingots/tin"
+      children: [
+        {
+          tag: "c:dusts/tin"
+        }
+        {
+          tag: "c:ingots/tin"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 1
     }
     {
-      tag: "c:ingots/copper"
+      children: [
+        {
+          tag: "c:dusts/copper"
+        }
+        {
+          tag: "c:ingots/copper"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 3
     }
   ]
   item_outputs: [
     {
       amount: 4
       item: "alltheores:bronze_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/materials/cupronickel/alloy_smelter/ingot</summary>

```diff
 {
   type: "extended_industrialization:alloy_smelter"
   duration: 200
   eu: 4
   item_inputs: [
     {
-      tag: "c:ingots/copper"
+      type: "neoforge:compound"
+      children: [
+        {
+          tag: "c:dusts/copper"
+        }
+        {
+          tag: "c:ingots/copper"
+        }
+      ]
       amount: 1
     }
     {
-      tag: "c:ingots/nickel"
+      type: "neoforge:compound"
+      children: [
+        {
+          tag: "c:dusts/nickel"
+        }
+        {
+          tag: "c:ingots/nickel"
+        }
+      ]
       amount: 1
     }
   ]
   item_outputs: [
     {
       amount: 2
       item: "modern_industrialization:cupronickel_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/materials/electrum/alloy_smelter/ingot</summary>

```diff
 {
   type: "extended_industrialization:alloy_smelter"
   duration: 200
   eu: 4
   item_inputs: [
     {
-      tag: "c:ingots/gold"
+      children: [
+        {
+          tag: "c:dusts/gold"
+        }
+        {
+          tag: "c:ingots/gold"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 1
     }
     {
-      tag: "c:ingots/silver"
+      children: [
+        {
+          tag: "c:dusts/silver"
+        }
+        {
+          tag: "c:ingots/silver"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 1
     }
   ]
   item_outputs: [
     {
       amount: 2
       item: "alltheores:electrum_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/materials/invar/alloy_smelter/ingot</summary>

```diff
 {
   type: "extended_industrialization:alloy_smelter"
   duration: 200
   eu: 4
   item_inputs: [
     {
-      tag: "c:ingots/iron"
+      children: [
+        {
+          tag: "c:dusts/iron"
+        }
+        {
+          tag: "c:ingots/iron"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 2
     }
     {
-      tag: "c:ingots/nickel"
+      children: [
+        {
+          tag: "c:dusts/nickel"
+        }
+        {
+          tag: "c:ingots/nickel"
+        }
+      ]
+      type: "neoforge:compound"
       amount: 1
     }
   ]
   item_outputs: [
     {
       amount: 3
       item: "alltheores:invar_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/tool/nano_suit_boots</summary>

```diff
 {
   type: "modern_industrialization:assembler"
   duration: 200
   eu: 8
   fluid_inputs: [
     {
       amount: 4000
       fluid: "modern_industrialization:polyethylene"
     }
     {
       amount: 2000
       fluid: "modern_industrialization:nylon"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "minecraft:netherite_boots"
     }
     {
       amount: 16
       tag: "c:plates/carbon"
     }
     {
       amount: 4
       item: "modern_industrialization:electronic_circuit"
     }
     {
       amount: 2
       item: "modern_industrialization:silicon_battery"
     }
     {
       amount: 4
       item: "modern_industrialization:large_motor"
     }
+    {
+      amount: 1
+      item: "modern_industrialization:redstone_control_module"
+    }
   ]
   item_outputs: [
     {
       amount: 1
       item: "extended_industrialization:nano_boots"
     }
   ]
 }

```


</details>

<details>
<summary>extended_industrialization/tool/nano_suit_leggings</summary>

```diff
 {
   type: "modern_industrialization:assembler"
   duration: 200
   eu: 8
   fluid_inputs: [
     {
       amount: 4000
       fluid: "modern_industrialization:polyethylene"
     }
     {
       amount: 2000
       fluid: "modern_industrialization:nylon"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "minecraft:netherite_leggings"
     }
     {
       amount: 28
       tag: "c:plates/carbon"
     }
     {
       amount: 4
       item: "modern_industrialization:electronic_circuit"
     }
     {
       amount: 2
       item: "modern_industrialization:silicon_battery"
     }
     {
       amount: 4
       item: "modern_industrialization:large_motor"
     }
+    {
+      amount: 1
+      item: "modern_industrialization:redstone_control_module"
+    }
   ]
   item_outputs: [
     {
       amount: 1
       item: "extended_industrialization:nano_leggings"
     }
   ]
 }

```


</details>

<details>
<summary>extendedae/fixer/entro_half</summary>

```diff
 {
   type: "extendedae:crystal_fixer"
-  chance: 2000
+  chance: 7000
   fuel: {
     ingredient: {
       tag: "c:dusts/ender_pearl"
     }
   }
   input: {
     count: 1
     id: "extendedae:entro_budding_half"
   }
   output: {
     count: 1
     id: "extendedae:entro_budding_mostly"
   }
 }

```


</details>

<details>
<summary>extendedae/fixer/entro_hardly</summary>

```diff
 {
   type: "extendedae:crystal_fixer"
-  chance: 2000
+  chance: 7000
   fuel: {
     ingredient: {
       tag: "c:dusts/ender_pearl"
     }
   }
   input: {
     count: 1
     id: "extendedae:entro_budding_hardly"
   }
   output: {
     count: 1
     id: "extendedae:entro_budding_half"
   }
 }

```


</details>

<details>
<summary>extendedae/fixer/entro_mostly</summary>

```diff
 {
   type: "extendedae:crystal_fixer"
-  chance: 2000
+  chance: 7000
   fuel: {
     ingredient: {
       tag: "c:dusts/ender_pearl"
     }
   }
   input: {
     count: 1
     id: "extendedae:entro_budding_mostly"
   }
   output: {
     count: 1
     id: "extendedae:entro_budding_fully"
   }
 }

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:item_exists"
       item: "mifa:efficiency_addon_3"
     }
   ]
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
-      tag: "c:dusts/redstone"
+      tag: "c:ores/netherite_scrap"
     }
-    {
-      tag: "c:dusts/redstone"
-    }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:gears/netherite"
     }
     {
       item: "industrialforegoing:efficiency_addon_tier_2"
     }
     {
       tag: "c:rods/blaze"
     }
     {
       tag: "c:rods/blaze"
     }
+    {
+      item: "minecraft:netherite_scrap"
+    }
   ]
   inputFluid: {
-    amount: 1000
+    amount: 3000
     id: "industrialforegoing:pink_slime"
   }
   output: {
     count: 1
     id: "mifa:efficiency_addon_3"
   }
-  processingTime: 200
+  processingTime: 600
 }

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/efficiency_addon_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:item_exists"
       item: "mifa:efficiency_addon_4"
     }
   ]
   type: "industrialforegoing:dissolution_chamber"
   input: [
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:dusts/redstone"
-    }
+    {
+      tag: "c:gears/netherite"
+    }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       item: "minecraft:echo_shard"
     }
     {
       item: "mifa:efficiency_addon_3"
     }
     {
       tag: "c:rods/blaze"
     }
     {
       tag: "c:rods/blaze"
     }
+    {
+      item: "minecraft:sculk"
+    }
   ]
   inputFluid: {
-    amount: 1000
+    amount: 4000
-    id: "industrialforegoing:ether_gas"
+    id: "industrialforegoing:essence"
   }
   output: {
     count: 1
     id: "mifa:efficiency_addon_4"
   }
-  processingTime: 200
+  processingTime: 800
 }

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/industrialforegoing.processing_addon_tier_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:item_exists"
       item: "industrialforegoing:processing_addon_tier_2"
     }
   ]
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
       tag: "c:dusts/redstone"
     }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
     {
       tag: "c:dusts/redstone"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:gears/diamond"
     }
     {
       item: "industrialforegoing:processing_addon_tier_1"
     }
-    {
-      item: "minecraft:furnace"
-    }
-    {
-      item: "minecraft:crafting_table"
-    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
   ]
   inputFluid: {
     amount: 1000
     id: "industrialforegoing:latex"
   }
   output: {
     count: 1
     id: "industrialforegoing:processing_addon_tier_2"
   }
   processingTime: 200
 }

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:item_exists"
       item: "mifa:processing_addon_3"
     }
   ]
   type: "industrialforegoing:dissolution_chamber"
   input: [
     {
-      tag: "c:dusts/redstone"
+      tag: "c:ores/netherite_scrap"
     }
-    {
-      tag: "c:dusts/redstone"
-    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:gears/netherite"
     }
     {
       item: "industrialforegoing:processing_addon_tier_2"
     }
-    {
-      item: "minecraft:furnace"
-    }
-    {
-      item: "minecraft:crafting_table"
-    }
+    {
+      item: "minecraft:netherite_scrap"
+    }
   ]
   inputFluid: {
-    amount: 1000
+    amount: 3000
     id: "industrialforegoing:pink_slime"
   }
   output: {
     count: 1
     id: "mifa:processing_addon_3"
   }
-  processingTime: 200
+  processingTime: 600
 }

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/processing_addon_4</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "neoforge:item_exists"
       item: "mifa:processing_addon_4"
     }
   ]
   type: "industrialforegoing:dissolution_chamber"
   input: [
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:dusts/redstone"
-    }
+    {
+      tag: "c:gears/netherite"
+    }
+    {
+      tag: "c:player_workstations/furnaces"
+    }
+    {
+      tag: "c:player_workstations/crafting_tables"
+    }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       tag: "c:glass_panes/colorless"
     }
     {
       item: "minecraft:echo_shard"
     }
     {
       item: "mifa:processing_addon_3"
     }
-    {
-      item: "minecraft:furnace"
-    }
-    {
-      item: "minecraft:crafting_table"
-    }
+    {
+      item: "minecraft:sculk"
+    }
   ]
   inputFluid: {
-    amount: 1000
+    amount: 4000
-    id: "industrialforegoing:ether_gas"
+    id: "industrialforegoing:essence"
   }
   output: {
     count: 1
     id: "mifa:processing_addon_4"
   }
-  processingTime: 200
+  processingTime: 800
 }

```


</details>

<details>
<summary>integrateddynamics/special/clear_facade</summary>

```diff
 {
   type: "integrateddynamics:crafting_special_nbt_clear"
-  item: "integrateddynamics:facade"
+  item: {
+    item: "integrateddynamics:facade"
+  }
 }

```


</details>

<details>
<summary>productivemetalworks/casting/misc/meat_block</summary>

```diff
 {
   type: "productivemetalworks:block_casting"
   cast: {
     item: "minecraft:bone"
   }
   consume_cast: true
   fluid: {
-    amount: 800
+    amount: 720
     tag: "c:meat"
   }
   result: {
     count: 1
     id: "productivemetalworks:meat_block"
   }
 }

```


</details>

<details>
<summary>productivemetalworks/casting/misc/meat_ingot</summary>

```diff
 {
   type: "productivemetalworks:item_casting"
   cast: {
     item: "productivemetalworks:ingot_cast"
   }
   consume_cast: false
   fluid: {
-    amount: 100
+    amount: 90
     tag: "c:meat"
   }
   result: {
     count: 1
     id: "productivemetalworks:meat_ingot"
   }
 }

```


</details>

<details>
<summary>productivemetalworks/melting/meat</summary>

```diff
 {
   type: "productivemetalworks:item_melting"
   ingredient: {
     tag: "c:foods/raw_meat"
   }
   maximum_temperature: 0
   minimum_temperature: 1000
   result: [
     {
-      amount: 20
+      amount: 30
       id: "productivemetalworks:meat"
     }
   ]
 }

```


</details>

<details>
<summary>productivemetalworks/melting/meat_ingot</summary>

```diff
 {
   type: "productivemetalworks:item_melting"
   ingredient: {
-    item: "productivemetalworks:meat_ingot"
+    tag: "c:ingots/meat"
   }
   maximum_temperature: 0
   minimum_temperature: 1000
   result: [
     {
-      amount: 100
+      amount: 90
       id: "productivemetalworks:meat"
     }
   ]
 }

```


</details>

<details>
<summary>productivemetalworks/melting/shiny_meat_ingot</summary>

```diff
 {
   type: "productivemetalworks:item_melting"
   ingredient: {
     item: "productivemetalworks:shiny_meat_ingot"
   }
   maximum_temperature: 0
   minimum_temperature: 1000
   result: [
     {
-      amount: 100
+      amount: 90
       id: "productivemetalworks:meat"
     }
     {
       amount: 80
       id: "productivemetalworks:molten_gold"
     }
   ]
 }

```


</details>

<details>
<summary>sophisticatedbackpacks/stack_downgrade_tier_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedbackpacks:stack_downgrade_tier_1"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedbackpacks:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "SFS"
     "SBS"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedbackpacks:stack_downgrade_tier_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedbackpacks/stack_downgrade_tier_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedbackpacks:stack_downgrade_tier_2"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedbackpacks:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "FSF"
     "SBS"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedbackpacks:stack_downgrade_tier_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedbackpacks/stack_downgrade_tier_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedbackpacks:stack_downgrade_tier_3"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedbackpacks:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "SFS"
     "FBF"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedbackpacks:stack_downgrade_tier_3"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/basic_tier_upgrade</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedstorage:basic_tier_upgrade"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     R: {
       item: "minecraft:redstone_torch"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     " S "
     "SRS"
     " S "
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:basic_tier_upgrade"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/paintbrush</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
     W: {
       tag: "minecraft:wool"
     }
   }
   pattern: [
     " W "
     " SW"
     "S  "
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:paintbrush"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/stack_downgrade_tier_1</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedstorage:stack_downgrade_tier_1"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedstorage:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "SFS"
     "SBS"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:stack_downgrade_tier_1"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/stack_downgrade_tier_2</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedstorage:stack_downgrade_tier_2"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedstorage:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "FSF"
     "SBS"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:stack_downgrade_tier_2"
   }
 }

```


</details>

<details>
<summary>sophisticatedstorage/stack_downgrade_tier_3</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "sophisticatedcore:item_enabled"
       itemRegistryName: "sophisticatedstorage:stack_downgrade_tier_3"
     }
   ]
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
       item: "sophisticatedstorage:upgrade_base"
     }
     F: {
       item: "minecraft:flint"
     }
     S: {
-      item: "minecraft:stick"
+      tag: "c:rods/wooden"
     }
   }
   pattern: [
     "SFS"
     "FBF"
     "FSF"
   ]
   result: {
     count: 1
     id: "sophisticatedstorage:stack_downgrade_tier_3"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (51)</summary>
<blockquote>

<details>
<summary>ars_nouveau/scry_ritual/amethyst_gems</summary>

```diff
-{
-  type: "ars_nouveau:scry_ritual"
-  augment: "c:gems/amethyst"
-  highlight: "c:storage_blocks/amethyst"
-}

```


</details>

<details>
<summary>extended_industrialization/materials/battery_alloy/alloy_smelter/dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 1
-      tag: "c:dusts/lead"
-    }
-    {
-      amount: 1
-      tag: "c:dusts/antimony"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "modern_industrialization:battery_alloy_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/battery_alloy/alloy_smelter/tiny_dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 9
-      tag: "c:tiny_dusts/lead"
-    }
-    {
-      amount: 9
-      tag: "c:tiny_dusts/antimony"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "modern_industrialization:battery_alloy_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/bronze/alloy_smelter/dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 1
-      tag: "c:dusts/tin"
-    }
-    {
-      amount: 3
-      tag: "c:dusts/copper"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 4
-      item: "alltheores:bronze_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/bronze/alloy_smelter/tiny_dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 9
-      tag: "c:tiny_dusts/tin"
-    }
-    {
-      amount: 27
-      tag: "c:tiny_dusts/copper"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 4
-      item: "alltheores:bronze_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/cupronickel/alloy_smelter/dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 1
-      tag: "c:dusts/copper"
-    }
-    {
-      amount: 1
-      tag: "c:dusts/nickel"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "modern_industrialization:cupronickel_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/cupronickel/alloy_smelter/tiny_dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 9
-      tag: "c:tiny_dusts/copper"
-    }
-    {
-      amount: 9
-      tag: "c:tiny_dusts/nickel"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "modern_industrialization:cupronickel_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/electrum/alloy_smelter/dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 1
-      tag: "c:dusts/gold"
-    }
-    {
-      amount: 1
-      tag: "c:dusts/silver"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "alltheores:electrum_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/electrum/alloy_smelter/tiny_dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 9
-      tag: "c:tiny_dusts/gold"
-    }
-    {
-      amount: 9
-      tag: "c:tiny_dusts/silver"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 2
-      item: "alltheores:electrum_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/invar/alloy_smelter/dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 2
-      tag: "c:dusts/iron"
-    }
-    {
-      amount: 1
-      tag: "c:dusts/nickel"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 3
-      item: "alltheores:invar_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>extended_industrialization/materials/invar/alloy_smelter/tiny_dust</summary>

```diff
-{
-  type: "extended_industrialization:alloy_smelter"
-  duration: 200
-  eu: 4
-  item_inputs: [
-    {
-      amount: 18
-      tag: "c:tiny_dusts/iron"
-    }
-    {
-      amount: 9
-      tag: "c:tiny_dusts/nickel"
-    }
-  ]
-  item_outputs: [
-    {
-      amount: 3
-      item: "alltheores:invar_ingot"
-    }
-  ]
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_tier_3</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_3"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:gears/netherite"
-    }
-    {
-      item: "industrialforegoing:speed_addon_tier_2"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 1000
-    id: "industrialforegoing:pink_slime"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_3"
-  }
-  processingTime: 200
-}

```


</details>

<details>
<summary>industrialforegoing/dissolution_chamber/speed_addon_tier_4</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:item_exists"
-      item: "mifa:speed_addon_4"
-    }
-  ]
-  type: "industrialforegoing:dissolution_chamber"
-  input: [
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:dusts/redstone"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      tag: "c:glass_panes/colorless"
-    }
-    {
-      item: "minecraft:echo_shard"
-    }
-    {
-      item: "mifa:speed_addon_3"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-    {
-      item: "minecraft:sugar"
-    }
-  ]
-  inputFluid: {
-    amount: 1000
-    id: "industrialforegoing:ether_gas"
-  }
-  output: {
-    count: 1
-    id: "mifa:speed_addon_4"
-  }
-  processingTime: 200
-}

```


</details>

<details>
<summary>mysticalagriculture/seed/infusion/ruby</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "mysticalagriculture:crop_enabled"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_has_material"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "neoforge:not"
-      value: {
-        type: "neoforge:tag_empty"
-        tag: "c:gems/ruby"
-      }
-    }
-  ]
-  type: "mysticalagriculture:infusion"
-  ingredients: [
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:ruby"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:ruby"
-    }
-  ]
-  input: {
-    type: "mysticalagriculture:crop_component"
-    component: "seed"
-    crop: "mysticalagriculture:ruby"
-  }
-  result: {
-    count: 1
-    id: "mysticalagriculture:ruby_seeds"
-  }
-}

```


</details>

<details>
<summary>mysticalagriculture/seed/infusion/sapphire</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "mysticalagriculture:crop_enabled"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_has_material"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "neoforge:not"
-      value: {
-        type: "neoforge:tag_empty"
-        tag: "c:gems/sapphire"
-      }
-    }
-  ]
-  type: "mysticalagriculture:infusion"
-  ingredients: [
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:sapphire"
-    }
-    {
-      type: "mysticalagriculture:crop_component"
-      component: "essence"
-      crop: "mysticalagriculture:sapphire"
-    }
-  ]
-  input: {
-    type: "mysticalagriculture:crop_component"
-    component: "seed"
-    crop: "mysticalagriculture:sapphire"
-  }
-  result: {
-    count: 1
-    id: "mysticalagriculture:sapphire_seeds"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/arrow_heads</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:arrow_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:projectile"
-    part_type: "silentgear:main"
-  }
-  material_count: 1
-  result: {
-    count: 1
-    id: "silentgear:arrow_heads"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/axe_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:axe_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:axe_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/boot_plates</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:boots_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:boots"
-    part_type: "silentgear:main"
-  }
-  material_count: 4
-  result: {
-    count: 1
-    id: "silentgear:boot_plates"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/bow_limbs</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:bow_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:bow_limbs"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/bracelet_band</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:bracelet_blueprint"
-  }
-  consume_cast: false
-  material: {
-    categories: [
-      "metal"
-    ]
-    gear_type: "silentgear:curio"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:bracelet_band"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/chestplate_plates</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:chestplate_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:chestplate"
-    part_type: "silentgear:main"
-  }
-  material_count: 8
-  result: {
-    count: 1
-    id: "silentgear:chestplate_plates"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/crossbow_limbs</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:crossbow_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:crossbow_limbs"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/dagger_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:dagger_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 1
-  result: {
-    count: 1
-    id: "silentgear:dagger_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/excavator_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:excavator_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 5
-  result: {
-    count: 1
-    id: "silentgear:excavator_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/fishing_reel_and_hook</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:fishing_rod_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:fishing_reel_and_hook"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/golden_nether_banana</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:item_casting"
-  cast: {
-    item: "silentgear:nether_banana"
-  }
-  consume_cast: true
-  fluid: {
-    amount: 720
-    tag: "c:molten_gold"
-  }
-  result: {
-    count: 1
-    id: "silentgear:golden_nether_banana"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/hammer_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:hammer_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 6
-  result: {
-    count: 1
-    id: "silentgear:hammer_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/helmet_plates</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:helmet_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:helmet"
-    part_type: "silentgear:main"
-  }
-  material_count: 5
-  result: {
-    count: 1
-    id: "silentgear:helmet_plates"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/hoe_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:hoe_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:hoe_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/katana_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:katana_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:katana_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/knife_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:knife_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 1
-  result: {
-    count: 1
-    id: "silentgear:knife_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/legging_plates</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:leggings_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:leggings"
-    part_type: "silentgear:main"
-  }
-  material_count: 7
-  result: {
-    count: 1
-    id: "silentgear:legging_plates"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/mace_core</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "minecraft:heavy_core"
-  }
-  consume_cast: true
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:mace_core"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/machete_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:machete_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:machete_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/mattock_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:mattock_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 4
-  result: {
-    count: 1
-    id: "silentgear:mattock_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/necklace_chain</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:necklace_blueprint"
-  }
-  consume_cast: false
-  material: {
-    categories: [
-      "metal"
-    ]
-    gear_type: "silentgear:curio"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:necklace_chain"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/paxel_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:paxel_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 5
-  result: {
-    count: 1
-    id: "silentgear:paxel_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/pickaxe_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:pickaxe_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:pickaxe_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/prospector_hammer_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:prospector_hammer_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:prospector_hammer_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/ring_shank</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:ring_blueprint"
-  }
-  consume_cast: false
-  material: {
-    categories: [
-      "metal"
-    ]
-    gear_type: "silentgear:curio"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:ring_shank"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/saw_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:saw_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 5
-  result: {
-    count: 1
-    id: "silentgear:saw_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/shear_blades</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:shears_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:shear_blades"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/shield_plate</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:shield_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:armor"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:shield_plate"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/shovel_head</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:shovel_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 1
-  result: {
-    count: 1
-    id: "silentgear:shovel_head"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/sickle_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:sickle_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:sickle_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/slingshot_limbs</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:slingshot_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:slingshot_limbs"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/spear_tip</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:spear_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 1
-  result: {
-    count: 1
-    id: "silentgear:spear_tip"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/sword_blade</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:sword_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:sword_blade"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/tip</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:tip_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:tip"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:tip"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/tool_rod</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:rod_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:rod"
-  }
-  material_count: 2
-  result: {
-    count: 1
-    id: "silentgear:rod"
-  }
-}

```


</details>

<details>
<summary>productivemetalworks/casting/silentgear/trident_prongs</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "silentgear"
-    }
-  ]
-  type: "productivemetalworks:sg_gear_casting"
-  cast: {
-    item: "silentgear:trident_blueprint"
-  }
-  consume_cast: false
-  material: {
-    gear_type: "silentgear:tool"
-    part_type: "silentgear:main"
-  }
-  material_count: 3
-  result: {
-    count: 1
-    id: "silentgear:trident_prongs"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Added (25)</summary>
<blockquote>

<details>
<summary>minecraft:banner_pattern/ars_nouveau:pattern_item/ars_stencil</summary>

```diff
+[
+  "ars_nouveau:abjuration?"
+  "ars_nouveau:air?"
+  "ars_nouveau:conjuration?"
+  "ars_nouveau:earth?"
+  "ars_nouveau:fire?"
+  "ars_nouveau:manipulation?"
+  "ars_nouveau:spirals?"
+  "ars_nouveau:water?"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/glacite</summary>

```diff
+[
+  "eternal_starlight:glacite_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/pink_slime</summary>

```diff
+[
+  "industrialforegoing:pink_slime_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/raw_amaramber</summary>

```diff
+[
+  "eternal_starlight:raw_amaramber_block"
+]

```


</details>

<details>
<summary>minecraft:block/crystalix:bordered</summary>

```diff
+[
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:yellow_bordered_crystalix_glass"
+]

```


</details>

<details>
<summary>minecraft:block/crystalix:clear</summary>

```diff
+[
+  "crystalix:black_clear_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
+]

```


</details>

<details>
<summary>minecraft:block/crystalix:glass</summary>

```diff
+[
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
+]

```


</details>

<details>
<summary>minecraft:block/eternal_starlight:amaramber_fire_survives_on</summary>

```diff
+[
+  "eternal_starlight:amaramber_bricks"
+  "eternal_starlight:raw_amaramber_block"
+  "eternal_starlight:torreya_tiles"
+]

```


</details>

<details>
<summary>minecraft:block/eternal_starlight:jinglestem_logs</summary>

```diff
+[
+  "eternal_starlight:jinglestem_log"
+  "eternal_starlight:jinglestem_wood"
+  "eternal_starlight:stripped_jinglestem_log"
+  "eternal_starlight:stripped_jinglestem_wood"
+]

```


</details>

<details>
<summary>minecraft:fluid/c:molten_blaze</summary>

```diff
+[
+  "productivemetalworks:molten_blaze"
+]

```


</details>

<details>
<summary>minecraft:fluid/c:molten_magma_cream</summary>

```diff
+[
+  "productivemetalworks:molten_magma_cream"
+]

```


</details>

<details>
<summary>minecraft:fluid/c:molten_shulker_shell</summary>

```diff
+[
+  "productivemetalworks:molten_shulker_shell"
+]

```


</details>

<details>
<summary>minecraft:fluid/c:molten_slime</summary>

```diff
+[
+  "productivemetalworks:molten_slime"
+]

```


</details>

<details>
<summary>minecraft:item/c:nuggets/meat</summary>

```diff
+[
+  "productivemetalworks:meat_nugget"
+]

```


</details>

<details>
<summary>minecraft:item/crystalix:bordered</summary>

```diff
+[
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:yellow_bordered_crystalix_glass"
+]

```


</details>

<details>
<summary>minecraft:item/crystalix:clear</summary>

```diff
+[
+  "crystalix:black_clear_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
+]

```


</details>

<details>
<summary>minecraft:item/crystalix:glass</summary>

```diff
+[
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
+]

```


</details>

<details>
<summary>minecraft:item/curios:shoulders</summary>

```diff
+[
+  "extended_industrialization:robot_auto_feeder"
+]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:ent_fertilizers</summary>

```diff
+[
+  "eternal_starlight:shadow_snail_shell_powder"
+  "minecraft:bone_meal"
+]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:jinglestem_logs</summary>

```diff
+[
+  "eternal_starlight:jinglestem_log"
+  "eternal_starlight:jinglestem_wood"
+  "eternal_starlight:stripped_jinglestem_log"
+  "eternal_starlight:stripped_jinglestem_wood"
+]

```


</details>

<details>
<summary>minecraft:item/extended_industrialization:enchantment_modules/farmer</summary>

```diff
+[
+  "extended_industrialization:silk_touch_module"
+]

```


</details>

<details>
<summary>minecraft:item/extended_industrialization:enchantment_modules/lethal_tesla_coil</summary>

```diff
+[
+  "extended_industrialization:looting_module"
+]

```


</details>

<details>
<summary>minecraft:item/tombstone:lootable/vanilla_armor</summary>

```diff
+[
+  "minecraft:chainmail_boots"
+  "minecraft:chainmail_chestplate"
+  "minecraft:chainmail_helmet"
+  "minecraft:chainmail_leggings"
+  "minecraft:diamond_boots"
+  "minecraft:diamond_chestplate"
+  "minecraft:diamond_helmet"
+  "minecraft:diamond_leggings"
+  "minecraft:golden_boots"
+  "minecraft:golden_chestplate"
+  "minecraft:golden_helmet"
+  "minecraft:golden_leggings"
+  "minecraft:iron_boots"
+  "minecraft:iron_chestplate"
+  "minecraft:iron_helmet"
+  "minecraft:iron_leggings"
+  "minecraft:leather_boots"
+  "minecraft:leather_chestplate"
+  "minecraft:leather_helmet"
+  "minecraft:leather_leggings"
+  "minecraft:netherite_boots"
+  "minecraft:netherite_chestplate"
+  "minecraft:netherite_helmet"
+  "minecraft:netherite_leggings"
+  "minecraft:turtle_helmet"
+]

```


</details>

<details>
<summary>minecraft:item/tombstone:lootable/vanilla_tool</summary>

```diff
+[
+  "minecraft:diamond_axe"
+  "minecraft:diamond_hoe"
+  "minecraft:diamond_pickaxe"
+  "minecraft:diamond_shovel"
+  "minecraft:golden_axe"
+  "minecraft:golden_hoe"
+  "minecraft:golden_pickaxe"
+  "minecraft:golden_shovel"
+  "minecraft:iron_axe"
+  "minecraft:iron_hoe"
+  "minecraft:iron_pickaxe"
+  "minecraft:iron_shovel"
+  "minecraft:netherite_axe"
+  "minecraft:netherite_hoe"
+  "minecraft:netherite_pickaxe"
+  "minecraft:netherite_shovel"
+  "minecraft:stone_axe"
+  "minecraft:stone_hoe"
+  "minecraft:stone_pickaxe"
+  "minecraft:stone_shovel"
+  "minecraft:wooden_axe"
+  "minecraft:wooden_hoe"
+  "minecraft:wooden_pickaxe"
+  "minecraft:wooden_shovel"
+]

```


</details>

<details>
<summary>minecraft:item/tombstone:lootable/vanilla_weapon</summary>

```diff
+[
+  "minecraft:bow"
+  "minecraft:crossbow"
+  "minecraft:diamond_axe"
+  "minecraft:diamond_sword"
+  "minecraft:golden_axe"
+  "minecraft:golden_sword"
+  "minecraft:iron_axe"
+  "minecraft:iron_sword"
+  "minecraft:mace"
+  "minecraft:netherite_axe"
+  "minecraft:netherite_sword"
+  "minecraft:stone_axe"
+  "minecraft:stone_sword"
+  "minecraft:trident"
+  "minecraft:wooden_axe"
+  "minecraft:wooden_sword"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (81)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:fence_gates/wooden</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_fence_gate"
   ... (195 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:fences/wooden</summary>

```diff
 [
   ... (3 entries)
+  "eternal_starlight:jinglestem_fence"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:glass_blocks</summary>

```diff
 [
   ... (3 entries)
+  "#crystalix:blocks"
   ... (156 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:gravels</summary>

```diff
 [
   ... (2 entries)
-  "eternal_starlight:dusted_gravel"
+  "eternal_starlight:glowing_mossy_dusted_gravel"
+  "eternal_starlight:mossy_dusted_gravel"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks</summary>

```diff
 [
   ... (327 entries)
+  "eternal_starlight:glacite_block"
   ... (5 entries)
+  "eternal_starlight:raw_amaramber_block"
   ... (7 entries)
+  "industrialforegoing:pink_slime_block"
   ... (22 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:stripped_logs</summary>

```diff
 [
   ... (25 entries)
+  "eternal_starlight:stripped_jinglestem_log"
   ... (38 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:stripped_woods</summary>

```diff
 [
   ... (25 entries)
+  "eternal_starlight:stripped_jinglestem_wood"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/crystalix:blocks</summary>

```diff
 [
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:black_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:yellow_bordered_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:beacon_base_blocks</summary>

```diff
 [
   ... (96 entries)
+  "eternal_starlight:glacite_block"
   ... (110 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:ceiling_hanging_signs</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_hanging_sign"
   ... (230 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:dirt</summary>

```diff
 [
   ... (77 entries)
+  "eternal_starlight:blue_crystal_moss_block"
   ... (7 entries)
+  "eternal_starlight:red_crystal_moss_block"
   ... (47 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fence_gates</summary>

```diff
 [
   ... (34 entries)
+  "eternal_starlight:jinglestem_fence_gate"
   ... (275 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:flower_pots</summary>

```diff
 [
   ... (118 entries)
+  "eternal_starlight:potted_jinglestem_sapling"
   ... (179 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:leaves</summary>

```diff
 [
   ... (135 entries)
+  "eternal_starlight:jinglestem_leaves"
+  "eternal_starlight:jinglestem_leaves_plant"
   ... (333 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:logs</summary>

```diff
 [
   ... (30 entries)
+  "#eternal_starlight:jinglestem_logs"
   ... (54 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:logs_that_burn</summary>

```diff
 [
   ... (31 entries)
+  "#eternal_starlight:jinglestem_logs"
   ... (196 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/hoe</summary>

```diff
 [
   ... (133 entries)
+  "eternal_starlight:blue_crystal_moss_block"
+  "eternal_starlight:red_crystal_moss_block"
   ... (155 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (3762 entries)
+  "eternal_starlight:amaramber_brick_slab"
+  "eternal_starlight:amaramber_brick_stairs"
+  "eternal_starlight:amaramber_brick_wall"
+  "eternal_starlight:amaramber_bricks"
   ... (71 entries)
+  "eternal_starlight:glacite_block"
   ... (131 entries)
+  "eternal_starlight:raw_amaramber_block"
   ... (39 entries)
+  "eternal_starlight:torreya_tile_slab"
+  "eternal_starlight:torreya_tile_stairs"
+  "eternal_starlight:torreya_tile_wall"
+  "eternal_starlight:torreya_tiles"
   ... (6528 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/shovel</summary>

```diff
 [
   ... (241 entries)
+  "eternal_starlight:glowing_mossy_dusted_gravel"
   ... (2 entries)
+  "eternal_starlight:mossy_dusted_gravel"
   ... (149 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:moss_replaceable</summary>

```diff
 [
+  "#eternal_starlight:base_stone_starlight"
   ... (3 entries)
-  "eternal_starlight:grimstone"
-  "eternal_starlight:voidstone"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:planks</summary>

```diff
 [
   ... (456 entries)
+  "eternal_starlight:jinglestem_planks"
   ... (238 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:saplings</summary>

```diff
 [
   ... (52 entries)
+  "eternal_starlight:jinglestem_sapling"
   ... (280 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:slabs</summary>

```diff
 [
   ... (98 entries)
+  "eternal_starlight:amaramber_brick_slab"
   ... (40 entries)
+  "eternal_starlight:torreya_tile_slab"
   ... (211 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:stairs</summary>

```diff
 [
   ... (95 entries)
+  "eternal_starlight:amaramber_brick_stairs"
   ... (40 entries)
+  "eternal_starlight:torreya_tile_stairs"
   ... (181 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:standing_signs</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_sign"
   ... (229 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wall_hanging_signs</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_wall_hanging_sign"
   ... (230 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wall_signs</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_wall_sign"
   ... (230 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:walls</summary>

```diff
 [
   ... (81 entries)
+  "eternal_starlight:amaramber_brick_wall"
   ... (36 entries)
+  "eternal_starlight:torreya_tile_wall"
   ... (457 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_buttons</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_button"
   ... (215 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_doors</summary>

```diff
 [
   ... (237 entries)
+  "eternal_starlight:jinglestem_door"
   ... (501 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_fences</summary>

```diff
 [
   ... (41 entries)
+  "eternal_starlight:jinglestem_fence"
   ... (268 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_pressure_plates</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_pressure_plate"
   ... (215 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_slabs</summary>

```diff
 [
   ... (34 entries)
+  "eternal_starlight:jinglestem_slab"
   ... (239 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_stairs</summary>

```diff
 [
   ... (34 entries)
+  "eternal_starlight:jinglestem_stairs"
   ... (240 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:wooden_trapdoors</summary>

```diff
 [
   ... (272 entries)
+  "eternal_starlight:jinglestem_trapdoor"
   ... (487 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:panic_causes</summary>

```diff
 [
   ... (19 entries)
+  "eternal_starlight:wilt"
   ... (21 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:undead</summary>

```diff
 [
   ... (18 entries)
+  "eternal_starlight:lonestar_skeleton"
+  "eternal_starlight:tangled"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:dusts</summary>

```diff
 [
   ... (188 entries)
+  "extendedae:quartz_blend"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:enchantables</summary>

```diff
 [
   ... (17 entries)
+  "refurbished_furniture:knife"
+  "refurbished_furniture:spatula"
 ]

```


</details>

<details>
<summary>minecraft:item/c:fence_gates/wooden</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_fence_gate"
   ... (194 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:fences/wooden</summary>

```diff
 [
   ... (3 entries)
+  "eternal_starlight:jinglestem_fence"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods</summary>

```diff
 [
   ... (21 entries)
+  "#refurbished_furniture:food?"
   ... (117 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods/bread</summary>

```diff
 [
   ... (14 entries)
+  "refurbished_furniture:bread_slice"
+  "refurbished_furniture:toast"
 ]

```


</details>

<details>
<summary>minecraft:item/c:gravels</summary>

```diff
 [
   ... (2 entries)
-  "eternal_starlight:dusted_gravel"
+  "eternal_starlight:glowing_mossy_dusted_gravel"
+  "eternal_starlight:mossy_dusted_gravel"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:nuggets</summary>

```diff
 [
   ... (66 entries)
+  "#c:nuggets/meat"
   ... (60 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
   ... (358 entries)
+  "eternal_starlight:glacite_block"
   ... (5 entries)
+  "eternal_starlight:raw_amaramber_block"
   ... (27 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_logs</summary>

```diff
 [
   ... (26 entries)
+  "eternal_starlight:stripped_jinglestem_log"
   ... (38 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_woods</summary>

```diff
 [
   ... (25 entries)
+  "eternal_starlight:stripped_jinglestem_wood"
   ... (15 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/crossbow</summary>

```diff
 [
   ... (6 entries)
+  "eternal_starlight:wilted_crossbow"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/knives</summary>

```diff
 [
-  "#refurbished_furniture:tools/knives"
+  "#refurbished_furniture:tools/knives?"
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/ranged_weapon</summary>

```diff
 [
   ... (11 entries)
+  "eternal_starlight:wilted_crossbow"
   ... (24 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/shear</summary>

```diff
 [
   ... (16 entries)
+  "reliquary:shears_of_winter"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/wrench</summary>

```diff
 [
   ... (20 entries)
+  "refurbished_furniture:wrench"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/crystalix:blocks</summary>

```diff
 [
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:black_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
   ... (2 entries)
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:yellow_bordered_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:cursed_garden_locators</summary>

```diff
 [
+  "eternal_starlight:blue_crystal_moss_block"
   ... (4 entries)
+  "eternal_starlight:red_crystal_moss_block"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:untrimmable_armor</summary>

```diff
 [
   ... (3 entries)
+  "eternal_starlight:air_sac_mask"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:water_crystal_ingredients</summary>

```diff
 [
   ... (1 entries)
+  "eternal_starlight:circulush"
+  "eternal_starlight:gloreed"
+  "eternal_starlight:glowlis"
   ... (1 entries)
+  "eternal_starlight:lumenstem"
+  "eternal_starlight:luminis"
+  "eternal_starlight:marimold"
   ... (5 entries)
+  "eternal_starlight:starlight_seagrass"
   ... (1 entries)
+  "eternal_starlight:stonett"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:boats</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_raft"
   ... (42 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_boats</summary>

```diff
 [
   ... (27 entries)
+  "eternal_starlight:jinglestem_chest_raft"
   ... (42 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/crossbow</summary>

```diff
 [
   ... (4 entries)
+  "eternal_starlight:wilted_crossbow"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (68 entries)
+  "eternal_starlight:wilted_crossbow"
   ... (107 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:hanging_signs</summary>

```diff
 [
   ... (29 entries)
+  "eternal_starlight:jinglestem_hanging_sign"
   ... (213 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:head_armor</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:air_sac_mask"
   ... (60 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:leaves</summary>

```diff
 [
   ... (132 entries)
+  "eternal_starlight:jinglestem_leaves"
   ... (234 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:logs</summary>

```diff
 [
   ... (28 entries)
+  "#eternal_starlight:jinglestem_logs"
   ... (74 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:logs_that_burn</summary>

```diff
 [
   ... (26 entries)
+  "#eternal_starlight:jinglestem_logs"
   ... (221 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:planks</summary>

```diff
 [
   ... (456 entries)
+  "eternal_starlight:jinglestem_planks"
   ... (238 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:saplings</summary>

```diff
 [
   ... (52 entries)
+  "eternal_starlight:jinglestem_sapling"
   ... (214 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:signs</summary>

```diff
 [
   ... (29 entries)
+  "eternal_starlight:jinglestem_sign"
   ... (213 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:slabs</summary>

```diff
 [
   ... (59 entries)
+  "eternal_starlight:amaramber_brick_slab"
   ... (40 entries)
+  "eternal_starlight:torreya_tile_slab"
   ... (172 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:stairs</summary>

```diff
 [
   ... (53 entries)
+  "eternal_starlight:amaramber_brick_stairs"
   ... (40 entries)
+  "eternal_starlight:torreya_tile_stairs"
   ... (142 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:walls</summary>

```diff
 [
   ... (54 entries)
+  "eternal_starlight:amaramber_brick_wall"
   ... (36 entries)
+  "eternal_starlight:torreya_tile_wall"
   ... (126 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_buttons</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_button"
   ... (215 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_doors</summary>

```diff
 [
   ... (235 entries)
+  "eternal_starlight:jinglestem_door"
   ... (462 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_fences</summary>

```diff
 [
   ... (30 entries)
+  "eternal_starlight:jinglestem_fence"
   ... (220 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_pressure_plates</summary>

```diff
 [
   ... (28 entries)
+  "eternal_starlight:jinglestem_pressure_plate"
   ... (215 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_slabs</summary>

```diff
 [
   ... (29 entries)
+  "eternal_starlight:jinglestem_slab"
   ... (239 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_stairs</summary>

```diff
 [
   ... (29 entries)
+  "eternal_starlight:jinglestem_stairs"
   ... (240 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:wooden_trapdoors</summary>

```diff
 [
   ... (270 entries)
+  "eternal_starlight:jinglestem_trapdoor"
   ... (406 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:way_signs</summary>

```diff
 [
   ... (32 entries)
+  "supplementaries:eternal_starlight/way_sign_jinglestem"
   ... (228 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:tradeable_saplings</summary>

```diff
 [
   ... (50 entries)
+  "eternal_starlight:jinglestem_sapling"
   ... (70 entries)
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (9)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (18533 entries)
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:black_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:yellow_bordered_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
   ... (1370 entries)
+  "eternal_starlight:amaramber_brick_slab"
+  "eternal_starlight:amaramber_brick_stairs"
+  "eternal_starlight:amaramber_brick_wall"
+  "eternal_starlight:amaramber_bricks"
   ... (2 entries)
+  "eternal_starlight:amaramber_fire"
+  "eternal_starlight:amaramber_grass"
+  "eternal_starlight:amaramber_grass_bush"
   ... (14 entries)
+  "eternal_starlight:blue_crystal_moss_block"
   ... (35 entries)
+  "eternal_starlight:circulush"
   ... (85 entries)
+  "eternal_starlight:glacite_block"
   ... (2 entries)
+  "eternal_starlight:gloreed"
   ... (4 entries)
+  "eternal_starlight:glowing_mossy_dusted_gravel"
   ... (7 entries)
+  "eternal_starlight:glowlis"
   ... (47 entries)
+  "eternal_starlight:jinglestem_button"
+  "eternal_starlight:jinglestem_door"
+  "eternal_starlight:jinglestem_fence"
+  "eternal_starlight:jinglestem_fence_gate"
+  "eternal_starlight:jinglestem_hanging_sign"
+  "eternal_starlight:jinglestem_leaves"
+  "eternal_starlight:jinglestem_leaves_plant"
+  "eternal_starlight:jinglestem_log"
+  "eternal_starlight:jinglestem_planks"
+  "eternal_starlight:jinglestem_pressure_plate"
+  "eternal_starlight:jinglestem_sapling"
+  "eternal_starlight:jinglestem_sign"
+  "eternal_starlight:jinglestem_slab"
+  "eternal_starlight:jinglestem_stairs"
+  "eternal_starlight:jinglestem_trapdoor"
+  "eternal_starlight:jinglestem_wall_hanging_sign"
+  "eternal_starlight:jinglestem_wall_sign"
+  "eternal_starlight:jinglestem_wood"
   ... (7 entries)
+  "eternal_starlight:lumenstem"
+  "eternal_starlight:lumenstem_plant"
+  "eternal_starlight:luminis"
   ... (33 entries)
+  "eternal_starlight:marimold"
   ... (5 entries)
+  "eternal_starlight:moonlight_bush"
   ... (2 entries)
+  "eternal_starlight:mossy_dusted_gravel"
   ... (111 entries)
+  "eternal_starlight:potted_amaramber_grass"
   ... (13 entries)
+  "eternal_starlight:potted_jinglestem_sapling"
   ... (31 entries)
+  "eternal_starlight:raw_amaramber_block"
+  "eternal_starlight:red_crystal_moss_block"
   ... (69 entries)
+  "eternal_starlight:starlight_seagrass"
   ... (8 entries)
+  "eternal_starlight:stonett"
+  "eternal_starlight:stripped_jinglestem_log"
+  "eternal_starlight:stripped_jinglestem_wood"
   ... (58 entries)
+  "eternal_starlight:torreya_tile_slab"
+  "eternal_starlight:torreya_tile_stairs"
+  "eternal_starlight:torreya_tile_wall"
+  "eternal_starlight:torreya_tiles"
   ... (9184 entries)
+  "productivemetalworks:molten_blaze"
   ... (19 entries)
+  "productivemetalworks:molten_magma_cream"
   ... (8 entries)
+  "productivemetalworks:molten_shulker_shell"
   ... (2 entries)
+  "productivemetalworks:molten_slime"
   ... (10169 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (322 entries)
+  "eternal_starlight:wilted_petal"
   ... (695 entries)
 ]

```


</details>

<details>
<summary>fluid</summary>

```diff
 [
   ... (365 entries)
+  "productivemetalworks:flowing_molten_blaze"
   ... (19 entries)
+  "productivemetalworks:flowing_molten_magma_cream"
   ... (8 entries)
+  "productivemetalworks:flowing_molten_shulker_shell"
   ... (2 entries)
+  "productivemetalworks:flowing_molten_slime"
   ... (9 entries)
+  "productivemetalworks:molten_blaze"
   ... (19 entries)
+  "productivemetalworks:molten_magma_cream"
   ... (8 entries)
+  "productivemetalworks:molten_shulker_shell"
   ... (2 entries)
+  "productivemetalworks:molten_slime"
   ... (69 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (3414 entries)
+  "ars_nouveau:ars_stencil"
   ... (142 entries)
+  "ars_nouveau:glyph_wind_burst"
   ... (20294 entries)
+  "crystalix:black_bordered_crystalix_glass"
+  "crystalix:black_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:blue_bordered_crystalix_glass"
+  "crystalix:blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:brown_bordered_crystalix_glass"
+  "crystalix:brown_clear_crystalix_glass"
   ... (2 entries)
+  "crystalix:cyan_bordered_crystalix_glass"
+  "crystalix:cyan_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:gray_bordered_crystalix_glass"
+  "crystalix:gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:green_bordered_crystalix_glass"
+  "crystalix:green_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_blue_bordered_crystalix_glass"
+  "crystalix:light_blue_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:light_gray_bordered_crystalix_glass"
+  "crystalix:light_gray_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:lime_bordered_crystalix_glass"
+  "crystalix:lime_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:magenta_bordered_crystalix_glass"
+  "crystalix:magenta_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:orange_bordered_crystalix_glass"
+  "crystalix:orange_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:pink_bordered_crystalix_glass"
+  "crystalix:pink_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:purple_bordered_crystalix_glass"
+  "crystalix:purple_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:red_bordered_crystalix_glass"
+  "crystalix:red_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:white_bordered_crystalix_glass"
+  "crystalix:white_clear_crystalix_glass"
   ... (1 entries)
+  "crystalix:yellow_bordered_crystalix_glass"
+  "crystalix:yellow_clear_crystalix_glass"
   ... (1565 entries)
+  "eternal_starlight:air_sac_mask"
   ... (4 entries)
+  "eternal_starlight:amaramber_brick_slab"
+  "eternal_starlight:amaramber_brick_stairs"
+  "eternal_starlight:amaramber_brick_wall"
+  "eternal_starlight:amaramber_bricks"
   ... (2 entries)
+  "eternal_starlight:amaramber_grass"
+  "eternal_starlight:amaramber_grass_bush"
   ... (26 entries)
+  "eternal_starlight:blue_crystal_moss_block"
   ... (40 entries)
+  "eternal_starlight:circulush"
   ... (107 entries)
+  "eternal_starlight:glacite_block"
   ... (15 entries)
+  "eternal_starlight:gloreed"
   ... (4 entries)
+  "eternal_starlight:glowing_mossy_dusted_gravel"
   ... (7 entries)
+  "eternal_starlight:glowlis"
   ... (47 entries)
+  "eternal_starlight:jinglestem_button"
+  "eternal_starlight:jinglestem_chest_raft"
+  "eternal_starlight:jinglestem_door"
+  "eternal_starlight:jinglestem_fence"
+  "eternal_starlight:jinglestem_fence_gate"
+  "eternal_starlight:jinglestem_hanging_sign"
+  "eternal_starlight:jinglestem_leaves"
+  "eternal_starlight:jinglestem_log"
+  "eternal_starlight:jinglestem_planks"
+  "eternal_starlight:jinglestem_pressure_plate"
+  "eternal_starlight:jinglestem_raft"
+  "eternal_starlight:jinglestem_sapling"
+  "eternal_starlight:jinglestem_sign"
+  "eternal_starlight:jinglestem_slab"
+  "eternal_starlight:jinglestem_stairs"
+  "eternal_starlight:jinglestem_trapdoor"
+  "eternal_starlight:jinglestem_wood"
   ... (12 entries)
+  "eternal_starlight:lumenstem"
   ... (3 entries)
+  "eternal_starlight:luminis"
   ... (42 entries)
+  "eternal_starlight:marimold"
   ... (6 entries)
+  "eternal_starlight:moonlight_bush"
   ... (4 entries)
+  "eternal_starlight:mossy_dusted_gravel"
   ... (144 entries)
+  "eternal_starlight:raw_amaramber_block"
+  "eternal_starlight:red_crystal_moss_block"
   ... (83 entries)
+  "eternal_starlight:starlight_seagrass"
   ... (10 entries)
+  "eternal_starlight:stonett"
+  "eternal_starlight:stripped_jinglestem_log"
+  "eternal_starlight:stripped_jinglestem_wood"
   ... (90 entries)
+  "eternal_starlight:torreya_tile_slab"
+  "eternal_starlight:torreya_tile_stairs"
+  "eternal_starlight:torreya_tile_wall"
+  "eternal_starlight:torreya_tiles"
   ... (44 entries)
+  "eternal_starlight:wilted_crossbow"
   ... (292 entries)
+  "extended_industrialization:looting_module"
   ... (28 entries)
+  "extended_industrialization:robot_auto_feeder"
   ... (87 entries)
+  "extendedae:quartz_blend"
   ... (7706 entries)
+  "mifa:efficiency_addon_5"
+  "mifa:efficiency_addon_6"
+  "mifa:efficiency_addon_7"
+  "mifa:efficiency_addon_8"
   ... (3 entries)
+  "mifa:processing_addon_5"
+  "mifa:processing_addon_6"
+  "mifa:processing_addon_7"
+  "mifa:processing_addon_8"
   ... (2 entries)
+  "mifa:speed_addon_5"
+  "mifa:speed_addon_6"
+  "mifa:speed_addon_7"
+  "mifa:speed_addon_8"
   ... (6242 entries)
+  "productivemetalworks:meat_nugget"
   ... (3 entries)
+  "productivemetalworks:molten_blaze_bucket"
   ... (19 entries)
+  "productivemetalworks:molten_magma_cream_bucket"
   ... (8 entries)
+  "productivemetalworks:molten_shulker_shell_bucket"
   ... (2 entries)
+  "productivemetalworks:molten_slime_bucket"
   ... (8467 entries)
+  "supplementaries:eternal_starlight/way_sign_jinglestem"
   ... (3170 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (52 entries)
+  "eternal_starlight:flammable"
   ... (200 entries)
 ]

```


</details>

<details>
<summary>recipe_type</summary>

```diff
 [
   ... (228 entries)
-  "productivemetalworks:sg_gear_casting"
   ... (63 entries)
 ]

```


</details>

<details>
<summary>worldgen/biome</summary>

```diff
 [
   ... (76 entries)
+  "eternal_starlight:lush_shallow_sea"
   ... (199 entries)
 ]

```


</details>

<details>
<summary>worldgen/feature</summary>

```diff
 [
   ... (27 entries)
+  "eternal_starlight:block_patch"
   ... (11 entries)
-  "eternal_starlight:kelp"
+  "eternal_starlight:jinglestem"
   ... (3 entries)
-  "eternal_starlight:spiral_kelp"
   ... (6 entries)
+  "eternal_starlight:water_plant"
   ... (305 entries)
 ]

```


</details>

<details>
<summary>worldgen/placed_feature</summary>

```diff
 [
   ... (327 entries)
+  "eternal_starlight:blue_crystal_moss_patch"
   ... (34 entries)
+  "eternal_starlight:jinglestem_checked"
+  "eternal_starlight:jinglestem_forest"
+  "eternal_starlight:lumenstem"
   ... (3 entries)
+  "eternal_starlight:lush_shallow_sea_vegetation"
   ... (7 entries)
+  "eternal_starlight:red_crystal_moss_patch"
   ... (1531 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (81)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:black_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/black_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/black_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:black_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/black_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:blue_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/blue_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/blue_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:blue_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/blue_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:brown_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/brown_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/brown_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:brown_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/brown_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:cyan_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/cyan_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/cyan_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:cyan_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/cyan_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:gray_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/gray_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/gray_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:gray_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/gray_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:green_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/green_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/green_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:green_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/green_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_blue_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_blue_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_blue_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_blue_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_blue_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_gray_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_gray_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/light_gray_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:light_gray_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/light_gray_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:lime_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/lime_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/lime_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:lime_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/lime_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:magenta_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/magenta_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/magenta_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:magenta_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/magenta_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:orange_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/orange_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/orange_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:orange_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/orange_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:pink_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/pink_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/pink_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:pink_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/pink_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:purple_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/purple_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/purple_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:purple_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/purple_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:red_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/red_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/red_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:red_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/red_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:white_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/white_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/white_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:white_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/white_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_bordered_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:yellow_bordered_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/yellow_bordered_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/crystalix/blocks/yellow_clear_crystalix_glass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "crystalix:yellow_clear_crystalix_glass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "crystalix:blocks/yellow_clear_crystalix_glass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_brick_slab</summary>

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
+              add: false
+              conditions: [
+                {
+                  block: "eternal_starlight:amaramber_brick_slab"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "eternal_starlight:amaramber_brick_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_brick_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_brick_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_brick_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_brick_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_brick_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_bricks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_bricks"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_bricks"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_fire</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "eternal_starlight:blocks/amaramber_fire"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_grass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_grass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_grass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/amaramber_grass_bush</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_grass_bush"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/amaramber_grass_bush"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/blue_crystal_moss_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:blue_crystal_moss_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/blue_crystal_moss_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/circulush</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:circulush"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/circulush"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/glacite_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:glacite_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/glacite_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/gloreed</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:gloreed"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/gloreed"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/glowing_mossy_dusted_gravel</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:alternatives"
+          children: [
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    predicates: {
+                      minecraft:enchantments: [
+                        {
+                          enchantments: "minecraft:silk_touch"
+                          levels: {
+                            min: 1
+                          }
+                        }
+                      ]
+                    }
+                  }
+                }
+              ]
+              name: "eternal_starlight:glowing_mossy_dusted_gravel"
+            }
+            {
+              type: "minecraft:alternatives"
+              children: [
+                {
+                  type: "minecraft:item"
+                  conditions: [
+                    {
+                      chances: [
+                        0.1
+                        0.14285715
+                        0.25
+                        1
+                      ]
+                      condition: "minecraft:table_bonus"
+                      enchantment: "minecraft:fortune"
+                    }
+                  ]
+                  name: "eternal_starlight:dusted_shard"
+                }
+                {
+                  type: "minecraft:item"
+                  name: "eternal_starlight:dusted_gravel"
+                }
+              ]
+              conditions: [
+                {
+                  condition: "minecraft:survives_explosion"
+                }
+              ]
+            }
+          ]
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/glowing_mossy_dusted_gravel"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/glowlis</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:glowlis"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/glowlis"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_button</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_button"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_button"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_door</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              block: "eternal_starlight:jinglestem_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "eternal_starlight:jinglestem_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_fence_gate</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_leaves</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:alternatives"
+          children: [
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:any_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "minecraft:shears"
+                      }
+                    }
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        predicates: {
+                          minecraft:enchantments: [
+                            {
+                              enchantments: "minecraft:silk_touch"
+                              levels: {
+                                min: 1
+                              }
+                            }
+                          ]
+                        }
+                      }
+                    }
+                  ]
+                }
+              ]
+              name: "eternal_starlight:jinglestem_leaves"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:survives_explosion"
+                }
+                {
+                  chances: [
+                    0.05
+                    0.0625
+                    0.083333336
+                    0.1
+                  ]
+                  condition: "minecraft:table_bonus"
+                  enchantment: "minecraft:fortune"
+                }
+              ]
+              name: "eternal_starlight:jinglestem_sapling"
+            }
+          ]
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:inverted"
+          term: {
+            condition: "minecraft:any_of"
+            terms: [
+              {
+                condition: "minecraft:match_tool"
+                predicate: {
+                  items: "minecraft:shears"
+                }
+              }
+              {
+                condition: "minecraft:match_tool"
+                predicate: {
+                  predicates: {
+                    minecraft:enchantments: [
+                      {
+                        enchantments: "minecraft:silk_touch"
+                        levels: {
+                          min: 1
+                        }
+                      }
+                    ]
+                  }
+                }
+              }
+            ]
+          }
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chances: [
+                0.02
+                0.022222223
+                0.025
+                0.033333335
+                0.1
+              ]
+              condition: "minecraft:table_bonus"
+              enchantment: "minecraft:fortune"
+            }
+          ]
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
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "minecraft:stick"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_leaves"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_leaves_plant</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:alternatives"
+          children: [
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:any_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "minecraft:shears"
+                      }
+                    }
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        predicates: {
+                          minecraft:enchantments: [
+                            {
+                              enchantments: "minecraft:silk_touch"
+                              levels: {
+                                min: 1
+                              }
+                            }
+                          ]
+                        }
+                      }
+                    }
+                  ]
+                }
+              ]
+              name: "eternal_starlight:jinglestem_leaves"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:survives_explosion"
+                }
+                {
+                  chances: [
+                    0.05
+                    0.0625
+                    0.083333336
+                    0.1
+                  ]
+                  condition: "minecraft:table_bonus"
+                  enchantment: "minecraft:fortune"
+                }
+              ]
+              name: "eternal_starlight:jinglestem_sapling"
+            }
+          ]
+        }
+      ]
+      rolls: 1
+    }
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:inverted"
+          term: {
+            condition: "minecraft:any_of"
+            terms: [
+              {
+                condition: "minecraft:match_tool"
+                predicate: {
+                  items: "minecraft:shears"
+                }
+              }
+              {
+                condition: "minecraft:match_tool"
+                predicate: {
+                  predicates: {
+                    minecraft:enchantments: [
+                      {
+                        enchantments: "minecraft:silk_touch"
+                        levels: {
+                          min: 1
+                        }
+                      }
+                    ]
+                  }
+                }
+              }
+            ]
+          }
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          conditions: [
+            {
+              chances: [
+                0.02
+                0.022222223
+                0.025
+                0.033333335
+                0.1
+              ]
+              condition: "minecraft:table_bonus"
+              enchantment: "minecraft:fortune"
+            }
+          ]
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
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "minecraft:stick"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_leaves_plant"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_log</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_log"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_log"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_planks</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_planks"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_planks"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_pressure_plate</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_pressure_plate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_pressure_plate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_sapling</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_sapling"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_sapling"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_slab</summary>

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
+              add: false
+              conditions: [
+                {
+                  block: "eternal_starlight:jinglestem_slab"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "eternal_starlight:jinglestem_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_trapdoor</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_trapdoor"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_trapdoor"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_wall_hanging_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_hanging_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_wall_hanging_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_wall_sign</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_sign"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_wall_sign"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/jinglestem_wood</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_wood"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/jinglestem_wood"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/lumenstem</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:lumenstem"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/lumenstem"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/lumenstem_plant</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:lumenstem"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/lumenstem_plant"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/luminis</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:luminis"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/luminis"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/marimold</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:marimold"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/marimold"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/moonlight_bush</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:moonlight_bush"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/moonlight_bush"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/mossy_dusted_gravel</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:alternatives"
+          children: [
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    predicates: {
+                      minecraft:enchantments: [
+                        {
+                          enchantments: "minecraft:silk_touch"
+                          levels: {
+                            min: 1
+                          }
+                        }
+                      ]
+                    }
+                  }
+                }
+              ]
+              name: "eternal_starlight:mossy_dusted_gravel"
+            }
+            {
+              type: "minecraft:alternatives"
+              children: [
+                {
+                  type: "minecraft:item"
+                  conditions: [
+                    {
+                      chances: [
+                        0.1
+                        0.14285715
+                        0.25
+                        1
+                      ]
+                      condition: "minecraft:table_bonus"
+                      enchantment: "minecraft:fortune"
+                    }
+                  ]
+                  name: "eternal_starlight:dusted_shard"
+                }
+                {
+                  type: "minecraft:item"
+                  name: "eternal_starlight:dusted_gravel"
+                }
+              ]
+              conditions: [
+                {
+                  condition: "minecraft:survives_explosion"
+                }
+              ]
+            }
+          ]
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/mossy_dusted_gravel"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/potted_amaramber_grass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:flower_pot"
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
+          type: "minecraft:item"
+          name: "eternal_starlight:amaramber_grass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/potted_amaramber_grass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/potted_jinglestem_sapling</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "minecraft:flower_pot"
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
+          type: "minecraft:item"
+          name: "eternal_starlight:jinglestem_sapling"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/potted_jinglestem_sapling"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/raw_amaramber_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:raw_amaramber_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/raw_amaramber_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/red_crystal_moss_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:red_crystal_moss_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/red_crystal_moss_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/starlight_seagrass</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:starlight_seagrass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/starlight_seagrass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/stonett</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:any_of"
+          terms: [
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "minecraft:shears"
+              }
+            }
+            {
+              condition: "minecraft:match_tool"
+              predicate: {
+                items: "#eternal_starlight:sickles"
+              }
+            }
+          ]
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:stonett"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/stonett"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/stripped_jinglestem_log</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:stripped_jinglestem_log"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/stripped_jinglestem_log"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/stripped_jinglestem_wood</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:stripped_jinglestem_wood"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/stripped_jinglestem_wood"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/torreya_tile_slab</summary>

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
+              add: false
+              conditions: [
+                {
+                  block: "eternal_starlight:torreya_tile_slab"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    type: "double"
+                  }
+                }
+              ]
+              count: 2
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "eternal_starlight:torreya_tile_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/torreya_tile_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/torreya_tile_stairs</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:torreya_tile_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/torreya_tile_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/torreya_tile_wall</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:torreya_tile_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/torreya_tile_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/torreya_tiles</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:torreya_tiles"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/torreya_tiles"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/orbflora_plant</summary>

```diff
 {
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:orbflora"
+        }
+      ]
+      rolls: 1
+    }
+  ]
   type: "minecraft:block"
   random_sequence: "eternal_starlight:blocks/orbflora_plant"
 }

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/spiral_kelp_plant</summary>

```diff
 {
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "eternal_starlight:spiral_kelp"
+        }
+      ]
+      rolls: 1
+    }
+  ]
   type: "minecraft:block"
   random_sequence: "eternal_starlight:blocks/spiral_kelp_plant"
 }

```


</details>

</blockquote>

</details>

