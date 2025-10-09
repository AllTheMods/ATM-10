// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.

// Standardizing salt use in some of Pam's recipes.

ServerEvents.recipes(allthemods => {
  
  ;["pamhc2foodcore:friesitem",
    "pamhc2foodextended:gritsitem",
    "pamhc2foodextended:misopasteitem",
    "pamhc2foodextended:picklesitem",
    "pamhc2foodcore:scrambledeggitem",
    "pamhc2foodextended:sausageitem",
    "pamhc2foodextended:cornonthecobitem",
    "pamhc2foodcore:softpretzelitem",
    "pamhc2foodextended:cornchipsitem",
    "pamhc2foodextended:saltedcaramelitem",
    "pamhc2foodcore:mashedpotatoesitem",
    "pamhc2foodcore:chickenjerkyitem",
    "pamhc2foodcore:crackeritem",
    "pamhc2foodextended:cevicheitem",
    "pamhc2foodextended:oystersauceitem",
    "pamhc2foodextended:chorizoitem",
    "pamhc2foodcore:beefjerkyitem",
    "pamhc2foodextended:garlicmashedpotatoesitem",
    "pamhc2foodextended:aebleskiversitem",
    "pamhc2foodextended:pitepaltitem",
    "pamhc2foodextended:tatertotsitem",
    "pamhc2foodextended:banananutbreaditem",
    "pamhc2foodcore:doughitem_x2",
    "pamhc2foodextended:sunflowerwheatrollsitem",
    "pamhc2foodextended:saltandpepperitem",
    "pamhc2foodextended:cornedbeefitem",
    "pamhc2foodcore:fishjerkyitem",
    "pamhc2foodcore:cheeseitem",
    "pamhc2foodextended:rawtofabbititem",
    "pamhc2foodextended:bolognaitem",
    "pamhc2foodextended:gherkinitem",
    "pamhc2foodextended:popcornitem",
    "pamhc2foodcore:butteredbakedpotatoitem",
    "pamhc2foodcore:potatochipsitem",
    "pamhc2foodextended:veggiestripsitem",
    "pamhc2foodcore:icecreamitem",
    "pamhc2foodextended:yorkshirepuddingitem",
    "pamhc2foodextended:pickledonionsitem",
    "pamhc2foodcore:muttonjerkyitem",
    "pamhc2foodextended:damperitem",
    "pamhc2foodextended:avocadotoastitem",
    "pamhc2foodextended:ramenitem",
    "pamhc2foodcore:trailmixitem",
    "pamhc2foodextended:kimchiitem",
    "pamhc2foodextended:okrachipsitem",
    "pamhc2foodcore:rabbitjerkyitem",
    "pamhc2foodextended:tortillachipsitem",
    "pamhc2foodcore:porkjerkyitem"].forEach(recipeId => {
      allthemods.replaceInput(
        { id: recipeId },
        'pamhc2foodcore:saltitem',
        '#c:dusts/salt'
      )
    })
  
  // use to list recipe ids and avoid using resource intenside "input"
  // allthemods.forEachRecipe(
  //   { input: 'pamhc2foodcore:saltitem' }, recipe => {
  //     console.log("Salt recipe:" + recipe.getId())  
  //   }
  // )
});

ServerEvents.tags('item', event => {
  event.add('c:dusts/salt', 'pamhc2foodcore:saltitem')
  event.add('c:dusts', 'pamhc2foodcore:saltitem')
  event.add('c:raw_materials', 'pamhc2foodcore:saltitem')
  event.add('minecolonies:reduceable_ingredient', 'pamhc2foodcore:saltitem')
  event.add('supplementaries:hourglass_dusts', 'pamhc2foodcore:saltitem')
})


// This File has been authored by AllTheMods Staff, or a Community contributor for use in AllTheMods - AllTheMods 10.
// As all AllTheMods packs are licensed under All Rights Reserved, this file is not allowed to be used in any public packs not released by the AllTheMods Team, without explicit permission.
