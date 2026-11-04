# Changelog

# 📦 8.5

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- chore: changelogs
- temp fix rock crystal seeds
- chore: update mod issues
- ci: add stale issue and PR workflow
- ci: raise stale operations cap for backlog run
- ci: allow stale action to manage its state cache
- ci: restore stale operations cap to 30
- Unify Refined Storage expansion recipes
- Closes #2607
- Disable held torch effects to prevent visual artifacts
- Fix Eternal Starlight quest descriptions
- Remove yellorium seed quest
- Fix blank enchanted book reward (#4481)
- Exclude Create tracks from Ultimine
- Closes #4519
- Add bat wing outputs to HNN bat model
- Closes #4518
- Add sulfur block oxidation recipes
- Closes #4514
- Disable randomized Mekanism chemical consumption
- Closes #4444
- Fix quest text typos
- Closes #4436
- Fix Galgadorian drill quest spelling
- Closes #4413
- Fix Infusion Altar quest spelling
- Closes #4351
- Fix electric blast furnace coil quest count
- Closes #4224
- fix: update Turkish Neo Vitae quest translations (#4516)
- AA Multis (#4523)
- * Create aa-multis.js
- * Create aa-multis.js
- * Create black_quartz_casing.json
- * Add files via upload
- * Add files via upload
- * Add files via upload
- * Add files via upload
- * Update en_us.json
- Update French (fr_fr) translation of the Neo Vitae quest chapter (#4525)
- Retranslate the whole chapter (279 texts) against the current en_us file.
- Co-authored-by: aubault83 <282684630+aubault83@users.noreply.github.com>
- Co-authored-by: Claude Opus 5.5 <noreply@anthropic.com>
- Fix Ice and Fire spawning and quest details
- Closes #4358
- Restore Oritech enchanting recipes
- Closes #4337
- Remove MA's Yellorium Seeds (#4527)
- * Remove MA's Yellorium Seeds
- * Rollback tag remove of yellorium stuffs
- Rebalance Oritech Enchanting (#4528)
- Makes the Arcane Catalyst cost an Enchanting Table of the Raven for both of its recipes. I am not content with restoring its recipes as is.
- Prevent Soul Flower harvest multiplication
- chore: bcc
- fix: remove placeholder text
- chore: modlist
- fix: aa schemas</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (42)</summary>

- Amendments (1.21-2.2.4) -> (1.21-2.2.7)
- Aquaculture 2 (2.7.21) -> (2.7.22)
- Ars Nouveau (5.13.3) -> (5.13.4)
- Balm (21.0.66) -> (21.0.67)
- Colorwheel (1.3.0+mc1.21.1) -> (1.3.2+mc1.21.1)
- Cyclops Core (1.30.0) -> (1.30.1)
- Deimos (2.7) -> (2.8)
- Domum Ornamentum (1.0.236-snapshot) -> (1.0.237-snapshot)
- Energy Meter (1.21.1-0.5.3) -> (1.21.1-0.6.0)
- EvilCraft (1.2.99) -> (1.2.100)
- Extended Industrialization (1.16.4-1.21.1) -> (1.16.5-1.21.1)
- ExtendedAE (1.21-2.2.42-neoforge) -> (1.21-2.2.43-neoforge)
- FTB Chunks (2101.1.22) -> (2101.1.23)
- FTB Quests (2101.1.37) -> (2101.1.38)
- GuideME (21.1.21) -> (21.1.22)
- IntegratedCrafting (1.8.0) -> (1.8.1)
- IntegratedDynamics (1.38.1) -> (1.38.2)
- IntegratedScripting (1.0.27) -> (1.1.0)
- IrisSearch (1.8.3-neoforge) -> (1.8.4-neoforge)
- Just Enough Items (19.70.0.464) -> (19.70.0.469)
- KeyBind Bundles (1.4.0) -> (1.5.0)
- KubeJS (2101.7.2-build.377) -> (2101.7.2-build.381)
- Laser Bridges (6.2) -> (6.3)
- Mahou Tsukai (1.21.1-v1.36.29) -> (1.21.1-v1.36.31)
- Mekanism: MoreMachine (1.4.1) -> (1.4.2)
- MezzConfig (0.6.9) -> (0.6.10)
- MineColonies (1.1.1406-1.21.1-snapshot) -> (1.1.1411-1.21.1-snapshot)
- Modern Industrialization (2.5.11) -> (2.5.12)
- Modonomicon (1.121.0) -> (1.123.0)
- Moonlight Lib (1.21.1-3.7.2) -> (1.21.1-3.8.0)
- Neo Vitae (1.1.48) -> (1.1.51)
- NotEnoughAnimations (1.12.6) -> (1.12.7)
- Occultism (1.224.6) -> (1.225.0)
- PneumaticCraft: Repressurized (8.2.23) -> (8.2.24)
- Universal Sawmill (1.21-1.8.1) -> (1.21-1.9.0)
- Sophisticated Backpacks (3.26.17) -> (3.26.19)
- Sophisticated Core (1.5.19) -> (1.5.25)
- Sophisticated Storage (1.6.10) -> (1.6.15)
- Sophisticated Storage In Motion (0.10.36) -> (0.10.38)
- Tesseract API (1.12.19-1.21.1) -> (1.12.20-1.21.1)
- TRansition (1.0.25) -> (1.0.28)
- Variants&Ventures (1.0.28) -> (1.0.29)

</details>

<details open>
<summary>Removed (1)</summary>

- Ars Polymorphia (1.0.3)

</details>

## 🍳 Recipes

<details>
<summary>Added (130)</summary>
<blockquote>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_alltheores_copper_dust_chance_1_0_crushingresult_stack_1_alltheores_copper_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "minecraft:raw_copper"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "alltheores:copper_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "alltheores:copper_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_alltheores_gold_dust_chance_1_0_crushingresult_stack_1_alltheores_gold_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "minecraft:raw_gold"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "alltheores:gold_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "alltheores:gold_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_alltheores_iron_dust_chance_1_0_crushingresult_stack_1_alltheores_iron_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "minecraft:raw_iron"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "alltheores:iron_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "alltheores:iron_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_materialitem_certus_quartz_dust_chance_1_0_crushingresult_stack_1_materialitem_certus_quartz_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "ae2:all_certus_quartz"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "ae2:certus_quartz_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "ae2:certus_quartz_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_materialitem_ender_dust_chance_1_0_crushingresult_stack_1_materialitem_ender_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ender_pearls"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "ae2:ender_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "ae2:ender_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_materialitem_fluix_dust_chance_1_0_crushingresult_stack_1_materialitem_fluix_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "ae2:fluix_crystal"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "ae2:fluix_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "ae2:fluix_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_materialitem_sky_dust_chance_1_0_crushingresult_stack_1_materialitem_sky_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "ae2:sky_stone_block"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "ae2:sky_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "ae2:sky_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_minecraft_cobblestone_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "minecraft:stone"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "minecraft:cobblestone"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_modern_industrialization_antimony_dust_chance_1_0_crushingresult_stack_1_modern_industrialization_antimony_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "modern_industrialization:raw_antimony"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "modern_industrialization:antimony_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "modern_industrialization:antimony_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_modern_industrialization_tungsten_dust_chance_1_0_crushingresult_stack_1_modern_industrialization_tungsten_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "modern_industrialization:raw_tungsten"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "modern_industrialization:tungsten_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "modern_industrialization:tungsten_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_occultism_iesnium_dust_chance_1_0_crushingresult_stack_1_occultism_iesnium_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "occultism:raw_iesnium"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "occultism:iesnium_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "occultism:iesnium_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_silentgear_azure_silver_dust_chance_1_0_crushingresult_stack_1_silentgear_azure_silver_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "silentgear:raw_azure_silver"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "silentgear:azure_silver_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "silentgear:azure_silver_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_1_silentgear_crimson_iron_dust_chance_1_0_crushingresult_stack_1_silentgear_crimson_iron_dust_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "silentgear:raw_crimson_iron"
+  }
+  result: [
+    {
+      result: {
+        count: 1
+        id: "silentgear:crimson_iron_dust"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "silentgear:crimson_iron_dust"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_2_powah_uraninite_raw_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/uraninite_poor"
+  }
+  result: [
+    {
+      result: {
+        count: 2
+        id: "powah:uraninite_raw"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_3_mysticalagriculture_inferium_essence_chance_1_0_crushingresult_stack_1_mysticalagriculture_inferium_essence_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/inferium"
+  }
+  result: [
+    {
+      result: {
+        count: 3
+        id: "mysticalagriculture:inferium_essence"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "mysticalagriculture:inferium_essence"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_3_mysticalagriculture_prosperity_shard_chance_1_0_crushingresult_stack_1_mysticalagriculture_prosperity_shard_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/prosperity"
+  }
+  result: [
+    {
+      result: {
+        count: 3
+        id: "mysticalagriculture:prosperity_shard"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "mysticalagriculture:prosperity_shard"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_3_silentgear_bort_chance_1_0_crushingresult_stack_1_silentgear_bort_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/bort"
+  }
+  result: [
+    {
+      result: {
+        count: 3
+        id: "silentgear:bort"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "silentgear:bort"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_3_theurgy_sal_ammoniac_crystal_chance_1_0_crushingresult_stack_1_theurgy_sal_ammoniac_crystal_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/sal_ammoniac"
+  }
+  result: [
+    {
+      result: {
+        count: 3
+        id: "theurgy:sal_ammoniac_crystal"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "theurgy:sal_ammoniac_crystal"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_alltheores_salt_chance_1_0_crushingresult_stack_1_alltheores_salt_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/salt"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "alltheores:salt"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "alltheores:salt"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_alltheores_sulfur_chance_1_0_crushingresult_stack_1_alltheores_sulfur_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/sulfur"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "alltheores:sulfur"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "alltheores:sulfur"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_irons_spellbooks_raw_mithril_chance_1_0_crushingresult_stack_1_irons_spellbooks_raw_mithril_chance_0_5</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/mithril"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "irons_spellbooks:raw_mithril"
+      }
+    }
+    {
+      chance: 0.5
+      result: {
+        count: 1
+        id: "irons_spellbooks:raw_mithril"
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_minecraft_clay_ball_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    item: "minecraft:clay"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "minecraft:clay_ball"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_powah_uraninite_raw_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/uraninite_regular"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "powah:uraninite_raw"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_xycraft_world_xychorium_gem_blue_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/xychorium_blue"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "xycraft_world:xychorium_gem_blue"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_xycraft_world_xychorium_gem_dark_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/xychorium_dark"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "xycraft_world:xychorium_gem_dark"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_xycraft_world_xychorium_gem_green_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/xychorium_green"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "xycraft_world:xychorium_gem_green"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_xycraft_world_xychorium_gem_light_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/xychorium_light"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "xycraft_world:xychorium_gem_light"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_4_xycraft_world_xychorium_gem_red_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/xychorium_red"
+  }
+  result: [
+    {
+      result: {
+        count: 4
+        id: "xycraft_world:xychorium_gem_red"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/crushingresult_stack_6_powah_uraninite_raw_chance_1_0_crushingresult_stack_0_minecraft_air_chance_0_0</summary>

```diff
+{
+  type: "actuallyadditions:crushing"
+  ingredient: {
+    tag: "c:ores/uraninite_dense"
+  }
+  result: [
+    {
+      result: {
+        count: 6
+        id: "powah:uraninite_raw"
+      }
+    }
+    {
+      chance: 0
+      result: {
+      }
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/Crusher.js"
+    line: 29
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/modern_industrialization_auto_empowerer</summary>

```diff
+{
+  type: "actuallyadditions:empowering"
+  result: {
+    id: "modern_industrialization:auto_empowerer"
+    count: 1
+  }
+  base: {
+    item: "actuallyadditions:black_quartz_block"
+  }
+  modifiers: [
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:empowerer"
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+    }
+  ]
+  color: 3355443
+  energy: 32000
+  time: 200
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 41
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/modern_industrialization_auto_fermenting_press</summary>

```diff
+{
+  type: "actuallyadditions:empowering"
+  result: {
+    id: "modern_industrialization:auto_fermenting_press"
+    count: 1
+  }
+  base: {
+    item: "actuallyadditions:black_quartz_block"
+  }
+  modifiers: [
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:fermenting_barrel"
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:canola_press"
+    }
+  ]
+  color: 3355443
+  energy: 32000
+  time: 200
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 63
+  }
+}

```


</details>

<details>
<summary>actuallyadditions/kjs/modern_industrialization_auto_reconstructor</summary>

```diff
+{
+  type: "actuallyadditions:empowering"
+  result: {
+    id: "modern_industrialization:auto_reconstructor"
+    count: 1
+  }
+  base: {
+    item: "actuallyadditions:black_quartz_block"
+  }
+  modifiers: [
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:atomic_reconstructor"
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+    }
+  ]
+  color: 3355443
+  energy: 32000
+  time: 200
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 52
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1024k_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_1024k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:1024k_item_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1024k_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_1024k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:1024k_item_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1024k_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:1024k_item_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_1024k"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1048576b_fluid_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_1048576b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:1048576b_fluid_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1048576b_fluid_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_1048576b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:1048576b_fluid_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_1048576b_fluid_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:1048576b_fluid_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_1048576b_fluid"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384b_fluid_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_16384b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:16384b_fluid_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384b_fluid_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_16384b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:16384b_fluid_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384b_fluid_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:16384b_fluid_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_16384b_fluid"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384k_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_16384k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:16384k_item_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384k_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_16384k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:16384k_item_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_16384k_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:16384k_item_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_16384k"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_256k_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_256k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:256k_item_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_256k_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_256k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:256k_item_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_256k_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:256k_item_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_256k"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_262144b_fluid_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_262144b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:262144b_fluid_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_262144b_fluid_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_262144b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:262144b_fluid_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_262144b_fluid_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:262144b_fluid_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_262144b_fluid"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_4096k_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_4096k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:4096k_item_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_4096k_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_4096k"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:4096k_item_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_4096k_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:4096k_item_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_4096k"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_65536b_fluid_block</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:block_65536b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:65536b_fluid_storage_block"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_65536b_fluid_disk</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  ingredients: [
+    {
+      type: "neoforge:components"
+      items: [
+        "extrastorage:disk_65536b_fluid"
+      ]
+      components: {
+      }
+      strict: true
+    }
+  ]
+  result: {
+    id: "extradisks:65536b_fluid_storage_disk"
+    count: 1
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 26
+  }
+}

```


</details>

<details>
<summary>allthemods/conversion/extrastorage_65536b_fluid_part</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "extradisks:65536b_fluid_storage_part"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "extrastorage:storagepart_65536b_fluid"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Extra Disks/ExtraStorageConversion.js"
+    line: 16
+  }
+}

```


</details>

<details>
<summary>allthemods/mekanism/oxidizing/sulfur_block</summary>

```diff
+{
+  type: "mekanism:oxidizing"
+  input: {
+    count: 1
+    tag: "c:storage_blocks/sulfur"
+  }
+  output: {
+    amount: 900
+    id: "mekanism:sulfur_dioxide"
+  }
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Mekanism/SulfurOxidizing.js"
+    line: 9
+  }
+}

```


</details>

<details>
<summary>deimos/deimosgeneratedcrafting10</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "laserbridges:laser_attached_receiver"
+    }
+  ]
+  result: {
+    id: "laserbridges:laser_attached_receiver_fence"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>deimos/deimosgeneratedcrafting11</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "laserbridges:laser_attached_receiver_fence"
+    }
+  ]
+  result: {
+    id: "laserbridges:laser_attached_receiver"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>deimos/deimosgeneratedcrafting8</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "IGI"
+    "IEI"
+    "III"
+  ]
+  key: {
+    I: {
+      item: "minecraft:iron_ingot"
+    }
+    G: {
+      item: "minecraft:glass"
+    }
+    E: {
+      item: "minecraft:redstone"
+    }
+  }
+  result: {
+    id: "laserbridges:laser_attached_receiver"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>deimos/deimosgeneratedcrafting9</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "III"
+    "IEG"
+    "III"
+  ]
+  key: {
+    I: {
+      item: "minecraft:iron_ingot"
+    }
+    E: {
+      item: "minecraft:redstone"
+    }
+    G: {
+      item: "minecraft:glass"
+    }
+  }
+  result: {
+    id: "laserbridges:laser_attached_receiver_fence"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_energy_input_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_energy_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "actuallyadditions:laser_relay"
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 317
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_energy_input_hatch_2</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_energy_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_energy_output_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 319
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_energy_output_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_energy_output_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_energy_input_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 321
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_fluid_input_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_fluid_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 329
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_fluid_input_hatch_2</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_fluid_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_fluid_output_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 331
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_fluid_output_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_fluid_output_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_fluid_input_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 333
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_item_input_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_item_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "actuallyadditions:laser_relay_item"
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 323
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_item_input_hatch_2</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_item_input_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_item_output_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 325
+  }
+}

```


</details>

<details>
<summary>kubejs/kjs/modern_industrialization_atomic_item_output_hatch</summary>

```diff
+{
+  type: "kubejs:shapeless"
+  result: {
+    id: "modern_industrialization:atomic_item_output_hatch"
+    count: 1
+  }
+  ingredients: [
+    {
+      item: "modern_industrialization:atomic_item_input_hatch"
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 327
+  }
+}

```


</details>

<details>
<summary>mekmm/compat/mysticalagriculture/phantom</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "mysticalagriculture"
+        }
+      ]
+    }
+  ]
+  type: "mekmm:planting"
+  chemical_input: {
+    amount: 1
+    chemical: "mekmm:nutrient_solution"
+  }
+  item_input: {
+    count: 1
+    item: "mysticalagriculture:phantom_seeds"
+  }
+  main_output: {
+    count: 3
+    id: "mysticalagriculture:phantom_essence"
+  }
+  per_tick_usage: true
+}

```


</details>

<details>
<summary>mekmm/compat/mysticalagriculture/sculk</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "mysticalagriculture"
+        }
+      ]
+    }
+  ]
+  type: "mekmm:planting"
+  chemical_input: {
+    amount: 1
+    chemical: "mekmm:nutrient_solution"
+  }
+  item_input: {
+    count: 1
+    item: "mysticalagriculture:sculk_seeds"
+  }
+  main_output: {
+    count: 3
+    id: "mysticalagriculture:sculk_essence"
+  }
+  per_tick_usage: true
+}

```


</details>

<details>
<summary>mekmm/kjs/aj8bav6hga9mqy2rvoevhpp38</summary>

```diff
+{
+  type: "mekmm:planting"
+  item_input: {
+    count: 1
+    item: "actuallyadditions:canola_seeds"
+  }
+  chemical_input: {
+    amount: 1
+    chemical: "mekmm:nutrient_solution"
+  }
+  main_output: {
+    count: 5
+    id: "actuallyadditions:canola"
+  }
+  secondary_output: {
+    count: 1
+    id: "actuallyadditions:canola_seeds"
+  }
+  secondary_chance: 1
+  per_tick_usage: true
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 293
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/1otfhq5762kqncqj224nff8yz</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_5x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_5x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 227
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/1oxfqeqxwdom1vpb5wqz9tcpf</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_6x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_6x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 231
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/1x89b6p1wlh11okreb9mr6euj</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:lens_of_certain_death"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:lens_of_detonation"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 255
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/24m5srarnhw40raoh66bd2740</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_2x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_2x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 215
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/269imehlls5cwrecvukojxg49</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_diamatine_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:light_blue_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay_ball"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:diamatine_crystal"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay_ball"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/29rkmx879t72v1bmqssdh1a1z</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_palis_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:cyan_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:palis_crystal_block"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/2ixfnuayuiacxk18ron71418a</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "minecraft:soul_sand"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      tag: "c:sands"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 207
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/2zs2i9d5y38sipta7lun2e28h</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_restonia_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      tag: "c:dyes/red"
+      amount: 1
+    }
+    {
+      item: "minecraft:nether_brick"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:restonia_crystal_block"
+      amount: 1
+    }
+    {
+      item: "minecraft:redstone"
+      amount: 1
+    }
+    {
+      item: "minecraft:brick"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/3184a7fczuf4hnh3a81tbhufh</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:lens_of_color"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:lens"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 263
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/36952t5rjvlcf822sxy4bxyv1</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:crystallized_canola_seed"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:canola_seeds"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 202
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/370wa22246bocw3t1xjdanrd0</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:void_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:coal_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 182
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/3g86g6k3ls9nryyf0j89no5z6</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 16
+  duration: 200
+  item_outputs: [
+    {
+      item: "modern_industrialization:auto_reconstructor"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:atomic_reconstructor"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 31
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/3vmudx6183btjpjoh8rk4hmnj</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 16
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_canola_seed"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:canola_seeds"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:canola_seeds"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:crystallized_canola_seed"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:canola_seeds"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:canola_seeds"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 15
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/4adrtaqo94joxrvlpglzofobm</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_void_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:black_dye"
+      amount: 1
+    }
+    {
+      tag: "minecraft:coals"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:void_crystal_block"
+      amount: 1
+    }
+    {
+      item: "minecraft:flint"
+      amount: 1
+    }
+    {
+      tag: "c:stones"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/4ibphwhy6vuihdo1zmqjubig8</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:diamatine_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:diamond"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 161
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/4nufj9hgvc1qq7jj9v21a5fso</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:restonia_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:redstone"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 161
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/4uxrs6ayrylutv504b4tz4cwn</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_emeradic_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:lime_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:short_grass"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:emeradic_crystal"
+      amount: 1
+    }
+    {
+      tag: "minecraft:saplings"
+      amount: 1
+    }
+    {
+      tag: "c:slimeballs"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/5djlrjj3hakq76lyx8988eo2d</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:laser_relay"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:laser_relay_item"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 279
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/66uvs3r8i45kh3rwj60ln9map</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:lens_of_detonation"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:lens_of_color"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 267
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/68vbh9svm8pvcyf01fte027vq</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:void_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      tag: "minecraft:coals"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 178
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/6ijo9666yt4kirg3podgqxu8v</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:lens"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:lens_of_certain_death"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 259
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/6mwize4gkz8ve498azni4zmoo</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_7x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_7x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 235
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/70ki05x8vlcvg7ty1o7xqw2y1</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_enori_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:gray_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:snowball"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:enori_crystal_block"
+      amount: 1
+    }
+    {
+      item: "minecraft:stone_button"
+      amount: 1
+    }
+    {
+      tag: "c:cobblestones"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/7aeefmf3de1ice6aglgxlzdf9</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:ethetic_green_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:chiseled_quartz_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 247
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/7stndda8szud3h97lltxl6bx4</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:palis_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:lapis_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 190
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/7vbkn71z4gbsiuf943cmuersn</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 16
+  duration: 200
+  item_outputs: [
+    {
+      item: "modern_industrialization:auto_empowerer"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:empowerer"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:iron_casing"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 23
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/83t9kq0o1gm3uag5miy0ethh5</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "minecraft:nether_wart"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:red_mushroom"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 251
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/8av1e8lm8mwtarmoe9p9lere6</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_9x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_9x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 243
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/8emyeqljssx2r8t5qp4pj597b</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_void_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:black_dye"
+      amount: 1
+    }
+    {
+      tag: "minecraft:coals"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:void_crystal"
+      amount: 1
+    }
+    {
+      item: "minecraft:flint"
+      amount: 1
+    }
+    {
+      tag: "c:stones"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/8mhivmql14q4ezx3e0f775tvz</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:ethetic_white_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:quartz_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 283
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/95kpuxsthky093q0kwgamud98</summary>

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
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
+        minecraft:enchantments: {
+          levels: {
+            minecraft:unbreaking: 1
+          }
+        }
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
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/recipes/star_altar.js"
+    line: 47
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/99t4sp2ik4nrr5xez3cfqian0</summary>

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
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
+        minecraft:enchantments: {
+          levels: {
+            minecraft:mending: 1
+          }
+        }
+      }
+      type: "neoforge:components"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/recipes/star_altar.js"
+    line: 60
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/9dbm2gukhd1khk85c5alwje1e</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_palis_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:cyan_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:palis_crystal"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/a5jjkwg1y87tkazs8qdtihk40</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:laser_relay_item"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 275
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/a9bm3kzdzta0eh4693x0o9bx2</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_8x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_8x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 239
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/ajso9bsrvcnwohik7qsei9jhn</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_emeradic_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:lime_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:short_grass"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:emeradic_crystal_block"
+      amount: 1
+    }
+    {
+      tag: "minecraft:saplings"
+      amount: 1
+    }
+    {
+      tag: "c:slimeballs"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/az20i9l45e3yxzsajrsqoz590</summary>

```diff
+{
+  type: "modern_industrialization:auto_fermenting_press"
+  eu: 4
+  duration: 40
+  fluid_outputs: [
+    {
+      fluid: "actuallyadditions:refined_canola_oil"
+      amount: 80
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:canola"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/az2z9yaoz9xvuqz2jhf9rfnba</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:laser_relay"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 271
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/b966j24kz6mb6copvx8a5gm4i</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 16
+  duration: 200
+  item_outputs: [
+    {
+      item: "modern_industrialization:auto_fermenting_press"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "actuallyadditions:fermenting_barrel"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:black_quartz_block"
+      amount: 1
+    }
+    {
+      item: "modern_industrialization:analog_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:canola_press"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 39
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/cn1olughmrlkz3mcxetg1tgt4</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 32
+  duration: 200
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_diamatine_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:light_blue_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay_ball"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:diamatine_crystal_block"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay_ball"
+      amount: 1
+    }
+    {
+      item: "minecraft:clay"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 140
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/czag5ip4tz25bdear1jugmj1v</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:emeradic_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:emerald_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 165
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/d4m7t7dm7gm1tubsd6szw1flc</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "minecraft:prismarine_shard"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:quartz"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 291
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/d7g53apu0e0tuocvzrg7o4975</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_enori_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:gray_dye"
+      amount: 1
+    }
+    {
+      item: "minecraft:snowball"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:enori_crystal"
+      amount: 1
+    }
+    {
+      item: "minecraft:stone_button"
+      amount: 1
+    }
+    {
+      tag: "c:cobblestones"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/djkyfknu5dhr0c8jo08xxwxbb</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_1x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_1x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 211
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/drohjewas7d0o4dg30cnui1nq</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:palis_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:lapis_lazuli"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 186
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/dtmy1tckafm8jphe3r0p346dy</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:restonia_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:redstone_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 165
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/el5f3ela5dijawgo6n958l4m8</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:enori_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:iron_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 174
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/ezqmofibzrew4tu6n9pth6gfz</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_3x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_3x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 219
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/f4uvav933q2mt37z1wv5rlvbm</summary>

```diff
+{
+  type: "modern_industrialization:auto_empowerer"
+  eu: 64
+  duration: 400
+  item_outputs: [
+    {
+      item: "actuallyadditions:empowered_restonia_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      tag: "c:dyes/red"
+      amount: 1
+    }
+    {
+      item: "minecraft:nether_brick"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:restonia_crystal"
+      amount: 1
+    }
+    {
+      item: "minecraft:redstone"
+      amount: 1
+    }
+    {
+      item: "minecraft:brick"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 132
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/hlguf1s44f9ykckfb72zvp0p</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "allthecompressed:soul_sand_4x"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "allthecompressed:sand_4x"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 223
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/k3l7d02huwdeal4lzopjn9h9</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:enori_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:iron_ingot"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 170
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/uufjx0o652zhju1khhyyi5ve</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:emeradic_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:emerald"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 161
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/wybyt6tnz8ifld30ei3m89vr</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 64
+  duration: 100
+  item_outputs: [
+    {
+      item: "actuallyadditions:diamatine_crystal_block"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:diamond_block"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 165
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/yl4xhpcki7zqyo2wpdj2ziwf</summary>

```diff
+{
+  type: "modern_industrialization:auto_reconstructor"
+  eu: 32
+  duration: 100
+  item_outputs: [
+    {
+      item: "minecraft:leather"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "minecraft:rotten_flesh"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Actually Additions/aa-multis.js"
+    line: 287
+  }
+}

```


</details>

<details>
<summary>oritech/crafting/catalyst</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    b: {
+      item: "apothic_enchanting:raven_enchanting_table"
+    }
+    c: {
+      item: "oritech:unholy_intelligence"
+    }
+    s: {
+      item: "oritech:adamant_ingot"
+    }
+    m: {
+      tag: "c:obsidians/normal"
+    }
+    f: {
+      item: "oritech:fluxite"
+    }
+  }
+  pattern: [
+    "fff"
+    "mcm"
+    "sbs"
+  ]
+  result: {
+    count: 1
+    id: "oritech:enchantment_catalyst_block"
+  }
+  _kubejs_changed_marker: {
+    source: ""
+    line: 0
+  }
+}

```


</details>

<details>
<summary>oritech/crafting/catalyst_alt</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    b: {
+      item: "apothic_enchanting:raven_enchanting_table"
+    }
+    c: {
+      item: "oritech:super_ai_chip"
+    }
+    s: {
+      item: "oritech:adamant_ingot"
+    }
+    m: {
+      tag: "c:obsidians/normal"
+    }
+    f: {
+      item: "oritech:fluxite"
+    }
+  }
+  pattern: [
+    "fff"
+    "mcm"
+    "sbs"
+  ]
+  result: {
+    count: 1
+    id: "oritech:enchantment_catalyst_block"
+  }
+  _kubejs_changed_marker: {
+    source: ""
+    line: 0
+  }
+}

```


</details>

<details>
<summary>oritech/crafting/enchanter</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    b: {
+      item: "oritech:duratium_ingot"
+    }
+    c: {
+      item: "oritech:enchantment_catalyst_block"
+    }
+    f: {
+      item: "minecraft:book"
+    }
+    s: {
+      item: "oritech:energite_ingot"
+    }
+  }
+  pattern: [
+    "fff"
+    "fcf"
+    "sbs"
+  ]
+  result: {
+    count: 1
+    id: "oritech:enchanter_block"
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
<summary>mysticalagriculture/seed/infusion/rock_crystal</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "mysticalagriculture:crop_enabled"
           crop: "mysticalagriculture:rock_crystal"
         }
         {
           type: "mysticalagriculture:crop_has_material"
           crop: "mysticalagriculture:rock_crystal"
         }
       ]
     }
   ]
   type: "mysticalagriculture:infusion"
   ingredients: [
     {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:rock_crystal"
+      item: "astralsorcery:rock_crystal"
     }
     {
       type: "mysticalagriculture:crop_component"
       component: "essence"
       crop: "mysticalagriculture:rock_crystal"
     }
     {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:rock_crystal"
+      item: "astralsorcery:rock_crystal"
     }
     {
       type: "mysticalagriculture:crop_component"
       component: "essence"
       crop: "mysticalagriculture:rock_crystal"
     }
     {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:rock_crystal"
+      item: "astralsorcery:rock_crystal"
     }
     {
       type: "mysticalagriculture:crop_component"
       component: "essence"
       crop: "mysticalagriculture:rock_crystal"
     }
     {
-      type: "mysticalagriculture:crop_component"
-      component: "material"
-      crop: "mysticalagriculture:rock_crystal"
+      item: "astralsorcery:rock_crystal"
     }
     {
       type: "mysticalagriculture:crop_component"
       component: "essence"
       crop: "mysticalagriculture:rock_crystal"
     }
   ]
   input: {
     type: "mysticalagriculture:crop_component"
     component: "seed"
     crop: "mysticalagriculture:rock_crystal"
   }
   result: {
     count: 1
     id: "mysticalagriculture:rock_crystal_seeds"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (79)</summary>
<blockquote>

<details>
<summary>actuallyadditions/kjs/1wnh3jjxkqco2pum7zr4j4w68</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/xychorium_green"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "xycraft_world:xychorium_gem_green"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/1worf7i529fcog0gbs3a3c3e6</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "minecraft:raw_copper"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "alltheores:copper_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "alltheores:copper_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/2i86rhljj7cadjipovwj6zpws</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/xychorium_blue"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "xycraft_world:xychorium_gem_blue"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/38zko36i09xigwxko5lmcw7op</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "minecraft:raw_gold"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "alltheores:gold_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "alltheores:gold_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/3l89ogksupfo7uiqfyo7qx5oi</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "silentgear:raw_crimson_iron"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "silentgear:crimson_iron_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "silentgear:crimson_iron_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/3mrrsn693p28z2vu06g0t7in4</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "minecraft:clay"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "minecraft:clay_ball"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/3tf208f1ttic5cr826r5q3kj4</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "silentgear:raw_azure_silver"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "silentgear:azure_silver_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "silentgear:azure_silver_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/48ph9gj9xrwbwvxsxsrhhgm0n</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/sal_ammoniac"
-  }
-  result: [
-    {
-      result: {
-        count: 3
-        id: "theurgy:sal_ammoniac_crystal"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "theurgy:sal_ammoniac_crystal"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/4a96tlb3j7htlxsj9uhqvy7bi</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "minecraft:stone"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "minecraft:cobblestone"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/5kz43btywhbqpgzb7po20nchk</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/uraninite_poor"
-  }
-  result: [
-    {
-      result: {
-        count: 2
-        id: "powah:uraninite_raw"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/5vrke7weukoq849iyjjrzh03s</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/xychorium_red"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "xycraft_world:xychorium_gem_red"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/5yqfyou69uapycs9srdq4yqhb</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "ae2:sky_stone_block"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "ae2:sky_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "ae2:sky_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/738s6re40o38z0nlpl71kjbk9</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/inferium"
-  }
-  result: [
-    {
-      result: {
-        count: 3
-        id: "mysticalagriculture:inferium_essence"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "mysticalagriculture:inferium_essence"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/7ucno93251rkxzl8o1i4wq25x</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/xychorium_dark"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "xycraft_world:xychorium_gem_dark"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/7xgqxyg7oz68lxgc57vlg248a</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "ae2:fluix_crystal"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "ae2:fluix_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "ae2:fluix_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/8cwd8r320x173hl03syur93q9</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "ae2:all_certus_quartz"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "ae2:certus_quartz_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "ae2:certus_quartz_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/8wuffg00iqw79270ilrzvzsmo</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/uraninite_regular"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "powah:uraninite_raw"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/a0lup69ddgmmzy2vyicssluzv</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/sulfur"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "alltheores:sulfur"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "alltheores:sulfur"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/a0zhwas6amkodnl9cejvxs03j</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/salt"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "alltheores:salt"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "alltheores:salt"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/av1nwzw8ppnk881fdhtn2sqjf</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/xychorium_light"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "xycraft_world:xychorium_gem_light"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/b0ysys2baafmsnj723wq5khc4</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "modern_industrialization:raw_tungsten"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "modern_industrialization:tungsten_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "modern_industrialization:tungsten_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/br0dlwz16ftjzglcl6fdx6136</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ender_pearls"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "ae2:ender_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "ae2:ender_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/bvjixpzczjte7kuvd696frfhb</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/prosperity"
-  }
-  result: [
-    {
-      result: {
-        count: 3
-        id: "mysticalagriculture:prosperity_shard"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "mysticalagriculture:prosperity_shard"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/c8g4izjafzr9iroowzysn8g4j</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/mithril"
-  }
-  result: [
-    {
-      result: {
-        count: 4
-        id: "irons_spellbooks:raw_mithril"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "irons_spellbooks:raw_mithril"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/cca42ubkd7cpwn86sx9is4mm5</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/bort"
-  }
-  result: [
-    {
-      result: {
-        count: 3
-        id: "silentgear:bort"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "silentgear:bort"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/d4a1an0kec0jy01wwe2afn6o8</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    tag: "c:ores/uraninite_dense"
-  }
-  result: [
-    {
-      result: {
-        count: 6
-        id: "powah:uraninite_raw"
-      }
-    }
-    {
-      chance: 0
-      result: {
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 29
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/d7lyq2vk3wjcxmiqf1lt8xh5n</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "minecraft:raw_iron"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "alltheores:iron_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "alltheores:iron_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/fda6lqunsyxyl61wnzmm3fdt</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "occultism:raw_iesnium"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "occultism:iesnium_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "occultism:iesnium_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>actuallyadditions/kjs/i1dpudmb5fofeut860y1ppks</summary>

```diff
-{
-  type: "actuallyadditions:crushing"
-  ingredient: {
-    item: "modern_industrialization:raw_antimony"
-  }
-  result: [
-    {
-      result: {
-        count: 1
-        id: "modern_industrialization:antimony_dust"
-      }
-    }
-    {
-      chance: 0.5
-      result: {
-        count: 1
-        id: "modern_industrialization:antimony_dust"
-      }
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Actually Additions/Crusher.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_1024k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/items/1024k"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_1048576b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/fluids/1048576b"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_16384b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/fluids/16384b"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_16384k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/items/16384k"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_256k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/items/256k"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_262144b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/fluids/262144b"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_4096k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/items/4096k"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shaped/disk_65536b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-    S: {
-      tag: "refinedstorage:parts/fluids/65536b"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RSR"
-    "III"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_1024k</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/items/1024k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_1048576b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/fluids/1048576b"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_16384b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/fluids/16384b"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_16384k</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/items/16384k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_256k</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/items/256k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_262144b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/fluids/262144b"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_4096k</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/items/4096k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/disk/shapeless/disk_65536b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "refinedstorage:storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/fluids/65536b"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_1024k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/items/256k"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_1048576b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/fluids/262144b"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_16384b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      item: "refinedstorage:4096b_fluid_storage_part"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_16384k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/items/4096k"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_256k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      item: "refinedstorage:64k_storage_part"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_262144b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/fluids/65536b"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_4096k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/items/1024k"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/part/storagepart_65536b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "refinedstorage:advanced_processor"
-    }
-    G: {
-      tag: "refinedstorage:parts/fluids/16384b"
-    }
-    I: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DID"
-    "GRG"
-    "DGD"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:storagepart_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_1024k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/1024k"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_1048576b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/1048576b"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_16384b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/16384b"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_16384k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/16384k"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_256k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/256k"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_262144b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/262144b"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_4096k</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/4096k"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_block/block_65536b_fluid</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    M: {
-      item: "refinedstorage:machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/65536b"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "EPE"
-    "EME"
-    "ERE"
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_1024k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_block"
-    }
-    {
-      item: "refinedstorage:16k_storage_block"
-    }
-    {
-      item: "refinedstorage:1k_storage_block"
-    }
-    {
-      item: "refinedstorage:4k_storage_block"
-    }
-    {
-      item: "extrastorage:block_256k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_1024k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_1048576b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:256b_fluid_storage_block"
-    }
-    {
-      item: "extrastorage:block_262144b_fluid"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_block"
-    }
-    {
-      item: "extrastorage:block_65536b_fluid"
-    }
-    {
-      item: "extrastorage:block_16384b_fluid"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_1048576b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_16384b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:256b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_block"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_16384b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_16384k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_block"
-    }
-    {
-      item: "refinedstorage:16k_storage_block"
-    }
-    {
-      item: "refinedstorage:1k_storage_block"
-    }
-    {
-      item: "extrastorage:block_1024k"
-    }
-    {
-      item: "refinedstorage:4k_storage_block"
-    }
-    {
-      item: "extrastorage:block_4096k"
-    }
-    {
-      item: "extrastorage:block_256k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_16384k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_256k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_block"
-    }
-    {
-      item: "refinedstorage:16k_storage_block"
-    }
-    {
-      item: "refinedstorage:1k_storage_block"
-    }
-    {
-      item: "refinedstorage:4k_storage_block"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_256k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_262144b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:256b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_block"
-    }
-    {
-      item: "extrastorage:block_65536b_fluid"
-    }
-    {
-      item: "extrastorage:block_16384b_fluid"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_262144b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_4096k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_block"
-    }
-    {
-      item: "refinedstorage:16k_storage_block"
-    }
-    {
-      item: "refinedstorage:1k_storage_block"
-    }
-    {
-      item: "extrastorage:block_1024k"
-    }
-    {
-      item: "refinedstorage:4k_storage_block"
-    }
-    {
-      item: "extrastorage:block_256k"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_4096k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/block_65536b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:256b_fluid_storage_block"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_block"
-    }
-    {
-      item: "extrastorage:block_16384b_fluid"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:block_65536b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_1024k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/256k"
-    }
-    {
-      item: "refinedstorage:1k_storage_disk"
-    }
-    {
-      item: "refinedstorage:16k_storage_disk"
-    }
-    {
-      item: "refinedstorage:4k_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1024k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_1024k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_1048576b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "extrastorage:disk_262144b_fluid"
-    }
-    {
-      item: "refinedstorage:256b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_disk"
-    }
-    {
-      item: "extrastorage:disk_16384b_fluid"
-    }
-    {
-      item: "extrastorage:disk_65536b_fluid"
-    }
-    {
-      item: "refinedstorage:64b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_1048576b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_1048576b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_16384b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:256b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:64b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_16384b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_16384k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/256k"
-    }
-    {
-      item: "refinedstorage:1k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/1024k"
-    }
-    {
-      item: "refinedstorage:16k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/4096k"
-    }
-    {
-      item: "refinedstorage:4k_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_16384k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_16384k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_256k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_disk"
-    }
-    {
-      item: "refinedstorage:1k_storage_disk"
-    }
-    {
-      item: "refinedstorage:16k_storage_disk"
-    }
-    {
-      item: "refinedstorage:4k_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_256k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_256k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_262144b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:256b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_disk"
-    }
-    {
-      item: "extrastorage:disk_16384b_fluid"
-    }
-    {
-      item: "extrastorage:disk_65536b_fluid"
-    }
-    {
-      item: "refinedstorage:64b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_262144b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_262144b_fluid"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_4096k_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:64k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/256k"
-    }
-    {
-      item: "refinedstorage:1k_storage_disk"
-    }
-    {
-      tag: "refinedstorage:disks/items/1024k"
-    }
-    {
-      item: "refinedstorage:16k_storage_disk"
-    }
-    {
-      item: "refinedstorage:4k_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_4096k"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_4096k"
-  }
-}

```


</details>

<details>
<summary>extrastorage/storage_upgrade/disk_65536b_fluid_upgrade</summary>

```diff
-{
-  type: "extrastorage:upgrade_recipe"
-  base_disk: [
-    {
-      item: "refinedstorage:256b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:4096b_fluid_storage_disk"
-    }
-    {
-      item: "extrastorage:disk_16384b_fluid"
-    }
-    {
-      item: "refinedstorage:64b_fluid_storage_disk"
-    }
-    {
-      item: "refinedstorage:1024b_fluid_storage_disk"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extrastorage:disk_65536b_fluid"
-  }
-  storage_part: {
-    item: "extrastorage:storagepart_65536b_fluid"
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/7rg55evqu14ql00je0p0nk5t7</summary>

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
-        minecraft:enchantments: {
-          levels: {
-            minecraft:mending: 1
-          }
-        }
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
-      }
-      type: "neoforge:components"
-      amount: 1
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/recipes/star_altar.js"
-    line: 60
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/8bf1icnkgb909q5smnvtdfro1</summary>

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
-        minecraft:enchantments: {
-          levels: {
-            minecraft:unbreaking: 1
-          }
-        }
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
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
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/recipes/star_altar.js"
-    line: 47
-  }
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
<summary>minecraft:block/neovitae:quarry_blacklist</summary>

```diff
+[
+  "#c:ores/allthemodium?"
+  "#c:ores/unobtainium?"
+  "#c:ores/vibranium?"
+]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:underfoot_blacklist</summary>

```diff
+[
+  "create:super_glue?"
+]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:underfoot_whitelist</summary>

```diff
+[
+  "minecraft:item"
+]

```


</details>

<details>
<summary>minecraft:entity_type/minecolonies:raider_targets</summary>

```diff
+[
+  "minecolonies:citizen"
+  "minecolonies:mercenary"
+  "minecraft:iron_golem"
+  "minecraft:villager"
+]

```


</details>

<details>
<summary>minecraft:item/amendments:held_pickup_blacklist</summary>

```diff
+[
+  "supplementaries:lunch_basket?"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (18)</summary>
<blockquote>

<details>
<summary>minecraft:block/ftbultimine:excluded_blocks</summary>

```diff
 [
+  "#create:tracks"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:beacon_base_blocks</summary>

```diff
 [
   ... (137 entries)
+  "aquaculture:neptunium_block"
   ... (123 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (6813 entries)
+  "laserbridges:laser_attached_receiver"
+  "laserbridges:laser_attached_receiver_fence"
   ... (2124 entries)
+  "modern_industrialization:atomic_energy_input_hatch"
+  "modern_industrialization:atomic_energy_output_hatch"
+  "modern_industrialization:atomic_fluid_input_hatch"
+  "modern_industrialization:atomic_fluid_output_hatch"
+  "modern_industrialization:atomic_item_input_hatch"
+  "modern_industrialization:atomic_item_output_hatch"
+  "modern_industrialization:auto_empowerer"
+  "modern_industrialization:auto_fermenting_press"
   ... (1 entries)
+  "modern_industrialization:auto_reconstructor"
   ... (6507 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:axolotl_hunt_targets</summary>

```diff
 [
+  "aquaculture:arapaima"
+  "aquaculture:atlantic_cod"
+  "aquaculture:atlantic_halibut"
+  "aquaculture:atlantic_herring"
+  "aquaculture:bayad"
+  "aquaculture:blackfish"
+  "aquaculture:bluegill"
+  "aquaculture:boulti"
+  "aquaculture:brown_shrooma"
+  "aquaculture:brown_trout"
+  "aquaculture:capitaine"
+  "aquaculture:carp"
+  "aquaculture:catfish"
+  "aquaculture:gar"
+  "aquaculture:jellyfish"
+  "aquaculture:minnow"
+  "aquaculture:muskellunge"
+  "aquaculture:pacific_halibut"
+  "aquaculture:perch"
+  "aquaculture:pink_salmon"
+  "aquaculture:piranha"
+  "aquaculture:pollock"
+  "aquaculture:rainbow_trout"
+  "aquaculture:red_grouper"
+  "aquaculture:red_shrooma"
+  "aquaculture:smallmouth_bass"
+  "aquaculture:synodontis"
+  "aquaculture:tambaqui"
+  "aquaculture:tuna"
   ... (14 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:can_breathe_under_water</summary>

```diff
 [
   ... (1 entries)
+  "aquaculture:arapaima"
+  "aquaculture:atlantic_cod"
+  "aquaculture:atlantic_halibut"
+  "aquaculture:atlantic_herring"
+  "aquaculture:bayad"
+  "aquaculture:blackfish"
+  "aquaculture:bluegill"
+  "aquaculture:boulti"
+  "aquaculture:brown_shrooma"
+  "aquaculture:brown_trout"
+  "aquaculture:capitaine"
+  "aquaculture:carp"
+  "aquaculture:catfish"
+  "aquaculture:gar"
+  "aquaculture:jellyfish"
+  "aquaculture:minnow"
+  "aquaculture:muskellunge"
+  "aquaculture:pacific_halibut"
+  "aquaculture:perch"
+  "aquaculture:pink_salmon"
+  "aquaculture:piranha"
+  "aquaculture:pollock"
+  "aquaculture:rainbow_trout"
+  "aquaculture:red_grouper"
+  "aquaculture:red_shrooma"
+  "aquaculture:smallmouth_bass"
+  "aquaculture:synodontis"
+  "aquaculture:tambaqui"
+  "aquaculture:tuna"
   ... (84 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/minecraft:not_scary_for_pufferfish</summary>

```diff
 [
+  "aquaculture:arapaima"
+  "aquaculture:atlantic_cod"
+  "aquaculture:atlantic_halibut"
+  "aquaculture:atlantic_herring"
+  "aquaculture:bayad"
+  "aquaculture:blackfish"
+  "aquaculture:bluegill"
+  "aquaculture:boulti"
+  "aquaculture:brown_shrooma"
+  "aquaculture:brown_trout"
+  "aquaculture:capitaine"
+  "aquaculture:carp"
+  "aquaculture:catfish"
+  "aquaculture:gar"
+  "aquaculture:jellyfish"
+  "aquaculture:minnow"
+  "aquaculture:muskellunge"
+  "aquaculture:pacific_halibut"
+  "aquaculture:perch"
+  "aquaculture:pink_salmon"
+  "aquaculture:piranha"
+  "aquaculture:pollock"
+  "aquaculture:rainbow_trout"
+  "aquaculture:red_grouper"
+  "aquaculture:red_shrooma"
+  "aquaculture:smallmouth_bass"
+  "aquaculture:synodontis"
+  "aquaculture:tambaqui"
+  "aquaculture:tuna"
   ... (27 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:chests</summary>

```diff
 [
   ... (7 entries)
+  "aquaculture:neptunes_bounty"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods</summary>

```diff
 [
   ... (28 entries)
+  "aquaculture:algae"
   ... (1 entries)
+  "aquaculture:sushi"
   ... (139 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:foods/soup</summary>

```diff
 [
   ... (1 entries)
+  "aquaculture:turtle_soup"
   ... (40 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/melee_weapon</summary>

```diff
 [
   ... (28 entries)
+  "aquaculture:neptunium_axe"
+  "aquaculture:neptunium_sword"
   ... (161 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:tools/mining_tool</summary>

```diff
 [
   ... (9 entries)
+  "aquaculture:neptunium_pickaxe"
   ... (58 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:beacon_payment_items</summary>

```diff
 [
   ... (13 entries)
+  "aquaculture:neptunium_ingot"
   ... (41 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:cluster_max_harvestables</summary>

```diff
 [
   ... (15 entries)
+  "aquaculture:neptunium_pickaxe"
   ... (84 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/origins:meat</summary>

```diff
 [
+  "aquaculture:arapaima"
+  "aquaculture:atlantic_cod"
+  "aquaculture:atlantic_halibut"
+  "aquaculture:atlantic_herring"
+  "aquaculture:bayad"
+  "aquaculture:blackfish"
+  "aquaculture:bluegill"
+  "aquaculture:boulti"
+  "aquaculture:brown_shrooma"
+  "aquaculture:brown_trout"
+  "aquaculture:capitaine"
+  "aquaculture:carp"
+  "aquaculture:catfish"
+  "aquaculture:fish_fillet_cooked"
+  "aquaculture:fish_fillet_raw"
+  "aquaculture:gar"
+  "aquaculture:minnow"
+  "aquaculture:muskellunge"
+  "aquaculture:pacific_halibut"
+  "aquaculture:perch"
+  "aquaculture:pink_salmon"
+  "aquaculture:piranha"
+  "aquaculture:pollock"
+  "aquaculture:rainbow_trout"
+  "aquaculture:red_grouper"
+  "aquaculture:red_shrooma"
+  "aquaculture:smallmouth_bass"
+  "aquaculture:synodontis"
+  "aquaculture:tambaqui"
+  "aquaculture:tuna"
   ... (8 entries)
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/iceandfire:entity_gen/amphithere</summary>

```diff
 [
-  "allthemodium:desert"
-  "allthemodium:desert_hills"
+  "#minecraft:is_jungle"
 ]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:is_scrappable</summary>

```diff
 [
+  "neovitae:aquatic_agility"
   ... (7 entries)
+  "neovitae:gills"
   ... (3 entries)
+  "neovitae:lava_strider"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:tooltip_order</summary>

```diff
 [
+  "neovitae:aquatic_agility"
   ... (10 entries)
+  "neovitae:gills"
   ... (4 entries)
+  "neovitae:lava_strider"
   ... (17 entries)
 ]

```


</details>

<details>
<summary>neovitae:sentient_upgrades/neovitae:trainer</summary>

```diff
 [
+  "neovitae:exp/aquatic_agility"
   ... (5 entries)
+  "neovitae:exp/gills"
   ... (3 entries)
+  "neovitae:exp/lava_strider"
   ... (7 entries)
 ]

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
   ... (25186 entries)
+  "extended_industrialization:atomic_tesla_receiver_hatch"
   ... (2158 entries)
+  "laserbridges:laser_attached_receiver"
+  "laserbridges:laser_attached_receiver_fence"
   ... (5529 entries)
+  "modern_industrialization:atomic_energy_input_hatch"
+  "modern_industrialization:atomic_energy_output_hatch"
+  "modern_industrialization:atomic_fluid_input_hatch"
+  "modern_industrialization:atomic_fluid_output_hatch"
+  "modern_industrialization:atomic_item_input_hatch"
+  "modern_industrialization:atomic_item_output_hatch"
+  "modern_industrialization:atomic_lv_transformer"
+  "modern_industrialization:atomic_mv_transformer"
+  "modern_industrialization:atomic_storage_unit"
+  "modern_industrialization:auto_empowerer"
+  "modern_industrialization:auto_fermenting_press"
   ... (1 entries)
+  "modern_industrialization:auto_reconstructor"
   ... (143 entries)
+  "modern_industrialization:lv_atomic_transformer"
   ... (11 entries)
+  "modern_industrialization:mv_atomic_transformer"
   ... (16033 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (789 entries)
+  "extended_industrialization:atomic_tesla_receiver_hatch"
   ... (984 entries)
+  "modern_industrialization:atomic_energy_input_hatch"
+  "modern_industrialization:atomic_energy_output_hatch"
+  "modern_industrialization:atomic_fluid_input_hatch"
+  "modern_industrialization:atomic_fluid_output_hatch"
+  "modern_industrialization:atomic_item_input_hatch"
+  "modern_industrialization:atomic_item_output_hatch"
+  "modern_industrialization:atomic_lv_transformer"
+  "modern_industrialization:atomic_mv_transformer"
+  "modern_industrialization:atomic_storage_unit"
+  "modern_industrialization:auto_empowerer"
+  "modern_industrialization:auto_fermenting_press"
   ... (1 entries)
+  "modern_industrialization:auto_reconstructor"
   ... (64 entries)
+  "modern_industrialization:lv_atomic_transformer"
   ... (6 entries)
+  "modern_industrialization:mv_atomic_transformer"
   ... (965 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (32130 entries)
+  "extended_industrialization:atomic_tesla_receiver_hatch"
   ... (3942 entries)
+  "laserbridges:laser_attached_receiver"
+  "laserbridges:laser_attached_receiver_fence"
   ... (6762 entries)
+  "modern_industrialization:atomic_energy_input_hatch"
+  "modern_industrialization:atomic_energy_output_hatch"
+  "modern_industrialization:atomic_fluid_input_hatch"
+  "modern_industrialization:atomic_fluid_output_hatch"
+  "modern_industrialization:atomic_item_input_hatch"
+  "modern_industrialization:atomic_item_output_hatch"
+  "modern_industrialization:atomic_lv_transformer"
+  "modern_industrialization:atomic_mv_transformer"
+  "modern_industrialization:atomic_storage_unit"
+  "modern_industrialization:auto_empowerer"
+  "modern_industrialization:auto_fermenting_press"
   ... (1 entries)
+  "modern_industrialization:auto_reconstructor"
   ... (401 entries)
+  "modern_industrialization:lv_atomic_transformer"
   ... (27 entries)
+  "modern_industrialization:mv_atomic_transformer"
   ... (21211 entries)
 ]

```


</details>

<details>
<summary>recipe_type</summary>

```diff
 [
   ... (252 entries)
+  "modern_industrialization:auto_empowerer"
+  "modern_industrialization:auto_fermenting_press"
   ... (1 entries)
+  "modern_industrialization:auto_reconstructor"
   ... (176 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/laserbridges/blocks/laser_attached_receiver</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "laserbridges:laser_attached_receiver"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/laserbridges/blocks/laser_attached_receiver_fence</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "laserbridges:laser_attached_receiver_fence"
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

<details>
<summary>Changed (86)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/mahoutsukai/fae</summary>

```diff
 {
-  type: "mahoutsukai:fae"
+  type: "minecraft:entity"
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
                 max: 2
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
           name: "mahoutsukai:fae_essence"
         }
       ]
       rolls: 1
     }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_centrifuging_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_centrifuging_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_centrifuging_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_crystallizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_crystallizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_crystallizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_dissolving_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_dissolving_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_dissolving_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_lathing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_lathing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_lathing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_liquifying_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_liquifying_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_liquifying_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_oxidizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_oxidizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_oxidizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_painting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_painting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_painting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_pigment_extracting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_pigment_extracting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_pigment_extracting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_planting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_planting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_planting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_pressing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_pressing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_pressing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_pressurised_reacting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_pressurised_reacting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_pressurised_reacting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_recycling_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_recycling_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_recycling_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_replicating_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_replicating_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_replicating_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_rolling_mill_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_rolling_mill_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_rolling_mill_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_stamping_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_stamping_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_stamping_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/creative_washing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:creative_washing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/creative_washing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_centrifuging_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_centrifuging_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_centrifuging_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_crystallizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_crystallizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_crystallizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_dissolving_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_dissolving_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_dissolving_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_lathing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_lathing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_lathing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_liquifying_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_liquifying_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_liquifying_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_oxidizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_oxidizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_oxidizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_painting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_painting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_painting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_pigment_extracting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_pigment_extracting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_pigment_extracting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_planting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_planting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_planting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_pressing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_pressing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_pressing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_pressurised_reacting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_pressurised_reacting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_pressurised_reacting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_recycling_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_recycling_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_recycling_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_replicating_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_replicating_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_replicating_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_rolling_mill_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_rolling_mill_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_rolling_mill_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_stamping_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_stamping_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_stamping_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/dense_washing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:dense_washing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/dense_washing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_gas_burning_generator</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanismgenerators"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:large_gas_burning_generator"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/large_gas_burning_generator"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_heat_generator</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanismgenerators"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:heat_data"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:large_heat_generator"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/large_heat_generator"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_wind_generator</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanismgenerators"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:large_wind_generator"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/large_wind_generator"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_centrifuging_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_centrifuging_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_centrifuging_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_crystallizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_crystallizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_crystallizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_dissolving_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_dissolving_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_dissolving_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_lathing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_lathing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_lathing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_liquifying_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_liquifying_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_liquifying_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_oxidizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_oxidizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_oxidizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_painting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_painting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_painting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_pigment_extracting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_pigment_extracting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_pigment_extracting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_planting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_planting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_planting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_pressing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_pressing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_pressing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_pressurised_reacting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_pressurised_reacting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_pressurised_reacting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_recycling_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_recycling_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_recycling_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_replicating_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_replicating_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_replicating_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_rolling_mill_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_rolling_mill_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_rolling_mill_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_stamping_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_stamping_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_stamping_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/multiversal_washing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:multiversal_washing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/multiversal_washing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_centrifuging_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_centrifuging_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_centrifuging_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_crystallizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_crystallizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_crystallizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_dissolving_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_dissolving_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_dissolving_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_lathing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_lathing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_lathing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_liquifying_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_liquifying_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_liquifying_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_oxidizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_oxidizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_oxidizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_painting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_painting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_painting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_pigment_extracting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_pigment_extracting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_pigment_extracting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_planting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_planting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_planting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_pressing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_pressing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_pressing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_pressurised_reacting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_pressurised_reacting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_pressurised_reacting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_recycling_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_recycling_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_recycling_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_replicating_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_replicating_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_replicating_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_rolling_mill_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_rolling_mill_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_rolling_mill_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_stamping_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_stamping_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_stamping_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/overclocked_washing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:overclocked_washing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/overclocked_washing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_centrifuging_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_centrifuging_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_centrifuging_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_crystallizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_crystallizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_crystallizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_dissolving_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_dissolving_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_dissolving_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_lathing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_lathing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_lathing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_liquifying_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_liquifying_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_liquifying_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_oxidizing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_oxidizing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_oxidizing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_painting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:survives_explosion"
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_painting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_painting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_pigment_extracting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_pigment_extracting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_pigment_extracting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_planting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_planting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_planting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_pressing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_pressing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_pressing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_pressurised_reacting_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_pressurised_reacting_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_pressurised_reacting_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_recycling_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_recycling_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_recycling_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_replicating_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_replicating_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_replicating_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_rolling_mill_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_rolling_mill_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_rolling_mill_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_stamping_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_stamping_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_stamping_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/quantum_washing_factory</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "evolvedmekanism"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:ejector"
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:side_config"
                 "mekanism:sorting"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:quantum_washing_factory"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/quantum_washing_factory"
 }

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/solar_heat_generator</summary>

```diff
 {
+  neoforge:conditions: [
+    {
+      type: "neoforge:mod_loaded"
+      modid: "mekanismgenerators"
+    }
+  ]
   type: "minecraft:block"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           functions: [
             {
               function: "minecraft:copy_name"
               source: "block_entity"
             }
             {
               function: "minecraft:copy_components"
               include: [
                 "mekanism:owner"
                 "mekanism:redstone_control"
                 "mekanism:security"
                 "mekanism:upgrades"
                 "mekanism:energy"
                 "mekanism:items"
                 "mekanism:fluids"
                 "mekanism:chemicals"
                 "mekanism:heat_data"
               ]
               source: "block_entity"
             }
           ]
           name: "mekmm:solar_heat_generator"
         }
       ]
       name: "main"
       rolls: 1
     }
   ]
   random_sequence: "mekmm:blocks/solar_heat_generator"
 }

```


</details>

<details>
<summary>minecraft/loot_table/oritech/blocks/wither_crop_block</summary>

```diff
 {
-  functions: [
-    {
-      function: "minecraft:explosion_decay"
-    }
-  ]
   type: "minecraft:block"
   pools: [
     {
-      bonus_rolls: 0
       entries: [
         {
-          children: [
-            {
-              type: "minecraft:item"
-              conditions: [
-                {
-                  block: "oritech:wither_crop_block"
-                  condition: "minecraft:block_state_property"
-                  properties: {
-                    age: "7"
-                  }
-                }
-              ]
-              name: "minecraft:air"
-            }
-            {
-              type: "minecraft:item"
-              name: "oritech:wither_crop_block"
-            }
-          ]
+          name: "oritech:wither_crop_block"
-          type: "minecraft:alternatives"
+          type: "minecraft:item"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      conditions: [
-        {
-          block: "oritech:wither_crop_block"
-          condition: "minecraft:block_state_property"
-          properties: {
-            age: "7"
-          }
-        }
-      ]
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              enchantment: "minecraft:fortune"
-              formula: "minecraft:binomial_with_bonus_count"
-              function: "minecraft:apply_bonus"
-              parameters: {
-                extra: 3
-                probability: 0.5714286
-              }
-            }
-          ]
-          name: "oritech:wither_crop_block"
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

