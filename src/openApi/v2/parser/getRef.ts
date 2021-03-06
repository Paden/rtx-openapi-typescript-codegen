import { OpenApi } from '../interfaces/OpenApi';
import { OpenApiReference } from '../interfaces/OpenApiReference';

export function getRef<T>(openApi: OpenApi, item: T & OpenApiReference): T {
    if (item.$ref) {
        // Fetch the paths to the definitions, this converts:
        // "#/definitions/Form" to ["definitions", "Form"]
        const paths = item.$ref
            .replace(/^#/g, '')
            .split('/')
            .filter((item) => item);

        // Try to find the reference by walking down the path,
        // if we cannot find it, then we throw an error.
        let result: any = openApi;
        paths.forEach((path: string): void => {
            if (result.hasOwnProperty(path)) {
                result = result[path];
            } else {
                throw new Error(`Could not find reference: "${item.$ref}"`);
            }
        });

        //Get name from parameter if not in $ref
        if (!result.name && 'name' in item) {
            //@ts-ignore
            result.name = item.name;
        }

        return result as T;
    }
    return item as T;
}
