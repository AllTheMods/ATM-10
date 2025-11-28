let shouldFreeze = false // set this to true if you need to debug something on your world

if (shouldFreeze) {
  ServerEvents.loaded(event => {
	  event.server.tell("Starting server frozen...")
	  event.server.runCommandSilent("tick freeze")
  })	
}
