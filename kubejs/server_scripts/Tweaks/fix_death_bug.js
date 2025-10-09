PlayerEvents.loggedIn(event => {
  if (event.player.getHealth().toString() == "NaN") event.player.setHealth(event.player.getMaxHealth())
  if (event.player.getAbsorptionAmount().toString() == "NaN") event.player.setAbsorptionAmount(0)
})