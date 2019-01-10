class HashTable {
  constructor(size) {
    this.size = size;
    this.data = Array(size);
    this.entries = 0;
    this.maxLoad = 0.9;
  }

  add(key, value) {
    const index = this.hash(key);
    if (this.data[index] === undefined) {
      this.data[index] = [{ key, value }];
    } else {
      const bucketIndex = this.getBucketIndex(index, key);
      if (bucketIndex === undefined) {
        this.data[index].push({ key, value });
      } else {
        this.data[index][bucketIndex].key = value;
      }
    }
    this.entries++;
    if (this.entries > this.size * this.maxLoad) {
      this.resize();
    }
  }

  clone() {
    let hashClone = new HashTable(this.size);
    hashClone.data = this.data;
    hashClone.entries = this.entries;
    return hashClone;
  }

  getBucketIndex(index, key) {
    for (let i = 0; i < this.data[index].length; i++) {
      if (this.data[index][i].key === key) {
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
          keys.push(this.data[i][keyIndex].key);
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
      key = String(key);
    }
    let hashCode = 0;
    let numericPortion = key.match(/[0-9]+/g);
    if (numericPortion !== []) {
      hashCode = parseInt(numericPortion.join(""));
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
      return this.data[index][0].value;
    } else {
      return this.data[index][this.getBucketIndex(index, key)].value;
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

  resize() {
    let newHash = new HashTable(this.size * 2);
    this.hashKeys.map(hashKey => {
      newHash.add(hashKey, this.lookup(hashKey));
    });
    this.data = newHash.data;
    this.entries = newHash.entries;
    this.size = newHash.size;
  }
}

export default HashTable;
