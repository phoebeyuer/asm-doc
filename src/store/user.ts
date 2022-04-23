import { defineStore } from 'pinia'

export interface UserState {
  userInfo: UserInfo
  test: string
}

export interface UserInfo {
  id: string
  username: string
  avater: string
  token: string
  roles: string[]
}

const defaultUserInfo = {
  id: '',
  username: 'hahaha',
  avater: '',
  token: '',
  roles: [],
}

export const userInfoStore = defineStore({
  id: 'userInfo',
  state: (): UserState => ({
    userInfo: { ...defaultUserInfo },
    test: '1111111',
  }),
  getters: {
    nameLength: (state) => state.userInfo.username.length,
  },
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info
    },
  },
})
