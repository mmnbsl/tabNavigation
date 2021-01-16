import React, { Fragment} from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import Rooter from "./src/Rooter";

export default function App() {
  return (
    <Fragment>
      <StatusBar/>
      <Rooter />
    </Fragment>
  );
}

