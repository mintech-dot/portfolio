const Dashboard = () =>{
    return(
        <>
           <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl">Blog Dashboard</h1>
    </header>

    <div className="flex">
        <aside className="w-64 bg-gray-800 text-white h-screen p-4">
            <nav>
                <ul>
                    <li className="mb-2"><a href="#!" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a></li>
                    <li className="mb-2"><a href="#!" className="block py-2 px-4 hover:bg-gray-700">Posts</a></li>
                    <li className="mb-2"><a href="#!" className="block py-2 px-4 hover:bg-gray-700">Users</a></li>
                </ul>
            </nav>
        </aside>

        <main className="flex-1 p-4">
            <div className="mb-4">
                <h2 className="text-xl mb-4">Posts</h2>
                <ul>
                    <li className="mb-4 p-4 border rounded bg-white">
                        <h3 className="text-lg font-bold">First Post</h3>
                        <p>This is the first post.</p>
                    </li>
                    <li className="mb-4 p-4 border rounded bg-white">
                        <h3 className="text-lg font-bold">Second Post</h3>
                        <p>This is the second post.</p>
                    </li>
                </ul>
            </div>

            <form className="p-4 border rounded bg-white">
                <h2 className="text-xl mb-4">New Post</h2>
                <div className="mb-4">
                    <label className="block mb-1">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-1">Content</label>
                    <textarea
                        className="w-full p-2 border rounded"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Post</button>
            </form>
        </main>
    </div>
        </>
    )
}

export default Dashboard