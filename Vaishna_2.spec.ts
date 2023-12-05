import { test,chromium} from "@playwright/test";

test("To launch the browser",async () => {

const browser = await chromium.launch({headless:false,channel:"chrome"});
const browserContext=await browser.newContext();
const page=await browser.newPage();
await page.goto("http://leaftaps.com/opentaps/control/main");
await page.locator('#username').fill("Demosalesmanager");
await page.locator('#password').fill("crmsfa");
await page.locator('.decorativeSubmit').click();

await page.waitForTimeout(1000);
await page.locator(".crmsfa").click();
await page.waitForTimeout(1000);
await page.locator("//a[text()='Create Lead']").click();

await page.locator("input.inputBox[name='companyName']").fill("infinity");
await page.locator("input.inputBox[name='firstName']").fill("Vaishna");
await page.locator("input.inputBox[name='lastName']").fill("Aravinth");
await page.locator(".smallSubmit").click();
await page.waitForTimeout(1000);

const url=await page.url();
const title=await page.title();
console.log("The url is"+url);

console.log("The title is"+title);
})