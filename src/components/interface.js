import React, { useState } from "react";

export default function Interface() {
    
    const [interfaceState, setInterfaceState] = useState(false);
    
    function handleInterfaceClose() {
        setInterfaceState(!interfaceState);
    }
    
    
    
    return (
    <main id="interfaceContainer" className={interfaceState ? "interfaceClosed" : "interfaceOpen"}>
        <header>
            <span>SCRIBLR / </span>
            <button onClick={handleInterfaceClose}></button>
            <div></div>
        </header>
        <section>
            INTERFACE MINI: 
            <br/> 
            <br/> Project Mini: project checklist, project details/progress
            <br/> - 
            <br/> - 
            <br/> 
            <br/> Series Mini: series checklist, series details/progress
            <br/> - 
            <br/> - 
            <br/> 
            <br/> Book Mini: book checklist, book details/progress
            <br/> - 
            <br/> - 
            <br/> 
            <br/> Chapter Mini: chapter checklist, chapter details/progress
            <br/> - 
            <br/> - 
        </section>
        <section>
            INTERFACE FULL: 
            <br/> 
            <br/> Project Full:  
            <br/> - create new project/to-dos, update existing project details and to-do list, delete project/to-do's
            <br/> - Project Detail Editor: title, summary
            <br/> - 
            <br/> 
            <br/> Series Full: CRUD plot categories, plotlines, groups, subgroups, points; CRUD books/trilogies; edit series & trilogy details
            <br/> - Series Detail Editor: title, summary, 
            <br/> - Trilogy Detail Editor: title, summary, relevant books, 
            <br/> - Plot Categories: create new plotline for category, remove empty plotlines
            <br/> - Plotlines: create new group for plotline, remove empty plotpoint groups, edit plotline title, edit plotline descriptions
            <br/> - Plotpoint Groups: edit group title, edit group description, view plotpoints in the group, delete existing plotpoints
            <br/> - Plotpoint Interface: create new plotpoint assigned to active location, edit existing plotpoints, edit plotpoint assignment
            <br/> - 
            <br/> 
            <br/> Book Full: assign/unassign plotpoints to book levels, CRUD assigned plotpoints, CRUD acts/chapters, update book details
            <br/> - Book Detail Editor: title, summary, cover design, page design, 
            <br/> - Plotpoint Interface: create new plotpoint assigned to active location, edit existing plotpoints, edit plotpoint assignment
            <br/> - 
            <br/> 
            <br/> Chapter Full: assign/unassign plotpoints to chapter levels, CRUD assigned plotpoints, CRUD acts/scenes/moments, update chapter details
            <br/> - Chapter Detail Editor: title, summary,  
            <br/> - Illustration Detail Editor: style, content, medium
            <br/> - Plotpoint Interface: create new plotpoint assigned to active location, edit existing plotpoints, edit plotpoint assignment
            <br/> - 
            <br/> 
            <br/> Draft Full: CRUD paragraphs, CRUD sentences, view and delete reader notes, assign/unassign plotpoints to sentences
            <br/> - Sentence Creator: enter twice for a new paragraph, enter once for a new sentence
            <br/> - Sentence Editor: make changes to existing sentences
            <br/> - Sentence Removal: 
            <br/> - Plotpoint Interface: create new plotpoint assigned to active location, edit existing plotpoints, edit plotpoint assignment
            <br/> - 
        </section>
    </main>
)}