function isValid(stale, latest, otjson) {
  let operations = JSON.parse(otjson);
  let cursor = 0;
  let doc = stale;
  //   console.log(operations);

  for (let operation of operations) {
    if (operation.op === "skip") {
      cursor += operation.count;
    } else if (operation.op === "insert") {
      if (cursor > doc.length) return false; // invalid as cursor is out of bounds
      doc = doc.slice(0, cursor) + operation.chars + doc.slice(cursor);
      cursor += operation.chars.length;
    } else if (operation.op === "delete") {
      if (cursor + operation.count > doc.length) return false; // invalid as deleting past the end
      doc = doc.slice(0, cursor) + doc.slice(cursor + operation.count);
    }
  }

  if (cursor > doc.length) return false; // invalid as cursor is out of bounds

  return doc === latest;
}

module.exports = isValid; // Export the function
