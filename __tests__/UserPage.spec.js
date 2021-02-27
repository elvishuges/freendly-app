

//Utilities
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';


// Components
import UserPage from '@/views/UserPage'
import Drawer from '@/components/userPage/Drawer'
import Bar from '@/components/userPage/Bar'

// Utilities
import store from "@/store";
import {
    createLocalVue,
    mount,
    shallowMount
} from '@vue/test-utils'

const localVue = createLocalVue()

describe('Userpage Tests', () => {
    const build = () => {
        const wrapper = shallowMount(UserPage, {
            localVue: localVue,
            store,
            vuetify,
        })
        return {
            wrapper,
            drawer: () => wrapper.findComponent(Drawer),
            bar: () => wrapper.findComponent(Bar),

        }
    }

    let vuetify

    beforeEach(() => {
        jest.resetAllMocks()
        const localVue = createLocalVue();
        localVue.use(VueRouter);
        vuetify = new Vuetify()
    });

    it('create components and snapshots', () => {
        const { wrapper } = build()
        expect(wrapper.html()).toMatchSnapshot()
    })

    it("render the two children componens", () => {
        const { wrapper } = build()
        expect(wrapper.findComponent(Drawer).exists()).toBe(true)
        expect(wrapper.findComponent(Bar).exists()).toBe(true)
    })

    it("render drawer and bar", () => {
        const { drawer, bar } = build()
        expect(drawer).toBeTruthy();
        expect(bar).toBeTruthy();
    })

    it("bar event to open drawer", async () => {
        const { drawer, wrapper, bar } = build()
        bar().vm.$emit('open-drawer')
        await bar().vm.$nextTick() // Wait until $emits have been handled
        expect(drawer().vm.drawer).toBe(true)
    })

})