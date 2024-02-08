main()

async function main() {
  await sleep(200)
}

function sleep(sec) {
  return new Promise((resolve) => {
    setTimeout(resolve, sec * 1000)
  })
}
