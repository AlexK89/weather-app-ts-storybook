import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ForecastList } from "components/ForecastList";

export default {
  title: "Forecast list",
  component: ForecastList,
} as ComponentMeta<typeof ForecastList>;

const Template: ComponentStory<typeof ForecastList> = (args) => (
  <ForecastList {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  forecastList: [
    {
      dt: 1649635200,
      main: {
        temp: 7.82,
        feels_like: 5.73,
        temp_min: 7.5,
        temp_max: 7.82,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 1013,
        humidity: 57,
        temp_kf: 0.32,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.26,
        deg: 117,
        gust: 10.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-04-11 00:00:00",
    },
    {
      dt: 1649721600,
      main: {
        temp: 10.6,
        feels_like: 9.99,
        temp_min: 10.6,
        temp_max: 10.6,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1004,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.81,
        deg: 117,
        gust: 4.62,
      },
      visibility: 10000,
      pop: 0.24,
      rain: {
        "3h": 0.53,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2022-04-12 00:00:00",
    },
  ],
};
