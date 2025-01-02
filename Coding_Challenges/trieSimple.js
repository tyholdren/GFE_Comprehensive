// https://www.greatfrontend.com/questions/algo/trie-prefix-tree
class TrieNode {
  constructor() {
    this.isEnd = false;
    this.children = {};
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }
  /**
   * @param {string} word
   */
  insert(word) {
    let copy = this.root;

    for (const char of word.trim()) {
      if (!copy.children.hasOwnProperty(char)) {
        copy.children[char] = new TrieNode();
      }
      copy = copy.children[char];
    }
    copy.isEnd = true;
  }

  /**
   * @param {string} word
   * @returns {boolean}
   */
  search(word) {
    let copy = this.root;

    for (const char of word.trim()) {
      if (!copy.children.hasOwnProperty(char)) {
        return false;
      }
      copy = copy.children[char];
    }
    return copy.isEnd;
  }

  /**
   * @param {string} prefix
   * @returns {boolean}
   */
  startsWith(prefix) {
    let copy = this.root;

    for (const char of prefix.trim()) {
      if (!copy.children.hasOwnProperty(char)) {
        return false;
      }
      copy = copy.children[char];
    }
    return true;
  }
}

const trie = new Trie();
console.log(trie.insert('dog'));
console.log(trie.insert('doge'));
console.log(trie.insert('door'));
console.log(trie.startsWith('doo'));
