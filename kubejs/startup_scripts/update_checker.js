let $DefaultArtifactVersion = Java.loadClass("org.apache.maven.artifact.versioning.DefaultArtifactVersion")
let $Locale = Java.loadClass("java.util.Locale")
let modPackId = "925200" // could get from BCC but :shrug:

StartupEvents.postInit(event => {
  if (Platform.isLoaded("bcc") && Platform.isClientEnvironment()) {
    let $BccInstance = Java.loadClass("dev.wuffs.bcc.BetterCompatibilityChecker")
    // testing
    //let currentVersion = new $DefaultArtifactVersion("0.2.0-beta")
    let currentVersion = new $DefaultArtifactVersion($BccInstance.betterStatus.version())
    KJSTweaks.curseForgeGetEndpoint("v1/mods/" + modPackId + "/files?pageSize=1", Client, response => {
      let displayName = response.get("data").get(0).get("displayName").getAsString()
      let cfLatestVersionStr = displayName.toLowerCase($Locale.ROOT).replace("all the mods 10-", "").replace(".zip", "")
      let cfLatestVersion = new $DefaultArtifactVersion(cfLatestVersionStr)
      console.log("Pack Version is: " + currentVersion)
      console.log("CF Version is: " + cfLatestVersion)
      if (cfLatestVersion.compareTo(currentVersion) > 0) {
        let $SystemToast = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast")
        let $SystemToastId = Java.loadClass("net.minecraft.client.gui.components.toasts.SystemToast$SystemToastId")
        $SystemToast.add(Client.getToasts(), new $SystemToastId(10000), "New update is available!", Text.of("Version ").append(Text.green(cfLatestVersion)).append(" is already available!"))
      } else {
        console.log("Pack is up to date!")
      }
    })
  }
})