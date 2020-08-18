//import configureMockStore from 'redux-mock-store';
//import thunk from 'redux-thunk';
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

  // TODO - Implement testing for Thunks
  // The below resulted in a false positive (the mock store was incorrectly initialised with a value of 8).
  // The store.getState() does not provide the state! See https://github.com/reduxjs/redux-mock-store/issues/71.
  // The correct way of testing the Thunk is to check getActions to ensure that the expected action
  // is dispatched to the reducer. The below also attempts to check the logic of that action which is already done above.
  // A clearer separation of actions and reducer might make this more obvious.
  // The redux-actions-assertions library is designed to facilitate the integration test of reducer and action that the
  // below is attempting but this might not be the correct way forward anyway.
  // Putting this on-hold for now.
  // 
  // it('should incrementAsync by -2 from 10 correctly', () => {
  //   const middlewares = [thunk];
  //   const mockStore = configureMockStore(middlewares);
  //   const store = mockStore({ counter: 10 });
  //   return store.dispatch(incrementAsync(-2)).then(() => {
  //     expect(store.getState()).toEqual({ counter: 8 })
  //   });
  // });
});