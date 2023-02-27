import { Container } from 'reactstrap';

const DevNotes = () => {
    return (
        <section className="devNotesSection">
            <Container className="devNotesFlex">
                <div className="devNotesTextContainer">
                    <p>Hello~ I created this project by following <a href="https://www.youtube.com/watch?v=4RKuyp_bOhY" target="_blank" rel="noreferrer">this</a> tutorial and added personal touches here and there.</p>
                    <p>Using Visual Studio for the very first time was a bit daunting. Initially the ASP.NET Core with React.js template looked very overhwelming until I saw some familiar React.js file structures.</p>
                    <p>I'm happy with the progress I've made but there's still plenty left to learn. Microsoft Learn has been a great resource for learning C#. I look forward to learning more about C# and so I can eventually build better .NET apps.</p>
                    <p>You can check out this project's git repo <a href="https://github.com/MandeepKMann/RankingApp" target="_blank" rel="noreferrer">here</a>.</p>
                </div>
            </Container>
        </section>
    )
}

export default DevNotes;