import ReactQuill from "react-quill";
import {notesStore} from "../store/store";
import 'react-quill/dist/quill.snow.css';
import Sidebar from "./Sidebar.tsx";

const Notes = () => {
    const {
        noteColor,
        editorContent,
        currentNoteIndex,
        addUpdateNote,
        setEditorContent,
        setNoteColor
    } = notesStore();
    return (
        <div className="w-full h-screen flex">
            {/* sidebar */}
            <Sidebar/>
            {/* main area */}
            <main className="w-[70%] mx-auto m-10">
                <div className="w-full mx-auto mr-2 rounded">
                    <ReactQuill
                        placeholder="Write your note here..."
                        theme="snow"
                        value={editorContent}
                        onChange={setEditorContent}
                        className="h-96 bg-white mb-[2rem] rounded"
                    />
                </div>
                <div className='flex gap-5 mt-20'>
                    <label htmlFor="color" className='text-gray-800 font-semibold'>Choose color: </label>
                    <input type="color" value={noteColor} onChange={(e) => setNoteColor(e.target.value)}/>
                </div>
                {/*  save button*/}
                <div className='text-end'>
                    <button
                        onClick={addUpdateNote}
                        className='bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 text-white font-semibold'>{currentNoteIndex !== null ? 'Update Note' : 'Save note'}</button>
                </div>
            </main>
        </div>
    );
};
export default Notes;
