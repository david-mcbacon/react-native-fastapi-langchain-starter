import { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat, Settings } from "./screens";
import { Header } from "./components";
import FeatherIcon from "@expo/vector-icons/Feather";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { ThemeContext } from "./context";

const Tab = createBottomTabNavigator();

function MainComponent() {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  const styles = getStyles({ theme, insets });

  return (
    <View style={styles.container}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.tabBarActiveTintColor,
          tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: theme.backgroundColor,
          },
        }}
      >
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            header: () => <Header />,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="message-circle" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            header: () => <Header />,
            tabBarIcon: ({ color, size }) => (
              <FeatherIcon name="sliders" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

export function Main() {
  return (
    <SafeAreaProvider>
      <MainComponent />
    </SafeAreaProvider>
  );
}

const getStyles = ({ theme, insets }: { theme: any; insets: any }) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      flex: 1,
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  });
