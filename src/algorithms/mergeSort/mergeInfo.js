function mergeInfo() {
  return `Merge sort takes the approach of divide and conquer. To
  start, it divides the collection in two. And then divides those
  collections in two, and continues to do this until it only contains
  collections that each contain one value. A collection with only
  one value is a sorted collection. At this point it starts to merge
  them back together comparing their values and sorting them accordingly.`;
}

module.exports = mergeInfo;
