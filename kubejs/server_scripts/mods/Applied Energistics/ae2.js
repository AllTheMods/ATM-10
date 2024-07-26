ServerEvents.recipes(event => {

       

      //eliminados
      event.remove({output:'aeinfinitybooster:infinity_card'})
      event.remove({output:'aeinfinitybooster:dimension_card'})
      event.remove({output:'ae2:cell_workbench'})
      event.remove({output:'ae2:tiny_tnt'})
      event.remove({output:'ae2:matter_cannon'})


  
  //perfecto ciernes
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"
    },
    "ingredients": [
      {
        "item": "ae2:charged_certus_quartz_crystal"
      },
      {
        "item": "ae2:flawed_budding_quartz"
      }
    ],
    "result": {
      "item": "ae2:flawless_budding_quartz"
    }
  }).id('nadiendev:ciernesperfecto')


    
    
    
      
    })