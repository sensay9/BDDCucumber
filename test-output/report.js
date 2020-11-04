$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Swag Labs Login Feature",
  "description": "",
  "id": "swag-labs-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Swag Labs Login Test Scenario",
  "description": "",
  "id": "swag-labs-login-feature;swag-labs-login-test-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of login page is Swag Labs",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 6832467600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.title_of_login_page_is_Swag_Labs()"
});
formatter.result({
  "duration": 14975500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_enters_username_and_password()"
});
formatter.result({
  "duration": 238740800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 827054100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 320039400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_closes_the_browser()"
});
formatter.result({
  "duration": 60125300,
  "status": "passed"
});
});