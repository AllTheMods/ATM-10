NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    if (event.to.location().getNamespace().equals("eternal_starlight")){
        event.entity.tell("Due to severe lag with Eternal Starlight, progress will not be recorded until mod fix their issues")
        if (Platform.clientEnvironment) {
            Client["submit(java.lang.Runnable)"](() => {
                Client.gui.setTitle(Text.of("Progress won't be saved at ").append(Text.blue("Eternal Starlight")))
                Client.gui.setSubtitle(Text.white("Due to lag, all progress won't be saved at ").append(Text.blue("Eternal Starlight")))
            })
        }
        event.entity.tell("Eternal Starlight, will be removed on version 6.0+")
    }
})