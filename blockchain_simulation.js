const SHA256 = require('crypto-js/sha256'); //first setup crypto-js -> 'npm install --save crypto-js

// 1) Created a block class having properties in a block as the contructor.
class block {
    constructor(index , timestamp , data , previousHash ,hash , nonce = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.nonce = nonce;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();

    }

    //2) Calculated Hash using SHA256 and used to provide hash for the block.
    calculateHash(){
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) +  this.nonce + this.previousHash ).toString();
    }
}

// 3) Created a blockchain class which will contain the blocks inside a array forming a chain using previoushash.
class blockchain {
    constructor(){
        this.chain = [this.createGenesis()];
    }

    createGenesis(){
        return new block(0,"07/06/2025" , {amount:0} ,"0" , "1234");
    }

    getLatest(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newblock){
        newblock.previousHash = this.getLatest().hash;
        newblock.hash = newblock.calculateHash();
        newblock.nonce = "1234"
        this.chain.push(newblock);
    }

    isvalid(){
        for(let i = 1;i<this.chain.length; i++){
            const currblock = this.chain[i];
            const prevblock = this.chain[i-1];

            if(currblock.hash !== currblock.calculateHash()) return false;

            if(currblock.previousHash !== prevblock.hash) return false;
        }

        return true;
    }
}

// 4) Creating a new blockchain.
let chain = new blockchain();
chain.addBlock(new block(1,"07/06/2025", {amount : 4}  ));
chain.addBlock(new block(2,"07/06/2025", {amount : 6} ));
chain.addBlock(new block(3,"07/06/2025", {amount : 8} ));

//TO RUN THIS TYPE IN CONSOLE : ' node blockchain_simulation.js '

console.log(JSON.stringify(chain , null ,4));  // This shows that a blockchain has been created and the whole chain 

console.log("Is chain valid ? " + chain.isvalid()); // This gives the initial result of the integrity of the chain

chain.chain[1].data = {amount: 1200};                   // Here the data is of block 1 is tampered.
chain.chain[1].hash = chain.chain[1].calculateHash();  // Here we have re-calculated the hash.

console.log("Is chain valid ? " + chain.isvalid());  // This gives the after result for integrity of chain.
