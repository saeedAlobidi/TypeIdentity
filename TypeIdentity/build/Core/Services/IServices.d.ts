export default interface IServices<T> {
    getAsync(entity: any): Promise<T>;
    addAsync(entity: any): Promise<T>;
    updateAsync(entity: any): Promise<T>;
    deleteAsync(entity: any): Promise<T>;
}
