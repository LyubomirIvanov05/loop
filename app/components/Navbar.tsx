import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfinity } from "@fortawesome/free-solid-svg-icons/faInfinity";


const Navbar = async () =>{
    const session = await auth();

    return(
        <header>

            <div>
                {session && session?.user ? (
                    <>
                        <div className="flex justify-between px-5 pt-3">
                            <FontAwesomeIcon icon={faInfinity} size="2x"/>
                            <span>Hello, {session?.user?.name}</span>
                            <div>
                                <form action={async () =>{
                                    "use server";
                                    
                                    await signOut({redirectTo: '/home'});
                                }}>
                                    <button type="submit">
                                    <span>Log Out</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </>
                ):(
                    <>
                        
                       <div className="flex justify-between px-5 pt-3">
                        <FontAwesomeIcon icon={faInfinity} size="2x"/>
                        <span>Home</span>
                        <Link href={'/authentication/login'}>
                            <button className="px-4 py-1.5 rounded-xl bg-white" type="submit">
                                <span className="text-black font-[550]">Log In</span>
                            </button>
                       </Link> 
                        {/* <form action={async () => {
                        "use server";

                        await signIn('github');
                        }}>

                            <button className="px-4 py-1.5 rounded-xl bg-white" type="submit">
                                <span className="text-black font-[550]">Log In</span>
                            </button>
                        </form> */}
                    </div>                   
                    </>
                   

                )}
            </div>
        </header>
    )
}

export default Navbar;