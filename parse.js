// parse GL240 CSV: startRow (1-based), colIndex (1-based)
function parseGL240CSV(text, startRow = 22, colIndex = 4) {
  const lines = text.split(/\r?\n/);
  const dataLines = lines.slice(startRow - 1);
  const nums = [];
  for (const line of dataLines) {
    if (!line.trim()) continue;
    const cols = line.split(',');
    if (cols.length < colIndex) continue;
    const cell = cols[colIndex - 1].trim();
    const m = cell.match(/[-+]?\d+[.,]?\d*/);
    if (m) nums.push(parseFloat(m[0].replace(',', '.')));
  }
  return nums;
}

function average(arr) {
  if (!arr || arr.length === 0) return NaN;
  return arr.reduce((s, v) => s + v, 0) / arr.length;
}

// Contoh penggunaan:
// const text = await file.text(); // dari FileReader atau fetch
// const values = parseGL240CSV(text, 22, 4);
// const avg = average(values);
// console.log('Count:', values.length, 'Average V:', avg);