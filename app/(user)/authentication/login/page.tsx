// import LogIn from "LogIn";
import { auth, signIn, signOut } from "@/auth";
import { redirect } from "next/dist/server/api-utils";
import { faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default async function LogIn() {
    
    return (
        <div className="flex flex-col py-8 m-32 justify-center items-center w-3/4 justify-self-center self-center gap-4">
            <h1>Log in page</h1> 
            <form action="" className="flex gap-4 flex-col w-fit items-center">
                <input type="text" placeholder="Username" className="h-10 rounded-xl px-4 w-370"/>
                <input type="password" placeholder="Password" className="h-10 rounded-xl px-4 w-370"/>
                <button type="submit" className="h-10 rounded-xl w-370 bg-hover_color">Log In</button>
            </form> 
            <div className="bg-white h-px w-370"></div>
            <div className="flex gap-8">
                <form action={async () => {
                        "use server";

                        await signIn('github', {redirectTo: '/home'});
                        }}>
                            <input type="hidden" name="redirectTo" value="../" />
                            <button className="px-3 py-1.5 rounded-xl bg-white flex " type="submit">
                                <FontAwesomeIcon icon={faGithub} className="text-black text-2xl"/>
                            </button>
                </form> 
                <form action={async () => {
                        "use server";

                        await signIn('google', {redirectTo: '/home'});
                        }}>
                            <input type="hidden" name="redirectTo" value="../" />
                            <button className="px-3 py-1.5 rounded-xl bg-white flex" type="submit">
                                <FontAwesomeIcon icon={faGoogle} className="text-black text-2xl"/>
                            </button>
                </form> 
                <form action={async () => {
                        "use server";

                        await signIn('google', {redirectTo: '/home'});
                        }}>
                            <input type="hidden" name="redirectTo" value="../" />
                            <button className="px-3 py-1.5 rounded-xl bg-white flex" type="submit">
                                <FontAwesomeIcon icon={faInstagram} className="text-black text-2xl"/>
                            </button>
                </form> 
            </div>
            <span>Don't have an account? <Link href={'/authentication/register'}>Register</Link></span>
        </div>
    );
  }

  