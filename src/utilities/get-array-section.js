/* eslint-disable */

export default function (arr, sectionNumber, sectionSize) {
  const totalSections = Math.ceil(arr.length / sectionSize);
  sectionNumber = Math.min(sectionNumber, totalSections);
  const from = (sectionNumber - 1) * sectionSize;
  const to = Math.min(from + sectionSize, arr.length);

  return arguments.slice(from, to);
}
