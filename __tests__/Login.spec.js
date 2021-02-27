
import Vuetify from 'vuetify'

import Login from '../src/views/Login'

import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

describe('Login Component', () => {
    const localVue = createLocalVue()

    it('render a vue instance', () => {
        const wrapper = shallowMount(Login, {
            localVue,
        })
        expect(wrapper.isVueInstance()).toBe(true)
    })
})