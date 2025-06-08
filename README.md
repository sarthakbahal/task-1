VERY IMPORTANT NOTE :{
    To run the code part you first have to setup crypto.js by install it with node.
     npm install --save crypto-js

    Then you need to put in the terminal : 
           node <file_name>.js

}



Answers for the Theoretical part of the assignment.

Q1. Define blockchain in your own words (100–150 words).
Ans. A blockchain is a type of database which consists of blocks containing information.These blocks are connected to each other 
     in a chain , where each block points to the previous block. This is achieved by the use of hash , thus making the current block
     linked to previous block by hash of that block. This ensures security across the chain , as it makes it hard to tamper or change
     the information once it's added. 
     Each block can have properties like index , timestamp , data (like transactions and such) and a must have hash and previousHash.
     Hash is like a unique fingerprint, and is assigned to a block on creation. It is formed by using different hash algorithms.
     Blockchain is commonly used in cryptocurrencies , like Bitcoin , Etherium , etc.

Q2. List 2 real-life use cases (e.g., supply chain, digital identity).
Ans. Real life use cases are:
    1. Supply Chain Management: 
        Blockchain can help in tracking the import and export of goods and other commodities , i.e. it can track the products from their origin to the final customer.
    2. Digital Identity :
        Blockchain can store personal record such as Birth Certificates , unique ID's ,etc in a secure way. This is due to the fact that 
        blockchain offers a secure structure reducing the risk of identity theft.
     
Q3. Draw a block showing: data, previous hash, timestamp, nonce, and Merkle root.
Ans.  The representation in text is: 
        +------------------------------------------------------------+
        |                          BLOCK                             |
        +------------------------------------------------------------+
        | Timestamp     : 2025-06-08 15:30:00                        |
        |------------------------------------------------------------|
        | Previous Hash : a9c3e5f16b89e0d4c2b5a0f177ac71bbfed1d920   |
        |------------------------------------------------------------|
        | Nonce         : 102334                                     |
        |------------------------------------------------------------|
        | Merkle Root   : f2b3eaa15e0bb3df9251d4ccf6ae89377fc312bb   |
        |------------------------------------------------------------|
        | Data:                                                      |
        |  - Sakshi -> Sneha: 5 BTC                                  |
        |  - Abhay -> Devraj: 2 BTC                                  |
        |  - Lia -> Ken: 3 BTC                                       |
        +------------------------------------------------------------+
               

Q4. Briefly explain with an example how the Merkle root helps verify data integrity.
Ans. Merkle root is derived from a Merkle tree and helps in summarising all transactions in a block into a single hash.
     Example : Suppose we have 4 transactions :
               T1 : Sakshi -> Sneha: 5 BTC
               T2 : Abhay -> Devraj: 2 BTC
               T3 : Lia -> Ken: 3 BTC
               T4 : Devraj -> Sakshi: 1 BTC

               then , we hash each transaction. Lets name them H1 , H2 , H3 & H4 respectively.
                     Now , they are paired up and hashed again as H12 and H34.
                     Ultimately , H12 and H34 are paired up and hashed to figure out the Merkle root.

                     i.e. Merkle root = H1234

     Thus if someone tries to tamper even a single bit of data of any transaction, it's hash will change all the way to the merkle root.
     And if merkle root dosen't match on a validation check , we will know of tampering. Thus, this keeps our data secure.


Q5. Explain in brief (4–5 sentences each):


    a . What is Proof of Work and why does it require energy?
    Ans. Proof of Work is a consensus mechanism in which miners compete to solve complex algorithms to add a new block to the blockchain.
         The first one to add a block is rewarded with a incentive. This process is very hardware intensive as it requires a lot of computational power and lots of electricity.That’s why PoW uses so much energy — the computing power needed is very high to make the network secure and hard to attack.
    
    b . What is Proof of Stake and how does it differ?
    Ans. Proof of stake is a consensus mechanism in which validators are choosen based on the cryptocurrency they hold or the stake they 
         have and are willing to lock it as a guarantee. The more your stake , the higher your chances are of being a validator. Each Validator recieves a reward for their stake and honest work. It is energy efficient.

    c. What is Delegated Proof of Stake and how are validators selected?
    Ans. In the Delegated Proof of Stake mechanism , token holders vote to form a group of trusted delegates which serve as the purpose of
         Validators of verifying the transactions and adding blocks. Delegate with more votes , has higher chance of being selected. This system is much faster and very energy efficient.


