import { ExhibitionData } from "models";
import { descendingComparator } from "./object-comparer";

enum SortingDirection {
    Asc = "asc",
    Desc = "desc"
  }

export const handleCompare = (object1: ExhibitionData, object2: ExhibitionData, key: string, direction: SortingDirection) => {
    return direction === SortingDirection.Asc
        ? descendingComparator(object1, object2, key)
        : -descendingComparator(object1, object2, key)
}