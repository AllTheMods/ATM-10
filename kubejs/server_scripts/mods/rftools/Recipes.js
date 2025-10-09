// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
    allthemods.remove({ id: 'rftoolsbuilder:builder' })
    allthemods.shaped('rftoolsbuilder:builder', ['aea', 'rmr', 'ara'], {
      a: '#c:nuggets/allthemodium',
      e: '#c:ender_pearls',
      r: '#c:storage_blocks/redstone',
      m: 'rftoolsbase:machine_frame'
    });
	// Fix Syringe Display
     allthemods.shaped(Item.of('rftoolsutility:flight_module', 1), [
        'DUD',
        'DND',
        'DPD'
    ], {
        D: 'minecraft:ghast_tear',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:ghast"}]',
        N: 'rftoolsutility:moduleplus_template',
		P: 'rftoolsbase:infused_enderpearl'
    }).id('rftoolsutility:flight_module');
	allthemods.shaped(Item.of('rftoolsutility:blindness_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:black_dye',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:squid"}]',
        N: 'rftoolsutility:moduleplus_template'
    }).id('rftoolsutility:blindness_module');
	allthemods.shaped(Item.of('rftoolsutility:featherfalling_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:feather',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:chicken"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:featherfalling_module');
	allthemods.shaped(Item.of('rftoolsutility:haste_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:redstone',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:pillager"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:haste_module');
	allthemods.shaped(Item.of('rftoolsutility:glowing_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:glowstone',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:creeper"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:glowing_module');
	allthemods.shaped(Item.of('rftoolsutility:luck_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:quartz',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:cat"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:luck_module');
	allthemods.shaped(Item.of('rftoolsutility:nightvision_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:glowstone',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:drowned"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:nightvision_module');
	allthemods.shaped(Item.of('rftoolsutility:noteleport_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:ender_pearl',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:enderman"}]',
        N: 'rftoolsutility:moduleplus_template'
    }).id('rftoolsutility:noteleport_module');
	allthemods.shaped(Item.of('rftoolsutility:peaceful_module', 1), [
        'IUI',
        'DND',
        'IDI'
    ], {
        D: 'rftoolsbase:infused_enderpearl',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:iron_golem"}]',
        N: 'rftoolsutility:moduleplus_template',
		I: 'minecraft:iron_block'
    }).id('rftoolsutility:peaceful_module');
	allthemods.shaped(Item.of('rftoolsutility:poison_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:poisonous_potato',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:cave_spider"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:poison_module');
	allthemods.shaped(Item.of('rftoolsutility:regeneration_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:golden_apple',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:witch"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:regeneration_module');
	allthemods.shaped(Item.of('rftoolsutility:saturation_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:rotten_flesh',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:zombie"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:saturation_module');
	allthemods.shaped(Item.of('rftoolsutility:slowness_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:string',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:turtle"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:slowness_module');
	allthemods.shaped(Item.of('rftoolsutility:speed_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:powered_rail',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:wolf"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:speed_module');
	allthemods.shaped(Item.of('rftoolsutility:waterbreathing_module', 1), [
        'PUP',
        'DND',
        'PDP'
    ], {
        D: 'rftoolsbase:infused_enderpearl',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:guardian"}]',
        N: 'rftoolsutility:moduleplus_template',
		P: 'minecraft:prismarine'
    }).id('rftoolsutility:waterbreathing_module');
	allthemods.shaped(Item.of('rftoolsutility:weakness_module', 1), [
        'DUD',
        'DND',
        'DDD'
    ], {
        D: 'minecraft:cactus',
        U: 'rftoolsutility:syringe[rftoolsutility:syringe_data={level:10,mob:"minecraft:piglin"}]',
        N: 'rftoolsutility:module_template'
    }).id('rftoolsutility:weakness_module');
  })

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
