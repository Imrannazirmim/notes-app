import {notesStore} from "../store/store.ts";

const Sidebar = () => {
    const {notes, search, selectNote, setSearch} = notesStore();


    const filterNotes = notes.filter((note) => note.text.toLowerCase().includes(search.toLowerCase()))
    return (

        <aside className='w-[25%] h-screen mt-10 ml-4 rounded border border-gray-300 p-3'>
            <section>
                <div>
                    <h2 className='text-center font-semibold p-2'>Notes List</h2>
                    <div className='m-4 flex flex-col gap-1 '>
                        <label htmlFor="search" className='font-semibold ml-1'>Search</label>
                        <input className='px-4 py-2 border border-gray-300 rounded-full' placeholder='Searching....'
                               type="text" value={search}
                               onChange={(e) => setSearch(e.target.value)}/>
                    </div>
                    <div className='border border-gray-300 px-4 p-2 rounded-md m-4'>
                        {filterNotes.length > 0 ? (
                            filterNotes.map((note, index) => (
                                <div key={index} onClick={() => selectNote(index)}
                                     className='flex items-center gap-2 border border-gray-300 m-2 px-4 py-2 rounded'
                                >
                                    <div style={{backgroundColor: note.color}} className='w-4 h-4 rounded-full'/>
                                    <span className='truncate'
                                          dangerouslySetInnerHTML={{__html: note.text}}></span>
                                </div>
                            ))
                        ) : (
                            <p>Note Not Found</p>
                        )}
                    </div>
                </div>
            </section>
        </aside>

    )
}
export default Sidebar
