
import axios from 'axios';
import Footer from '../components/Footer'
import { useRouter } from "next/router";
import Header from '../components/Header'
import { useEffect, useState } from 'react';

function Test() {
    const [isToken, setIsToken] = useState(false)
    const router = useRouter();
    useEffect(() => {

        // axios.get(`https://dummyjson.com/products/${router.query.last}`).then(response => {
        axios.get(`https://dummyjson.com/products/1`).then(response => {
            if (response.data) {
                setIsToken(true)
            }

        });

    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            first: e.target.floating_first_name.value,
            last: e.target.floating_last_name.value,
            toggle: e.target.toggle.checked,
        }
        console.log(data);

        // const result = fetch('https://dummyjson.com/products/1').
        //     then(res => res.json());

        // return {
        //     props: {
        //         result,
        //     },
        // }

        router.push({
            pathname: '/ticket',
            query: {
                first: e.target.floating_first_name.value,
                last: e.target.floating_last_name.value,
                toggle: e.target.toggle.checked,
            },
        })


    }
    https://github.com/amirsouayah/Nextjs_ReactJs.git

    return (
        <>
            {isToken === true ?
                <div>

                    <main className='flex'>
                        <form onSubmit={handleSubmit}>
                            <div class="relative z-0 w-full mb-6 group">

                            </div>
                            <div class="relative z-0 w-full mb-6 group">

                            </div>
                            <div class="relative z-0 w-full mb-6 group">
                                <label class="relative inline-flex items-center mb-4 cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer" name='toggle' />
                                    <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
                                </label>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                </div>
                                <div class="relative z-0 w-full mb-6 group">
                                    <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                </div>
                            </div>
                            <div class="grid md:grid-cols-2 md:gap-6">

                                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Read more</a>

                            </div>
                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </main>
                    <Footer />
                </div>
                : 'TOKEN NON VALIDE'
            }
        </>
    )
}

export default Test;


