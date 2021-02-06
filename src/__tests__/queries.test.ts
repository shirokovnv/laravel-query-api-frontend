import {
  QueryBuilder
} from '../index'

test('Create query renders valid JSON', () => {
  const queryCreate = QueryBuilder.create('Comment', 'comment', {
    title: 'Lorem',
    body: 'ipsum'
  });
  const expectedValue = {
    key: 'comment',
    params: {
      body: 'ipsum',
      title: 'Lorem'
    },
    query: 'create',
    type: 'Comment'
  };
  expect(queryCreate.render()).toEqual(expectedValue);
});

test('Delete query renders valid JSON', () => {
  const queryDelete = QueryBuilder.delete('Comment', 'comment', 1);
  const expectedValue = {
    key: 'comment',
    params: {
      id: 1
    },
    query: 'delete',
    type: 'Comment'
  };
  expect(queryDelete.render()).toEqual(expectedValue);
});

test('Custom query renders valid JSON', () => {
  const queryCustom = QueryBuilder.custom('Test', 'test', {
    say: 'hello'
  });
  const expectedValue = {
    key: 'test',
    params: {
      say: 'hello'
    },
    query: 'custom',
    type: 'Test'
  };
  expect(queryCustom.render()).toEqual(expectedValue);
});

test('Update query renders valid JSON', () => {
  const queryUpdate = QueryBuilder.update('Comment', 'comment', 1, {
    title: 'Dolor'
  });
  const expectedValue = {
    key: 'comment',
    params: {
      id: 1,
      data: {
        title: 'Dolor'
      }
    },
    query: 'update',
    type: 'Comment'
  };
  expect(queryUpdate.render()).toEqual(expectedValue);
});

test('Find query renders valid JSON', () => {
  const queryFind = QueryBuilder.find('Comment', 'comment', 1);
  const expectedValue = {
    key: 'comment',
    params: {
      id: 1
    },
    query: 'find',
    type: 'Comment'
  };
  expect(queryFind.render()).toEqual(expectedValue);
});

test('Fetch query with where conditions renders valid JSON', () => {
  const queryFetch = QueryBuilder.fetch('Comment', 'comment')
    .where(['title', 'LIKE', '%ipsum%'])
  const expectedValue = {
    key: 'comment',
    params: {
      parts: [{
        args: {
          params: [
            'title',
            'LIKE',
            '%ipsum%'
          ]
        },
        kind: 'where'
      }]
    },
    query: 'fetch',
    type: 'Comment'
  };
  expect(queryFetch.render()).toEqual(expectedValue);
});