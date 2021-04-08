export function removeUndefinedTopLevelProperties<T extends Record<string, unknown | undefined>>(object: T): T {
  return Object.entries(object).reduce((cleanedObject, [key, value]) => {
    if (value !== undefined) {
      return {
        ...cleanedObject,
        [key]: value
      }
    }
    return cleanedObject
  }, {} as T)
}
