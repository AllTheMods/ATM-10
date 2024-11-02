ServerEvents.recipes(allthemods => {
    function compacting(/** @type {$ItemStackKJS_} */LowerItem,/** @type {$ItemStackKJS_} */HigherItem) {
        allthemods.custom({
            type: "functionalstorage:custom_compacting",
            higher_input: HigherItem,
            lower_input: LowerItem
        })
    }
    compacting(Item.of("8x utilitarian:tiny_charcoal"), Item.of("minecraft:charcoal"))
    compacting(Item.of("8x utilitarian:tiny_coal"), Item.of("minecraft:coal"))
})
