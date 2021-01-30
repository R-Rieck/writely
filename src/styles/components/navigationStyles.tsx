import { StyleSheet, TouchableWithoutFeedbackBase } from 'react-native'
import { vh } from 'react-native-expo-viewport-units';

export default StyleSheet.create({
    bottomNavigationContainer: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
    },
    addButton: {
        height: 64,
        width: 64,
        position: 'absolute',
        alignSelf: 'center',
        backgroundColor: '#62E9EE',
        bottom: vh(5),
        zIndex: 2,
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#2F3233',
        fontWeight: 'bold',
        fontSize: 32,
    },
    iconContainer: {
        flex: 1,
        backgroundColor: "#2F3233",
        display: 'flex',
        padding: 20,
        paddingLeft: 40,
        paddingRight: 40,
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between'
    },
    icon: {
        height: 32,
        width: 32
    }
})