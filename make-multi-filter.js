"use strict";

function MakeMultiFilter(originalArray) {
  function currentArray() {
    return currentArray.data;
  }

  currentArray.data = originalArray.slice();

  function arrayFilterer(filteredCriteria, callback) {
    if (filteredCriteria === undefined) {
      return arrayFilterer.currentArray();
    }

    if (typeof filteredCriteria !== "function") {
      return arrayFilterer.currentArray();
    }

    currentArray.data = currentArray.data.filter(filteredCriteria);

    if (typeof callback === "function") {
      callback.call(originalArray, arrayFilterer.currentArray());
    }

    return arrayFilterer;
  }

  arrayFilterer.currentArray = currentArray;

  return arrayFilterer;
}
