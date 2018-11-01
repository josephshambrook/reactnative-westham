const colors = {
  colorWestHamPrimary: '#7a263a',
  colorWestHamSecondary: '#1bb1e7',
  colorWestHamThird: '#f3d459',
  
  colorGrey100: '#f8f9fa',
  colorGrey200: '#e9ecef',
  colorGrey300: '#dee2e6',
  colorGrey400: '#ced4da',
  colorGrey500: '#adb5bd',
  colorGrey600: '#6c757d',
  colorGrey700: '#495057',
  colorGrey800: '#343a40',
  colorGrey900: '#212529',
}

const typeScale = {
  paragraph: 1,
  h1: 3.998,
  h2: 2.827,
  h3: 1.999,
  h4: 1.414,
  h5: 1,
  small: 0.707
}

export default {
  // colors
  ...colors,
  colorPrimary: colors.colorWestHamPrimary,
  colorSecondary: colors.colorWestHamSecondary,

  // padding
  viewPadding: 10,

  // type
  fontSizeDefault: 16,
  typeScale,

  // headers
  mainPageHeader: {
    headerStyle: {
      backgroundColor: colors.colorWestHamPrimary
    },
    headerTintColor: '#fff'
  },
  subPageHeader: {
    headerStyle: {
      backgroundColor: colors.colorWestHamSecondary
    },
    headerBackTitleStyle : {
      color: '#000'
    },
    headerTintColor: '#000'
  }
}
