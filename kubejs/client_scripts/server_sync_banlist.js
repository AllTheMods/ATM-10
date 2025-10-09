// priority 0
// Don't try to be hacker and disable this script
// All logic is made on server side
// And disabling this will only cause visual bug

let $HashSet = Java.loadClass("java.util.HashSet")
let bannedItems = new $HashSet()

NetworkEvents.dataReceived("banned_items", (event) => {
  console.log("Received banned items...")
  event.data.get("banned_items").forEach((value) => {
    console.log("Adding item " + value + " to banned list")
    bannedItems.add(value.getAsString())
  })
})

// When aiming at air
ItemEvents.rightClicked((event) => {
  if (bannedItems.contains(event.item.id)) {
    // event.entity.setStatusMessage(Text.gold("You are not allowed to use this item"))
    event.cancel()
  }
})

// When aiming at any block
BlockEvents.rightClicked((event) => {
  if (bannedItems.contains(event.item.id)) {
    // event.entity.setStatusMessage(Text.gold("You are not allowed to use this item"))
    event.cancel()
  }
})
