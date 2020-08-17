import counterReducer from "./counterSlice";

describe('counterSlice', () => {
  it('should initialise correctly', () => {
    expect(counterReducer(undefined, {})).toEqual(
      {
        counter: 0
      }
    );
  });
});