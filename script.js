class Hero{
  constructor(name, age, classHero){
    this.name = name 
    this.age = age
    this.classHero = classHero
  }
  
  attackHero(){
    if (this.classHero.toLowerCase() == 'mago' ) {
      this.classHero = 'Mago'
      console.log(`o ${this.classHero} ${this.name} atacou utilizando a magia lightning storm`)
    } else if (this.classHero.toLowerCase() == 'ninja'){
      this.classHero = 'Ninja'
      console.log(`o ${this.classHero} ${this.name} atacou utilizando sua shuriken`)
    }
    else if (this.classHero.toLowerCase() == 'guerreiro'){
      this.classHero = 'Guerreiro'
      console.log(`o ${this.classHero} ${this.name} atacou utilizando sua espada`)
    }
    else if (this.classHero.toLowerCase() == 'monge'){
      this.classHero = 'Monge'
      console.log(`o ${this.classHero} ${this.name} atacou utilizando a expansão de domínio`)
    }
    else{
      console.log('Erro de verificação.')
    }
  }  
}

let hero = new Hero('José', 19, 'ninja');

hero.attackHero()

