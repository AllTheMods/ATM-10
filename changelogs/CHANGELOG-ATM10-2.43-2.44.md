# Changelog

# 📦 2.44

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Added (2)</summary>

- Interdimensional Wireless Transmitter (1.21.1-0.1.2)
- Universal Grid (1.21.1-0.1.3)

</details>

<details>
<summary>Updated (18)</summary>

- AllTheTweaks (2.6.1) -> (2.6.2)
- Bookshelf (21.1.56) -> (21.1.57)
- Byzantine (31.2) -> (31.3)
- Cable Tiers (1.21.1-0.1.0) -> (1.21.1-0.1.1)
- Crash Assistant (1.7.2) -> (1.7.4)
- EnderDrives (1.3.2) -> (1.2.4)
- Fireproof Boats (1.21.0-1.0.3) -> (1.21.1-1.0.4)
- Iceberg (1.3.1) -> (1.3.2)
- Iron's Gems 'n Jewelry (1.21.1-1.0.11) -> (1.21.1-1.1.0)
- JamLib (1.3.2+1.21.1) -> (1.3.5+1.21.1)
- NeoForge (21.1.146) -> (21.1.148)
- QuarryPlus (21.1.119) -> (21.1.124)
- Showcase Item (1.21-1.0.1) -> (1.21.1-1.1.0)
- Simple Backups (1.21-4.0.9) -> (1.21-4.0.10)
- Sophisticated Backpacks (3.24.5) -> (3.24.7)
- Sophisticated Core (1.3.24) -> (1.3.25)
- Sophisticated Storage (1.4.17) -> (1.4.19)
- Supplementaries (1.21-3.1.5) -> (1.21-3.1.6)

</details>

## 🍳 Recipes

<details>
<summary>Added (23)</summary>
<blockquote>

<details>
<summary>almostunified/universalgrid</summary>

```diff
+{
+  type: "almostunified:client_recipe_tracker"
+  namespace: "universalgrid"
+  recipes: [
+    "1$wireless_universal_grid"
+  ]
+}

```


</details>

<details>
<summary>fireproofboats/crimson_boat</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  group: "boat"
+  key: {
+    #: {
+      item: "minecraft:crimson_planks"
+    }
+  }
+  pattern: [
+    "# #"
+    "###"
+  ]
+  result: {
+    id: "fireproofboats:crimson_boat"
+  }
+}

```


</details>

<details>
<summary>fireproofboats/crimson_chest_boat</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "chest_boat"
+  ingredients: [
+    {
+      tag: "c:chests/wooden"
+    }
+    {
+      item: "fireproofboats:crimson_boat"
+    }
+  ]
+  result: {
+    id: "fireproofboats:crimson_chest_boat"
+  }
+}

```


</details>

<details>
<summary>fireproofboats/warped_boat</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  group: "boat"
+  key: {
+    #: {
+      item: "minecraft:warped_planks"
+    }
+  }
+  pattern: [
+    "# #"
+    "###"
+  ]
+  result: {
+    id: "fireproofboats:warped_boat"
+  }
+}

```


</details>

<details>
<summary>fireproofboats/warped_chest_boat</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  group: "chest_boat"
+  ingredients: [
+    {
+      tag: "c:chests/wooden"
+    }
+    {
+      item: "fireproofboats:warped_boat"
+    }
+  ]
+  result: {
+    id: "fireproofboats:warped_chest_boat"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/black_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/black"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/blue_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/blue"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/brown_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/brown"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/cyan_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/cyan"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/gray_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/gray"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/green_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/green"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/light_blue_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/light_blue"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/light_gray_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/light_gray"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/lime_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/lime"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/magenta_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/magenta"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/orange_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/orange"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/pink_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/pink"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/purple_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/purple"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/red_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/red"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/white_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/white"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/coloring/yellow_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters"
+    }
+    {
+      tag: "c:dyes/yellow"
+    }
+  ]
+  result: {
+    count: 1
+    id: "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>interdimensionalwirelesstransmitter/interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "WNW"
+    "NEN"
+    "WNW"
+  ]
+  key: {
+    W: {
+      item: "refinedstorage:wireless_transmitter"
+    }
+    N: {
+      item: "minecraft:nether_star"
+    }
+    E: {
+      item: "minecraft:elytra"
+    }
+  }
+  result: {
+    id: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  }
+}

```


</details>

<details>
<summary>universalgrid/wireless_universal_grid</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  pattern: [
+    "DFD"
+    "QGQ"
+    "DCD"
+  ]
+  key: {
+    F: {
+      item: "refinedstorage:wireless_autocrafting_monitor"
+    }
+    G: {
+      item: "refinedstorage:wireless_grid"
+    }
+    C: {
+      item: "refinedstorage_quartz_arsenal:wireless_crafting_grid"
+    }
+    D: {
+      tag: "c:gems/diamond"
+    }
+    Q: {
+      item: "refinedstorage:quartz_enriched_iron"
+    }
+  }
+  result: {
+    id: "universalgrid:wireless_universal_grid"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (66)</summary>
<blockquote>

<details>
<summary>almostunified/enderdrives</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "enderdrives"
   recipes: [
     "1$ender_disk_16k_vanilla"
     "1$ender_disk_1k_vanilla"
     "1$ender_disk_256k_vanilla"
     "1$ender_disk_4k_vanilla"
     "1$ender_disk_64k_vanilla"
-    "1$tape_disk"
   ]
 }

```


</details>

<details>
<summary>cabletiers/coloring/black_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/black"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:black_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/black_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/black"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:black_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/black_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/black"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:black_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/black_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/black"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:black_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/blue_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:blue_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/blue_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:blue_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/blue_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:blue_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/blue_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:blue_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/brown_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/brown"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:brown_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/brown_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/brown"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:brown_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/brown_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/brown"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:brown_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/brown_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/brown"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:brown_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/cyan_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/cyan"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:cyan_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/cyan_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/cyan"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:cyan_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/cyan_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/cyan"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:cyan_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/cyan_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/cyan"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:cyan_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/gray_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/gray_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/gray_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/gray_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/green_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/green"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:green_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/green_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/green"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:green_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/green_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/green"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:green_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/green_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/green"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:green_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_blue_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/light_blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_blue_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_blue_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/light_blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_blue_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_blue_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/light_blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_blue_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_blue_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/light_blue"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_blue_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_gray_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/light_gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_gray_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_gray_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/light_gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_gray_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_gray_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/light_gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_gray_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/light_gray_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/light_gray"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:light_gray_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/lime_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/lime"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:lime_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/lime_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/lime"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:lime_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/lime_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/lime"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:lime_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/lime_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/lime"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:lime_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/magenta_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/magenta"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:magenta_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/magenta_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/magenta"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:magenta_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/magenta_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/magenta"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:magenta_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/magenta_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/magenta"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:magenta_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/orange_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/orange"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:orange_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/orange_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/orange"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:orange_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/orange_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/orange"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:orange_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/orange_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/orange"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:orange_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/pink_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/pink"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:pink_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/pink_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/pink"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:pink_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/pink_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/pink"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:pink_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/pink_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/pink"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:pink_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/purple_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/purple"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:purple_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/purple_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/purple"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:purple_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/purple_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/purple"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:purple_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/purple_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/purple"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:purple_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/red_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:red_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/red_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:red_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/red_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:red_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/red_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:red_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/white_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/white"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:white_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/white_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/white"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:white_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/white_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/white"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:white_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/white_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/white"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:white_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/yellow_creative_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:creative_constructors"
+      tag: "cabletiers:creative_disk_interfaces"
     }
     {
       tag: "c:dyes/yellow"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:yellow_creative_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/yellow_elite_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:elite_constructors"
+      tag: "cabletiers:elite_disk_interfaces"
     }
     {
       tag: "c:dyes/yellow"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:yellow_elite_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/yellow_mega_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:mega_constructors"
+      tag: "cabletiers:mega_disk_interfaces"
     }
     {
       tag: "c:dyes/yellow"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:yellow_mega_disk_interface"
   }
 }

```


</details>

<details>
<summary>cabletiers/coloring/yellow_ultra_disk_interface</summary>

```diff
 {
   type: "minecraft:crafting_shapeless"
   category: "misc"
   ingredients: [
     {
-      tag: "cabletiers:ultra_constructors"
+      tag: "cabletiers:ultra_disk_interfaces"
     }
     {
       tag: "c:dyes/yellow"
     }
   ]
   result: {
     count: 1
     id: "cabletiers:yellow_ultra_disk_interface"
   }
 }

```


</details>

<details>
<summary>quarryplus/repeat_tick_module</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   category: "misc"
   key: {
     a: {
       tag: "c:gems/amethyst"
     }
     m: {
       tag: "quarryplus:markers"
     }
     p: {
       item: "minecraft:prismarine_shard"
     }
     w: {
-      item: "minecraft:lingering_potion"
+      item: "minecraft:dragon_breath"
     }
   }
   pattern: [
     "apa"
     "pwp"
     "apm"
   ]
   result: {
     count: 1
     id: "quarryplus:repeat_tick_module"
   }
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (13)</summary>
<blockquote>

<details>
<summary>enderdrives/tape_disk</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  pattern: [
-    "GSG"
-    "SCS"
-    "NPN"
-  ]
-  key: {
-    G: {
-      item: "ae2:quartz_glass"
-    }
-    S: {
-      item: "ae2:sky_dust"
-    }
-    C: {
-      item: "ae2:cell_component_256k"
-    }
-    N: {
-      tag: "c:ingots/netherite"
-    }
-    P: {
-      item: "ae2:light_blue_paint_ball"
-    }
-  }
-  result: {
-    id: "enderdrives:tape_disk"
-    count: 1
-  }
-}

```


</details>

<details>
<summary>extradisks/blocks/infinite_chemical_storage_block</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mekanism"
-    }
-    {
-      type: "neoforge:mod_loaded"
-      modid: "refinedstorage_mekanism_integration"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    C: {
-      item: "extradisks:advanced_machine_casing"
-    }
-    O: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      tag: "refinedstorage:parts/chemical/infinite"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "OPO"
-    "OCO"
-    "ORO"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_chemical_storage_block"
-  }
-}

```


</details>

<details>
<summary>extradisks/blocks/infinite_fluid_storage_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    C: {
-      item: "extradisks:advanced_machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/infinite"
-    }
-    Q: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "QPQ"
-    "QCQ"
-    "QRQ"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_fluid_storage_block"
-  }
-}

```


</details>

<details>
<summary>extradisks/blocks/infinite_item_storage_block</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    C: {
-      item: "extradisks:advanced_machine_casing"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/infinite"
-    }
-    Q: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "QPQ"
-    "QCQ"
-    "QRQ"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_item_storage_block"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shaped/infinite_chemical_storage_disk</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mekanism"
-    }
-    {
-      type: "neoforge:mod_loaded"
-      modid: "refinedstorage_mekanism_integration"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    G: {
-      tag: "c:glass_blocks"
-    }
-    O: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      tag: "refinedstorage:parts/chemical/infinite"
-    }
-    R: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-  }
-  pattern: [
-    "GRG"
-    "RPR"
-    "OOO"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_chemical_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shaped/infinite_fluid_storage_disk</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    A: {
-      item: "refinedstorage:advanced_processor"
-    }
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:improved_processor"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/infinite"
-    }
-  }
-  pattern: [
-    "GEG"
-    "EPE"
-    "IAI"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_fluid_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shaped/infinite_item_storage_disk</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    A: {
-      item: "refinedstorage:advanced_processor"
-    }
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    G: {
-      tag: "c:glass_blocks"
-    }
-    I: {
-      item: "refinedstorage:improved_processor"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/infinite"
-    }
-  }
-  pattern: [
-    "GEG"
-    "EPE"
-    "IAI"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_item_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shapeless/infinite_chemical_storage_disk</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mekanism"
-    }
-    {
-      type: "neoforge:mod_loaded"
-      modid: "refinedstorage_mekanism_integration"
-    }
-  ]
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "extradisks:advanced_storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/chemical/infinite"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_chemical_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shapeless/infinite_fluid_storage_disk</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "extradisks:advanced_storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/fluids/infinite"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_fluid_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/disk/shapeless/infinite_item_storage_disk</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      item: "extradisks:advanced_storage_housing"
-    }
-    {
-      tag: "refinedstorage:parts/items/infinite"
-    }
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_item_storage_disk"
-  }
-}

```


</details>

<details>
<summary>extradisks/part/infinite_chemical_storage_part</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mekanism"
-    }
-    {
-      type: "neoforge:mod_loaded"
-      modid: "refinedstorage_mekanism_integration"
-    }
-  ]
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    A: {
-      item: "mekanism:alloy_atomic"
-    }
-    D: {
-      item: "extradisks:withering_processor"
-    }
-    O: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      tag: "refinedstorage:parts/chemical/8388608b"
-    }
-  }
-  pattern: [
-    "DOD"
-    "PAP"
-    "DPD"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_chemical_storage_part"
-  }
-}

```


</details>

<details>
<summary>extradisks/part/infinite_fluid_storage_part</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "extradisks:withering_processor"
-    }
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    P: {
-      tag: "refinedstorage:parts/fluids/1048576b"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DED"
-    "PRP"
-    "DPD"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_fluid_storage_part"
-  }
-}

```


</details>

<details>
<summary>extradisks/part/infinite_item_storage_part</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "misc"
-  key: {
-    D: {
-      item: "extradisks:withering_processor"
-    }
-    E: {
-      item: "refinedstorage:quartz_enriched_iron"
-    }
-    P: {
-      tag: "refinedstorage:parts/items/1048576k"
-    }
-    R: {
-      tag: "c:dusts/redstone"
-    }
-  }
-  pattern: [
-    "DED"
-    "PRP"
-    "DPD"
-  ]
-  result: {
-    count: 1
-    id: "extradisks:infinite_item_storage_part"
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
<summary>minecraft:block/cabletiers:creative_constructors</summary>

```diff
+[
+  "cabletiers:black_creative_constructor"
+  "cabletiers:blue_creative_constructor"
+  "cabletiers:brown_creative_constructor"
+  "cabletiers:creative_constructor"
+  "cabletiers:cyan_creative_constructor"
+  "cabletiers:green_creative_constructor"
+  "cabletiers:light_blue_creative_constructor"
+  "cabletiers:light_gray_creative_constructor"
+  "cabletiers:lime_creative_constructor"
+  "cabletiers:magenta_creative_constructor"
+  "cabletiers:orange_creative_constructor"
+  "cabletiers:pink_creative_constructor"
+  "cabletiers:purple_creative_constructor"
+  "cabletiers:red_creative_constructor"
+  "cabletiers:white_creative_constructor"
+  "cabletiers:yellow_creative_constructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:creative_destructors</summary>

```diff
+[
+  "cabletiers:black_creative_destructor"
+  "cabletiers:blue_creative_destructor"
+  "cabletiers:brown_creative_destructor"
+  "cabletiers:creative_destructor"
+  "cabletiers:cyan_creative_destructor"
+  "cabletiers:green_creative_destructor"
+  "cabletiers:light_blue_creative_destructor"
+  "cabletiers:light_gray_creative_destructor"
+  "cabletiers:lime_creative_destructor"
+  "cabletiers:magenta_creative_destructor"
+  "cabletiers:orange_creative_destructor"
+  "cabletiers:pink_creative_destructor"
+  "cabletiers:purple_creative_destructor"
+  "cabletiers:red_creative_destructor"
+  "cabletiers:white_creative_destructor"
+  "cabletiers:yellow_creative_destructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:creative_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_creative_disk_interface"
+  "cabletiers:blue_creative_disk_interface"
+  "cabletiers:brown_creative_disk_interface"
+  "cabletiers:creative_disk_interface"
+  "cabletiers:cyan_creative_disk_interface"
+  "cabletiers:green_creative_disk_interface"
+  "cabletiers:light_blue_creative_disk_interface"
+  "cabletiers:light_gray_creative_disk_interface"
+  "cabletiers:lime_creative_disk_interface"
+  "cabletiers:magenta_creative_disk_interface"
+  "cabletiers:orange_creative_disk_interface"
+  "cabletiers:pink_creative_disk_interface"
+  "cabletiers:purple_creative_disk_interface"
+  "cabletiers:red_creative_disk_interface"
+  "cabletiers:white_creative_disk_interface"
+  "cabletiers:yellow_creative_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:creative_exporters</summary>

```diff
+[
+  "cabletiers:black_creative_exporter"
+  "cabletiers:blue_creative_exporter"
+  "cabletiers:brown_creative_exporter"
+  "cabletiers:creative_exporter"
+  "cabletiers:cyan_creative_exporter"
+  "cabletiers:green_creative_exporter"
+  "cabletiers:light_blue_creative_exporter"
+  "cabletiers:light_gray_creative_exporter"
+  "cabletiers:lime_creative_exporter"
+  "cabletiers:magenta_creative_exporter"
+  "cabletiers:orange_creative_exporter"
+  "cabletiers:pink_creative_exporter"
+  "cabletiers:purple_creative_exporter"
+  "cabletiers:red_creative_exporter"
+  "cabletiers:white_creative_exporter"
+  "cabletiers:yellow_creative_exporter"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:creative_importers</summary>

```diff
+[
+  "cabletiers:black_creative_importer"
+  "cabletiers:blue_creative_importer"
+  "cabletiers:brown_creative_importer"
+  "cabletiers:creative_importer"
+  "cabletiers:cyan_creative_importer"
+  "cabletiers:green_creative_importer"
+  "cabletiers:light_blue_creative_importer"
+  "cabletiers:light_gray_creative_importer"
+  "cabletiers:lime_creative_importer"
+  "cabletiers:magenta_creative_importer"
+  "cabletiers:orange_creative_importer"
+  "cabletiers:pink_creative_importer"
+  "cabletiers:purple_creative_importer"
+  "cabletiers:red_creative_importer"
+  "cabletiers:white_creative_importer"
+  "cabletiers:yellow_creative_importer"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:elite_constructors</summary>

```diff
+[
+  "cabletiers:black_elite_constructor"
+  "cabletiers:blue_elite_constructor"
+  "cabletiers:brown_elite_constructor"
+  "cabletiers:cyan_elite_constructor"
+  "cabletiers:elite_constructor"
+  "cabletiers:green_elite_constructor"
+  "cabletiers:light_blue_elite_constructor"
+  "cabletiers:light_gray_elite_constructor"
+  "cabletiers:lime_elite_constructor"
+  "cabletiers:magenta_elite_constructor"
+  "cabletiers:orange_elite_constructor"
+  "cabletiers:pink_elite_constructor"
+  "cabletiers:purple_elite_constructor"
+  "cabletiers:red_elite_constructor"
+  "cabletiers:white_elite_constructor"
+  "cabletiers:yellow_elite_constructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:elite_destructors</summary>

```diff
+[
+  "cabletiers:black_elite_destructor"
+  "cabletiers:blue_elite_destructor"
+  "cabletiers:brown_elite_destructor"
+  "cabletiers:cyan_elite_destructor"
+  "cabletiers:elite_destructor"
+  "cabletiers:green_elite_destructor"
+  "cabletiers:light_blue_elite_destructor"
+  "cabletiers:light_gray_elite_destructor"
+  "cabletiers:lime_elite_destructor"
+  "cabletiers:magenta_elite_destructor"
+  "cabletiers:orange_elite_destructor"
+  "cabletiers:pink_elite_destructor"
+  "cabletiers:purple_elite_destructor"
+  "cabletiers:red_elite_destructor"
+  "cabletiers:white_elite_destructor"
+  "cabletiers:yellow_elite_destructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:elite_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_elite_disk_interface"
+  "cabletiers:blue_elite_disk_interface"
+  "cabletiers:brown_elite_disk_interface"
+  "cabletiers:cyan_elite_disk_interface"
+  "cabletiers:elite_disk_interface"
+  "cabletiers:green_elite_disk_interface"
+  "cabletiers:light_blue_elite_disk_interface"
+  "cabletiers:light_gray_elite_disk_interface"
+  "cabletiers:lime_elite_disk_interface"
+  "cabletiers:magenta_elite_disk_interface"
+  "cabletiers:orange_elite_disk_interface"
+  "cabletiers:pink_elite_disk_interface"
+  "cabletiers:purple_elite_disk_interface"
+  "cabletiers:red_elite_disk_interface"
+  "cabletiers:white_elite_disk_interface"
+  "cabletiers:yellow_elite_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:elite_exporters</summary>

```diff
+[
+  "cabletiers:black_elite_exporter"
+  "cabletiers:blue_elite_exporter"
+  "cabletiers:brown_elite_exporter"
+  "cabletiers:cyan_elite_exporter"
+  "cabletiers:elite_exporter"
+  "cabletiers:green_elite_exporter"
+  "cabletiers:light_blue_elite_exporter"
+  "cabletiers:light_gray_elite_exporter"
+  "cabletiers:lime_elite_exporter"
+  "cabletiers:magenta_elite_exporter"
+  "cabletiers:orange_elite_exporter"
+  "cabletiers:pink_elite_exporter"
+  "cabletiers:purple_elite_exporter"
+  "cabletiers:red_elite_exporter"
+  "cabletiers:white_elite_exporter"
+  "cabletiers:yellow_elite_exporter"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:elite_importers</summary>

```diff
+[
+  "cabletiers:black_elite_importer"
+  "cabletiers:blue_elite_importer"
+  "cabletiers:brown_elite_importer"
+  "cabletiers:cyan_elite_importer"
+  "cabletiers:elite_importer"
+  "cabletiers:green_elite_importer"
+  "cabletiers:light_blue_elite_importer"
+  "cabletiers:light_gray_elite_importer"
+  "cabletiers:lime_elite_importer"
+  "cabletiers:magenta_elite_importer"
+  "cabletiers:orange_elite_importer"
+  "cabletiers:pink_elite_importer"
+  "cabletiers:purple_elite_importer"
+  "cabletiers:red_elite_importer"
+  "cabletiers:white_elite_importer"
+  "cabletiers:yellow_elite_importer"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:mega_constructors</summary>

```diff
+[
+  "cabletiers:black_mega_constructor"
+  "cabletiers:blue_mega_constructor"
+  "cabletiers:brown_mega_constructor"
+  "cabletiers:cyan_mega_constructor"
+  "cabletiers:green_mega_constructor"
+  "cabletiers:light_blue_mega_constructor"
+  "cabletiers:light_gray_mega_constructor"
+  "cabletiers:lime_mega_constructor"
+  "cabletiers:magenta_mega_constructor"
+  "cabletiers:mega_constructor"
+  "cabletiers:orange_mega_constructor"
+  "cabletiers:pink_mega_constructor"
+  "cabletiers:purple_mega_constructor"
+  "cabletiers:red_mega_constructor"
+  "cabletiers:white_mega_constructor"
+  "cabletiers:yellow_mega_constructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:mega_destructors</summary>

```diff
+[
+  "cabletiers:black_mega_destructor"
+  "cabletiers:blue_mega_destructor"
+  "cabletiers:brown_mega_destructor"
+  "cabletiers:cyan_mega_destructor"
+  "cabletiers:green_mega_destructor"
+  "cabletiers:light_blue_mega_destructor"
+  "cabletiers:light_gray_mega_destructor"
+  "cabletiers:lime_mega_destructor"
+  "cabletiers:magenta_mega_destructor"
+  "cabletiers:mega_destructor"
+  "cabletiers:orange_mega_destructor"
+  "cabletiers:pink_mega_destructor"
+  "cabletiers:purple_mega_destructor"
+  "cabletiers:red_mega_destructor"
+  "cabletiers:white_mega_destructor"
+  "cabletiers:yellow_mega_destructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:mega_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_mega_disk_interface"
+  "cabletiers:blue_mega_disk_interface"
+  "cabletiers:brown_mega_disk_interface"
+  "cabletiers:cyan_mega_disk_interface"
+  "cabletiers:green_mega_disk_interface"
+  "cabletiers:light_blue_mega_disk_interface"
+  "cabletiers:light_gray_mega_disk_interface"
+  "cabletiers:lime_mega_disk_interface"
+  "cabletiers:magenta_mega_disk_interface"
+  "cabletiers:mega_disk_interface"
+  "cabletiers:orange_mega_disk_interface"
+  "cabletiers:pink_mega_disk_interface"
+  "cabletiers:purple_mega_disk_interface"
+  "cabletiers:red_mega_disk_interface"
+  "cabletiers:white_mega_disk_interface"
+  "cabletiers:yellow_mega_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:mega_exporters</summary>

```diff
+[
+  "cabletiers:black_mega_exporter"
+  "cabletiers:blue_mega_exporter"
+  "cabletiers:brown_mega_exporter"
+  "cabletiers:cyan_mega_exporter"
+  "cabletiers:green_mega_exporter"
+  "cabletiers:light_blue_mega_exporter"
+  "cabletiers:light_gray_mega_exporter"
+  "cabletiers:lime_mega_exporter"
+  "cabletiers:magenta_mega_exporter"
+  "cabletiers:mega_exporter"
+  "cabletiers:orange_mega_exporter"
+  "cabletiers:pink_mega_exporter"
+  "cabletiers:purple_mega_exporter"
+  "cabletiers:red_mega_exporter"
+  "cabletiers:white_mega_exporter"
+  "cabletiers:yellow_mega_exporter"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:mega_importers</summary>

```diff
+[
+  "cabletiers:black_mega_importer"
+  "cabletiers:blue_mega_importer"
+  "cabletiers:brown_mega_importer"
+  "cabletiers:cyan_mega_importer"
+  "cabletiers:green_mega_importer"
+  "cabletiers:light_blue_mega_importer"
+  "cabletiers:light_gray_mega_importer"
+  "cabletiers:lime_mega_importer"
+  "cabletiers:magenta_mega_importer"
+  "cabletiers:mega_importer"
+  "cabletiers:orange_mega_importer"
+  "cabletiers:pink_mega_importer"
+  "cabletiers:purple_mega_importer"
+  "cabletiers:red_mega_importer"
+  "cabletiers:white_mega_importer"
+  "cabletiers:yellow_mega_importer"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:ultra_constructors</summary>

```diff
+[
+  "cabletiers:black_ultra_constructor"
+  "cabletiers:blue_ultra_constructor"
+  "cabletiers:brown_ultra_constructor"
+  "cabletiers:cyan_ultra_constructor"
+  "cabletiers:green_ultra_constructor"
+  "cabletiers:light_blue_ultra_constructor"
+  "cabletiers:light_gray_ultra_constructor"
+  "cabletiers:lime_ultra_constructor"
+  "cabletiers:magenta_ultra_constructor"
+  "cabletiers:orange_ultra_constructor"
+  "cabletiers:pink_ultra_constructor"
+  "cabletiers:purple_ultra_constructor"
+  "cabletiers:red_ultra_constructor"
+  "cabletiers:ultra_constructor"
+  "cabletiers:white_ultra_constructor"
+  "cabletiers:yellow_ultra_constructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:ultra_destructors</summary>

```diff
+[
+  "cabletiers:black_ultra_destructor"
+  "cabletiers:blue_ultra_destructor"
+  "cabletiers:brown_ultra_destructor"
+  "cabletiers:cyan_ultra_destructor"
+  "cabletiers:green_ultra_destructor"
+  "cabletiers:light_blue_ultra_destructor"
+  "cabletiers:light_gray_ultra_destructor"
+  "cabletiers:lime_ultra_destructor"
+  "cabletiers:magenta_ultra_destructor"
+  "cabletiers:orange_ultra_destructor"
+  "cabletiers:pink_ultra_destructor"
+  "cabletiers:purple_ultra_destructor"
+  "cabletiers:red_ultra_destructor"
+  "cabletiers:ultra_destructor"
+  "cabletiers:white_ultra_destructor"
+  "cabletiers:yellow_ultra_destructor"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:ultra_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_ultra_disk_interface"
+  "cabletiers:blue_ultra_disk_interface"
+  "cabletiers:brown_ultra_disk_interface"
+  "cabletiers:cyan_ultra_disk_interface"
+  "cabletiers:green_ultra_disk_interface"
+  "cabletiers:light_blue_ultra_disk_interface"
+  "cabletiers:light_gray_ultra_disk_interface"
+  "cabletiers:lime_ultra_disk_interface"
+  "cabletiers:magenta_ultra_disk_interface"
+  "cabletiers:orange_ultra_disk_interface"
+  "cabletiers:pink_ultra_disk_interface"
+  "cabletiers:purple_ultra_disk_interface"
+  "cabletiers:red_ultra_disk_interface"
+  "cabletiers:ultra_disk_interface"
+  "cabletiers:white_ultra_disk_interface"
+  "cabletiers:yellow_ultra_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:ultra_exporters</summary>

```diff
+[
+  "cabletiers:black_ultra_exporter"
+  "cabletiers:blue_ultra_exporter"
+  "cabletiers:brown_ultra_exporter"
+  "cabletiers:cyan_ultra_exporter"
+  "cabletiers:green_ultra_exporter"
+  "cabletiers:light_blue_ultra_exporter"
+  "cabletiers:light_gray_ultra_exporter"
+  "cabletiers:lime_ultra_exporter"
+  "cabletiers:magenta_ultra_exporter"
+  "cabletiers:orange_ultra_exporter"
+  "cabletiers:pink_ultra_exporter"
+  "cabletiers:purple_ultra_exporter"
+  "cabletiers:red_ultra_exporter"
+  "cabletiers:ultra_exporter"
+  "cabletiers:white_ultra_exporter"
+  "cabletiers:yellow_ultra_exporter"
+]

```


</details>

<details>
<summary>minecraft:block/cabletiers:ultra_importers</summary>

```diff
+[
+  "cabletiers:black_ultra_importer"
+  "cabletiers:blue_ultra_importer"
+  "cabletiers:brown_ultra_importer"
+  "cabletiers:cyan_ultra_importer"
+  "cabletiers:green_ultra_importer"
+  "cabletiers:light_blue_ultra_importer"
+  "cabletiers:light_gray_ultra_importer"
+  "cabletiers:lime_ultra_importer"
+  "cabletiers:magenta_ultra_importer"
+  "cabletiers:orange_ultra_importer"
+  "cabletiers:pink_ultra_importer"
+  "cabletiers:purple_ultra_importer"
+  "cabletiers:red_ultra_importer"
+  "cabletiers:ultra_importer"
+  "cabletiers:white_ultra_importer"
+  "cabletiers:yellow_ultra_importer"
+]

```


</details>

<details>
<summary>minecraft:item/cabletiers:creative_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_creative_disk_interface"
+  "cabletiers:blue_creative_disk_interface"
+  "cabletiers:brown_creative_disk_interface"
+  "cabletiers:creative_disk_interface"
+  "cabletiers:cyan_creative_disk_interface"
+  "cabletiers:green_creative_disk_interface"
+  "cabletiers:light_blue_creative_disk_interface"
+  "cabletiers:light_gray_creative_disk_interface"
+  "cabletiers:lime_creative_disk_interface"
+  "cabletiers:magenta_creative_disk_interface"
+  "cabletiers:orange_creative_disk_interface"
+  "cabletiers:pink_creative_disk_interface"
+  "cabletiers:purple_creative_disk_interface"
+  "cabletiers:red_creative_disk_interface"
+  "cabletiers:white_creative_disk_interface"
+  "cabletiers:yellow_creative_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:item/cabletiers:elite_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_elite_disk_interface"
+  "cabletiers:blue_elite_disk_interface"
+  "cabletiers:brown_elite_disk_interface"
+  "cabletiers:cyan_elite_disk_interface"
+  "cabletiers:elite_disk_interface"
+  "cabletiers:green_elite_disk_interface"
+  "cabletiers:light_blue_elite_disk_interface"
+  "cabletiers:light_gray_elite_disk_interface"
+  "cabletiers:lime_elite_disk_interface"
+  "cabletiers:magenta_elite_disk_interface"
+  "cabletiers:orange_elite_disk_interface"
+  "cabletiers:pink_elite_disk_interface"
+  "cabletiers:purple_elite_disk_interface"
+  "cabletiers:red_elite_disk_interface"
+  "cabletiers:white_elite_disk_interface"
+  "cabletiers:yellow_elite_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:item/cabletiers:mega_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_mega_disk_interface"
+  "cabletiers:blue_mega_disk_interface"
+  "cabletiers:brown_mega_disk_interface"
+  "cabletiers:cyan_mega_disk_interface"
+  "cabletiers:green_mega_disk_interface"
+  "cabletiers:light_blue_mega_disk_interface"
+  "cabletiers:light_gray_mega_disk_interface"
+  "cabletiers:lime_mega_disk_interface"
+  "cabletiers:magenta_mega_disk_interface"
+  "cabletiers:mega_disk_interface"
+  "cabletiers:orange_mega_disk_interface"
+  "cabletiers:pink_mega_disk_interface"
+  "cabletiers:purple_mega_disk_interface"
+  "cabletiers:red_mega_disk_interface"
+  "cabletiers:white_mega_disk_interface"
+  "cabletiers:yellow_mega_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:item/cabletiers:ultra_disk_interfaces</summary>

```diff
+[
+  "cabletiers:black_ultra_disk_interface"
+  "cabletiers:blue_ultra_disk_interface"
+  "cabletiers:brown_ultra_disk_interface"
+  "cabletiers:cyan_ultra_disk_interface"
+  "cabletiers:green_ultra_disk_interface"
+  "cabletiers:light_blue_ultra_disk_interface"
+  "cabletiers:light_gray_ultra_disk_interface"
+  "cabletiers:lime_ultra_disk_interface"
+  "cabletiers:magenta_ultra_disk_interface"
+  "cabletiers:orange_ultra_disk_interface"
+  "cabletiers:pink_ultra_disk_interface"
+  "cabletiers:purple_ultra_disk_interface"
+  "cabletiers:red_ultra_disk_interface"
+  "cabletiers:ultra_disk_interface"
+  "cabletiers:white_ultra_disk_interface"
+  "cabletiers:yellow_ultra_disk_interface"
+]

```


</details>

<details>
<summary>minecraft:item/interdimensionalwirelesstransmitter:interdimensional_wireless_transmitters</summary>

```diff
+[
+  "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (8)</summary>
<blockquote>

<details>
<summary>irons_jewelry:pattern/irons_jewelry:trader_sellable</summary>

```diff
 [
   ... (3 entries)
+  "irons_jewelry:haggler_ring"
 ]

```


</details>

<details>
<summary>irons_jewelry:pattern/irons_jewelry:wandering_trader_sellable_patterns</summary>

```diff
 [
   ... (2 entries)
+  "irons_jewelry:haggler_ring"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (81 entries)
+  "#cabletiers:creative_constructors"
+  "#cabletiers:creative_destructors"
+  "#cabletiers:creative_disk_interfaces"
+  "#cabletiers:creative_exporters"
+  "#cabletiers:creative_importers"
+  "#cabletiers:elite_constructors"
+  "#cabletiers:elite_destructors"
+  "#cabletiers:elite_disk_interfaces"
+  "#cabletiers:elite_exporters"
+  "#cabletiers:elite_importers"
+  "#cabletiers:mega_constructors"
+  "#cabletiers:mega_destructors"
+  "#cabletiers:mega_disk_interfaces"
+  "#cabletiers:mega_exporters"
+  "#cabletiers:mega_importers"
+  "#cabletiers:ultra_constructors"
+  "#cabletiers:ultra_destructors"
+  "#cabletiers:ultra_disk_interfaces"
+  "#cabletiers:ultra_exporters"
+  "#cabletiers:ultra_importers"
   ... (2078 entries)
-  "cabletiers:black_creative_constructor"
-  "cabletiers:black_creative_destructor"
-  "cabletiers:black_creative_disk_interface"
-  "cabletiers:black_creative_exporter"
-  "cabletiers:black_creative_importer"
-  "cabletiers:black_elite_constructor"
-  "cabletiers:black_elite_destructor"
-  "cabletiers:black_elite_disk_interface"
-  "cabletiers:black_elite_exporter"
-  "cabletiers:black_elite_importer"
-  "cabletiers:black_mega_constructor"
-  "cabletiers:black_mega_destructor"
-  "cabletiers:black_mega_disk_interface"
-  "cabletiers:black_mega_exporter"
-  "cabletiers:black_mega_importer"
-  "cabletiers:black_ultra_constructor"
-  "cabletiers:black_ultra_destructor"
-  "cabletiers:black_ultra_disk_interface"
-  "cabletiers:black_ultra_exporter"
-  "cabletiers:black_ultra_importer"
-  "cabletiers:blue_creative_constructor"
-  "cabletiers:blue_creative_destructor"
-  "cabletiers:blue_creative_disk_interface"
-  "cabletiers:blue_creative_exporter"
-  "cabletiers:blue_creative_importer"
-  "cabletiers:blue_elite_constructor"
-  "cabletiers:blue_elite_destructor"
-  "cabletiers:blue_elite_disk_interface"
-  "cabletiers:blue_elite_exporter"
-  "cabletiers:blue_elite_importer"
-  "cabletiers:blue_mega_constructor"
-  "cabletiers:blue_mega_destructor"
-  "cabletiers:blue_mega_disk_interface"
-  "cabletiers:blue_mega_exporter"
-  "cabletiers:blue_mega_importer"
-  "cabletiers:blue_ultra_constructor"
-  "cabletiers:blue_ultra_destructor"
-  "cabletiers:blue_ultra_disk_interface"
-  "cabletiers:blue_ultra_exporter"
-  "cabletiers:blue_ultra_importer"
-  "cabletiers:brown_creative_constructor"
-  "cabletiers:brown_creative_destructor"
-  "cabletiers:brown_creative_disk_interface"
-  "cabletiers:brown_creative_exporter"
-  "cabletiers:brown_creative_importer"
-  "cabletiers:brown_elite_constructor"
-  "cabletiers:brown_elite_destructor"
-  "cabletiers:brown_elite_disk_interface"
-  "cabletiers:brown_elite_exporter"
-  "cabletiers:brown_elite_importer"
-  "cabletiers:brown_mega_constructor"
-  "cabletiers:brown_mega_destructor"
-  "cabletiers:brown_mega_disk_interface"
-  "cabletiers:brown_mega_exporter"
-  "cabletiers:brown_mega_importer"
-  "cabletiers:brown_ultra_constructor"
-  "cabletiers:brown_ultra_destructor"
-  "cabletiers:brown_ultra_disk_interface"
-  "cabletiers:brown_ultra_exporter"
-  "cabletiers:brown_ultra_importer"
-  "cabletiers:creative_constructor"
-  "cabletiers:creative_destructor"
-  "cabletiers:creative_disk_interface"
-  "cabletiers:creative_exporter"
-  "cabletiers:creative_importer"
-  "cabletiers:cyan_creative_constructor"
-  "cabletiers:cyan_creative_destructor"
-  "cabletiers:cyan_creative_disk_interface"
-  "cabletiers:cyan_creative_exporter"
-  "cabletiers:cyan_creative_importer"
-  "cabletiers:cyan_elite_constructor"
-  "cabletiers:cyan_elite_destructor"
-  "cabletiers:cyan_elite_disk_interface"
-  "cabletiers:cyan_elite_exporter"
-  "cabletiers:cyan_elite_importer"
-  "cabletiers:cyan_mega_constructor"
-  "cabletiers:cyan_mega_destructor"
-  "cabletiers:cyan_mega_disk_interface"
-  "cabletiers:cyan_mega_exporter"
-  "cabletiers:cyan_mega_importer"
-  "cabletiers:cyan_ultra_constructor"
-  "cabletiers:cyan_ultra_destructor"
-  "cabletiers:cyan_ultra_disk_interface"
-  "cabletiers:cyan_ultra_exporter"
-  "cabletiers:cyan_ultra_importer"
-  "cabletiers:elite_constructor"
-  "cabletiers:elite_destructor"
-  "cabletiers:elite_disk_interface"
-  "cabletiers:elite_exporter"
-  "cabletiers:elite_importer"
-  "cabletiers:green_creative_constructor"
-  "cabletiers:green_creative_destructor"
-  "cabletiers:green_creative_disk_interface"
-  "cabletiers:green_creative_exporter"
-  "cabletiers:green_creative_importer"
-  "cabletiers:green_elite_constructor"
-  "cabletiers:green_elite_destructor"
-  "cabletiers:green_elite_disk_interface"
-  "cabletiers:green_elite_exporter"
-  "cabletiers:green_elite_importer"
-  "cabletiers:green_mega_constructor"
-  "cabletiers:green_mega_destructor"
-  "cabletiers:green_mega_disk_interface"
-  "cabletiers:green_mega_exporter"
-  "cabletiers:green_mega_importer"
-  "cabletiers:green_ultra_constructor"
-  "cabletiers:green_ultra_destructor"
-  "cabletiers:green_ultra_disk_interface"
-  "cabletiers:green_ultra_exporter"
-  "cabletiers:green_ultra_importer"
-  "cabletiers:light_blue_creative_constructor"
-  "cabletiers:light_blue_creative_destructor"
-  "cabletiers:light_blue_creative_disk_interface"
-  "cabletiers:light_blue_creative_exporter"
-  "cabletiers:light_blue_creative_importer"
-  "cabletiers:light_blue_elite_constructor"
-  "cabletiers:light_blue_elite_destructor"
-  "cabletiers:light_blue_elite_disk_interface"
-  "cabletiers:light_blue_elite_exporter"
-  "cabletiers:light_blue_elite_importer"
-  "cabletiers:light_blue_mega_constructor"
-  "cabletiers:light_blue_mega_destructor"
-  "cabletiers:light_blue_mega_disk_interface"
-  "cabletiers:light_blue_mega_exporter"
-  "cabletiers:light_blue_mega_importer"
-  "cabletiers:light_blue_ultra_constructor"
-  "cabletiers:light_blue_ultra_destructor"
-  "cabletiers:light_blue_ultra_disk_interface"
-  "cabletiers:light_blue_ultra_exporter"
-  "cabletiers:light_blue_ultra_importer"
-  "cabletiers:light_gray_creative_constructor"
-  "cabletiers:light_gray_creative_destructor"
-  "cabletiers:light_gray_creative_disk_interface"
-  "cabletiers:light_gray_creative_exporter"
-  "cabletiers:light_gray_creative_importer"
-  "cabletiers:light_gray_elite_constructor"
-  "cabletiers:light_gray_elite_destructor"
-  "cabletiers:light_gray_elite_disk_interface"
-  "cabletiers:light_gray_elite_exporter"
-  "cabletiers:light_gray_elite_importer"
-  "cabletiers:light_gray_mega_constructor"
-  "cabletiers:light_gray_mega_destructor"
-  "cabletiers:light_gray_mega_disk_interface"
-  "cabletiers:light_gray_mega_exporter"
-  "cabletiers:light_gray_mega_importer"
-  "cabletiers:light_gray_ultra_constructor"
-  "cabletiers:light_gray_ultra_destructor"
-  "cabletiers:light_gray_ultra_disk_interface"
-  "cabletiers:light_gray_ultra_exporter"
-  "cabletiers:light_gray_ultra_importer"
-  "cabletiers:lime_creative_constructor"
-  "cabletiers:lime_creative_destructor"
-  "cabletiers:lime_creative_disk_interface"
-  "cabletiers:lime_creative_exporter"
-  "cabletiers:lime_creative_importer"
-  "cabletiers:lime_elite_constructor"
-  "cabletiers:lime_elite_destructor"
-  "cabletiers:lime_elite_disk_interface"
-  "cabletiers:lime_elite_exporter"
-  "cabletiers:lime_elite_importer"
-  "cabletiers:lime_mega_constructor"
-  "cabletiers:lime_mega_destructor"
-  "cabletiers:lime_mega_disk_interface"
-  "cabletiers:lime_mega_exporter"
-  "cabletiers:lime_mega_importer"
-  "cabletiers:lime_ultra_constructor"
-  "cabletiers:lime_ultra_destructor"
-  "cabletiers:lime_ultra_disk_interface"
-  "cabletiers:lime_ultra_exporter"
-  "cabletiers:lime_ultra_importer"
-  "cabletiers:magenta_creative_constructor"
-  "cabletiers:magenta_creative_destructor"
-  "cabletiers:magenta_creative_disk_interface"
-  "cabletiers:magenta_creative_exporter"
-  "cabletiers:magenta_creative_importer"
-  "cabletiers:magenta_elite_constructor"
-  "cabletiers:magenta_elite_destructor"
-  "cabletiers:magenta_elite_disk_interface"
-  "cabletiers:magenta_elite_exporter"
-  "cabletiers:magenta_elite_importer"
-  "cabletiers:magenta_mega_constructor"
-  "cabletiers:magenta_mega_destructor"
-  "cabletiers:magenta_mega_disk_interface"
-  "cabletiers:magenta_mega_exporter"
-  "cabletiers:magenta_mega_importer"
-  "cabletiers:magenta_ultra_constructor"
-  "cabletiers:magenta_ultra_destructor"
-  "cabletiers:magenta_ultra_disk_interface"
-  "cabletiers:magenta_ultra_exporter"
-  "cabletiers:magenta_ultra_importer"
-  "cabletiers:mega_constructor"
-  "cabletiers:mega_destructor"
-  "cabletiers:mega_disk_interface"
-  "cabletiers:mega_exporter"
-  "cabletiers:mega_importer"
-  "cabletiers:orange_creative_constructor"
-  "cabletiers:orange_creative_destructor"
-  "cabletiers:orange_creative_disk_interface"
-  "cabletiers:orange_creative_exporter"
-  "cabletiers:orange_creative_importer"
-  "cabletiers:orange_elite_constructor"
-  "cabletiers:orange_elite_destructor"
-  "cabletiers:orange_elite_disk_interface"
-  "cabletiers:orange_elite_exporter"
-  "cabletiers:orange_elite_importer"
-  "cabletiers:orange_mega_constructor"
-  "cabletiers:orange_mega_destructor"
-  "cabletiers:orange_mega_disk_interface"
-  "cabletiers:orange_mega_exporter"
-  "cabletiers:orange_mega_importer"
-  "cabletiers:orange_ultra_constructor"
-  "cabletiers:orange_ultra_destructor"
-  "cabletiers:orange_ultra_disk_interface"
-  "cabletiers:orange_ultra_exporter"
-  "cabletiers:orange_ultra_importer"
-  "cabletiers:pink_creative_constructor"
-  "cabletiers:pink_creative_destructor"
-  "cabletiers:pink_creative_disk_interface"
-  "cabletiers:pink_creative_exporter"
-  "cabletiers:pink_creative_importer"
-  "cabletiers:pink_elite_constructor"
-  "cabletiers:pink_elite_destructor"
-  "cabletiers:pink_elite_disk_interface"
-  "cabletiers:pink_elite_exporter"
-  "cabletiers:pink_elite_importer"
-  "cabletiers:pink_mega_constructor"
-  "cabletiers:pink_mega_destructor"
-  "cabletiers:pink_mega_disk_interface"
-  "cabletiers:pink_mega_exporter"
-  "cabletiers:pink_mega_importer"
-  "cabletiers:pink_ultra_constructor"
-  "cabletiers:pink_ultra_destructor"
-  "cabletiers:pink_ultra_disk_interface"
-  "cabletiers:pink_ultra_exporter"
-  "cabletiers:pink_ultra_importer"
-  "cabletiers:purple_creative_constructor"
-  "cabletiers:purple_creative_destructor"
-  "cabletiers:purple_creative_disk_interface"
-  "cabletiers:purple_creative_exporter"
-  "cabletiers:purple_creative_importer"
-  "cabletiers:purple_elite_constructor"
-  "cabletiers:purple_elite_destructor"
-  "cabletiers:purple_elite_disk_interface"
-  "cabletiers:purple_elite_exporter"
-  "cabletiers:purple_elite_importer"
-  "cabletiers:purple_mega_constructor"
-  "cabletiers:purple_mega_destructor"
-  "cabletiers:purple_mega_disk_interface"
-  "cabletiers:purple_mega_exporter"
-  "cabletiers:purple_mega_importer"
-  "cabletiers:purple_ultra_constructor"
-  "cabletiers:purple_ultra_destructor"
-  "cabletiers:purple_ultra_disk_interface"
-  "cabletiers:purple_ultra_exporter"
-  "cabletiers:purple_ultra_importer"
-  "cabletiers:red_creative_constructor"
-  "cabletiers:red_creative_destructor"
-  "cabletiers:red_creative_disk_interface"
-  "cabletiers:red_creative_exporter"
-  "cabletiers:red_creative_importer"
-  "cabletiers:red_elite_constructor"
-  "cabletiers:red_elite_destructor"
-  "cabletiers:red_elite_disk_interface"
-  "cabletiers:red_elite_exporter"
-  "cabletiers:red_elite_importer"
-  "cabletiers:red_mega_constructor"
-  "cabletiers:red_mega_destructor"
-  "cabletiers:red_mega_disk_interface"
-  "cabletiers:red_mega_exporter"
-  "cabletiers:red_mega_importer"
-  "cabletiers:red_ultra_constructor"
-  "cabletiers:red_ultra_destructor"
-  "cabletiers:red_ultra_disk_interface"
-  "cabletiers:red_ultra_exporter"
-  "cabletiers:red_ultra_importer"
-  "cabletiers:ultra_constructor"
-  "cabletiers:ultra_destructor"
-  "cabletiers:ultra_disk_interface"
-  "cabletiers:ultra_exporter"
-  "cabletiers:ultra_importer"
-  "cabletiers:white_creative_constructor"
-  "cabletiers:white_creative_destructor"
-  "cabletiers:white_creative_disk_interface"
-  "cabletiers:white_creative_exporter"
-  "cabletiers:white_creative_importer"
-  "cabletiers:white_elite_constructor"
-  "cabletiers:white_elite_destructor"
-  "cabletiers:white_elite_disk_interface"
-  "cabletiers:white_elite_exporter"
-  "cabletiers:white_elite_importer"
-  "cabletiers:white_mega_constructor"
-  "cabletiers:white_mega_destructor"
-  "cabletiers:white_mega_disk_interface"
-  "cabletiers:white_mega_exporter"
-  "cabletiers:white_mega_importer"
-  "cabletiers:white_ultra_constructor"
-  "cabletiers:white_ultra_destructor"
-  "cabletiers:white_ultra_disk_interface"
-  "cabletiers:white_ultra_exporter"
-  "cabletiers:white_ultra_importer"
-  "cabletiers:yellow_creative_constructor"
-  "cabletiers:yellow_creative_destructor"
-  "cabletiers:yellow_creative_disk_interface"
-  "cabletiers:yellow_creative_exporter"
-  "cabletiers:yellow_creative_importer"
-  "cabletiers:yellow_elite_constructor"
-  "cabletiers:yellow_elite_destructor"
-  "cabletiers:yellow_elite_disk_interface"
-  "cabletiers:yellow_elite_exporter"
-  "cabletiers:yellow_elite_importer"
-  "cabletiers:yellow_mega_constructor"
-  "cabletiers:yellow_mega_destructor"
-  "cabletiers:yellow_mega_disk_interface"
-  "cabletiers:yellow_mega_exporter"
-  "cabletiers:yellow_mega_importer"
-  "cabletiers:yellow_ultra_constructor"
-  "cabletiers:yellow_ultra_destructor"
-  "cabletiers:yellow_ultra_disk_interface"
-  "cabletiers:yellow_ultra_exporter"
-  "cabletiers:yellow_ultra_importer"
   ... (3271 entries)
+  "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
   ... (6100 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/cabletiers:creative_constructors</summary>

```diff
 [
   ... (1 entries)
-  "cabletiers:black_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:blue_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:brown_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:creative_disk_interface"
   ... (1 entries)
-  "cabletiers:cyan_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:green_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:light_blue_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:light_gray_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:lime_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:magenta_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:orange_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:pink_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:purple_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:red_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:white_creative_disk_interface"
   ... (1 entries)
-  "cabletiers:yellow_creative_disk_interface"
 ]

```


</details>

<details>
<summary>minecraft:item/cabletiers:elite_constructors</summary>

```diff
 [
   ... (1 entries)
-  "cabletiers:black_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:blue_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:brown_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:cyan_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:elite_disk_interface"
   ... (1 entries)
-  "cabletiers:green_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:light_blue_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:light_gray_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:lime_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:magenta_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:orange_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:pink_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:purple_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:red_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:white_elite_disk_interface"
   ... (1 entries)
-  "cabletiers:yellow_elite_disk_interface"
 ]

```


</details>

<details>
<summary>minecraft:item/cabletiers:mega_constructors</summary>

```diff
 [
   ... (1 entries)
-  "cabletiers:black_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:blue_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:brown_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:cyan_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:green_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:light_blue_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:light_gray_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:lime_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:magenta_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:mega_disk_interface"
   ... (1 entries)
-  "cabletiers:orange_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:pink_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:purple_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:red_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:white_mega_disk_interface"
   ... (1 entries)
-  "cabletiers:yellow_mega_disk_interface"
 ]

```


</details>

<details>
<summary>minecraft:item/cabletiers:ultra_constructors</summary>

```diff
 [
   ... (1 entries)
-  "cabletiers:black_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:blue_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:brown_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:cyan_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:green_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:light_blue_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:light_gray_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:lime_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:magenta_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:orange_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:pink_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:purple_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:red_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:white_ultra_disk_interface"
   ... (1 entries)
-  "cabletiers:yellow_ultra_disk_interface"
 ]

```


</details>

<details>
<summary>minecraft:item/curios:refinedstorage_curios_integration</summary>

```diff
 [
   ... (6 entries)
+  "universalgrid:creative_wireless_universal_grid"
+  "universalgrid:wireless_universal_grid"
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
   ... (23552 entries)
+  "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
   ... (17934 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (987 entries)
+  "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
   ... (1214 entries)
 ]

```


</details>

<details>
<summary>dimension</summary>

```diff
 [
   ... (6 entries)
-  "hyperbox:747e03c1-e6b7-453b-ad58-549f8f0e9d14/firebox"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (25524 entries)
-  "enderdrives:tape_disk"
   ... (4610 entries)
+  "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+  "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
   ... (22727 entries)
+  "universalgrid:creative_wireless_universal_grid"
+  "universalgrid:wireless_universal_grid"
   ... (1229 entries)
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
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/black_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:black_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/black_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/blue_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:blue_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/blue_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/brown_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:brown_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/brown_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/cyan_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:cyan_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/cyan_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/gray_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:gray_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/gray_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/green_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:green_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/green_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/light_gray_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:light_gray_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/light_gray_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/lime_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:lime_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/lime_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/magenta_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:magenta_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/magenta_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/orange_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:orange_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/orange_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/pink_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:pink_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/pink_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/purple_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:purple_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/purple_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/red_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:red_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/red_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/white_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:white_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/white_interdimensional_wireless_transmitter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/interdimensionalwirelesstransmitter/blocks/yellow_interdimensional_wireless_transmitter</summary>

```diff
+{
+  type: "minecraft:block"
+  functions: [
+    {
+      function: "minecraft:copy_components"
+      include: [
+        "minecraft:custom_name"
+      ]
+      source: "block_entity"
+    }
+  ]
+  pools: [
+    {
+      bonus_rolls: 0
+      conditions: [
+        {
+          condition: "minecraft:survives_explosion"
+        }
+      ]
+      entries: [
+        {
+          type: "minecraft:item"
+          name: "interdimensionalwirelesstransmitter:yellow_interdimensional_wireless_transmitter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "interdimensionalwirelesstransmitter:blocks/yellow_interdimensional_wireless_transmitter"
+}

```


</details>

</blockquote>

</details>

