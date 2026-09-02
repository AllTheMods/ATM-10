let CRUSHING_COMPAT_TARGETS = [
  {
    from: {
      item: 'advanced_ae:shattered_singularity',
    },
    toId: 'advanced_ae:quantum_infused_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: false, // advanced_ae:quantum_infused_dust_crushed
    modernIndustrializationMacerator: true,
    occultismCrushing: true,
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      item: 'draconicevolution:awakened_draconium_ingot',
    },
    toId: 'draconicevolution:awakened_draconium_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: true,
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      item: 'draconicevolution:draconium_ingot',
    },
    toId: 'draconicevolution:draconium_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: true,
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:gems/entro',
    },
    toId: 'extendedae:entro_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: false, // extendedae:mek/entro_dust
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/entro_dust_from_gem
    oritechGrinder: false, // oritech:grinder/compat/extendedae/entrodust
    oritechPulverizer: false, // oritech:pulverizer/compat/extendedae/entrodust
  },
  {
    from: {
      item: 'forbidden_arcanus:arcane_crystal',
    },
    toId: 'forbidden_arcanus:arcane_crystal_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: false, // enderio:smelting/forbidden_arcanus/smelting/arcane_crystal_dust_from_smelting
    immersiveengineeringCrusher: true,
    mekanismCrushing: false, // forbidden_arcanus:/mekanism_generated/smelting/arcane_crystal_dust_from_smelting
    modernIndustrializationMacerator: false, // forbidden_arcanus:/smelting/arcane_crystal_dust_from_smelting_exported_mi_furnace
    occultismCrushing: false, // occultism:crushing/arcane_crystal_dust_from_gem
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      item: 'immersiveengineering:plate_hop_graphite',
    },
    toId: 'immersiveengineering:dust_hop_graphite',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: false, // immersiveengineering:crusher/graphite_plate
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: true,
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      item: 'immersiveengineering:ingot_hop_graphite',
    },
    toId: 'immersiveengineering:dust_hop_graphite',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: false, // immersiveengineering:crusher/graphite_ingot
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/hop_graphite_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/adamant',
    },
    toId: 'oritech:adamant_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/adamant_dust_from_ingot
    oritechGrinder: false, // oritech:grinder/adamant
    oritechPulverizer: false, // oritech:pulverizer/adamant
  },
  {
    from: {
      tag: 'c:ingots/biosteel',
    },
    toId: 'oritech:biosteel_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/biosteel_dust_from_ingot
    oritechGrinder: false, // oritech:grinder/biosteel
    oritechPulverizer: false, // oritech:pulverizer/biosteel
  },
  {
    from: {
      tag: 'c:ingots/duratium',
    },
    toId: 'oritech:duratium_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/duratium_dust_from_ingot
    oritechGrinder: false, // oritech:grinder/duratium
    oritechPulverizer: false, // oritech:pulverizer/duratium
  },
  {
    from: {
      tag: 'c:ingots/energite',
    },
    toId: 'oritech:energite_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/energite_dust_from_ingot
    oritechGrinder: false, // oritech:grinder/energite
    oritechPulverizer: false, // oritech:pulverizer/energite
  },
  {
    from: {
      tag: 'c:ingots/plutonium',
    },
    toId: 'oritech:plutonium_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/plutonium_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/crimson_iron',
    },
    toId: 'silentgear:crimson_iron_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/crimson_iron_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/crimson_steel',
    },
    toId: 'silentgear:crimson_steel_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/crimson_steel_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/blaze_gold',
    },
    toId: 'silentgear:blaze_gold_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/blaze_gold_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/azure_silver',
    },
    toId: 'silentgear:azure_silver_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/azure_silver_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/azure_electrum',
    },
    toId: 'silentgear:azure_electrum_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/azure_electrum_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      tag: 'c:ingots/tyrian_steel',
    },
    toId: 'silentgear:tyrian_steel_dust',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: false, // occultism:crushing/tyrian_steel_dust_from_ingot
    oritechGrinder: true,
    oritechPulverizer: true,
  },
  {
    from: {
      item: 'minecraft:shulker_shell',
    },
    toId: 'silentgear:crushed_shulker_shell',
    actuallyadditionsCrushing: true,
    createCrushing: true,
    enderioSagMilling: true,
    immersiveengineeringCrusher: true,
    mekanismCrushing: true,
    modernIndustrializationMacerator: true,
    occultismCrushing: true,
    oritechGrinder: true,
    oritechPulverizer: true,
  },
];

ServerEvents.recipes((allthemods) => {
  function addCrushingCompatRecipes(target) {
    let id = `${target.toId.split(':').at(-1)}_from_${('tag' in target.from ? target.from.tag.split(/[\/:]/).at(-1) : target.from.item.split(':').at(-1))}`;
    if (target.actuallyadditionsCrushing) {
      allthemods.custom({
        type: 'actuallyadditions:crushing',
        ingredient: target.from,
        result: [
          {
            result: {
              count: 1,
              id: target.toId,
            },
          },
        ],
      }).id(`allthemods:compat/actuallyadditions/crushing/${id}`);
    }
    if (target.createCrushing) {
      allthemods.custom({
        type: 'create:crushing',
        ingredients: [target.from],
        processing_time: 250,
        results: [
          {
            id: target.toId,
          },
        ],
      }).id(`allthemods:compat/create/crushing/${id}`);
    }
    if (target.enderioSagMilling) {
      allthemods.custom({
        type: 'enderio:sag_milling',
        energy: 2400,
        bonus: 'none',
        input: target.from,
        outputs: [
          {
            item: {
              count: 1,
              id: target.toId,
            },
          },
        ],
      }).id(`allthemods:compat/enderio/sag_milling/${id}`);
    }
    if (target.immersiveengineeringCrusher) {
      allthemods.custom({
        type: 'immersiveengineering:crusher',
        energy: 2400,
        input: target.from,
        result: {
          item: target.toId,
        },
      }).id(`allthemods:compat/immersiveengineering/crusher/${id}`);
    }
    if (target.mekanismCrushing) {
      allthemods.custom({
        type: 'mekanism:crushing',
        input: target.from,
        output: {
          count: 1,
          id: target.toId,
        },
      }).id(`allthemods:compat/mekanism/crushing/${id}`);
    }
    if (target.modernIndustrializationMacerator) {
      allthemods.custom({
        type: 'modern_industrialization:macerator',
        duration: 200,
        eu: 2,
        item_inputs: [target.from],
        item_outputs: [
          {
            amount: 1,
            item: target.toId,
          },
        ],
      }).id(`allthemods:compat/modern_industrialization/macerator/${id}`);
    }
    if (target.occultismCrushing) {
      allthemods.custom({
        type: 'occultism:crushing',
        ignore_crushing_multiplier: true,
        ingredient: target.from,
        result: {
          type: 'occultism:item',
          count: 1,
          id: target.toId,
        },
      }).id(`allthemods:compat/occultism/crushing/${id}`);
    }
    if (target.oritechGrinder) {
      allthemods.custom({
        type: 'oritech:grinder',
        ingredients: [target.from],
        results: [
          {
            count: 1,
            id: target.toId,
          },
        ],
        time: 20,
      }).id(`allthemods:compat/oritech/grinder/${id}`);
    }
    if (target.oritechPulverizer) {
      allthemods.custom({
        type: 'oritech:pulverizer',
        ingredients: [target.from],
        results: [
          {
            count: 1,
            id: target.toId,
          },
        ],
        time: 40,
      }).id(`allthemods:compat/oritech/pulverizer/${id}`);
    }
  }

  for (let target of CRUSHING_COMPAT_TARGETS) {
    addCrushingCompatRecipes(target);
  }
});
