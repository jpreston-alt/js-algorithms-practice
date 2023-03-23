const array = [1, 2, 3, 4, 5];

const findSubsets = (arr) => {
  const subsets = [[]];

  for (let i = 0; i < arr.length; i++) {
    const subsetsLength = subsets.length;
    console.log("arr[i]>>>", arr[i]);
    console.log("subsets>>>", subsets);
    console.log("subsetsLength>>>", subsetsLength);
    for (let j = 0; j < subsetsLength; j++) {
      const newSubset = [array[i], ...subsets[j]];
      subsets.push(newSubset);
      console.log(subsets);
    }
  }

  return subsets;
};

const subsets2 = findSubsets(array);
// console.log({ subsets2 });
