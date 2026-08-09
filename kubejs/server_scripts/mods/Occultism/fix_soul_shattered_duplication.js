// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Fix for AllTheMods/ATM-10 issue 4311.
// Loot Pinata (Apotheosis) copies occultism:soul_shattered drops from Fracture Soul.
// Each copy can resurrect a full mob, so one kill makes many mobs.
// This handler removes every shard copy after the first. It touches no other item.

if (!Platform.isClientEnvironment()) {
  NativeEvents.onEvent("LOWEST", "net.neoforged.neoforge.event.entity.living.LivingDropsEvent", event => {
    let shardSeen = false
    let drops = event.getDrops()
    let iterator = drops.iterator()
    while (iterator.hasNext()) {
      let stack = iterator.next().getItem()
      if (stack.getId() == "occultism:soul_shattered") {
        if (shardSeen) {
          iterator.remove()
        } else {
          shardSeen = true
        }
      }
    }
  })
}
