export default interface IGenericRepository<T> {
    GetQueryBuilder(queryBuilderAlias: string): any;
    BuildQueryBuild(queryBuilderAlias: string): any;
    GetByIdPromise(id: any): any;
    GetQuery(query: string): any;
    GetAllPromise(): any;
    AddPromise(entity: T): any;
    UpdatePromise(entity: T): any;
    DeletePromise(entity: T): any;
}
