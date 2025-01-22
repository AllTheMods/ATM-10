/// atm10 public server loaders disable
ServerEvents.recipes(allthemods => {
    allthemods.remove({id: 'mekanism:dimensional_stabilizer'})
    allthemods.remove({id: 'ae2:network/blocks.spatial_anchor'})
    allthemods.remove({output: 'ae2:spatial_anchor'})  //Brute force, as the above one did not work
})
/// atm10 public server loaders disable
 