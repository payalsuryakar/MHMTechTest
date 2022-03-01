Feature: Technical Test (UI) – Quality Engineer HMH

    
    @Regression
    Scenario: Verify the top navigation links (Home, News, Sport, etc) and verify the URL is correct 
    Given User launches the BBC URL
    When user clicks on top navigation links
     | Link      | 
     | Home      |  
     | News      |  
     | Sport     |  
    Then user should be navigated to respective pages as per link opened
    
    

    @Regression
    Scenario: In the top navigation, perform a search for “Houghton Mifflin Harcourt” and verify the search results.
    Given User launches the BBC URL
    When user perform search for Houghton Mifflin Harcourt
    Then search list should be displayed
    




