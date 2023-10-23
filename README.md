## run app

npx expo start

# Glue Stack

npm i @gluestack-ui/themed @gluestack-style/react react-native-svg@13.4.0
npm i @gluestack-ui/config@latest
npx gluestack-ui-scripts eject-theme

## Import and wrap in App.js

import { GluestackUIProvider, Text, Box } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config" // Optional if you want to use default theme

export default function App() {
return (
<GluestackUIProvider config={config}>
{content}
</GluestackUIProvider>
)
}
