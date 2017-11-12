import { COUNTER_INC, COUNTER_DEC } from '../reducers/counter';

export const increaseCounter = () => {
  return {
    type: COUNTER_INC,
  }
}

export const decreaseCounter = () => {
  return {
    type: COUNTER_DEC,
  }
}