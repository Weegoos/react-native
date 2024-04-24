import { StyleSheet } from "react-native";

import { COLORS, SHADOWS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: "15px",
    flexDirection: "column",
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
  },
  logoContainer: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  logImage: {
    width: "70%",
    height: "70%",
  },
  textContainer: {
    flex: 1,
    marginHorizontal: SIZES.medium,
    padding: 13,
    flexDirection: "column",
    marginBottom: 10, 
    borderWidth: 1, 
    borderColor: "#AEA5A3", 
    borderRadius: 5, 
    backgroundColor: "#FFF",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    cursor: "pointer",
        fontSize: SIZES.medium,
    fontFamily: FONT.medium,
  },
  jobName: {
    fontSize: SIZES.medium,
    fontFamily: "DMBold",
    color: COLORS.primary,
  },
  jobType: {
    fontSize: SIZES.small + 2,
    fontFamily: "DMRegular",
    color: COLORS.gray,
    marginTop: 3,
    textTransform: "capitalize",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  topView: {
  },
  successView: {
    color: "green"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeButton: {
    marginTop: 10,
    color: "blue",
    textAlign: "center"
  },
  SubmitButton: {
    marginTop: 10,
    color: "white",
    textAlign: "center",
    borderWidth: 1, 
    borderColor: "#AEA5A3", 
    borderRadius: 5, 
    backgroundColor: "#000",
    padding: 10,
    fontFamily: FONT.regular,
    fontSize: SIZES.medium
  }
});



export default styles;
