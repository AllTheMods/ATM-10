# Changelog

# 📦 5.3

## 📰 General changes and notes

Summary of changes here!

<details open>
<summary>Github Commits :octocat:</summary>
<blockquote>

- chore: changelogs for 5.2
- fix: iaf config
- fix(advanced_ae quest): typo in matrix assembler task quantity
- Closes #3683
- feat: add emperor_chalice compat with Irons Spells cauldron
- Closes #3681
- fix: prep to remove eternal starlight
- fix: prepare to remove hyperbox
- feat: add announcements
- fix: Adjust Containment Jar Blacklist to not be overly broad (#3680)
- * fix: Adjust Jar Blacklist to not be overly broad
- * When you don't thoroughly test your things, this happens
- Quest Work (#3672)
- * Quest Work
- * I forgot the Label Accessor reward
- i really need to go to sleep
- * Update productive_bees.snbt (lang file)
- It's a bit long and I will have to use the extended description for this
- Added mention of being able to apply genes to bees without releasing them from their cage to BaBee Incubator's Quest
- * Additional Occultism Quest Changes
- * Forgot the dependency for the Camol building tip
- * I am being very forgetful here
- * fix: Replace Magmatic + Sweat with Water + Lava
- Applies to Productive Bees quests
- fix: update mining complex biomes
- Closes #3685
- fix: update alltheleaks config
- fix: syntax error</blockquote>

</details>

---

## 🛠️ Mods

<details>
<summary>Updated (32)</summary>

- All The Leaks (1.1.3+1.21.1-neoforge) -> (1.1.4+1.21.1-neoforge)
- AllTheTweaks (2.7.0) -> (2.7.7)
- Ars Elemental (0.7.6.8) -> (0.7.6.9)
- Byzantine (43) -> (44.1)
- Cable Tiers (1.21.1-0.6.8) -> (1.21.1-0.6.9)
- CodeChicken Lib (4.6.1.524) -> (4.6.1.526)
- CC: Tweaked (1.116.1) -> (1.116.2)
- Draconic Evolution (3.1.3.629) -> (3.1.4.630)
- Extended Industrialization (1.15.21-1.21.1) -> (1.15.22-1.21.1)
- InControl (1.21-10.1.4) -> (1.21-10.2.1)
- Industrialization Overdrive (1.10.6+1.21.1) -> (1.10.7+1.21.1)
- Iron's Spells 'n Spellbooks (1.21.1-3.14.7) -> (1.21.1-3.14.8)
- KubeJS (2101.7.2-build.336) -> (2101.7.2-build.348)
- KubeJS Tweaks (1.0.4) -> (1.0.5)
- Little Big Redstone (1.4.10-beta-1.21.1) -> (1.4.11-beta-1.21.1)
- Lootr (1.21-1.10.35.92) -> (1.21-1.10.35.95)
- McJtyLib (1.21-9.0.18) -> (1.21-9.0.19)
- Mekanism: MoreMachine (1.1.0-SNAPSHOT+46c7132) -> (1.2.0-SNAPSHOT+a955da4)
- Mama's MerryMaking (1.0.0) -> (1.21.1-13)
- Modular Force Field System (5.4.21) -> (5.4.25)
- MineColonies (1.1.1213-1.21.1-snapshot) -> (1.1.1218-1.21.1-snapshot)
- Modern Industrialization (2.3.16) -> (2.4.0)
- ModularBees (1.21.1-2.2-neoforge) -> (1.21.1-2.3-neoforge)
- Oritech (0.19.5) -> (0.19.6)
- QuarryPlus (21.1.135) -> (21.1.141)
- Railcraft Reborn (1.2.8) -> (1.2.9)
- Refined Types (1.21.1-0.2.8) -> (1.21.1-0.2.9)
- RFToolsBuilder (1.21-7.0.3) -> (1.21-7.0.4)
- Sauce Library (0.0.12.40) -> (0.0.13.42)
- Structurize (1.0.795-1.21.1-snapshot) -> (1.0.796-1.21.1-snapshot)
- Tesseract API (1.10.4-1.21.1) -> (1.11.0-1.21.1)
- The Bumblezone (7.11.5+1.21.1-neoforge) -> (7.11.6+1.21.1-neoforge)

</details>

## 🍳 Recipes

<details>
<summary>Added (43)</summary>
<blockquote>

<details>
<summary>irons_spellbooks/kjs/water</summary>

```diff
+{
+  type: "irons_spellbooks:alchemist_cauldron_fill"
+  fluid: {
+    id: "minecraft:water"
+    amount: 1000
+  }
+  input: {
+    item: "reliquary:emperor_chalice"
+  }
+  result: {
+    id: "reliquary:emperor_chalice"
+    count: 1
+  }
+  mustFitAll: false
+  sound: "irons_spellbooks:cast.generic.lightning"
+  _kubejs_changed_marker: {
+    source: "server_scripts:mods/Irons Spells Spellbooks/Recipes.js"
+    line: 7
+  }
+}

```


</details>

<details>
<summary>mekmm/advanced_electrolysis_core</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "c:alloys/ultimate"
+    }
+    B: {
+      tag: "c:dusts/lapis"
+    }
+    C: {
+      tag: "c:dusts/diamond"
+    }
+    D: {
+      tag: "c:dusts/netherite"
+    }
+    E: {
+      item: "mekanism:electrolytic_core"
+    }
+  }
+  pattern: [
+    "AEA"
+    "BDC"
+    "AEA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:advanced_electrolysis_core"
+  }
+}

```


</details>

<details>
<summary>mekmm/compressing/modeler_doll</summary>

```diff
+{
+  type: "mekanism:compressing"
+  chemical_input: {
+    amount: 1
+    chemical: "mekmm:uu_matter"
+  }
+  item_input: {
+    count: 64
+    item: "mekmm:uu_matter"
+  }
+  output: {
+    count: 1
+    id: "mekmm:modeler_doll"
+  }
+  per_tick_usage: true
+}

```


</details>

<details>
<summary>mekmm/large_chemical_infuser</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    C: {
+      tag: "c:circuits/ultimate"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    T: {
+      item: "mekmm:ultimate_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "BCB"
+    "TRT"
+    "BCB"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_chemical_infuser"
+  }
+}

```


</details>

<details>
<summary>mekmm/large_electrolytic_separator</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    E: {
+      item: "mekmm:advanced_electrolysis_core"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    T: {
+      item: "mekmm:ultimate_max_chemical_tank"
+    }
+    W: {
+      item: "mekanism:ultimate_fluid_tank"
+    }
+  }
+  pattern: [
+    "BEB"
+    "WRT"
+    "BEB"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_electrolytic_separator"
+  }
+}

```


</details>

<details>
<summary>mekmm/large_gas_burning_generator</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    E: {
+      item: "mekmm:advanced_electrolysis_core"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    T: {
+      item: "mekmm:ultimate_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "TET"
+    "BRB"
+    "TET"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_gas_burning_generator"
+  }
+}

```


</details>

<details>
<summary>mekmm/large_heat_generator</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    S: {
+      item: "mekanism:superheating_element"
+    }
+    T: {
+      item: "mekanism:ultimate_fluid_tank"
+    }
+  }
+  pattern: [
+    "BSB"
+    "TRT"
+    "BSB"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_heat_generator"
+  }
+}

```


</details>

<details>
<summary>mekmm/large_rotary_condensentrator</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    C: {
+      tag: "c:circuits/ultimate"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    T: {
+      item: "mekmm:ultimate_max_chemical_tank"
+    }
+    W: {
+      item: "mekanism:ultimate_fluid_tank"
+    }
+  }
+  pattern: [
+    "BCB"
+    "TRW"
+    "BCB"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_rotary_condensentrator"
+  }
+}

```


</details>

<details>
<summary>mekmm/large_solar_neutron_activator</summary>

```diff
+{
+  neoforge:conditions: [
+    {
+      type: "almostunified:conditional"
+      conditions_met: true
+      original_conditions: [
+        {
+          type: "neoforge:mod_loaded"
+          modid: "mekanismgenerators"
+        }
+      ]
+    }
+  ]
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    B: {
+      tag: "c:storage_blocks/steel"
+    }
+    L: {
+      item: "mekanism:laser"
+    }
+    R: {
+      item: "mekanism:robit"
+    }
+    S: {
+      item: "mekanismgenerators:advanced_solar_generator"
+    }
+    T: {
+      item: "mekmm:ultimate_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "SSS"
+    "BRB"
+    "TLT"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:large_solar_neutron_activator"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/advanced</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/infused"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:basic_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:advanced_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/elite</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/reinforced"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:advanced_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:elite_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/ultimate</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/atomic"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:elite_max_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:ultimate_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/use_tank/advanced</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekmm:advanced_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:advanced_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/use_tank/basic</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekmm:basic_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:basic_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/use_tank/elite</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekmm:elite_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:elite_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/max_chemical_tank/use_tank/ultimate</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekmm:ultimate_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:ultimate_max_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/advanced</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/infused"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:basic_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:advanced_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/elite</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/reinforced"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:advanced_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:elite_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/ultimate</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      tag: "mekanism:alloys/atomic"
+    }
+    O: {
+      tag: "c:ingots/osmium"
+    }
+    P: {
+      item: "mekmm:elite_mid_chemical_tank"
+    }
+  }
+  pattern: [
+    "AOA"
+    "OPO"
+    "AOA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:ultimate_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/use_tank/advanced</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekanism:advanced_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:advanced_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/use_tank/basic</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekanism:basic_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:basic_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/use_tank/elite</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekanism:elite_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:elite_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>mekmm/mid_chemical_tank/use_tank/ultimate</summary>

```diff
+{
+  type: "mekanism:mek_data"
+  category: "misc"
+  key: {
+    A: {
+      item: "mekanism:dynamic_tank"
+    }
+    C: {
+      item: "mekanism:ultimate_chemical_tank"
+    }
+  }
+  pattern: [
+    "AAA"
+    "ACA"
+    "ACA"
+  ]
+  result: {
+    count: 1
+    id: "mekmm:ultimate_mid_chemical_tank"
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/16vf17abuzwpoloxrwahefb8t</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 300
+  item_outputs: [
+    {
+      item: "forbidden_arcanus:corrupted_arcane_crystal"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "enderio:sentient_ender"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:arcane_crystal"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
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
+      amount: 2500
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 7500
+    }
+    {
+      tag: "c:experience"
+      amount: 10000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 169
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/47aakk6aq3z2ud8uz6a8du5wt</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 300
+  item_outputs: [
+    {
+      item: "modern_industrialization:star_altar"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      items: "eternal_starlight:loot_bag"
+      components: {
+        eternal_starlight:loot_table: "eternal_starlight:bosses/lunar_monstrosity"
+      }
+      type: "neoforge:components"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 200000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 10000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000000
+    }
+    {
+      tag: "c:experience"
+      amount: 75000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 81
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/7rg55evqu14ql00je0p0nk5t7</summary>

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
+        minecraft:enchantments: {
+          levels: {
+            minecraft:mending: 1
+          }
+        }
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
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
<summary>modern_industrialization/kjs/88b4hxadve0xz8wi5b3xvk0o4</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_fluid_output_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:chiseled_polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 152
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/8bf1icnkgb909q5smnvtdfro1</summary>

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
+        minecraft:enchantments: {
+          levels: {
+            minecraft:unbreaking: 1
+          }
+        }
+        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
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
<summary>modern_industrialization/kjs/auajrkbedvs6yc47pc4kfz8cb</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 300
+  item_outputs: [
+    {
+      item: "modern_industrialization:auto_forge"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:hephaestus_forge_tier_5"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 50000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 50000
+    }
+    {
+      tag: "c:experience"
+      amount: 25000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 81
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/b3k6tzwxyskbvrzouly51hg6t</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 300
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_crucible"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "ars_nouveau:enchanting_apparatus"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "ars_nouveau:arcane_core"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "ars_nouveau:arcane_core"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 100000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 25000
+    }
+    {
+      tag: "c:experience"
+      amount: 10000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 81
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/cjy3ycvf00j2t7ud1cndjmhcn</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_fluid_input_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_fluids"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 152
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/ck8erz41o825twkv5o8up512z</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_energy_input_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 152
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/eihajkqhbltkewx8hytbxvzlo</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_item_output_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:chiseled_polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_item"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 152
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/et4kxj5jczx3lqst9q47ny4to</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 300
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_enchanter"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "minecraft:enchanting_table"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "apothic_enchanting:treasure_shelf"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "apothic_enchanting:treasure_shelf"
+      amount: 1
+    }
+    {
+      item: "enderio:z_logic_controller"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 100000
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 1000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 50000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 81
+  }
+}

```


</details>

<details>
<summary>modern_industrialization/kjs/y95n9h6f2s3f5iqlgabbg4ts</summary>

```diff
+{
+  type: "modern_industrialization:auto_forge"
+  eu: 512
+  duration: 150
+  item_outputs: [
+    {
+      item: "modern_industrialization:runic_item_input_hatch"
+      amount: 1
+    }
+  ]
+  item_inputs: [
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+    {
+      item: "actuallyadditions:laser_relay_item"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:polished_darkstone"
+      amount: 1
+    }
+    {
+      item: "alltheores:enderium_gear"
+      amount: 1
+    }
+    {
+      item: "mekanism:ultimate_control_circuit"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:quantum_injector"
+      amount: 1
+    }
+    {
+      item: "forbidden_arcanus:mundabitur_dust"
+      amount: 1
+    }
+  ]
+  fluid_inputs: [
+    {
+      fluid: "kubejs:liquid_aureal"
+      amount: 2500
+    }
+    {
+      fluid: "kubejs:liquid_souls"
+      amount: 5000
+    }
+    {
+      fluid: "evilcraft:blood"
+      amount: 1000
+    }
+    {
+      tag: "c:experience"
+      amount: 5000
+    }
+  ]
+  _kubejs_changed_marker: {
+    source: "server_scripts:modpack/runic_multis/controllers.js"
+    line: 152
+  }
+}

```


</details>

<details>
<summary>modularbees/bee_extractor</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    B: {
+      item: "productivebees:bottler"
+    }
+    P: [
+      {
+        item: "minecraft:piston"
+      }
+      {
+        item: "minecraft:sticky_piston"
+      }
+    ]
+    R: {
+      tag: "c:dusts/redstone"
+    }
+    S: {
+      tag: "c:stones"
+    }
+  }
+  pattern: [
+    "RPR"
+    "S S"
+    " B "
+  ]
+  result: {
+    count: 1
+    id: "modularbees:bee_extractor"
+  }
+}

```


</details>

<details>
<summary>oritech/uranium_dust_blockblock</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    #: {
+      tag: "c:dusts/uranium"
+    }
+  }
+  pattern: [
+    "###"
+    "###"
+    "###"
+  ]
+  result: {
+    count: 1
+    id: "oritech:uranium_dust_block"
+  }
+}

```


</details>

<details>
<summary>oritech/uranium_dust_blockblockinv</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "c:storage_blocks/uranium_dust"
+    }
+  ]
+  result: {
+    count: 9
+    id: "alltheores:uranium_dust"
+  }
+}

```


</details>

<details>
<summary>railcraft/cargo_minecart</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      item: "minecraft:barrel"
+    }
+    b: {
+      item: "minecraft:minecart"
+    }
+  }
+  pattern: [
+    "a"
+    "b"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:cargo_minecart"
+  }
+}

```


</details>

<details>
<summary>railcraft/void_chest</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      item: "minecraft:obsidian"
+    }
+    b: {
+      item: "railcraft:void_dust"
+    }
+  }
+  pattern: [
+    "aaa"
+    "aba"
+    "aaa"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:void_chest"
+  }
+}

```


</details>

<details>
<summary>railcraft/void_chest_minecart</summary>

```diff
+{
+  type: "minecraft:crafting_shaped"
+  category: "misc"
+  key: {
+    a: {
+      item: "railcraft:void_chest"
+    }
+    b: {
+      item: "minecraft:minecart"
+    }
+  }
+  pattern: [
+    "a"
+    "b"
+  ]
+  result: {
+    count: 1
+    id: "railcraft:void_chest_minecart"
+  }
+}

```


</details>

<details>
<summary>railcraft/void_chest_minecart_disassembly</summary>

```diff
+{
+  type: "railcraft:void_chest_minecart_disassembly"
+  category: "misc"
+}

```


</details>

<details>
<summary>railcraft/void_dust</summary>

```diff
+{
+  type: "minecraft:crafting_shapeless"
+  category: "misc"
+  ingredients: [
+    {
+      tag: "c:dusts/coal"
+    }
+    {
+      tag: "c:dusts/ender_pearl"
+    }
+    {
+      tag: "c:dusts/obsidian"
+    }
+  ]
+  result: {
+    count: 3
+    id: "railcraft:void_dust"
+  }
+}

```


</details>

</blockquote>

</details>

<details>
<summary>Changed (46)</summary>
<blockquote>

<details>
<summary>almostunified/oritech</summary>

```diff
 {
   type: "almostunified:client_recipe_tracker"
   namespace: "oritech"
   recipes: [
     "1$assembler/claybeads"
     "1$atomicforge/dust/copper"
     "1$atomicforge/dust/gold"
     "1$atomicforge/dust/iron"
     "1$atomicforge/dust/nickel"
     "1$atomicforge/dust/platinum"
     "1$blasting/compat/create/crushed_nickel_to_nickel_ingot"
     "1$blasting/compat/create/crushed_platinum_to_platinum_ingot"
     "1$centrifuge/compat/clump/crushed_uranium"
     "1$centrifuge/compat/create/clump/zinc"
     "1$centrifuge/compat/enderio/endericcompound"
     "1$centrifuge/compat/mekanism/clump/lead"
     "1$centrifuge/compat/mekanism/clump/osmium"
     "1$centrifuge/compat/mekanism/clump/tin"
     "1$centrifuge/fluid/compat/clumpwet/crushed_uranium"
     "1$centrifuge/fluid/compat/create/clump/zinc"
     "1$centrifuge/fluid/compat/create/clumpacid/zinc"
     "1$centrifuge/fluid/compat/mekanism/clump/lead"
     "1$centrifuge/fluid/compat/mekanism/clump/osmium"
     "1$centrifuge/fluid/compat/mekanism/clump/tin"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/lead"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/osmium"
     "1$centrifuge/fluid/compat/mekanism/clumpacid/tin"
     "1$compat/enderio/alloy/steel"
     "1$compat/immersiveengineering/alloying/electrum"
     "1$compat/immersiveengineering/arcalloying/electrum"
     "1$compat/mekanism/infusing/electrum_dust"
     "1$compat/productivemetalworks/casting/block/electrum"
     "1$compat/productivemetalworks/casting/block/steel"
     "1$compat/productivemetalworks/casting/ingot/electrum"
     "1$compat/productivemetalworks/casting/ingot/nickel"
     "1$compat/productivemetalworks/casting/ingot/platinum"
     "1$compat/productivemetalworks/casting/ingot/steel"
     "1$compat/productivemetalworks/casting/nugget/nickel"
     "1$compat/productivemetalworks/casting/nugget/platinum"
     "1$copper_clump"
     "1$copper_dust"
     "1$copper_nugget_from_blasting_small_copper_dust"
     "1$copper_nugget_from_smelting_small_copper_dust"
     "1$crafting/addon/burst"
     "1$crafting/alloy/electrum"
     "1$crafting/alloy/steel"
     "1$crafting/basicjetpackalt"
     "1$crafting/claybeads"
     "1$crushing/compat/create/coal"
     "1$crushing/compat/create/copperingot"
     "1$crushing/compat/create/goldingot"
     "1$crushing/compat/create/ironingot"
     "1$crushing/compat/create/nickelingot"
     "1$crushing/compat/create/platinumingot"
     "1$deepdrill/nickel"
     "1$deepdrill/platinum"
     "1$deepdrill/uranium"
     "1$foundry/alloy/compat/create/brass"
     "1$foundry/alloy/compat/immersiveengineering/constantan"
     "1$foundry/alloy/compat/mekanism/bronze"
     "1$foundry/alloy/electrum"
     "1$foundry/alloy/gem/nickel"
     "1$foundry/alloy/gem/platinum"
     "1$foundry/alloy/steel"
     "1$gold_clump"
     "1$gold_dust"
     "1$grinder/coal"
     "1$grinder/compat/create/ore/zinc"
     "1$grinder/compat/create/raw/zinc"
     "1$grinder/compat/immersiveengineering/dust/aluminum"
     "1$grinder/compat/immersiveengineering/dust/silver"
     "1$grinder/compat/immersiveengineering/ore/aluminum"
     "1$grinder/compat/immersiveengineering/ore/lead"
     "1$grinder/compat/immersiveengineering/ore/silver"
     "1$grinder/compat/immersiveengineering/raw/aluminum"
     "1$grinder/compat/immersiveengineering/raw/lead"
     "1$grinder/compat/immersiveengineering/raw/silver"
     "1$grinder/compat/mekanism/dust/bronze"
     "1$grinder/compat/mekanism/dust/diamond"
     "1$grinder/compat/mekanism/dust/fluorite"
     "1$grinder/compat/mekanism/dust/netherite"
     "1$grinder/compat/mekanism/dust/osmium"
     "1$grinder/compat/mekanism/dust/tin"
     "1$grinder/compat/mekanism/ore/lead"
     "1$grinder/compat/mekanism/ore/osmium"
     "1$grinder/compat/mekanism/ore/tin"
     "1$grinder/compat/mekanism/raw/lead"
     "1$grinder/compat/mekanism/raw/osmium"
     "1$grinder/compat/mekanism/raw/tin"
     "1$grinder/dust/copper"
     "1$grinder/dust/gold"
     "1$grinder/dust/iron"
     "1$grinder/dust/nickel"
     "1$grinder/dust/platinum"
     "1$grinder/electrum"
     "1$grinder/ore/iron"
     "1$grinder/ore/nickel"
     "1$grinder/ore/platinum"
     "1$grinder/raw/copper"
     "1$grinder/raw/gold"
     "1$grinder/raw/iron"
     "1$grinder/raw/nickel"
     "1$grinder/raw/platinum"
     "1$grinder/recycle/iron_dust"
     "1$grinder/uranium"
     "1$grinder/uraniumcrystal"
     "1$grinder/uraniumore"
     "1$iron_clump"
     "1$iron_dust"
     "1$mixing/compat/create/electrum"
     "1$mixing/compat/create/nickelgem"
     "1$mixing/compat/create/platinumgem"
     "1$mixing/compat/create/steel"
     "1$nickel_clump"
     "1$nickel_dust"
     "1$nickel_ingot"
     "1$nickel_ingot_from_blasting_nickel_gem"
     "1$nickel_ingot_from_smelting_nickel_gem"
-    "1$nickel_nugget"
     "1$nickel_nugget_from_blasting_small_nickel_dust"
     "1$nickel_nugget_from_smelting_small_nickel_dust"
     "1$particle/platinum_dust"
     "1$platinum_clump"
     "1$platinum_dust"
     "1$platinum_ingot"
     "1$platinum_ingot_from_blasting_platinum_gem"
     "1$platinum_ingot_from_smelting_platinum_gem"
-    "1$platinum_nugget"
     "1$platinum_nugget_from_blasting_small_platinum_dust"
     "1$platinum_nugget_from_smelting_small_platinum_dust"
     "1$pulverizer/coal"
     "1$pulverizer/compat/create/ore/zinc"
     "1$pulverizer/compat/immersiveengineering/dust/aluminum"
     "1$pulverizer/compat/immersiveengineering/dust/silver"
     "1$pulverizer/compat/immersiveengineering/ore/aluminum"
     "1$pulverizer/compat/immersiveengineering/ore/silver"
     "1$pulverizer/compat/immersiveengineering/raw/aluminum"
     "1$pulverizer/compat/immersiveengineering/raw/silver"
     "1$pulverizer/compat/mekanism/dust/bronze"
     "1$pulverizer/compat/mekanism/dust/diamond"
     "1$pulverizer/compat/mekanism/dust/fluorite"
     "1$pulverizer/compat/mekanism/dust/netherite"
     "1$pulverizer/compat/mekanism/dust/osmium"
     "1$pulverizer/compat/mekanism/dust/tin"
     "1$pulverizer/compat/mekanism/ore/osmium"
     "1$pulverizer/compat/mekanism/ore/tin"
     "1$pulverizer/compat/mekanism/raw/osmium"
     "1$pulverizer/compat/mekanism/raw/tin"
     "1$pulverizer/dust/copper"
     "1$pulverizer/dust/gold"
     "1$pulverizer/dust/iron"
     "1$pulverizer/dust/nickel"
     "1$pulverizer/dust/platinum"
     "1$pulverizer/electrum"
     "1$pulverizer/ore/nickel"
     "1$pulverizer/ore/platinum"
     "1$pulverizer/raw/copper"
     "1$pulverizer/raw/gold"
     "1$pulverizer/raw/iron"
     "1$pulverizer/raw/nickel"
     "1$pulverizer/raw/platinum"
     "1$pulverizer/recycle/copper_dust"
     "1$pulverizer/recycle/gold_dust"
     "1$pulverizer/recycle/iron_dust"
     "1$pulverizer/uranium"
     "1$pulverizer/uraniumcrystal"
     "1$pulverizer/uraniumore"
     "1$refinery/compat/create/rawsheol/zinc"
     "1$refinery/compat/immersiveengineering/rawsheol/aluminum"
     "1$refinery/compat/immersiveengineering/rawsheol/lead"
     "1$refinery/compat/immersiveengineering/rawsheol/silver"
     "1$refinery/compat/mekanism/rawsheol/lead"
     "1$refinery/compat/mekanism/rawsheol/osmium"
     "1$refinery/compat/mekanism/rawsheol/tin"
     "1$refinery/rawsheol/copper"
     "1$refinery/rawsheol/gold"
     "1$refinery/rawsheol/iron"
     "1$refinery/rawsheol/nickel"
     "1$refinery/rawsheol/platinum"
     "1$refinery/siliconwashing"
     "1$silicon_blockblockinv"
     "1$silicon_from_smelting_raw_silicon"
     "1$splashing/compat/create/nickelclump"
     "1$splashing/compat/create/platinumclump"
     "1$splashing/compat/create/uraniumclump"
+    "1$uranium_dust_blockblockinv"
     "1$uranium_dustblock"
     "3$compat/productivemetalworks/casting/block/nickel"
     "3$compat/productivemetalworks/casting/block/platinum"
     "3$compat/productivemetalworks/melting/clump/nickel"
     "3$compat/productivemetalworks/melting/clump/platinum"
     "3$copper_ingot_from_blasting_copper_dust"
     "3$copper_ingot_from_smelting_copper_dust"
     "3$electrum_blockblock"
     "3$electrum_blockblockinv"
     "3$electrum_ingot_from_blasting_electrum_dust"
     "3$electrum_ingot_from_smelting_electrum_dust"
     "3$gold_ingot_from_blasting_gold_dust"
     "3$gold_ingot_from_smelting_gold_dust"
     "3$grinder/compat/immersiveengineering/dust/lead"
     "3$grinder/compat/mekanism/dust/lead"
     "3$grinder/compat/mekanism/dust/steel"
     "3$grinder/steel"
     "3$iron_ingot_from_blasting_iron_dust"
     "3$iron_ingot_from_smelting_iron_dust"
     "3$nickel_blockblock"
     "3$nickel_blockblockinv"
     "3$nickel_ingot_from_blasting_nickel_dust"
     "3$nickel_ingot_from_blasting_raw_nickel"
     "3$nickel_ingot_from_smelting_nickel_dust"
     "3$nickel_ingot_from_smelting_raw_nickel"
+    "3$nickel_nugget"
     "3$platinum_blockblock"
     "3$platinum_blockblockinv"
     "3$platinum_ingot_from_blasting_platinum_dust"
     "3$platinum_ingot_from_blasting_raw_platinum"
     "3$platinum_ingot_from_smelting_platinum_dust"
     "3$platinum_ingot_from_smelting_raw_platinum"
+    "3$platinum_nugget"
     "3$pulverizer/compat/immersiveengineering/dust/lead"
     "3$pulverizer/compat/immersiveengineering/ore/lead"
     "3$pulverizer/compat/immersiveengineering/raw/lead"
     "3$pulverizer/compat/mekanism/dust/lead"
     "3$pulverizer/compat/mekanism/dust/steel"
     "3$pulverizer/compat/mekanism/ore/lead"
     "3$pulverizer/compat/mekanism/raw/lead"
     "3$pulverizer/steel"
     "3$raw_nickel_blockblock"
     "3$raw_nickel_blockblockinv"
     "3$raw_platinum_blockblock"
     "3$raw_platinum_blockblockinv"
+    "3$raw_uranium_blockblock"
+    "3$raw_uranium_blockblockinv"
     "3$steel_blockblock"
     "3$steel_blockblockinv"
     "3$steel_ingot_from_blasting_steel_dust"
     "3$steel_ingot_from_smelting_steel_dust"
   ]
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_abyssal_fruit</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:abyssal_fruit"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:kelp"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_blue_starlight_crystal_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:blue_starlight_crystal_block"
     count: 8
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_block"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 61
+    line: 62
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_blue_starlight_crystal_cluster</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:blue_starlight_crystal_cluster"
     count: 8
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_cluster"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 66
+    line: 67
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_blue_starlight_crystal_shard</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:blue_starlight_crystal_shard"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_shard"
     }
     {
       tag: "c:dyes/blue"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 71
+    line: 72
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_cobbled_grimstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:cobbled_grimstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:cobblestone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_cobbled_voidstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:cobbled_voidstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:cobbled_deepslate"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_crystallum_coral</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:crystallum_coral"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:tube_coral"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_crystallum_coral_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:crystallum_coral_block"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:tube_coral_block"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_crystallum_coral_fan</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:crystallum_coral_fan"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:tube_coral_fan"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_dead_lunar_bush</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:dead_lunar_bush"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:dead_bush"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_dusted_gravel</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:dusted_gravel"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:gravel"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_eternal_ice</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:eternal_ice"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:ice"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_glacite</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:glacite"
     count: 4
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:blue_ice"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_glowing_mushroom</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:glowing_mushroom"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     [
       {
         item: "minecraft:brown_mushroom"
       }
       {
         item: "minecraft:red_mushroom"
       }
     ]
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_golden_coral</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:golden_coral"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:horn_coral"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_golden_coral_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:golden_coral_block"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:horn_coral_block"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_golden_coral_fan</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:golden_coral_fan"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:horn_coral_fan"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_grimstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:grimstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:stone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_icicle</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:icicle"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:pointed_dripstone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_jingling_pickle</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:jingling_pickle"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:sea_pickle"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_lunar_berries</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:lunar_berries"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:glow_berries"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_lunaris_cactus</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:lunaris_cactus"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:cactus"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_nightfall_dirt</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:nightfall_dirt"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:dirt"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_nightfall_grass_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:nightfall_grass_block"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:grass_block"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_nightfall_mud</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:nightfall_mud"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:mud"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_orbflora</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:orbflora"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:big_dripleaf"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_orbflora_light</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:orbflora_light"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:shroomlight"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_orbflora_light_2</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:orbflora_light"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:shroomlight"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_oxidized_golem_steel_ingot</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:oxidized_golem_steel_ingot"
     count: 2
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       tag: "c:ingots/steel"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_raw_aethersent</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:raw_aethersent"
     count: 1
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       tag: "c:gems/diamond"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_red_starlight_crystal_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:red_starlight_crystal_block"
     count: 8
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_block"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 46
+    line: 47
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_red_starlight_crystal_cluster</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:red_starlight_crystal_cluster"
     count: 8
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_cluster"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 51
+    line: 52
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_red_starlight_crystal_shard</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:red_starlight_crystal_shard"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:amethyst_shard"
     }
     {
       tag: "c:dyes/red"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 56
+    line: 57
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_springstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:springstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:blackstone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_swamp_silver_ingot</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:swamp_silver_ingot"
     count: 4
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       tag: "c:ingots/silver"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_tentacles_coral</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:tentacles_coral"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:fire_coral"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_tentacles_coral_block</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:tentacles_coral_block"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:fire_coral_block"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_tentacles_coral_fan</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:tentacles_coral_fan"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:fire_coral_fan"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_thermal_springstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:thermal_springstone"
     count: 8
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:gilded_blackstone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_twilight_sand</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:twilight_sand"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:sand"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_twilight_sandstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:twilight_sandstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:sandstone"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>kubejs/kjs/eternal_starlight_voidstone</summary>

```diff
 {
   type: "kubejs:shapeless"
   result: {
     id: "eternal_starlight:voidstone"
     count: 16
   }
   ingredients: [
     {
       item: "kubejs:starlight_prediction"
     }
     {
       item: "minecraft:deepslate"
     }
   ]
   _kubejs_changed_marker: {
     source: "server_scripts:mods/Eternal Starlight/Recipes.js"
-    line: 6
+    line: 7
   }
 }

```


</details>

<details>
<summary>oritech/augment/giant</summary>

```diff
 {
   type: "oritech:augment_data"
   applyCost: [
     {
       count: 8
       ingredient: {
         item: "oritech:raw_biopolymer"
       }
     }
   ]
   effect: {
     amount: 1
     attributeOperationType: 1
     entityAttributeId: "minecraft:generic.scale"
   }
   requiredStation: "oritech:simple_augment_station"
   requirements: [
     "oritech:augment/dwarf"
     "oritech:augment/armor"
   ]
   researchCost: [
     {
-      count: 64
+      count: 32
       ingredient: {
         item: "oritech:raw_biopolymer"
       }
     }
     {
       count: 4
       ingredient: {
-        item: "oritech:small_uranium_dust"
+        tag: "c:dusts/uranium"
       }
     }
   ]
-  rfCost: 80000000
+  rfCost: 40000000
   time: 1600
   toggleable: true
   uiX: 55
   uiY: 90
 }

```


</details>

<details>
<summary>oritech/pulverizer/recycle/string</summary>

```diff
 {
   type: "oritech:pulverizer"
   fluidInput: {
     amount: 0
     fluid: "minecraft:empty"
   }
   fluidOutputs: [
   ]
   ingredients: [
     {
       tag: "oritech:recyclable/string"
     }
   ]
   results: [
     {
-      count: 3
+      count: 2
       id: "minecraft:string"
     }
   ]
   time: 120
 }

```


</details>

<details>
<summary>oritech/steamgen/steameng</summary>

```diff
 {
   type: "oritech:steam_engine"
   fluidInput: {
     amount: 32
-    fluid: "oritech:still_steam"
+    fluid: "#c:steam"
   }
   fluidOutputs: [
   ]
   ingredients: [
   ]
   results: [
   ]
   time: 1
 }

```


</details>

</blockquote>

</details>

<details>
<summary>Removed (17)</summary>
<blockquote>

<details>
<summary>modern_industrialization/kjs/1smi11vo4zqnjnv9xy3nun3tn</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modern_industrialization:auto_forge"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:hephaestus_forge_tier_5"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
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
-      amount: 50000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 50000
-    }
-    {
-      tag: "c:experience"
-      amount: 25000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/2eohvkrnmouhtz3o1sddyyu8</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_energy_input_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
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
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 149
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/2v3dgn7en4dd2ekmrul0pva10</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_crucible"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "ars_nouveau:enchanting_apparatus"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "ars_nouveau:arcane_core"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "ars_nouveau:arcane_core"
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
-      amount: 100000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 25000
-    }
-    {
-      tag: "c:experience"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/3fee9uczo37o7ljr57pdv4g0x</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_item_input_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_item"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
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
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 149
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/63uxslbk3luvh074rgy2nh1qg</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_fluid_input_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_fluids"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
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
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 149
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/85pe5gizt7an4mjmm8i0p12kp</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_item_output_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:chiseled_polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_item"
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
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 149
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/8xehnvxxpm93fx8r85sz4etle</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "forbidden_arcanus:corrupted_arcane_crystal"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "enderio:sentient_ender"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:arcane_crystal"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
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
-      amount: 2500
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 7500
-    }
-    {
-      tag: "c:experience"
-      amount: 10000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 166
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/95kpuxsthky093q0kwgamud98</summary>

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
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Awakened Unobtainium-Vibranium Alloy Block\"}],\"text\":\"\"}"
-        minecraft:enchantments: {
-          levels: {
-            minecraft:unbreaking: 1
-          }
-        }
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
<summary>modern_industrialization/kjs/99t4sp2ik4nrr5xez3cfqian0</summary>

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
-        minecraft:custom_name: "{\"extra\":[{\"italic\":false,\"text\":\"Infused Patrick Star\"}],\"text\":\"\"}"
-        minecraft:enchantments: {
-          levels: {
-            minecraft:mending: 1
-          }
-        }
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
<summary>modern_industrialization/kjs/d82pi63kdgdt54mhe46fefufg</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 150
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_fluid_output_hatch"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:quantum_injector"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:chiseled_polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "mekanism:ultimate_control_circuit"
-      amount: 1
-    }
-    {
-      item: "actuallyadditions:laser_relay_fluids"
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
-      amount: 2500
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 5000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 5000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 149
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/dndph4gqhk6mu257199vb722t</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modern_industrialization:runic_enchanter"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      item: "minecraft:enchanting_table"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "apothic_enchanting:treasure_shelf"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "apothic_enchanting:treasure_shelf"
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
-      amount: 100000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 1000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000
-    }
-    {
-      tag: "c:experience"
-      amount: 50000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>modern_industrialization/kjs/jo7jn5gldgxo1j20h43049yq</summary>

```diff
-{
-  type: "modern_industrialization:auto_forge"
-  eu: 512
-  duration: 300
-  item_outputs: [
-    {
-      item: "modern_industrialization:star_altar"
-      amount: 1
-    }
-  ]
-  item_inputs: [
-    {
-      item: "forbidden_arcanus:mundabitur_dust"
-      amount: 1
-    }
-    {
-      items: "eternal_starlight:loot_bag"
-      components: {
-        eternal_starlight:loot_table: "eternal_starlight:bosses/lunar_monstrosity"
-      }
-      type: "neoforge:components"
-      amount: 1
-    }
-    {
-      item: "enderio:z_logic_controller"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
-      amount: 1
-    }
-    {
-      item: "forbidden_arcanus:polished_darkstone"
-      amount: 1
-    }
-    {
-      item: "alltheores:enderium_gear"
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
-      amount: 200000
-    }
-    {
-      fluid: "kubejs:liquid_souls"
-      amount: 10000
-    }
-    {
-      fluid: "evilcraft:blood"
-      amount: 1000000
-    }
-    {
-      tag: "c:experience"
-      amount: 75000
-    }
-  ]
-  _kubejs_changed_marker: {
-    source: "server_scripts:modpack/runic_multis/controllers.js"
-    line: 78
-  }
-}

```


</details>

<details>
<summary>oritech/fuelgen/compat/pneumaticcraft/biodiesel</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "pneumaticcraft"
-        }
-      ]
-    }
-  ]
-  type: "oritech:fuel_generator"
-  fluidInput: {
-    amount: 1000
-    fluid: "pneumaticcraft:biodiesel"
-  }
-  fluidOutputs: [
-  ]
-  ingredients: [
-  ]
-  results: [
-  ]
-  time: 240
-}

```


</details>

<details>
<summary>oritech/fuelgen/compat/pneumaticcraft/diesel</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "pneumaticcraft"
-        }
-      ]
-    }
-  ]
-  type: "oritech:fuel_generator"
-  fluidInput: {
-    amount: 1000
-    fluid: "pneumaticcraft:diesel"
-  }
-  fluidOutputs: [
-  ]
-  ingredients: [
-  ]
-  results: [
-  ]
-  time: 240
-}

```


</details>

<details>
<summary>oritech/fuelgen/compat/pneumaticcraft/oil</summary>

```diff
-{
-  neoforge:conditions: [
-    {
-      type: "almostunified:conditional"
-      conditions_met: true
-      original_conditions: [
-        {
-          type: "neoforge:mod_loaded"
-          modid: "pneumaticcraft"
-        }
-      ]
-    }
-  ]
-  type: "oritech:fuel_generator"
-  fluidInput: {
-    amount: 1000
-    fluid: "pneumaticcraft:oil"
-  }
-  fluidOutputs: [
-  ]
-  ingredients: [
-  ]
-  results: [
-  ]
-  time: 60
-}

```


</details>

<details>
<summary>oritech/nickel_nugget</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-    {
-      tag: "c:ingots/nickel"
-    }
-  ]
-  result: {
-    count: 1
-    id: "alltheores:nickel_nugget"
-  }
-}

```


</details>

<details>
<summary>oritech/platinum_nugget</summary>

```diff
-{
-  type: "minecraft:crafting_shapeless"
-  category: "misc"
-  ingredients: [
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-    {
-      tag: "c:ingots/platinum"
-    }
-  ]
-  result: {
-    count: 1
-    id: "alltheores:platinum_nugget"
-  }
-}

```


</details>

</blockquote>

</details>

## 🏷️ Tags

<details open>
<summary>Added (3)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:storage_blocks/uranium_dust</summary>

```diff
+[
+  "oritech:uranium_dust_block"
+]

```


</details>

<details>
<summary>minecraft:block/structurize:good_solid_for_placeholder</summary>

```diff
+[
+  "minecolonies:farmland"
+  "minecolonies:floodedfarmland"
+  "minecraft:farmland"
+]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/uranium_dust</summary>

```diff
+[
+  "oritech:uranium_dust_block"
+]

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (7)</summary>
<blockquote>

<details>
<summary>minecraft:block/c:storage_blocks/raw_uranium</summary>

```diff
 [
   ... (4 entries)
+  "oritech:raw_uranium_block"
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:mineable/pickaxe</summary>

```diff
 [
   ... (7700 entries)
+  "mekmm:advanced_max_chemical_tank"
+  "mekmm:advanced_mid_chemical_tank"
   ... (16 entries)
+  "mekmm:basic_max_chemical_tank"
+  "mekmm:basic_mid_chemical_tank"
   ... (46 entries)
+  "mekmm:elite_max_chemical_tank"
+  "mekmm:elite_mid_chemical_tank"
   ... (9 entries)
+  "mekmm:large_chemical_infuser"
+  "mekmm:large_electrolytic_separator"
+  "mekmm:large_gas_burning_generator"
+  "mekmm:large_heat_generator"
+  "mekmm:large_rotary_condensentrator"
+  "mekmm:large_solar_neutron_activator"
+  "mekmm:modeler_doll"
   ... (51 entries)
+  "mekmm:ultimate_max_chemical_tank"
+  "mekmm:ultimate_mid_chemical_tank"
   ... (991 entries)
+  "modularbees:bee_extractor"
   ... (337 entries)
+  "oritech:raw_uranium_block"
   ... (36 entries)
+  "oritech:uranium_dust_block"
   ... (356 entries)
+  "railcraft:void_chest"
   ... (3429 entries)
 ]

```


</details>

<details>
<summary>minecraft:block/minecraft:needs_diamond_tool</summary>

```diff
 [
   ... (232 entries)
+  "railcraft:void_chest"
   ... (88 entries)
 ]

```


</details>

<details>
<summary>minecraft:entity_type/ars_nouveau:jar_blacklist</summary>

```diff
 [
-  "#allthemods:jank_blacklist"
   ... (3 entries)
+  "the_bumblezone:bee_queen"
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks</summary>

```diff
 [
   ... (417 entries)
+  "oritech:raw_uranium_block"
   ... (2 entries)
+  "oritech:uranium_dust_block"
   ... (34 entries)
 ]

```


</details>

<details>
<summary>minecraft:item/c:storage_blocks/raw_uranium</summary>

```diff
 [
   ... (5 entries)
+  "oritech:raw_uranium_block"
 ]

```


</details>

<details>
<summary>minecraft:worldgen/biome/dungeons_arise:has_structure/mining_complex_biomes</summary>

```diff
 [
-  "#dungeons_arise:collections/other_forests?"
-  "#dungeons_arise:collections/other_taigas?"
-  "#minecraft:is_forest"
-  "#minecraft:is_jungle"
-  "#minecraft:is_taiga"
-  "minecraft:desert"
-  "minecraft:plains"
-  "minecraft:savanna"
-  "minecraft:savanna_plateau"
-  "minecraft:snowy_plains"
-  "minecraft:sunflower_plains"
-  "minecraft:windswept_savanna"
+  "allthemodium:basalt_deltas"
+  "allthemodium:crimson_forest"
+  "allthemodium:desert"
+  "allthemodium:desert_hills"
+  "allthemodium:the_other"
+  "allthemodium:warped_forest"
 ]

```


</details>

</blockquote>

</details>

## ✍️ Registries

<details open>
<summary>Changed (5)</summary>
<blockquote>

<details>
<summary>block</summary>

```diff
 [
   ... (30485 entries)
+  "mekmm:advanced_max_chemical_tank"
+  "mekmm:advanced_mid_chemical_tank"
   ... (16 entries)
+  "mekmm:basic_max_chemical_tank"
+  "mekmm:basic_mid_chemical_tank"
   ... (18 entries)
+  "mekmm:elite_max_chemical_tank"
+  "mekmm:elite_mid_chemical_tank"
   ... (9 entries)
+  "mekmm:large_chemical_infuser"
+  "mekmm:large_electrolytic_separator"
+  "mekmm:large_gas_burning_generator"
+  "mekmm:large_heat_generator"
   ... (1 entries)
+  "mekmm:large_solar_neutron_activator"
+  "mekmm:modeler_doll"
   ... (9 entries)
+  "mekmm:ultimate_max_chemical_tank"
+  "mekmm:ultimate_mid_chemical_tank"
   ... (1884 entries)
+  "modularbees:bee_extractor"
   ... (680 entries)
+  "oritech:raw_uranium_block"
   ... (72 entries)
+  "oritech:uranium_dust_block"
   ... (5103 entries)
+  "railcraft:void_chest"
   ... (7071 entries)
 ]

```


</details>

<details>
<summary>block_entity_type</summary>

```diff
 [
   ... (1489 entries)
+  "mekmm:advanced_max_chemical_tank"
+  "mekmm:advanced_mid_chemical_tank"
   ... (16 entries)
+  "mekmm:basic_max_chemical_tank"
+  "mekmm:basic_mid_chemical_tank"
   ... (18 entries)
+  "mekmm:elite_max_chemical_tank"
+  "mekmm:elite_mid_chemical_tank"
   ... (9 entries)
+  "mekmm:large_chemical_infuser"
+  "mekmm:large_electrolytic_separator"
+  "mekmm:large_gas_burning_generator"
+  "mekmm:large_heat_generator"
   ... (1 entries)
+  "mekmm:large_solar_neutron_activator"
+  "mekmm:modeler_doll"
   ... (9 entries)
+  "mekmm:ultimate_max_chemical_tank"
+  "mekmm:ultimate_mid_chemical_tank"
   ... (235 entries)
+  "modularbees:bee_extractor"
   ... (347 entries)
+  "railcraft:void_chest"
   ... (471 entries)
 ]

```


</details>

<details>
<summary>dimension</summary>

```diff
 [
   ... (7 entries)
-  "hyperbox:747e03c1-e6b7-453b-ad58-549f8f0e9d14/firebox"
   ... (9 entries)
 ]

```


</details>

<details>
<summary>entity_type</summary>

```diff
 [
   ... (1015 entries)
+  "railcraft:cargo_minecart"
   ... (11 entries)
+  "railcraft:void_chest_minecart"
   ... (291 entries)
 ]

```


</details>

<details>
<summary>item</summary>

```diff
 [
   ... (39255 entries)
+  "mekmm:advanced_electrolysis_core"
   ... (2 entries)
+  "mekmm:advanced_max_chemical_tank"
+  "mekmm:advanced_mid_chemical_tank"
   ... (16 entries)
+  "mekmm:basic_max_chemical_tank"
+  "mekmm:basic_mid_chemical_tank"
   ... (19 entries)
+  "mekmm:elite_max_chemical_tank"
+  "mekmm:elite_mid_chemical_tank"
   ... (10 entries)
+  "mekmm:large_chemical_infuser"
+  "mekmm:large_electrolytic_separator"
+  "mekmm:large_gas_burning_generator"
+  "mekmm:large_heat_generator"
   ... (1 entries)
+  "mekmm:large_solar_neutron_activator"
+  "mekmm:modeler_doll"
   ... (11 entries)
+  "mekmm:ultimate_max_chemical_tank"
+  "mekmm:ultimate_mid_chemical_tank"
   ... (3053 entries)
+  "modularbees:bee_extractor"
   ... (1604 entries)
+  "oritech:raw_uranium_block"
   ... (86 entries)
+  "oritech:uranium_dust_block"
   ... (5963 entries)
+  "railcraft:cargo_minecart"
   ... (414 entries)
+  "railcraft:void_chest"
+  "railcraft:void_chest_minecart"
+  "railcraft:void_dust"
   ... (9152 entries)
 ]

```


</details>

</blockquote>

</details>

## 🗝️ Loot Table

<details>
<summary>Added (368)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/mekmm/blocks/advanced_max_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:advanced_max_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/advanced_max_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/advanced_mid_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:advanced_mid_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/advanced_mid_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/basic_max_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:basic_max_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/basic_max_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/basic_mid_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:basic_mid_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/basic_mid_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/elite_max_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:elite_max_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/elite_max_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/elite_mid_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:elite_mid_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/elite_mid_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_chemical_infuser</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:upgrades"
+                "mekanism:energy"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_chemical_infuser"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_chemical_infuser"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_electrolytic_separator</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:secondary_dump_mode"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:upgrades"
+                "mekanism:energy"
+                "mekanism:items"
+                "mekanism:fluids"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_electrolytic_separator"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_electrolytic_separator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_gas_burning_generator</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:upgrades"
+                "mekanism:energy"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_gas_burning_generator"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_gas_burning_generator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_heat_generator</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:upgrades"
+                "mekanism:energy"
+                "mekanism:items"
+                "mekanism:fluids"
+                "mekanism:heat_data"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_heat_generator"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_heat_generator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_rotary_condensentrator</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:rotary_mode"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:upgrades"
+                "mekanism:energy"
+                "mekanism:items"
+                "mekanism:fluids"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_rotary_condensentrator"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_rotary_condensentrator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/large_solar_neutron_activator</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:upgrades"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:large_solar_neutron_activator"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/large_solar_neutron_activator"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/modeler_doll</summary>

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
+          name: "mekmm:modeler_doll"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/modeler_doll"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/ultimate_max_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:ultimate_max_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/ultimate_max_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/mekmm/blocks/ultimate_mid_chemical_tank</summary>

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
+              function: "minecraft:copy_name"
+              source: "block_entity"
+            }
+            {
+              function: "minecraft:copy_components"
+              include: [
+                "mekanism:dump_mode"
+                "mekanism:ejector"
+                "mekanism:owner"
+                "mekanism:redstone_control"
+                "mekanism:security"
+                "mekanism:side_config"
+                "mekanism:items"
+                "mekanism:chemicals"
+              ]
+              source: "block_entity"
+            }
+          ]
+          name: "mekmm:ultimate_mid_chemical_tank"
+        }
+      ]
+      name: "main"
+      rolls: 1
+    }
+  ]
+  random_sequence: "mekmm:blocks/ultimate_mid_chemical_tank"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_picket_fence</summary>

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
+          name: "merrymaking:acacia_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_picket_fence_gate</summary>

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
+          name: "merrymaking:acacia_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_roof_slab</summary>

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
+                  block: "merrymaking:acacia_roof_slab"
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
+          name: "merrymaking:acacia_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_snowy_slab</summary>

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
+                  block: "merrymaking:acacia_snowy_slab"
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
+          name: "merrymaking:acacia_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_door</summary>

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
+              block: "merrymaking:acacia_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:acacia_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_fence</summary>

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
+          name: "merrymaking:acacia_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_fence_gate</summary>

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
+          name: "merrymaking:acacia_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_lights_fence</summary>

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
+          name: "merrymaking:acacia_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:acacia_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:acacia_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:acacia_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_lights_white_door</summary>

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
+              block: "merrymaking:acacia_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:acacia_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_multi_fence</summary>

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
+          name: "merrymaking:acacia_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/acacia_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:acacia_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/acacia_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/andesite_garland_lights_wall</summary>

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
+          name: "merrymaking:andesite_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/andesite_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/andesite_garland_multi_wall</summary>

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
+          name: "merrymaking:andesite_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/andesite_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/andesite_garland_wall</summary>

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
+          name: "merrymaking:andesite_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/andesite_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_picket_fence</summary>

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
+          name: "merrymaking:bamboo_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_picket_fence_gate</summary>

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
+          name: "merrymaking:bamboo_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_roof_slab</summary>

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
+                  block: "merrymaking:bamboo_roof_slab"
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
+          name: "merrymaking:bamboo_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_snowy_slab</summary>

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
+                  block: "merrymaking:bamboo_snowy_slab"
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
+          name: "merrymaking:bamboo_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_door</summary>

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
+              block: "merrymaking:bamboo_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:bamboo_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_fence</summary>

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
+          name: "merrymaking:bamboo_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_fence_gate</summary>

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
+          name: "merrymaking:bamboo_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_lights_fence</summary>

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
+          name: "merrymaking:bamboo_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:bamboo_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:bamboo_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:bamboo_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_lights_white_door</summary>

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
+              block: "merrymaking:bamboo_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:bamboo_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_multi_fence</summary>

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
+          name: "merrymaking:bamboo_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/bamboo_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:bamboo_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/bamboo_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_picket_fence</summary>

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
+          name: "merrymaking:birch_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_picket_fence_gate</summary>

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
+          name: "merrymaking:birch_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_roof_slab</summary>

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
+                  block: "merrymaking:birch_roof_slab"
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
+          name: "merrymaking:birch_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_snowy_slab</summary>

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
+                  block: "merrymaking:birch_snowy_slab"
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
+          name: "merrymaking:birch_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_door</summary>

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
+              block: "merrymaking:birch_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:birch_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_fence</summary>

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
+          name: "merrymaking:birch_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_fence_gate</summary>

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
+          name: "merrymaking:birch_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_lights_fence</summary>

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
+          name: "merrymaking:birch_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:birch_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:birch_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:birch_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_lights_white_door</summary>

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
+              block: "merrymaking:birch_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:birch_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_multi_fence</summary>

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
+          name: "merrymaking:birch_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/birch_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:birch_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/birch_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/blackstone_garland_lights_wall</summary>

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
+          name: "merrymaking:blackstone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/blackstone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/blackstone_garland_multi_wall</summary>

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
+          name: "merrymaking:blackstone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/blackstone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/blackstone_garland_wall</summary>

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
+          name: "merrymaking:blackstone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/blackstone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/brick_garland_lights_wall</summary>

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
+          name: "merrymaking:brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/brick_garland_multi_wall</summary>

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
+          name: "merrymaking:brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/brick_garland_wall</summary>

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
+          name: "merrymaking:brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/chalice</summary>

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
+          name: "merrymaking:chalice"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/chalice"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_picket_fence</summary>

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
+          name: "merrymaking:cherry_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_picket_fence_gate</summary>

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
+          name: "merrymaking:cherry_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_roof_slab</summary>

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
+                  block: "merrymaking:cherry_roof_slab"
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
+          name: "merrymaking:cherry_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_snowy_slab</summary>

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
+                  block: "merrymaking:cherry_snowy_slab"
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
+          name: "merrymaking:cherry_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_door</summary>

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
+              block: "merrymaking:cherry_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:cherry_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_fence</summary>

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
+          name: "merrymaking:cherry_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_fence_gate</summary>

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
+          name: "merrymaking:cherry_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_lights_fence</summary>

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
+          name: "merrymaking:cherry_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:cherry_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:cherry_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:cherry_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_lights_white_door</summary>

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
+              block: "merrymaking:cherry_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:cherry_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_multi_fence</summary>

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
+          name: "merrymaking:cherry_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cherry_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:cherry_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cherry_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/christmas_tree_stand</summary>

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
+          name: "merrymaking:christmas_tree_stand"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/christmas_tree_stand"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/christmas_wreath</summary>

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
+          name: "merrymaking:christmas_wreath"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/christmas_wreath"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/christmas_wreath_multi_lights</summary>

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
+          name: "merrymaking:christmas_wreath_multi_lights"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/christmas_wreath_multi_lights"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/christmas_wreath_white_lights</summary>

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
+          name: "merrymaking:christmas_wreath_white_lights"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/christmas_wreath_white_lights"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_cap</summary>

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
+          name: "merrymaking:classic_lights_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_diagonal_left</summary>

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
+          name: "merrymaking:classic_lights_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_diagonal_right</summary>

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
+          name: "merrymaking:classic_lights_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_horizontal</summary>

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
+          name: "merrymaking:classic_lights_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_vertical_corner_left</summary>

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
+          name: "merrymaking:classic_lights_vertical_corner_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_vertical_corner_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_vertical_corner_right</summary>

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
+          name: "merrymaking:classic_lights_vertical_corner_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_vertical_corner_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_vertical_left</summary>

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
+          name: "merrymaking:classic_lights_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_lights_vertical_right</summary>

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
+          name: "merrymaking:classic_lights_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_lights_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_cap</summary>

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
+          name: "merrymaking:classic_multi_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_diagonal_left</summary>

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
+          name: "merrymaking:classic_multi_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_diagonal_right</summary>

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
+          name: "merrymaking:classic_multi_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_horizontal</summary>

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
+          name: "merrymaking:classic_multi_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_vertical_corner_left</summary>

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
+          name: "merrymaking:classic_multi_vertical_corner_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_vertical_corner_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_vertical_corner_right</summary>

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
+          name: "merrymaking:classic_multi_vertical_corner_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_vertical_corner_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_vertical_left</summary>

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
+          name: "merrymaking:classic_multi_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/classic_multi_vertical_right</summary>

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
+          name: "merrymaking:classic_multi_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/classic_multi_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobbled_deepslate_garland_lights_wall</summary>

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
+          name: "merrymaking:cobbled_deepslate_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobbled_deepslate_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobbled_deepslate_garland_multi_wall</summary>

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
+          name: "merrymaking:cobbled_deepslate_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobbled_deepslate_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobbled_deepslate_garland_wall</summary>

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
+          name: "merrymaking:cobbled_deepslate_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobbled_deepslate_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobblestone_garland_lights_wall</summary>

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
+          name: "merrymaking:cobblestone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobblestone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobblestone_garland_multi_wall</summary>

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
+          name: "merrymaking:cobblestone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobblestone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cobblestone_garland_wall</summary>

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
+          name: "merrymaking:cobblestone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cobblestone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/cookie_tray</summary>

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
+          name: "merrymaking:empty_tray"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/cookie_tray"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_picket_fence</summary>

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
+          name: "merrymaking:crimson_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_picket_fence_gate</summary>

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
+          name: "merrymaking:crimson_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_roof_slab</summary>

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
+                  block: "merrymaking:crimson_roof_slab"
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
+          name: "merrymaking:crimson_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_snowy_slab</summary>

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
+                  block: "merrymaking:crimson_snowy_slab"
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
+          name: "merrymaking:crimson_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_door</summary>

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
+              block: "merrymaking:crimson_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:crimson_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_fence</summary>

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
+          name: "merrymaking:crimson_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_fence_gate</summary>

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
+          name: "merrymaking:crimson_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_lights_fence</summary>

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
+          name: "merrymaking:crimson_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:crimson_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:crimson_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:crimson_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_lights_white_door</summary>

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
+              block: "merrymaking:crimson_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:crimson_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_multi_fence</summary>

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
+          name: "merrymaking:crimson_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/crimson_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:crimson_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/crimson_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_picket_fence</summary>

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
+          name: "merrymaking:dark_oak_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_picket_fence_gate</summary>

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
+          name: "merrymaking:dark_oak_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_roof_slab</summary>

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
+                  block: "merrymaking:dark_oak_roof_slab"
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
+          name: "merrymaking:dark_oak_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_snowy_slab</summary>

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
+                  block: "merrymaking:dark_oak_snowy_slab"
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
+          name: "merrymaking:dark_oak_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_door</summary>

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
+              block: "merrymaking:dark_oak_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:dark_oak_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_fence</summary>

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
+          name: "merrymaking:dark_oak_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_fence_gate</summary>

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
+          name: "merrymaking:dark_oak_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_lights_fence</summary>

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
+          name: "merrymaking:dark_oak_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:dark_oak_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:dark_oak_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:dark_oak_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_lights_white_door</summary>

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
+              block: "merrymaking:dark_oak_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:dark_oak_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_multi_fence</summary>

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
+          name: "merrymaking:dark_oak_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dark_oak_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:dark_oak_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dark_oak_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:deepslate_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:deepslate_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_brick_garland_wall</summary>

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
+          name: "merrymaking:deepslate_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_brick_roof_slab</summary>

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
+                  block: "merrymaking:deepslate_brick_roof_slab"
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
+          name: "merrymaking:deepslate_brick_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_brick_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_brick_snowy_slab</summary>

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
+                  block: "merrymaking:deepslate_brick_snowy_slab"
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
+          name: "merrymaking:deepslate_brick_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_brick_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_tile_garland_lights_wall</summary>

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
+          name: "merrymaking:deepslate_tile_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_tile_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_tile_garland_multi_wall</summary>

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
+          name: "merrymaking:deepslate_tile_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_tile_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/deepslate_tile_garland_wall</summary>

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
+          name: "merrymaking:deepslate_tile_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/deepslate_tile_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/diorite_garland_lights_wall</summary>

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
+          name: "merrymaking:diorite_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/diorite_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/diorite_garland_multi_wall</summary>

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
+          name: "merrymaking:diorite_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/diorite_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/diorite_garland_wall</summary>

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
+          name: "merrymaking:diorite_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/diorite_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/dreidel</summary>

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
+          name: "merrymaking:dreidel"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/dreidel"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/empty_tray</summary>

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
+          name: "merrymaking:empty_tray"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/empty_tray"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/end_stone_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:end_stone_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/end_stone_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/end_stone_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:end_stone_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/end_stone_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/end_stone_brick_garland_wall</summary>

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
+          name: "merrymaking:end_stone_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/end_stone_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/fireplace_logs</summary>

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
+          name: "merrymaking:fireplace_logs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/fireplace_logs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_diagonal_left</summary>

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
+          name: "merrymaking:garland_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_diagonal_right</summary>

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
+          name: "merrymaking:garland_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_horizontal</summary>

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
+          name: "merrymaking:garland_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_horizontal_lights</summary>

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
+          name: "merrymaking:garland_horizontal_lights"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_horizontal_lights"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_horizontal_multi</summary>

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
+          name: "merrymaking:garland_horizontal_multi"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_horizontal_multi"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_lights_diagonal_left</summary>

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
+          name: "merrymaking:garland_lights_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_lights_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_lights_diagonal_right</summary>

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
+          name: "merrymaking:garland_lights_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_lights_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_multi_diagonal_left</summary>

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
+          name: "merrymaking:garland_multi_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_multi_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_multi_diagonal_right</summary>

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
+          name: "merrymaking:garland_multi_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_multi_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_left</summary>

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
+          name: "merrymaking:garland_vertical_corner_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_lights_left</summary>

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
+          name: "merrymaking:garland_vertical_corner_lights_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_lights_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_lights_right</summary>

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
+          name: "merrymaking:garland_vertical_corner_lights_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_lights_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_multi_left</summary>

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
+          name: "merrymaking:garland_vertical_corner_multi_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_multi_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_multi_right</summary>

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
+          name: "merrymaking:garland_vertical_corner_multi_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_multi_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_corner_right</summary>

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
+          name: "merrymaking:garland_vertical_corner_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_corner_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_left</summary>

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
+          name: "merrymaking:garland_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_lights_left</summary>

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
+          name: "merrymaking:garland_vertical_lights_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_lights_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_lights_right</summary>

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
+          name: "merrymaking:garland_vertical_lights_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_lights_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_multi_left</summary>

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
+          name: "merrymaking:garland_vertical_multi_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_multi_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_multi_right</summary>

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
+          name: "merrymaking:garland_vertical_multi_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_multi_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/garland_vertical_right</summary>

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
+          name: "merrymaking:garland_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/garland_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/gelt</summary>

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
+          name: "merrymaking:gelt"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/gelt"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/granite_garland_lights_wall</summary>

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
+          name: "merrymaking:granite_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/granite_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/granite_garland_multi_wall</summary>

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
+          name: "merrymaking:granite_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/granite_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/granite_garland_wall</summary>

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
+          name: "merrymaking:granite_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/granite_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/ham_dinner</summary>

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
+          name: "merrymaking:quartz_platter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/ham_dinner"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/harvest_tray</summary>

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
+          name: "merrymaking:empty_tray"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/harvest_tray"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/holly_sapling</summary>

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
+          name: "merrymaking:holly_sapling"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/holly_sapling"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_lights_cap</summary>

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
+          name: "merrymaking:icicle_lights_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_lights_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_lights_diagonal_left</summary>

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
+          name: "merrymaking:icicle_lights_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_lights_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_lights_diagonal_right</summary>

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
+          name: "merrymaking:icicle_lights_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_lights_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_lights_horizontal</summary>

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
+          name: "merrymaking:icicle_lights_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_lights_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_multi_cap</summary>

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
+          name: "merrymaking:icicle_multi_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_multi_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_multi_diagonal_left</summary>

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
+          name: "merrymaking:icicle_multi_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_multi_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_multi_diagonal_right</summary>

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
+          name: "merrymaking:icicle_multi_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_multi_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/icicle_multi_horizontal</summary>

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
+          name: "merrymaking:icicle_multi_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/icicle_multi_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/iron_wreath_door</summary>

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
+              block: "merrymaking:iron_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:iron_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/iron_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/iron_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:iron_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:iron_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/iron_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/iron_wreath_lights_white_door</summary>

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
+              block: "merrymaking:iron_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:iron_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/iron_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_picket_fence</summary>

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
+          name: "merrymaking:jungle_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_picket_fence_gate</summary>

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
+          name: "merrymaking:jungle_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_roof_slab</summary>

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
+                  block: "merrymaking:jungle_roof_slab"
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
+          name: "merrymaking:jungle_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_snowy_slab</summary>

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
+                  block: "merrymaking:jungle_snowy_slab"
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
+          name: "merrymaking:jungle_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_door</summary>

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
+              block: "merrymaking:jungle_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:jungle_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_fence</summary>

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
+          name: "merrymaking:jungle_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_fence_gate</summary>

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
+          name: "merrymaking:jungle_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_lights_fence</summary>

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
+          name: "merrymaking:jungle_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:jungle_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:jungle_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:jungle_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_lights_white_door</summary>

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
+              block: "merrymaking:jungle_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:jungle_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_multi_fence</summary>

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
+          name: "merrymaking:jungle_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/jungle_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:jungle_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/jungle_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/kinara</summary>

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
+          name: "merrymaking:kinara"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/kinara"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_picket_fence</summary>

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
+          name: "merrymaking:mangrove_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_picket_fence_gate</summary>

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
+          name: "merrymaking:mangrove_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_roof_slab</summary>

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
+                  block: "merrymaking:mangrove_roof_slab"
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
+          name: "merrymaking:mangrove_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_snowy_slab</summary>

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
+                  block: "merrymaking:mangrove_snowy_slab"
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
+          name: "merrymaking:mangrove_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_door</summary>

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
+              block: "merrymaking:mangrove_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:mangrove_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_fence</summary>

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
+          name: "merrymaking:mangrove_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_fence_gate</summary>

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
+          name: "merrymaking:mangrove_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_lights_fence</summary>

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
+          name: "merrymaking:mangrove_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:mangrove_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:mangrove_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:mangrove_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_lights_white_door</summary>

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
+              block: "merrymaking:mangrove_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:mangrove_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_multi_fence</summary>

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
+          name: "merrymaking:mangrove_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mangrove_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:mangrove_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mangrove_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_ball</summary>

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
+          name: "merrymaking:mantel_deco_ball"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_ball"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_candles</summary>

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
+          name: "merrymaking:mantel_deco_candles"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_candles"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_gingerbread_house</summary>

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
+          name: "merrymaking:mantel_deco_gingerbread_house"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_gingerbread_house"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_joy</summary>

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
+          name: "merrymaking:mantel_deco_joy"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_joy"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_lantern</summary>

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
+          name: "merrymaking:mantel_deco_lantern"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_lantern"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mantel_deco_tree</summary>

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
+          name: "merrymaking:mantel_deco_tree"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mantel_deco_tree"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/menorah</summary>

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
+          name: "merrymaking:menorah"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/menorah"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_corner_lights_vertical_left</summary>

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
+          name: "merrymaking:mini_corner_lights_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_corner_lights_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_corner_lights_vertical_right</summary>

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
+          name: "merrymaking:mini_corner_lights_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_corner_lights_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_corner_multi_vertical_left</summary>

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
+          name: "merrymaking:mini_corner_multi_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_corner_multi_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_corner_multi_vertical_right</summary>

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
+          name: "merrymaking:mini_corner_multi_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_corner_multi_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_cap</summary>

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
+          name: "merrymaking:mini_lights_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_diagonal_left</summary>

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
+          name: "merrymaking:mini_lights_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_diagonal_right</summary>

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
+          name: "merrymaking:mini_lights_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_horizontal</summary>

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
+          name: "merrymaking:mini_lights_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_vertical_left</summary>

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
+          name: "merrymaking:mini_lights_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_lights_vertical_right</summary>

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
+          name: "merrymaking:mini_lights_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_lights_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_cap</summary>

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
+          name: "merrymaking:mini_multi_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_diagonal_left</summary>

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
+          name: "merrymaking:mini_multi_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_diagonal_right</summary>

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
+          name: "merrymaking:mini_multi_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_horizontal</summary>

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
+          name: "merrymaking:mini_multi_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_vertical_left</summary>

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
+          name: "merrymaking:mini_multi_vertical_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_vertical_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mini_multi_vertical_right</summary>

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
+          name: "merrymaking:mini_multi_vertical_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mini_multi_vertical_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mkeka</summary>

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
+          name: "merrymaking:mkeka"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mkeka"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mkeka_with_kinara</summary>

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
+          name: "merrymaking:mkeka_with_kinara"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mkeka_with_kinara"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mossy_cobblestone_garland_lights_wall</summary>

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
+          name: "merrymaking:mossy_cobblestone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mossy_cobblestone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mossy_cobblestone_garland_multi_wall</summary>

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
+          name: "merrymaking:mossy_cobblestone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mossy_cobblestone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mossy_cobblestone_garland_wall</summary>

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
+          name: "merrymaking:mossy_cobblestone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mossy_cobblestone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mug</summary>

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
+          name: "merrymaking:mug"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mug"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mug_cocoa_block</summary>

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
+          name: "merrymaking:mug_cocoa_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mug_cocoa_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mug_eggnog_block</summary>

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
+          name: "merrymaking:mug_eggnog_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mug_eggnog_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/mug_pepp_cocoa_block</summary>

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
+          name: "merrymaking:mug_pepp_cocoa_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/mug_pepp_cocoa_block"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/nether_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:nether_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/nether_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/nether_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:nether_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/nether_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/nether_brick_garland_wall</summary>

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
+          name: "merrymaking:nether_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/nether_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_picket_fence</summary>

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
+          name: "merrymaking:oak_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_picket_fence_gate</summary>

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
+          name: "merrymaking:oak_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_roof_slab</summary>

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
+                  block: "merrymaking:oak_roof_slab"
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
+          name: "merrymaking:oak_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_snowy_slab</summary>

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
+                  block: "merrymaking:oak_snowy_slab"
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
+          name: "merrymaking:oak_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_door</summary>

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
+              block: "merrymaking:oak_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:oak_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_fence</summary>

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
+          name: "merrymaking:oak_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_fence_gate</summary>

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
+          name: "merrymaking:oak_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_lights_fence</summary>

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
+          name: "merrymaking:oak_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:oak_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:oak_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:oak_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_lights_white_door</summary>

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
+              block: "merrymaking:oak_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:oak_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_multi_fence</summary>

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
+          name: "merrymaking:oak_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/oak_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:oak_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/oak_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:polished_blackstone_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:polished_blackstone_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_brick_garland_wall</summary>

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
+          name: "merrymaking:polished_blackstone_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_brick_roof_slab</summary>

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
+                  block: "merrymaking:polished_blackstone_brick_roof_slab"
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
+          name: "merrymaking:polished_blackstone_brick_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_brick_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_brick_snowy_slab</summary>

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
+                  block: "merrymaking:polished_blackstone_brick_snowy_slab"
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
+          name: "merrymaking:polished_blackstone_brick_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_brick_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_garland_lights_wall</summary>

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
+          name: "merrymaking:polished_blackstone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_garland_multi_wall</summary>

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
+          name: "merrymaking:polished_blackstone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_blackstone_garland_wall</summary>

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
+          name: "merrymaking:polished_blackstone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_blackstone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_deepslate_garland_lights_wall</summary>

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
+          name: "merrymaking:polished_deepslate_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_deepslate_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_deepslate_garland_multi_wall</summary>

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
+          name: "merrymaking:polished_deepslate_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_deepslate_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/polished_deepslate_garland_wall</summary>

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
+          name: "merrymaking:polished_deepslate_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/polished_deepslate_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/present</summary>

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
+              name: "merrymaking:present"
+            }
+            {
+              type: "minecraft:item"
+              conditions: [
+                {
+                  condition: "minecraft:survives_explosion"
+                }
+              ]
+              name: "minecraft:air"
+            }
+          ]
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/present"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/prismarine_garland_lights_wall</summary>

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
+          name: "merrymaking:prismarine_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/prismarine_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/prismarine_garland_multi_wall</summary>

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
+          name: "merrymaking:prismarine_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/prismarine_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/prismarine_garland_wall</summary>

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
+          name: "merrymaking:prismarine_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/prismarine_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/quartz_platter</summary>

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
+          name: "merrymaking:quartz_platter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/quartz_platter"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_nether_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:red_nether_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_nether_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_nether_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:red_nether_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_nether_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_nether_brick_garland_wall</summary>

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
+          name: "merrymaking:red_nether_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_nether_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_sandstone_garland_lights_wall</summary>

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
+          name: "merrymaking:red_sandstone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_sandstone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_sandstone_garland_multi_wall</summary>

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
+          name: "merrymaking:red_sandstone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_sandstone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/red_sandstone_garland_wall</summary>

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
+          name: "merrymaking:red_sandstone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/red_sandstone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_acacia_stairs</summary>

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
+          name: "merrymaking:roof_acacia_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_acacia_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_bamboo_stairs</summary>

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
+          name: "merrymaking:roof_bamboo_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_bamboo_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_birch_stairs</summary>

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
+          name: "merrymaking:roof_birch_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_birch_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_cherry_stairs</summary>

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
+          name: "merrymaking:roof_cherry_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_cherry_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_crimson_stairs</summary>

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
+          name: "merrymaking:roof_crimson_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_crimson_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_dark_oak_stairs</summary>

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
+          name: "merrymaking:roof_dark_oak_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_dark_oak_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_deepslate_brick_stairs</summary>

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
+          name: "merrymaking:roof_deepslate_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_deepslate_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_jungle_stairs</summary>

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
+          name: "merrymaking:roof_jungle_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_jungle_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_mangrove_stairs</summary>

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
+          name: "merrymaking:roof_mangrove_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_mangrove_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_oak_stairs</summary>

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
+          name: "merrymaking:roof_oak_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_oak_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_polished_blackstone_brick_stairs</summary>

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
+          name: "merrymaking:roof_polished_blackstone_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_polished_blackstone_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_spruce_stairs</summary>

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
+          name: "merrymaking:roof_spruce_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_spruce_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_stone_brick_stairs</summary>

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
+          name: "merrymaking:roof_stone_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_stone_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/roof_warped_stairs</summary>

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
+          name: "merrymaking:roof_warped_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/roof_warped_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/sandstone_garland_lights_wall</summary>

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
+          name: "merrymaking:sandstone_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/sandstone_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/sandstone_garland_multi_wall</summary>

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
+          name: "merrymaking:sandstone_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/sandstone_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/sandstone_garland_wall</summary>

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
+          name: "merrymaking:sandstone_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/sandstone_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/small_spruce_bottom</summary>

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
+          name: "merrymaking:christmas_tree"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/small_spruce_bottom"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/small_spruce_middle</summary>

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
+          name: "minecraft:air"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/small_spruce_middle"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/small_spruce_top</summary>

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
+          name: "minecraft:air"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/small_spruce_top"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_acacia_stairs</summary>

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
+          name: "merrymaking:snowy_acacia_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_acacia_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_bamboo_stairs</summary>

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
+          name: "merrymaking:snowy_bamboo_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_bamboo_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_birch_stairs</summary>

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
+          name: "merrymaking:snowy_birch_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_birch_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_cherry_stairs</summary>

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
+          name: "merrymaking:snowy_cherry_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_cherry_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_crimson_stairs</summary>

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
+          name: "merrymaking:snowy_crimson_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_crimson_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_dark_oak_stairs</summary>

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
+          name: "merrymaking:snowy_dark_oak_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_dark_oak_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_deepslate_brick_stairs</summary>

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
+          name: "merrymaking:snowy_deepslate_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_deepslate_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_jungle_stairs</summary>

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
+          name: "merrymaking:snowy_jungle_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_jungle_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_mangrove_stairs</summary>

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
+          name: "merrymaking:snowy_mangrove_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_mangrove_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_oak_stairs</summary>

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
+          name: "merrymaking:snowy_oak_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_oak_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_polished_blackstone_brick_stairs</summary>

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
+          name: "merrymaking:snowy_polished_blackstone_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_polished_blackstone_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_spruce_stairs</summary>

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
+          name: "merrymaking:snowy_spruce_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_spruce_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_stone_brick_stairs</summary>

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
+          name: "merrymaking:snowy_stone_brick_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_stone_brick_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/snowy_warped_stairs</summary>

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
+          name: "merrymaking:snowy_warped_stairs"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/snowy_warped_stairs"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_leaves_holly</summary>

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
+              name: "merrymaking:spruce_leaves_holly"
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
+              name: "merrymaking:holly_sapling"
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
+  random_sequence: "merrymaking:blocks/spruce_leaves_holly"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_leaves_lights_large_multi</summary>

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
+              name: "merrymaking:spruce_leaves_lights_large_multi"
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
+              name: "merrymaking:tiny_spruce"
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
+  random_sequence: "merrymaking:blocks/spruce_leaves_lights_large_multi"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_leaves_lights_large_white</summary>

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
+              name: "merrymaking:spruce_leaves_lights_large_white"
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
+              name: "merrymaking:tiny_spruce"
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
+  random_sequence: "merrymaking:blocks/spruce_leaves_lights_large_white"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_leaves_lights_multi</summary>

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
+              name: "merrymaking:spruce_leaves_lights_multi"
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
+              name: "merrymaking:tiny_spruce"
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
+  random_sequence: "merrymaking:blocks/spruce_leaves_lights_multi"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_leaves_lights_white</summary>

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
+              name: "merrymaking:spruce_leaves_lights_white"
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
+              name: "merrymaking:tiny_spruce"
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
+  random_sequence: "merrymaking:blocks/spruce_leaves_lights_white"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_picket_fence</summary>

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
+          name: "merrymaking:spruce_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_picket_fence_gate</summary>

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
+          name: "merrymaking:spruce_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_roof_slab</summary>

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
+                  block: "merrymaking:spruce_roof_slab"
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
+          name: "merrymaking:spruce_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_snowy_slab</summary>

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
+                  block: "merrymaking:spruce_snowy_slab"
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
+          name: "merrymaking:spruce_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_door</summary>

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
+              block: "merrymaking:spruce_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:spruce_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_fence</summary>

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
+          name: "merrymaking:spruce_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_fence_gate</summary>

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
+          name: "merrymaking:spruce_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_lights_fence</summary>

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
+          name: "merrymaking:spruce_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:spruce_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:spruce_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:spruce_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_lights_white_door</summary>

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
+              block: "merrymaking:spruce_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:spruce_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_multi_fence</summary>

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
+          name: "merrymaking:spruce_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/spruce_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:spruce_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/spruce_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stone_brick_garland_lights_wall</summary>

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
+          name: "merrymaking:stone_brick_garland_lights_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stone_brick_garland_lights_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stone_brick_garland_multi_wall</summary>

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
+          name: "merrymaking:stone_brick_garland_multi_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stone_brick_garland_multi_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stone_brick_garland_wall</summary>

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
+          name: "merrymaking:stone_brick_garland_wall"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stone_brick_garland_wall"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stone_brick_roof_slab</summary>

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
+                  block: "merrymaking:stone_brick_roof_slab"
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
+          name: "merrymaking:stone_brick_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stone_brick_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stone_brick_snowy_slab</summary>

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
+                  block: "merrymaking:stone_brick_snowy_slab"
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
+          name: "merrymaking:stone_brick_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stone_brick_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/stuffed_poultry_dinner</summary>

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
+          name: "merrymaking:quartz_platter"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/stuffed_poultry_dinner"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/tiny_spruce</summary>

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
+          name: "merrymaking:tiny_spruce"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/tiny_spruce"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_lights_cap</summary>

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
+          name: "merrymaking:twinkling_icicle_lights_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_lights_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_lights_diagonal_left</summary>

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
+          name: "merrymaking:twinkling_icicle_lights_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_lights_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_lights_diagonal_right</summary>

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
+          name: "merrymaking:twinkling_icicle_lights_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_lights_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_lights_horizontal</summary>

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
+          name: "merrymaking:twinkling_icicle_lights_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_lights_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_multi_cap</summary>

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
+          name: "merrymaking:twinkling_icicle_multi_cap"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_multi_cap"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_multi_diagonal_left</summary>

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
+          name: "merrymaking:twinkling_icicle_multi_diagonal_left"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_multi_diagonal_left"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_multi_diagonal_right</summary>

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
+          name: "merrymaking:twinkling_icicle_multi_diagonal_right"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_multi_diagonal_right"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/twinkling_icicle_multi_horizontal</summary>

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
+          name: "merrymaking:twinkling_icicle_multi_horizontal"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/twinkling_icicle_multi_horizontal"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_picket_fence</summary>

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
+          name: "merrymaking:warped_picket_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_picket_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_picket_fence_gate</summary>

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
+          name: "merrymaking:warped_picket_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_picket_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_roof_slab</summary>

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
+                  block: "merrymaking:warped_roof_slab"
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
+          name: "merrymaking:warped_roof_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_roof_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_snowy_slab</summary>

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
+                  block: "merrymaking:warped_snowy_slab"
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
+          name: "merrymaking:warped_snowy_slab"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_snowy_slab"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_door</summary>

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
+              block: "merrymaking:warped_wreath_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:warped_wreath_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_fence</summary>

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
+          name: "merrymaking:warped_wreath_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_fence_gate</summary>

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
+          name: "merrymaking:warped_wreath_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_lights_fence</summary>

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
+          name: "merrymaking:warped_wreath_lights_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_lights_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_lights_fence_gate</summary>

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
+          name: "merrymaking:warped_wreath_lights_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_lights_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_lights_multi_door</summary>

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
+              block: "merrymaking:warped_wreath_lights_multi_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:warped_wreath_lights_multi_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_lights_multi_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_lights_white_door</summary>

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
+              block: "merrymaking:warped_wreath_lights_white_door"
+              condition: "minecraft:block_state_property"
+              properties: {
+                half: "lower"
+              }
+            }
+          ]
+          name: "merrymaking:warped_wreath_lights_white_door"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_lights_white_door"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_multi_fence</summary>

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
+          name: "merrymaking:warped_wreath_multi_fence"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_multi_fence"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/blocks/warped_wreath_multi_fence_gate</summary>

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
+          name: "merrymaking:warped_wreath_multi_fence_gate"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:blocks/warped_wreath_multi_fence_gate"
+}

```


</details>

<details>
<summary>minecraft/loot_table/merrymaking/entities/christmas_creeper</summary>

```diff
+{
+  type: "minecraft:entity"
+  pools: [
+    {
+      bonus_rolls: 0
+      entries: [
+        {
+          type: "minecraft:loot_table"
+          value: "minecraft:entities/creeper"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "merrymaking:entities/christmas_creeper"
+}

```


</details>

<details>
<summary>minecraft/loot_table/modularbees/blocks/bee_extractor</summary>

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
+          name: "modularbees:bee_extractor"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "modularbees:block/bee_extractor"
+}

```


</details>

<details>
<summary>minecraft/loot_table/oritech/blocks/raw_uranium_block</summary>

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
+          name: "oritech:raw_uranium_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/oritech/blocks/uranium_dust_block</summary>

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
+          name: "oritech:uranium_dust_block"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+}

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/blocks/void_chest</summary>

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
+          name: "railcraft:void_chest"
+        }
+      ]
+      rolls: 1
+    }
+  ]
+  random_sequence: "railcraft:blocks/void_chest"
+}

```


</details>

</blockquote>

</details>

<details open>
<summary>Changed (2)</summary>
<blockquote>

<details>
<summary>minecraft/loot_table/railcraft/chests/abandoned_mineshaft</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "railcraft:iron_crowbar"
           weight: 5
         }
         {
           type: "minecraft:item"
           name: "railcraft:iron_spike_maul"
           weight: 5
         }
         {
           type: "minecraft:item"
           name: "railcraft:overalls"
           weight: 5
         }
       ]
       name: "railcraft_tools"
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "minecraft:minecart"
           weight: 5
         }
         {
           type: "minecraft:item"
           name: "minecraft:chest_minecart"
           weight: 5
         }
         {
           type: "minecraft:item"
           name: "minecraft:hopper_minecart"
         }
         {
           type: "minecraft:item"
           name: "minecraft:tnt_minecart"
         }
         {
           type: "minecraft:item"
           name: "minecraft:hopper_minecart"
         }
         {
           type: "minecraft:item"
           name: "railcraft:tank_minecart"
         }
         {
           type: "minecraft:item"
           name: "railcraft:steam_locomotive"
         }
+        {
+          type: "minecraft:item"
+          name: "railcraft:cargo_minecart"
+          weight: 5
+        }
       ]
       name: "railcraft_carts"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           weight: 5
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:plate_chest_loot"
           weight: 2
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:gear_chest_loot"
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:ingot_chest_loot"
           weight: 4
         }
       ]
       name: "railcraft_resources"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 0
       }
     }
   ]
   random_sequence: "railcraft:chests/abandoned_mineshaft"
 }

```


</details>

<details>
<summary>minecraft/loot_table/railcraft/chests/component_workshop</summary>

```diff
 {
   type: "minecraft:chest"
   pools: [
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "railcraft:iron_crowbar"
           weight: 2
         }
         {
           type: "minecraft:item"
           name: "railcraft:seasons_crowbar"
         }
         {
           type: "minecraft:item"
           name: "railcraft:iron_spike_maul"
         }
         {
           type: "minecraft:item"
           name: "railcraft:charge_meter"
         }
         {
           type: "minecraft:item"
           name: "railcraft:signal_block_surveyor"
         }
         {
           type: "minecraft:item"
           name: "railcraft:signal_tuner"
         }
         {
           type: "minecraft:item"
           name: "railcraft:goggles"
         }
         {
           type: "minecraft:item"
           name: "railcraft:overalls"
           weight: 2
         }
       ]
       name: "railcraft_tools"
       rolls: 1
     }
     {
       bonus_rolls: 0
       entries: [
         {
           type: "minecraft:item"
           name: "minecraft:rail"
           weight: 5
         }
         {
           type: "minecraft:item"
           name: "minecraft:chest_minecart"
           weight: 3
         }
         {
           type: "minecraft:item"
           name: "minecraft:hopper_minecart"
         }
         {
           type: "minecraft:item"
           name: "minecraft:tnt_minecart"
         }
         {
           type: "minecraft:item"
           name: "minecraft:furnace_minecart"
         }
         {
           type: "minecraft:item"
           name: "railcraft:tank_minecart"
         }
+        {
+          type: "minecraft:item"
+          name: "railcraft:cargo_minecart"
+          weight: 3
+        }
       ]
       name: "railcraft_carts"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:coal"
           weight: 5
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:plate_chest_loot"
           weight: 2
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 3
                 min: 2
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:gear_chest_loot"
         }
         {
           type: "minecraft:tag"
           expand: true
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "railcraft:ingot_chest_loot"
           weight: 4
         }
         {
           type: "minecraft:item"
           functions: [
             {
               add: false
               count: {
                 type: "minecraft:uniform"
                 max: 8
                 min: 3
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:iron_ingot"
         }
       ]
       name: "railcraft_resources"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
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
                 max: 32
                 min: 16
               }
               function: "minecraft:set_count"
             }
           ]
           name: "minecraft:rail"
         }
       ]
       name: "railcraft_tracks"
       rolls: {
         type: "minecraft:uniform"
         max: 2
         min: 1
       }
     }
   ]
   random_sequence: "railcraft:chests/component_workshop"
 }

```


</details>

</blockquote>

</details>

