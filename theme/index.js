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

export default {
  ...colors,

  viewPadding: 10,

  fontSizeDefault: 16,

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
