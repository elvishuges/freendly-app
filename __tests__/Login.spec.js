//Utilities
import VueRouter from 'vue-router';
import Vuetify from 'vuetify'

import Login from '../src/views/Login'

import { createLocalVue, mount, shallowMount } from '@vue/test-utils'



const localVue = createLocalVue()

describe('Login Component', () => {
    const routes = [
        { path: '/items/:item_id/edit', name: 'item-edit' }
    ];
    let vuetify
    const router = new VueRouter({ routes });

    beforeEach(() => {
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        vuetify = new Vuetify()
    });

    it('render a vue instance for Login component', () => {
        const wrapper = shallowMount(Login, {
            localVue: localVue,
            router,
            vuetify,
        })
        expect(wrapper.vm).toBeTruthy()
    })
})