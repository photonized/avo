class Block {
    constructor(index, previousBlockHash, previousProof, transactions, nonce) {
        this.index = index;
        this.proof = previousProof;
        this.previousBlockHash = previousBlockHash;
        this.transactions = transactions;
        this.timestamp = Date.now();
        this.nonce = nonce;
    }

    info() {
        const { index, proof, transactions, previousBlockHash, timestamp, nonce } = this;
        return [index, proof, JSON.stringify(transactions), previousBlockHash, timestamp, nonce];
    }

    setNonce(int) {
        this.nonce = int;
    }

}

module.exports = Block;