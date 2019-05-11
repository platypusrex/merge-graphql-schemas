import { mergeTypes, mergeResolvers } from '../src/index';

describe('index', () => {
  it('exposes mergeTypes', () => {
    expect(mergeTypes).toBeDefined();
  });

  it('exposes mergeResolvers', () => {
    expect(mergeResolvers).toBeDefined();
  });
});
