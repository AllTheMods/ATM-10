// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {

  //Awakened Alloy Block
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireEnergy(425984, 8, 9)
          .requireItem('allthemodium:unobtainium_vibranium_alloy_block', 31, 18)
          .requireItem('4x mysticalagriculture:awakened_supremium_essence', 31, 37)
          .requireItem('4x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:unbreaking":1}}]', 50, 18)
          .requireItem('4x mysticalagriculture:awakened_supremium_gemstone', 50, 37)
          .progressX(86)
          .progressY(27)
          .produceItem(`allthemodium:unobtainium_vibranium_alloy_block[enchantments={levels:{"minecraft:unbreaking":1}},custom_name='{"extra":[{"italic":false,"text":"Awakened Unobtainium-Vibranium Alloy Block"}],"text":""}']`, 126, 27)
          .width(152)
          .height(86)

  //Infused Patrick Star
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireEnergy(425984, 8, 9)
          .requireItem('allthemodium:vibranium_allthemodium_alloy_ingot', 31, 8)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_ingot', 31, 27)
          .requireItem('allthemodium:unobtainium_vibranium_alloy_ingot', 31, 46)
          .requireItem('4x minecraft:enchanted_book[stored_enchantments={levels:{"minecraft:mending":1}}]', 50, 8)
          .requireItem('12x apothic_enchanting:infused_breath', 50, 27)
          .requireItem('36x allthetweaks:atm_star_shard', 50, 46)
          .requireItem('allthetweaks:patrick_star', 69, 27)
          .progressX(105)
          .progressY(27)
          .produceItem(`allthetweaks:patrick_star[enchantments={levels:{"minecraft:mending":1}},custom_name='{"extra":[{"italic":false,"text":"Infused Patrick Star"}],"text":""}']`, 145, 27)
          .width(171)
          .height(90)

  //Star Shard ATM Star
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireEnergy(425984, 8, 9)
          .requireItem('forbidden_arcanus:mundabitur_dust', 31, 8)
          .requireItem('kubejs:atm_star_shard_5', 31, 27)
          .requireItem('kubejs:atm_star_shard_4', 31, 46)
          .requireItem('kubejs:atm_star_shard_1', 50, 8)
          .requireItem(`allthetweaks:patrick_star[enchantments={levels:{"minecraft:mending":1}},custom_name='{"extra":[{"italic":false,"text":"Infused Patrick Star"}],"text":""}']`, 50, 27)
          .requireItem('actuallyadditions:lens_of_the_killer', 50, 46)
          .requireItem('forbidden_arcanus:corrupti_dust', 69, 8)
          .requireItem('kubejs:atm_star_shard_2', 69, 27)
          .requireItem('kubejs:atm_star_shard_3', 69, 46)
          .progressX(105)
          .progressY(27)
          .produceItem('allthetweaks:atm_star', 145, 27)
          .width(171)
          .height(90)

  //Star Fragments
  let fragment = [
      {
          fragment: 1,
          shards: 48,
          prism: 'forbidden_arcanus:soul_binding_crystal'
      },
      {
          fragment: 2,
          shards: 52,
          prism: 'forbidden_arcanus:whirlwind_prism'
      },
      {
          fragment: 3,
          shards: 52,
          prism: 'forbidden_arcanus:smelter_prism'
      },
      {
          fragment: 4,
          shards: 52,
          prism: 'forbidden_arcanus:sea_prism'
      },
      {
          fragment: 5,
          shards: 52,
          prism: 'forbidden_arcanus:terrastomp_prism'
      }
  ]

  for (let item of fragment) {
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireEnergy(425984, 8, 9)    
          .requireItem(item.prism, 31, 17)
          .requireItem(`${item.shards}x allthetweaks:atm_star_shard`, 31, 37)
          .progressX(67)
          .progressY(28)
          .produceItem(`kubejs:atm_star_shard_${item.fragment}`, 107,28)
          .width(133)
          .height(87)
  }

  //Patric Star
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireEnergy(425984, 8, 9)
          .requireItem('8x minecraft:green_concrete', 31, 8)
          .requireItem('2x minecraft:lime_concrete', 31, 27)
          .requireItem('8x minecraft:green_concrete_powder', 31, 46)
          .requireItem('13x minecraft:magenta_concrete', 50, 8)
          .requireItem('11x minecraft:pink_concrete', 50, 27)
          .requireItem('8x minecraft:magenta_concrete_powder', 50, 46)
          .requireItem('5x minecraft:pink_concrete_powder', 69, 27)
          .progressX(105)
          .progressY(27)
          .produceItem('allthetweaks:patrick_star', 145, 27)
          .width(171)
          .height(90)

  //Patric Star - Create
      allthemods.custom({
  "type": "create:mechanical_crafting",
  "accept_mirrored": false,
  "category": "misc",
  "key": {
    "A": {
      "item": "minecraft:magenta_concrete"
    },
    "B": {
      "item": "minecraft:pink_concrete"
    },
    "C": {
      "item": "minecraft:pink_concrete_powder"
    },
    "D": {
      "item": "minecraft:green_concrete"
    },
    "E": {
      "item": "minecraft:green_concrete_powder"
    },
    "F": {
      "item": "minecraft:lime_concrete"
    },
    "G": {
      "item": "minecraft:magenta_concrete_powder"
    }
  },
  "pattern": [
    "    B    ",
    "   BCA   ",
    "BBBGCABBB",
    "ACGCGGGCA",
    " AAGGGBA ",
	"  EDDDE  ",
	" EFEDEFE ",
	"BEDD DDEB",
	"AAA   AAA"
  ],
  "result": {
    "count": 1,
    "id": "allthetweaks:patrick_star"
  },
  "show_notification": false
}).id("allthetweaks:allthetweaks/patrick_star")
     

  //Star Shaped Star
      allthemods.recipes.modular_machinery_reborn.machine_recipe('atm:runic_star_altar', 200)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 107, 8)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 88, 27)
          .requireItem('allthecompressed:nether_star_block_3x', 107, 27)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 126, 27)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 31, 46)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 50, 46)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 69, 46)
          .requireItem('allthecompressed:nether_star_block_3x', 88, 46)
          .requireItem('allthetweaks:oblivion_shard', 107, 46)
          .requireItem('allthecompressed:nether_star_block_3x', 126, 46)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 145, 46)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 164, 46)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 183, 46)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 31, 65)
          .requireItem('allthecompressed:nether_star_block_3x', 50, 65)
          .requireItem('allthecompressed:nether_star_block_3x', 69, 65)
          .requireItem('allthetweaks:dragon_soul', 88, 65)
          .requireItem('allthetweaks:withers_compass', 107, 65)
          .requireItem('allthetweaks:pulsating_black_hole', 126, 65)
          .requireItem('allthecompressed:nether_star_block_3x', 145, 65)
          .requireItem('allthecompressed:nether_star_block_3x', 164, 65)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 183, 65)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 50, 84)
          .requireItem(`allthemodium:unobtainium_vibranium_alloy_block[enchantments={levels:{"minecraft:unbreaking":1}},custom_name='{"extra":[{"italic":false,"text":"Awakened Unobtainium-Vibranium Alloy Block"}],"text":""}']`, 69, 84)
          .requireItem('allthetweaks:nexium_emitter', 88, 84)
          .requireItem('allthetweaks:patrick_star', 107, 84)
          .requireItem('allthetweaks:dimensional_seed', 126, 84)
          .requireItem(`allthemodium:unobtainium_vibranium_alloy_block[enchantments={levels:{"minecraft:unbreaking":1}},custom_name='{"extra":[{"italic":false,"text":"Awakened Unobtainium-Vibranium Alloy Block"}],"text":""}']`, 145, 84)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 164, 84)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 69, 103)
          .requireItem('allthetweaks:philosophers_fuel', 88, 103)
          .requireItem('allthetweaks:improbable_probability_device', 107, 103)
          .requireItem('mysticalagradditions:creative_essence', 126, 103)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 145, 103)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 50, 122)
          .requireItem('allthecompressed:nether_star_block_3x', 69, 122)
          .requireItem('allthecompressed:nether_star_block_3x', 88, 122)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 107, 122)
          .requireItem('allthecompressed:nether_star_block_3x', 126, 122)
          .requireItem('allthecompressed:nether_star_block_3x', 145, 122)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 164, 122)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 31, 141)
          .requireItem('allthecompressed:nether_star_block_3x', 50, 141)
          .requireItem('allthecompressed:nether_star_block_3x', 69, 141)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 88, 141)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 126, 141)
          .requireItem('allthecompressed:nether_star_block_3x', 145, 141)
          .requireItem('allthecompressed:nether_star_block_3x', 164, 141)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 183, 141)

          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 31, 160)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 50, 160)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 69, 160)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 145, 160)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 164, 160)
          .requireItem('allthemodium:unobtainium_allthemodium_alloy_block', 183, 160)

          .requireEnergy(425984, 8, 66)

          .progressX(221)
          .progressY(85)

          .height(201)
          .width(285)

          .produceItem('allthetweaks:atm_star', 261, 84)
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.