// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
/*   allthemods.remove({ id: 'mekanism:atomic_disassembler' })
  allthemods.shaped('mekanism:atomic_disassembler', ['ITI', 'IAI', ' P '], {
    I: 'mekanism:alloy_infused',
    T: 'mekanism:energy_tablet',
    A: 'mekanism:alloy_atomic',
    P: 'allthemodium:allthemodium_pickaxe'
  })
  allthemods.remove({ id: 'mekanism:meka_tool' })
  allthemods.shaped('mekanism:meka_tool', ['UCU', 'TDT', 'PBP'], {
    U: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:configurator',
    T: '#forge:plates/unobtainium',
    D: 'mekanism:atomic_disassembler',
    B: 'mekanism:basic_induction_cell',
    P: 'mekanism:pellet_polonium'
  }) */
  allthemods.remove({ id: 'mekanism:upgrade/anchor' })

  // remove combiner recipes for ores
  allthemods.remove({ type: 'mekanism:combining', id: /ore/ })
  
  // GBG Recipe Change | Alfred
  allthemods.remove({ id: 'mekanismgenerators:generator/gas_burning' })
  allthemods.shaped( 'mekanismgenerators:gas_burning_generator', ['UBU', 'TDT', 'UBU'], {
	U: 'mekanism:ingot_refined_obsidian',
    B: 'mekanism:alloy_atomic',
    T: 'mekanismgenerators:bio_generator',
    D: 'mekanism:electrolytic_core'
  }).id('allthemods:mekanismgenerators/gas_burning_gen')

  //mekCrushing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, 'id');
  function mekCrushing(output, input, id) {
    let inputObject = {
      "count": input.count || 1
    };

    if (input.item) {
      inputObject["item"] = input.item;
    } else if (input.tag) {
      inputObject["tag"] = input.tag;
    }

    let recipe = {
      "type": "mekanism:crushing",
      "input": inputObject,
      "output": {
        "count": output.count || 1,
        "id": output.item
      }
    };

    allthemods.custom(recipe).id(`allthemods:mekanism/crushing/${id}`);
  }
  //mekSawing({item: 'mod:item', count: 0}, {item/tag: 'mod:item/tag', count: 0}, {chance: 0.00, item: 'mod:item',count: 0}, 'id');
  function mekSawing(output, input, extraOutput, id) {
    let inputObject = {
      "count": input.count || 1
    };

    if (input.item) {
      inputObject["item"] = input.item;
    } else if (input.tag) {
      inputObject["tag"] = input.tag;
    }

    let recipe = {
      "type": "mekanism:sawing",
      "input": inputObject,
      "main_output": {
        "count": output.count || 1,
        "id": output.item
      },
      "secondary_chance": extraOutput.chance,
      "secondary_output": {
        "count": extraOutput.count,
        "id": extraOutput.item
      }
    };

    allthemods.custom(recipe).id(`allthemods:mekanism/sawing/${id}`);
  }

  //list of all the mods to add recipes for
  const mods = ['croptopia', 'evilcraft', 'eternal_starlight', 'allthemodium',
    'integrateddynamics', 'ars_nouveau', 'regions_unexplored', 'productivetrees']

  mods.forEach(mod => {
    //gets all items from the mod with the #minecraft:logs tag
    let logs = Ingredient.of(`#minecraft:logs`).stacks.toArray().filter(item => item.getId().startsWith(mod + ':')) .map(item => item.getId());

    if(logs.length > 0) {
      logs.forEach(log => {
        mekSawing(
            {item: log.toString().replace('log', 'planks'), count: 6}, //gets the name of the log and replaces the 'log' with 'planks' to generate an output
            {tag: log + 's', count: 1}, //adds an 's' to the log name to get the tag
            {chance: 0.25, item: 'mekanism:sawdust', count: 1},
            mod + '/' + log.toString().split(':').pop() + '_to_planks'); //generates the id by adding the mod name in front of the log and adding a 'to planks' at the end
      })
    }
  });

  [['gravel','cobblestone'], ['sand','gravel']].forEach(recipe => {
    for (let count = 1; count < 10; count++) {
      mekCrushing(
          {item: 'allthecompressed:' + recipe[0] + '_' + count + 'x'},
          {item: 'allthecompressed:' + recipe[1] + '_' + count + 'x'},
          recipe[1] + '_to_' + recipe[0] + '_' + count + 'x'
      )
    }
  })

})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
