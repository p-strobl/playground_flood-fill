"use strict";

/**
 * Set bitmap
 * @returns {array}
 */
let bitmap = [
  "................**********........................",
  "...............*..........*.......................",
  "..........*****............*........*.............",
  ".........*.................*.......*.*....*****...",
  "........*................***......*...*.**.....**.",
  "....****.................*.......*.....*.........*",
  "..**......................*******................*",
  ".*...............................................*",
  ".*...............................................*",
  "*...........****.............................****.",
  "*..........*....*.........................***.....",
  ".*.........*....*.......................**........",
  "..***.......****.......................*..........",
  ".....****......................******..*..........",
  ".........**********************.....****.........."
];

/**
 * Example bitmap
 * @returns {array}
 */
// let bitmap = [
//   "..............",
//   "....******....",
//   "....*....*....",
//   "....*....*....",
//   "....******....",
//   ".............."
// ];

/**
 * Convert bitmap array into assembled bitmap string
 * @param {array} bitmapArray
 * @returns {string} assembled bitmap
 */
const convertBitmapArray = bitmapArray => {
  return bitmapArray.join("\n");
};

console.log(convertBitmapArray(bitmap) + "\n");

/**
 * Select a element at x and y coordinate
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @returns {string} Selected bitmap element
 */
const selectBitmapElement = (x, y) => {
  return bitmap[y][x];
};

/**
 * Change selected element at x and y coordinate
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @returns {undefined}
 */
const changeSelectedElement = (x, y) => {
  bitmap[y] = `${bitmap[y].substring(0, x)}*${bitmap[y].substring(x + 1, bitmap[y].length)}`;
};

/**
 * Floodfill's given bitmap via recursion at .(dot) location, limited by *(star)
 * @param {number} x - x-coordinate
 * @param {number} y - y-coordinate
 * @returns {string} assembled bitmap
 */
const floodFill = (x, y) => {
  if (x < 0 || y < 0 || y >= bitmap.length || x >= bitmap[y].length || selectBitmapElement(x, y) === "*") return convertBitmapArray(bitmap);

  changeSelectedElement(x, y);

  floodFill(x + 1, y);
  floodFill(x - 1, y);
  floodFill(x, y + 1);
  floodFill(x, y - 1);

  return convertBitmapArray(bitmap);
};

console.log(floodFill(10, 0));
