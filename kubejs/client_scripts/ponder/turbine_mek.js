// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
	'mekanismgenerators:turbine_casing',
	'mekanismgenerators:turbine_valve',
	'mekanismgenerators:turbine_vent',
	'mekanismgenerators:turbine_rotor',
	'mekanismgenerators:turbine_blade',
	'mekanismgenerators:rotational_complex',
	'mekanismgenerators:saturating_condenser',
	'mekanism:pressure_disperser',
	'mekanismgenerators:electromagnetic_coil',
	])
	.scene('turbine_mek','Mekanism: Industrial Turbine', 'kubejs:turbine_mek',
		
	(scene, util) => {
		
				
			scene.showStructure();
            scene.idle(5);

			scene.text(60, 'The Industrial Turbine uses Heated Coolant to create Power.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'The edges must be made of Turbine Casings.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'The faces can be Turbine Casings, Structural Glass, Valves, or Vents.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.text(60, 'Turbine Valves pump in Steam, or export Power.', [0, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);

			//hide top
			scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
			scene.idle(5);	
			
			//hide walls
			scene.world.hideSection([0, 4, 0, 4, 6, 4], Facing.up);
			scene.world.hideSection([0, 1, 0, 3, 6, 0], Facing.up);
			scene.world.hideSection([0, 1, 0, 0, 6, 3], Facing.up);
			scene.idle(10);	
			
			//Turbine Rotor
			
			scene.text(80, 'Turbine Rotors must be placed in the middle. Each Rotor uses 2 Turbine Blades.', [2, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			//show next layer
			scene.world.showSection([2, 4, 2], Facing.up);
			scene.idle(10);	
			
			scene.text(80, 'A Rotational Complex must be placed on top of the Turbine Rotor.', [2, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			scene.world.showSection([1, 4, 1, 3, 4, 1], Facing.up);
			scene.world.showSection([3, 4, 2], Facing.up);
			scene.world.showSection([1, 4, 2], Facing.up);
			scene.world.showSection([1, 4, 3, 3, 4, 3], Facing.up);
			scene.idle(10);	
			
			scene.text(80, 'Pressure Dispersers must fill the layer around the Rotational Complex.', [1, 4.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			//Show Layer Vents
			
			scene.world.showSection([0, 4, 0, 4, 4, 0], Facing.up);
			scene.world.showSection([0, 4, 4, 4, 4, 4], Facing.up);
			scene.world.showSection([0, 4, 1, 0, 4, 3], Facing.up);
			scene.world.showSection([4, 4, 0, 4, 4, 4], Facing.up);
			
			scene.world.showSection([0, 1, 0, 3, 3, 0], Facing.up);
			scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.up);
			
			scene.text(120, 'Starting on this layer, Turbine Vents can be used for the outer faces. These also export Water from the Turbine.', [0, 4.5, 3.5]).placeNearTarget().attachKeyFrame();
			scene.idle(125);
			
			//Show Electromagnetic Coil
			
			scene.world.showSection([2, 5, 2], Facing.up);
			scene.idle(5);
			
			scene.text(60, 'Electromagnetic Coils are placed on top of the Rotational Complex.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65);
			
			scene.world.setBlock([2, 5, 1], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([1, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([2, 5, 3], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.setBlock([3, 5, 2], 'mekanismgenerators:electromagnetic_coil', true);
			scene.world.showSection([2, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 2], Facing.up);
			scene.world.showSection([2, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 2], Facing.up);
			scene.idle(10);
						
			scene.text(100, 'A max of 5 can be placed. They either must connect to each other, or be touching the Rotational Complex.', [2, 5.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(105);
			
			//Saturating Condensers
			
			scene.world.showSection([3, 5, 3], Facing.up);
			scene.world.showSection([1, 5, 1], Facing.up);
			scene.world.showSection([1, 5, 3], Facing.up);
			scene.world.showSection([3, 5, 1], Facing.up);
			
			scene.text(120, 'Saturating Condensers are used to convert Steam back into Water. These are not required, but must be placed on or above the Coil Layer.', [1, 5.5, 1.5]).placeNearTarget().attachKeyFrame();
			scene.idle(130);
			
			//Show other layers
			
			scene.world.showSection([0, 5, 0, 4, 5, 0], Facing.up);
			scene.world.showSection([0, 5, 4, 4, 5, 4], Facing.up);
			scene.world.showSection([0, 5, 1, 0, 5, 3], Facing.up);
			scene.world.showSection([4, 5, 0, 4, 5, 3], Facing.up);
			scene.idle(5);
			
			scene.world.showSection([0, 6, 0, 4, 6, 4], Facing.up);
			scene.idle(20);
			
			scene.world.hideSection([1, 6, 1, 3, 6, 3], Facing.up);
			scene.idle(15);
			scene.world.setBlock([1, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 1], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 2], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([1, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([2, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.world.setBlock([3, 6, 3], 'mekanismgenerators:turbine_vent', false);
			scene.idle(10);
			
			scene.world.showSection([1, 6, 1, 3, 6, 3], Facing.down);
			scene.idle(10);
			
			scene.text(80, 'The Top Face can be replaced with Turbine Vents, if needed.', [2.5, 6.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
