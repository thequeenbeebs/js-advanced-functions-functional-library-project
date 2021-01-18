const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i])
        }
      }
      else {
        let values = Object.values(collection)
        for(let i = 0; i < values.length; i++) {
          callback(values[i])
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let newCollection = []
      let values = Object.values(collection)
      for(let i = 0; i < values.length; i++) {
        newCollection.push(callback(values[i]))
      }
      return newCollection
    },

    reduce: function(collection, callback, acc=0) {
      let start = 0
      for (let i = 0; i < collection.length; i++) {
        start += callback(acc, collection[i])
      }
      return start
    },

    find: function(collection, predicate) {
      let values = Object.values(collection)
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i]
        }
      }
    },

    filter: function(collection, predicate) {
      let values = Object.values(collection)
      let newArr = []
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          newArr.push(values[i])
        }
      }
      return newArr
    },

    size: function(collection) {
      let count = 0
      for (let i = 0; i < Object.values(collection).length; i++) {
        count++
      }
      return count
    },

    first: function(collection, n=0) {
      if (n === 0) {
        return collection[0]
      } else {
        return collection.slice(0, n)
      }
    },

    last: function(collection, n=0) {
      if (n === 0) {
        return collection[collection.length - 1]
      } else {
        return collection.slice(collection.length - n, collection.length)
      }
    },

    compact: function(array) {
      let newArr = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          newArr.push(array[i])
        }
      }
      return newArr
    },

    sortBy: function(array, callback) {
      let newArr = []
      for (let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i]))
      }
      return newArr.sort()
    },


  }
})()

fi.libraryMethod()
