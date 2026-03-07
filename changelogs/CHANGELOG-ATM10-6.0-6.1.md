# Changelog

# 📦 6.1

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details>
<summary>Updated (45)</summary>

- Actually Additions (1.3.24) -> (1.3.25)
- Advanced Peripherals (0.7.59b) -> (0.7.60b)
- AE2WTLib (19.4.0) -> (19.4.1)
- AE2WTLib API (19.4.0) -> (19.4.1)
- All The Leaks (1.1.6+1.21.1-neoforge) -> (1.1.7+1.21.1-neoforge)
- AllTheTweaks (2.8.4) -> (2.8.5)
- Apotheosis (8.5.1) -> (8.5.2)
- Ars Elemental (0.7.8.4) -> (0.7.8.6)
- Ars Ocultas (2.2.1) -> (2.4.0)
- L_Ender's Cataclysm 1.21.1 (3.23) -> (3.24)
- Construction Sticks (1.2.3) -> (1.3.0)
- Crash Assistant (1.10.30) -> (1.11.0)
- Crystalix (2.4.0) -> (2.4.1)
- ChoiceTheorem's Overhauled Village (3.6.2-beta.1) -> (3.6.2a)
- Ender Core (8.1.1-beta) -> (8.2.1-alpha)
- Ender IO (8.1.1-beta) -> (8.2.1-alpha)
- Ender IO - Modded Conduits (8.1.1-beta) -> (8.2.1-alpha)
- ExperienceLib (1.1.1) -> (1.2.1)
- Extended Industrialization (1.15.30-1.21.1) -> (1.15.32-1.21.1)
- Extreme Sound Muffler (3.54) -> (3.55)
- FTB Quests (2101.1.21) -> (2101.1.22)
- FTB XMod Compat (21.1.7) -> (21.1.8)
- GeckoLib 4 (4.8.3) -> (4.8.4)
- Mama's Herbs and Harvest (1.21.1-6) -> (1.21.1-8)
- Iron's Spells 'n Spellbooks (1.21.1-3.15.3) -> (1.21.1-3.15.4)
- Jupiter (2.3.5) -> (2.3.6)
- Lithostitched (1.5.7) -> (1.6.0)
- MineColonies (1.1.1281-1.21.1-snapshot) -> (1.1.1282-1.21.1-snapshot)
- Moonlight Lib (1.21-2.29.18) -> (1.21-2.29.20)
- PneumaticCraft: Repressurized (8.2.16) -> (8.2.17)
- PotionsMaster (0.7.1-packdev) -> (1.0.1)
- Productive Bees (1.21.1-13.13.0) -> (1.21.1-13.13.1)
- Productive Trees (1.21.1-0.8.0) -> (1.21.1-0.8.1)
- QuarryPlus (21.1.146) -> (21.1.147)
- Rechiseled (1.2.3) -> (1.2.4)
- Sauce Library (0.0.20.62) -> (0.0.21.64)
- Super Factory Manager (SFM) (4.29.0) -> (4.31.0)
- Silent Gear (4.1.1) -> (4.1.2)
- Sophisticated Backpacks (3.25.28) -> (3.25.30)
- Sophisticated Core (1.4.5) -> (1.4.6)
- Structurize (1.0.815-1.21.1-snapshot) -> (1.0.816-1.21.1)
- Stylecolonies (1.15.47-1.21.1) -> (1.15.50-1.21.1)
- Supplementaries (1.21-3.5.24) -> (1.21-3.5.26)
- Utility vest (1.2.2) -> (1.2.5)
- Waystones (21.1.27) -> (21.1.28)

</details>


## 🍳 Recipes

<details>
<summary>Added (99)</summary>
<blockquote>

<details>
<summary>almostunified/potionsmaster</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "potionsmaster"
+  recipes: [
+    "1$aluminum_crafting"
+    "1$copper_crafting"
+    "1$diamond_crafting"
+    "1$emerald_crafting"
+    "1$gold_crafting"
+    "1$iron_crafting"
+    "1$lapis_crafting"
+    "1$lead_crafting"
+    "1$nickel_crafting"
+    "1$osmium_crafting"
+    "1$platinum_crafting"
+    "1$redstone_crafting"
+    "1$silver_crafting"
+    "1$tin_crafting"
+    "1$uranium_crafting"
+    "1$zinc_crafting"
+  ]
+}

```


</details>

<details>
<summary>ars_elemancy/lava_chestplate_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:earth_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_chestplate_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:fire_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_leggings_heavy_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:earth_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_leggings_heavy_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:fire_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_pants_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:earth_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_pants_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:fire_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_tunic_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:earth_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/lava_tunic_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemancy:lava_essence"
+    }
+    {
+      item: "ars_elemental:fire_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:lava_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_chestplate_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:aqua_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_chestplate_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:earth_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_leggings_heavy_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:aqua_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_leggings_heavy_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:earth_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_pants_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:aqua_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_pants_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:earth_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_tunic_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:aqua_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/mire_tunic_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemancy:mire_essence"
+    }
+    {
+      item: "ars_elemental:earth_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:mire_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_chestplate_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:earth_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_chestplate_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:air_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_leggings_heavy_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:earth_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_leggings_heavy_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:air_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_pants_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:earth_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_pants_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:air_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_tunic_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:earth_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/silt_tunic_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemancy:silt_essence"
+    }
+    {
+      item: "ars_elemental:air_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:earth_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:silt_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_chestplate_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:aqua_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_chestplate_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:air_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_leggings_heavy_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:aqua_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_leggings_heavy_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:air_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_pants_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:aqua_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_pants_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:air_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_tunic_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:aqua_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:air_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/tempest_tunic_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemancy:tempest_essence"
+    }
+    {
+      item: "ars_elemental:air_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:tempest_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_chestplate_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:aqua_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_chestplate_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:fire_chestplate"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_chestplate"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_chestplate"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_leggings_heavy_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:aqua_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_leggings_heavy_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:fire_leggings_heavy"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_leggings_heavy"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_leggings_heavy"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_pants_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:aqua_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_pants_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:fire_pants"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_pants"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_pants"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_tunic_1</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:aqua_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:fire_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemancy/vapor_tunic_2</summary>

```diff
+{
+  type: "sauce:armor_upgrade"
+  pedestalItems: [
+    {
+      item: "ars_elemental:mark_of_mastery"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemancy:vapor_essence"
+    }
+    {
+      item: "ars_elemental:fire_tunic"
+    }
+  ]
+  reagent: {
+    item: "ars_elemental:aqua_tunic"
+  }
+  result: {
+    count: 1
+    id: "ars_elemancy:vapor_tunic"
+  }
+  sourceCost: 7000
+}

```


</details>

<details>
<summary>ars_elemental/ritual_pollination</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "ars_nouveau:green_archwood_log"
+    }
+    {
+      item: "minecraft:honeycomb"
+    }
+    {
+      item: "minecraft:honeycomb"
+    }
+    {
+      tag: "minecraft:flowers"
+    }
+    {
+      tag: "minecraft:flowers"
+    }
+    {
+      item: "ars_nouveau:earth_essence"
+    }
+  ]
+  result: {
+    count: 1
+    id: "ars_elemental:ritual_pollination"
+  }
+}

```


</details>

<details>
<summary>enderio/big_advanced_item_filter</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    F: {
+      item: "enderio:advanced_item_filter"
+    }
+    S: {
+      item: "minecraft:shulker_shell"
+    }
+  }
+  pattern: [
+    "S"
+    "F"
+    "S"
+  ]
+  result: {
+    count: 1
+    id: "enderio:big_advanced_item_filter"
+  }
+}

```


</details>

<details>
<summary>enderio/big_item_filter</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    D: {
+      tag: "c:dusts/obsidian"
+    }
+    P: {
+      item: "minecraft:paper"
+    }
+    S: {
+      item: "enderio:skeletal_contractor"
+    }
+  }
+  pattern: [
+    "DPD"
+    "PSP"
+    "DPD"
+  ]
+  result: {
+    count: 1
+    id: "enderio:big_item_filter"
+  }
+}

```


</details>

<details>
<summary>enderio/erase_limited_item_filter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "enderio:limited_item_filter"
+    }
+  ]
+  result: {
+    count: 1
+    id: "enderio:limited_item_filter"
+  }
+}

```


</details>

<details>
<summary>enderio/limited_item_filter</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    C: {
+      item: "minecraft:comparator"
+    }
+    F: {
+      item: "enderio:advanced_item_filter"
+    }
+  }
+  pattern: [
+    "CFC"
+  ]
+  result: {
+    count: 1
+    id: "enderio:limited_item_filter"
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
<summary>pneumaticcraft/assembly/reinforced_pressure_chamber_valve</summary>

```diff
+{
+  type: "pneumaticcraft:assembly_laser"
+  input: {
+    count: 1
+    item: "pneumaticcraft:unassembled_reinforced_pressure_chamber_valve"
+  }
+  program: "laser"
+  result: {
+    count: 1
+    id: "pneumaticcraft:reinforced_pressure_chamber_valve"
+  }
+}

```


</details>

<details>
<summary>pneumaticcraft/unassembled_reinforced_pressure_chamber_valve</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      item: "pneumaticcraft:pressure_chamber_valve"
+    }
+    {
+      item: "pneumaticcraft:reinforced_air_canister_array"
+    }
+  ]
+  result: {
+    count: 1
+    id: "pneumaticcraft:unassembled_reinforced_pressure_chamber_valve"
+  }
+}

```


</details>

<details>
<summary>potionsmaster/allthemodium_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:allthemodium_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_allthemodium_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/allthemodium_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "allthemodium:raw_allthemodium"
+    }
+  ]
+  result: {
+    id: "potionsmaster:allthemodium_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/aluminum_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:aluminum_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_aluminum_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/aluminum_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/aluminum"
+    }
+  ]
+  result: {
+    id: "potionsmaster:aluminum_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/coal_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:coal_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_coal_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/coal_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "minecraft:coal"
+    }
+  ]
+  result: {
+    id: "potionsmaster:coal_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/copper_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:copper_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_copper_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/copper_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/copper"
+    }
+  ]
+  result: {
+    id: "potionsmaster:copper_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/diamond_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:diamond_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_diamond_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/diamond_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:gems/diamond"
+    }
+  ]
+  result: {
+    id: "potionsmaster:diamond_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/emerald_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:emerald_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_emerald_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/emerald_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:gems/emerald"
+    }
+  ]
+  result: {
+    id: "potionsmaster:emerald_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/gold_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:gold_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_gold_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/gold_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/gold"
+    }
+  ]
+  result: {
+    id: "potionsmaster:gold_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/iron_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:iron_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_iron_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/iron_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/iron"
+    }
+  ]
+  result: {
+    id: "potionsmaster:iron_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/lapis_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:lapis_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_lapis_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/lapis_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:gems/lapis"
+    }
+  ]
+  result: {
+    id: "potionsmaster:lapis_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/lead_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:lead_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_lead_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/lead_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/lead"
+    }
+  ]
+  result: {
+    id: "potionsmaster:lead_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/netherite_scrap_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:netherite_scrap_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_netherite_scrap_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/netherite_scrap_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "minecraft:netherite_scrap"
+    }
+  ]
+  result: {
+    id: "potionsmaster:netherite_scrap_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/nickel_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:nickel_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_nickel_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/nickel_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/nickel"
+    }
+  ]
+  result: {
+    id: "potionsmaster:nickel_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/osmium_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:osmium_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_osmium_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/osmium_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/osmium"
+    }
+  ]
+  result: {
+    id: "potionsmaster:osmium_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/platinum_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:platinum_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_platinum_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/platinum_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/platinum"
+    }
+  ]
+  result: {
+    id: "potionsmaster:platinum_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/quartz_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:quartz_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_quartz_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/quartz_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "minecraft:quartz"
+    }
+  ]
+  result: {
+    id: "potionsmaster:quartz_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/redstone_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:redstone_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_redstone_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/redstone_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:dusts/redstone"
+    }
+  ]
+  result: {
+    id: "potionsmaster:redstone_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/silver_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:silver_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_silver_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/silver_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/silver"
+    }
+  ]
+  result: {
+    id: "potionsmaster:silver_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/tin_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:tin_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_tin_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/tin_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/tin"
+    }
+  ]
+  result: {
+    id: "potionsmaster:tin_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/unobtainium_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:unobtainium_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_unobtainium_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/unobtainium_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "allthemodium:raw_unobtainium"
+    }
+  ]
+  result: {
+    id: "potionsmaster:unobtainium_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/uranium_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:uranium_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_uranium_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/uranium_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/uranium"
+    }
+  ]
+  result: {
+    id: "potionsmaster:uranium_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/vibranium_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:vibranium_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_vibranium_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/vibranium_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      item: "allthemodium:raw_vibranium"
+    }
+  ]
+  result: {
+    id: "potionsmaster:vibranium_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>potionsmaster/zinc_blasting</summary>

```diff
+{
+  type: "minecraft:blasting"
+  ingredient: {
+    item: "potionsmaster:zinc_oresight_powder"
+  }
+  result: {
+    id: "potionsmaster:calcinated_zinc_oresight_powder"
+    count: 1
+  }
+  experience: 0.1
+  cookingtime: 100
+}

```


</details>

<details>
<summary>potionsmaster/zinc_crafting</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  group: "potionsmaster:ore_powder"
+  ingredients: [
+    {
+      item: "potionsmaster:pestle"
+    }
+    {
+      item: "potionsmaster:tile_mortar"
+    }
+    {
+      item: "minecraft:glowstone"
+    }
+    {
+      item: "potionsmaster:ender_powder"
+    }
+    {
+      tag: "c:raw_materials/zinc"
+    }
+  ]
+  result: {
+    id: "potionsmaster:zinc_oresight_powder"
+    count: 1
+  }
+}

```


</details>

<details>
<summary>productivebees/block_conversion/lootr/sussy_gravel_to_sussy_gravel</summary>

```diff
+{
+  type: "productivebees:block_conversion"
+  bees: [
+    "productivebees:sussy"
+  ]
+  from: {
+    Name: "lootr:suspicious_gravel"
+    Properties: {
+      dusted: 0
+    }
+  }
+  to: {
+    Name: "minecraft:suspicious_gravel"
+  }
+  chance: 0.5
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:sussy"
+        }
+        {
+          type: "neoforge:mod_loaded"
+          modid: "lootr"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>productivebees/block_conversion/lootr/sussy_sand_to_sussy_sand</summary>

```diff
+{
+  type: "productivebees:block_conversion"
+  bees: [
+    "productivebees:sussy"
+  ]
+  from: {
+    Name: "lootr:suspicious_sand"
+    Properties: {
+      dusted: 0
+    }
+  }
+  to: {
+    Name: "minecraft:suspicious_sand"
+  }
+  chance: 0.5
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "productivebees:bee_exists"
+          bee: "productivebees:sussy"
+        }
+        {
+          type: "neoforge:mod_loaded"
+          modid: "lootr"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>sawmill/sawmill</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "building"
+  key: {
+    #: {
+      tag: "minecraft:wooden_slabs"
+    }
+    |: {
+      tag: "minecraft:wooden_fences"
+    }
+    -: {
+      item: "minecraft:stick"
+    }
+    E: {
+      tag: "c:ingots/iron"
+    }
+  }
+  pattern: [
+    "---"
+    "|E|"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "sawmill:sawmill"
+  }
+  show_notification: true
+}

```


</details>

<details>
<summary>supplementaries/cannon_boat</summary>

```diff
+{
+  category: "misc"
+  result: {
+    id: "supplementaries:biomeswevegone/cannon_boat_zelkova"
+    count: 1
+  }
+  ingredients: [
+    {
+      ingredient: {
+        item: "supplementaries:cannon"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "biomeswevegone:zelkova"
+      type: "moonlight:block_type_swap"
+    }
+    {
+      ingredient: {
+        item: "minecraft:oak_boat"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "biomeswevegone:zelkova"
+      type: "moonlight:block_type_swap"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "cannon_boat"
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "supplementaries:flag"
+          flag: "cannon_boat"
+        }
+      ]
+    }
+  ]
+}

```


</details>

<details>
<summary>supplementaries/way_sign</summary>

```diff
+{
+  category: "misc"
+  result: {
+    id: "supplementaries:biomeswevegone/way_sign_zelkova"
+    count: 2
+  }
+  ingredients: [
+    {
+      ingredient: {
+        item: "minecraft:oak_sign"
+      }
+      block_type: "minecraft:wood_type"
+      from: "minecraft:oak"
+      to: "biomeswevegone:zelkova"
+      type: "moonlight:block_type_swap"
+    }
+  ]
+  type: "minecraft:crafting_shapeless"
+  fabric:load_conditions: [
+    {
+      condition: "supplementaries:flag"
+      flag: "way_sign"
+    }
+  ]
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "supplementaries:flag"
+          flag: "way_sign"
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
<summary>Changed (24)</summary>
<blockquote>

<details>
<summary>enderio/sag_milling/mossy_cobblestone</summary>

```diff
 {
+  bonus: "none"
   type: "enderio:sag_milling"
   energy: 2400
   input: {
     tag: "c:cobblestones/mossy"
   }
   outputs: [
     {
       item: {
         count: 1
         id: "minecraft:cobblestone"
       }
     }
     {
       chance: 0.7
       item: {
         count: 1
         id: "minecraft:vine"
       }
     }
   ]
 }

```


</details>

<details>
<summary>pneumaticcraft/heat_pipe</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     B: {
-      tag: "c:storage_blocks/compressed_iron"
+      tag: "pneumaticcraft:heat_pipe_conductors"
     }
     W: {
       item: "pneumaticcraft:thermal_lagging"
     }
   }
   pattern: [
     "WWW"
     "BBB"
     "WWW"
   ]
   result: {
     count: 6
     id: "pneumaticcraft:heat_pipe"
   }
 }

```


</details>

<details>
<summary>productivebees/centrifuge/reactors/honeycomb_inanite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "productivebees:bee_exists"
           bee: "productivebees:inanite"
         }
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/inanite"
           }
         }
       ]
     }
   ]
   type: "productivebees:centrifuge"
   fluid: {
     amount: 50
     fluid: "productivebees:honey"
   }
   ingredient: {
     type: "productivebees:component"
     components: {
       productivebees:bee_type: "productivebees:inanite"
     }
     items: "productivebees:configurable_honeycomb"
   }
   outputs: [
     {
       chance: 1
       item: {
         tag: "c:waxes"
       }
       max: 1
       min: 1
     }
     {
-      chance: 1
+      chance: 0.6
       item: {
         tag: "c:ingots/inanite"
       }
       max: 1
       min: 1
     }
   ]
   processingTime: 0
 }

```


</details>

<details>
<summary>productivebees/centrifuge/reactors/honeycomb_insanite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "productivebees:bee_exists"
           bee: "productivebees:insanite"
         }
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/insanite"
           }
         }
       ]
     }
   ]
   type: "productivebees:centrifuge"
   fluid: {
     amount: 50
     fluid: "productivebees:honey"
   }
   ingredient: {
     type: "productivebees:component"
     components: {
       productivebees:bee_type: "productivebees:insanite"
     }
     items: "productivebees:configurable_honeycomb"
   }
   outputs: [
     {
       chance: 1
       item: {
         tag: "c:waxes"
       }
       max: 1
       min: 1
     }
     {
-      chance: 1
+      chance: 0.5
       item: {
         tag: "c:ingots/insanite"
       }
       max: 1
       min: 1
     }
   ]
   processingTime: 0
 }

```


</details>

<details>
<summary>productivebees/centrifuge/reactors/honeycomb_ludicrite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "productivebees:bee_exists"
           bee: "productivebees:ludicrite"
         }
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/ludicrite"
           }
         }
       ]
     }
   ]
   type: "productivebees:centrifuge"
   fluid: {
     amount: 50
     fluid: "productivebees:honey"
   }
   ingredient: {
     type: "productivebees:component"
     components: {
       productivebees:bee_type: "productivebees:ludicrite"
     }
     items: "productivebees:configurable_honeycomb"
   }
   outputs: [
     {
       chance: 1
       item: {
         tag: "c:waxes"
       }
       max: 1
       min: 1
     }
     {
-      chance: 1
+      chance: 0.8
       item: {
         tag: "c:ingots/ludicrite"
       }
       max: 1
       min: 1
     }
   ]
   processingTime: 0
 }

```


</details>

<details>
<summary>productivebees/centrifuge/reactors/honeycomb_magentite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "productivebees:bee_exists"
           bee: "productivebees:magentite"
         }
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/magentite"
           }
         }
       ]
     }
   ]
   type: "productivebees:centrifuge"
   fluid: {
     amount: 50
     fluid: "productivebees:honey"
   }
   ingredient: {
     type: "productivebees:component"
     components: {
       productivebees:bee_type: "productivebees:magentite"
     }
     items: "productivebees:configurable_honeycomb"
   }
   outputs: [
     {
       chance: 1
       item: {
         tag: "c:waxes"
       }
       max: 1
       min: 1
     }
     {
-      chance: 1
+      chance: 0.9
       item: {
         tag: "c:ingots/magentite"
       }
       max: 1
       min: 1
     }
   ]
   processingTime: 0
 }

```


</details>

<details>
<summary>productivebees/centrifuge/reactors/honeycomb_ridiculite</summary>

```diff
 {
   neoforge:conditions: [
     {
       type: "almostunified:conditional"
       conditions_met: true
       original_conditions: [
         {
           type: "productivebees:bee_exists"
           bee: "productivebees:ridiculite"
         }
         {
           type: "neoforge:not"
           value: {
             type: "neoforge:tag_empty"
             tag: "c:ingots/ridiculite"
           }
         }
       ]
     }
   ]
   type: "productivebees:centrifuge"
   fluid: {
     amount: 50
     fluid: "productivebees:honey"
   }
   ingredient: {
     type: "productivebees:component"
     components: {
       productivebees:bee_type: "productivebees:ridiculite"
     }
     items: "productivebees:configurable_honeycomb"
   }
   outputs: [
     {
       chance: 1
       item: {
         tag: "c:waxes"
       }
       max: 1
       min: 1
     }
     {
-      chance: 1
+      chance: 0.7
       item: {
         tag: "c:ingots/ridiculite"
       }
       max: 1
       min: 1
     }
   ]
   processingTime: 0
 }

```


</details>

<details>
<summary>regions_unexplored/black_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/black"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:black_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/blue_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/blue"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:blue_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/brown_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/brown"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:brown_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/cyan_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/cyan"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:cyan_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/gray_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/gray"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:gray_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/green_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/green"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:green_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/light_blue_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/light_blue"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:light_blue_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/light_gray_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/light_gray"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:light_gray_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/lime_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/lime"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:lime_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/magenta_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/magenta"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:magenta_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/orange_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/orange"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:orange_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/pink_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/pink"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:pink_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/prismaglass</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "stained_glass"
   key: {
+    #: {
+      tag: "c:glass_blocks/colorless"
+    }
     X: {
       tag: "regions_unexplored:prismarite_crystals"
     }
   }
   pattern: [
     " X "
     " X "
-    "X X"
+    "X#X"
   ]
   result: {
     count: 2
     id: "regions_unexplored:prismaglass"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/purple_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/purple"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:purple_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/red_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/red"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:red_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/white_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/white"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:white_painted_planks"
   }
 }

```


</details>

<details>
<summary>regions_unexplored/yellow_painted_planks</summary>

```diff
 {
-  _kubejs_changed_marker: {
-    source: ""
-    line: 0
-  }
   type: "minecraft:crafting_shaped"
   category: "building"
   group: "painted_planks"
   key: {
+    X: {
+      tag: "c:dyes/yellow"
+    }
     #: {
       tag: "minecraft:planks"
     }
   }
   pattern: [
-    "# #"
     "###"
     "###"
+    "#X#"
   ]
   result: {
     count: 8
     id: "regions_unexplored:yellow_painted_planks"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (361)</summary>
<blockquote>

<details>
<summary>kubejs/kjs/potionsmaster_allthemodium_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:allthemodium_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/allthemodium"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_aluminum_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:aluminum_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/aluminum"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_coal_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:coal_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      item: "minecraft:coal"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_copper_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:copper_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/copper"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_diamond_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:diamond_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:gems/diamond"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_emerald_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:emerald_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:gems/emerald"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_gold_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:gold_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/gold"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_iron_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:iron_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/iron"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_lapis_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:lapis_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:gems/lapis"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_lead_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:lead_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/lead"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_netherite_scrap_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:netherite_scrap_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      item: "minecraft:netherite_scrap"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_nickel_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:nickel_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/nickel"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_osmium_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:osmium_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/osmium"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_platinum_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:platinum_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/platinum"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_quartz_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:quartz_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:gems/quartz"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_redstone_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:redstone_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      item: "minecraft:redstone"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_silver_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:silver_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/silver"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_tin_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:tin_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/tin"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_unobtainium_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:unobtainium_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/unobtainium"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_uranium_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:uranium_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/uranium"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_vibranium_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:vibranium_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/vibranium"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>kubejs/kjs/potionsmaster_zinc_oresight_powder</summary>

```diff
-{
-  type: "kubejs:shaped"
-  result: {
-    id: "potionsmaster:zinc_oresight_powder"
-    count: 1
-  }
-  pattern: [
-    "EGR"
-    "OPM"
-    "   "
-  ]
-  key: {
-    P: {
-      item: "potionsmaster:pestle"
-    }
-    R: {
-      item: "minecraft:redstone"
-    }
-    E: {
-      item: "potionsmaster:ender_powder"
-    }
-    M: {
-      item: "potionsmaster:tile_mortar"
-    }
-    G: {
-      item: "minecraft:glowstone_dust"
-    }
-    O: {
-      tag: "c:raw_materials/zinc"
-    }
-  }
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 7
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_allthemodium_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_allthemodium_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:allthemodium_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_aluminum_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_aluminum_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:aluminum_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_coal_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_coal_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:coal_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_copper_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_copper_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:copper_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_diamond_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_diamond_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:diamond_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_emerald_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_emerald_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:emerald_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_gold_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_gold_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:gold_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_iron_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_iron_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:iron_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_lapis_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_lapis_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:lapis_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_lead_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_lead_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:lead_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_netherite_scrap_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_netherite_scrap_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:netherite_scrap_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_nickel_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_nickel_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:nickel_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_osmium_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_osmium_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:osmium_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_platinum_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_platinum_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:platinum_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_quartz_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_quartz_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:quartz_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_redstone_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_redstone_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:redstone_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_silver_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_silver_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:silver_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_tin_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_tin_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:tin_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_unobtainium_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_unobtainium_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:unobtainium_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_uranium_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_uranium_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:uranium_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_vibranium_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_vibranium_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:vibranium_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
-  }
-}

```


</details>

<details>
<summary>minecraft/kjs/potionsmaster_calcinated_zinc_oresight_powder</summary>

```diff
-{
-  type: "minecraft:blasting"
-  result: {
-    id: "potionsmaster:calcinated_zinc_oresight_powder"
-    count: 1
-  }
-  ingredient: {
-    item: "potionsmaster:zinc_oresight_powder"
-  }
-  experience: 5
-  cookingtime: 200
-  _kubejs_changed_marker: {
-    source: "server_scripts:mods/Potionsmaster/potionsmaster_recipes.js"
-    line: 19
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

<details>
<summary>nyctography/crafting/nyctography_pattern</summary>

```diff
-{
-  bookshelf:load_conditions: [
-    {
-      type: "nyctography:config"
-      property: "nyctography:craftable_banner_pattern"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "minecraft:paper"
-    }
-    {
-      item: "minecraft:feather"
-    }
-    {
-      item: "minecraft:black_dye"
-    }
-    {
-      item: "minecraft:tinted_glass"
-    }
-  ]
-  result: {
-    id: "nyctography:nyctography_pattern"
-    count: 1
-  }
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/aether/skyroot</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:aether/cannon_boat_skyroot"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "aether:skyroot"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "aether:skyroot"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/ars_nouveau/archwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:ars_nouveau/cannon_boat_archwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "ars_nouveau:archwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "ars_nouveau:archwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/aspen</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_aspen"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:aspen"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:aspen"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/baobab</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_baobab"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:baobab"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:baobab"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/blue_enchanted</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_blue_enchanted"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:blue_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:blue_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/cika</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_cika"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cika"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cika"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/cypress</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_cypress"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cypress"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cypress"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/ebony</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_ebony"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ebony"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ebony"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/fir</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_fir"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:fir"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:fir"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/florus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_florus"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:florus"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:florus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/green_enchanted</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_green_enchanted"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:green_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:green_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/holly</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_holly"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:holly"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:holly"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/ironwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_ironwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ironwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ironwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/jacaranda</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_jacaranda"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:jacaranda"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:jacaranda"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/mahogany</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_mahogany"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:mahogany"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:mahogany"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_maple"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:maple"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_palm"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:palm"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_pine"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:pine"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/rainbow_eucalyptus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_rainbow_eucalyptus"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:rainbow_eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:rainbow_eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/redwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_redwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:redwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:redwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/sakura</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_sakura"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:sakura"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:sakura"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/skyris</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_skyris"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:skyris"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:skyris"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/spirit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_spirit"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:spirit"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:spirit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/white_mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_white_mangrove"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:white_mangrove"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:white_mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_willow"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:willow"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/witch_hazel</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_witch_hazel"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:witch_hazel"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:witch_hazel"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/biomeswevegone/zelkova</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/cannon_boat_zelkova"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:zelkova"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:zelkova"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/deeperdarker/bloom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:deeperdarker/cannon_boat_bloom"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:bloom"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:bloom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/deeperdarker/echo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:deeperdarker/cannon_boat_echo"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:echo"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:echo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/banyin</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_banyin"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:banyin"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:banyin"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/cradlewood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_cradlewood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:cradlewood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:cradlewood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/jinglestem</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_jinglestem"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:jinglestem"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:jinglestem"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/lunar</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_lunar"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:lunar"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:lunar"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/northland</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_northland"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:northland"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:northland"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/scarlet</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_scarlet"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:scarlet"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:scarlet"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/eternal_starlight/torreya</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/cannon_boat_torreya"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:torreya"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:torreya"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/forbidden_arcanus/aurum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:forbidden_arcanus/cannon_boat_aurum"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "forbidden_arcanus:aurum"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "forbidden_arcanus:aurum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/forbidden_arcanus/edelwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:forbidden_arcanus/cannon_boat_edelwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "forbidden_arcanus:edelwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "forbidden_arcanus:edelwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/acacia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_acacia"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:acacia"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:acacia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/bamboo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_bamboo"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:bamboo"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:bamboo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/birch</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_birch"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:birch"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:birch"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_cherry"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:cherry"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/dark_oak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_dark_oak"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:dark_oak"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:dark_oak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/jungle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_jungle"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:jungle"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:jungle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_mangrove"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/minecraft/spruce</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:cannon_boat_spruce"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:spruce"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:spruce"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/baobab</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_baobab"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:baobab"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:baobab"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/blackwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_blackwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:blackwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:blackwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/cypress</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_cypress"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:cypress"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:cypress"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/dead</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_dead"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:dead"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:dead"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/eucalyptus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_eucalyptus"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/joshua</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_joshua"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:joshua"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:joshua"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/kapok</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_kapok"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:kapok"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:kapok"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/larch</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_larch"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:larch"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:larch"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/magnolia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_magnolia"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:magnolia"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:magnolia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_maple"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:maple"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/mauve</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_mauve"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:mauve"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:mauve"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_palm"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:palm"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_pine"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:pine"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/redwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_redwood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:redwood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:redwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/socotra</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_socotra"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:socotra"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:socotra"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/regions_unexplored/willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/cannon_boat_willow"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:willow"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/canopy</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_canopy"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:canopy"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:canopy"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/dark</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_dark"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:dark"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:dark"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_mangrove"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/mining</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_mining"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mining"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mining"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/sorting</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_sorting"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:sorting"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:sorting"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/time</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_time"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:time"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:time"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/transformation</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_transformation"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:transformation"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:transformation"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/twilightforest/twilight_oak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/cannon_boat_twilight_oak"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:twilight_oak"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:twilight_oak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/undergarden/grongle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/cannon_boat_grongle"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:grongle"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:grongle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/undergarden/smogstem</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/cannon_boat_smogstem"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:smogstem"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:smogstem"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/cannon_boat/undergarden/wigglewood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/cannon_boat_wigglewood"
-    count: 1
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "supplementaries:cannon"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:wigglewood"
-      type: "moonlight:block_type_swap"
-    }
-    {
-      ingredient: {
-        item: "minecraft:oak_boat"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:wigglewood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "cannon_boat"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "cannon_boat"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/aether/skyroot</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:aether/way_sign_skyroot"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "aether:skyroot"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/ars_nouveau/archwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:ars_nouveau/way_sign_archwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "ars_nouveau:archwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/aspen</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_aspen"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:aspen"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/baobab</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_baobab"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:baobab"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/blue_enchanted</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_blue_enchanted"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:blue_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/cika</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_cika"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cika"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/cypress</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_cypress"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:cypress"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/ebony</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_ebony"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ebony"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/fir</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_fir"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:fir"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/florus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_florus"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:florus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/green_enchanted</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_green_enchanted"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:green_enchanted"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/holly</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_holly"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:holly"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/ironwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_ironwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:ironwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/jacaranda</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_jacaranda"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:jacaranda"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/mahogany</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_mahogany"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:mahogany"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_maple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_palm"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_pine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/rainbow_eucalyptus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_rainbow_eucalyptus"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:rainbow_eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/redwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_redwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:redwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/sakura</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_sakura"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:sakura"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/skyris</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_skyris"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:skyris"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/spirit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_spirit"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:spirit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/white_mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_white_mangrove"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:white_mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_willow"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/witch_hazel</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_witch_hazel"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:witch_hazel"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/biomeswevegone/zelkova</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:biomeswevegone/way_sign_zelkova"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "biomeswevegone:zelkova"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/deeperdarker/bloom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:deeperdarker/way_sign_bloom"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:bloom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/deeperdarker/echo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:deeperdarker/way_sign_echo"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "deeperdarker:echo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/banyin</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_banyin"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:banyin"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/cradlewood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_cradlewood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:cradlewood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/jinglestem</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_jinglestem"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:jinglestem"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/lunar</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_lunar"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:lunar"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/northland</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_northland"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:northland"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/scarlet</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_scarlet"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:scarlet"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/eternal_starlight/torreya</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:eternal_starlight/way_sign_torreya"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "eternal_starlight:torreya"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/acacia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_acacia"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:acacia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/bamboo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_bamboo"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:bamboo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/birch</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_birch"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:birch"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_cherry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/crimson</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_crimson"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:crimson"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/dark_oak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_dark_oak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:dark_oak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/jungle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_jungle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:jungle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_mangrove"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/spruce</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_spruce"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:spruce"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/minecraft/warped</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:way_sign_warped"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "minecraft:warped"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/alder</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_alder"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:alder"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/allspice</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_allspice"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:allspice"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/almond</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_almond"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:almond"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/apricot</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_apricot"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:apricot"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/aquilaria</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_aquilaria"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:aquilaria"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/asai_palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_asai_palm"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:asai_palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/ash</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_ash"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:ash"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/aspen</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_aspen"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:aspen"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/avocado</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_avocado"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:avocado"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/balsa</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_balsa"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:balsa"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/balsam_fir</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_balsam_fir"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:balsam_fir"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/banana</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_banana"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:banana"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/beech</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_beech"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:beech"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/beliy_naliv_apple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_beliy_naliv_apple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:beliy_naliv_apple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/black_cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_black_cherry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:black_cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/black_ember</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_black_ember"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:black_ember"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/black_locust</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_black_locust"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:black_locust"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/blackthorn</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_blackthorn"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:blackthorn"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/blue_mahoe</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_blue_mahoe"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:blue_mahoe"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/blue_yonder</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_blue_yonder"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:blue_yonder"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/boxwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_boxwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:boxwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/brazil_nut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_brazil_nut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:brazil_nut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/brazilwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_brazilwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:brazilwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/breadfruit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_breadfruit"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:breadfruit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/brown_amber</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_brown_amber"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:brown_amber"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/buddhas_hand</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_buddhas_hand"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:buddhas_hand"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/bull_pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_bull_pine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:bull_pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/butternut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_butternut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:butternut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cacao</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cacao"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cacao"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/candlenut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_candlenut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:candlenut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/carob</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_carob"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:carob"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cashew</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cashew"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cashew"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cave_dweller</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cave_dweller"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cave_dweller"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cedar</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cedar"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cedar"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cempedak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cempedak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cempedak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/ceylon_ebony</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_ceylon_ebony"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:ceylon_ebony"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cherry_plum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cherry_plum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cherry_plum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cinnamon</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cinnamon"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cinnamon"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/citron</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_citron"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:citron"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/clove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_clove"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:clove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cocobolo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cocobolo"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cocobolo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/coconut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_coconut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:coconut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/coffea</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_coffea"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:coffea"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/copoazu</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_copoazu"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:copoazu"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/copper_beech</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_copper_beech"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:copper_beech"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cork_oak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cork_oak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cork_oak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/cultivated_pear</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_cultivated_pear"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:cultivated_pear"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/date_palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_date_palm"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:date_palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/dogwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_dogwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:dogwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/douglas_fir</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_douglas_fir"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:douglas_fir"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/elderberry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_elderberry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:elderberry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/elm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_elm"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:elm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/european_larch</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_european_larch"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:european_larch"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/finger_lime</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_finger_lime"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:finger_lime"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/firecracker</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_firecracker"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:firecracker"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/flickering_sun</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_flickering_sun"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:flickering_sun"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/flowering_crabapple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_flowering_crabapple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:flowering_crabapple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/foggy_blast</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_foggy_blast"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:foggy_blast"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/ginkgo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_ginkgo"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:ginkgo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/golden_delicious_apple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_golden_delicious_apple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:golden_delicious_apple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/grandidiers_baobab</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_grandidiers_baobab"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:grandidiers_baobab"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/granny_smith_apple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_granny_smith_apple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:granny_smith_apple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/grapefruit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_grapefruit"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:grapefruit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/great_sallow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_great_sallow"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:great_sallow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/greenheart</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_greenheart"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:greenheart"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/hawthorn</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_hawthorn"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:hawthorn"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/hazel</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_hazel"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:hazel"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/holly</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_holly"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:holly"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/hornbeam</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_hornbeam"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:hornbeam"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/ipe</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_ipe"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:ipe"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/iroko</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_iroko"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:iroko"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/jackfruit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_jackfruit"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:jackfruit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/juniper</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_juniper"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:juniper"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/kapok</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_kapok"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:kapok"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/key_lime</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_key_lime"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:key_lime"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/kumquat</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_kumquat"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:kumquat"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/lawson_cypress</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_lawson_cypress"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:lawson_cypress"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/lemon</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_lemon"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:lemon"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/lime</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_lime"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:lime"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/loblolly_pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_loblolly_pine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:loblolly_pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/logwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_logwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:logwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/mahogany</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_mahogany"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:mahogany"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/mandarin</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_mandarin"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:mandarin"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/mango</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_mango"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:mango"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/monkey_puzzle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_monkey_puzzle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:monkey_puzzle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/moonlight_magic_crepe_myrtle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_moonlight_magic_crepe_myrtle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:moonlight_magic_crepe_myrtle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/myrtle_ebony</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_myrtle_ebony"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:myrtle_ebony"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/nectarine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_nectarine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:nectarine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/night_fuchsia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_night_fuchsia"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:night_fuchsia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/nutmeg</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_nutmeg"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:nutmeg"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/old_fustic</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_old_fustic"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:old_fustic"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/olive</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_olive"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:olive"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/orange</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_orange"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:orange"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/osage_orange</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_osage_orange"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:osage_orange"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/padauk</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_padauk"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:padauk"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pandanus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pandanus"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pandanus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/papaya</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_papaya"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:papaya"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/peach</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_peach"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:peach"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pecan</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pecan"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pecan"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/persimmon</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_persimmon"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:persimmon"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pink_ipe</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pink_ipe"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pink_ipe"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pink_ivory</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pink_ivory"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pink_ivory"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pistachio</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pistachio"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pistachio"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/plantain</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_plantain"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:plantain"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/plum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_plum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:plum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pomegranate</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pomegranate"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pomegranate"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/pomelo</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_pomelo"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:pomelo"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/prairie_crabapple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_prairie_crabapple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:prairie_crabapple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/purple_blackthorn</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_purple_blackthorn"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:purple_blackthorn"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/purple_crepe_myrtle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_purple_crepe_myrtle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:purple_crepe_myrtle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/purple_ipe</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_purple_ipe"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:purple_ipe"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/purple_spiral</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_purple_spiral"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:purple_spiral"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/purpleheart</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_purpleheart"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:purpleheart"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rainbow_gum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rainbow_gum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rainbow_gum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/red_banana</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_red_banana"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:red_banana"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/red_crepe_myrtle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_red_crepe_myrtle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:red_crepe_myrtle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/red_delicious_apple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_red_delicious_apple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:red_delicious_apple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/red_maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_red_maple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:red_maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rippling_willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rippling_willow"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rippling_willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rose_gum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rose_gum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rose_gum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rosewood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rosewood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rosewood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rowan</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rowan"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rowan"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/rubber_tree</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_rubber_tree"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:rubber_tree"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/salak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_salak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:salak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sand_pear</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sand_pear"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sand_pear"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sandalwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sandalwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sandalwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/satsuma</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_satsuma"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:satsuma"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sequoia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sequoia"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sequoia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/silver_fir</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_silver_fir"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:silver_fir"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/silver_lime</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_silver_lime"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:silver_lime"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/slimy_delight</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_slimy_delight"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:slimy_delight"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/socotra_dragon</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_socotra_dragon"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:socotra_dragon"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/soul_tree</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_soul_tree"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:soul_tree"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sour_cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sour_cherry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sour_cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/soursop</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_soursop"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:soursop"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sparkle_cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sparkle_cherry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sparkle_cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/star_anise</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_star_anise"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:star_anise"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/star_fruit</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_star_fruit"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:star_fruit"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sugar_apple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sugar_apple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sugar_apple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sugar_maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sugar_maple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sugar_maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/swamp_gum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_swamp_gum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:swamp_gum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sweet_chestnut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sweet_chestnut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sweet_chestnut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sweet_crabapple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sweet_crabapple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sweet_crabapple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sweetgum</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sweetgum"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sweetgum"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/sycamore_fig</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_sycamore_fig"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:sycamore_fig"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/tangerine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_tangerine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:tangerine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/teak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_teak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:teak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/thunder_bolt</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_thunder_bolt"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:thunder_bolt"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/time_traveller</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_time_traveller"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:time_traveller"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/tuscarora_crepe_myrtle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_tuscarora_crepe_myrtle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:tuscarora_crepe_myrtle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/walnut</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_walnut"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:walnut"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/water_wonder</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_water_wonder"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:water_wonder"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/wenge</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_wenge"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:wenge"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/western_hemlock</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_western_hemlock"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:western_hemlock"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/white_ipe</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_white_ipe"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:white_ipe"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/white_poplar</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_white_poplar"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:white_poplar"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/white_willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_white_willow"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:white_willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/whitebeam</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_whitebeam"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:whitebeam"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/wild_cherry</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_wild_cherry"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:wild_cherry"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/yellow_meranti</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_yellow_meranti"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:yellow_meranti"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/yew</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_yew"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:yew"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/productivetrees/zebrano</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:productivetrees/way_sign_zebrano"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "productivetrees:zebrano"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/baobab</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_baobab"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:baobab"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/blackwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_blackwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:blackwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/blue_bioshroom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_blue_bioshroom"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:blue_bioshroom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/brimwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_brimwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:brimwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/cobalt</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_cobalt"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:cobalt"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/cypress</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_cypress"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:cypress"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/dead</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_dead"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:dead"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/eucalyptus</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_eucalyptus"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:eucalyptus"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/green_bioshroom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_green_bioshroom"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:green_bioshroom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/joshua</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_joshua"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:joshua"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/kapok</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_kapok"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:kapok"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/larch</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_larch"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:larch"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/magnolia</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_magnolia"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:magnolia"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/maple</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_maple"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:maple"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/mauve</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_mauve"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:mauve"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/palm</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_palm"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:palm"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/pine</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_pine"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:pine"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/pink_bioshroom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_pink_bioshroom"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:pink_bioshroom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/redwood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_redwood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:redwood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/socotra</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_socotra"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:socotra"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/willow</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_willow"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:willow"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/regions_unexplored/yellow_bioshroom</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:regions_unexplored/way_sign_yellow_bioshroom"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "regions_unexplored:yellow_bioshroom"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/canopy</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_canopy"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:canopy"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/dark</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_dark"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:dark"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/mangrove</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_mangrove"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mangrove"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/mining</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_mining"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:mining"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/sorting</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_sorting"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:sorting"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/time</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_time"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:time"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/transformation</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_transformation"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:transformation"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/twilightforest/twilight_oak</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:twilightforest/way_sign_twilight_oak"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "twilightforest:twilight_oak"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/undergarden/grongle</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/way_sign_grongle"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:grongle"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/undergarden/smogstem</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/way_sign_smogstem"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:smogstem"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
-        }
-      ]
-    }
-  ]
-}

```


</details>

<details>
<summary>supplementaries/way_sign/undergarden/wigglewood</summary>

```diff
-{
-  category: "misc"
-  result: {
-    id: "supplementaries:undergarden/way_sign_wigglewood"
-    count: 2
-  }
-  ingredients: [
-    {
-      ingredient: {
-        item: "minecraft:oak_sign"
-      }
-      block_type: "minecraft:wood_type"
-      from: "minecraft:oak"
-      to: "undergarden:wigglewood"
-      type: "moonlight:block_type_swap"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  fabric:load_conditions: [
-    {
-      condition: "supplementaries:flag"
-      flag: "way_sign"
-    }
-  ]
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "supplementaries:flag"
-          flag: "way_sign"
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
<summary>Added (4)</summary>
<blockquote>

<details>
<summary>minecraft:entity_type/pneumaticcraft:drones</summary>

```diff
+[
+  "#pneumaticcraft:basic_drones"
+  "pneumaticcraft:drone"
+]

```


</details>

<details>
<summary>minecraft:item/pneumaticcraft:heat_pipe_conductors</summary>

```diff
+[
+  "#c:storage_blocks/compressed_iron"
+  "#c:storage_blocks/copper"
+]

```


</details>

<details>
<summary>minecraft:item/utilityvest:utility_vest</summary>

```diff
+[
+  "utilityvest:diamond_utility_vest"
+  "utilityvest:gold_utility_vest"
+  "utilityvest:iron_utility_vest"
+  "utilityvest:leather_utility_vest"
+  "utilityvest:netherite_utility_vest"
+]

```


</details>

<details>
<summary>minecraft:worldgen/biome_source/lithostitched:cannot_inject_into</summary>

```diff
+[
+  "minecraft:checkerboard"
+  "minecraft:fixed"
+]

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (27)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:dyed/brown</summary>

```diff
 [
   ... (21 entries)
-  "supplementaries:bunting__wall_brown"
   ... (1 entries)
+  "supplementaries:bunting_wall_brown"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:stripped_logs</summary>

```diff
 [
   ... (46 entries)
+  "productivetrees:alder_stripped_log"
+  "productivetrees:allspice_stripped_log"
+  "productivetrees:almond_stripped_log"
+  "productivetrees:apricot_stripped_log"
+  "productivetrees:aquilaria_stripped_log"
+  "productivetrees:asai_palm_stripped_log"
+  "productivetrees:ash_stripped_log"
+  "productivetrees:aspen_stripped_log"
+  "productivetrees:avocado_stripped_log"
+  "productivetrees:balsa_stripped_log"
+  "productivetrees:balsam_fir_stripped_log"
+  "productivetrees:banana_stripped_log"
+  "productivetrees:beech_stripped_log"
+  "productivetrees:beliy_naliv_apple_stripped_log"
+  "productivetrees:black_cherry_stripped_log"
+  "productivetrees:black_ember_stripped_log"
+  "productivetrees:black_locust_stripped_log"
+  "productivetrees:blackthorn_stripped_log"
+  "productivetrees:blue_mahoe_stripped_log"
+  "productivetrees:blue_yonder_stripped_log"
+  "productivetrees:boxwood_stripped_log"
+  "productivetrees:brazil_nut_stripped_log"
+  "productivetrees:brazilwood_stripped_log"
+  "productivetrees:breadfruit_stripped_log"
+  "productivetrees:brown_amber_stripped_log"
+  "productivetrees:buddhas_hand_stripped_log"
+  "productivetrees:bull_pine_stripped_log"
+  "productivetrees:butternut_stripped_log"
+  "productivetrees:cacao_stripped_log"
+  "productivetrees:candlenut_stripped_log"
+  "productivetrees:carob_stripped_log"
+  "productivetrees:cashew_stripped_log"
+  "productivetrees:cave_dweller_stripped_log"
+  "productivetrees:cedar_stripped_log"
+  "productivetrees:cempedak_stripped_log"
+  "productivetrees:ceylon_ebony_stripped_log"
+  "productivetrees:cherry_plum_stripped_log"
+  "productivetrees:cinnamon_stripped_log"
+  "productivetrees:citron_stripped_log"
+  "productivetrees:clove_stripped_log"
+  "productivetrees:cocobolo_stripped_log"
+  "productivetrees:coconut_stripped_log"
+  "productivetrees:coffea_stripped_log"
+  "productivetrees:copoazu_stripped_log"
+  "productivetrees:copper_beech_stripped_log"
+  "productivetrees:cork_oak_stripped_log"
+  "productivetrees:cultivated_pear_stripped_log"
+  "productivetrees:date_palm_stripped_log"
+  "productivetrees:dogwood_stripped_log"
+  "productivetrees:douglas_fir_stripped_log"
+  "productivetrees:elderberry_stripped_log"
+  "productivetrees:elm_stripped_log"
+  "productivetrees:european_larch_stripped_log"
+  "productivetrees:finger_lime_stripped_log"
+  "productivetrees:firecracker_stripped_log"
+  "productivetrees:flickering_sun_stripped_log"
+  "productivetrees:flowering_crabapple_stripped_log"
+  "productivetrees:foggy_blast_stripped_log"
+  "productivetrees:ginkgo_stripped_log"
+  "productivetrees:golden_delicious_apple_stripped_log"
+  "productivetrees:grandidiers_baobab_stripped_log"
+  "productivetrees:granny_smith_apple_stripped_log"
+  "productivetrees:grapefruit_stripped_log"
+  "productivetrees:great_sallow_stripped_log"
+  "productivetrees:greenheart_stripped_log"
+  "productivetrees:hawthorn_stripped_log"
+  "productivetrees:hazel_stripped_log"
+  "productivetrees:holly_stripped_log"
+  "productivetrees:hornbeam_stripped_log"
+  "productivetrees:ipe_stripped_log"
+  "productivetrees:iroko_stripped_log"
+  "productivetrees:jackfruit_stripped_log"
+  "productivetrees:juniper_stripped_log"
+  "productivetrees:kapok_stripped_log"
+  "productivetrees:key_lime_stripped_log"
+  "productivetrees:kumquat_stripped_log"
+  "productivetrees:lawson_cypress_stripped_log"
+  "productivetrees:lemon_stripped_log"
+  "productivetrees:lime_stripped_log"
+  "productivetrees:loblolly_pine_stripped_log"
+  "productivetrees:logwood_stripped_log"
+  "productivetrees:mahogany_stripped_log"
+  "productivetrees:mandarin_stripped_log"
+  "productivetrees:mango_stripped_log"
+  "productivetrees:monkey_puzzle_stripped_log"
+  "productivetrees:moonlight_magic_crepe_myrtle_stripped_log"
+  "productivetrees:myrtle_ebony_stripped_log"
+  "productivetrees:nectarine_stripped_log"
+  "productivetrees:night_fuchsia_stripped_log"
+  "productivetrees:nutmeg_stripped_log"
+  "productivetrees:old_fustic_stripped_log"
+  "productivetrees:olive_stripped_log"
+  "productivetrees:orange_stripped_log"
+  "productivetrees:osage_orange_stripped_log"
+  "productivetrees:padauk_stripped_log"
+  "productivetrees:pandanus_stripped_log"
+  "productivetrees:papaya_stripped_log"
+  "productivetrees:peach_stripped_log"
+  "productivetrees:pecan_stripped_log"
+  "productivetrees:persimmon_stripped_log"
+  "productivetrees:pink_ipe_stripped_log"
+  "productivetrees:pink_ivory_stripped_log"
+  "productivetrees:pistachio_stripped_log"
+  "productivetrees:plantain_stripped_log"
+  "productivetrees:plum_stripped_log"
+  "productivetrees:pomegranate_stripped_log"
+  "productivetrees:pomelo_stripped_log"
+  "productivetrees:prairie_crabapple_stripped_log"
+  "productivetrees:purple_blackthorn_stripped_log"
+  "productivetrees:purple_crepe_myrtle_stripped_log"
+  "productivetrees:purple_ipe_stripped_log"
+  "productivetrees:purple_spiral_stripped_log"
+  "productivetrees:purpleheart_stripped_log"
+  "productivetrees:rainbow_gum_stripped_log"
+  "productivetrees:red_banana_stripped_log"
+  "productivetrees:red_crepe_myrtle_stripped_log"
+  "productivetrees:red_delicious_apple_stripped_log"
+  "productivetrees:red_maple_stripped_log"
+  "productivetrees:rippling_willow_stripped_log"
+  "productivetrees:rose_gum_stripped_log"
+  "productivetrees:rosewood_stripped_log"
+  "productivetrees:rowan_stripped_log"
+  "productivetrees:rubber_tree_stripped_log"
+  "productivetrees:salak_stripped_log"
+  "productivetrees:sand_pear_stripped_log"
+  "productivetrees:sandalwood_stripped_log"
+  "productivetrees:satsuma_stripped_log"
+  "productivetrees:sequoia_stripped_log"
+  "productivetrees:silver_fir_stripped_log"
+  "productivetrees:silver_lime_stripped_log"
+  "productivetrees:slimy_delight_stripped_log"
+  "productivetrees:socotra_dragon_stripped_log"
+  "productivetrees:soul_tree_stripped_log"
+  "productivetrees:sour_cherry_stripped_log"
+  "productivetrees:soursop_stripped_log"
+  "productivetrees:sparkle_cherry_stripped_log"
+  "productivetrees:star_anise_stripped_log"
+  "productivetrees:star_fruit_stripped_log"
+  "productivetrees:sugar_apple_stripped_log"
+  "productivetrees:sugar_maple_stripped_log"
+  "productivetrees:swamp_gum_stripped_log"
+  "productivetrees:sweet_chestnut_stripped_log"
+  "productivetrees:sweet_crabapple_stripped_log"
+  "productivetrees:sweetgum_stripped_log"
+  "productivetrees:sycamore_fig_stripped_log"
+  "productivetrees:tangerine_stripped_log"
+  "productivetrees:teak_stripped_log"
+  "productivetrees:thunder_bolt_stripped_log"
+  "productivetrees:time_traveller_stripped_log"
+  "productivetrees:tuscarora_crepe_myrtle_stripped_log"
+  "productivetrees:walnut_stripped_log"
+  "productivetrees:water_wonder_stripped_log"
+  "productivetrees:wenge_stripped_log"
+  "productivetrees:western_hemlock_stripped_log"
+  "productivetrees:white_ipe_stripped_log"
+  "productivetrees:white_poplar_stripped_log"
+  "productivetrees:white_willow_stripped_log"
+  "productivetrees:whitebeam_stripped_log"
+  "productivetrees:wild_cherry_stripped_log"
+  "productivetrees:yellow_meranti_stripped_log"
+  "productivetrees:yew_stripped_log"
+  "productivetrees:zebrano_stripped_log"
   ... (41 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:stripped_woods</summary>

```diff
 [
   ... (45 entries)
+  "productivetrees:alder_stripped_wood"
+  "productivetrees:allspice_stripped_wood"
+  "productivetrees:almond_stripped_wood"
+  "productivetrees:apricot_stripped_wood"
+  "productivetrees:aquilaria_stripped_wood"
+  "productivetrees:asai_palm_stripped_wood"
+  "productivetrees:ash_stripped_wood"
+  "productivetrees:aspen_stripped_wood"
+  "productivetrees:avocado_stripped_wood"
+  "productivetrees:balsa_stripped_wood"
+  "productivetrees:balsam_fir_stripped_wood"
+  "productivetrees:banana_stripped_wood"
+  "productivetrees:beech_stripped_wood"
+  "productivetrees:beliy_naliv_apple_stripped_wood"
+  "productivetrees:black_cherry_stripped_wood"
+  "productivetrees:black_ember_stripped_wood"
+  "productivetrees:black_locust_stripped_wood"
+  "productivetrees:blackthorn_stripped_wood"
+  "productivetrees:blue_mahoe_stripped_wood"
+  "productivetrees:blue_yonder_stripped_wood"
+  "productivetrees:boxwood_stripped_wood"
+  "productivetrees:brazil_nut_stripped_wood"
+  "productivetrees:brazilwood_stripped_wood"
+  "productivetrees:breadfruit_stripped_wood"
+  "productivetrees:brown_amber_stripped_wood"
+  "productivetrees:buddhas_hand_stripped_wood"
+  "productivetrees:bull_pine_stripped_wood"
+  "productivetrees:butternut_stripped_wood"
+  "productivetrees:cacao_stripped_wood"
+  "productivetrees:candlenut_stripped_wood"
+  "productivetrees:carob_stripped_wood"
+  "productivetrees:cashew_stripped_wood"
+  "productivetrees:cave_dweller_stripped_wood"
+  "productivetrees:cedar_stripped_wood"
+  "productivetrees:cempedak_stripped_wood"
+  "productivetrees:ceylon_ebony_stripped_wood"
+  "productivetrees:cherry_plum_stripped_wood"
+  "productivetrees:cinnamon_stripped_wood"
+  "productivetrees:citron_stripped_wood"
+  "productivetrees:clove_stripped_wood"
+  "productivetrees:cocobolo_stripped_wood"
+  "productivetrees:coconut_stripped_wood"
+  "productivetrees:coffea_stripped_wood"
+  "productivetrees:copoazu_stripped_wood"
+  "productivetrees:copper_beech_stripped_wood"
+  "productivetrees:cork_oak_stripped_wood"
+  "productivetrees:cultivated_pear_stripped_wood"
+  "productivetrees:date_palm_stripped_wood"
+  "productivetrees:dogwood_stripped_wood"
+  "productivetrees:douglas_fir_stripped_wood"
+  "productivetrees:elderberry_stripped_wood"
+  "productivetrees:elm_stripped_wood"
+  "productivetrees:european_larch_stripped_wood"
+  "productivetrees:finger_lime_stripped_wood"
+  "productivetrees:firecracker_stripped_wood"
+  "productivetrees:flickering_sun_stripped_wood"
+  "productivetrees:flowering_crabapple_stripped_wood"
+  "productivetrees:foggy_blast_stripped_wood"
+  "productivetrees:ginkgo_stripped_wood"
+  "productivetrees:golden_delicious_apple_stripped_wood"
+  "productivetrees:grandidiers_baobab_stripped_wood"
+  "productivetrees:granny_smith_apple_stripped_wood"
+  "productivetrees:grapefruit_stripped_wood"
+  "productivetrees:great_sallow_stripped_wood"
+  "productivetrees:greenheart_stripped_wood"
+  "productivetrees:hawthorn_stripped_wood"
+  "productivetrees:hazel_stripped_wood"
+  "productivetrees:holly_stripped_wood"
+  "productivetrees:hornbeam_stripped_wood"
+  "productivetrees:ipe_stripped_wood"
+  "productivetrees:iroko_stripped_wood"
+  "productivetrees:jackfruit_stripped_wood"
+  "productivetrees:juniper_stripped_wood"
+  "productivetrees:kapok_stripped_wood"
+  "productivetrees:key_lime_stripped_wood"
+  "productivetrees:kumquat_stripped_wood"
+  "productivetrees:lawson_cypress_stripped_wood"
+  "productivetrees:lemon_stripped_wood"
+  "productivetrees:lime_stripped_wood"
+  "productivetrees:loblolly_pine_stripped_wood"
+  "productivetrees:logwood_stripped_wood"
+  "productivetrees:mahogany_stripped_wood"
+  "productivetrees:mandarin_stripped_wood"
+  "productivetrees:mango_stripped_wood"
+  "productivetrees:monkey_puzzle_stripped_wood"
+  "productivetrees:moonlight_magic_crepe_myrtle_stripped_wood"
+  "productivetrees:myrtle_ebony_stripped_wood"
+  "productivetrees:nectarine_stripped_wood"
+  "productivetrees:night_fuchsia_stripped_wood"
+  "productivetrees:nutmeg_stripped_wood"
+  "productivetrees:old_fustic_stripped_wood"
+  "productivetrees:olive_stripped_wood"
+  "productivetrees:orange_stripped_wood"
+  "productivetrees:osage_orange_stripped_wood"
+  "productivetrees:padauk_stripped_wood"
+  "productivetrees:pandanus_stripped_wood"
+  "productivetrees:papaya_stripped_wood"
+  "productivetrees:peach_stripped_wood"
+  "productivetrees:pecan_stripped_wood"
+  "productivetrees:persimmon_stripped_wood"
+  "productivetrees:pink_ipe_stripped_wood"
+  "productivetrees:pink_ivory_stripped_wood"
+  "productivetrees:pistachio_stripped_wood"
+  "productivetrees:plantain_stripped_wood"
+  "productivetrees:plum_stripped_wood"
+  "productivetrees:pomegranate_stripped_wood"
+  "productivetrees:pomelo_stripped_wood"
+  "productivetrees:prairie_crabapple_stripped_wood"
+  "productivetrees:purple_blackthorn_stripped_wood"
+  "productivetrees:purple_crepe_myrtle_stripped_wood"
+  "productivetrees:purple_ipe_stripped_wood"
+  "productivetrees:purple_spiral_stripped_wood"
+  "productivetrees:purpleheart_stripped_wood"
+  "productivetrees:rainbow_gum_stripped_wood"
+  "productivetrees:red_banana_stripped_wood"
+  "productivetrees:red_crepe_myrtle_stripped_wood"
+  "productivetrees:red_delicious_apple_stripped_wood"
+  "productivetrees:red_maple_stripped_wood"
+  "productivetrees:rippling_willow_stripped_wood"
+  "productivetrees:rose_gum_stripped_wood"
+  "productivetrees:rosewood_stripped_wood"
+  "productivetrees:rowan_stripped_wood"
+  "productivetrees:rubber_tree_stripped_wood"
+  "productivetrees:salak_stripped_wood"
+  "productivetrees:sand_pear_stripped_wood"
+  "productivetrees:sandalwood_stripped_wood"
+  "productivetrees:satsuma_stripped_wood"
+  "productivetrees:sequoia_stripped_wood"
+  "productivetrees:silver_fir_stripped_wood"
+  "productivetrees:silver_lime_stripped_wood"
+  "productivetrees:slimy_delight_stripped_wood"
+  "productivetrees:socotra_dragon_stripped_wood"
+  "productivetrees:soul_tree_stripped_wood"
+  "productivetrees:sour_cherry_stripped_wood"
+  "productivetrees:soursop_stripped_wood"
+  "productivetrees:sparkle_cherry_stripped_wood"
+  "productivetrees:star_anise_stripped_wood"
+  "productivetrees:star_fruit_stripped_wood"
+  "productivetrees:sugar_apple_stripped_wood"
+  "productivetrees:sugar_maple_stripped_wood"
+  "productivetrees:swamp_gum_stripped_wood"
+  "productivetrees:sweet_chestnut_stripped_wood"
+  "productivetrees:sweet_crabapple_stripped_wood"
+  "productivetrees:sweetgum_stripped_wood"
+  "productivetrees:sycamore_fig_stripped_wood"
+  "productivetrees:tangerine_stripped_wood"
+  "productivetrees:teak_stripped_wood"
+  "productivetrees:thunder_bolt_stripped_wood"
+  "productivetrees:time_traveller_stripped_wood"
+  "productivetrees:tuscarora_crepe_myrtle_stripped_wood"
+  "productivetrees:walnut_stripped_wood"
+  "productivetrees:water_wonder_stripped_wood"
+  "productivetrees:wenge_stripped_wood"
+  "productivetrees:western_hemlock_stripped_wood"
+  "productivetrees:white_ipe_stripped_wood"
+  "productivetrees:white_poplar_stripped_wood"
+  "productivetrees:white_willow_stripped_wood"
+  "productivetrees:whitebeam_stripped_wood"
+  "productivetrees:wild_cherry_stripped_wood"
+  "productivetrees:yellow_meranti_stripped_wood"
+  "productivetrees:yew_stripped_wood"
+  "productivetrees:zebrano_stripped_wood"
   ... (41 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (9424 entries)
+  "pneumaticcraft:reinforced_pressure_chamber_valve"
   ... (5283 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_iron_tool</summary>

```diff
 [
   ... (524 entries)
+  "pneumaticcraft:reinforced_pressure_chamber_valve"
   ... (430 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/supplementaries:brick_breakable_recursive</summary>

```diff
 [
   ... (3 entries)
-  "#clayworks:glass_doors?"
-  "#clayworks:glass_trapdoors?"
-  "#clayworks:stained_glass_doors?"
-  "#clayworks:stained_glass_trapdoors?"
+  "clayworks:black_decorated_pot?"
+  "clayworks:black_stained_glass_door?"
+  "clayworks:black_stained_glass_trapdoor?"
+  "clayworks:blue_decorated_pot?"
+  "clayworks:blue_stained_glass_door?"
+  "clayworks:blue_stained_glass_trapdoor?"
+  "clayworks:brown_decorated_pot?"
+  "clayworks:brown_stained_glass_door?"
+  "clayworks:brown_stained_glass_trapdoor?"
+  "clayworks:cyan_decorated_pot?"
+  "clayworks:cyan_stained_glass_door?"
+  "clayworks:cyan_stained_glass_trapdoor?"
   ... (2 entries)
+  "clayworks:gray_decorated_pot?"
+  "clayworks:gray_stained_glass_door?"
+  "clayworks:gray_stained_glass_trapdoor?"
+  "clayworks:green_decorated_pot?"
+  "clayworks:green_stained_glass_door?"
+  "clayworks:green_stained_glass_trapdoor?"
+  "clayworks:light_blue_decorated_pot?"
+  "clayworks:light_blue_stained_glass_door?"
+  "clayworks:light_blue_stained_glass_trapdoor?"
+  "clayworks:light_gray_decorated_pot?"
+  "clayworks:light_gray_stained_glass_door?"
+  "clayworks:light_gray_stained_glass_trapdoor?"
+  "clayworks:lime_decorated_pot?"
+  "clayworks:lime_stained_glass_door?"
+  "clayworks:lime_stained_glass_trapdoor?"
+  "clayworks:magenta_decorated_pot?"
+  "clayworks:magenta_stained_glass_door?"
+  "clayworks:magenta_stained_glass_trapdoor?"
+  "clayworks:orange_decorated_pot?"
+  "clayworks:orange_stained_glass_door?"
+  "clayworks:orange_stained_glass_trapdoor?"
+  "clayworks:pink_decorated_pot?"
+  "clayworks:pink_stained_glass_door?"
+  "clayworks:pink_stained_glass_trapdoor?"
+  "clayworks:purple_decorated_pot?"
+  "clayworks:purple_stained_glass_door?"
+  "clayworks:purple_stained_glass_trapdoor?"
+  "clayworks:red_decorated_pot?"
+  "clayworks:red_stained_glass_door?"
+  "clayworks:red_stained_glass_trapdoor?"
+  "clayworks:white_decorated_pot?"
+  "clayworks:white_stained_glass_door?"
+  "clayworks:white_stained_glass_trapdoor?"
+  "clayworks:yellow_decorated_pot?"
+  "clayworks:yellow_stained_glass_door?"
+  "clayworks:yellow_stained_glass_trapdoor?"
+  "holosigns:black_stained_glass_hanging_sign?"
+  "holosigns:black_stained_glass_sign?"
+  "holosigns:blue_stained_glass_hanging_sign?"
+  "holosigns:blue_stained_glass_sign?"
+  "holosigns:brown_stained_glass_hanging_sign?"
+  "holosigns:brown_stained_glass_sign?"
+  "holosigns:cyan_stained_glass_hanging_sign?"
+  "holosigns:cyan_stained_glass_sign?"
+  "holosigns:glass_hanging_sign?"
+  "holosigns:glass_sign?"
+  "holosigns:gray_stained_glass_hanging_sign?"
+  "holosigns:gray_stained_glass_sign?"
+  "holosigns:green_stained_glass_hanging_sign?"
+  "holosigns:green_stained_glass_sign?"
+  "holosigns:light_blue_stained_glass_hanging_sign?"
+  "holosigns:light_blue_stained_glass_sign?"
+  "holosigns:light_gray_stained_glass_hanging_sign?"
+  "holosigns:light_gray_stained_glass_sign?"
+  "holosigns:lime_stained_glass_hanging_sign?"
+  "holosigns:lime_stained_glass_sign?"
+  "holosigns:magenta_stained_glass_hanging_sign?"
+  "holosigns:magenta_stained_glass_sign?"
+  "holosigns:orange_stained_glass_hanging_sign?"
+  "holosigns:orange_stained_glass_sign?"
+  "holosigns:pink_stained_glass_hanging_sign?"
+  "holosigns:pink_stained_glass_sign?"
+  "holosigns:purple_stained_glass_hanging_sign?"
+  "holosigns:purple_stained_glass_sign?"
+  "holosigns:red_stained_glass_hanging_sign?"
+  "holosigns:red_stained_glass_sign?"
+  "holosigns:white_stained_glass_hanging_sign?"
+  "holosigns:white_stained_glass_sign?"
+  "holosigns:yellow_stained_glass_hanging_sign?"
+  "holosigns:yellow_stained_glass_sign?"
   ... (4 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/c:radiation_immune</summary>

```diff
 [
+  "#pneumaticcraft:drones"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/irons_spellbooks:cant_parry</summary>

```diff
 [
+  "irons_spellbooks:black_hole"
 ]

```


</details>

<details>
<summary>minecraft:item/bookshelf:creative_tab/minecraft/ingredients</summary>

```diff
 [
-  "nyctography:nyctography_pattern"
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_logs</summary>

```diff
 [
   ... (49 entries)
+  "productivetrees:alder_stripped_log"
+  "productivetrees:allspice_stripped_log"
+  "productivetrees:almond_stripped_log"
+  "productivetrees:apricot_stripped_log"
+  "productivetrees:aquilaria_stripped_log"
+  "productivetrees:asai_palm_stripped_log"
+  "productivetrees:ash_stripped_log"
+  "productivetrees:aspen_stripped_log"
+  "productivetrees:avocado_stripped_log"
+  "productivetrees:balsa_stripped_log"
+  "productivetrees:balsam_fir_stripped_log"
+  "productivetrees:banana_stripped_log"
+  "productivetrees:beech_stripped_log"
+  "productivetrees:beliy_naliv_apple_stripped_log"
+  "productivetrees:black_cherry_stripped_log"
+  "productivetrees:black_ember_stripped_log"
+  "productivetrees:black_locust_stripped_log"
+  "productivetrees:blackthorn_stripped_log"
+  "productivetrees:blue_mahoe_stripped_log"
+  "productivetrees:blue_yonder_stripped_log"
+  "productivetrees:boxwood_stripped_log"
+  "productivetrees:brazil_nut_stripped_log"
+  "productivetrees:brazilwood_stripped_log"
+  "productivetrees:breadfruit_stripped_log"
+  "productivetrees:brown_amber_stripped_log"
+  "productivetrees:buddhas_hand_stripped_log"
+  "productivetrees:bull_pine_stripped_log"
+  "productivetrees:butternut_stripped_log"
+  "productivetrees:cacao_stripped_log"
+  "productivetrees:candlenut_stripped_log"
+  "productivetrees:carob_stripped_log"
+  "productivetrees:cashew_stripped_log"
+  "productivetrees:cave_dweller_stripped_log"
+  "productivetrees:cedar_stripped_log"
+  "productivetrees:cempedak_stripped_log"
+  "productivetrees:ceylon_ebony_stripped_log"
+  "productivetrees:cherry_plum_stripped_log"
+  "productivetrees:cinnamon_stripped_log"
+  "productivetrees:citron_stripped_log"
+  "productivetrees:clove_stripped_log"
+  "productivetrees:cocobolo_stripped_log"
+  "productivetrees:coconut_stripped_log"
+  "productivetrees:coffea_stripped_log"
+  "productivetrees:copoazu_stripped_log"
+  "productivetrees:copper_beech_stripped_log"
+  "productivetrees:cork_oak_stripped_log"
+  "productivetrees:cultivated_pear_stripped_log"
+  "productivetrees:date_palm_stripped_log"
+  "productivetrees:dogwood_stripped_log"
+  "productivetrees:douglas_fir_stripped_log"
+  "productivetrees:elderberry_stripped_log"
+  "productivetrees:elm_stripped_log"
+  "productivetrees:european_larch_stripped_log"
+  "productivetrees:finger_lime_stripped_log"
+  "productivetrees:firecracker_stripped_log"
+  "productivetrees:flickering_sun_stripped_log"
+  "productivetrees:flowering_crabapple_stripped_log"
+  "productivetrees:foggy_blast_stripped_log"
+  "productivetrees:ginkgo_stripped_log"
+  "productivetrees:golden_delicious_apple_stripped_log"
+  "productivetrees:grandidiers_baobab_stripped_log"
+  "productivetrees:granny_smith_apple_stripped_log"
+  "productivetrees:grapefruit_stripped_log"
+  "productivetrees:great_sallow_stripped_log"
+  "productivetrees:greenheart_stripped_log"
+  "productivetrees:hawthorn_stripped_log"
+  "productivetrees:hazel_stripped_log"
+  "productivetrees:holly_stripped_log"
+  "productivetrees:hornbeam_stripped_log"
+  "productivetrees:ipe_stripped_log"
+  "productivetrees:iroko_stripped_log"
+  "productivetrees:jackfruit_stripped_log"
+  "productivetrees:juniper_stripped_log"
+  "productivetrees:kapok_stripped_log"
+  "productivetrees:key_lime_stripped_log"
+  "productivetrees:kumquat_stripped_log"
+  "productivetrees:lawson_cypress_stripped_log"
+  "productivetrees:lemon_stripped_log"
+  "productivetrees:lime_stripped_log"
+  "productivetrees:loblolly_pine_stripped_log"
+  "productivetrees:logwood_stripped_log"
+  "productivetrees:mahogany_stripped_log"
+  "productivetrees:mandarin_stripped_log"
+  "productivetrees:mango_stripped_log"
+  "productivetrees:monkey_puzzle_stripped_log"
+  "productivetrees:moonlight_magic_crepe_myrtle_stripped_log"
+  "productivetrees:myrtle_ebony_stripped_log"
+  "productivetrees:nectarine_stripped_log"
+  "productivetrees:night_fuchsia_stripped_log"
+  "productivetrees:nutmeg_stripped_log"
+  "productivetrees:old_fustic_stripped_log"
+  "productivetrees:olive_stripped_log"
+  "productivetrees:orange_stripped_log"
+  "productivetrees:osage_orange_stripped_log"
+  "productivetrees:padauk_stripped_log"
+  "productivetrees:pandanus_stripped_log"
+  "productivetrees:papaya_stripped_log"
+  "productivetrees:peach_stripped_log"
+  "productivetrees:pecan_stripped_log"
+  "productivetrees:persimmon_stripped_log"
+  "productivetrees:pink_ipe_stripped_log"
+  "productivetrees:pink_ivory_stripped_log"
+  "productivetrees:pistachio_stripped_log"
+  "productivetrees:plantain_stripped_log"
+  "productivetrees:plum_stripped_log"
+  "productivetrees:pomegranate_stripped_log"
+  "productivetrees:pomelo_stripped_log"
+  "productivetrees:prairie_crabapple_stripped_log"
+  "productivetrees:purple_blackthorn_stripped_log"
+  "productivetrees:purple_crepe_myrtle_stripped_log"
+  "productivetrees:purple_ipe_stripped_log"
+  "productivetrees:purple_spiral_stripped_log"
+  "productivetrees:purpleheart_stripped_log"
+  "productivetrees:rainbow_gum_stripped_log"
+  "productivetrees:red_banana_stripped_log"
+  "productivetrees:red_crepe_myrtle_stripped_log"
+  "productivetrees:red_delicious_apple_stripped_log"
+  "productivetrees:red_maple_stripped_log"
+  "productivetrees:rippling_willow_stripped_log"
+  "productivetrees:rose_gum_stripped_log"
+  "productivetrees:rosewood_stripped_log"
+  "productivetrees:rowan_stripped_log"
+  "productivetrees:rubber_tree_stripped_log"
+  "productivetrees:salak_stripped_log"
+  "productivetrees:sand_pear_stripped_log"
+  "productivetrees:sandalwood_stripped_log"
+  "productivetrees:satsuma_stripped_log"
+  "productivetrees:sequoia_stripped_log"
+  "productivetrees:silver_fir_stripped_log"
+  "productivetrees:silver_lime_stripped_log"
+  "productivetrees:slimy_delight_stripped_log"
+  "productivetrees:socotra_dragon_stripped_log"
+  "productivetrees:soul_tree_stripped_log"
+  "productivetrees:sour_cherry_stripped_log"
+  "productivetrees:soursop_stripped_log"
+  "productivetrees:sparkle_cherry_stripped_log"
+  "productivetrees:star_anise_stripped_log"
+  "productivetrees:star_fruit_stripped_log"
+  "productivetrees:sugar_apple_stripped_log"
+  "productivetrees:sugar_maple_stripped_log"
+  "productivetrees:swamp_gum_stripped_log"
+  "productivetrees:sweet_chestnut_stripped_log"
+  "productivetrees:sweet_crabapple_stripped_log"
+  "productivetrees:sweetgum_stripped_log"
+  "productivetrees:sycamore_fig_stripped_log"
+  "productivetrees:tangerine_stripped_log"
+  "productivetrees:teak_stripped_log"
+  "productivetrees:thunder_bolt_stripped_log"
+  "productivetrees:time_traveller_stripped_log"
+  "productivetrees:tuscarora_crepe_myrtle_stripped_log"
+  "productivetrees:walnut_stripped_log"
+  "productivetrees:water_wonder_stripped_log"
+  "productivetrees:wenge_stripped_log"
+  "productivetrees:western_hemlock_stripped_log"
+  "productivetrees:white_ipe_stripped_log"
+  "productivetrees:white_poplar_stripped_log"
+  "productivetrees:white_willow_stripped_log"
+  "productivetrees:whitebeam_stripped_log"
+  "productivetrees:wild_cherry_stripped_log"
+  "productivetrees:yellow_meranti_stripped_log"
+  "productivetrees:yew_stripped_log"
+  "productivetrees:zebrano_stripped_log"
   ... (33 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:stripped_woods</summary>

```diff
 [
   ... (47 entries)
+  "productivetrees:alder_stripped_wood"
+  "productivetrees:allspice_stripped_wood"
+  "productivetrees:almond_stripped_wood"
+  "productivetrees:apricot_stripped_wood"
+  "productivetrees:aquilaria_stripped_wood"
+  "productivetrees:asai_palm_stripped_wood"
+  "productivetrees:ash_stripped_wood"
+  "productivetrees:aspen_stripped_wood"
+  "productivetrees:avocado_stripped_wood"
+  "productivetrees:balsa_stripped_wood"
+  "productivetrees:balsam_fir_stripped_wood"
+  "productivetrees:banana_stripped_wood"
+  "productivetrees:beech_stripped_wood"
+  "productivetrees:beliy_naliv_apple_stripped_wood"
+  "productivetrees:black_cherry_stripped_wood"
+  "productivetrees:black_ember_stripped_wood"
+  "productivetrees:black_locust_stripped_wood"
+  "productivetrees:blackthorn_stripped_wood"
+  "productivetrees:blue_mahoe_stripped_wood"
+  "productivetrees:blue_yonder_stripped_wood"
+  "productivetrees:boxwood_stripped_wood"
+  "productivetrees:brazil_nut_stripped_wood"
+  "productivetrees:brazilwood_stripped_wood"
+  "productivetrees:breadfruit_stripped_wood"
+  "productivetrees:brown_amber_stripped_wood"
+  "productivetrees:buddhas_hand_stripped_wood"
+  "productivetrees:bull_pine_stripped_wood"
+  "productivetrees:butternut_stripped_wood"
+  "productivetrees:cacao_stripped_wood"
+  "productivetrees:candlenut_stripped_wood"
+  "productivetrees:carob_stripped_wood"
+  "productivetrees:cashew_stripped_wood"
+  "productivetrees:cave_dweller_stripped_wood"
+  "productivetrees:cedar_stripped_wood"
+  "productivetrees:cempedak_stripped_wood"
+  "productivetrees:ceylon_ebony_stripped_wood"
+  "productivetrees:cherry_plum_stripped_wood"
+  "productivetrees:cinnamon_stripped_wood"
+  "productivetrees:citron_stripped_wood"
+  "productivetrees:clove_stripped_wood"
+  "productivetrees:cocobolo_stripped_wood"
+  "productivetrees:coconut_stripped_wood"
+  "productivetrees:coffea_stripped_wood"
+  "productivetrees:copoazu_stripped_wood"
+  "productivetrees:copper_beech_stripped_wood"
+  "productivetrees:cork_oak_stripped_wood"
+  "productivetrees:cultivated_pear_stripped_wood"
+  "productivetrees:date_palm_stripped_wood"
+  "productivetrees:dogwood_stripped_wood"
+  "productivetrees:douglas_fir_stripped_wood"
+  "productivetrees:elderberry_stripped_wood"
+  "productivetrees:elm_stripped_wood"
+  "productivetrees:european_larch_stripped_wood"
+  "productivetrees:finger_lime_stripped_wood"
+  "productivetrees:firecracker_stripped_wood"
+  "productivetrees:flickering_sun_stripped_wood"
+  "productivetrees:flowering_crabapple_stripped_wood"
+  "productivetrees:foggy_blast_stripped_wood"
+  "productivetrees:ginkgo_stripped_wood"
+  "productivetrees:golden_delicious_apple_stripped_wood"
+  "productivetrees:grandidiers_baobab_stripped_wood"
+  "productivetrees:granny_smith_apple_stripped_wood"
+  "productivetrees:grapefruit_stripped_wood"
+  "productivetrees:great_sallow_stripped_wood"
+  "productivetrees:greenheart_stripped_wood"
+  "productivetrees:hawthorn_stripped_wood"
+  "productivetrees:hazel_stripped_wood"
+  "productivetrees:holly_stripped_wood"
+  "productivetrees:hornbeam_stripped_wood"
+  "productivetrees:ipe_stripped_wood"
+  "productivetrees:iroko_stripped_wood"
+  "productivetrees:jackfruit_stripped_wood"
+  "productivetrees:juniper_stripped_wood"
+  "productivetrees:kapok_stripped_wood"
+  "productivetrees:key_lime_stripped_wood"
+  "productivetrees:kumquat_stripped_wood"
+  "productivetrees:lawson_cypress_stripped_wood"
+  "productivetrees:lemon_stripped_wood"
+  "productivetrees:lime_stripped_wood"
+  "productivetrees:loblolly_pine_stripped_wood"
+  "productivetrees:logwood_stripped_wood"
+  "productivetrees:mahogany_stripped_wood"
+  "productivetrees:mandarin_stripped_wood"
+  "productivetrees:mango_stripped_wood"
+  "productivetrees:monkey_puzzle_stripped_wood"
+  "productivetrees:moonlight_magic_crepe_myrtle_stripped_wood"
+  "productivetrees:myrtle_ebony_stripped_wood"
+  "productivetrees:nectarine_stripped_wood"
+  "productivetrees:night_fuchsia_stripped_wood"
+  "productivetrees:nutmeg_stripped_wood"
+  "productivetrees:old_fustic_stripped_wood"
+  "productivetrees:olive_stripped_wood"
+  "productivetrees:orange_stripped_wood"
+  "productivetrees:osage_orange_stripped_wood"
+  "productivetrees:padauk_stripped_wood"
+  "productivetrees:pandanus_stripped_wood"
+  "productivetrees:papaya_stripped_wood"
+  "productivetrees:peach_stripped_wood"
+  "productivetrees:pecan_stripped_wood"
+  "productivetrees:persimmon_stripped_wood"
+  "productivetrees:pink_ipe_stripped_wood"
+  "productivetrees:pink_ivory_stripped_wood"
+  "productivetrees:pistachio_stripped_wood"
+  "productivetrees:plantain_stripped_wood"
+  "productivetrees:plum_stripped_wood"
+  "productivetrees:pomegranate_stripped_wood"
+  "productivetrees:pomelo_stripped_wood"
+  "productivetrees:prairie_crabapple_stripped_wood"
+  "productivetrees:purple_blackthorn_stripped_wood"
+  "productivetrees:purple_crepe_myrtle_stripped_wood"
+  "productivetrees:purple_ipe_stripped_wood"
+  "productivetrees:purple_spiral_stripped_wood"
+  "productivetrees:purpleheart_stripped_wood"
+  "productivetrees:rainbow_gum_stripped_wood"
+  "productivetrees:red_banana_stripped_wood"
+  "productivetrees:red_crepe_myrtle_stripped_wood"
+  "productivetrees:red_delicious_apple_stripped_wood"
+  "productivetrees:red_maple_stripped_wood"
+  "productivetrees:rippling_willow_stripped_wood"
+  "productivetrees:rose_gum_stripped_wood"
+  "productivetrees:rosewood_stripped_wood"
+  "productivetrees:rowan_stripped_wood"
+  "productivetrees:rubber_tree_stripped_wood"
+  "productivetrees:salak_stripped_wood"
+  "productivetrees:sand_pear_stripped_wood"
+  "productivetrees:sandalwood_stripped_wood"
+  "productivetrees:satsuma_stripped_wood"
+  "productivetrees:sequoia_stripped_wood"
+  "productivetrees:silver_fir_stripped_wood"
+  "productivetrees:silver_lime_stripped_wood"
+  "productivetrees:slimy_delight_stripped_wood"
+  "productivetrees:socotra_dragon_stripped_wood"
+  "productivetrees:soul_tree_stripped_wood"
+  "productivetrees:sour_cherry_stripped_wood"
+  "productivetrees:soursop_stripped_wood"
+  "productivetrees:sparkle_cherry_stripped_wood"
+  "productivetrees:star_anise_stripped_wood"
+  "productivetrees:star_fruit_stripped_wood"
+  "productivetrees:sugar_apple_stripped_wood"
+  "productivetrees:sugar_maple_stripped_wood"
+  "productivetrees:swamp_gum_stripped_wood"
+  "productivetrees:sweet_chestnut_stripped_wood"
+  "productivetrees:sweet_crabapple_stripped_wood"
+  "productivetrees:sweetgum_stripped_wood"
+  "productivetrees:sycamore_fig_stripped_wood"
+  "productivetrees:tangerine_stripped_wood"
+  "productivetrees:teak_stripped_wood"
+  "productivetrees:thunder_bolt_stripped_wood"
+  "productivetrees:time_traveller_stripped_wood"
+  "productivetrees:tuscarora_crepe_myrtle_stripped_wood"
+  "productivetrees:walnut_stripped_wood"
+  "productivetrees:water_wonder_stripped_wood"
+  "productivetrees:wenge_stripped_wood"
+  "productivetrees:western_hemlock_stripped_wood"
+  "productivetrees:white_ipe_stripped_wood"
+  "productivetrees:white_poplar_stripped_wood"
+  "productivetrees:white_willow_stripped_wood"
+  "productivetrees:whitebeam_stripped_wood"
+  "productivetrees:wild_cherry_stripped_wood"
+  "productivetrees:yellow_meranti_stripped_wood"
+  "productivetrees:yew_stripped_wood"
+  "productivetrees:zebrano_stripped_wood"
   ... (33 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/create:modded_stripped_logs</summary>

```diff
 [
   ... (1 entries)
-  "productivetrees:alder_stripped_log"
-  "productivetrees:allspice_stripped_log"
-  "productivetrees:almond_stripped_log"
-  "productivetrees:apricot_stripped_log"
-  "productivetrees:aquilaria_stripped_log"
-  "productivetrees:asai_palm_stripped_log"
-  "productivetrees:ash_stripped_log"
-  "productivetrees:aspen_stripped_log"
-  "productivetrees:avocado_stripped_log"
-  "productivetrees:balsa_stripped_log"
-  "productivetrees:balsam_fir_stripped_log"
-  "productivetrees:banana_stripped_log"
-  "productivetrees:beech_stripped_log"
-  "productivetrees:beliy_naliv_apple_stripped_log"
-  "productivetrees:black_cherry_stripped_log"
-  "productivetrees:black_ember_stripped_log"
-  "productivetrees:black_locust_stripped_log"
-  "productivetrees:blackthorn_stripped_log"
-  "productivetrees:blue_mahoe_stripped_log"
-  "productivetrees:blue_yonder_stripped_log"
-  "productivetrees:boxwood_stripped_log"
-  "productivetrees:brazil_nut_stripped_log"
-  "productivetrees:brazilwood_stripped_log"
-  "productivetrees:breadfruit_stripped_log"
-  "productivetrees:brown_amber_stripped_log"
-  "productivetrees:buddhas_hand_stripped_log"
-  "productivetrees:bull_pine_stripped_log"
-  "productivetrees:butternut_stripped_log"
-  "productivetrees:cacao_stripped_log"
-  "productivetrees:candlenut_stripped_log"
-  "productivetrees:carob_stripped_log"
-  "productivetrees:cashew_stripped_log"
-  "productivetrees:cave_dweller_stripped_log"
-  "productivetrees:cedar_stripped_log"
-  "productivetrees:cempedak_stripped_log"
-  "productivetrees:ceylon_ebony_stripped_log"
-  "productivetrees:cherry_plum_stripped_log"
-  "productivetrees:cinnamon_stripped_log"
-  "productivetrees:citron_stripped_log"
-  "productivetrees:clove_stripped_log"
-  "productivetrees:cocobolo_stripped_log"
-  "productivetrees:coconut_stripped_log"
-  "productivetrees:coffea_stripped_log"
-  "productivetrees:copoazu_stripped_log"
-  "productivetrees:copper_beech_stripped_log"
-  "productivetrees:cork_oak_stripped_log"
-  "productivetrees:cultivated_pear_stripped_log"
-  "productivetrees:date_palm_stripped_log"
-  "productivetrees:dogwood_stripped_log"
-  "productivetrees:douglas_fir_stripped_log"
-  "productivetrees:elderberry_stripped_log"
-  "productivetrees:elm_stripped_log"
-  "productivetrees:european_larch_stripped_log"
-  "productivetrees:finger_lime_stripped_log"
-  "productivetrees:firecracker_stripped_log"
-  "productivetrees:flickering_sun_stripped_log"
-  "productivetrees:flowering_crabapple_stripped_log"
-  "productivetrees:foggy_blast_stripped_log"
-  "productivetrees:ginkgo_stripped_log"
-  "productivetrees:golden_delicious_apple_stripped_log"
-  "productivetrees:grandidiers_baobab_stripped_log"
-  "productivetrees:granny_smith_apple_stripped_log"
-  "productivetrees:grapefruit_stripped_log"
-  "productivetrees:great_sallow_stripped_log"
-  "productivetrees:greenheart_stripped_log"
-  "productivetrees:hawthorn_stripped_log"
-  "productivetrees:hazel_stripped_log"
-  "productivetrees:holly_stripped_log"
-  "productivetrees:hornbeam_stripped_log"
-  "productivetrees:ipe_stripped_log"
-  "productivetrees:iroko_stripped_log"
-  "productivetrees:jackfruit_stripped_log"
-  "productivetrees:juniper_stripped_log"
-  "productivetrees:kapok_stripped_log"
-  "productivetrees:key_lime_stripped_log"
-  "productivetrees:kumquat_stripped_log"
-  "productivetrees:lawson_cypress_stripped_log"
-  "productivetrees:lemon_stripped_log"
-  "productivetrees:lime_stripped_log"
-  "productivetrees:loblolly_pine_stripped_log"
-  "productivetrees:logwood_stripped_log"
-  "productivetrees:mahogany_stripped_log"
-  "productivetrees:mandarin_stripped_log"
-  "productivetrees:mango_stripped_log"
-  "productivetrees:monkey_puzzle_stripped_log"
-  "productivetrees:moonlight_magic_crepe_myrtle_stripped_log"
-  "productivetrees:myrtle_ebony_stripped_log"
-  "productivetrees:nectarine_stripped_log"
-  "productivetrees:night_fuchsia_stripped_log"
-  "productivetrees:nutmeg_stripped_log"
-  "productivetrees:old_fustic_stripped_log"
-  "productivetrees:olive_stripped_log"
-  "productivetrees:orange_stripped_log"
-  "productivetrees:osage_orange_stripped_log"
-  "productivetrees:padauk_stripped_log"
-  "productivetrees:pandanus_stripped_log"
-  "productivetrees:papaya_stripped_log"
-  "productivetrees:peach_stripped_log"
-  "productivetrees:pecan_stripped_log"
-  "productivetrees:persimmon_stripped_log"
-  "productivetrees:pink_ipe_stripped_log"
-  "productivetrees:pink_ivory_stripped_log"
-  "productivetrees:pistachio_stripped_log"
-  "productivetrees:plantain_stripped_log"
-  "productivetrees:plum_stripped_log"
-  "productivetrees:pomegranate_stripped_log"
-  "productivetrees:pomelo_stripped_log"
-  "productivetrees:prairie_crabapple_stripped_log"
-  "productivetrees:purple_blackthorn_stripped_log"
-  "productivetrees:purple_crepe_myrtle_stripped_log"
-  "productivetrees:purple_ipe_stripped_log"
-  "productivetrees:purple_spiral_stripped_log"
-  "productivetrees:purpleheart_stripped_log"
-  "productivetrees:rainbow_gum_stripped_log"
-  "productivetrees:red_banana_stripped_log"
-  "productivetrees:red_crepe_myrtle_stripped_log"
-  "productivetrees:red_delicious_apple_stripped_log"
-  "productivetrees:red_maple_stripped_log"
-  "productivetrees:rippling_willow_stripped_log"
-  "productivetrees:rose_gum_stripped_log"
-  "productivetrees:rosewood_stripped_log"
-  "productivetrees:rowan_stripped_log"
-  "productivetrees:rubber_tree_stripped_log"
-  "productivetrees:salak_stripped_log"
-  "productivetrees:sand_pear_stripped_log"
-  "productivetrees:sandalwood_stripped_log"
-  "productivetrees:satsuma_stripped_log"
-  "productivetrees:sequoia_stripped_log"
-  "productivetrees:silver_fir_stripped_log"
-  "productivetrees:silver_lime_stripped_log"
-  "productivetrees:slimy_delight_stripped_log"
-  "productivetrees:socotra_dragon_stripped_log"
-  "productivetrees:soul_tree_stripped_log"
-  "productivetrees:sour_cherry_stripped_log"
-  "productivetrees:soursop_stripped_log"
-  "productivetrees:sparkle_cherry_stripped_log"
-  "productivetrees:star_anise_stripped_log"
-  "productivetrees:star_fruit_stripped_log"
-  "productivetrees:sugar_apple_stripped_log"
-  "productivetrees:sugar_maple_stripped_log"
-  "productivetrees:swamp_gum_stripped_log"
-  "productivetrees:sweet_chestnut_stripped_log"
-  "productivetrees:sweet_crabapple_stripped_log"
-  "productivetrees:sweetgum_stripped_log"
-  "productivetrees:sycamore_fig_stripped_log"
-  "productivetrees:tangerine_stripped_log"
-  "productivetrees:teak_stripped_log"
-  "productivetrees:thunder_bolt_stripped_log"
-  "productivetrees:time_traveller_stripped_log"
-  "productivetrees:tuscarora_crepe_myrtle_stripped_log"
-  "productivetrees:walnut_stripped_log"
-  "productivetrees:water_wonder_stripped_log"
-  "productivetrees:wenge_stripped_log"
-  "productivetrees:western_hemlock_stripped_log"
-  "productivetrees:white_ipe_stripped_log"
-  "productivetrees:white_poplar_stripped_log"
-  "productivetrees:white_willow_stripped_log"
-  "productivetrees:whitebeam_stripped_log"
-  "productivetrees:wild_cherry_stripped_log"
-  "productivetrees:yellow_meranti_stripped_log"
-  "productivetrees:yew_stripped_log"
-  "productivetrees:zebrano_stripped_log"
 ]

```


</details>

<details>
<summary>minecraft:item/create:modded_stripped_wood</summary>

```diff
 [
   ... (1 entries)
-  "productivetrees:alder_stripped_wood"
-  "productivetrees:allspice_stripped_wood"
-  "productivetrees:almond_stripped_wood"
-  "productivetrees:apricot_stripped_wood"
-  "productivetrees:aquilaria_stripped_wood"
-  "productivetrees:asai_palm_stripped_wood"
-  "productivetrees:ash_stripped_wood"
-  "productivetrees:aspen_stripped_wood"
-  "productivetrees:avocado_stripped_wood"
-  "productivetrees:balsa_stripped_wood"
-  "productivetrees:balsam_fir_stripped_wood"
-  "productivetrees:banana_stripped_wood"
-  "productivetrees:beech_stripped_wood"
-  "productivetrees:beliy_naliv_apple_stripped_wood"
-  "productivetrees:black_cherry_stripped_wood"
-  "productivetrees:black_ember_stripped_wood"
-  "productivetrees:black_locust_stripped_wood"
-  "productivetrees:blackthorn_stripped_wood"
-  "productivetrees:blue_mahoe_stripped_wood"
-  "productivetrees:blue_yonder_stripped_wood"
-  "productivetrees:boxwood_stripped_wood"
-  "productivetrees:brazil_nut_stripped_wood"
-  "productivetrees:brazilwood_stripped_wood"
-  "productivetrees:breadfruit_stripped_wood"
-  "productivetrees:brown_amber_stripped_wood"
-  "productivetrees:buddhas_hand_stripped_wood"
-  "productivetrees:bull_pine_stripped_wood"
-  "productivetrees:butternut_stripped_wood"
-  "productivetrees:cacao_stripped_wood"
-  "productivetrees:candlenut_stripped_wood"
-  "productivetrees:carob_stripped_wood"
-  "productivetrees:cashew_stripped_wood"
-  "productivetrees:cave_dweller_stripped_wood"
-  "productivetrees:cedar_stripped_wood"
-  "productivetrees:cempedak_stripped_wood"
-  "productivetrees:ceylon_ebony_stripped_wood"
-  "productivetrees:cherry_plum_stripped_wood"
-  "productivetrees:cinnamon_stripped_wood"
-  "productivetrees:citron_stripped_wood"
-  "productivetrees:clove_stripped_wood"
-  "productivetrees:cocobolo_stripped_wood"
-  "productivetrees:coconut_stripped_wood"
-  "productivetrees:coffea_stripped_wood"
-  "productivetrees:copoazu_stripped_wood"
-  "productivetrees:copper_beech_stripped_wood"
-  "productivetrees:cork_oak_stripped_wood"
-  "productivetrees:cultivated_pear_stripped_wood"
-  "productivetrees:date_palm_stripped_wood"
-  "productivetrees:dogwood_stripped_wood"
-  "productivetrees:douglas_fir_stripped_wood"
-  "productivetrees:elderberry_stripped_wood"
-  "productivetrees:elm_stripped_wood"
-  "productivetrees:european_larch_stripped_wood"
-  "productivetrees:finger_lime_stripped_wood"
-  "productivetrees:firecracker_stripped_wood"
-  "productivetrees:flickering_sun_stripped_wood"
-  "productivetrees:flowering_crabapple_stripped_wood"
-  "productivetrees:foggy_blast_stripped_wood"
-  "productivetrees:ginkgo_stripped_wood"
-  "productivetrees:golden_delicious_apple_stripped_wood"
-  "productivetrees:grandidiers_baobab_stripped_wood"
-  "productivetrees:granny_smith_apple_stripped_wood"
-  "productivetrees:grapefruit_stripped_wood"
-  "productivetrees:great_sallow_stripped_wood"
-  "productivetrees:greenheart_stripped_wood"
-  "productivetrees:hawthorn_stripped_wood"
-  "productivetrees:hazel_stripped_wood"
-  "productivetrees:holly_stripped_wood"
-  "productivetrees:hornbeam_stripped_wood"
-  "productivetrees:ipe_stripped_wood"
-  "productivetrees:iroko_stripped_wood"
-  "productivetrees:jackfruit_stripped_wood"
-  "productivetrees:juniper_stripped_wood"
-  "productivetrees:kapok_stripped_wood"
-  "productivetrees:key_lime_stripped_wood"
-  "productivetrees:kumquat_stripped_wood"
-  "productivetrees:lawson_cypress_stripped_wood"
-  "productivetrees:lemon_stripped_wood"
-  "productivetrees:lime_stripped_wood"
-  "productivetrees:loblolly_pine_stripped_wood"
-  "productivetrees:logwood_stripped_wood"
-  "productivetrees:mahogany_stripped_wood"
-  "productivetrees:mandarin_stripped_wood"
-  "productivetrees:mango_stripped_wood"
-  "productivetrees:monkey_puzzle_stripped_wood"
-  "productivetrees:moonlight_magic_crepe_myrtle_stripped_wood"
-  "productivetrees:myrtle_ebony_stripped_wood"
-  "productivetrees:nectarine_stripped_wood"
-  "productivetrees:night_fuchsia_stripped_wood"
-  "productivetrees:nutmeg_stripped_wood"
-  "productivetrees:old_fustic_stripped_wood"
-  "productivetrees:olive_stripped_wood"
-  "productivetrees:orange_stripped_wood"
-  "productivetrees:osage_orange_stripped_wood"
-  "productivetrees:padauk_stripped_wood"
-  "productivetrees:pandanus_stripped_wood"
-  "productivetrees:papaya_stripped_wood"
-  "productivetrees:peach_stripped_wood"
-  "productivetrees:pecan_stripped_wood"
-  "productivetrees:persimmon_stripped_wood"
-  "productivetrees:pink_ipe_stripped_wood"
-  "productivetrees:pink_ivory_stripped_wood"
-  "productivetrees:pistachio_stripped_wood"
-  "productivetrees:plantain_stripped_wood"
-  "productivetrees:plum_stripped_wood"
-  "productivetrees:pomegranate_stripped_wood"
-  "productivetrees:pomelo_stripped_wood"
-  "productivetrees:prairie_crabapple_stripped_wood"
-  "productivetrees:purple_blackthorn_stripped_wood"
-  "productivetrees:purple_crepe_myrtle_stripped_wood"
-  "productivetrees:purple_ipe_stripped_wood"
-  "productivetrees:purple_spiral_stripped_wood"
-  "productivetrees:purpleheart_stripped_wood"
-  "productivetrees:rainbow_gum_stripped_wood"
-  "productivetrees:red_banana_stripped_wood"
-  "productivetrees:red_crepe_myrtle_stripped_wood"
-  "productivetrees:red_delicious_apple_stripped_wood"
-  "productivetrees:red_maple_stripped_wood"
-  "productivetrees:rippling_willow_stripped_wood"
-  "productivetrees:rose_gum_stripped_wood"
-  "productivetrees:rosewood_stripped_wood"
-  "productivetrees:rowan_stripped_wood"
-  "productivetrees:rubber_tree_stripped_wood"
-  "productivetrees:salak_stripped_wood"
-  "productivetrees:sand_pear_stripped_wood"
-  "productivetrees:sandalwood_stripped_wood"
-  "productivetrees:satsuma_stripped_wood"
-  "productivetrees:sequoia_stripped_wood"
-  "productivetrees:silver_fir_stripped_wood"
-  "productivetrees:silver_lime_stripped_wood"
-  "productivetrees:slimy_delight_stripped_wood"
-  "productivetrees:socotra_dragon_stripped_wood"
-  "productivetrees:soul_tree_stripped_wood"
-  "productivetrees:sour_cherry_stripped_wood"
-  "productivetrees:soursop_stripped_wood"
-  "productivetrees:sparkle_cherry_stripped_wood"
-  "productivetrees:star_anise_stripped_wood"
-  "productivetrees:star_fruit_stripped_wood"
-  "productivetrees:sugar_apple_stripped_wood"
-  "productivetrees:sugar_maple_stripped_wood"
-  "productivetrees:swamp_gum_stripped_wood"
-  "productivetrees:sweet_chestnut_stripped_wood"
-  "productivetrees:sweet_crabapple_stripped_wood"
-  "productivetrees:sweetgum_stripped_wood"
-  "productivetrees:sycamore_fig_stripped_wood"
-  "productivetrees:tangerine_stripped_wood"
-  "productivetrees:teak_stripped_wood"
-  "productivetrees:thunder_bolt_stripped_wood"
-  "productivetrees:time_traveller_stripped_wood"
-  "productivetrees:tuscarora_crepe_myrtle_stripped_wood"
-  "productivetrees:walnut_stripped_wood"
-  "productivetrees:water_wonder_stripped_wood"
-  "productivetrees:wenge_stripped_wood"
-  "productivetrees:western_hemlock_stripped_wood"
-  "productivetrees:white_ipe_stripped_wood"
-  "productivetrees:white_poplar_stripped_wood"
-  "productivetrees:white_willow_stripped_wood"
-  "productivetrees:whitebeam_stripped_wood"
-  "productivetrees:wild_cherry_stripped_wood"
-  "productivetrees:yellow_meranti_stripped_wood"
-  "productivetrees:yew_stripped_wood"
-  "productivetrees:zebrano_stripped_wood"
 ]

```


</details>

<details>
<summary>minecraft:item/irons_spellbooks:add_to_lectern_and_bookshelf</summary>

```diff
 [
   ... (5 entries)
+  "irons_spellbooks:unchained_book"
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:chest_armor</summary>

```diff
 [
   ... (21 entries)
+  "ars_elemancy:cinder_chestplate"
   ... (1 entries)
+  "ars_elemancy:cinder_tunic"
+  "ars_elemancy:elemancer_chestplate"
   ... (1 entries)
+  "ars_elemancy:elemancer_tunic"
+  "ars_elemancy:lava_chestplate"
   ... (1 entries)
+  "ars_elemancy:lava_tunic"
+  "ars_elemancy:mire_chestplate"
   ... (1 entries)
+  "ars_elemancy:mire_tunic"
+  "ars_elemancy:silt_chestplate"
   ... (1 entries)
+  "ars_elemancy:silt_tunic"
+  "ars_elemancy:tempest_chestplate"
   ... (1 entries)
+  "ars_elemancy:tempest_tunic"
+  "ars_elemancy:vapor_chestplate"
   ... (1 entries)
+  "ars_elemancy:vapor_tunic"
   ... (131 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/armor</summary>

```diff
 [
   ... (29 entries)
+  "ars_elemancy:cinder_boots_heavy"
+  "ars_elemancy:cinder_chestplate"
   ... (1 entries)
+  "ars_elemancy:cinder_helmet"
+  "ars_elemancy:cinder_hood"
   ... (1 entries)
+  "ars_elemancy:cinder_leggings_heavy"
+  "ars_elemancy:cinder_pants"
   ... (1 entries)
+  "ars_elemancy:cinder_shoes"
+  "ars_elemancy:cinder_tunic"
   ... (1 entries)
+  "ars_elemancy:elemancer_boots_heavy"
+  "ars_elemancy:elemancer_chestplate"
   ... (1 entries)
+  "ars_elemancy:elemancer_helmet"
+  "ars_elemancy:elemancer_hood"
   ... (1 entries)
+  "ars_elemancy:elemancer_leggings_heavy"
+  "ars_elemancy:elemancer_pants"
   ... (1 entries)
+  "ars_elemancy:elemancer_shoes"
+  "ars_elemancy:elemancer_tunic"
   ... (1 entries)
+  "ars_elemancy:lava_boots_heavy"
+  "ars_elemancy:lava_chestplate"
   ... (1 entries)
+  "ars_elemancy:lava_helmet"
+  "ars_elemancy:lava_hood"
   ... (1 entries)
+  "ars_elemancy:lava_leggings_heavy"
+  "ars_elemancy:lava_pants"
   ... (1 entries)
+  "ars_elemancy:lava_shoes"
+  "ars_elemancy:lava_tunic"
   ... (1 entries)
+  "ars_elemancy:mire_boots_heavy"
+  "ars_elemancy:mire_chestplate"
   ... (1 entries)
+  "ars_elemancy:mire_helmet"
+  "ars_elemancy:mire_hood"
   ... (1 entries)
+  "ars_elemancy:mire_leggings_heavy"
+  "ars_elemancy:mire_pants"
   ... (1 entries)
+  "ars_elemancy:mire_shoes"
+  "ars_elemancy:mire_tunic"
   ... (1 entries)
+  "ars_elemancy:silt_boots_heavy"
+  "ars_elemancy:silt_chestplate"
   ... (1 entries)
+  "ars_elemancy:silt_helmet"
+  "ars_elemancy:silt_hood"
   ... (1 entries)
+  "ars_elemancy:silt_leggings_heavy"
+  "ars_elemancy:silt_pants"
   ... (1 entries)
+  "ars_elemancy:silt_shoes"
+  "ars_elemancy:silt_tunic"
   ... (1 entries)
+  "ars_elemancy:tempest_boots_heavy"
+  "ars_elemancy:tempest_chestplate"
   ... (1 entries)
+  "ars_elemancy:tempest_helmet"
+  "ars_elemancy:tempest_hood"
   ... (1 entries)
+  "ars_elemancy:tempest_leggings_heavy"
+  "ars_elemancy:tempest_pants"
   ... (1 entries)
+  "ars_elemancy:tempest_shoes"
+  "ars_elemancy:tempest_tunic"
   ... (1 entries)
+  "ars_elemancy:vapor_boots_heavy"
+  "ars_elemancy:vapor_chestplate"
   ... (1 entries)
+  "ars_elemancy:vapor_helmet"
+  "ars_elemancy:vapor_hood"
   ... (1 entries)
+  "ars_elemancy:vapor_leggings_heavy"
+  "ars_elemancy:vapor_pants"
   ... (1 entries)
+  "ars_elemancy:vapor_shoes"
+  "ars_elemancy:vapor_tunic"
   ... (64 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/chest_armor</summary>

```diff
 [
   ... (8 entries)
+  "ars_elemancy:cinder_chestplate"
   ... (1 entries)
+  "ars_elemancy:cinder_tunic"
+  "ars_elemancy:elemancer_chestplate"
   ... (1 entries)
+  "ars_elemancy:elemancer_tunic"
+  "ars_elemancy:lava_chestplate"
   ... (1 entries)
+  "ars_elemancy:lava_tunic"
+  "ars_elemancy:mire_chestplate"
   ... (1 entries)
+  "ars_elemancy:mire_tunic"
+  "ars_elemancy:silt_chestplate"
   ... (1 entries)
+  "ars_elemancy:silt_tunic"
+  "ars_elemancy:tempest_chestplate"
   ... (1 entries)
+  "ars_elemancy:tempest_tunic"
+  "ars_elemancy:vapor_chestplate"
   ... (1 entries)
+  "ars_elemancy:vapor_tunic"
   ... (42 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/durability</summary>

```diff
 [
   ... (57 entries)
+  "ars_elemancy:cinder_boots_heavy"
+  "ars_elemancy:cinder_chestplate"
   ... (1 entries)
+  "ars_elemancy:cinder_helmet"
+  "ars_elemancy:cinder_hood"
   ... (1 entries)
+  "ars_elemancy:cinder_leggings_heavy"
+  "ars_elemancy:cinder_pants"
   ... (1 entries)
+  "ars_elemancy:cinder_shoes"
+  "ars_elemancy:cinder_tunic"
   ... (1 entries)
+  "ars_elemancy:elemancer_boots_heavy"
+  "ars_elemancy:elemancer_chestplate"
   ... (1 entries)
+  "ars_elemancy:elemancer_helmet"
+  "ars_elemancy:elemancer_hood"
   ... (1 entries)
+  "ars_elemancy:elemancer_leggings_heavy"
+  "ars_elemancy:elemancer_pants"
   ... (1 entries)
+  "ars_elemancy:elemancer_shoes"
+  "ars_elemancy:elemancer_tunic"
   ... (1 entries)
+  "ars_elemancy:lava_boots_heavy"
+  "ars_elemancy:lava_chestplate"
   ... (1 entries)
+  "ars_elemancy:lava_helmet"
+  "ars_elemancy:lava_hood"
   ... (1 entries)
+  "ars_elemancy:lava_leggings_heavy"
+  "ars_elemancy:lava_pants"
   ... (1 entries)
+  "ars_elemancy:lava_shoes"
+  "ars_elemancy:lava_tunic"
   ... (1 entries)
+  "ars_elemancy:mire_boots_heavy"
+  "ars_elemancy:mire_chestplate"
   ... (1 entries)
+  "ars_elemancy:mire_helmet"
+  "ars_elemancy:mire_hood"
   ... (1 entries)
+  "ars_elemancy:mire_leggings_heavy"
+  "ars_elemancy:mire_pants"
   ... (1 entries)
+  "ars_elemancy:mire_shoes"
+  "ars_elemancy:mire_tunic"
   ... (1 entries)
+  "ars_elemancy:silt_boots_heavy"
+  "ars_elemancy:silt_chestplate"
   ... (1 entries)
+  "ars_elemancy:silt_helmet"
+  "ars_elemancy:silt_hood"
   ... (1 entries)
+  "ars_elemancy:silt_leggings_heavy"
+  "ars_elemancy:silt_pants"
   ... (1 entries)
+  "ars_elemancy:silt_shoes"
+  "ars_elemancy:silt_tunic"
   ... (1 entries)
+  "ars_elemancy:tempest_boots_heavy"
+  "ars_elemancy:tempest_chestplate"
   ... (1 entries)
+  "ars_elemancy:tempest_helmet"
+  "ars_elemancy:tempest_hood"
   ... (1 entries)
+  "ars_elemancy:tempest_leggings_heavy"
+  "ars_elemancy:tempest_pants"
   ... (1 entries)
+  "ars_elemancy:tempest_shoes"
+  "ars_elemancy:tempest_tunic"
   ... (1 entries)
+  "ars_elemancy:vapor_boots_heavy"
+  "ars_elemancy:vapor_chestplate"
   ... (1 entries)
+  "ars_elemancy:vapor_helmet"
+  "ars_elemancy:vapor_hood"
   ... (1 entries)
+  "ars_elemancy:vapor_leggings_heavy"
+  "ars_elemancy:vapor_pants"
   ... (1 entries)
+  "ars_elemancy:vapor_shoes"
+  "ars_elemancy:vapor_tunic"
   ... (213 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/equippable</summary>

```diff
 [
   ... (31 entries)
+  "ars_elemancy:cinder_boots_heavy"
+  "ars_elemancy:cinder_chestplate"
   ... (1 entries)
+  "ars_elemancy:cinder_helmet"
+  "ars_elemancy:cinder_hood"
   ... (1 entries)
+  "ars_elemancy:cinder_leggings_heavy"
+  "ars_elemancy:cinder_pants"
   ... (1 entries)
+  "ars_elemancy:cinder_shoes"
+  "ars_elemancy:cinder_tunic"
   ... (1 entries)
+  "ars_elemancy:elemancer_boots_heavy"
+  "ars_elemancy:elemancer_chestplate"
   ... (1 entries)
+  "ars_elemancy:elemancer_helmet"
+  "ars_elemancy:elemancer_hood"
   ... (1 entries)
+  "ars_elemancy:elemancer_leggings_heavy"
+  "ars_elemancy:elemancer_pants"
   ... (1 entries)
+  "ars_elemancy:elemancer_shoes"
+  "ars_elemancy:elemancer_tunic"
   ... (1 entries)
+  "ars_elemancy:lava_boots_heavy"
+  "ars_elemancy:lava_chestplate"
   ... (1 entries)
+  "ars_elemancy:lava_helmet"
+  "ars_elemancy:lava_hood"
   ... (1 entries)
+  "ars_elemancy:lava_leggings_heavy"
+  "ars_elemancy:lava_pants"
   ... (1 entries)
+  "ars_elemancy:lava_shoes"
+  "ars_elemancy:lava_tunic"
   ... (1 entries)
+  "ars_elemancy:mire_boots_heavy"
+  "ars_elemancy:mire_chestplate"
   ... (1 entries)
+  "ars_elemancy:mire_helmet"
+  "ars_elemancy:mire_hood"
   ... (1 entries)
+  "ars_elemancy:mire_leggings_heavy"
+  "ars_elemancy:mire_pants"
   ... (1 entries)
+  "ars_elemancy:mire_shoes"
+  "ars_elemancy:mire_tunic"
   ... (1 entries)
+  "ars_elemancy:silt_boots_heavy"
+  "ars_elemancy:silt_chestplate"
   ... (1 entries)
+  "ars_elemancy:silt_helmet"
+  "ars_elemancy:silt_hood"
   ... (1 entries)
+  "ars_elemancy:silt_leggings_heavy"
+  "ars_elemancy:silt_pants"
   ... (1 entries)
+  "ars_elemancy:silt_shoes"
+  "ars_elemancy:silt_tunic"
   ... (1 entries)
+  "ars_elemancy:tempest_boots_heavy"
+  "ars_elemancy:tempest_chestplate"
   ... (1 entries)
+  "ars_elemancy:tempest_helmet"
+  "ars_elemancy:tempest_hood"
   ... (1 entries)
+  "ars_elemancy:tempest_leggings_heavy"
+  "ars_elemancy:tempest_pants"
   ... (1 entries)
+  "ars_elemancy:tempest_shoes"
+  "ars_elemancy:tempest_tunic"
   ... (1 entries)
+  "ars_elemancy:vapor_boots_heavy"
+  "ars_elemancy:vapor_chestplate"
   ... (1 entries)
+  "ars_elemancy:vapor_helmet"
+  "ars_elemancy:vapor_hood"
   ... (1 entries)
+  "ars_elemancy:vapor_leggings_heavy"
+  "ars_elemancy:vapor_pants"
   ... (1 entries)
+  "ars_elemancy:vapor_shoes"
+  "ars_elemancy:vapor_tunic"
   ... (88 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/foot_armor</summary>

```diff
 [
   ... (9 entries)
+  "ars_elemancy:cinder_boots_heavy"
+  "ars_elemancy:cinder_shoes"
   ... (1 entries)
+  "ars_elemancy:elemancer_boots_heavy"
+  "ars_elemancy:elemancer_shoes"
   ... (1 entries)
+  "ars_elemancy:lava_boots_heavy"
+  "ars_elemancy:lava_shoes"
   ... (1 entries)
+  "ars_elemancy:mire_boots_heavy"
+  "ars_elemancy:mire_shoes"
   ... (1 entries)
+  "ars_elemancy:silt_boots_heavy"
+  "ars_elemancy:silt_shoes"
   ... (1 entries)
+  "ars_elemancy:tempest_boots_heavy"
+  "ars_elemancy:tempest_shoes"
   ... (1 entries)
+  "ars_elemancy:vapor_boots_heavy"
+  "ars_elemancy:vapor_shoes"
   ... (36 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/head_armor</summary>

```diff
 [
   ... (9 entries)
+  "ars_elemancy:cinder_helmet"
+  "ars_elemancy:cinder_hood"
   ... (1 entries)
+  "ars_elemancy:elemancer_helmet"
+  "ars_elemancy:elemancer_hood"
   ... (1 entries)
+  "ars_elemancy:lava_helmet"
+  "ars_elemancy:lava_hood"
   ... (1 entries)
+  "ars_elemancy:mire_helmet"
+  "ars_elemancy:mire_hood"
   ... (1 entries)
+  "ars_elemancy:silt_helmet"
+  "ars_elemancy:silt_hood"
   ... (1 entries)
+  "ars_elemancy:tempest_helmet"
+  "ars_elemancy:tempest_hood"
   ... (1 entries)
+  "ars_elemancy:vapor_helmet"
+  "ars_elemancy:vapor_hood"
   ... (37 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/leg_armor</summary>

```diff
 [
   ... (9 entries)
+  "ars_elemancy:cinder_leggings_heavy"
+  "ars_elemancy:cinder_pants"
   ... (1 entries)
+  "ars_elemancy:elemancer_leggings_heavy"
+  "ars_elemancy:elemancer_pants"
   ... (1 entries)
+  "ars_elemancy:lava_leggings_heavy"
+  "ars_elemancy:lava_pants"
   ... (1 entries)
+  "ars_elemancy:mire_leggings_heavy"
+  "ars_elemancy:mire_pants"
   ... (1 entries)
+  "ars_elemancy:silt_leggings_heavy"
+  "ars_elemancy:silt_pants"
   ... (1 entries)
+  "ars_elemancy:tempest_leggings_heavy"
+  "ars_elemancy:tempest_pants"
   ... (1 entries)
+  "ars_elemancy:vapor_leggings_heavy"
+  "ars_elemancy:vapor_pants"
   ... (37 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:foot_armor</summary>

```diff
 [
   ... (23 entries)
+  "ars_elemancy:cinder_boots_heavy"
+  "ars_elemancy:cinder_shoes"
   ... (1 entries)
+  "ars_elemancy:elemancer_boots_heavy"
+  "ars_elemancy:elemancer_shoes"
   ... (1 entries)
+  "ars_elemancy:lava_boots_heavy"
+  "ars_elemancy:lava_shoes"
   ... (1 entries)
+  "ars_elemancy:mire_boots_heavy"
+  "ars_elemancy:mire_shoes"
   ... (1 entries)
+  "ars_elemancy:silt_boots_heavy"
+  "ars_elemancy:silt_shoes"
   ... (1 entries)
+  "ars_elemancy:tempest_boots_heavy"
+  "ars_elemancy:tempest_shoes"
   ... (1 entries)
+  "ars_elemancy:vapor_boots_heavy"
+  "ars_elemancy:vapor_shoes"
   ... (119 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:head_armor</summary>

```diff
 [
   ... (22 entries)
+  "ars_elemancy:cinder_helmet"
+  "ars_elemancy:cinder_hood"
   ... (1 entries)
+  "ars_elemancy:elemancer_helmet"
+  "ars_elemancy:elemancer_hood"
   ... (1 entries)
+  "ars_elemancy:lava_helmet"
+  "ars_elemancy:lava_hood"
   ... (1 entries)
+  "ars_elemancy:mire_helmet"
+  "ars_elemancy:mire_hood"
   ... (1 entries)
+  "ars_elemancy:silt_helmet"
+  "ars_elemancy:silt_hood"
   ... (1 entries)
+  "ars_elemancy:tempest_helmet"
+  "ars_elemancy:tempest_hood"
   ... (1 entries)
+  "ars_elemancy:vapor_helmet"
+  "ars_elemancy:vapor_hood"
   ... (129 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:leg_armor</summary>

```diff
 [
   ... (22 entries)
+  "ars_elemancy:cinder_leggings_heavy"
+  "ars_elemancy:cinder_pants"
   ... (1 entries)
+  "ars_elemancy:elemancer_leggings_heavy"
+  "ars_elemancy:elemancer_pants"
   ... (1 entries)
+  "ars_elemancy:lava_leggings_heavy"
+  "ars_elemancy:lava_pants"
   ... (1 entries)
+  "ars_elemancy:mire_leggings_heavy"
+  "ars_elemancy:mire_pants"
   ... (1 entries)
+  "ars_elemancy:silt_leggings_heavy"
+  "ars_elemancy:silt_pants"
   ... (1 entries)
+  "ars_elemancy:tempest_leggings_heavy"
+  "ars_elemancy:tempest_pants"
   ... (1 entries)
+  "ars_elemancy:vapor_leggings_heavy"
+  "ars_elemancy:vapor_pants"
   ... (119 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:jar_cookies</summary>

```diff
 [
   ... (43 entries)
+  "nomansland:honeyed_apple?"
+  "nomansland:syruped_pear?"
   ... (42 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/supplementaries:pancake_syrup</summary>

```diff
 [
   ... (3 entries)
+  "nomansland:maple_syrup_bottle?"
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (24)</summary>
<blockquote>

<details>
<summary>minecraft:banner_pattern/nyctography:pattern_item/nyctography</summary>

```diff
-[
-  "nyctography:0"
-  "nyctography:1"
-  "nyctography:2"
-  "nyctography:3"
-  "nyctography:4"
-  "nyctography:5"
-  "nyctography:6"
-  "nyctography:7"
-  "nyctography:8"
-  "nyctography:9"
-  "nyctography:a"
-  "nyctography:and"
-  "nyctography:b"
-  "nyctography:c"
-  "nyctography:d"
-  "nyctography:date"
-  "nyctography:digit"
-  "nyctography:e"
-  "nyctography:f"
-  "nyctography:g"
-  "nyctography:h"
-  "nyctography:i"
-  "nyctography:j"
-  "nyctography:k"
-  "nyctography:l"
-  "nyctography:letter"
-  "nyctography:m"
-  "nyctography:n"
-  "nyctography:o"
-  "nyctography:p"
-  "nyctography:q"
-  "nyctography:r"
-  "nyctography:s"
-  "nyctography:t"
-  "nyctography:the"
-  "nyctography:u"
-  "nyctography:v"
-  "nyctography:w"
-  "nyctography:x"
-  "nyctography:y"
-  "nyctography:z"
-]

```


</details>

<details>
<summary>minecraft:item/enderio:grinding_balls</summary>

```diff
-[
-  "enderio:conductive_alloy_grinding_ball"
-  "enderio:dark_steel_grinding_ball"
-  "enderio:end_steel_grinding_ball"
-  "enderio:energetic_alloy_grinding_ball"
-  "enderio:pulsating_alloy_grinding_ball"
-  "enderio:redstone_alloy_grinding_ball"
-  "enderio:soularium_grinding_ball"
-  "enderio:vibrant_alloy_grinding_ball"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/allthemodium</summary>

```diff
-[
-  "potionsmaster:calcinated_allthemodium_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/aluminum</summary>

```diff
-[
-  "potionsmaster:calcinated_aluminum_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/coal</summary>

```diff
-[
-  "potionsmaster:calcinated_coal_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/copper</summary>

```diff
-[
-  "potionsmaster:calcinated_copper_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/diamond</summary>

```diff
-[
-  "potionsmaster:calcinated_diamond_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/emerald</summary>

```diff
-[
-  "potionsmaster:calcinated_emerald_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/gold</summary>

```diff
-[
-  "potionsmaster:calcinated_gold_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/iron</summary>

```diff
-[
-  "potionsmaster:calcinated_iron_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/lapis</summary>

```diff
-[
-  "potionsmaster:calcinated_lapis_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/lead</summary>

```diff
-[
-  "potionsmaster:calcinated_lead_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/netherite_scrap</summary>

```diff
-[
-  "potionsmaster:calcinated_netherite_scrap_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/nickel</summary>

```diff
-[
-  "potionsmaster:calcinated_nickel_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/osmium</summary>

```diff
-[
-  "potionsmaster:calcinated_osmium_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/platinum</summary>

```diff
-[
-  "potionsmaster:calcinated_platinum_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/quartz</summary>

```diff
-[
-  "potionsmaster:calcinated_quartz_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/redstone</summary>

```diff
-[
-  "potionsmaster:calcinated_redstone_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/silver</summary>

```diff
-[
-  "potionsmaster:calcinated_silver_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/tin</summary>

```diff
-[
-  "potionsmaster:calcinated_tin_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/unobtainium</summary>

```diff
-[
-  "potionsmaster:calcinated_unobtainium_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/uranium</summary>

```diff
-[
-  "potionsmaster:calcinated_uranium_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/vibranium</summary>

```diff
-[
-  "potionsmaster:calcinated_vibranium_oresight_powder"
-]

```


</details>

<details>
<summary>minecraft:item/potionsmaster:calcinated/zinc</summary>

```diff
-[
-  "potionsmaster:calcinated_zinc_oresight_powder"
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
   ... (33752 entries)
+  "pneumaticcraft:reinforced_pressure_chamber_valve"
   ... (14421 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (2018 entries)
+  "pneumaticcraft:reinforced_pressure_chamber_valve"
   ... (625 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (4106 entries)
+  "ars_elemental:ritual_pollination"
   ... (25775 entries)
+  "enderio:limited_item_filter"
   ... (5044 entries)
+  "irons_spellbooks:unchained_book"
   ... (8780 entries)
-  "nyctography:nyctography_pattern"
   ... (2464 entries)
+  "pneumaticcraft:reinforced_pressure_chamber_valve"
   ... (59 entries)
+  "pneumaticcraft:unassembled_reinforced_pressure_chamber_valve"
   ... (16377 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/pneumaticcraft/blocks/reinforced_pressure_chamber_valve</summary>

```diff
+{
+  type: "minecraft:block"
+  pools: [
+    {
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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "pneumaticcraft:air"
+                "pneumaticcraft:upgrades"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "pneumaticcraft:reinforced_pressure_chamber_valve"
+        }
+      ]
+      name: "reinforced_pressure_chamber_valve"
+      rolls: 1
+    }
+  ]
+  random_sequence: "pneumaticcraft:blocks/reinforced_pressure_chamber_valve"
+}

```


</details>

</blockquote>

</details>

