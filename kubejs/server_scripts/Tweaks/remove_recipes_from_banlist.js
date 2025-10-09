// priority 10

if (config) {
  let recipesToRemove = config?.server.remove_recipes_by

  if (recipesToRemove instanceof $ArrayList && !recipesToRemove.isEmpty()) {
    ServerEvents.recipes(event => {
      recipesToRemove.forEach(item => {
        event.remove(item)
      })
    })
  }
}
