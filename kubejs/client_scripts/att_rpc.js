// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

let $ClientQuestFile = Java.loadClass("dev.ftb.mods.ftbquests.client.ClientQuestFile")
let $Minecraft = Java.loadClass("net.minecraft.client.Minecraft")
let $I18n = Java.loadClass("net.minecraft.client.resources.language.I18n")
let $ATTRpc = Java.loadClass("com.thevortex.allthetweaks.api.ATTRpc")
let $ObjectCompletedEvent = Java.loadClass("dev.ftb.mods.ftbquests.events.ObjectCompletedEvent")
let $EventResult = Java.loadClass("dev.architectury.event.EventResult")

// Quest that stands in for crafting the ATM Star, and the icon it unlocks
let STAR_QUEST = "05850541675B2493"
let STAR_IMAGE =
  "https://raw.githubusercontent.com/AllTheMods/AllTheTweaks/1.21/src/main/resources/assets/allthetweaks/textures/item/atm_star.png"
let ARR_TAG = "arr"

let ticks = 0
let sinceRecount = 0
let recountQueued = false
let hadLevel = false

function dimensionName(level) {
  let id = String(level.dimension)
  let key = "dimension." + id.replace(":", ".")
  if ($I18n.exists(key)) return $I18n.get(key)

  let path = id.split(":").pop()
  return path
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}

function pushQuestProgress() {
  // Quests not received from server yet
  if (!$ClientQuestFile.exists()) return false

  let file = $ClientQuestFile.getInstance()
  let data = file.selfTeamData
  // Quest player data not received from server yet
  if (!data) return false

  let done = 0
  let total = 0

  // getQuests() is a view on the live list, so a concurrent quest change can throw
  try {
    for (let chapter of file.getAllChapters()) {
      for (let quest of chapter.getQuests()) {
        if (quest.hasTag(ARR_TAG)) continue
        total++
        if (data.isCompleted(quest)) done++
      }
    }
  } catch (error) {
    return false
  }

  let starQuest = file.getQuest(file.getID(STAR_QUEST))

  if (starQuest && data.isCompleted(starQuest)) {
    $ATTRpc.setSmallImage(STAR_IMAGE)
  } else {
    $ATTRpc.setSmallImage("")
  }

  if (done > 0) {
    $ATTRpc.setState("Quests")
    $ATTRpc.setProgress(done, total)
  } else {
    $ATTRpc.clearState()
    $ATTRpc.clearProgress()
  }

  return true
}

$ObjectCompletedEvent.QUEST.register(() => {
  recountQueued = true
  return $EventResult.pass()
})

ClientEvents.tick(() => {
  let level = $Minecraft.getInstance().level

  // Recalculate state on world join
  if (level && !hadLevel) recountQueued = true
  hadLevel = !!level

  if (recountQueued && pushQuestProgress()) {
    recountQueued = false
    sinceRecount = 0
  }

  // Only update every 2 seconds for non-event calculations
  ticks++
  if (ticks < 40) return
  ticks = 0

  if (!level) {
    recountQueued = false
    return
  }

  $ATTRpc.setDetails("In " + dimensionName(level))

  // Fallback update check every 30s
  sinceRecount++
  if (sinceRecount >= 15) {
    sinceRecount = 0
    pushQuestProgress()
  }
})
