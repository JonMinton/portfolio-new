import Hero from '../components/Hero'

const AgenticAI = () => {
  return (
    <>
      <Hero title="Agentic AI" />
      <main id="main-content" className="main">
        <article className="main__article">
          <p className="main__p">
            Below is a short list of places where I've attempted to apply Agentic AI to
            produce material suitable for analytical knowledge workers, by which I mean
            anyone whose work involves some kind of technical expertise, involves
            numbers and reasoning about them, and where the majority of the work
            produced is already co-produced with a computer. After this short list, I offer a
            description of how and why my position on the value and capabilities of AIs
            have changed.
          </p>

          <h2 className="main__h2">Projects</h2>

          <h3 className="history__subhead">Blog Posts</h3>
          <p className="main__p">
            Watching the documentary <em>The Thinking Game</em>, and then trying
            out Claude Code, led me to write{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/unpop/the-man-who-solved-intelligence/" target="_blank" rel="noopener noreferrer">this post</a>,{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/the-dialectical-engine/" target="_blank" rel="noopener noreferrer">this post</a>, and{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/analytical-maxim-gun/" target="_blank" rel="noopener noreferrer">this post</a>.
            The initial sense of near apocalyptic urgency I had became metered to some
            extent, leading to{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/2025-last-human-majority-knowledge-worker/" target="_blank" rel="noopener noreferrer">this more philosophical, circumspect, and hopeful post</a>{' '}
            at the end of 2025. I've also{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/on-writing/how-i-write-now/" target="_blank" rel="noopener noreferrer">blogged about how I used agentic AI</a>,
            along with a ReMarkable Pro with folio cover (providing a keyboard), to smooth and
            simplify many of the steps involved in producing and refining blog posts.
          </p>

          <h3 className="history__subhead">Teaching Aids</h3>
          <p className="main__p">
            I had some success with using Claude to first produce a{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/handdrawn-stats/version-control-as-rock-climbing/" target="_blank" rel="noopener noreferrer">graphical guide to version control</a>.
            I then used it to produce some{' '}
            <a className="main__link" href="https://jonminton.github.io/jon-blog/posts/handdrawn-stats/claude-stat-concept-guides/" target="_blank" rel="noopener noreferrer">animated guides</a>{' '}
            to a couple of important concepts in statistical inference.
            Finally, using proper agentic AI (Claude Code and Claude Cowork), I co-produced a{' '}
            <a className="main__link" href="https://jonminton.github.io/glm-dashboard-explainer/" target="_blank" rel="noopener noreferrer">website for helping to understand generalised linear models</a>,
            with many interactive features, which aims to complement my existing{' '}
            <a className="main__link" href="https://jonminton.github.io/JonStats/" target="_blank" rel="noopener noreferrer">statistics website</a>.
            I also co-produced a{' '}
            <a className="main__link" href="https://jonminton.github.io/working-with-ai-course/" target="_blank" rel="noopener noreferrer">website offering guidance on how Agentic AI can be used for multiple forms of knowledge work</a>.
          </p>

          <h3 className="history__subhead">Revitalising Earlier Codebases</h3>
          <p className="main__p">
            I have found Claude Code to be extremely effective at 'taking a modelling approach
            and running with it', i.e. when given a mature codebase with well established patterns
            for ingesting and processing data, running models and performing analyses, and
            producing reports and other outputs containing such analyses, Claude models tend to
            be very fast and competent at iterating on that theme, and (say) doing for twenty
            causes of death what the codebase does for one. I also used Claude Code to build an
            alternative version of my{' '}
            <a className="main__link" href="https://datascapes.shinyapps.io/hmd-explorer-v2/" target="_blank" rel="noopener noreferrer">demographic visualisation tool</a>,
            with more flexible resizing options when going from overall surface plots to
            age-period-cohort 'slices'.
          </p>

          <h3 className="history__subhead">Galaxy Brained Reading and Reasoning</h3>
          <p className="main__p">
            I had a hunch that Claude, which uses markdown files for 'memory' (persistence of
            behaviour across sessions and agents, planning within sessions), would probably play
            well with Obsidian, which uses its own particular flavour of markdown files to build
            knowledge networks, allowing users to populate pages of concepts and ideas with links
            to other pages of concepts and ideas. For someone as galaxy-brained as myself,
            preferring to see and find webs of associations to long linear tracts, I had high hopes
            for this kind of integration. And with Opus 4.6, I wasn't disappointed.
          </p>
          <p className="main__p">
            For a local rationalist discussion group in early 2026, three readings from{' '}
            <em>Works in Progress</em> were assigned. After first reading the three articles, I then
            decided to further explore and probe each of the pieces, and the associations between
            them, by having an extensive 'discussion' with Claude Code. From this emerged a long
            chat window, as well as a greater sense of comprehension of the pieces. With some
            additional prompting and guidance, Opus 4.6 was able to also produce{' '}
            <a className="main__link" href="https://jonminton.github.io/wip-material-2026-02-07/" target="_blank" rel="noopener noreferrer">this Obsidian-based website</a>,
            showing the articles themselves as nodes, underlying arguments they were making, and
            evidence both compatible and incompatible with such arguments. This kind of knowledge
            graph, of course, isn't for everyone, and there are many different ways they could be
            operationalised, but as proof of principle, I consider it a success.
          </p>

          <h3 className="history__subhead">Community Advocacy and Development</h3>
          <p className="main__p">
            Working with Ayr resident and Community councillor Ian Macleod, I've worked with
            Claude Code to help better profile and understand the challenges and opportunities for
            socioeconomic development in Ayr. At the time of writing, after around four sessions,
            Claude Code has created four analytical reports; summarised, saved and cited dozens of
            references; and knit together the specific analytical pieces into higher level syntheses.
            It was also able to process and act effectively on iterative feedback provided in a
            variety of ways &mdash; from session chats to 'issues' logged and recorded on GitHub &mdash; to
            refine both the contents and the style. The underlying codebase, which uses a
            combination of R for analyses with Quarto for modular websites, is{' '}
            <a className="main__link" href="https://github.com/JonMinton/ayr-town-centre-vitality" target="_blank" rel="noopener noreferrer">available here</a>.
          </p>

          <h3 className="history__subhead">Boomer/Boomerworld</h3>
          <p className="main__p">
            As statistical websites, analysis, blogging, referencing, and data science do not
            appear to be challenges to recent Claude models in any way, I decided to challenge
            Claude with something possibly more demanding: producing a game. Starting from a
            single (though relatively detailed) prompt in Claude Cowork, then migrating to Claude
            Code in VSCode, the game &mdash; very much still in development &mdash; is{' '}
            <a className="main__link" href="https://jonminton.github.io/boomer/" target="_blank" rel="noopener noreferrer">available here</a>.
            Feedback &mdash; both bugs and feature requests &mdash; can be supplied from the game itself,
            and be handled and processed as 'issues' read by Claude from the{' '}
            <a className="main__link" href="https://github.com/JonMinton/boomer" target="_blank" rel="noopener noreferrer">GitHub repository</a>.
          </p>

          <h2 className="main__h2">Background</h2>

          <p className="main__p">
            Back in 2023 I took an unpaid four month career break to complete an intensive 16 week
            Software Development course run by CodeClan. Over the 16 weeks I saw interest and use
            of ChatGPT, in particular, by classmates increase, such that over the first couple of
            months I saw OpenAI tabs open in class by default, a personal tutor on every laptop,
            and by the capstone project in the last month of the course a sizeable minority of the
            projects involved LLMs to some extent, such as building interfaces to LLMs prompted to
            adopt particular helpful and zany personas (including one that appeared to have a
            proclivity to tell Dad Jokes).
          </p>
          <p className="main__p">
            Never one to follow popular sentiment too closely, I was at the time less enthusiastic
            about LLMs than most of my peers, and preferred wherever possible to 'tough it out' in
            trying to understand code and design patterns with the materials and exercises provided,
            rather than habitually seek dripfeed guidance from chatbots. Perversely defiant, I even
            tended to avoid ChatGPT, preferring to use Google's less popular Bard agent, in large
            part simply because it was less popular. With their tendencies towards sycophancy, glib
            superficiality, and assertively assured hallucinations, I was deeply skeptical about
            whether such agents could ever be net positive in supporting knowledge and productivity,
            let alone unambiguously essential systems for coding and other forms of knowledge work.
          </p>
          <p className="main__p">
            This disengagement and skepticism towards AIs changed almost completely in the last
            quarter of 2025. I don't think I had been wrong about LLMs' capabilities and risks of
            use in 2023. But I had been wrong, and increasingly so, in not paying sufficient
            attention to how much, and how fast, their capabilities had been increasing over the
            previous 30 or so months. New default behaviours and tooling, such as retrieval
            augmented generation (RAG; search and fact check your sources before making claims) and
            Chain of Thought (CoT) reasoning ('think' before you 'speak': as in engage in a detailed
            conversation with yourself, chewing over positions, arguments and sources before then
            summarising your most important 'thoughts' for the user) meant LLMs were suddenly much
            more likely to produce answers that were right, rather than just sounded right. And the
            amount they 'knew' and could reason through with their training data alone was suddenly
            much greater than the chatbots of 2023 and 2024.
          </p>
          <p className="main__p">
            The biggest change, however, was from AI-as-chatbot to Agentic AI, in which AI agents
            are, for the first time, given access to context, state history, tools, and environments
            in which they can write and edit. Granting such edit rights to earlier generations of
            LLMs would have been foolish. But in late 2025 I came to realise, with current
            generation LLMs, allowing LLMs to work as agents was rapidly becoming essential, the
            new normal, in software development, through agentic harnesses such as GitHub Copilot,
            Cursor, and Claude Code.
          </p>
          <p className="main__p">
            Of these agentic harnesses, it's Claude Code, with access to Anthropic's increasingly
            sophisticated Claude models, with which I've had most experience.
          </p>
          <p className="main__p">
            And my experiences of using these agents have often been so impressive as to have
            shocked me. What they can do well, they can usually do blisteringly fast, and with a
            fraction of the types of error human coders tend to produce. And the range of what they
            can do well appears to be growing, rapidly, with every month.
          </p>
          <p className="main__p">
            And though the above agentic harnesses are clearly aimed at coders &mdash; GitHub is a
            coding environment; Cursor is a nod to coders' historic preference to type code and
            instructions in text terminals (like it's still the 1980s); and Claude Code, of course,
            does clearly suggest the primary use case &mdash; I quickly came to realise the agentic way
            of working, and these agents' capacity to reason through complex problems, is likely to
            be as or more relevant, and transformative, for other forms of analytical knowledge
            work, including almost all academic work, and public and private sector research
            activities.
          </p>
          <p className="main__p">
            So, since November 2025, I've been trying to understand how best Agentic AI can be
            used across analytical knowledge work, just how capable it is, what its blind spots and
            domains of complementarity with human expertise tend to be, and what this is likely to
            mean for almost all forms of analytical knowledge work over the coming months and years.
          </p>
        </article>
      </main>
    </>
  )
}

export default AgenticAI
