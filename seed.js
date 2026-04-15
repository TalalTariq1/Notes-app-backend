require('dotenv').config()
const Note=require('./server/models/Note.js')
const mongoose=require('mongoose')
const connectDB=require('./server/config/db.js')

const seedPosts = [
  {
    title: "Mastering the Art of Deep Work",
    body: "In a world full of digital distractions, the ability to focus on a single task for hours is a superpower. Deep work allows you to master complicated information and produce better results in less time. To achieve this, you must eliminate 'shallow work' like constant emailing and social media scrolling. Set aside blocks of 90 minutes, turn off notifications, and dive into your most important projects. You will find that your cognitive capabilities reach a new peak when you aren't constantly context-switching."
  },
  {
    title: "The Perfect Morning Routine",
    body: "Success is often built in the first hour of the day. A morning routine isn't just about waking up early; it's about intentionality. Start with hydration—at least 500ml of water. Follow this with light movement or a 10-minute walk to get your blood flowing. Avoid checking your phone for at least 60 minutes. This protects your 'mental peace' and allows you to set your own agenda for the day rather than reacting to everyone else's requests via notifications."
  },
  {
    title: "Why Tailwind CSS is a Game Changer",
    body: "Traditional CSS involves jumping back and forth between files and coming up with clever class names. Tailwind changes the game by providing utility classes that allow you to style directly in your HTML. At first, it looks messy, but the speed of development is unmatched. You can build fully responsive layouts in minutes. Plus, the design system is baked in, meaning your padding, margins, and colors stay consistent across the entire application without any extra effort."
  },
  {
    title: "Exploring the Architecture of Node.js",
    body: "Node.js is built on the V8 JavaScript engine and utilizes a non-blocking, event-driven I/O model. This makes it incredibly efficient for data-intensive real-time applications. Understanding the Event Loop is key to writing high-performance Node apps. While it runs on a single thread, it handles multiple concurrent connections by delegating heavy tasks to the system kernel whenever possible. This is why it's the top choice for modern web backends and microservices."
  },
  {
    title: "The Joy of Minimalist Living",
    body: "Minimalism isn't just about owning fewer things; it's about making room for more of what matters. By removing physical and digital clutter, you reduce decision fatigue and increase focus. Start by decluttering one small area of your home, like your desk. You'll notice a shift in your mental clarity almost immediately. The goal is to be surrounded only by things that serve a purpose or bring you genuine joy, freeing up your energy for experiences and relationships."
  },
  {
    title: "Understanding MongoDB Collections",
    body: "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. This means fields can vary from document to document and data structure can be changed over time. For a notes app, this is perfect. Each note is a 'document' within a 'collection' called Posts. Using Mongoose as an ODM (Object Data Modeling) tool allows us to define strict schemas like the one we just built, giving us the best of both worlds: flexibility and validation."
  },
  {
    title: "Healthy Habits for Software Engineers",
    body: "Sitting at a desk for 8-10 hours a day can take a toll on your body. Ergonomics are vital—invest in a good chair and keep your monitor at eye level. Take 'eye breaks' every 20 minutes by looking at something 20 feet away. Additionally, stay hydrated and try to stand up and stretch every hour. Physical health directly impacts cognitive performance; a healthy body leads to a sharper mind and more efficient debugging sessions."
  },
  {
    title: "Travel Guide: The Hidden Gems of Japan",
    body: "While Tokyo and Kyoto are breathtaking, the rural areas of Japan offer a different kind of magic. The Iya Valley on Shikoku island is famous for its vine bridges and deep gorges. In the north, the town of Ginzan Onsen looks like a scene from a Studio Ghibli movie, especially in winter. Traveling off the beaten path allows you to experience the true 'Omotenashi' (hospitality) and quiet beauty that defines traditional Japanese culture."
  },
  {
    title: "The Importance of Version Control",
    body: "Git is more than just a tool for saving code; it's a time machine. Being able to branch off, experiment with new features, and merge them back when they're ready is essential for collaboration. Every 'commit' should be a snapshot of a logical change with a clear message. This habit saves countless hours when you need to track down a bug that was introduced weeks ago. Always remember: commit early, commit often, and never push directly to main without testing."
  },
  {
    title: "Future of Web Frameworks in 2026",
    body: "We are seeing a massive shift toward 'Server Components' and 'Edge Computing.' Frameworks are moving away from massive client-side bundles and focusing on sending as little JavaScript as possible to the browser. Hydration is being replaced by more efficient methods of interactivity. As AI becomes more integrated into the development flow, frameworks will likely become more declarative, allowing us to describe *what* we want to build while the framework handles the *how*."
  }
];


async function insert_posts(){
    try{
        await connectDB();
       await  Note.insertMany(seedPosts);
       console.log('Successfully added 10 notes to the database!')

    }
    catch(error){
        console.log('Error occured while seeding the data in database!!',error);
    } finally{
        mongoose.connection.close()
    }
}
/*
//insert_posts()
*/

