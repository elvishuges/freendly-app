// Imports

// test/CustomCard.spec.js

// Libraries
import Vue from 'vue'
import Vuetify from 'vuetify'

import Login from '../src/views/Login'

// Components test
//import CustomCard from '@/components/CustomCard'

// Utilities
import { createLocalVue, mount, shallowMount } from '@vue/test-utils'

describe('Home.vue', () => {
    const localVue = createLocalVue()
    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('tem botao', ()=>{
        const wrapper = mount(Login, {
            localVue,
            vuetify,
        })
      expect(wrapper.contains('v-btn')).toBe(true)
    })

    it('render a vue instance', () => {
        const wrapper = mount(Login, {
            localVue,
            vuetify,
        })

        expect(wrapper.isVueInstance()).toBe(true)
    })

    it("testando click de usuario a", async()=>{
        const login = jest.fn()
        const wrapper = shallowMount(Login ,{
            localVue,
            vuetify,

        })
        wrapper.setData({
            email: '',
            senha: '',
        });

        expect(wrapper.vm.email).toBe('')

           const button = wrapper.find('v-btn')
           button.trigger('click')
        // console.log("button",button);
           await wrapper.vm.$nextTick()
           expect(wrapper.vm.validFormLogin).toBe(true);
        // expect(button.element.getAttribute('disabled')).toBe(null);
    })

  })