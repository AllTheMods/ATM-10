// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.tags('fluid', allthemods => {
  allthemods.add('atm10:blood', ['evilcraft:blood', 'irons_spellbooks:blood']);
});

ServerEvents.recipes(allthemods => {
  let fill = allthemods.recipes.irons_spellbooks.alchemist_cauldron_fill;

  fill("1000x minecraft:water", "reliquary:emperor_chalice", "reliquary:emperor_chalice", false, "irons_spellbooks:cast.generic.lightning");

  allthemods
    .custom({
      type: 'irons_spellbooks:alchemist_cauldron_empty',
      fluid: {
        amount: 250,
        id: 'evilcraft:blood',
      },
      input: {
        item: 'minecraft:glass_bottle',
      },
      result: {
        count: 1,
        id: 'irons_spellbooks:blood_vial',
      },
    })
    .id('allthemods:irons_spellbooks/alchemist_cauldron/empty_blood_vial');

  allthemods
    .custom({
      type: 'irons_spellbooks:alchemist_cauldron_brew',
      base_fluid: {
        amount: 1000,
        id: 'evilcraft:blood',
      },
      byproduct: {
        id: 'irons_spellbooks:bloody_vellum',
      },
      input: {
        item: 'irons_spellbooks:hogskin',
      },
      results: [],
    })
    .id('allthemods:irons_spellbooks/alchemist_cauldron/soak_bloody_vellum');

  allthemods
    .custom({
      'neoforge:conditions': [
        {
          type: 'neoforge:mod_loaded',
          modid: 'create',
        },
      ],
      type: 'create:filling',
      ingredients: [
        {
          item: 'minecraft:glass_bottle',
        },
        {
          type: 'neoforge:tag',
          tag: 'atm10:blood',
          amount: 250,
        },
      ],
      results: [
        {
          id: 'irons_spellbooks:blood_vial',
        },
      ],
    })
    .id('irons_spellbooks:create_compat/create_fill_blood_vial');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
