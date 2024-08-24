// @ts-nocheck
const plugin = require('tailwindcss/plugin');

module.exports = plugin(function ({ theme, addBase, addComponents, addUtilities, config }) {
    // Define your custom colors
    const customColors = {
        'kui-black': '#000000',
        'kui-light': {
          bg: {
            DEFAULT: '#FFFFFF',
            secondary: '#FAFAFA'
          },
          gray: {
            100: '#F2F2F2',
            200: '#EBEBEB',
            300: '#E6E6E6',
            400: '#EBEBEB',
            500: '#C9C9C9',
            600: '#A8A8A8',
            700: '#8F8F8F',
            800: '#7D7D7D',
            900: '#666666',
            1000: '#171717',
            alpha: {
              100: '#0000000D',
              200: '#00000014',
              300: '#0000001A',
              400: '#00000014',
              500: '#00000036',
              600: '#00000057',
              700: '#00000070',
              800: '#00000082',
              900: '#0000009C',
              1000: '#000000E8',
            },
          },
          blue: {
            100: '#F0F7FF',
            200: '#E9F4FF',
            300: '#DFEFFF',
            400: '#CAE7FF',
            500: '#94CCFF',
            600: '#48AEFF',
            700: '#006BFF',
            800: '#0059EC',
            900: '#005FF2',
            1000: '#002359',
          },
          red: {
            100: '#FFEEEF',
            200: '#FFE8EA',
            300: '#FFE3E4',
            400: '#FFD7D6',
            500: '#FFB1B3',
            600: '#FF676D',
            700: '#FC0035',
            800: '#EA001D',
            900: '#D8001B',
            1000: '#47000C',
          },
          amber: {
            100: '#FFF6DE',
            200: '#FFF4CF',
            300: '#FFF1C1',
            400: '#FFDC73',
            500: '#FFC543',
            600: '#FFA700',
            700: '#FFAF00',
            800: '#FF9400',
            900: '#AA4D00',
            1000: '#561900',
          },
          green: {
            100: '#ECFDEC',
            200: '#E5FCE7',
            300: '#D3FAD1',
            400: '#B9F5BC',
            500: '#82EB8D',
            600: '#4CE15E',
            700: '#28A948',
            800: '#279141',
            900: '#107D32',
            1000: '#003900',
          },
          teal: {
            100: '#DEFFFB',
            200: '#DDFEF6',
            300: '#CCF9F1',
            400: '#B1F7EC',
            500: '#52F0DB',
            600: '#00E3C4',
            700: '#00A995',
            800: '#00907E',
            900: '#007D6F',
            1000: '#003F34',
          },
          purple: {
            100: '#FAF0FF',
            200: '#F9F0FF',
            300: '#F6E8FF',
            400: '#F2D9FF',
            500: '#DFA7FF',
            600: '#C979FF',
            700: '#A000F8',
            800: '#8500D1',
            900: '#7D00CC',
            1000: '#2F004E',
          },
          pink: {
            100: '#FFE8F6',
            200: '#FFE8F3',
            300: '#FFDFEB',
            400: '#FFD3E1',
            500: '#FDB3CC',
            600: '#F97EA7',
            700: '#F22782',
            800: '#E4106E',
            900: '#C41562',
            1000: '#460523',
          }
        },
        'kui-dark': {
          bg: {
            DEFAULT: '#0A0A0A',
            secondary: '#000000',
          },
          gray: {
            100: '#1A1A1A',
            200: '#1F1F1F',
            300: '#292929',
            400: '#2E2E2E',
            500: '#454545',
            600: '#878787',
            700: '#8F8F8F',
            800: '#7D7D7D',
            900: '#A1A1A1',
            1000: '#EDEDED',
            alpha: {
              100: '#FFFFFF0F',
              200: '#FFFFFF17',
              300: '#FFFFFF21',
              400: '#FFFFFF24',
              500: '#FFFFFF3D',
              600: '#FFFFFF82',
              700: '#FFFFFF8A',
              800: '#FFFFFF78',
              900: '#FFFFFF9C',
              1000: '#FFFFFFEB',
            }
          },
          blue: {
            100: '#06193A',
            200: '#022248',
            300: '#002F62',
            400: '#003674',
            500: '#00418B',
            600: '#0090FF',
            700: '#006EFE',
            800: '#005BE7',
            900: '#47A8FF',
            1000: '#EAF6FF',
          },
          red: {
            100: '#330A11',
            200: '#440D13',
            300: '#5D0E17',
            400: '#6F101B',
            500: '#88151F',
            600: '#F32E40',
            700: '#F13242',
            800: '#E2162A',
            900: '#FF565F',
            1000: '#FFE9ED',
          },
          amber: {
            100: '#2A1700',
            200: '#361900',
            300: '#502800',
            400: '#5B3000',
            500: '#703E00',
            600: '#ED9A00',
            700: '#FFAF00',
            800: '#FF9400',
            900: '#FF9400',
            1000: '#FFF3D5',
          },
          green: {
            100: '#002608',
            200: '#00320B',
            300: '#003A0E',
            400: '#004615',
            500: '#006717',
            600: '#00952D',
            700: '#00AC3A',
            800: '#009432',
            900: '#00CA50',
            1000: '#D8FFE4',
          },
          teal: {
            100: '#00231B',
            200: '#002B22',
            300: '#003D34',
            400: '#004035',
            500: '#006154',
            600: '#009B86',
            700: '#00A995',
            800: '#00907E',
            900: '#00CBB5',
            1000: '#CBFFF5',
          },
          purple: {
            100: '#290C33',
            200: '#341142',
            300: '#47185E',
            400: '#541A76',
            500: '#642290',
            600: '#9440D5',
            700: '#9440D5',
            800: '#7D2BBA',
            900: '#C472FB',
            1000: '#FBECFF',
          },
          pink: {
            100: '#310D1E',
            200: '#420C25',
            300: '#571032',
            400: '#5D0C34',
            500: '#76063F',
            600: '#BA0056',
            700: '#F12B82',
            800: '#E7006D',
            900: '#FF4D8D',
            1000: '#FFE9F4',
          }
        }
      }

    // Extend the Tailwind theme with your custom colors
    addBase({
        ':root': {
            ...Object.entries(customColors).reduce((acc, [key, value]) => {
                acc[`--${key}`] = value;
                return acc;
            }, {}),
        },
    });
});
