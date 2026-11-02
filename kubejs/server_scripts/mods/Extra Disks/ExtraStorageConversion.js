// ExtraStorage storage is retained for existing worlds, but Extra Disks is the craftable storage line.
ServerEvents.recipes(event => {
  event.remove({ id: /^extrastorage:part\/storagepart_.*/ })
  event.remove({ id: /^extrastorage:disk\/(shaped|shapeless)\/disk_.*/ })
  event.remove({ id: /^extrastorage:storage_block\/block_.*/ })
  event.remove({ id: /^extrastorage:storage_upgrade\/(disk|block)_.*/ })

  const tiers = [
    ['256k', 'item'], ['1024k', 'item'], ['4096k', 'item'], ['16384k', 'item'],
    ['16384b', 'fluid'], ['65536b', 'fluid'], ['262144b', 'fluid'], ['1048576b', 'fluid']
  ]
  tiers.forEach(([capacity, type]) => {
    const suffix = type === 'fluid' ? `${capacity}_fluid` : capacity
    const part = `extrastorage:storagepart_${suffix}`
    event.shapeless(`extradisks:${capacity}_${type}_storage_part`, [part])
      .id(`allthemods:conversion/extrastorage_${suffix}_part`)

    ;['disk', 'block'].forEach(kind => {
      const source = `extrastorage:${kind}_${suffix}`
      // Strictly match a fresh stack. Referenced storage, including emptied storage
      // that retains a reference, cannot match and cannot lose its contents here.
      event.custom({
        type: 'minecraft:crafting_shapeless',
        ingredients: [{ type: 'neoforge:components', items: [source], components: {}, strict: true }],
        result: { id: `extradisks:${capacity}_${type}_storage_${kind}`, count: 1 }
      }).id(`allthemods:conversion/extrastorage_${suffix}_${kind}`)
    })
  })
})
