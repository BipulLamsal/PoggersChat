import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
function Header()
{
    return (
        <div className="w-full p-4 bg-dark2 rounded relative">
            <div className="flex flex-row justify-center items-center">
                <div className="bg-darkpink rounded-full flex flex-col justify-center items-center py-2 px-10 sm:px-20">
                    <p className="text-white leading-tight">Today's Topic</p>
                    <p className="text-white font-bold text-xl leading-tight">Hot Sause</p>
                </div>
                <div className="Logout absolute right-10 cursor-pointer">
                <FontAwesomeIcon icon={faRightFromBracket} color='gray'/>
                </div>
            </div>
        </div>

    )
}
export default Header