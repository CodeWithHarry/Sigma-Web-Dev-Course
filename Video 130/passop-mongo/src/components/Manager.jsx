import { useRef, useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const ref = useRef()
    const passwordRef = useRef()
    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setPasswordArray] = useState([])

    const getPasswords = async () => {
        let req = await fetch('http://localhost:3000/')
        let passwords = await req.json()
        setPasswordArray(passwords);
    }


    useEffect(() => {
        getPasswords()
    }, [])


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const showPassword = () => {
        if (ref.current.src.includes("/crosseye.svg")) {
            ref.current.src = "/eye.svg"
            passwordRef.current.type = 'password'
        } else {
            ref.current.src = "/crosseye.svg"
            passwordRef.current.type = 'text'
        }
    }

    const savePassword = async () => {
        if (form.site === '' || form.username === '' || form.password === '') {
            toast.error('Please fill all fields!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        //while editing delete the old password
        if (form.id) {  // Changed from form.ide to form.id
            await fetch("http://localhost:3000/", {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: form.id })
            })
        }
        // localStorage.setItem('passwords', JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        await fetch("http://localhost:3000/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...form, id: uuidv4() })
        })
        setform({ site: '', username: '', password: '' })
        toast.success('Password saved successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const deletePassword = async (id) => {
        let confirmDelete = window.confirm("Are you sure you want to delete this password?");
        if (!confirmDelete) return;
        setPasswordArray(passwordArray.filter((item) => item.id !== id))
        // localStorage.setItem('passwords', JSON.stringify(passwordArray.filter((item) => item.id !== id)))
        let res = await fetch("http://localhost:3000/", {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: id })
        })

        toast.error('Password deleted successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const editPassword = (id) => {

        setform({
            ...passwordArray.find((item) => item.id === id),
            id: id // keep the id same for editing
        })
        setPasswordArray(passwordArray.filter((item) => item.id !== id))
    }

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div className="md:mycontainer">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className="text-green-700">&lt;</span>
                    Pass
                    <span className='text-[#FFD700] text-5xl'>Vault</span>
                    <span className="text-green-700">/&gt;</span>

                </h1>
                <p className='text-yellow-400 text-lg text-center'>Your own password manager</p>

                <div className="text-black flex flex-col p-4 gap-5">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Your Website Name' className='rounded-full border border-yellow-400 w-full p-4 py-1' type="text" name="site" id="site-name" />
                    <div className="flex gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Your User Name' className='rounded-full border border-yellow-400 w-full p-4 py-1' type="text" name="username" id="user-name" />
                        <div className='relative w-full'>
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Your Password' className='rounded-full border border-yellow-400 w-full p-4 py-1' type="password" name="password" id="user-password" />
                            <span className='absolute right-2 top-0'><img ref={ref} className='p-1 cursor-pointer' onClick={showPassword} width={34} src="/eye.svg" alt="" /></span>
                        </div>
                    </div>
                    <div className='items-center flex flex-col'>
                        <button onClick={savePassword} className='border-blue-600 border flex justify-center items-center rounded-full text-black px-2 py-2 gap-2 w-48 transition-all duration-300 bg-blue-300 hover:bg-blue-400'>
                            <lord-icon
                                src="https://cdn.lordicon.com/gzqofmcx.json"
                                trigger="hover">
                            </lord-icon>
                            Save Password
                        </button>
                    </div>
                </div>

                <div className="passwords">
                    <h2 className='font-bold text-2xl py-4'>Your Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords Found</div>}

                    {passwordArray.length !== 0 && <table className="table-auto w-full overflow-hidden rounded-lg border border-yellow-400">
                        <thead className='bg-yellow-400 text-black'>
                            <tr>
                                <th className='py-2'>Site Name</th>
                                <th className='py-2'>User Name</th>
                                <th className='py-2'>User Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-yellow-100 text-black'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index}>
                                    <td className='border py-2 text-center w-32'>{item.site}</td>
                                    <td className='border py-2 text-center w-32'>{item.username}</td>
                                    <td className='border py-2 text-center w-32'>{item.password}</td>
                                    <td className='border py-2 text-center w-32'>
                                        <span className='cursor-pointer mx-1' onClick={() => {
                                            editPassword(item.id)
                                        }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/fikcyfpp.json"
                                                trigger="hover"
                                                stroke="bold">
                                            </lord-icon>
                                        </span>
                                        <span className='cursor-pointer mx-1' onClick={() => {
                                            deletePassword(item.id)
                                        }}>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/oqeixref.json"
                                                trigger="hover">
                                            </lord-icon>
                                        </span>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
