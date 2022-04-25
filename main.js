// Returns a random DNA base
const dnaBases = ['A', 'T', 'C', 'G'];
const returnRandBase = () => {
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase()); 
  }
  return newStrand;
}

const pAequorFactory = (number, arr) => {
  return { 
    specimenNum: number,
    dna: arr,
    mutate(){
      // Generates an index between 0-14 (dna array length)
      let randomIndex = Math.floor(Math.random() * 14);

      // Uses the helper function returnRandBase() to generate a new base
      let mutatedBase = returnRandBase()

      // checks that the two values are not the same, if they are it generates a new base to remove
      while (this.dna[randomIndex] === mutatedBase){ 
        mutatedBase = returnRandBase()
      };

      // adds the new value into the array and returns it
      this.dna[randomIndex] = mutatedBase;
      // return this.dna;
    },
    compareDNA(obj){
      let count = 0;
      for (let i = 0; i < obj.dna.length; i++){
        if (obj.dna[i] === this.dna[i]){
          count ++
        }
      }
      let percentage = (count/obj.dna.length) * 100;
      console.log(`Specimen #${this.specimenNum} and specimen #${obj.specimenNum} have %${percentage.toFixed(2)} DNA in common`)
    },

    willLikelySUrvive(){
      let numOfCGBases = 0;
      for (let i = 0; i < this.dna.length; i++){

        if (this.dna[i] === 'C' || this.dna[i] === 'G'){
          numOfCGBases ++;
        }

      }
    }
  }
}

const newSpec = pAequorFactory(1, mockUpStrand());
const anotherNewSpec = pAequorFactory(3, mockUpStrand());
newSpec.mutate();
newSpec.compareDNA(anotherNewSpec);

