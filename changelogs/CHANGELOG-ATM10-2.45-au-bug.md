# Changelog

# 📦 au-bug

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Updated (1)</summary>

- AlmostUnified (1.21.1-1.2.5) -> (1.21.1-1.2.3)

</details>

## 🍳 Recipes

<details open>
<summary>Added (1)</summary>
<blockquote>

<details>
<summary>mysticalagriculture/prosperity_ingot</summary>

```diff
+{
+  type: "crafting_shaped"
+  pattern: [
+    " # "
+    "#I#"
+    " # "
+  ]
+  key: {
+    #: {
+      item: "mysticalagriculture:prosperity_shard"
+    }
+    I: {
+      tag: "c:ingots/iron"
+    }
+  }
+  result: {
+    id: "mysticalagriculture:prosperity_ingot"
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
<summary>almostunified/mysticalagriculture</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "mysticalagriculture"
   recipes: [
     "1$augment/haste_i"
     "1$augment/haste_ii"
     "1$augment/haste_iii"
     "1$augment/luck_i"
     "1$augment/luck_ii"
     "1$augment/luck_iii"
     "1$awakened_supremium_gemstone"
     "1$awakened_supremium_ingot"
     "1$enchanter/breach"
     "1$enchanter/density"
     "1$enchanter/efficiency"
     "1$enchanter/fortune"
     "1$enchanter/impaling"
     "1$enchanter/looting"
     "1$enchanter/luck_of_the_sea"
     "1$enchanter/sweeping_edge"
     "1$essence/appliedenergistics2/silicon_press"
     "1$essence/extremereactors2/yellorium_ingot"
     "1$essence/mekanism/fluorite"
     "1$essence/mekanism/osmium_ingot"
     "1$furnace"
     "1$gear/inferium_axe"
     "1$gear/inferium_boots"
     "1$gear/inferium_bow"
     "1$gear/inferium_chestplate"
     "1$gear/inferium_crossbow"
     "1$gear/inferium_fishing_rod"
     "1$gear/inferium_helmet"
     "1$gear/inferium_hoe"
     "1$gear/inferium_leggings"
     "1$gear/inferium_pickaxe"
     "1$gear/inferium_scythe"
     "1$gear/inferium_shears"
     "1$gear/inferium_shovel"
     "1$gear/inferium_sickle"
     "1$gear/inferium_sword"
     "1$gear/inferium_watering_can"
     "1$imperium_gemstone"
     "1$imperium_ingot"
     "1$inferium_gemstone"
     "1$inferium_gemstone_block"
     "1$inferium_growth_accelerator"
     "1$inferium_ingot"
     "1$inferium_ingot_block"
     "1$inferium_ingot_recraft"
     "1$inferium_ingot_uncraft"
     "1$inferium_upgrade"
     "1$prosperity_gemstone_block"
     "1$prosperity_ingot_block"
+    "1$prosperity_ingot_recraft"
     "1$prosperity_ingot_uncraft"
     "1$prudentium_gemstone"
     "1$prudentium_ingot"
     "1$soulium_gemstone"
     "1$soulium_ingot"
     "1$supremium_gemstone"
     "1$supremium_ingot"
     "1$tertium_gemstone"
     "1$tertium_ingot"
     "1$upgrade_base"
-    "3$prosperity_ingot_recraft"
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

## ✍️ Registries

## 🗝️ Loot Table

