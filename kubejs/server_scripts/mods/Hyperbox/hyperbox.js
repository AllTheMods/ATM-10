if (Platform.isLoaded("hyperbox")) {
    BlockEvents.rightClicked("hyperbox:hyperbox",event => {
        event.server.tell(Text.red('Hyperboxes will be removed on version 6.0+, please move to Compact Machines'))
    })
}

