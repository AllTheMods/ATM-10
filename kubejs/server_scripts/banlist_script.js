// priority 99

// related files:
// instance/server_banlist_config.json
// instance/kubejs/client_scripts/server_sync_banlist.js
// instance/kubejs/server_scripts/Tweaks/remove_recipes_from_banlist.js
// instance/kubejs/server_scripts/banlist_script.js

let $HashSet = Java.loadClass("java.util.HashSet")
let $ArrayList = Java.loadClass("java.util.ArrayList")

let config
let bannedBlockEntities

if (!Platform.isClientEnvironment()) {
  let configPath = "server_banlist_config.json"
  let defaultConfig = {
    server: {
      banned_block_entities: Utils.newList(),
      banned_items: Utils.newList(),
      banned_entities: Utils.newList(),
      remove_recipes_by: Utils.newList()
    }
  }

  config = JsonIO.read(configPath)
  if (config == null) {
    JsonIO.write(configPath, defaultConfig)
    config = defaultConfig
  }

  /** @type {$ArrayList_<string>} */
  bannedBlockEntities = config?.server.banned_block_entities
  /** @type {$ArrayList_<string>} */
  let bannedItems = config?.server.banned_items
  /** @type {$ArrayList_<string>} */
  let bannedEntities = config?.server.banned_entities

  if (bannedEntities instanceof $ArrayList) {
    let $EntityJoinLevelEvent = Java.loadClass("net.neoforged.neoforge.event.entity.EntityJoinLevelEvent")
    NativeEvents.onEvent($EntityJoinLevelEvent, event => {
      if (bannedEntities.contains(event.entity.type)) {
        event.level.server.tell(Text.red("Removed banned entity: " + event.entity.type + " at " + event.entity.blockPosition().toShortString()))
        event.setCanceled(true)
      }      
    })
  }

  let bannedList = new $HashSet()
  bannedList.addAll(bannedBlockEntities)
  bannedList.addAll(bannedItems)

  if (!bannedList.isEmpty()) {
    bannedList.forEach(item => {
      ItemEvents.rightClicked(item, (event) => sendMessageAndCancel(event, "item"))
    })

    BlockEvents.rightClicked((event) => {
      if (bannedList.contains(event.item.id)) sendMessageAndCancel(event, "item")
    })

    PlayerEvents.loggedIn((event) => {
      let data = bannedList
      console.log("Banned items: " + data)
      console.log("Sending banned items to " + event.player.username)
      event.player.sendData("banned_items", { banned_items: data })
    })
  }
  let $ChunkEvent$Load = Java.loadClass("net.neoforged.neoforge.event.level.ChunkEvent$Load")
  let $LevelTickEvent$Pre = Java.loadClass("net.neoforged.neoforge.event.tick.LevelTickEvent$Pre")
  if (!bannedBlockEntities.isEmpty()) {
    NativeEvents.onEvent($ChunkEvent$Load, event => {
      if (event.level.clientSide) return
	  removeBlockEntities(event)
    })
	NativeEvents.onEvent($LevelTickEvent$Pre, event => {
	  let blocksToRemove = levelAndPosToRemove.get(event.level)
	  if (blocksToRemove == null) return
	  let pos
	  while ((pos = blocksToRemove.poll()) != null) {
		  addSignToPos(event.level, pos)
		  event.level.server.tell("Removing banned block entity at " + pos.toShortString())
	  }
    })
	LevelEvents.unloaded(event => {
		levelAndPosToRemove.remove(event.level)
	})
  }
}

function sendMessageAndCancel(/** @type {$ItemClickedKubeEvent_} */event, type) {
  switch (type) {
    case "item":
      event.player.setStatusMessage(Text.red("This server does not allow you to use this item!"))
      event.cancel()
      break
    default:
      break
  }
}

let $LevelChunk = Java.loadClass("net.minecraft.world.level.chunk.LevelChunk")
let levelAndPosToRemove = Utils.newMap()
let $ConcurrentLinkedQueue = Java.loadClass("java.util.concurrent.ConcurrentLinkedQueue")
let removeBlockEntities = (/** @type {$ChunkEvent$Load_} */ event) => {
  if (event.isNewChunk()) return
  let blocksToRemove = Utils.newList()
  if (event.chunk instanceof $LevelChunk) {
    if (event.chunk.persistedStatus != "minecraft:full") return
    event.chunk.getBlockEntities().forEach((pos, be) => {
      /** @type {$ResourceLocation_} */
      let beRL = be.getType().getKey(be.getType())
      if (bannedBlockEntities.contains(beRL.toString())) {
        blocksToRemove.add(pos)
      }
    })
  }
  if (!blocksToRemove.isEmpty()) {
	  let original = levelAndPosToRemove.get(event.level)
	  if (original == null) {
		  let queue = new $ConcurrentLinkedQueue(blocksToRemove)
		  levelAndPosToRemove.put(event.level, queue)
	  } else {
		  original.addAll(blocksToRemove)
	  }
  }
}

let addSignToPos = (/** @type {$ServerLevel_} */level, /** @type {$BlockPos_} */pos) => {
  let beRL = level.getBlock(pos).entityId
  level.getBlock(pos).set("minecraft:oak_sign", {}, 18)
  /** @type {$SignBlockEntity_} */
  let oakSignBlockEntity = level.getBlockEntity(pos)
  let namespace = `'${beRL.split(":")[0]}:'`
  let path = beRL.split(":")[1]
  let nbt = {is_waxed: 1, front_text: {has_glowing_text: 1, color: "black", messages: [namespace, path, '"is banned on this"', "server"]}}
  oakSignBlockEntity.loadWithComponents(nbt, level.registryAccess())  
}
