import React from "react";

export default function Dashboard() {
    
    
    
    
    
    return (
    <main id="dashboardContainer">
        <section>
            DASHBOARD FULL: read only screen for writing content, but you can CRUD notes at multiple levels
            <br/>
            <br/> Project Full: 
            <br/> - Project Notes Interface: view existing notes, create new notes, update existing notes, delete existing notes
            <br/> - 
            <br/> - 
            <br/>
            <br/> Series Full: 
            <br/> - Series Notes Interface: view existing notes, create new notes, update existing notes, delete existing notes
            <br/> - 
            <br/> - 
            <br/>
            <br/> Book Full:
            <br/> - Book Notes Interface: view existing notes, create new notes, update existing notes, delete existing notes
            <br/> - 
            <br/> - 
            <br/>
            <br/> Chapter Full:
            <br/> - Chapter Notes Interface: view existing notes, create new notes, update existing notes, delete existing notes
            <br/> - Chapter Outline: 
            <br/> - 
            <br/>
            <br/> Draft Full: 
            <br/> - Draft Notes Interface: view existing notes, create new notes, update existing notes, delete existing notes
            <br/> - Reader: formatted text to mimic book pages, 
            <br/> - 
        </section>
        <section>
            DASHBOARD MINI: 
            <br/>
            <br/> Project Mini: present when viewing Series Fullscreen
            <br/> - Details: title, summary
            <br/> - Progress: plotpoints (goal, actual), wordcount (goal, actual), assignment (assigned, unassigned)
            <br/> - Notes: to-do list
            <br/> - 
            <br/>
            <br/> Series Mini: present when viewing Book Fullscreen
            <br/> - series checklist, series details/progress
            <br/> - Progress: plotpoints (goal, actual), wordcount (goal, actual), assignment (assigned, unassigned)
            <br/> - 
            <br/>
            <br/> Book Mini: present when viewing Chapter Fullscreen
            <br/> - book checklist, book details/progress
            <br/> - Progress: plotpoints (goal, actual), wordcount (goal, actual), assignment (assigned, unassigned)
            <br/> - 
            <br/>
            <br/> Chapter Mini: present when viewing Draft Fullscreen
            <br/> - chapter checklist, chapter details/progress
            <br/> - Progress: plotpoints (goal, actual), wordcount (goal, actual), assignment (assigned, unassigned)
            <br/> - 
        </section>


    </main>

    // Dashboard Design: Read Only w/ notes interface
        // Project Full: view all open projects (details, progress), view to-do list (project notes)
        // Series Full: series/trilogy details and progress, outline at multibook levels, CRUD series notes
        // Book Full: book details and progress, outline at a single book level, CRUD book notes
        // Chapter Full: chapter details and progress, outline at single chapter level, CRUD chapter notes
        // Draft Full: readable formatted text that imitates the book form, CRUD reader notes

)}