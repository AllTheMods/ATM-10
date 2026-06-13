# Changelog

# 📦 5.0

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- chore: changelogs for 4.15
- fix: remove modular machinery</blockquote>

</details>

---

## 🛠️ Mods

<details open>
<summary>Removed (3)</summary>

- Modular Machinery Reborn (2.3.2)
- Modular Machinery Reborn ArsNouveau (2.0.3)
- Modular Machinery Reborn Mekanism (2.0.6)

</details>

## 🍳 Recipes

<details open>
<summary>Added (5)</summary>
<blockquote>

<details>
<summary>immersiveengineering/kjs/3h02durdsw7gs2p7y05482vs0</summary>

```diff
+{
+  type: "immersiveengineering:metal_press"
+  energy: 2400
+  input: {
+    item: "kubejs:modularium"
+  }
+  mold: "immersiveengineering:mold_plate"
+  result: {
+    item: "kubejs:modularium_plate"
+  }
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/4k42gf19ao9lnfz3ggijfxumr</summary>

```diff
+{
+  type: "modern_industrialization:compressor"
+  eu: 2
+  duration: 200
+  item_outputs: [
+    {
+      item: "kubejs:modularium_plate"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "kubejs:modularium"
+      amount: 1
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/7k8bmfwbqunxxqdty3zml0grf</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 1024
+  duration: 100
+  item_outputs: [
+    {
+      item: "kubejs:modularium"
+      amount: 32
+    }
+  ]
+  item_inputs: [
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "allthemodium:vibranium_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 5000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 5000
+    }
+    {
+      tag: "c:experience"
+      amount: 1000
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/c1s4jvgbpar8oyxazuswnmfk</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 1024
+  duration: 100
+  item_outputs: [
+    {
+      item: "kubejs:modularium"
+      amount: 48
+    }
+  ]
+  item_inputs: [
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "allthemodium:unobtainium_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 5000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 5000
+    }
+    {
+      tag: "c:experience"
+      amount: 1000
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/dldfklbzt4bm9izq5rj3er2od</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 1024
+  duration: 100
+  item_outputs: [
+    {
+      item: "kubejs:modularium"
+      amount: 24
+    }
+  ]
+  item_inputs: [
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "allthemodium:allthemodium_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "enderio:end_steel_ingot"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:deorum_ingot"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 5000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 5000
+    }
+    {
+      tag: "c:experience"
+      amount: 1000
+    }
+  ]
+  _kubejs_changed_marker: true
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (391)</summary>
<blockquote>

<details>
<summary>immersiveengineering/kjs/bbc02sk23aqbw1ipy8p7bym25</summary>

```diff
-{
-  type: "immersiveengineering:metal_press"
-  energy: 2400
-  input: {
-    item: "modular_machinery_reborn:modularium"
-  }
-  mold: "immersiveengineering:mold_plate"
-  result: {
-    item: "kubejs:modularium_plate"
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/0</summary>

```diff
-{
-  height: 106
-  progress_position: {
-    x: 90
-    y: 37
-  }
-  width: 154
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 18
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 65
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 18
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:allthemodium_ingot"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:deorum_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 56
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:end_steel_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 130
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "modular_machinery_reborn:modularium"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/1</summary>

```diff
-{
-  height: 106
-  progress_position: {
-    x: 90
-    y: 37
-  }
-  width: 154
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 18
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 65
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 18
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:vibranium_ingot"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:deorum_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 56
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:end_steel_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 130
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "modular_machinery_reborn:modularium"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/2</summary>

```diff
-{
-  height: 106
-  progress_position: {
-    x: 90
-    y: 37
-  }
-  width: 154
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 18
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 65
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 18
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:unobtainium_ingot"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:deorum_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 56
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:end_steel_ingot"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 130
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "modular_machinery_reborn:modularium"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/3</summary>

```diff
-{
-  height: 90
-  progress_position: {
-    x: 109
-    y: 27
-  }
-  width: 172
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 80
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 20000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_shard"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:turtle_scute"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:heart_of_the_sea"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 149
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:sea_prism"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/4</summary>

```diff
-{
-  height: 90
-  progress_position: {
-    x: 90
-    y: 27
-  }
-  width: 156
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 2000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 400
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 12500
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:coal"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:arcane_crystal_block"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:blaze_powder"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 130
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:smelter_prism"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/5</summary>

```diff
-{
-  height: 90
-  progress_position: {
-    x: 109
-    y: 27
-  }
-  width: 172
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 3000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 90
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 15000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:dripstone_block"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:pointed_dripstone"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:diamond_block"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 149
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:terrastomp_prism"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/6</summary>

```diff
-{
-  height: 90
-  progress_position: {
-    x: 109
-    y: 27
-  }
-  width: 172
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 10000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 30
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 22500
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:bat_wing"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:feather"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:phantom_membrane"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:white_wool"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 149
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:whirlwind_prism"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/7</summary>

```diff
-{
-  height: 106
-  progress_position: {
-    x: 109
-    y: 37
-  }
-  width: 172
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 18
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 15000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 200
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 3750
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2200
-      position: {
-        x: 31
-        y: 65
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 18
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:corrupt_soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 56
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:enchanted_soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 18
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:amethyst_shard"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 73
-        y: 56
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:ender_pearl_fragment"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 149
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:soul_binding_crystal"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/auto_hepheastus_forge/8</summary>

```diff
-{
-  height: 106
-  progress_position: {
-    x: 90
-    y: 37
-  }
-  width: 156
-  machine: "atm:auto_hepheastus_forge"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 12288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 18
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 50000
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 500
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "evilcraft:blood"
-      mode: "INPUT"
-      amount: 30000
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 10600
-      position: {
-        x: 31
-        y: 65
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:mundabitur_dust"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 54
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:quantum_core"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 130
-        y: 37
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:quantum_injector"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_aluminum"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:aluminum_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_lead"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:lead_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/10</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_copper"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:copper_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/11</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_iron"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:iron_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/12</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_gold"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:gold_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/13</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_allthemodium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:allthemodium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/14</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_vibranium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:vibranium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/15</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_unobtainium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "allthemodium:unobtainium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/16</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:clean_crimson_iron"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:crimson_iron_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/17</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:clean_azure_silver"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:azure_silver_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/18</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:lithium"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_lithium"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/19</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:brine"
-      }
-      amount: 480
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:salt"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_osmium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:osmium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/20</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:antimatter"
-      }
-      amount: 32000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:pellet_antimatter"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_nickel"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:nickel_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_platinum"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:platinum_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/5</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_silver"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:silver_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/6</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_tin"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:tin_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/7</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_uranium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:uranium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/8</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_zinc"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:zinc_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_crystallizer/9</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_crystallizer"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_iridium"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:iridium_crystal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:aluminum_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_aluminum"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_aluminum"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_aluminum"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/10</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_nickel"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_nickel"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/11</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_nickel_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_nickel"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/12</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:platinum_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_platinum"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/13</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_platinum"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_platinum"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/14</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_platinum_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_platinum"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/15</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:silver_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_silver"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/16</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_silver"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_silver"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/17</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_silver_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_silver"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/18</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:tin_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_tin"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/19</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_tin"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_tin"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_aluminum_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_aluminum"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/20</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_tin_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_tin"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/21</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:uranium_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_uranium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/22</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_uranium"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_uranium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/23</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_uranium_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_uranium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/24</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:zinc_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_zinc"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/25</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_zinc"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_zinc"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/26</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_zinc_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_zinc"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/27</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:iridium_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iridium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/28</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_iridium"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iridium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/29</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_iridium_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iridium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:lead_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_lead"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/30</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:copper_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_copper"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/31</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_copper"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_copper"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/32</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_copper_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_copper"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/33</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iron"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/34</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_iron"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iron"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/35</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_iron_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iron"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/36</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:gold_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_gold"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/37</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_gold"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_gold"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/38</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:raw_gold_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_gold"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/39</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:ores/allthemodium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_allthemodium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_lead"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_lead"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/40</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:raw_materials/allthemodium"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_allthemodium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/41</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:storage_blocks/raw_allthemodium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_allthemodium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/42</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:ores/vibranium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_vibranium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/43</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:raw_materials/vibranium"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_vibranium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/44</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:storage_blocks/raw_vibranium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_vibranium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/45</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:ores/unobtainium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_unobtainium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/46</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:raw_materials/unobtainium"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_unobtainium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/47</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:storage_blocks/raw_unobtainium"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_unobtainium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/48</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:ores/crimson_iron"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_crimson_iron"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/49</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:raw_materials/crimson_iron"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_crimson_iron"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/5</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_lead_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_lead"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/50</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:storage_blocks/raw_crimson_iron"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_crimson_iron"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/51</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:ores/azure_silver"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_azure_silver"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/52</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:raw_materials/azure_silver"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_azure_silver"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/53</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:storage_blocks/raw_azure_silver"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_azure_silver"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/6</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:osmium_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_osmium"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/7</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_osmium"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_osmium"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/8</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:raw_osmium_block"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_osmium"
-      }
-      amount: 96000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_dissolution_chamber/9</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_dissolution_chamber"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 17
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:nickel_ore"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1600
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_nickel"
-      }
-      amount: 16000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_infuser/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_infuser"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanismgenerators:deuterium"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanismgenerators:tritium"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanismgenerators:fusion_fuel"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_infuser/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_infuser"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfur_trioxide"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:water_vapor"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfuric_acid"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_infuser/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_infuser"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:chlorine"
-      }
-      amount: 2048
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen_chloride"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_infuser/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_infuser"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfur_dioxide"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfur_trioxide"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_infuser/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_infuser"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrofluoric_acid"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:uranium_oxide"
-      }
-      amount: 1024
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:uranium_hexafluoride"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "productivebees:configurable_honeycomb"
-          components: {
-            productivebees:bee_type: "productivebees:wasted_radioactive"
-          }
-          type: "neoforge:components"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:nuclear_waste"
-      }
-      amount: 1600
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_refined_obsidian"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:refined_obsidian"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/10</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:dusts/refined_obsidian"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:refined_obsidian"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/11</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "productivebees:configurable_comb"
-          components: {
-            productivebees:bee_type: "productivebees:wasted_radioactive"
-          }
-          type: "neoforge:components"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:nuclear_waste"
-      }
-      amount: 6400
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/12</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "productivebees:configurable_comb"
-          components: {
-            productivebees:bee_type: "productivebees:lithium"
-          }
-          type: "neoforge:components"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:lithium"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/13</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:pellets/antimatter"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:antimatter"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/14</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:block_charcoal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:carbon"
-      }
-      amount: 5760
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/15</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:reprocessed_fissile_fragment"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:fissile_fuel"
-      }
-      amount: 64000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/16</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone_block"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:redstone"
-      }
-      amount: 2880
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/17</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_carbon"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:carbon"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/18</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:gold_dust"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:gold"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/19</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:diamond_dust"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:diamond"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_charcoal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:carbon"
-      }
-      amount: 640
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/20</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:fuels/block/bio"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:bio"
-      }
-      amount: 1440
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/21</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_coal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:carbon"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/22</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:redstone"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/23</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_diamond"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:diamond"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/24</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_tin"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:tin"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/25</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:tin_dust"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:tin"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/26</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_gold"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:gold"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/27</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:mushrooms"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:fungi"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/28</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:enriched_redstone"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:redstone"
-      }
-      amount: 2560
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:dusts/salt"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:brine"
-      }
-      amount: 480
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:yellow_cake_uranium"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:uranium_oxide"
-      }
-      amount: 8000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/5</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:dusts/lithium"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:lithium"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/6</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:coal_block"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:carbon"
-      }
-      amount: 2880
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/7</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "productivebees:configurable_honeycomb"
-          components: {
-            productivebees:bee_type: "productivebees:lithium"
-          }
-          type: "neoforge:components"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:lithium"
-      }
-      amount: 320
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/8</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:sulfur"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sulfur_dioxide"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_oxidizer/9</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_oxidizer"
-  time: 10
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:fuels/bio"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:bio"
-      }
-      amount: 160
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_aluminum"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_aluminum"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_lead"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_lead"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/10</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_copper"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_copper"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/11</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iron"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_iron"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/12</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_gold"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_gold"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/13</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_allthemodium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_allthemodium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/14</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_vibranium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_vibranium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/15</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:dirty_unobtainium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "allthemodium:clean_unobtainium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/16</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_crimson_iron"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:clean_crimson_iron"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/17</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:dirty_azure_silver"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "kubejs:clean_azure_silver"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_osmium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_osmium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_nickel"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_nickel"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_platinum"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_platinum"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/5</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_silver"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_silver"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/6</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_tin"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_tin"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/7</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_uranium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_uranium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/8</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_zinc"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_zinc"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/chemical_washer/9</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 62
-    y: 26
-  }
-  width: 126
-  machine: "atm:chemical_washer"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 256000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:dirty_iridium"
-      }
-      amount: 1000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 5000
-      position: {
-        x: 31
-        y: 36
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "alltheores:clean_iridium"
-      }
-      amount: 800
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/electrolytic_seperator/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:electrolytic_seperator"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "mekanism:heavy_water"
-      mode: "INPUT"
-      amount: 2048
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanismgenerators:deuterium"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/electrolytic_seperator/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:electrolytic_seperator"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "mekanism:brine"
-      mode: "INPUT"
-      amount: 10240
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:sodium"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:chlorine"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/electrolytic_seperator/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:electrolytic_seperator"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 2048
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 1024
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/isotopic_centrifuge/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:isotopic_centrifuge"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:nuclear_waste"
-      }
-      amount: 10240
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:plutonium"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/isotopic_centrifuge/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:isotopic_centrifuge"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 524288
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:uranium_hexafluoride"
-      }
-      amount: 2048
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 26
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:fissile_fuel"
-      }
-      amount: 2048
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/0</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:fluorite_dust"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 32000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:polonium"
-      }
-      amount: 32000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:pellet_polonium"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:spent_nuclear_waste"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/1</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:fluorite_dust"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 32000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:plutonium"
-      }
-      amount: 32000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:pellet_plutonium"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:spent_nuclear_waste"
-      }
-      amount: 32000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/10</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 16384
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "minecraft:logs"
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 6400
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 6400
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_charcoal"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 6400
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/11</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 4096
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:substrate"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 1600
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:ethene"
-      }
-      amount: 80
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:substrate"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 80
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/12</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 20
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 4681
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:coal_block"
-            count: 1
-          }
-        }
-        count: 7
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 7000
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 7000
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:sulfur"
-            count: 1
-          }
-        }
-        count: 63
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 7000
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/2</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      modified_by_a_u: true
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_coal"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 3200
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:sulfur"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/3</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "minecraft:coals"
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 3200
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:sulfur"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/4</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:bio_fuel"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 320
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 3200
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 17
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:substrate"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:ethene"
-      }
-      amount: 3200
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 36
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/5</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 32768
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:substrate"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "mekanism:ethene"
-      mode: "INPUT"
-      amount: 1600
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 320
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 100
-        y: 26
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:hdpe_pellet"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/6</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 50
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 16384
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "minecraft:wooden_stairs"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 480
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 240
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 240
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/7</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 50
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 16384
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "minecraft:wooden_slabs"
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 320
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 160
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 160
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/8</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 50
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 16384
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:rods/wooden"
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 320
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 160
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 160
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/pressurized_reaction_chamber/9</summary>

```diff
-{
-  height: 84
-  progress_position: {
-    x: 64
-    y: 26
-  }
-  width: 126
-  machine: "atm:pressurized_reaction_chamber"
-  time: 50
-  requirements: [
-    {
-      type: "modular_machinery_reborn:energy"
-      amount: 16384
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 9
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          tag: "c:dusts/wood"
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 160
-      position: {
-        x: 31
-        y: 27
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:oxygen"
-      }
-      amount: 80
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 46
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:hydrogen"
-      }
-      amount: 80
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 26
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_crucible/0</summary>

```diff
-{
-  height: 49
-  progress_position: {
-    x: 82
-    y: 8
-  }
-  width: 148
-  machine: "atm:runic_crucible"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 46
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:arcane_crystal_dust"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "minecraft:water"
-      mode: "INPUT"
-      amount: 250
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:source"
-      source: 1000
-      mode: "INPUT"
-      position: {
-        x: 27
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "OUTPUT"
-      amount: 250
-      position: {
-        x: 122
-        y: 8
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_crucible/1</summary>

```diff
-{
-  height: 49
-  progress_position: {
-    x: 82
-    y: 8
-  }
-  width: 148
-  machine: "atm:runic_crucible"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 46
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:unrefined_liquid_souls"
-      mode: "INPUT"
-      amount: 500
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2000
-      mode: "INPUT"
-      position: {
-        x: 27
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "OUTPUT"
-      amount: 500
-      position: {
-        x: 122
-        y: 8
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_crucible/2</summary>

```diff
-{
-  height: 49
-  progress_position: {
-    x: 101
-    y: 9
-  }
-  width: 167
-  machine: "atm:runic_crucible"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_aureal"
-      mode: "INPUT"
-      amount: 1000
-      position: {
-        x: 27
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 46
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 65
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "reliquary:holy_hand_grenade"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 141
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:enchanted_soul"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_crucible/3</summary>

```diff
-{
-  height: 49
-  progress_position: {
-    x: 101
-    y: 9
-  }
-  width: 167
-  machine: "atm:runic_crucible"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 27
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:corrupti_dust"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 46
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:soul"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 65
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "eternal_starlight:trapped_soul"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 141
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:corrupt_soul"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_crucible/4</summary>

```diff
-{
-  height: 49
-  progress_position: {
-    x: 101
-    y: 9
-  }
-  width: 167
-  machine: "atm:runic_crucible"
-  time: 150
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "kubejs:liquid_souls"
-      mode: "INPUT"
-      amount: 500
-      position: {
-        x: 27
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 46
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mekanism:dust_obsidian"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 65
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "alltheores:steel_ingot"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 141
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "forbidden_arcanus:obsidiansteel_ingot"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/0</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 560
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:prosperity_shard"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:writable_book"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:inferium_essence"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/1</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 4000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1120
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:experience_essence"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:prudentium_essence"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/10</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 700
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:dark_steel_ingot"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:protection: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/100</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:slime_ball"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:silk_touch: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/101</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:soul_soil"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:soul_speed: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/102</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:soul_soil"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:soul_speed: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/103</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:soul_soil"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:soul_speed: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/104</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:feather"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:feather_falling: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/105</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:feather"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:feather_falling: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/106</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 7500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2100
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:feather"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:feather_falling: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/107</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2660
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:feather"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:feather_falling: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/108</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rotten_flesh"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:smite: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/109</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rotten_flesh"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:smite: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/11</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1540
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:dark_steel_ingot"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:protection: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/110</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rotten_flesh"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:smite: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/111</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3360
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rotten_flesh"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:smite: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/112</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 15000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 4200
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rotten_flesh"
-            count: 1
-          }
-        }
-        count: 60
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:smite: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/113</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 22500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 6300
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:scrap_tome"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:improved_scrap_tome"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/114</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 30000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 8400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:improved_scrap_tome"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:extraction_tome"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/115</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 35000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 9800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:echo_shard"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:echo_shard"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/116</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 50000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 14000
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:honey_bottle"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:experience_bottle"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/117</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 30000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 8400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:amethyst_block"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:budding_amethyst"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/118</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 30000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 8400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:dormant_deepshelf"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:deepshelf"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/119</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 40000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 11200
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:dragon_breath"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:infused_breath"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/12</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2660
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:dark_steel_ingot"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:protection: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/120</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 22500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 6300
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:hellshelf"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "apothic_enchanting:infused_hellshelf"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/13</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 14000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3920
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:dark_steel_ingot"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:protection: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/14</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 560
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:leather"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:projectile_protection: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/15</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 4500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1260
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:leather"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:projectile_protection: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/16</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:leather"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:projectile_protection: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/17</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:leather"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:projectile_protection: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/18</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:sugar"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:quick_charge: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/19</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3640
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:sugar"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:quick_charge: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/2</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:experience_essence"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:tertium_essence"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/20</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 20500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 5740
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:sugar"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:quick_charge: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/21</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:spider_eye"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:bane_of_arthropods: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/22</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:spider_eye"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:bane_of_arthropods: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/23</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:spider_eye"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:bane_of_arthropods: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/24</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3360
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:spider_eye"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:bane_of_arthropods: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/25</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 15000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 4200
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:spider_eye"
-            count: 1
-          }
-        }
-        count: 60
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:bane_of_arthropods: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/26</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_sword"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sweeping_edge: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/27</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_sword"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sweeping_edge: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/28</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2660
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_sword"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sweeping_edge: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/29</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:glass_bottle"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:respiration: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/3</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2240
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:experience_essence"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:imperium_essence"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/30</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:glass_bottle"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:respiration: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/31</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:glass_bottle"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:respiration: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/32</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:string"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:punch: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/33</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3640
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:string"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:punch: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/34</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:obsidian"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:unbreaking: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/35</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:obsidian"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:unbreaking: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/36</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:obsidian"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:unbreaking: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/37</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 700
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_crystals"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:piercing: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/38</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_crystals"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:piercing: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/39</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_crystals"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:piercing: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/4</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:experience_essence"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "mysticalagriculture:supremium_essence"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/40</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_crystals"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:piercing: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/41</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 700
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:efficiency: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/42</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:efficiency: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/43</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:efficiency: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/44</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:efficiency: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/45</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 16500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 4620
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:redstone"
-            count: 1
-          }
-        }
-        count: 60
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:efficiency: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/46</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 1500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 420
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lily_pad"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:aqua_affinity: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/47</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_shard"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:depth_strider: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/48</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_shard"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:depth_strider: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/49</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:prismarine_shard"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:depth_strider: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/5</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 560
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ingot"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:impaling: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/50</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:emerald"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fortune: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/51</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:emerald"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fortune: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/52</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3780
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:emerald"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fortune: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/53</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1540
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lead"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:loyalty: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/54</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2240
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lead"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:loyalty: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/55</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 11000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3080
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lead"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:loyalty: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/56</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:magma_cream"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_protection: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/57</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2240
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:magma_cream"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_protection: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/58</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3360
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:magma_cream"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_protection: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/59</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 14000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3920
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:magma_cream"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_protection: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/6</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 4500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1260
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ingot"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:impaling: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/60</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 700
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:power: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/61</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:power: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/62</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:power: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/63</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:power: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/64</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 16500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 4620
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:flint"
-            count: 1
-          }
-        }
-        count: 60
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:power: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/65</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 7500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2100
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:firework_rocket"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:riptide: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/66</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:firework_rocket"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:riptide: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/67</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:firework_rocket"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:riptide: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/68</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2940
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:void_vial"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:mending: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/69</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "enderio:grains_of_infinity"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:infinity: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/7</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 7500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2100
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ingot"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:impaling: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/70</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:cod"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:lure: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/71</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:cod"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:lure: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/72</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3780
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:cod"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:lure: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/73</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:piston"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:knockback: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/74</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2940
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:piston"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:knockback: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/75</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:arrow"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:multishot: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/76</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1400
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:ice"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:frost_walker: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/77</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:ice"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:frost_walker: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/78</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2940
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lightning_rod"
-            count: 1
-          }
-        }
-        count: 11
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:channeling: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/79</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:skeleton_skull"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:looting: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/8</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2940
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ingot"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:impaling: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/80</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:skeleton_skull"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:looting: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/81</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3780
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:skeleton_skull"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:looting: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/82</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:blaze_rod"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_aspect: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/83</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3360
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:blaze_rod"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:fire_aspect: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/84</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 3000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 840
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:gunpowder"
-            count: 1
-          }
-        }
-        count: 16
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:blast_protection: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/85</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:gunpowder"
-            count: 1
-          }
-        }
-        count: 32
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:blast_protection: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/86</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2520
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:gunpowder"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:blast_protection: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/87</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3360
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:gunpowder"
-            count: 1
-          }
-        }
-        count: 64
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:blast_protection: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/88</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 8500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2380
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:netherrack"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:flame: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/89</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1820
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:nautilus_shell"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:luck_of_the_sea: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/9</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3780
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:iron_ingot"
-            count: 1
-          }
-        }
-        count: 40
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:impaling: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/90</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 10000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2800
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:nautilus_shell"
-            count: 1
-          }
-        }
-        count: 2
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:luck_of_the_sea: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/91</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 13500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3780
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:nautilus_shell"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:luck_of_the_sea: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/92</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 6000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1680
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rose_bush"
-            count: 1
-          }
-        }
-        count: 4
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:thorns: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/93</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 12500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3500
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rose_bush"
-            count: 1
-          }
-        }
-        count: 8
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:thorns: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/94</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 20000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 5600
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:rose_bush"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:thorns: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/95</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 2500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 700
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:inferium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 3
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sharpness: 1
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/96</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 5500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 1540
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-        count: 24
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:prudentium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 6
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sharpness: 2
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/97</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 9500
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 2660
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-        count: 36
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:tertium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 9
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sharpness: 3
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/98</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 14000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 3920
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-        count: 48
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:imperium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 12
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sharpness: 4
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/runic_enchanter/99</summary>

```diff
-{
-  height: 87
-  progress_position: {
-    x: 67
-    y: 28
-  }
-  width: 133
-  machine: "atm:runic_enchanter"
-  time: 100
-  requirements: [
-    {
-      type: "modular_machinery_reborn:source"
-      source: 18000
-      mode: "INPUT"
-      position: {
-        x: 8
-        y: 17
-      }
-    }
-    {
-      type: "modular_machinery_reborn:fluid"
-      fluid: "justdirethings:xp_fluid_source"
-      mode: "INPUT"
-      amount: 5040
-      position: {
-        x: 8
-        y: 37
-      }
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 8
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:quartz"
-            count: 1
-          }
-        }
-        count: 60
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "kubejs:supremium_enchanting_base"
-            count: 1
-          }
-        }
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 31
-        y: 46
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          item: {
-            id: "minecraft:lapis_lazuli"
-            count: 1
-          }
-        }
-        count: 15
-      }
-      mode: "INPUT"
-    }
-    {
-      type: "modular_machinery_reborn:item"
-      position: {
-        x: 107
-        y: 27
-      }
-      uses_data_components: true
-      sized_ingredient: {
-        ingredient: {
-          items: "minecraft:enchanted_book"
-          components: {
-            minecraft:stored_enchantments: {
-              levels: {
-                minecraft:sharpness: 5
-              }
-            }
-          }
-          type: "neoforge:components"
-        }
-      }
-      mode: "OUTPUT"
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/solar_neutron_activator/0</summary>

```diff
-{
-  height: 44
-  progress_position: {
-    x: 64
-    y: 8
-  }
-  width: 126
-  machine: "atm:solar_neutron_activator"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:time"
-      range: "[0,12000]"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:nuclear_waste"
-      }
-      amount: 20480
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:polonium"
-      }
-      amount: 4096
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 8
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>kubejs/machine_recipe/atm/solar_neutron_activator/1</summary>

```diff
-{
-  height: 44
-  progress_position: {
-    x: 64
-    y: 8
-  }
-  width: 126
-  machine: "atm:solar_neutron_activator"
-  time: 5
-  requirements: [
-    {
-      type: "modular_machinery_reborn:time"
-      range: "[0,12000]"
-      position: {
-        x: 8
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanism:lithium"
-      }
-      amount: 4096
-      mode: "INPUT"
-      position: {
-        x: 31
-        y: 8
-      }
-    }
-    {
-      type: "modular_machinery_reborn:chemical"
-      chemical: {
-        chemical: "mekanismgenerators:tritium"
-      }
-      amount: 4096
-      mode: "OUTPUT"
-      position: {
-        x: 100
-        y: 8
-      }
-    }
-  ]
-  type: "modular_machinery_reborn:machine_recipe"
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_auto_forge</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:auto_forge"
-    count: 1
-  }
-  ingredients: [
-    {
-      items: "modular_machinery_reborn:controller"
-      components: {
-        modular_machinery_reborn:machine: "atm:auto_hepheastus_forge"
-      }
-      type: "neoforge:components"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_crucible</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_crucible"
-    count: 1
-  }
-  ingredients: [
-    {
-      items: "modular_machinery_reborn:controller"
-      components: {
-        modular_machinery_reborn:machine: "atm:runic_crucible"
-      }
-      type: "neoforge:components"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_enchanter</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_enchanter"
-    count: 1
-  }
-  ingredients: [
-    {
-      items: "modular_machinery_reborn:controller"
-      components: {
-        modular_machinery_reborn:machine: "atm:runic_enchanter"
-      }
-      type: "neoforge:components"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_energy_input_hatch</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_energy_input_hatch"
-    count: 1
-  }
-  ingredients: [
-    {
-      item: "modular_machinery_reborn:energyinputhatch_ultimate"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_fluid_input_hatch_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_fluid_input_hatch"
-    count: 1
-  }
-  ingredients: [
-    {
-      item: "modular_machinery_reborn:fluidoutputhatch_vacuum"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_fluid_output_hatch_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_fluid_output_hatch"
-    count: 1
-  }
-  ingredients: [
-    {
-      item: "modular_machinery_reborn:fluidinputhatch_vacuum"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_item_input_hatch_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_item_input_hatch"
-    count: 1
-  }
-  ingredients: [
-    {
-      item: "modular_machinery_reborn:inputbus_ludicrous"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_runic_item_output_hatch_2</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:runic_item_output_hatch"
-    count: 1
-  }
-  ingredients: [
-    {
-      item: "modular_machinery_reborn:outputbus_ludicrous"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modern_industrialization_star_altar</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  result: {
-    id: "modern_industrialization:star_altar"
-    count: 1
-  }
-  ingredients: [
-    {
-      items: "modular_machinery_reborn:controller"
-      components: {
-        modular_machinery_reborn:machine: "atm:runic_star_altar"
-      }
-      type: "neoforge:components"
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    y: {
-      item: "ars_nouveau:relay_deposit"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    y: {
-      item: "ars_nouveau:relay_deposit"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceinputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceinputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:relay_collector"
-    }
-    y: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:relay_collector"
-    }
-    y: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_ars_sourceoutputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_ars:sourceoutputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "ars_nouveau:source_jar"
-    }
-    c: {
-      item: "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_blueprint</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:blueprint"
-    count: 1
-  }
-  pattern: [
-    "plp"
-    "pwp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    l: {
-      item: "actuallyadditions:lens_of_color"
-    }
-    w: {
-      item: "actuallyadditions:laser_wrench"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_circuitry</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_circuitry"
-    count: 4
-  }
-  pattern: [
-    "cbc"
-    "ame"
-    "cuc"
-  ]
-  key: {
-    a: {
-      item: "mekanism:advanced_control_circuit"
-    }
-    b: {
-      item: "mekanism:basic_control_circuit"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-    e: {
-      item: "mekanism:elite_control_circuit"
-    }
-    u: {
-      item: "mekanism:ultimate_control_circuit"
-    }
-    m: {
-      item: "modern_industrialization:electronic_circuit"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_firebox</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_firebox"
-    count: 4
-  }
-  pattern: [
-    "csc"
-    "shs"
-    "csc"
-  ]
-  key: {
-    h: {
-      item: "pneumaticcraft:heat_pipe"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_vent"
-    }
-    s: {
-      item: "railcraft:refined_firestone"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_gearbox</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_gearbox"
-    count: 1
-  }
-  pattern: [
-    "idi"
-    "dcd"
-    "idi"
-  ]
-  key: {
-    d: {
-      item: "enderio:dark_bimetal_gear"
-    }
-    i: {
-      item: "alltheores:iron_gear"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_plain</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_plain"
-    count: 2
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    c: {
-      item: "enderio:sentient_ender"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_reinforced"
-    count: 4
-  }
-  pattern: [
-    "oco"
-    "cdc"
-    "oco"
-  ]
-  key: {
-    d: {
-      item: "enderio:dark_steel_block"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-    o: {
-      item: "enderio:reinforced_obsidian_block"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_casing_vent</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:casing_vent"
-    count: 2
-  }
-  pattern: [
-    "vvc"
-    "vpv"
-    "cvv"
-  ]
-  key: {
-    p: {
-      item: "pneumaticcraft:pressure_tube"
-    }
-    v: {
-      item: "pneumaticcraft:air_grate_module"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_energy_cube"
-    }
-    y: {
-      item: "mekanism:advanced_induction_provider"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_energy_cube"
-    }
-    y: {
-      item: "mekanism:basic_induction_provider"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyinputhatch_ultimate</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyinputhatch_ultimate"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyinputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_induction_provider"
-    }
-    y: {
-      item: "mekanism:advanced_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_induction_provider"
-    }
-    y: {
-      item: "mekanism:basic_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_energyoutputhatch_ultimate</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:energyoutputhatch_ultimate"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_energy_cube"
-    }
-    c: {
-      item: "modular_machinery_reborn:energyoutputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_fluid_tank"
-    }
-    y: {
-      item: "pneumaticcraft:liquid_hopper"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_fluid_tank"
-    }
-    y: {
-      item: "pneumaticcraft:liquid_hopper"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidinputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidinputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidinputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "pneumaticcraft:liquid_hopper"
-    }
-    y: {
-      item: "mekanism:advanced_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "pneumaticcraft:liquid_hopper"
-    }
-    y: {
-      item: "mekanism:basic_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_fluidoutputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:fluidoutputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_fluid_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_big"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:gold_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:inputbus_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_huge"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:diamond_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:inputbus_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:netherite_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:inputbus_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_normal"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:copper_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:inputbus_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:iron_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    y: {
-      item: "enderio:impulse_hopper"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_small"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      tag: "c:chests"
-    }
-    c: {
-      item: "modular_machinery_reborn:inputbus_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_inputbus_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:inputbus_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      tag: "c:chests"
-    }
-    y: {
-      item: "enderio:impulse_hopper"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_chemical_tank"
-    }
-    y: {
-      item: "enderio:basic_chemical_filter"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_chemical_tank"
-    }
-    y: {
-      item: "enderio:basic_chemical_filter"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicalinputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "ppp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:elite_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_normal"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:advanced_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "enderio:basic_chemical_filter"
-    }
-    y: {
-      item: "mekanism:advanced_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:basic_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "enderio:basic_chemical_filter"
-    }
-    y: {
-      item: "mekanism:basic_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_mekanism_chemicaloutputhatch_vacuum</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "mekanism:ultimate_chemical_tank"
-    }
-    c: {
-      item: "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_big</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_big"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:gold_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:outputbus_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_huge</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_huge"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:diamond_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:outputbus_big"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_ludicrous</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_ludicrous"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:netherite_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:outputbus_huge"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_normal</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_normal"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      items: "sophisticatedstorage:copper_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:outputbus_small"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_reinforced</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_reinforced"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "enderio:impulse_hopper"
-    }
-    y: {
-      items: "sophisticatedstorage:iron_chest"
-      components: {
-        sophisticatedstorage:wood_type: "oak"
-      }
-      type: "neoforge:components"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_reinforced"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_small</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_small"
-    count: 1
-  }
-  pattern: [
-    "ppp"
-    "pcp"
-    "pxp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      tag: "c:chests"
-    }
-    c: {
-      item: "modular_machinery_reborn:outputbus_tiny"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_outputbus_tiny</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:outputbus_tiny"
-    count: 1
-  }
-  pattern: [
-    "pxp"
-    "pcp"
-    "pyp"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    x: {
-      item: "enderio:impulse_hopper"
-    }
-    y: {
-      tag: "c:chests"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>minecraft/kjs/modular_machinery_reborn_time_counter</summary>

```diff
-{
-  type: "minecraft:crafting_shaped"
-  result: {
-    id: "modular_machinery_reborn:time_counter"
-    count: 1
-  }
-  pattern: [
-    "psp"
-    "bct"
-    "php"
-  ]
-  key: {
-    p: {
-      item: "kubejs:modularium_plate"
-    }
-    h: {
-      item: "naturesaura:clock_hand"
-    }
-    b: {
-      items: "productivebees:spawn_egg_configurable_bee"
-      components: {
-        minecraft:entity_data: {
-          type: "productivebees:time_crystal"
-          id: "productivebees:configurable_bee"
-        }
-      }
-      type: "neoforge:components"
-    }
-    s: {
-      item: "productivelib:upgrade_time_2"
-    }
-    c: {
-      item: "modular_machinery_reborn:casing_plain"
-    }
-    t: {
-      item: "productivetrees:time_traveller_sapling"
-    }
-  }
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/3ggrzj1s45bl9idd21typmflb</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 1024
-  duration: 100
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:modularium"
-      amount: 24
-    }
-  ]
-  item_inputs: [
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "allthemodium:allthemodium_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 5000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 5000
-    }
-    {
-      tag: "c:experience"
-      amount: 1000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/4vgkwbvo2ivltlz4git7sql2i</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:chemical_crystallizer"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:chemical_crystallizer"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/5eiipuvkwgt0wnkke3mk7twnp</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:chemical_washer"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:chemical_washer"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/5g370tvlwcbkqw2jgylzdwpc5</summary>

```diff
-{
-  type: "modern_industrialization:compressor"
-  eu: 2
-  duration: 200
-  item_outputs: [
-    {
-      item: "kubejs:modularium_plate"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "modular_machinery_reborn:modularium"
-      amount: 1
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/5whwht15f9u2fh1wkaq9uact9</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:pressurized_reaction_chamber"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:pressurized_reaction_chamber"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/8ux6e7t9m0st99077yt27tls4</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:chemical_dissolution_chamber"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:chemical_dissolution_chamber"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/9f8ny3m79y5kq3wgf6joz2epi</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:chemical_infuser"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:chemical_infuser"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/agwuh6evf8hv0ebzwf145iily</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:chemical_oxidizer"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:chemical_oxidizer"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/awt9ldnqxngz0ri32tqjiqhas</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:electrolytic_seperator"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:electrolytic_separator"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/b3nt5ts6n9h03dhut5tf8gdlz</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 1024
-  duration: 100
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:modularium"
-      amount: 48
-    }
-  ]
-  item_inputs: [
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "allthemodium:unobtainium_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 5000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 5000
-    }
-    {
-      tag: "c:experience"
-      amount: 1000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/ds25aemlg5ol5ls9qown7wfz7</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 1024
-  duration: 100
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:modularium"
-      amount: 32
-    }
-  ]
-  item_inputs: [
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "allthemodium:vibranium_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "enderio:end_steel_ingot"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:deorum_ingot"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 5000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 5000
-    }
-    {
-      tag: "c:experience"
-      amount: 1000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/e25m4skzyvspo1n38v6nxo56u</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:solar_neutron_activator"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:solar_neutron_activator"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/e94nkogjwahx4hprr2aoza7lt</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modular_machinery_reborn:controller"
-      amount: 1
-      components: {
-        modular_machinery_reborn:machine: "atm:isotopic_centrifuge"
-      }
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:isotopic_centrifuge"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "modular_machinery_reborn:casing_plain"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-  ]
-  fluid_inputs: [
-    {
-      fluid: "kubejs:liquid_aureal"
-      amount: 25000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: true
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Changed (3)</summary>
<blockquote>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (246 entries)
-  "#modular_machinery_reborn:all_casing"
   ... (8494 entries)
-  "modular_machinery_reborn:controller"
   ... (4156 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_stone_tool</summary>

```diff
 [
   ... (16 entries)
-  "#modular_machinery_reborn:all_casing"
   ... (1923 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/allthemods:jank_blacklist</summary>

```diff
 [
   ... (4 entries)
+  "evilcraft:vengeance_spirit"
   ... (145 entries)
 ]

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (43)</summary>
<blockquote>

<details>
<summary>minecraft:block/modular_machinery_reborn:all_casing</summary>

```diff
-[
-  "#modular_machinery_reborn:casing"
-  "#modular_machinery_reborn:energyhatch"
-  "#modular_machinery_reborn:experiencehatch"
-  "#modular_machinery_reborn:fluidhatch"
-  "#modular_machinery_reborn:itembus"
-  "#modular_machinery_reborn:parallelhatch"
-  "#modular_machinery_reborn_ars:sourceinputhatch"
-  "#modular_machinery_reborn_ars:sourceoutputhatch"
-  "#modular_machinery_reborn_mekanism:chemicalinputhatch"
-  "#modular_machinery_reborn_mekanism:chemicaloutputhatch"
-  "modular_machinery_reborn:biome_reader"
-  "modular_machinery_reborn:chunkloader"
-  "modular_machinery_reborn:dimensional_detector"
-  "modular_machinery_reborn:height_meter"
-  "modular_machinery_reborn:time_counter"
-  "modular_machinery_reborn:weather_sensor"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:casing</summary>

```diff
-[
-  "modular_machinery_reborn:casing_circuitry"
-  "modular_machinery_reborn:casing_firebox"
-  "modular_machinery_reborn:casing_gearbox"
-  "modular_machinery_reborn:casing_plain"
-  "modular_machinery_reborn:casing_reinforced"
-  "modular_machinery_reborn:casing_vent"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:energyhatch</summary>

```diff
-[
-  "#modular_machinery_reborn:energyinputhatch"
-  "#modular_machinery_reborn:energyoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:energyinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:energyinputhatch_big"
-  "modular_machinery_reborn:energyinputhatch_huge"
-  "modular_machinery_reborn:energyinputhatch_ludicrous"
-  "modular_machinery_reborn:energyinputhatch_normal"
-  "modular_machinery_reborn:energyinputhatch_reinforced"
-  "modular_machinery_reborn:energyinputhatch_small"
-  "modular_machinery_reborn:energyinputhatch_tiny"
-  "modular_machinery_reborn:energyinputhatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:energyoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:energyoutputhatch_big"
-  "modular_machinery_reborn:energyoutputhatch_huge"
-  "modular_machinery_reborn:energyoutputhatch_ludicrous"
-  "modular_machinery_reborn:energyoutputhatch_normal"
-  "modular_machinery_reborn:energyoutputhatch_reinforced"
-  "modular_machinery_reborn:energyoutputhatch_small"
-  "modular_machinery_reborn:energyoutputhatch_tiny"
-  "modular_machinery_reborn:energyoutputhatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:experiencehatch</summary>

```diff
-[
-  "#modular_machinery_reborn:experienceinputhatch"
-  "#modular_machinery_reborn:experienceoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:experienceinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:experienceinputhatch_big"
-  "modular_machinery_reborn:experienceinputhatch_huge"
-  "modular_machinery_reborn:experienceinputhatch_ludicrous"
-  "modular_machinery_reborn:experienceinputhatch_normal"
-  "modular_machinery_reborn:experienceinputhatch_reinforced"
-  "modular_machinery_reborn:experienceinputhatch_small"
-  "modular_machinery_reborn:experienceinputhatch_tiny"
-  "modular_machinery_reborn:experienceinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:experienceoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:experienceoutputhatch_big"
-  "modular_machinery_reborn:experienceoutputhatch_huge"
-  "modular_machinery_reborn:experienceoutputhatch_ludicrous"
-  "modular_machinery_reborn:experienceoutputhatch_normal"
-  "modular_machinery_reborn:experienceoutputhatch_reinforced"
-  "modular_machinery_reborn:experienceoutputhatch_small"
-  "modular_machinery_reborn:experienceoutputhatch_tiny"
-  "modular_machinery_reborn:experienceoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:fluidhatch</summary>

```diff
-[
-  "#modular_machinery_reborn:fluidinputhatch"
-  "#modular_machinery_reborn:fluidoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:fluidinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:fluidinputhatch_big"
-  "modular_machinery_reborn:fluidinputhatch_huge"
-  "modular_machinery_reborn:fluidinputhatch_ludicrous"
-  "modular_machinery_reborn:fluidinputhatch_normal"
-  "modular_machinery_reborn:fluidinputhatch_reinforced"
-  "modular_machinery_reborn:fluidinputhatch_small"
-  "modular_machinery_reborn:fluidinputhatch_tiny"
-  "modular_machinery_reborn:fluidinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:fluidoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:fluidoutputhatch_big"
-  "modular_machinery_reborn:fluidoutputhatch_huge"
-  "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-  "modular_machinery_reborn:fluidoutputhatch_normal"
-  "modular_machinery_reborn:fluidoutputhatch_reinforced"
-  "modular_machinery_reborn:fluidoutputhatch_small"
-  "modular_machinery_reborn:fluidoutputhatch_tiny"
-  "modular_machinery_reborn:fluidoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:inputbus</summary>

```diff
-[
-  "modular_machinery_reborn:inputbus_big"
-  "modular_machinery_reborn:inputbus_huge"
-  "modular_machinery_reborn:inputbus_ludicrous"
-  "modular_machinery_reborn:inputbus_normal"
-  "modular_machinery_reborn:inputbus_reinforced"
-  "modular_machinery_reborn:inputbus_small"
-  "modular_machinery_reborn:inputbus_tiny"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:itembus</summary>

```diff
-[
-  "#modular_machinery_reborn:inputbus"
-  "#modular_machinery_reborn:outputbus"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:outputbus</summary>

```diff
-[
-  "modular_machinery_reborn:outputbus_big"
-  "modular_machinery_reborn:outputbus_huge"
-  "modular_machinery_reborn:outputbus_ludicrous"
-  "modular_machinery_reborn:outputbus_normal"
-  "modular_machinery_reborn:outputbus_reinforced"
-  "modular_machinery_reborn:outputbus_small"
-  "modular_machinery_reborn:outputbus_tiny"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:parallelhatch</summary>

```diff
-[
-  "modular_machinery_reborn:parallel_hatch_advanced"
-  "modular_machinery_reborn:parallel_hatch_basic"
-  "modular_machinery_reborn:parallel_hatch_max"
-  "modular_machinery_reborn:parallel_hatch_medium"
-  "modular_machinery_reborn:parallel_hatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn:replaceable</summary>

```diff
-[
-  "#modular_machinery_reborn:all_casing"
-  "modular_machinery_reborn:controller"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_ars:sourcehatch</summary>

```diff
-[
-  "#modular_machinery_reborn_ars:sourceinputhatch"
-  "#modular_machinery_reborn_ars:sourceoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_ars:sourceinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_ars:sourceinputhatch_big"
-  "modular_machinery_reborn_ars:sourceinputhatch_huge"
-  "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceinputhatch_normal"
-  "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceinputhatch_small"
-  "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_ars:sourceoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_ars:sourceoutputhatch_big"
-  "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-  "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceoutputhatch_normal"
-  "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceoutputhatch_small"
-  "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_mekanism:chemicalhatch</summary>

```diff
-[
-  "#modular_machinery_reborn_mekanism:chemicalinputhatch"
-  "#modular_machinery_reborn_mekanism:chemicaloutputhatch"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_mekanism:chemicalinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:block/modular_machinery_reborn_mekanism:chemicaloutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:all_casing</summary>

```diff
-[
-  "#modular_machinery_reborn:casing"
-  "#modular_machinery_reborn:energyhatch"
-  "#modular_machinery_reborn:experiencehatch"
-  "#modular_machinery_reborn:fluidhatch"
-  "#modular_machinery_reborn:itembus"
-  "#modular_machinery_reborn:parallelhatch"
-  "#modular_machinery_reborn_ars:sourceinputhatch"
-  "#modular_machinery_reborn_ars:sourceoutputhatch"
-  "#modular_machinery_reborn_mekanism:chemicalinputhatch"
-  "#modular_machinery_reborn_mekanism:chemicaloutputhatch"
-  "modular_machinery_reborn:biome_reader"
-  "modular_machinery_reborn:chunkloader"
-  "modular_machinery_reborn:dimensional_detector"
-  "modular_machinery_reborn:height_meter"
-  "modular_machinery_reborn:time_counter"
-  "modular_machinery_reborn:weather_sensor"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:casing</summary>

```diff
-[
-  "modular_machinery_reborn:casing_circuitry"
-  "modular_machinery_reborn:casing_firebox"
-  "modular_machinery_reborn:casing_gearbox"
-  "modular_machinery_reborn:casing_plain"
-  "modular_machinery_reborn:casing_reinforced"
-  "modular_machinery_reborn:casing_vent"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:energyhatch</summary>

```diff
-[
-  "#modular_machinery_reborn:energyinputhatch"
-  "#modular_machinery_reborn:energyoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:energyinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:energyinputhatch_big"
-  "modular_machinery_reborn:energyinputhatch_huge"
-  "modular_machinery_reborn:energyinputhatch_ludicrous"
-  "modular_machinery_reborn:energyinputhatch_normal"
-  "modular_machinery_reborn:energyinputhatch_reinforced"
-  "modular_machinery_reborn:energyinputhatch_small"
-  "modular_machinery_reborn:energyinputhatch_tiny"
-  "modular_machinery_reborn:energyinputhatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:energyoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:energyoutputhatch_big"
-  "modular_machinery_reborn:energyoutputhatch_huge"
-  "modular_machinery_reborn:energyoutputhatch_ludicrous"
-  "modular_machinery_reborn:energyoutputhatch_normal"
-  "modular_machinery_reborn:energyoutputhatch_reinforced"
-  "modular_machinery_reborn:energyoutputhatch_small"
-  "modular_machinery_reborn:energyoutputhatch_tiny"
-  "modular_machinery_reborn:energyoutputhatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:experiencehatch</summary>

```diff
-[
-  "#modular_machinery_reborn:experienceinputhatch"
-  "#modular_machinery_reborn:experienceoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:experienceinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:experienceinputhatch_big"
-  "modular_machinery_reborn:experienceinputhatch_huge"
-  "modular_machinery_reborn:experienceinputhatch_ludicrous"
-  "modular_machinery_reborn:experienceinputhatch_normal"
-  "modular_machinery_reborn:experienceinputhatch_reinforced"
-  "modular_machinery_reborn:experienceinputhatch_small"
-  "modular_machinery_reborn:experienceinputhatch_tiny"
-  "modular_machinery_reborn:experienceinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:experienceoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:experienceoutputhatch_big"
-  "modular_machinery_reborn:experienceoutputhatch_huge"
-  "modular_machinery_reborn:experienceoutputhatch_ludicrous"
-  "modular_machinery_reborn:experienceoutputhatch_normal"
-  "modular_machinery_reborn:experienceoutputhatch_reinforced"
-  "modular_machinery_reborn:experienceoutputhatch_small"
-  "modular_machinery_reborn:experienceoutputhatch_tiny"
-  "modular_machinery_reborn:experienceoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:fluidhatch</summary>

```diff
-[
-  "#modular_machinery_reborn:fluidinputhatch"
-  "#modular_machinery_reborn:fluidoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:fluidinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:fluidinputhatch_big"
-  "modular_machinery_reborn:fluidinputhatch_huge"
-  "modular_machinery_reborn:fluidinputhatch_ludicrous"
-  "modular_machinery_reborn:fluidinputhatch_normal"
-  "modular_machinery_reborn:fluidinputhatch_reinforced"
-  "modular_machinery_reborn:fluidinputhatch_small"
-  "modular_machinery_reborn:fluidinputhatch_tiny"
-  "modular_machinery_reborn:fluidinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:fluidoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn:fluidoutputhatch_big"
-  "modular_machinery_reborn:fluidoutputhatch_huge"
-  "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-  "modular_machinery_reborn:fluidoutputhatch_normal"
-  "modular_machinery_reborn:fluidoutputhatch_reinforced"
-  "modular_machinery_reborn:fluidoutputhatch_small"
-  "modular_machinery_reborn:fluidoutputhatch_tiny"
-  "modular_machinery_reborn:fluidoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:inputbus</summary>

```diff
-[
-  "modular_machinery_reborn:inputbus_big"
-  "modular_machinery_reborn:inputbus_huge"
-  "modular_machinery_reborn:inputbus_ludicrous"
-  "modular_machinery_reborn:inputbus_normal"
-  "modular_machinery_reborn:inputbus_reinforced"
-  "modular_machinery_reborn:inputbus_small"
-  "modular_machinery_reborn:inputbus_tiny"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:itembus</summary>

```diff
-[
-  "#modular_machinery_reborn:inputbus"
-  "#modular_machinery_reborn:outputbus"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:outputbus</summary>

```diff
-[
-  "modular_machinery_reborn:outputbus_big"
-  "modular_machinery_reborn:outputbus_huge"
-  "modular_machinery_reborn:outputbus_ludicrous"
-  "modular_machinery_reborn:outputbus_normal"
-  "modular_machinery_reborn:outputbus_reinforced"
-  "modular_machinery_reborn:outputbus_small"
-  "modular_machinery_reborn:outputbus_tiny"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn:parallelhatch</summary>

```diff
-[
-  "modular_machinery_reborn:parallel_hatch_advanced"
-  "modular_machinery_reborn:parallel_hatch_basic"
-  "modular_machinery_reborn:parallel_hatch_max"
-  "modular_machinery_reborn:parallel_hatch_medium"
-  "modular_machinery_reborn:parallel_hatch_ultimate"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_ars:sourcehatch</summary>

```diff
-[
-  "#modular_machinery_reborn_ars:sourceinputhatch"
-  "#modular_machinery_reborn_ars:sourceoutputhatch"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_ars:sourceinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_ars:sourceinputhatch_big"
-  "modular_machinery_reborn_ars:sourceinputhatch_huge"
-  "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceinputhatch_normal"
-  "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceinputhatch_small"
-  "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_ars:sourceoutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_ars:sourceoutputhatch_big"
-  "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-  "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceoutputhatch_normal"
-  "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceoutputhatch_small"
-  "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceoutputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_mekanism:chemicalhatch</summary>

```diff
-[
-  "#modular_machinery_reborn_mekanism:chemicalinputhatch"
-  "#modular_machinery_reborn_mekanism:chemicaloutputhatch"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_mekanism:chemicalinputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum"
-]

```


</details>

<details>
<summary>minecraft:item/modular_machinery_reborn_mekanism:chemicaloutputhatch</summary>

```diff
-[
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum"
-]

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
   ... (32419 entries)
-  "modular_machinery_reborn:biome_reader"
-  "modular_machinery_reborn:casing_circuitry"
-  "modular_machinery_reborn:casing_firebox"
-  "modular_machinery_reborn:casing_gearbox"
-  "modular_machinery_reborn:casing_plain"
-  "modular_machinery_reborn:casing_reinforced"
-  "modular_machinery_reborn:casing_vent"
-  "modular_machinery_reborn:chunkloader"
-  "modular_machinery_reborn:controller"
-  "modular_machinery_reborn:dimensional_detector"
-  "modular_machinery_reborn:energyinputhatch_big"
-  "modular_machinery_reborn:energyinputhatch_huge"
-  "modular_machinery_reborn:energyinputhatch_ludicrous"
-  "modular_machinery_reborn:energyinputhatch_normal"
-  "modular_machinery_reborn:energyinputhatch_reinforced"
-  "modular_machinery_reborn:energyinputhatch_small"
-  "modular_machinery_reborn:energyinputhatch_tiny"
-  "modular_machinery_reborn:energyinputhatch_ultimate"
-  "modular_machinery_reborn:energyoutputhatch_big"
-  "modular_machinery_reborn:energyoutputhatch_huge"
-  "modular_machinery_reborn:energyoutputhatch_ludicrous"
-  "modular_machinery_reborn:energyoutputhatch_normal"
-  "modular_machinery_reborn:energyoutputhatch_reinforced"
-  "modular_machinery_reborn:energyoutputhatch_small"
-  "modular_machinery_reborn:energyoutputhatch_tiny"
-  "modular_machinery_reborn:energyoutputhatch_ultimate"
-  "modular_machinery_reborn:experienceinputhatch_big"
-  "modular_machinery_reborn:experienceinputhatch_huge"
-  "modular_machinery_reborn:experienceinputhatch_ludicrous"
-  "modular_machinery_reborn:experienceinputhatch_normal"
-  "modular_machinery_reborn:experienceinputhatch_reinforced"
-  "modular_machinery_reborn:experienceinputhatch_small"
-  "modular_machinery_reborn:experienceinputhatch_tiny"
-  "modular_machinery_reborn:experienceinputhatch_vacuum"
-  "modular_machinery_reborn:experienceoutputhatch_big"
-  "modular_machinery_reborn:experienceoutputhatch_huge"
-  "modular_machinery_reborn:experienceoutputhatch_ludicrous"
-  "modular_machinery_reborn:experienceoutputhatch_normal"
-  "modular_machinery_reborn:experienceoutputhatch_reinforced"
-  "modular_machinery_reborn:experienceoutputhatch_small"
-  "modular_machinery_reborn:experienceoutputhatch_tiny"
-  "modular_machinery_reborn:experienceoutputhatch_vacuum"
-  "modular_machinery_reborn:fluidinputhatch_big"
-  "modular_machinery_reborn:fluidinputhatch_huge"
-  "modular_machinery_reborn:fluidinputhatch_ludicrous"
-  "modular_machinery_reborn:fluidinputhatch_normal"
-  "modular_machinery_reborn:fluidinputhatch_reinforced"
-  "modular_machinery_reborn:fluidinputhatch_small"
-  "modular_machinery_reborn:fluidinputhatch_tiny"
-  "modular_machinery_reborn:fluidinputhatch_vacuum"
-  "modular_machinery_reborn:fluidoutputhatch_big"
-  "modular_machinery_reborn:fluidoutputhatch_huge"
-  "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-  "modular_machinery_reborn:fluidoutputhatch_normal"
-  "modular_machinery_reborn:fluidoutputhatch_reinforced"
-  "modular_machinery_reborn:fluidoutputhatch_small"
-  "modular_machinery_reborn:fluidoutputhatch_tiny"
-  "modular_machinery_reborn:fluidoutputhatch_vacuum"
-  "modular_machinery_reborn:height_meter"
-  "modular_machinery_reborn:inputbus_big"
-  "modular_machinery_reborn:inputbus_huge"
-  "modular_machinery_reborn:inputbus_ludicrous"
-  "modular_machinery_reborn:inputbus_normal"
-  "modular_machinery_reborn:inputbus_reinforced"
-  "modular_machinery_reborn:inputbus_small"
-  "modular_machinery_reborn:inputbus_tiny"
-  "modular_machinery_reborn:outputbus_big"
-  "modular_machinery_reborn:outputbus_huge"
-  "modular_machinery_reborn:outputbus_ludicrous"
-  "modular_machinery_reborn:outputbus_normal"
-  "modular_machinery_reborn:outputbus_reinforced"
-  "modular_machinery_reborn:outputbus_small"
-  "modular_machinery_reborn:outputbus_tiny"
-  "modular_machinery_reborn:parallel_hatch_advanced"
-  "modular_machinery_reborn:parallel_hatch_basic"
-  "modular_machinery_reborn:parallel_hatch_max"
-  "modular_machinery_reborn:parallel_hatch_medium"
-  "modular_machinery_reborn:parallel_hatch_ultimate"
-  "modular_machinery_reborn:time_counter"
-  "modular_machinery_reborn:weather_sensor"
-  "modular_machinery_reborn_ars:sourceinputhatch_big"
-  "modular_machinery_reborn_ars:sourceinputhatch_huge"
-  "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceinputhatch_normal"
-  "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceinputhatch_small"
-  "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceinputhatch_vacuum"
-  "modular_machinery_reborn_ars:sourceoutputhatch_big"
-  "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-  "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceoutputhatch_normal"
-  "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceoutputhatch_small"
-  "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceoutputhatch_vacuum"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum"
   ... (12921 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (1776 entries)
-  "modular_machinery_reborn:biome_reader"
-  "modular_machinery_reborn:chunkloader"
-  "modular_machinery_reborn:colorable_entity"
-  "modular_machinery_reborn:controller"
-  "modular_machinery_reborn:dimensional_detector"
-  "modular_machinery_reborn:energy_hatch_input"
-  "modular_machinery_reborn:energy_hatch_output"
-  "modular_machinery_reborn:experience_hatch_input"
-  "modular_machinery_reborn:experience_hatch_output"
-  "modular_machinery_reborn:fluid_hatch_input"
-  "modular_machinery_reborn:fluid_hatch_output"
-  "modular_machinery_reborn:height_meter"
-  "modular_machinery_reborn:item_input_bus"
-  "modular_machinery_reborn:item_output_bus"
-  "modular_machinery_reborn:parallel_hatch"
-  "modular_machinery_reborn:time_counter"
-  "modular_machinery_reborn:weather_sensor"
-  "modular_machinery_reborn_ars:source_hatch_input"
-  "modular_machinery_reborn_ars:source_hatch_output"
-  "modular_machinery_reborn_mekanism:chemical_hatch_input"
-  "modular_machinery_reborn_mekanism:chemical_hatch_output"
   ... (814 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (34824 entries)
+  "kubejs:modularium"
   ... (7537 entries)
-  "modular_machinery_reborn:biome_reader"
-  "modular_machinery_reborn:blueprint"
-  "modular_machinery_reborn:casing_circuitry"
-  "modular_machinery_reborn:casing_firebox"
-  "modular_machinery_reborn:casing_gearbox"
-  "modular_machinery_reborn:casing_plain"
-  "modular_machinery_reborn:casing_reinforced"
-  "modular_machinery_reborn:casing_vent"
-  "modular_machinery_reborn:chunkloader"
-  "modular_machinery_reborn:controller"
-  "modular_machinery_reborn:dimensional_detector"
-  "modular_machinery_reborn:energyinputhatch_big"
-  "modular_machinery_reborn:energyinputhatch_huge"
-  "modular_machinery_reborn:energyinputhatch_ludicrous"
-  "modular_machinery_reborn:energyinputhatch_normal"
-  "modular_machinery_reborn:energyinputhatch_reinforced"
-  "modular_machinery_reborn:energyinputhatch_small"
-  "modular_machinery_reborn:energyinputhatch_tiny"
-  "modular_machinery_reborn:energyinputhatch_ultimate"
-  "modular_machinery_reborn:energyoutputhatch_big"
-  "modular_machinery_reborn:energyoutputhatch_huge"
-  "modular_machinery_reborn:energyoutputhatch_ludicrous"
-  "modular_machinery_reborn:energyoutputhatch_normal"
-  "modular_machinery_reborn:energyoutputhatch_reinforced"
-  "modular_machinery_reborn:energyoutputhatch_small"
-  "modular_machinery_reborn:energyoutputhatch_tiny"
-  "modular_machinery_reborn:energyoutputhatch_ultimate"
-  "modular_machinery_reborn:experienceinputhatch_big"
-  "modular_machinery_reborn:experienceinputhatch_huge"
-  "modular_machinery_reborn:experienceinputhatch_ludicrous"
-  "modular_machinery_reborn:experienceinputhatch_normal"
-  "modular_machinery_reborn:experienceinputhatch_reinforced"
-  "modular_machinery_reborn:experienceinputhatch_small"
-  "modular_machinery_reborn:experienceinputhatch_tiny"
-  "modular_machinery_reborn:experienceinputhatch_vacuum"
-  "modular_machinery_reborn:experienceoutputhatch_big"
-  "modular_machinery_reborn:experienceoutputhatch_huge"
-  "modular_machinery_reborn:experienceoutputhatch_ludicrous"
-  "modular_machinery_reborn:experienceoutputhatch_normal"
-  "modular_machinery_reborn:experienceoutputhatch_reinforced"
-  "modular_machinery_reborn:experienceoutputhatch_small"
-  "modular_machinery_reborn:experienceoutputhatch_tiny"
-  "modular_machinery_reborn:experienceoutputhatch_vacuum"
-  "modular_machinery_reborn:fluidinputhatch_big"
-  "modular_machinery_reborn:fluidinputhatch_huge"
-  "modular_machinery_reborn:fluidinputhatch_ludicrous"
-  "modular_machinery_reborn:fluidinputhatch_normal"
-  "modular_machinery_reborn:fluidinputhatch_reinforced"
-  "modular_machinery_reborn:fluidinputhatch_small"
-  "modular_machinery_reborn:fluidinputhatch_tiny"
-  "modular_machinery_reborn:fluidinputhatch_vacuum"
-  "modular_machinery_reborn:fluidoutputhatch_big"
-  "modular_machinery_reborn:fluidoutputhatch_huge"
-  "modular_machinery_reborn:fluidoutputhatch_ludicrous"
-  "modular_machinery_reborn:fluidoutputhatch_normal"
-  "modular_machinery_reborn:fluidoutputhatch_reinforced"
-  "modular_machinery_reborn:fluidoutputhatch_small"
-  "modular_machinery_reborn:fluidoutputhatch_tiny"
-  "modular_machinery_reborn:fluidoutputhatch_vacuum"
-  "modular_machinery_reborn:height_meter"
-  "modular_machinery_reborn:inputbus_big"
-  "modular_machinery_reborn:inputbus_huge"
-  "modular_machinery_reborn:inputbus_ludicrous"
-  "modular_machinery_reborn:inputbus_normal"
-  "modular_machinery_reborn:inputbus_reinforced"
-  "modular_machinery_reborn:inputbus_small"
-  "modular_machinery_reborn:inputbus_tiny"
-  "modular_machinery_reborn:modularium"
-  "modular_machinery_reborn:outputbus_big"
-  "modular_machinery_reborn:outputbus_huge"
-  "modular_machinery_reborn:outputbus_ludicrous"
-  "modular_machinery_reborn:outputbus_normal"
-  "modular_machinery_reborn:outputbus_reinforced"
-  "modular_machinery_reborn:outputbus_small"
-  "modular_machinery_reborn:outputbus_tiny"
-  "modular_machinery_reborn:parallel_hatch_advanced"
-  "modular_machinery_reborn:parallel_hatch_basic"
-  "modular_machinery_reborn:parallel_hatch_max"
-  "modular_machinery_reborn:parallel_hatch_medium"
-  "modular_machinery_reborn:parallel_hatch_ultimate"
-  "modular_machinery_reborn:structure_creator"
-  "modular_machinery_reborn:time_counter"
-  "modular_machinery_reborn:weather_sensor"
-  "modular_machinery_reborn_ars:sourceinputhatch_big"
-  "modular_machinery_reborn_ars:sourceinputhatch_huge"
-  "modular_machinery_reborn_ars:sourceinputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceinputhatch_normal"
-  "modular_machinery_reborn_ars:sourceinputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceinputhatch_small"
-  "modular_machinery_reborn_ars:sourceinputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceinputhatch_vacuum"
-  "modular_machinery_reborn_ars:sourceoutputhatch_big"
-  "modular_machinery_reborn_ars:sourceoutputhatch_huge"
-  "modular_machinery_reborn_ars:sourceoutputhatch_ludicrous"
-  "modular_machinery_reborn_ars:sourceoutputhatch_normal"
-  "modular_machinery_reborn_ars:sourceoutputhatch_reinforced"
-  "modular_machinery_reborn_ars:sourceoutputhatch_small"
-  "modular_machinery_reborn_ars:sourceoutputhatch_tiny"
-  "modular_machinery_reborn_ars:sourceoutputhatch_vacuum"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicalinputhatch_vacuum"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_big"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_huge"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_ludicrous"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_normal"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_reinforced"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_small"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_tiny"
-  "modular_machinery_reborn_mekanism:chemicaloutputhatch_vacuum"
   ... (17214 entries)
 ]

```


</details>

<details>
<summary>recipe_type</summary>

```diff
 [
   ... (250 entries)
-  "modular_machinery_reborn:machine_recipe"
   ... (137 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

