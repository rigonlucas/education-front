/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import {createVuetify, ThemeDefinition} from 'vuetify'
import {aliases, mdi} from 'vuetify/iconsets/mdi'

const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#efefef',
        surface: '#ffffff',
        primary: '#013b94',
        'primary-darken-1': '#04006b',
        secondary: '#7f888f',
        'secondary-darken-1': '#474d52',
        error: '#b90302',
        info: '#038cf8',
        success: '#027925',
        warning: '#dc9f01',
        'top-bar': '#004E84'
    }
}
const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#2c2b2b',
        surface: '#2E2E2E',
        primary: '#0551de',
        'primary-darken-1': '#02348c',
        secondary: '#c5c7c9',
        'secondary-darken-1': '#a8a8a9',
        error: '#da0c0c',
        info: '#068bde',
        success: '#01b271',
        warning: '#CFA500',
        'top-bar': '#3172AC'
    }
}
export default createVuetify({
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: lightTheme,
            dark: darkTheme
        },
    },
    icons: {
        defaultSet: 'mdi',
        aliases: {
            ...aliases,
            manageAccounts: 'mdi-manage-accounts'
        },
        sets: {
            mdi,
        }
    },
})
