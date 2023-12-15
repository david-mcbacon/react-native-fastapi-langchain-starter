import { OpenAIIcon } from "./src/components/OpenAIIcon";

export const DOMAIN =
  process.env.EXPO_PUBLIC_ENV === "DEVELOPMENT"
    ? process.env.EXPO_PUBLIC_DEV_API_URL
    : process.env.EXPO_PUBLIC_PROD_API_URL;

export const MODELS = {
  gpt35Turbo: {
    name: "GPT 3.5 Turbo",
    label: "gpt-3.5-turbo-1106",
    icon: OpenAIIcon,
  },
  gptTurbo: {
    name: "GPT 4 Turbo",
    label: "gpt-4-1106-preview",
    icon: OpenAIIcon,
  },
  gpt: { name: "GPT 4", label: "gpt-4", icon: OpenAIIcon },
};
