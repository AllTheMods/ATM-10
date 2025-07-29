# Changelog

# 📦 4.4

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- fix: just dire machines now runs on a minimum of 20t
- fix: plastic unification
- fix: allow prist to spawn
- fix: change flower item to block
- - makes it so the flower item is correctly interpreted as a block and will also function in-world
- - fully resolves #3107
- fix: make ars bees recognize blocks when placed
- feat: remove op machines and recipes from mekmm (#3111)
- Co-authored-by: Satherov <Satherov@users.noreply.github.com>
- feat: make the red sand cell use a cell component
- Removed tree spawning for merrymaking and limited presents in loot (#3120)
- uru metal gear recipes and material changes (#3121)</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Updated (1)</summary>

- AllTheTweaks (2.6.5) -> (2.6.6)

</details>

<details open>
<summary>Removed (1)</summary>

- Reliquified Twilight Forest (0.5.0)

</details>

## 🍳 Recipes

<details>
<summary>Added (35)</summary>
<blockquote>

<details>
<summary>integrateddynamics/special/facade</summary>

```diff
+{
+  type: "integrateddynamics:crafting_special_facade"
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/6bz71h5faq2jex2xl31562llf</summary>

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
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/bmce927ft1f0vwwu8de1forsl</summary>

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
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>productivebees/centrifuge/fluids/honeycomb_latex</summary>

```diff
+{
+  type: "productivebees:centrifuge"
+  ingredient: {
+    type: "productivebees:component"
+    components: {
+      productivebees:bee_type: "productivebees:plastic"
+    }
+    items: "productivebees:configurable_honeycomb"
+  }
+  outputs: [
+    {
+      item: {
+        item: "industrialforegoing:plastic"
+      }
+      chance: 0.5
+    }
+    {
+      item: {
+        item: "productivebees:wax"
+      }
+    }
+  ]
+  fluid: {
+    amount: 50
+    tag: "c:latex"
+  }
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:plastics"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "productivelib:fluid_tag_empty"
+        tag: "c:latex"
+      }
+    }
+  ]
+}

```


</details>

<details>
<summary>theurgy/calcination/alchemical_salt_plant_from_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:calcination"
+  category: "misc"
+  ingredient: {
+    count: 1
+    ingredient: {
+      tag: "c:crops"
+    }
+  }
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_salt_plant"
+  }
+  time: 100
+}

```


</details>

<details>
<summary>theurgy/distillation/crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:distillation"
+  category: "misc"
+  ingredient: {
+    count: 3
+    ingredient: {
+      tag: "c:crops"
+    }
+  }
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:mercury_shard"
+  }
+  time: 100
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_animals_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/animals/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/animals/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_animals_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_animals_common_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/animals/common"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/animals/common"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_animals_common"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_animals_rare_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/animals/rare"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/animals/rare"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_animals_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_crops_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/crops/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/crops/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_crops_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_earthen_matters_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/earthen_matters/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/earthen_matters/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_earthen_matters_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_earthen_matters_common_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/earthen_matters/common"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/earthen_matters/common"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_earthen_matters_common"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_gems_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/gems/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/gems/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_gems_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_gems_common_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/gems/common"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/gems/common"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_gems_common"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_gems_precious_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/gems/precious"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 1000
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/gems/precious"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_gems_precious"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_gems_rare_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/gems/rare"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/gems/rare"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_gems_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_logs_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/logs/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/logs/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_logs_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_metals_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/metals/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/metals/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_metals_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_metals_common_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/metals/common"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/metals/common"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_metals_common"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_metals_precious_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/metals/precious"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 1000
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/metals/precious"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_metals_precious"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_metals_rare_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/metals/rare"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/metals/rare"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_metals_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/mobs/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/mobs/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_mobs_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_commond_from_alchemical_sulfur_skeleton_skull_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_skeleton_skull"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_commond"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_commond_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/mobs/common/automatic_recipes"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/mobs/common/automatic_recipes"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_mobs_commond"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_precious_from_alchemical_sulfur_dragon_egg_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 1000
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_dragon_egg"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 4
+    id: "theurgy:alchemical_niter_mobs_precious"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_precious_from_alchemical_sulfur_heart_of_the_sea_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 1000
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_heart_of_the_sea"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_precious"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_precious_from_alchemical_sulfur_nether_star_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 1000
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_nether_star"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_precious"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_rare_from_alchemical_sulfur_elytra_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_elytra"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_rare_from_alchemical_sulfur_ghast_tear_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_ghast_tear"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_rare_from_alchemical_sulfur_shulker_shell_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_shulker_shell"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_mobs_rare_from_alchemical_sulfur_wither_skeleton_skull_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      item: "theurgy:alchemical_sulfur_wither_skeleton_skull"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 2
+    id: "theurgy:alchemical_niter_mobs_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_other_minerals_abundant_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/other_minerals/abundant"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 125
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/other_minerals/abundant"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_other_minerals_abundant"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_other_minerals_common_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/other_minerals/common"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 250
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/other_minerals/common"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_other_minerals_common"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/alchemical_niter_other_minerals_rare_using_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "theurgy:alchemical_sulfurs/other_minerals/rare"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 500
+    ingredient: {
+      fluid: "minecraft:water"
+    }
+  }
+  ingredients: [
+    {
+      tag: "theurgy:alchemical_sulfurs/other_minerals/rare"
+    }
+    {
+      tag: "c:crops"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 1
+    id: "theurgy:alchemical_niter_other_minerals_rare"
+  }
+  time: 200
+}

```


</details>

<details>
<summary>theurgy/fermentation/fermentation_starter_from_crops</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:crops"
+      }
+    }
+    {
+      type: "neoforge:not"
+      value: {
+        type: "neoforge:tag_empty"
+        tag: "c:sugars"
+      }
+    }
+  ]
+  type: "theurgy:fermentation"
+  category: "misc"
+  fluid: {
+    amount: 100
+    ingredient: {
+      fluid: "theurgy:sal_ammoniac"
+    }
+  }
+  ingredients: [
+    {
+      tag: "c:crops"
+    }
+    {
+      tag: "c:sugars"
+    }
+  ]
+  result: {
+    type: "theurgy:item"
+    count: 20
+    id: "theurgy:fermentation_starter"
+  }
+  time: 200
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>almostunified/productivebees</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "productivebees"
   recipes: [
     "1$centrifuge/alloys/honeycomb_brass"
     "1$centrifuge/alloys/honeycomb_bronze"
     "1$centrifuge/alloys/honeycomb_constantan"
     "1$centrifuge/alloys/honeycomb_electrum"
     "1$centrifuge/alloys/honeycomb_enderium"
     "1$centrifuge/alloys/honeycomb_invar"
     "1$centrifuge/alloys/honeycomb_lumium"
     "1$centrifuge/alloys/honeycomb_signalum"
     "1$centrifuge/alloys/honeycomb_steel"
     "1$centrifuge/dusts/honeycomb_aluminium"
     "1$centrifuge/dusts/honeycomb_leaden"
     "1$centrifuge/dusts/honeycomb_nickel"
     "1$centrifuge/dusts/honeycomb_osmium"
     "1$centrifuge/dusts/honeycomb_platinum"
     "1$centrifuge/dusts/honeycomb_radioactive"
     "1$centrifuge/dusts/honeycomb_redstone"
     "1$centrifuge/dusts/honeycomb_silver"
     "1$centrifuge/dusts/honeycomb_sulfur"
     "1$centrifuge/dusts/honeycomb_tin"
     "1$centrifuge/dusts/honeycomb_tungsten"
     "1$centrifuge/dusts/honeycomb_zinc"
+    "1$centrifuge/fluids/honeycomb_latex"
     "1$centrifuge/gems/honeycomb_cinnabar"
     "1$centrifuge/gems/honeycomb_cinnabar_dust"
     "1$centrifuge/gems/honeycomb_diamond"
     "1$centrifuge/gems/honeycomb_emerald"
     "1$centrifuge/gems/honeycomb_fluorite"
     "1$centrifuge/gems/honeycomb_lapis"
     "1$centrifuge/gems/honeycomb_peridot"
     "1$centrifuge/gems/honeycomb_ruby"
     "1$centrifuge/gems/honeycomb_sapphire"
+    "1$centrifuge/materials/honeycomb_plastic"
     "1$centrifuge/materials/honeycomb_silicon"
     "1$centrifuge/raw_materials/honeycomb_aluminium"
     "1$centrifuge/raw_materials/honeycomb_iridium"
     "1$centrifuge/raw_materials/honeycomb_leaden"
     "1$centrifuge/raw_materials/honeycomb_nickel"
     "1$centrifuge/raw_materials/honeycomb_osmium"
     "1$centrifuge/raw_materials/honeycomb_platinum"
     "1$centrifuge/raw_materials/honeycomb_radioactive"
     "1$centrifuge/raw_materials/honeycomb_silver"
     "1$centrifuge/raw_materials/honeycomb_tin"
     "1$centrifuge/raw_materials/honeycomb_tungsten"
     "1$centrifuge/raw_materials/honeycomb_zinc"
     "1$nest_locator"
     "1$nests/nether_gold_nest"
-    "3$centrifuge/fluids/honeycomb_latex"
-    "3$centrifuge/materials/honeycomb_plastic"
   ]
 }

```


</details>

<details>
<summary>minecraft/kjs/red_sand_cell</summary>

```diff
 {
   type: "minecraft:crafting_shaped"
   result: {
     id: "kubejs:red_sand_cell"
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
-      item: "kubejs:sand_cell"
+      item: "megacells:cell_component_256m"
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
       item: "minecraft:lava_bucket"
     }
     I: {
       item: "allthecompressed:red_sand_5x"
     }
     Y: {
       item: "minecraft:lava_bucket"
     }
   }
   _kubejs_changed_marker: true
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (93)</summary>
<blockquote>

<details>
<summary>mekmm/cnc_rolling_mill</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/basic"
-    }
-    C: {
-      tag: "c:circuits/basic"
-    }
-    S: {
-      tag: "c:ingots/steel"
-    }
-    X: {
-      item: "mekanism:steel_casing"
-    }
-  }
-  pattern: [
-    "ACA"
-    "SXS"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:cnc_rolling_mill"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/advanced_ae/stamper/printed_quantum_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "advanced_ae"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    item: "advanced_ae:quantum_alloy"
-  }
-  mold: {
-    count: 1
-    item: "advanced_ae:quantum_processor_press"
-  }
-  output: {
-    count: 1
-    id: "advanced_ae:printed_quantum_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ae2/stamper/printed_calculation_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ae2"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:gems/certus_quartz"
-  }
-  mold: {
-    count: 1
-    item: "ae2:calculation_processor_press"
-  }
-  output: {
-    count: 1
-    id: "ae2:printed_calculation_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ae2/stamper/printed_engineering_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ae2"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:gems/diamond"
-  }
-  mold: {
-    count: 1
-    item: "ae2:engineering_processor_press"
-  }
-  output: {
-    count: 1
-    id: "ae2:printed_engineering_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ae2/stamper/printed_logic_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ae2"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:ingots/gold"
-  }
-  mold: {
-    count: 1
-    item: "ae2:logic_processor_press"
-  }
-  output: {
-    count: 1
-    id: "ae2:printed_logic_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ae2/stamper/printed_silicon</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ae2"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:silicon"
-  }
-  mold: {
-    count: 1
-    item: "ae2:silicon_press"
-  }
-  output: {
-    count: 1
-    id: "ae2:printed_silicon"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/appflux/stamper/printed_energy_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "appflux"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:gems/charged_redstone"
-  }
-  mold: {
-    count: 1
-    item: "appflux:energy_processor_press"
-  }
-  output: {
-    count: 1
-    id: "appflux:printed_energy_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/bastion_pod</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:bastion_pod"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "ars_nouveau:bastion_pod"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/blue_archwood_sapling</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "ars_nouveau:blue_archwood_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "ars_nouveau:blue_archwood_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "ars_nouveau:blue_archwood_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/bombegranate_pod</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:bombegranate_pod"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "ars_nouveau:bombegranate_pod"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/frostaya_pod</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:frostaya_pod"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "ars_nouveau:frostaya_pod"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/green_archwood_sapling</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "ars_nouveau:green_archwood_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "ars_nouveau:green_archwood_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "ars_nouveau:green_archwood_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/magebloom</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:magebloom_crop"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "ars_nouveau:magebloom_crop"
-  }
-  secondary_output: {
-    count: 1
-    id: "'ars_nouveau:magebloom"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/mendosteen_pod</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:mendosteen_pod"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "ars_nouveau:mendosteen_pod"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/purple_archwood_sapling</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "ars_nouveau:purple_archwood_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "ars_nouveau:purple_archwood_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "ars_nouveau:purple_archwood_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/red_archwood_sapling</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "ars_nouveau:red_archwood_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "ars_nouveau:red_archwood_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "ars_nouveau:red_archwood_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/ars_nouveau/planting/sourceberry_bush</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "ars_nouveau"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "ars_nouveau:sourceberry_bush"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "ars_nouveau:sourceberry_bush"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/extendedae/stamper/concurrent_processor_print</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "extendedae"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:gems/entro"
-  }
-  mold: {
-    count: 1
-    item: "extendedae:concurrent_processor_press"
-  }
-  output: {
-    count: 1
-    id: "extendedae:concurrent_processor_print"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/farmersdelight/planting/cabbage</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "farmersdelight"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "farmersdelight:cabbage_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "farmersdelight:cabbage_seeds"
-  }
-  secondary_output: {
-    count: 1
-    id: "farmersdelight:cabbage"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/farmersdelight/planting/tomatoes</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "farmersdelight"
-    }
-  ]
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "farmersdelight:tomato_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "farmersdelight:tomato_seeds"
-  }
-  secondary_output: {
-    count: 3
-    id: "farmersdelight:tomato"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/compat/immersiveengineering/planting/hemp_seed</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "immersiveengineering"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "immersiveengineering:seed"
-  }
-  main_output: {
-    count: 3
-    id: "immersiveengineering:seed"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "immersiveengineering:hemp_fiber"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/integrateddynamics/planting/menril_sapling</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "integrateddynamics"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "integrateddynamics:menril_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "integrateddynamics:menril_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "integrateddynamics:menril_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/megacells/stamper/printed_accumulation_processor</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "megacells"
-    }
-  ]
-  type: "mekmm:stamper"
-  main_input: {
-    count: 1
-    tag: "c:ingots/sky_steel"
-  }
-  mold: {
-    count: 1
-    item: "megacells:accumulation_processor_press"
-  }
-  output: {
-    count: 1
-    id: "megacells:printed_accumulation_processor"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/mysticalagradditions/planting/dragon_egg</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mysticalagradditions"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "mysticalagriculture:dragon_egg_seeds"
-  }
-  main_output: {
-    count: 1
-    id: "mysticalagriculture:dragon_egg_seeds"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "mysticalagriculture:dragon_egg_essence"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/mysticalagradditions/planting/nether_star</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mysticalagradditions"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "mysticalagriculture:nether_star_seeds"
-  }
-  main_output: {
-    count: 1
-    id: "mysticalagriculture:nether_star_seeds"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "mysticalagriculture:nether_star_essence"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/mysticalagradditions/planting/neutronium</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mysticalagradditions"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "mysticalagriculture:neutronium_seeds"
-  }
-  main_output: {
-    count: 1
-    id: "mysticalagriculture:neutronium_seeds"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "mysticalagriculture:neutronium_essence"
-  }
-}

```


</details>

<details>
<summary>mekmm/compat/mysticalagradditions/planting/nitro_crystal</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "neoforge:mod_loaded"
-      modid: "mysticalagradditions"
-    }
-  ]
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "mysticalagriculture:nitro_crystal_seeds"
-  }
-  main_output: {
-    count: 1
-    id: "mysticalagriculture:nitro_crystal_seeds"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "mysticalagriculture:nitro_crystal_essence"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/advanced/lathing</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/infused"
-    }
-    C: {
-      tag: "c:circuits/advanced"
-    }
-    I: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      item: "mekmm:basic_lathing_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:advanced_lathing_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/advanced/planting</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/infused"
-    }
-    C: {
-      tag: "c:circuits/advanced"
-    }
-    I: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      item: "mekmm:basic_planting_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:advanced_planting_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/advanced/rolling_mill</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/infused"
-    }
-    C: {
-      tag: "c:circuits/advanced"
-    }
-    I: {
-      tag: "c:ingots/osmium"
-    }
-    P: {
-      item: "mekmm:basic_rolling_mill_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:advanced_rolling_mill_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/basic/lathing</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/basic"
-    }
-    C: {
-      tag: "c:circuits/basic"
-    }
-    I: {
-      tag: "c:ingots/iron"
-    }
-    P: {
-      item: "mekmm:cnc_lathe"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:basic_lathing_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/basic/planting</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/basic"
-    }
-    C: {
-      tag: "c:circuits/basic"
-    }
-    I: {
-      tag: "c:ingots/iron"
-    }
-    P: {
-      item: "mekmm:planting_station"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:basic_planting_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/basic/rolling_mill</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/basic"
-    }
-    C: {
-      tag: "c:circuits/basic"
-    }
-    I: {
-      tag: "c:ingots/iron"
-    }
-    P: {
-      item: "mekmm:cnc_rolling_mill"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:basic_rolling_mill_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/elite/lathing</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/reinforced"
-    }
-    C: {
-      tag: "c:circuits/elite"
-    }
-    I: {
-      tag: "c:ingots/gold"
-    }
-    P: {
-      item: "mekmm:advanced_lathing_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:elite_lathing_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/elite/planting</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/reinforced"
-    }
-    C: {
-      tag: "c:circuits/elite"
-    }
-    I: {
-      tag: "c:ingots/gold"
-    }
-    P: {
-      item: "mekmm:advanced_planting_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:elite_planting_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/elite/rolling_mill</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/reinforced"
-    }
-    C: {
-      tag: "c:circuits/elite"
-    }
-    I: {
-      tag: "c:ingots/gold"
-    }
-    P: {
-      item: "mekmm:advanced_rolling_mill_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:elite_rolling_mill_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/ultimate/lathing</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/atomic"
-    }
-    C: {
-      tag: "c:circuits/ultimate"
-    }
-    I: {
-      tag: "c:gems/diamond"
-    }
-    P: {
-      item: "mekmm:elite_lathing_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:ultimate_lathing_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/ultimate/planting</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/atomic"
-    }
-    C: {
-      tag: "c:circuits/ultimate"
-    }
-    I: {
-      tag: "c:gems/diamond"
-    }
-    P: {
-      item: "mekmm:elite_planting_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:ultimate_planting_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/factory/ultimate/rolling_mill</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    A: {
-      tag: "mekanism:alloys/atomic"
-    }
-    C: {
-      tag: "c:circuits/ultimate"
-    }
-    I: {
-      tag: "c:gems/diamond"
-    }
-    P: {
-      item: "mekmm:elite_rolling_mill_factory"
-    }
-  }
-  pattern: [
-    "ACA"
-    "IPI"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:ultimate_rolling_mill_factory"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/bamboo</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:bamboo"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:bamboo"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/beetroot_from_beetroot_seeds</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:beetroot_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:beetroot_seeds"
-  }
-  secondary_output: {
-    count: 1
-    id: "minecraft:beetroot"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/brown_mushroom</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:brown_mushroom"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:brown_mushroom"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/cactus</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:cactus"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:cactus"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/carrot_from_carrot</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:carrot"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:carrot"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/chorus_fruit_from_chorus_flower</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:chorus_flower"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:chorus_flower"
-  }
-  secondary_output: {
-    count: 3
-    id: "minecraft:chorus_fruit"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/cocoa_beans</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:cocoa_beans"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 4
-    id: "minecraft:cocoa_beans"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/crimson_fungus</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:crimson_fungus"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:crimson_fungus"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/allium</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:allium"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:allium"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/azure_bluet</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:azure_bluet"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:azure_bluet"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/blue_orchid</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:blue_orchid"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:blue_orchid"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/cornflower</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:cornflower"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:cornflower"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/dandelion</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:dandelion"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:dandelion"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/lilac</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:lilac"
-  }
-  main_output: {
-    count: 2
-    id: "minecraft:lilac"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/lily_of_the_valley</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:lily_of_the_valley"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:lily_of_the_valley"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/moss_block</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:moss_block"
-  }
-  main_output: {
-    count: 4
-    id: "minecraft:moss_block"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/orange_tulip</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:orange_tulip"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:orange_tulip"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/oxeye_daisy</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:oxeye_daisy"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:oxeye_daisy"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/peony</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:peony"
-  }
-  main_output: {
-    count: 2
-    id: "minecraft:peony"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/pink_petals</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:pink_petals"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:pink_petals"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/pitcher_plant</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:pitcher_pod"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:pitcher_pod"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "minecraft:pitcher_plant"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/flower/red_tulip</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:red_tulip"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:red_tulip"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/rose_bush</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:rose_bush"
-  }
-  main_output: {
-    count: 2
-    id: "minecraft:rose_bush"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/sunflower</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:sunflower"
-  }
-  main_output: {
-    count: 2
-    id: "minecraft:sunflower"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/torchflower</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:torchflower_seeds"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:torchflower_seeds"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 1
-    id: "minecraft:torchflower"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/flower/white_tulip</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:white_tulip"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:white_tulip"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/flower/wither_rose</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:wither_rose"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:wither_rose"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/glow_berries</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:glow_berries"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:glow_berries"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/kelp</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:kelp"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:kelp"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/melon_from_melon_seeds</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:melon_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:melon_seeds"
-  }
-  secondary_output: {
-    count: 1
-    id: "minecraft:melon"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/nether_wart</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:nether_wart"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:nether_wart"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/potato_from_potato</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:potato"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 4
-    id: "minecraft:potato"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/pumpkin_from_pumpkin_seeds</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:pumpkin_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:pumpkin_seeds"
-  }
-  secondary_output: {
-    count: 1
-    id: "minecraft:pumpkin"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/red_mushroom</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:red_mushroom"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:red_mushroom"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/acacia_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:acacia_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:acacia_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:oak_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/birch_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:birch_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:birch_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:birch_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/cherry_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:cherry_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:cherry_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:cherry_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/dark_oak_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:dark_oak_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:dark_oak_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:dark_oak_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/jungle_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:jungle_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:jungle_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:jungle_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/mangrove_propagule</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:mangrove_propagule"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:mangrove_propagule"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:mangrove_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/oak_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:oak_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:oak_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:oak_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sapling/spruce_sapling</summary>

```diff
-{
-  type: "mekmm:planting"
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  item_input: {
-    count: 1
-    item: "minecraft:spruce_sapling"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:spruce_sapling"
-  }
-  per_tick_usage: true
-  secondary_output: {
-    count: 6
-    id: "minecraft:spruce_log"
-  }
-}

```


</details>

<details>
<summary>mekmm/planting/sea_pickle</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:sea_pickle"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:sea_pickle"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/sugar_cane</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:sugar_cane"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:sugar_cane"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/sweet_berries</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:sweet_berries"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:sweet_berries"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/warped_fungus</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:warped_fungus"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 3
-    id: "minecraft:warped_fungus"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting/wheat_from_wheat_seeds</summary>

```diff
-{
-  type: "mekmm:planting"
-  item_input: {
-    count: 1
-    item: "minecraft:wheat_seeds"
-  }
-  chemical_input: {
-    amount: 1
-    chemical: "mekmm:nutrient_solution"
-  }
-  main_output: {
-    count: 1
-    id: "minecraft:wheat_seeds"
-  }
-  secondary_output: {
-    count: 1
-    id: "minecraft:wheat"
-  }
-  per_tick_usage: true
-}

```


</details>

<details>
<summary>mekmm/planting_station</summary>

```diff
-{
-  type: "mekanism:mek_data"
-  category: "misc"
-  key: {
-    #: {
-      item: "mekanism:bio_fuel"
-    }
-    A: {
-      tag: "mekanism:alloys/reinforced"
-    }
-    C: {
-      tag: "c:circuits/elite"
-    }
-    X: {
-      item: "mekanism:steel_casing"
-    }
-  }
-  pattern: [
-    "ACA"
-    "#X#"
-    "ACA"
-  ]
-  result: {
-    count: 1
-    id: "mekmm:planting_station"
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/3k3wgg94toj5ztb1b4u5m0sfj</summary>

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
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/5xmy0zpotp3xec34pay2nzjbu</summary>

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
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>reliquified_twilight_forest/fortification_scepter</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  pattern: [
-    " g"
-    "b "
-  ]
-  key: {
-    b: {
-      item: "minecraft:bone"
-    }
-    g: {
-      item: "reliquified_twilight_forest:shielding_gem"
-    }
-  }
-  result: {
-    id: "twilightforest:fortification_scepter"
-    count: 1
-  }
-}

```


</details>

<details>
<summary>reliquified_twilight_forest/lifedrain_scepter</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  pattern: [
-    " g"
-    "b "
-  ]
-  key: {
-    b: {
-      item: "minecraft:bone"
-    }
-    g: {
-      item: "reliquified_twilight_forest:absorption_gem"
-    }
-  }
-  result: {
-    id: "twilightforest:lifedrain_scepter"
-    count: 1
-  }
-}

```


</details>

<details>
<summary>reliquified_twilight_forest/twilight_scepter</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  pattern: [
-    " g"
-    "b "
-  ]
-  key: {
-    b: {
-      item: "minecraft:bone"
-    }
-    g: {
-      item: "reliquified_twilight_forest:twilight_gem"
-    }
-  }
-  result: {
-    id: "twilightforest:twilight_scepter"
-    count: 1
-  }
-}

```


</details>

<details>
<summary>reliquified_twilight_forest/zombie_scepter</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  category: "equipment"
-  pattern: [
-    " g"
-    "b "
-  ]
-  key: {
-    b: {
-      item: "minecraft:bone"
-    }
-    g: {
-      item: "reliquified_twilight_forest:necromancy_gem"
-    }
-  }
-  result: {
-    id: "twilightforest:zombie_scepter"
-    count: 1
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details>
<summary>Changed (21)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:pumpkins</summary>

```diff
 [
   ... (3 entries)
-  "dyenamicsandfriends:chromacarvings_amber_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_pumpkin"
 ]

```


</details>

<details>
<summary>minecraft:block/c:pumpkins/carved</summary>

```diff
 [
   ... (1 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/c:pumpkins/jack_o_lanterns</summary>

```diff
 [
   ... (1 entries)
-  "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/axe</summary>

```diff
 [
   ... (1195 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_amber_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_conifer_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_honey_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_lavender_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_maroon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_mint_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_navy_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_peach_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_persimmon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_rose_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_spring_green_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_wine_pumpkin"
   ... (3832 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:sword_efficient</summary>

```diff
 [
   ... (39 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_amber_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_conifer_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_honey_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_lavender_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_maroon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_mint_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_navy_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_peach_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_persimmon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_rose_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_spring_green_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_wine_pumpkin"
   ... (64 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_armor</summary>

```diff
 [
   ... (68 entries)
-  "reliquified_twilight_forest:execution"
   ... (28 entries)
 ]

```


</details>

<details>
<summary>minecraft:damage_type/minecraft:bypasses_resistance</summary>

```diff
 [
   ... (5 entries)
-  "reliquified_twilight_forest:execution"
   ... (6 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:crops/pumpkin</summary>

```diff
 [
   ... (1 entries)
-  "dyenamicsandfriends:chromacarvings_amber_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_pumpkin"
   ... (3 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:pumpkins</summary>

```diff
 [
   ... (3 entries)
-  "dyenamicsandfriends:chromacarvings_amber_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_pumpkin"
 ]

```


</details>

<details>
<summary>minecraft:item/c:pumpkins/carved</summary>

```diff
 [
   ... (1 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:pumpkins/jack_o_lanterns</summary>

```diff
 [
   ... (1 entries)
-  "dyenamicsandfriends:chromacarvings_amber_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_aquamarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_bubblegum_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_cherenkov_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_conifer_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_fluorescent_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_honey_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_icy_blue_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_lavender_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_maroon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_mint_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_navy_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_peach_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_persimmon_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_rose_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_spring_green_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_ultramarine_jack_o_lantern"
-  "dyenamicsandfriends:chromacarvings_wine_jack_o_lantern"
   ... (1 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:back</summary>

```diff
 [
   ... (5 entries)
-  "reliquified_twilight_forest:charm_backpack"
-  "reliquified_twilight_forest:chromatic_cloak"
-  "reliquified_twilight_forest:invisibility_cloak"
-  "reliquified_twilight_forest:scaled_cloak"
-  "reliquified_twilight_forest:steel_cape"
   ... (7 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:body</summary>

```diff
 [
   ... (1 entries)
-  "reliquified_twilight_forest:hydra_heart"
   ... (5 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:charm</summary>

```diff
 [
   ... (21 entries)
-  "reliquified_twilight_forest:cicada_bottle"
-  "reliquified_twilight_forest:firefly_queen"
-  "reliquified_twilight_forest:maple_syrup_bottle"
-  "reliquified_twilight_forest:parasite_115"
-  "reliquified_twilight_forest:parasite_116"
-  "reliquified_twilight_forest:twilight_feather"
   ... (16 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/curios:feet</summary>

```diff
 [
   ... (9 entries)
-  "reliquified_twilight_forest:minotaur_hoof"
 ]

```


</details>

<details>
<summary>minecraft:item/curios:hands</summary>

```diff
 [
   ... (10 entries)
-  "reliquified_twilight_forest:giant_glove"
 ]

```


</details>

<details>
<summary>minecraft:item/curios:head</summary>

```diff
 [
   ... (11 entries)
-  "reliquified_twilight_forest:deer_antler"
-  "reliquified_twilight_forest:goblin_nose"
-  "reliquified_twilight_forest:lich_crown"
-  "reliquified_twilight_forest:thorn_crown"
   ... (26 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/equippable</summary>

```diff
 [
   ... (80 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
   ... (10 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/minecraft:enchantable/vanishing</summary>

```diff
 [
   ... (6 entries)
-  "dyenamicsandfriends:chromacarvings_amber_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_aquamarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_bubblegum_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_cherenkov_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_conifer_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_fluorescent_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_honey_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_icy_blue_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_lavender_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_maroon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_mint_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_navy_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_peach_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_persimmon_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_rose_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_spring_green_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_ultramarine_carved_pumpkin"
-  "dyenamicsandfriends:chromacarvings_wine_carved_pumpkin"
   ... (11 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/rarcompat:mimic_loot</summary>

```diff
 [
   ... (71 entries)
-  "reliquified_twilight_forest:charm_backpack"
-  "reliquified_twilight_forest:chromatic_cloak"
-  "reliquified_twilight_forest:cicada_bottle"
-  "reliquified_twilight_forest:deer_antler"
-  "reliquified_twilight_forest:firefly_queen"
-  "reliquified_twilight_forest:giant_glove"
-  "reliquified_twilight_forest:goblin_nose"
-  "reliquified_twilight_forest:hydra_heart"
-  "reliquified_twilight_forest:invisibility_cloak"
-  "reliquified_twilight_forest:lich_crown"
-  "reliquified_twilight_forest:maple_syrup_bottle"
-  "reliquified_twilight_forest:minotaur_hoof"
-  "reliquified_twilight_forest:parasite_115"
-  "reliquified_twilight_forest:scaled_cloak"
-  "reliquified_twilight_forest:steel_cape"
-  "reliquified_twilight_forest:thorn_crown"
-  "reliquified_twilight_forest:twilight_feather"
 ]

```


</details>

<details>
<summary>minecraft:item/rarcompat:mimificable</summary>

```diff
 [
   ... (71 entries)
-  "reliquified_twilight_forest:charm_backpack"
-  "reliquified_twilight_forest:chromatic_cloak"
-  "reliquified_twilight_forest:cicada_bottle"
-  "reliquified_twilight_forest:deer_antler"
-  "reliquified_twilight_forest:firefly_queen"
-  "reliquified_twilight_forest:giant_glove"
-  "reliquified_twilight_forest:goblin_nose"
-  "reliquified_twilight_forest:hydra_heart"
-  "reliquified_twilight_forest:invisibility_cloak"
-  "reliquified_twilight_forest:lich_crown"
-  "reliquified_twilight_forest:maple_syrup_bottle"
-  "reliquified_twilight_forest:minotaur_hoof"
-  "reliquified_twilight_forest:parasite_115"
-  "reliquified_twilight_forest:parasite_116"
-  "reliquified_twilight_forest:scaled_cloak"
-  "reliquified_twilight_forest:steel_cape"
-  "reliquified_twilight_forest:thorn_crown"
-  "reliquified_twilight_forest:twilight_feather"
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
<summary>dimension</summary>

```diff
 [
   ... (6 entries)
-  "hyperbox:747e03c1-e6b7-453b-ad58-549f8f0e9d14/firebox"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (981 entries)
-  "reliquified_twilight_forest:hydra_fire"
-  "reliquified_twilight_forest:hydra_fire_puddle"
   ... (173 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (52121 entries)
-  "reliquified_twilight_forest:absorption_gem"
-  "reliquified_twilight_forest:broken_charm_of_keeping_1"
-  "reliquified_twilight_forest:broken_charm_of_keeping_2"
-  "reliquified_twilight_forest:broken_charm_of_keeping_3"
-  "reliquified_twilight_forest:broken_charm_of_life_1"
-  "reliquified_twilight_forest:broken_charm_of_life_2"
-  "reliquified_twilight_forest:carminite_gem"
-  "reliquified_twilight_forest:charm_backpack"
-  "reliquified_twilight_forest:chromatic_cloak"
-  "reliquified_twilight_forest:cicada_bottle"
-  "reliquified_twilight_forest:deer_antler"
-  "reliquified_twilight_forest:ether_gem"
-  "reliquified_twilight_forest:fire_gem"
-  "reliquified_twilight_forest:firefly_queen"
-  "reliquified_twilight_forest:frenzy_gem"
-  "reliquified_twilight_forest:frost_gem"
-  "reliquified_twilight_forest:giant_glove"
-  "reliquified_twilight_forest:goblin_nose"
-  "reliquified_twilight_forest:hydra_heart"
-  "reliquified_twilight_forest:invisibility_cloak"
-  "reliquified_twilight_forest:lich_crown"
-  "reliquified_twilight_forest:maple_syrup_bottle"
-  "reliquified_twilight_forest:minotaur_hoof"
-  "reliquified_twilight_forest:necromancy_gem"
-  "reliquified_twilight_forest:parasite_115"
-  "reliquified_twilight_forest:parasite_116"
-  "reliquified_twilight_forest:scaled_cloak"
-  "reliquified_twilight_forest:shielding_gem"
-  "reliquified_twilight_forest:steel_cape"
-  "reliquified_twilight_forest:thorn_crown"
-  "reliquified_twilight_forest:twilight_feather"
-  "reliquified_twilight_forest:twilight_gem"
-  "reliquified_twilight_forest:vengeful_gem"
   ... (5620 entries)
 ]

```


</details>

<details>
<summary>mob_effect</summary>

```diff
 [
   ... (220 entries)
-  "reliquified_twilight_forest:cicada_infestation"
   ... (44 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

