package com.bddFramework_StepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on Login Page$")
	public void user_already_on_login_page() {		
		System.setProperty("webdriver.chrome.driver", "C://Users//Sen//eclipse-workspace//com.bddFramework_Cucumber//drivers//chromedriver.exe");
		driver = new ChromeDriver();
		//driver.manage().window().maximize();
		Dimension d = new Dimension(1382,744); 
		//Resize the current window to the given dimension
		driver.manage().window().setSize(d); 
		driver.get("https://www.saucedemo.com/");
	}
	
	@When("^Title of login page is Swag Labs$")
	public void title_of_login_page_is_Swag_Labs() {
	    String title = driver.getTitle();
	    System.out.println(title);
	    Assert.assertEquals("Swag Labs", title);
	}

	@Then("^user enters username and password$")
	public void user_enters_username_and_password() {
	    driver.findElement(By.id("user-name")).sendKeys("standard_user");
	    driver.findElement(By.id("password")).sendKeys("secret_sauce");
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button(){
		
		driver.findElement(By.id("login-button")).click();
	}

	@Then("^user is on homepage$")
	public void user_is_on_homepage(){
	    driver.findElement(By.xpath("//button[contains(text(),'Open Menu')]")).isDisplayed();
	    driver.findElement(By.xpath("//button[contains(text(),'Open Menu')]")).click();
	    driver.findElement(By.xpath("//a[@id='logout_sidebar_link']")).click();
	  
	}
	
		
	@Then("^user closes the browser$")
	public void user_closes_the_browser() {
	    driver.close();
	}

}
