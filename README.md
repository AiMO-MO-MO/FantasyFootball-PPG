# Project 3 (Data Visualization)

## Group Members:
- Avani Patel
- Clarke Allan
- Matt Owens
- Banesa Casillas

# Fantasy Football Weekly Performance Dashboard




If you've been playing fantasy football for some time, you've likely experienced the frustration of having a seemingly unbeatable team early in the season, only to see it falter in the playoffs.

With so many uncertainties, it's challenging to pinpoint the reasons behind a player's sudden decline in production when it matters most. Could there be underlying trends in the data that could help anticipate future performance?

To help address these questions and make more informed decisions, we’ve developed the following dashboard to allow you to see a player's historic weekly performance.

## Weekly Performance Dashboard:

Run the App.py in the Flask/Static folder to access the dashboard. 

![image](https://github.com/AiMO-MO-MO/FantasyFootball-PPG/assets/130156500/43276b0f-fbf6-4d03-b207-68e72801c5a6)


- **Top Chart**
- **Bottom Left**
- **Bottom Right**


## How to use the Player Performance Dashboard via Flask App: 



To access the Player Performance Dashboard, navigate to the Flask app located in the Flaskfolder directory and run the App.py file.

Navigating the Home Page:

Once you've accessed the Flask app, you'll land on the Home Page. Choose the position you want to analyze.

Player Page:

After selecting a position, you'll have the option to use the player search feature. This feature enables you to search for specific players and view their performance trends over time.
At any point, you can return to the Home Page by clicking "Home."

## Git Hub Directory:

### Data Wrangling: 
- Web Scraping
- Transforming

### Data Design: 
- Table Schema
- Queries
- ERD

## Ethics: 
Fantasy football data is derived from NFL game statistics, providing a foundation rooted in real-world player performance. However, it's crucial to acknowledge the presence of selection bias within this dataset. While fantasy points are calculated based on standardized NFL game statistics, the interpretation and application of these numbers can vary across different fantasy football leagues. The dashboard's metrics are tailored to reflect a Points Per Reception (PPR) scoring style, offering insights aligned with this specific scoring system. It's important to recognize that users' league settings may differ, impacting the relevance and applicability of the visualization to their particular scoring rules.

Furthermore, the dataset encompasses player performance data from the past five years, providing a comprehensive overview of recent trends. It's worth noting that some players may have more extensive data histories than others, potentially influencing the depth of analysis for certain individuals.

Inclusive of all available data points, even instances where players have scored zero points are included. However, the reasons behind these zero scores are not explicitly displayed within the dashboard. Transparency remains paramount, and any external imagery incorporated into the website is properly attributed to its respective source.

##Data Source: [FootballDB](https://www.footballdb.com/fantasy-football/index.html?pos=RB&yr=2023&wk=%7Bx%7D&key=b6406b7aea3872d5bb677f064673c57f%27)

## Libraries: 
- Flask
- SQLAlchemy 
- Pandas 
- Splinter
- BeautifulSoup
- Selenium
- Plotly
- Chart.JS

## Technologies: 
- SQL 
- PostgresSQL
- Python 
- Jupyter Notebook 
- ChatGPT
- JavaScript
- CSS
-HTML

