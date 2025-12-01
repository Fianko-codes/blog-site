export interface Post {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  publishDate: string;
  readingTime: number;
  slug: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "On the Nature of Time and Memory",
    excerpt: "Time moves in strange ways through our consciousness. This essay explores how memory reshapes our perception of past events and why nostalgia feels simultaneously real and illusory.",
    content: `Time moves in strange ways through our consciousness. We experience it linearly, moment by moment, yet memory refuses to follow these rules. Instead, it collages fragments—a smell, a conversation, the quality of afternoon light—into something that feels both intensely real and impossibly distant.

Nostalgia operates on this paradox. We remember summers that seemed endless, friendships that felt eternal, moments of perfect clarity. But when we examine these memories closely, we find they've been subtly edited. The uncomfortable parts fade. The beautiful moments sharpen. We become unreliable narrators of our own lives.

This isn't dishonesty—it's how consciousness works. Memory isn't a recording device; it's a storytelling engine. Every time we recall an event, we reconstruct it slightly differently, influenced by who we are now, what we know now, what we need the memory to be.

The implications are profound. If memory constantly rewrites the past, what does it mean to "know thyself"? Perhaps identity isn't something stable we discover, but something fluid we continuously author. We are, in a sense, always becoming.

This fluidity frightens some people. They cling to fixed narratives about who they are, what they believe, what defines them. But rigidity comes at a cost. When we refuse to update our stories, we trap ourselves in outdated versions of ourselves.

Better, perhaps, to embrace the uncertainty. To hold our memories lightly, with curiosity rather than attachment. To understand that the person we were five years ago was real, but so is the person we are now. Both are true. Both are partial.

Time, then, isn't just something that happens to us. It's something we participate in creating, through the stories we tell, the memories we privilege, the meanings we assign. We are always already shaping our past, which shapes our present, which shapes who we might become.

The question isn't whether this process is reliable. It isn't. The question is: what kind of story do you want to tell?`,
    tags: ["philosophy", "consciousness", "time"],
    category: "Essays",
    publishDate: "2024-03-15",
    readingTime: 6,
    slug: "on-the-nature-of-time-and-memory"
  },
  {
    id: "2",
    title: "Digital Minimalism as Practice",
    excerpt: "In an age of infinite content and perpetual connectivity, choosing what not to consume becomes a radical act. Reflections on attention, intention, and the quiet spaces we've lost.",
    content: `We live in an era of abundance that feels like scarcity. Infinite content, infinite feeds, infinite updates—and somehow, never enough time, never enough focus, never enough presence.

The problem isn't availability. The problem is intentionality. Or rather, the lack of it.

Digital minimalism isn't about rejecting technology. It's about reclaiming agency over how technology shapes our lives. It's asking: What do I actually want from this tool? What is it costing me? Is this trade worth it?

Most of us never ask these questions. We accept defaults: algorithmic feeds that decide what we see, notification systems that interrupt our thought, interfaces designed to maximize engagement rather than value. We optimize for clicks instead of clarity.

The results are predictable. Fragmented attention. Shallow thinking. A vague sense of being overwhelmed despite doing very little that matters. We're busy, yes—but with what?

Practicing digital minimalism means making conscious choices. It means using airplane mode not as a feature but as a default. It means deleting apps that don't serve you. It means building rituals that protect deep work, deep reading, deep conversation.

It also means accepting boredom. Because boredom isn't the enemy of creativity—it's the precondition. When we fill every spare moment with content, we never give our minds space to wander, to make unexpected connections, to think original thoughts.

The counterargument is FOMO: What if I miss something important? But here's the thing—you will miss things. That's inevitable. The question is: what do you gain by missing them?

I've gained mornings of uninterrupted writing. Long walks without podcasts. Conversations that go deep instead of skimming surfaces. Books read slowly, carefully, with attention. Thoughts developed over days instead of minutes.

These aren't romantic fantasies. They're practical choices with measurable benefits. Less anxiety. Better focus. Work I'm proud of. Relationships that feel real.

Digital minimalism isn't about deprivation. It's about abundance of a different kind—the abundance that comes from having enough space to think, enough silence to hear yourself, enough time to do work that matters.

The tools will always be there. The question is: are you using them, or are they using you?`,
    tags: ["technology", "productivity", "mindfulness"],
    category: "Reflections",
    publishDate: "2024-03-10",
    readingTime: 5,
    slug: "digital-minimalism-as-practice"
  },
  {
    id: "3",
    title: "Learning to See Again",
    excerpt: "On recovering the capacity for genuine attention in a world engineered to capture and commodify it. An exploration of presence, perception, and the art of noticing.",
    content: `There's a difference between looking and seeing. We look at hundreds of things daily—screens, faces, streets, sky—but how often do we actually see them?

Seeing requires attention. Not the scattered, multitasking attention we've normalized, but sustained, curious, open attention. The kind that notices details: how light changes the color of buildings at sunset, the rhythm of someone's speech, the texture of tree bark.

This capacity isn't innate—it's cultivated. And in our current moment, it's under siege.

Every interface is optimized for engagement, which is a polite word for addiction. Infinite scroll. Autoplay. Notifications. "You might also like." The environment is engineered to prevent the sustained attention that seeing requires.

But here's what I've noticed: once you start paying attention, everything becomes more interesting. A walk around the block reveals dozens of small dramas: a spider building a web, light through leaves creating shadow patterns, the architecture of decay in an old wall.

This isn't about being "present" in some mystical sense. It's about recovering a basic human capacity that modern life actively suppresses. The capacity to notice. To be curious. To let something hold your attention not because it's engineered to, but because it's genuinely interesting.

I've been practicing this deliberately. On walks, I don't listen to anything. Just walk and notice. In conversations, I try to actually listen instead of planning what to say next. When reading, I slow down, reread paragraphs that resonate, sit with ideas before moving on.

The results surprise me. The world is endlessly fascinating when you actually look at it. People are deeply complex when you actually listen to them. Ideas unfold in unexpected ways when you give them space to breathe.

This matters because attention isn't just about efficiency or productivity. It's about quality of life. How we attend to things shapes how we experience them. Scattered attention creates a scattered life. Sustained attention creates depth, meaning, richness.

The tragedy is that we're told this capacity is lost, that modern life has permanently fragmented our minds. But I don't think that's true. Attention is like a muscle—it atrophies with disuse but strengthens with practice.

So the question becomes: what are you willing to practice? What do you want to be able to see?

Because once you learn to see again, really see, you realize how much you've been missing. And how much is waiting, right in front of you, if you're willing to look.`,
    tags: ["attention", "mindfulness", "perception"],
    category: "Essays",
    publishDate: "2024-03-01",
    readingTime: 5,
    slug: "learning-to-see-again"
  },
  {
    id: "4",
    title: "The Tyranny of Productivity",
    excerpt: "What if rest isn't a reward for productivity, but a precondition for meaning? Challenging the cult of optimization and recovering a more humane relationship with time.",
    content: `We worship productivity. We optimize routines, track habits, measure output. We treat ourselves like machines that need better algorithms to run more efficiently.

But humans aren't machines. And the metaphor—applied rigorously enough—breaks us.

The productivity mindset treats rest as a means to an end. You rest so you can work better. You sleep so you have energy tomorrow. You take breaks to avoid burnout. Rest is justified only by what it produces.

This is backwards.

Rest doesn't need justification. You don't earn the right to be tired. You don't need to optimize your downtime. Being human—being alive—is permission enough to rest.

The deeper issue is that productivity culture mistakes busyness for value. We measure worth by output: tasks completed, emails sent, hours worked. If you're not producing, you're not valuable.

But many of the most important things we do can't be measured this way. Thinking carefully about a problem isn't "productive" until you have an answer. Building a relationship isn't "efficient." Making art isn't "optimized." Living isn't a deliverable.

When we treat everything like a productivity problem, we lose sight of what makes life meaningful. Meaning comes from doing things for their own sake—from intrinsic value, not instrumental value. From being present, not extracting value from every moment.

I've been trying to unlearn this. To read books slowly instead of racing through them. To have conversations that meander instead of "getting to the point." To work intensely when I'm working, then actually stop instead of half-working all evening.

It's harder than it sounds. The productivity mindset is deeply internalized. I still feel guilty resting. I still catch myself thinking about "optimizing" my morning. I still track things that don't need tracking.

But I'm also noticing what changes when I let go. Ideas develop over time instead of being forced. Relationships deepen when I'm not rushing. Work improves when I'm genuinely rested, not just strategically recovered.

The irony is that obsessing over productivity often makes us less creative, less thoughtful, less effective. We burn out. We lose perspective. We do mediocre work frantically instead of excellent work sustainably.

Maybe the goal isn't to be more productive. Maybe it's to be more human. To work when it makes sense, rest when we need to, and stop measuring our worth by our output.

Because at the end of our lives, no one wishes they'd checked more boxes. They wish they'd lived more fully, loved more deeply, been more present. None of that is measurable.

And that's exactly the point.`,
    tags: ["productivity", "culture", "meaning"],
    category: "Reflections",
    publishDate: "2024-02-20",
    readingTime: 5,
    slug: "the-tyranny-of-productivity"
  },
  {
    id: "5",
    title: "On Solitude and Loneliness",
    excerpt: "Two states often confused but fundamentally different. An examination of what it means to be alone by choice versus alone by circumstance, and why both matter.",
    content: `Solitude and loneliness are not the same thing, though we often confuse them. Loneliness is a lack—something missing, someone absent, connection desired but unavailable. Solitude is a presence—time with yourself, space to think, freedom from external demands.

The confusion matters because it shapes how we relate to being alone. If we conflate solitude with loneliness, we avoid it. We fill every moment with noise, company, distraction. We lose the capacity to be with ourselves.

But solitude is essential. Not as an escape from others, but as a foundation for genuine connection. You can't bring your full self to relationships if you don't know who you are. And you can't know who you are without spending time alone with yourself.

This isn't about romantic notions of solitary genius. It's practical. Solitude is where we process experiences, integrate learning, develop thoughts that aren't just reactions to others' thoughts. It's where we figure out what we actually think, separate from what we're supposed to think.

Modern life makes this difficult. We're always connected, always reachable, always stimulated. The idea of intentional solitude—choosing to be unreachable, unstimulated, alone—feels almost transgressive.

But the costs of avoiding solitude are real. We become reactive instead of reflective. We adopt others' opinions without examining them. We lose touch with our own preferences, desires, values. We become strangers to ourselves.

Loneliness, meanwhile, is a genuine problem. Humans are social creatures. We need connection, belonging, community. When those are missing, we suffer. The solution isn't to valorize isolation or pretend independence is sufficient.

The distinction is choice. Solitude is chosen; loneliness is imposed. Solitude enriches; loneliness depletes. Solitude leads back to connection; loneliness cuts us off from it.

I've found both necessary. Time alone to think, write, process. Time with others to connect, share, belong. The balance shifts, but both matter. And crucially, they feed each other. Solitude makes me better company. Connection gives me something to reflect on in solitude.

The challenge is cultural. We celebrate constant connectivity while also glorifying hermits and monks. We pathologize both loneliness and solitude, treating all aloneness as problematic. We lack a nuanced vocabulary for different ways of being alone.

But the distinction is crucial. Because if you can't be alone without being lonely, you're trapped. You become dependent on external validation, unable to find peace in your own company. And if you avoid solitude entirely, you lose yourself in the noise.

The goal isn't perfect balance. It's awareness. Knowing when you need solitude and taking it. Recognizing loneliness and seeking connection. Understanding that being alone and being lonely are fundamentally different experiences.

And perhaps most importantly: learning that solitude isn't emptiness. It's space. And in that space, something essential happens—you meet yourself, again and again, until that meeting becomes familiar, comfortable, even enjoyable.

That's not loneliness. That's coming home.`,
    tags: ["solitude", "relationships", "self"],
    category: "Essays",
    publishDate: "2024-02-05",
    readingTime: 6,
    slug: "on-solitude-and-loneliness"
  }
];
