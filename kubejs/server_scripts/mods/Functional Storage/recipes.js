ServerEvents.recipes(allthemods => {
  /**
   * @param {$ItemStack} lower
   * @param {$ItemStack} higher
   */
  function compact(lower, higher) {
    let recipe = {
      type: "functionalstorage:custom_compacting",
      higher_input: higher.toJson(),
      lower_input: lower.toJson()
    }

    allthemods
      .custom(recipe)
      .id(`allthemods:functionalstorage/compacting/${lower.id.split(":")[1]}_to_${higher.id.split(":")[1]}`)
  }

  compact(Item.of("utilitarian:tiny_charcoal", 8), Item.of("minecraft:charcoal"))
  compact(Item.of("utilitarian:tiny_coal", 8), Item.of("minecraft:coal"))

  compact(Item.of("forbidden_arcanus:ender_pearl_fragment", 4), Item.of("minecraft:ender_pearl"))
})
