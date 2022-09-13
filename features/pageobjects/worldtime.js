import worldTimeApi from "../../helpers/world-time-api";

class worldTimePage {
  async getAllTimezones() {
    const allTimezones = await worldTimeApi.getData("");
    return allTimezones;
  }

  async getTimezoneByIndex(index) {
    const allTimezones = await this.getAllTimezones();
    const selectedTimeZone = allTimezones[index - 1];
    return selectedTimeZone;
  }

  async doesTimezoneExists(timezoneName) {
    const allTimezones = await this.getAllTimezones();
    const exists = allTimezones.filter((timezone) => timezone == timezoneName);
    return exists;
  }

  async getTimezoneByName(timezone) {
    const timezoneInfo = await worldTimeApi.getData(timezone);
    return timezoneInfo;
  }

  async getCurrentHourInTimezone(timezone) {
    const timezoneInfo = await this.getTimezoneByName(timezone);
    const currentHourInTimezone = timezoneInfo["datetime"];
    console.log(currentHourInTimezone);
    return currentHourInTimezone;
  }
}

export default new worldTimePage();
