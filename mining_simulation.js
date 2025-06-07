const SHA256 = require('crypto-js/sha256');

class block {
    constructor(index , timestamp , data , previousHash ,hash , nonce = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        this.nonce = 0;

    }

    calculateHash(){
        return SHA256(this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
    }

    mineBlock(difficulty){
        const startTime = Date.now();
        let attempts = 0;

        while(this.hash.substring(0, difficulty) !== Array(difficulty +1).join("0")){
            this.nonce++;
            attempts++;
            this.hash = this.calculateHash();
        }
        const endTime = Date.now();
        const timeTaken = (endTime - startTime) / 1000; // Time in seconds

        console.log("Block mined : " + this.hash);
        console.log("Number of Nonce attempts: " + attempts);
        console.log(`Time taken to mine: ${timeTaken} seconds`);
        console.log("\n");
    }

}

class blockchain {
    constructor(){
        this.chain = [this.createGenesis()];
        this.difficulty = 4;
    }

    createGenesis(){
        return new block(0,"07/06/2025" , {amount:0} ,"0" , "1234");
    }

    getLatest(){
        return this.chain[this.chain.length -1];
    }

    addBlock(newblock){
        newblock.previousHash = this.getLatest().hash;
        newblock.mineBlock(this.difficulty)
        
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

let chain = new blockchain();

console.log("Mining block 1 ....");  
chain.addBlock(new block(1,"07/06/2025", {amount : 4}  ));

console.log("Mining block 2 ....");
chain.addBlock(new block(2,"07/06/2025", {amount : 6} ));
