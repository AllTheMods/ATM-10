# Changelog

# 📦 2.46

## 📰 General changes and notes

Summary of changes here!

---

## 🛠️ Mods

<details open>
<summary>Updated (5)</summary>

- All The Leaks (0.1.16-beta+1.21.1-neoforge) -> (0.1.17-beta+1.21.1-neoforge)
- AlmostUnified (1.21.1-1.2.5) -> (1.21.1-1.2.6)
- Crash Assistant (1.7.19) -> (1.7.21)
- MineColonies (1.1.949-1.21.1-snapshot) -> (1.1.950-1.21.1-snapshot)
- SmithingTemplateViewer (1.0.0) -> (1.0.2)

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

## 🏷️ Tags

## ✍️ Registries

## 🗝️ Loot Table

<details>
<summary>Changed (11)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ancient_remnant</summary>

```diff
 {
   pools: [
     {
       name: "bottle"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:sandstorm_in_a_bottle"
         }
       ]
     }
     {
       name: "skull"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:remnant_skull"
         }
       ]
     }
     {
       name: "metal"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:ancient_metal_block"
         }
       ]
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_ancient_remnant"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ender_golem</summary>

```diff
 {
   pools: [
     {
       name: "ender_golem"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:void_core"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ender_guardian</summary>

```diff
 {
   pools: [
     {
       name: "ender_guardian"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:gauntlet_of_guard"
           weight: 1
         }
       ]
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_ender_guardian"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/ignis</summary>

```diff
 {
   pools: [
     {
       name: "ignis"
       rolls: 3
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:ignitium_ingot"
           weight: 1
         }
       ]
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_ignis"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/koboleton</summary>

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
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 2
                 min: 0
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
           name: "cataclysm:koboleton_bone"
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
                 max: 1
                 min: 0
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
           name: "cataclysm:ancient_metal_nugget"
         }
       ]
       rolls: 1
     }
     {
       bonus_rolls: 0
       conditions: [
         {
           condition: "minecraft:killed_by_player"
         }
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           enchanted_chance: {
             type: "minecraft:linear"
             base: 0.035
             per_level_above_first: 0.01
           }
           enchantment: "minecraft:looting"
           unenchanted_chance: 0.025
         }
       ]
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:ancient_metal_ingot"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
   random_sequence: "cataclysm:entities/koboleton"
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/maledictus</summary>

```diff
 {
   type: "minecraft:entity"
   pools: [
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_maledictus"
           weight: 1
         }
       ]
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
                 max: 4
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "cataclysm:cursium_ingot"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
   random_sequence: "cataclysm:entities/maledictus"
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/netherite_monstrosity</summary>

```diff
 {
   pools: [
     {
       name: "hammer"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:infernal_forge"
         }
       ]
     }
     {
       name: "horn"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:monstrous_horn"
         }
       ]
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
                 max: 24
                 min: 16
               }
               function: "minecraft:set_count"
             }
           ]
           name: "cataclysm:lava_power_cell"
         }
       ]
       rolls: 1
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_netherite_monstrosity"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_harbinger</summary>

```diff
 {
   pools: [
     {
       name: "block"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:witherite_block"
           weight: 1
         }
       ]
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_the_harbinger"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_leviathan</summary>

```diff
 {
   pools: [
     {
       name: "hammer"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:tidal_claws"
         }
       ]
     }
     {
       name: "horn"
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:abyssal_egg"
         }
       ]
     }
     {
       name: "disc"
       conditions: [
         {
           condition: "minecraft:random_chance_with_enchanted_bonus"
           unenchanted_chance: 0.1
           enchanted_chance: 0.1
           enchantment: "minecraft:looting"
         }
       ]
       rolls: 1
       entries: [
         {
           type: "minecraft:item"
           name: "cataclysm:music_disc_the_leviathan"
           weight: 1
         }
       ]
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_prowler</summary>

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
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 9
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:redstone"
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
                 max: 7
                 min: 5
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:iron_ingot"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
-        }
-      ]
-      rolls: 1
-    }
   ]
 }

```


</details>

<details>
<summary>minecraft/loot_table/cataclysm/entities/the_watcher</summary>

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
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 2
                 min: 0
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:redstone"
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
           ]
           name: "minecraft:iron_ingot"
         }
       ]
       rolls: 1
     }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 8
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:allthemodium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 7
-                min: 2
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:vibranium_ingot"
-        }
-      ]
-      rolls: 1
-    }
-    {
-      bonus_rolls: 0
-      entries: [
-        {
-          type: "minecraft:item"
-          functions: [
-            {
-              add: false
-              count: {
-                type: "minecraft:uniform"
-                max: 5
-                min: 1
-              }
-              function: "minecraft:set_count"
-            }
-          ]
-          name: "allthemodium:unobtainium_ingot"
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

