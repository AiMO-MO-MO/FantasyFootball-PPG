# FantasyFootball-PPG

# Fantasy Football Weekly Performance Dashboard

If you've been playing fantasy football for some time, you've likely experienced the frustration of having a seemingly unbeatable team early in the season, only to see it falter in the playoffs.

With so many uncertainties, it's challenging to pinpoint the reasons behind a player's sudden decline in production when it matters most. Could there be underlying trends in the data that could help anticipate future performance?

To help address these questions and make more informed decisions, we’ve developed the following dashboard to allow you to see a player's historic weekly performance.

## Dashboard Components:
- **Top Chart**
- **Bottom Left**
- **Bottom Right**


## How to use the Weekly Performance Dashboard: 
- Access FantasyPointsTrendAnalyzer via the Flask app in the Flaskfolder.
- Once on the Home Page, Select Position:
  - Player Search
  - Home: back to home for new position

## Data Wrangling: 
- Web Scraping
- Transforming

## Data Design: 
- Table Schema
- Queries
- ERD

## Ethics: 
Fantasy Football data is based on NFL game statistics. Selection Bias is still something that we had to consider with this data set. Although the fantasy points are based on NFL game statistics, rigid numbers, the way each league may count their fantasy scoring can be different. The dashboards numbers reflect Points Per Reception scoring style, but the user's league scoring could change how they can apply what they see in the visualization. The data is limited to the past 5 years. Some players will have more data. Scores of 0 are included but the reason for the 0 is not displayed. A third-party image was used on the website and was credited appropriately. 

**Data Source:** [FootballDB](https://www.footballdb.com/fantasy-football/index.html?pos=RB&yr=2023&wk=%7Bx%7D&key=b6406b7aea3872d5bb677f064673c57f%27)

## Libraries: 
- Flask
- SQLAlchemy 
- Pandas 
- Splinter
- BeautifulSoup
- Selenium

## Technologies: 
- SQL 
- PGadmin 
- Python 
- Jupyter Notebook 
- ChatGPT
- JS.Code

## Group Members:
- Avani Patel
- Clarke Allan
- Matt Owens
- Banesa Casillas

 We will follow 'Data Visualization' track for Project-3. Using the dataset below, we will create a database to contain the weekly scores for each player. 

 Dataset: https://www.footballdb.com/fantasy-football/index.html?pos=RB&yr=2023&wk={x}&key=b6406b7aea3872d5bb677f064673c57f%27
