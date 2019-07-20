const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.log('Action called:', action)
    const returnValue = next(action)
    console.log('State after action:', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger