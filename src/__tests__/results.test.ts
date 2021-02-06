import {
  QueryResult,
  BackendResult
} from '../index'

const commentDataKey: string = 'comment';
const errorPostKey: string = 'post';
const commentContent: Object = {
  id: 1,
  title: 'Lorem',
  'body': 'ipsum'
};
const commentDataRow = {
  content: commentContent
};
const errorPostRow = {
  category: 'validation',
  content: {
    message: 'Validation error'
  }
};

const backendResult: BackendResult = {
  data: {
    comment: commentDataRow
  },
  errors: {
    post: errorPostRow
  },
  warnings: {},
  trace: {}
}

const queryResult: QueryResult = new QueryResult();
queryResult.setResult(backendResult);

test(`QueryResult should has data`, () => {
  expect(queryResult.hasData()).toBe(true);
});

test(`QueryResult should has content by key:${commentDataKey}`, () => {
  expect(queryResult.hasContent(commentDataKey)).toBe(true);
});

test(`QueryResult should has errors`, () => {
  expect(queryResult.hasErrors()).toBe(true);
});

test(`QueryResult shouldn't has data key:user`, () => {
  expect(queryResult.hasDataKey('user')).toBe(false);
});

test(`QueryResult shouldn't has trace`, () => {
  expect(queryResult.hasTrace()).toBe(false);
});

test(`QueryResult should has data key:${commentDataKey}`, () => {
  expect(queryResult.hasDataKey(commentDataKey)).toBe(true);
});

test(`QueryResult extracts valid data by key:${commentDataKey}`, () => {
  expect(queryResult.getDataRow(commentDataKey)).toEqual(commentDataRow);
});

test(`QueryResult extracts content by key:${commentDataKey}`, () => {
  expect(queryResult.getContent(commentDataKey)).toEqual(commentContent);
});

test(`QueryResult extracts valid error by key:${errorPostKey}`, () => {
  expect(queryResult.getError(errorPostKey)).toEqual(errorPostRow);
});