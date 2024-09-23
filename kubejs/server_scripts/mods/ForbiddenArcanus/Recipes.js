// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
//https://wiki.valhelsia.net/external-mods/forbidden-and-arcanus/wiki/datapack-guide/hephaestus-forge-rituals

ServerEvents.recipes(allthemods => {
  function hephaestusForge(output, inputs, enhancers, essences, forge_tier, magic_circle){
    let recipe = {
      "forge_tier": forge_tier,
      "inputs": [],
      "magic_circle": magic_circle.type,
      "main_ingredient": {
        "item": magic_circle.item
      },
      "result": {
        "type": output.type,
        "result_item": {
          "count": output.count,
          "id": output.item
        }
      }
    }

    if(enhancers){
      recipe.enhancers.push(enhancers)
    }

    if(essences){
      if(essences.aureal){
        recipe.essences.aureal.push(essences.aureal)
      }
      if(essences.blood){
        recipe.essences.blood.push(essences.blood)
      }
      if(essences.souls){
        recipe.essences.souls.push(essences.souls)
      }
    }

    
    
  }
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
