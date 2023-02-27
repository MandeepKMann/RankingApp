import { Container } from 'reactstrap';

const DevNotes = () => {
    return (
        <section className="devNotesSection">
            <Container className="devNotesFlex">
                <div className="devNotesTextContainer">
                    <p>Hello and welcome to my project! This project was created mostly through following a tutorial with some personal touches here and there.</p>
                    <p>When I first began working on this project, it was challenging. I had to learn a lot of tools that were completely new to me like Visual Studio, .NET, and Azure. It was especially hard to understand what was going on in the backend because I had never worked with C# before.</p>
                    <p>Using Visual Studio for the very first time was a bit daunting. Once I started up the template for ASP.NET Core with React.js, there was so much going on in the Solution Explorer and I felt very overwhelmed.</p>
                    <p>It looked like a lot but once I saw some familiar React.js file structures and names it didn't look as scary as before.</p>
                    <p>One of the toughest things about this project was making sure I was actually paying attention and learning rather than just blindly following along with the tutorial.</p>
                    <p>Whenever I'd feel myself getting impatient or wanting to rush through things, I'd go back and read my notes and the comments in my code.</p>
                    <p>I'm happy with the progress I've made but there's still plenty left to learn.</p>
                    <p>Microsoft Learn has been a great resource for learning C#. I look forward to learning more about C# and so I can eventually build better .NET apps.</p>
                </div>
            </Container>
        </section>
    )
}

export default DevNotes;