export const getPokeIdFromUrl = (url) => {
    let withoutLastEl = url.slice(0, -1);
    return withoutLastEl.substring(withoutLastEl.lastIndexOf("/") + 1, withoutLastEl.length)
}