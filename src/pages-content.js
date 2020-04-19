const pagesContent = [
    {
        name: 'about',
        html: `
            <h1>About Me</h1>
            <p style="text-align:center;"> 
                Hello! My name is Alec Flanigan and this is my personal website. I built this page as a way to present the things I've created and to
                promote myself. I hope you are able to find anything you need while you're here.
            </p>
            <h2>An introduction to me:</h2>
            <p>
                I grew up (and currently still live) in the midwest. From a young age, I had a growing interest in technology and the impacts it
                could generate around the world. In elementary school, I read a book generally based on technical developments that
                included places like Tokyo, Japan and talked about Google's innovative work environment. From this point I began reading more
                information on tech-giants such as Steve Jobs, Bill Gates, Steve Wozniak, and the like. Around the age of 8, I would sit on my 
                basement floor and take apart old pre-built computers and try to put them back together. Soon after, I started saving the change
                that my dad would give me and I was able to buy my first desktop computer. That first computer was an intro into the things that 
                have since become a huge part of my life. It's helped me connect with my friends, make new friends, and even learn how to originally
                program!
            </p>
            <div id="education-container">
                <h2>Edcuation:</h2>
                <img id="lafayette-img" alt="Lafayette College"/>
                <h3>Lafayette College - Class of 2020</h3>
                <ul>
                    <li>Bachelors Degree in Computer Science</li>
                        <p>
                            Gained knowledge of programming, computer architectures, and computer algorithms. Learned to use programming languages,
                            such as Java, C++, and C. Worked in teams to develop software for a customer's use. Learned programming approaches to
                            handle analysis of big data. Generated an ability to learn new coding languages and skill in short periods of time.
                        </p>
                    <li>Bachelors Degree in Asian Studies</li>
                        <p>
                            Introduced new perspectives of ideas not present in areas, such as the U.S. Allowed me to decentralize my view of the world
                            and be present of the massive impacts that Asia has had (and continues to have) on the world. I also studied Japanese
                            and studied abroad in Japan for a semester.
                        </p>
                </ul>
            </div>
            <div style="clear:both;"></div>
            `,
    }, 
    
    {
        name: 'skills',
        html: `
            <h1>Skills</h1>

            <div id="skills-container">
                <div id="coding-technologies" class="skills-list">
                    <h2>Coding Languages:</h2>
                    <ul>
                        <li>JavaScript (including HTML and CSS)</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>MapReduce/Hadoop</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>MATLAB</li>
                    </ul>
                </div>
                <div id="database-technologies" class="skills-list">
                    <h2>Database Technologies:</h2>
                    <ul>
                        <li>MongoDB</li>
                        <li>SQLite</li>
                    </ul>
                </div>
                <div id="development-services" class="skills-list">
                    <h2>Development Services:</h2>
                    <ul>
                        <li>Amazon Web Services</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
            <div style="clear:both;"></div>
            
            <div id="additional-skills-info">
                <h2>Noteworthy Courses:</h2>
                <ul id="noteworthy-courses">
                    <li>
                        <Strong>Data Structures</Strong> - Developed data structures, such as ArrayLists/LinkedLists and HashTables using primitive Java types.
                        The course was an introduction to Big O notation along with data structures entirely. Specifically, the course was key in understanding
                        the importance of using the correct data structure for the job.
                    </li>
                    <li>
                        <Strong>Computer Organization</Strong> - A study of computer hardware and the functionality between components such as the processor, 
                        RAM, and hard drive. This course was useful in understanding how a processor completes tasks and the importance of using RAM memory
                        over using memory from the hard drive during tasks.
                    </li>
                    <li>
                        <Strong>Software Development</Strong> - Worked in a small team in order to build software that met a customer's needs. The team worked
                        together using C++, C, and SQLite to build an application with a working front-end and database. This course developed my ability to
                        work well within a team and meet deadlines together.
                    </li>
                    <li>
                        <Strong>Data Mining</Strong> - A course analyzing large data sets using Hadoop to divide processing tasks across multiple systems to
                        make the data manageable. The programs were developed and tested on local systems and then hosted on an AWS server. I learned parallel
                        programming along with how to use AWS to run a program across muliple instances at once.
                    </li>
                </ul>
                <p>
                    Along my software development lifetime I've come to use all of the technologies listed above. I've developed using both Windows and Linux
                    machines and am familiar with using SSH to develop remotely or on a server. While developing, I've used git and GitHub for course projects,
                    group projects, and personal projects. I used Matlab in the summer of 2017 during a summer research position (more details in the 
                    <strong>Projects</strong> section of this page!). My most recent projects have used JavaScript (along with React and
                    Node.js). This webpage is an example of one of those!
                </p>
                <p>
                    I'm a very detail-oriented thinker and I like to work through a lot of hard problems when developing code. I do my best to use no
                    libraries and develop with the barebones tools whenever possible while learning something new so that I can understand the
                    fundamentals to my best ability. That being said, I have no problem implementing libraries if need be or when a library could make a 
                    greatly cleaner file system. Outside of coursework, I've learned to use things like JavaScript/HTML/CSS, React, Node, and Matlab on my
                    own using online resources and documentation. Due to this fact, I am able to adapt and learn new technologies in a short period of time.
                </p>
            </div>
            
        `,
    }, 

    {
        name: 'projects',
        html: `
            <h1>Projects</h1>

            <div id="projects-container">
                <h2>Finished Projects</h2>

                <div class="project-container">
                    <div id="website-project" class="project">
                        <h3>Personal Website</h3>
                        <a href="https://github.com/flanigana/personal-website">->Link to GitHub Repository</a>
                        <h4>Technologies Implemented:</h4>
                        <ul class="technologies-list">
                            <li>React</li>
                            <li>JavaScript</li>
                        </ul>
                        <p class="project-description">
                            This website! This website is built in react from the ground up. You can visit the GitHub link
                            to view the source code for the entire site. I've done my best to make the entire thing as dynamic as possible. The only
                            non-standard library imported (html-react-parser) is used to parse html elements from text in order to preserve the dynamic 
                            capabilities of the main page. Using this library, all of the main page content can be stored in a single array and used to
                            build each section of the page using a single React component.
                        </p>
                    </div>
                </div>

                <div class="project-container">
                    <div id="face-detector-project" class="project">
                        <h3>Postcard Face Detection/Recognition</h3>
                        <a href="https://github.com/flanigaa/postcard-recognition">->Link to GitHub Repository</a>
                        <h4>Technologies Implemented:</h4>
                        <ul class="technologies-list">
                            <li>MATLAB</li>
                        </ul>
                        <p class="project-description">
                            A research project created in tandem with Amir Sadovnik, a previous professor in the computer
                            science department at Lafayette College. We tuned a model from a face-detector library (tiny-face) to detect faces within a 
                            collection of historical postcards. We studied the best ways to prepare the images (color shift, etc.) in order to obtain the 
                            best results. The model was re-trained using the same preparation techniques (such as converting all of the training images to 
                            black and white before training) in order to create the best model for detecting faces within our postcards.
                        </p>
                    </div>
                </div>

                <div class="project-container">
                    <div id="frameit-project" class="project">
                        <h3>FrameIt</h3>
                        <a href="https://github.com/flanigaa/FrameIt">->Link to GitHub Repository</a>
                        <h4>Technologies Implemented:</h4>
                        <ul class="technologies-list">
                            <li>Java</li>
                        </ul>
                        <p class="project-description">
                            An application built in Java to allow for the marking of faces within images to create test
                            data for the face detection/recognition project. The interface was built to load an image in and draw/delete marked faces.
                            The marked faces could be marked with a difficulty in order to train the model using sets with varying difficulties. Once
                            finished, the data would export to a format that was readable by the model trainer.
                        </p>
                    </div>
                </div>

                <div class="project-container">
                    <div id="aperture-project" class="project">
                        <h3>Aperture</h3>
                        <a href="https://devpost.com/software/aperture">->Link to Devpost</a>
                        <h4>Technologies Implemented:</h4>
                        <ul class="technologies-list">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>Firebase</li>
                            <li>AWS</li>
                        </ul>
                        <p class="project-description">
                            A mobile app developed during PennAppsXVI that was awarded "Best Use of AWS" and also finished
                            in the top 30 out of 500 participants! The app was created to help friends and family create a joint photo-album that could
                            be consistently updated and viewed by any members of the group. The app could also be used for public events using the
                            location-based collection.
                        </p>
                    </div>
                </div>

                <h2>Future Projects</h2>

                <div class="project-container">
                    <div id="iro-identifier-project" class="project">
                        <h3>Iro Identifier</h3>
                        <a href="https://github.com/Limmitd/Iro-Identifier">->Link to GitHub Repository (Will be added to in the future!)</a>
                        <h4>Technologies Implemented:</h4>
                        <ul class="technologies-list">
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                        </ul>
                        <p class="project-description">
                            This will be a website designed to analyze the primary colors within images, tag them with
                            this data, and then allow images to be retrieved by a color/set of colors selected by the user. The website will have a
                            front-end designed in React, a back-end using Node.js/JavaScript and will use a MongoDB database. A future goal of the site
                            will to implement a library that does object recognition within the images so that they can be sorted by both colors and
                            objects.
                        </p>
                    </div>
                </div>
            </div>
        `,
    }, 
    
    {
        name: 'interests',
        html: `
            <h1>Interests/Hobbies</h1>

            <div id="computer-gaming" class="interest-container">
                <h2>Computer Gaming</h2>
                <img id="league-finals-img" alt="League Finals"/>
                <p>
                    The first computer game that I had considerable time in was Minecraft. I had purchased the game in 2010 during the alpha and once mods
                    became a common thing for it, I started installing them. The game got me into editing system files, exploring hidden Windows folders,
                    and trying to learn about networking from having to port-forward in order to host a server that I could play together on with my 
                    friends.
                </p>
                <p>
                    In addition to Minecraft, another game that has had a large impact on my life has been League of Legends. I began playing during the
                    pre-season of season 3 (in 2012) and it soon became my favorite game. While I don't play the game nearly as much as I did in high
                    school, it helped expand my friend group between friends that I already had and helped me meet new friends around the U.S. and even
                    in Canada! In 2016, I went to the season 6 semi-finals at Madison Square Garden with one of the friends that I had met through League.
                    I also got to go to South Korea in 2018 for the season 8 finals during my time abroad in Japan.
                </p>
            </div>
            <div id="building-computers" class="interest-container">
                <h2>Building Computers</h2>
                <p>
                    After having my first desktop computer since around 2008, when I upgraded my PC, I wanted to piece it together myself. In 2013, I was
                    finally able to do this for the first time and easily pick the pieces after keeping up with all of the hardware releases in the recent
                    years. Soon after that, my friends became interested in PC gaming as well and were interested in having me help them build their own
                    systems! Since building my first PC, I've helped 4 friends build 6 different systems and have built two of my own. I continue to try
                    to convince any of my friends to build their own PC and offer my help. I believe it's a fun project and can help create a sense of
                    accomplishment and add a personal touch to something you use every day.
                </p>
            </div>
            <div id="japanese" class="interest-container">
                <img id="meiji-jingu-img" alt="Meiji Jingu Entrance"/>
                <h2>Japanese</h2>
                <p>
                    I started studying Japanese my sophomore year of university and have continued to study it since. My junior fall semester, I studied
                    abroad in Tokyo at Kanda University of International Studies through the IES program. While abroad, I took courses on Japanese culture
                    that I really enjoyed, so after returning back to my home university the next semester, I decided to add Asian Studies as a second
                    major so that I could learn more. Since returning from Japan, I have continued to keep in touch with friends that I had made while
                    being there.
                </p>
                <div style="clear:both;"></div>
            </div>
        `,
    }, 
    
    {
        name: 'contact',
        html: `
            <h1>Contact Me</h1>
            <img id="contact-img" alt="Classroom Photo"/>
            <div id="contact-container">
                <h3>You can contact and follow me using the info and links below:</h3>
                <h2>E-mail: alecflanigan@gmail.com</h2>
                <h2>LinkedIn: <a href="https://www.linkedin.com/in/alec-flanigan-963899149">< Alec Flanigan ></a></h2>
                <h2>GitHub: <a href="https://github.com/flanigana">< flanigana > </a></h2>
                <div style="clear:both;"></div>
            </div>
        `,
    }, 
];

export default pagesContent;