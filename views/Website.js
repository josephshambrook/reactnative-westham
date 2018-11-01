import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WebView from 'rn-webview';
import page from './../resources/index.html';
import Theme from './../theme';

const immediate = () => {
  console.log('hello world');
  return 'hey';
}

class Website extends Component {
  static navigationOptions = {
    ...Theme.subPageHeader,
    headerTitle: 'Website',
  };

  state = {
    token: null
  }

  componentWillMount = () => {
    this.setState({
      token: 'cwm'
    });
  };

  immediateJs = () => {
    return 'window.token = "hello world";';
  }

  onLoadJs = () => {
    return `(function() { document.body.innerHTML += "<div>Hello from injected</div>"; console.log("injected"); document.body.innerHTML += \`<div>Token is \${window.token}</div>\`; window.postMessage("hello world") })()`;
  }

  onMessage = () => {
    console.log('hello message');
  }

  render() {
    console.log(`render: ${this.state.token}`);
    console.log(this.onLoadJs.toString().match(/function[^{]+\{([\s\S]*)\}$/)[1]);

    return (
      <SafeAreaView style={styles.safeArea}>
        <WebView
          source={page}

          injectJavaScript={this.immediateJs}

          // injectedJavaScript={'(function(){document.body.innerHTML += "<div>Hello</div>";}());'}
          injectedJavaScript={`${this.onLoadJs()}`}

          // triggered when window.postMessage used in webview
          // onMessage={this.onMessage}
          onMessage={(event)=> console.log(event.nativeEvent.data)}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
     flex: 1
  }
})

export default Website;
