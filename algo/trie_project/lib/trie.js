class Node {
    constructor(){
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
   
    constructor(){
        this.root = new Node();
    }

    insertRecur(word, root = this.root){
        let letter = word[0];
        if (!(letter in root.children)) {
           root.children[letter] = new Node();
        }
        if(word.length === 1){
            root.children[letter].isTerminal = true;
        }else{
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    insertIter(word, root = this.root){
        // for (let i = 0; i < word.length; i++) {
        //     let letter = word[i];
        //     if (!(letter in root.children)) {
        //         root.children[letter] = new Node();
        //     }

        //     root = root.children[letter];
        // }
        // root.isTerminal = true;
    
  
        let letter;
        while (word.length > 0) {
            letter = word[0]

            if (!(letter in root.children)) {
                root.children[letter] = new Node();
            }

            root = root.children[letter]
            word = word.slice(1);
        }
        root.isTerminal = true;
    }

    searchRecur(word, root = this.root){
        let letter = word[0];

        if(word.length === 0){
            if(root.isTerminal){
                return true;
            }else{
                return false; 
            }
        }
        if(letter in root.children){
         return this.searchRecur( word.slice(1), root.children[letter]);
        }else{
            return false;
        }
    }

    searchIter(word, root = this.root){
        let letter;

        while(word.length > 0){
            letter = word[0]
            if(letter in root.children){
                word = word.slice(1)
                root = root.children[letter]
            }
            else{
                return false;
            }
        }
        if (word.length == 0) {
            if (root.isTerminal) {
                return true
            }
            else {
                return false;
            }
        }
    }
}

module.exports = {
    Node,
    Trie
};