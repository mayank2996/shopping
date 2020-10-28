import { browser, by, element} from "protractor";
import { AppPage } from "./app.po";

describe("workspace-project App", () => {
   it("should navigate to dashboard", () => {
  browser.get("http://localhost:4200/home");
  expect(browser.getCurrentUrl()).toContain("http://localhost:4200/home");
  element(by.name("userName")).sendKeys("mayank@infy.com");
  element(by.name("password")).sendKeys("Mayank.123");
  element(by.name("submit")).click();
  expect(browser.getCurrentUrl()).toContain("http://localhost:4200/dashboard");
  }),
  it("view-order page", () => {
    element(by.name("viewOrder")).click();
    expect(browser.getCurrentUrl()).toContain("http://localhost:4200/viewOrders");
  }),
  it("logout", () => {
    element(by.name("logout")).click();
    expect(browser.getCurrentUrl()).toContain("http://localhost:4200/home");
  });
});
