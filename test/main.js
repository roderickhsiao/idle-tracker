import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#fff",
        "fontFamily": "Roboto,sans-serif",
        "fontSmoothing": "antialiased",
        "WebkitFontSmoothing": "antialiased",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "minHeight": "100%",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "textRendering": "optimizeLegibility",
        "color": "rgba(0,0,0,.83)"
    },
    "html": {
        "lineHeight": 1.15,
        "MsTextSizeAdjust": "100%",
        "WebkitTextSizeAdjust": "100%"
    },
    "article": {
        "display": "block"
    },
    "aside": {
        "display": "block"
    },
    "footer": {
        "display": "block"
    },
    "header": {
        "display": "block",
        "textAlign": "center",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "borderBottom": "1px solid rgba(0,0,0,.2)"
    },
    "nav": {
        "display": "block"
    },
    "section": {
        "display": "block"
    },
    "h1": {
        "fontSize": 2,
        "marginTop": 0.67,
        "marginRight": 0,
        "marginBottom": 0.67,
        "marginLeft": 0
    },
    "figcaption": {
        "display": "block"
    },
    "figure": {
        "display": "block",
        "marginTop": 1,
        "marginRight": 40,
        "marginBottom": 1,
        "marginLeft": 40
    },
    "main": {
        "display": "block"
    },
    "a": {
        "backgroundColor": "transparent",
        "WebkitTextDecorationSkip": "objects"
    },
    "img": {
        "borderStyle": "none"
    },
    "svg:not(:root)": {
        "overflow": "hidden"
    },
    "button": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "input": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "optgroup": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "select": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "textarea": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "code": {
        "display": "block"
    },
    "config": {
        "border": "1px solid rgba(0,0,0,.2)",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "borderRadius": 4
    },
    "demo": {
        "border": "1px solid rgba(0,0,0,.2)",
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "paddingTop": 0,
        "paddingRight": 12,
        "paddingBottom": 8,
        "paddingLeft": 12,
        "borderRadius": 4
    },
    "desc": {
        "marginTop": 12,
        "marginRight": 0,
        "marginBottom": 12,
        "marginLeft": 0,
        "whiteSpace": "pre-line",
        "fontStyle": "italic",
        "fontWeight": "300"
    },
    "status": {
        "paddingBottom": 20
    },
    "status-changeactive": {
        "color": "#4caf50"
    },
    "status-changeinactive": {
        "color": "#f44336"
    }
});