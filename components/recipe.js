import { Box, VStack, Link, Heading, Image } from "@gluestack-ui/themed";
import { StyleSheet, Text, View } from 'react-native';

export default function Recipe() {
    return (
        <Box
            maxWidth="$64"
            borderColor="$borderLight200"
            borderRadius="$lg"
            borderWidth="$1"
            my="$4"
            overflow="hidden"
            sx={{
                "@base": {
                    mx: "$5",
                },
                "@lg": {
                    my: "0",
                },
                _dark: {
                    bg: "$backgroundDark900",
                    borderColor: "$borderDark800",
                },
            }}
        >
            <Box style={{ position: 'relative' }}>
                <Image
                    h={195}
                    w={161}
                    source={{
                        uri: "https://images.unsplash.com/photo-1549888834-3ec93abae044?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
                    }}
                    resizeMode="cover"
                    alt="image"
                />
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 57, backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center' }}>
                    <Text style={{ color: 'white', marginLeft: 10, fontSize: 16, fontWeight: "bold" }}>Testing</Text>
                </View>
            </Box>
        </Box>
    );
}
