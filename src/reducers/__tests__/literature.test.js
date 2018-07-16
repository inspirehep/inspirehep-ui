import { Map, fromJS } from 'immutable';

import reducer from '../literature';
import {
  LITERATURE_ERROR,
  LITERATURE_REQUEST,
  LITERATURE_SUCCESS,
  LITERATURE_AUTHORS_ERROR,
  LITERATURE_AUTHORS_REQUEST,
  LITERATURE_AUTHORS_SUCCESS,
  LITERATURE_REFERENCES_ERROR,
  LITERATURE_REFERENCES_REQUEST,
  LITERATURE_REFERENCES_SUCCESS,
} from '../../actions/actionTypes';

describe('literature reducer', () => {
  it('default', () => {
    const state = reducer(undefined, {});
    const expected = fromJS({
      loading: false,
      data: {},
      error: {},
      loadingReferences: false,
      errorReferences: {},
      references: [],
      loadingAuthors: false,
      errorAuthors: {},
      authors: [],
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_REQUEST', () => {
    const state = reducer(Map(), { type: LITERATURE_REQUEST });
    const expected = Map({ loading: true });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_SUCCESS', () => {
    const payload = {
      metadata: {
        titles: [
          {
            title: 'Jessica Jones',
          },
        ],
      },
    };
    const state = reducer(Map(), { type: LITERATURE_SUCCESS, payload });
    const expected = fromJS({
      loading: false,
      data: payload,
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_ERROR', () => {
    const state = reducer(Map(), {
      type: LITERATURE_ERROR,
      payload: { message: 'error' },
    });
    const expected = fromJS({
      loading: false,
      data: {},
      error: { message: 'error' },
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_REFERENCES_REQUEST', () => {
    const state = reducer(Map(), { type: LITERATURE_REFERENCES_REQUEST });
    const expected = Map({ loadingReferences: true });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_REFERENCES_SUCCESS', () => {
    const references = [
      {
        control_number: 12345,
      },
    ];
    const payload = {
      metadata: {
        references,
      },
    };
    const state = reducer(Map(), {
      type: LITERATURE_REFERENCES_SUCCESS,
      payload,
    });
    const expected = fromJS({
      loadingReferences: false,
      references,
      errorReferences: {},
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_REFERENCES_ERROR', () => {
    const state = reducer(Map(), {
      type: LITERATURE_REFERENCES_ERROR,
      payload: { message: 'error' },
    });
    const expected = fromJS({
      loadingReferences: false,
      errorReferences: { message: 'error' },
      references: [],
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_AUTHORS_REQUEST', () => {
    const state = reducer(Map(), { type: LITERATURE_AUTHORS_REQUEST });
    const expected = Map({ loadingAuthors: true });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_AUTHORS_SUCCESS', () => {
    const authors = [
      {
        full_name: 'Jessica Jones',
      },
    ];
    const payload = {
      metadata: {
        authors,
      },
    };
    const state = reducer(Map(), {
      type: LITERATURE_AUTHORS_SUCCESS,
      payload,
    });
    const expected = fromJS({
      loadingAuthors: false,
      authors,
      errorAuthors: {},
    });
    expect(state).toEqual(expected);
  });

  it('LITERATURE_AUTHORS_ERROR', () => {
    const state = reducer(Map(), {
      type: LITERATURE_AUTHORS_ERROR,
      payload: { message: 'error' },
    });
    const expected = fromJS({
      loadingAuthors: false,
      errorAuthors: { message: 'error' },
      authors: [],
    });
    expect(state).toEqual(expected);
  });
});
