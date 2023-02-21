for (var x = 100; x <= 200; x++) {
  if (x % 3 === 0) {
    if (x % 4 === 0) {
      console.log('LoopyLighthouse')
    } else {
      console.log('Loopy')
    }
  } else if (x % 4 === 0) {
    console.log('Lighthouse')
  } else {
    console.log(x)
  }
}