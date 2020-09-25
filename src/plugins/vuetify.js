import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      themes: {
        light: {
            primary: '#03a9f4',
            secondary: '#009688',
            accent: '#4caf50',
            error: '#f44336',
            warning: '#ffeb3b',
            info: '#ffc107',
            success: '#00bcd4'
            // primary: '#009688',
            // secondary: '#FFCDD2',
            // accent: '#3F51B5',
            // // Analogas
            // aBlueDark: '#0860A3',
            // aBlue: '#0991AD',
            // aGreen: '#09AD6E',
            // aGreenDark: '#08A33C',
            // // Monocromaticas
            // mTeal1: '#00E3CC',
            // mTeal2: '#32A89C',
            // mTeal3: '#44E3D3',
            // mTeal4: '#00635A',
            // // Triade
            // tGreem: '#074A43',
            // tPurple: '#A31096',
            // tYellowDark: '#63520A',
            // tYellow: '#E3B80B',
        
            // // Conplementares
            // compleLight: '#963000',
            // compleDark: '#4A1800',
        
            // // Composto
            // compo1: '#147BC9',
            // compo2: '#65BBFC',
            // compo3: '#A33E29',
            // compo4: '#C91914',
        
            // greyPrimary: '#757575',
            // greyLight: '#cfcfcf',
            // greyDark: '#212121'
        
        },
        dark: {
            primary: '#009688'
          }
        
      },
    },
  })
