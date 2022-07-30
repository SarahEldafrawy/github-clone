import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { AppRoute } from "@github/navigation/routes"
import { Screen } from "@github-shared"
import { HomeComponent } from "@github/views/home"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

// TODO: Just an example. Should be removed
const TestComponent = () => {
  return <Screen preset="fixedStack" />
}

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={AppRoute.Home} screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={AppRoute.Home} component={HomeComponent} />
      <RootStack.Screen name={AppRoute.SearchResult} component={TestComponent} />
      {/* <RootStack.Group screenOptions={{ presentation: "modal" }}>
        {// any modal screen  }
      </RootStack.Group> */}
    </RootStack.Navigator>
  )
}

export default RootNavigator
