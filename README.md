## CoSENSE
CoSENSE platform makes use of large aggregated public data from Twitter to visually communicate 
how the variation of emotionally charged keywords changes over time with breaking events and 
governmental policies reported in all news streams as the pandemic unfolds. CoSENSE also allows 
for the integration of conventional surveys and other information available to governmental 
agencies. It provides a canvas to visualize how people feel about various topics (e.g., 
disease, money, economy) along different emotional dimensions (e.g., anger, anxiety, rationality, 
calmness) and provide live empathetic insights into community health. The power of understanding 
shared emotions provides opportunities to discuss and agree on actions that need to be taken to 
address the concerns of the public.

### Technical specification

* Analytics
    * Scala
        * Apache Spark Core
        * SparkSQL
        * SparkML
        * SparkNLP
        * GDELT
    * Python
        * Pandas
        * Natural Language Toolkit
        * Twitter REST/Streaming API

* Application
    * TypeScript (frontend)
        * Bootstrap for the user interface
        * React 
        * D3 for plots, graphs, and visualisations
        * Redux for state management
    * Python (backend)
        * Flask
        * PostgreSQL


### Installation

1. Clone repository

        git clone https://github.com/maxvfischer/CoSENSE.git

2. Download and install Node.js from nodejs.org/en/download/

3. Install the latest version of npm. Run the following in a command line, either your IDE's Terminal window or in a Windows Command Prompt.

        npm install --global npm@latest
                                                                                                          
4. Install the app dependencies by running the following command in the command line inside the folder root where you have unzipped the theme package archive.

        npm install
                                                        
5. Start application

        npm run start
                                                        

### Production Build

To create a production optimised build run the command below:

    npm run build
                                                        
This created another folder in the root of your project named build. You'll have an option to start a local web server to view your newly created production build.


    serve -s build -l 4000
                                                        
This will start a local web server on port 4000, on which the production folder (/build/) will be available in your browser.