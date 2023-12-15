import { createContext } from "react";
import { IThemeContext, IAppContext } from "../types";
import { MODELS } from "../constants";

const ThemeContext = createContext<IThemeContext>({
  theme: {},
  setTheme: () => null,
  themeName: "",
});

const AppContext = createContext<IAppContext>({
  chatType: MODELS.gpt35Turbo,
  setChatType: () => null,
  handlePresentModalPress: () => null,
  closeModal: () => null,
});

export { ThemeContext, AppContext };
