class TheArrayTool {
  static removeAll(left, right) {
    try {
      let res = [];
      for (let data of left) {
        if (!right.includes(data)) res.push(data);
      }
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static retainAll(left, right) {
    try {
      let res = [];
      for (let data of left) {
        if (right.includes(data)) res.push(data);
      }
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static rightOutterJoin(left, right) {
    try {
      let res = [];
      for (let data of right) {
        if (!left.includes(data)) res.push(data);
      }
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  static insertStr(source, startIndex, newStr) {
    return source.slice(0, startIndex) + newStr + source.slice(startIndex);
  }

  static insertSingleQuote(str) {
    if (str == "" || str == undefined || str == null || typeof str != typeof "")
      return null;
    if (str.includes("'")) {
      const index = str.indexOf("'");
      return this.insertStr(str, index, "'");
    }
    return str;
  }
}

module.exports = TheArrayTool;
