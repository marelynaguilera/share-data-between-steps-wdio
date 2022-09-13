import { Given, When, Then } from "@wdio/cucumber-framework";
import { setValue, getValue } from "@wdio/shared-store-service";

import worldTimeApi from "../../helpers/world-time-api";
import worldTimePage from "../pageobjects/worldtime";

Given(/^I have a list of timezones$/, async () => {
  const searchResults = await worldTimeApi.getResponse("");
  await expect(searchResults.status).toBe(200);
});

When(/^I select the timezone in (.*)th position$/, async (position) => {
  const selectedTimezone = await worldTimePage.getTimezoneByIndex(position);
  console.log(selectedTimezone);
  await setValue("selectedTimezone", selectedTimezone);
});

Then(/^I should get the time for the selected timezone$/, async () => {
  const selectedTimezone = await getValue("selectedTimezone");
  const currentHourInTimezone = await worldTimePage.getCurrentHourInTimezone(
    selectedTimezone
  );
  await expect(currentHourInTimezone).toMatch(
    /^(?:\d{4})-(?:\d{2})-(?:\d{2})T(?:\d{2}):(?:\d{2}):(?:\d{2}(?:\.\d*)?)(?:(?:-(?:\d{2}):(?:\d{2})|Z)?)$/
  );
});

When(/^I search for the timezone "(.*)"$/, async (timezone) => {
  const timezoneExists = await worldTimePage.doesTimezoneExists(timezone);
  await setValue("timezoneExists", timezoneExists);
});

Then(/^I should get an empty response$/, async () => {
  const timezoneExists = await getValue("timezoneExists");
  await expect(timezoneExists).toStrictEqual([]);
});
