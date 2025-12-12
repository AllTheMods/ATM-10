// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

ServerEvents.recipes(allthemods => {
	// Draconic Evolution Clearing
	const draconicclearing = [
		"awakened_crafting_injector",
		"basic_crafting_injector",
		"basic_io_crystal",
		"basic_wireless_crystal",
		"celestial_manipulator",
		"chaotic_crafting_injector",
		"crafting_core",
		"disenchanter",
		"dislocator_pedestal",
		"dislocator_receptacle",
		"draconic_io_crystal",
		"draconic_wireless_crystal",
		"draconium_chest",
		"energy_transfuser",
		"entity_detector",
		"entity_detector_advanced",
		"fluid_gate",
		"flux_gate",
		"generator",
		"grinder",
		"reactor_core",
		"wyvern_crafting_injector",
		"wyvern_io_crystal",
		"wyvern_wireless_crystal"
	]
	draconicclearing.forEach((name) => {
		let material = Item.of(`draconicevolution:${name}`)
		
		allthemods.shapeless(material, [material]).id(`allthemods:clear_draconicevolution/${name}`)
	})
	
	// Powah Energizing Rod Clearing
	const powahclearing = [
		"starter",
		"basic",
		"hardened",
		"blazing",
		"niotic",
		"spirited",
		"nitro"
	]
	powahclearing.forEach((name) => {
		let material = Item.of(`powah:energizing_rod_${name}`)
		
		allthemods.shapeless(material, [material]).id(`allthemods:clear_powah/energizing_rod_${name}`)
	})
})

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.