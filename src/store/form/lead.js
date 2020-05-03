import formConfig from '../../config/tafelFormConfig.json'

const mutations = {
  updateField(state, payload) {
    state.formData[payload.key] = payload.value
  }
}

const state = {
  formData: {}
}

const getters = {
  plz: (state) => {
    console.log(state.formData.plz)
    return state.formData.plz
  }
}

formConfig.forEach((field) => {
  state.formData[field.name] = ''
})

export default {
  namespaced: true,
  mutations,
  getters,
  state
}
