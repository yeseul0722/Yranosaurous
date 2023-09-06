import React from "react";
import { View, Text, Button } from "react-native"
import { WebView } from "react-native-webview"

const ThreeHTML = () => {
    return(
        <WebView
        source={require('../threeComponents/02-geometry.html')}
      />
    )
}

export default ThreeHTML;