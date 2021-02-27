

//Utilities
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';


// Components
import Drawer from '@/components/userPage/Drawer'

// Utilities
import store from "@/store";
import {
  createLocalVue,
  mount,
  shallowMount
} from '@vue/test-utils'

const localVue = createLocalVue()

describe('Drawer Tests', () => {
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

  it('drawer first state tobe false', () => {

    const wrapper = shallowMount(Drawer, {
      localVue: localVue,
      router,
      store,
      vuetify,
    });

    expect(wrapper.isVueInstance).toBeTruthy();
    expect(wrapper.props().drawer).toBe(false)
  });

  it('itensDrawer first state tobe array []', () => {

    const wrapper = shallowMount(Drawer, {
      localVue: localVue,
      router,
      store,
      vuetify,
    });
    let drawerItens = () => []

    expect(wrapper.props().drawerItens).toEqual(drawerItens())
  });
})