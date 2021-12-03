const eventDefinitions = []

export function waitUntilIdle() {
  return Promise.resolve()
}

export function dispatchEvent(event) {}

export function defineEvent(definition) {
  console.log(`defining:`, definition)
  eventDefinitions.push(definition)

  return context => {
    return { definition, context }
  }
}
