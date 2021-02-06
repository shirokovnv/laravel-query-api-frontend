# Laravel Query API Frontend

The package for writing beautiful eloquent style queries in frontend

For backend usage see [this package](https://github.com/shirokovnv/laravel-query-api-backend)

> The package is in beta-testing right now.

## Installation

Via npm: 

```bash
npm i laravel-query-api-frontend
```

## Usage

1. Import query builder:

```js
import { QueryBuilder } from 'laravel-query-api-frontend'
```

2. Write a query in laravel eloquent builder style, for ex.: 

```js
const builder = new QueryBuilder();

const query = builder.fetch('App\\Post', 'post')
    .where(['id', '>', '10'])
    .whereHas('author', function(query) {
        return query.where('name', 'LIKE', '%John%');
    })
    .paginate(1, 10);
```

This query assumes to select all posts with ID > 10, where author name contains "John", 
paginated for 10 elements per page and returns page number 1

3. Render the query to json: 

```js
const jsonQueryData = query.render();
```

This will return something like this: 

```json
{
    "query": "fetch",
    "key": "post",
    "type": "App\\Post",
    "params": {
        "per_page": 10,
        "page": 1,
        "parts": [
            {
                "kind": "where",
                "args": {
                    "params": [
                        "id",
                        "=",
                        1
                    ]
                }
            },
            {
                "kind": "whereHas",
                "args": {
                    "relation": "author",
                    "subquery": {
                        "query": "fetch",
                        "key": "k6o7daqzwcrkktkvltx",
                        "type": "author",
                        "params": {
                            "parts": [
                                {
                                    "kind": "where",
                                    "args": {
                                        "params": "name"
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ]
    }
}
```

4. Send http request to your backend with jsonQueryData

> Note, that for example backend you need to wrap data in array, like this: 

```json
query_data: [
    jsonQueryData
]
```

### Available queries: 

> create

> custom 

> delete

> fetch 

> find

> update

You can import one query class like this: 

```js
import { queries.Create as Create } from 'laravel-query-api-backend'
```

or all of them: 

```js
import { queries } from 'laravel-query-api-backend'
```

Enjoy!

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## Testing

```bash
npm run test
```

## Security

If you discover any security related issues, please email shirokovnv@gmail.com instead of using the issue tracker.

## Credits

- [Nickolai Shirokov][link-author]
- [All Contributors][link-contributors]

## License

MIT. Please see the [license file](license.md) for more information.