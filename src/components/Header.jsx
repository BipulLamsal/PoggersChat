import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import { AuthUserContext } from '../App'
import { useContext } from 'react'
import Cookies from "universal-cookie"
const cookies = new Cookies();

function Header()
{
    const {setIsAuth} = useContext(AuthUserContext);
    const handleLogout = async() =>{
        try
        {
            await signOut(auth);
            console.log("signed out succesfully");
            setIsAuth(false);
            cookies.remove('auth-token');
        }
        catch(err)
        {
            console.log(err);
        }
    }
    return (
        <div className="w-full p-4 bg-dark2 rounded relative">
            <div className="flex flex-row justify-center items-center">
                <div className="bg-darkpink rounded-full flex flex-col justify-center items-center py-2 px-10 sm:px-20">
                    <p className="text-white leading-tight">Today's Topic</p>
                    <p className="text-white font-bold text-xl leading-tight">Hot Sause</p>
                </div>
                <div className="Logout absolute right-10 cursor-pointer" onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} color='gray'/>
                </div>
            </div>
        </div>

    )
}
export default Header