
import { ID , Account , Client } from 'appwrite'
import Config from 'react-native-config'
import Snackbar from 'react-native-snackbar'


const appwriteClient = new Client()

const APPWRITE_ENDPOINT: string = Config.APPWRITE_ENDPOINT!
const APPWRITE_PROJECTID: string = Config.APPWRITE_PROJECTID!

type CreateUserAccount = {
    email: string;
    password: string;
    name: string;
}

type LoginUserAccount = {
    email: string;
    password: string;
}

class AppwriteService{
    account;

    constructor(){
        appwriteClient
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECTID)

        this.account = new Account(appwriteClient)
    }

     async creactAccount({email,password,name}: CreateUserAccount){
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            )
            if(userAccount){
                return this.login({email,password})
            }else{
                return userAccount
            }
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: createAccount() :: ' + error)
        }
     }

     async login({email,password}: LoginUserAccount){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: loginAccount() :: ' + error)
        }
     }

     async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: getcurrentUserAccount() :: ' + error)
        }
     }

     async logOut(){
        try {
            return await this.account.deleteSession('current')
        } catch (error) {
            Snackbar.show({
                text: String(error),
                duration: Snackbar.LENGTH_LONG
            })
            console.log('Appwrite service :: logoutAccount() :: ' + error)
        }
     }
}

export default AppwriteService