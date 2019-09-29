export function mapToEntities(state: any, array: Array<any>) {
    const entities = array.reduce((prevItem, currentItem: any) => {
        return {
            ...prevItem,
            [currentItem.id]: currentItem
        };
    }, { ...state.entities });
    return entities;
}
