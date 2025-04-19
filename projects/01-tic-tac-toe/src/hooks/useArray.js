export function useArray(
    positions = 9,
    { defaultValue } = { defaultValue: null }
) {
    return Array(positions).fill(defaultValue)
}
