PlayerEvents.loggedIn((allthemods) => {
    let $EnchHooks = Java.loadClass("dev.shadowsoffire.apothic_enchanting.asm.EnchHooks")
    allthemods.getPlayer().getInventory().allItems.forEach(
        (item) => {
            item.enchantments.entrySet().forEach(
                (enchant) => {
                    let maxLevel = $EnchHooks.getMaxLevel(enchant.getKey().value())
                    if (enchant.getIntValue() > maxLevel) {
                        enchant.setValue(maxLevel)
                    }
                })
        })
})
