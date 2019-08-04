const logger = (store) => (next) => (action) => {
  console.group(action.type)
    console.info('Action called:', action)
    const returnValue = next(action)
    console.info('State after action:', store.getState())
  console.groupEnd()
  return returnValue
}

export default logger