export abstract class HttpAdapter {
/*  abstract get(url:string, options?: any): Promise<any>; OPCION SIN TIPADO      */
    abstract get<T>(url:string, options?: Record<string, unknown>): Promise<T>;
}
