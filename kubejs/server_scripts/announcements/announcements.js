let $TreeMap = Java.loadClass("java.util.TreeMap")
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Type} */
let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
/** @type {import("java.util.TreeMap").$TreeMap$$Type<(import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original), (import("java.util.List").$List$$Type<(import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original) >) >} */
let announcements = new $TreeMap()
/** @type {import("org.apache.maven.artifact.versioning.DefaultArtifactVersion").$DefaultArtifactVersion$$Original} */
let currentVersion = null

// files related:
// kubejs/assets/atm/lang/en_us.json

// Add your announcements here
function initAnnouncements(){
  addAnnouncement("4.0", "Added mods: Ars Creo, Ice and Fire, Oritech,")
  addAnnouncement("4.1", "Added mods: Oritech Things")
  addAnnouncement("4.2", "Removed mods: Oritech Things")
  addAnnouncement("4.3", "Added mods: Ars Controle, Create Aquatic Ambitions, Create Hypertube, Mekanism More Machines")
  addAnnouncement("4.5", "Added mods: Expanded Ae, Industrialization Overdrive and RFTools Storage")
  addAnnouncement("4.6", "Added mods: Aether, BotanyPots, BotanyTrees and RefinedTypes")
  addAnnouncement("4.6", "Removed mods: Harvest with ease, FTB Ultimine does that now")
  addAnnouncement("4.7", "Added mods: Draconic Evolution and BotanyPots-Mystical")
  addAnnouncement("4.12", "Added mods: ModularBees")
  addAnnouncement("4.13", "Added mods: Dyson Cube Project")
  addAnnouncement("5.0", "Removed mods: Modular Machinery Reborn, use Modern Industrialization")
  addAnnouncement("5.3", Text.of("We are preparing to ").append(Text.red("REMOVE")).append(" mods ").append(Text.blue("Eternal Starlight")).append(" and ").append(Text.blue("Hyperbox")).append(", be ready when updating to version 6.0+"))
  addAnnouncement("5.5", Text.of("We just launched ").append(Text.green("All The Mons (ATM10 + Cobblemon)").clickOpenUrl("https://www.curseforge.com/minecraft/modpacks/all-the-mons").hover(Text.translatable("mco.notification.visitUrl.buttonText.default"))).append(" for public beta testing!"))
}

ServerEvents.loaded(event => {
  if (!Platform.isLoaded("bcc")) return
  announcements.clear()
  /** @type {import("dev.wuffs.bcc.BetterCompatibilityChecker").$BetterCompatibilityChecker$$Original} */
  let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
  currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
  initAnnouncements()
})

function addAnnouncement(/** @type {string} */version, /** @type {import("net.minecraft.network.chat.MutableComponent").$MutableComponent$$Original} */ component) {
  announcements.computeIfAbsent(new $DefaultArtifactVersion(version), (key) => Utils.newList()).addLast(typeof component == "string" ? Text.of(component) : component)
}

PlayerEvents.loggedIn(event => {
  if (currentVersion == null) return
  let currentDismissed = event.player.persistentData.getString("LastDismissedAnnouncementVersion")
  if (currentDismissed == null) {
    currentDismissed = new $DefaultArtifactVersion("0.0.0")
  } else {
    currentDismissed = new $DefaultArtifactVersion(currentDismissed)
  }
  let ableToDismiss = false
  let printHeader = true
  announcements.forEach((key, listComponents) => {
    if (currentDismissed.compareTo(key) < 0 && currentVersion.compareTo(key) >= 0) {
      ableToDismiss = true
      if (printHeader) {
        event.player.tell(Text.translatable("=====[  %s  ]=====", Text.yellow("All The Mods Announcements").bold()).gold().bold())
        printHeader = false
      }
      for (let component of listComponents) {
        let message = Text.translatable("[%s] - %s", Text.gold(key.toString()), component.yellow()).yellow()
        event.player.tell(message)
      }            
    }
  })
    
  if (ableToDismiss) {
    let message = Text.translatable("announcements.atm.dismiss_up_to_version", Text.blue(currentVersion.toString()))
      .green()
      .hover(Text.translatable("kubejs.atm.click_here"))
      .clickRunCommand("/dismiss_announcements")
        
    event.player.tell(message)
  }
})

ServerEvents.basicPublicCommand("dismiss_announcements", event => {
  let player = event.player
  if (player == null) {
    event.cancel("Player was not found!")
  } else {
    let pData = player.getPersistentData()
    if (event.input == "clear") {
      pData.putString("LastDismissedAnnouncementVersion", "0.0.0")
      event.respond(Text.yellow("Cleared dismissed version!"))
    } else {
      if (currentVersion == null) {
        event.cancel("Current version of the modpack is null, is BetterCompatibilityCheck installed?")
      } else {
        pData.putString("LastDismissedAnnouncementVersion", currentVersion.toString())
        event.respond(Text.translatable("announcements.atm.dismissed_up_to_version", currentVersion.toString()).yellow())
      }
    }
  }
})