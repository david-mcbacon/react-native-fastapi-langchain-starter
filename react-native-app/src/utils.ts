import { DOMAIN } from "../constants";
import EventSource from "react-native-sse";

export function getEventSource({
  headers,
  body,
}: {
  headers?: any;
  body: any;
}) {
  const es = new EventSource(`${DOMAIN}/v1/openai/stream`, {
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    method: "POST",
    body: JSON.stringify(body),
  });

  return es;
}

export function getFirstNCharsOrLess(text: string, numChars: number = 1000) {
  if (text.length <= numChars) {
    return text;
  }
  return text.substring(0, numChars);
}

export function getFirstN({
  messages,
  size = 10,
}: {
  size?: number;
  messages: any[];
}) {
  if (messages.length > size) {
    const firstN = new Array();
    for (let i = 0; i < size; i++) {
      firstN.push(messages[i]);
    }
    return firstN;
  } else {
    return messages;
  }
}

export function getLastN({
  messages,
  size = 10,
}: {
  size?: number;
  messages: any[];
}) {
  if (messages.length > size) {
    const lastN = new Array();
    for (let i = messages.length - size; i < messages.length; i++) {
      lastN.push(messages[i]);
    }
    return lastN;
  } else {
    return messages;
  }
}
