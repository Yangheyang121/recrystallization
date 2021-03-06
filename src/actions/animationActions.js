import ActionType from '../constants/ActionType'
/**
 * Creates board for game of life with providen size
 */
export function makeInterval (intervalCb, intervalTime) {
  return {
    type: ActionType.CREATE_INTERVAL,
    interval: setInterval(intervalCb, intervalTime),
    intervalTime: intervalTime
  }
}
/**
 * Removes an interval if one is already set
 */
export function removeInterval () {
  return {
    type: ActionType.REMOVE_INTERVAL
  }
}