import * as Handlebars from 'handlebars';

export function registerHandlebarHelpers(): void {
    Handlebars.registerHelper('equals', function(a: string, b: string, options: Handlebars.HelperOptions): string {
        // @ts-ignore
        return a === b ? options.fn(this) : options.inverse(this);
    });
    Handlebars.registerHelper('notEquals', function(a: string, b: string, options: Handlebars.HelperOptions): string {
        // @ts-ignore
        return a !== b ? options.fn(this) : options.inverse(this);
    });

    Handlebars.registerHelper('enumName', function(str: string, options: Handlebars.HelperOptions): string {
        const enumNameStartCase = str.charAt(0).toUpperCase() + str.substr(1);
        const enumName = enumNameStartCase + 'Enum';

        return enumName;
    });
}
