
// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
  const colors = [
    'white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray',
    'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'
  ];

  colors.forEach(color => {
    allthemods.shaped(`2x connectedglass:borderless_glass_${color}`, ['A', 'A'], {
      A: `minecraft:${color}_stained_glass`
    }).id(`connectedglass:borderless_glass_${color}1`);
  });

  allthemods.shaped('2x connectedglass:tinted_borderless_glass', ['A', 'A'], {
    A: 'minecraft:tinted_glass'
  }).id('connectedglass:tinted_borderless_glass1');
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
