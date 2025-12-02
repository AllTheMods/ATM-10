NativeEvents.onEvent("net.neoforged.neoforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    if (event.to.location().getNamespace().equals("hyperbox")){
        event.entity.tell("Hyperboxes will be removed on version 6.0+, please move to Compact Machines")
        if (Platform.clientEnvironment) {
            Client["submit(java.lang.Runnable)"](() => {
                Client.gui.setTitle(Text.blue("Hyperbox").append(Text.red(" will be removed!")))
                Client.gui.setSubtitle(Text.white("Transfer your stuff to new mod ").append(Text.blue("Compact Machines")))
            })
        }
    }
})