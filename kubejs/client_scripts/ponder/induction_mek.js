// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

Ponder.registry((allthemods) => {
    allthemods.create([
		'mekanism:induction_casing',
		'mekanism:induction_port'
		])
		
	.scene('induction_mek','Mekanism: Induction Matrix', 'kubejs:induction_matrix',
		
	(scene, util) => {
		
			//Show main build
		
				
			scene.world.showSection([0, 0, 0, 4, 4, 4], Facing.down);
            scene.idle(10);
			
			scene.text(80, 'The Induction Matrix is used to store tons of Power.', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(85);
			
			//Hide and build
			
			scene.world.hideSection([0, 0, 0, 4, 4, 4], Facing.up);
			scene.idle(10);
			
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
                scene.idle(5);
			});
			
			scene.text(80, 'The Edges Must Be Casings', [0, 4.5, 4.5]).placeNearTarget().attachKeyFrame();
			scene.idle(5);
			
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
            scene.idle(60);

		
			scene.text(80, 'The Faces Can Be Either Casings Or Structural Glass.', [0, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			
			//Side Sections
			
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

            // east glass
            scene.world.showSection([4, 1, 1, 4, 3, 3], Facing.west);
            scene.idle(80);
			
			//Talk about Ports
			
			scene.text(60, 'Ports Are Used To Transfer Power.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.idle(80);
			
			scene.text(80, 'Ports Can Be Changed Using A Configurator.', [1.5, 1.5, 0]).placeNearTarget().attachKeyFrame();
			scene.showControls(80, [1.5, 2.5, 0], 'down').rightClick().withItem('mekanism:configurator').whileSneaking();
			scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "false"), true);
			scene.idle(20);
			scene.world.modifyBlock([1, 1, 0], (curState) => curState.with("active", "true"), true);
			scene.idle(60);
			
			// Inside Part
			
			scene.world.hideSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.hideSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.hideSection([1, 4, 1, 3, 4, 3], Facing.up)
			scene.idle(20);
			
			scene.text(60, 'Induction Cells Are Used To Increase Power Storage.', [2.5, 1.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 1, 2], 'mekanism:basic_induction_cell', false);
            scene.world.showSection([2, 1, 2], Facing.down)
            scene.idle(65);
			scene.text(60, 'Induction Providers Are Used To Increase Power Transfer Rate.', [2.5, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.world.setBlock([2, 2, 2], 'mekanism:basic_induction_provider', false);
            scene.world.showSection([2, 2, 2], Facing.down)
            scene.idle(65)
			
			scene.text(60, 'The Matrix Must Have One Cell and One Provider.', [2, 2.5, 2.5]).placeNearTarget().attachKeyFrame();
			scene.idle(65)
			
			
			
			//Show All
			
			scene.world.showSection([0, 1, 0, 3, 4, 0], Facing.up)
			scene.world.showSection([0, 1, 0, 0, 4, 3], Facing.up)
			scene.world.showSection([1, 4, 1, 3, 4, 3], Facing.up)
			scene.idle(10);
    });
});

// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
