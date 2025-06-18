// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create('mekanismgenerators:fission_reactor_casing')
	.scene('fission_mek','Mekanism Fission Reactor', 'kubejs:fission_mek',
		
	(scene, util) => {
		
				
			scene.world.showSection([4, 0, 4], Facing.down);
            scene.idle(5);

			
			[1, 2, 3, 4].forEach(num => {
                scene.world.showSection([4, num, 4], Facing.down);
                scene.world.showSection([4, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 4], Facing.down);
                scene.idle(5)
            });

            [1, 2, 3].forEach(num => {
				
                scene.world.showSection([4, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 4], Facing.down);
                scene.world.showSection([0, 0, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 0, 0], Facing.down);
                scene.world.showSection([0, num, 4], Facing.down);
                scene.world.showSection([4, num, 0], Facing.down);
                scene.idle(5)
				});
				
			scene.text(80, 'The Edges Must Be Casings', [0, 4.5, 4.5]).placeNearTarget();
			
            scene.world.showSection([4, 4, 0], Facing.down);
            scene.world.showSection([0, 4, 4], Facing.down);
            scene.world.showSection([0, 0, 0], Facing.down);
            scene.idle(5);
			
            [1, 2, 3].forEach(num => {
				
                scene.world.showSection([0, num, 0], Facing.down);
                scene.world.showSection([0, 4, 4 - num], Facing.down);
                scene.world.showSection([4 - num, 4, 0], Facing.down);
                scene.idle(5)
				});
				
            scene.world.showSection([0, 4, 0], Facing.down);
			scene.addKeyframe();
            scene.idle(80);
			
			
			//top glass
            scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.down);
            scene.idle(5)

            // bottom glass
            scene.world.showSection([1, 0, 1, 3, 0, 3], Facing.up);
            scene.idle(5)

            // north glass
            scene.world.showSection([1, 1, 0, 3, 3, 0], Facing.south);
            scene.idle(5)

            // south glass
            scene.world.showSection([1, 1, 4, 3, 3, 4], Facing.north);
            scene.idle(5)

            // west glass
            scene.world.showSection([0, 1, 1, 0, 3, 3], Facing.east);
            scene.idle(5)
		
			scene.text(80, 'The Walls Can Be Either Casings Or Glass', [0, 2.5, 2.5]).placeNearTarget();

            // east glass
            scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west);
			scene.addKeyframe();
            scene.idle(80);
			
			scene.world.hideSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.hideSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.hideSection([1, 4, 1, 3, 4, 3], Facing.up)
			scene.idle(10);
			
			scene.text(60, 'Place Fuel Assembly Blocks Inside To Make The Fuel Rods', [2.5, 2.5, 2.5]).placeNearTarget();
			scene.world.setBlock([2, 1, 2], 'mekanismgenerators:fission_fuel_assembly', false);
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(10)
			scene.world.setBlock([2, 2, 2], 'mekanismgenerators:fission_fuel_assembly', false);
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(10)
			scene.addKeyframe();
			scene.idle(40);
			
			scene.world.setBlock([2, 3, 2], 'mekanismgenerators:control_rod_assembly', false);
			scene.world.showSection([2, 3, 2], Facing.down)
			scene.idle(10)
			scene.text(60, 'Place Control Rod Assembly At The Top Of Each Fuel Rod', [2.5, 3.5, 2.5]).placeNearTarget();
			scene.idle(20);
			scene.addKeyframe();
			scene.idle(60);
			
			scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.showSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.up)
			
			scene.addKeyframe();
			scene.idle(40);
			
			//scene.world.modifyTileNBT([0,0,0, 4, 4, 4], (nbt) => { nbt.activeState = "fissionReactor" });

			//scene
			//	.showControls(40, [1.5, 3, 1.5], 'down')
			//	.rightClick()
			//	.withItem('comparator');
			//scene	
			//	.text(40, 'Right Click With Comparator For Redstone Control', [1, 1.5, 2])
			//	.placeNearTarget()
			//	.attachKeyFrame();

			//scene.idle(40);
				
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
