// license goes here


ServerEvents.recipes(event => {
    [['cobblestone','gravel'],
     ['gravel','sand']].forEach(recipe =>{
        ['1','2','3','4','5','6','7','8','9'].forEach(count =>{
            mekCrushing('allthecompressed:'+recipe[0]+'_'+count+'x','allthecompressed:'+recipe[1]+'_'+count+'x','mekanism:crushing_'+recipe[0]+'_to_'+recipe[1]+'_'+count+'x')
        })
     })
    // jank setup again bc mekanism kubeJS isn't updated
    function mekCrushing(raw, crushed, id){
        event.custom({
            "type": "mekanism:crushing",
            "input": {
                "count": 1,
                "item": raw
            },
            "output": {
                "count": 1,
                "id": crushed
            }
          }).id(id)
    }
})