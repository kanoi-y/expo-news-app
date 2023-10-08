import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { ArticleScreen } from "./screens/ArticleScreen";
import { ClipScreen } from "./screens/ClipScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { store } from "./store";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;
    switch (route.name) {
      case "HomeTab":
        iconName = "home";
        break;
      case "ClipTab":
        iconName = "bookmark";
        break;
    }
    return <FontAwesome name={iconName} size={size} color={color} />;
  },
});

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Article" component={ArticleScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen
            name="HomeTab"
            component={HomeStack}
            options={{ headerShown: false, title: "Home" }}
          />
          <Tab.Screen
            name="ClipTab"
            component={ClipScreen}
            options={{ headerShown: false, title: "Clip" }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
