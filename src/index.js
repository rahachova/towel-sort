
// You should implement your task here.

function towelSort (matrix) {
  if(Array.isArray(matrix)) {
    let result = []
    matrix.forEach((element, index) => {
      if(index === 0 || index % 2 === 0) {
        result = result.concat(element)
      } else {
        result = result.concat(element.reverse())
      }
    });
  return result;
  } else {
    return []
  }
}

module.exports = towelSort