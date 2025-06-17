// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

const $BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")

StartupEvents.registry('block', allthemods => {
    allthemods.create('magical_soil').displayName('§bMagical Soil').grassSoundType().mapColor('grass').hardness(0.6);

    allthemods.create('air_essence_block').displayName('Air Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('earth_essence_block').displayName('Earth Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('fire_essence_block').displayName('Fire Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();
    allthemods.create('water_essence_block').displayName('Water Essence Block').stoneSoundType().mapColor('stone').hardness(0.6).renderType('translucent').notSolid();

    allthemods.create('blaze_powder_block').displayName('Blaze Powder Block').stoneSoundType().mapColor('stone').hardness(1);
    // allthemods.create('blaze_block').displayName('Blaze Block').stoneSoundType().mapColor('stone').hardness(1);
})

StartupEvents.registry('item', allthemods => {
    allthemods.create('starlight_prediction').displayName('Generalized Starlight Prediction');

    allthemods.create('silent_allthemodium_plate').displayName('Silent Allthemodium Plate').glow(true);
    allthemods.create('silent_vibranium_plate').displayName('Silent Vibranium Plate').glow(true);
    allthemods.create('silent_unobtainium_plate').displayName('Silent Unobtainium Plate').glow(true);

    allthemods.create('atm_star_shard_1').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_2').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_3').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_4').displayName('ATM Star Fragment')
    allthemods.create('atm_star_shard_5').displayName('ATM Star Fragment')
    allthemods.create('modularium_plate').color(0xe64200).texture('alltheores:item/iron_plate')

    allthemods.create('inferium_enchanting_base').texture('minecraft:item/enchanted_book').color(0x55FF55)
    allthemods.create('prudentium_enchanting_base').texture('minecraft:item/enchanted_book').color(0x00AA00)
    allthemods.create('tertium_enchanting_base').texture('minecraft:item/enchanted_book').color(0xEB7114)
    allthemods.create('imperium_enchanting_base').texture('minecraft:item/enchanted_book').color(0x5555FF)
    allthemods.create('supremium_enchanting_base').texture('minecraft:item/enchanted_book').color(0xFF5555)
	
	allthemods.create('fire_eye').use((level, player, hand) => global.iceAndFirePearls(level, player, hand)).texture('kubejs:item/fire_eye')
	allthemods.create('fire_pearl').texture('kubejs:item/fire_pearl')
	allthemods.create('lightning_eye').use((level, player, hand) => global.iceAndFirePearls(level, player, hand)).texture('kubejs:item/lightning_eye')
	allthemods.create('lightning_pearl').texture('kubejs:item/lightning_pearl')
	allthemods.create('ice_eye').use((level, player, hand) => global.iceAndFirePearls(level, player, hand)).texture('kubejs:item/ice_eye')
	allthemods.create('ice_pearl').texture('kubejs:item/ice_pearl')
	
})

let $Stopwatch = Java.loadClass("com.google.common.base.Stopwatch")
let currentStopwatch = null

global.iceAndFirePearls = (/** @type {$ServerLevel_}} */ level, /** @type {$Player_}} */ player, /** @type {$InteractionHand_}} */ hand) => {
    let mainItemStack = player.getItemInHand(hand)
    if (level.clientSide) return true
    // currentStopwatch = $Stopwatch.createStarted()
    let $DragonType = Java.loadClass("com.iafenvoy.iceandfire.data.DragonType")
    let $EntityDragonBase = Java.loadClass("com.iafenvoy.iceandfire.entity.EntityDragonBase")
    let $AABB = Java.loadClass("net.minecraft.world.phys.AABB")
    let $Mth = Java.loadClass("net.minecraft.util.Mth")
    let $EyeOfEnder = Java.loadClass("net.minecraft.world.entity.projectile.EyeOfEnder")
    let thisType = null
    let structure = null
    if (mainItemStack.idLocation.path == "fire_eye") {
        thisType = $DragonType.FIRE
        structure = ID.of("iceandfire:fire_dragon_roost", false)
    }
    if (mainItemStack.idLocation.path == "ice_eye") {
        thisType = $DragonType.ICE
        structure = ID.of("iceandfire:ice_dragon_roost", false)
    }
    if (mainItemStack.idLocation.path == "lightning_eye") {
        thisType = $DragonType.LIGHTNING
        structure = ID.of("iceandfire:lightning_dragon_roost", false)
    }

    let radiusEntity = 32
    let radiusStructure = 16

    let playerPos = player.block.pos
    let searchAABB = new $AABB(playerPos.x - (radiusEntity * 16), level.getMinBuildHeight(), playerPos.z - (radiusEntity * 16), playerPos.x + (radiusEntity * 16), level.getMaxBuildHeight(), playerPos.z + (radiusEntity * 16))
    /** @type {$List_<$EntityDragonBase_>} */
    let targets = level.getEntitiesOfClass($EntityDragonBase, searchAABB)
    /** @type {$EntityDragonBase_} */
    let closest = null
    let currentMinDist = 0
    targets.forEach(dragon => {
        if (dragon.dragonType == thisType && !dragon.isModelDead() && !dragon.isTame()) {
            let dist = dragon.distanceToEntity(player)
            if (currentMinDist == 0 || dist < currentMinDist ){
                closest = dragon
            }
        }
    })
    /** @type {$Pair_<$BlockPos_,$Holder_<$Structure_>} */
    let structureResult = null
    if (closest == null) {
        let holderSet = Registry.of("minecraft:worldgen/structure").registry().getHolder(structure)
        /** @type {$ServerChunkCache_} */
        let serverChunkCache = level.getChunkSource()
        structureResult = serverChunkCache.getGenerator().findNearestMapStructure(level, holderSet.get(), player.block.pos, radiusStructure, false)
    }
    if (closest != null || structureResult != null) {
        // player.startUsingItem(hand)
        // console.log("Dragon: " + closest)
        // console.log("Structure: " + structureResult)
        let headPos = closest != null ? BlockPos.containing(closest.getHeadPosition()) : structureResult.getFirst()
        let eyeOfEnder = new $EyeOfEnder(level, player.x, player.getY(0.5), player.z)
        eyeOfEnder.setItem(mainItemStack)
        eyeOfEnder.signalTo(headPos)

        level.addFreshEntity(eyeOfEnder)

        let f = $Mth.lerp(level.random.nextFloat(), 0.33, 0.5)
        level["playSound(net.minecraft.world.entity.Entity,net.minecraft.core.BlockPos,net.minecraft.sounds.SoundEvent,net.minecraft.sounds.SoundSource,float,float)"](null, player.block.pos, "minecraft:entity.ender_eye.launch", "neutral", 1, f)
        
        if (!player.isCreative()) {
            mainItemStack.consume(1, player);
        }

        player.swing(hand, true);
        // console.log(`IceAndFire Pearl event took: ${currentStopwatch.elapsed("milliseconds")} ms`)
        return true
    } else {
        player.statusMessage = "Dragon or Dragon Roost not found nearby..."
        // console.log(`IceAndFire Pearl event took: ${currentStopwatch.elapsed("milliseconds")} ms`)
        return false
    }
}

StartupEvents.registry('fluid', allthemods => {
    allthemods.create('liquid_souls', 'thin')
        .tint(0xc9eaff)
        .displayName('Liquid Souls')
        .noBlock()

    allthemods.create('unrefined_liquid_souls', 'thin')
        .tint(0xccebff)
        .displayName('Unrefined Liquid Souls')
        .noBlock()

    allthemods.create('liquid_aureal', 'thin')
        .tint(0x7abaff)
        .displayName('Liquid Aureal')
        .noBlock()
})

StartupEvents.modifyCreativeTab('ironfurnaces:ironfurnaces_tab', allthemods => {
    allthemods.add('ironfurnaces:allthemodium_furnace')
    allthemods.add('ironfurnaces:vibranium_furnace')
    allthemods.add('ironfurnaces:unobtainium_furnace')
    allthemods.add('ironfurnaces:upgrade_allthemodium')
    allthemods.add('ironfurnaces:upgrade_vibranium')
    allthemods.add('ironfurnaces:upgrade_unobtainium')
})

StartupEvents.postInit((allthemods) => {
  $BuiltInRegistries.BLOCK.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")
  $BuiltInRegistries.ITEM.addAlias("kubejs:blaze_block", "allthecompressed:blaze_rod_block")

    const colors = [
        'white',
        'light_gray',
        'gray',
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'cyan',
        'light_blue',
        'blue',
        'purple',
        'magenta',
        'pink'
    ]

    colors.forEach(color => {
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:bright_${color}`, `luminax:${color}_block`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:bright_${color}`, `luminax:${color}_block`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:wool_${color}`, `luminax:dim_${color}_block`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:wool_${color}`, `luminax:dim_${color}_block`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:bright_${color}_border`, `luminax:${color}_block`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:bright_${color}_border`, `luminax:${color}_block`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:wool_${color}_border`, `luminax:dim_${color}_block`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:wool_${color}_border`, `luminax:dim_${color}_block`)

        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:stair_${color}`, `luminax:${color}_stairs`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:stair_${color}`, `luminax:${color}_stairs`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:stair_${color}_bright`, `luminax:${color}_stairs`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:stair_${color}_bright`, `luminax:${color}_stairs`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:stair_${color}_wool`, `luminax:dim_${color}_stairs`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:stair_${color}_wool`, `luminax:dim_${color}_stairs`)

        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:slab_${color}`, `luminax:${color}_slab`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:slab_${color}`, `luminax:${color}_slab`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:slab_${color}_bright`, `luminax:${color}_slab`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:slab_${color}_bright`, `luminax:${color}_slab`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:slab_${color}_wool`, `luminax:dim_${color}_slab`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:slab_${color}_wool`, `luminax:dim_${color}_slab`)

        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:button_bright_${color}`, `luminax:${color}_button`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:button_bright_${color}`, `luminax:${color}_button`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:button_wool_${color}`, `luminax:dim_${color}_button`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:button_wool_${color}`, `luminax:dim_${color}_button`)

        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:pressure_plate_bright_${color}`, `luminax:${color}_pressure_plate`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:pressure_plate_bright_${color}`, `luminax:${color}_pressure_plate`)
        $BuiltInRegistries.BLOCK.addAlias(`antiblocksrechiseled:pressure_plate_wool_${color}`, `luminax:dim_${color}_pressure_plate`)
        $BuiltInRegistries.ITEM.addAlias(`antiblocksrechiseled:pressure_plate_wool_${color}`, `luminax:dim_${color}_pressure_plate`)
    })
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
