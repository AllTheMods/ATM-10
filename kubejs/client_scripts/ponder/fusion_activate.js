// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
		'mekanismgenerators:hohlraum',
		'mekanismgenerators:hohlraum[mekanism:chemicals={chemical_tanks:[{amount:10L,id:"mekanismgenerators:fusion_fuel"}]}]',
		'mekanismgenerators:laser_focus_matrix'
	])
	.scene('fusion_activation','Mekanism Fusion Reactor: Activation', 'kubejs:fusion_activation',
		
	(scene, util) => {
			scene.world.showSection([2, 0, 0, 6, 4, 6], Facing.down);
			//scene.world.hideSection([3, 0, 0, 5, 2, 0], Facing.up);
            scene.idle(10);
			
			scene.text(60, 'To activate the Fusion Reactor, we will need a few things.', [2, 2.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(80)
			
			scene.text(100, 'You will need to put a Hohlraum filled with D-T fuel in the Controller.', [4.5, 5, 3.5]).attachKeyFrame();
			scene.showControls(100, [4.5, 5.5, 3.5], 'down').withItem('mekanismgenerators:hohlraum');
			scene.idle(110);
			
			
			//show lasers
			scene.world.showSection([0, 0, 0, 1, 4, 6], Facing.down);
			scene.idle(10);
			
			//Laser
			scene.text(100, 'You will need to shoot 400MRF using Lasers into the Laser Matrix.', [0, 2.5, 3.5]).placeNearTarget().attachKeyFrame();
			scene.idle(110);
			
			//show laser
			scene.world.hideSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			scene.rotateCameraY(90);
			scene.idle(5)
			
			scene.text(100, 'The Laser Amplifier needs to have the Red face pointing towards the Matrix.', [1, 2.5, 3]).placeNearTarget().attachKeyFrame();
			scene.idle(110);
			
			scene.rotateCameraY(-90);
			scene.idle(5)
			
			//show everything
			scene.world.showSection([1, 0, 0, 6, 4, 6], Facing.down);
			scene.idle(10)
			
			
			//hide lasers
			scene.world.hideSection([0, 0, 0, 1, 4, 6], Facing.down);
			scene.idle(10);
			
			//fuel input
			
			scene.overlay.showText(100).text("You will also need to give the Reactor fuel.").independent(-50);
			scene.text(50, 'For Deuterium', [5.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.text(50, 'For Tritium.', [3.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			scene.text(80, 'The Reactor mixes the D-T fuel at a set rate when they are pumped in separately.', [4.5, 2.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(80);

    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
