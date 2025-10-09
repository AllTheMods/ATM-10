ServerEvents.recipes(allthemods =>{
  allthemods.remove({output: 'allthetweaks:greg_star'})
  allthemods.remove({output: 'allthetweaks:greg_star_block'})
  for(let i=1; i < 10; i++){
	  allthemods.remove({output: `allthecompressed:greg_star_block_${i}x`})}
})