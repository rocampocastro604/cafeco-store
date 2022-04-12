const customFetch = (task) => {
  return new Promise ((resolve) => {
    setTimeout(() => {
      return resolve(task);
    }, 2000)
  })
}

export default customFetch;