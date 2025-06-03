import { Text, TextInput, View, Image } from "react-native";
import { StyleSheet } from "react-native";
const googleIcon = require("@/assets/images/google-icon.png");
export default function LoginComponent() {
    return (
        <View style={styles.container}>
            <View style={styles.loginWrapper}>
                <View style={styles.headingSection}>
                    <Text style={styles.title}>Sign In</Text>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput placeholder="Email" placeholderTextColor="grey" keyboardType="email-address" style={styles.Email} />
                    <TextInput placeholder="Password" placeholderTextColor="grey" style={styles.Password} />
                    <View style={styles.forgotPassword}>
                        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </View>
                    <View style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </View>
                </View>
                <View style={styles.dividerWrapper}>
                    <View style={styles.divider}>
                    </View>
                    <View style={styles.orWrapper}>
                        <Text style={styles.or}>OR</Text>
                    </View>
                </View>
                <View style={styles.socialLoginWrapper}>
                    <Image source={googleIcon} style={styles.googleIcon} />
                    <Text style={styles.socialLoginText}>Sign in with Google</Text>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    headingSection: {
        width: '100%',
        alignItems: 'center',
    },
    loginWrapper: {
        width: '95%',
        height: '70%',
        display: 'flex',
        alignItems: 'center',
        padding: 15
    },
    title: {
        fontSize: 35,
        fontFamily: 'PoppinsSemiBold',
        color: '#202020'
    },
    inputWrapper: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        marginTop: 20,
    },
    Email: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        marginTop: 20,
        marginBottom: 20,
        fontSize: 16

    },
    Password: {
        width: '100%',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 20,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 30,
        marginBottom: 20,
        fontSize: 16
    },
    forgotPassword: {
        marginTop: 20,
        alignItems: 'flex-end',
        width: '100%',
        fontWeight: 'bold'
    },
    forgotPasswordText: {
        color: '#297EFF',
        fontWeight: 'bold',
        fontFamily:'Inter'
    },
    loginButton: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#297EFF',
        borderRadius: 20,
        padding: 15,
        fontFamily:'Inter'
    },
    loginButtonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    dividerWrapper: {
        width: '100%',
        alignItems: 'center',
        position: 'relative'
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: 'grey',
        marginTop: 30
    },
    orWrapper: {
        width: '100%',
        alignItems: 'center',
    },
    or: {
        position: 'absolute',
        alignItems: 'center',
        marginTop: 20,
        top: -40,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
        color: 'grey',
        fontFamily:'Inter'
    },
    socialLoginWrapper: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        padding: 12,
        borderRadius: 20,
    },
    googleIcon: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    socialLoginText: {
        color: 'grey',
        fontSize: 16,
        fontFamily:'Inter'
    }
});
