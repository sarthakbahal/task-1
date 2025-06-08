//Class created to form miner object representing miners.
class miner {
    constructor(name){
        this.name = name;
        this.power = Math.floor(Math.random() * 100) + 1;
    }
}

//Class that handles Proof of Work (POW) Mechanism.
class proofofwork {
    constructor(miners){
        this.miners = miners;
    }

    showpower(){
        this.miners.forEach(miner => console.log(`${miner.name} : ${miner.power}`));
    }


    selectValidator() {
        const validator = this.miners.reduce((prev,curr) => (curr.power > prev.power ? curr : prev));
        return validator.name;
    }
}

//Class created to form stake holders object representing staker.
class staker{
    constructor(name){
        this.name = name;
        this.stake = Math.floor(Math.random() * 1000) +1;
    }

}

//Class that handles Proof of Stake (POS) Mechanism.
class proofofstake{
    constructor(stakers){
        this.stakers = stakers;
    }

    showstakes(){
        this.stakers.forEach(staker => console.log(`${staker.name} : ${staker.stake}`));
    }

    selectValidator() {
        const validator = this.stakers.reduce((prev,curr) => (curr.stake > prev.stake ? curr : prev));
        return validator.name ; 
    }
}

//Class created to form delegate object representing delegates.
class delegate{
    constructor(name){
        this.name = name;
        this.votes = 0;
    }
}

//Class created to form voter object representing voters.
class voter{
    constructor(name){
        this.name = name;
        this.vote = null;
    }

    voting(delegates) {
        const elected = delegates[Math.floor(Math.random() * delegates.length)];
        this.vote = elected.name;
        elected.votes++;
    }
}

//Class that handles Delegates Proof of Stake (DPoS) Mechanism.
class delegatedPoS {
    constructor(delegate,voter){
        this.delegate = delegate;
        this.voter = voter;
    }

    selectValidator(){
        this.voter.forEach(voter =>
            voter.voting(this.delegate)
        );

        const maxvotes = Math.max(...this.delegate.map(d => d.votes));
        const topdelegates = this.delegate.filter(d => d.votes === maxvotes);

        const selected = topdelegates[Math.floor(Math.random() * topdelegates.length)];

        return selected.name;
    }

    showvotes(){
        this.delegate.forEach(delegate => console.log(`${delegate.name} : ${delegate.votes}`));
    }

}


//Declaring objects related to each class.
const miners = [
    new miner("Miner 1"),
    new miner("Miner 2"),
    new miner("Miner 3"),
    
];

const stakers = [
    new staker("Staker 1"),
    new staker("Staker 2"),
    new staker("Staker 3"),
    
];

const delegates = [
    new delegate("Delegate 1"),
    new delegate("Delegate 2"),
    new delegate("Delegate 3"),
    
];

const voters = [
    new voter("Voter 1"),
    new voter("Voter 2"),
    new voter("Voter 3"),
    
];



//Consensus Mechanism demo Output.

console.log("Consensus Mechanism Demo Output: ","\n");


const poW = new proofofwork(miners);
console.log("Powers of the miners are:")
poW.showpower();
console.log(`Selected Validator for proof of work: ${poW.selectValidator()}`,"\n");



const poS = new proofofstake(stakers);
console.log("Stakes of the holders are:")
poS.showstakes();
console.log(`Selected Validator for proof of state: ${poS.selectValidator()}`,"\n");

const delegatePoS = new delegatedPoS(delegates,voters);
const selectedDelegate = delegatePoS.selectValidator();

console.log("Votes for each delegate:");
delegatePoS.showvotes();
console.log(`Selected delegate for delegated proof of state: ${selectedDelegate}`,"\n");
