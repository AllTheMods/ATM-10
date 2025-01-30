# Changelog

# 📦 2.26

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (6)</summary>

- Embeddium (1.0.11+mc1.21.1)
- Flux Networks (8.0.0)
- memorysettings mod (5.6)
- Monocle (0.1.8)
- Nolijium (0.5.1)
- Nuggets (1.0.4.35)

</details>

<details>
<summary>Updated (41)</summary>

- Allthemodium (2.8.6) -> (2.8.7)
- AllTheTweaks (2.5.0) -> (2.5.2)
- All the Wizard Gear (1.21-1.1.8) -> (1.21-1.1.9)
- Ars Nouveau (5.3.6) -> (5.4.0)
- Oh The Biomes We've Gone (2.3.1) -> (2.3.2)
- Bookshelf (21.1.37) -> (21.1.41)
- Crash Assistant (1.2.12) -> (1.2.18)
- Eternal Starlight (0.2.3+1.21.1+neoforge) -> (0.3.0+1.21.1+neoforge)
- EvilCraft (1.2.63) -> (1.2.64)
- EvilCraft-Compat (1.2.63) -> (1.2.64)
- ExtendedAE (1.21-2.1.9-neoforge) -> (1.21-2.1.10-neoforge)
- FTB Essentials (2101.1.2) -> (2101.1.4)
- Fusion (1.2.2) -> (1.2.3)
- Fzzy Config (0.6.0+1.21+neoforge) -> (0.6.2+1.21+neoforge)
- IntegratedScripting (1.0.12) -> (1.0.14)
- IntegratedTerminals (1.6.6) -> (1.6.7)
- IntegratedTerminalsCompat (1.6.6) -> (1.0.0)
- Just Dire Things (1.5.1) -> (1.5.2)
- Lootr (1.21-1.10.34.87) -> (1.21-1.10.34.88)
- MEGA Cells (4.4.0) -> (4.5.0)
- Modular Force Field System (5.4.6) -> (5.4.12)
- MineColonies (1.1.847-1.21.1-snapshot) -> (1.1.857-1.21.1-snapshot)
- Modern Industrialization (2.2.31) -> (2.2.32)
- Moonlight Lib (1.21-2.17.12) -> (1.21-2.17.17)
- NeoForge (21.1.95) -> (21.1.97)
- Occultism (1.172.0) -> (1.173.1)
- Placebo (9.6.4) -> (9.6.5)
- RAR-Compat (0.8.4.1) -> (0.8.5)
- Redstone Pen (1.11.41) -> (1.11.42)
- Relics (0.10.2) -> (0.10.3)
- Rhino (2101.2.6-build.58) -> (2101.2.6-build.66)
- Showcase Item (1.21-1.0.0) -> (1.21-1.0.1)
- SmartBrainLib (1.16.2) -> (1.16.7)
- Sophisticated Backpacks (3.22.4) -> (3.22.5)
- Sophisticated Core (1.1.3) -> (1.1.5)
- Sophisticated Storage (1.2.4) -> (1.2.6)
- Sophisticated Storage In Motion (0.7.4) -> (0.10.0)
- Supplementaries (1.21-3.0.30-beta) -> (1.21-3.0.33-beta)
- Tesseract API (1.6.5-beta-1.21.1) -> (1.6.6-beta-1.21.1)
- The Bumblezone (7.7.14+1.21.1-neoforge) -> (7.7.15+1.21.1-neoforge)
- Utilitarian (1.21.1-0.13.4) -> (1.21.1-0.13.5)

</details>

<details open>
<summary>Removed (4)</summary>

- EntityCulling (1.7.2)
- Reese's Sodium Options (1.8.3+mc1.21.4)
- Sodium (0.6.5+mc1.21.1)
- Sodium Extra (0.6.0+mc1.21.1)

</details>

## 🍳 Recipes

<details>
<summary>Added (94)</summary>
<blockquote>

<details>
<summary>allthemods/essence/xycraft/gem_blue</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "xycraft_world:xychorium_gem_blue"
+    count: 5
+  }
+  pattern: [
+    " X "
+    " X "
+    " X "
+  ]
+  key: {
+    X: {
+      item: "mysticalagriculture:xychorium_gem_essence"
+    }
+  }
+  kubejs:mirror: false
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/essence/xycraft/gem_dark</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "xycraft_world:xychorium_gem_dark"
+    count: 5
+  }
+  pattern: [
+    " XX"
+    "  X"
+    "   "
+  ]
+  key: {
+    X: {
+      item: "mysticalagriculture:xychorium_gem_essence"
+    }
+  }
+  kubejs:mirror: false
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/essence/xycraft/gem_green</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "xycraft_world:xychorium_gem_green"
+    count: 5
+  }
+  pattern: [
+    "   "
+    "  X"
+    " XX"
+  ]
+  key: {
+    X: {
+      item: "mysticalagriculture:xychorium_gem_essence"
+    }
+  }
+  kubejs:mirror: false
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/essence/xycraft/gem_light</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "xycraft_world:xychorium_gem_light"
+    count: 5
+  }
+  pattern: [
+    "XX "
+    "X  "
+    "   "
+  ]
+  key: {
+    X: {
+      item: "mysticalagriculture:xychorium_gem_essence"
+    }
+  }
+  kubejs:mirror: false
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/essence/xycraft/gem_red</summary>

```diff
+{
+  type: "kubejs:shaped"
+  result: {
+    id: "xycraft_world:xychorium_gem_red"
+    count: 5
+  }
+  pattern: [
+    "   "
+    "X  "
+    "XX "
+  ]
+  key: {
+    X: {
+      item: "mysticalagriculture:xychorium_gem_essence"
+    }
+  }
+  kubejs:mirror: false
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>allthemods/immersiveengineering/cloche/mysticalagriculture/xychorium_gem</summary>

```diff
+{
+  type: "immersiveengineering:cloche"
+  results: [
+    {
+      basePredicate: {
+        item: "mysticalagriculture:xychorium_gem_essence"
+      }
+      count: 2
+    }
+  ]
+  input: {
+    item: "mysticalagriculture:xychorium_gem_seeds"
+  }
+  soil: {
+    tag: "kubejs:farmland/tertium"
+  }
+  time: 2500
+  render: {
+    type: "immersiveengineering:crop"
+    block: "mysticalagriculture:xychorium_gem_crop"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>alltheores/processing/ore_hammer/allthemodium_dust_from_ingot</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "allthemodium:allthemodium_dust"
+    count: 1
+  }
+  ingredients: [
+    {
+      tag: "c:ingots/allthemodium"
+    }
+    {
+      tag: "alltheores:ore_hammers"
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>almostunified/fluxnetworks</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "fluxnetworks"
+  recipes: [
+    "1$flux_point"
+  ]
+}

```


</details>

<details>
<summary>ars_nouveau/reactive_1</summary>

```diff
+{
+  type: "ars_nouveau:reactive_enchantment"
+  pedestalItems: [
+    {
+      item: "ars_nouveau:spell_parchment"
+    }
+    {
+      tag: "c:storage_blocks/lapis"
+    }
+    {
+      tag: "c:storage_blocks/source"
+    }
+  ]
+  sourceCost: 3000
+}

```


</details>

<details>
<summary>ars_nouveau/tomes/bugcolez_tome</summary>

```diff
+{
+  type: "ars_nouveau:caster_tome"
+  color: {
+    b: 180
+    g: 25
+    id: "ars_nouveau:constant"
+    r: 255
+  }
+  flavour_text: "Their Friends are their power!"
+  name: "Pixie Pummel"
+  sound: {
+    pitch: 1.9
+  }
+  spell: [
+    "ars_nouveau:glyph_self"
+    "ars_nouveau:glyph_summon_vex"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+    "ars_nouveau:glyph_extend_time"
+  ]
+  tome_type: "ars_nouveau:caster_tome"
+}

```


</details>

<details>
<summary>biomeswevegone/red_wool_from_rose_petal_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+    {
+      item: "biomeswevegone:rose_petal_block"
+    }
+  ]
+  result: {
+    count: 1
+    id: "minecraft:red_wool"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/air_sac_arrow</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    D: {
+      item: "eternal_starlight:dusted_shard"
+    }
+    S: {
+      tag: "c:rods/wooden"
+    }
+    T: {
+      item: "eternal_starlight:tower_squid_air_sac"
+    }
+  }
+  pattern: [
+    "D"
+    "S"
+    "T"
+  ]
+  result: {
+    count: 4
+    id: "eternal_starlight:air_sac_arrow"
+  }
+}

```


</details>

<details>
<summary>eternal_starlight/air_sac_boots</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "equipment"
+  key: {
+    #: {
+      item: "eternal_starlight:tower_squid_air_sac"
+    }
+  }
+  pattern: [
+    "# #"
+    "# #"
+  ]
+  result: {
+    count: 1
+    id: "eternal_starlight:air_sac_boots"
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/basic_flux_storage</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "bbb"
+    "g g"
+    "bbb"
+  ]
+  key: {
+    b: {
+      item: "fluxnetworks:flux_block"
+    }
+    g: {
+      tag: "c:glass_panes"
+    }
+  }
+  result: {
+    id: "fluxnetworks:basic_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_block</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "fcf"
+    "cfc"
+    "fcf"
+  ]
+  key: {
+    c: {
+      item: "fluxnetworks:flux_core"
+    }
+    f: {
+      item: "fluxnetworks:flux_dust"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_block"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_configurator</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    " fe"
+    " of"
+    "o  "
+  ]
+  key: {
+    o: {
+      item: "minecraft:obsidian"
+    }
+    f: {
+      item: "fluxnetworks:flux_dust"
+    }
+    e: {
+      item: "minecraft:ender_eye"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_configurator"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_controller</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "bcb"
+    "f f"
+    "bbb"
+  ]
+  key: {
+    c: {
+      item: "fluxnetworks:flux_core"
+    }
+    b: {
+      item: "fluxnetworks:flux_block"
+    }
+    f: {
+      item: "fluxnetworks:flux_dust"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_controller"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_core</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "fof"
+    "oeo"
+    "fof"
+  ]
+  key: {
+    o: {
+      item: "minecraft:obsidian"
+    }
+    f: {
+      item: "fluxnetworks:flux_dust"
+    }
+    e: {
+      item: "minecraft:ender_eye"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_core"
+    count: 4
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_plug</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    " c "
+    "cbc"
+    " c "
+  ]
+  key: {
+    c: {
+      item: "fluxnetworks:flux_core"
+    }
+    b: {
+      item: "fluxnetworks:flux_block"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_plug"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/flux_point</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    " c "
+    "cbc"
+    " c "
+  ]
+  key: {
+    c: {
+      item: "fluxnetworks:flux_core"
+    }
+    b: {
+      tag: "c:storage_blocks/redstone"
+    }
+  }
+  result: {
+    id: "fluxnetworks:flux_point"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/gargantuan_flux_storage</summary>

```diff
+{
+  type: "fluxnetworks:flux_storage_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "bbb"
+    "g g"
+    "bbb"
+  ]
+  key: {
+    b: {
+      item: "fluxnetworks:herculean_flux_storage"
+    }
+    g: {
+      tag: "c:glass_panes"
+    }
+  }
+  result: {
+    id: "fluxnetworks:gargantuan_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/herculean_flux_storage</summary>

```diff
+{
+  type: "fluxnetworks:flux_storage_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  pattern: [
+    "bbb"
+    "g g"
+    "bbb"
+  ]
+  key: {
+    b: {
+      item: "fluxnetworks:basic_flux_storage"
+    }
+    g: {
+      tag: "c:glass_panes"
+    }
+  }
+  result: {
+    id: "fluxnetworks:herculean_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_basic_flux_storage</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:basic_flux_storage"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:basic_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_flux_controller</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:flux_controller"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:flux_controller"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_flux_plug</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:flux_plug"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:flux_plug"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_flux_point</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:flux_point"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:flux_point"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_gargantuan_flux_storage</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:gargantuan_flux_storage"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:gargantuan_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>fluxnetworks/wipe_herculean_flux_storage</summary>

```diff
+{
+  type: "fluxnetworks:config_wipe_recipe"
+  category: "misc"
+  group: "fluxnetworks"
+  ingredients: [
+    {
+      item: "fluxnetworks:herculean_flux_storage"
+    }
+  ]
+  result: {
+    id: "fluxnetworks:herculean_flux_storage"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>minecraft/kjs/honey_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "minecraft:honey_block"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+    {
+      item: "mysticalagriculture:honey_essence"
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>minecraft/kjs/potion</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  result: {
+    id: "minecraft:potion"
+    count: 1
+    components: {
+      minecraft:potion_contents: {
+        potion: "minecraft:water"
+      }
+    }
+  }
+  ingredients: [
+    {
+      item: "minecraft:glass_bottle"
+    }
+    {
+      item: "mysticalagriculture:water_essence"
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>mysticalagriculture/kjs/arw7xuht5ksu4q5s3u2zvepgg</summary>

```diff
+{
+  type: "mysticalagriculture:soul_extraction"
+  input: {
+    tag: "c:foods/raw_fish"
+  }
+  result: {
+    type: "mysticalagriculture:fish"
+    souls: 0.5
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>productivebees/bee_produce/fluxnetworks/flux_bee</summary>

```diff
+{
+  type: "productivebees:advanced_beehive"
+  ingredient: "productivebees:flux"
+  results: [
+    {
+      item: {
+        type: "productivebees:component"
+        components: {
+          productivebees:bee_type: "productivebees:flux"
+        }
+        items: "productivebees:configurable_honeycomb"
+      }
+    }
+    {
+      item: {
+        tag: "c:pollens"
+      }
+      chance: 0.05
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "productivebees:bee_exists"
+      bee: "productivebees:flux"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivebees/centrifuge/fluxnetworks/honeycomb_flux</summary>

```diff
+{
+  type: "productivebees:centrifuge"
+  ingredient: {
+    type: "productivebees:component"
+    components: {
+      productivebees:bee_type: "productivebees:flux"
+    }
+    items: "productivebees:configurable_honeycomb"
+  }
+  outputs: [
+    {
+      item: {
+        item: "fluxnetworks:flux_dust"
+      }
+      chance: 0.5
+    }
+    {
+      item: {
+        item: "productivebees:wax"
+      }
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "fluxnetworks"
+    }
+    {
+      type: "productivebees:bee_exists"
+      bee: "productivebees:flux"
+    }
+  ]
+}

```


</details>

<details>
<summary>productivebees/item_conversion/fluxnetworks/flux_bee</summary>

```diff
+{
+  type: "productivebees:item_conversion"
+  bees: [
+    "productivebees:obsidian"
+  ]
+  ingredients: [
+    {
+      type: "productivebees:component"
+      components: {
+        minecraft:entity_data: {
+          type: "productivebees:redstone"
+          id: "productivebees:configurable_bee"
+        }
+      }
+      items: "productivebees:spawn_egg_configurable_bee"
+    }
+  ]
+  result: {
+    components: {
+      minecraft:entity_data: {
+        type: "productivebees:flux"
+        id: "productivebees:configurable_bee"
+      }
+    }
+    count: 1
+    id: "productivebees:spawn_egg_configurable_bee"
+  }
+  neoforge:conditions: [
+    {
+      type: "productivebees:bee_exists"
+      bee: "productivebees:flux"
+    }
+    {
+      type: "productivebees:bee_exists"
+      bee: "productivebees:redstone"
+    }
+    {
+      type: "productivebees:bee_exists"
+      bee: "productivebees:obsidian"
+    }
+  ]
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/acacia_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:acacia_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "acacia"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/acacia_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:acacia_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "acacia"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/bamboo_storage_raft</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:bamboo_raft"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "bamboo"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/bamboo_storage_raft_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:bamboo_chest_raft"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "bamboo"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/birch_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:birch_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "birch"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/birch_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:birch_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "birch"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/cherry_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:cherry_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "cherry"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/cherry_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:cherry_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "cherry"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/dark_oak_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:dark_oak_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "dark_oak"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/dark_oak_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:dark_oak_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "dark_oak"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/jungle_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:jungle_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "jungle"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/jungle_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:jungle_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "jungle"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/mangrove_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:mangrove_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "mangrove"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/mangrove_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:mangrove_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "mangrove"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/oak_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:oak_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "oak"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/oak_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:oak_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "oak"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/spruce_storage_boat</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_from_storage"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:spruce_boat"
+    }
+    {
+      tag: "sophisticatedstorage:all_storage"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "spruce"
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/spruce_storage_boat_from_vanilla</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "minecraft:spruce_chest_boat"
+    }
+    {
+      item: "minecraft:redstone_torch"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:boat_type: "spruce"
+      sophisticatedstorageinmotion:storage_item: {
+        components: {
+          sophisticatedstorage:wood_type: "oak"
+        }
+        count: 1
+        id: "sophisticatedstorage:chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_barrel_to_copper_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:barrel"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:copper_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_barrel_to_iron_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:barrel"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_chest_to_copper_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:chest"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:copper_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_chest_to_iron_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:chest"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_copper_barrel_to_iron_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:copper_barrel"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_copper_chest_to_iron_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:copper_chest"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_copper_shulker_box_to_iron_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:copper_shulker_box"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_diamond_barrel_to_netherite_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:diamond_barrel"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:netherite_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_diamond_chest_to_netherite_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:diamond_chest"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:netherite_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_diamond_shulker_box_to_netherite_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:diamond_shulker_box"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:netherite_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_gold_barrel_to_diamond_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:gold_barrel"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:diamond_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_gold_chest_to_diamond_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:gold_chest"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:diamond_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_gold_shulker_box_to_diamond_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:gold_shulker_box"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:diamond_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_iron_barrel_to_gold_barrel</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:iron_barrel"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:gold_barrel"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_iron_chest_to_gold_chest</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:iron_chest"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:gold_chest"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_iron_shulker_box_to_gold_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:iron_shulker_box"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:gold_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_1_to_limited_copper_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_1"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_copper_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_1_to_limited_iron_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_1"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_2_to_limited_copper_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_2"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_copper_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_2_to_limited_iron_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_2"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_3_to_limited_copper_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_3"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_copper_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_3_to_limited_iron_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_3"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_4_to_limited_copper_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_4"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_copper_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_barrel_4_to_limited_iron_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_barrel_4"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_copper_barrel_1_to_limited_iron_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_copper_barrel_1"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_copper_barrel_2_to_limited_iron_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_copper_barrel_2"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_copper_barrel_3_to_limited_iron_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_copper_barrel_3"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_copper_barrel_4_to_limited_iron_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_copper_barrel_4"
+    }
+  }
+  pattern: [
+    " M "
+    "MSM"
+    " M "
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_iron_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_diamond_barrel_1_to_limited_netherite_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_diamond_barrel_1"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_netherite_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_diamond_barrel_2_to_limited_netherite_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_diamond_barrel_2"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_netherite_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_diamond_barrel_3_to_limited_netherite_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_diamond_barrel_3"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_netherite_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_diamond_barrel_4_to_limited_netherite_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shapeless_recipe"
+  category: "misc"
+  ingredients: [
+    {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_diamond_barrel_4"
+    }
+    {
+      tag: "c:ingots/netherite"
+    }
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_netherite_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_gold_barrel_1_to_limited_diamond_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_gold_barrel_1"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_diamond_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_gold_barrel_2_to_limited_diamond_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_gold_barrel_2"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_diamond_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_gold_barrel_3_to_limited_diamond_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_gold_barrel_3"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_diamond_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_gold_barrel_4_to_limited_diamond_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:gems/diamond"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_gold_barrel_4"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_diamond_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_iron_barrel_1_to_limited_gold_barrel_1</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_iron_barrel_1"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_gold_barrel_1"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_iron_barrel_2_to_limited_gold_barrel_2</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_iron_barrel_2"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_gold_barrel_2"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_iron_barrel_3_to_limited_gold_barrel_3</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_iron_barrel_3"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_gold_barrel_3"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_limited_iron_barrel_4_to_limited_gold_barrel_4</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/gold"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:limited_iron_barrel_4"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:limited_gold_barrel_4"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_shulker_box_to_copper_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/copper"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:shulker_box"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:copper_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

<details>
<summary>sophisticatedstorageinmotion/storage_boat_with_shulker_box_to_iron_shulker_box</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "sophisticatedcore:item_enabled"
+      itemRegistryName: "sophisticatedstorageinmotion:storage_boat"
+    }
+  ]
+  type: "sophisticatedstorageinmotion:moving_storage_tier_upgrade_shaped_recipe"
+  category: "misc"
+  key: {
+    M: {
+      tag: "c:ingots/iron"
+    }
+    S: {
+      type: "sophisticatedstorageinmotion:moving_storage"
+      moving_storage_item: "sophisticatedstorageinmotion:storage_boat"
+      storage_item: "sophisticatedstorage:shulker_box"
+    }
+  }
+  pattern: [
+    "MMM"
+    "MSM"
+    "MMM"
+  ]
+  result: {
+    components: {
+      sophisticatedstorageinmotion:storage_item: {
+        count: 1
+        id: "sophisticatedstorage:iron_shulker_box"
+      }
+    }
+    count: 1
+    id: "sophisticatedstorageinmotion:storage_boat"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (13)</summary>
<blockquote>

<details>
<summary>almostunified/modern_industrialization</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "modern_industrialization"
   recipes: [
     "1$alloy/mixer/bronze/dust"
     "1$alloy/mixer/electrum/dust"
     "1$alloy/mixer/invar/dust"
     "1$assembler_generated/electric_age/battery/lv_battery"
     "1$assembler_generated/electric_age/component/craft/redstone_control_module"
     "1$assembler_generated/steam_age/bronze/cutting_machine"
     "1$assembler_generated/steam_age/bronze/macerator"
     "1$assembler_generated/vanilla_recipes/steel_anvil"
     "1$compat/ae2/mixer/fluix"
     "1$compat/mekanism/osmium_ingot_to_dust"
     "1$compat/mekanism/osmium_ore_to_raw"
     "1$compat/mekanism/quarry/digital_miner"
     "1$compat/mekanism/raw_osmium_to_dust"
     "1$electric_age/battery/lv_battery_asbl"
     "1$electric_age/component/craft/redstone_control_module_asbl"
     "1$electric_age/component/craft/steel_rod_magnetic"
     "1$forge_hammer"
     "1$materials/aluminum/assembler/gear"
     "1$materials/aluminum/blast_furnace/dust"
     "1$materials/aluminum/blast_furnace/tiny_dust"
     "1$materials/aluminum/compressor/double_ingot"
     "1$materials/aluminum/compressor/main"
     "1$materials/aluminum/craft/dust_from_tiny_dust"
     "1$materials/aluminum/craft/gear"
     "1$materials/aluminum/craft/tiny_dust_from_dust"
     "1$materials/aluminum/cutting_machine/double_ingot"
     "1$materials/aluminum/cutting_machine/main"
     "1$materials/aluminum/macerator/curved_plate"
     "1$materials/aluminum/macerator/double_ingot"
     "1$materials/aluminum/macerator/gear"
     "1$materials/aluminum/macerator/ingot"
     "1$materials/aluminum/macerator/large_plate"
     "1$materials/aluminum/macerator/plate"
     "1$materials/aluminum/macerator/rotor"
     "1$materials/aluminum/packer/block"
     "1$materials/aluminum/packer/dust"
     "1$materials/aluminum/packer/ingot"
     "1$materials/aluminum/unpacker/ingot"
     "1$materials/aluminum/unpacker/nugget"
     "1$materials/antimony/craft/block_from_ingot"
     "1$materials/antimony/craft/deepslate_to_ore"
     "1$materials/antimony/craft/ingot_from_block"
     "1$materials/antimony/craft/ingot_from_nugget"
     "1$materials/antimony/craft/nugget_from_ingot"
     "1$materials/antimony/craft/raw_metal_block_from_raw_metal"
     "1$materials/antimony/craft/raw_metal_from_raw_metal_block"
     "1$materials/antimony/craft/tiny_dust_from_dust"
     "1$materials/antimony/smelting/dust_to_ingot_blasting"
     "1$materials/antimony/smelting/dust_to_ingot_smelting"
     "1$materials/antimony/smelting/raw_metal_to_ingot_blasting"
     "1$materials/antimony/smelting/raw_metal_to_ingot_smelting"
     "1$materials/blast_furnace/bauxite_to_aluminum_ingot"
     "1$materials/blast_furnace/bauxite_to_aluminum_nugget"
     "1$materials/blast_furnace/molten_redstone"
     "1$materials/blast_furnace/steel"
     "1$materials/blast_furnace/steel_with_carbon"
     "1$materials/bronze/assembler/gear"
     "1$materials/bronze/compressor/double_ingot"
     "1$materials/bronze/compressor/main"
     "1$materials/bronze/craft/dust_from_tiny_dust"
     "1$materials/bronze/craft/gear"
     "1$materials/bronze/craft/tiny_dust_from_dust"
     "1$materials/bronze/cutting_machine/double_ingot"
     "1$materials/bronze/cutting_machine/main"
     "1$materials/bronze/forge_hammer/double_ingot_to_plate"
     "1$materials/bronze/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/bronze/forge_hammer/double_ingot_to_rod"
     "1$materials/bronze/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/bronze/forge_hammer/ingot_to_dust"
     "1$materials/bronze/forge_hammer/ingot_to_plate"
     "1$materials/bronze/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/bronze/forge_hammer/ingot_to_rod"
     "1$materials/bronze/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/bronze/macerator/curved_plate"
     "1$materials/bronze/macerator/double_ingot"
     "1$materials/bronze/macerator/gear"
     "1$materials/bronze/macerator/ingot"
     "1$materials/bronze/macerator/plate"
     "1$materials/bronze/macerator/rotor"
     "1$materials/bronze/packer/block"
     "1$materials/bronze/packer/dust"
     "1$materials/bronze/packer/ingot"
     "1$materials/bronze/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/bronze/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/bronze/unpacker/ingot"
     "1$materials/bronze/unpacker/nugget"
     "1$materials/bronze_dust"
     "1$materials/centrifuge/chromium_crushed_dust"
     "1$materials/centrifuge/lignite_coal"
     "1$materials/centrifuge/manganese_crushed_dust"
     "1$materials/centrifuge/ruby_dust"
-    "1$materials/chemical_reactor/platinum_sulfuric_solution"
     "1$materials/coal/craft/deepslate_to_ore"
     "1$materials/coal/craft/dust_from_tiny_dust"
     "1$materials/coal/craft/tiny_dust_from_dust"
     "1$materials/coal/forge_hammer/crushed_dust_to_dust_with_tool"
     "1$materials/coal/forge_hammer/ore_to_dust_with_tool"
     "1$materials/coal/macerator/crushed_dust"
     "1$materials/coal/macerator/gem"
     "1$materials/coal/packer/dust"
     "1$materials/copper/assembler/gear"
     "1$materials/copper/compressor/double_ingot"
     "1$materials/copper/compressor/main"
     "1$materials/copper/craft/deepslate_to_ore"
     "1$materials/copper/craft/dust_from_tiny_dust"
     "1$materials/copper/craft/gear"
     "1$materials/copper/craft/tiny_dust_from_dust"
     "1$materials/copper/cutting_machine/double_ingot"
     "1$materials/copper/cutting_machine/main"
     "1$materials/copper/forge_hammer/double_ingot_to_plate"
     "1$materials/copper/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/copper/forge_hammer/double_ingot_to_rod"
     "1$materials/copper/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/copper/forge_hammer/ingot_to_dust"
     "1$materials/copper/forge_hammer/ingot_to_plate"
     "1$materials/copper/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/copper/forge_hammer/ingot_to_rod"
     "1$materials/copper/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/copper/forge_hammer/raw_metal_to_dust_with_tool"
     "1$materials/copper/macerator/curved_plate"
     "1$materials/copper/macerator/double_ingot"
     "1$materials/copper/macerator/gear"
     "1$materials/copper/macerator/ingot"
     "1$materials/copper/macerator/plate"
     "1$materials/copper/macerator/raw_metal"
     "1$materials/copper/macerator/rotor"
     "1$materials/copper/packer/dust"
     "1$materials/copper/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/copper/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/copper/unpacker/nugget"
     "1$materials/diamond/compressor/main"
     "1$materials/diamond/craft/deepslate_to_ore"
     "1$materials/diamond/craft/dust_from_tiny_dust"
     "1$materials/diamond/craft/tiny_dust_from_dust"
     "1$materials/diamond/macerator/crushed_dust"
     "1$materials/diamond/macerator/gem"
     "1$materials/diamond/macerator/large_plate"
     "1$materials/diamond/macerator/plate"
     "1$materials/diamond/packer/block"
     "1$materials/diamond/packer/dust"
     "1$materials/electrolyzer/bauxite"
     "1$materials/electrolyzer/beryllium_dust"
     "1$materials/electrolyzer/lapis"
     "1$materials/electrolyzer/sulfuric_acid"
     "1$materials/electrum/compressor/double_ingot"
     "1$materials/electrum/compressor/main"
     "1$materials/electrum/craft/dust_from_tiny_dust"
     "1$materials/electrum/craft/tiny_dust_from_dust"
     "1$materials/electrum/macerator/double_ingot"
     "1$materials/electrum/macerator/ingot"
     "1$materials/electrum/macerator/plate"
     "1$materials/electrum/packer/block"
     "1$materials/electrum/packer/dust"
     "1$materials/electrum/packer/ingot"
     "1$materials/electrum/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/electrum/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/electrum/unpacker/ingot"
     "1$materials/electrum/unpacker/nugget"
     "1$materials/emerald/compressor/main"
     "1$materials/emerald/craft/deepslate_to_ore"
     "1$materials/emerald/craft/dust_from_tiny_dust"
     "1$materials/emerald/craft/tiny_dust_from_dust"
     "1$materials/emerald/macerator/crushed_dust"
     "1$materials/emerald/macerator/gem"
     "1$materials/emerald/macerator/plate"
     "1$materials/emerald/packer/block"
     "1$materials/emerald/packer/dust"
     "1$materials/forge_hammer/copper_ore_to_dust_with_tool"
     "1$materials/gold/assembler/gear"
     "1$materials/gold/compressor/double_ingot"
     "1$materials/gold/compressor/main"
     "1$materials/gold/craft/deepslate_to_ore"
     "1$materials/gold/craft/dust_from_tiny_dust"
     "1$materials/gold/craft/gear"
     "1$materials/gold/craft/tiny_dust_from_dust"
     "1$materials/gold/cutting_machine/double_ingot"
     "1$materials/gold/cutting_machine/main"
     "1$materials/gold/forge_hammer/double_ingot_to_plate"
     "1$materials/gold/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/gold/forge_hammer/double_ingot_to_rod"
     "1$materials/gold/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/gold/forge_hammer/ingot_to_dust"
     "1$materials/gold/forge_hammer/ingot_to_plate"
     "1$materials/gold/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/gold/forge_hammer/ingot_to_rod"
     "1$materials/gold/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/gold/forge_hammer/ore_to_dust_with_tool"
     "1$materials/gold/forge_hammer/raw_metal_to_dust_with_tool"
     "1$materials/gold/macerator/curved_plate"
     "1$materials/gold/macerator/double_ingot"
     "1$materials/gold/macerator/gear"
     "1$materials/gold/macerator/ingot"
     "1$materials/gold/macerator/plate"
     "1$materials/gold/macerator/raw_metal"
     "1$materials/gold/packer/dust"
     "1$materials/implosion_compressor/iridium_plate"
     "1$materials/invar/assembler/gear"
     "1$materials/invar/compressor/double_ingot"
     "1$materials/invar/compressor/main"
     "1$materials/invar/craft/dust_from_tiny_dust"
     "1$materials/invar/craft/gear"
     "1$materials/invar/craft/tiny_dust_from_dust"
     "1$materials/invar/cutting_machine/double_ingot"
     "1$materials/invar/cutting_machine/main"
     "1$materials/invar/macerator/double_ingot"
     "1$materials/invar/macerator/gear"
     "1$materials/invar/macerator/ingot"
     "1$materials/invar/macerator/large_plate"
     "1$materials/invar/macerator/plate"
     "1$materials/invar/packer/block"
     "1$materials/invar/packer/dust"
     "1$materials/invar/packer/ingot"
     "1$materials/invar/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/invar/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/invar/unpacker/ingot"
     "1$materials/invar/unpacker/nugget"
     "1$materials/iridium/craft/deepslate_to_ore"
     "1$materials/iridium/craft/dust_from_tiny_dust"
     "1$materials/iridium/craft/tiny_dust_from_dust"
     "1$materials/iridium/macerator/curved_plate"
     "1$materials/iridium/macerator/ingot"
     "1$materials/iridium/macerator/ore_to_raw"
     "1$materials/iridium/macerator/plate"
     "1$materials/iridium/macerator/raw_metal"
     "1$materials/iridium/packer/block"
     "1$materials/iridium/packer/dust"
     "1$materials/iridium/packer/ingot"
     "1$materials/iridium/packer/raw_metal_block"
     "1$materials/iridium/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/iridium/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/iridium/unpacker/ingot"
     "1$materials/iridium/unpacker/nugget"
     "1$materials/iridium/unpacker/raw_metal"
     "1$materials/iron/assembler/gear"
     "1$materials/iron/compressor/double_ingot"
     "1$materials/iron/compressor/main"
     "1$materials/iron/craft/deepslate_to_ore"
     "1$materials/iron/craft/dust_from_tiny_dust"
     "1$materials/iron/craft/gear"
     "1$materials/iron/craft/tiny_dust_from_dust"
     "1$materials/iron/cutting_machine/double_ingot"
     "1$materials/iron/cutting_machine/main"
     "1$materials/iron/forge_hammer/double_ingot_to_plate"
     "1$materials/iron/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/iron/forge_hammer/double_ingot_to_rod"
     "1$materials/iron/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/iron/forge_hammer/ingot_to_dust"
     "1$materials/iron/forge_hammer/ingot_to_plate"
     "1$materials/iron/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/iron/forge_hammer/ingot_to_rod"
     "1$materials/iron/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/iron/forge_hammer/ore_to_dust_with_tool"
     "1$materials/iron/forge_hammer/raw_metal_to_dust_with_tool"
     "1$materials/iron/macerator/double_ingot"
     "1$materials/iron/macerator/gear"
     "1$materials/iron/macerator/ingot"
     "1$materials/iron/macerator/large_plate"
     "1$materials/iron/macerator/plate"
     "1$materials/iron/macerator/raw_metal"
     "1$materials/iron/packer/dust"
     "1$materials/lapis/craft/deepslate_to_ore"
     "1$materials/lapis/craft/dust_from_tiny_dust"
     "1$materials/lapis/craft/tiny_dust_from_dust"
     "1$materials/lapis/macerator/crushed_dust"
     "1$materials/lapis/macerator/gem"
     "1$materials/lapis/packer/block"
     "1$materials/lapis/packer/dust"
     "1$materials/lead/compressor/double_ingot"
     "1$materials/lead/compressor/main"
     "1$materials/lead/craft/deepslate_to_ore"
     "1$materials/lead/craft/dust_from_tiny_dust"
     "1$materials/lead/craft/tiny_dust_from_dust"
     "1$materials/lead/macerator/double_ingot"
     "1$materials/lead/macerator/ingot"
     "1$materials/lead/macerator/ore_to_raw"
     "1$materials/lead/macerator/plate"
     "1$materials/lead/packer/block"
     "1$materials/lead/packer/dust"
     "1$materials/lead/packer/ingot"
     "1$materials/lead/packer/raw_metal_block"
     "1$materials/lead/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/lead/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/lead/unpacker/ingot"
     "1$materials/lead/unpacker/nugget"
     "1$materials/lead/unpacker/raw_metal"
     "1$materials/lignite_coal/craft/block_from_gem"
     "1$materials/lignite_coal/craft/deepslate_to_ore"
     "1$materials/lignite_coal/craft/gem_from_block"
     "1$materials/lignite_coal/craft/tiny_dust_from_dust"
     "1$materials/lignite_coal/macerator/gem"
     "1$materials/lignite_coal/packer/block"
     "1$materials/macerator/lead_crushed_to_dust"
     "1$materials/macerator/lignite_coal_crushed_to_dust"
     "1$materials/mixer/lubricant"
     "1$materials/mixer/lubricant_oil"
     "1$materials/nickel/compressor/double_ingot"
     "1$materials/nickel/compressor/main"
     "1$materials/nickel/craft/deepslate_to_ore"
     "1$materials/nickel/craft/dust_from_tiny_dust"
     "1$materials/nickel/craft/tiny_dust_from_dust"
     "1$materials/nickel/macerator/double_ingot"
     "1$materials/nickel/macerator/ingot"
     "1$materials/nickel/macerator/ore_to_raw"
     "1$materials/nickel/macerator/plate"
     "1$materials/nickel/macerator/raw_metal"
     "1$materials/nickel/packer/block"
     "1$materials/nickel/packer/dust"
     "1$materials/nickel/packer/ingot"
     "1$materials/nickel/packer/raw_metal_block"
     "1$materials/nickel/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/nickel/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/nickel/unpacker/ingot"
     "1$materials/nickel/unpacker/nugget"
     "1$materials/nickel/unpacker/raw_metal"
     "1$materials/platinum/compressor/double_ingot"
     "1$materials/platinum/compressor/main"
     "1$materials/platinum/craft/dust_from_tiny_dust"
     "1$materials/platinum/craft/tiny_dust_from_dust"
     "1$materials/platinum/heat_exchanger/hot_ingot"
     "1$materials/platinum/macerator/double_ingot"
     "1$materials/platinum/macerator/ingot"
     "1$materials/platinum/macerator/ore_to_raw"
     "1$materials/platinum/macerator/plate"
     "1$materials/platinum/packer/block"
     "1$materials/platinum/packer/dust"
     "1$materials/platinum/packer/ingot"
     "1$materials/platinum/packer/raw_metal_block"
     "1$materials/platinum/unpacker/ingot"
     "1$materials/platinum/unpacker/nugget"
     "1$materials/platinum/unpacker/raw_metal"
     "1$materials/platinum/vacuum_freezer/hot_ingot"
     "1$materials/redstone/craft/deepslate_to_ore"
     "1$materials/redstone/craft/tiny_dust_from_dust"
     "1$materials/redstone/packer/block"
     "1$materials/redstone/unpacker/tiny_dust"
     "1$materials/ruby/craft/dust_from_tiny_dust"
     "1$materials/ruby/craft/tiny_dust_from_dust"
     "1$materials/ruby/packer/dust"
     "1$materials/silver/compressor/double_ingot"
     "1$materials/silver/compressor/main"
     "1$materials/silver/craft/dust_from_tiny_dust"
     "1$materials/silver/craft/tiny_dust_from_dust"
     "1$materials/silver/macerator/double_ingot"
     "1$materials/silver/macerator/ingot"
     "1$materials/silver/macerator/plate"
     "1$materials/silver/macerator/raw_metal"
     "1$materials/silver/packer/block"
     "1$materials/silver/packer/dust"
     "1$materials/silver/packer/ingot"
     "1$materials/silver/packer/raw_metal_block"
     "1$materials/silver/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/silver/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/silver/unpacker/ingot"
     "1$materials/silver/unpacker/nugget"
     "1$materials/silver/unpacker/raw_metal"
     "1$materials/steel/assembler/gear"
     "1$materials/steel/compressor/double_ingot"
     "1$materials/steel/compressor/main"
     "1$materials/steel/craft/dust_from_tiny_dust"
     "1$materials/steel/craft/gear"
     "1$materials/steel/craft/tiny_dust_from_dust"
     "1$materials/steel/cutting_machine/double_ingot"
     "1$materials/steel/cutting_machine/main"
     "1$materials/steel/forge_hammer/double_ingot_to_plate"
     "1$materials/steel/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/steel/forge_hammer/double_ingot_to_rod"
     "1$materials/steel/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/steel/forge_hammer/ingot_to_dust"
     "1$materials/steel/forge_hammer/ingot_to_plate"
     "1$materials/steel/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/steel/forge_hammer/ingot_to_rod"
     "1$materials/steel/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/steel/macerator/curved_plate"
     "1$materials/steel/macerator/double_ingot"
     "1$materials/steel/macerator/gear"
     "1$materials/steel/macerator/ingot"
     "1$materials/steel/macerator/large_plate"
     "1$materials/steel/macerator/plate"
     "1$materials/steel/packer/block"
     "1$materials/steel/packer/dust"
     "1$materials/steel/packer/ingot"
     "1$materials/steel/smelting/rod_magnetic_to_rod_smelting"
     "1$materials/steel/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/steel/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/steel/unpacker/ingot"
     "1$materials/steel/unpacker/nugget"
     "1$materials/sulfur/craft/dust_from_tiny_dust"
     "1$materials/sulfur/craft/tiny_dust_from_dust"
     "1$materials/sulfur/packer/block"
     "1$materials/sulfur/packer/dust"
     "1$materials/sulfur/unpacker/dust"
     "1$materials/tin/assembler/gear"
     "1$materials/tin/compressor/double_ingot"
     "1$materials/tin/compressor/main"
     "1$materials/tin/craft/deepslate_to_ore"
     "1$materials/tin/craft/dust_from_tiny_dust"
     "1$materials/tin/craft/gear"
     "1$materials/tin/craft/tiny_dust_from_dust"
     "1$materials/tin/cutting_machine/double_ingot"
     "1$materials/tin/cutting_machine/main"
     "1$materials/tin/forge_hammer/double_ingot_to_plate"
     "1$materials/tin/forge_hammer/double_ingot_to_plate_with_tool"
     "1$materials/tin/forge_hammer/double_ingot_to_rod"
     "1$materials/tin/forge_hammer/double_ingot_to_rod_with_tool"
     "1$materials/tin/forge_hammer/ingot_to_dust"
     "1$materials/tin/forge_hammer/ingot_to_plate"
     "1$materials/tin/forge_hammer/ingot_to_plate_with_tool"
     "1$materials/tin/forge_hammer/ingot_to_rod"
     "1$materials/tin/forge_hammer/ingot_to_rod_with_tool"
     "1$materials/tin/forge_hammer/ore_to_dust_with_tool"
     "1$materials/tin/forge_hammer/ore_to_raw_metal"
     "1$materials/tin/forge_hammer/ore_to_raw_metal_with_tool"
     "1$materials/tin/forge_hammer/raw_metal_to_dust_with_tool"
     "1$materials/tin/macerator/curved_plate"
     "1$materials/tin/macerator/double_ingot"
     "1$materials/tin/macerator/gear"
     "1$materials/tin/macerator/ingot"
     "1$materials/tin/macerator/ore_to_raw"
     "1$materials/tin/macerator/plate"
     "1$materials/tin/macerator/raw_metal"
     "1$materials/tin/macerator/rotor"
     "1$materials/tin/packer/block"
     "1$materials/tin/packer/dust"
     "1$materials/tin/packer/ingot"
     "1$materials/tin/packer/raw_metal_block"
     "1$materials/tin/smelting/tiny_dust_to_nugget_blasting"
     "1$materials/tin/smelting/tiny_dust_to_nugget_smelting"
     "1$materials/tin/unpacker/ingot"
     "1$materials/tin/unpacker/nugget"
     "1$materials/tin/unpacker/raw_metal"
     "1$materials/tungsten/craft/block_from_ingot"
     "1$materials/tungsten/craft/deepslate_to_ore"
     "1$materials/tungsten/craft/ingot_from_block"
     "1$materials/tungsten/craft/ingot_from_nugget"
     "1$materials/tungsten/craft/nugget_from_ingot"
     "1$materials/tungsten/craft/raw_metal_block_from_raw_metal"
     "1$materials/tungsten/craft/raw_metal_from_raw_metal_block"
     "1$materials/tungsten/craft/tiny_dust_from_dust"
     "1$materials/uranium/blast_furnace/dust"
     "1$materials/uranium/blast_furnace/tiny_dust"
     "1$materials/uranium/craft/deepslate_to_ore"
     "1$materials/uranium/craft/dust_from_tiny_dust"
     "1$materials/uranium/craft/tiny_dust_from_dust"
     "1$materials/uranium/cutting_machine/main"
     "1$materials/uranium/macerator/ingot"
     "1$materials/uranium/macerator/ore_to_raw"
     "1$materials/uranium/macerator/raw_metal"
     "1$materials/uranium/packer/block"
     "1$materials/uranium/packer/dust"
     "1$materials/uranium/packer/ingot"
     "1$materials/uranium/packer/raw_metal_block"
     "1$materials/uranium/unpacker/ingot"
     "1$materials/uranium/unpacker/nugget"
     "1$materials/uranium/unpacker/raw_metal"
     "1$oil/mixer/lubricant_from_plant_oil"
     "1$quarry/allthemodium"
     "1$quarry/bronze"
     "1$quarry/stainless_steel"
     "1$quarry/steel"
     "1$quarry/titanium"
     "1$quarry/unobtainium"
     "1$steam_age/bronze/cutting_machine_asbl"
     "1$steam_age/bronze/macerator_asbl"
     "1$tools/smithing/netherite_hammer"
     "1$tools/steam_mining_drill"
     "1$vanilla_recipes/assembler/powered_rail"
     "1$vanilla_recipes/centrifuge/lava"
     "1$vanilla_recipes/chemical_reactor/waxing/copper_block"
     "1$vanilla_recipes/compressor/diamond_from_coal"
     "1$vanilla_recipes/lignite_torch"
     "1$vanilla_recipes/mixer/dye/black_dye"
     "1$vanilla_recipes/mixer/netherite"
     "1$vanilla_recipes/mixer/red_sand"
     "1$vanilla_recipes/oxidation/copper_block"
     "1$vanilla_recipes/packer/detector_rail"
     "1$vanilla_recipes/packer/glistering_melon_slice"
     "1$vanilla_recipes/packer/golden_carrot"
     "1$vanilla_recipes/packer/netherite"
     "1$vanilla_recipes/steel_anvil_asbl"
     "1$vanilla_recipes/waxing/copper_block"
     "3$materials/aluminum/craft/block_from_ingot"
     "3$materials/aluminum/craft/ingot_from_block"
     "3$materials/aluminum/craft/ingot_from_nugget"
     "3$materials/aluminum/craft/nugget_from_ingot"
     "3$materials/antimony/smelting/ore_deepslate_to_ingot_blasting"
     "3$materials/antimony/smelting/ore_deepslate_to_ingot_smelting"
     "3$materials/antimony/smelting/ore_to_ingot_blasting"
     "3$materials/antimony/smelting/ore_to_ingot_smelting"
     "3$materials/bronze/craft/block_from_ingot"
     "3$materials/bronze/craft/ingot_from_block"
     "3$materials/bronze/craft/ingot_from_nugget"
     "3$materials/bronze/craft/nugget_from_ingot"
     "3$materials/bronze/smelting/dust_to_ingot_blasting"
     "3$materials/bronze/smelting/dust_to_ingot_smelting"
     "3$materials/copper/craft/ingot_from_nugget"
     "3$materials/copper/craft/nugget_from_ingot"
     "3$materials/copper/smelting/dust_to_ingot_blasting"
     "3$materials/copper/smelting/dust_to_ingot_smelting"
     "3$materials/electrum/craft/block_from_ingot"
     "3$materials/electrum/craft/ingot_from_block"
     "3$materials/electrum/craft/ingot_from_nugget"
     "3$materials/electrum/craft/nugget_from_ingot"
     "3$materials/electrum/smelting/dust_to_ingot_blasting"
     "3$materials/electrum/smelting/dust_to_ingot_smelting"
     "3$materials/gold/smelting/dust_to_ingot_blasting"
     "3$materials/gold/smelting/dust_to_ingot_smelting"
     "3$materials/invar/craft/block_from_ingot"
     "3$materials/invar/craft/ingot_from_block"
     "3$materials/invar/craft/ingot_from_nugget"
     "3$materials/invar/craft/nugget_from_ingot"
     "3$materials/invar/smelting/dust_to_ingot_blasting"
     "3$materials/invar/smelting/dust_to_ingot_smelting"
     "3$materials/iridium/craft/block_from_ingot"
     "3$materials/iridium/craft/ingot_from_block"
     "3$materials/iridium/craft/ingot_from_nugget"
     "3$materials/iridium/craft/nugget_from_ingot"
     "3$materials/iridium/craft/raw_metal_block_from_raw_metal"
     "3$materials/iridium/craft/raw_metal_from_raw_metal_block"
     "3$materials/iridium/smelting/dust_to_ingot_blasting"
     "3$materials/iridium/smelting/dust_to_ingot_smelting"
     "3$materials/iridium/smelting/ore_deepslate_to_ingot_blasting"
     "3$materials/iridium/smelting/ore_deepslate_to_ingot_smelting"
     "3$materials/iridium/smelting/ore_to_ingot_blasting"
     "3$materials/iridium/smelting/ore_to_ingot_smelting"
     "3$materials/iridium/smelting/raw_metal_to_ingot_blasting"
     "3$materials/iridium/smelting/raw_metal_to_ingot_smelting"
     "3$materials/iron/smelting/dust_to_ingot_blasting"
     "3$materials/iron/smelting/dust_to_ingot_smelting"
     "3$materials/lead/craft/block_from_ingot"
     "3$materials/lead/craft/ingot_from_block"
     "3$materials/lead/craft/ingot_from_nugget"
     "3$materials/lead/craft/nugget_from_ingot"
     "3$materials/lead/craft/raw_metal_block_from_raw_metal"
     "3$materials/lead/craft/raw_metal_from_raw_metal_block"
     "3$materials/lead/smelting/dust_to_ingot_blasting"
     "3$materials/lead/smelting/dust_to_ingot_smelting"
     "3$materials/lead/smelting/ore_deepslate_to_ingot_blasting"
     "3$materials/lead/smelting/ore_deepslate_to_ingot_smelting"
     "3$materials/lead/smelting/ore_to_ingot_blasting"
     "3$materials/lead/smelting/ore_to_ingot_smelting"
     "3$materials/lead/smelting/raw_metal_to_ingot_blasting"
     "3$materials/lead/smelting/raw_metal_to_ingot_smelting"
     "3$materials/lignite_coal/smelting/ore_deepslate_to_gem_blasting"
     "3$materials/lignite_coal/smelting/ore_deepslate_to_gem_smelting"
     "3$materials/lignite_coal/smelting/ore_to_gem_blasting"
     "3$materials/lignite_coal/smelting/ore_to_gem_smelting"
     "3$materials/nickel/craft/block_from_ingot"
     "3$materials/nickel/craft/ingot_from_block"
     "3$materials/nickel/craft/ingot_from_nugget"
     "3$materials/nickel/craft/nugget_from_ingot"
     "3$materials/nickel/craft/raw_metal_block_from_raw_metal"
     "3$materials/nickel/craft/raw_metal_from_raw_metal_block"
     "3$materials/nickel/smelting/dust_to_ingot_blasting"
     "3$materials/nickel/smelting/dust_to_ingot_smelting"
     "3$materials/nickel/smelting/ore_deepslate_to_ingot_blasting"
     "3$materials/nickel/smelting/ore_deepslate_to_ingot_smelting"
     "3$materials/nickel/smelting/ore_to_ingot_blasting"
     "3$materials/nickel/smelting/ore_to_ingot_smelting"
     "3$materials/nickel/smelting/raw_metal_to_ingot_blasting"
     "3$materials/nickel/smelting/raw_metal_to_ingot_smelting"
     "3$materials/platinum/craft/block_from_ingot"
     "3$materials/platinum/craft/ingot_from_block"
     "3$materials/platinum/craft/ingot_from_nugget"
     "3$materials/platinum/craft/nugget_from_ingot"
     "3$materials/platinum/craft/raw_metal_block_from_raw_metal"
     "3$materials/platinum/craft/raw_metal_from_raw_metal_block"
     "3$materials/silver/craft/block_from_ingot"
     "3$materials/silver/craft/ingot_from_block"
     "3$materials/silver/craft/ingot_from_nugget"
     "3$materials/silver/craft/nugget_from_ingot"
     "3$materials/silver/craft/raw_metal_block_from_raw_metal"
     "3$materials/silver/craft/raw_metal_from_raw_metal_block"
     "3$materials/silver/smelting/dust_to_ingot_blasting"
     "3$materials/silver/smelting/dust_to_ingot_smelting"
     "3$materials/silver/smelting/raw_metal_to_ingot_blasting"
     "3$materials/silver/smelting/raw_metal_to_ingot_smelting"
     "3$materials/steel/craft/block_from_ingot"
     "3$materials/steel/craft/ingot_from_block"
     "3$materials/steel/craft/ingot_from_nugget"
     "3$materials/steel/craft/nugget_from_ingot"
     "3$materials/steel/smelting/dust_to_ingot_blasting"
     "3$materials/steel/smelting/dust_to_ingot_smelting"
     "3$materials/sulfur/craft/block_from_dust"
     "3$materials/sulfur/craft/dust_from_block"
     "3$materials/tin/craft/block_from_ingot"
     "3$materials/tin/craft/ingot_from_block"
     "3$materials/tin/craft/ingot_from_nugget"
     "3$materials/tin/craft/nugget_from_ingot"
     "3$materials/tin/craft/raw_metal_block_from_raw_metal"
     "3$materials/tin/craft/raw_metal_from_raw_metal_block"
     "3$materials/tin/smelting/dust_to_ingot_blasting"
     "3$materials/tin/smelting/dust_to_ingot_smelting"
     "3$materials/tin/smelting/ore_deepslate_to_ingot_blasting"
     "3$materials/tin/smelting/ore_deepslate_to_ingot_smelting"
     "3$materials/tin/smelting/ore_to_ingot_blasting"
     "3$materials/tin/smelting/ore_to_ingot_smelting"
     "3$materials/tin/smelting/raw_metal_to_ingot_blasting"
     "3$materials/tin/smelting/raw_metal_to_ingot_smelting"
     "3$materials/uranium/craft/block_from_ingot"
     "3$materials/uranium/craft/ingot_from_block"
     "3$materials/uranium/craft/ingot_from_nugget"
     "3$materials/uranium/craft/nugget_from_ingot"
     "3$materials/uranium/craft/raw_metal_block_from_raw_metal"
     "3$materials/uranium/craft/raw_metal_from_raw_metal_block"
   ]
 }

```


</details>

<details>
<summary>ars_nouveau/alakarkinos/ocean_ruins_cold</summary>

```diff
 {
   type: "ars_nouveau:alakarkinos_conversion"
   input: "minecraft:gravel"
-  table: "minecraft:archaeology/ocean_ruin_warm"
+  table: "minecraft:archaeology/ocean_ruin_cold"
   weight: 25
 }

```


</details>

<details>
<summary>biomeswevegone/allium_oddion_soup</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
-    Y: {
-      item: "biomeswevegone:cooked_oddion_bulb"
-    }
     #: {
-      item: "minecraft:milk_bucket"
+      item: "biomeswevegone:cooked_oddion_bulb"
     }
     X: {
       item: "minecraft:bowl"
     }
   }
   pattern: [
-    "#Y"
+    "##"
     "X "
   ]
   result: {
     count: 1
     id: "biomeswevegone:allium_oddion_soup"
   }
 }

```


</details>

<details>
<summary>biomeswevegone/chiseled_red_rock_bricks</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "building"
   key: {
     #: {
-      item: "biomeswevegone:red_rock_bricks"
+      item: "biomeswevegone:red_rock_brick_slab"
     }
   }
   pattern: [
     "#"
     "#"
   ]
   result: {
     count: 1
     id: "biomeswevegone:chiseled_red_rock_bricks"
   }
 }

```


</details>

<details>
<summary>modern_industrialization/materials/annealed_copper/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:annealed_copper_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:annealed_copper_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/chemical_reactor/platinum_sulfuric_solution</summary>

```diff
 {
   type: "modern_industrialization:chemical_reactor"
   eu: 8
   duration: 200
-  item_inputs: [
-    {
-      amount: 1
-      tag: "c:raw_materials/platinum"
-    }
-  ]
+  item_inputs: {
+    tag: "c:raw_materials/platinum"
+    amount: 1
+  }
   fluid_inputs: {
     fluid: "modern_industrialization:sulfuric_acid"
     amount: 9000
   }
   fluid_outputs: {
     fluid: "modern_industrialization:platinum_sulfuric_solution"
     amount: 9000
   }
 }

```


</details>

<details>
<summary>modern_industrialization/materials/chromium/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:chromium_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:chromium_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/kanthal/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:kanthal_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:kanthal_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/platinum/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:platinum_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "alltheores:platinum_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/stainless_steel/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:stainless_steel_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:stainless_steel_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/superconductor/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:superconductor_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:superconductor_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/titanium/heat_exchanger/hot_ingot</summary>

```diff
 {
   type: "modern_industrialization:heat_exchanger"
   duration: 10
   eu: 8
   fluid_inputs: [
     {
-      amount: 100
+      amount: 20
       fluid: "modern_industrialization:cryofluid"
     }
   ]
   fluid_outputs: [
     {
-      amount: 65
+      amount: 13
       fluid: "modern_industrialization:argon"
     }
     {
-      amount: 25
+      amount: 5
       fluid: "modern_industrialization:helium"
     }
   ]
   item_inputs: [
     {
       amount: 1
       item: "modern_industrialization:titanium_hot_ingot"
     }
   ]
   item_outputs: [
     {
       amount: 1
       item: "modern_industrialization:titanium_ingot"
     }
   ]
 }

```


</details>

<details>
<summary>modern_industrialization/materials/vacuum_freezer/cryofluid</summary>

```diff
 {
   type: "modern_industrialization:vacuum_freezer"
-  eu: 64
+  eu: 256
   duration: 250
   fluid_inputs: [
     {
       fluid: "modern_industrialization:argon"
-      amount: 35
+      amount: 140
     }
     {
       fluid: "modern_industrialization:helium"
-      amount: 15
+      amount: 60
     }
   ]
   fluid_outputs: {
     fluid: "modern_industrialization:cryofluid"
-    amount: 50
+    amount: 200
   }
 }

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (5)</summary>
<blockquote>

<details>
<summary>allthemods/ftbquests/screem_1</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "ftbquests:screen_1"
-    count: 1
-  }
-  pattern: [
-    "SSS"
-    "SBS"
-    "SRS"
-  ]
-  key: {
-    B: {
-      item: "minecraft:book"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    S: {
-      tag: "c:stones"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>allthemods/ftbquests/screen_3</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "ftbquests:screen_3"
-    count: 1
-  }
-  pattern: [
-    "SSS"
-    "SSS"
-    "SSS"
-  ]
-  key: {
-    S: {
-      item: "ftbquests:screen_1"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>ars_nouveau/reactive</summary>

```diff
-{
-  type: "ars_nouveau:reactive_enchantment"
-  pedestalItems: [
-    {
-      item: "ars_nouveau:spell_parchment"
-    }
-    {
-      tag: "c:storage_blocks/lapis"
-    }
-    {
-      tag: "c:storage_blocks/source"
-    }
-  ]
-  sourceCost: 3000
-}

```


</details>

<details>
<summary>ars_nouveau/scry_ritual/amethyst_blocks</summary>

```diff
-{
-  type: "ars_nouveau:scry_ritual"
-  augment: "c:storage_blocks/amethyst"
-  highlight: "c:storage_blocks/amethyst"
-}

```


</details>

<details>
<summary>biomeswevegone/red_wool_from_rose__petal_block</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-    {
-      item: "biomeswevegone:rose_petal_block"
-    }
-  ]
-  result: {
-    count: 1
-    id: "minecraft:red_wool"
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
<summary>minecraft:block/biomeswevegone:glow_bottle</summary>

```diff
+[
+  "biomeswevegone:blue_glow_bottle"
+  "biomeswevegone:green_glow_bottle"
+  "biomeswevegone:red_glow_bottle"
+  "biomeswevegone:yellow_glow_bottle"
+]

```


</details>

<details>
<summary>minecraft:block/biomeswevegone:glowcane</summary>

```diff
+[
+  "biomeswevegone:blue_glowcane"
+  "biomeswevegone:green_glowcane"
+  "biomeswevegone:red_glowcane"
+  "biomeswevegone:yellow_glowcane"
+]

```


</details>

<details>
<summary>minecraft:block/biomeswevegone:red_rock_bricks</summary>

```diff
+[
+  "biomeswevegone:chiseled_red_rock_bricks"
+  "biomeswevegone:cracked_red_rock_bricks"
+  "biomeswevegone:mossy_red_rock_bricks"
+  "biomeswevegone:red_rock_bricks"
+]

```


</details>

<details>
<summary>minecraft:block/c:incorrect_for_unobtainium_tool</summary>

```diff
+[
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone_bricks"
+]

```


</details>

<details>
<summary>minecraft:block/c:incorrect_for_vibranium_tool</summary>

```diff
+[
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone_bricks"
+]

```


</details>

<details>
<summary>minecraft:block/c:needs_allthemodiumalloy_tool</summary>

```diff
+[
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone_bricks"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/air_essence</summary>

```diff
+[
+  "kubejs:air_essence_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/earth_essence</summary>

```diff
+[
+  "kubejs:earth_essence_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/feather</summary>

```diff
+[
+  "supplementaries:feather_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/fire_essence</summary>

```diff
+[
+  "kubejs:fire_essence_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/flax</summary>

```diff
+[
+  "supplementaries:flax_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/flint</summary>

```diff
+[
+  "supplementaries:soap_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/soap</summary>

```diff
+[
+  "supplementaries:soap_block"
+]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks/water_essence</summary>

```diff
+[
+  "kubejs:water_essence_block"
+]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:glow_bottle</summary>

```diff
+[
+  "biomeswevegone:blue_glow_bottle"
+  "biomeswevegone:green_glow_bottle"
+  "biomeswevegone:red_glow_bottle"
+  "biomeswevegone:yellow_glow_bottle"
+]

```


</details>

<details>
<summary>minecraft:item/biomeswevegone:red_rock_bricks</summary>

```diff
+[
+  "biomeswevegone:chiseled_red_rock_bricks"
+  "biomeswevegone:cracked_red_rock_bricks"
+  "biomeswevegone:mossy_red_rock_bricks"
+  "biomeswevegone:red_rock_bricks"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/air_essence</summary>

```diff
+[
+  "kubejs:air_essence_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/earth_essence</summary>

```diff
+[
+  "kubejs:earth_essence_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/feather</summary>

```diff
+[
+  "supplementaries:feather_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/fire_essence</summary>

```diff
+[
+  "kubejs:fire_essence_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/flax</summary>

```diff
+[
+  "supplementaries:flax_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/flint</summary>

```diff
+[
+  "supplementaries:soap_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/soap</summary>

```diff
+[
+  "supplementaries:soap_block"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/water_essence</summary>

```diff
+[
+  "kubejs:water_essence_block"
+]

```


</details>

<details>
<summary>minecraft:item/fluxnetworks:storage</summary>

```diff
+[
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (36)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:incorrect_for_allthemodium_tool</summary>

```diff
 [
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone_bricks"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:relocation_not_supported</summary>

```diff
 [
   ... (8 entries)
+  "allthemodium:teleport_pad"
   ... (8 entries)
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:flux_controller"
+  "fluxnetworks:flux_plug"
+  "fluxnetworks:flux_point"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
   ... (744 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:storage_blocks</summary>

```diff
 [
+  "#c:storage_blocks/air_essence"
   ... (71 entries)
+  "#c:storage_blocks/earth_essence"
   ... (11 entries)
+  "#c:storage_blocks/fire_essence"
   ... (223 entries)
+  "#c:storage_blocks/water_essence"
   ... (52 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:enderman_holdable</summary>

```diff
 [
   ... (3 entries)
+  "biomeswevegone:black_sand"
+  "biomeswevegone:blue_sand"
   ... (1 entries)
+  "biomeswevegone:green_mushroom"
   ... (1 entries)
+  "biomeswevegone:pink_sand"
+  "biomeswevegone:purple_sand"
+  "biomeswevegone:weeping_milkcap"
+  "biomeswevegone:white_sand"
+  "biomeswevegone:windswept_sand"
   ... (235 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:fall_damage_resetting</summary>

```diff
 [
   ... (2 entries)
+  "biomeswevegone:blueberry_bush"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_diamond_tool</summary>

```diff
 [
   ... (4 entries)
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_gold_tool</summary>

```diff
 [
   ... (8 entries)
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_iron_tool</summary>

```diff
 [
   ... (5 entries)
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_netherite_tool</summary>

```diff
 [
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_stone_tool</summary>

```diff
 [
   ... (7 entries)
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:incorrect_for_wooden_tool</summary>

```diff
 [
   ... (8 entries)
+  "allthemodium:ancient_chiseled_stone_bricks"
+  "allthemodium:ancient_cracked_stone_bricks"
+  "allthemodium:ancient_stone"
+  "allthemodium:ancient_stone_bricks"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:logs_that_burn</summary>

```diff
 [
   ... (19 entries)
+  "#biomeswevegone:palo_verde_logs"
   ... (207 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (3940 entries)
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:flux_block"
+  "fluxnetworks:flux_controller"
+  "fluxnetworks:flux_plug"
+  "fluxnetworks:flux_point"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
   ... (6238 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:overworld_carver_replaceables</summary>

```diff
 [
   ... (7 entries)
+  "biomeswevegone:black_sandstone"
+  "biomeswevegone:blue_sandstone"
+  "biomeswevegone:dacite"
   ... (4 entries)
+  "biomeswevegone:packed_black_ice"
+  "biomeswevegone:packed_borealis_ice"
   ... (1 entries)
+  "biomeswevegone:pink_sandstone"
   ... (1 entries)
+  "biomeswevegone:purple_sandstone"
+  "biomeswevegone:red_rock"
   ... (2 entries)
+  "biomeswevegone:white_sandstone"
+  "biomeswevegone:windswept_sandstone"
   ... (23 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/the_bumblezone:hanging_garden/allowed_leaves</summary>

```diff
 [
   ... (30 entries)
+  "feur_builder:pink_leaves_flowering?"
+  "feur_builder:purple_leaves_flowering?"
+  "feur_builder:red_leaves_flowering?"
   ... (59 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/the_bumblezone:hanging_garden/forced_disallowed_flowers</summary>

```diff
 [
   ... (79 entries)
+  "hexalia:ghost_fern?"
+  "hexalia:witchweed?"
   ... (13 entries)
+  "landsoficaria:voidlily?"
   ... (87 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:arrows</summary>

```diff
 [
+  "eternal_starlight:air_sac_arrow"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/the_bumblezone:hanging_garden/initial_spawn_entities</summary>

```diff
 [
+  "alexs_herps_:aft_banded?"
+  "alexs_herps_:argentine_tegu?"
+  "alexs_herps_:blue_chameleon?"
+  "alexs_herps_:blue_tongue_skink_1?"
+  "alexs_herps_:lush_mantis?"
+  "alexs_herps_:snail?"
+  "alexs_herps_:snail?"
+  "alexs_herps_:snail?"
+  "alexs_herps_:snail?"
   ... (36 entries)
+  "hexalia:silk_moth_entity?"
   ... (4 entries)
+  "landsoficaria:crystal_slug?"
+  "legendarycreatures:wisp?"
   ... (62 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/the_bumblezone:structure_spawner_mobs/battle_cubes_rare_spawner_type</summary>

```diff
 [
   ... (8 entries)
+  "goety:bone_spider?"
   ... (1 entries)
+  "legendarycreatures:peacock_spider?"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/artifacts:slot/hands</summary>

```diff
 [
   ... (4 entries)
-  "artifacts:onion_ring"
   ... (4 entries)
-  "artifacts:withered_bracelet"
 ]

```


</details>

<details>
<summary>minecraft:item/c:ores/cinnabar</summary>

```diff
 [
-  "alltheores:cinnabar_ore"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
+  "#c:storage_blocks/air_essence"
   ... (79 entries)
+  "#c:storage_blocks/earth_essence"
   ... (13 entries)
+  "#c:storage_blocks/fire_essence"
   ... (243 entries)
+  "#c:storage_blocks/water_essence"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:bracelet</summary>

```diff
 [
   ... (7 entries)
+  "artifacts:onion_ring"
+  "artifacts:withered_bracelet"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/eternal_starlight:water_crystal_ingredients</summary>

```diff
 [
   ... (5 entries)
+  "eternal_starlight:sea_rosa"
+  "eternal_starlight:spiral_kelp"
   ... (1 entries)
+  "eternal_starlight:wick_grass"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/megacells:compression_blacklist</summary>

```diff
 [
   ... (1 entries)
-  "#c:tools/wrench"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/megacells:compression_overrides</summary>

```diff
 [
-  "#functionalstorage:ignore_crafting_check?"
   ... (4 entries)
-  "minecraft:amethyst_shard"
-  "minecraft:clay_ball"
-  "minecraft:glowstone_dust"
   ... (1 entries)
-  "minecraft:honeycomb"
-  "minecraft:ice"
-  "minecraft:magma_cream"
-  "minecraft:melon_slice"
-  "minecraft:packed_ice"
   ... (1 entries)
-  "minecraft:pointed_dripstone"
-  "minecraft:quartz"
-  "minecraft:snowball"
-  "minecraft:string"
   ... (13 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:arrows</summary>

```diff
 [
+  "eternal_starlight:air_sac_arrow"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:foot_armor</summary>

```diff
 [
   ... (24 entries)
+  "eternal_starlight:air_sac_boots"
   ... (51 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:logs_that_burn</summary>

```diff
 [
   ... (15 entries)
+  "#biomeswevegone:palo_verde_logs"
   ... (231 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:piglin_repellents</summary>

```diff
 [
   ... (3 entries)
+  "biomeswevegone:soul_fruit"
   ... (17 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:bee_armors/bz_armor_ability_enhancing_wearables</summary>

```diff
 [
   ... (26 entries)
+  "special_drops:bee_helmet?"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:bee_feedable_items</summary>

```diff
 [
   ... (20 entries)
+  "forestry:ambrosia?"
+  "forestry:honey_pot?"
+  "forestry:honeyed_slice?"
   ... (2 entries)
+  "pamhc2foodcore:honeyglazeddonutitem?"
+  "pamhc2foodcore:honeypieitem?"
+  "pamhc2foodextended:honeybunitem?"
+  "pamhc2foodextended:honeycombchocolatebaritem?"
+  "pamhc2foodextended:honeyglazedcarrotsitem?"
+  "pamhc2foodextended:honeyglazedhamitem?"
+  "pamhc2foodextended:honeyglazedlemonlambitem?"
+  "pamhc2foodextended:honeysandwichitem?"
+  "pamhc2foodextended:honeysoyribsitem?"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:bee_queen/disallowed_random_bonus_trade_items</summary>

```diff
 [
   ... (16 entries)
+  "#blahahplus:dyed?"
   ... (222 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:crystalline_flower/xp_100_when_consumed</summary>

```diff
 [
+  "forestry:royal_jelly?"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:dimension_teleportation/do_item_right_click_check_earlier</summary>

```diff
 [
+  "cyclic:teleport_wand?"
+  "legendary_monsters:chorus_blade?"
   ... (2 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/the_bumblezone:dimension_teleportation/item_right_clicked_beehive</summary>

```diff
 [
   ... (5 entries)
+  "cyclic:teleport_wand?"
+  "legendary_monsters:chorus_blade?"
 ]

```


</details>

</blockquote>

</details>

<details open>
<summary>Removed (1)</summary>
<blockquote>

<details>
<summary>minecraft:worldgen/placed_feature/the_bumblezone:resourceful_bees_combs</summary>

```diff
-[
-  "the_bumblezone:resourcefulbees/diamond_comb_vein?"
-  "the_bumblezone:resourcefulbees/diamond_comb_vein_high?"
-  "the_bumblezone:resourcefulbees/dragon_comb_vein?"
-  "the_bumblezone:resourcefulbees/ender_comb_vein?"
-  "the_bumblezone:resourcefulbees/ender_comb_vein_high?"
-  "the_bumblezone:resourcefulbees/gold_comb_vein?"
-  "the_bumblezone:resourcefulbees/iron_comb_vein?"
-  "the_bumblezone:resourcefulbees/lapis_comb_vein?"
-  "the_bumblezone:resourcefulbees/redstone_comb_vein?"
-  "the_bumblezone:resourcefulbees/skeleton_comb_vein?"
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
   ... (20029 entries)
+  "eternal_starlight:sea_rosa"
   ... (3 entries)
+  "eternal_starlight:spiral_kelp"
+  "eternal_starlight:spiral_kelp_plant"
   ... (131 entries)
+  "eternal_starlight:wick_grass"
   ... (426 entries)
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:flux_block"
+  "fluxnetworks:flux_controller"
+  "fluxnetworks:flux_plug"
+  "fluxnetworks:flux_point"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
   ... (7753 entries)
+  "mysticalagriculture:xychorium_gem_crop"
   ... (11015 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (445 entries)
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:flux_controller"
+  "fluxnetworks:flux_plug"
+  "fluxnetworks:flux_point"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
   ... (1472 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (189 entries)
+  "eternal_starlight:air_sac_arrow"
   ... (547 entries)
+  "rarcompat:spark"
   ... (47 entries)
+  "sophisticatedstorageinmotion:storage_boat"
   ... (148 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (24980 entries)
+  "eternal_starlight:air_sac_arrow"
+  "eternal_starlight:air_sac_boots"
   ... (501 entries)
+  "eternal_starlight:sea_rosa"
   ... (14 entries)
+  "eternal_starlight:spiral_kelp"
   ... (133 entries)
+  "eternal_starlight:tower_squid_air_sac"
   ... (38 entries)
+  "eternal_starlight:wick_grass"
   ... (654 entries)
+  "fluxnetworks:admin_configurator"
+  "fluxnetworks:basic_flux_storage"
+  "fluxnetworks:flux_block"
+  "fluxnetworks:flux_configurator"
+  "fluxnetworks:flux_controller"
+  "fluxnetworks:flux_core"
+  "fluxnetworks:flux_dust"
+  "fluxnetworks:flux_plug"
+  "fluxnetworks:flux_point"
+  "fluxnetworks:gargantuan_flux_storage"
+  "fluxnetworks:herculean_flux_storage"
   ... (10769 entries)
+  "mysticalagriculture:xychorium_gem_essence"
+  "mysticalagriculture:xychorium_gem_seeds"
   ... (10850 entries)
+  "sophisticatedstorageinmotion:storage_boat"
   ... (3551 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (83 entries)
+  "mahoutsukai:acting"
   ... (157 entries)
 ]

```


</details>

<details>
<summary>worldgen/biome</summary>

```diff
 [
   ... (78 entries)
+  "eternal_starlight:spiral_kelp_forest"
   ... (196 entries)
 ]

```


</details>

<details>
<summary>worldgen/feature</summary>

```diff
 [
   ... (42 entries)
+  "eternal_starlight:spiral_kelp"
   ... (4 entries)
+  "eternal_starlight:underwater_simple_block"
   ... (306 entries)
 ]

```


</details>

<details>
<summary>worldgen/placed_feature</summary>

```diff
 [
   ... (366 entries)
+  "eternal_starlight:sea_rosa"
+  "eternal_starlight:spiral_kelp"
+  "eternal_starlight:spiral_kelp_forest_vegetation"
   ... (1522 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (11)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/sea_rosa</summary>

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
+              condition: "minecraft:any_of"
+              terms: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:shears"
+                  }
+                }
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "#eternal_starlight:sickles"
+                  }
+                }
+              ]
+            }
+          ]
+          functions: [
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    down: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    up: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    north: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    south: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    west: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              conditions: [
+                {
+                  block: "eternal_starlight:sea_rosa"
+                  condition: "minecraft:block_state_property"
+                  properties: {
+                    east: "true"
+                  }
+                }
+              ]
+              count: 1
+              function: "minecraft:set_count"
+            }
+            {
+              add: true
+              count: -1
+              function: "minecraft:set_count"
+            }
+            {
+              function: "minecraft:explosion_decay"
+            }
+          ]
+          name: "eternal_starlight:sea_rosa"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/sea_rosa"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/spiral_kelp</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+  random_sequence: "eternal_starlight:blocks/spiral_kelp"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/spiral_kelp_plant</summary>

```diff
+{
+  type: "minecraft:block"
+  random_sequence: "eternal_starlight:blocks/spiral_kelp_plant"
+}

```


</details>

<details>
<summary>minecraft/loot_table/eternal_starlight/blocks/wick_grass</summary>

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
+          name: "eternal_starlight:wick_grass"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "eternal_starlight:blocks/wick_grass"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/basic_flux_storage</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:basic_flux_storage"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/basic_flux_storage"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/flux_block</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "fluxnetworks:flux_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/flux_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/flux_controller</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:flux_controller"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/flux_controller"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/flux_plug</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:flux_plug"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/flux_plug"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/flux_point</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:flux_point"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/flux_point"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/gargantuan_flux_storage</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:gargantuan_flux_storage"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/gargantuan_flux_storage"
+}

```


</details>

<details>
<summary>minecraft/loot_table/fluxnetworks/blocks/herculean_flux_storage</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+                "fluxnetworks:device_config"
+                "fluxnetworks:stored_energy"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "fluxnetworks:herculean_flux_storage"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "fluxnetworks:blocks/herculean_flux_storage"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (6)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/eternal_starlight/entities/tower_squid</summary>

```diff
 {
   type: "minecraft:entity"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               conditions: [
                 {
                   condition: "minecraft:any_of"
                   terms: [
                     {
                       condition: "minecraft:entity_properties"
                       entity: "this"
                       predicate: {
                         flags: {
                           is_on_fire: true
                         }
                       }
                     }
                     {
                       condition: "minecraft:entity_properties"
                       entity: "direct_attacker"
                       predicate: {
                         equipment: {
                           mainhand: {
                             predicates: {
                               minecraft:enchantments: [
                                 {
                                   enchantments: "#minecraft:smelts_loot"
                                 }
                               ]
                             }
                           }
                         }
                       }
                     }
                   ]
                 }
               ]
               function: "minecraft:furnace_smelt"
             }
           ]
           name: "eternal_starlight:tower_squid"
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
                 max: 3
                 min: 1
               }
               function: "minecraft:set_count"
             }
             {
               count: {
                 type: "minecraft:uniform"
                 max: 1
                 min: 0
               }
               enchantment: "minecraft:looting"
               function: "minecraft:enchanted_count_increase"
             }
           ]
-          name: "minecraft:ink_sac"
+          name: "eternal_starlight:tower_squid_air_sac"
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "eternal_starlight:entities/tower_squid"
 }

```


</details>

<details>
<summary>minecraft/loot_table/minecolonies/crops/blocks/dead_bush</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:drybiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.04
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:chickpea"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:chickpea"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.03
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.024999999
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.02
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.01
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "minecolonies:crops/blocks/dead_bush"
 }

```


</details>

<details>
<summary>minecraft/loot_table/minecolonies/crops/blocks/fern</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:coldbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.04
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:cabbage"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:cabbage"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:cabbage"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.03
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:cabbage"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.024999999
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:cabbage"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.02
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:cabbage"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.01
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:cabbage"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:humidbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.04
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:soybean"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:soybean"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.03
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.024999999
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.02
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.01
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "minecolonies:crops/blocks/fern"
 }

```


</details>

<details>
<summary>minecraft/loot_table/minecolonies/crops/blocks/seagrass</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:humidbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.04
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:rice"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:rice"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.03
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.024999999
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.02
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.01
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "minecolonies:crops/blocks/seagrass"
 }

```


</details>

<details>
<summary>minecraft/loot_table/minecolonies/crops/blocks/short_grass</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:temperatebiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:bell_pepper"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:bell_pepper"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:bell_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:bell_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:bell_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:bell_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:bell_pepper"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:drybiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:nether_pepper"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:nether_pepper"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:nether_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:nether_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:nether_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:nether_pepper"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:nether_pepper"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:humidbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:peas"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:peas"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:peas"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:peas"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:peas"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:peas"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:peas"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:mint"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:mint"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:mint"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:mint"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:mint"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:mint"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:mint"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:coldbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:butternut_squash"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:butternut_squash"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:butternut_squash"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:butternut_squash"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:butternut_squash"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:butternut_squash"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:butternut_squash"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:drybiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:chickpea"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:chickpea"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:chickpea"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:durum"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:durum"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:durum"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:durum"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:durum"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:durum"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:durum"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:eggplant"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:eggplant"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:eggplant"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:eggplant"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:eggplant"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:eggplant"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:eggplant"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:garlic"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:garlic"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:garlic"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:garlic"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:garlic"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:garlic"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:garlic"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:onion"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:onion"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:onion"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:onion"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:onion"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:onion"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:onion"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:humidbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:soybean"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:soybean"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:soybean"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:temperatebiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:tomato"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:tomato"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:tomato"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:tomato"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:tomato"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:tomato"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:tomato"
+            }
           ]
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:temperatebiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.004
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:corn"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:corn"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.0035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:corn"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.003
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:corn"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.0025000002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:corn"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.002
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:corn"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.001
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:corn"
+            }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "minecolonies:crops/blocks/short_grass"
 }

```


</details>

<details>
<summary>minecraft/loot_table/minecolonies/crops/blocks/small_dripleaf</summary>

```diff
 {
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecolonies:entity_in_biome_tag"
           tag: "#minecolonies:humidbiomes"
         }
         {
           condition: "minecraft:inverted"
           term: {
             condition: "minecraft:any_of"
             terms: [
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   items: "minecraft:shears"
                 }
               }
               {
                 condition: "minecraft:match_tool"
                 predicate: {
                   predicates: {
                     minecraft:enchantments: [
                       {
                         enchantments: "minecraft:silk_touch"
                         levels: {
                           min: 1
                         }
                       }
                     ]
                   }
                 }
               }
             ]
           }
         }
       ]
       entries: [
         {
           type: "minecraft:alternatives"
           children: [
             {
               type: "minecraft:item"
               conditions: [
                 {
                   condition: "minecraft:match_tool"
                   predicate: {
-                    items: "#minecraft:hoes"
+                    items: "minecraft:netherite_hoe"
                   }
                 }
                 {
-                  chance: 0.1
+                  chance: 0.04
                   condition: "minecraft:random_chance"
                 }
               ]
               name: "minecolonies:rice"
             }
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  chance: 0.01
-                  condition: "minecraft:random_chance"
-                }
-              ]
-              name: "minecolonies:rice"
-            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:diamond_hoe"
+                  }
+                }
+                {
+                  chance: 0.035
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:iron_hoe"
+                  }
+                }
+                {
+                  chance: 0.03
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:match_tool"
+                  predicate: {
+                    items: "minecraft:golden_hoe"
+                  }
+                }
+                {
+                  chance: 0.024999999
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:all_of"
+                  terms: [
+                    {
+                      condition: "minecraft:match_tool"
+                      predicate: {
+                        items: "#minecraft:hoes"
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:netherite_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:diamond_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:iron_hoe"
+                        }
+                      }
+                    }
+                    {
+                      condition: "minecraft:inverted"
+                      term: {
+                        condition: "minecraft:match_tool"
+                        predicate: {
+                          items: "minecraft:golden_hoe"
+                        }
+                      }
+                    }
+                  ]
+                }
+                {
+                  chance: 0.02
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:inverted"
+                  term: {
+                    condition: "minecraft:match_tool"
+                    predicate: {
+                      items: "#minecraft:hoes"
+                    }
+                  }
+                }
+                {
+                  chance: 0.01
+                  condition: "minecraft:random_chance"
+                }
+              ]
+              name: "minecolonies:rice"
+            }
           ]
         }
       ]
       rolls: 1
     }
   ]
   random_sequence: "minecolonies:crops/blocks/small_dripleaf"
 }

```


</details>

</blockquote>

</details>

