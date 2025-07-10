// Step 1: Define the Video class
class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time; // in seconds
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
}

// Step 2: Instantiate two video objects and call the watch() method
const video1 = new Video("How to Learn JavaScript", "Anna", 300);
video1.watch(); // Output: Anna watched all 300 seconds of "How to Learn JavaScript"!

const video2 = new Video("CSS Tricks", "John", 450);
video2.watch(); // Output: John watched all 450 seconds of "CSS Tricks"!


// --- Bonus ---

// Step 3: Use an array of objects to store 5 videos' data
const videoData = [
    { title: "React Basics", uploader: "Sara", time: 200 },
    { title: "Vue.js Tutorial", uploader: "Ali", time: 180 },
    { title: "Understanding Async/Await", uploader: "Tom", time: 240 },
    { title: "JavaScript for Beginners", uploader: "Emily", time: 360 },
    { title: "Advanced Node.js", uploader: "Leo", time: 400 }
];

// Step 4: Loop through the array and create Video instances
const videoInstances = [];

for (let data of videoData) {
    const vid = new Video(data.title, data.uploader, data.time);
    videoInstances.push(vid);
    vid.watch();
}
