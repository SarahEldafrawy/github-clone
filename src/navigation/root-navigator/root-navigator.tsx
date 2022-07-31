import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { SearchResultComponent } from "@github/views/search-result"
import { AppRoute } from "@github/navigation/routes"
import { HomeComponent } from "@github/views/home"
import { IRootParamList } from "./root-navigator.types"

const RootStack = createStackNavigator<IRootParamList>()

const RootNavigator = () => {
  return (
    <RootStack.Navigator initialRouteName={AppRoute.Home} screenOptions={{ headerShown: false }}>
      <RootStack.Screen name={AppRoute.Home} component={HomeComponent} />
      <RootStack.Screen name={AppRoute.SearchResult} component={SearchResultComponent} />
      {/* <RootStack.Group screenOptions={{ presentation: "modal" }}>
        {// any modal screen  }
      </RootStack.Group> */}
    </RootStack.Navigator>
  )
}

export default RootNavigator
