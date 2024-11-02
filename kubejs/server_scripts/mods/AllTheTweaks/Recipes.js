ServerEvents.recipes(allthemods =>{
  allthemods.remove({input: 'allthetweaks:greg_star'})
  allthemods.remove({output: 'allthetweaks:greg_star'})
  allthemods.remove({input: 'allthetweaks:greg_star_block'})
  allthemods.remove({output: 'allthetweaks:greg_star_block'})
  for(let i=1; i < 10; i++){
	  allthemods.remove({input: `allthecompressed:greg_star_block_${i}x`})
	  allthemods.remove({output: `allthecompressed:greg_star_block_${i}x`})}
})