export function descendingComparator(a: any, b: any, key: string) {
    let aValue = a[key] ? a[key].toString().toLowerCase().trim() : "";
    let bValue = b[key] ? b[key].toString().toLowerCase().trim() : "";

    if (bValue < aValue) {
        return -1;
    }
    if (bValue > aValue) {
        return 1;
    }
    return 0;
}