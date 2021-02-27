// Utilities
import { shallowMount, createLocalVue, mount } from '@vue/test-utils'

// Components
import Drawer from '@/components/userPage/Drawer'


// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'
import Vuex from 'vuex'
import store from '@/store' //you could also mock this out.

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Drawer Component', () => {

  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should have a custom title and match snapshot', () => {
    const wrapper = shallowMount(Drawer, {
      localVue,
      vuetify,
      store
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
