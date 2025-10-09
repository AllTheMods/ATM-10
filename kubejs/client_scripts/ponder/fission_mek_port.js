// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create('mekanismgenerators:fission_reactor_port')
	.scene('fission_mek_port','Mekanism Fission Reactor: Ports', 'kubejs:fission_mek',
		
	(scene, util) => {
		
				
			scene.showStructure();
            scene.idle(20);
			
			scene.world.setBlock([0, 1, 1], 'mekanismgenerators:fission_reactor_port', true);
			scene.world.setBlock([0, 1, 3], 'mekanismgenerators:fission_reactor_port', true);
			scene.world.modifyBlock([0, 1, 1], (curState) => curState.with("mode", "output_waste"), false);
			scene.world.modifyBlock([0, 1, 3], (curState) => curState.with("mode", "output_coolant"), false);
			
			scene.text(60, 'A Reactor Needs At Least 4 Ports', [0, 1.5, 3.5]).placeNearTarget();
			scene.addKeyframe();
			scene.idle(80)
			
			scene.addKeyframe()
			
			scene.text(60, 'Ports Can Be Changed Using A Configurator', [0, 1.5, 3.5]).placeNearTarget();
			scene.showControls(60, [0.5, 2, 3.5], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.idle(80);
			
			scene.addKeyframe();
			
			scene.text(160, 'Required Ports:', [-1, 4, 4]).placeNearTarget();
			
			scene.text(40, 'Input Coolant', [3.5, 1.5, 0]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Input Fuel', [1.5, 1.5, 0]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Output Waste', [0, 1.5, 1.5]).placeNearTarget();
			scene.idle(40);
			scene.text(40, 'Output Heated Coolant', [0, 1.5, 3.5]).placeNearTarget();
			scene.idle(40);
			scene.addKeyframe();
			scene.idle(10);
			
				
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
