import counterReducer, { decrement, increment, incrementAsync, incrementByAmount } from "./counterSlice";

describe('counterSlice', () => {
  it('should initialise correctly', () => {
    expect(counterReducer(undefined, {})).toEqual(
      {
        counter: 0
      }
    );
  });

  it('should increment correctly', () => {
    expect(counterReducer(undefined, increment, { counter: 0 })).toEqual(
      {
        counter: 1
      }
    );
  });

  it('should decrement correctly', () => {
    expect(counterReducer(undefined, decrement, { counter: 0 })).toEqual(
      {
        counter: -1
      }
    );
  });

  it('should incrementByAmount of 0 correctly', () => {
    expect(counterReducer(undefined, incrementByAmount(0), { counter: 0 })).toEqual(
      {
        counter: 0
      }
    );
  });

  it('should incrementByAmount of 1 correctly', () => {
    expect(counterReducer(undefined, incrementByAmount(1), { counter: 0 })).toEqual(
      {
        counter: 1
      }
    );
  });

  it('should incrementByAmount of 2 correctly', () => {
    expect(counterReducer(undefined, incrementByAmount(2), { counter: 0 })).toEqual(
      {
        counter: 2
      }
    );
  });

  it('should incrementByAmount of -1 correctly', () => {
    expect(counterReducer(undefined, incrementByAmount(-1), { counter: 0 })).toEqual(
      {
        counter: -1
      }
    );
  });

  it('should incrementByAmount of -2 correctly', () => {
    expect(counterReducer(undefined, incrementByAmount(-2), { counter: 0 })).toEqual(
      {
        counter: -2
      }
    );
  });
});