ClientEvents.loggedIn(event => {
	console.log("Logged in: " + event.player)
	let $Registries = Java.loadClass("net.minecraft.core.registries.Registries")
    let biomeRegistry = Client.level.registryAccess().registryOrThrow($Registries.BIOME)
	let value = biomeRegistry.get("biomeswevegone:skyrise_vale")
	if (value == null) {
		biomeRegistry.addAlias("biomeswevegone:skyrise_vale", "biomeswevegone:skyris_vale")
	}	
})