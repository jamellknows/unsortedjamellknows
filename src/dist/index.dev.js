"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unsortedBinarySearch = unsortedBinarySearch;

function unsortedBinarySearch(arr, x) {
  var index;
  var rand = (arr.length - 1) * Math.random();
  rand = Math.round(rand);

  if (arr[rand] < x || arr[rand] > x) {
    var larr = arr.slice(0, rand);
    var rarr = arr.slice(rand, arr.length - 1);
    var lsize = larr.length;
    var rsize = rarr.length;

    if (rsize > lsize) {
      //search right
      index = rand;
      rand = Math.random() * rsize;
      rand = Math.round(rand);
      return logsearchrecur(arr, x, index, rand);
    }

    if (lsize > rsize) {
      index = rand;
      rand = Math.random() * lsize;
      rand = Math.round(rand);
      return logsearchrecur(arr, x, index, rand);
    }

    if (lsize = rsize) {
      index = rand;
      rand = Math.round(Math.random());
      return logsearchrecur(arr, x, index, rand);
    }
  }

  if (arr[rand] === x) {
    console.log(arr[rand]);
    return rand;
  }
}

function logsearchrecur(arr, x, index, rand) {
  console.log(arr);

  if (arr[rand] < x || arr[rand] > x) {
    var larr = arr.slice(0, rand);
    var rarr = arr.slice(rand, arr.length - 1);
    var lsize = larr.length;
    var rsize = rarr.length;

    if (rsize > lsize) {
      //search right
      index = rand;
      rand = Math.random() * rsize;
      rand = index + Math.round(rand);
      return logsearchrecur(arr, x, index, rand);
    }

    if (lsize > rsize) {
      index = rand;
      rand = Math.random() * lsize;
      rand = index - Math.round(rand);
      return logsearchrecur(arr, x, index, rand);
    }

    if (lsize = rsize) {
      index = rand;
      rand = Math.round(Math.random());
      return logsearchrecur(arr, x, index, rand);
    }
  }

  if (arr[rand] === x) {
    console.log(arr[rand]);
    return rand;
  }
}