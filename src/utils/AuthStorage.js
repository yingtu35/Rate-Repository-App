import AsyncStorage from "@react-native-async-storage/async-storage"

class authStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace
  }

  async getAccessToken() {
    // Get the access token for the storage
    let token = await AsyncStorage.getItem(`${this.namespace}:accessToken`)
    token = JSON.parse(token)

    const currentTime = new Date().getTime()
    if (token && token.expiresAt < currentTime) {
      await this.removeAccessToken()
      token = null
    }
    return token != null ? token : null
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    const newToken = JSON.stringify(accessToken)
    await AsyncStorage.setItem(`${this.namespace}:accessToken`, newToken)
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:accessToken`)
  }
}

export default authStorage
