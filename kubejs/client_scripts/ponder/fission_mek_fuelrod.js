// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
		'mekanismgenerators:fission_fuel_assembly',
		'mekanismgenerators:control_rod_assembly'
		])
	.scene('fission_mek_fuelrod','Mekanism Fission Reactor: Fuel Assembly', 'kubejs:fission_mek',
		
	(scene, util) => {
		
				
			scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
			scene.idle(20);
			scene.world.hideSection([0, 1, 0, 3, 4, 3], Facing.up);
            scene.idle(20);
			
			scene.text(80, 'Place Fuel Assembly Blocks Inside To Make The Fuel Rods', [2.5, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(10);
			scene.world.setBlock([2, 2, 2], 'mekanismgenerators:fission_fuel_assembly', true);
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(80);
			
			scene.text(120, 'Fuel Rods are created with several Fission Fuel Assembly blocks with a Control Rod Assembly on top.', [1.5, 2.5, 2.5]).placeNearTarget();
			scene.idle(40);
			scene.addKeyframe();
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.showSection([2, 3, 2], Facing.down)
			scene.idle(80);
			
			scene.text(80, 'Place Control Rod Assembly At The Top Of Each Fuel Rod', [1.5, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(90);
			
			scene.text(80, 'Control Rod Assembly blocks are placed 1 block from the ceiling.', [1.5, 3.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(90);
			
			scene.text(60, 'Fuel Rods Cannot Touch', [1.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([1, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 1, 2], 'mekanismgenerators:fission_fuel_assembly', true);
            scene.world.showSection([1, 1, 2], Facing.down)
			scene.world.showSection([3, 1, 2], Facing.down)
			scene.idle(60)
			scene.world.setBlock([1, 1, 2], 'air', true);
			scene.world.setBlock([3, 1, 2], 'air', true);
			scene.idle(40);
			
			scene.world.hideSection([1, 1, 1, 3, 3, 3], Facing.up);
			scene.idle(40);
			scene.world.setBlock([1, 1, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 2, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 3, 1], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([1, 1, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 2, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([1, 3, 3], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([3, 1, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 2, 1], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 3, 1], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.setBlock([3, 1, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 2, 3], 'mekanismgenerators:fission_fuel_assembly', true);
			scene.world.setBlock([3, 3, 3], 'mekanismgenerators:control_rod_assembly', true);
			scene.world.showSection([1, 1, 1, 3, 3, 3], Facing.down);
			
			scene.text(80, 'Multiple Fuel Rods work best in a checkerboard pattern.', [1.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(100);
			
			scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.down)
			scene.idle(5);
			scene.world.showSection([0, 1, 1, 0, 4, 3], Facing.down)
			scene.idle(5);
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
			scene.idle(20);
			
		
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
