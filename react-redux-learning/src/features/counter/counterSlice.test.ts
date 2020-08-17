import counterReducer, { decrement, increment, incrementAsync, incrementByAmount } from "./counterSlice";

describe('counterSlice', () => {
  it('should initialise correctly', () => {
    expect(counterReducer(undefined, {})).toEqual(
      {
        counter: 0
      }
    );
  });

  it('should increment from 0 correctly', () => {
    expect(counterReducer({ counter: 0 }, increment)).toEqual(
      {
        counter: 1
      }
    );
  });

  it('should increment from 10 correctly', () => {
    expect(counterReducer({ counter: 10 }, increment)).toEqual(
      {
        counter: 11
      }
    );
  });

  it('should decrement from 0 correctly', () => {
    expect(counterReducer({ counter: 0 }, decrement)).toEqual(
      {
        counter: -1
      }
    );
  });

  it('should decrement from 10 correctly', () => {
    expect(counterReducer({ counter: 10 }, decrement)).toEqual(
      {
        counter: 9
      }
    );
  });

  it('should incrementByAmount of 0 correctly', () => {
    expect(counterReducer({ counter: 0 }, incrementByAmount(0))).toEqual(
      {
        counter: 0
      }
    );
  });

  it('should incrementByAmount of 1 correctly', () => {
    expect(counterReducer({ counter: 0 }, incrementByAmount(1))).toEqual(
      {
        counter: 1
      }
    );
  });

  it('should incrementByAmount of 2 correctly', () => {
    expect(counterReducer({ counter: 0 }, incrementByAmount(2))).toEqual(
      {
        counter: 2
      }
    );
  });

  it('should incrementByAmount of 2 from 99 correctly', () => {
    expect(counterReducer({ counter: 99 }, incrementByAmount(2))).toEqual(
      {
        counter: 101
      }
    );
  });

  it('should incrementByAmount of -1 correctly', () => {
    expect(counterReducer({ counter: 0 }, incrementByAmount(-1))).toEqual(
      {
        counter: -1
      }
    );
  });

  it('should incrementByAmount of -2 correctly', () => {
    expect(counterReducer({ counter: 0 }, incrementByAmount(-2))).toEqual(
      {
        counter: -2
      }
    );
  });
});