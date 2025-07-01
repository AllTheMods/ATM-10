// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create('mekanismgenerators:fission_reactor_logic_adapter')
	.scene('fission_mek_logic','Mekanism Fission Reactor: Logic Adapters', 'kubejs:fission_logic_example',
		
	(scene, util) => {
		
			
			scene.world.showSection([0, 0, 2, 4, 4, 6], Facing.down);
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:reactor_glass', false);
            scene.idle(20);
			
			scene.text(60, 'Logic Adapters allow Redstone Control for Reactors.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(80)
			
			
			scene.text(60, 'Right Click to Open Configuration Settings', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.showControls(60, [2.5, 2.5, 2], 'down').rightClick();
			scene.idle(70);
			
			
			scene.text(80, 'With two, you can set up a Fail Safe that can shut off the Reactor under certain conditions.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:fission_reactor_logic_adapter', true);
            scene.idle(90);
			
			scene.text(60, 'Set this one to Activation', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			scene.text(60, 'Set this one to Damage Critical.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(70);
			
			scene.world.showSection([2, 0, 0], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 0, 1], Facing.down);
			scene.idle(5);
			scene.world.showSection([2, 1, 1], Facing.down);
			scene.idle(5);
			
			scene.text(60, 'When the Reactor has Critical Damage, it will give off a redstone signal.', [2.5, 1.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(10);
			scene.idle(60);
			
			scene.world.setBlock([2, 2, 0], 'minecraft:gravel', false);
			//scene.world.modifyBlock([2, 3, 1], () => Block.id("minecraft:observer").with("facing", "north"), false);
			scene.world.showSection([2, 1, 0, 2, 3, 0], Facing.down);
			scene.world.showSection([2, 3, 1], Facing.down);
			scene.idle(20);
			
			scene.text(80, 'We can use this to activate a piston with gravel or sand on it to activate an Observer.', [2.5, 1.5, 1]).placeNearTarget().attachKeyFrame();
			scene.idle(5);
			
			scene.world.modifyBlock([2, 1, 1], (curState) => curState.with("power", "15"), false);
			scene.world.modifyBlock([2, 1, 0], (curState) => curState.with("extended", "true"), false);
			scene.world.setBlock([2, 3, 0], 'minecraft:gravel', false);
			scene.world.setBlock([2, 2, 0], 'minecraft:piston_head', false);
			scene.world.modifyBlock([2, 2, 0], (curState) => curState.with("facing", "up"), false);
			scene.idle(90);
			
			scene.text(120, 'This is an Oberserver facing towards the Gravel. The Gravel will activate it and turn off the reactor.', [2.5, 3.5, 2]).placeNearTarget().attachKeyFrame();
			scene.idle(60);
			
			
			
			
			
				
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
