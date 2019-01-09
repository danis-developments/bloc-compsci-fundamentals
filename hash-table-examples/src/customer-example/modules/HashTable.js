class HashTable {
  constructor(size) {
    this.size = size;
    this.data = Array(size);
  }

  add(key, value) {
    const index = this.hash(key);
    if (this.data[index] === undefined) {
      this.data[index] = [[key, value]];
    } else {
      const bucketIndex = this.getBucketIndex(index, key);
      if (bucketIndex === undefined) {
        this.data[index].push([key, value]);
      } else {
        this.data[index][bucketIndex][1] = value;
      }
    }
  }

  clone() {
    let hashClone = new HashTable(this.size);
    hashClone.data = this.data;
    return hashClone;
  }

  getBucketIndex(index, key) {
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i][0] === key) {
        return i;
      }
    }
    return undefined;
  }

  get hashKeys() {
    let keys = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let keyIndex = 0; keyIndex < this.data[i].length; keyIndex++) {
          keys.push(this.data[i][keyIndex][0]);
        }
      }
    }
    return keys;
  }

  get length() {
    return this.data.length;
  }

  hash(key) {
    if (typeof key !== "string") {
      console.log("key must be of type string");
      return null;
    }
    let hashCode = 0;
    const numericPortion = key.match(/[0-9]+/g);
    if (numericPortion) {
      hashCode = parseInt(numericPortion);
    } else {
      for (let i = 0; i < key.length; i++) {
        hashCode += key.charCodeAt(i);
      }
    }
    return hashCode % this.size;
  }

  lookup(key) {
    const index = this.hash(key);
    if (!this.data[index]) {
      return null;
    }
    if (this.data[index].length === 1) {
      return this.data[index][0][1];
    } else {
      return this.data[index][this.getBucketIndex(index, key)][1];
    }
  }

  remove(key) {
    const index = this.hash(key);
    if (this.data[index] === undefined) {
      console.log("Error: key '" + key + "' not found");
      return null;
    }

    if (this.data[index].length === 1) {
      this.data[index] = undefined;
    } else {
      this.data[index] = this.data[index].filter(
        hashEntry => hashEntry[0] !== key
      );
    }
  }
}

export default HashTable;
