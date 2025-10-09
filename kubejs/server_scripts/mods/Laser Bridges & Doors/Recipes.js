ServerEvents.recipes(allthemods => {
  allthemods.shaped('2x laserbridges:laser_source_block', [// arg 1: output
    'ABA', 
    'ACA',
    'AAA'  
  ], {
    A: '#c:ingots/iron', 
    B: '#c:glass_blocks',  //arg 3: the mapping object
    C: 'minecraft:end_crystal'   
  }
  )
})