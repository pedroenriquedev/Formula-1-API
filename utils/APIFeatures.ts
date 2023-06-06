import { Request } from 'express';

interface QueryObject {
    [key: string]: string | number | QueryObject;
}

interface FinalQuery {
    where?: object,
    skip?: number,
    take?: number,
    orderBy?: Array<object>,
    select?: object
}

interface FieldsObj {
    [key: string]: boolean
}

export class QueryParser {
    private static excludedFields = ['page', 'sort', 'limit', 'fields'];

    static parse(req: Request): FinalQuery {
        const parsed_query = this.parseQuery(req.query as QueryObject);
        const parsed_query_obj = { ...parsed_query };

        this.excludedFields.forEach(field => delete parsed_query[field]);

        const final_query: FinalQuery = {
            where: parsed_query,
            orderBy: [],
            select: {}
        };

        this.handlePagination(final_query, parsed_query_obj);
        this.handleSorting(final_query, parsed_query_obj);
        this.handleFields(final_query, parsed_query_obj);

        return final_query;
    }

    private static parseQuery(query: QueryObject): QueryObject {
        for (const key in query) {
            if (typeof query[key] === 'object' && query[key] !== null) {
                // If the value is an object, recursively parse its properties
                this.parseQuery(query[key] as QueryObject);
            } else if (!isNaN(Number(query[key]))) {
                 // If the value contains a decimal point, parse it as a float
                if ((query[key] as string).includes('.')) {
                    query[key] = parseFloat(query[key] as string);
                } 
                // Else, parse it as an integer
                else {
                    query[key] = parseInt(query[key] as string, 10);
                }
            }
        }
        return query;
    }

    private static handlePagination(final_query: FinalQuery, parsed_query_obj: QueryObject): void {
        const page = parsed_query_obj.page || 1;
        const limit = parsed_query_obj.limit || 100;
        const skip = (page as number - 1) * (limit as number);

        final_query.skip = skip;
        final_query.take = limit as number;
    }

    private static handleSorting(final_query: FinalQuery, parsed_query_obj: QueryObject): void {
        if (parsed_query_obj.sort) {
            const sort_string: string = parsed_query_obj.sort as string;
            const sort_arr: { [key: string]: string }[] = sort_string.split(',').map((item) => {
                if (item.startsWith('-')) {
                    return { [item.slice(1)]: 'desc' };
                } else {
                    return { [item]: 'asc' };
                }
            });
            final_query.orderBy = sort_arr;
        }
    }

    private static handleFields(final_query: FinalQuery, parsed_query_obj: QueryObject): void {
        if (parsed_query_obj.fields) {
            const fields: string = parsed_query_obj.fields as string;
            const fieldsObj: FieldsObj = fields.split(',').reduce((obj: FieldsObj, item: string) => {
                obj[item] = true;
                return obj;
            }, {});
            final_query.select = fieldsObj;
        }
    }
}


// // filter with where i.e where: { field_1: value_1, field_2: value_2 }

// // pagination

// // sorting
// // orderBy: [{field: 'asc'}, {field: 'desc'}],

// we selecting? 
//     select: {field: boolean}

// // From prisma docs:
// // page & limit with skip and take i.e {skip: 10, take: 5}
// // sort with orderBy i.e orderBy: [{field: 'desc'}, {field: 'asc'}]
// // fields with select: {field: true, field_2: true, field_3: true}