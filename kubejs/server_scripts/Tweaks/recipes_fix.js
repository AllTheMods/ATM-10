let $Stopwatch = Java.loadClass("com.google.common.base.Stopwatch")

KubeJSTweaks.beforeRecipes(event => {
  let timer = $Stopwatch.createStarted();

  event.dumpErroringRecipes()

  // Upgrade from forge to neoforge conditions
  event.fixCondition([
    "irons_spellbooks:patchouli_book",
    "apotheosis:book",
    "treetap:id_menril",
    "treetap:id_menril_tfc",
	/^silentgear:woodcutting\//,
	"silentgear:sapling/netherwood"
  ])

  // Fix "item" -> "id"
  event.fixItemAtKey([/^create:crushing\/gloomslate_/, /^create:crushing\/sculk_stone_/, /^create:cutting\/.*echo_/], "results")

  event.fixItemAtKey("treetap:id_menril", "result")

  // Fix farmer delight tool type that was renamed on 1.21.1
  // sound changed
  // and their result is now an array of a custom codec that have now "item" as a key
  event.getEntry([/^farmersdelight:cutting\/echo_/, "farmersdelight:integration/silentgear/cutting/netherwood"])
    .forEach(entry => {
      entry.replaceValueAtKey("tool", "type", "farmersdelight:tool_action", "farmersdelight:item_ability")

      entry.fromPath("sound").ifPresent(result => {
        result.first.add("sound", {sound_id: result.second})
      })
      if (entry.id() == "farmersdelight:integration/silentgear/cutting/netherwood") {
        let resultArray = entry.json().get("result")
        if (resultArray == null) return
        for (let item of resultArray) {
          if (!item.has("item")) continue
          item.add("item", {
            "id": item.get("item")
          })
        }
      }
    })

  // Simple key renaming to match current changes
  event.getEntry(/^createaddition:compat\/immersiveengineering\/rolling\//)
    .forEach(entry => {
      entry.renameKey("result", "results", true)
      entry.renameKey("input", "ingredients", true)
    })

  // Simple key renaming to match current changes
  event.getEntry("createaddition:compat/ae2/charged_certus_quartz")
    .forEach(entry => {
      entry.renameKey("result", "results", true)
      entry.renameKey("ingredient", "ingredients", true)
    })

  // this is the way now with biome_predicates
  event.getEntry("createaddition:compat/immersiveengineering/sphalerite")
    .forEach(entry => {
      entry.json().add("biome_predicates", [
        ["minecraft:is_overworld"]
      ])
    })

  // Scans items on result and add them back as conditions, izi fix
  event.getEntry(/^farmingforblockheads:market\//)
    .forEach(entry => {
      entry.addConditionsFromKey("result")
    })

  // Scans items/tags on ingredients and add them back as conditions
  event.getEntry("create:crafting/tree_fertilizer")
    .forEach(entry => {
      entry.addConditionsFromKey("ingredients")
    })

  event.getEntry(["merrymaking:aged_pine_mantel","merrymaking:exposed_pine_mantel","merrymaking:pine_mantel","merrymaking:weathered_pine_mantel"])
    .forEach(entry => {
      entry.addConditionsFromKey("key")
    })	


  // Fix a typo, they missed a `s`
  event.getEntry([
    "mekanism:compat/biomeswevegone/enriching/dacite/conversion_dacite_tile",
    "mekanism:compat/biomeswevegone/crushing/dacite/conversion_dacite_cobblestone",
    "mekanism:compat/biomeswevegone/enriching/dacite/conversion_dacite_bricks",
    "mekanism:compat/biomeswevegone/crushing/dacite/conversion_dacite_tile"
  ]).forEach(entry => {
    entry.replaceValueAtKey("input", "item", "biomeswevegone:dacite_tile", "biomeswevegone:dacite_tiles")
	entry.replaceValueAtKey("output", "id", "biomeswevegone:dacite_tile", "biomeswevegone:dacite_tiles")
  })

  // Another typo, a wild `'` at the name of the item
  event.getEntry("mekmm:compat/ars_nouveau/planting/magebloom").forEach(entry => {
    entry.fromPath("secondary_output.id").ifPresent(result => {
		result.first.add("id", result.second.getAsString().replace("'",""))
	})
  })

  // RIP Jonn, forgot `s`
  event.getEntry(/^dyenamicsandfriends:.*_hammock$/).forEach(entry => {
    entry.fixCondition()
    entry.replaceValueAtKey("key", "tag", "c:string", "c:strings")
  })

  // RIP Jonn2, forgot another `s`
  event.getEntry("productivetrees:crates/coffee_bean_crate").forEach(entry => {
	entry.replaceValueAtKey("key", "tag", "c:coffee_bean", "c:coffee_beans")
  })

  // RIP Jonn2, looks like it was changed to `_blocks` now
  event.getEntry("productivetrees:time_traveller_display").forEach(entry => {
	entry.replaceValueAtKey("key", "tag", "c:glass/colorless", "c:glass_blocks/colorless")
  })

  // Ignore warnings because silent gear ingredients
  // that contains "silentgear:material" are not ready
  // yet, but are valid in a later stage
  event.getEntry("@silentgear")
    .forEach(entry => {
      let ings = entry.json().get("ingredients")
      let keys = entry.json().get("key")

      if (ings != null) {
        for (let ing of ings) {
          let type = ing.get("type")
          if (type != null) {
            if (type.getAsString() == "silentgear:material") {
              entry.ignoreWarning()
            }
          }
        }
      }

      if (keys != null) {
        for (let key of keys.asMap().values()) {
          let type = key.get("type")
          if (type != null) {
            if (type.getAsString() == "silentgear:material") {
              entry.ignoreWarning()
            }
          }
        }
      }
    })

  // Ignore warnings because while this recipe
  // is not really valid, it still works
  event.getEntry(/^deeperdarker:.*_smithing$/)
    .forEach(entry => {
      entry.fromPath("template", "[]").ifPresent(result => entry.ignoreWarning())
    })
  
  // Adds mod condition check
  event.getEntry("productivebees:elementalcraft/pureinfusion/pure_crystal_bee")
    .forEach(entry => entry.addModConditionFromType())

  // old recipe
  event.disable("factory_blocks:mason_table_old")

  event.disable("supplementaries:botany_flax")

  event.getEntry(["mekmm:compat/immersiveengineering/lathe/aluminum_stick", "mekmm:compat/immersiveengineering/lathe/steel_stick"])
    .forEach(entry => {
      entry.renameKey("main_input", "input", false)
    })

  console.log(`Fixing recipes took ${timer.stop().elapsed("milliseconds")} ms...`)
})