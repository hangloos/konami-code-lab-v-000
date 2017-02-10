
const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
//up,up,down,down,left,right,left,right,B,A

function init() {
  var index = 0

  document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.detail || e.which)

    if (code[index] === key) {
      index++

      if (index === code.length) {
        alert('hurray!')

        index = 0
      }
    } else {
      index = 0
    }
  })
}