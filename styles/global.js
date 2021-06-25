import { StyleSheet } from "react-native";

const globals = StyleSheet.create({
  // globals
  container: {
    padding: 5,
    display: "flex",
  },
  button: {
    flex: 1,
    margin: 5,
    width: "100%",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textBtn: {
    fontSize: 20,
  },
  textScore: {
    fontSize: 75,
  },
});

export default StyleSheet.create({
  // view styles
  containerMain: {
    ...globals.container,
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
  },
  containerScore: {
    ...globals.container,
    width: "100%",
    paddingTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  containerButtons: {
    ...globals.container,
    flex: 1,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },

  // button styles
  btnYellow: {
    ...globals.button,
    backgroundColor: "#fdff87",
  },
  btnGreen: {
    ...globals.button,
    backgroundColor: "#6bffa6",
  },
  btnBrown: {
    ...globals.button,
    backgroundColor: "#e0ac7e",
  },
  btnBlue: {
    ...globals.button,
    backgroundColor: "#94cce3",
  },
  btnPink: {
    ...globals.button,
    backgroundColor: "#ffccfb",
  },
  btnBlack: {
    ...globals.button,
    backgroundColor: "#525252",
  },
  btnMiss: {
    ...globals.button,
    backgroundColor: "#f5f5f5",
  },
  btnRed: {
    ...globals.button,
    backgroundColor: "#eb5757",
  },

  // text styles
  textCurrentBreak: {
    ...globals.textScore,
    textAlign: "left",
  },
  textPrevBreak: {
    ...globals.textScore,
    textAlign: "center",
    color: "#999",
  },
  textHighestBreak: {
    ...globals.textScore,
    textAlign: "right",
    color: "#999",
  },
  textBtn: {
    ...globals.textBtn,
  },
  textBtnRed: {
    ...globals.textBtn,
    color: "#f00",
  },
  textBtnWhite: {
    ...globals.textBtn,
    color: "#fff",
  },
});
