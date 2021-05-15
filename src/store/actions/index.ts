import Types from "../consts";

export const ActionCreators = {
  addHeroesToRedux: (heroes: any[]) => ({
    type: Types.SET_HEROES,
    payload: heroes
  }),
  addAllHeroesToRedux: (heroes: any[]) => ({
    type: Types.SET_ALL_HEROES,
    payload: heroes
  })
}
