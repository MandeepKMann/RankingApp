import { Container } from 'reactstrap';

const DevNotes = () => {
    return (
        <section className="devNotesSection">
            <Container className="devNotesFlex">
                <div className="devNotesTextContainer">
                    <p>Hello~ I created this project by following <a href="https://www.youtube.com/watch?v=4RKuyp_bOhY" target="_blank">this</a> tutorial and added personal touches here and there.</p>
                    <p>Using Visual Studio for the very first time was a bit daunting. Initially the ASP.NET Core with React.js template looked very overhwelming until I saw some familiar React.js file structures.</p>
                    <p>One of the toughest things about this project was making sure I was actually paying attention and learning rather than just blindly following along with the tutorial. Whenever I'd feel myself getting impatient or wanting to rush through things, I'd go back and read my notes and the comments in my code.</p>
                    <p>I'm happy with the progress I've made but there's still plenty left to learn. Microsoft Learn has been a great resource for learning C#. I look forward to learning more about C# and so I can eventually build better .NET apps.</p>
                    <p>You can check out this project's git repo <a href="https://github.com/MandeepKMann/RankingApp" target="_blank">here</a>.</p>
                </div>
            </Container>
        </section>
    )
}

export default DevNotes;