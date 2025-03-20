import {create} from "zustand";

interface Note {
    text: string;
    color: string;
}

interface NoteState {
    notes: Note[];
    search: string;
    editorContent: string;
    noteColor: string;
    currentNoteIndex: number | null;
    setNotes: (updatedNotes: Note[]) => void;
    setSearch: (searchValue: string) => void;
    setEditorContent: (content: string) => void;
    setNoteColor: (color: string) => void;
    setCurrentNoteIndex: (index: number | null) => void;
    addUpdateNote: () => void;
    selectNote: (index: number) => void;
}

export const notesStore = create<NoteState>((set) => ({
    notes: [],
    search: '',
    editorContent: '',
    noteColor: '#fff',
    currentNoteIndex: null,

    setNotes: (updatedNotes) => set(() => ({notes: updatedNotes})),
    setSearch: (searchValue) => set(() => ({search: searchValue})),
    setEditorContent: (content) => set(() => ({editorContent: content})),
    setNoteColor: (color) => set(() => ({noteColor: color})),
    setCurrentNoteIndex: (index) => set(() => ({currentNoteIndex: index})),
    addUpdateNote: () => set((state) => {
        const {editorContent, noteColor, currentNoteIndex, notes} = state;

        if (!editorContent.trim()) {
            return {}
        }

        if (currentNoteIndex !== null) {
            const updatedNotes = [...notes];
            updatedNotes[currentNoteIndex] = {
                text: editorContent,
                color: noteColor
            }
            return {
                notes: updatedNotes,
                editorContent: '',
                noteColor: '#fff',
                currentNoteIndex: null
            }
        } else {
            return {
                notes: [...notes, {text: editorContent, color: noteColor}],
                editorContent: '',
                noteColor: '#fff',
                currentNoteIndex: null
            }
        }


    }),
    selectNote: (index) => set((state) => ({
        currentNoteIndex: index,
        editorContent: state.notes[index].text,
        noteColor: state.notes[index].color
    }))
})) 
